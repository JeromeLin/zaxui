# ActivityIndicator 活动指示器

## 基本用法

```jsx
import { Cell, ActivityIndicator } from 'zarm';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Cell description={<ActivityIndicator />}>普通</Cell>
        <Cell description={<ActivityIndicator className="rotate360" />}>旋转动画</Cell>
        <Cell description={<ActivityIndicator size="lg" />}>大号</Cell>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```


## API

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| strokeWidth | number | 5 | 指示器边框的宽度 |  
| percent | number | 20 | 初始百分比 |
| size | string | 'md' | 大小，可选值 `md`、`lg` |
