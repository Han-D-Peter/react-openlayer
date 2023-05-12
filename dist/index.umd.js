(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react/jsx-runtime'), require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react/jsx-runtime', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["react-openlayer"] = {}, global.jsxRuntime, global.react));
})(this, (function (exports, jsxRuntime, react) { 'use strict';

    function Map() {
      react.useState({});
      react.useEffect(() => {}, []);
      return jsxRuntime.jsx("div", {
        id: "map"
      });
    }

    exports.Map = Map;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
