# Fire Components

**仅适配了微信小程序。**

## 1. 组件

### 1.1 TabBar

## 2. Hooks

### 2.1 useBarHeight

用于获取微信小程序页面中各个 bar 的高度。

**API**：

```ts
const {       
  statusBarHeight,
  toolBarHeight,
  navigationBarHeight,
  navigationBarContentPadding,
  viewHeight,
  tabBarHeight, 
} = useBarHeight()
```

**参数说明**：

无需参数。

**返回值说明**：

| 值 | 类型 | 说明 |
| --- | --- | --- |
| statusBarHeight | `Number` | 状态栏高度 |
| toolBarHeight   | `Number` | 工具栏高度（Home Bar） |
| navigationBarHeight | `Number` | 导航栏高度 |
| navigationBarContentPadding | `Number` | 胶囊菜单距右侧的距离 |
| viewHeight | `Number` | 内容可呈现的高度，即页面除去 statusBar、toolBar、以及 tabBar 的高度 |
| tabBarHeight | `NUmber` | tabBar 高度 |


