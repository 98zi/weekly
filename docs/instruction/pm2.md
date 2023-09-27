# pm2

---

name == 文件名

::: tip
基于 node 环境的一种部署方式。
::: 

## 安装pm2

官网: https://pm2.keymetrics.io/  
文档: https://pm2.keymetrics.io/docs/usage/quick-start/

```shell
npm install pm2 -g
```

## 部署新服务

```shell
pm2 start npm --name "name" -- run start --watch
```

## 查看服务

```shell
pm2 ls
```

## 停止服务

```shell
pm2 stop 文件名
```

## 重启服务

```shell
pm2 restart 文件名
```

## 删除服务

```shell
pm2 delete 文件名
```

