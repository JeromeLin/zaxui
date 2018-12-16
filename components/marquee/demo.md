# 滚动 Marquee



## 基本用法
```jsx
import { Marquee, Cell } from 'zarm';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Cell>
          <Marquee width="100%" animationDelay={5000} animationDuration={20000}>
            <div>我延迟执行5秒，从右向左滚动，字有点多，我走慢点，领导先走~</div>
          </Marquee>
        </Cell>
        <Cell>
          <Marquee direction="right" width="100%">
            <div>我从左向右滚动</div>
          </Marquee>
        </Cell>
        <Cell>
          <Marquee direction="up" height={60}>
            <div>我</div>
            <div>从</div>
            <div>下</div>
            <div>往</div>
            <div>上</div>
            <div>滚</div>
            <div>动</div>
          </Marquee>
        </Cell>
         <Cell>
          <Marquee direction="down" height={60}>
            <div>我</div>
            <div>从</div>
            <div>上</div>
            <div>往</div>
            <div>下</div>
            <div>滚</div>
            <div>动</div>
          </Marquee>
        </Cell>
     </div>   
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```


## API

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| direction | 'left' \| 'right' \| 'up' \| 'down' |'left' | 方向 |
| width | number \| string | - |  容器宽度 |
| height | number \| string | - | 容器高度 |
| loop | boolean | true |是否循环 |
| animationDuration | number | 6000 | 动画执行时间（单位：毫秒） |
| animationDelay | number | 0 | 动画延迟执行时间（单位：毫秒） |

