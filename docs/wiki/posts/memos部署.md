# memos 部署

---

GitHub：https://github.com/usememos/memos

使用0.10.0版本最佳.

使用 docker 部署，数据文件映射在 /data/memos/ 下。

```shell
docker run -d --name memos -p 5230:5230 -v /data/memos/:/var/opt/memos neosmemo/memos:0.10.0
```

升级更新把容器和镜像删掉，重新执行命令。