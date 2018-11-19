const home = [
  { File: '' },
  { Edit: '' },
  { View: '' },
  { Catalog: '' },
  {
    Solution: [
      { Build: '/solution/build' },
      { Operate: '/solution/operate' },
      { Visualize: '/solution/visualize' },
    ],
  },
  { Metrics: '' },
  { Tools: '' },
  { Scripts: '' },
  { Help: '' },
];

const build = [
  { File: '' },
  { Edit: '' },
  { View: '' },
  {
    Build: [
      { Elicit: '/solution/build/elicit' },
      { Search: '/solution/build/search' },
      { Discover: '/solution/build/discover' },
      { Reuse: '/solution/build/reuse' },
      { Adapt: '/solution/build/adapt' },
      { Deploy: '/solution/build/deploy' },
    ],
  },
  { Operate: '/solution/operate' },
  { Visualize: '/solution/visualize' },
  { Help: '' },
];

const operate = [
  { File: '' },
  { Edit: '' },
  { View: '' },
  { Build: '/solution/build' },
  { Operate: '/solution/operate' },
  { Visualize: '/solution/visualize' },
  { Help: '' },
];

const visualize = [
  { File: '' },
  { Edit: '' },
  { View: '' },
  { Build: '/solution/build' },
  { Operate: '/solution/operate' },
  { Visualize: '/solution/visualize' },
  { Help: '' },
];

module.exports = (key) => {
  switch (key) {
    case 'solution':
    case 'solution/workspace':
    case '/solution/build':
      return build;
    case '/solution/build/search':
      return build;
    case '/solution/build/elicit':
      return build;
    case '/solution/build/discover':
      return build;
    case '/solution/build/discoverreview':
      return build;
    case '/solution/build/reuse':
      return build;
    case '/solution/build/adapt':
      return build;
    case '/solution/build/deploy':
      return build;
    case '/solution/operate':
      return operate;
    case '/solution/operaterun':
      return operate;
    case '/solution/visualize':
      return visualize;
    case '/solution/visreview':
      return visualize;
    default:
      return home;
  }
};
