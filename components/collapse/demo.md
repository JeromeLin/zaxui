# 折叠面板 Collapse



## 基本用法
```jsx
import { Collapse } from 'zarm';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Collapse>
          <Collapse.Item itemKey="1" title="50元套餐">
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </Collapse.Item>
          <Collapse.Item itemKey={2} title="100元套餐">
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </Collapse.Item>
          <Collapse.Item itemKey="3" title="200元套餐">
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
          </Collapse.Item>
        </Collapse>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```



## 手风琴模式
```jsx
import { Collapse } from 'zarm';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Collapse animated>
          <Collapse.Item itemKey="test1" title="50元套餐">
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </Collapse.Item>
          <Collapse.Item itemKey="test2" title="100元套餐">
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </Collapse.Item>
          <Collapse.Item itemKey="test3" title="200元套餐">
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
          </Collapse.Item>
        </Collapse>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```



## 默认展开项
```jsx
import { Collapse } from 'zarm';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Collapse defaultActiveKey={['test1', 'test2']} animated>
          <Collapse.Item itemKey="test1" title="50元套餐">
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </Collapse.Item>
          <Collapse.Item itemKey="test2" title="100元套餐">
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </Collapse.Item>
          <Collapse.Item itemKey="test3" title="200元套餐">
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
          </Collapse.Item>
        </Collapse>
      </div>
    )
  }
}


ReactDOM.render(<Demo />, mountNode);
```



## 允许展开多项
```jsx
import { Collapse } from 'zarm';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Collapse animated multiple defaultActiveKey={['test1', 'test3']}>
          <Collapse.Item itemKey="test1" title="50元套餐">
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </Collapse.Item>
          <Collapse.Item itemKey="test2" title="100元套餐">
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </Collapse.Item>
          <Collapse.Item itemKey="test3" title="200元套餐">
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
          </Collapse.Item>
        </Collapse>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```



## 禁用子项
```jsx
import { Collapse } from 'zarm';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Collapse 
          multiple
          activeKey={['test2']}
          onChange={key => console.log(key)}
        >
          <Collapse.Item itemKey="test1" title="50元套餐">
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
            <div>我是50元套餐内容</div>
          </Collapse.Item>
          <Collapse.Item itemKey="test2" title="100元套餐" disabled>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
            <div>我是100元套餐内容</div>
          </Collapse.Item>
          <Collapse.Item itemKey="test3" title="200元套餐" disabled>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
            <div>我是200元套餐内容</div>
          </Collapse.Item>
        </Collapse>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```



## API

## Collapse
| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| multiple | boolean | false | 是否可以同时展开多项 |
| animated | boolean | false | 是否添加展开动画 |
| activeKey | string \| number \| string[] \| number[] | [] | 动态更新展开项的索引数组或字符串或数字 |
| defaultActiveKey | string \| number \| string[] \| number[] | [] | 初始化默认展开项的索引数组或字符串或数字 |
| onChange | (activeKey?: string \| number) => void | - | 点击某一项的回调函数 |

## Collapse.Item
| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| title | ReactNode | - | 每一项的名称 |
| itemKey | string \| number | - | 对应activeKey |
| disabled | boolean | false | 是否禁用 |
| onItemChange | (itemKey?: string \| number) => void | - | 点击某一项的回调函数 |
