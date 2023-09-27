# nvm

---

使用 nvm 管理不同版本的 node 与 npm，可以使用 nvm 来回切换 node 版本。在开发过程中遇到依赖安装失败，通常都是 node 版本的问题，这个时候可以使用 nvm 切换，非常方便。

## 安装 nvm

下载地址 - https://github.com/coreybutler/nvm-windows/releases

选择 nvm-setup.exe 下载安装。

## 指令

```shell
# 查看已安装的 node 版本
nvm ls

# 安装 node 14.15.1
nvm install 14.15.1

# 使用 node 14.15.1
nvm use 14.15.1

# 卸载 node 14.15.1
nvm uninstall 14.15.1
```