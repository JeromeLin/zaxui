(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{735:function(n,t,e){"use strict";e.r(t),t.default='# Affix \u7ec4\u4ef6\u540d\n\n## \u57fa\u672c\u7528\u6cd5\n\n```jsx\nimport { Affix, Cell, Button, Switch } from \'zarm\';\nconst { useState, useCallback } = React;\n\nconst Demo = () => {\n  const [affixed, setAffixed] = useState(true);\n\n  return (\n    <>\n      <Cell\n        title="\u662f\u5426\u542f\u7528 Affix"\n        description={<Switch checked={affixed} onChange={setAffixed} />}\n      />\n      {affixed ? (\n        <>\n          <Affix offsetTop={20}>\n            <Button theme="primary">Top</Button>\n          </Affix>\n          <div className="seperator" />\n          <Affix offsetBottom={20}>\n            <Button theme="primary">Bottom</Button>\n          </Affix>\n        </>\n      ) : (\n        <>\n          <Button theme="primary">Top</Button>\n          <div className="seperator" />\n          <Button theme="primary">Bottom</Button>\n        </>\n      )}\n    </>\n  );\n};\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n## \u6eda\u52a8\u5bb9\u5668\n\n```jsx\nimport { useState } from \'react\';\nimport { Affix, Button } from \'zarm\';\n\nconst Demo = () => {\n  const [container, setContainer] = useState(null);\n\n  return (\n    <div className="scrollable-container" ref={setContainer}>\n      <div className="background">\n        <Affix scrollContainer={() => container}>\n          <Button theme="primary">\u6839\u636e\u6eda\u52a8\u5bb9\u5668\u9876\u90e8\u56fa\u5b9a</Button>\n        </Affix>\n      </div>\n    </div>\n  );\n};\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n## API\n\n| \u5c5e\u6027            | \u7c7b\u578b                                         | \u9ed8\u8ba4\u503c | \u8bf4\u660e                                                                   |\n| :-------------- | :------------------------------------------- | :----- | :--------------------------------------------------------------------- |\n| offsetTop       | number                                       | -      | \u8ddd\u79bb\u7a97\u53e3\u9876\u90e8\u8fbe\u5230\u6307\u5b9a\u504f\u79fb\u91cf\u540e\u89e6\u53d1                                       |\n| offsetBottom    | number                                       | -      | \u8ddd\u79bb\u7a97\u53e3\u5e95\u90e8\u8fbe\u5230\u6307\u5b9a\u504f\u79fb\u91cf\u540e\u89e6\u53d1                                       |\n| scrollContainer | HTMLElement \\| (() => HTMLElement) \\| Window | window | \u8bbe\u7f6e `Affix` \u9700\u8981\u76d1\u542c\u5176\u6eda\u52a8\u4e8b\u4ef6\u7684\u5143\u7d20\uff0c\u503c\u4e3a\u4e00\u4e2a\u8fd4\u56de\u5bf9\u5e94 DOM \u5143\u7d20\u7684\u51fd\u6570 |\n| onChange        | (affixed: boolean) => void                   | -      | \u56fa\u5b9a\u72b6\u6001\u6539\u53d8\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570                                           |\n'}}]);
//# sourceMappingURL=36.ceb6c8e8.js.map