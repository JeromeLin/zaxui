module.exports = {
  UIFORM: [
    {
      title: 'Stepper',
      description: '步进器',
      module: require('./pages/StepperPage'),
    },
  ],
  UICONROL: [
    {
      title: 'ActionSheet',
      description: '动作面板',
      module: require('./pages/ActionSheet'),
    },
    {
      title: 'SwipeAction',
      description: '滑动操作',
      module: require('./pages/SwipeActionPage'),
    },
    {
      title: 'Button',
      description: '按钮',
      module: require('./pages/ButtonPage'),
    },
    {
      title: 'Popup',
      description: '弹出框',
      module: require('./pages/PopupPage'),
    },
  ],
  UIVIEW: [
    {
      title: 'Panel',
      description: '面板',
      module: require('./pages/PanelPage'),
    },
    {
      title: 'Cell',
      description: '列表项',
      module: require('./pages/CellPage'),
    },
  ],
};
