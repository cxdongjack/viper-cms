# 概述
本项目用于cms的后端，提供key-value的存储，以及请求转发功能

# TODO

## 当前为原型版本

## 持久化
原型版本使用TingoDb，使用文件存储，后期可以考虑迁移

## 目标功能
- 实现collection的增删改查功能
- 实现API的转发功能

# 测试用例
```
# curd
curl -is -X POST --data "a=2" http://localhost:8081/collection
curl -is http://localhost:8081/collection/4
curl -is -X PATCH --data "a=3" http://localhost:8081/collection/4
curl -is -X DELETE http://localhost:8081/collection/4

# proxy
curl -is -X POST --data-urlencode 'url=http://dushu.xiaomi.com/store/v0/fiction/list/11730?start=0&count=1' http://localhost:8081/proxy
```

# 术语表

## collection
key-value的存储容器
