# vue2_low_code

## Project setup

```
pnpm install
```

### Compiles and hot-reloads for development

```
# http://localhost:6689/editor.html?page=eslint
# http://localhost:6689/h5.html

pnpm run serve
```

### Compiles and minifies for production

```
# http://xxxx/editor.html
# http://xxxx/h5.html

pnpm run build
```

## 注意事项

### 组件样式 `postision: fixed`

需要为根组件，不能嵌套在其他 `children` 里面。因为在编辑模式下，需要让 fixed。
