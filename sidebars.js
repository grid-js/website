module.exports = {
  sidebar: {
    Introduction: ['index', 'philosophy', 'roadmap', 'community', 'license'],
    Usage: [
      'install',
      'hello-world',
      'config'
    ],
    Examples: [{
      type: 'category',
      label: 'Basic',
      items: [
        'examples/hello-world',
        'examples/from',
        'examples/pagination',
        'examples/search',
        'examples/sorting',
        'examples/loading-state',
        'examples/wide-table',
      ]
    }, {
      type: 'category',
      label: 'Data Source',
      items: [
        'examples/import-function',
        'examples/import-async',
        'examples/server',
        'examples/from',
      ]
    }, {
      type: 'category',
      label: 'Advanced',
      items: [
        'examples/cell-formatting',
        'examples/html-cells',
      ]
    }]
  },
};
