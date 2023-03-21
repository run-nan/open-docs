FROM centos:centos7.9.2009 AS python-builder

RUN yum -y install wget epel-release make
RUN wget https://www.python.org/ftp/python/3.6.5/Python-3.6.5.tar.xz
RUN yum -y install gcc patch libffi-devel python-devel zlib-devel \
    bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel \
    tk-devel gdbm-devel db4-devel libpcap-devel xz-devel

RUN xz -d Python-3.6.5.tar.xz && tar -xf Python-3.6.5.tar && \
    cd Python-3.6.5 && ./configure --prefix=/opt/python3.6.5 && \
    make -j4 && make install
    
FROM centos:centos7.9.2009

COPY --from=python-builder /opt/python3.6.5 /opt/python3.6.5

RUN ln -s /opt/python3.6.5/bin/python3 /usr/bin/python3 && \
    ln -s /opt/python3.6.5/bin/pip3 /usr/bin/pip3 && \
    pip3 install --upgrade pip && \
    pip3 install requests

RUN yum install -y yum-utils tree wget

RUN yum-config-manager --add-repo https://cli.github.com/packages/rpm/gh-cli.repo && \
    yum -y install gh

RUN wget -q https://dl.min.io/client/mc/release/linux-amd64/mc && \
    chmod +x mc && \
    mv mc /usr/local/bin/

ADD download_release_asset.py /scripts/

CMD ["/bin/bash"]
