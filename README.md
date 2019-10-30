<p align="center">
  <a href="http://zarm.design">
    <img width="200" src="https://zarm.design/images/logo.ce68565d.svg">
  </a>
</p>

<h1 align="center">Zarm</h1>

<div align="center">

  [![Build Status](https://www.travis-ci.org/ZhonganTechENG/zarm.svg?branch=master)](https://www.travis-ci.org/ZhonganTechENG/zarm)
  [![Financial Contributors on Open Collective](https://opencollective.com/zarm/all/badge.svg?label=financial+contributors)](https://opencollective.com/zarm) [![Coverage Status](https://img.shields.io/coveralls/ZhonganTechENG/zarm/master.svg)](https://coveralls.io/github/ZhonganTechENG/zarm?branch=master)
  [![npm package](https://img.shields.io/npm/v/zarm.svg)](https://www.npmjs.org/package/zarm)
  [![NPM downloads](https://img.shields.io/npm/dm/zarm.svg)](https://npmjs.org/package/zarm) 
  ![JS gzip size](https://img.badgesize.io/https://unpkg.com/zarm@latest/dist/zarm.min.js?compression=gzip&label=gzip%20size:%20JS)
  ![CSS gzip size](https://img.badgesize.io/https://unpkg.com/zarm@latest/dist/zarm.min.css?compression=gzip&label=gzip%20size:%20CSS)

  众安科技移动端UI组件库，基于React、React-Native。
</div>

## Version 版本

- 稳定版：[![npm package](https://img.shields.io/npm/v/zarm.svg)](https://www.npmjs.org/package/zarm)
- 开发版：[![npm package](https://img.shields.io/npm/v/zarm/alpha.svg)](https://www.npmjs.org/package/zarm)


## Install 安装


使用npm安装：
```bash
npm install zarm --save
```

或者通过cdn引入umd模块：
```html
<link rel="stylesheet" href="https://unpkg.com/zarm@latest/dist/zarm.min.css">
<script type="text/javascript" src="https://unpkg.com/zarm@latest/dist/zarm.min.js"></script>
```

## Usage 使用

### 全组件引入

```js
import { Button, Cell } from 'zarm';
import 'zarm/dist/zarm.min.css';
```

### 按需加载

- 方法一（推荐）

> 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 自动加载Sass文件

```js
  // .babelrc or babel-loader option
  {
    "plugins": [
      ['import', {
        libraryName: 'zarm',
        style: true,
      }],
    ]
  }
```

```js
import { Button, Cell } from 'zarm';
```

- 方法二：

```js
import Button from 'zarm/lib/Button';
import 'zarm/lib/Button/style';
```

### 定制主题

通过修改css变量定义达到定制主题的效果

```js
document.documentElement.style.setProperty('--theme-primary', '#108ee9');
```

变量名可参考 [default.scss](https://github.com/ZhonganTechENG/zarm/blob/dev/components/style/themes/default.scss)

## Changelog 更新日志

[CHANGELOG.md](https://github.com/ZhonganTechENG/zarm/blob/master/CHANGELOG.md)

## Contributors

### Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/ZhonganTechENG/zarm/graphs/contributors"><img src="https://opencollective.com/zarm/contributors.svg?width=890&button=false" /></a>

### Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/zarm/contribute)]

#### Individuals

<a href="https://opencollective.com/zarm"><img src="https://opencollective.com/zarm/individuals.svg?width=890"></a>

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. [[Contribute](https://opencollective.com/zarm/contribute)]

<a href="https://opencollective.com/zarm/organization/0/website"><img src="https://opencollective.com/zarm/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/zarm/organization/1/website"><img src="https://opencollective.com/zarm/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/zarm/organization/2/website"><img src="https://opencollective.com/zarm/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/zarm/organization/3/website"><img src="https://opencollective.com/zarm/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/zarm/organization/4/website"><img src="https://opencollective.com/zarm/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/zarm/organization/5/website"><img src="https://opencollective.com/zarm/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/zarm/organization/6/website"><img src="https://opencollective.com/zarm/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/zarm/organization/7/website"><img src="https://opencollective.com/zarm/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/zarm/organization/8/website"><img src="https://opencollective.com/zarm/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/zarm/organization/9/website"><img src="https://opencollective.com/zarm/organization/9/avatar.svg"></a>

## License

MIT
