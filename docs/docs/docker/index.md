# Docker

## 1.docker-compose

```shell
docker-compose up -d  # 运行容器

docker-compose restart  # 重启容器
docker-compose stop     # 暂停容器
docker-compose down     # 删除容器
docker-compose pull     # 更新镜像
docker-compose exec artalk bash # 进入容器
```

## docker

```shell
# 查看所有容器
docker ps
docker images
```

```shell
# 删除容器
docker rm -f <containerid>
docker rm -f 8370df6822d9
```