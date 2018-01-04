(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var GraphInputAction = function GraphInputAction() {
  _classCallCheck(this, GraphInputAction);

  this.generateActions('updateData', 'updateMax', 'updateCfg');
};

exports['default'] = _alt2['default'].createActions(GraphInputAction);
module.exports = exports['default'];

},{"../alt":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var HomeAction = (function () {
  function HomeAction() {
    _classCallCheck(this, HomeAction);

    this.generateActions('sendDone', 'sendFail');
  }

  _createClass(HomeAction, [{
    key: 'get',
    value: function get() {
      var self = this;
      var fun1 = $.ajax({ url: "/json/audience.json", type: 'GET' }),
          fun2 = $.ajax({ url: "/json/bandwidth.json", type: 'GET' }),
          fun3 = $.ajax({ url: "/json/country.json", type: 'GET' }),
          fun4 = $.ajax({ url: "/json/isp.json", type: 'GET' }),
          fun5 = $.ajax({ url: "/json/platform.json", type: 'GET' }),
          fun6 = $.ajax({ url: "/json/streams.json", type: 'GET' }),
          fun7 = $.ajax({ url: "/json/usage.json", type: 'GET' });
      $.when(fun1, fun2, fun3, fun4, fun5, fun6, fun7).then(function (data1, data2, data3, data4, data5, data6, data7) {
        self.actions.sendDone({
          audience: data1[0],
          bandwidth: data2[0],
          country: data3[0],
          isp: data4[0],
          platform: data5[0],
          streams: data6[0],
          usage: data7[0]
        });
      }, function (err) {
        self.actions.sendFail(err);
      });
    }
  }]);

  return HomeAction;
})();

exports['default'] = _alt2['default'].createActions(HomeAction);
module.exports = exports['default'];

},{"../alt":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_reactRouter.RouteHandler, null)
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Graph_Chart = (function (_React$Component) {
  _inherits(Graph_Chart, _React$Component);

  function Graph_Chart(props) {
    _classCallCheck(this, Graph_Chart);

    _get(Object.getPrototypeOf(Graph_Chart.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Graph_Chart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'updateData',
    value: function updateData(cfg) {
      new Chart($("#" + this.props.index)[0].getContext('2d'), cfg);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement('canvas', { id: this.props.index })
      );
    }
  }]);

  return Graph_Chart;
})(_react2['default'].Component);

exports['default'] = Graph_Chart;
module.exports = exports['default'];

},{"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storesGraphInputStore = require('../stores/GraphInputStore');

var _storesGraphInputStore2 = _interopRequireDefault(_storesGraphInputStore);

var _actionsGraphInputAction = require('../actions/GraphInputAction');

var _actionsGraphInputAction2 = _interopRequireDefault(_actionsGraphInputAction);

var Graph_Chart_Input = (function (_React$Component) {
    _inherits(Graph_Chart_Input, _React$Component);

    function Graph_Chart_Input(props) {
        _classCallCheck(this, Graph_Chart_Input);

        _get(Object.getPrototypeOf(Graph_Chart_Input.prototype), 'constructor', this).call(this, props);
        this.state = _storesGraphInputStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Graph_Chart_Input, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesGraphInputStore2['default'].listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _storesGraphInputStore2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
            if (window.chart != null) window.chart.destroy();
            window.chart = new Chart($("#" + this.props.index)[0].getContext('2d'), this.state.cfg);
        }
    }, {
        key: 'onSelectChange',
        value: function onSelectChange(e) {
            var element = $("#sel1")[0];
            var selected = element.options[element.selectedIndex].value;
            var cfg = this.state.cfg;
            var country = this.state.data.filter(function (i) {
                return i.country == selected;
            })[0];
            if (selected == 'All') {
                country = { 'cdn': this.state.max.cdn, 'p2p': this.state.max.p2p };
            }
            cfg.data.datasets[0].data = [country.cdn, country.p2p];
            _actionsGraphInputAction2['default'].updateCfg(cfg);
        }
    }, {
        key: 'updateData',
        value: function updateData(cfg, data) {
            setTimeout(function () {
                var cdn = data.reduce(function (prevVal, elem) {
                    return prevVal + elem.cdn;
                }, 0);
                var p2p = data.reduce(function (prevVal, elem) {
                    return prevVal + elem.p2p;
                }, 0);
                cfg.data.datasets[0].data = [cdn, p2p];
                _actionsGraphInputAction2['default'].updateData(data);
                _actionsGraphInputAction2['default'].updateCfg(cfg);
                _actionsGraphInputAction2['default'].updateMax({ cdn: cdn, p2p: p2p });
            }, 10);
        }
    }, {
        key: 'render',
        value: function render() {
            var options = null;
            if (this.state.data != null) {
                options = this.state.data.map(function (i, index) {
                    return _react2['default'].createElement(
                        'option',
                        { key: index },
                        i['country']
                    );
                });
            }
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'div',
                    { className: 'form-group' },
                    _react2['default'].createElement(
                        'label',
                        { htmlFor: 'sel1' },
                        'Select list:'
                    ),
                    _react2['default'].createElement(
                        'select',
                        { className: 'form-control', onChange: this.onSelectChange.bind(this), id: 'sel1' },
                        _react2['default'].createElement(
                            'option',
                            null,
                            'All'
                        ),
                        options
                    )
                ),
                _react2['default'].createElement('canvas', { id: this.props.index })
            );
        }
    }]);

    return Graph_Chart_Input;
})(_react2['default'].Component);

exports['default'] = Graph_Chart_Input;
module.exports = exports['default'];

},{"../actions/GraphInputAction":1,"../stores/GraphInputStore":10,"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsHomeAction = require('../actions/HomeAction');

var _actionsHomeAction2 = _interopRequireDefault(_actionsHomeAction);

var _storesHomeStore = require('../stores/HomeStore');

var _storesHomeStore2 = _interopRequireDefault(_storesHomeStore);

var _Graph_Chart = require('./Graph_Chart');

var _Graph_Chart2 = _interopRequireDefault(_Graph_Chart);

var _Graph_Chart_Input = require('./Graph_Chart_Input');

var _Graph_Chart_Input2 = _interopRequireDefault(_Graph_Chart_Input);

var Home = (function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
    this.state = _storesHomeStore2['default'].getState();
    this.onChange = this.onChange.bind(this);
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesHomeStore2['default'].listen(this.onChange);
      _actionsHomeAction2['default'].get();
    }
  }, {
    key: 'platform',
    value: function platform() {
      var _this = this;

      var labels = ['cdn', 'p2p', 'upload'];
      var colors = Object.keys(window.chartColors).slice(0, labels.length);
      var chartData = {
        labels: this.state.data.platform.map(function (i) {
          return i.platform;
        }),
        datasets: labels.map(function (label, index) {
          return {
            label: label,
            backgroundColor: colors[index],
            borderWidth: 1,
            data: _this.state.data.platform.map(function (i) {
              return i[label];
            })
          };
        })
      };
      var config = {
        type: 'bar',
        data: chartData,
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'platform chart'
          },
          onClick: function onClick(evt, elements) {
            console.log(elements);
          },
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Platform'
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Bytes'
              }
            }]
          }
        }
      };
      this.refs.graph.updateData(config);
    }
  }, {
    key: 'bandwidth',
    value: function bandwidth() {
      var _this2 = this;

      var time = this.state.data.bandwidth.cdn.map(function (i) {
        var date = new Date(i[0]);
        return (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
      });
      var labels = ['cdn', 'p2p'];
      var colors = Object.keys(window.chartColors).slice(0, labels.length * 2);
      var chartData = {
        labels: time,
        datasets: [].concat(_toConsumableArray(labels.map(function (label, index) {
          return {
            label: label + "_bandwidth",
            backgroundColor: colors[index],
            borderColor: colors[index],
            data: _this2.state.data.bandwidth[label].map(function (i) {
              return i[1];
            }),
            fill: false,
            yAxisID: "y-axis-1"
          };
        })), _toConsumableArray(labels.map(function (label, index) {
          return {
            label: label + "_viewer",
            backgroundColor: colors[index + 2],
            borderColor: colors[index + 2],
            data: _this2.state.data.audience.audience.map(function (i) {
              return i[1];
            }),
            fill: false,
            yAxisID: "y-axis-2"
          };
        })))
      };
      var cfg = {
        type: 'line',
        data: chartData,
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Bandwidth Chart'
          },
          tooltips: {
            mode: 'index',
            intersect: false
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Time'
              }
            }],
            yAxes: [{
              id: "y-axis-1",
              type: "linear",
              position: "left",
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Bytes'
              }
            }, {
              id: "y-axis-2",
              type: "linear",
              position: "right",
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Bytes'
              }
            }]
          }
        }
      };
      this.refs.graph2.updateData(cfg);
    }
  }, {
    key: 'country',
    value: function country() {
      var cfg = {
        type: 'pie',
        data: {
          datasets: [{
            backgroundColor: [window.chartColors.red, window.chartColors.orange],
            label: 'Dataset 1'
          }],
          labels: ["CDN", "P2P"]
        },
        options: {
          responsive: true
        }
      };
      this.refs.graph3.updateData(cfg, this.state.data.country);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesHomeStore2['default'].unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
      this.platform();
      this.bandwidth();
      this.country();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          _react2['default'].createElement(
            'div',
            { className: 'col-sm-6 col-md-6' },
            _react2['default'].createElement(_Graph_Chart2['default'], { index: "c1", ref: 'graph' })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-sm-6 col-md-6' },
            _react2['default'].createElement(_Graph_Chart_Input2['default'], { index: "c3", ref: 'graph3' })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-sm-6 col-md-12' },
            _react2['default'].createElement(_Graph_Chart2['default'], { index: "c2", ref: 'graph2' })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-sm-6 col-md-6' },
            _react2['default'].createElement(_Graph_Chart2['default'], { index: "c4", ref: 'graph4' })
          )
        )
      );
    }
  }]);

  return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];

},{"../actions/HomeAction":2,"../stores/HomeStore":11,"./Graph_Chart":5,"./Graph_Chart_Input":6,"react":"react"}],8:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
  _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
});

},{"./routes":9,"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsHome = require('./components/Home');

var _componentsHome2 = _interopRequireDefault(_componentsHome);

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { handler: _componentsApp2['default'] },
  _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsHome2['default'] })
);
module.exports = exports['default'];

},{"./components/App":4,"./components/Home":7,"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsGraphInputAction = require('../actions/GraphInputAction');

var _actionsGraphInputAction2 = _interopRequireDefault(_actionsGraphInputAction);

var GraphInputStore = (function () {
  function GraphInputStore() {
    _classCallCheck(this, GraphInputStore);

    this.bindActions(_actionsGraphInputAction2['default']);
    this.data = null;
    this.max = null;
    this.cfg = null;
  }

  _createClass(GraphInputStore, [{
    key: 'onUpdateData',
    value: function onUpdateData(data) {
      this.data = data;
      toastr.success("Successed222");
    }
  }, {
    key: 'onUpdateMax',
    value: function onUpdateMax(data) {
      this.max = data;
    }
  }, {
    key: 'onUpdateCfg',
    value: function onUpdateCfg(cfg) {
      this.cfg = cfg;
    }
  }]);

  return GraphInputStore;
})();

exports['default'] = _alt2['default'].createStore(GraphInputStore);
module.exports = exports['default'];

},{"../actions/GraphInputAction":1,"../alt":3}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsHomeAction = require('../actions/HomeAction');

var _actionsHomeAction2 = _interopRequireDefault(_actionsHomeAction);

var HomeStore = (function () {
  function HomeStore() {
    _classCallCheck(this, HomeStore);

    this.bindActions(_actionsHomeAction2['default']);
    this.data = null;
  }

  _createClass(HomeStore, [{
    key: 'onSendDone',
    value: function onSendDone(data) {
      this.data = data;
      toastr.success("Successed");
    }
  }, {
    key: 'onSendfail',
    value: function onSendfail(data) {
      toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
  }]);

  return HomeStore;
})();

exports['default'] = _alt2['default'].createStore(HomeStore);
module.exports = exports['default'];

},{"../actions/HomeAction":2,"../alt":3}]},{},[8]);
