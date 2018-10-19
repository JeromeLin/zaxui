## 工具提示 Tooltip



### 基本用法
```jsx
import { Tooltip, Cell, Button } from 'zarm';

class Demo extends React.Component {

  render() {
    return (
      <Cell>
        <Tooltip visible={true} message={'消息'}>
          <div>工具提示</div>
        </Tooltip>
      </Cell>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```


### API

| 属性      | 类型                | 默认值   | 可选值／参数 | 说明       |
| :-------- | :------------------ | :------- | :----------- | :--------- |
| prefixCls | string              | za-toast |              | 类名前缀   |
| className | string              |          |              | 追加类名   |
| visible   | boolean             | false    |              | 是否显示   |
| message   | React.ReactNode     |          |              | 内容       |
| style     | React.CSSProperties | noop     |              | 自定义样式 |
