import requests
import shutil
import sys

token = ""
base_url = "https://api.github.com/repos"


def get_tag_asset_url(repo, tag):
    url = f"{base_url}/{repo}/releases/tags/{tag}"
    headers = {
        "Accept": "application/vnd.github+json",
        "Authorization": f"Bearer {token}"
    }
    resp = requests.get(url, headers=headers, timeout=10)
    if resp.status_code != 200:
        raise Exception(resp.text)
    resp_json = resp.json()
    assets = resp_json.get("assets", [])
    if len(assets) == 0:
        raise Exception(f"not found {tag} assets")
    asset_url = ""
    asset_time = ""
    for asset in assets:
        name = asset.get("name", "")
        if f"-{tag}" not in name:
            continue
        current_time = asset.get("created_at", "")
        if asset_time == "":
            asset_url = asset.get("url", "")
            asset_time = current_time
        elif current_time > asset_time:
            asset_url = asset.get("url", "")
            asset_time = current_time
    return asset_url, name


def download_url(repo, tag, dir_name):
    url, file_name = get_tag_asset_url(repo, tag)
    with open(f"{dir_name}/{file_name}", "wb") as f:
        headers = {
            "Accept": "application/octet-stream",
            "Authorization": f"Bearer {token}"
        }
        resp = requests.get(url, headers=headers, stream=True)
        if resp.status_code != 200:
            raise Exception(resp.text)
        shutil.copyfileobj(resp.raw, f)


if __name__ == "__main__":
    argv = sys.argv[1:]
    for i in argv:
        if i == '-h' or i == '--help':
            print('please input 4 params: token, org/repo, release-tag, save_dir. \n\teg. python3 download_release_asset.py token BangWork/open-docs v1.0.0 ./')
            exit()
    if len(argv) < 4:
        raise Exception('please input 4 params: token, org/repo, release-tag, save_dir. \n\teg. python3 download_release_asset.py token BangWork/open-docs v1.0.0 ./')
    token = argv[0]
    current_repo = argv[1]
    current_tag = argv[2]
    current_dir = argv[3]
    download_url(current_repo, current_tag, current_dir)

