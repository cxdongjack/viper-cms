# 概述
本项目用于cms的后端，提供key-value的存储，以及请求转发功能

# TODO

## 当前为原型版本

## 持久化
原型版本使用TingoDb，使用文件存储，后期可以考虑迁移

## 目标功能
- 实现page的增删改查
- 实现API的转发功能

# 测试用例
curl -is -X POST --data "a=2" http://localhost:8080/scheme/4
curl -is http://localhost:8080/scheme/4
curl -is -X PATCH --data "a=3" http://localhost:8080/scheme/4
curl -is -X DELETE http://localhost:8080/scheme/4

# 术语表

## project
project是page的容器

## page
存储页面的scheme
