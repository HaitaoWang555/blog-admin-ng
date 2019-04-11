## 项目构建

我们先构建一个新项目，然后在这个项目里安装 ng-zorro。

```bash
$ ng new blog-admin-ng
$ cd blog-admin-ng
$ ng add ng-zorro-antd
```

## 修改默认配置

```json
  // generate component without spec
"schematics": {
    "@schematics/angular:component": {
      "spec": false
    }
}
```

### generate routing

```bash
// --flat 把这个文件放进了 src/app 中，而不是单独的目录中
// --module=app 告诉 CLI 把它注册到 AppModule 的 imports 数组中。
$ ng g module app-routing --flat --module=app
```

### generate module

```bash
// 在 src/app/pages 目录下生成新的 module
ng g module pages/dashboard
```

### generate component

```bash
// 在 src/app/pages/dashboard 目录下生成新的 component
ng g component pages/dashboard
// 生成dashboard-routing
ng g module pages/dashboard/dashboard-routing --flat  --module=pages/dashboard
```

## important

1. 每个 module 都必须重新引入相关依赖 而不是只在 `app.module` 中引入

## 启用 hmr

[hmr](https://github.com/angular/angular-cli/wiki/stories-configure-hmr)
