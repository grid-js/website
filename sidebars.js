module.exports = {
  sidebar: {
    Introduction: ['index', 'philosophy', 'roadmap', 'community', 'license'],
    Usage: [
      'install',
      'hello-world',
      'config',
      'server-side',
    ],
    Config: [
      'config/data',
      'config/from',
      'config/columns',
      'config/server',
      'config/width',
      'config/autoWidth',
      'config/search',
      'config/sort',
      'config/pagination',
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
      label: 'Server-side',
      items: [
        'examples/server',
        'examples/server-side-search',
        'examples/server-side-pagination',
        'examples/server-side-sort',
      ]
    }, {
      type: 'category',
      label: 'Advanced',
      items: [
        'examples/force-render',
        'examples/cell-formatting',
        'examples/html-cells',
        'examples/multi-sort',
        'examples/custom-sort',
      ]
    }]
  },
};
