'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

function Map() {
  react.useState({});
  react.useEffect(() => {}, []);
  return jsxRuntime.jsx("div", {
    id: "map"
  });
}

module.exports = Map;
