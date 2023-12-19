/**
 * semantic-release  配置文件文档链接 https://github.com/cycjimmy/semantic-release-action
 */
module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        /**
         * 版本号变更规则
         * 扫描 `commit message`
         * 如下，如果是docs: xxx， 加入当前版本是1.0.0，则执行patch->1.0.1，优先级 major > minor > patch
         */
        releaseRules: [
          { type: 'feat', release: 'minor' },
          { type: 'docs', release: 'patch' },
          { type: 'fix', release: 'patch' },
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        // 注意此处不能改为 `angular`, 下面规则将无法覆盖
        preset: 'conventionalcommits',
        presetConfig: {
          /**
           * changelog 显示分类
           */
          types: [
            { type: 'feat', section: 'Features' },
            { type: 'docs', section: 'Features' },
            { type: 'fix', section: 'Fixes' },
          ],
          writerOpts: {
            commitsSort: ['subject', 'scope'],
          },
        },
      },
    ],
    '@semantic-release/git',
    [
      '@semantic-release/github',
      {
        assets: [{ path: './artifacts.tar.gz', name: 'open-docs-v${nextRelease.version}.tar.gz' }],
      },
    ],
  ],
}
