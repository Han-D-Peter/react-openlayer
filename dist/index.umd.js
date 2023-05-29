(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react/jsx-runtime'), require('react'), require('ol/interaction'), require('ol/layer/Vector'), require('ol/source/Vector'), require('ol/style/Style'), require('ol/style'), require('ol/proj'), require('@emotion/styled'), require('@emotion/react'), require('ol/style/Fill'), require('ol/style/Stroke'), require('ol/style/Text'), require('ol/style/Icon'), require('ol/interaction/Draw'), require('ol/events/condition'), require('ol/control'), require('ol/geom/Circle'), require('ol/Feature'), require('ol/geom'), require('ol/source'), require('ol/layer/Tile'), require('ol/format/GeoJSON'), require('ol/proj/proj4'), require('ol/layer'), require('lodash/concat')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react/jsx-runtime', 'react', 'ol/interaction', 'ol/layer/Vector', 'ol/source/Vector', 'ol/style/Style', 'ol/style', 'ol/proj', '@emotion/styled', '@emotion/react', 'ol/style/Fill', 'ol/style/Stroke', 'ol/style/Text', 'ol/style/Icon', 'ol/interaction/Draw', 'ol/events/condition', 'ol/control', 'ol/geom/Circle', 'ol/Feature', 'ol/geom', 'ol/source', 'ol/layer/Tile', 'ol/format/GeoJSON', 'ol/proj/proj4', 'ol/layer', 'lodash/concat'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["react-openlayer"] = {}, global.jsxRuntime, global.React, global.interaction, global.VectorLayer, global.VectorSource, global.Style, global.style, global.proj, global.styled, global.react, global.Fill, global.Stroke, global.Text, global.Icon, global.Draw, global.condition, global.control, global.Circle, global.Feature$2, global.geom, global.source, global.OlTileLayer, global.GeoJSON, global.proj4$1, global.layer, global.concat));
})(this, (function (exports, jsxRuntime, React, interaction, VectorLayer, VectorSource, Style, style, proj, styled, react, Fill, Stroke, Text, Icon, Draw, condition, control, Circle, Feature$2, geom, source, OlTileLayer, GeoJSON, proj4$1, layer, concat) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var VectorLayer__default = /*#__PURE__*/_interopDefaultLegacy(VectorLayer);
    var VectorSource__default = /*#__PURE__*/_interopDefaultLegacy(VectorSource);
    var Style__default = /*#__PURE__*/_interopDefaultLegacy(Style);
    var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
    var Fill__default = /*#__PURE__*/_interopDefaultLegacy(Fill);
    var Stroke__default = /*#__PURE__*/_interopDefaultLegacy(Stroke);
    var Text__default = /*#__PURE__*/_interopDefaultLegacy(Text);
    var Icon__default = /*#__PURE__*/_interopDefaultLegacy(Icon);
    var Circle__default = /*#__PURE__*/_interopDefaultLegacy(Circle);
    var Feature__default = /*#__PURE__*/_interopDefaultLegacy(Feature$2);
    var OlTileLayer__default = /*#__PURE__*/_interopDefaultLegacy(OlTileLayer);
    var GeoJSON__default = /*#__PURE__*/_interopDefaultLegacy(GeoJSON);
    var concat__default = /*#__PURE__*/_interopDefaultLegacy(concat);

    const ANNOTATION_COLOR = {
      RED: {
        fill: "rgba(248, 7, 1, 0.3)",
        stroke: "rgb(248, 7, 1)"
      },
      YELLOW: {
        fill: "rgba(255, 254, 0, 0.3)",
        stroke: "rgb(255, 254, 0)"
      },
      GREEN: {
        fill: "rgba(30, 128, 0, 0.3)",
        stroke: "rgb(30, 128, 0)"
      },
      SKYBLUE: {
        fill: "rgba(135, 206, 235, 0.3)",
        stroke: "rgb(135, 206, 235)"
      },
      BLUE: {
        fill: "rgba(2, 26, 255, 0.3)",
        stroke: "rgb(2, 26, 255)"
      },
      BROWN: {
        fill: "rgba(165, 42, 42, 0.3)",
        stroke: "rgb(165, 42, 42)"
      }
    };

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __rest$1(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    var iconContext.DefaultContext = {
      color: undefined,
      size: undefined,
      className: undefined,
      style: undefined,
      attr: undefined
    };
    var iconContext.IconContext = React__default["default"].createContext && React__default["default"].createContext(iconContext.DefaultContext);

    var __assign = undefined && undefined.__assign || function () {
      __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __rest = undefined && undefined.__rest || function (s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    };
    function Tree2Element(tree) {
      return tree && tree.map(function (node, i) {
        return React__default["default"].createElement(node.tag, __assign({
          key: i
        }, node.attr), Tree2Element(node.child));
      });
    }
    function GenIcon(data) {
      // eslint-disable-next-line react/display-name
      return function (props) {
        return React__default["default"].createElement(IconBase, __assign({
          attr: __assign({}, data.attr)
        }, props), Tree2Element(data.child));
      };
    }
    function IconBase(props) {
      var elem = function (conf) {
        var attr = props.attr,
          size = props.size,
          title = props.title,
          svgProps = __rest(props, ["attr", "size", "title"]);
        var computedSize = size || conf.size || "1em";
        var className;
        if (conf.className) className = conf.className;
        if (props.className) className = (className ? className + " " : "") + props.className;
        return React__default["default"].createElement("svg", __assign({
          stroke: "currentColor",
          fill: "currentColor",
          strokeWidth: "0"
        }, conf.attr, attr, svgProps, {
          className: className,
          style: __assign(__assign({
            color: props.color || conf.color
          }, conf.style), props.style),
          height: computedSize,
          width: computedSize,
          xmlns: "http://www.w3.org/2000/svg"
        }), title && React__default["default"].createElement("title", null, title), props.children);
      };
      return iconContext.IconContext !== undefined ? React__default["default"].createElement(iconContext.IconContext.Consumer, null, function (conf) {
        return elem(conf);
      }) : elem(iconContext.DefaultContext);
    }

    // THIS FILE IS AUTO GENERATED
    function TbLetterT (props) {
      return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","fill":"none","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"stroke":"none","d":"M0 0h24v24H0z","fill":"none"}},{"tag":"path","attr":{"d":"M6 4l12 0"}},{"tag":"path","attr":{"d":"M12 4l0 16"}}]})(props);
    }function TbMapPins (props) {
      return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","fill":"none","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"stroke":"none","d":"M0 0h24v24H0z","fill":"none"}},{"tag":"path","attr":{"d":"M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z"}},{"tag":"path","attr":{"d":"M8 7l0 .01"}},{"tag":"path","attr":{"d":"M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z"}},{"tag":"path","attr":{"d":"M16 15l0 .01"}}]})(props);
    }function TbPolygon (props) {
      return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","fill":"none","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"stroke":"none","d":"M0 0h24v24H0z","fill":"none"}},{"tag":"path","attr":{"d":"M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{"tag":"path","attr":{"d":"M19 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{"tag":"path","attr":{"d":"M5 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{"tag":"path","attr":{"d":"M15 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{"tag":"path","attr":{"d":"M6.5 9.5l3.5 -3"}},{"tag":"path","attr":{"d":"M14 5.5l3 1.5"}},{"tag":"path","attr":{"d":"M18.5 10l-2.5 7"}},{"tag":"path","attr":{"d":"M13.5 17.5l-7 -5"}}]})(props);
    }function TbRectangle (props) {
      return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","fill":"none","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"stroke":"none","d":"M0 0h24v24H0z","fill":"none"}},{"tag":"path","attr":{"d":"M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"}}]})(props);
    }

    const MapContext = React.createContext(null);

    function useMap() {
      return React.useContext(MapContext);
    }

    const useMapEventHandler = ({
      onClick,
      onHover,
      onLoaded,
      onLoadStart
    }) => {
      const map = useMap();
      function clickEventHandler(event) {
        if (onClick) {
          onClick({
            event,
            lonlat: proj.toLonLat(event.coordinate)
          });
        }
      }
      function hoverEventHandler(event) {
        if (onHover) {
          onHover({
            event,
            lonlat: proj.toLonLat(event.coordinate)
          });
        }
      }
      function renderCompletedEventHandler(event) {
        if (onLoaded) {
          onLoaded(event);
        }
      }
      function loadStartedEventHandler(event) {
        if (onLoadStart) {
          onLoadStart(event);
        }
      }
      function loadEndedEventHandler(event) {
        if (onLoadStart) {
          onLoadStart(event);
        }
      }
      React.useEffect(() => {
        map.on("click", clickEventHandler);
        return () => {
          map.un("click", clickEventHandler);
        };
      }, []);
      React.useEffect(() => {
        map.on("pointermove", hoverEventHandler);
        return () => {
          map.un("pointermove", hoverEventHandler);
        };
      }, []);
      React.useEffect(() => {
        map.on("rendercomplete", renderCompletedEventHandler);
        return () => {
          map.un("rendercomplete", renderCompletedEventHandler);
        };
      }, []);
      React.useEffect(() => {
        map.on("loadstart", loadStartedEventHandler);
        return () => {
          map.un("loadstart", loadStartedEventHandler);
        };
      }, []);
      React.useEffect(() => {
        map.on("loadend", loadEndedEventHandler);
        return () => {
          map.un("loadend", loadEndedEventHandler);
        };
      }, []);
    };

    const useMapRotation = () => {
      const map = useMap();
      const [rotationDegree, setRotationDegree] = React.useState(map.getView().getRotation() / (Math.PI / 180));
      const setRotate = React.useCallback(degree => {
        setRotationDegree(degree);
      }, []);
      const resetRotation = React.useCallback(() => {
        setRotationDegree(0);
      }, []);
      React.useEffect(() => {
        map.getView().setRotation(rotationDegree * (Math.PI / 180));
      }, [rotationDegree, map]);
      return [rotationDegree, setRotate, resetRotation];
    };

    function useSelectAnnotation() {
      const [selectedAnnotation, setSelectedAnnotation] = React.useState(null);
      const map = useMap();
      const getAnnotationByClick = event => {
        const clickedFeatures = map.getFeaturesAtPixel(event.pixel);
        if (clickedFeatures.length > 0) {
          // 클릭한 어노테이션 선택
          const selectedFeature = clickedFeatures[0];
          if (selectedAnnotation !== selectedFeature) {
            setSelectedAnnotation(selectedFeature);
          }
        }
      };
      React.useEffect(() => {
        map.on("singleclick", getAnnotationByClick);
        return () => {
          map.un("singleclick", getAnnotationByClick);
        };
      }, []);
      return selectedAnnotation;
    }

    function useDidUpdate(func, dependencies) {
      const ref = React.useRef(false);
      React.useEffect(() => {
        if (ref.current) {
          func();
        } else {
          ref.current = true;
        }
      }, dependencies);
    }

    const useIsMount = () => {
      const [isMount, setIsMount] = React.useState(false);
      React.useEffect(() => {
        setIsMount(true);
      }, []);
      return isMount;
    };

    const useEffectIfMounted = (callback, deps) => {
      const isMount = useIsMount();
      const dependency = React.useMemo(() => [isMount, ...deps], [isMount, deps]);
      React.useEffect(() => {
        if (isMount) {
          callback();
        }
      }, dependency);
    };

    const getborderRadiusBySide = side => {
      if (side === "top") {
        return "5px 5px 0 0";
      }
      if (side === "middle") {
        return "0";
      }
      if (side === "bottom") {
        return "0 0 5px 5px";
      }
      if (side === "solo") {
        return "5px 5px 5px 5px";
      }
    };
    const StyledButton = styled__default["default"].button`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({
  active
}) => active && react.css`
      box-shadow: inset 0 0 5px;
    `}
  width: 30px;
  height: 30px;
  background: white;
  border: 1px solid #d9d9d9;
  border-radius: ${props => getborderRadiusBySide(props.side)};
  &:hover {
    border: 1px solid ${props => props.isDisabled ? "#d9d9d9" : "#000000"};
  }
`;
    const Button = React.forwardRef(({
      children,
      onClick,
      side = "middle",
      isDisabled = false,
      isActive = false
    }, ref) => {
      const onClickBtn = () => {
        if (onClick) {
          onClick();
        }
      };
      return jsxRuntime.jsx(StyledButton, Object.assign({
        ref: ref,
        onClick: onClickBtn,
        side: side,
        isDisabled: isDisabled,
        active: isActive
      }, {
        children: children
      }));
    });

    function MultiPointDrawButton(_a) {
      var {
          onEnd,
          onClick,
          onCanvas = false
        } = _a,
        props = __rest$1(_a, ["onEnd", "onClick", "onCanvas"]);
      const map = useMap();
      const vectorSourceRef = React.useRef(new VectorSource__default["default"]());
      const vectorLayerRef = React.useRef(new VectorLayer__default["default"]({
        source: vectorSourceRef.current
      }));
      const drawRef = React.useRef(new interaction.Draw({
        source: vectorSourceRef.current,
        type: "MultiPoint"
      }));
      const [features, setFeatures] = React.useState([]);
      const [isDrawing, setIsDrawing] = React.useState(false);
      console.log("isDrawing", isDrawing);
      const [pointCount, setPointCount] = React.useState(0);
      const startDrawing = () => {
        setIsDrawing(true);
        if (onClick) {
          onClick();
        }
        map.addInteraction(drawRef.current);
      };
      const drawing = event => {
        const feature = event.feature;
        feature.setProperties({
          source: vectorSourceRef.current,
          layer: vectorLayerRef.current
        });
        setFeatures([...features, feature]);
        setPointCount(prev => prev + 1);
      };
      const completeDrawing = () => {
        onEnd(features);
        setFeatures([]);
        map.removeInteraction(drawRef.current);
        setIsDrawing(false);
        setPointCount(0);
      };
      React.useEffect(() => {
        const drawingInstance = drawRef.current;
        drawingInstance.on("drawend", drawing);
        return () => {
          drawingInstance.un("drawend", drawing);
        };
      }, []);
      React.useEffect(() => {
        if (!props.isActive) {
          map.removeInteraction(drawRef.current);
        }
      }, [props.isActive, map]);
      React.useEffect(() => {
        if (onCanvas) {
          map.addLayer(vectorLayerRef.current);
        } else {
          map.removeLayer(vectorLayerRef.current);
        }
      }, [onCanvas, map]);
      React.useEffect(() => {
        features.forEach((feature, index) => {
          const style$1 = new Style__default["default"]({
            image: new style.Circle({
              radius: 10,
              fill: new style.Fill({
                color: ANNOTATION_COLOR.BLUE.fill // 원의 색상
              }),

              stroke: new style.Stroke({
                color: ANNOTATION_COLOR.BLUE.stroke,
                width: 2
              })
            }),
            text: new style.Text({
              text: String(pointCount + index),
              font: "bold 15px sans-serif",
              textAlign: "center",
              fill: new style.Fill({
                color: "#000"
              }),
              stroke: new style.Stroke({
                color: "#fff",
                width: 3
              })
            })
          });
          feature.setStyle(style$1);
        });
      }, [features, pointCount]);
      return jsxRuntime.jsx(Button, Object.assign({
        onClick: () => {
          if (!isDrawing) {
            startDrawing();
          } else {
            completeDrawing();
          }
        }
      }, props, {
        children: jsxRuntime.jsx(TbMapPins, {})
      }));
    }

    // THIS FILE IS AUTO GENERATED
    function FaEraser (props) {
      return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z"}}]})(props);
    }function FaMapMarkerAlt (props) {
      return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 384 512"},"child":[{"tag":"path","attr":{"d":"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(props);
    }

    const makeText = ({
      text = "",
      size = 15,
      color = "black",
      outline = true,
      isMarker = false
    }) => {
      const textInstance = new Text__default["default"]({
        text,
        textAlign: "center",
        font: `${size}px roboto, sans-serif`,
        fill: new Fill__default["default"]({
          color
        }),
        offsetY: isMarker ? -50 : 0,
        overflow: true,
        stroke: outline ? new Stroke__default["default"]({
          color: "white",
          width: 3
        }) : undefined
      });
      return textInstance;
    };

    function PointDrawButton(_a) {
      var {
          onEnd,
          onClick,
          onCanvas = false
        } = _a,
        props = __rest$1(_a, ["onEnd", "onClick", "onCanvas"]);
      const map = useMap();
      const vectorSourceRef = React.useRef(new VectorSource__default["default"]());
      const vectorLayerRef = React.useRef(new VectorLayer__default["default"]());
      const drawRef = React.useRef(new interaction.Draw({
        source: vectorSourceRef.current,
        type: "Point",
        style: new Style__default["default"]({
          text: makeText({
            text: "unknown",
            size: 15,
            color: "black",
            outline: true,
            isMarker: true
          }),
          image: new Icon__default["default"]({
            src: "/mapicon/marker-icon.png",
            anchor: [0.5, 1] // 마커 이미지의 앵커 위치
          })
        })
      }));

      const startDrawing = () => {
        if (onClick) {
          onClick();
        }
        map.addInteraction(drawRef.current);
      };
      const drawing = event => {
        const feature = event.feature;
        feature.setStyle(new Style__default["default"]({
          text: makeText({
            text: "unknown",
            size: 15,
            color: "black",
            outline: true,
            isMarker: true
          }),
          image: new Icon__default["default"]({
            src: "/mapicon/marker-icon.png",
            anchor: [0.5, 1] // 마커 이미지의 앵커 위치
          })
        }));

        feature.setProperties({
          source: vectorSourceRef.current,
          layer: vectorLayerRef.current
        });
        map.removeInteraction(drawRef.current);
        onEnd(feature);
      };
      React.useEffect(() => {
        const drawingInstance = drawRef.current;
        drawingInstance.on("drawend", drawing);
        return () => {
          drawingInstance.un("drawend", drawing);
        };
      }, []);
      React.useEffect(() => {
        if (!props.isActive) {
          map.removeInteraction(drawRef.current);
        }
      }, [props.isActive, map]);
      React.useEffect(() => {
        vectorLayerRef.current.setSource(vectorSourceRef.current);
        if (onCanvas) {
          map.addLayer(vectorLayerRef.current);
        } else {
          map.removeLayer(vectorLayerRef.current);
        }
      }, [onCanvas, map]);
      return jsxRuntime.jsx(Button, Object.assign({
        onClick: startDrawing
      }, props, {
        children: jsxRuntime.jsx(FaMapMarkerAlt, {})
      }));
    }

    function PolygonDrawButton(_a) {
      var {
          onEnd,
          onClick,
          onCanvas = false
        } = _a,
        props = __rest$1(_a, ["onEnd", "onClick", "onCanvas"]);
      const map = useMap();
      const vectorSourceRef = React.useRef(new VectorSource__default["default"]());
      const vectorLayerRef = React.useRef(new VectorLayer__default["default"]());
      const drawRef = React.useRef(new interaction.Draw({
        source: vectorSourceRef.current,
        type: "Polygon",
        style: new Style__default["default"]({
          stroke: new Stroke__default["default"]({
            color: "rgb(2, 26, 255)",
            width: 2
          }),
          fill: new Fill__default["default"]({
            color: "rgba(2, 26, 255, 0.3)"
          }),
          image: new Icon__default["default"]({
            src: "/mapicon/polygon.svg",
            anchor: [0.5, 1] // 마커 이미지의 앵커 위치
          })
        })
      }));

      const startDrawing = () => {
        if (onClick) {
          onClick();
        }
        map.addInteraction(drawRef.current);
      };
      const drawing = event => {
        const feature = event.feature;
        feature.setStyle(new Style__default["default"]({
          stroke: new Stroke__default["default"]({
            color: "rgb(2, 26, 255)",
            width: 2
          }),
          fill: new Fill__default["default"]({
            color: "rgba(2, 27, 255, 0.1)"
          }),
          text: makeText({
            text: "unknown",
            size: 15,
            color: "black",
            outline: true,
            isMarker: true
          })
        }));
        feature.setProperties({
          source: vectorSourceRef.current,
          layer: vectorLayerRef.current
        });
        map.removeInteraction(drawRef.current);
        onEnd(feature);
      };
      React.useEffect(() => {
        const vectorLayer = new VectorLayer__default["default"]({
          source: vectorSourceRef.current
        });
        map.addLayer(vectorLayer);
        const drawingInstance = drawRef.current;
        drawingInstance.on("drawend", drawing);
        return () => {
          drawingInstance.un("drawend", drawing);
        };
      }, []);
      React.useEffect(() => {
        if (!props.isActive) {
          map.removeInteraction(drawRef.current);
        }
      }, [props.isActive, map]);
      React.useEffect(() => {
        vectorLayerRef.current.setSource(vectorSourceRef.current);
        if (onCanvas) {
          map.addLayer(vectorLayerRef.current);
        } else {
          map.removeLayer(vectorLayerRef.current);
        }
      }, [onCanvas, map]);
      return jsxRuntime.jsx(Button, Object.assign({
        onClick: startDrawing
      }, props, {
        children: jsxRuntime.jsx(TbPolygon, {})
      }));
    }

    // THIS FILE IS AUTO GENERATED
    function MdPolyline (props) {
      return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6z"}}]})(props);
    }

    function PolylineDrawButton(_a) {
      var {
          onEnd,
          onClick,
          onCanvas = false
        } = _a,
        props = __rest$1(_a, ["onEnd", "onClick", "onCanvas"]);
      const map = useMap();
      const vectorSourceRef = React.useRef(new VectorSource__default["default"]());
      const vectorLayerRef = React.useRef(new VectorLayer__default["default"]());
      const drawRef = React.useRef(new interaction.Draw({
        source: vectorSourceRef.current,
        type: "LineString",
        style: new Style__default["default"]({
          stroke: new Stroke__default["default"]({
            color: "rgb(2, 26, 255)",
            width: 2
          }),
          fill: new Fill__default["default"]({
            color: "rgba(2, 26, 255, 0.3)"
          }),
          image: new Icon__default["default"]({
            src: "/mapicon/polyline.svg",
            anchor: [0.5, 1] // 마커 이미지의 앵커 위치
          })
        })
      }));

      const startDrawing = () => {
        if (onClick) {
          onClick();
        }
        map.addInteraction(drawRef.current);
      };
      const drawing = event => {
        const feature = event.feature;
        feature.setStyle(new Style__default["default"]({
          stroke: new Stroke__default["default"]({
            color: "rgb(2, 26, 255)",
            width: 2
          }),
          fill: new Fill__default["default"]({
            color: "rgba(2, 26, 255, 0.3)"
          }),
          text: makeText({
            text: "unknown",
            size: 15,
            color: "black",
            outline: true,
            isMarker: true
          })
        }));
        feature.setProperties({
          source: vectorSourceRef.current,
          layer: vectorLayerRef.current
        });
        map.removeInteraction(drawRef.current);
        onEnd(feature);
      };
      React.useEffect(() => {
        const drawingInstance = drawRef.current;
        drawingInstance.on("drawend", drawing);
        return () => {
          drawingInstance.un("drawend", drawing);
        };
      }, []);
      React.useEffect(() => {
        if (!props.isActive) {
          map.removeInteraction(drawRef.current);
        }
      }, [props.isActive, map]);
      React.useEffect(() => {
        vectorLayerRef.current.setSource(vectorSourceRef.current);
        if (onCanvas) {
          map.addLayer(vectorLayerRef.current);
        } else {
          map.removeLayer(vectorLayerRef.current);
        }
      }, [onCanvas, map]);
      return jsxRuntime.jsx(Button, Object.assign({
        onClick: startDrawing
      }, props, {
        children: jsxRuntime.jsx(MdPolyline, {})
      }));
    }

    function RectangleDrawButton(_a) {
      var {
          onEnd,
          onClick,
          onCanvas = false
        } = _a,
        props = __rest$1(_a, ["onEnd", "onClick", "onCanvas"]);
      const map = useMap();
      const vectorSourceRef = React.useRef(new VectorSource__default["default"]());
      const vectorLayerRef = React.useRef(new VectorLayer__default["default"]());
      const drawRef = React.useRef(new interaction.Draw({
        source: vectorSourceRef.current,
        type: "Circle",
        geometryFunction: Draw.createBox(),
        style: new Style__default["default"]({
          stroke: new Stroke__default["default"]({
            color: "rgb(2, 26, 255)",
            width: 2
          }),
          fill: new Fill__default["default"]({
            color: "rgba(2, 26, 255, 0.3)"
          }),
          image: new Icon__default["default"]({
            src: "/mapicon/Rectangle.svg",
            anchor: [0.5, 1] // 마커 이미지의 앵커 위치
          })
        })
      }));

      const startDrawing = () => {
        if (onClick) {
          onClick();
        }
        map.addInteraction(drawRef.current);
      };
      const drawing = event => {
        event.feature.setStyle(new Style__default["default"]({
          stroke: new Stroke__default["default"]({
            color: "rgb(2, 26, 255)",
            width: 2
          }),
          fill: new Fill__default["default"]({
            color: "rgba(2, 26, 255, 0.3)"
          }),
          text: makeText({
            text: "unknown",
            size: 15,
            color: "black",
            outline: true,
            isMarker: true
          })
        }));
        event.feature.setProperties({
          source: vectorSourceRef.current,
          layer: vectorLayerRef.current
        });
        map.removeInteraction(drawRef.current);
        onEnd(event.feature);
      };
      React.useEffect(() => {
        const drawingInstance = drawRef.current;
        drawingInstance.on("drawend", drawing);
        return () => {
          drawingInstance.un("drawend", drawing);
        };
      }, []);
      React.useEffect(() => {
        if (!props.isActive) {
          map.removeInteraction(drawRef.current);
        }
      }, [props.isActive, map]);
      React.useEffect(() => {
        vectorLayerRef.current.setSource(vectorSourceRef.current);
        if (onCanvas) {
          map.addLayer(vectorLayerRef.current);
        } else {
          map.removeLayer(vectorLayerRef.current);
        }
      }, [onCanvas, map]);
      return jsxRuntime.jsx(Button, Object.assign({
        onClick: startDrawing
      }, props, {
        children: jsxRuntime.jsx(TbRectangle, {})
      }));
    }

    function TextDrawButton(_a) {
      var {
          onEnd,
          onClick,
          onCanvas = false
        } = _a,
        props = __rest$1(_a, ["onEnd", "onClick", "onCanvas"]);
      const map = useMap();
      const vectorSourceRef = React.useRef(new VectorSource__default["default"]());
      const vectorLayerRef = React.useRef(new VectorLayer__default["default"]());
      const drawRef = React.useRef(new interaction.Draw({
        source: vectorSourceRef.current,
        type: "Point",
        style: new Style__default["default"]({
          text: new Text__default["default"]({
            text: "unknown",
            font: "15px Arial",
            fill: new Fill__default["default"]({
              color: "black"
            }),
            overflow: true,
            offsetX: 0,
            offsetY: -15,
            stroke: new Stroke__default["default"]({
              color: "white",
              width: 3
            })
          })
        })
      }));
      const startDrawing = () => {
        if (onClick) {
          onClick();
        }
        map.addInteraction(drawRef.current);
      };
      const drawing = event => {
        const feature = event.feature;
        feature.setStyle(new Style__default["default"]({
          text: new Text__default["default"]({
            text: "unknown",
            font: "15px Arial",
            fill: new Fill__default["default"]({
              color: "black"
            }),
            overflow: true,
            offsetX: 0,
            offsetY: -15,
            stroke: new Stroke__default["default"]({
              color: "white",
              width: 3
            })
          })
        }));
        feature.setProperties({
          source: vectorSourceRef.current,
          layer: vectorLayerRef.current
        });
        map.removeInteraction(drawRef.current);
        onEnd(feature);
      };
      React.useEffect(() => {
        const drawingInstance = drawRef.current;
        drawingInstance.on("drawend", drawing);
        return () => {
          drawingInstance.un("drawend", drawing);
        };
      }, []);
      React.useEffect(() => {
        if (!props.isActive) {
          map.removeInteraction(drawRef.current);
        }
      }, [props.isActive, map]);
      React.useEffect(() => {
        vectorLayerRef.current.setSource(vectorSourceRef.current);
        if (onCanvas) {
          map.addLayer(vectorLayerRef.current);
        } else {
          map.removeLayer(vectorLayerRef.current);
        }
      }, [onCanvas, map]);
      return jsxRuntime.jsx(Button, Object.assign({
        onClick: startDrawing
      }, props, {
        children: jsxRuntime.jsx(TbLetterT, {})
      }));
    }

    function DeleteAnnotation(props) {
      const clickedAnnotation = useSelectAnnotation();
      const map = useMap();
      const selectInteractionRef = React.useRef(null);
      const removeSelectedFeatures = event => {
        const selectedFeatures = event.selected;
        selectedFeatures.forEach(selectedFeature => {
          if (selectedFeature.getGeometry()) {
            const vectorSource = selectedFeature.getProperties().source;
            vectorSource.clear();
            // 삭제와 동시에 vectorLayer를 빼서 안보이게 하는 로직
            // draw tool 마다 각각의 레이어를 가지는데 빼버리면 새로 그렸을때 화면에 보이지 않음
            // const vectorLayer = selectedFeature.getProperties()
            //   .layer as VectorLayer<VectorSource>;
            // map.removeLayer(vectorLayer);
          }
        });
      };

      React.useEffect(() => {
        if (props.isActive) {
          if (!selectInteractionRef.current) {
            selectInteractionRef.current = new interaction.Select();
            selectInteractionRef.current.on("select", removeSelectedFeatures);
            map.addInteraction(selectInteractionRef.current);
          }
        } else {
          if (selectInteractionRef.current) {
            selectInteractionRef.current.un("select", removeSelectedFeatures);
            map.removeInteraction(selectInteractionRef.current);
            selectInteractionRef.current = null;
          }
        }
      }, [map, props.isActive]);
      React.useEffect(() => {
        if (selectInteractionRef.current && clickedAnnotation) {
          selectInteractionRef.current.getFeatures().clear();
          selectInteractionRef.current.getFeatures().push(clickedAnnotation);
        }
      }, [clickedAnnotation]);
      return jsxRuntime.jsx(Button, Object.assign({}, props, {
        children: jsxRuntime.jsx(FaEraser, {})
      }));
    }

    // THIS FILE IS AUTO GENERATED
    function AiOutlineEdit (props) {
      return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]})(props);
    }function AiOutlineMinus (props) {
      return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]})(props);
    }

    /**
     * @module ol/AssertionError
     */

    /** @type {Object<number, string>} */
    const messages = {
      1: 'The view center is not defined',
      2: 'The view resolution is not defined',
      3: 'The view rotation is not defined',
      4: '`image` and `src` cannot be provided at the same time',
      5: '`imgSize` must be set when `image` is provided',
      7: '`format` must be set when `url` is set',
      8: 'Unknown `serverType` configured',
      9: '`url` must be configured or set using `#setUrl()`',
      10: 'The default `geometryFunction` can only handle `Point` geometries',
      11: '`options.featureTypes` must be an Array',
      12: '`options.geometryName` must also be provided when `options.bbox` is set',
      13: 'Invalid corner',
      14: 'Invalid color',
      15: 'Tried to get a value for a key that does not exist in the cache',
      16: 'Tried to set a value for a key that is used already',
      17: '`resolutions` must be sorted in descending order',
      18: 'Either `origin` or `origins` must be configured, never both',
      19: 'Number of `tileSizes` and `resolutions` must be equal',
      20: 'Number of `origins` and `resolutions` must be equal',
      22: 'Either `tileSize` or `tileSizes` must be configured, never both',
      24: 'Invalid extent or geometry provided as `geometry`',
      25: 'Cannot fit empty extent provided as `geometry`',
      26: 'Features must have an id set',
      27: 'Features must have an id set',
      28: '`renderMode` must be `"hybrid"` or `"vector"`',
      30: 'The passed `feature` was already added to the source',
      31: 'Tried to enqueue an `element` that was already added to the queue',
      32: 'Transformation matrix cannot be inverted',
      33: 'Invalid units',
      34: 'Invalid geometry layout',
      36: 'Unknown SRS type',
      37: 'Unknown geometry type found',
      38: '`styleMapValue` has an unknown type',
      39: 'Unknown geometry type',
      40: 'Expected `feature` to have a geometry',
      41: 'Expected an `ol/style/Style` or an array of `ol/style/Style.js`',
      42: 'Question unknown, the answer is 42',
      43: 'Expected `layers` to be an array or a `Collection`',
      47: 'Expected `controls` to be an array or an `ol/Collection`',
      48: 'Expected `interactions` to be an array or an `ol/Collection`',
      49: 'Expected `overlays` to be an array or an `ol/Collection`',
      50: '`options.featureTypes` should be an Array',
      51: 'Either `url` or `tileJSON` options must be provided',
      52: 'Unknown `serverType` configured',
      53: 'Unknown `tierSizeCalculation` configured',
      55: 'The {-y} placeholder requires a tile grid with extent',
      56: 'mapBrowserEvent must originate from a pointer event',
      57: 'At least 2 conditions are required',
      59: 'Invalid command found in the PBF',
      60: 'Missing or invalid `size`',
      61: 'Cannot determine IIIF Image API version from provided image information JSON',
      62: 'A `WebGLArrayBuffer` must either be of type `ELEMENT_ARRAY_BUFFER` or `ARRAY_BUFFER`',
      64: 'Layer opacity must be a number',
      66: '`forEachFeatureAtCoordinate` cannot be used on a WebGL layer if the hit detection logic has not been enabled. This is done by providing adequate shaders using the `hitVertexShader` and `hitFragmentShader` properties of `WebGLPointsLayerRenderer`',
      67: 'A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both',
      68: 'A VectorTile source can only be rendered if it has a projection compatible with the view projection',
      69: '`width` or `height` cannot be provided together with `scale`',
    };

    /**
     * Error object thrown when an assertion failed. This is an ECMA-262 Error,
     * extended with a `code` property.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error.
     */
    class AssertionError extends Error {
      /**
       * @param {number} code Error code.
       */
      constructor(code) {
        const message = messages[code];

        super(message);

        /**
         * Error code. The meaning of the code can be found on
         * https://openlayers.org/en/latest/doc/errors/ (replace `latest` with
         * the version found in the OpenLayers script's header comment if a version
         * other than the latest is used).
         * @type {number}
         * @deprecated ol/AssertionError and error codes will be removed in v8.0
         * @api
         */
        this.code = code;

        /**
         * @type {string}
         */
        this.name = 'AssertionError';

        // Re-assign message, see https://github.com/Rich-Harris/buble/issues/40
        this.message = message;
      }
    }

    var AssertionError$1 = AssertionError;

    /**
     * @module ol/events/Event
     */

    /**
     * @classdesc
     * Stripped down implementation of the W3C DOM Level 2 Event interface.
     * See https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface.
     *
     * This implementation only provides `type` and `target` properties, and
     * `stopPropagation` and `preventDefault` methods. It is meant as base class
     * for higher level events defined in the library, and works with
     * {@link module:ol/events/Target~Target}.
     */
    class BaseEvent {
      /**
       * @param {string} type Type.
       */
      constructor(type) {
        /**
         * @type {boolean}
         */
        this.propagationStopped;

        /**
         * @type {boolean}
         */
        this.defaultPrevented;

        /**
         * The event type.
         * @type {string}
         * @api
         */
        this.type = type;

        /**
         * The event target.
         * @type {Object}
         * @api
         */
        this.target = null;
      }

      /**
       * Prevent default. This means that no emulated `click`, `singleclick` or `doubleclick` events
       * will be fired.
       * @api
       */
      preventDefault() {
        this.defaultPrevented = true;
      }

      /**
       * Stop event propagation.
       * @api
       */
      stopPropagation() {
        this.propagationStopped = true;
      }
    }

    var Event = BaseEvent;

    /**
     * @module ol/ObjectEventType
     */

    /**
     * @enum {string}
     */
    var ObjectEventType = {
      /**
       * Triggered when a property is changed.
       * @event module:ol/Object.ObjectEvent#propertychange
       * @api
       */
      PROPERTYCHANGE: 'propertychange',
    };

    /**
     * @typedef {'propertychange'} Types
     */

    /**
     * @module ol/Disposable
     */

    /**
     * @classdesc
     * Objects that need to clean up after themselves.
     */
    class Disposable {
      constructor() {
        /**
         * The object has already been disposed.
         * @type {boolean}
         * @protected
         */
        this.disposed = false;
      }

      /**
       * Clean up.
       */
      dispose() {
        if (!this.disposed) {
          this.disposed = true;
          this.disposeInternal();
        }
      }

      /**
       * Extension point for disposable objects.
       * @protected
       */
      disposeInternal() {}
    }

    var Disposable$1 = Disposable;

    /**
     * @module ol/array
     */

    /**
     * Compare function sorting arrays in ascending order.  Safe to use for numeric values.
     * @param {*} a The first object to be compared.
     * @param {*} b The second object to be compared.
     * @return {number} A negative number, zero, or a positive number as the first
     *     argument is less than, equal to, or greater than the second.
     */
    function array.ascending(a, b) {
      return a > b ? 1 : a < b ? -1 : 0;
    }

    /**
     * {@link module:ol/tilegrid/TileGrid~TileGrid#getZForResolution} can use a function
     * of this type to determine which nearest resolution to use.
     *
     * This function takes a `{number}` representing a value between two array entries,
     * a `{number}` representing the value of the nearest higher entry and
     * a `{number}` representing the value of the nearest lower entry
     * as arguments and returns a `{number}`. If a negative number or zero is returned
     * the lower value will be used, if a positive number is returned the higher value
     * will be used.
     * @typedef {function(number, number, number): number} NearestDirectionFunction
     * @api
     */

    /**
     * @param {Array<number>} arr Array in descending order.
     * @param {number} target Target.
     * @param {number|NearestDirectionFunction} direction
     *    0 means return the nearest,
     *    > 0 means return the largest nearest,
     *    < 0 means return the smallest nearest.
     * @return {number} Index.
     */
    function array.linearFindNearest(arr, target, direction) {
      const n = arr.length;
      if (arr[0] <= target) {
        return 0;
      } else if (target <= arr[n - 1]) {
        return n - 1;
      }
      let i;
      if (direction > 0) {
        for (i = 1; i < n; ++i) {
          if (arr[i] < target) {
            return i - 1;
          }
        }
      } else if (direction < 0) {
        for (i = 1; i < n; ++i) {
          if (arr[i] <= target) {
            return i;
          }
        }
      } else {
        for (i = 1; i < n; ++i) {
          if (arr[i] == target) {
            return i;
          } else if (arr[i] < target) {
            if (typeof direction === 'function') {
              if (direction(target, arr[i - 1], arr[i]) > 0) {
                return i - 1;
              }
              return i;
            } else if (arr[i - 1] - target < target - arr[i]) {
              return i - 1;
            }
            return i;
          }
        }
      }
      return n - 1;
    }

    /**
     * @param {Array<VALUE>} arr The array to modify.
     * @param {!Array<VALUE>|VALUE} data The elements or arrays of elements to add to arr.
     * @template VALUE
     */
    function array.extend(arr, data) {
      const extension = Array.isArray(data) ? data : [data];
      const length = extension.length;
      for (let i = 0; i < length; i++) {
        arr[arr.length] = extension[i];
      }
    }

    /**
     * @param {Array|Uint8ClampedArray} arr1 The first array to compare.
     * @param {Array|Uint8ClampedArray} arr2 The second array to compare.
     * @return {boolean} Whether the two arrays are equal.
     */
    function array.equals(arr1, arr2) {
      const len1 = arr1.length;
      if (len1 !== arr2.length) {
        return false;
      }
      for (let i = 0; i < len1; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }

    /**
     * @module ol/functions
     */

    /**
     * Always returns true.
     * @return {boolean} true.
     */
    function functions.TRUE() {
      return true;
    }

    /**
     * Always returns false.
     * @return {boolean} false.
     */
    function functions.FALSE() {
      return false;
    }

    /**
     * A reusable function, used e.g. as a default for callbacks.
     *
     * @return {void} Nothing.
     */
    function functions.VOID() {}

    /**
     * Wrap a function in another function that remembers the last return.  If the
     * returned function is called twice in a row with the same arguments and the same
     * this object, it will return the value from the first call in the second call.
     *
     * @param {function(...any): ReturnType} fn The function to memoize.
     * @return {function(...any): ReturnType} The memoized function.
     * @template ReturnType
     */
    function functions.memoizeOne(fn) {
      let called = false;

      /** @type {ReturnType} */
      let lastResult;

      /** @type {Array<any>} */
      let lastArgs;

      let lastThis;

      return function () {
        const nextArgs = Array.prototype.slice.call(arguments);
        if (!called || this !== lastThis || !array.equals(nextArgs, lastArgs)) {
          called = true;
          lastThis = this;
          lastArgs = nextArgs;
          lastResult = fn.apply(this, arguments);
        }
        return lastResult;
      };
    }

    /**
     * @module ol/obj
     */

    /**
     * Removes all properties from an object.
     * @param {Object} object The object to clear.
     */
    function obj.clear(object) {
      for (const property in object) {
        delete object[property];
      }
    }

    /**
     * Determine if an object has any properties.
     * @param {Object} object The object to check.
     * @return {boolean} The object is empty.
     */
    function isEmpty$1(object) {
      let property;
      for (property in object) {
        return false;
      }
      return !property;
    }

    /**
     * @module ol/events/Target
     */

    /**
     * @typedef {EventTarget|Target} EventTargetLike
     */

    /**
     * @classdesc
     * A simplified implementation of the W3C DOM Level 2 EventTarget interface.
     * See https://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-EventTarget.
     *
     * There are two important simplifications compared to the specification:
     *
     * 1. The handling of `useCapture` in `addEventListener` and
     *    `removeEventListener`. There is no real capture model.
     * 2. The handling of `stopPropagation` and `preventDefault` on `dispatchEvent`.
     *    There is no event target hierarchy. When a listener calls
     *    `stopPropagation` or `preventDefault` on an event object, it means that no
     *    more listeners after this one will be called. Same as when the listener
     *    returns false.
     */
    class Target extends Disposable$1 {
      /**
       * @param {*} [target] Default event target for dispatched events.
       */
      constructor(target) {
        super();

        /**
         * @private
         * @type {*}
         */
        this.eventTarget_ = target;

        /**
         * @private
         * @type {Object<string, number>}
         */
        this.pendingRemovals_ = null;

        /**
         * @private
         * @type {Object<string, number>}
         */
        this.dispatching_ = null;

        /**
         * @private
         * @type {Object<string, Array<import("../events.js").Listener>>}
         */
        this.listeners_ = null;
      }

      /**
       * @param {string} type Type.
       * @param {import("../events.js").Listener} listener Listener.
       */
      addEventListener(type, listener) {
        if (!type || !listener) {
          return;
        }
        const listeners = this.listeners_ || (this.listeners_ = {});
        const listenersForType = listeners[type] || (listeners[type] = []);
        if (!listenersForType.includes(listener)) {
          listenersForType.push(listener);
        }
      }

      /**
       * Dispatches an event and calls all listeners listening for events
       * of this type. The event parameter can either be a string or an
       * Object with a `type` property.
       *
       * @param {import("./Event.js").default|string} event Event object.
       * @return {boolean|undefined} `false` if anyone called preventDefault on the
       *     event object or if any of the listeners returned false.
       * @api
       */
      dispatchEvent(event) {
        const isString = typeof event === 'string';
        const type = isString ? event : event.type;
        const listeners = this.listeners_ && this.listeners_[type];
        if (!listeners) {
          return;
        }

        const evt = isString ? new Event(event) : /** @type {Event} */ (event);
        if (!evt.target) {
          evt.target = this.eventTarget_ || this;
        }
        const dispatching = this.dispatching_ || (this.dispatching_ = {});
        const pendingRemovals =
          this.pendingRemovals_ || (this.pendingRemovals_ = {});
        if (!(type in dispatching)) {
          dispatching[type] = 0;
          pendingRemovals[type] = 0;
        }
        ++dispatching[type];
        let propagate;
        for (let i = 0, ii = listeners.length; i < ii; ++i) {
          if ('handleEvent' in listeners[i]) {
            propagate = /** @type {import("../events.js").ListenerObject} */ (
              listeners[i]
            ).handleEvent(evt);
          } else {
            propagate = /** @type {import("../events.js").ListenerFunction} */ (
              listeners[i]
            ).call(this, evt);
          }
          if (propagate === false || evt.propagationStopped) {
            propagate = false;
            break;
          }
        }
        if (--dispatching[type] === 0) {
          let pr = pendingRemovals[type];
          delete pendingRemovals[type];
          while (pr--) {
            this.removeEventListener(type, functions.VOID);
          }
          delete dispatching[type];
        }
        return propagate;
      }

      /**
       * Clean up.
       */
      disposeInternal() {
        this.listeners_ && obj.clear(this.listeners_);
      }

      /**
       * Get the listeners for a specified event type. Listeners are returned in the
       * order that they will be called in.
       *
       * @param {string} type Type.
       * @return {Array<import("../events.js").Listener>|undefined} Listeners.
       */
      getListeners(type) {
        return (this.listeners_ && this.listeners_[type]) || undefined;
      }

      /**
       * @param {string} [type] Type. If not provided,
       *     `true` will be returned if this event target has any listeners.
       * @return {boolean} Has listeners.
       */
      hasListener(type) {
        if (!this.listeners_) {
          return false;
        }
        return type
          ? type in this.listeners_
          : Object.keys(this.listeners_).length > 0;
      }

      /**
       * @param {string} type Type.
       * @param {import("../events.js").Listener} listener Listener.
       */
      removeEventListener(type, listener) {
        const listeners = this.listeners_ && this.listeners_[type];
        if (listeners) {
          const index = listeners.indexOf(listener);
          if (index !== -1) {
            if (this.pendingRemovals_ && type in this.pendingRemovals_) {
              // make listener a no-op, and remove later in #dispatchEvent()
              listeners[index] = functions.VOID;
              ++this.pendingRemovals_[type];
            } else {
              listeners.splice(index, 1);
              if (listeners.length === 0) {
                delete this.listeners_[type];
              }
            }
          }
        }
      }
    }

    var Target$1 = Target;

    /**
     * @module ol/events/EventType
     */

    /**
     * @enum {string}
     * @const
     */
    var EventType = {
      /**
       * Generic change event. Triggered when the revision counter is increased.
       * @event module:ol/events/Event~BaseEvent#change
       * @api
       */
      CHANGE: 'change',

      /**
       * Generic error event. Triggered when an error occurs.
       * @event module:ol/events/Event~BaseEvent#error
       * @api
       */
      ERROR: 'error',

      BLUR: 'blur',
      CLEAR: 'clear',
      CONTEXTMENU: 'contextmenu',
      CLICK: 'click',
      DBLCLICK: 'dblclick',
      DRAGENTER: 'dragenter',
      DRAGOVER: 'dragover',
      DROP: 'drop',
      FOCUS: 'focus',
      KEYDOWN: 'keydown',
      KEYPRESS: 'keypress',
      LOAD: 'load',
      RESIZE: 'resize',
      TOUCHMOVE: 'touchmove',
      WHEEL: 'wheel',
    };

    /**
     * @module ol/events
     */

    /**
     * Key to use with {@link module:ol/Observable.unByKey}.
     * @typedef {Object} EventsKey
     * @property {ListenerFunction} listener Listener.
     * @property {import("./events/Target.js").EventTargetLike} target Target.
     * @property {string} type Type.
     * @api
     */

    /**
     * Listener function. This function is called with an event object as argument.
     * When the function returns `false`, event propagation will stop.
     *
     * @typedef {function((Event|import("./events/Event.js").default)): (void|boolean)} ListenerFunction
     * @api
     */

    /**
     * @typedef {Object} ListenerObject
     * @property {ListenerFunction} handleEvent HandleEvent listener function.
     */

    /**
     * @typedef {ListenerFunction|ListenerObject} Listener
     */

    /**
     * Registers an event listener on an event target. Inspired by
     * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
     *
     * This function efficiently binds a `listener` to a `this` object, and returns
     * a key for use with {@link module:ol/events.unlistenByKey}.
     *
     * @param {import("./events/Target.js").EventTargetLike} target Event target.
     * @param {string} type Event type.
     * @param {ListenerFunction} listener Listener.
     * @param {Object} [thisArg] Object referenced by the `this` keyword in the
     *     listener. Default is the `target`.
     * @param {boolean} [once] If true, add the listener as one-off listener.
     * @return {EventsKey} Unique key for the listener.
     */
    function events.listen(target, type, listener, thisArg, once) {
      if (thisArg && thisArg !== target) {
        listener = listener.bind(thisArg);
      }
      if (once) {
        const originalListener = listener;
        listener = function () {
          target.removeEventListener(type, listener);
          originalListener.apply(this, arguments);
        };
      }
      const eventsKey = {
        target: target,
        type: type,
        listener: listener,
      };
      target.addEventListener(type, listener);
      return eventsKey;
    }

    /**
     * Registers a one-off event listener on an event target. Inspired by
     * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
     *
     * This function efficiently binds a `listener` as self-unregistering listener
     * to a `this` object, and returns a key for use with
     * {@link module:ol/events.unlistenByKey} in case the listener needs to be
     * unregistered before it is called.
     *
     * When {@link module:ol/events.listen} is called with the same arguments after this
     * function, the self-unregistering listener will be turned into a permanent
     * listener.
     *
     * @param {import("./events/Target.js").EventTargetLike} target Event target.
     * @param {string} type Event type.
     * @param {ListenerFunction} listener Listener.
     * @param {Object} [thisArg] Object referenced by the `this` keyword in the
     *     listener. Default is the `target`.
     * @return {EventsKey} Key for unlistenByKey.
     */
    function listenOnce(target, type, listener, thisArg) {
      return events.listen(target, type, listener, thisArg, true);
    }

    /**
     * Unregisters event listeners on an event target. Inspired by
     * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
     *
     * The argument passed to this function is the key returned from
     * {@link module:ol/events.listen} or {@link module:ol/events.listenOnce}.
     *
     * @param {EventsKey} key The key.
     */
    function events.unlistenByKey(key) {
      if (key && key.target) {
        key.target.removeEventListener(key.type, key.listener);
        obj.clear(key);
      }
    }

    /**
     * @module ol/Observable
     */

    /***
     * @template {string} Type
     * @template {Event|import("./events/Event.js").default} EventClass
     * @template Return
     * @typedef {(type: Type, listener: (event: EventClass) => ?) => Return} OnSignature
     */

    /***
     * @template {string} Type
     * @template Return
     * @typedef {(type: Type[], listener: (event: Event|import("./events/Event").default) => ?) => Return extends void ? void : Return[]} CombinedOnSignature
     */

    /**
     * @typedef {'change'|'error'} EventTypes
     */

    /***
     * @template Return
     * @typedef {OnSignature<EventTypes, import("./events/Event.js").default, Return> & CombinedOnSignature<EventTypes, Return>} ObservableOnSignature
     */

    /**
     * @classdesc
     * Abstract base class; normally only used for creating subclasses and not
     * instantiated in apps.
     * An event target providing convenient methods for listener registration
     * and unregistration. A generic `change` event is always available through
     * {@link module:ol/Observable~Observable#changed}.
     *
     * @fires import("./events/Event.js").default
     * @api
     */
    class Observable extends Target$1 {
      constructor() {
        super();

        this.on =
          /** @type {ObservableOnSignature<import("./events").EventsKey>} */ (
            this.onInternal
          );

        this.once =
          /** @type {ObservableOnSignature<import("./events").EventsKey>} */ (
            this.onceInternal
          );

        this.un = /** @type {ObservableOnSignature<void>} */ (this.unInternal);

        /**
         * @private
         * @type {number}
         */
        this.revision_ = 0;
      }

      /**
       * Increases the revision counter and dispatches a 'change' event.
       * @api
       */
      changed() {
        ++this.revision_;
        this.dispatchEvent(EventType.CHANGE);
      }

      /**
       * Get the version number for this object.  Each time the object is modified,
       * its version number will be incremented.
       * @return {number} Revision.
       * @api
       */
      getRevision() {
        return this.revision_;
      }

      /**
       * @param {string|Array<string>} type Type.
       * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
       * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
       * @protected
       */
      onInternal(type, listener) {
        if (Array.isArray(type)) {
          const len = type.length;
          const keys = new Array(len);
          for (let i = 0; i < len; ++i) {
            keys[i] = events.listen(this, type[i], listener);
          }
          return keys;
        }
        return events.listen(this, /** @type {string} */ (type), listener);
      }

      /**
       * @param {string|Array<string>} type Type.
       * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
       * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
       * @protected
       */
      onceInternal(type, listener) {
        let key;
        if (Array.isArray(type)) {
          const len = type.length;
          key = new Array(len);
          for (let i = 0; i < len; ++i) {
            key[i] = listenOnce(this, type[i], listener);
          }
        } else {
          key = listenOnce(this, /** @type {string} */ (type), listener);
        }
        /** @type {Object} */ (listener).ol_key = key;
        return key;
      }

      /**
       * Unlisten for a certain type of event.
       * @param {string|Array<string>} type Type.
       * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
       * @protected
       */
      unInternal(type, listener) {
        const key = /** @type {Object} */ (listener).ol_key;
        if (key) {
          unByKey(key);
        } else if (Array.isArray(type)) {
          for (let i = 0, ii = type.length; i < ii; ++i) {
            this.removeEventListener(type[i], listener);
          }
        } else {
          this.removeEventListener(type, listener);
        }
      }
    }

    /**
     * Listen for a certain type of event.
     * @function
     * @param {string|Array<string>} type The event type or array of event types.
     * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
     * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
     *     called with an array of event types as the first argument, the return
     *     will be an array of keys.
     * @api
     */
    Observable.prototype.on;

    /**
     * Listen once for a certain type of event.
     * @function
     * @param {string|Array<string>} type The event type or array of event types.
     * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
     * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
     *     called with an array of event types as the first argument, the return
     *     will be an array of keys.
     * @api
     */
    Observable.prototype.once;

    /**
     * Unlisten for a certain type of event.
     * @function
     * @param {string|Array<string>} type The event type or array of event types.
     * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
     * @api
     */
    Observable.prototype.un;

    /**
     * Removes an event listener using the key returned by `on()` or `once()`.
     * @param {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} key The key returned by `on()`
     *     or `once()` (or an array of keys).
     * @api
     */
    function unByKey(key) {
      if (Array.isArray(key)) {
        for (let i = 0, ii = key.length; i < ii; ++i) {
          events.unlistenByKey(key[i]);
        }
      } else {
        events.unlistenByKey(/** @type {import("./events.js").EventsKey} */ (key));
      }
    }

    var Observable$1 = Observable;

    /**
     * @module ol/util
     */

    /**
     * @return {never} Any return.
     */
    function util.abstract() {
      throw new Error('Unimplemented abstract method.');
    }

    /**
     * Counter for getUid.
     * @type {number}
     * @private
     */
    let uidCounter_ = 0;

    /**
     * Gets a unique ID for an object. This mutates the object so that further calls
     * with the same object as a parameter returns the same value. Unique IDs are generated
     * as a strictly increasing sequence. Adapted from goog.getUid.
     *
     * @param {Object} obj The object to get the unique ID for.
     * @return {string} The unique ID for the object.
     * @api
     */
    function util.getUid(obj) {
      return obj.ol_uid || (obj.ol_uid = String(++uidCounter_));
    }

    /**
     * @module ol/Object
     */

    /**
     * @classdesc
     * Events emitted by {@link module:ol/Object~BaseObject} instances are instances of this type.
     */
    class ObjectEvent extends Event {
      /**
       * @param {string} type The event type.
       * @param {string} key The property name.
       * @param {*} oldValue The old value for `key`.
       */
      constructor(type, key, oldValue) {
        super(type);

        /**
         * The name of the property whose value is changing.
         * @type {string}
         * @api
         */
        this.key = key;

        /**
         * The old value. To get the new value use `e.target.get(e.key)` where
         * `e` is the event object.
         * @type {*}
         * @api
         */
        this.oldValue = oldValue;
      }
    }

    /***
     * @template Return
     * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
     *    import("./Observable").OnSignature<import("./ObjectEventType").Types, ObjectEvent, Return> &
     *    import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|import("./ObjectEventType").Types, Return>} ObjectOnSignature
     */

    /**
     * @classdesc
     * Abstract base class; normally only used for creating subclasses and not
     * instantiated in apps.
     * Most non-trivial classes inherit from this.
     *
     * This extends {@link module:ol/Observable~Observable} with observable
     * properties, where each property is observable as well as the object as a
     * whole.
     *
     * Classes that inherit from this have pre-defined properties, to which you can
     * add your owns. The pre-defined properties are listed in this documentation as
     * 'Observable Properties', and have their own accessors; for example,
     * {@link module:ol/Map~Map} has a `target` property, accessed with
     * `getTarget()` and changed with `setTarget()`. Not all properties are however
     * settable. There are also general-purpose accessors `get()` and `set()`. For
     * example, `get('target')` is equivalent to `getTarget()`.
     *
     * The `set` accessors trigger a change event, and you can monitor this by
     * registering a listener. For example, {@link module:ol/View~View} has a
     * `center` property, so `view.on('change:center', function(evt) {...});` would
     * call the function whenever the value of the center property changes. Within
     * the function, `evt.target` would be the view, so `evt.target.getCenter()`
     * would return the new center.
     *
     * You can add your own observable properties with
     * `object.set('prop', 'value')`, and retrieve that with `object.get('prop')`.
     * You can listen for changes on that property value with
     * `object.on('change:prop', listener)`. You can get a list of all
     * properties with {@link module:ol/Object~BaseObject#getProperties}.
     *
     * Note that the observable properties are separate from standard JS properties.
     * You can, for example, give your map object a title with
     * `map.title='New title'` and with `map.set('title', 'Another title')`. The
     * first will be a `hasOwnProperty`; the second will appear in
     * `getProperties()`. Only the second is observable.
     *
     * Properties can be deleted by using the unset method. E.g.
     * object.unset('foo').
     *
     * @fires ObjectEvent
     * @api
     */
    class BaseObject extends Observable$1 {
      /**
       * @param {Object<string, *>} [values] An object with key-value pairs.
       */
      constructor(values) {
        super();

        /***
         * @type {ObjectOnSignature<import("./events").EventsKey>}
         */
        this.on;

        /***
         * @type {ObjectOnSignature<import("./events").EventsKey>}
         */
        this.once;

        /***
         * @type {ObjectOnSignature<void>}
         */
        this.un;

        // Call {@link module:ol/util.getUid} to ensure that the order of objects' ids is
        // the same as the order in which they were created.  This also helps to
        // ensure that object properties are always added in the same order, which
        // helps many JavaScript engines generate faster code.
        util.getUid(this);

        /**
         * @private
         * @type {Object<string, *>}
         */
        this.values_ = null;

        if (values !== undefined) {
          this.setProperties(values);
        }
      }

      /**
       * Gets a value.
       * @param {string} key Key name.
       * @return {*} Value.
       * @api
       */
      get(key) {
        let value;
        if (this.values_ && this.values_.hasOwnProperty(key)) {
          value = this.values_[key];
        }
        return value;
      }

      /**
       * Get a list of object property names.
       * @return {Array<string>} List of property names.
       * @api
       */
      getKeys() {
        return (this.values_ && Object.keys(this.values_)) || [];
      }

      /**
       * Get an object of all property names and values.
       * @return {Object<string, *>} Object.
       * @api
       */
      getProperties() {
        return (this.values_ && Object.assign({}, this.values_)) || {};
      }

      /**
       * @return {boolean} The object has properties.
       */
      hasProperties() {
        return !!this.values_;
      }

      /**
       * @param {string} key Key name.
       * @param {*} oldValue Old value.
       */
      notify(key, oldValue) {
        let eventType;
        eventType = `change:${key}`;
        if (this.hasListener(eventType)) {
          this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
        }
        eventType = ObjectEventType.PROPERTYCHANGE;
        if (this.hasListener(eventType)) {
          this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
        }
      }

      /**
       * @param {string} key Key name.
       * @param {import("./events.js").Listener} listener Listener.
       */
      addChangeListener(key, listener) {
        this.addEventListener(`change:${key}`, listener);
      }

      /**
       * @param {string} key Key name.
       * @param {import("./events.js").Listener} listener Listener.
       */
      removeChangeListener(key, listener) {
        this.removeEventListener(`change:${key}`, listener);
      }

      /**
       * Sets a value.
       * @param {string} key Key name.
       * @param {*} value Value.
       * @param {boolean} [silent] Update without triggering an event.
       * @api
       */
      set(key, value, silent) {
        const values = this.values_ || (this.values_ = {});
        if (silent) {
          values[key] = value;
        } else {
          const oldValue = values[key];
          values[key] = value;
          if (oldValue !== value) {
            this.notify(key, oldValue);
          }
        }
      }

      /**
       * Sets a collection of key-value pairs.  Note that this changes any existing
       * properties and adds new ones (it does not remove any existing properties).
       * @param {Object<string, *>} values Values.
       * @param {boolean} [silent] Update without triggering an event.
       * @api
       */
      setProperties(values, silent) {
        for (const key in values) {
          this.set(key, values[key], silent);
        }
      }

      /**
       * Apply any properties from another object without triggering events.
       * @param {BaseObject} source The source object.
       * @protected
       */
      applyProperties(source) {
        if (!source.values_) {
          return;
        }
        Object.assign(this.values_ || (this.values_ = {}), source.values_);
      }

      /**
       * Unsets a property.
       * @param {string} key Key name.
       * @param {boolean} [silent] Unset without triggering an event.
       * @api
       */
      unset(key, silent) {
        if (this.values_ && key in this.values_) {
          const oldValue = this.values_[key];
          delete this.values_[key];
          if (isEmpty$1(this.values_)) {
            this.values_ = null;
          }
          if (!silent) {
            this.notify(key, oldValue);
          }
        }
      }
    }

    var Object$1["default"] = BaseObject;

    /**
     * @module ol/CollectionEventType
     */

    /**
     * @enum {string}
     */
    var CollectionEventType = {
      /**
       * Triggered when an item is added to the collection.
       * @event module:ol/Collection.CollectionEvent#add
       * @api
       */
      ADD: 'add',
      /**
       * Triggered when an item is removed from the collection.
       * @event module:ol/Collection.CollectionEvent#remove
       * @api
       */
      REMOVE: 'remove',
    };

    /**
     * @module ol/Collection
     */

    /**
     * @enum {string}
     * @private
     */
    const Property$1 = {
      LENGTH: 'length',
    };

    /**
     * @classdesc
     * Events emitted by {@link module:ol/Collection~Collection} instances are instances of this
     * type.
     * @template T
     */
    class CollectionEvent extends Event {
      /**
       * @param {import("./CollectionEventType.js").default} type Type.
       * @param {T} element Element.
       * @param {number} index The index of the added or removed element.
       */
      constructor(type, element, index) {
        super(type);

        /**
         * The element that is added to or removed from the collection.
         * @type {T}
         * @api
         */
        this.element = element;

        /**
         * The index of the added or removed element.
         * @type {number}
         * @api
         */
        this.index = index;
      }
    }

    /***
     * @template T
     * @template Return
     * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
     *   import("./Observable").OnSignature<import("./ObjectEventType").Types|'change:length', import("./Object").ObjectEvent, Return> &
     *   import("./Observable").OnSignature<'add'|'remove', CollectionEvent<T>, Return> &
     *   import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|import("./ObjectEventType").Types|
     *     'change:length'|'add'|'remove',Return>} CollectionOnSignature
     */

    /**
     * @typedef {Object} Options
     * @property {boolean} [unique=false] Disallow the same item from being added to
     * the collection twice.
     */

    /**
     * @classdesc
     * An expanded version of standard JS Array, adding convenience methods for
     * manipulation. Add and remove changes to the Collection trigger a Collection
     * event. Note that this does not cover changes to the objects _within_ the
     * Collection; they trigger events on the appropriate object, not on the
     * Collection as a whole.
     *
     * @fires CollectionEvent
     *
     * @template T
     * @api
     */
    class Collection extends Object$1["default"] {
      /**
       * @param {Array<T>} [array] Array.
       * @param {Options} [options] Collection options.
       */
      constructor(array, options) {
        super();

        /***
         * @type {CollectionOnSignature<T, import("./events").EventsKey>}
         */
        this.on;

        /***
         * @type {CollectionOnSignature<T, import("./events").EventsKey>}
         */
        this.once;

        /***
         * @type {CollectionOnSignature<T, void>}
         */
        this.un;

        options = options || {};

        /**
         * @private
         * @type {boolean}
         */
        this.unique_ = !!options.unique;

        /**
         * @private
         * @type {!Array<T>}
         */
        this.array_ = array ? array : [];

        if (this.unique_) {
          for (let i = 0, ii = this.array_.length; i < ii; ++i) {
            this.assertUnique_(this.array_[i], i);
          }
        }

        this.updateLength_();
      }

      /**
       * Remove all elements from the collection.
       * @api
       */
      clear() {
        while (this.getLength() > 0) {
          this.pop();
        }
      }

      /**
       * Add elements to the collection.  This pushes each item in the provided array
       * to the end of the collection.
       * @param {!Array<T>} arr Array.
       * @return {Collection<T>} This collection.
       * @api
       */
      extend(arr) {
        for (let i = 0, ii = arr.length; i < ii; ++i) {
          this.push(arr[i]);
        }
        return this;
      }

      /**
       * Iterate over each element, calling the provided callback.
       * @param {function(T, number, Array<T>): *} f The function to call
       *     for every element. This function takes 3 arguments (the element, the
       *     index and the array). The return value is ignored.
       * @api
       */
      forEach(f) {
        const array = this.array_;
        for (let i = 0, ii = array.length; i < ii; ++i) {
          f(array[i], i, array);
        }
      }

      /**
       * Get a reference to the underlying Array object. Warning: if the array
       * is mutated, no events will be dispatched by the collection, and the
       * collection's "length" property won't be in sync with the actual length
       * of the array.
       * @return {!Array<T>} Array.
       * @api
       */
      getArray() {
        return this.array_;
      }

      /**
       * Get the element at the provided index.
       * @param {number} index Index.
       * @return {T} Element.
       * @api
       */
      item(index) {
        return this.array_[index];
      }

      /**
       * Get the length of this collection.
       * @return {number} The length of the array.
       * @observable
       * @api
       */
      getLength() {
        return this.get(Property$1.LENGTH);
      }

      /**
       * Insert an element at the provided index.
       * @param {number} index Index.
       * @param {T} elem Element.
       * @api
       */
      insertAt(index, elem) {
        if (index < 0 || index > this.getLength()) {
          throw new Error('Index out of bounds: ' + index);
        }
        if (this.unique_) {
          this.assertUnique_(elem);
        }
        this.array_.splice(index, 0, elem);
        this.updateLength_();
        this.dispatchEvent(
          new CollectionEvent(CollectionEventType.ADD, elem, index)
        );
      }

      /**
       * Remove the last element of the collection and return it.
       * Return `undefined` if the collection is empty.
       * @return {T|undefined} Element.
       * @api
       */
      pop() {
        return this.removeAt(this.getLength() - 1);
      }

      /**
       * Insert the provided element at the end of the collection.
       * @param {T} elem Element.
       * @return {number} New length of the collection.
       * @api
       */
      push(elem) {
        if (this.unique_) {
          this.assertUnique_(elem);
        }
        const n = this.getLength();
        this.insertAt(n, elem);
        return this.getLength();
      }

      /**
       * Remove the first occurrence of an element from the collection.
       * @param {T} elem Element.
       * @return {T|undefined} The removed element or undefined if none found.
       * @api
       */
      remove(elem) {
        const arr = this.array_;
        for (let i = 0, ii = arr.length; i < ii; ++i) {
          if (arr[i] === elem) {
            return this.removeAt(i);
          }
        }
        return undefined;
      }

      /**
       * Remove the element at the provided index and return it.
       * Return `undefined` if the collection does not contain this index.
       * @param {number} index Index.
       * @return {T|undefined} Value.
       * @api
       */
      removeAt(index) {
        if (index < 0 || index >= this.getLength()) {
          return undefined;
        }
        const prev = this.array_[index];
        this.array_.splice(index, 1);
        this.updateLength_();
        this.dispatchEvent(
          /** @type {CollectionEvent<T>} */ (
            new CollectionEvent(CollectionEventType.REMOVE, prev, index)
          )
        );
        return prev;
      }

      /**
       * Set the element at the provided index.
       * @param {number} index Index.
       * @param {T} elem Element.
       * @api
       */
      setAt(index, elem) {
        const n = this.getLength();
        if (index >= n) {
          this.insertAt(index, elem);
          return;
        }
        if (index < 0) {
          throw new Error('Index out of bounds: ' + index);
        }
        if (this.unique_) {
          this.assertUnique_(elem, index);
        }
        const prev = this.array_[index];
        this.array_[index] = elem;
        this.dispatchEvent(
          /** @type {CollectionEvent<T>} */ (
            new CollectionEvent(CollectionEventType.REMOVE, prev, index)
          )
        );
        this.dispatchEvent(
          /** @type {CollectionEvent<T>} */ (
            new CollectionEvent(CollectionEventType.ADD, elem, index)
          )
        );
      }

      /**
       * @private
       */
      updateLength_() {
        this.set(Property$1.LENGTH, this.array_.length);
      }

      /**
       * @private
       * @param {T} elem Element.
       * @param {number} [except] Optional index to ignore.
       */
      assertUnique_(elem, except) {
        for (let i = 0, ii = this.array_.length; i < ii; ++i) {
          if (this.array_[i] === elem && i !== except) {
            throw new AssertionError$1(58);
          }
        }
      }
    }

    var Collection["default"] = Collection;

    /**
     * @module ol/asserts
     */

    /**
     * @param {*} assertion Assertion we expected to be truthy.
     * @param {number} errorCode Error code.
     */
    function asserts.assert(assertion, errorCode) {
      if (!assertion) {
        throw new AssertionError$1(errorCode);
      }
    }

    /**
     * @module ol/Feature
     */

    /**
     * @typedef {typeof Feature|typeof import("./render/Feature.js").default} FeatureClass
     */

    /**
     * @typedef {Feature|import("./render/Feature.js").default} FeatureLike
     */

    /***
     * @template Return
     * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
     *   import("./Observable").OnSignature<import("./ObjectEventType").Types|'change:geometry', import("./Object").ObjectEvent, Return> &
     *   import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|import("./ObjectEventType").Types
     *     |'change:geometry', Return>} FeatureOnSignature
     */

    /***
     * @template Geometry
     * @typedef {Object<string, *> & { geometry?: Geometry }} ObjectWithGeometry
     */

    /**
     * @classdesc
     * A vector object for geographic features with a geometry and other
     * attribute properties, similar to the features in vector file formats like
     * GeoJSON.
     *
     * Features can be styled individually with `setStyle`; otherwise they use the
     * style of their vector layer.
     *
     * Note that attribute properties are set as {@link module:ol/Object~BaseObject} properties on
     * the feature object, so they are observable, and have get/set accessors.
     *
     * Typically, a feature has a single geometry property. You can set the
     * geometry using the `setGeometry` method and get it with `getGeometry`.
     * It is possible to store more than one geometry on a feature using attribute
     * properties. By default, the geometry used for rendering is identified by
     * the property name `geometry`. If you want to use another geometry property
     * for rendering, use the `setGeometryName` method to change the attribute
     * property associated with the geometry for the feature.  For example:
     *
     * ```js
     *
     * import Feature from 'ol/Feature.js';
     * import Polygon from 'ol/geom/Polygon.js';
     * import Point from 'ol/geom/Point.js';
     *
     * const feature = new Feature({
     *   geometry: new Polygon(polyCoords),
     *   labelPoint: new Point(labelCoords),
     *   name: 'My Polygon',
     * });
     *
     * // get the polygon geometry
     * const poly = feature.getGeometry();
     *
     * // Render the feature as a point using the coordinates from labelPoint
     * feature.setGeometryName('labelPoint');
     *
     * // get the point geometry
     * const point = feature.getGeometry();
     * ```
     *
     * @api
     * @template {import("./geom/Geometry.js").default} [Geometry=import("./geom/Geometry.js").default]
     */
    class Feature extends Object$1["default"] {
      /**
       * @param {Geometry|ObjectWithGeometry<Geometry>} [geometryOrProperties]
       *     You may pass a Geometry object directly, or an object literal containing
       *     properties. If you pass an object literal, you may include a Geometry
       *     associated with a `geometry` key.
       */
      constructor(geometryOrProperties) {
        super();

        /***
         * @type {FeatureOnSignature<import("./events").EventsKey>}
         */
        this.on;

        /***
         * @type {FeatureOnSignature<import("./events").EventsKey>}
         */
        this.once;

        /***
         * @type {FeatureOnSignature<void>}
         */
        this.un;

        /**
         * @private
         * @type {number|string|undefined}
         */
        this.id_ = undefined;

        /**
         * @type {string}
         * @private
         */
        this.geometryName_ = 'geometry';

        /**
         * User provided style.
         * @private
         * @type {import("./style/Style.js").StyleLike}
         */
        this.style_ = null;

        /**
         * @private
         * @type {import("./style/Style.js").StyleFunction|undefined}
         */
        this.styleFunction_ = undefined;

        /**
         * @private
         * @type {?import("./events.js").EventsKey}
         */
        this.geometryChangeKey_ = null;

        this.addChangeListener(this.geometryName_, this.handleGeometryChanged_);

        if (geometryOrProperties) {
          if (
            typeof (
              /** @type {?} */ (geometryOrProperties).getSimplifiedGeometry
            ) === 'function'
          ) {
            const geometry = /** @type {Geometry} */ (geometryOrProperties);
            this.setGeometry(geometry);
          } else {
            /** @type {Object<string, *>} */
            const properties = geometryOrProperties;
            this.setProperties(properties);
          }
        }
      }

      /**
       * Clone this feature. If the original feature has a geometry it
       * is also cloned. The feature id is not set in the clone.
       * @return {Feature<Geometry>} The clone.
       * @api
       */
      clone() {
        const clone = /** @type {Feature<Geometry>} */ (
          new Feature(this.hasProperties() ? this.getProperties() : null)
        );
        clone.setGeometryName(this.getGeometryName());
        const geometry = this.getGeometry();
        if (geometry) {
          clone.setGeometry(/** @type {Geometry} */ (geometry.clone()));
        }
        const style = this.getStyle();
        if (style) {
          clone.setStyle(style);
        }
        return clone;
      }

      /**
       * Get the feature's default geometry.  A feature may have any number of named
       * geometries.  The "default" geometry (the one that is rendered by default) is
       * set when calling {@link module:ol/Feature~Feature#setGeometry}.
       * @return {Geometry|undefined} The default geometry for the feature.
       * @api
       * @observable
       */
      getGeometry() {
        return /** @type {Geometry|undefined} */ (this.get(this.geometryName_));
      }

      /**
       * Get the feature identifier.  This is a stable identifier for the feature and
       * is either set when reading data from a remote source or set explicitly by
       * calling {@link module:ol/Feature~Feature#setId}.
       * @return {number|string|undefined} Id.
       * @api
       */
      getId() {
        return this.id_;
      }

      /**
       * Get the name of the feature's default geometry.  By default, the default
       * geometry is named `geometry`.
       * @return {string} Get the property name associated with the default geometry
       *     for this feature.
       * @api
       */
      getGeometryName() {
        return this.geometryName_;
      }

      /**
       * Get the feature's style. Will return what was provided to the
       * {@link module:ol/Feature~Feature#setStyle} method.
       * @return {import("./style/Style.js").StyleLike|undefined} The feature style.
       * @api
       */
      getStyle() {
        return this.style_;
      }

      /**
       * Get the feature's style function.
       * @return {import("./style/Style.js").StyleFunction|undefined} Return a function
       * representing the current style of this feature.
       * @api
       */
      getStyleFunction() {
        return this.styleFunction_;
      }

      /**
       * @private
       */
      handleGeometryChange_() {
        this.changed();
      }

      /**
       * @private
       */
      handleGeometryChanged_() {
        if (this.geometryChangeKey_) {
          events.unlistenByKey(this.geometryChangeKey_);
          this.geometryChangeKey_ = null;
        }
        const geometry = this.getGeometry();
        if (geometry) {
          this.geometryChangeKey_ = events.listen(
            geometry,
            EventType.CHANGE,
            this.handleGeometryChange_,
            this
          );
        }
        this.changed();
      }

      /**
       * Set the default geometry for the feature.  This will update the property
       * with the name returned by {@link module:ol/Feature~Feature#getGeometryName}.
       * @param {Geometry|undefined} geometry The new geometry.
       * @api
       * @observable
       */
      setGeometry(geometry) {
        this.set(this.geometryName_, geometry);
      }

      /**
       * Set the style for the feature to override the layer style.  This can be a
       * single style object, an array of styles, or a function that takes a
       * resolution and returns an array of styles. To unset the feature style, call
       * `setStyle()` without arguments or a falsey value.
       * @param {import("./style/Style.js").StyleLike} [style] Style for this feature.
       * @api
       * @fires module:ol/events/Event~BaseEvent#event:change
       */
      setStyle(style) {
        this.style_ = style;
        this.styleFunction_ = !style ? undefined : createStyleFunction(style);
        this.changed();
      }

      /**
       * Set the feature id.  The feature id is considered stable and may be used when
       * requesting features or comparing identifiers returned from a remote source.
       * The feature id can be used with the
       * {@link module:ol/source/Vector~VectorSource#getFeatureById} method.
       * @param {number|string|undefined} id The feature id.
       * @api
       * @fires module:ol/events/Event~BaseEvent#event:change
       */
      setId(id) {
        this.id_ = id;
        this.changed();
      }

      /**
       * Set the property name to be used when getting the feature's default geometry.
       * When calling {@link module:ol/Feature~Feature#getGeometry}, the value of the property with
       * this name will be returned.
       * @param {string} name The property name of the default geometry.
       * @api
       */
      setGeometryName(name) {
        this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_);
        this.geometryName_ = name;
        this.addChangeListener(this.geometryName_, this.handleGeometryChanged_);
        this.handleGeometryChanged_();
      }
    }

    /**
     * Convert the provided object into a feature style function.  Functions passed
     * through unchanged.  Arrays of Style or single style objects wrapped
     * in a new feature style function.
     * @param {!import("./style/Style.js").StyleFunction|!Array<import("./style/Style.js").default>|!import("./style/Style.js").default} obj
     *     A feature style function, a single style, or an array of styles.
     * @return {import("./style/Style.js").StyleFunction} A style function.
     */
    function createStyleFunction(obj) {
      if (typeof obj === 'function') {
        return obj;
      }
      /**
       * @type {Array<import("./style/Style.js").default>}
       */
      let styles;
      if (Array.isArray(obj)) {
        styles = obj;
      } else {
        asserts.assert(typeof (/** @type {?} */ (obj).getZIndex) === 'function', 41); // Expected an `import("./style/Style.js").Style` or an array of `import("./style/Style.js").Style`
        const style = /** @type {import("./style/Style.js").default} */ (obj);
        styles = [style];
      }
      return function () {
        return styles;
      };
    }
    var Feature$1 = Feature;

    /**
     * @module ol/has
     */

    const ua =
      typeof navigator !== 'undefined' && typeof navigator.userAgent !== 'undefined'
        ? navigator.userAgent.toLowerCase()
        : '';

    /**
     * User agent string says we are dealing with Firefox as browser.
     * @type {boolean}
     */
    const has.FIREFOX = ua.includes('firefox');

    /**
     * User agent string says we are dealing with Safari as browser.
     * @type {boolean}
     */
    const SAFARI = ua.includes('safari') && !ua.includes('chrom');

    /**
     * https://bugs.webkit.org/show_bug.cgi?id=237906
     * @type {boolean}
     */
    SAFARI &&
      (ua.includes('version/15.4') ||
        /cpu (os|iphone os) 15_4 like mac os x/.test(ua));

    /**
     * User agent string says we are dealing with a WebKit engine.
     * @type {boolean}
     */
    const has.WEBKIT = ua.includes('webkit') && !ua.includes('edge');

    /**
     * User agent string says we are dealing with a Mac as platform.
     * @type {boolean}
     */
    const has.MAC = ua.includes('macintosh');

    /**
     * The ratio between physical pixels and device-independent pixels
     * (dips) on the device (`window.devicePixelRatio`).
     * @const
     * @type {number}
     * @api
     */
    const has.DEVICE_PIXEL_RATIO =
      typeof devicePixelRatio !== 'undefined' ? devicePixelRatio : 1;

    /**
     * The execution context is a worker with OffscreenCanvas available.
     * @const
     * @type {boolean}
     */
    typeof WorkerGlobalScope !== 'undefined' &&
      typeof OffscreenCanvas !== 'undefined' &&
      self instanceof WorkerGlobalScope; //eslint-disable-line

    /**
     * @type {boolean}
     */
    const PASSIVE_EVENT_LISTENERS = (function () {
      let passive = false;
      try {
        const options = Object.defineProperty({}, 'passive', {
          get: function () {
            passive = true;
          },
        });

        window.addEventListener('_', null, options);
        window.removeEventListener('_', null, options);
      } catch (error) {
        // passive not supported
      }
      return passive;
    })();

    /**
     * @module ol/transform
     */

    /**
     * An array representing an affine 2d transformation for use with
     * {@link module:ol/transform} functions. The array has 6 elements.
     * @typedef {!Array<number>} Transform
     * @api
     */

    /**
     * Collection of affine 2d transformation functions. The functions work on an
     * array of 6 elements. The element order is compatible with the [SVGMatrix
     * interface](https://developer.mozilla.org/en-US/docs/Web/API/SVGMatrix) and is
     * a subset (elements a to f) of a 3×3 matrix:
     * ```
     * [ a c e ]
     * [ b d f ]
     * [ 0 0 1 ]
     * ```
     */

    /**
     * @private
     * @type {Transform}
     */
    new Array(6);

    /**
     * Create an identity transform.
     * @return {!Transform} Identity transform.
     */
    function transform.create() {
      return [1, 0, 0, 1, 0, 0];
    }

    /**
     * Transforms the given coordinate with the given transform returning the
     * resulting, transformed coordinate. The coordinate will be modified in-place.
     *
     * @param {Transform} transform The transformation.
     * @param {import("./coordinate.js").Coordinate|import("./pixel.js").Pixel} coordinate The coordinate to transform.
     * @return {import("./coordinate.js").Coordinate|import("./pixel.js").Pixel} return coordinate so that operations can be
     *     chained together.
     */
    function apply(transform, coordinate) {
      const x = coordinate[0];
      const y = coordinate[1];
      coordinate[0] = transform[0] * x + transform[2] * y + transform[4];
      coordinate[1] = transform[1] * x + transform[3] * y + transform[5];
      return coordinate;
    }

    /**
     * Creates a composite transform given an initial translation, scale, rotation, and
     * final translation (in that order only, not commutative).
     * @param {!Transform} transform The transform (will be modified in place).
     * @param {number} dx1 Initial translation x.
     * @param {number} dy1 Initial translation y.
     * @param {number} sx Scale factor x.
     * @param {number} sy Scale factor y.
     * @param {number} angle Rotation (in counter-clockwise radians).
     * @param {number} dx2 Final translation x.
     * @param {number} dy2 Final translation y.
     * @return {!Transform} The composite transform.
     */
    function transform.compose(transform, dx1, dy1, sx, sy, angle, dx2, dy2) {
      const sin = Math.sin(angle);
      const cos = Math.cos(angle);
      transform[0] = sx * cos;
      transform[1] = sy * sin;
      transform[2] = -sx * sin;
      transform[3] = sy * cos;
      transform[4] = dx2 * sx * cos - dy2 * sx * sin + dx1;
      transform[5] = dx2 * sy * sin + dy2 * sy * cos + dy1;
      return transform;
    }

    /**
     * Invert the given transform.
     * @param {!Transform} target Transform to be set as the inverse of
     *     the source transform.
     * @param {!Transform} source The source transform to invert.
     * @return {!Transform} The inverted (target) transform.
     */
    function transform.makeInverse(target, source) {
      const det = determinant(source);
      asserts.assert(det !== 0, 32); // Transformation matrix cannot be inverted

      const a = source[0];
      const b = source[1];
      const c = source[2];
      const d = source[3];
      const e = source[4];
      const f = source[5];

      target[0] = d / det;
      target[1] = -b / det;
      target[2] = -c / det;
      target[3] = a / det;
      target[4] = (c * f - d * e) / det;
      target[5] = -(a * f - b * e) / det;

      return target;
    }

    /**
     * Returns the determinant of the given matrix.
     * @param {!Transform} mat Matrix.
     * @return {number} Determinant.
     */
    function determinant(mat) {
      return mat[0] * mat[3] - mat[1] * mat[2];
    }

    /**
     * @module ol/extent/Relationship
     */

    /**
     * Relationship to an extent.
     * @enum {number}
     */
    var Relationship = {
      UNKNOWN: 0,
      INTERSECTING: 1,
      ABOVE: 2,
      RIGHT: 4,
      BELOW: 8,
      LEFT: 16,
    };

    /**
     * @module ol/extent
     */

    /**
     * Creates a clone of an extent.
     *
     * @param {Extent} extent Extent to clone.
     * @param {Extent} [dest] Extent.
     * @return {Extent} The clone.
     */
    function clone(extent, dest) {
      if (dest) {
        dest[0] = extent[0];
        dest[1] = extent[1];
        dest[2] = extent[2];
        dest[3] = extent[3];
        return dest;
      }
      return extent.slice();
    }

    /**
     * @param {Extent} extent Extent.
     * @param {number} x X.
     * @param {number} y Y.
     * @return {number} Closest squared distance.
     */
    function extent.closestSquaredDistanceXY(extent, x, y) {
      let dx, dy;
      if (x < extent[0]) {
        dx = extent[0] - x;
      } else if (extent[2] < x) {
        dx = x - extent[2];
      } else {
        dx = 0;
      }
      if (y < extent[1]) {
        dy = extent[1] - y;
      } else if (extent[3] < y) {
        dy = y - extent[3];
      } else {
        dy = 0;
      }
      return dx * dx + dy * dy;
    }

    /**
     * Check if one extent contains another.
     *
     * An extent is deemed contained if it lies completely within the other extent,
     * including if they share one or more edges.
     *
     * @param {Extent} extent1 Extent 1.
     * @param {Extent} extent2 Extent 2.
     * @return {boolean} The second extent is contained by or on the edge of the
     *     first.
     * @api
     */
    function extent.containsExtent(extent1, extent2) {
      return (
        extent1[0] <= extent2[0] &&
        extent2[2] <= extent1[2] &&
        extent1[1] <= extent2[1] &&
        extent2[3] <= extent1[3]
      );
    }

    /**
     * Check if the passed coordinate is contained or on the edge of the extent.
     *
     * @param {Extent} extent Extent.
     * @param {number} x X coordinate.
     * @param {number} y Y coordinate.
     * @return {boolean} The x, y values are contained in the extent.
     * @api
     */
    function extent.containsXY(extent, x, y) {
      return extent[0] <= x && x <= extent[2] && extent[1] <= y && y <= extent[3];
    }

    /**
     * Get the relationship between a coordinate and extent.
     * @param {Extent} extent The extent.
     * @param {import("./coordinate.js").Coordinate} coordinate The coordinate.
     * @return {import("./extent/Relationship.js").default} The relationship (bitwise compare with
     *     import("./extent/Relationship.js").Relationship).
     */
    function coordinateRelationship(extent, coordinate) {
      const minX = extent[0];
      const minY = extent[1];
      const maxX = extent[2];
      const maxY = extent[3];
      const x = coordinate[0];
      const y = coordinate[1];
      let relationship = Relationship.UNKNOWN;
      if (x < minX) {
        relationship = relationship | Relationship.LEFT;
      } else if (x > maxX) {
        relationship = relationship | Relationship.RIGHT;
      }
      if (y < minY) {
        relationship = relationship | Relationship.BELOW;
      } else if (y > maxY) {
        relationship = relationship | Relationship.ABOVE;
      }
      if (relationship === Relationship.UNKNOWN) {
        relationship = Relationship.INTERSECTING;
      }
      return relationship;
    }

    /**
     * Create an empty extent.
     * @return {Extent} Empty extent.
     * @api
     */
    function extent.createEmpty() {
      return [Infinity, Infinity, -Infinity, -Infinity];
    }

    /**
     * Create a new extent or update the provided extent.
     * @param {number} minX Minimum X.
     * @param {number} minY Minimum Y.
     * @param {number} maxX Maximum X.
     * @param {number} maxY Maximum Y.
     * @param {Extent} [dest] Destination extent.
     * @return {Extent} Extent.
     */
    function createOrUpdate(minX, minY, maxX, maxY, dest) {
      if (dest) {
        dest[0] = minX;
        dest[1] = minY;
        dest[2] = maxX;
        dest[3] = maxY;
        return dest;
      }
      return [minX, minY, maxX, maxY];
    }

    /**
     * Create a new empty extent or make the provided one empty.
     * @param {Extent} [dest] Extent.
     * @return {Extent} Extent.
     */
    function extent.createOrUpdateEmpty(dest) {
      return createOrUpdate(Infinity, Infinity, -Infinity, -Infinity, dest);
    }

    /**
     * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
     * @param {Extent} [dest] Extent.
     * @return {Extent} Extent.
     */
    function extent.createOrUpdateFromCoordinate(coordinate, dest) {
      const x = coordinate[0];
      const y = coordinate[1];
      return createOrUpdate(x, y, x, y, dest);
    }

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {Extent} [dest] Extent.
     * @return {Extent} Extent.
     */
    function extent.createOrUpdateFromFlatCoordinates(
      flatCoordinates,
      offset,
      end,
      stride,
      dest
    ) {
      const extent$1 = extent.createOrUpdateEmpty(dest);
      return extent.extendFlatCoordinates(extent$1, flatCoordinates, offset, end, stride);
    }

    /**
     * Determine if two extents are equivalent.
     * @param {Extent} extent1 Extent 1.
     * @param {Extent} extent2 Extent 2.
     * @return {boolean} The two extents are equivalent.
     * @api
     */
    function equals$1(extent1, extent2) {
      return (
        extent1[0] == extent2[0] &&
        extent1[2] == extent2[2] &&
        extent1[1] == extent2[1] &&
        extent1[3] == extent2[3]
      );
    }

    /**
     * @param {Extent} extent Extent.
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @return {Extent} Extent.
     */
    function extent.extendFlatCoordinates(
      extent,
      flatCoordinates,
      offset,
      end,
      stride
    ) {
      for (; offset < end; offset += stride) {
        extendXY(extent, flatCoordinates[offset], flatCoordinates[offset + 1]);
      }
      return extent;
    }

    /**
     * @param {Extent} extent Extent.
     * @param {number} x X.
     * @param {number} y Y.
     */
    function extendXY(extent, x, y) {
      extent[0] = Math.min(extent[0], x);
      extent[1] = Math.min(extent[1], y);
      extent[2] = Math.max(extent[2], x);
      extent[3] = Math.max(extent[3], y);
    }

    /**
     * This function calls `callback` for each corner of the extent. If the
     * callback returns a truthy value the function returns that value
     * immediately. Otherwise the function returns `false`.
     * @param {Extent} extent Extent.
     * @param {function(import("./coordinate.js").Coordinate): S} callback Callback.
     * @return {S|boolean} Value.
     * @template S
     */
    function extent.forEachCorner(extent, callback) {
      let val;
      val = callback(getBottomLeft(extent));
      if (val) {
        return val;
      }
      val = callback(getBottomRight(extent));
      if (val) {
        return val;
      }
      val = callback(getTopRight(extent));
      if (val) {
        return val;
      }
      val = callback(getTopLeft(extent));
      if (val) {
        return val;
      }
      return false;
    }

    /**
     * Get the bottom left coordinate of an extent.
     * @param {Extent} extent Extent.
     * @return {import("./coordinate.js").Coordinate} Bottom left coordinate.
     * @api
     */
    function getBottomLeft(extent) {
      return [extent[0], extent[1]];
    }

    /**
     * Get the bottom right coordinate of an extent.
     * @param {Extent} extent Extent.
     * @return {import("./coordinate.js").Coordinate} Bottom right coordinate.
     * @api
     */
    function getBottomRight(extent) {
      return [extent[2], extent[1]];
    }

    /**
     * Get the center coordinate of an extent.
     * @param {Extent} extent Extent.
     * @return {import("./coordinate.js").Coordinate} Center.
     * @api
     */
    function extent.getCenter(extent) {
      return [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
    }

    /**
     * @param {import("./coordinate.js").Coordinate} center Center.
     * @param {number} resolution Resolution.
     * @param {number} rotation Rotation.
     * @param {import("./size.js").Size} size Size.
     * @param {Extent} [dest] Destination extent.
     * @return {Extent} Extent.
     */
    function getForViewAndSize(center, resolution, rotation, size, dest) {
      const [x0, y0, x1, y1, x2, y2, x3, y3] = getRotatedViewport(
        center,
        resolution,
        rotation,
        size
      );
      return createOrUpdate(
        Math.min(x0, x1, x2, x3),
        Math.min(y0, y1, y2, y3),
        Math.max(x0, x1, x2, x3),
        Math.max(y0, y1, y2, y3),
        dest
      );
    }

    /**
     * @param {import("./coordinate.js").Coordinate} center Center.
     * @param {number} resolution Resolution.
     * @param {number} rotation Rotation.
     * @param {import("./size.js").Size} size Size.
     * @return {Array<number>} Linear ring representing the viewport.
     */
    function getRotatedViewport(center, resolution, rotation, size) {
      const dx = (resolution * size[0]) / 2;
      const dy = (resolution * size[1]) / 2;
      const cosRotation = Math.cos(rotation);
      const sinRotation = Math.sin(rotation);
      const xCos = dx * cosRotation;
      const xSin = dx * sinRotation;
      const yCos = dy * cosRotation;
      const ySin = dy * sinRotation;
      const x = center[0];
      const y = center[1];
      return [
        x - xCos + ySin,
        y - xSin - yCos,
        x - xCos - ySin,
        y - xSin + yCos,
        x + xCos - ySin,
        y + xSin + yCos,
        x + xCos + ySin,
        y + xSin - yCos,
        x - xCos + ySin,
        y - xSin - yCos,
      ];
    }

    /**
     * Get the height of an extent.
     * @param {Extent} extent Extent.
     * @return {number} Height.
     * @api
     */
    function extent.getHeight(extent) {
      return extent[3] - extent[1];
    }

    /**
     * Get the intersection of two extents.
     * @param {Extent} extent1 Extent 1.
     * @param {Extent} extent2 Extent 2.
     * @param {Extent} [dest] Optional extent to populate with intersection.
     * @return {Extent} Intersecting extent.
     * @api
     */
    function extent.getIntersection(extent1, extent2, dest) {
      const intersection = dest ? dest : extent.createEmpty();
      if (extent.intersects(extent1, extent2)) {
        if (extent1[0] > extent2[0]) {
          intersection[0] = extent1[0];
        } else {
          intersection[0] = extent2[0];
        }
        if (extent1[1] > extent2[1]) {
          intersection[1] = extent1[1];
        } else {
          intersection[1] = extent2[1];
        }
        if (extent1[2] < extent2[2]) {
          intersection[2] = extent1[2];
        } else {
          intersection[2] = extent2[2];
        }
        if (extent1[3] < extent2[3]) {
          intersection[3] = extent1[3];
        } else {
          intersection[3] = extent2[3];
        }
      } else {
        extent.createOrUpdateEmpty(intersection);
      }
      return intersection;
    }

    /**
     * Get the top left coordinate of an extent.
     * @param {Extent} extent Extent.
     * @return {import("./coordinate.js").Coordinate} Top left coordinate.
     * @api
     */
    function getTopLeft(extent) {
      return [extent[0], extent[3]];
    }

    /**
     * Get the top right coordinate of an extent.
     * @param {Extent} extent Extent.
     * @return {import("./coordinate.js").Coordinate} Top right coordinate.
     * @api
     */
    function getTopRight(extent) {
      return [extent[2], extent[3]];
    }

    /**
     * Get the width of an extent.
     * @param {Extent} extent Extent.
     * @return {number} Width.
     * @api
     */
    function extent.getWidth(extent) {
      return extent[2] - extent[0];
    }

    /**
     * Determine if one extent intersects another.
     * @param {Extent} extent1 Extent 1.
     * @param {Extent} extent2 Extent.
     * @return {boolean} The two extents intersect.
     * @api
     */
    function extent.intersects(extent1, extent2) {
      return (
        extent1[0] <= extent2[2] &&
        extent1[2] >= extent2[0] &&
        extent1[1] <= extent2[3] &&
        extent1[3] >= extent2[1]
      );
    }

    /**
     * Determine if an extent is empty.
     * @param {Extent} extent Extent.
     * @return {boolean} Is empty.
     * @api
     */
    function isEmpty(extent) {
      return extent[2] < extent[0] || extent[3] < extent[1];
    }

    /**
     * @param {Extent} extent Extent.
     * @param {Extent} [dest] Extent.
     * @return {Extent} Extent.
     */
    function extent.returnOrUpdate(extent, dest) {
      if (dest) {
        dest[0] = extent[0];
        dest[1] = extent[1];
        dest[2] = extent[2];
        dest[3] = extent[3];
        return dest;
      }
      return extent;
    }

    /**
     * Determine if the segment between two coordinates intersects (crosses,
     * touches, or is contained by) the provided extent.
     * @param {Extent} extent The extent.
     * @param {import("./coordinate.js").Coordinate} start Segment start coordinate.
     * @param {import("./coordinate.js").Coordinate} end Segment end coordinate.
     * @return {boolean} The segment intersects the extent.
     */
    function extent.intersectsSegment(extent, start, end) {
      let intersects = false;
      const startRel = coordinateRelationship(extent, start);
      const endRel = coordinateRelationship(extent, end);
      if (
        startRel === Relationship.INTERSECTING ||
        endRel === Relationship.INTERSECTING
      ) {
        intersects = true;
      } else {
        const minX = extent[0];
        const minY = extent[1];
        const maxX = extent[2];
        const maxY = extent[3];
        const startX = start[0];
        const startY = start[1];
        const endX = end[0];
        const endY = end[1];
        const slope = (endY - startY) / (endX - startX);
        let x, y;
        if (!!(endRel & Relationship.ABOVE) && !(startRel & Relationship.ABOVE)) {
          // potentially intersects top
          x = endX - (endY - maxY) / slope;
          intersects = x >= minX && x <= maxX;
        }
        if (
          !intersects &&
          !!(endRel & Relationship.RIGHT) &&
          !(startRel & Relationship.RIGHT)
        ) {
          // potentially intersects right
          y = endY - (endX - maxX) * slope;
          intersects = y >= minY && y <= maxY;
        }
        if (
          !intersects &&
          !!(endRel & Relationship.BELOW) &&
          !(startRel & Relationship.BELOW)
        ) {
          // potentially intersects bottom
          x = endX - (endY - minY) / slope;
          intersects = x >= minX && x <= maxX;
        }
        if (
          !intersects &&
          !!(endRel & Relationship.LEFT) &&
          !(startRel & Relationship.LEFT)
        ) {
          // potentially intersects left
          y = endY - (endX - minX) * slope;
          intersects = y >= minY && y <= maxY;
        }
      }
      return intersects;
    }

    /**
     * @module ol/proj/Units
     */

    /**
     * @typedef {Object} MetersPerUnitLookup
     * @property {number} radians Radians
     * @property {number} degrees Degrees
     * @property {number} ft  Feet
     * @property {number} m Meters
     * @property {number} us-ft US feet
     */

    /**
     * Meters per unit lookup table.
     * @const
     * @type {MetersPerUnitLookup}
     * @api
     */
    const METERS_PER_UNIT$1 = {
      // use the radius of the Normal sphere
      'radians': 6370997 / (2 * Math.PI),
      'degrees': (2 * Math.PI * 6370997) / 360,
      'ft': 0.3048,
      'm': 1,
      'us-ft': 1200 / 3937,
    };

    /**
     * @module ol/proj/Projection
     */

    /**
     * @typedef {Object} Options
     * @property {string} code The SRS identifier code, e.g. `EPSG:4326`.
     * @property {import("./Units.js").Units} [units] Units. Required unless a
     * proj4 projection is defined for `code`.
     * @property {import("../extent.js").Extent} [extent] The validity extent for the SRS.
     * @property {string} [axisOrientation='enu'] The axis orientation as specified in Proj4.
     * @property {boolean} [global=false] Whether the projection is valid for the whole globe.
     * @property {number} [metersPerUnit] The meters per unit for the SRS.
     * If not provided, the `units` are used to get the meters per unit from the {@link METERS_PER_UNIT}
     * lookup table.
     * @property {import("../extent.js").Extent} [worldExtent] The world extent for the SRS.
     * @property {function(number, import("../coordinate.js").Coordinate):number} [getPointResolution]
     * Function to determine resolution at a point. The function is called with a
     * `number` view resolution and a {@link module:ol/coordinate~Coordinate} as arguments, and returns
     * the `number` resolution in projection units at the passed coordinate. If this is `undefined`,
     * the default {@link module:ol/proj.getPointResolution} function will be used.
     */

    /**
     * @classdesc
     * Projection definition class. One of these is created for each projection
     * supported in the application and stored in the {@link module:ol/proj} namespace.
     * You can use these in applications, but this is not required, as API params
     * and options use {@link module:ol/proj~ProjectionLike} which means the simple string
     * code will suffice.
     *
     * You can use {@link module:ol/proj.get} to retrieve the object for a particular
     * projection.
     *
     * The library includes definitions for `EPSG:4326` and `EPSG:3857`, together
     * with the following aliases:
     * * `EPSG:4326`: CRS:84, urn:ogc:def:crs:EPSG:6.6:4326,
     *     urn:ogc:def:crs:OGC:1.3:CRS84, urn:ogc:def:crs:OGC:2:84,
     *     http://www.opengis.net/gml/srs/epsg.xml#4326,
     *     urn:x-ogc:def:crs:EPSG:4326
     * * `EPSG:3857`: EPSG:102100, EPSG:102113, EPSG:900913,
     *     urn:ogc:def:crs:EPSG:6.18:3:3857,
     *     http://www.opengis.net/gml/srs/epsg.xml#3857
     *
     * If you use [proj4js](https://github.com/proj4js/proj4js), aliases can
     * be added using `proj4.defs()`. After all required projection definitions are
     * added, call the {@link module:ol/proj/proj4.register} function.
     *
     * @api
     */
    class Projection$1 {
      /**
       * @param {Options} options Projection options.
       */
      constructor(options) {
        /**
         * @private
         * @type {string}
         */
        this.code_ = options.code;

        /**
         * Units of projected coordinates. When set to `TILE_PIXELS`, a
         * `this.extent_` and `this.worldExtent_` must be configured properly for each
         * tile.
         * @private
         * @type {import("./Units.js").Units}
         */
        this.units_ = /** @type {import("./Units.js").Units} */ (options.units);

        /**
         * Validity extent of the projection in projected coordinates. For projections
         * with `TILE_PIXELS` units, this is the extent of the tile in
         * tile pixel space.
         * @private
         * @type {import("../extent.js").Extent}
         */
        this.extent_ = options.extent !== undefined ? options.extent : null;

        /**
         * Extent of the world in EPSG:4326. For projections with
         * `TILE_PIXELS` units, this is the extent of the tile in
         * projected coordinate space.
         * @private
         * @type {import("../extent.js").Extent}
         */
        this.worldExtent_ =
          options.worldExtent !== undefined ? options.worldExtent : null;

        /**
         * @private
         * @type {string}
         */
        this.axisOrientation_ =
          options.axisOrientation !== undefined ? options.axisOrientation : 'enu';

        /**
         * @private
         * @type {boolean}
         */
        this.global_ = options.global !== undefined ? options.global : false;

        /**
         * @private
         * @type {boolean}
         */
        this.canWrapX_ = !!(this.global_ && this.extent_);

        /**
         * @private
         * @type {function(number, import("../coordinate.js").Coordinate):number|undefined}
         */
        this.getPointResolutionFunc_ = options.getPointResolution;

        /**
         * @private
         * @type {import("../tilegrid/TileGrid.js").default}
         */
        this.defaultTileGrid_ = null;

        /**
         * @private
         * @type {number|undefined}
         */
        this.metersPerUnit_ = options.metersPerUnit;
      }

      /**
       * @return {boolean} The projection is suitable for wrapping the x-axis
       */
      canWrapX() {
        return this.canWrapX_;
      }

      /**
       * Get the code for this projection, e.g. 'EPSG:4326'.
       * @return {string} Code.
       * @api
       */
      getCode() {
        return this.code_;
      }

      /**
       * Get the validity extent for this projection.
       * @return {import("../extent.js").Extent} Extent.
       * @api
       */
      getExtent() {
        return this.extent_;
      }

      /**
       * Get the units of this projection.
       * @return {import("./Units.js").Units} Units.
       * @api
       */
      getUnits() {
        return this.units_;
      }

      /**
       * Get the amount of meters per unit of this projection.  If the projection is
       * not configured with `metersPerUnit` or a units identifier, the return is
       * `undefined`.
       * @return {number|undefined} Meters.
       * @api
       */
      getMetersPerUnit() {
        return this.metersPerUnit_ || METERS_PER_UNIT$1[this.units_];
      }

      /**
       * Get the world extent for this projection.
       * @return {import("../extent.js").Extent} Extent.
       * @api
       */
      getWorldExtent() {
        return this.worldExtent_;
      }

      /**
       * Get the axis orientation of this projection.
       * Example values are:
       * enu - the default easting, northing, elevation.
       * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
       *     or south orientated transverse mercator.
       * wnu - westing, northing, up - some planetary coordinate systems have
       *     "west positive" coordinate systems
       * @return {string} Axis orientation.
       * @api
       */
      getAxisOrientation() {
        return this.axisOrientation_;
      }

      /**
       * Is this projection a global projection which spans the whole world?
       * @return {boolean} Whether the projection is global.
       * @api
       */
      isGlobal() {
        return this.global_;
      }

      /**
       * Set if the projection is a global projection which spans the whole world
       * @param {boolean} global Whether the projection is global.
       * @api
       */
      setGlobal(global) {
        this.global_ = global;
        this.canWrapX_ = !!(global && this.extent_);
      }

      /**
       * @return {import("../tilegrid/TileGrid.js").default} The default tile grid.
       */
      getDefaultTileGrid() {
        return this.defaultTileGrid_;
      }

      /**
       * @param {import("../tilegrid/TileGrid.js").default} tileGrid The default tile grid.
       */
      setDefaultTileGrid(tileGrid) {
        this.defaultTileGrid_ = tileGrid;
      }

      /**
       * Set the validity extent for this projection.
       * @param {import("../extent.js").Extent} extent Extent.
       * @api
       */
      setExtent(extent) {
        this.extent_ = extent;
        this.canWrapX_ = !!(this.global_ && extent);
      }

      /**
       * Set the world extent for this projection.
       * @param {import("../extent.js").Extent} worldExtent World extent
       *     [minlon, minlat, maxlon, maxlat].
       * @api
       */
      setWorldExtent(worldExtent) {
        this.worldExtent_ = worldExtent;
      }

      /**
       * Set the getPointResolution function (see {@link module:ol/proj.getPointResolution}
       * for this projection.
       * @param {function(number, import("../coordinate.js").Coordinate):number} func Function
       * @api
       */
      setGetPointResolution(func) {
        this.getPointResolutionFunc_ = func;
      }

      /**
       * Get the custom point resolution function for this projection (if set).
       * @return {function(number, import("../coordinate.js").Coordinate):number|undefined} The custom point
       * resolution function (if set).
       */
      getPointResolutionFunc() {
        return this.getPointResolutionFunc_;
      }
    }

    var Projection$2 = Projection$1;

    /**
     * @module ol/proj/epsg3857
     */

    /**
     * Radius of WGS84 sphere
     *
     * @const
     * @type {number}
     */
    const RADIUS$1 = 6378137;

    /**
     * @const
     * @type {number}
     */
    const HALF_SIZE = Math.PI * RADIUS$1;

    /**
     * @const
     * @type {import("../extent.js").Extent}
     */
    const EXTENT$1 = [-HALF_SIZE, -HALF_SIZE, HALF_SIZE, HALF_SIZE];

    /**
     * @const
     * @type {import("../extent.js").Extent}
     */
    const WORLD_EXTENT = [-180, -85, 180, 85];

    /**
     * Maximum safe value in y direction
     * @const
     * @type {number}
     */
    const MAX_SAFE_Y = RADIUS$1 * Math.log(Math.tan(Math.PI / 2));

    /**
     * @classdesc
     * Projection object for web/spherical Mercator (EPSG:3857).
     */
    class EPSG3857Projection extends Projection$2 {
      /**
       * @param {string} code Code.
       */
      constructor(code) {
        super({
          code: code,
          units: 'm',
          extent: EXTENT$1,
          global: true,
          worldExtent: WORLD_EXTENT,
          getPointResolution: function (resolution, point) {
            return resolution / Math.cosh(point[1] / RADIUS$1);
          },
        });
      }
    }

    /**
     * Projections equal to EPSG:3857.
     *
     * @const
     * @type {Array<import("./Projection.js").default>}
     */
    const PROJECTIONS$1 = [
      new EPSG3857Projection('EPSG:3857'),
      new EPSG3857Projection('EPSG:102100'),
      new EPSG3857Projection('EPSG:102113'),
      new EPSG3857Projection('EPSG:900913'),
      new EPSG3857Projection('http://www.opengis.net/def/crs/EPSG/0/3857'),
      new EPSG3857Projection('http://www.opengis.net/gml/srs/epsg.xml#3857'),
    ];

    /**
     * Transformation from EPSG:4326 to EPSG:3857.
     *
     * @param {Array<number>} input Input array of coordinate values.
     * @param {Array<number>} [output] Output array of coordinate values.
     * @param {number} [dimension] Dimension (default is `2`).
     * @return {Array<number>} Output array of coordinate values.
     */
    function fromEPSG4326(input, output, dimension) {
      const length = input.length;
      dimension = dimension > 1 ? dimension : 2;
      if (output === undefined) {
        if (dimension > 2) {
          // preserve values beyond second dimension
          output = input.slice();
        } else {
          output = new Array(length);
        }
      }
      for (let i = 0; i < length; i += dimension) {
        output[i] = (HALF_SIZE * input[i]) / 180;
        let y = RADIUS$1 * Math.log(Math.tan((Math.PI * (+input[i + 1] + 90)) / 360));
        if (y > MAX_SAFE_Y) {
          y = MAX_SAFE_Y;
        } else if (y < -MAX_SAFE_Y) {
          y = -MAX_SAFE_Y;
        }
        output[i + 1] = y;
      }
      return output;
    }

    /**
     * Transformation from EPSG:3857 to EPSG:4326.
     *
     * @param {Array<number>} input Input array of coordinate values.
     * @param {Array<number>} [output] Output array of coordinate values.
     * @param {number} [dimension] Dimension (default is `2`).
     * @return {Array<number>} Output array of coordinate values.
     */
    function toEPSG4326(input, output, dimension) {
      const length = input.length;
      dimension = dimension > 1 ? dimension : 2;
      if (output === undefined) {
        if (dimension > 2) {
          // preserve values beyond second dimension
          output = input.slice();
        } else {
          output = new Array(length);
        }
      }
      for (let i = 0; i < length; i += dimension) {
        output[i] = (180 * input[i]) / HALF_SIZE;
        output[i + 1] =
          (360 * Math.atan(Math.exp(input[i + 1] / RADIUS$1))) / Math.PI - 90;
      }
      return output;
    }

    /**
     * @module ol/proj/epsg4326
     */

    /**
     * Semi-major radius of the WGS84 ellipsoid.
     *
     * @const
     * @type {number}
     */
    const RADIUS = 6378137;

    /**
     * Extent of the EPSG:4326 projection which is the whole world.
     *
     * @const
     * @type {import("../extent.js").Extent}
     */
    const EXTENT = [-180, -90, 180, 90];

    /**
     * @const
     * @type {number}
     */
    const METERS_PER_UNIT = (Math.PI * RADIUS) / 180;

    /**
     * @classdesc
     * Projection object for WGS84 geographic coordinates (EPSG:4326).
     *
     * Note that OpenLayers does not strictly comply with the EPSG definition.
     * The EPSG registry defines 4326 as a CRS for Latitude,Longitude (y,x).
     * OpenLayers treats EPSG:4326 as a pseudo-projection, with x,y coordinates.
     */
    class EPSG4326Projection extends Projection$2 {
      /**
       * @param {string} code Code.
       * @param {string} [axisOrientation] Axis orientation.
       */
      constructor(code, axisOrientation) {
        super({
          code: code,
          units: 'degrees',
          extent: EXTENT,
          axisOrientation: axisOrientation,
          global: true,
          metersPerUnit: METERS_PER_UNIT,
          worldExtent: EXTENT,
        });
      }
    }

    /**
     * Projections equal to EPSG:4326.
     *
     * @const
     * @type {Array<import("./Projection.js").default>}
     */
    const PROJECTIONS = [
      new EPSG4326Projection('CRS:84'),
      new EPSG4326Projection('EPSG:4326', 'neu'),
      new EPSG4326Projection('urn:ogc:def:crs:OGC:1.3:CRS84'),
      new EPSG4326Projection('urn:ogc:def:crs:OGC:2:84'),
      new EPSG4326Projection('http://www.opengis.net/def/crs/OGC/1.3/CRS84'),
      new EPSG4326Projection('http://www.opengis.net/gml/srs/epsg.xml#4326', 'neu'),
      new EPSG4326Projection('http://www.opengis.net/def/crs/EPSG/0/4326', 'neu'),
    ];

    /**
     * @module ol/proj/projections
     */

    /**
     * @type {Object<string, import("./Projection.js").default>}
     */
    let cache = {};

    /**
     * Get a cached projection by code.
     * @param {string} code The code for the projection.
     * @return {import("./Projection.js").default} The projection (if cached).
     */
    function get$2(code) {
      return (
        cache[code] ||
        cache[code.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, 'EPSG:$3')] ||
        null
      );
    }

    /**
     * Add a projection to the cache.
     * @param {string} code The projection code.
     * @param {import("./Projection.js").default} projection The projection to cache.
     */
    function add$3(code, projection) {
      cache[code] = projection;
    }

    /**
     * @module ol/proj/transforms
     */

    /**
     * @private
     * @type {!Object<string, Object<string, import("../proj.js").TransformFunction>>}
     */
    let transforms = {};

    /**
     * Registers a conversion function to convert coordinates from the source
     * projection to the destination projection.
     *
     * @param {import("./Projection.js").default} source Source.
     * @param {import("./Projection.js").default} destination Destination.
     * @param {import("../proj.js").TransformFunction} transformFn Transform.
     */
    function add$2(source, destination, transformFn) {
      const sourceCode = source.getCode();
      const destinationCode = destination.getCode();
      if (!(sourceCode in transforms)) {
        transforms[sourceCode] = {};
      }
      transforms[sourceCode][destinationCode] = transformFn;
    }

    /**
     * Get a transform given a source code and a destination code.
     * @param {string} sourceCode The code for the source projection.
     * @param {string} destinationCode The code for the destination projection.
     * @return {import("../proj.js").TransformFunction|undefined} The transform function (if found).
     */
    function get$1(sourceCode, destinationCode) {
      let transform;
      if (sourceCode in transforms && destinationCode in transforms[sourceCode]) {
        transform = transforms[sourceCode][destinationCode];
      }
      return transform;
    }

    /**
     * @module ol/math
     */

    /**
     * Takes a number and clamps it to within the provided bounds.
     * @param {number} value The input number.
     * @param {number} min The minimum value to return.
     * @param {number} max The maximum value to return.
     * @return {number} The input number if it is within bounds, or the nearest
     *     number within the bounds.
     */
    function math.clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }

    /**
     * Returns the square of the closest distance between the point (x, y) and the
     * line segment (x1, y1) to (x2, y2).
     * @param {number} x X.
     * @param {number} y Y.
     * @param {number} x1 X1.
     * @param {number} y1 Y1.
     * @param {number} x2 X2.
     * @param {number} y2 Y2.
     * @return {number} Squared distance.
     */
    function math.squaredSegmentDistance(x, y, x1, y1, x2, y2) {
      const dx = x2 - x1;
      const dy = y2 - y1;
      if (dx !== 0 || dy !== 0) {
        const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
        if (t > 1) {
          x1 = x2;
          y1 = y2;
        } else if (t > 0) {
          x1 += dx * t;
          y1 += dy * t;
        }
      }
      return math.squaredDistance(x, y, x1, y1);
    }

    /**
     * Returns the square of the distance between the points (x1, y1) and (x2, y2).
     * @param {number} x1 X1.
     * @param {number} y1 Y1.
     * @param {number} x2 X2.
     * @param {number} y2 Y2.
     * @return {number} Squared distance.
     */
    function math.squaredDistance(x1, y1, x2, y2) {
      const dx = x2 - x1;
      const dy = y2 - y1;
      return dx * dx + dy * dy;
    }

    /**
     * Converts degrees to radians.
     *
     * @param {number} angleInDegrees Angle in degrees.
     * @return {number} Angle in radians.
     */
    function math.toRadians(angleInDegrees) {
      return (angleInDegrees * Math.PI) / 180;
    }

    /**
     * Returns the modulo of a / b, depending on the sign of b.
     *
     * @param {number} a Dividend.
     * @param {number} b Divisor.
     * @return {number} Modulo.
     */
    function modulo(a, b) {
      const r = a % b;
      return r * b < 0 ? r + b : r;
    }

    /**
     * Calculates the linearly interpolated value of x between a and b.
     *
     * @param {number} a Number
     * @param {number} b Number
     * @param {number} x Value to be interpolated.
     * @return {number} Interpolated value.
     */
    function math.lerp(a, b, x) {
      return a + x * (b - a);
    }

    /**
     * @module ol/coordinate
     */

    /**
     * An array of numbers representing an xy coordinate. Example: `[16, 48]`.
     * @typedef {Array<number>} Coordinate
     * @api
     */

    /**
     * A function that takes a {@link module:ol/coordinate~Coordinate} and
     * transforms it into a `{string}`.
     *
     * @typedef {function((Coordinate|undefined)): string} CoordinateFormat
     * @api
     */

    /**
     * Add `delta` to `coordinate`. `coordinate` is modified in place and returned
     * by the function.
     *
     * Example:
     *
     *     import {add} from 'ol/coordinate.js';
     *
     *     const coord = [7.85, 47.983333];
     *     add(coord, [-2, 4]);
     *     // coord is now [5.85, 51.983333]
     *
     * @param {Coordinate} coordinate Coordinate.
     * @param {Coordinate} delta Delta.
     * @return {Coordinate} The input coordinate adjusted by
     * the given delta.
     * @api
     */
    function add$1(coordinate, delta) {
      coordinate[0] += +delta[0];
      coordinate[1] += +delta[1];
      return coordinate;
    }

    /**
     * @param {Coordinate} coordinate1 First coordinate.
     * @param {Coordinate} coordinate2 Second coordinate.
     * @return {boolean} The two coordinates are equal.
     */
    function equals(coordinate1, coordinate2) {
      let equals = true;
      for (let i = coordinate1.length - 1; i >= 0; --i) {
        if (coordinate1[i] != coordinate2[i]) {
          equals = false;
          break;
        }
      }
      return equals;
    }

    /**
     * Rotate `coordinate` by `angle`. `coordinate` is modified in place and
     * returned by the function.
     *
     * Example:
     *
     *     import {rotate} from 'ol/coordinate.js';
     *
     *     const coord = [7.85, 47.983333];
     *     const rotateRadians = Math.PI / 2; // 90 degrees
     *     rotate(coord, rotateRadians);
     *     // coord is now [-47.983333, 7.85]
     *
     * @param {Coordinate} coordinate Coordinate.
     * @param {number} angle Angle in radian.
     * @return {Coordinate} Coordinate.
     * @api
     */
    function coordinate.rotate(coordinate, angle) {
      const cosAngle = Math.cos(angle);
      const sinAngle = Math.sin(angle);
      const x = coordinate[0] * cosAngle - coordinate[1] * sinAngle;
      const y = coordinate[1] * cosAngle + coordinate[0] * sinAngle;
      coordinate[0] = x;
      coordinate[1] = y;
      return coordinate;
    }

    /**
     * Scale `coordinate` by `scale`. `coordinate` is modified in place and returned
     * by the function.
     *
     * Example:
     *
     *     import {scale as scaleCoordinate} from 'ol/coordinate.js';
     *
     *     const coord = [7.85, 47.983333];
     *     const scale = 1.2;
     *     scaleCoordinate(coord, scale);
     *     // coord is now [9.42, 57.5799996]
     *
     * @param {Coordinate} coordinate Coordinate.
     * @param {number} scale Scale factor.
     * @return {Coordinate} Coordinate.
     */
    function coordinate.scale(coordinate, scale) {
      coordinate[0] *= scale;
      coordinate[1] *= scale;
      return coordinate;
    }

    /**
     * Modifies the provided coordinate in-place to be within the real world
     * extent. The lower projection extent boundary is inclusive, the upper one
     * exclusive.
     *
     * @param {Coordinate} coordinate Coordinate.
     * @param {import("./proj/Projection.js").default} projection Projection.
     * @return {Coordinate} The coordinate within the real world extent.
     */
    function coordinate.wrapX(coordinate, projection) {
      if (projection.canWrapX()) {
        const worldWidth = extent.getWidth(projection.getExtent());
        const worldsAway = getWorldsAway(coordinate, projection, worldWidth);
        if (worldsAway) {
          coordinate[0] -= worldsAway * worldWidth;
        }
      }
      return coordinate;
    }
    /**
     * @param {Coordinate} coordinate Coordinate.
     * @param {import("./proj/Projection.js").default} projection Projection.
     * @param {number} [sourceExtentWidth] Width of the source extent.
     * @return {number} Offset in world widths.
     */
    function getWorldsAway(coordinate, projection, sourceExtentWidth) {
      const projectionExtent = projection.getExtent();
      let worldsAway = 0;
      if (
        projection.canWrapX() &&
        (coordinate[0] < projectionExtent[0] || coordinate[0] > projectionExtent[2])
      ) {
        sourceExtentWidth = sourceExtentWidth || extent.getWidth(projectionExtent);
        worldsAway = Math.floor(
          (coordinate[0] - projectionExtent[0]) / sourceExtentWidth
        );
      }
      return worldsAway;
    }

    /**
     * @module ol/console
     */

    /**
     * @typedef {'info'|'warn'|'error'|'none'} Level
     */

    /**
     * @type {Object<Level, number>}
     */
    const levels = {
      info: 1,
      warn: 2,
      error: 3,
      none: 4,
    };

    /**
     * @type {number}
     */
    let level = levels.info;

    function warn(...args) {
      if (level > levels.warn) {
        return;
      }
      console.warn(...args); // eslint-disable-line no-console
    }

    /**
     * @module ol/proj
     */

    let showCoordinateWarning = true;

    /**
     * @param {boolean} [disable = true] Disable console info about `useGeographic()`
     */
    function disableCoordinateWarning(disable) {
      const hide = disable === undefined ? true : disable;
      showCoordinateWarning = !hide;
    }

    /**
     * @param {Array<number>} input Input coordinate array.
     * @param {Array<number>} [output] Output array of coordinate values.
     * @return {Array<number>} Output coordinate array (new array, same coordinate
     *     values).
     */
    function cloneTransform(input, output) {
      if (output !== undefined) {
        for (let i = 0, ii = input.length; i < ii; ++i) {
          output[i] = input[i];
        }
        output = output;
      } else {
        output = input.slice();
      }
      return output;
    }

    /**
     * @param {Array<number>} input Input coordinate array.
     * @param {Array<number>} [output] Output array of coordinate values.
     * @return {Array<number>} Input coordinate array (same array as input).
     */
    function identityTransform(input, output) {
      if (output !== undefined && input !== output) {
        for (let i = 0, ii = input.length; i < ii; ++i) {
          output[i] = input[i];
        }
        input = output;
      }
      return input;
    }

    /**
     * Add a Projection object to the list of supported projections that can be
     * looked up by their code.
     *
     * @param {Projection} projection Projection instance.
     * @api
     */
    function addProjection(projection) {
      add$3(projection.getCode(), projection);
      add$2(projection, projection, cloneTransform);
    }

    /**
     * @param {Array<Projection>} projections Projections.
     */
    function addProjections(projections) {
      projections.forEach(addProjection);
    }

    /**
     * Fetches a Projection object for the code specified.
     *
     * @param {ProjectionLike} projectionLike Either a code string which is
     *     a combination of authority and identifier such as "EPSG:4326", or an
     *     existing projection object, or undefined.
     * @return {Projection|null} Projection object, or null if not in list.
     * @api
     */
    function proj.get(projectionLike) {
      return typeof projectionLike === 'string'
        ? get$2(/** @type {string} */ (projectionLike))
        : /** @type {Projection} */ (projectionLike) || null;
    }

    /**
     * Registers transformation functions that don't alter coordinates. Those allow
     * to transform between projections with equal meaning.
     *
     * @param {Array<Projection>} projections Projections.
     * @api
     */
    function addEquivalentProjections(projections) {
      addProjections(projections);
      projections.forEach(function (source) {
        projections.forEach(function (destination) {
          if (source !== destination) {
            add$2(source, destination, cloneTransform);
          }
        });
      });
    }

    /**
     * Registers transformation functions to convert coordinates in any projection
     * in projection1 to any projection in projection2.
     *
     * @param {Array<Projection>} projections1 Projections with equal
     *     meaning.
     * @param {Array<Projection>} projections2 Projections with equal
     *     meaning.
     * @param {TransformFunction} forwardTransform Transformation from any
     *   projection in projection1 to any projection in projection2.
     * @param {TransformFunction} inverseTransform Transform from any projection
     *   in projection2 to any projection in projection1..
     */
    function addEquivalentTransforms(
      projections1,
      projections2,
      forwardTransform,
      inverseTransform
    ) {
      projections1.forEach(function (projection1) {
        projections2.forEach(function (projection2) {
          add$2(projection1, projection2, forwardTransform);
          add$2(projection2, projection1, inverseTransform);
        });
      });
    }

    /**
     * @param {Projection|string|undefined} projection Projection.
     * @param {string} defaultCode Default code.
     * @return {Projection} Projection.
     */
    function createProjection(projection, defaultCode) {
      if (!projection) {
        return proj.get(defaultCode);
      } else if (typeof projection === 'string') {
        return proj.get(projection);
      }
      return /** @type {Projection} */ (projection);
    }

    /**
     * Searches in the list of transform functions for the function for converting
     * coordinates from the source projection to the destination projection.
     *
     * @param {Projection} sourceProjection Source Projection object.
     * @param {Projection} destinationProjection Destination Projection
     *     object.
     * @return {TransformFunction} Transform function.
     */
    function getTransformFromProjections(
      sourceProjection,
      destinationProjection
    ) {
      const sourceCode = sourceProjection.getCode();
      const destinationCode = destinationProjection.getCode();
      let transformFunc = get$1(sourceCode, destinationCode);
      if (!transformFunc) {
        transformFunc = identityTransform;
      }
      return transformFunc;
    }

    /**
     * Given the projection-like objects, searches for a transformation
     * function to convert a coordinates array from the source projection to the
     * destination projection.
     *
     * @param {ProjectionLike} source Source.
     * @param {ProjectionLike} destination Destination.
     * @return {TransformFunction} Transform function.
     * @api
     */
    function proj.getTransform(source, destination) {
      const sourceProjection = proj.get(source);
      const destinationProjection = proj.get(destination);
      return getTransformFromProjections(sourceProjection, destinationProjection);
    }

    /**
     * Return a coordinate transformed into the user projection.  If no user projection
     * is set, the original coordinate is returned.
     * @param {Array<number>} coordinate Input coordinate.
     * @param {ProjectionLike} sourceProjection The input coordinate projection.
     * @return {Array<number>} The input coordinate in the user projection.
     */
    function toUserCoordinate(coordinate, sourceProjection) {
      {
        return coordinate;
      }
    }

    /**
     * Return a coordinate transformed from the user projection.  If no user projection
     * is set, the original coordinate is returned.
     * @param {Array<number>} coordinate Input coordinate.
     * @param {ProjectionLike} destProjection The destination projection.
     * @return {Array<number>} The input coordinate transformed.
     */
    function fromUserCoordinate(coordinate, destProjection) {
      {
        if (
          showCoordinateWarning &&
          !equals(coordinate, [0, 0]) &&
          coordinate[0] >= -180 &&
          coordinate[0] <= 180 &&
          coordinate[1] >= -90 &&
          coordinate[1] <= 90
        ) {
          showCoordinateWarning = false;
          warn(
            'Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.'
          );
        }
        return coordinate;
      }
    }

    /**
     * Return an extent transformed into the user projection.  If no user projection
     * is set, the original extent is returned.
     * @param {import("./extent.js").Extent} extent Input extent.
     * @param {ProjectionLike} sourceProjection The input extent projection.
     * @return {import("./extent.js").Extent} The input extent in the user projection.
     */
    function toUserExtent(extent, sourceProjection) {
      {
        return extent;
      }
    }

    /**
     * Return an extent transformed from the user projection.  If no user projection
     * is set, the original extent is returned.
     * @param {import("./extent.js").Extent} extent Input extent.
     * @param {ProjectionLike} destProjection The destination projection.
     * @return {import("./extent.js").Extent} The input extent transformed.
     */
    function fromUserExtent(extent, destProjection) {
      {
        return extent;
      }
    }

    /**
     * Add transforms to and from EPSG:4326 and EPSG:3857.  This function is called
     * by when this module is executed and should only need to be called again after
     * `clearAllProjections()` is called (e.g. in tests).
     */
    function addCommon() {
      // Add transformations that don't alter coordinates to convert within set of
      // projections with equal meaning.
      addEquivalentProjections(PROJECTIONS$1);
      addEquivalentProjections(PROJECTIONS);
      // Add transformations to convert EPSG:4326 like coordinates to EPSG:3857 like
      // coordinates and back.
      addEquivalentTransforms(
        PROJECTIONS,
        PROJECTIONS$1,
        fromEPSG4326,
        toEPSG4326
      );
    }

    addCommon();

    /**
     * @module ol/geom/flat/transform
     */

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {import("../../transform.js").Transform} transform Transform.
     * @param {Array<number>} [dest] Destination.
     * @return {Array<number>} Transformed coordinates.
     */
    function transform2D(
      flatCoordinates,
      offset,
      end,
      stride,
      transform,
      dest
    ) {
      dest = dest ? dest : [];
      let i = 0;
      for (let j = offset; j < end; j += stride) {
        const x = flatCoordinates[j];
        const y = flatCoordinates[j + 1];
        dest[i++] = transform[0] * x + transform[2] * y + transform[4];
        dest[i++] = transform[1] * x + transform[3] * y + transform[5];
      }
      if (dest && dest.length != i) {
        dest.length = i;
      }
      return dest;
    }

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {number} angle Angle.
     * @param {Array<number>} anchor Rotation anchor point.
     * @param {Array<number>} [dest] Destination.
     * @return {Array<number>} Transformed coordinates.
     */
    function rotate(
      flatCoordinates,
      offset,
      end,
      stride,
      angle,
      anchor,
      dest
    ) {
      dest = dest ? dest : [];
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const anchorX = anchor[0];
      const anchorY = anchor[1];
      let i = 0;
      for (let j = offset; j < end; j += stride) {
        const deltaX = flatCoordinates[j] - anchorX;
        const deltaY = flatCoordinates[j + 1] - anchorY;
        dest[i++] = anchorX + deltaX * cos - deltaY * sin;
        dest[i++] = anchorY + deltaX * sin + deltaY * cos;
        for (let k = j + 2; k < j + stride; ++k) {
          dest[i++] = flatCoordinates[k];
        }
      }
      if (dest && dest.length != i) {
        dest.length = i;
      }
      return dest;
    }

    /**
     * Scale the coordinates.
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {number} sx Scale factor in the x-direction.
     * @param {number} sy Scale factor in the y-direction.
     * @param {Array<number>} anchor Scale anchor point.
     * @param {Array<number>} [dest] Destination.
     * @return {Array<number>} Transformed coordinates.
     */
    function scale(
      flatCoordinates,
      offset,
      end,
      stride,
      sx,
      sy,
      anchor,
      dest
    ) {
      dest = dest ? dest : [];
      const anchorX = anchor[0];
      const anchorY = anchor[1];
      let i = 0;
      for (let j = offset; j < end; j += stride) {
        const deltaX = flatCoordinates[j] - anchorX;
        const deltaY = flatCoordinates[j + 1] - anchorY;
        dest[i++] = anchorX + sx * deltaX;
        dest[i++] = anchorY + sy * deltaY;
        for (let k = j + 2; k < j + stride; ++k) {
          dest[i++] = flatCoordinates[k];
        }
      }
      if (dest && dest.length != i) {
        dest.length = i;
      }
      return dest;
    }

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {number} deltaX Delta X.
     * @param {number} deltaY Delta Y.
     * @param {Array<number>} [dest] Destination.
     * @return {Array<number>} Transformed coordinates.
     */
    function translate(
      flatCoordinates,
      offset,
      end,
      stride,
      deltaX,
      deltaY,
      dest
    ) {
      dest = dest ? dest : [];
      let i = 0;
      for (let j = offset; j < end; j += stride) {
        dest[i++] = flatCoordinates[j] + deltaX;
        dest[i++] = flatCoordinates[j + 1] + deltaY;
        for (let k = j + 2; k < j + stride; ++k) {
          dest[i++] = flatCoordinates[k];
        }
      }
      if (dest && dest.length != i) {
        dest.length = i;
      }
      return dest;
    }

    /**
     * @module ol/geom/Geometry
     */

    /**
     * @typedef {'XY' | 'XYZ' | 'XYM' | 'XYZM'} GeometryLayout
     * The coordinate layout for geometries, indicating whether a 3rd or 4th z ('Z')
     * or measure ('M') coordinate is available.
     */

    /**
     * @typedef {'Point' | 'LineString' | 'LinearRing' | 'Polygon' | 'MultiPoint' | 'MultiLineString' | 'MultiPolygon' | 'GeometryCollection' | 'Circle'} Type
     * The geometry type.  One of `'Point'`, `'LineString'`, `'LinearRing'`,
     * `'Polygon'`, `'MultiPoint'`, `'MultiLineString'`, `'MultiPolygon'`,
     * `'GeometryCollection'`, or `'Circle'`.
     */

    /**
     * @type {import("../transform.js").Transform}
     */
    const tmpTransform = transform.create();

    /**
     * @classdesc
     * Abstract base class; normally only used for creating subclasses and not
     * instantiated in apps.
     * Base class for vector geometries.
     *
     * To get notified of changes to the geometry, register a listener for the
     * generic `change` event on your geometry instance.
     *
     * @abstract
     * @api
     */
    class Geometry extends Object$1["default"] {
      constructor() {
        super();

        /**
         * @private
         * @type {import("../extent.js").Extent}
         */
        this.extent_ = extent.createEmpty();

        /**
         * @private
         * @type {number}
         */
        this.extentRevision_ = -1;

        /**
         * @protected
         * @type {number}
         */
        this.simplifiedGeometryMaxMinSquaredTolerance = 0;

        /**
         * @protected
         * @type {number}
         */
        this.simplifiedGeometryRevision = 0;

        /**
         * Get a transformed and simplified version of the geometry.
         * @abstract
         * @param {number} revision The geometry revision.
         * @param {number} squaredTolerance Squared tolerance.
         * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
         * @return {Geometry} Simplified geometry.
         */
        this.simplifyTransformedInternal = functions.memoizeOne(function (
          revision,
          squaredTolerance,
          transform
        ) {
          if (!transform) {
            return this.getSimplifiedGeometry(squaredTolerance);
          }
          const clone = this.clone();
          clone.applyTransform(transform);
          return clone.getSimplifiedGeometry(squaredTolerance);
        });
      }

      /**
       * Get a transformed and simplified version of the geometry.
       * @abstract
       * @param {number} squaredTolerance Squared tolerance.
       * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
       * @return {Geometry} Simplified geometry.
       */
      simplifyTransformed(squaredTolerance, transform) {
        return this.simplifyTransformedInternal(
          this.getRevision(),
          squaredTolerance,
          transform
        );
      }

      /**
       * Make a complete copy of the geometry.
       * @abstract
       * @return {!Geometry} Clone.
       */
      clone() {
        return util.abstract();
      }

      /**
       * @abstract
       * @param {number} x X.
       * @param {number} y Y.
       * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
       * @param {number} minSquaredDistance Minimum squared distance.
       * @return {number} Minimum squared distance.
       */
      closestPointXY(x, y, closestPoint, minSquaredDistance) {
        return util.abstract();
      }

      /**
       * @param {number} x X.
       * @param {number} y Y.
       * @return {boolean} Contains (x, y).
       */
      containsXY(x, y) {
        const coord = this.getClosestPoint([x, y]);
        return coord[0] === x && coord[1] === y;
      }

      /**
       * Return the closest point of the geometry to the passed point as
       * {@link module:ol/coordinate~Coordinate coordinate}.
       * @param {import("../coordinate.js").Coordinate} point Point.
       * @param {import("../coordinate.js").Coordinate} [closestPoint] Closest point.
       * @return {import("../coordinate.js").Coordinate} Closest point.
       * @api
       */
      getClosestPoint(point, closestPoint) {
        closestPoint = closestPoint ? closestPoint : [NaN, NaN];
        this.closestPointXY(point[0], point[1], closestPoint, Infinity);
        return closestPoint;
      }

      /**
       * Returns true if this geometry includes the specified coordinate. If the
       * coordinate is on the boundary of the geometry, returns false.
       * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
       * @return {boolean} Contains coordinate.
       * @api
       */
      intersectsCoordinate(coordinate) {
        return this.containsXY(coordinate[0], coordinate[1]);
      }

      /**
       * @abstract
       * @param {import("../extent.js").Extent} extent Extent.
       * @protected
       * @return {import("../extent.js").Extent} extent Extent.
       */
      computeExtent(extent) {
        return util.abstract();
      }

      /**
       * Get the extent of the geometry.
       * @param {import("../extent.js").Extent} [extent] Extent.
       * @return {import("../extent.js").Extent} extent Extent.
       * @api
       */
      getExtent(extent$1) {
        if (this.extentRevision_ != this.getRevision()) {
          const extent$1 = this.computeExtent(this.extent_);
          if (isNaN(extent$1[0]) || isNaN(extent$1[1])) {
            extent.createOrUpdateEmpty(extent$1);
          }
          this.extentRevision_ = this.getRevision();
        }
        return extent.returnOrUpdate(this.extent_, extent$1);
      }

      /**
       * Rotate the geometry around a given coordinate. This modifies the geometry
       * coordinates in place.
       * @abstract
       * @param {number} angle Rotation angle in radians.
       * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
       * @api
       */
      rotate(angle, anchor) {
        util.abstract();
      }

      /**
       * Scale the geometry (with an optional origin).  This modifies the geometry
       * coordinates in place.
       * @abstract
       * @param {number} sx The scaling factor in the x-direction.
       * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
       * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
       *     of the geometry extent).
       * @api
       */
      scale(sx, sy, anchor) {
        util.abstract();
      }

      /**
       * Create a simplified version of this geometry.  For linestrings, this uses
       * the [Douglas Peucker](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm)
       * algorithm.  For polygons, a quantization-based
       * simplification is used to preserve topology.
       * @param {number} tolerance The tolerance distance for simplification.
       * @return {Geometry} A new, simplified version of the original geometry.
       * @api
       */
      simplify(tolerance) {
        return this.getSimplifiedGeometry(tolerance * tolerance);
      }

      /**
       * Create a simplified version of this geometry using the Douglas Peucker
       * algorithm.
       * See https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm.
       * @abstract
       * @param {number} squaredTolerance Squared tolerance.
       * @return {Geometry} Simplified geometry.
       */
      getSimplifiedGeometry(squaredTolerance) {
        return util.abstract();
      }

      /**
       * Get the type of this geometry.
       * @abstract
       * @return {Type} Geometry type.
       */
      getType() {
        return util.abstract();
      }

      /**
       * Apply a transform function to the coordinates of the geometry.
       * The geometry is modified in place.
       * If you do not want the geometry modified in place, first `clone()` it and
       * then use this function on the clone.
       * @abstract
       * @param {import("../proj.js").TransformFunction} transformFn Transform function.
       * Called with a flat array of geometry coordinates.
       */
      applyTransform(transformFn) {
        util.abstract();
      }

      /**
       * Test if the geometry and the passed extent intersect.
       * @abstract
       * @param {import("../extent.js").Extent} extent Extent.
       * @return {boolean} `true` if the geometry and the extent intersect.
       */
      intersectsExtent(extent) {
        return util.abstract();
      }

      /**
       * Translate the geometry.  This modifies the geometry coordinates in place.  If
       * instead you want a new geometry, first `clone()` this geometry.
       * @abstract
       * @param {number} deltaX Delta X.
       * @param {number} deltaY Delta Y.
       * @api
       */
      translate(deltaX, deltaY) {
        util.abstract();
      }

      /**
       * Transform each coordinate of the geometry from one coordinate reference
       * system to another. The geometry is modified in place.
       * For example, a line will be transformed to a line and a circle to a circle.
       * If you do not want the geometry modified in place, first `clone()` it and
       * then use this function on the clone.
       *
       * @param {import("../proj.js").ProjectionLike} source The current projection.  Can be a
       *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
       * @param {import("../proj.js").ProjectionLike} destination The desired projection.  Can be a
       *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
       * @return {Geometry} This geometry.  Note that original geometry is
       *     modified in place.
       * @api
       */
      transform(source, destination) {
        /** @type {import("../proj/Projection.js").default} */
        const sourceProj = proj.get(source);
        const transformFn =
          sourceProj.getUnits() == 'tile-pixels'
            ? function (inCoordinates, outCoordinates, stride) {
                const pixelExtent = sourceProj.getExtent();
                const projectedExtent = sourceProj.getWorldExtent();
                const scale = extent.getHeight(projectedExtent) / extent.getHeight(pixelExtent);
                transform.compose(
                  tmpTransform,
                  projectedExtent[0],
                  projectedExtent[3],
                  scale,
                  -scale,
                  0,
                  0,
                  0
                );
                transform2D(
                  inCoordinates,
                  0,
                  inCoordinates.length,
                  stride,
                  tmpTransform,
                  outCoordinates
                );
                return proj.getTransform(sourceProj, destination)(
                  inCoordinates,
                  outCoordinates,
                  stride
                );
              }
            : proj.getTransform(sourceProj, destination);
        this.applyTransform(transformFn);
        return this;
      }
    }

    var Geometry$1 = Geometry;

    /**
     * @module ol/geom/SimpleGeometry
     */

    /**
     * @classdesc
     * Abstract base class; only used for creating subclasses; do not instantiate
     * in apps, as cannot be rendered.
     *
     * @abstract
     * @api
     */
    class SimpleGeometry extends Geometry$1 {
      constructor() {
        super();

        /**
         * @protected
         * @type {import("./Geometry.js").GeometryLayout}
         */
        this.layout = 'XY';

        /**
         * @protected
         * @type {number}
         */
        this.stride = 2;

        /**
         * @protected
         * @type {Array<number>}
         */
        this.flatCoordinates = null;
      }

      /**
       * @param {import("../extent.js").Extent} extent Extent.
       * @protected
       * @return {import("../extent.js").Extent} extent Extent.
       */
      computeExtent(extent$1) {
        return extent.createOrUpdateFromFlatCoordinates(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          extent$1
        );
      }

      /**
       * @abstract
       * @return {Array<*> | null} Coordinates.
       */
      getCoordinates() {
        return util.abstract();
      }

      /**
       * Return the first coordinate of the geometry.
       * @return {import("../coordinate.js").Coordinate} First coordinate.
       * @api
       */
      getFirstCoordinate() {
        return this.flatCoordinates.slice(0, this.stride);
      }

      /**
       * @return {Array<number>} Flat coordinates.
       */
      getFlatCoordinates() {
        return this.flatCoordinates;
      }

      /**
       * Return the last coordinate of the geometry.
       * @return {import("../coordinate.js").Coordinate} Last point.
       * @api
       */
      getLastCoordinate() {
        return this.flatCoordinates.slice(
          this.flatCoordinates.length - this.stride
        );
      }

      /**
       * Return the {@link import("./Geometry.js").GeometryLayout layout} of the geometry.
       * @return {import("./Geometry.js").GeometryLayout} Layout.
       * @api
       */
      getLayout() {
        return this.layout;
      }

      /**
       * Create a simplified version of this geometry using the Douglas Peucker algorithm.
       * @param {number} squaredTolerance Squared tolerance.
       * @return {SimpleGeometry} Simplified geometry.
       */
      getSimplifiedGeometry(squaredTolerance) {
        if (this.simplifiedGeometryRevision !== this.getRevision()) {
          this.simplifiedGeometryMaxMinSquaredTolerance = 0;
          this.simplifiedGeometryRevision = this.getRevision();
        }
        // If squaredTolerance is negative or if we know that simplification will not
        // have any effect then just return this.
        if (
          squaredTolerance < 0 ||
          (this.simplifiedGeometryMaxMinSquaredTolerance !== 0 &&
            squaredTolerance <= this.simplifiedGeometryMaxMinSquaredTolerance)
        ) {
          return this;
        }

        const simplifiedGeometry =
          this.getSimplifiedGeometryInternal(squaredTolerance);
        const simplifiedFlatCoordinates = simplifiedGeometry.getFlatCoordinates();
        if (simplifiedFlatCoordinates.length < this.flatCoordinates.length) {
          return simplifiedGeometry;
        }
        // Simplification did not actually remove any coordinates.  We now know
        // that any calls to getSimplifiedGeometry with a squaredTolerance less
        // than or equal to the current squaredTolerance will also not have any
        // effect.  This allows us to short circuit simplification (saving CPU
        // cycles) and prevents the cache of simplified geometries from filling
        // up with useless identical copies of this geometry (saving memory).
        this.simplifiedGeometryMaxMinSquaredTolerance = squaredTolerance;
        return this;
      }

      /**
       * @param {number} squaredTolerance Squared tolerance.
       * @return {SimpleGeometry} Simplified geometry.
       * @protected
       */
      getSimplifiedGeometryInternal(squaredTolerance) {
        return this;
      }

      /**
       * @return {number} Stride.
       */
      getStride() {
        return this.stride;
      }

      /**
       * @param {import("./Geometry.js").GeometryLayout} layout Layout.
       * @param {Array<number>} flatCoordinates Flat coordinates.
       */
      setFlatCoordinates(layout, flatCoordinates) {
        this.stride = getStrideForLayout(layout);
        this.layout = layout;
        this.flatCoordinates = flatCoordinates;
      }

      /**
       * @abstract
       * @param {!Array<*>} coordinates Coordinates.
       * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
       */
      setCoordinates(coordinates, layout) {
        util.abstract();
      }

      /**
       * @param {import("./Geometry.js").GeometryLayout|undefined} layout Layout.
       * @param {Array<*>} coordinates Coordinates.
       * @param {number} nesting Nesting.
       * @protected
       */
      setLayout(layout, coordinates, nesting) {
        /** @type {number} */
        let stride;
        if (layout) {
          stride = getStrideForLayout(layout);
        } else {
          for (let i = 0; i < nesting; ++i) {
            if (coordinates.length === 0) {
              this.layout = 'XY';
              this.stride = 2;
              return;
            }
            coordinates = /** @type {Array} */ (coordinates[0]);
          }
          stride = coordinates.length;
          layout = getLayoutForStride(stride);
        }
        this.layout = layout;
        this.stride = stride;
      }

      /**
       * Apply a transform function to the coordinates of the geometry.
       * The geometry is modified in place.
       * If you do not want the geometry modified in place, first `clone()` it and
       * then use this function on the clone.
       * @param {import("../proj.js").TransformFunction} transformFn Transform function.
       * Called with a flat array of geometry coordinates.
       * @api
       */
      applyTransform(transformFn) {
        if (this.flatCoordinates) {
          transformFn(this.flatCoordinates, this.flatCoordinates, this.stride);
          this.changed();
        }
      }

      /**
       * Rotate the geometry around a given coordinate. This modifies the geometry
       * coordinates in place.
       * @param {number} angle Rotation angle in counter-clockwise radians.
       * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
       * @api
       */
      rotate(angle, anchor) {
        const flatCoordinates = this.getFlatCoordinates();
        if (flatCoordinates) {
          const stride = this.getStride();
          rotate(
            flatCoordinates,
            0,
            flatCoordinates.length,
            stride,
            angle,
            anchor,
            flatCoordinates
          );
          this.changed();
        }
      }

      /**
       * Scale the geometry (with an optional origin).  This modifies the geometry
       * coordinates in place.
       * @param {number} sx The scaling factor in the x-direction.
       * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
       * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
       *     of the geometry extent).
       * @api
       */
      scale(sx, sy, anchor) {
        if (sy === undefined) {
          sy = sx;
        }
        if (!anchor) {
          anchor = extent.getCenter(this.getExtent());
        }
        const flatCoordinates = this.getFlatCoordinates();
        if (flatCoordinates) {
          const stride = this.getStride();
          scale(
            flatCoordinates,
            0,
            flatCoordinates.length,
            stride,
            sx,
            sy,
            anchor,
            flatCoordinates
          );
          this.changed();
        }
      }

      /**
       * Translate the geometry.  This modifies the geometry coordinates in place.  If
       * instead you want a new geometry, first `clone()` this geometry.
       * @param {number} deltaX Delta X.
       * @param {number} deltaY Delta Y.
       * @api
       */
      translate(deltaX, deltaY) {
        const flatCoordinates = this.getFlatCoordinates();
        if (flatCoordinates) {
          const stride = this.getStride();
          translate(
            flatCoordinates,
            0,
            flatCoordinates.length,
            stride,
            deltaX,
            deltaY,
            flatCoordinates
          );
          this.changed();
        }
      }
    }

    /**
     * @param {number} stride Stride.
     * @return {import("./Geometry.js").GeometryLayout} layout Layout.
     */
    function getLayoutForStride(stride) {
      let layout;
      if (stride == 2) {
        layout = 'XY';
      } else if (stride == 3) {
        layout = 'XYZ';
      } else if (stride == 4) {
        layout = 'XYZM';
      }
      return /** @type {import("./Geometry.js").GeometryLayout} */ (layout);
    }

    /**
     * @param {import("./Geometry.js").GeometryLayout} layout Layout.
     * @return {number} Stride.
     */
    function getStrideForLayout(layout) {
      let stride;
      if (layout == 'XY') {
        stride = 2;
      } else if (layout == 'XYZ' || layout == 'XYM') {
        stride = 3;
      } else if (layout == 'XYZM') {
        stride = 4;
      }
      return /** @type {number} */ (stride);
    }

    var SimpleGeometry$1 = SimpleGeometry;

    /**
     * @module ol/geom/flat/closest
     */

    /**
     * Returns the point on the 2D line segment flatCoordinates[offset1] to
     * flatCoordinates[offset2] that is closest to the point (x, y).  Extra
     * dimensions are linearly interpolated.
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset1 Offset 1.
     * @param {number} offset2 Offset 2.
     * @param {number} stride Stride.
     * @param {number} x X.
     * @param {number} y Y.
     * @param {Array<number>} closestPoint Closest point.
     */
    function assignClosest(
      flatCoordinates,
      offset1,
      offset2,
      stride,
      x,
      y,
      closestPoint
    ) {
      const x1 = flatCoordinates[offset1];
      const y1 = flatCoordinates[offset1 + 1];
      const dx = flatCoordinates[offset2] - x1;
      const dy = flatCoordinates[offset2 + 1] - y1;
      let offset;
      if (dx === 0 && dy === 0) {
        offset = offset1;
      } else {
        const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
        if (t > 1) {
          offset = offset2;
        } else if (t > 0) {
          for (let i = 0; i < stride; ++i) {
            closestPoint[i] = math.lerp(
              flatCoordinates[offset1 + i],
              flatCoordinates[offset2 + i],
              t
            );
          }
          closestPoint.length = stride;
          return;
        } else {
          offset = offset1;
        }
      }
      for (let i = 0; i < stride; ++i) {
        closestPoint[i] = flatCoordinates[offset + i];
      }
      closestPoint.length = stride;
    }

    /**
     * Return the squared of the largest distance between any pair of consecutive
     * coordinates.
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {number} max Max squared delta.
     * @return {number} Max squared delta.
     */
    function maxSquaredDelta(flatCoordinates, offset, end, stride, max) {
      let x1 = flatCoordinates[offset];
      let y1 = flatCoordinates[offset + 1];
      for (offset += stride; offset < end; offset += stride) {
        const x2 = flatCoordinates[offset];
        const y2 = flatCoordinates[offset + 1];
        const squaredDelta = math.squaredDistance(x1, y1, x2, y2);
        if (squaredDelta > max) {
          max = squaredDelta;
        }
        x1 = x2;
        y1 = y2;
      }
      return max;
    }

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {number} max Max squared delta.
     * @return {number} Max squared delta.
     */
    function arrayMaxSquaredDelta(
      flatCoordinates,
      offset,
      ends,
      stride,
      max
    ) {
      for (let i = 0, ii = ends.length; i < ii; ++i) {
        const end = ends[i];
        max = maxSquaredDelta(flatCoordinates, offset, end, stride, max);
        offset = end;
      }
      return max;
    }

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {number} maxDelta Max delta.
     * @param {boolean} isRing Is ring.
     * @param {number} x X.
     * @param {number} y Y.
     * @param {Array<number>} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @param {Array<number>} [tmpPoint] Temporary point object.
     * @return {number} Minimum squared distance.
     */
    function assignClosestPoint(
      flatCoordinates,
      offset,
      end,
      stride,
      maxDelta,
      isRing,
      x,
      y,
      closestPoint,
      minSquaredDistance,
      tmpPoint
    ) {
      if (offset == end) {
        return minSquaredDistance;
      }
      let i, squaredDistance;
      if (maxDelta === 0) {
        // All points are identical, so just test the first point.
        squaredDistance = math.squaredDistance(
          x,
          y,
          flatCoordinates[offset],
          flatCoordinates[offset + 1]
        );
        if (squaredDistance < minSquaredDistance) {
          for (i = 0; i < stride; ++i) {
            closestPoint[i] = flatCoordinates[offset + i];
          }
          closestPoint.length = stride;
          return squaredDistance;
        }
        return minSquaredDistance;
      }
      tmpPoint = tmpPoint ? tmpPoint : [NaN, NaN];
      let index = offset + stride;
      while (index < end) {
        assignClosest(
          flatCoordinates,
          index - stride,
          index,
          stride,
          x,
          y,
          tmpPoint
        );
        squaredDistance = math.squaredDistance(x, y, tmpPoint[0], tmpPoint[1]);
        if (squaredDistance < minSquaredDistance) {
          minSquaredDistance = squaredDistance;
          for (i = 0; i < stride; ++i) {
            closestPoint[i] = tmpPoint[i];
          }
          closestPoint.length = stride;
          index += stride;
        } else {
          // Skip ahead multiple points, because we know that all the skipped
          // points cannot be any closer than the closest point we have found so
          // far.  We know this because we know how close the current point is, how
          // close the closest point we have found so far is, and the maximum
          // distance between consecutive points.  For example, if we're currently
          // at distance 10, the best we've found so far is 3, and that the maximum
          // distance between consecutive points is 2, then we'll need to skip at
          // least (10 - 3) / 2 == 3 (rounded down) points to have any chance of
          // finding a closer point.  We use Math.max(..., 1) to ensure that we
          // always advance at least one point, to avoid an infinite loop.
          index +=
            stride *
            Math.max(
              ((Math.sqrt(squaredDistance) - Math.sqrt(minSquaredDistance)) /
                maxDelta) |
                0,
              1
            );
        }
      }
      if (isRing) {
        // Check the closing segment.
        assignClosest(
          flatCoordinates,
          end - stride,
          offset,
          stride,
          x,
          y,
          tmpPoint
        );
        squaredDistance = math.squaredDistance(x, y, tmpPoint[0], tmpPoint[1]);
        if (squaredDistance < minSquaredDistance) {
          minSquaredDistance = squaredDistance;
          for (i = 0; i < stride; ++i) {
            closestPoint[i] = tmpPoint[i];
          }
          closestPoint.length = stride;
        }
      }
      return minSquaredDistance;
    }

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {number} maxDelta Max delta.
     * @param {boolean} isRing Is ring.
     * @param {number} x X.
     * @param {number} y Y.
     * @param {Array<number>} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @param {Array<number>} [tmpPoint] Temporary point object.
     * @return {number} Minimum squared distance.
     */
    function assignClosestArrayPoint(
      flatCoordinates,
      offset,
      ends,
      stride,
      maxDelta,
      isRing,
      x,
      y,
      closestPoint,
      minSquaredDistance,
      tmpPoint
    ) {
      tmpPoint = tmpPoint ? tmpPoint : [NaN, NaN];
      for (let i = 0, ii = ends.length; i < ii; ++i) {
        const end = ends[i];
        minSquaredDistance = assignClosestPoint(
          flatCoordinates,
          offset,
          end,
          stride,
          maxDelta,
          isRing,
          x,
          y,
          closestPoint,
          minSquaredDistance,
          tmpPoint
        );
        offset = end;
      }
      return minSquaredDistance;
    }

    /**
     * @module ol/geom/flat/deflate
     */

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {number} stride Stride.
     * @return {number} offset Offset.
     */
    function deflateCoordinate(flatCoordinates, offset, coordinate, stride) {
      for (let i = 0, ii = coordinate.length; i < ii; ++i) {
        flatCoordinates[offset++] = coordinate[i];
      }
      return offset;
    }

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array<import("../../coordinate.js").Coordinate>} coordinates Coordinates.
     * @param {number} stride Stride.
     * @return {number} offset Offset.
     */
    function deflateCoordinates(
      flatCoordinates,
      offset,
      coordinates,
      stride
    ) {
      for (let i = 0, ii = coordinates.length; i < ii; ++i) {
        const coordinate = coordinates[i];
        for (let j = 0; j < stride; ++j) {
          flatCoordinates[offset++] = coordinate[j];
        }
      }
      return offset;
    }

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array<Array<import("../../coordinate.js").Coordinate>>} coordinatess Coordinatess.
     * @param {number} stride Stride.
     * @param {Array<number>} [ends] Ends.
     * @return {Array<number>} Ends.
     */
    function deflateCoordinatesArray(
      flatCoordinates,
      offset,
      coordinatess,
      stride,
      ends
    ) {
      ends = ends ? ends : [];
      let i = 0;
      for (let j = 0, jj = coordinatess.length; j < jj; ++j) {
        const end = deflateCoordinates(
          flatCoordinates,
          offset,
          coordinatess[j],
          stride
        );
        ends[i++] = end;
        offset = end;
      }
      ends.length = i;
      return ends;
    }

    /**
     * @module ol/geom/flat/simplify
     */

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {number} squaredTolerance Squared tolerance.
     * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
     *     coordinates.
     * @param {number} simplifiedOffset Simplified offset.
     * @return {number} Simplified offset.
     */
    function douglasPeucker(
      flatCoordinates,
      offset,
      end,
      stride,
      squaredTolerance,
      simplifiedFlatCoordinates,
      simplifiedOffset
    ) {
      const n = (end - offset) / stride;
      if (n < 3) {
        for (; offset < end; offset += stride) {
          simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset];
          simplifiedFlatCoordinates[simplifiedOffset++] =
            flatCoordinates[offset + 1];
        }
        return simplifiedOffset;
      }
      /** @type {Array<number>} */
      const markers = new Array(n);
      markers[0] = 1;
      markers[n - 1] = 1;
      /** @type {Array<number>} */
      const stack = [offset, end - stride];
      let index = 0;
      while (stack.length > 0) {
        const last = stack.pop();
        const first = stack.pop();
        let maxSquaredDistance = 0;
        const x1 = flatCoordinates[first];
        const y1 = flatCoordinates[first + 1];
        const x2 = flatCoordinates[last];
        const y2 = flatCoordinates[last + 1];
        for (let i = first + stride; i < last; i += stride) {
          const x = flatCoordinates[i];
          const y = flatCoordinates[i + 1];
          const squaredDistance = math.squaredSegmentDistance(x, y, x1, y1, x2, y2);
          if (squaredDistance > maxSquaredDistance) {
            index = i;
            maxSquaredDistance = squaredDistance;
          }
        }
        if (maxSquaredDistance > squaredTolerance) {
          markers[(index - offset) / stride] = 1;
          if (first + stride < index) {
            stack.push(first, index);
          }
          if (index + stride < last) {
            stack.push(index, last);
          }
        }
      }
      for (let i = 0; i < n; ++i) {
        if (markers[i]) {
          simplifiedFlatCoordinates[simplifiedOffset++] =
            flatCoordinates[offset + i * stride];
          simplifiedFlatCoordinates[simplifiedOffset++] =
            flatCoordinates[offset + i * stride + 1];
        }
      }
      return simplifiedOffset;
    }

    /**
     * @param {number} value Value.
     * @param {number} tolerance Tolerance.
     * @return {number} Rounded value.
     */
    function snap(value, tolerance) {
      return tolerance * Math.round(value / tolerance);
    }

    /**
     * Simplifies a line string using an algorithm designed by Tim Schaub.
     * Coordinates are snapped to the nearest value in a virtual grid and
     * consecutive duplicate coordinates are discarded.  This effectively preserves
     * topology as the simplification of any subsection of a line string is
     * independent of the rest of the line string.  This means that, for examples,
     * the common edge between two polygons will be simplified to the same line
     * string independently in both polygons.  This implementation uses a single
     * pass over the coordinates and eliminates intermediate collinear points.
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {number} tolerance Tolerance.
     * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
     *     coordinates.
     * @param {number} simplifiedOffset Simplified offset.
     * @return {number} Simplified offset.
     */
    function quantize(
      flatCoordinates,
      offset,
      end,
      stride,
      tolerance,
      simplifiedFlatCoordinates,
      simplifiedOffset
    ) {
      // do nothing if the line is empty
      if (offset == end) {
        return simplifiedOffset;
      }
      // snap the first coordinate (P1)
      let x1 = snap(flatCoordinates[offset], tolerance);
      let y1 = snap(flatCoordinates[offset + 1], tolerance);
      offset += stride;
      // add the first coordinate to the output
      simplifiedFlatCoordinates[simplifiedOffset++] = x1;
      simplifiedFlatCoordinates[simplifiedOffset++] = y1;
      // find the next coordinate that does not snap to the same value as the first
      // coordinate (P2)
      let x2, y2;
      do {
        x2 = snap(flatCoordinates[offset], tolerance);
        y2 = snap(flatCoordinates[offset + 1], tolerance);
        offset += stride;
        if (offset == end) {
          // all coordinates snap to the same value, the line collapses to a point
          // push the last snapped value anyway to ensure that the output contains
          // at least two points
          // FIXME should we really return at least two points anyway?
          simplifiedFlatCoordinates[simplifiedOffset++] = x2;
          simplifiedFlatCoordinates[simplifiedOffset++] = y2;
          return simplifiedOffset;
        }
      } while (x2 == x1 && y2 == y1);
      while (offset < end) {
        // snap the next coordinate (P3)
        const x3 = snap(flatCoordinates[offset], tolerance);
        const y3 = snap(flatCoordinates[offset + 1], tolerance);
        offset += stride;
        // skip P3 if it is equal to P2
        if (x3 == x2 && y3 == y2) {
          continue;
        }
        // calculate the delta between P1 and P2
        const dx1 = x2 - x1;
        const dy1 = y2 - y1;
        // calculate the delta between P3 and P1
        const dx2 = x3 - x1;
        const dy2 = y3 - y1;
        // if P1, P2, and P3 are colinear and P3 is further from P1 than P2 is from
        // P1 in the same direction then P2 is on the straight line between P1 and
        // P3
        if (
          dx1 * dy2 == dy1 * dx2 &&
          ((dx1 < 0 && dx2 < dx1) || dx1 == dx2 || (dx1 > 0 && dx2 > dx1)) &&
          ((dy1 < 0 && dy2 < dy1) || dy1 == dy2 || (dy1 > 0 && dy2 > dy1))
        ) {
          // discard P2 and set P2 = P3
          x2 = x3;
          y2 = y3;
          continue;
        }
        // either P1, P2, and P3 are not colinear, or they are colinear but P3 is
        // between P3 and P1 or on the opposite half of the line to P2.  add P2,
        // and continue with P1 = P2 and P2 = P3
        simplifiedFlatCoordinates[simplifiedOffset++] = x2;
        simplifiedFlatCoordinates[simplifiedOffset++] = y2;
        x1 = x2;
        y1 = y2;
        x2 = x3;
        y2 = y3;
      }
      // add the last point (P2)
      simplifiedFlatCoordinates[simplifiedOffset++] = x2;
      simplifiedFlatCoordinates[simplifiedOffset++] = y2;
      return simplifiedOffset;
    }

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {number} tolerance Tolerance.
     * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
     *     coordinates.
     * @param {number} simplifiedOffset Simplified offset.
     * @param {Array<number>} simplifiedEnds Simplified ends.
     * @return {number} Simplified offset.
     */
    function quantizeArray(
      flatCoordinates,
      offset,
      ends,
      stride,
      tolerance,
      simplifiedFlatCoordinates,
      simplifiedOffset,
      simplifiedEnds
    ) {
      for (let i = 0, ii = ends.length; i < ii; ++i) {
        const end = ends[i];
        simplifiedOffset = quantize(
          flatCoordinates,
          offset,
          end,
          stride,
          tolerance,
          simplifiedFlatCoordinates,
          simplifiedOffset
        );
        simplifiedEnds.push(simplifiedOffset);
        offset = end;
      }
      return simplifiedOffset;
    }

    /**
     * @module ol/geom/flat/inflate
     */

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {Array<import("../../coordinate.js").Coordinate>} [coordinates] Coordinates.
     * @return {Array<import("../../coordinate.js").Coordinate>} Coordinates.
     */
    function inflateCoordinates(
      flatCoordinates,
      offset,
      end,
      stride,
      coordinates
    ) {
      coordinates = coordinates !== undefined ? coordinates : [];
      let i = 0;
      for (let j = offset; j < end; j += stride) {
        coordinates[i++] = flatCoordinates.slice(j, j + stride);
      }
      coordinates.length = i;
      return coordinates;
    }

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {Array<Array<import("../../coordinate.js").Coordinate>>} [coordinatess] Coordinatess.
     * @return {Array<Array<import("../../coordinate.js").Coordinate>>} Coordinatess.
     */
    function inflateCoordinatesArray(
      flatCoordinates,
      offset,
      ends,
      stride,
      coordinatess
    ) {
      coordinatess = coordinatess !== undefined ? coordinatess : [];
      let i = 0;
      for (let j = 0, jj = ends.length; j < jj; ++j) {
        const end = ends[j];
        coordinatess[i++] = inflateCoordinates(
          flatCoordinates,
          offset,
          end,
          stride,
          coordinatess[i]
        );
        offset = end;
      }
      coordinatess.length = i;
      return coordinatess;
    }

    /**
     * @module ol/geom/flat/area
     */

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @return {number} Area.
     */
    function linearRing(flatCoordinates, offset, end, stride) {
      let twiceArea = 0;
      let x1 = flatCoordinates[end - stride];
      let y1 = flatCoordinates[end - stride + 1];
      for (; offset < end; offset += stride) {
        const x2 = flatCoordinates[offset];
        const y2 = flatCoordinates[offset + 1];
        twiceArea += y1 * x2 - x1 * y2;
        x1 = x2;
        y1 = y2;
      }
      return twiceArea / 2;
    }

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array<number>} ends Ends.
     * @param {number} stride Stride.
     * @return {number} Area.
     */
    function linearRings(flatCoordinates, offset, ends, stride) {
      let area = 0;
      for (let i = 0, ii = ends.length; i < ii; ++i) {
        const end = ends[i];
        area += linearRing(flatCoordinates, offset, end, stride);
        offset = end;
      }
      return area;
    }

    /**
     * @module ol/geom/LinearRing
     */

    /**
     * @classdesc
     * Linear ring geometry. Only used as part of polygon; cannot be rendered
     * on its own.
     *
     * @api
     */
    class LinearRing extends SimpleGeometry$1 {
      /**
       * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
       *     For internal use, flat coordinates in combination with `layout` are also accepted.
       * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
       */
      constructor(coordinates, layout) {
        super();

        /**
         * @private
         * @type {number}
         */
        this.maxDelta_ = -1;

        /**
         * @private
         * @type {number}
         */
        this.maxDeltaRevision_ = -1;

        if (layout !== undefined && !Array.isArray(coordinates[0])) {
          this.setFlatCoordinates(
            layout,
            /** @type {Array<number>} */ (coordinates)
          );
        } else {
          this.setCoordinates(
            /** @type {Array<import("../coordinate.js").Coordinate>} */ (
              coordinates
            ),
            layout
          );
        }
      }

      /**
       * Make a complete copy of the geometry.
       * @return {!LinearRing} Clone.
       * @api
       */
      clone() {
        return new LinearRing(this.flatCoordinates.slice(), this.layout);
      }

      /**
       * @param {number} x X.
       * @param {number} y Y.
       * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
       * @param {number} minSquaredDistance Minimum squared distance.
       * @return {number} Minimum squared distance.
       */
      closestPointXY(x, y, closestPoint, minSquaredDistance) {
        if (minSquaredDistance < extent.closestSquaredDistanceXY(this.getExtent(), x, y)) {
          return minSquaredDistance;
        }
        if (this.maxDeltaRevision_ != this.getRevision()) {
          this.maxDelta_ = Math.sqrt(
            maxSquaredDelta(
              this.flatCoordinates,
              0,
              this.flatCoordinates.length,
              this.stride,
              0
            )
          );
          this.maxDeltaRevision_ = this.getRevision();
        }
        return assignClosestPoint(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          this.maxDelta_,
          true,
          x,
          y,
          closestPoint,
          minSquaredDistance
        );
      }

      /**
       * Return the area of the linear ring on projected plane.
       * @return {number} Area (on projected plane).
       * @api
       */
      getArea() {
        return linearRing(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride
        );
      }

      /**
       * Return the coordinates of the linear ring.
       * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
       * @api
       */
      getCoordinates() {
        return inflateCoordinates(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride
        );
      }

      /**
       * @param {number} squaredTolerance Squared tolerance.
       * @return {LinearRing} Simplified LinearRing.
       * @protected
       */
      getSimplifiedGeometryInternal(squaredTolerance) {
        const simplifiedFlatCoordinates = [];
        simplifiedFlatCoordinates.length = douglasPeucker(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          squaredTolerance,
          simplifiedFlatCoordinates,
          0
        );
        return new LinearRing(simplifiedFlatCoordinates, 'XY');
      }

      /**
       * Get the type of this geometry.
       * @return {import("./Geometry.js").Type} Geometry type.
       * @api
       */
      getType() {
        return 'LinearRing';
      }

      /**
       * Test if the geometry and the passed extent intersect.
       * @param {import("../extent.js").Extent} extent Extent.
       * @return {boolean} `true` if the geometry and the extent intersect.
       * @api
       */
      intersectsExtent(extent) {
        return false;
      }

      /**
       * Set the coordinates of the linear ring.
       * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
       * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
       * @api
       */
      setCoordinates(coordinates, layout) {
        this.setLayout(layout, coordinates, 1);
        if (!this.flatCoordinates) {
          this.flatCoordinates = [];
        }
        this.flatCoordinates.length = deflateCoordinates(
          this.flatCoordinates,
          0,
          coordinates,
          this.stride
        );
        this.changed();
      }
    }

    var LinearRing$1 = LinearRing;

    /**
     * @module ol/geom/Point
     */

    /**
     * @classdesc
     * Point geometry.
     *
     * @api
     */
    class Point$1 extends SimpleGeometry$1 {
      /**
       * @param {import("../coordinate.js").Coordinate} coordinates Coordinates.
       * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
       */
      constructor(coordinates, layout) {
        super();
        this.setCoordinates(coordinates, layout);
      }

      /**
       * Make a complete copy of the geometry.
       * @return {!Point} Clone.
       * @api
       */
      clone() {
        const point = new Point$1(this.flatCoordinates.slice(), this.layout);
        point.applyProperties(this);
        return point;
      }

      /**
       * @param {number} x X.
       * @param {number} y Y.
       * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
       * @param {number} minSquaredDistance Minimum squared distance.
       * @return {number} Minimum squared distance.
       */
      closestPointXY(x, y, closestPoint, minSquaredDistance) {
        const flatCoordinates = this.flatCoordinates;
        const squaredDistance = math.squaredDistance(
          x,
          y,
          flatCoordinates[0],
          flatCoordinates[1]
        );
        if (squaredDistance < minSquaredDistance) {
          const stride = this.stride;
          for (let i = 0; i < stride; ++i) {
            closestPoint[i] = flatCoordinates[i];
          }
          closestPoint.length = stride;
          return squaredDistance;
        }
        return minSquaredDistance;
      }

      /**
       * Return the coordinate of the point.
       * @return {import("../coordinate.js").Coordinate} Coordinates.
       * @api
       */
      getCoordinates() {
        return !this.flatCoordinates ? [] : this.flatCoordinates.slice();
      }

      /**
       * @param {import("../extent.js").Extent} extent Extent.
       * @protected
       * @return {import("../extent.js").Extent} extent Extent.
       */
      computeExtent(extent$1) {
        return extent.createOrUpdateFromCoordinate(this.flatCoordinates, extent$1);
      }

      /**
       * Get the type of this geometry.
       * @return {import("./Geometry.js").Type} Geometry type.
       * @api
       */
      getType() {
        return 'Point';
      }

      /**
       * Test if the geometry and the passed extent intersect.
       * @param {import("../extent.js").Extent} extent Extent.
       * @return {boolean} `true` if the geometry and the extent intersect.
       * @api
       */
      intersectsExtent(extent$1) {
        return extent.containsXY(extent$1, this.flatCoordinates[0], this.flatCoordinates[1]);
      }

      /**
       * @param {!Array<*>} coordinates Coordinates.
       * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
       * @api
       */
      setCoordinates(coordinates, layout) {
        this.setLayout(layout, coordinates, 0);
        if (!this.flatCoordinates) {
          this.flatCoordinates = [];
        }
        this.flatCoordinates.length = deflateCoordinate(
          this.flatCoordinates,
          0,
          coordinates,
          this.stride
        );
        this.changed();
      }
    }

    var Point$2 = Point$1;

    /**
     * @module ol/geom/flat/contains
     */

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {import("../../extent.js").Extent} extent Extent.
     * @return {boolean} Contains extent.
     */
    function contains.linearRingContainsExtent(
      flatCoordinates,
      offset,
      end,
      stride,
      extent$1
    ) {
      const outside = extent.forEachCorner(
        extent$1,
        /**
         * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
         * @return {boolean} Contains (x, y).
         */
        function (coordinate) {
          return !contains.linearRingContainsXY(
            flatCoordinates,
            offset,
            end,
            stride,
            coordinate[0],
            coordinate[1]
          );
        }
      );
      return !outside;
    }

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {number} x X.
     * @param {number} y Y.
     * @return {boolean} Contains (x, y).
     */
    function contains.linearRingContainsXY(
      flatCoordinates,
      offset,
      end,
      stride,
      x,
      y
    ) {
      // https://geomalgorithms.com/a03-_inclusion.html
      // Copyright 2000 softSurfer, 2012 Dan Sunday
      // This code may be freely used and modified for any purpose
      // providing that this copyright notice is included with it.
      // SoftSurfer makes no warranty for this code, and cannot be held
      // liable for any real or imagined damage resulting from its use.
      // Users of this code must verify correctness for their application.
      let wn = 0;
      let x1 = flatCoordinates[end - stride];
      let y1 = flatCoordinates[end - stride + 1];
      for (; offset < end; offset += stride) {
        const x2 = flatCoordinates[offset];
        const y2 = flatCoordinates[offset + 1];
        if (y1 <= y) {
          if (y2 > y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) > 0) {
            wn++;
          }
        } else if (y2 <= y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) < 0) {
          wn--;
        }
        x1 = x2;
        y1 = y2;
      }
      return wn !== 0;
    }

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {number} x X.
     * @param {number} y Y.
     * @return {boolean} Contains (x, y).
     */
    function linearRingsContainsXY(
      flatCoordinates,
      offset,
      ends,
      stride,
      x,
      y
    ) {
      if (ends.length === 0) {
        return false;
      }
      if (!contains.linearRingContainsXY(flatCoordinates, offset, ends[0], stride, x, y)) {
        return false;
      }
      for (let i = 1, ii = ends.length; i < ii; ++i) {
        if (
          contains.linearRingContainsXY(flatCoordinates, ends[i - 1], ends[i], stride, x, y)
        ) {
          return false;
        }
      }
      return true;
    }

    /**
     * @module ol/geom/flat/interiorpoint
     */

    /**
     * Calculates a point that is likely to lie in the interior of the linear rings.
     * Inspired by JTS's com.vividsolutions.jts.geom.Geometry#getInteriorPoint.
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {Array<number>} flatCenters Flat centers.
     * @param {number} flatCentersOffset Flat center offset.
     * @param {Array<number>} [dest] Destination.
     * @return {Array<number>} Destination point as XYM coordinate, where M is the
     * length of the horizontal intersection that the point belongs to.
     */
    function getInteriorPointOfArray(
      flatCoordinates,
      offset,
      ends,
      stride,
      flatCenters,
      flatCentersOffset,
      dest
    ) {
      let i, ii, x, x1, x2, y1, y2;
      const y = flatCenters[flatCentersOffset + 1];
      /** @type {Array<number>} */
      const intersections = [];
      // Calculate intersections with the horizontal line
      for (let r = 0, rr = ends.length; r < rr; ++r) {
        const end = ends[r];
        x1 = flatCoordinates[end - stride];
        y1 = flatCoordinates[end - stride + 1];
        for (i = offset; i < end; i += stride) {
          x2 = flatCoordinates[i];
          y2 = flatCoordinates[i + 1];
          if ((y <= y1 && y2 <= y) || (y1 <= y && y <= y2)) {
            x = ((y - y1) / (y2 - y1)) * (x2 - x1) + x1;
            intersections.push(x);
          }
          x1 = x2;
          y1 = y2;
        }
      }
      // Find the longest segment of the horizontal line that has its center point
      // inside the linear ring.
      let pointX = NaN;
      let maxSegmentLength = -Infinity;
      intersections.sort(array.ascending);
      x1 = intersections[0];
      for (i = 1, ii = intersections.length; i < ii; ++i) {
        x2 = intersections[i];
        const segmentLength = Math.abs(x2 - x1);
        if (segmentLength > maxSegmentLength) {
          x = (x1 + x2) / 2;
          if (linearRingsContainsXY(flatCoordinates, offset, ends, stride, x, y)) {
            pointX = x;
            maxSegmentLength = segmentLength;
          }
        }
        x1 = x2;
      }
      if (isNaN(pointX)) {
        // There is no horizontal line that has its center point inside the linear
        // ring.  Use the center of the the linear ring's extent.
        pointX = flatCenters[flatCentersOffset];
      }
      if (dest) {
        dest.push(pointX, y, maxSegmentLength);
        return dest;
      }
      return [pointX, y, maxSegmentLength];
    }

    /**
     * @module ol/geom/flat/segments
     */

    /**
     * This function calls `callback` for each segment of the flat coordinates
     * array. If the callback returns a truthy value the function returns that
     * value immediately. Otherwise the function returns `false`.
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {function(import("../../coordinate.js").Coordinate, import("../../coordinate.js").Coordinate): T} callback Function
     *     called for each segment.
     * @return {T|boolean} Value.
     * @template T
     */
    function forEach(flatCoordinates, offset, end, stride, callback) {
      let ret;
      offset += stride;
      for (; offset < end; offset += stride) {
        ret = callback(
          flatCoordinates.slice(offset - stride, offset),
          flatCoordinates.slice(offset, offset + stride)
        );
        if (ret) {
          return ret;
        }
      }
      return false;
    }

    /**
     * @module ol/geom/flat/intersectsextent
     */

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {import("../../extent.js").Extent} extent Extent.
     * @return {boolean} True if the geometry and the extent intersect.
     */
    function intersectsLineString(
      flatCoordinates,
      offset,
      end,
      stride,
      extent$1
    ) {
      const coordinatesExtent = extent.extendFlatCoordinates(
        extent.createEmpty(),
        flatCoordinates,
        offset,
        end,
        stride
      );
      if (!extent.intersects(extent$1, coordinatesExtent)) {
        return false;
      }
      if (extent.containsExtent(extent$1, coordinatesExtent)) {
        return true;
      }
      if (coordinatesExtent[0] >= extent$1[0] && coordinatesExtent[2] <= extent$1[2]) {
        return true;
      }
      if (coordinatesExtent[1] >= extent$1[1] && coordinatesExtent[3] <= extent$1[3]) {
        return true;
      }
      return forEach(
        flatCoordinates,
        offset,
        end,
        stride,
        /**
         * @param {import("../../coordinate.js").Coordinate} point1 Start point.
         * @param {import("../../coordinate.js").Coordinate} point2 End point.
         * @return {boolean} `true` if the segment and the extent intersect,
         *     `false` otherwise.
         */
        function (point1, point2) {
          return extent.intersectsSegment(extent$1, point1, point2);
        }
      );
    }

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @param {import("../../extent.js").Extent} extent Extent.
     * @return {boolean} True if the geometry and the extent intersect.
     */
    function intersectsLinearRing(
      flatCoordinates,
      offset,
      end,
      stride,
      extent
    ) {
      if (intersectsLineString(flatCoordinates, offset, end, stride, extent)) {
        return true;
      }
      if (
        contains.linearRingContainsXY(
          flatCoordinates,
          offset,
          end,
          stride,
          extent[0],
          extent[1]
        )
      ) {
        return true;
      }
      if (
        contains.linearRingContainsXY(
          flatCoordinates,
          offset,
          end,
          stride,
          extent[0],
          extent[3]
        )
      ) {
        return true;
      }
      if (
        contains.linearRingContainsXY(
          flatCoordinates,
          offset,
          end,
          stride,
          extent[2],
          extent[1]
        )
      ) {
        return true;
      }
      if (
        contains.linearRingContainsXY(
          flatCoordinates,
          offset,
          end,
          stride,
          extent[2],
          extent[3]
        )
      ) {
        return true;
      }
      return false;
    }

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {import("../../extent.js").Extent} extent Extent.
     * @return {boolean} True if the geometry and the extent intersect.
     */
    function intersectsLinearRingArray(
      flatCoordinates,
      offset,
      ends,
      stride,
      extent
    ) {
      if (!intersectsLinearRing(flatCoordinates, offset, ends[0], stride, extent)) {
        return false;
      }
      if (ends.length === 1) {
        return true;
      }
      for (let i = 1, ii = ends.length; i < ii; ++i) {
        if (
          contains.linearRingContainsExtent(
            flatCoordinates,
            ends[i - 1],
            ends[i],
            stride,
            extent
          )
        ) {
          if (
            !intersectsLineString(
              flatCoordinates,
              ends[i - 1],
              ends[i],
              stride,
              extent
            )
          ) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * @module ol/geom/flat/reverse
     */

    /**
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     */
    function coordinates(flatCoordinates, offset, end, stride) {
      while (offset < end - stride) {
        for (let i = 0; i < stride; ++i) {
          const tmp = flatCoordinates[offset + i];
          flatCoordinates[offset + i] = flatCoordinates[end - stride + i];
          flatCoordinates[end - stride + i] = tmp;
        }
        offset += stride;
        end -= stride;
      }
    }

    /**
     * @module ol/geom/flat/orient
     */

    /**
     * Is the linear ring oriented clockwise in a coordinate system with a bottom-left
     * coordinate origin? For a coordinate system with a top-left coordinate origin,
     * the ring's orientation is clockwise when this function returns false.
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {number} end End.
     * @param {number} stride Stride.
     * @return {boolean} Is clockwise.
     */
    function linearRingIsClockwise(flatCoordinates, offset, end, stride) {
      // https://stackoverflow.com/q/1165647/clockwise-method#1165943
      // https://github.com/OSGeo/gdal/blob/master/gdal/ogr/ogrlinearring.cpp
      let edge = 0;
      let x1 = flatCoordinates[end - stride];
      let y1 = flatCoordinates[end - stride + 1];
      for (; offset < end; offset += stride) {
        const x2 = flatCoordinates[offset];
        const y2 = flatCoordinates[offset + 1];
        edge += (x2 - x1) * (y2 + y1);
        x1 = x2;
        y1 = y2;
      }
      return edge === 0 ? undefined : edge > 0;
    }

    /**
     * Determines if linear rings are oriented.  By default, left-hand orientation
     * is tested (first ring must be clockwise, remaining rings counter-clockwise).
     * To test for right-hand orientation, use the `right` argument.
     *
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array<number>} ends Array of end indexes.
     * @param {number} stride Stride.
     * @param {boolean} [right] Test for right-hand orientation
     *     (counter-clockwise exterior ring and clockwise interior rings).
     * @return {boolean} Rings are correctly oriented.
     */
    function linearRingsAreOriented(
      flatCoordinates,
      offset,
      ends,
      stride,
      right
    ) {
      right = right !== undefined ? right : false;
      for (let i = 0, ii = ends.length; i < ii; ++i) {
        const end = ends[i];
        const isClockwise = linearRingIsClockwise(
          flatCoordinates,
          offset,
          end,
          stride
        );
        if (i === 0) {
          if ((right && isClockwise) || (!right && !isClockwise)) {
            return false;
          }
        } else {
          if ((right && !isClockwise) || (!right && isClockwise)) {
            return false;
          }
        }
        offset = end;
      }
      return true;
    }

    /**
     * Orient coordinates in a flat array of linear rings.  By default, rings
     * are oriented following the left-hand rule (clockwise for exterior and
     * counter-clockwise for interior rings).  To orient according to the
     * right-hand rule, use the `right` argument.
     *
     * @param {Array<number>} flatCoordinates Flat coordinates.
     * @param {number} offset Offset.
     * @param {Array<number>} ends Ends.
     * @param {number} stride Stride.
     * @param {boolean} [right] Follow the right-hand rule for orientation.
     * @return {number} End.
     */
    function orientLinearRings(
      flatCoordinates,
      offset,
      ends,
      stride,
      right
    ) {
      right = right !== undefined ? right : false;
      for (let i = 0, ii = ends.length; i < ii; ++i) {
        const end = ends[i];
        const isClockwise = linearRingIsClockwise(
          flatCoordinates,
          offset,
          end,
          stride
        );
        const reverse =
          i === 0
            ? (right && isClockwise) || (!right && !isClockwise)
            : (right && !isClockwise) || (!right && isClockwise);
        if (reverse) {
          coordinates(flatCoordinates, offset, end, stride);
        }
        offset = end;
      }
      return offset;
    }

    /**
     * @module ol/geom/Polygon
     */

    /**
     * @classdesc
     * Polygon geometry.
     *
     * @api
     */
    class Polygon["default"] extends SimpleGeometry$1 {
      /**
       * @param {!Array<Array<import("../coordinate.js").Coordinate>>|!Array<number>} coordinates
       *     Array of linear rings that define the polygon. The first linear ring of the
       *     array defines the outer-boundary or surface of the polygon. Each subsequent
       *     linear ring defines a hole in the surface of the polygon. A linear ring is
       *     an array of vertices' coordinates where the first coordinate and the last are
       *     equivalent. (For internal use, flat coordinates in combination with
       *     `layout` and `ends` are also accepted.)
       * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
       * @param {Array<number>} [ends] Ends (for internal use with flat coordinates).
       */
      constructor(coordinates, layout, ends) {
        super();

        /**
         * @type {Array<number>}
         * @private
         */
        this.ends_ = [];

        /**
         * @private
         * @type {number}
         */
        this.flatInteriorPointRevision_ = -1;

        /**
         * @private
         * @type {import("../coordinate.js").Coordinate}
         */
        this.flatInteriorPoint_ = null;

        /**
         * @private
         * @type {number}
         */
        this.maxDelta_ = -1;

        /**
         * @private
         * @type {number}
         */
        this.maxDeltaRevision_ = -1;

        /**
         * @private
         * @type {number}
         */
        this.orientedRevision_ = -1;

        /**
         * @private
         * @type {Array<number>}
         */
        this.orientedFlatCoordinates_ = null;

        if (layout !== undefined && ends) {
          this.setFlatCoordinates(
            layout,
            /** @type {Array<number>} */ (coordinates)
          );
          this.ends_ = ends;
        } else {
          this.setCoordinates(
            /** @type {Array<Array<import("../coordinate.js").Coordinate>>} */ (
              coordinates
            ),
            layout
          );
        }
      }

      /**
       * Append the passed linear ring to this polygon.
       * @param {LinearRing} linearRing Linear ring.
       * @api
       */
      appendLinearRing(linearRing) {
        if (!this.flatCoordinates) {
          this.flatCoordinates = linearRing.getFlatCoordinates().slice();
        } else {
          array.extend(this.flatCoordinates, linearRing.getFlatCoordinates());
        }
        this.ends_.push(this.flatCoordinates.length);
        this.changed();
      }

      /**
       * Make a complete copy of the geometry.
       * @return {!Polygon} Clone.
       * @api
       */
      clone() {
        const polygon = new Polygon["default"](
          this.flatCoordinates.slice(),
          this.layout,
          this.ends_.slice()
        );
        polygon.applyProperties(this);
        return polygon;
      }

      /**
       * @param {number} x X.
       * @param {number} y Y.
       * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
       * @param {number} minSquaredDistance Minimum squared distance.
       * @return {number} Minimum squared distance.
       */
      closestPointXY(x, y, closestPoint, minSquaredDistance) {
        if (minSquaredDistance < extent.closestSquaredDistanceXY(this.getExtent(), x, y)) {
          return minSquaredDistance;
        }
        if (this.maxDeltaRevision_ != this.getRevision()) {
          this.maxDelta_ = Math.sqrt(
            arrayMaxSquaredDelta(
              this.flatCoordinates,
              0,
              this.ends_,
              this.stride,
              0
            )
          );
          this.maxDeltaRevision_ = this.getRevision();
        }
        return assignClosestArrayPoint(
          this.flatCoordinates,
          0,
          this.ends_,
          this.stride,
          this.maxDelta_,
          true,
          x,
          y,
          closestPoint,
          minSquaredDistance
        );
      }

      /**
       * @param {number} x X.
       * @param {number} y Y.
       * @return {boolean} Contains (x, y).
       */
      containsXY(x, y) {
        return linearRingsContainsXY(
          this.getOrientedFlatCoordinates(),
          0,
          this.ends_,
          this.stride,
          x,
          y
        );
      }

      /**
       * Return the area of the polygon on projected plane.
       * @return {number} Area (on projected plane).
       * @api
       */
      getArea() {
        return linearRings(
          this.getOrientedFlatCoordinates(),
          0,
          this.ends_,
          this.stride
        );
      }

      /**
       * Get the coordinate array for this geometry.  This array has the structure
       * of a GeoJSON coordinate array for polygons.
       *
       * @param {boolean} [right] Orient coordinates according to the right-hand
       *     rule (counter-clockwise for exterior and clockwise for interior rings).
       *     If `false`, coordinates will be oriented according to the left-hand rule
       *     (clockwise for exterior and counter-clockwise for interior rings).
       *     By default, coordinate orientation will depend on how the geometry was
       *     constructed.
       * @return {Array<Array<import("../coordinate.js").Coordinate>>} Coordinates.
       * @api
       */
      getCoordinates(right) {
        let flatCoordinates;
        if (right !== undefined) {
          flatCoordinates = this.getOrientedFlatCoordinates().slice();
          orientLinearRings(flatCoordinates, 0, this.ends_, this.stride, right);
        } else {
          flatCoordinates = this.flatCoordinates;
        }

        return inflateCoordinatesArray(flatCoordinates, 0, this.ends_, this.stride);
      }

      /**
       * @return {Array<number>} Ends.
       */
      getEnds() {
        return this.ends_;
      }

      /**
       * @return {Array<number>} Interior point.
       */
      getFlatInteriorPoint() {
        if (this.flatInteriorPointRevision_ != this.getRevision()) {
          const flatCenter = extent.getCenter(this.getExtent());
          this.flatInteriorPoint_ = getInteriorPointOfArray(
            this.getOrientedFlatCoordinates(),
            0,
            this.ends_,
            this.stride,
            flatCenter,
            0
          );
          this.flatInteriorPointRevision_ = this.getRevision();
        }
        return this.flatInteriorPoint_;
      }

      /**
       * Return an interior point of the polygon.
       * @return {Point} Interior point as XYM coordinate, where M is the
       * length of the horizontal intersection that the point belongs to.
       * @api
       */
      getInteriorPoint() {
        return new Point$2(this.getFlatInteriorPoint(), 'XYM');
      }

      /**
       * Return the number of rings of the polygon,  this includes the exterior
       * ring and any interior rings.
       *
       * @return {number} Number of rings.
       * @api
       */
      getLinearRingCount() {
        return this.ends_.length;
      }

      /**
       * Return the Nth linear ring of the polygon geometry. Return `null` if the
       * given index is out of range.
       * The exterior linear ring is available at index `0` and the interior rings
       * at index `1` and beyond.
       *
       * @param {number} index Index.
       * @return {LinearRing|null} Linear ring.
       * @api
       */
      getLinearRing(index) {
        if (index < 0 || this.ends_.length <= index) {
          return null;
        }
        return new LinearRing$1(
          this.flatCoordinates.slice(
            index === 0 ? 0 : this.ends_[index - 1],
            this.ends_[index]
          ),
          this.layout
        );
      }

      /**
       * Return the linear rings of the polygon.
       * @return {Array<LinearRing>} Linear rings.
       * @api
       */
      getLinearRings() {
        const layout = this.layout;
        const flatCoordinates = this.flatCoordinates;
        const ends = this.ends_;
        const linearRings = [];
        let offset = 0;
        for (let i = 0, ii = ends.length; i < ii; ++i) {
          const end = ends[i];
          const linearRing = new LinearRing$1(
            flatCoordinates.slice(offset, end),
            layout
          );
          linearRings.push(linearRing);
          offset = end;
        }
        return linearRings;
      }

      /**
       * @return {Array<number>} Oriented flat coordinates.
       */
      getOrientedFlatCoordinates() {
        if (this.orientedRevision_ != this.getRevision()) {
          const flatCoordinates = this.flatCoordinates;
          if (linearRingsAreOriented(flatCoordinates, 0, this.ends_, this.stride)) {
            this.orientedFlatCoordinates_ = flatCoordinates;
          } else {
            this.orientedFlatCoordinates_ = flatCoordinates.slice();
            this.orientedFlatCoordinates_.length = orientLinearRings(
              this.orientedFlatCoordinates_,
              0,
              this.ends_,
              this.stride
            );
          }
          this.orientedRevision_ = this.getRevision();
        }
        return this.orientedFlatCoordinates_;
      }

      /**
       * @param {number} squaredTolerance Squared tolerance.
       * @return {Polygon} Simplified Polygon.
       * @protected
       */
      getSimplifiedGeometryInternal(squaredTolerance) {
        const simplifiedFlatCoordinates = [];
        const simplifiedEnds = [];
        simplifiedFlatCoordinates.length = quantizeArray(
          this.flatCoordinates,
          0,
          this.ends_,
          this.stride,
          Math.sqrt(squaredTolerance),
          simplifiedFlatCoordinates,
          0,
          simplifiedEnds
        );
        return new Polygon["default"](simplifiedFlatCoordinates, 'XY', simplifiedEnds);
      }

      /**
       * Get the type of this geometry.
       * @return {import("./Geometry.js").Type} Geometry type.
       * @api
       */
      getType() {
        return 'Polygon';
      }

      /**
       * Test if the geometry and the passed extent intersect.
       * @param {import("../extent.js").Extent} extent Extent.
       * @return {boolean} `true` if the geometry and the extent intersect.
       * @api
       */
      intersectsExtent(extent) {
        return intersectsLinearRingArray(
          this.getOrientedFlatCoordinates(),
          0,
          this.ends_,
          this.stride,
          extent
        );
      }

      /**
       * Set the coordinates of the polygon.
       * @param {!Array<Array<import("../coordinate.js").Coordinate>>} coordinates Coordinates.
       * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
       * @api
       */
      setCoordinates(coordinates, layout) {
        this.setLayout(layout, coordinates, 2);
        if (!this.flatCoordinates) {
          this.flatCoordinates = [];
        }
        const ends = deflateCoordinatesArray(
          this.flatCoordinates,
          0,
          coordinates,
          this.stride,
          this.ends_
        );
        this.flatCoordinates.length = ends.length === 0 ? 0 : ends[ends.length - 1];
        this.changed();
      }
    }

    /**
     * Create a polygon from an extent. The layout used is `XY`.
     * @param {import("../extent.js").Extent} extent The extent.
     * @return {Polygon} The polygon.
     * @api
     */
    function fromExtent(extent) {
      const minX = extent[0];
      const minY = extent[1];
      const maxX = extent[2];
      const maxY = extent[3];
      const flatCoordinates = [
        minX,
        minY,
        minX,
        maxY,
        maxX,
        maxY,
        maxX,
        minY,
        minX,
        minY,
      ];
      return new Polygon["default"](flatCoordinates, 'XY', [flatCoordinates.length]);
    }

    /**
     * @module ol/render/EventType
     */

    /**
     * @enum {string}
     */
    var RenderEventType = {
      /**
       * Triggered before a layer is rendered.
       * @event module:ol/render/Event~RenderEvent#prerender
       * @api
       */
      PRERENDER: 'prerender',

      /**
       * Triggered after a layer is rendered.
       * @event module:ol/render/Event~RenderEvent#postrender
       * @api
       */
      POSTRENDER: 'postrender',

      /**
       * Triggered before layers are composed.  When dispatched by the map, the event object will not have
       * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
       * WebGL layers currently dispatch this event.
       * @event module:ol/render/Event~RenderEvent#precompose
       * @api
       */
      PRECOMPOSE: 'precompose',

      /**
       * Triggered after layers are composed.  When dispatched by the map, the event object will not have
       * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
       * WebGL layers currently dispatch this event.
       * @event module:ol/render/Event~RenderEvent#postcompose
       * @api
       */
      POSTCOMPOSE: 'postcompose',

      /**
       * Triggered when rendering is complete, i.e. all sources and tiles have
       * finished loading for the current viewport, and all tiles are faded in.
       * The event object will not have a `context` set.
       * @event module:ol/render/Event~RenderEvent#rendercomplete
       * @api
       */
      RENDERCOMPLETE: 'rendercomplete',
    };

    /**
     * @typedef {'postrender'|'precompose'|'postcompose'|'rendercomplete'} MapRenderEventTypes
     */

    /**
     * @typedef {'postrender'|'prerender'} LayerRenderEventTypes
     */

    /**
     * @module ol/size
     */

    /**
     * Determines if a size has a positive area.
     * @param {Size} size The size to test.
     * @return {boolean} The size has a positive area.
     */
    function hasArea(size) {
      return size[0] > 0 && size[1] > 0;
    }

    /**
     * @module ol/color
     */

    /**
     * Return the color as an rgba string.
     * @param {Color|string} color Color.
     * @return {string} Rgba string.
     * @api
     */
    function asString(color) {
      if (typeof color === 'string') {
        return color;
      }
      return toString(color);
    }

    /**
     * @param {Color} color Color.
     * @return {string} String.
     */
    function toString(color) {
      let r = color[0];
      if (r != (r | 0)) {
        r = (r + 0.5) | 0;
      }
      let g = color[1];
      if (g != (g | 0)) {
        g = (g + 0.5) | 0;
      }
      let b = color[2];
      if (b != (b | 0)) {
        b = (b + 0.5) | 0;
      }
      const a = color[3] === undefined ? 1 : Math.round(color[3] * 100) / 100;
      return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    }

    /**
     * @param {Node} newNode Node to replace old node
     * @param {Node} oldNode The node to be replaced
     */
    function dom.replaceNode(newNode, oldNode) {
      const parent = oldNode.parentNode;
      if (parent) {
        parent.replaceChild(newNode, oldNode);
      }
    }

    /**
     * @param {Node} node The node to remove.
     * @return {Node|null} The node that was removed or null.
     */
    function dom.removeNode(node) {
      return node && node.parentNode ? node.parentNode.removeChild(node) : null;
    }

    /**
     * @param {Node} node The node to remove the children from.
     */
    function dom.removeChildren(node) {
      while (node.lastChild) {
        node.removeChild(node.lastChild);
      }
    }

    /**
     * Transform the children of a parent node so they match the
     * provided list of children.  This function aims to efficiently
     * remove, add, and reorder child nodes while maintaining a simple
     * implementation (it is not guaranteed to minimize DOM operations).
     * @param {Node} node The parent node whose children need reworking.
     * @param {Array<Node>} children The desired children.
     */
    function dom.replaceChildren(node, children) {
      const oldChildren = node.childNodes;

      for (let i = 0; true; ++i) {
        const oldChild = oldChildren[i];
        const newChild = children[i];

        // check if our work is done
        if (!oldChild && !newChild) {
          break;
        }

        // check if children match
        if (oldChild === newChild) {
          continue;
        }

        // check if a new child needs to be added
        if (!oldChild) {
          node.appendChild(newChild);
          continue;
        }

        // check if an old child needs to be removed
        if (!newChild) {
          node.removeChild(oldChild);
          --i;
          continue;
        }

        // reorder
        node.insertBefore(newChild, oldChild);
      }
    }

    /**
     * @module ol/css
     */

    /**
     * @typedef {Object} FontParameters
     * @property {string} style Style.
     * @property {string} variant Variant.
     * @property {string} weight Weight.
     * @property {string} size Size.
     * @property {string} lineHeight LineHeight.
     * @property {string} family Family.
     * @property {Array<string>} families Families.
     */

    /**
     * The CSS class for hidden feature.
     *
     * @const
     * @type {string}
     */
    const css.CLASS_HIDDEN = 'ol-hidden';

    /**
     * The CSS class that we'll give the DOM elements to have them unselectable.
     *
     * @const
     * @type {string}
     */
    const css.CLASS_UNSELECTABLE = 'ol-unselectable';

    /**
     * The CSS class for controls.
     *
     * @const
     * @type {string}
     */
    const css.CLASS_CONTROL = 'ol-control';

    /**
     * The CSS class that we'll give the DOM elements that are collapsed, i.e.
     * to those elements which usually can be expanded.
     *
     * @const
     * @type {string}
     */
    const css.CLASS_COLLAPSED = 'ol-collapsed';

    /**
     * @module ol/render/canvas
     */

    /**
     * @type {BaseObject}
     */
    const checkedFonts = new Object$1["default"]();

    /**
     * @module ol/layer/Property
     */

    /**
     * @enum {string}
     */
    var LayerProperty = {
      OPACITY: 'opacity',
      VISIBLE: 'visible',
      EXTENT: 'extent',
      Z_INDEX: 'zIndex',
      MAX_RESOLUTION: 'maxResolution',
      MIN_RESOLUTION: 'minResolution',
      MAX_ZOOM: 'maxZoom',
      MIN_ZOOM: 'minZoom',
      SOURCE: 'source',
      MAP: 'map',
    };

    /**
     * @module ol/layer/Base
     */

    /**
     * A css color, or a function called with a view resolution returning a css color.
     *
     * @typedef {string|function(number):string} BackgroundColor
     * @api
     */

    /**
     * @typedef {import("../ObjectEventType").Types|'change:extent'|'change:maxResolution'|'change:maxZoom'|
     *    'change:minResolution'|'change:minZoom'|'change:opacity'|'change:visible'|'change:zIndex'} BaseLayerObjectEventTypes
     */

    /***
     * @template Return
     * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
     *   import("../Observable").OnSignature<BaseLayerObjectEventTypes, import("../Object").ObjectEvent, Return> &
     *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|BaseLayerObjectEventTypes, Return>} BaseLayerOnSignature
     */

    /**
     * @typedef {Object} Options
     * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
     * @property {number} [opacity=1] Opacity (0, 1).
     * @property {boolean} [visible=true] Visibility.
     * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
     * rendered outside of this extent.
     * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
     * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
     * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
     * method was used.
     * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
     * visible.
     * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
     * be visible.
     * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
     * visible.
     * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
     * be visible.
     * @property {BackgroundColor} [background] Background color for the layer. If not specified, no background
     * will be rendered.
     * @property {Object<string, *>} [properties] Arbitrary observable properties. Can be accessed with `#get()` and `#set()`.
     */

    /**
     * @classdesc
     * Abstract base class; normally only used for creating subclasses and not
     * instantiated in apps.
     * Note that with {@link module:ol/layer/Base~BaseLayer} and all its subclasses, any property set in
     * the options is set as a {@link module:ol/Object~BaseObject} property on the layer object, so
     * is observable, and has get/set accessors.
     *
     * @api
     */
    class BaseLayer extends Object$1["default"] {
      /**
       * @param {Options} options Layer options.
       */
      constructor(options) {
        super();

        /***
         * @type {BaseLayerOnSignature<import("../events").EventsKey>}
         */
        this.on;

        /***
         * @type {BaseLayerOnSignature<import("../events").EventsKey>}
         */
        this.once;

        /***
         * @type {BaseLayerOnSignature<void>}
         */
        this.un;

        /**
         * @type {BackgroundColor|false}
         * @private
         */
        this.background_ = options.background;

        /**
         * @type {Object<string, *>}
         */
        const properties = Object.assign({}, options);
        if (typeof options.properties === 'object') {
          delete properties.properties;
          Object.assign(properties, options.properties);
        }

        properties[LayerProperty.OPACITY] =
          options.opacity !== undefined ? options.opacity : 1;
        asserts.assert(typeof properties[LayerProperty.OPACITY] === 'number', 64); // Layer opacity must be a number

        properties[LayerProperty.VISIBLE] =
          options.visible !== undefined ? options.visible : true;
        properties[LayerProperty.Z_INDEX] = options.zIndex;
        properties[LayerProperty.MAX_RESOLUTION] =
          options.maxResolution !== undefined ? options.maxResolution : Infinity;
        properties[LayerProperty.MIN_RESOLUTION] =
          options.minResolution !== undefined ? options.minResolution : 0;
        properties[LayerProperty.MIN_ZOOM] =
          options.minZoom !== undefined ? options.minZoom : -Infinity;
        properties[LayerProperty.MAX_ZOOM] =
          options.maxZoom !== undefined ? options.maxZoom : Infinity;

        /**
         * @type {string}
         * @private
         */
        this.className_ =
          properties.className !== undefined ? properties.className : 'ol-layer';
        delete properties.className;

        this.setProperties(properties);

        /**
         * @type {import("./Layer.js").State}
         * @private
         */
        this.state_ = null;
      }

      /**
       * Get the background for this layer.
       * @return {BackgroundColor|false} Layer background.
       */
      getBackground() {
        return this.background_;
      }

      /**
       * @return {string} CSS class name.
       */
      getClassName() {
        return this.className_;
      }

      /**
       * This method is not meant to be called by layers or layer renderers because the state
       * is incorrect if the layer is included in a layer group.
       *
       * @param {boolean} [managed] Layer is managed.
       * @return {import("./Layer.js").State} Layer state.
       */
      getLayerState(managed) {
        /** @type {import("./Layer.js").State} */
        const state =
          this.state_ ||
          /** @type {?} */ ({
            layer: this,
            managed: managed === undefined ? true : managed,
          });
        const zIndex = this.getZIndex();
        state.opacity = math.clamp(Math.round(this.getOpacity() * 100) / 100, 0, 1);
        state.visible = this.getVisible();
        state.extent = this.getExtent();
        state.zIndex = zIndex === undefined && !state.managed ? Infinity : zIndex;
        state.maxResolution = this.getMaxResolution();
        state.minResolution = Math.max(this.getMinResolution(), 0);
        state.minZoom = this.getMinZoom();
        state.maxZoom = this.getMaxZoom();
        this.state_ = state;

        return state;
      }

      /**
       * @abstract
       * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be
       *     modified in place).
       * @return {Array<import("./Layer.js").default>} Array of layers.
       */
      getLayersArray(array) {
        return util.abstract();
      }

      /**
       * @abstract
       * @param {Array<import("./Layer.js").State>} [states] Optional list of layer
       *     states (to be modified in place).
       * @return {Array<import("./Layer.js").State>} List of layer states.
       */
      getLayerStatesArray(states) {
        return util.abstract();
      }

      /**
       * Return the {@link module:ol/extent~Extent extent} of the layer or `undefined` if it
       * will be visible regardless of extent.
       * @return {import("../extent.js").Extent|undefined} The layer extent.
       * @observable
       * @api
       */
      getExtent() {
        return /** @type {import("../extent.js").Extent|undefined} */ (
          this.get(LayerProperty.EXTENT)
        );
      }

      /**
       * Return the maximum resolution of the layer.
       * @return {number} The maximum resolution of the layer.
       * @observable
       * @api
       */
      getMaxResolution() {
        return /** @type {number} */ (this.get(LayerProperty.MAX_RESOLUTION));
      }

      /**
       * Return the minimum resolution of the layer.
       * @return {number} The minimum resolution of the layer.
       * @observable
       * @api
       */
      getMinResolution() {
        return /** @type {number} */ (this.get(LayerProperty.MIN_RESOLUTION));
      }

      /**
       * Return the minimum zoom level of the layer.
       * @return {number} The minimum zoom level of the layer.
       * @observable
       * @api
       */
      getMinZoom() {
        return /** @type {number} */ (this.get(LayerProperty.MIN_ZOOM));
      }

      /**
       * Return the maximum zoom level of the layer.
       * @return {number} The maximum zoom level of the layer.
       * @observable
       * @api
       */
      getMaxZoom() {
        return /** @type {number} */ (this.get(LayerProperty.MAX_ZOOM));
      }

      /**
       * Return the opacity of the layer (between 0 and 1).
       * @return {number} The opacity of the layer.
       * @observable
       * @api
       */
      getOpacity() {
        return /** @type {number} */ (this.get(LayerProperty.OPACITY));
      }

      /**
       * @abstract
       * @return {import("../source/Source.js").State} Source state.
       */
      getSourceState() {
        return util.abstract();
      }

      /**
       * Return the visibility of the layer (`true` or `false`).
       * @return {boolean} The visibility of the layer.
       * @observable
       * @api
       */
      getVisible() {
        return /** @type {boolean} */ (this.get(LayerProperty.VISIBLE));
      }

      /**
       * Return the Z-index of the layer, which is used to order layers before
       * rendering. The default Z-index is 0.
       * @return {number} The Z-index of the layer.
       * @observable
       * @api
       */
      getZIndex() {
        return /** @type {number} */ (this.get(LayerProperty.Z_INDEX));
      }

      /**
       * Sets the background color.
       * @param {BackgroundColor} [background] Background color.
       */
      setBackground(background) {
        this.background_ = background;
        this.changed();
      }

      /**
       * Set the extent at which the layer is visible.  If `undefined`, the layer
       * will be visible at all extents.
       * @param {import("../extent.js").Extent|undefined} extent The extent of the layer.
       * @observable
       * @api
       */
      setExtent(extent) {
        this.set(LayerProperty.EXTENT, extent);
      }

      /**
       * Set the maximum resolution at which the layer is visible.
       * @param {number} maxResolution The maximum resolution of the layer.
       * @observable
       * @api
       */
      setMaxResolution(maxResolution) {
        this.set(LayerProperty.MAX_RESOLUTION, maxResolution);
      }

      /**
       * Set the minimum resolution at which the layer is visible.
       * @param {number} minResolution The minimum resolution of the layer.
       * @observable
       * @api
       */
      setMinResolution(minResolution) {
        this.set(LayerProperty.MIN_RESOLUTION, minResolution);
      }

      /**
       * Set the maximum zoom (exclusive) at which the layer is visible.
       * Note that the zoom levels for layer visibility are based on the
       * view zoom level, which may be different from a tile source zoom level.
       * @param {number} maxZoom The maximum zoom of the layer.
       * @observable
       * @api
       */
      setMaxZoom(maxZoom) {
        this.set(LayerProperty.MAX_ZOOM, maxZoom);
      }

      /**
       * Set the minimum zoom (inclusive) at which the layer is visible.
       * Note that the zoom levels for layer visibility are based on the
       * view zoom level, which may be different from a tile source zoom level.
       * @param {number} minZoom The minimum zoom of the layer.
       * @observable
       * @api
       */
      setMinZoom(minZoom) {
        this.set(LayerProperty.MIN_ZOOM, minZoom);
      }

      /**
       * Set the opacity of the layer, allowed values range from 0 to 1.
       * @param {number} opacity The opacity of the layer.
       * @observable
       * @api
       */
      setOpacity(opacity) {
        asserts.assert(typeof opacity === 'number', 64); // Layer opacity must be a number
        this.set(LayerProperty.OPACITY, opacity);
      }

      /**
       * Set the visibility of the layer (`true` or `false`).
       * @param {boolean} visible The visibility of the layer.
       * @observable
       * @api
       */
      setVisible(visible) {
        this.set(LayerProperty.VISIBLE, visible);
      }

      /**
       * Set Z-index of the layer, which is used to order layers before rendering.
       * The default Z-index is 0.
       * @param {number} zindex The z-index of the layer.
       * @observable
       * @api
       */
      setZIndex(zindex) {
        this.set(LayerProperty.Z_INDEX, zindex);
      }

      /**
       * Clean up.
       */
      disposeInternal() {
        if (this.state_) {
          this.state_.layer = null;
          this.state_ = null;
        }
        super.disposeInternal();
      }
    }

    var BaseLayer$1 = BaseLayer;

    /**
     * @module ol/ViewHint
     */

    /**
     * @enum {number}
     */
    var ViewHint = {
      ANIMATING: 0,
      INTERACTING: 1,
    };

    /**
     * @module ol/ViewProperty
     */

    /**
     * @enum {string}
     */
    var ViewProperty = {
      CENTER: 'center',
      RESOLUTION: 'resolution',
      ROTATION: 'rotation',
    };

    /**
     * @module ol/tilegrid/common
     */

    /**
     * Default tile size.
     * @type {number}
     */
    const DEFAULT_TILE_SIZE = 256;

    /**
     * @module ol/centerconstraint
     */

    /**
     * @typedef {function((import("./coordinate.js").Coordinate|undefined), number, import("./size.js").Size, boolean=, Array<number>=): (import("./coordinate.js").Coordinate|undefined)} Type
     */

    /**
     * @param {import("./extent.js").Extent} extent Extent.
     * @param {boolean} onlyCenter If true, the constraint will only apply to the view center.
     * @param {boolean} smooth If true, the view will be able to go slightly out of the given extent
     * (only during interaction and animation).
     * @return {Type} The constraint.
     */
    function createExtent(extent, onlyCenter, smooth) {
      return (
        /**
         * @param {import("./coordinate.js").Coordinate|undefined} center Center.
         * @param {number|undefined} resolution Resolution.
         * @param {import("./size.js").Size} size Viewport size; unused if `onlyCenter` was specified.
         * @param {boolean} [isMoving] True if an interaction or animation is in progress.
         * @param {Array<number>} [centerShift] Shift between map center and viewport center.
         * @return {import("./coordinate.js").Coordinate|undefined} Center.
         */
        function (center, resolution, size, isMoving, centerShift) {
          if (!center) {
            return undefined;
          }
          if (!resolution && !onlyCenter) {
            return center;
          }
          const viewWidth = onlyCenter ? 0 : size[0] * resolution;
          const viewHeight = onlyCenter ? 0 : size[1] * resolution;
          const shiftX = centerShift ? centerShift[0] : 0;
          const shiftY = centerShift ? centerShift[1] : 0;
          let minX = extent[0] + viewWidth / 2 + shiftX;
          let maxX = extent[2] - viewWidth / 2 + shiftX;
          let minY = extent[1] + viewHeight / 2 + shiftY;
          let maxY = extent[3] - viewHeight / 2 + shiftY;

          // note: when zooming out of bounds, min and max values for x and y may
          // end up inverted (min > max); this has to be accounted for
          if (minX > maxX) {
            minX = (maxX + minX) / 2;
            maxX = minX;
          }
          if (minY > maxY) {
            minY = (maxY + minY) / 2;
            maxY = minY;
          }

          let x = math.clamp(center[0], minX, maxX);
          let y = math.clamp(center[1], minY, maxY);

          // during an interaction, allow some overscroll
          if (isMoving && smooth && resolution) {
            const ratio = 30 * resolution;
            x +=
              -ratio * Math.log(1 + Math.max(0, minX - center[0]) / ratio) +
              ratio * Math.log(1 + Math.max(0, center[0] - maxX) / ratio);
            y +=
              -ratio * Math.log(1 + Math.max(0, minY - center[1]) / ratio) +
              ratio * Math.log(1 + Math.max(0, center[1] - maxY) / ratio);
          }

          return [x, y];
        }
      );
    }

    /**
     * @param {import("./coordinate.js").Coordinate} [center] Center.
     * @return {import("./coordinate.js").Coordinate|undefined} Center.
     */
    function none$1(center) {
      return center;
    }

    /**
     * @module ol/resolutionconstraint
     */

    /**
     * @typedef {function((number|undefined), number, import("./size.js").Size, boolean=): (number|undefined)} Type
     */

    /**
     * Returns a modified resolution taking into account the viewport size and maximum
     * allowed extent.
     * @param {number} resolution Resolution
     * @param {import("./extent.js").Extent} maxExtent Maximum allowed extent.
     * @param {import("./size.js").Size} viewportSize Viewport size.
     * @param {boolean} showFullExtent Whether to show the full extent.
     * @return {number} Capped resolution.
     */
    function getViewportClampedResolution(
      resolution,
      maxExtent,
      viewportSize,
      showFullExtent
    ) {
      const xResolution = extent.getWidth(maxExtent) / viewportSize[0];
      const yResolution = extent.getHeight(maxExtent) / viewportSize[1];

      if (showFullExtent) {
        return Math.min(resolution, Math.max(xResolution, yResolution));
      }
      return Math.min(resolution, Math.min(xResolution, yResolution));
    }

    /**
     * Returns a modified resolution to be between maxResolution and minResolution while
     * still allowing the value to be slightly out of bounds.
     * Note: the computation is based on the logarithm function (ln):
     *  - at 1, ln(x) is 0
     *  - above 1, ln(x) keeps increasing but at a much slower pace than x
     * The final result is clamped to prevent getting too far away from bounds.
     * @param {number} resolution Resolution.
     * @param {number} maxResolution Max resolution.
     * @param {number} minResolution Min resolution.
     * @return {number} Smoothed resolution.
     */
    function getSmoothClampedResolution(resolution, maxResolution, minResolution) {
      let result = Math.min(resolution, maxResolution);
      const ratio = 50;

      result *=
        Math.log(1 + ratio * Math.max(0, resolution / maxResolution - 1)) / ratio +
        1;
      if (minResolution) {
        result = Math.max(result, minResolution);
        result /=
          Math.log(1 + ratio * Math.max(0, minResolution / resolution - 1)) /
            ratio +
          1;
      }
      return math.clamp(result, minResolution / 2, maxResolution * 2);
    }

    /**
     * @param {Array<number>} resolutions Resolutions.
     * @param {boolean} [smooth] If true, the view will be able to slightly exceed resolution limits. Default: true.
     * @param {import("./extent.js").Extent} [maxExtent] Maximum allowed extent.
     * @param {boolean} [showFullExtent] If true, allows us to show the full extent. Default: false.
     * @return {Type} Zoom function.
     */
    function createSnapToResolutions(
      resolutions,
      smooth,
      maxExtent,
      showFullExtent
    ) {
      smooth = smooth !== undefined ? smooth : true;
      return (
        /**
         * @param {number|undefined} resolution Resolution.
         * @param {number} direction Direction.
         * @param {import("./size.js").Size} size Viewport size.
         * @param {boolean} [isMoving] True if an interaction or animation is in progress.
         * @return {number|undefined} Resolution.
         */
        function (resolution, direction, size, isMoving) {
          if (resolution !== undefined) {
            const maxResolution = resolutions[0];
            const minResolution = resolutions[resolutions.length - 1];
            const cappedMaxRes = maxExtent
              ? getViewportClampedResolution(
                  maxResolution,
                  maxExtent,
                  size,
                  showFullExtent
                )
              : maxResolution;

            // during interacting or animating, allow intermediary values
            if (isMoving) {
              if (!smooth) {
                return math.clamp(resolution, minResolution, cappedMaxRes);
              }
              return getSmoothClampedResolution(
                resolution,
                cappedMaxRes,
                minResolution
              );
            }

            const capped = Math.min(cappedMaxRes, resolution);
            const z = Math.floor(array.linearFindNearest(resolutions, capped, direction));
            if (resolutions[z] > cappedMaxRes && z < resolutions.length - 1) {
              return resolutions[z + 1];
            }
            return resolutions[z];
          }
          return undefined;
        }
      );
    }

    /**
     * @param {number} power Power.
     * @param {number} maxResolution Maximum resolution.
     * @param {number} [minResolution] Minimum resolution.
     * @param {boolean} [smooth] If true, the view will be able to slightly exceed resolution limits. Default: true.
     * @param {import("./extent.js").Extent} [maxExtent] Maximum allowed extent.
     * @param {boolean} [showFullExtent] If true, allows us to show the full extent. Default: false.
     * @return {Type} Zoom function.
     */
    function createSnapToPower(
      power,
      maxResolution,
      minResolution,
      smooth,
      maxExtent,
      showFullExtent
    ) {
      smooth = smooth !== undefined ? smooth : true;
      minResolution = minResolution !== undefined ? minResolution : 0;

      return (
        /**
         * @param {number|undefined} resolution Resolution.
         * @param {number} direction Direction.
         * @param {import("./size.js").Size} size Viewport size.
         * @param {boolean} [isMoving] True if an interaction or animation is in progress.
         * @return {number|undefined} Resolution.
         */
        function (resolution, direction, size, isMoving) {
          if (resolution !== undefined) {
            const cappedMaxRes = maxExtent
              ? getViewportClampedResolution(
                  maxResolution,
                  maxExtent,
                  size,
                  showFullExtent
                )
              : maxResolution;

            // during interacting or animating, allow intermediary values
            if (isMoving) {
              if (!smooth) {
                return math.clamp(resolution, minResolution, cappedMaxRes);
              }
              return getSmoothClampedResolution(
                resolution,
                cappedMaxRes,
                minResolution
              );
            }

            const tolerance = 1e-9;
            const minZoomLevel = Math.ceil(
              Math.log(maxResolution / cappedMaxRes) / Math.log(power) - tolerance
            );
            const offset = -direction * (0.5 - tolerance) + 0.5;
            const capped = Math.min(cappedMaxRes, resolution);
            const cappedZoomLevel = Math.floor(
              Math.log(maxResolution / capped) / Math.log(power) + offset
            );
            const zoomLevel = Math.max(minZoomLevel, cappedZoomLevel);
            const newResolution = maxResolution / Math.pow(power, zoomLevel);
            return math.clamp(newResolution, minResolution, cappedMaxRes);
          }
          return undefined;
        }
      );
    }

    /**
     * @param {number} maxResolution Max resolution.
     * @param {number} minResolution Min resolution.
     * @param {boolean} [smooth] If true, the view will be able to slightly exceed resolution limits. Default: true.
     * @param {import("./extent.js").Extent} [maxExtent] Maximum allowed extent.
     * @param {boolean} [showFullExtent] If true, allows us to show the full extent. Default: false.
     * @return {Type} Zoom function.
     */
    function createMinMaxResolution(
      maxResolution,
      minResolution,
      smooth,
      maxExtent,
      showFullExtent
    ) {
      smooth = smooth !== undefined ? smooth : true;

      return (
        /**
         * @param {number|undefined} resolution Resolution.
         * @param {number} direction Direction.
         * @param {import("./size.js").Size} size Viewport size.
         * @param {boolean} [isMoving] True if an interaction or animation is in progress.
         * @return {number|undefined} Resolution.
         */
        function (resolution, direction, size, isMoving) {
          if (resolution !== undefined) {
            const cappedMaxRes = maxExtent
              ? getViewportClampedResolution(
                  maxResolution,
                  maxExtent,
                  size,
                  showFullExtent
                )
              : maxResolution;

            if (!smooth || !isMoving) {
              return math.clamp(resolution, minResolution, cappedMaxRes);
            }
            return getSmoothClampedResolution(
              resolution,
              cappedMaxRes,
              minResolution
            );
          }
          return undefined;
        }
      );
    }

    /**
     * @module ol/rotationconstraint
     */

    /**
     * @typedef {function((number|undefined), boolean=): (number|undefined)} Type
     */

    /**
     * @param {number|undefined} rotation Rotation.
     * @return {number|undefined} Rotation.
     */
    function rotationconstraint.disable(rotation) {
      if (rotation !== undefined) {
        return 0;
      }
      return undefined;
    }

    /**
     * @param {number|undefined} rotation Rotation.
     * @return {number|undefined} Rotation.
     */
    function none(rotation) {
      if (rotation !== undefined) {
        return rotation;
      }
      return undefined;
    }

    /**
     * @param {number} n N.
     * @return {Type} Rotation constraint.
     */
    function createSnapToN(n) {
      const theta = (2 * Math.PI) / n;
      return (
        /**
         * @param {number|undefined} rotation Rotation.
         * @param {boolean} [isMoving] True if an interaction or animation is in progress.
         * @return {number|undefined} Rotation.
         */
        function (rotation, isMoving) {
          if (isMoving) {
            return rotation;
          }

          if (rotation !== undefined) {
            rotation = Math.floor(rotation / theta + 0.5) * theta;
            return rotation;
          }
          return undefined;
        }
      );
    }

    /**
     * @param {number} [tolerance] Tolerance.
     * @return {Type} Rotation constraint.
     */
    function createSnapToZero(tolerance) {
      tolerance = tolerance || math.toRadians(5);
      return (
        /**
         * @param {number|undefined} rotation Rotation.
         * @param {boolean} [isMoving] True if an interaction or animation is in progress.
         * @return {number|undefined} Rotation.
         */
        function (rotation, isMoving) {
          if (isMoving) {
            return rotation;
          }

          if (rotation !== undefined) {
            if (Math.abs(rotation) <= tolerance) {
              return 0;
            }
            return rotation;
          }
          return undefined;
        }
      );
    }

    /**
     * @module ol/easing
     */

    /**
     * Start slow and speed up.
     * @param {number} t Input between 0 and 1.
     * @return {number} Output between 0 and 1.
     * @api
     */
    function easeIn(t) {
      return Math.pow(t, 3);
    }

    /**
     * Start fast and slow down.
     * @param {number} t Input between 0 and 1.
     * @return {number} Output between 0 and 1.
     * @api
     */
    function easing.easeOut(t) {
      return 1 - easeIn(1 - t);
    }

    /**
     * Start slow, speed up, and then slow down again.
     * @param {number} t Input between 0 and 1.
     * @return {number} Output between 0 and 1.
     * @api
     */
    function inAndOut(t) {
      return 3 * t * t - 2 * t * t * t;
    }

    /**
     * Maintain a constant speed over time.
     * @param {number} t Input between 0 and 1.
     * @return {number} Output between 0 and 1.
     * @api
     */
    function easing.linear(t) {
      return t;
    }

    /**
     * @module ol/View
     */

    /**
     * An animation configuration
     *
     * @typedef {Object} Animation
     * @property {import("./coordinate.js").Coordinate} [sourceCenter] Source center.
     * @property {import("./coordinate.js").Coordinate} [targetCenter] Target center.
     * @property {number} [sourceResolution] Source resolution.
     * @property {number} [targetResolution] Target resolution.
     * @property {number} [sourceRotation] Source rotation.
     * @property {number} [targetRotation] Target rotation.
     * @property {import("./coordinate.js").Coordinate} [anchor] Anchor.
     * @property {number} start Start.
     * @property {number} duration Duration.
     * @property {boolean} complete Complete.
     * @property {function(number):number} easing Easing.
     * @property {function(boolean):void} callback Callback.
     */

    /**
     * @typedef {Object} Constraints
     * @property {import("./centerconstraint.js").Type} center Center.
     * @property {import("./resolutionconstraint.js").Type} resolution Resolution.
     * @property {import("./rotationconstraint.js").Type} rotation Rotation.
     */

    /**
     * @typedef {Object} FitOptions
     * @property {import("./size.js").Size} [size] The size in pixels of the box to fit
     * the extent into. Default is the current size of the first map in the DOM that
     * uses this view, or `[100, 100]` if no such map is found.
     * @property {!Array<number>} [padding=[0, 0, 0, 0]] Padding (in pixels) to be
     * cleared inside the view. Values in the array are top, right, bottom and left
     * padding.
     * @property {boolean} [nearest=false] If the view `constrainResolution` option is `true`,
     * get the nearest extent instead of the closest that actually fits the view.
     * @property {number} [minResolution=0] Minimum resolution that we zoom to.
     * @property {number} [maxZoom] Maximum zoom level that we zoom to. If
     * `minResolution` is given, this property is ignored.
     * @property {number} [duration] The duration of the animation in milliseconds.
     * By default, there is no animation to the target extent.
     * @property {function(number):number} [easing] The easing function used during
     * the animation (defaults to {@link module:ol/easing.inAndOut}).
     * The function will be called for each frame with a number representing a
     * fraction of the animation's duration.  The function should return a number
     * between 0 and 1 representing the progress toward the destination state.
     * @property {function(boolean):void} [callback] Function called when the view is in
     * its final position. The callback will be called with `true` if the animation
     * series completed on its own or `false` if it was cancelled.
     */

    /**
     * @typedef {Object} ViewOptions
     * @property {import("./coordinate.js").Coordinate} [center] The initial center for
     * the view. If a user projection is not set, the coordinate system for the center is
     * specified with the `projection` option. Layer sources will not be fetched if this
     * is not set, but the center can be set later with {@link #setCenter}.
     * @property {boolean|number} [constrainRotation=true] Rotation constraint.
     * `false` means no constraint. `true` means no constraint, but snap to zero
     * near zero. A number constrains the rotation to that number of values. For
     * example, `4` will constrain the rotation to 0, 90, 180, and 270 degrees.
     * @property {boolean} [enableRotation=true] Enable rotation.
     * If `false`, a rotation constraint that always sets the rotation to zero is
     * used. The `constrainRotation` option has no effect if `enableRotation` is
     * `false`.
     * @property {import("./extent.js").Extent} [extent] The extent that constrains the
     * view, in other words, nothing outside of this extent can be visible on the map.
     * @property {boolean} [constrainOnlyCenter=false] If true, the extent
     * constraint will only apply to the view center and not the whole extent.
     * @property {boolean} [smoothExtentConstraint=true] If true, the extent
     * constraint will be applied smoothly, i.e. allow the view to go slightly outside
     * of the given `extent`.
     * @property {number} [maxResolution] The maximum resolution used to determine
     * the resolution constraint. It is used together with `minResolution` (or
     * `maxZoom`) and `zoomFactor`. If unspecified it is calculated in such a way
     * that the projection's validity extent fits in a 256x256 px tile. If the
     * projection is Spherical Mercator (the default) then `maxResolution` defaults
     * to `40075016.68557849 / 256 = 156543.03392804097`.
     * @property {number} [minResolution] The minimum resolution used to determine
     * the resolution constraint.  It is used together with `maxResolution` (or
     * `minZoom`) and `zoomFactor`.  If unspecified it is calculated assuming 29
     * zoom levels (with a factor of 2). If the projection is Spherical Mercator
     * (the default) then `minResolution` defaults to
     * `40075016.68557849 / 256 / Math.pow(2, 28) = 0.0005831682455839253`.
     * @property {number} [maxZoom=28] The maximum zoom level used to determine the
     * resolution constraint. It is used together with `minZoom` (or
     * `maxResolution`) and `zoomFactor`.  Note that if `minResolution` is also
     * provided, it is given precedence over `maxZoom`.
     * @property {number} [minZoom=0] The minimum zoom level used to determine the
     * resolution constraint. It is used together with `maxZoom` (or
     * `minResolution`) and `zoomFactor`.  Note that if `maxResolution` is also
     * provided, it is given precedence over `minZoom`.
     * @property {boolean} [multiWorld=false] If `false` the view is constrained so
     * only one world is visible, and you cannot pan off the edge.  If `true` the map
     * may show multiple worlds at low zoom levels.  Only used if the `projection` is
     * global.  Note that if `extent` is also provided it is given precedence.
     * @property {boolean} [constrainResolution=false] If true, the view will always
     * animate to the closest zoom level after an interaction; false means
     * intermediary zoom levels are allowed.
     * @property {boolean} [smoothResolutionConstraint=true] If true, the resolution
     * min/max values will be applied smoothly, i. e. allow the view to exceed slightly
     * the given resolution or zoom bounds.
     * @property {boolean} [showFullExtent=false] Allow the view to be zoomed out to
     * show the full configured extent. By default, when a view is configured with an
     * extent, users will not be able to zoom out so the viewport exceeds the extent in
     * either dimension. This means the full extent may not be visible if the viewport
     * is taller or wider than the aspect ratio of the configured extent. If
     * showFullExtent is true, the user will be able to zoom out so that the viewport
     * exceeds the height or width of the configured extent, but not both, allowing the
     * full extent to be shown.
     * @property {import("./proj.js").ProjectionLike} [projection='EPSG:3857'] The
     * projection. The default is Spherical Mercator.
     * @property {number} [resolution] The initial resolution for the view. The
     * units are `projection` units per pixel (e.g. meters per pixel). An
     * alternative to setting this is to set `zoom`. Layer sources will not be
     * fetched if neither this nor `zoom` are defined, but they can be set later
     * with {@link #setZoom} or {@link #setResolution}.
     * @property {Array<number>} [resolutions] Resolutions that determine the
     * zoom levels if specified. The index in the array corresponds to the zoom level,
     * therefore the resolution values have to be in descending order. It also constrains
     * the resolution by the minimum and maximum value. If set the `maxResolution`,
     * `minResolution`, `minZoom`, `maxZoom`, and `zoomFactor` options are ignored.
     * @property {number} [rotation=0] The initial rotation for the view in radians
     * (positive rotation clockwise, 0 means North).
     * @property {number} [zoom] Only used if `resolution` is not defined. Zoom
     * level used to calculate the initial resolution for the view.
     * @property {number} [zoomFactor=2] The zoom factor used to compute the
     * corresponding resolution.
     * @property {!Array<number>} [padding=[0, 0, 0, 0]] Padding (in css pixels).
     * If the map viewport is partially covered with other content (overlays) along
     * its edges, this setting allows to shift the center of the viewport away from
     * that content. The order of the values is top, right, bottom, left.
     */

    /**
     * @typedef {Object} AnimationOptions
     * @property {import("./coordinate.js").Coordinate} [center] The center of the view at the end of
     * the animation.
     * @property {number} [zoom] The zoom level of the view at the end of the
     * animation. This takes precedence over `resolution`.
     * @property {number} [resolution] The resolution of the view at the end
     * of the animation.  If `zoom` is also provided, this option will be ignored.
     * @property {number} [rotation] The rotation of the view at the end of
     * the animation.
     * @property {import("./coordinate.js").Coordinate} [anchor] Optional anchor to remain fixed
     * during a rotation or resolution animation.
     * @property {number} [duration=1000] The duration of the animation in milliseconds.
     * @property {function(number):number} [easing] The easing function used
     * during the animation (defaults to {@link module:ol/easing.inAndOut}).
     * The function will be called for each frame with a number representing a
     * fraction of the animation's duration.  The function should return a number
     * between 0 and 1 representing the progress toward the destination state.
     */

    /**
     * @typedef {Object} State
     * @property {import("./coordinate.js").Coordinate} center Center.
     * @property {import("./proj/Projection.js").default} projection Projection.
     * @property {number} resolution Resolution.
     * @property {import("./coordinate.js").Coordinate} [nextCenter] The next center during an animation series.
     * @property {number} [nextResolution] The next resolution during an animation series.
     * @property {number} [nextRotation] The next rotation during an animation series.
     * @property {number} rotation Rotation.
     * @property {number} zoom Zoom.
     */

    /**
     * Like {@link import("./Map.js").FrameState}, but just `viewState` and `extent`.
     * @typedef {Object} ViewStateAndExtent
     * @property {State} viewState View state.
     * @property {import("./extent.js").Extent} extent Extent.
     */

    /**
     * Default min zoom level for the map view.
     * @type {number}
     */
    const DEFAULT_MIN_ZOOM = 0;

    /**
     * @typedef {import("./ObjectEventType").Types|'change:center'|'change:resolution'|'change:rotation'} ViewObjectEventTypes
     */

    /***
     * @template Return
     * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
     *   import("./Observable").OnSignature<ViewObjectEventTypes, import("./Object").ObjectEvent, Return> &
     *   import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|ViewObjectEventTypes, Return>} ViewOnSignature
     */

    /**
     * @classdesc
     * A View object represents a simple 2D view of the map.
     *
     * This is the object to act upon to change the center, resolution,
     * and rotation of the map.
     *
     * A View has a `projection`. The projection determines the
     * coordinate system of the center, and its units determine the units of the
     * resolution (projection units per pixel). The default projection is
     * Web Mercator (EPSG:3857).
     *
     * ### The view states
     *
     * A View is determined by three states: `center`, `resolution`,
     * and `rotation`. Each state has a corresponding getter and setter, e.g.
     * `getCenter` and `setCenter` for the `center` state.
     *
     * The `zoom` state is actually not saved on the view: all computations
     * internally use the `resolution` state. Still, the `setZoom` and `getZoom`
     * methods are available, as well as `getResolutionForZoom` and
     * `getZoomForResolution` to switch from one system to the other.
     *
     * ### The constraints
     *
     * `setCenter`, `setResolution` and `setRotation` can be used to change the
     * states of the view, but any constraint defined in the constructor will
     * be applied along the way.
     *
     * A View object can have a *resolution constraint*, a *rotation constraint*
     * and a *center constraint*.
     *
     * The *resolution constraint* typically restricts min/max values and
     * snaps to specific resolutions. It is determined by the following
     * options: `resolutions`, `maxResolution`, `maxZoom` and `zoomFactor`.
     * If `resolutions` is set, the other three options are ignored. See
     * documentation for each option for more information. By default, the view
     * only has a min/max restriction and allow intermediary zoom levels when
     * pinch-zooming for example.
     *
     * The *rotation constraint* snaps to specific angles. It is determined
     * by the following options: `enableRotation` and `constrainRotation`.
     * By default rotation is allowed and its value is snapped to zero when approaching the
     * horizontal.
     *
     * The *center constraint* is determined by the `extent` option. By
     * default the view center is not constrained at all.
     *
     * ### Changing the view state
     *
     * It is important to note that `setZoom`, `setResolution`, `setCenter` and
     * `setRotation` are subject to the above mentioned constraints. As such, it
     * may sometimes not be possible to know in advance the resulting state of the
     * View. For example, calling `setResolution(10)` does not guarantee that
     * `getResolution()` will return `10`.
     *
     * A consequence of this is that, when applying a delta on the view state, one
     * should use `adjustCenter`, `adjustRotation`, `adjustZoom` and `adjustResolution`
     * rather than the corresponding setters. This will let view do its internal
     * computations. Besides, the `adjust*` methods also take an `anchor`
     * argument which allows specifying an origin for the transformation.
     *
     * ### Interacting with the view
     *
     * View constraints are usually only applied when the view is *at rest*, meaning that
     * no interaction or animation is ongoing. As such, if the user puts the view in a
     * state that is not equivalent to a constrained one (e.g. rotating the view when
     * the snap angle is 0), an animation will be triggered at the interaction end to
     * put back the view to a stable state;
     *
     * @api
     */
    class View extends Object$1["default"] {
      /**
       * @param {ViewOptions} [options] View options.
       */
      constructor(options) {
        super();

        /***
         * @type {ViewOnSignature<import("./events").EventsKey>}
         */
        this.on;

        /***
         * @type {ViewOnSignature<import("./events").EventsKey>}
         */
        this.once;

        /***
         * @type {ViewOnSignature<void>}
         */
        this.un;

        options = Object.assign({}, options);

        /**
         * @private
         * @type {Array<number>}
         */
        this.hints_ = [0, 0];

        /**
         * @private
         * @type {Array<Array<Animation>>}
         */
        this.animations_ = [];

        /**
         * @private
         * @type {number|undefined}
         */
        this.updateAnimationKey_;

        /**
         * @private
         * @const
         * @type {import("./proj/Projection.js").default}
         */
        this.projection_ = createProjection(options.projection, 'EPSG:3857');

        /**
         * @private
         * @type {import("./size.js").Size}
         */
        this.viewportSize_ = [100, 100];

        /**
         * @private
         * @type {import("./coordinate.js").Coordinate|undefined}
         */
        this.targetCenter_ = null;

        /**
         * @private
         * @type {number|undefined}
         */
        this.targetResolution_;

        /**
         * @private
         * @type {number|undefined}
         */
        this.targetRotation_;

        /**
         * @private
         * @type {import("./coordinate.js").Coordinate}
         */
        this.nextCenter_ = null;

        /**
         * @private
         * @type {number}
         */
        this.nextResolution_;

        /**
         * @private
         * @type {number}
         */
        this.nextRotation_;

        /**
         * @private
         * @type {import("./coordinate.js").Coordinate|undefined}
         */
        this.cancelAnchor_ = undefined;

        if (options.projection) {
          disableCoordinateWarning();
        }
        if (options.center) {
          options.center = fromUserCoordinate(options.center, this.projection_);
        }
        if (options.extent) {
          options.extent = fromUserExtent(options.extent, this.projection_);
        }

        this.applyOptions_(options);
      }

      /**
       * Set up the view with the given options.
       * @param {ViewOptions} options View options.
       */
      applyOptions_(options) {
        const properties = Object.assign({}, options);
        for (const key in ViewProperty) {
          delete properties[key];
        }
        this.setProperties(properties, true);

        const resolutionConstraintInfo = createResolutionConstraint(options);

        /**
         * @private
         * @type {number}
         */
        this.maxResolution_ = resolutionConstraintInfo.maxResolution;

        /**
         * @private
         * @type {number}
         */
        this.minResolution_ = resolutionConstraintInfo.minResolution;

        /**
         * @private
         * @type {number}
         */
        this.zoomFactor_ = resolutionConstraintInfo.zoomFactor;

        /**
         * @private
         * @type {Array<number>|undefined}
         */
        this.resolutions_ = options.resolutions;

        /**
         * @type {Array<number>|undefined}
         * @private
         */
        this.padding_ = options.padding;

        /**
         * @private
         * @type {number}
         */
        this.minZoom_ = resolutionConstraintInfo.minZoom;

        const centerConstraint = createCenterConstraint(options);
        const resolutionConstraint = resolutionConstraintInfo.constraint;
        const rotationConstraint = createRotationConstraint(options);

        /**
         * @private
         * @type {Constraints}
         */
        this.constraints_ = {
          center: centerConstraint,
          resolution: resolutionConstraint,
          rotation: rotationConstraint,
        };

        this.setRotation(options.rotation !== undefined ? options.rotation : 0);
        this.setCenterInternal(
          options.center !== undefined ? options.center : null
        );
        if (options.resolution !== undefined) {
          this.setResolution(options.resolution);
        } else if (options.zoom !== undefined) {
          this.setZoom(options.zoom);
        }
      }

      /**
       * Padding (in css pixels).
       * If the map viewport is partially covered with other content (overlays) along
       * its edges, this setting allows to shift the center of the viewport away from that
       * content. The order of the values in the array is top, right, bottom, left.
       * The default is no padding, which is equivalent to `[0, 0, 0, 0]`.
       * @type {Array<number>|undefined}
       * @api
       */
      get padding() {
        return this.padding_;
      }
      set padding(padding) {
        let oldPadding = this.padding_;
        this.padding_ = padding;
        const center = this.getCenterInternal();
        if (center) {
          const newPadding = padding || [0, 0, 0, 0];
          oldPadding = oldPadding || [0, 0, 0, 0];
          const resolution = this.getResolution();
          const offsetX =
            (resolution / 2) *
            (newPadding[3] - oldPadding[3] + oldPadding[1] - newPadding[1]);
          const offsetY =
            (resolution / 2) *
            (newPadding[0] - oldPadding[0] + oldPadding[2] - newPadding[2]);
          this.setCenterInternal([center[0] + offsetX, center[1] - offsetY]);
        }
      }

      /**
       * Get an updated version of the view options used to construct the view.  The
       * current resolution (or zoom), center, and rotation are applied to any stored
       * options.  The provided options can be used to apply new min/max zoom or
       * resolution limits.
       * @param {ViewOptions} newOptions New options to be applied.
       * @return {ViewOptions} New options updated with the current view state.
       */
      getUpdatedOptions_(newOptions) {
        const options = this.getProperties();

        // preserve resolution (or zoom)
        if (options.resolution !== undefined) {
          options.resolution = this.getResolution();
        } else {
          options.zoom = this.getZoom();
        }

        // preserve center
        options.center = this.getCenterInternal();

        // preserve rotation
        options.rotation = this.getRotation();

        return Object.assign({}, options, newOptions);
      }

      /**
       * Animate the view.  The view's center, zoom (or resolution), and rotation
       * can be animated for smooth transitions between view states.  For example,
       * to animate the view to a new zoom level:
       *
       *     view.animate({zoom: view.getZoom() + 1});
       *
       * By default, the animation lasts one second and uses in-and-out easing.  You
       * can customize this behavior by including `duration` (in milliseconds) and
       * `easing` options (see {@link module:ol/easing}).
       *
       * To chain together multiple animations, call the method with multiple
       * animation objects.  For example, to first zoom and then pan:
       *
       *     view.animate({zoom: 10}, {center: [0, 0]});
       *
       * If you provide a function as the last argument to the animate method, it
       * will get called at the end of an animation series.  The callback will be
       * called with `true` if the animation series completed on its own or `false`
       * if it was cancelled.
       *
       * Animations are cancelled by user interactions (e.g. dragging the map) or by
       * calling `view.setCenter()`, `view.setResolution()`, or `view.setRotation()`
       * (or another method that calls one of these).
       *
       * @param {...(AnimationOptions|function(boolean): void)} var_args Animation
       *     options.  Multiple animations can be run in series by passing multiple
       *     options objects.  To run multiple animations in parallel, call the method
       *     multiple times.  An optional callback can be provided as a final
       *     argument.  The callback will be called with a boolean indicating whether
       *     the animation completed without being cancelled.
       * @api
       */
      animate(var_args) {
        if (this.isDef() && !this.getAnimating()) {
          this.resolveConstraints(0);
        }
        const args = new Array(arguments.length);
        for (let i = 0; i < args.length; ++i) {
          let options = arguments[i];
          if (options.center) {
            options = Object.assign({}, options);
            options.center = fromUserCoordinate(
              options.center,
              this.getProjection()
            );
          }
          if (options.anchor) {
            options = Object.assign({}, options);
            options.anchor = fromUserCoordinate(
              options.anchor,
              this.getProjection()
            );
          }
          args[i] = options;
        }
        this.animateInternal.apply(this, args);
      }

      /**
       * @param {...(AnimationOptions|function(boolean): void)} var_args Animation options.
       */
      animateInternal(var_args) {
        let animationCount = arguments.length;
        let callback;
        if (
          animationCount > 1 &&
          typeof arguments[animationCount - 1] === 'function'
        ) {
          callback = arguments[animationCount - 1];
          --animationCount;
        }

        let i = 0;
        for (; i < animationCount && !this.isDef(); ++i) {
          // if view properties are not yet set, shortcut to the final state
          const state = arguments[i];
          if (state.center) {
            this.setCenterInternal(state.center);
          }
          if (state.zoom !== undefined) {
            this.setZoom(state.zoom);
          } else if (state.resolution) {
            this.setResolution(state.resolution);
          }
          if (state.rotation !== undefined) {
            this.setRotation(state.rotation);
          }
        }
        if (i === animationCount) {
          if (callback) {
            animationCallback(callback, true);
          }
          return;
        }

        let start = Date.now();
        let center = this.targetCenter_.slice();
        let resolution = this.targetResolution_;
        let rotation = this.targetRotation_;
        const series = [];
        for (; i < animationCount; ++i) {
          const options = /** @type {AnimationOptions} */ (arguments[i]);

          const animation = {
            start: start,
            complete: false,
            anchor: options.anchor,
            duration: options.duration !== undefined ? options.duration : 1000,
            easing: options.easing || inAndOut,
            callback: callback,
          };

          if (options.center) {
            animation.sourceCenter = center;
            animation.targetCenter = options.center.slice();
            center = animation.targetCenter;
          }

          if (options.zoom !== undefined) {
            animation.sourceResolution = resolution;
            animation.targetResolution = this.getResolutionForZoom(options.zoom);
            resolution = animation.targetResolution;
          } else if (options.resolution) {
            animation.sourceResolution = resolution;
            animation.targetResolution = options.resolution;
            resolution = animation.targetResolution;
          }

          if (options.rotation !== undefined) {
            animation.sourceRotation = rotation;
            const delta =
              modulo(options.rotation - rotation + Math.PI, 2 * Math.PI) - Math.PI;
            animation.targetRotation = rotation + delta;
            rotation = animation.targetRotation;
          }

          // check if animation is a no-op
          if (isNoopAnimation(animation)) {
            animation.complete = true;
            // we still push it onto the series for callback handling
          } else {
            start += animation.duration;
          }
          series.push(animation);
        }
        this.animations_.push(series);
        this.setHint(ViewHint.ANIMATING, 1);
        this.updateAnimations_();
      }

      /**
       * Determine if the view is being animated.
       * @return {boolean} The view is being animated.
       * @api
       */
      getAnimating() {
        return this.hints_[ViewHint.ANIMATING] > 0;
      }

      /**
       * Determine if the user is interacting with the view, such as panning or zooming.
       * @return {boolean} The view is being interacted with.
       * @api
       */
      getInteracting() {
        return this.hints_[ViewHint.INTERACTING] > 0;
      }

      /**
       * Cancel any ongoing animations.
       * @api
       */
      cancelAnimations() {
        this.setHint(ViewHint.ANIMATING, -this.hints_[ViewHint.ANIMATING]);
        let anchor;
        for (let i = 0, ii = this.animations_.length; i < ii; ++i) {
          const series = this.animations_[i];
          if (series[0].callback) {
            animationCallback(series[0].callback, false);
          }
          if (!anchor) {
            for (let j = 0, jj = series.length; j < jj; ++j) {
              const animation = series[j];
              if (!animation.complete) {
                anchor = animation.anchor;
                break;
              }
            }
          }
        }
        this.animations_.length = 0;
        this.cancelAnchor_ = anchor;
        this.nextCenter_ = null;
        this.nextResolution_ = NaN;
        this.nextRotation_ = NaN;
      }

      /**
       * Update all animations.
       */
      updateAnimations_() {
        if (this.updateAnimationKey_ !== undefined) {
          cancelAnimationFrame(this.updateAnimationKey_);
          this.updateAnimationKey_ = undefined;
        }
        if (!this.getAnimating()) {
          return;
        }
        const now = Date.now();
        let more = false;
        for (let i = this.animations_.length - 1; i >= 0; --i) {
          const series = this.animations_[i];
          let seriesComplete = true;
          for (let j = 0, jj = series.length; j < jj; ++j) {
            const animation = series[j];
            if (animation.complete) {
              continue;
            }
            const elapsed = now - animation.start;
            let fraction =
              animation.duration > 0 ? elapsed / animation.duration : 1;
            if (fraction >= 1) {
              animation.complete = true;
              fraction = 1;
            } else {
              seriesComplete = false;
            }
            const progress = animation.easing(fraction);
            if (animation.sourceCenter) {
              const x0 = animation.sourceCenter[0];
              const y0 = animation.sourceCenter[1];
              const x1 = animation.targetCenter[0];
              const y1 = animation.targetCenter[1];
              this.nextCenter_ = animation.targetCenter;
              const x = x0 + progress * (x1 - x0);
              const y = y0 + progress * (y1 - y0);
              this.targetCenter_ = [x, y];
            }
            if (animation.sourceResolution && animation.targetResolution) {
              const resolution =
                progress === 1
                  ? animation.targetResolution
                  : animation.sourceResolution +
                    progress *
                      (animation.targetResolution - animation.sourceResolution);
              if (animation.anchor) {
                const size = this.getViewportSize_(this.getRotation());
                const constrainedResolution = this.constraints_.resolution(
                  resolution,
                  0,
                  size,
                  true
                );
                this.targetCenter_ = this.calculateCenterZoom(
                  constrainedResolution,
                  animation.anchor
                );
              }
              this.nextResolution_ = animation.targetResolution;
              this.targetResolution_ = resolution;
              this.applyTargetState_(true);
            }
            if (
              animation.sourceRotation !== undefined &&
              animation.targetRotation !== undefined
            ) {
              const rotation =
                progress === 1
                  ? modulo(animation.targetRotation + Math.PI, 2 * Math.PI) -
                    Math.PI
                  : animation.sourceRotation +
                    progress *
                      (animation.targetRotation - animation.sourceRotation);
              if (animation.anchor) {
                const constrainedRotation = this.constraints_.rotation(
                  rotation,
                  true
                );
                this.targetCenter_ = this.calculateCenterRotate(
                  constrainedRotation,
                  animation.anchor
                );
              }
              this.nextRotation_ = animation.targetRotation;
              this.targetRotation_ = rotation;
            }
            this.applyTargetState_(true);
            more = true;
            if (!animation.complete) {
              break;
            }
          }
          if (seriesComplete) {
            this.animations_[i] = null;
            this.setHint(ViewHint.ANIMATING, -1);
            this.nextCenter_ = null;
            this.nextResolution_ = NaN;
            this.nextRotation_ = NaN;
            const callback = series[0].callback;
            if (callback) {
              animationCallback(callback, true);
            }
          }
        }
        // prune completed series
        this.animations_ = this.animations_.filter(Boolean);
        if (more && this.updateAnimationKey_ === undefined) {
          this.updateAnimationKey_ = requestAnimationFrame(
            this.updateAnimations_.bind(this)
          );
        }
      }

      /**
       * @param {number} rotation Target rotation.
       * @param {import("./coordinate.js").Coordinate} anchor Rotation anchor.
       * @return {import("./coordinate.js").Coordinate|undefined} Center for rotation and anchor.
       */
      calculateCenterRotate(rotation, anchor) {
        let center;
        const currentCenter = this.getCenterInternal();
        if (currentCenter !== undefined) {
          center = [currentCenter[0] - anchor[0], currentCenter[1] - anchor[1]];
          coordinate.rotate(center, rotation - this.getRotation());
          add$1(center, anchor);
        }
        return center;
      }

      /**
       * @param {number} resolution Target resolution.
       * @param {import("./coordinate.js").Coordinate} anchor Zoom anchor.
       * @return {import("./coordinate.js").Coordinate|undefined} Center for resolution and anchor.
       */
      calculateCenterZoom(resolution, anchor) {
        let center;
        const currentCenter = this.getCenterInternal();
        const currentResolution = this.getResolution();
        if (currentCenter !== undefined && currentResolution !== undefined) {
          const x =
            anchor[0] -
            (resolution * (anchor[0] - currentCenter[0])) / currentResolution;
          const y =
            anchor[1] -
            (resolution * (anchor[1] - currentCenter[1])) / currentResolution;
          center = [x, y];
        }
        return center;
      }

      /**
       * Returns the current viewport size.
       * @private
       * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
       * @return {import("./size.js").Size} Viewport size or `[100, 100]` when no viewport is found.
       */
      getViewportSize_(rotation) {
        const size = this.viewportSize_;
        if (rotation) {
          const w = size[0];
          const h = size[1];
          return [
            Math.abs(w * Math.cos(rotation)) + Math.abs(h * Math.sin(rotation)),
            Math.abs(w * Math.sin(rotation)) + Math.abs(h * Math.cos(rotation)),
          ];
        }
        return size;
      }

      /**
       * Stores the viewport size on the view. The viewport size is not read every time from the DOM
       * to avoid performance hit and layout reflow.
       * This should be done on map size change.
       * Note: the constraints are not resolved during an animation to avoid stopping it
       * @param {import("./size.js").Size} [size] Viewport size; if undefined, [100, 100] is assumed
       */
      setViewportSize(size) {
        this.viewportSize_ = Array.isArray(size) ? size.slice() : [100, 100];
        if (!this.getAnimating()) {
          this.resolveConstraints(0);
        }
      }

      /**
       * Get the view center.
       * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
       * @observable
       * @api
       */
      getCenter() {
        const center = this.getCenterInternal();
        if (!center) {
          return center;
        }
        return toUserCoordinate(center, this.getProjection());
      }

      /**
       * Get the view center without transforming to user projection.
       * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
       */
      getCenterInternal() {
        return /** @type {import("./coordinate.js").Coordinate|undefined} */ (
          this.get(ViewProperty.CENTER)
        );
      }

      /**
       * @return {Constraints} Constraints.
       */
      getConstraints() {
        return this.constraints_;
      }

      /**
       * @return {boolean} Resolution constraint is set
       */
      getConstrainResolution() {
        return this.get('constrainResolution');
      }

      /**
       * @param {Array<number>} [hints] Destination array.
       * @return {Array<number>} Hint.
       */
      getHints(hints) {
        if (hints !== undefined) {
          hints[0] = this.hints_[0];
          hints[1] = this.hints_[1];
          return hints;
        }
        return this.hints_.slice();
      }

      /**
       * Calculate the extent for the current view state and the passed size.
       * The size is the pixel dimensions of the box into which the calculated extent
       * should fit. In most cases you want to get the extent of the entire map,
       * that is `map.getSize()`.
       * @param {import("./size.js").Size} [size] Box pixel size. If not provided, the size
       * of the map that uses this view will be used.
       * @return {import("./extent.js").Extent} Extent.
       * @api
       */
      calculateExtent(size) {
        const extent = this.calculateExtentInternal(size);
        return toUserExtent(extent, this.getProjection());
      }

      /**
       * @param {import("./size.js").Size} [size] Box pixel size. If not provided,
       * the map's last known viewport size will be used.
       * @return {import("./extent.js").Extent} Extent.
       */
      calculateExtentInternal(size) {
        size = size || this.getViewportSizeMinusPadding_();
        const center = /** @type {!import("./coordinate.js").Coordinate} */ (
          this.getCenterInternal()
        );
        asserts.assert(center, 1); // The view center is not defined
        const resolution = /** @type {!number} */ (this.getResolution());
        asserts.assert(resolution !== undefined, 2); // The view resolution is not defined
        const rotation = /** @type {!number} */ (this.getRotation());
        asserts.assert(rotation !== undefined, 3); // The view rotation is not defined

        return getForViewAndSize(center, resolution, rotation, size);
      }

      /**
       * Get the maximum resolution of the view.
       * @return {number} The maximum resolution of the view.
       * @api
       */
      getMaxResolution() {
        return this.maxResolution_;
      }

      /**
       * Get the minimum resolution of the view.
       * @return {number} The minimum resolution of the view.
       * @api
       */
      getMinResolution() {
        return this.minResolution_;
      }

      /**
       * Get the maximum zoom level for the view.
       * @return {number} The maximum zoom level.
       * @api
       */
      getMaxZoom() {
        return /** @type {number} */ (
          this.getZoomForResolution(this.minResolution_)
        );
      }

      /**
       * Set a new maximum zoom level for the view.
       * @param {number} zoom The maximum zoom level.
       * @api
       */
      setMaxZoom(zoom) {
        this.applyOptions_(this.getUpdatedOptions_({maxZoom: zoom}));
      }

      /**
       * Get the minimum zoom level for the view.
       * @return {number} The minimum zoom level.
       * @api
       */
      getMinZoom() {
        return /** @type {number} */ (
          this.getZoomForResolution(this.maxResolution_)
        );
      }

      /**
       * Set a new minimum zoom level for the view.
       * @param {number} zoom The minimum zoom level.
       * @api
       */
      setMinZoom(zoom) {
        this.applyOptions_(this.getUpdatedOptions_({minZoom: zoom}));
      }

      /**
       * Set whether the view should allow intermediary zoom levels.
       * @param {boolean} enabled Whether the resolution is constrained.
       * @api
       */
      setConstrainResolution(enabled) {
        this.applyOptions_(this.getUpdatedOptions_({constrainResolution: enabled}));
      }

      /**
       * Get the view projection.
       * @return {import("./proj/Projection.js").default} The projection of the view.
       * @api
       */
      getProjection() {
        return this.projection_;
      }

      /**
       * Get the view resolution.
       * @return {number|undefined} The resolution of the view.
       * @observable
       * @api
       */
      getResolution() {
        return /** @type {number|undefined} */ (this.get(ViewProperty.RESOLUTION));
      }

      /**
       * Get the resolutions for the view. This returns the array of resolutions
       * passed to the constructor of the View, or undefined if none were given.
       * @return {Array<number>|undefined} The resolutions of the view.
       * @api
       */
      getResolutions() {
        return this.resolutions_;
      }

      /**
       * Get the resolution for a provided extent (in map units) and size (in pixels).
       * @param {import("./extent.js").Extent} extent Extent.
       * @param {import("./size.js").Size} [size] Box pixel size.
       * @return {number} The resolution at which the provided extent will render at
       *     the given size.
       * @api
       */
      getResolutionForExtent(extent, size) {
        return this.getResolutionForExtentInternal(
          fromUserExtent(extent, this.getProjection()),
          size
        );
      }

      /**
       * Get the resolution for a provided extent (in map units) and size (in pixels).
       * @param {import("./extent.js").Extent} extent Extent.
       * @param {import("./size.js").Size} [size] Box pixel size.
       * @return {number} The resolution at which the provided extent will render at
       *     the given size.
       */
      getResolutionForExtentInternal(extent$1, size) {
        size = size || this.getViewportSizeMinusPadding_();
        const xResolution = extent.getWidth(extent$1) / size[0];
        const yResolution = extent.getHeight(extent$1) / size[1];
        return Math.max(xResolution, yResolution);
      }

      /**
       * Return a function that returns a value between 0 and 1 for a
       * resolution. Exponential scaling is assumed.
       * @param {number} [power] Power.
       * @return {function(number): number} Resolution for value function.
       */
      getResolutionForValueFunction(power) {
        power = power || 2;
        const maxResolution = this.getConstrainedResolution(this.maxResolution_);
        const minResolution = this.minResolution_;
        const max = Math.log(maxResolution / minResolution) / Math.log(power);
        return (
          /**
           * @param {number} value Value.
           * @return {number} Resolution.
           */
          function (value) {
            const resolution = maxResolution / Math.pow(power, value * max);
            return resolution;
          }
        );
      }

      /**
       * Get the view rotation.
       * @return {number} The rotation of the view in radians.
       * @observable
       * @api
       */
      getRotation() {
        return /** @type {number} */ (this.get(ViewProperty.ROTATION));
      }

      /**
       * Return a function that returns a resolution for a value between
       * 0 and 1. Exponential scaling is assumed.
       * @param {number} [power] Power.
       * @return {function(number): number} Value for resolution function.
       */
      getValueForResolutionFunction(power) {
        const logPower = Math.log(power || 2);
        const maxResolution = this.getConstrainedResolution(this.maxResolution_);
        const minResolution = this.minResolution_;
        const max = Math.log(maxResolution / minResolution) / logPower;
        return (
          /**
           * @param {number} resolution Resolution.
           * @return {number} Value.
           */
          function (resolution) {
            const value = Math.log(maxResolution / resolution) / logPower / max;
            return value;
          }
        );
      }

      /**
       * Returns the size of the viewport minus padding.
       * @private
       * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
       * @return {import("./size.js").Size} Viewport size reduced by the padding.
       */
      getViewportSizeMinusPadding_(rotation) {
        let size = this.getViewportSize_(rotation);
        const padding = this.padding_;
        if (padding) {
          size = [
            size[0] - padding[1] - padding[3],
            size[1] - padding[0] - padding[2],
          ];
        }
        return size;
      }

      /**
       * @return {State} View state.
       */
      getState() {
        const projection = this.getProjection();
        const resolution = this.getResolution();
        const rotation = this.getRotation();
        let center = /** @type {import("./coordinate.js").Coordinate} */ (
          this.getCenterInternal()
        );
        const padding = this.padding_;
        if (padding) {
          const reducedSize = this.getViewportSizeMinusPadding_();
          center = calculateCenterOn(
            center,
            this.getViewportSize_(),
            [reducedSize[0] / 2 + padding[3], reducedSize[1] / 2 + padding[0]],
            resolution,
            rotation
          );
        }
        return {
          center: center.slice(0),
          projection: projection !== undefined ? projection : null,
          resolution: resolution,
          nextCenter: this.nextCenter_,
          nextResolution: this.nextResolution_,
          nextRotation: this.nextRotation_,
          rotation: rotation,
          zoom: this.getZoom(),
        };
      }

      /**
       * @return {ViewStateAndExtent} Like `FrameState`, but just `viewState` and `extent`.
       */
      getViewStateAndExtent() {
        return {
          viewState: this.getState(),
          extent: this.calculateExtent(),
        };
      }

      /**
       * Get the current zoom level. This method may return non-integer zoom levels
       * if the view does not constrain the resolution, or if an interaction or
       * animation is underway.
       * @return {number|undefined} Zoom.
       * @api
       */
      getZoom() {
        let zoom;
        const resolution = this.getResolution();
        if (resolution !== undefined) {
          zoom = this.getZoomForResolution(resolution);
        }
        return zoom;
      }

      /**
       * Get the zoom level for a resolution.
       * @param {number} resolution The resolution.
       * @return {number|undefined} The zoom level for the provided resolution.
       * @api
       */
      getZoomForResolution(resolution) {
        let offset = this.minZoom_ || 0;
        let max, zoomFactor;
        if (this.resolutions_) {
          const nearest = array.linearFindNearest(this.resolutions_, resolution, 1);
          offset = nearest;
          max = this.resolutions_[nearest];
          if (nearest == this.resolutions_.length - 1) {
            zoomFactor = 2;
          } else {
            zoomFactor = max / this.resolutions_[nearest + 1];
          }
        } else {
          max = this.maxResolution_;
          zoomFactor = this.zoomFactor_;
        }
        return offset + Math.log(max / resolution) / Math.log(zoomFactor);
      }

      /**
       * Get the resolution for a zoom level.
       * @param {number} zoom Zoom level.
       * @return {number} The view resolution for the provided zoom level.
       * @api
       */
      getResolutionForZoom(zoom) {
        if (this.resolutions_) {
          if (this.resolutions_.length <= 1) {
            return 0;
          }
          const baseLevel = math.clamp(
            Math.floor(zoom),
            0,
            this.resolutions_.length - 2
          );
          const zoomFactor =
            this.resolutions_[baseLevel] / this.resolutions_[baseLevel + 1];
          return (
            this.resolutions_[baseLevel] /
            Math.pow(zoomFactor, math.clamp(zoom - baseLevel, 0, 1))
          );
        }
        return (
          this.maxResolution_ / Math.pow(this.zoomFactor_, zoom - this.minZoom_)
        );
      }

      /**
       * Fit the given geometry or extent based on the given map size and border.
       * The size is pixel dimensions of the box to fit the extent into.
       * In most cases you will want to use the map size, that is `map.getSize()`.
       * Takes care of the map angle.
       * @param {import("./geom/SimpleGeometry.js").default|import("./extent.js").Extent} geometryOrExtent The geometry or
       *     extent to fit the view to.
       * @param {FitOptions} [options] Options.
       * @api
       */
      fit(geometryOrExtent, options) {
        /** @type {import("./geom/SimpleGeometry.js").default} */
        let geometry;
        asserts.assert(
          Array.isArray(geometryOrExtent) ||
            typeof (/** @type {?} */ (geometryOrExtent).getSimplifiedGeometry) ===
              'function',
          24
        ); // Invalid extent or geometry provided as `geometry`
        if (Array.isArray(geometryOrExtent)) {
          asserts.assert(!isEmpty(geometryOrExtent), 25); // Cannot fit empty extent provided as `geometry`
          const extent = fromUserExtent(geometryOrExtent, this.getProjection());
          geometry = fromExtent(extent);
        } else if (geometryOrExtent.getType() === 'Circle') {
          const extent$1 = fromUserExtent(
            geometryOrExtent.getExtent(),
            this.getProjection()
          );
          geometry = fromExtent(extent$1);
          geometry.rotate(this.getRotation(), extent.getCenter(extent$1));
        } else {
          {
            geometry = geometryOrExtent;
          }
        }

        this.fitInternal(geometry, options);
      }

      /**
       * Calculate rotated extent
       * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
       * @return {import("./extent").Extent} The rotated extent for the geometry.
       */
      rotatedExtentForGeometry(geometry) {
        const rotation = this.getRotation();
        const cosAngle = Math.cos(rotation);
        const sinAngle = Math.sin(-rotation);
        const coords = geometry.getFlatCoordinates();
        const stride = geometry.getStride();
        let minRotX = +Infinity;
        let minRotY = +Infinity;
        let maxRotX = -Infinity;
        let maxRotY = -Infinity;
        for (let i = 0, ii = coords.length; i < ii; i += stride) {
          const rotX = coords[i] * cosAngle - coords[i + 1] * sinAngle;
          const rotY = coords[i] * sinAngle + coords[i + 1] * cosAngle;
          minRotX = Math.min(minRotX, rotX);
          minRotY = Math.min(minRotY, rotY);
          maxRotX = Math.max(maxRotX, rotX);
          maxRotY = Math.max(maxRotY, rotY);
        }
        return [minRotX, minRotY, maxRotX, maxRotY];
      }

      /**
       * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
       * @param {FitOptions} [options] Options.
       */
      fitInternal(geometry, options) {
        options = options || {};
        let size = options.size;
        if (!size) {
          size = this.getViewportSizeMinusPadding_();
        }
        const padding =
          options.padding !== undefined ? options.padding : [0, 0, 0, 0];
        const nearest = options.nearest !== undefined ? options.nearest : false;
        let minResolution;
        if (options.minResolution !== undefined) {
          minResolution = options.minResolution;
        } else if (options.maxZoom !== undefined) {
          minResolution = this.getResolutionForZoom(options.maxZoom);
        } else {
          minResolution = 0;
        }

        const rotatedExtent = this.rotatedExtentForGeometry(geometry);

        // calculate resolution
        let resolution = this.getResolutionForExtentInternal(rotatedExtent, [
          size[0] - padding[1] - padding[3],
          size[1] - padding[0] - padding[2],
        ]);
        resolution = isNaN(resolution)
          ? minResolution
          : Math.max(resolution, minResolution);
        resolution = this.getConstrainedResolution(resolution, nearest ? 0 : 1);

        // calculate center
        const rotation = this.getRotation();
        const sinAngle = Math.sin(rotation);
        const cosAngle = Math.cos(rotation);
        const centerRot = extent.getCenter(rotatedExtent);
        centerRot[0] += ((padding[1] - padding[3]) / 2) * resolution;
        centerRot[1] += ((padding[0] - padding[2]) / 2) * resolution;
        const centerX = centerRot[0] * cosAngle - centerRot[1] * sinAngle;
        const centerY = centerRot[1] * cosAngle + centerRot[0] * sinAngle;
        const center = this.getConstrainedCenter([centerX, centerY], resolution);
        const callback = options.callback ? options.callback : functions.VOID;

        if (options.duration !== undefined) {
          this.animateInternal(
            {
              resolution: resolution,
              center: center,
              duration: options.duration,
              easing: options.easing,
            },
            callback
          );
        } else {
          this.targetResolution_ = resolution;
          this.targetCenter_ = center;
          this.applyTargetState_(false, true);
          animationCallback(callback, true);
        }
      }

      /**
       * Center on coordinate and view position.
       * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
       * @param {import("./size.js").Size} size Box pixel size.
       * @param {import("./pixel.js").Pixel} position Position on the view to center on.
       * @api
       */
      centerOn(coordinate, size, position) {
        this.centerOnInternal(
          fromUserCoordinate(coordinate, this.getProjection()),
          size,
          position
        );
      }

      /**
       * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
       * @param {import("./size.js").Size} size Box pixel size.
       * @param {import("./pixel.js").Pixel} position Position on the view to center on.
       */
      centerOnInternal(coordinate, size, position) {
        this.setCenterInternal(
          calculateCenterOn(
            coordinate,
            size,
            position,
            this.getResolution(),
            this.getRotation()
          )
        );
      }

      /**
       * Calculates the shift between map and viewport center.
       * @param {import("./coordinate.js").Coordinate} center Center.
       * @param {number} resolution Resolution.
       * @param {number} rotation Rotation.
       * @param {import("./size.js").Size} size Size.
       * @return {Array<number>|undefined} Center shift.
       */
      calculateCenterShift(center, resolution, rotation, size) {
        let centerShift;
        const padding = this.padding_;
        if (padding && center) {
          const reducedSize = this.getViewportSizeMinusPadding_(-rotation);
          const shiftedCenter = calculateCenterOn(
            center,
            size,
            [reducedSize[0] / 2 + padding[3], reducedSize[1] / 2 + padding[0]],
            resolution,
            rotation
          );
          centerShift = [
            center[0] - shiftedCenter[0],
            center[1] - shiftedCenter[1],
          ];
        }
        return centerShift;
      }

      /**
       * @return {boolean} Is defined.
       */
      isDef() {
        return !!this.getCenterInternal() && this.getResolution() !== undefined;
      }

      /**
       * Adds relative coordinates to the center of the view. Any extent constraint will apply.
       * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
       * @api
       */
      adjustCenter(deltaCoordinates) {
        const center = toUserCoordinate(this.targetCenter_, this.getProjection());
        this.setCenter([
          center[0] + deltaCoordinates[0],
          center[1] + deltaCoordinates[1],
        ]);
      }

      /**
       * Adds relative coordinates to the center of the view. Any extent constraint will apply.
       * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
       */
      adjustCenterInternal(deltaCoordinates) {
        const center = this.targetCenter_;
        this.setCenterInternal([
          center[0] + deltaCoordinates[0],
          center[1] + deltaCoordinates[1],
        ]);
      }

      /**
       * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
       * constraint will apply.
       * @param {number} ratio The ratio to apply on the view resolution.
       * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
       * @api
       */
      adjustResolution(ratio, anchor) {
        anchor = anchor && fromUserCoordinate(anchor, this.getProjection());
        this.adjustResolutionInternal(ratio, anchor);
      }

      /**
       * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
       * constraint will apply.
       * @param {number} ratio The ratio to apply on the view resolution.
       * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
       */
      adjustResolutionInternal(ratio, anchor) {
        const isMoving = this.getAnimating() || this.getInteracting();
        const size = this.getViewportSize_(this.getRotation());
        const newResolution = this.constraints_.resolution(
          this.targetResolution_ * ratio,
          0,
          size,
          isMoving
        );

        if (anchor) {
          this.targetCenter_ = this.calculateCenterZoom(newResolution, anchor);
        }

        this.targetResolution_ *= ratio;
        this.applyTargetState_();
      }

      /**
       * Adds a value to the view zoom level, optionally using an anchor. Any resolution
       * constraint will apply.
       * @param {number} delta Relative value to add to the zoom level.
       * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
       * @api
       */
      adjustZoom(delta, anchor) {
        this.adjustResolution(Math.pow(this.zoomFactor_, -delta), anchor);
      }

      /**
       * Adds a value to the view rotation, optionally using an anchor. Any rotation
       * constraint will apply.
       * @param {number} delta Relative value to add to the zoom rotation, in radians.
       * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
       * @api
       */
      adjustRotation(delta, anchor) {
        if (anchor) {
          anchor = fromUserCoordinate(anchor, this.getProjection());
        }
        this.adjustRotationInternal(delta, anchor);
      }

      /**
       * @param {number} delta Relative value to add to the zoom rotation, in radians.
       * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
       */
      adjustRotationInternal(delta, anchor) {
        const isMoving = this.getAnimating() || this.getInteracting();
        const newRotation = this.constraints_.rotation(
          this.targetRotation_ + delta,
          isMoving
        );
        if (anchor) {
          this.targetCenter_ = this.calculateCenterRotate(newRotation, anchor);
        }
        this.targetRotation_ += delta;
        this.applyTargetState_();
      }

      /**
       * Set the center of the current view. Any extent constraint will apply.
       * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
       * @observable
       * @api
       */
      setCenter(center) {
        this.setCenterInternal(
          center ? fromUserCoordinate(center, this.getProjection()) : center
        );
      }

      /**
       * Set the center using the view projection (not the user projection).
       * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
       */
      setCenterInternal(center) {
        this.targetCenter_ = center;
        this.applyTargetState_();
      }

      /**
       * @param {import("./ViewHint.js").default} hint Hint.
       * @param {number} delta Delta.
       * @return {number} New value.
       */
      setHint(hint, delta) {
        this.hints_[hint] += delta;
        this.changed();
        return this.hints_[hint];
      }

      /**
       * Set the resolution for this view. Any resolution constraint will apply.
       * @param {number|undefined} resolution The resolution of the view.
       * @observable
       * @api
       */
      setResolution(resolution) {
        this.targetResolution_ = resolution;
        this.applyTargetState_();
      }

      /**
       * Set the rotation for this view. Any rotation constraint will apply.
       * @param {number} rotation The rotation of the view in radians.
       * @observable
       * @api
       */
      setRotation(rotation) {
        this.targetRotation_ = rotation;
        this.applyTargetState_();
      }

      /**
       * Zoom to a specific zoom level. Any resolution constrain will apply.
       * @param {number} zoom Zoom level.
       * @api
       */
      setZoom(zoom) {
        this.setResolution(this.getResolutionForZoom(zoom));
      }

      /**
       * Recompute rotation/resolution/center based on target values.
       * Note: we have to compute rotation first, then resolution and center considering that
       * parameters can influence one another in case a view extent constraint is present.
       * @param {boolean} [doNotCancelAnims] Do not cancel animations.
       * @param {boolean} [forceMoving] Apply constraints as if the view is moving.
       * @private
       */
      applyTargetState_(doNotCancelAnims, forceMoving) {
        const isMoving =
          this.getAnimating() || this.getInteracting() || forceMoving;

        // compute rotation
        const newRotation = this.constraints_.rotation(
          this.targetRotation_,
          isMoving
        );
        const size = this.getViewportSize_(newRotation);
        const newResolution = this.constraints_.resolution(
          this.targetResolution_,
          0,
          size,
          isMoving
        );
        const newCenter = this.constraints_.center(
          this.targetCenter_,
          newResolution,
          size,
          isMoving,
          this.calculateCenterShift(
            this.targetCenter_,
            newResolution,
            newRotation,
            size
          )
        );

        if (this.get(ViewProperty.ROTATION) !== newRotation) {
          this.set(ViewProperty.ROTATION, newRotation);
        }
        if (this.get(ViewProperty.RESOLUTION) !== newResolution) {
          this.set(ViewProperty.RESOLUTION, newResolution);
          this.set('zoom', this.getZoom(), true);
        }
        if (
          !newCenter ||
          !this.get(ViewProperty.CENTER) ||
          !equals(this.get(ViewProperty.CENTER), newCenter)
        ) {
          this.set(ViewProperty.CENTER, newCenter);
        }

        if (this.getAnimating() && !doNotCancelAnims) {
          this.cancelAnimations();
        }
        this.cancelAnchor_ = undefined;
      }

      /**
       * If any constraints need to be applied, an animation will be triggered.
       * This is typically done on interaction end.
       * Note: calling this with a duration of 0 will apply the constrained values straight away,
       * without animation.
       * @param {number} [duration] The animation duration in ms.
       * @param {number} [resolutionDirection] Which direction to zoom.
       * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
       */
      resolveConstraints(duration, resolutionDirection, anchor) {
        duration = duration !== undefined ? duration : 200;
        const direction = resolutionDirection || 0;

        const newRotation = this.constraints_.rotation(this.targetRotation_);
        const size = this.getViewportSize_(newRotation);
        const newResolution = this.constraints_.resolution(
          this.targetResolution_,
          direction,
          size
        );
        const newCenter = this.constraints_.center(
          this.targetCenter_,
          newResolution,
          size,
          false,
          this.calculateCenterShift(
            this.targetCenter_,
            newResolution,
            newRotation,
            size
          )
        );

        if (duration === 0 && !this.cancelAnchor_) {
          this.targetResolution_ = newResolution;
          this.targetRotation_ = newRotation;
          this.targetCenter_ = newCenter;
          this.applyTargetState_();
          return;
        }

        anchor = anchor || (duration === 0 ? this.cancelAnchor_ : undefined);
        this.cancelAnchor_ = undefined;

        if (
          this.getResolution() !== newResolution ||
          this.getRotation() !== newRotation ||
          !this.getCenterInternal() ||
          !equals(this.getCenterInternal(), newCenter)
        ) {
          if (this.getAnimating()) {
            this.cancelAnimations();
          }

          this.animateInternal({
            rotation: newRotation,
            center: newCenter,
            resolution: newResolution,
            duration: duration,
            easing: easing.easeOut,
            anchor: anchor,
          });
        }
      }

      /**
       * Notify the View that an interaction has started.
       * The view state will be resolved to a stable one if needed
       * (depending on its constraints).
       * @api
       */
      beginInteraction() {
        this.resolveConstraints(0);

        this.setHint(ViewHint.INTERACTING, 1);
      }

      /**
       * Notify the View that an interaction has ended. The view state will be resolved
       * to a stable one if needed (depending on its constraints).
       * @param {number} [duration] Animation duration in ms.
       * @param {number} [resolutionDirection] Which direction to zoom.
       * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
       * @api
       */
      endInteraction(duration, resolutionDirection, anchor) {
        anchor = anchor && fromUserCoordinate(anchor, this.getProjection());
        this.endInteractionInternal(duration, resolutionDirection, anchor);
      }

      /**
       * Notify the View that an interaction has ended. The view state will be resolved
       * to a stable one if needed (depending on its constraints).
       * @param {number} [duration] Animation duration in ms.
       * @param {number} [resolutionDirection] Which direction to zoom.
       * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
       */
      endInteractionInternal(duration, resolutionDirection, anchor) {
        if (!this.getInteracting()) {
          return;
        }
        this.setHint(ViewHint.INTERACTING, -1);
        this.resolveConstraints(duration, resolutionDirection, anchor);
      }

      /**
       * Get a valid position for the view center according to the current constraints.
       * @param {import("./coordinate.js").Coordinate|undefined} targetCenter Target center position.
       * @param {number} [targetResolution] Target resolution. If not supplied, the current one will be used.
       * This is useful to guess a valid center position at a different zoom level.
       * @return {import("./coordinate.js").Coordinate|undefined} Valid center position.
       */
      getConstrainedCenter(targetCenter, targetResolution) {
        const size = this.getViewportSize_(this.getRotation());
        return this.constraints_.center(
          targetCenter,
          targetResolution || this.getResolution(),
          size
        );
      }

      /**
       * Get a valid zoom level according to the current view constraints.
       * @param {number|undefined} targetZoom Target zoom.
       * @param {number} [direction=0] Indicate which resolution should be used
       * by a renderer if the view resolution does not match any resolution of the tile source.
       * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
       * will be used. If -1, the nearest higher resolution will be used.
       * @return {number|undefined} Valid zoom level.
       */
      getConstrainedZoom(targetZoom, direction) {
        const targetRes = this.getResolutionForZoom(targetZoom);
        return this.getZoomForResolution(
          this.getConstrainedResolution(targetRes, direction)
        );
      }

      /**
       * Get a valid resolution according to the current view constraints.
       * @param {number|undefined} targetResolution Target resolution.
       * @param {number} [direction=0] Indicate which resolution should be used
       * by a renderer if the view resolution does not match any resolution of the tile source.
       * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
       * will be used. If -1, the nearest higher resolution will be used.
       * @return {number|undefined} Valid resolution.
       */
      getConstrainedResolution(targetResolution, direction) {
        direction = direction || 0;
        const size = this.getViewportSize_(this.getRotation());

        return this.constraints_.resolution(targetResolution, direction, size);
      }
    }

    /**
     * @param {Function} callback Callback.
     * @param {*} returnValue Return value.
     */
    function animationCallback(callback, returnValue) {
      setTimeout(function () {
        callback(returnValue);
      }, 0);
    }

    /**
     * @param {ViewOptions} options View options.
     * @return {import("./centerconstraint.js").Type} The constraint.
     */
    function createCenterConstraint(options) {
      if (options.extent !== undefined) {
        const smooth =
          options.smoothExtentConstraint !== undefined
            ? options.smoothExtentConstraint
            : true;
        return createExtent(options.extent, options.constrainOnlyCenter, smooth);
      }

      const projection = createProjection(options.projection, 'EPSG:3857');
      if (options.multiWorld !== true && projection.isGlobal()) {
        const extent = projection.getExtent().slice();
        extent[0] = -Infinity;
        extent[2] = Infinity;
        return createExtent(extent, false, false);
      }

      return none$1;
    }

    /**
     * @param {ViewOptions} options View options.
     * @return {{constraint: import("./resolutionconstraint.js").Type, maxResolution: number,
     *     minResolution: number, minZoom: number, zoomFactor: number}} The constraint.
     */
    function createResolutionConstraint(options) {
      let resolutionConstraint;
      let maxResolution;
      let minResolution;

      // TODO: move these to be ol constants
      // see https://github.com/openlayers/openlayers/issues/2076
      const defaultMaxZoom = 28;
      const defaultZoomFactor = 2;

      let minZoom =
        options.minZoom !== undefined ? options.minZoom : DEFAULT_MIN_ZOOM;

      let maxZoom =
        options.maxZoom !== undefined ? options.maxZoom : defaultMaxZoom;

      const zoomFactor =
        options.zoomFactor !== undefined ? options.zoomFactor : defaultZoomFactor;

      const multiWorld =
        options.multiWorld !== undefined ? options.multiWorld : false;

      const smooth =
        options.smoothResolutionConstraint !== undefined
          ? options.smoothResolutionConstraint
          : true;

      const showFullExtent =
        options.showFullExtent !== undefined ? options.showFullExtent : false;

      const projection = createProjection(options.projection, 'EPSG:3857');
      const projExtent = projection.getExtent();
      let constrainOnlyCenter = options.constrainOnlyCenter;
      let extent$1 = options.extent;
      if (!multiWorld && !extent$1 && projection.isGlobal()) {
        constrainOnlyCenter = false;
        extent$1 = projExtent;
      }

      if (options.resolutions !== undefined) {
        const resolutions = options.resolutions;
        maxResolution = resolutions[minZoom];
        minResolution =
          resolutions[maxZoom] !== undefined
            ? resolutions[maxZoom]
            : resolutions[resolutions.length - 1];

        if (options.constrainResolution) {
          resolutionConstraint = createSnapToResolutions(
            resolutions,
            smooth,
            !constrainOnlyCenter && extent$1,
            showFullExtent
          );
        } else {
          resolutionConstraint = createMinMaxResolution(
            maxResolution,
            minResolution,
            smooth,
            !constrainOnlyCenter && extent$1,
            showFullExtent
          );
        }
      } else {
        // calculate the default min and max resolution
        const size = !projExtent
          ? // use an extent that can fit the whole world if need be
            (360 * METERS_PER_UNIT$1.degrees) / projection.getMetersPerUnit()
          : Math.max(extent.getWidth(projExtent), extent.getHeight(projExtent));

        const defaultMaxResolution =
          size / DEFAULT_TILE_SIZE / Math.pow(defaultZoomFactor, DEFAULT_MIN_ZOOM);

        const defaultMinResolution =
          defaultMaxResolution /
          Math.pow(defaultZoomFactor, defaultMaxZoom - DEFAULT_MIN_ZOOM);

        // user provided maxResolution takes precedence
        maxResolution = options.maxResolution;
        if (maxResolution !== undefined) {
          minZoom = 0;
        } else {
          maxResolution = defaultMaxResolution / Math.pow(zoomFactor, minZoom);
        }

        // user provided minResolution takes precedence
        minResolution = options.minResolution;
        if (minResolution === undefined) {
          if (options.maxZoom !== undefined) {
            if (options.maxResolution !== undefined) {
              minResolution = maxResolution / Math.pow(zoomFactor, maxZoom);
            } else {
              minResolution = defaultMaxResolution / Math.pow(zoomFactor, maxZoom);
            }
          } else {
            minResolution = defaultMinResolution;
          }
        }

        // given discrete zoom levels, minResolution may be different than provided
        maxZoom =
          minZoom +
          Math.floor(
            Math.log(maxResolution / minResolution) / Math.log(zoomFactor)
          );
        minResolution = maxResolution / Math.pow(zoomFactor, maxZoom - minZoom);

        if (options.constrainResolution) {
          resolutionConstraint = createSnapToPower(
            zoomFactor,
            maxResolution,
            minResolution,
            smooth,
            !constrainOnlyCenter && extent$1,
            showFullExtent
          );
        } else {
          resolutionConstraint = createMinMaxResolution(
            maxResolution,
            minResolution,
            smooth,
            !constrainOnlyCenter && extent$1,
            showFullExtent
          );
        }
      }
      return {
        constraint: resolutionConstraint,
        maxResolution: maxResolution,
        minResolution: minResolution,
        minZoom: minZoom,
        zoomFactor: zoomFactor,
      };
    }

    /**
     * @param {ViewOptions} options View options.
     * @return {import("./rotationconstraint.js").Type} Rotation constraint.
     */
    function createRotationConstraint(options) {
      const enableRotation =
        options.enableRotation !== undefined ? options.enableRotation : true;
      if (enableRotation) {
        const constrainRotation = options.constrainRotation;
        if (constrainRotation === undefined || constrainRotation === true) {
          return createSnapToZero();
        } else if (constrainRotation === false) {
          return none;
        } else if (typeof constrainRotation === 'number') {
          return createSnapToN(constrainRotation);
        }
        return none;
      }
      return rotationconstraint.disable;
    }

    /**
     * Determine if an animation involves no view change.
     * @param {Animation} animation The animation.
     * @return {boolean} The animation involves no view change.
     */
    function isNoopAnimation(animation) {
      if (animation.sourceCenter && animation.targetCenter) {
        if (!equals(animation.sourceCenter, animation.targetCenter)) {
          return false;
        }
      }
      if (animation.sourceResolution !== animation.targetResolution) {
        return false;
      }
      if (animation.sourceRotation !== animation.targetRotation) {
        return false;
      }
      return true;
    }

    /**
     * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("./size.js").Size} size Box pixel size.
     * @param {import("./pixel.js").Pixel} position Position on the view to center on.
     * @param {number} resolution Resolution.
     * @param {number} rotation Rotation.
     * @return {import("./coordinate.js").Coordinate} Shifted center.
     */
    function calculateCenterOn(coordinate, size, position, resolution, rotation) {
      // calculate rotated position
      const cosAngle = Math.cos(-rotation);
      let sinAngle = Math.sin(-rotation);
      let rotX = coordinate[0] * cosAngle - coordinate[1] * sinAngle;
      let rotY = coordinate[1] * cosAngle + coordinate[0] * sinAngle;
      rotX += (size[0] / 2 - position[0]) * resolution;
      rotY += (position[1] - size[1] / 2) * resolution;

      // go back to original angle
      sinAngle = -sinAngle; // go back to original rotation
      const centerX = rotX * cosAngle - rotY * sinAngle;
      const centerY = rotY * cosAngle + rotX * sinAngle;

      return [centerX, centerY];
    }

    var View["default"] = View;

    /**
     * @module ol/layer/Layer
     */

    /**
     * @typedef {function(import("../Map.js").FrameState):HTMLElement} RenderFunction
     */

    /**
     * @typedef {'sourceready'|'change:source'} LayerEventType
     */

    /***
     * @template Return
     * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
     *   import("../Observable").OnSignature<import("./Base").BaseLayerObjectEventTypes|
     *     LayerEventType, import("../Object").ObjectEvent, Return> &
     *   import("../Observable").OnSignature<import("../render/EventType").LayerRenderEventTypes, import("../render/Event").default, Return> &
     *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("./Base").BaseLayerObjectEventTypes|LayerEventType|
     *     import("../render/EventType").LayerRenderEventTypes, Return>} LayerOnSignature
     */

    /**
     * @template {import("../source/Source.js").default} [SourceType=import("../source/Source.js").default]
     * @typedef {Object} Options
     * @property {string} [className='ol-layer'] A CSS class name to set to the layer element.
     * @property {number} [opacity=1] Opacity (0, 1).
     * @property {boolean} [visible=true] Visibility.
     * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
     * rendered outside of this extent.
     * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
     * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
     * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
     * method was used.
     * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
     * visible.
     * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
     * be visible.
     * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
     * visible.
     * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
     * be visible.
     * @property {SourceType} [source] Source for this layer.  If not provided to the constructor,
     * the source can be set by calling {@link module:ol/layer/Layer~Layer#setSource layer.setSource(source)} after
     * construction.
     * @property {import("../Map.js").default|null} [map] Map.
     * @property {RenderFunction} [render] Render function. Takes the frame state as input and is expected to return an
     * HTML element. Will overwrite the default rendering for the layer.
     * @property {Object<string, *>} [properties] Arbitrary observable properties. Can be accessed with `#get()` and `#set()`.
     */

    /**
     * @typedef {Object} State
     * @property {import("./Layer.js").default} layer Layer.
     * @property {number} opacity Opacity, the value is rounded to two digits to appear after the decimal point.
     * @property {boolean} visible Visible.
     * @property {boolean} managed Managed.
     * @property {import("../extent.js").Extent} [extent] Extent.
     * @property {number} zIndex ZIndex.
     * @property {number} maxResolution Maximum resolution.
     * @property {number} minResolution Minimum resolution.
     * @property {number} minZoom Minimum zoom.
     * @property {number} maxZoom Maximum zoom.
     */

    /**
     * @classdesc
     * Base class from which all layer types are derived. This should only be instantiated
     * in the case where a custom layer is added to the map with a custom `render` function.
     * Such a function can be specified in the `options` object, and is expected to return an HTML element.
     *
     * A visual representation of raster or vector map data.
     * Layers group together those properties that pertain to how the data is to be
     * displayed, irrespective of the source of that data.
     *
     * Layers are usually added to a map with [map.addLayer()]{@link import("../Map.js").default#addLayer}.
     * Components like {@link module:ol/interaction/Draw~Draw} use unmanaged layers
     * internally. These unmanaged layers are associated with the map using
     * [layer.setMap()]{@link module:ol/layer/Layer~Layer#setMap} instead.
     *
     * A generic `change` event is fired when the state of the source changes.
     * A `sourceready` event is fired when the layer's source is ready.
     *
     * @fires import("../render/Event.js").RenderEvent#prerender
     * @fires import("../render/Event.js").RenderEvent#postrender
     * @fires import("../events/Event.js").BaseEvent#sourceready
     *
     * @template {import("../source/Source.js").default} [SourceType=import("../source/Source.js").default]
     * @template {import("../renderer/Layer.js").default} [RendererType=import("../renderer/Layer.js").default]
     * @api
     */
    class Layer extends BaseLayer$1 {
      /**
       * @param {Options<SourceType>} options Layer options.
       */
      constructor(options) {
        const baseOptions = Object.assign({}, options);
        delete baseOptions.source;

        super(baseOptions);

        /***
         * @type {LayerOnSignature<import("../events").EventsKey>}
         */
        this.on;

        /***
         * @type {LayerOnSignature<import("../events").EventsKey>}
         */
        this.once;

        /***
         * @type {LayerOnSignature<void>}
         */
        this.un;

        /**
         * @private
         * @type {?import("../events.js").EventsKey}
         */
        this.mapPrecomposeKey_ = null;

        /**
         * @private
         * @type {?import("../events.js").EventsKey}
         */
        this.mapRenderKey_ = null;

        /**
         * @private
         * @type {?import("../events.js").EventsKey}
         */
        this.sourceChangeKey_ = null;

        /**
         * @private
         * @type {RendererType}
         */
        this.renderer_ = null;

        /**
         * @private
         * @type {boolean}
         */
        this.sourceReady_ = false;

        /**
         * @protected
         * @type {boolean}
         */
        this.rendered = false;

        // Overwrite default render method with a custom one
        if (options.render) {
          this.render = options.render;
        }

        if (options.map) {
          this.setMap(options.map);
        }

        this.addChangeListener(
          LayerProperty.SOURCE,
          this.handleSourcePropertyChange_
        );

        const source = options.source
          ? /** @type {SourceType} */ (options.source)
          : null;
        this.setSource(source);
      }

      /**
       * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
       * @return {Array<import("./Layer.js").default>} Array of layers.
       */
      getLayersArray(array) {
        array = array ? array : [];
        array.push(this);
        return array;
      }

      /**
       * @param {Array<import("./Layer.js").State>} [states] Optional list of layer states (to be modified in place).
       * @return {Array<import("./Layer.js").State>} List of layer states.
       */
      getLayerStatesArray(states) {
        states = states ? states : [];
        states.push(this.getLayerState());
        return states;
      }

      /**
       * Get the layer source.
       * @return {SourceType|null} The layer source (or `null` if not yet set).
       * @observable
       * @api
       */
      getSource() {
        return /** @type {SourceType} */ (this.get(LayerProperty.SOURCE)) || null;
      }

      /**
       * @return {SourceType|null} The source being rendered.
       */
      getRenderSource() {
        return this.getSource();
      }

      /**
       * @return {import("../source/Source.js").State} Source state.
       */
      getSourceState() {
        const source = this.getSource();
        return !source ? 'undefined' : source.getState();
      }

      /**
       * @private
       */
      handleSourceChange_() {
        this.changed();
        if (this.sourceReady_ || this.getSource().getState() !== 'ready') {
          return;
        }
        this.sourceReady_ = true;
        this.dispatchEvent('sourceready');
      }

      /**
       * @private
       */
      handleSourcePropertyChange_() {
        if (this.sourceChangeKey_) {
          events.unlistenByKey(this.sourceChangeKey_);
          this.sourceChangeKey_ = null;
        }
        this.sourceReady_ = false;
        const source = this.getSource();
        if (source) {
          this.sourceChangeKey_ = events.listen(
            source,
            EventType.CHANGE,
            this.handleSourceChange_,
            this
          );
          if (source.getState() === 'ready') {
            this.sourceReady_ = true;
            setTimeout(() => {
              this.dispatchEvent('sourceready');
            }, 0);
          }
        }
        this.changed();
      }

      /**
       * @param {import("../pixel").Pixel} pixel Pixel.
       * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with
       * an array of features.
       */
      getFeatures(pixel) {
        if (!this.renderer_) {
          return Promise.resolve([]);
        }
        return this.renderer_.getFeatures(pixel);
      }

      /**
       * @param {import("../pixel").Pixel} pixel Pixel.
       * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
       */
      getData(pixel) {
        if (!this.renderer_ || !this.rendered) {
          return null;
        }
        return this.renderer_.getData(pixel);
      }

      /**
       * The layer is visible in the given view, i.e. within its min/max resolution or zoom and
       * extent, and `getVisible()` is `true`.
       * @param {View|import("../View.js").ViewStateAndExtent} view View or {@link import("../Map.js").FrameState}.
       * @return {boolean} The layer is visible in the current view.
       * @api
       */
      isVisible(view) {
        let frameState;
        if (view instanceof View["default"]) {
          frameState = {
            viewState: view.getState(),
            extent: view.calculateExtent(),
          };
        } else {
          frameState = view;
        }
        const layerExtent = this.getExtent();
        return (
          this.getVisible() &&
          Layer.inView(this.getLayerState(), frameState.viewState) &&
          (!layerExtent || extent.intersects(layerExtent, frameState.extent))
        );
      }

      /**
       * Get the attributions of the source of this layer for the given view.
       * @param {View|import("../View.js").ViewStateAndExtent} view View or  {@link import("../Map.js").FrameState}.
       * @return {Array<string>} Attributions for this layer at the given view.
       * @api
       */
      getAttributions(view) {
        if (!this.isVisible(view)) {
          return [];
        }
        let getAttributions;
        const source = this.getSource();
        if (source) {
          getAttributions = source.getAttributions();
        }
        if (!getAttributions) {
          return [];
        }
        const frameState =
          view instanceof View["default"] ? view.getViewStateAndExtent() : view;
        let attributions = getAttributions(frameState);
        if (!Array.isArray(attributions)) {
          attributions = [attributions];
        }
        return attributions;
      }

      /**
       * In charge to manage the rendering of the layer. One layer type is
       * bounded with one layer renderer.
       * @param {?import("../Map.js").FrameState} frameState Frame state.
       * @param {HTMLElement} target Target which the renderer may (but need not) use
       * for rendering its content.
       * @return {HTMLElement} The rendered element.
       */
      render(frameState, target) {
        const layerRenderer = this.getRenderer();

        if (layerRenderer.prepareFrame(frameState)) {
          this.rendered = true;
          return layerRenderer.renderFrame(frameState, target);
        }
      }

      /**
       * Called when a layer is not visible during a map render.
       */
      unrender() {
        this.rendered = false;
      }

      /**
       * For use inside the library only.
       * @param {import("../Map.js").default|null} map Map.
       */
      setMapInternal(map) {
        if (!map) {
          this.unrender();
        }
        this.set(LayerProperty.MAP, map);
      }

      /**
       * For use inside the library only.
       * @return {import("../Map.js").default|null} Map.
       */
      getMapInternal() {
        return this.get(LayerProperty.MAP);
      }

      /**
       * Sets the layer to be rendered on top of other layers on a map. The map will
       * not manage this layer in its layers collection. This
       * is useful for temporary layers. To remove an unmanaged layer from the map,
       * use `#setMap(null)`.
       *
       * To add the layer to a map and have it managed by the map, use
       * {@link module:ol/Map~Map#addLayer} instead.
       * @param {import("../Map.js").default|null} map Map.
       * @api
       */
      setMap(map) {
        if (this.mapPrecomposeKey_) {
          events.unlistenByKey(this.mapPrecomposeKey_);
          this.mapPrecomposeKey_ = null;
        }
        if (!map) {
          this.changed();
        }
        if (this.mapRenderKey_) {
          events.unlistenByKey(this.mapRenderKey_);
          this.mapRenderKey_ = null;
        }
        if (map) {
          this.mapPrecomposeKey_ = events.listen(
            map,
            RenderEventType.PRECOMPOSE,
            function (evt) {
              const renderEvent =
                /** @type {import("../render/Event.js").default} */ (evt);
              const layerStatesArray = renderEvent.frameState.layerStatesArray;
              const layerState = this.getLayerState(false);
              // A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both.
              asserts.assert(
                !layerStatesArray.some(function (arrayLayerState) {
                  return arrayLayerState.layer === layerState.layer;
                }),
                67
              );
              layerStatesArray.push(layerState);
            },
            this
          );
          this.mapRenderKey_ = events.listen(this, EventType.CHANGE, map.render, map);
          this.changed();
        }
      }

      /**
       * Set the layer source.
       * @param {SourceType|null} source The layer source.
       * @observable
       * @api
       */
      setSource(source) {
        this.set(LayerProperty.SOURCE, source);
      }

      /**
       * Get the renderer for this layer.
       * @return {RendererType|null} The layer renderer.
       */
      getRenderer() {
        if (!this.renderer_) {
          this.renderer_ = this.createRenderer();
        }
        return this.renderer_;
      }

      /**
       * @return {boolean} The layer has a renderer.
       */
      hasRenderer() {
        return !!this.renderer_;
      }

      /**
       * Create a renderer for this layer.
       * @return {RendererType} A layer renderer.
       * @protected
       */
      createRenderer() {
        return null;
      }

      /**
       * Clean up.
       */
      disposeInternal() {
        if (this.renderer_) {
          this.renderer_.dispose();
          delete this.renderer_;
        }

        this.setSource(null);
        super.disposeInternal();
      }
    }

    /**
     * Return `true` if the layer is visible and if the provided view state
     * has resolution and zoom levels that are in range of the layer's min/max.
     * @param {State} layerState Layer state.
     * @param {import("../View.js").State} viewState View state.
     * @return {boolean} The layer is visible at the given view state.
     */
    function Layer.inView(layerState, viewState) {
      if (!layerState.visible) {
        return false;
      }
      const resolution = viewState.resolution;
      if (
        resolution < layerState.minResolution ||
        resolution >= layerState.maxResolution
      ) {
        return false;
      }
      const zoom = viewState.zoom;
      return zoom > layerState.minZoom && zoom <= layerState.maxZoom;
    }

    var Layer$1 = Layer;

    /**
     * @module ol/style/IconImageCache
     */

    /**
     * @classdesc
     * Singleton class. Available through {@link module:ol/style/IconImageCache.shared}.
     */
    class IconImageCache {
      constructor() {
        /**
         * @type {!Object<string, import("./IconImage.js").default>}
         * @private
         */
        this.cache_ = {};

        /**
         * @type {number}
         * @private
         */
        this.cacheSize_ = 0;

        /**
         * @type {number}
         * @private
         */
        this.maxCacheSize_ = 32;
      }

      /**
       * FIXME empty description for jsdoc
       */
      clear() {
        this.cache_ = {};
        this.cacheSize_ = 0;
      }

      /**
       * @return {boolean} Can expire cache.
       */
      canExpireCache() {
        return this.cacheSize_ > this.maxCacheSize_;
      }

      /**
       * FIXME empty description for jsdoc
       */
      expire() {
        if (this.canExpireCache()) {
          let i = 0;
          for (const key in this.cache_) {
            const iconImage = this.cache_[key];
            if ((i++ & 3) === 0 && !iconImage.hasListener()) {
              delete this.cache_[key];
              --this.cacheSize_;
            }
          }
        }
      }

      /**
       * @param {string} src Src.
       * @param {?string} crossOrigin Cross origin.
       * @param {import("../color.js").Color} color Color.
       * @return {import("./IconImage.js").default} Icon image.
       */
      get(src, crossOrigin, color) {
        const key = getKey(src, crossOrigin, color);
        return key in this.cache_ ? this.cache_[key] : null;
      }

      /**
       * @param {string} src Src.
       * @param {?string} crossOrigin Cross origin.
       * @param {import("../color.js").Color} color Color.
       * @param {import("./IconImage.js").default} iconImage Icon image.
       */
      set(src, crossOrigin, color, iconImage) {
        const key = getKey(src, crossOrigin, color);
        this.cache_[key] = iconImage;
        ++this.cacheSize_;
      }

      /**
       * Set the cache size of the icon cache. Default is `32`. Change this value when
       * your map uses more than 32 different icon images and you are not caching icon
       * styles on the application level.
       * @param {number} maxCacheSize Cache max size.
       * @api
       */
      setSize(maxCacheSize) {
        this.maxCacheSize_ = maxCacheSize;
        this.expire();
      }
    }

    /**
     * @param {string} src Src.
     * @param {?string} crossOrigin Cross origin.
     * @param {import("../color.js").Color} color Color.
     * @return {string} Cache key.
     */
    function getKey(src, crossOrigin, color) {
      const colorString = color ? asString(color) : 'null';
      return crossOrigin + ':' + src + ':' + colorString;
    }

    /**
     * The {@link module:ol/style/IconImageCache~IconImageCache} for
     * {@link module:ol/style/Icon~Icon} images.
     * @api
     */
    const shared = new IconImageCache();

    /**
     * @module ol/render/Event
     */

    class RenderEvent extends Event {
      /**
       * @param {import("./EventType.js").default} type Type.
       * @param {import("../transform.js").Transform} [inversePixelTransform] Transform for
       *     CSS pixels to rendered pixels.
       * @param {import("../Map.js").FrameState} [frameState] Frame state.
       * @param {?(CanvasRenderingContext2D|WebGLRenderingContext)} [context] Context.
       */
      constructor(type, inversePixelTransform, frameState, context) {
        super(type);

        /**
         * Transform from CSS pixels (relative to the top-left corner of the map viewport)
         * to rendered pixels on this event's `context`. Only available when a Canvas renderer is used, null otherwise.
         * @type {import("../transform.js").Transform|undefined}
         * @api
         */
        this.inversePixelTransform = inversePixelTransform;

        /**
         * An object representing the current render frame state.
         * @type {import("../Map.js").FrameState|undefined}
         * @api
         */
        this.frameState = frameState;

        /**
         * Canvas context. Not available when the event is dispatched by the map. For Canvas 2D layers,
         * the context will be the 2D rendering context.  For WebGL layers, the context will be the WebGL
         * context.
         * @type {CanvasRenderingContext2D|WebGLRenderingContext|undefined}
         * @api
         */
        this.context = context;
      }
    }

    var RenderEvent$1 = RenderEvent;

    /**
     * @module ol/TileState
     */

    /**
     * @enum {number}
     */
    var TileState = {
      IDLE: 0,
      LOADING: 1,
      LOADED: 2,
      /**
       * Indicates that tile loading failed
       * @type {number}
       */
      ERROR: 3,
      EMPTY: 4,
    };

    /**
     * @module ol/Kinetic
     */

    /**
     * @classdesc
     * Implementation of inertial deceleration for map movement.
     *
     * @api
     */
    class Kinetic {
      /**
       * @param {number} decay Rate of decay (must be negative).
       * @param {number} minVelocity Minimum velocity (pixels/millisecond).
       * @param {number} delay Delay to consider to calculate the kinetic
       *     initial values (milliseconds).
       */
      constructor(decay, minVelocity, delay) {
        /**
         * @private
         * @type {number}
         */
        this.decay_ = decay;

        /**
         * @private
         * @type {number}
         */
        this.minVelocity_ = minVelocity;

        /**
         * @private
         * @type {number}
         */
        this.delay_ = delay;

        /**
         * @private
         * @type {Array<number>}
         */
        this.points_ = [];

        /**
         * @private
         * @type {number}
         */
        this.angle_ = 0;

        /**
         * @private
         * @type {number}
         */
        this.initialVelocity_ = 0;
      }

      /**
       * FIXME empty description for jsdoc
       */
      begin() {
        this.points_.length = 0;
        this.angle_ = 0;
        this.initialVelocity_ = 0;
      }

      /**
       * @param {number} x X.
       * @param {number} y Y.
       */
      update(x, y) {
        this.points_.push(x, y, Date.now());
      }

      /**
       * @return {boolean} Whether we should do kinetic animation.
       */
      end() {
        if (this.points_.length < 6) {
          // at least 2 points are required (i.e. there must be at least 6 elements
          // in the array)
          return false;
        }
        const delay = Date.now() - this.delay_;
        const lastIndex = this.points_.length - 3;
        if (this.points_[lastIndex + 2] < delay) {
          // the last tracked point is too old, which means that the user stopped
          // panning before releasing the map
          return false;
        }

        // get the first point which still falls into the delay time
        let firstIndex = lastIndex - 3;
        while (firstIndex > 0 && this.points_[firstIndex + 2] > delay) {
          firstIndex -= 3;
        }

        const duration = this.points_[lastIndex + 2] - this.points_[firstIndex + 2];
        // we don't want a duration of 0 (divide by zero)
        // we also make sure the user panned for a duration of at least one frame
        // (1/60s) to compute sane displacement values
        if (duration < 1000 / 60) {
          return false;
        }

        const dx = this.points_[lastIndex] - this.points_[firstIndex];
        const dy = this.points_[lastIndex + 1] - this.points_[firstIndex + 1];
        this.angle_ = Math.atan2(dy, dx);
        this.initialVelocity_ = Math.sqrt(dx * dx + dy * dy) / duration;
        return this.initialVelocity_ > this.minVelocity_;
      }

      /**
       * @return {number} Total distance travelled (pixels).
       */
      getDistance() {
        return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
      }

      /**
       * @return {number} Angle of the kinetic panning animation (radians).
       */
      getAngle() {
        return this.angle_;
      }
    }

    var Kinetic$1 = Kinetic;

    /**
     * @module ol/renderer/Map
     */

    /**
     * @typedef HitMatch
     * @property {import("../Feature.js").FeatureLike} feature Feature.
     * @property {import("../layer/Layer.js").default} layer Layer.
     * @property {import("../geom/SimpleGeometry.js").default} geometry Geometry.
     * @property {number} distanceSq Squared distance.
     * @property {import("./vector.js").FeatureCallback<T>} callback Callback.
     * @template T
     */

    /**
     * @abstract
     */
    class MapRenderer extends Disposable$1 {
      /**
       * @param {import("../Map.js").default} map Map.
       */
      constructor(map) {
        super();

        /**
         * @private
         * @type {import("../Map.js").default}
         */
        this.map_ = map;
      }

      /**
       * @abstract
       * @param {import("../render/EventType.js").default} type Event type.
       * @param {import("../Map.js").FrameState} frameState Frame state.
       */
      dispatchRenderEvent(type, frameState) {
        util.abstract();
      }

      /**
       * @param {import("../Map.js").FrameState} frameState FrameState.
       * @protected
       */
      calculateMatrices2D(frameState) {
        const viewState = frameState.viewState;
        const coordinateToPixelTransform = frameState.coordinateToPixelTransform;
        const pixelToCoordinateTransform = frameState.pixelToCoordinateTransform;

        transform.compose(
          coordinateToPixelTransform,
          frameState.size[0] / 2,
          frameState.size[1] / 2,
          1 / viewState.resolution,
          -1 / viewState.resolution,
          -viewState.rotation,
          -viewState.center[0],
          -viewState.center[1]
        );

        transform.makeInverse(pixelToCoordinateTransform, coordinateToPixelTransform);
      }

      /**
       * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
       * @param {import("../Map.js").FrameState} frameState FrameState.
       * @param {number} hitTolerance Hit tolerance in pixels.
       * @param {boolean} checkWrapped Check for wrapped geometries.
       * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
       * @param {S} thisArg Value to use as `this` when executing `callback`.
       * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
       *     function, only layers which are visible and for which this function
       *     returns `true` will be tested for features.  By default, all visible
       *     layers will be tested.
       * @param {U} thisArg2 Value to use as `this` when executing `layerFilter`.
       * @return {T|undefined} Callback result.
       * @template S,T,U
       */
      forEachFeatureAtCoordinate(
        coordinate$1,
        frameState,
        hitTolerance,
        checkWrapped,
        callback,
        thisArg,
        layerFilter,
        thisArg2
      ) {
        let result;
        const viewState = frameState.viewState;

        /**
         * @param {boolean} managed Managed layer.
         * @param {import("../Feature.js").FeatureLike} feature Feature.
         * @param {import("../layer/Layer.js").default} layer Layer.
         * @param {import("../geom/Geometry.js").default} geometry Geometry.
         * @return {T|undefined} Callback result.
         */
        function forEachFeatureAtCoordinate(managed, feature, layer, geometry) {
          return callback.call(thisArg, feature, managed ? layer : null, geometry);
        }

        const projection = viewState.projection;

        const translatedCoordinate = coordinate.wrapX(coordinate$1.slice(), projection);
        const offsets = [[0, 0]];
        if (projection.canWrapX() && checkWrapped) {
          const projectionExtent = projection.getExtent();
          const worldWidth = extent.getWidth(projectionExtent);
          offsets.push([-worldWidth, 0], [worldWidth, 0]);
        }

        const layerStates = frameState.layerStatesArray;
        const numLayers = layerStates.length;

        const matches = /** @type {Array<HitMatch<T>>} */ ([]);
        const tmpCoord = [];
        for (let i = 0; i < offsets.length; i++) {
          for (let j = numLayers - 1; j >= 0; --j) {
            const layerState = layerStates[j];
            const layer = layerState.layer;
            if (
              layer.hasRenderer() &&
              Layer.inView(layerState, viewState) &&
              layerFilter.call(thisArg2, layer)
            ) {
              const layerRenderer = layer.getRenderer();
              const source = layer.getSource();
              if (layerRenderer && source) {
                const coordinates = source.getWrapX()
                  ? translatedCoordinate
                  : coordinate$1;
                const callback = forEachFeatureAtCoordinate.bind(
                  null,
                  layerState.managed
                );
                tmpCoord[0] = coordinates[0] + offsets[i][0];
                tmpCoord[1] = coordinates[1] + offsets[i][1];
                result = layerRenderer.forEachFeatureAtCoordinate(
                  tmpCoord,
                  frameState,
                  hitTolerance,
                  callback,
                  matches
                );
              }
              if (result) {
                return result;
              }
            }
          }
        }
        if (matches.length === 0) {
          return undefined;
        }
        const order = 1 / matches.length;
        matches.forEach((m, i) => (m.distanceSq += i * order));
        matches.sort((a, b) => a.distanceSq - b.distanceSq);
        matches.some((m) => {
          return (result = m.callback(m.feature, m.layer, m.geometry));
        });
        return result;
      }

      /**
       * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
       * @param {import("../Map.js").FrameState} frameState FrameState.
       * @param {number} hitTolerance Hit tolerance in pixels.
       * @param {boolean} checkWrapped Check for wrapped geometries.
       * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
       *     function, only layers which are visible and for which this function
       *     returns `true` will be tested for features.  By default, all visible
       *     layers will be tested.
       * @param {U} thisArg Value to use as `this` when executing `layerFilter`.
       * @return {boolean} Is there a feature at the given coordinate?
       * @template U
       */
      hasFeatureAtCoordinate(
        coordinate,
        frameState,
        hitTolerance,
        checkWrapped,
        layerFilter,
        thisArg
      ) {
        const hasFeature = this.forEachFeatureAtCoordinate(
          coordinate,
          frameState,
          hitTolerance,
          checkWrapped,
          functions.TRUE,
          this,
          layerFilter,
          thisArg
        );

        return hasFeature !== undefined;
      }

      /**
       * @return {import("../Map.js").default} Map.
       */
      getMap() {
        return this.map_;
      }

      /**
       * Render.
       * @abstract
       * @param {?import("../Map.js").FrameState} frameState Frame state.
       */
      renderFrame(frameState) {
        util.abstract();
      }

      /**
       * @param {import("../Map.js").FrameState} frameState Frame state.
       * @protected
       */
      scheduleExpireIconCache(frameState) {
        if (shared.canExpireCache()) {
          frameState.postRenderFunctions.push(expireIconCache);
        }
      }
    }

    /**
     * @param {import("../Map.js").default} map Map.
     * @param {import("../Map.js").FrameState} frameState Frame state.
     */
    function expireIconCache(map, frameState) {
      shared.expire();
    }

    var MapRenderer$1 = MapRenderer;

    /**
     * @module ol/renderer/Composite
     */

    /**
     * @classdesc
     * Canvas map renderer.
     * @api
     */
    class CompositeMapRenderer extends MapRenderer$1 {
      /**
       * @param {import("../Map.js").default} map Map.
       */
      constructor(map) {
        super(map);

        /**
         * @type {import("../events.js").EventsKey}
         */
        this.fontChangeListenerKey_ = events.listen(
          checkedFonts,
          ObjectEventType.PROPERTYCHANGE,
          map.redrawText.bind(map)
        );

        /**
         * @private
         * @type {HTMLDivElement}
         */
        this.element_ = document.createElement('div');
        const style = this.element_.style;
        style.position = 'absolute';
        style.width = '100%';
        style.height = '100%';
        style.zIndex = '0';

        this.element_.className = css.CLASS_UNSELECTABLE + ' ol-layers';

        const container = map.getViewport();
        container.insertBefore(this.element_, container.firstChild || null);

        /**
         * @private
         * @type {Array<HTMLElement>}
         */
        this.children_ = [];

        /**
         * @private
         * @type {boolean}
         */
        this.renderedVisible_ = true;
      }

      /**
       * @param {import("../render/EventType.js").default} type Event type.
       * @param {import("../Map.js").FrameState} frameState Frame state.
       */
      dispatchRenderEvent(type, frameState) {
        const map = this.getMap();
        if (map.hasListener(type)) {
          const event = new RenderEvent$1(type, undefined, frameState);
          map.dispatchEvent(event);
        }
      }

      disposeInternal() {
        events.unlistenByKey(this.fontChangeListenerKey_);
        this.element_.parentNode.removeChild(this.element_);
        super.disposeInternal();
      }

      /**
       * Render.
       * @param {?import("../Map.js").FrameState} frameState Frame state.
       */
      renderFrame(frameState) {
        if (!frameState) {
          if (this.renderedVisible_) {
            this.element_.style.display = 'none';
            this.renderedVisible_ = false;
          }
          return;
        }

        this.calculateMatrices2D(frameState);
        this.dispatchRenderEvent(RenderEventType.PRECOMPOSE, frameState);

        const layerStatesArray = frameState.layerStatesArray.sort(function (a, b) {
          return a.zIndex - b.zIndex;
        });
        const viewState = frameState.viewState;

        this.children_.length = 0;
        /**
         * @type {Array<import("../layer/BaseVector.js").default>}
         */
        const declutterLayers = [];
        let previousElement = null;
        for (let i = 0, ii = layerStatesArray.length; i < ii; ++i) {
          const layerState = layerStatesArray[i];
          frameState.layerIndex = i;

          const layer = layerState.layer;
          const sourceState = layer.getSourceState();
          if (
            !Layer.inView(layerState, viewState) ||
            (sourceState != 'ready' && sourceState != 'undefined')
          ) {
            layer.unrender();
            continue;
          }

          const element = layer.render(frameState, previousElement);
          if (!element) {
            continue;
          }
          if (element !== previousElement) {
            this.children_.push(element);
            previousElement = element;
          }
          if ('getDeclutter' in layer) {
            declutterLayers.push(
              /** @type {import("../layer/BaseVector.js").default} */ (layer)
            );
          }
        }
        for (let i = declutterLayers.length - 1; i >= 0; --i) {
          declutterLayers[i].renderDeclutter(frameState);
        }

        dom.replaceChildren(this.element_, this.children_);

        this.dispatchRenderEvent(RenderEventType.POSTCOMPOSE, frameState);

        if (!this.renderedVisible_) {
          this.element_.style.display = '';
          this.renderedVisible_ = true;
        }

        this.scheduleExpireIconCache(frameState);
      }
    }

    var CompositeMapRenderer$1 = CompositeMapRenderer;

    /**
     * @module ol/layer/Group
     */

    /**
     * @typedef {'addlayer'|'removelayer'} EventType
     */

    /**
     * @classdesc
     * A layer group triggers 'addlayer' and 'removelayer' events when layers are added to or removed from
     * the group or one of its child groups.  When a layer group is added to or removed from another layer group,
     * a single event will be triggered (instead of one per layer in the group added or removed).
     */
    class GroupEvent extends Event {
      /**
       * @param {EventType} type The event type.
       * @param {BaseLayer} layer The layer.
       */
      constructor(type, layer) {
        super(type);

        /**
         * The added or removed layer.
         * @type {BaseLayer}
         * @api
         */
        this.layer = layer;
      }
    }

    /***
     * @template Return
     * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
     *   import("../Observable").OnSignature<import("./Base").BaseLayerObjectEventTypes|
     *     'change:layers', import("../Object").ObjectEvent, Return> &
     *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("./Base").BaseLayerObjectEventTypes|'change:layers', Return>} GroupOnSignature
     */

    /**
     * @typedef {Object} Options
     * @property {number} [opacity=1] Opacity (0, 1).
     * @property {boolean} [visible=true] Visibility.
     * @property {import("../extent.js").Extent} [extent] The bounding extent for layer rendering.  The layer will not be
     * rendered outside of this extent.
     * @property {number} [zIndex] The z-index for layer rendering.  At rendering time, the layers
     * will be ordered, first by Z-index and then by position. When `undefined`, a `zIndex` of 0 is assumed
     * for layers that are added to the map's `layers` collection, or `Infinity` when the layer's `setMap()`
     * method was used.
     * @property {number} [minResolution] The minimum resolution (inclusive) at which this layer will be
     * visible.
     * @property {number} [maxResolution] The maximum resolution (exclusive) below which this layer will
     * be visible.
     * @property {number} [minZoom] The minimum view zoom level (exclusive) above which this layer will be
     * visible.
     * @property {number} [maxZoom] The maximum view zoom level (inclusive) at which this layer will
     * be visible.
     * @property {Array<import("./Base.js").default>|Collection<import("./Base.js").default>} [layers] Child layers.
     * @property {Object<string, *>} [properties] Arbitrary observable properties. Can be accessed with `#get()` and `#set()`.
     */

    /**
     * @enum {string}
     * @private
     */
    const Property = {
      LAYERS: 'layers',
    };

    /**
     * @classdesc
     * A {@link module:ol/Collection~Collection} of layers that are handled together.
     *
     * A generic `change` event is triggered when the group/Collection changes.
     *
     * @api
     */
    class LayerGroup$1 extends BaseLayer$1 {
      /**
       * @param {Options} [options] Layer options.
       */
      constructor(options) {
        options = options || {};
        const baseOptions = /** @type {Options} */ (Object.assign({}, options));
        delete baseOptions.layers;

        let layers = options.layers;

        super(baseOptions);

        /***
         * @type {GroupOnSignature<import("../events").EventsKey>}
         */
        this.on;

        /***
         * @type {GroupOnSignature<import("../events").EventsKey>}
         */
        this.once;

        /***
         * @type {GroupOnSignature<void>}
         */
        this.un;

        /**
         * @private
         * @type {Array<import("../events.js").EventsKey>}
         */
        this.layersListenerKeys_ = [];

        /**
         * @private
         * @type {Object<string, Array<import("../events.js").EventsKey>>}
         */
        this.listenerKeys_ = {};

        this.addChangeListener(Property.LAYERS, this.handleLayersChanged_);

        if (layers) {
          if (Array.isArray(layers)) {
            layers = new Collection["default"](layers.slice(), {unique: true});
          } else {
            asserts.assert(typeof (/** @type {?} */ (layers).getArray) === 'function', 43); // Expected `layers` to be an array or a `Collection`
          }
        } else {
          layers = new Collection["default"](undefined, {unique: true});
        }

        this.setLayers(layers);
      }

      /**
       * @private
       */
      handleLayerChange_() {
        this.changed();
      }

      /**
       * @private
       */
      handleLayersChanged_() {
        this.layersListenerKeys_.forEach(events.unlistenByKey);
        this.layersListenerKeys_.length = 0;

        const layers = this.getLayers();
        this.layersListenerKeys_.push(
          events.listen(layers, CollectionEventType.ADD, this.handleLayersAdd_, this),
          events.listen(layers, CollectionEventType.REMOVE, this.handleLayersRemove_, this)
        );

        for (const id in this.listenerKeys_) {
          this.listenerKeys_[id].forEach(events.unlistenByKey);
        }
        obj.clear(this.listenerKeys_);

        const layersArray = layers.getArray();
        for (let i = 0, ii = layersArray.length; i < ii; i++) {
          const layer = layersArray[i];
          this.registerLayerListeners_(layer);
          this.dispatchEvent(new GroupEvent('addlayer', layer));
        }
        this.changed();
      }

      /**
       * @param {BaseLayer} layer The layer.
       */
      registerLayerListeners_(layer) {
        const listenerKeys = [
          events.listen(
            layer,
            ObjectEventType.PROPERTYCHANGE,
            this.handleLayerChange_,
            this
          ),
          events.listen(layer, EventType.CHANGE, this.handleLayerChange_, this),
        ];

        if (layer instanceof LayerGroup$1) {
          listenerKeys.push(
            events.listen(layer, 'addlayer', this.handleLayerGroupAdd_, this),
            events.listen(layer, 'removelayer', this.handleLayerGroupRemove_, this)
          );
        }

        this.listenerKeys_[util.getUid(layer)] = listenerKeys;
      }

      /**
       * @param {GroupEvent} event The layer group event.
       */
      handleLayerGroupAdd_(event) {
        this.dispatchEvent(new GroupEvent('addlayer', event.layer));
      }

      /**
       * @param {GroupEvent} event The layer group event.
       */
      handleLayerGroupRemove_(event) {
        this.dispatchEvent(new GroupEvent('removelayer', event.layer));
      }

      /**
       * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
       * @private
       */
      handleLayersAdd_(collectionEvent) {
        const layer = collectionEvent.element;
        this.registerLayerListeners_(layer);
        this.dispatchEvent(new GroupEvent('addlayer', layer));
        this.changed();
      }

      /**
       * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
       * @private
       */
      handleLayersRemove_(collectionEvent) {
        const layer = collectionEvent.element;
        const key = util.getUid(layer);
        this.listenerKeys_[key].forEach(events.unlistenByKey);
        delete this.listenerKeys_[key];
        this.dispatchEvent(new GroupEvent('removelayer', layer));
        this.changed();
      }

      /**
       * Returns the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
       * in this group.
       * @return {!Collection<import("./Base.js").default>} Collection of
       *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
       * @observable
       * @api
       */
      getLayers() {
        return /** @type {!Collection<import("./Base.js").default>} */ (
          this.get(Property.LAYERS)
        );
      }

      /**
       * Set the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
       * in this group.
       * @param {!Collection<import("./Base.js").default>} layers Collection of
       *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
       * @observable
       * @api
       */
      setLayers(layers) {
        const collection = this.getLayers();
        if (collection) {
          const currentLayers = collection.getArray();
          for (let i = 0, ii = currentLayers.length; i < ii; ++i) {
            this.dispatchEvent(new GroupEvent('removelayer', currentLayers[i]));
          }
        }

        this.set(Property.LAYERS, layers);
      }

      /**
       * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
       * @return {Array<import("./Layer.js").default>} Array of layers.
       */
      getLayersArray(array) {
        array = array !== undefined ? array : [];
        this.getLayers().forEach(function (layer) {
          layer.getLayersArray(array);
        });
        return array;
      }

      /**
       * Get the layer states list and use this groups z-index as the default
       * for all layers in this and nested groups, if it is unset at this point.
       * If dest is not provided and this group's z-index is undefined
       * 0 is used a the default z-index.
       * @param {Array<import("./Layer.js").State>} [dest] Optional list
       * of layer states (to be modified in place).
       * @return {Array<import("./Layer.js").State>} List of layer states.
       */
      getLayerStatesArray(dest) {
        const states = dest !== undefined ? dest : [];
        const pos = states.length;

        this.getLayers().forEach(function (layer) {
          layer.getLayerStatesArray(states);
        });

        const ownLayerState = this.getLayerState();
        let defaultZIndex = ownLayerState.zIndex;
        if (!dest && ownLayerState.zIndex === undefined) {
          defaultZIndex = 0;
        }
        for (let i = pos, ii = states.length; i < ii; i++) {
          const layerState = states[i];
          layerState.opacity *= ownLayerState.opacity;
          layerState.visible = layerState.visible && ownLayerState.visible;
          layerState.maxResolution = Math.min(
            layerState.maxResolution,
            ownLayerState.maxResolution
          );
          layerState.minResolution = Math.max(
            layerState.minResolution,
            ownLayerState.minResolution
          );
          layerState.minZoom = Math.max(layerState.minZoom, ownLayerState.minZoom);
          layerState.maxZoom = Math.min(layerState.maxZoom, ownLayerState.maxZoom);
          if (ownLayerState.extent !== undefined) {
            if (layerState.extent !== undefined) {
              layerState.extent = extent.getIntersection(
                layerState.extent,
                ownLayerState.extent
              );
            } else {
              layerState.extent = ownLayerState.extent;
            }
          }
          if (layerState.zIndex === undefined) {
            layerState.zIndex = defaultZIndex;
          }
        }

        return states;
      }

      /**
       * @return {import("../source/Source.js").State} Source state.
       */
      getSourceState() {
        return 'ready';
      }
    }

    var LayerGroup$2 = LayerGroup$1;

    /**
     * @module ol/MapEvent
     */

    /**
     * @classdesc
     * Events emitted as map events are instances of this type.
     * See {@link module:ol/Map~Map} for which events trigger a map event.
     */
    class MapEvent extends Event {
      /**
       * @param {string} type Event type.
       * @param {import("./Map.js").default} map Map.
       * @param {?import("./Map.js").FrameState} [frameState] Frame state.
       */
      constructor(type, map, frameState) {
        super(type);

        /**
         * The map where the event occurred.
         * @type {import("./Map.js").default}
         * @api
         */
        this.map = map;

        /**
         * The frame state at the time of the event.
         * @type {?import("./Map.js").FrameState}
         * @api
         */
        this.frameState = frameState !== undefined ? frameState : null;
      }
    }

    var MapEvent$1 = MapEvent;

    /**
     * @module ol/MapBrowserEvent
     */

    /**
     * @classdesc
     * Events emitted as map browser events are instances of this type.
     * See {@link module:ol/Map~Map} for which events trigger a map browser event.
     * @template {UIEvent} EVENT
     */
    class MapBrowserEvent extends MapEvent$1 {
      /**
       * @param {string} type Event type.
       * @param {import("./Map.js").default} map Map.
       * @param {EVENT} originalEvent Original event.
       * @param {boolean} [dragging] Is the map currently being dragged?
       * @param {import("./Map.js").FrameState} [frameState] Frame state.
       * @param {Array<PointerEvent>} [activePointers] Active pointers.
       */
      constructor(type, map, originalEvent, dragging, frameState, activePointers) {
        super(type, map, frameState);

        /**
         * The original browser event.
         * @const
         * @type {EVENT}
         * @api
         */
        this.originalEvent = originalEvent;

        /**
         * The map pixel relative to the viewport corresponding to the original browser event.
         * @type {?import("./pixel.js").Pixel}
         */
        this.pixel_ = null;

        /**
         * The coordinate in the user projection corresponding to the original browser event.
         * @type {?import("./coordinate.js").Coordinate}
         */
        this.coordinate_ = null;

        /**
         * Indicates if the map is currently being dragged. Only set for
         * `POINTERDRAG` and `POINTERMOVE` events. Default is `false`.
         *
         * @type {boolean}
         * @api
         */
        this.dragging = dragging !== undefined ? dragging : false;

        /**
         * @type {Array<PointerEvent>|undefined}
         */
        this.activePointers = activePointers;
      }

      /**
       * The map pixel relative to the viewport corresponding to the original event.
       * @type {import("./pixel.js").Pixel}
       * @api
       */
      get pixel() {
        if (!this.pixel_) {
          this.pixel_ = this.map.getEventPixel(this.originalEvent);
        }
        return this.pixel_;
      }
      set pixel(pixel) {
        this.pixel_ = pixel;
      }

      /**
       * The coordinate corresponding to the original browser event.  This will be in the user
       * projection if one is set.  Otherwise it will be in the view projection.
       * @type {import("./coordinate.js").Coordinate}
       * @api
       */
      get coordinate() {
        if (!this.coordinate_) {
          this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel);
        }
        return this.coordinate_;
      }
      set coordinate(coordinate) {
        this.coordinate_ = coordinate;
      }

      /**
       * Prevents the default browser action.
       * See https://developer.mozilla.org/en-US/docs/Web/API/event.preventDefault.
       * @api
       */
      preventDefault() {
        super.preventDefault();
        if ('preventDefault' in this.originalEvent) {
          /** @type {UIEvent} */ (this.originalEvent).preventDefault();
        }
      }

      /**
       * Prevents further propagation of the current event.
       * See https://developer.mozilla.org/en-US/docs/Web/API/event.stopPropagation.
       * @api
       */
      stopPropagation() {
        super.stopPropagation();
        if ('stopPropagation' in this.originalEvent) {
          /** @type {UIEvent} */ (this.originalEvent).stopPropagation();
        }
      }
    }

    var MapBrowserEvent$1 = MapBrowserEvent;

    /**
     * @module ol/MapBrowserEventType
     */

    /**
     * Constants for event names.
     * @enum {string}
     */
    var MapBrowserEventType = {
      /**
       * A true single click with no dragging and no double click. Note that this
       * event is delayed by 250 ms to ensure that it is not a double click.
       * @event module:ol/MapBrowserEvent~MapBrowserEvent#singleclick
       * @api
       */
      SINGLECLICK: 'singleclick',

      /**
       * A click with no dragging. A double click will fire two of this.
       * @event module:ol/MapBrowserEvent~MapBrowserEvent#click
       * @api
       */
      CLICK: EventType.CLICK,

      /**
       * A true double click, with no dragging.
       * @event module:ol/MapBrowserEvent~MapBrowserEvent#dblclick
       * @api
       */
      DBLCLICK: EventType.DBLCLICK,

      /**
       * Triggered when a pointer is dragged.
       * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointerdrag
       * @api
       */
      POINTERDRAG: 'pointerdrag',

      /**
       * Triggered when a pointer is moved. Note that on touch devices this is
       * triggered when the map is panned, so is not the same as mousemove.
       * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointermove
       * @api
       */
      POINTERMOVE: 'pointermove',

      POINTERDOWN: 'pointerdown',
      POINTERUP: 'pointerup',
      POINTEROVER: 'pointerover',
      POINTEROUT: 'pointerout',
      POINTERENTER: 'pointerenter',
      POINTERLEAVE: 'pointerleave',
      POINTERCANCEL: 'pointercancel',
    };

    /***
     * @typedef {'singleclick'|'click'|'dblclick'|'pointerdrag'|'pointermove'} Types
     */

    /**
     * @module ol/pointer/EventType
     */

    /**
     * Constants for event names.
     * @enum {string}
     */
    var PointerEventType = {
      POINTERMOVE: 'pointermove',
      POINTERDOWN: 'pointerdown',
      POINTERUP: 'pointerup',
      POINTEROVER: 'pointerover',
      POINTEROUT: 'pointerout',
      POINTERENTER: 'pointerenter',
      POINTERLEAVE: 'pointerleave',
      POINTERCANCEL: 'pointercancel',
    };

    /**
     * @module ol/MapBrowserEventHandler
     */

    class MapBrowserEventHandler extends Target$1 {
      /**
       * @param {import("./Map.js").default} map The map with the viewport to listen to events on.
       * @param {number} [moveTolerance] The minimal distance the pointer must travel to trigger a move.
       */
      constructor(map, moveTolerance) {
        super(map);

        /**
         * This is the element that we will listen to the real events on.
         * @type {import("./Map.js").default}
         * @private
         */
        this.map_ = map;

        /**
         * @type {any}
         * @private
         */
        this.clickTimeoutId_;

        /**
         * Emulate dblclick and singleclick. Will be true when only one pointer is active.
         * @type {boolean}
         */
        this.emulateClicks_ = false;

        /**
         * @type {boolean}
         * @private
         */
        this.dragging_ = false;

        /**
         * @type {!Array<import("./events.js").EventsKey>}
         * @private
         */
        this.dragListenerKeys_ = [];

        /**
         * @type {number}
         * @private
         */
        this.moveTolerance_ = moveTolerance === undefined ? 1 : moveTolerance;

        /**
         * The most recent "down" type event (or null if none have occurred).
         * Set on pointerdown.
         * @type {PointerEvent|null}
         * @private
         */
        this.down_ = null;

        const element = this.map_.getViewport();

        /**
         * @type {Array<PointerEvent>}
         * @private
         */
        this.activePointers_ = [];

        /**
         * @type {!Object<number, Event>}
         * @private
         */
        this.trackedTouches_ = {};

        this.element_ = element;

        /**
         * @type {?import("./events.js").EventsKey}
         * @private
         */
        this.pointerdownListenerKey_ = events.listen(
          element,
          PointerEventType.POINTERDOWN,
          this.handlePointerDown_,
          this
        );

        /**
         * @type {PointerEvent}
         * @private
         */
        this.originalPointerMoveEvent_;

        /**
         * @type {?import("./events.js").EventsKey}
         * @private
         */
        this.relayedListenerKey_ = events.listen(
          element,
          PointerEventType.POINTERMOVE,
          this.relayMoveEvent_,
          this
        );

        /**
         * @private
         */
        this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this);

        this.element_.addEventListener(
          EventType.TOUCHMOVE,
          this.boundHandleTouchMove_,
          PASSIVE_EVENT_LISTENERS ? {passive: false} : false
        );
      }

      /**
       * @param {PointerEvent} pointerEvent Pointer
       * event.
       * @private
       */
      emulateClick_(pointerEvent) {
        let newEvent = new MapBrowserEvent$1(
          MapBrowserEventType.CLICK,
          this.map_,
          pointerEvent
        );
        this.dispatchEvent(newEvent);
        if (this.clickTimeoutId_ !== undefined) {
          // double-click
          clearTimeout(this.clickTimeoutId_);
          this.clickTimeoutId_ = undefined;
          newEvent = new MapBrowserEvent$1(
            MapBrowserEventType.DBLCLICK,
            this.map_,
            pointerEvent
          );
          this.dispatchEvent(newEvent);
        } else {
          // click
          this.clickTimeoutId_ = setTimeout(() => {
            this.clickTimeoutId_ = undefined;
            const newEvent = new MapBrowserEvent$1(
              MapBrowserEventType.SINGLECLICK,
              this.map_,
              pointerEvent
            );
            this.dispatchEvent(newEvent);
          }, 250);
        }
      }

      /**
       * Keeps track on how many pointers are currently active.
       *
       * @param {PointerEvent} pointerEvent Pointer
       * event.
       * @private
       */
      updateActivePointers_(pointerEvent) {
        const event = pointerEvent;
        const id = event.pointerId;

        if (
          event.type == MapBrowserEventType.POINTERUP ||
          event.type == MapBrowserEventType.POINTERCANCEL
        ) {
          delete this.trackedTouches_[id];
          for (const pointerId in this.trackedTouches_) {
            if (this.trackedTouches_[pointerId].target !== event.target) {
              // Some platforms assign a new pointerId when the target changes.
              // If this happens, delete one tracked pointer. If there is more
              // than one tracked pointer for the old target, it will be cleared
              // by subsequent POINTERUP events from other pointers.
              delete this.trackedTouches_[pointerId];
              break;
            }
          }
        } else if (
          event.type == MapBrowserEventType.POINTERDOWN ||
          event.type == MapBrowserEventType.POINTERMOVE
        ) {
          this.trackedTouches_[id] = event;
        }
        this.activePointers_ = Object.values(this.trackedTouches_);
      }

      /**
       * @param {PointerEvent} pointerEvent Pointer
       * event.
       * @private
       */
      handlePointerUp_(pointerEvent) {
        this.updateActivePointers_(pointerEvent);
        const newEvent = new MapBrowserEvent$1(
          MapBrowserEventType.POINTERUP,
          this.map_,
          pointerEvent,
          undefined,
          undefined,
          this.activePointers_
        );
        this.dispatchEvent(newEvent);

        // We emulate click events on left mouse button click, touch contact, and pen
        // contact. isMouseActionButton returns true in these cases (evt.button is set
        // to 0).
        // See http://www.w3.org/TR/pointerevents/#button-states
        // We only fire click, singleclick, and doubleclick if nobody has called
        // event.preventDefault().
        if (
          this.emulateClicks_ &&
          !newEvent.defaultPrevented &&
          !this.dragging_ &&
          this.isMouseActionButton_(pointerEvent)
        ) {
          this.emulateClick_(this.down_);
        }

        if (this.activePointers_.length === 0) {
          this.dragListenerKeys_.forEach(events.unlistenByKey);
          this.dragListenerKeys_.length = 0;
          this.dragging_ = false;
          this.down_ = null;
        }
      }

      /**
       * @param {PointerEvent} pointerEvent Pointer
       * event.
       * @return {boolean} If the left mouse button was pressed.
       * @private
       */
      isMouseActionButton_(pointerEvent) {
        return pointerEvent.button === 0;
      }

      /**
       * @param {PointerEvent} pointerEvent Pointer
       * event.
       * @private
       */
      handlePointerDown_(pointerEvent) {
        this.emulateClicks_ = this.activePointers_.length === 0;
        this.updateActivePointers_(pointerEvent);
        const newEvent = new MapBrowserEvent$1(
          MapBrowserEventType.POINTERDOWN,
          this.map_,
          pointerEvent,
          undefined,
          undefined,
          this.activePointers_
        );
        this.dispatchEvent(newEvent);

        this.down_ = new PointerEvent(pointerEvent.type, pointerEvent);
        Object.defineProperty(this.down_, 'target', {
          writable: false,
          value: pointerEvent.target,
        });

        if (this.dragListenerKeys_.length === 0) {
          const doc = this.map_.getOwnerDocument();
          this.dragListenerKeys_.push(
            events.listen(
              doc,
              MapBrowserEventType.POINTERMOVE,
              this.handlePointerMove_,
              this
            ),
            events.listen(doc, MapBrowserEventType.POINTERUP, this.handlePointerUp_, this),
            /* Note that the listener for `pointercancel is set up on
             * `pointerEventHandler_` and not `documentPointerEventHandler_` like
             * the `pointerup` and `pointermove` listeners.
             *
             * The reason for this is the following: `TouchSource.vacuumTouches_()`
             * issues `pointercancel` events, when there was no `touchend` for a
             * `touchstart`. Now, let's say a first `touchstart` is registered on
             * `pointerEventHandler_`. The `documentPointerEventHandler_` is set up.
             * But `documentPointerEventHandler_` doesn't know about the first
             * `touchstart`. If there is no `touchend` for the `touchstart`, we can
             * only receive a `touchcancel` from `pointerEventHandler_`, because it is
             * only registered there.
             */
            events.listen(
              this.element_,
              MapBrowserEventType.POINTERCANCEL,
              this.handlePointerUp_,
              this
            )
          );
          if (this.element_.getRootNode && this.element_.getRootNode() !== doc) {
            this.dragListenerKeys_.push(
              events.listen(
                this.element_.getRootNode(),
                MapBrowserEventType.POINTERUP,
                this.handlePointerUp_,
                this
              )
            );
          }
        }
      }

      /**
       * @param {PointerEvent} pointerEvent Pointer
       * event.
       * @private
       */
      handlePointerMove_(pointerEvent) {
        // Between pointerdown and pointerup, pointermove events are triggered.
        // To avoid a 'false' touchmove event to be dispatched, we test if the pointer
        // moved a significant distance.
        if (this.isMoving_(pointerEvent)) {
          this.updateActivePointers_(pointerEvent);
          this.dragging_ = true;
          const newEvent = new MapBrowserEvent$1(
            MapBrowserEventType.POINTERDRAG,
            this.map_,
            pointerEvent,
            this.dragging_,
            undefined,
            this.activePointers_
          );
          this.dispatchEvent(newEvent);
        }
      }

      /**
       * Wrap and relay a pointermove event.
       * @param {PointerEvent} pointerEvent Pointer
       * event.
       * @private
       */
      relayMoveEvent_(pointerEvent) {
        this.originalPointerMoveEvent_ = pointerEvent;
        const dragging = !!(this.down_ && this.isMoving_(pointerEvent));
        this.dispatchEvent(
          new MapBrowserEvent$1(
            MapBrowserEventType.POINTERMOVE,
            this.map_,
            pointerEvent,
            dragging
          )
        );
      }

      /**
       * Flexible handling of a `touch-action: none` css equivalent: because calling
       * `preventDefault()` on a `pointermove` event does not stop native page scrolling
       * and zooming, we also listen for `touchmove` and call `preventDefault()` on it
       * when an interaction (currently `DragPan` handles the event.
       * @param {TouchEvent} event Event.
       * @private
       */
      handleTouchMove_(event) {
        // Due to https://github.com/mpizenberg/elm-pep/issues/2, `this.originalPointerMoveEvent_`
        // may not be initialized yet when we get here on a platform without native pointer events.
        const originalEvent = this.originalPointerMoveEvent_;
        if (
          (!originalEvent || originalEvent.defaultPrevented) &&
          (typeof event.cancelable !== 'boolean' || event.cancelable === true)
        ) {
          event.preventDefault();
        }
      }

      /**
       * @param {PointerEvent} pointerEvent Pointer
       * event.
       * @return {boolean} Is moving.
       * @private
       */
      isMoving_(pointerEvent) {
        return (
          this.dragging_ ||
          Math.abs(pointerEvent.clientX - this.down_.clientX) >
            this.moveTolerance_ ||
          Math.abs(pointerEvent.clientY - this.down_.clientY) > this.moveTolerance_
        );
      }

      /**
       * Clean up.
       */
      disposeInternal() {
        if (this.relayedListenerKey_) {
          events.unlistenByKey(this.relayedListenerKey_);
          this.relayedListenerKey_ = null;
        }
        this.element_.removeEventListener(
          EventType.TOUCHMOVE,
          this.boundHandleTouchMove_
        );

        if (this.pointerdownListenerKey_) {
          events.unlistenByKey(this.pointerdownListenerKey_);
          this.pointerdownListenerKey_ = null;
        }

        this.dragListenerKeys_.forEach(events.unlistenByKey);
        this.dragListenerKeys_.length = 0;

        this.element_ = null;
        super.disposeInternal();
      }
    }

    var MapBrowserEventHandler$1 = MapBrowserEventHandler;

    /**
     * @module ol/MapEventType
     */

    /**
     * @enum {string}
     */
    var MapEventType = {
      /**
       * Triggered after a map frame is rendered.
       * @event module:ol/MapEvent~MapEvent#postrender
       * @api
       */
      POSTRENDER: 'postrender',

      /**
       * Triggered when the map starts moving.
       * @event module:ol/MapEvent~MapEvent#movestart
       * @api
       */
      MOVESTART: 'movestart',

      /**
       * Triggered after the map is moved.
       * @event module:ol/MapEvent~MapEvent#moveend
       * @api
       */
      MOVEEND: 'moveend',

      /**
       * Triggered when loading of additional map data (tiles, images, features) starts.
       * @event module:ol/MapEvent~MapEvent#loadstart
       * @api
       */
      LOADSTART: 'loadstart',

      /**
       * Triggered when loading of additional map data has completed.
       * @event module:ol/MapEvent~MapEvent#loadend
       * @api
       */
      LOADEND: 'loadend',
    };

    /***
     * @typedef {'postrender'|'movestart'|'moveend'|'loadstart'|'loadend'} Types
     */

    /**
     * @module ol/MapProperty
     */

    /**
     * @enum {string}
     */
    var MapProperty = {
      LAYERGROUP: 'layergroup',
      SIZE: 'size',
      TARGET: 'target',
      VIEW: 'view',
    };

    /**
     * @module ol/structs/PriorityQueue
     */

    /**
     * @type {number}
     */
    const DROP = Infinity;

    /**
     * @classdesc
     * Priority queue.
     *
     * The implementation is inspired from the Closure Library's Heap class and
     * Python's heapq module.
     *
     * See https://github.com/google/closure-library/blob/master/closure/goog/structs/heap.js
     * and https://hg.python.org/cpython/file/2.7/Lib/heapq.py.
     *
     * @template T
     */
    class PriorityQueue {
      /**
       * @param {function(T): number} priorityFunction Priority function.
       * @param {function(T): string} keyFunction Key function.
       */
      constructor(priorityFunction, keyFunction) {
        /**
         * @type {function(T): number}
         * @private
         */
        this.priorityFunction_ = priorityFunction;

        /**
         * @type {function(T): string}
         * @private
         */
        this.keyFunction_ = keyFunction;

        /**
         * @type {Array<T>}
         * @private
         */
        this.elements_ = [];

        /**
         * @type {Array<number>}
         * @private
         */
        this.priorities_ = [];

        /**
         * @type {!Object<string, boolean>}
         * @private
         */
        this.queuedElements_ = {};
      }

      /**
       * FIXME empty description for jsdoc
       */
      clear() {
        this.elements_.length = 0;
        this.priorities_.length = 0;
        obj.clear(this.queuedElements_);
      }

      /**
       * Remove and return the highest-priority element. O(log N).
       * @return {T} Element.
       */
      dequeue() {
        const elements = this.elements_;
        const priorities = this.priorities_;
        const element = elements[0];
        if (elements.length == 1) {
          elements.length = 0;
          priorities.length = 0;
        } else {
          elements[0] = elements.pop();
          priorities[0] = priorities.pop();
          this.siftUp_(0);
        }
        const elementKey = this.keyFunction_(element);
        delete this.queuedElements_[elementKey];
        return element;
      }

      /**
       * Enqueue an element. O(log N).
       * @param {T} element Element.
       * @return {boolean} The element was added to the queue.
       */
      enqueue(element) {
        asserts.assert(!(this.keyFunction_(element) in this.queuedElements_), 31); // Tried to enqueue an `element` that was already added to the queue
        const priority = this.priorityFunction_(element);
        if (priority != DROP) {
          this.elements_.push(element);
          this.priorities_.push(priority);
          this.queuedElements_[this.keyFunction_(element)] = true;
          this.siftDown_(0, this.elements_.length - 1);
          return true;
        }
        return false;
      }

      /**
       * @return {number} Count.
       */
      getCount() {
        return this.elements_.length;
      }

      /**
       * Gets the index of the left child of the node at the given index.
       * @param {number} index The index of the node to get the left child for.
       * @return {number} The index of the left child.
       * @private
       */
      getLeftChildIndex_(index) {
        return index * 2 + 1;
      }

      /**
       * Gets the index of the right child of the node at the given index.
       * @param {number} index The index of the node to get the right child for.
       * @return {number} The index of the right child.
       * @private
       */
      getRightChildIndex_(index) {
        return index * 2 + 2;
      }

      /**
       * Gets the index of the parent of the node at the given index.
       * @param {number} index The index of the node to get the parent for.
       * @return {number} The index of the parent.
       * @private
       */
      getParentIndex_(index) {
        return (index - 1) >> 1;
      }

      /**
       * Make this a heap. O(N).
       * @private
       */
      heapify_() {
        let i;
        for (i = (this.elements_.length >> 1) - 1; i >= 0; i--) {
          this.siftUp_(i);
        }
      }

      /**
       * @return {boolean} Is empty.
       */
      isEmpty() {
        return this.elements_.length === 0;
      }

      /**
       * @param {string} key Key.
       * @return {boolean} Is key queued.
       */
      isKeyQueued(key) {
        return key in this.queuedElements_;
      }

      /**
       * @param {T} element Element.
       * @return {boolean} Is queued.
       */
      isQueued(element) {
        return this.isKeyQueued(this.keyFunction_(element));
      }

      /**
       * @param {number} index The index of the node to move down.
       * @private
       */
      siftUp_(index) {
        const elements = this.elements_;
        const priorities = this.priorities_;
        const count = elements.length;
        const element = elements[index];
        const priority = priorities[index];
        const startIndex = index;

        while (index < count >> 1) {
          const lIndex = this.getLeftChildIndex_(index);
          const rIndex = this.getRightChildIndex_(index);

          const smallerChildIndex =
            rIndex < count && priorities[rIndex] < priorities[lIndex]
              ? rIndex
              : lIndex;

          elements[index] = elements[smallerChildIndex];
          priorities[index] = priorities[smallerChildIndex];
          index = smallerChildIndex;
        }

        elements[index] = element;
        priorities[index] = priority;
        this.siftDown_(startIndex, index);
      }

      /**
       * @param {number} startIndex The index of the root.
       * @param {number} index The index of the node to move up.
       * @private
       */
      siftDown_(startIndex, index) {
        const elements = this.elements_;
        const priorities = this.priorities_;
        const element = elements[index];
        const priority = priorities[index];

        while (index > startIndex) {
          const parentIndex = this.getParentIndex_(index);
          if (priorities[parentIndex] > priority) {
            elements[index] = elements[parentIndex];
            priorities[index] = priorities[parentIndex];
            index = parentIndex;
          } else {
            break;
          }
        }
        elements[index] = element;
        priorities[index] = priority;
      }

      /**
       * FIXME empty description for jsdoc
       */
      reprioritize() {
        const priorityFunction = this.priorityFunction_;
        const elements = this.elements_;
        const priorities = this.priorities_;
        let index = 0;
        const n = elements.length;
        let element, i, priority;
        for (i = 0; i < n; ++i) {
          element = elements[i];
          priority = priorityFunction(element);
          if (priority == DROP) {
            delete this.queuedElements_[this.keyFunction_(element)];
          } else {
            priorities[index] = priority;
            elements[index++] = element;
          }
        }
        elements.length = index;
        priorities.length = index;
        this.heapify_();
      }
    }

    var PriorityQueue$1 = PriorityQueue;

    /**
     * @module ol/TileQueue
     */

    /**
     * @typedef {function(import("./Tile.js").default, string, import("./coordinate.js").Coordinate, number): number} PriorityFunction
     */

    class TileQueue extends PriorityQueue$1 {
      /**
       * @param {PriorityFunction} tilePriorityFunction Tile priority function.
       * @param {function(): ?} tileChangeCallback Function called on each tile change event.
       */
      constructor(tilePriorityFunction, tileChangeCallback) {
        super(
          /**
           * @param {Array} element Element.
           * @return {number} Priority.
           */
          function (element) {
            return tilePriorityFunction.apply(null, element);
          },
          /**
           * @param {Array} element Element.
           * @return {string} Key.
           */
          function (element) {
            return /** @type {import("./Tile.js").default} */ (element[0]).getKey();
          }
        );

        /** @private */
        this.boundHandleTileChange_ = this.handleTileChange.bind(this);

        /**
         * @private
         * @type {function(): ?}
         */
        this.tileChangeCallback_ = tileChangeCallback;

        /**
         * @private
         * @type {number}
         */
        this.tilesLoading_ = 0;

        /**
         * @private
         * @type {!Object<string,boolean>}
         */
        this.tilesLoadingKeys_ = {};
      }

      /**
       * @param {Array} element Element.
       * @return {boolean} The element was added to the queue.
       */
      enqueue(element) {
        const added = super.enqueue(element);
        if (added) {
          const tile = element[0];
          tile.addEventListener(EventType.CHANGE, this.boundHandleTileChange_);
        }
        return added;
      }

      /**
       * @return {number} Number of tiles loading.
       */
      getTilesLoading() {
        return this.tilesLoading_;
      }

      /**
       * @param {import("./events/Event.js").default} event Event.
       * @protected
       */
      handleTileChange(event) {
        const tile = /** @type {import("./Tile.js").default} */ (event.target);
        const state = tile.getState();
        if (
          state === TileState.LOADED ||
          state === TileState.ERROR ||
          state === TileState.EMPTY
        ) {
          if (state !== TileState.ERROR) {
            tile.removeEventListener(EventType.CHANGE, this.boundHandleTileChange_);
          }
          const tileKey = tile.getKey();
          if (tileKey in this.tilesLoadingKeys_) {
            delete this.tilesLoadingKeys_[tileKey];
            --this.tilesLoading_;
          }
          this.tileChangeCallback_();
        }
      }

      /**
       * @param {number} maxTotalLoading Maximum number tiles to load simultaneously.
       * @param {number} maxNewLoads Maximum number of new tiles to load.
       */
      loadMoreTiles(maxTotalLoading, maxNewLoads) {
        let newLoads = 0;
        let state, tile, tileKey;
        while (
          this.tilesLoading_ < maxTotalLoading &&
          newLoads < maxNewLoads &&
          this.getCount() > 0
        ) {
          tile = /** @type {import("./Tile.js").default} */ (this.dequeue()[0]);
          tileKey = tile.getKey();
          state = tile.getState();
          if (state === TileState.IDLE && !(tileKey in this.tilesLoadingKeys_)) {
            this.tilesLoadingKeys_[tileKey] = true;
            ++this.tilesLoading_;
            ++newLoads;
            tile.load();
          }
        }
      }
    }

    var TileQueue$1 = TileQueue;

    /**
     * @param {import('./Map.js').FrameState} frameState Frame state.
     * @param {import("./Tile.js").default} tile Tile.
     * @param {string} tileSourceKey Tile source key.
     * @param {import("./coordinate.js").Coordinate} tileCenter Tile center.
     * @param {number} tileResolution Tile resolution.
     * @return {number} Tile priority.
     */
    function getTilePriority(
      frameState,
      tile,
      tileSourceKey,
      tileCenter,
      tileResolution
    ) {
      // Filter out tiles at higher zoom levels than the current zoom level, or that
      // are outside the visible extent.
      if (!frameState || !(tileSourceKey in frameState.wantedTiles)) {
        return DROP;
      }
      if (!frameState.wantedTiles[tileSourceKey][tile.getKey()]) {
        return DROP;
      }
      // Prioritize the highest zoom level tiles closest to the focus.
      // Tiles at higher zoom levels are prioritized using Math.log(tileResolution).
      // Within a zoom level, tiles are prioritized by the distance in pixels between
      // the center of the tile and the center of the viewport.  The factor of 65536
      // means that the prioritization should behave as desired for tiles up to
      // 65536 * Math.log(2) = 45426 pixels from the focus.
      const center = frameState.viewState.center;
      const deltaX = tileCenter[0] - center[0];
      const deltaY = tileCenter[1] - center[1];
      return (
        65536 * Math.log(tileResolution) +
        Math.sqrt(deltaX * deltaX + deltaY * deltaY) / tileResolution
      );
    }

    /**
     * @module ol/control/Control
     */

    /**
     * @typedef {Object} Options
     * @property {HTMLElement} [element] The element is the control's
     * container element. This only needs to be specified if you're developing
     * a custom control.
     * @property {function(import("../MapEvent.js").default):void} [render] Function called when
     * the control should be re-rendered. This is called in a `requestAnimationFrame`
     * callback.
     * @property {HTMLElement|string} [target] Specify a target if you want
     * the control to be rendered outside of the map's viewport.
     */

    /**
     * @classdesc
     * A control is a visible widget with a DOM element in a fixed position on the
     * screen. They can involve user input (buttons), or be informational only;
     * the position is determined using CSS. By default these are placed in the
     * container with CSS class name `ol-overlaycontainer-stopevent`, but can use
     * any outside DOM element.
     *
     * This is the base class for controls. You can use it for simple custom
     * controls by creating the element with listeners, creating an instance:
     * ```js
     * const myControl = new Control({element: myElement});
     * ```
     * and then adding this to the map.
     *
     * The main advantage of having this as a control rather than a simple separate
     * DOM element is that preventing propagation is handled for you. Controls
     * will also be objects in a {@link module:ol/Collection~Collection}, so you can use their methods.
     *
     * You can also extend this base for your own control class. See
     * examples/custom-controls for an example of how to do this.
     *
     * @api
     */
    class Control extends Object$1["default"] {
      /**
       * @param {Options} options Control options.
       */
      constructor(options) {
        super();

        const element = options.element;
        if (element && !options.target && !element.style.pointerEvents) {
          element.style.pointerEvents = 'auto';
        }

        /**
         * @protected
         * @type {HTMLElement}
         */
        this.element = element ? element : null;

        /**
         * @private
         * @type {HTMLElement}
         */
        this.target_ = null;

        /**
         * @private
         * @type {import("../Map.js").default|null}
         */
        this.map_ = null;

        /**
         * @protected
         * @type {!Array<import("../events.js").EventsKey>}
         */
        this.listenerKeys = [];

        if (options.render) {
          this.render = options.render;
        }

        if (options.target) {
          this.setTarget(options.target);
        }
      }

      /**
       * Clean up.
       */
      disposeInternal() {
        dom.removeNode(this.element);
        super.disposeInternal();
      }

      /**
       * Get the map associated with this control.
       * @return {import("../Map.js").default|null} Map.
       * @api
       */
      getMap() {
        return this.map_;
      }

      /**
       * Remove the control from its current map and attach it to the new map.
       * Pass `null` to just remove the control from the current map.
       * Subclasses may set up event handlers to get notified about changes to
       * the map here.
       * @param {import("../Map.js").default|null} map Map.
       * @api
       */
      setMap(map) {
        if (this.map_) {
          dom.removeNode(this.element);
        }
        for (let i = 0, ii = this.listenerKeys.length; i < ii; ++i) {
          events.unlistenByKey(this.listenerKeys[i]);
        }
        this.listenerKeys.length = 0;
        this.map_ = map;
        if (map) {
          const target = this.target_
            ? this.target_
            : map.getOverlayContainerStopEvent();
          target.appendChild(this.element);
          if (this.render !== functions.VOID) {
            this.listenerKeys.push(
              events.listen(map, MapEventType.POSTRENDER, this.render, this)
            );
          }
          map.render();
        }
      }

      /**
       * Renders the control.
       * @param {import("../MapEvent.js").default} mapEvent Map event.
       * @api
       */
      render(mapEvent) {}

      /**
       * This function is used to set a target element for the control. It has no
       * effect if it is called after the control has been added to the map (i.e.
       * after `setMap` is called on the control). If no `target` is set in the
       * options passed to the control constructor and if `setTarget` is not called
       * then the control is added to the map's overlay container.
       * @param {HTMLElement|string} target Target.
       * @api
       */
      setTarget(target) {
        this.target_ =
          typeof target === 'string' ? document.getElementById(target) : target;
      }
    }

    var Control$1 = Control;

    /**
     * @module ol/control/Attribution
     */

    /**
     * @typedef {Object} Options
     * @property {string} [className='ol-attribution'] CSS class name.
     * @property {HTMLElement|string} [target] Specify a target if you
     * want the control to be rendered outside of the map's
     * viewport.
     * @property {boolean} [collapsible] Specify if attributions can
     * be collapsed. If not specified, sources control this behavior with their
     * `attributionsCollapsible` setting.
     * @property {boolean} [collapsed=true] Specify if attributions should
     * be collapsed at startup.
     * @property {string} [tipLabel='Attributions'] Text label to use for the button tip.
     * @property {string|HTMLElement} [label='i'] Text label to use for the
     * collapsed attributions button.
     * Instead of text, also an element (e.g. a `span` element) can be used.
     * @property {string} [expandClassName=className + '-expand'] CSS class name for the
     * collapsed attributions button.
     * @property {string|HTMLElement} [collapseLabel='›'] Text label to use
     * for the expanded attributions button.
     * Instead of text, also an element (e.g. a `span` element) can be used.
     * @property {string} [collapseClassName=className + '-collapse'] CSS class name for the
     * expanded attributions button.
     * @property {function(import("../MapEvent.js").default):void} [render] Function called when
     * the control should be re-rendered. This is called in a `requestAnimationFrame`
     * callback.
     */

    /**
     * @classdesc
     * Control to show all the attributions associated with the layer sources
     * in the map. This control is one of the default controls included in maps.
     * By default it will show in the bottom right portion of the map, but this can
     * be changed by using a css selector for `.ol-attribution`.
     *
     * @api
     */
    class Attribution extends Control$1 {
      /**
       * @param {Options} [options] Attribution options.
       */
      constructor(options) {
        options = options ? options : {};

        super({
          element: document.createElement('div'),
          render: options.render,
          target: options.target,
        });

        /**
         * @private
         * @type {HTMLElement}
         */
        this.ulElement_ = document.createElement('ul');

        /**
         * @private
         * @type {boolean}
         */
        this.collapsed_ =
          options.collapsed !== undefined ? options.collapsed : true;

        /**
         * @private
         * @type {boolean}
         */
        this.userCollapsed_ = this.collapsed_;

        /**
         * @private
         * @type {boolean}
         */
        this.overrideCollapsible_ = options.collapsible !== undefined;

        /**
         * @private
         * @type {boolean}
         */
        this.collapsible_ =
          options.collapsible !== undefined ? options.collapsible : true;

        if (!this.collapsible_) {
          this.collapsed_ = false;
        }

        const className =
          options.className !== undefined ? options.className : 'ol-attribution';

        const tipLabel =
          options.tipLabel !== undefined ? options.tipLabel : 'Attributions';

        const expandClassName =
          options.expandClassName !== undefined
            ? options.expandClassName
            : className + '-expand';

        const collapseLabel =
          options.collapseLabel !== undefined ? options.collapseLabel : '\u203A';

        const collapseClassName =
          options.collapseClassName !== undefined
            ? options.collapseClassName
            : className + '-collapse';

        if (typeof collapseLabel === 'string') {
          /**
           * @private
           * @type {HTMLElement}
           */
          this.collapseLabel_ = document.createElement('span');
          this.collapseLabel_.textContent = collapseLabel;
          this.collapseLabel_.className = collapseClassName;
        } else {
          this.collapseLabel_ = collapseLabel;
        }

        const label = options.label !== undefined ? options.label : 'i';

        if (typeof label === 'string') {
          /**
           * @private
           * @type {HTMLElement}
           */
          this.label_ = document.createElement('span');
          this.label_.textContent = label;
          this.label_.className = expandClassName;
        } else {
          this.label_ = label;
        }

        const activeLabel =
          this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;

        /**
         * @private
         * @type {HTMLElement}
         */
        this.toggleButton_ = document.createElement('button');
        this.toggleButton_.setAttribute('type', 'button');
        this.toggleButton_.setAttribute('aria-expanded', String(!this.collapsed_));
        this.toggleButton_.title = tipLabel;
        this.toggleButton_.appendChild(activeLabel);

        this.toggleButton_.addEventListener(
          EventType.CLICK,
          this.handleClick_.bind(this),
          false
        );

        const cssClasses =
          className +
          ' ' +
          css.CLASS_UNSELECTABLE +
          ' ' +
          css.CLASS_CONTROL +
          (this.collapsed_ && this.collapsible_ ? ' ' + css.CLASS_COLLAPSED : '') +
          (this.collapsible_ ? '' : ' ol-uncollapsible');
        const element = this.element;
        element.className = cssClasses;
        element.appendChild(this.toggleButton_);
        element.appendChild(this.ulElement_);

        /**
         * A list of currently rendered resolutions.
         * @type {Array<string>}
         * @private
         */
        this.renderedAttributions_ = [];

        /**
         * @private
         * @type {boolean}
         */
        this.renderedVisible_ = true;
      }

      /**
       * Collect a list of visible attributions and set the collapsible state.
       * @param {import("../Map.js").FrameState} frameState Frame state.
       * @return {Array<string>} Attributions.
       * @private
       */
      collectSourceAttributions_(frameState) {
        const visibleAttributions = Array.from(
          new Set(
            this.getMap()
              .getAllLayers()
              .flatMap((layer) => layer.getAttributions(frameState))
          )
        );

        const collapsible = !this.getMap()
          .getAllLayers()
          .some(
            (layer) =>
              layer.getSource() &&
              layer.getSource().getAttributionsCollapsible() === false
          );
        if (!this.overrideCollapsible_) {
          this.setCollapsible(collapsible);
        }
        return visibleAttributions;
      }

      /**
       * @private
       * @param {?import("../Map.js").FrameState} frameState Frame state.
       */
      updateElement_(frameState) {
        if (!frameState) {
          if (this.renderedVisible_) {
            this.element.style.display = 'none';
            this.renderedVisible_ = false;
          }
          return;
        }

        const attributions = this.collectSourceAttributions_(frameState);

        const visible = attributions.length > 0;
        if (this.renderedVisible_ != visible) {
          this.element.style.display = visible ? '' : 'none';
          this.renderedVisible_ = visible;
        }

        if (array.equals(attributions, this.renderedAttributions_)) {
          return;
        }

        dom.removeChildren(this.ulElement_);

        // append the attributions
        for (let i = 0, ii = attributions.length; i < ii; ++i) {
          const element = document.createElement('li');
          element.innerHTML = attributions[i];
          this.ulElement_.appendChild(element);
        }

        this.renderedAttributions_ = attributions;
      }

      /**
       * @param {MouseEvent} event The event to handle
       * @private
       */
      handleClick_(event) {
        event.preventDefault();
        this.handleToggle_();
        this.userCollapsed_ = this.collapsed_;
      }

      /**
       * @private
       */
      handleToggle_() {
        this.element.classList.toggle(css.CLASS_COLLAPSED);
        if (this.collapsed_) {
          dom.replaceNode(this.collapseLabel_, this.label_);
        } else {
          dom.replaceNode(this.label_, this.collapseLabel_);
        }
        this.collapsed_ = !this.collapsed_;
        this.toggleButton_.setAttribute('aria-expanded', String(!this.collapsed_));
      }

      /**
       * Return `true` if the attribution is collapsible, `false` otherwise.
       * @return {boolean} True if the widget is collapsible.
       * @api
       */
      getCollapsible() {
        return this.collapsible_;
      }

      /**
       * Set whether the attribution should be collapsible.
       * @param {boolean} collapsible True if the widget is collapsible.
       * @api
       */
      setCollapsible(collapsible) {
        if (this.collapsible_ === collapsible) {
          return;
        }
        this.collapsible_ = collapsible;
        this.element.classList.toggle('ol-uncollapsible');
        if (this.userCollapsed_) {
          this.handleToggle_();
        }
      }

      /**
       * Collapse or expand the attribution according to the passed parameter. Will
       * not do anything if the attribution isn't collapsible or if the current
       * collapsed state is already the one requested.
       * @param {boolean} collapsed True if the widget is collapsed.
       * @api
       */
      setCollapsed(collapsed) {
        this.userCollapsed_ = collapsed;
        if (!this.collapsible_ || this.collapsed_ === collapsed) {
          return;
        }
        this.handleToggle_();
      }

      /**
       * Return `true` when the attribution is currently collapsed or `false`
       * otherwise.
       * @return {boolean} True if the widget is collapsed.
       * @api
       */
      getCollapsed() {
        return this.collapsed_;
      }

      /**
       * Update the attribution element.
       * @param {import("../MapEvent.js").default} mapEvent Map event.
       * @override
       */
      render(mapEvent) {
        this.updateElement_(mapEvent.frameState);
      }
    }

    var Attribution$1 = Attribution;

    /**
     * @module ol/control/Rotate
     */

    /**
     * @typedef {Object} Options
     * @property {string} [className='ol-rotate'] CSS class name.
     * @property {string|HTMLElement} [label='⇧'] Text label to use for the rotate button.
     * Instead of text, also an element (e.g. a `span` element) can be used.
     * @property {string} [tipLabel='Reset rotation'] Text label to use for the rotate tip.
     * @property {string} [compassClassName='ol-compass'] CSS class name for the compass.
     * @property {number} [duration=250] Animation duration in milliseconds.
     * @property {boolean} [autoHide=true] Hide the control when rotation is 0.
     * @property {function(import("../MapEvent.js").default):void} [render] Function called when the control should
     * be re-rendered. This is called in a `requestAnimationFrame` callback.
     * @property {function():void} [resetNorth] Function called when the control is clicked.
     * This will override the default `resetNorth`.
     * @property {HTMLElement|string} [target] Specify a target if you want the control to be
     * rendered outside of the map's viewport.
     */

    /**
     * @classdesc
     * A button control to reset rotation to 0.
     * To style this control use css selector `.ol-rotate`. A `.ol-hidden` css
     * selector is added to the button when the rotation is 0.
     *
     * @api
     */
    class Rotate extends Control$1 {
      /**
       * @param {Options} [options] Rotate options.
       */
      constructor(options) {
        options = options ? options : {};

        super({
          element: document.createElement('div'),
          render: options.render,
          target: options.target,
        });

        const className =
          options.className !== undefined ? options.className : 'ol-rotate';

        const label = options.label !== undefined ? options.label : '\u21E7';

        const compassClassName =
          options.compassClassName !== undefined
            ? options.compassClassName
            : 'ol-compass';

        /**
         * @type {HTMLElement}
         * @private
         */
        this.label_ = null;

        if (typeof label === 'string') {
          this.label_ = document.createElement('span');
          this.label_.className = compassClassName;
          this.label_.textContent = label;
        } else {
          this.label_ = label;
          this.label_.classList.add(compassClassName);
        }

        const tipLabel = options.tipLabel ? options.tipLabel : 'Reset rotation';

        const button = document.createElement('button');
        button.className = className + '-reset';
        button.setAttribute('type', 'button');
        button.title = tipLabel;
        button.appendChild(this.label_);

        button.addEventListener(
          EventType.CLICK,
          this.handleClick_.bind(this),
          false
        );

        const cssClasses =
          className + ' ' + css.CLASS_UNSELECTABLE + ' ' + css.CLASS_CONTROL;
        const element = this.element;
        element.className = cssClasses;
        element.appendChild(button);

        this.callResetNorth_ = options.resetNorth ? options.resetNorth : undefined;

        /**
         * @type {number}
         * @private
         */
        this.duration_ = options.duration !== undefined ? options.duration : 250;

        /**
         * @type {boolean}
         * @private
         */
        this.autoHide_ = options.autoHide !== undefined ? options.autoHide : true;

        /**
         * @private
         * @type {number|undefined}
         */
        this.rotation_ = undefined;

        if (this.autoHide_) {
          this.element.classList.add(css.CLASS_HIDDEN);
        }
      }

      /**
       * @param {MouseEvent} event The event to handle
       * @private
       */
      handleClick_(event) {
        event.preventDefault();
        if (this.callResetNorth_ !== undefined) {
          this.callResetNorth_();
        } else {
          this.resetNorth_();
        }
      }

      /**
       * @private
       */
      resetNorth_() {
        const map = this.getMap();
        const view = map.getView();
        if (!view) {
          // the map does not have a view, so we can't act
          // upon it
          return;
        }
        const rotation = view.getRotation();
        if (rotation !== undefined) {
          if (this.duration_ > 0 && rotation % (2 * Math.PI) !== 0) {
            view.animate({
              rotation: 0,
              duration: this.duration_,
              easing: easing.easeOut,
            });
          } else {
            view.setRotation(0);
          }
        }
      }

      /**
       * Update the rotate control element.
       * @param {import("../MapEvent.js").default} mapEvent Map event.
       * @override
       */
      render(mapEvent) {
        const frameState = mapEvent.frameState;
        if (!frameState) {
          return;
        }
        const rotation = frameState.viewState.rotation;
        if (rotation != this.rotation_) {
          const transform = 'rotate(' + rotation + 'rad)';
          if (this.autoHide_) {
            const contains = this.element.classList.contains(css.CLASS_HIDDEN);
            if (!contains && rotation === 0) {
              this.element.classList.add(css.CLASS_HIDDEN);
            } else if (contains && rotation !== 0) {
              this.element.classList.remove(css.CLASS_HIDDEN);
            }
          }
          this.label_.style.transform = transform;
        }
        this.rotation_ = rotation;
      }
    }

    var Rotate$1 = Rotate;

    /**
     * @module ol/control/Zoom
     */

    /**
     * @typedef {Object} Options
     * @property {number} [duration=250] Animation duration in milliseconds.
     * @property {string} [className='ol-zoom'] CSS class name.
     * @property {string} [zoomInClassName=className + '-in'] CSS class name for the zoom-in button.
     * @property {string} [zoomOutClassName=className + '-out'] CSS class name for the zoom-out button.
     * @property {string|HTMLElement} [zoomInLabel='+'] Text label to use for the zoom-in
     * button. Instead of text, also an element (e.g. a `span` element) can be used.
     * @property {string|HTMLElement} [zoomOutLabel='–'] Text label to use for the zoom-out button.
     * Instead of text, also an element (e.g. a `span` element) can be used.
     * @property {string} [zoomInTipLabel='Zoom in'] Text label to use for the button tip.
     * @property {string} [zoomOutTipLabel='Zoom out'] Text label to use for the button tip.
     * @property {number} [delta=1] The zoom delta applied on each click.
     * @property {HTMLElement|string} [target] Specify a target if you want the control to be
     * rendered outside of the map's viewport.
     */

    /**
     * @classdesc
     * A control with 2 buttons, one for zoom in and one for zoom out.
     * This control is one of the default controls of a map. To style this control
     * use css selectors `.ol-zoom-in` and `.ol-zoom-out`.
     *
     * @api
     */
    class Zoom extends Control$1 {
      /**
       * @param {Options} [options] Zoom options.
       */
      constructor(options) {
        options = options ? options : {};

        super({
          element: document.createElement('div'),
          target: options.target,
        });

        const className =
          options.className !== undefined ? options.className : 'ol-zoom';

        const delta = options.delta !== undefined ? options.delta : 1;

        const zoomInClassName =
          options.zoomInClassName !== undefined
            ? options.zoomInClassName
            : className + '-in';

        const zoomOutClassName =
          options.zoomOutClassName !== undefined
            ? options.zoomOutClassName
            : className + '-out';

        const zoomInLabel =
          options.zoomInLabel !== undefined ? options.zoomInLabel : '+';
        const zoomOutLabel =
          options.zoomOutLabel !== undefined ? options.zoomOutLabel : '\u2013';

        const zoomInTipLabel =
          options.zoomInTipLabel !== undefined ? options.zoomInTipLabel : 'Zoom in';
        const zoomOutTipLabel =
          options.zoomOutTipLabel !== undefined
            ? options.zoomOutTipLabel
            : 'Zoom out';

        const inElement = document.createElement('button');
        inElement.className = zoomInClassName;
        inElement.setAttribute('type', 'button');
        inElement.title = zoomInTipLabel;
        inElement.appendChild(
          typeof zoomInLabel === 'string'
            ? document.createTextNode(zoomInLabel)
            : zoomInLabel
        );

        inElement.addEventListener(
          EventType.CLICK,
          this.handleClick_.bind(this, delta),
          false
        );

        const outElement = document.createElement('button');
        outElement.className = zoomOutClassName;
        outElement.setAttribute('type', 'button');
        outElement.title = zoomOutTipLabel;
        outElement.appendChild(
          typeof zoomOutLabel === 'string'
            ? document.createTextNode(zoomOutLabel)
            : zoomOutLabel
        );

        outElement.addEventListener(
          EventType.CLICK,
          this.handleClick_.bind(this, -delta),
          false
        );

        const cssClasses =
          className + ' ' + css.CLASS_UNSELECTABLE + ' ' + css.CLASS_CONTROL;
        const element = this.element;
        element.className = cssClasses;
        element.appendChild(inElement);
        element.appendChild(outElement);

        /**
         * @type {number}
         * @private
         */
        this.duration_ = options.duration !== undefined ? options.duration : 250;
      }

      /**
       * @param {number} delta Zoom delta.
       * @param {MouseEvent} event The event to handle
       * @private
       */
      handleClick_(delta, event) {
        event.preventDefault();
        this.zoomByDelta_(delta);
      }

      /**
       * @param {number} delta Zoom delta.
       * @private
       */
      zoomByDelta_(delta) {
        const map = this.getMap();
        const view = map.getView();
        if (!view) {
          // the map does not have a view, so we can't act
          // upon it
          return;
        }
        const currentZoom = view.getZoom();
        if (currentZoom !== undefined) {
          const newZoom = view.getConstrainedZoom(currentZoom + delta);
          if (this.duration_ > 0) {
            if (view.getAnimating()) {
              view.cancelAnimations();
            }
            view.animate({
              zoom: newZoom,
              duration: this.duration_,
              easing: easing.easeOut,
            });
          } else {
            view.setZoom(newZoom);
          }
        }
      }
    }

    var Zoom$1 = Zoom;

    /**
     * @module ol/control/defaults
     */

    /**
     * @typedef {Object} DefaultsOptions
     * @property {boolean} [attribution=true] Include
     * {@link module:ol/control/Attribution~Attribution}.
     * @property {import("./Attribution.js").Options} [attributionOptions]
     * Options for {@link module:ol/control/Attribution~Attribution}.
     * @property {boolean} [rotate=true] Include
     * {@link module:ol/control/Rotate~Rotate}.
     * @property {import("./Rotate.js").Options} [rotateOptions] Options
     * for {@link module:ol/control/Rotate~Rotate}.
     * @property {boolean} [zoom] Include {@link module:ol/control/Zoom~Zoom}.
     * @property {import("./Zoom.js").Options} [zoomOptions] Options for
     * {@link module:ol/control/Zoom~Zoom}.
     */

    /**
     * Set of controls included in maps by default. Unless configured otherwise,
     * this returns a collection containing an instance of each of the following
     * controls:
     * * {@link module:ol/control/Zoom~Zoom}
     * * {@link module:ol/control/Rotate~Rotate}
     * * {@link module:ol/control/Attribution~Attribution}
     *
     * @param {DefaultsOptions} [options] Options for the default controls.
     * @return {Collection<import("./Control.js").default>} A collection of controls
     * to be used with the {@link module:ol/Map~Map} constructor's `controls` option.
     * @api
     */
    function defaults$1(options) {
      options = options ? options : {};

      /** @type {Collection<import("./Control.js").default>} */
      const controls = new Collection["default"]();

      const zoomControl = options.zoom !== undefined ? options.zoom : true;
      if (zoomControl) {
        controls.push(new Zoom$1(options.zoomOptions));
      }

      const rotateControl = options.rotate !== undefined ? options.rotate : true;
      if (rotateControl) {
        controls.push(new Rotate$1(options.rotateOptions));
      }

      const attributionControl =
        options.attribution !== undefined ? options.attribution : true;
      if (attributionControl) {
        controls.push(new Attribution$1(options.attributionOptions));
      }

      return controls;
    }

    /**
     * @module ol/interaction/Property
     */

    /**
     * @enum {string}
     */
    var InteractionProperty = {
      ACTIVE: 'active',
    };

    /**
     * @module ol/interaction/Interaction
     */

    /***
     * @template Return
     * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
     *   import("../Observable").OnSignature<import("../ObjectEventType").Types|
     *     'change:active', import("../Object").ObjectEvent, Return> &
     *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("../ObjectEventType").Types|
     *     'change:active', Return>} InteractionOnSignature
     */

    /**
     * Object literal with config options for interactions.
     * @typedef {Object} InteractionOptions
     * @property {function(import("../MapBrowserEvent.js").default):boolean} handleEvent
     * Method called by the map to notify the interaction that a browser event was
     * dispatched to the map. If the function returns a falsy value, propagation of
     * the event to other interactions in the map's interactions chain will be
     * prevented (this includes functions with no explicit return). The interactions
     * are traversed in reverse order of the interactions collection of the map.
     */

    /**
     * @classdesc
     * Abstract base class; normally only used for creating subclasses and not
     * instantiated in apps.
     * User actions that change the state of the map. Some are similar to controls,
     * but are not associated with a DOM element.
     * For example, {@link module:ol/interaction/KeyboardZoom~KeyboardZoom} is
     * functionally the same as {@link module:ol/control/Zoom~Zoom}, but triggered
     * by a keyboard event not a button element event.
     * Although interactions do not have a DOM element, some of them do render
     * vectors and so are visible on the screen.
     * @api
     */
    class Interaction extends Object$1["default"] {
      /**
       * @param {InteractionOptions} [options] Options.
       */
      constructor(options) {
        super();

        /***
         * @type {InteractionOnSignature<import("../events").EventsKey>}
         */
        this.on;

        /***
         * @type {InteractionOnSignature<import("../events").EventsKey>}
         */
        this.once;

        /***
         * @type {InteractionOnSignature<void>}
         */
        this.un;

        if (options && options.handleEvent) {
          this.handleEvent = options.handleEvent;
        }

        /**
         * @private
         * @type {import("../Map.js").default|null}
         */
        this.map_ = null;

        this.setActive(true);
      }

      /**
       * Return whether the interaction is currently active.
       * @return {boolean} `true` if the interaction is active, `false` otherwise.
       * @observable
       * @api
       */
      getActive() {
        return /** @type {boolean} */ (this.get(InteractionProperty.ACTIVE));
      }

      /**
       * Get the map associated with this interaction.
       * @return {import("../Map.js").default|null} Map.
       * @api
       */
      getMap() {
        return this.map_;
      }

      /**
       * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event}.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
       * @return {boolean} `false` to stop event propagation.
       * @api
       */
      handleEvent(mapBrowserEvent) {
        return true;
      }

      /**
       * Activate or deactivate the interaction.
       * @param {boolean} active Active.
       * @observable
       * @api
       */
      setActive(active) {
        this.set(InteractionProperty.ACTIVE, active);
      }

      /**
       * Remove the interaction from its current map and attach it to the new map.
       * Subclasses may set up event handlers to get notified about changes to
       * the map here.
       * @param {import("../Map.js").default|null} map Map.
       */
      setMap(map) {
        this.map_ = map;
      }
    }

    /**
     * @param {import("../View.js").default} view View.
     * @param {import("../coordinate.js").Coordinate} delta Delta.
     * @param {number} [duration] Duration.
     */
    function pan(view, delta, duration) {
      const currentCenter = view.getCenterInternal();
      if (currentCenter) {
        const center = [currentCenter[0] + delta[0], currentCenter[1] + delta[1]];
        view.animateInternal({
          duration: duration !== undefined ? duration : 250,
          easing: easing.linear,
          center: view.getConstrainedCenter(center),
        });
      }
    }

    /**
     * @param {import("../View.js").default} view View.
     * @param {number} delta Delta from previous zoom level.
     * @param {import("../coordinate.js").Coordinate} [anchor] Anchor coordinate in the user projection.
     * @param {number} [duration] Duration.
     */
    function zoomByDelta(view, delta, anchor, duration) {
      const currentZoom = view.getZoom();

      if (currentZoom === undefined) {
        return;
      }

      const newZoom = view.getConstrainedZoom(currentZoom + delta);
      const newResolution = view.getResolutionForZoom(newZoom);

      if (view.getAnimating()) {
        view.cancelAnimations();
      }
      view.animate({
        resolution: newResolution,
        anchor: anchor,
        duration: duration !== undefined ? duration : 250,
        easing: easing.easeOut,
      });
    }

    var Interaction$1 = Interaction;

    /**
     * @module ol/interaction/DoubleClickZoom
     */

    /**
     * @typedef {Object} Options
     * @property {number} [duration=250] Animation duration in milliseconds.
     * @property {number} [delta=1] The zoom delta applied on each double click.
     */

    /**
     * @classdesc
     * Allows the user to zoom by double-clicking on the map.
     * @api
     */
    class DoubleClickZoom extends Interaction$1 {
      /**
       * @param {Options} [options] Options.
       */
      constructor(options) {
        super();

        options = options ? options : {};

        /**
         * @private
         * @type {number}
         */
        this.delta_ = options.delta ? options.delta : 1;

        /**
         * @private
         * @type {number}
         */
        this.duration_ = options.duration !== undefined ? options.duration : 250;
      }

      /**
       * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a
       * doubleclick) and eventually zooms the map.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
       * @return {boolean} `false` to stop event propagation.
       */
      handleEvent(mapBrowserEvent) {
        let stopEvent = false;
        if (mapBrowserEvent.type == MapBrowserEventType.DBLCLICK) {
          const browserEvent = /** @type {MouseEvent} */ (
            mapBrowserEvent.originalEvent
          );
          const map = mapBrowserEvent.map;
          const anchor = mapBrowserEvent.coordinate;
          const delta = browserEvent.shiftKey ? -this.delta_ : this.delta_;
          const view = map.getView();
          zoomByDelta(view, delta, anchor, this.duration_);
          browserEvent.preventDefault();
          stopEvent = true;
        }
        return !stopEvent;
      }
    }

    var DoubleClickZoom$1 = DoubleClickZoom;

    /**
     * @module ol/interaction/Pointer
     */

    /**
     * @typedef {Object} Options
     * @property {function(import("../MapBrowserEvent.js").default):boolean} [handleDownEvent]
     * Function handling "down" events. If the function returns `true` then a drag
     * sequence is started.
     * @property {function(import("../MapBrowserEvent.js").default):void} [handleDragEvent]
     * Function handling "drag" events. This function is called on "move" events
     * during a drag sequence.
     * @property {function(import("../MapBrowserEvent.js").default):boolean} [handleEvent]
     * Method called by the map to notify the interaction that a browser event was
     * dispatched to the map. The function may return `false` to prevent the
     * propagation of the event to other interactions in the map's interactions
     * chain.
     * @property {function(import("../MapBrowserEvent.js").default):void} [handleMoveEvent]
     * Function handling "move" events. This function is called on "move" events.
     * This functions is also called during a drag sequence, so during a drag
     * sequence both the `handleDragEvent` function and this function are called.
     * If `handleDownEvent` is defined and it returns true this function will not
     * be called during a drag sequence.
     * @property {function(import("../MapBrowserEvent.js").default):boolean} [handleUpEvent]
     *  Function handling "up" events. If the function returns `false` then the
     * current drag sequence is stopped.
     * @property {function(boolean):boolean} [stopDown]
     * Should the down event be propagated to other interactions, or should be
     * stopped?
     */

    /**
     * @classdesc
     * Base class that calls user-defined functions on `down`, `move` and `up`
     * events. This class also manages "drag sequences".
     *
     * When the `handleDownEvent` user function returns `true` a drag sequence is
     * started. During a drag sequence the `handleDragEvent` user function is
     * called on `move` events. The drag sequence ends when the `handleUpEvent`
     * user function is called and returns `false`.
     * @api
     */
    class PointerInteraction extends Interaction$1 {
      /**
       * @param {Options} [options] Options.
       */
      constructor(options) {
        options = options ? options : {};

        super(
          /** @type {import("./Interaction.js").InteractionOptions} */ (options)
        );

        if (options.handleDownEvent) {
          this.handleDownEvent = options.handleDownEvent;
        }

        if (options.handleDragEvent) {
          this.handleDragEvent = options.handleDragEvent;
        }

        if (options.handleMoveEvent) {
          this.handleMoveEvent = options.handleMoveEvent;
        }

        if (options.handleUpEvent) {
          this.handleUpEvent = options.handleUpEvent;
        }

        if (options.stopDown) {
          this.stopDown = options.stopDown;
        }

        /**
         * @type {boolean}
         * @protected
         */
        this.handlingDownUpSequence = false;

        /**
         * @type {Array<PointerEvent>}
         * @protected
         */
        this.targetPointers = [];
      }

      /**
       * Returns the current number of pointers involved in the interaction,
       * e.g. `2` when two fingers are used.
       * @return {number} The number of pointers.
       * @api
       */
      getPointerCount() {
        return this.targetPointers.length;
      }

      /**
       * Handle pointer down events.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       * @return {boolean} If the event was consumed.
       * @protected
       */
      handleDownEvent(mapBrowserEvent) {
        return false;
      }

      /**
       * Handle pointer drag events.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       * @protected
       */
      handleDragEvent(mapBrowserEvent) {}

      /**
       * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into
       * other functions, if event sequences like e.g. 'drag' or 'down-up' etc. are
       * detected.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
       * @return {boolean} `false` to stop event propagation.
       * @api
       */
      handleEvent(mapBrowserEvent) {
        if (!mapBrowserEvent.originalEvent) {
          return true;
        }

        let stopEvent = false;
        this.updateTrackedPointers_(mapBrowserEvent);
        if (this.handlingDownUpSequence) {
          if (mapBrowserEvent.type == MapBrowserEventType.POINTERDRAG) {
            this.handleDragEvent(mapBrowserEvent);
            // prevent page scrolling during dragging
            mapBrowserEvent.originalEvent.preventDefault();
          } else if (mapBrowserEvent.type == MapBrowserEventType.POINTERUP) {
            const handledUp = this.handleUpEvent(mapBrowserEvent);
            this.handlingDownUpSequence =
              handledUp && this.targetPointers.length > 0;
          }
        } else {
          if (mapBrowserEvent.type == MapBrowserEventType.POINTERDOWN) {
            const handled = this.handleDownEvent(mapBrowserEvent);
            this.handlingDownUpSequence = handled;
            stopEvent = this.stopDown(handled);
          } else if (mapBrowserEvent.type == MapBrowserEventType.POINTERMOVE) {
            this.handleMoveEvent(mapBrowserEvent);
          }
        }
        return !stopEvent;
      }

      /**
       * Handle pointer move events.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       * @protected
       */
      handleMoveEvent(mapBrowserEvent) {}

      /**
       * Handle pointer up events.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       * @return {boolean} If the event was consumed.
       * @protected
       */
      handleUpEvent(mapBrowserEvent) {
        return false;
      }

      /**
       * This function is used to determine if "down" events should be propagated
       * to other interactions or should be stopped.
       * @param {boolean} handled Was the event handled by the interaction?
       * @return {boolean} Should the `down` event be stopped?
       */
      stopDown(handled) {
        return handled;
      }

      /**
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       * @private
       */
      updateTrackedPointers_(mapBrowserEvent) {
        if (mapBrowserEvent.activePointers) {
          this.targetPointers = mapBrowserEvent.activePointers;
        }
      }
    }

    /**
     * @param {Array<PointerEvent>} pointerEvents List of events.
     * @return {{clientX: number, clientY: number}} Centroid pixel.
     */
    function centroid(pointerEvents) {
      const length = pointerEvents.length;
      let clientX = 0;
      let clientY = 0;
      for (let i = 0; i < length; i++) {
        clientX += pointerEvents[i].clientX;
        clientY += pointerEvents[i].clientY;
      }
      return {clientX: clientX / length, clientY: clientY / length};
    }

    var Pointer["default"] = PointerInteraction;

    /**
     * @module ol/events/condition
     */

    /**
     * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
     * `{boolean}`. If the condition is met, true should be returned.
     *
     * @typedef {function(this: ?, import("../MapBrowserEvent.js").default): boolean} Condition
     */

    /**
     * Creates a condition function that passes when all provided conditions pass.
     * @param {...Condition} var_args Conditions to check.
     * @return {Condition} Condition function.
     */
    function all(var_args) {
      const conditions = arguments;
      /**
       * @param {import("../MapBrowserEvent.js").default} event Event.
       * @return {boolean} All conditions passed.
       */
      return function (event) {
        let pass = true;
        for (let i = 0, ii = conditions.length; i < ii; ++i) {
          pass = pass && conditions[i](event);
          if (!pass) {
            break;
          }
        }
        return pass;
      };
    }

    /**
     * Return `true` if only the alt-key and shift-key is pressed, `false` otherwise
     * (e.g. when additionally the platform-modifier-key is pressed).
     *
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} True if only the alt and shift keys are pressed.
     * @api
     */
    const altShiftKeysOnly = function (mapBrowserEvent) {
      const originalEvent = /** @type {KeyboardEvent|MouseEvent|TouchEvent} */ (
        mapBrowserEvent.originalEvent
      );
      return (
        originalEvent.altKey &&
        !(originalEvent.metaKey || originalEvent.ctrlKey) &&
        originalEvent.shiftKey
      );
    };

    /**
     * Return `true` if the map has the focus. This condition requires a map target
     * element with a `tabindex` attribute, e.g. `<div id="map" tabindex="1">`.
     *
     * @param {import("../MapBrowserEvent.js").default} event Map browser event.
     * @return {boolean} The map has the focus.
     * @api
     */
    const focus = function (event) {
      const targetElement = event.map.getTargetElement();
      const activeElement = event.map.getOwnerDocument().activeElement;
      return targetElement.contains(activeElement);
    };

    /**
     * Return `true` if the map has the focus or no 'tabindex' attribute set.
     *
     * @param {import("../MapBrowserEvent.js").default} event Map browser event.
     * @return {boolean} The map container has the focus or no 'tabindex' attribute.
     */
    const focusWithTabindex = function (event) {
      return event.map.getTargetElement().hasAttribute('tabindex')
        ? focus(event)
        : true;
    };

    /**
     * Return always true.
     *
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} True.
     * @api
     */
    const always = functions.TRUE;

    /**
     * Return `true` if the event has an "action"-producing mouse button.
     *
     * By definition, this includes left-click on windows/linux, and left-click
     * without the ctrl key on Macs.
     *
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} The result.
     */
    const condition.mouseActionButton = function (mapBrowserEvent) {
      const originalEvent = /** @type {MouseEvent} */ (
        mapBrowserEvent.originalEvent
      );
      return originalEvent.button == 0 && !(has.WEBKIT && has.MAC && originalEvent.ctrlKey);
    };

    /**
     * Return `true` if no modifier key (alt-, shift- or platform-modifier-key) is
     * pressed.
     *
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} True only if there no modifier keys are pressed.
     * @api
     */
    const noModifierKeys = function (mapBrowserEvent) {
      const originalEvent = /** @type {KeyboardEvent|MouseEvent|TouchEvent} */ (
        mapBrowserEvent.originalEvent
      );
      return (
        !originalEvent.altKey &&
        !(originalEvent.metaKey || originalEvent.ctrlKey) &&
        !originalEvent.shiftKey
      );
    };

    /**
     * Return `true` if only the shift-key is pressed, `false` otherwise (e.g. when
     * additionally the alt-key is pressed).
     *
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} True if only the shift key is pressed.
     * @api
     */
    const shiftKeyOnly = function (mapBrowserEvent) {
      const originalEvent = /** @type {KeyboardEvent|MouseEvent|TouchEvent} */ (
        mapBrowserEvent.originalEvent
      );
      return (
        !originalEvent.altKey &&
        !(originalEvent.metaKey || originalEvent.ctrlKey) &&
        originalEvent.shiftKey
      );
    };

    /**
     * Return `true` if the target element is not editable, i.e. not an `input`,
     * `select`, or `textarea` element and no `contenteditable` attribute is
     * set or inherited, `false` otherwise.
     *
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} True only if the target element is not editable.
     * @api
     */
    const targetNotEditable = function (mapBrowserEvent) {
      const originalEvent = /** @type {KeyboardEvent|MouseEvent|TouchEvent} */ (
        mapBrowserEvent.originalEvent
      );
      const tagName = /** @type {Element} */ (originalEvent.target).tagName;
      return (
        tagName !== 'INPUT' &&
        tagName !== 'SELECT' &&
        tagName !== 'TEXTAREA' &&
        // `isContentEditable` is only available on `HTMLElement`, but it may also be a
        // different type like `SVGElement`.
        // @ts-ignore
        !originalEvent.target.isContentEditable
      );
    };

    /**
     * Return `true` if the event originates from a mouse device.
     *
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} True if the event originates from a mouse device.
     * @api
     */
    const mouseOnly = function (mapBrowserEvent) {
      const pointerEvent = /** @type {import("../MapBrowserEvent").default} */ (
        mapBrowserEvent
      ).originalEvent;
      asserts.assert(pointerEvent !== undefined, 56); // mapBrowserEvent must originate from a pointer event
      // see https://www.w3.org/TR/pointerevents/#widl-PointerEvent-pointerType
      return pointerEvent.pointerType == 'mouse';
    };

    /**
     * Return `true` if the event originates from a primary pointer in
     * contact with the surface or if the left mouse button is pressed.
     * See https://www.w3.org/TR/pointerevents/#button-states.
     *
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} True if the event originates from a primary pointer.
     * @api
     */
    const primaryAction = function (mapBrowserEvent) {
      const pointerEvent = /** @type {import("../MapBrowserEvent").default} */ (
        mapBrowserEvent
      ).originalEvent;
      asserts.assert(pointerEvent !== undefined, 56); // mapBrowserEvent must originate from a pointer event
      return pointerEvent.isPrimary && pointerEvent.button === 0;
    };

    /**
     * @module ol/interaction/DragPan
     */

    /**
     * @typedef {Object} Options
     * @property {import("../events/condition.js").Condition} [condition] A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
     * to indicate whether that event should be handled.
     * Default is {@link module:ol/events/condition.noModifierKeys} and {@link module:ol/events/condition.primaryAction}.
     * @property {boolean} [onFocusOnly=false] When the map's target has a `tabindex` attribute set,
     * the interaction will only handle events when the map has the focus.
     * @property {import("../Kinetic.js").default} [kinetic] Kinetic inertia to apply to the pan.
     */

    /**
     * @classdesc
     * Allows the user to pan the map by dragging the map.
     * @api
     */
    class DragPan extends Pointer["default"] {
      /**
       * @param {Options} [options] Options.
       */
      constructor(options) {
        super({
          stopDown: functions.FALSE,
        });

        options = options ? options : {};

        /**
         * @private
         * @type {import("../Kinetic.js").default|undefined}
         */
        this.kinetic_ = options.kinetic;

        /**
         * @type {import("../pixel.js").Pixel}
         */
        this.lastCentroid = null;

        /**
         * @type {number}
         */
        this.lastPointersCount_;

        /**
         * @type {boolean}
         */
        this.panning_ = false;

        const condition = options.condition
          ? options.condition
          : all(noModifierKeys, primaryAction);

        /**
         * @private
         * @type {import("../events/condition.js").Condition}
         */
        this.condition_ = options.onFocusOnly
          ? all(focusWithTabindex, condition)
          : condition;

        /**
         * @private
         * @type {boolean}
         */
        this.noKinetic_ = false;
      }

      /**
       * Handle pointer drag events.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       */
      handleDragEvent(mapBrowserEvent) {
        const map = mapBrowserEvent.map;
        if (!this.panning_) {
          this.panning_ = true;
          map.getView().beginInteraction();
        }
        const targetPointers = this.targetPointers;
        const centroid$1 = map.getEventPixel(centroid(targetPointers));
        if (targetPointers.length == this.lastPointersCount_) {
          if (this.kinetic_) {
            this.kinetic_.update(centroid$1[0], centroid$1[1]);
          }
          if (this.lastCentroid) {
            const delta = [
              this.lastCentroid[0] - centroid$1[0],
              centroid$1[1] - this.lastCentroid[1],
            ];
            const map = mapBrowserEvent.map;
            const view = map.getView();
            coordinate.scale(delta, view.getResolution());
            coordinate.rotate(delta, view.getRotation());
            view.adjustCenterInternal(delta);
          }
        } else if (this.kinetic_) {
          // reset so we don't overestimate the kinetic energy after
          // after one finger down, tiny drag, second finger down
          this.kinetic_.begin();
        }
        this.lastCentroid = centroid$1;
        this.lastPointersCount_ = targetPointers.length;
        mapBrowserEvent.originalEvent.preventDefault();
      }

      /**
       * Handle pointer up events.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       * @return {boolean} If the event was consumed.
       */
      handleUpEvent(mapBrowserEvent) {
        const map = mapBrowserEvent.map;
        const view = map.getView();
        if (this.targetPointers.length === 0) {
          if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
            const distance = this.kinetic_.getDistance();
            const angle = this.kinetic_.getAngle();
            const center = view.getCenterInternal();
            const centerpx = map.getPixelFromCoordinateInternal(center);
            const dest = map.getCoordinateFromPixelInternal([
              centerpx[0] - distance * Math.cos(angle),
              centerpx[1] - distance * Math.sin(angle),
            ]);
            view.animateInternal({
              center: view.getConstrainedCenter(dest),
              duration: 500,
              easing: easing.easeOut,
            });
          }
          if (this.panning_) {
            this.panning_ = false;
            view.endInteraction();
          }
          return false;
        }
        if (this.kinetic_) {
          // reset so we don't overestimate the kinetic energy after
          // after one finger up, tiny drag, second finger up
          this.kinetic_.begin();
        }
        this.lastCentroid = null;
        return true;
      }

      /**
       * Handle pointer down events.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       * @return {boolean} If the event was consumed.
       */
      handleDownEvent(mapBrowserEvent) {
        if (this.targetPointers.length > 0 && this.condition_(mapBrowserEvent)) {
          const map = mapBrowserEvent.map;
          const view = map.getView();
          this.lastCentroid = null;
          // stop any current animation
          if (view.getAnimating()) {
            view.cancelAnimations();
          }
          if (this.kinetic_) {
            this.kinetic_.begin();
          }
          // No kinetic as soon as more than one pointer on the screen is
          // detected. This is to prevent nasty pans after pinch.
          this.noKinetic_ = this.targetPointers.length > 1;
          return true;
        }
        return false;
      }
    }

    var DragPan$1 = DragPan;

    /**
     * @module ol/interaction/DragRotate
     */

    /**
     * @typedef {Object} Options
     * @property {import("../events/condition.js").Condition} [condition] A function that takes an
     * {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
     * to indicate whether that event should be handled.
     * Default is {@link module:ol/events/condition.altShiftKeysOnly}.
     * @property {number} [duration=250] Animation duration in milliseconds.
     */

    /**
     * @classdesc
     * Allows the user to rotate the map by clicking and dragging on the map,
     * normally combined with an {@link module:ol/events/condition} that limits
     * it to when the alt and shift keys are held down.
     *
     * This interaction is only supported for mouse devices.
     * @api
     */
    class DragRotate extends Pointer["default"] {
      /**
       * @param {Options} [options] Options.
       */
      constructor(options) {
        options = options ? options : {};

        super({
          stopDown: functions.FALSE,
        });

        /**
         * @private
         * @type {import("../events/condition.js").Condition}
         */
        this.condition_ = options.condition ? options.condition : altShiftKeysOnly;

        /**
         * @private
         * @type {number|undefined}
         */
        this.lastAngle_ = undefined;

        /**
         * @private
         * @type {number}
         */
        this.duration_ = options.duration !== undefined ? options.duration : 250;
      }

      /**
       * Handle pointer drag events.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       */
      handleDragEvent(mapBrowserEvent) {
        if (!mouseOnly(mapBrowserEvent)) {
          return;
        }

        const map = mapBrowserEvent.map;
        const view = map.getView();
        if (view.getConstraints().rotation === rotationconstraint.disable) {
          return;
        }
        const size = map.getSize();
        const offset = mapBrowserEvent.pixel;
        const theta = Math.atan2(size[1] / 2 - offset[1], offset[0] - size[0] / 2);
        if (this.lastAngle_ !== undefined) {
          const delta = theta - this.lastAngle_;
          view.adjustRotationInternal(-delta);
        }
        this.lastAngle_ = theta;
      }

      /**
       * Handle pointer up events.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       * @return {boolean} If the event was consumed.
       */
      handleUpEvent(mapBrowserEvent) {
        if (!mouseOnly(mapBrowserEvent)) {
          return true;
        }

        const map = mapBrowserEvent.map;
        const view = map.getView();
        view.endInteraction(this.duration_);
        return false;
      }

      /**
       * Handle pointer down events.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       * @return {boolean} If the event was consumed.
       */
      handleDownEvent(mapBrowserEvent) {
        if (!mouseOnly(mapBrowserEvent)) {
          return false;
        }

        if (
          condition.mouseActionButton(mapBrowserEvent) &&
          this.condition_(mapBrowserEvent)
        ) {
          const map = mapBrowserEvent.map;
          map.getView().beginInteraction();
          this.lastAngle_ = undefined;
          return true;
        }
        return false;
      }
    }

    var DragRotate$1 = DragRotate;

    /**
     * @module ol/render/Box
     */

    class RenderBox extends Disposable$1 {
      /**
       * @param {string} className CSS class name.
       */
      constructor(className) {
        super();

        /**
         * @type {import("../geom/Polygon.js").default}
         * @private
         */
        this.geometry_ = null;

        /**
         * @type {HTMLDivElement}
         * @private
         */
        this.element_ = document.createElement('div');
        this.element_.style.position = 'absolute';
        this.element_.style.pointerEvents = 'auto';
        this.element_.className = 'ol-box ' + className;

        /**
         * @private
         * @type {import("../Map.js").default|null}
         */
        this.map_ = null;

        /**
         * @private
         * @type {import("../pixel.js").Pixel}
         */
        this.startPixel_ = null;

        /**
         * @private
         * @type {import("../pixel.js").Pixel}
         */
        this.endPixel_ = null;
      }

      /**
       * Clean up.
       */
      disposeInternal() {
        this.setMap(null);
      }

      /**
       * @private
       */
      render_() {
        const startPixel = this.startPixel_;
        const endPixel = this.endPixel_;
        const px = 'px';
        const style = this.element_.style;
        style.left = Math.min(startPixel[0], endPixel[0]) + px;
        style.top = Math.min(startPixel[1], endPixel[1]) + px;
        style.width = Math.abs(endPixel[0] - startPixel[0]) + px;
        style.height = Math.abs(endPixel[1] - startPixel[1]) + px;
      }

      /**
       * @param {import("../Map.js").default|null} map Map.
       */
      setMap(map) {
        if (this.map_) {
          this.map_.getOverlayContainer().removeChild(this.element_);
          const style = this.element_.style;
          style.left = 'inherit';
          style.top = 'inherit';
          style.width = 'inherit';
          style.height = 'inherit';
        }
        this.map_ = map;
        if (this.map_) {
          this.map_.getOverlayContainer().appendChild(this.element_);
        }
      }

      /**
       * @param {import("../pixel.js").Pixel} startPixel Start pixel.
       * @param {import("../pixel.js").Pixel} endPixel End pixel.
       */
      setPixels(startPixel, endPixel) {
        this.startPixel_ = startPixel;
        this.endPixel_ = endPixel;
        this.createOrUpdateGeometry();
        this.render_();
      }

      /**
       * Creates or updates the cached geometry.
       */
      createOrUpdateGeometry() {
        const startPixel = this.startPixel_;
        const endPixel = this.endPixel_;
        const pixels = [
          startPixel,
          [startPixel[0], endPixel[1]],
          endPixel,
          [endPixel[0], startPixel[1]],
        ];
        const coordinates = pixels.map(
          this.map_.getCoordinateFromPixelInternal,
          this.map_
        );
        // close the polygon
        coordinates[4] = coordinates[0].slice();
        if (!this.geometry_) {
          this.geometry_ = new Polygon["default"]([coordinates]);
        } else {
          this.geometry_.setCoordinates([coordinates]);
        }
      }

      /**
       * @return {import("../geom/Polygon.js").default} Geometry.
       */
      getGeometry() {
        return this.geometry_;
      }
    }

    var RenderBox$1 = RenderBox;

    /**
     * @module ol/interaction/DragBox
     */

    /**
     * A function that takes a {@link module:ol/MapBrowserEvent~MapBrowserEvent} and two
     * {@link module:ol/pixel~Pixel}s and returns a `{boolean}`. If the condition is met,
     * true should be returned.
     * @typedef {function(this: ?, import("../MapBrowserEvent.js").default, import("../pixel.js").Pixel, import("../pixel.js").Pixel):boolean} EndCondition
     */

    /**
     * @typedef {Object} Options
     * @property {string} [className='ol-dragbox'] CSS class name for styling the box.
     * @property {import("../events/condition.js").Condition} [condition] A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
     * to indicate whether that event should be handled.
     * Default is {@link ol/events/condition~mouseActionButton}.
     * @property {number} [minArea=64] The minimum area of the box in pixel, this value is used by the default
     * `boxEndCondition` function.
     * @property {EndCondition} [boxEndCondition] A function that takes a {@link module:ol/MapBrowserEvent~MapBrowserEvent} and two
     * {@link module:ol/pixel~Pixel}s to indicate whether a `boxend` event should be fired.
     * Default is `true` if the area of the box is bigger than the `minArea` option.
     * @property {function(this:DragBox, import("../MapBrowserEvent.js").default):void} [onBoxEnd] Code to execute just
     * before `boxend` is fired.
     */

    /**
     * @enum {string}
     */
    const DragBoxEventType = {
      /**
       * Triggered upon drag box start.
       * @event DragBoxEvent#boxstart
       * @api
       */
      BOXSTART: 'boxstart',

      /**
       * Triggered on drag when box is active.
       * @event DragBoxEvent#boxdrag
       * @api
       */
      BOXDRAG: 'boxdrag',

      /**
       * Triggered upon drag box end.
       * @event DragBoxEvent#boxend
       * @api
       */
      BOXEND: 'boxend',

      /**
       * Triggered upon drag box canceled.
       * @event DragBoxEvent#boxcancel
       * @api
       */
      BOXCANCEL: 'boxcancel',
    };

    /**
     * @classdesc
     * Events emitted by {@link module:ol/interaction/DragBox~DragBox} instances are instances of
     * this type.
     */
    class DragBoxEvent extends Event {
      /**
       * @param {string} type The event type.
       * @param {import("../coordinate.js").Coordinate} coordinate The event coordinate.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Originating event.
       */
      constructor(type, coordinate, mapBrowserEvent) {
        super(type);

        /**
         * The coordinate of the drag event.
         * @const
         * @type {import("../coordinate.js").Coordinate}
         * @api
         */
        this.coordinate = coordinate;

        /**
         * @const
         * @type {import("../MapBrowserEvent.js").default}
         * @api
         */
        this.mapBrowserEvent = mapBrowserEvent;
      }
    }

    /***
     * @template Return
     * @typedef {import("../Observable").OnSignature<import("../Observable").EventTypes, import("../events/Event.js").default, Return> &
     *   import("../Observable").OnSignature<import("../ObjectEventType").Types|
     *     'change:active', import("../Object").ObjectEvent, Return> &
     *   import("../Observable").OnSignature<'boxcancel'|'boxdrag'|'boxend'|'boxstart', DragBoxEvent, Return> &
     *   import("../Observable").CombinedOnSignature<import("../Observable").EventTypes|import("../ObjectEventType").Types|
     *     'change:active'|'boxcancel'|'boxdrag'|'boxend', Return>} DragBoxOnSignature
     */

    /**
     * @classdesc
     * Allows the user to draw a vector box by clicking and dragging on the map,
     * normally combined with an {@link module:ol/events/condition} that limits
     * it to when the shift or other key is held down. This is used, for example,
     * for zooming to a specific area of the map
     * (see {@link module:ol/interaction/DragZoom~DragZoom} and
     * {@link module:ol/interaction/DragRotateAndZoom~DragRotateAndZoom}).
     *
     * @fires DragBoxEvent
     * @api
     */
    class DragBox extends Pointer["default"] {
      /**
       * @param {Options} [options] Options.
       */
      constructor(options) {
        super();

        /***
         * @type {DragBoxOnSignature<import("../events").EventsKey>}
         */
        this.on;

        /***
         * @type {DragBoxOnSignature<import("../events").EventsKey>}
         */
        this.once;

        /***
         * @type {DragBoxOnSignature<void>}
         */
        this.un;

        options = options ? options : {};

        /**
         * @type {import("../render/Box.js").default}
         * @private
         */
        this.box_ = new RenderBox$1(options.className || 'ol-dragbox');

        /**
         * @type {number}
         * @private
         */
        this.minArea_ = options.minArea !== undefined ? options.minArea : 64;

        if (options.onBoxEnd) {
          this.onBoxEnd = options.onBoxEnd;
        }

        /**
         * @type {import("../pixel.js").Pixel}
         * @private
         */
        this.startPixel_ = null;

        /**
         * @private
         * @type {import("../events/condition.js").Condition}
         */
        this.condition_ = options.condition ? options.condition : condition.mouseActionButton;

        /**
         * @private
         * @type {EndCondition}
         */
        this.boxEndCondition_ = options.boxEndCondition
          ? options.boxEndCondition
          : this.defaultBoxEndCondition;
      }

      /**
       * The default condition for determining whether the boxend event
       * should fire.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent The originating MapBrowserEvent
       *     leading to the box end.
       * @param {import("../pixel.js").Pixel} startPixel The starting pixel of the box.
       * @param {import("../pixel.js").Pixel} endPixel The end pixel of the box.
       * @return {boolean} Whether or not the boxend condition should be fired.
       */
      defaultBoxEndCondition(mapBrowserEvent, startPixel, endPixel) {
        const width = endPixel[0] - startPixel[0];
        const height = endPixel[1] - startPixel[1];
        return width * width + height * height >= this.minArea_;
      }

      /**
       * Returns geometry of last drawn box.
       * @return {import("../geom/Polygon.js").default} Geometry.
       * @api
       */
      getGeometry() {
        return this.box_.getGeometry();
      }

      /**
       * Handle pointer drag events.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       */
      handleDragEvent(mapBrowserEvent) {
        this.box_.setPixels(this.startPixel_, mapBrowserEvent.pixel);

        this.dispatchEvent(
          new DragBoxEvent(
            DragBoxEventType.BOXDRAG,
            mapBrowserEvent.coordinate,
            mapBrowserEvent
          )
        );
      }

      /**
       * Handle pointer up events.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       * @return {boolean} If the event was consumed.
       */
      handleUpEvent(mapBrowserEvent) {
        this.box_.setMap(null);

        const completeBox = this.boxEndCondition_(
          mapBrowserEvent,
          this.startPixel_,
          mapBrowserEvent.pixel
        );
        if (completeBox) {
          this.onBoxEnd(mapBrowserEvent);
        }
        this.dispatchEvent(
          new DragBoxEvent(
            completeBox ? DragBoxEventType.BOXEND : DragBoxEventType.BOXCANCEL,
            mapBrowserEvent.coordinate,
            mapBrowserEvent
          )
        );
        return false;
      }

      /**
       * Handle pointer down events.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       * @return {boolean} If the event was consumed.
       */
      handleDownEvent(mapBrowserEvent) {
        if (this.condition_(mapBrowserEvent)) {
          this.startPixel_ = mapBrowserEvent.pixel;
          this.box_.setMap(mapBrowserEvent.map);
          this.box_.setPixels(this.startPixel_, this.startPixel_);
          this.dispatchEvent(
            new DragBoxEvent(
              DragBoxEventType.BOXSTART,
              mapBrowserEvent.coordinate,
              mapBrowserEvent
            )
          );
          return true;
        }
        return false;
      }

      /**
       * Function to execute just before `onboxend` is fired
       * @param {import("../MapBrowserEvent.js").default} event Event.
       */
      onBoxEnd(event) {}
    }

    var DragBox$1 = DragBox;

    /**
     * @module ol/interaction/DragZoom
     */

    /**
     * @typedef {Object} Options
     * @property {string} [className='ol-dragzoom'] CSS class name for styling the
     * box.
     * @property {import("../events/condition.js").Condition} [condition] A function that
     * takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
     * boolean to indicate whether that event should be handled.
     * Default is {@link module:ol/events/condition.shiftKeyOnly}.
     * @property {number} [duration=200] Animation duration in milliseconds.
     * @property {boolean} [out=false] Use interaction for zooming out.
     * @property {number} [minArea=64] The minimum area of the box in pixel, this value is used by the parent default
     * `boxEndCondition` function.
     */

    /**
     * @classdesc
     * Allows the user to zoom the map by clicking and dragging on the map,
     * normally combined with an {@link module:ol/events/condition} that limits
     * it to when a key, shift by default, is held down.
     *
     * To change the style of the box, use CSS and the `.ol-dragzoom` selector, or
     * your custom one configured with `className`.
     * @api
     */
    class DragZoom extends DragBox$1 {
      /**
       * @param {Options} [options] Options.
       */
      constructor(options) {
        options = options ? options : {};

        const condition = options.condition ? options.condition : shiftKeyOnly;

        super({
          condition: condition,
          className: options.className || 'ol-dragzoom',
          minArea: options.minArea,
        });

        /**
         * @private
         * @type {number}
         */
        this.duration_ = options.duration !== undefined ? options.duration : 200;

        /**
         * @private
         * @type {boolean}
         */
        this.out_ = options.out !== undefined ? options.out : false;
      }

      /**
       * Function to execute just before `onboxend` is fired
       * @param {import("../MapBrowserEvent.js").default} event Event.
       */
      onBoxEnd(event) {
        const map = this.getMap();
        const view = /** @type {!import("../View.js").default} */ (map.getView());
        let geometry = this.getGeometry();

        if (this.out_) {
          const rotatedExtent = view.rotatedExtentForGeometry(geometry);
          const resolution = view.getResolutionForExtentInternal(rotatedExtent);
          const factor = view.getResolution() / resolution;
          geometry = geometry.clone();
          geometry.scale(factor * factor);
        }

        view.fitInternal(geometry, {
          duration: this.duration_,
          easing: easing.easeOut,
        });
      }
    }

    var DragZoom$1 = DragZoom;

    /**
     * @module ol/events/KeyCode
     */

    /**
     * @enum {number}
     * @const
     */
    var KeyCode = {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
    };

    /**
     * @module ol/interaction/KeyboardPan
     */

    /**
     * @typedef {Object} Options
     * @property {import("../events/condition.js").Condition} [condition] A function that
     * takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
     * boolean to indicate whether that event should be handled. Default is
     * {@link module:ol/events/condition.noModifierKeys} and
     * {@link module:ol/events/condition.targetNotEditable}.
     * @property {number} [duration=100] Animation duration in milliseconds.
     * @property {number} [pixelDelta=128] The amount of pixels to pan on each key
     * press.
     */

    /**
     * @classdesc
     * Allows the user to pan the map using keyboard arrows.
     * Note that, although this interaction is by default included in maps,
     * the keys can only be used when browser focus is on the element to which
     * the keyboard events are attached. By default, this is the map div,
     * though you can change this with the `keyboardEventTarget` in
     * {@link module:ol/Map~Map}. `document` never loses focus but, for any other
     * element, focus will have to be on, and returned to, this element if the keys
     * are to function.
     * See also {@link module:ol/interaction/KeyboardZoom~KeyboardZoom}.
     * @api
     */
    class KeyboardPan extends Interaction$1 {
      /**
       * @param {Options} [options] Options.
       */
      constructor(options) {
        super();

        options = options || {};

        /**
         * @private
         * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Browser event.
         * @return {boolean} Combined condition result.
         */
        this.defaultCondition_ = function (mapBrowserEvent) {
          return (
            noModifierKeys(mapBrowserEvent) && targetNotEditable(mapBrowserEvent)
          );
        };

        /**
         * @private
         * @type {import("../events/condition.js").Condition}
         */
        this.condition_ =
          options.condition !== undefined
            ? options.condition
            : this.defaultCondition_;

        /**
         * @private
         * @type {number}
         */
        this.duration_ = options.duration !== undefined ? options.duration : 100;

        /**
         * @private
         * @type {number}
         */
        this.pixelDelta_ =
          options.pixelDelta !== undefined ? options.pixelDelta : 128;
      }

      /**
       * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
       * `KeyEvent`, and decides the direction to pan to (if an arrow key was
       * pressed).
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
       * @return {boolean} `false` to stop event propagation.
       */
      handleEvent(mapBrowserEvent) {
        let stopEvent = false;
        if (mapBrowserEvent.type == EventType.KEYDOWN) {
          const keyEvent = /** @type {KeyboardEvent} */ (
            mapBrowserEvent.originalEvent
          );
          const keyCode = keyEvent.keyCode;
          if (
            this.condition_(mapBrowserEvent) &&
            (keyCode == KeyCode.DOWN ||
              keyCode == KeyCode.LEFT ||
              keyCode == KeyCode.RIGHT ||
              keyCode == KeyCode.UP)
          ) {
            const map = mapBrowserEvent.map;
            const view = map.getView();
            const mapUnitsDelta = view.getResolution() * this.pixelDelta_;
            let deltaX = 0,
              deltaY = 0;
            if (keyCode == KeyCode.DOWN) {
              deltaY = -mapUnitsDelta;
            } else if (keyCode == KeyCode.LEFT) {
              deltaX = -mapUnitsDelta;
            } else if (keyCode == KeyCode.RIGHT) {
              deltaX = mapUnitsDelta;
            } else {
              deltaY = mapUnitsDelta;
            }
            const delta = [deltaX, deltaY];
            coordinate.rotate(delta, view.getRotation());
            pan(view, delta, this.duration_);
            keyEvent.preventDefault();
            stopEvent = true;
          }
        }
        return !stopEvent;
      }
    }

    var KeyboardPan$1 = KeyboardPan;

    /**
     * @module ol/interaction/KeyboardZoom
     */

    /**
     * @typedef {Object} Options
     * @property {number} [duration=100] Animation duration in milliseconds.
     * @property {import("../events/condition.js").Condition} [condition] A function that
     * takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
     * boolean to indicate whether that event should be handled. Default is
     * {@link module:ol/events/condition.targetNotEditable}.
     * @property {number} [delta=1] The zoom level delta on each key press.
     */

    /**
     * @classdesc
     * Allows the user to zoom the map using keyboard + and -.
     * Note that, although this interaction is by default included in maps,
     * the keys can only be used when browser focus is on the element to which
     * the keyboard events are attached. By default, this is the map div,
     * though you can change this with the `keyboardEventTarget` in
     * {@link module:ol/Map~Map}. `document` never loses focus but, for any other
     * element, focus will have to be on, and returned to, this element if the keys
     * are to function.
     * See also {@link module:ol/interaction/KeyboardPan~KeyboardPan}.
     * @api
     */
    class KeyboardZoom extends Interaction$1 {
      /**
       * @param {Options} [options] Options.
       */
      constructor(options) {
        super();

        options = options ? options : {};

        /**
         * @private
         * @type {import("../events/condition.js").Condition}
         */
        this.condition_ = options.condition ? options.condition : targetNotEditable;

        /**
         * @private
         * @type {number}
         */
        this.delta_ = options.delta ? options.delta : 1;

        /**
         * @private
         * @type {number}
         */
        this.duration_ = options.duration !== undefined ? options.duration : 100;
      }

      /**
       * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
       * `KeyEvent`, and decides whether to zoom in or out (depending on whether the
       * key pressed was '+' or '-').
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
       * @return {boolean} `false` to stop event propagation.
       */
      handleEvent(mapBrowserEvent) {
        let stopEvent = false;
        if (
          mapBrowserEvent.type == EventType.KEYDOWN ||
          mapBrowserEvent.type == EventType.KEYPRESS
        ) {
          const keyEvent = /** @type {KeyboardEvent} */ (
            mapBrowserEvent.originalEvent
          );
          const key = keyEvent.key;
          if (this.condition_(mapBrowserEvent) && (key === '+' || key === '-')) {
            const map = mapBrowserEvent.map;
            const delta = key === '+' ? this.delta_ : -this.delta_;
            const view = map.getView();
            zoomByDelta(view, delta, undefined, this.duration_);
            keyEvent.preventDefault();
            stopEvent = true;
          }
        }
        return !stopEvent;
      }
    }

    var KeyboardZoom$1 = KeyboardZoom;

    /**
     * @module ol/interaction/MouseWheelZoom
     */

    /**
     * @typedef {'trackpad' | 'wheel'} Mode
     */

    /**
     * @typedef {Object} Options
     * @property {import("../events/condition.js").Condition} [condition] A function that
     * takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a
     * boolean to indicate whether that event should be handled. Default is
     * {@link module:ol/events/condition.always}.
     * @property {boolean} [onFocusOnly=false] When the map's target has a `tabindex` attribute set,
     * the interaction will only handle events when the map has the focus.
     * @property {number} [maxDelta=1] Maximum mouse wheel delta.
     * @property {number} [duration=250] Animation duration in milliseconds.
     * @property {number} [timeout=80] Mouse wheel timeout duration in milliseconds.
     * @property {boolean} [useAnchor=true] Enable zooming using the mouse's
     * location as the anchor. When set to `false`, zooming in and out will zoom to
     * the center of the screen instead of zooming on the mouse's location.
     * @property {boolean} [constrainResolution=false] If true, the mouse wheel zoom
     * event will always animate to the closest zoom level after an interaction;
     * false means intermediary zoom levels are allowed.
     */

    /**
     * @classdesc
     * Allows the user to zoom the map by scrolling the mouse wheel.
     * @api
     */
    class MouseWheelZoom extends Interaction$1 {
      /**
       * @param {Options} [options] Options.
       */
      constructor(options) {
        options = options ? options : {};

        super(
          /** @type {import("./Interaction.js").InteractionOptions} */ (options)
        );

        /**
         * @private
         * @type {number}
         */
        this.totalDelta_ = 0;

        /**
         * @private
         * @type {number}
         */
        this.lastDelta_ = 0;

        /**
         * @private
         * @type {number}
         */
        this.maxDelta_ = options.maxDelta !== undefined ? options.maxDelta : 1;

        /**
         * @private
         * @type {number}
         */
        this.duration_ = options.duration !== undefined ? options.duration : 250;

        /**
         * @private
         * @type {number}
         */
        this.timeout_ = options.timeout !== undefined ? options.timeout : 80;

        /**
         * @private
         * @type {boolean}
         */
        this.useAnchor_ =
          options.useAnchor !== undefined ? options.useAnchor : true;

        /**
         * @private
         * @type {boolean}
         */
        this.constrainResolution_ =
          options.constrainResolution !== undefined
            ? options.constrainResolution
            : false;

        const condition = options.condition ? options.condition : always;

        /**
         * @private
         * @type {import("../events/condition.js").Condition}
         */
        this.condition_ = options.onFocusOnly
          ? all(focusWithTabindex, condition)
          : condition;

        /**
         * @private
         * @type {?import("../coordinate.js").Coordinate}
         */
        this.lastAnchor_ = null;

        /**
         * @private
         * @type {number|undefined}
         */
        this.startTime_ = undefined;

        /**
         * @private
         * @type {?}
         */
        this.timeoutId_;

        /**
         * @private
         * @type {Mode|undefined}
         */
        this.mode_ = undefined;

        /**
         * Trackpad events separated by this delay will be considered separate
         * interactions.
         * @type {number}
         */
        this.trackpadEventGap_ = 400;

        /**
         * @type {?}
         */
        this.trackpadTimeoutId_;

        /**
         * The number of delta values per zoom level
         * @private
         * @type {number}
         */
        this.deltaPerZoom_ = 300;
      }

      /**
       * @private
       */
      endInteraction_() {
        this.trackpadTimeoutId_ = undefined;
        const map = this.getMap();
        if (!map) {
          return;
        }
        const view = map.getView();
        view.endInteraction(
          undefined,
          this.lastDelta_ ? (this.lastDelta_ > 0 ? 1 : -1) : 0,
          this.lastAnchor_
        );
      }

      /**
       * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a mousewheel-event) and eventually
       * zooms the map.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
       * @return {boolean} `false` to stop event propagation.
       */
      handleEvent(mapBrowserEvent) {
        if (!this.condition_(mapBrowserEvent)) {
          return true;
        }
        const type = mapBrowserEvent.type;
        if (type !== EventType.WHEEL) {
          return true;
        }

        const map = mapBrowserEvent.map;
        const wheelEvent = /** @type {WheelEvent} */ (
          mapBrowserEvent.originalEvent
        );
        wheelEvent.preventDefault();

        if (this.useAnchor_) {
          this.lastAnchor_ = mapBrowserEvent.coordinate;
        }

        // Delta normalisation inspired by
        // https://github.com/mapbox/mapbox-gl-js/blob/001c7b9/js/ui/handler/scroll_zoom.js
        let delta;
        if (mapBrowserEvent.type == EventType.WHEEL) {
          delta = wheelEvent.deltaY;
          if (has.FIREFOX && wheelEvent.deltaMode === WheelEvent.DOM_DELTA_PIXEL) {
            delta /= has.DEVICE_PIXEL_RATIO;
          }
          if (wheelEvent.deltaMode === WheelEvent.DOM_DELTA_LINE) {
            delta *= 40;
          }
        }

        if (delta === 0) {
          return false;
        }
        this.lastDelta_ = delta;

        const now = Date.now();

        if (this.startTime_ === undefined) {
          this.startTime_ = now;
        }

        if (!this.mode_ || now - this.startTime_ > this.trackpadEventGap_) {
          this.mode_ = Math.abs(delta) < 4 ? 'trackpad' : 'wheel';
        }

        const view = map.getView();
        if (
          this.mode_ === 'trackpad' &&
          !(view.getConstrainResolution() || this.constrainResolution_)
        ) {
          if (this.trackpadTimeoutId_) {
            clearTimeout(this.trackpadTimeoutId_);
          } else {
            if (view.getAnimating()) {
              view.cancelAnimations();
            }
            view.beginInteraction();
          }
          this.trackpadTimeoutId_ = setTimeout(
            this.endInteraction_.bind(this),
            this.timeout_
          );
          view.adjustZoom(-delta / this.deltaPerZoom_, this.lastAnchor_);
          this.startTime_ = now;
          return false;
        }

        this.totalDelta_ += delta;

        const timeLeft = Math.max(this.timeout_ - (now - this.startTime_), 0);

        clearTimeout(this.timeoutId_);
        this.timeoutId_ = setTimeout(
          this.handleWheelZoom_.bind(this, map),
          timeLeft
        );

        return false;
      }

      /**
       * @private
       * @param {import("../Map.js").default} map Map.
       */
      handleWheelZoom_(map) {
        const view = map.getView();
        if (view.getAnimating()) {
          view.cancelAnimations();
        }
        let delta =
          -math.clamp(
            this.totalDelta_,
            -this.maxDelta_ * this.deltaPerZoom_,
            this.maxDelta_ * this.deltaPerZoom_
          ) / this.deltaPerZoom_;
        if (view.getConstrainResolution() || this.constrainResolution_) {
          // view has a zoom constraint, zoom by 1
          delta = delta ? (delta > 0 ? 1 : -1) : 0;
        }
        zoomByDelta(view, delta, this.lastAnchor_, this.duration_);

        this.mode_ = undefined;
        this.totalDelta_ = 0;
        this.lastAnchor_ = null;
        this.startTime_ = undefined;
        this.timeoutId_ = undefined;
      }

      /**
       * Enable or disable using the mouse's location as an anchor when zooming
       * @param {boolean} useAnchor true to zoom to the mouse's location, false
       * to zoom to the center of the map
       * @api
       */
      setMouseAnchor(useAnchor) {
        this.useAnchor_ = useAnchor;
        if (!useAnchor) {
          this.lastAnchor_ = null;
        }
      }
    }

    var MouseWheelZoom$1 = MouseWheelZoom;

    /**
     * @module ol/interaction/PinchRotate
     */

    /**
     * @typedef {Object} Options
     * @property {number} [duration=250] The duration of the animation in
     * milliseconds.
     * @property {number} [threshold=0.3] Minimal angle in radians to start a rotation.
     */

    /**
     * @classdesc
     * Allows the user to rotate the map by twisting with two fingers
     * on a touch screen.
     * @api
     */
    class PinchRotate extends Pointer["default"] {
      /**
       * @param {Options} [options] Options.
       */
      constructor(options) {
        options = options ? options : {};

        const pointerOptions = /** @type {import("./Pointer.js").Options} */ (
          options
        );

        if (!pointerOptions.stopDown) {
          pointerOptions.stopDown = functions.FALSE;
        }

        super(pointerOptions);

        /**
         * @private
         * @type {import("../coordinate.js").Coordinate}
         */
        this.anchor_ = null;

        /**
         * @private
         * @type {number|undefined}
         */
        this.lastAngle_ = undefined;

        /**
         * @private
         * @type {boolean}
         */
        this.rotating_ = false;

        /**
         * @private
         * @type {number}
         */
        this.rotationDelta_ = 0.0;

        /**
         * @private
         * @type {number}
         */
        this.threshold_ = options.threshold !== undefined ? options.threshold : 0.3;

        /**
         * @private
         * @type {number}
         */
        this.duration_ = options.duration !== undefined ? options.duration : 250;
      }

      /**
       * Handle pointer drag events.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       */
      handleDragEvent(mapBrowserEvent) {
        let rotationDelta = 0.0;

        const touch0 = this.targetPointers[0];
        const touch1 = this.targetPointers[1];

        // angle between touches
        const angle = Math.atan2(
          touch1.clientY - touch0.clientY,
          touch1.clientX - touch0.clientX
        );

        if (this.lastAngle_ !== undefined) {
          const delta = angle - this.lastAngle_;
          this.rotationDelta_ += delta;
          if (!this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_) {
            this.rotating_ = true;
          }
          rotationDelta = delta;
        }
        this.lastAngle_ = angle;

        const map = mapBrowserEvent.map;
        const view = map.getView();
        if (view.getConstraints().rotation === rotationconstraint.disable) {
          return;
        }

        // rotate anchor point.
        // FIXME: should be the intersection point between the lines:
        //     touch0,touch1 and previousTouch0,previousTouch1
        this.anchor_ = map.getCoordinateFromPixelInternal(
          map.getEventPixel(centroid(this.targetPointers))
        );

        // rotate
        if (this.rotating_) {
          map.render();
          view.adjustRotationInternal(rotationDelta, this.anchor_);
        }
      }

      /**
       * Handle pointer up events.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       * @return {boolean} If the event was consumed.
       */
      handleUpEvent(mapBrowserEvent) {
        if (this.targetPointers.length < 2) {
          const map = mapBrowserEvent.map;
          const view = map.getView();
          view.endInteraction(this.duration_);
          return false;
        }
        return true;
      }

      /**
       * Handle pointer down events.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       * @return {boolean} If the event was consumed.
       */
      handleDownEvent(mapBrowserEvent) {
        if (this.targetPointers.length >= 2) {
          const map = mapBrowserEvent.map;
          this.anchor_ = null;
          this.lastAngle_ = undefined;
          this.rotating_ = false;
          this.rotationDelta_ = 0.0;
          if (!this.handlingDownUpSequence) {
            map.getView().beginInteraction();
          }
          return true;
        }
        return false;
      }
    }

    var PinchRotate$1 = PinchRotate;

    /**
     * @module ol/interaction/PinchZoom
     */

    /**
     * @typedef {Object} Options
     * @property {number} [duration=400] Animation duration in milliseconds.
     */

    /**
     * @classdesc
     * Allows the user to zoom the map by pinching with two fingers
     * on a touch screen.
     * @api
     */
    class PinchZoom extends Pointer["default"] {
      /**
       * @param {Options} [options] Options.
       */
      constructor(options) {
        options = options ? options : {};

        const pointerOptions = /** @type {import("./Pointer.js").Options} */ (
          options
        );

        if (!pointerOptions.stopDown) {
          pointerOptions.stopDown = functions.FALSE;
        }

        super(pointerOptions);

        /**
         * @private
         * @type {import("../coordinate.js").Coordinate}
         */
        this.anchor_ = null;

        /**
         * @private
         * @type {number}
         */
        this.duration_ = options.duration !== undefined ? options.duration : 400;

        /**
         * @private
         * @type {number|undefined}
         */
        this.lastDistance_ = undefined;

        /**
         * @private
         * @type {number}
         */
        this.lastScaleDelta_ = 1;
      }

      /**
       * Handle pointer drag events.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       */
      handleDragEvent(mapBrowserEvent) {
        let scaleDelta = 1.0;

        const touch0 = this.targetPointers[0];
        const touch1 = this.targetPointers[1];
        const dx = touch0.clientX - touch1.clientX;
        const dy = touch0.clientY - touch1.clientY;

        // distance between touches
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (this.lastDistance_ !== undefined) {
          scaleDelta = this.lastDistance_ / distance;
        }
        this.lastDistance_ = distance;

        const map = mapBrowserEvent.map;
        const view = map.getView();

        if (scaleDelta != 1.0) {
          this.lastScaleDelta_ = scaleDelta;
        }

        // scale anchor point.
        this.anchor_ = map.getCoordinateFromPixelInternal(
          map.getEventPixel(centroid(this.targetPointers))
        );

        // scale, bypass the resolution constraint
        map.render();
        view.adjustResolutionInternal(scaleDelta, this.anchor_);
      }

      /**
       * Handle pointer up events.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       * @return {boolean} If the event was consumed.
       */
      handleUpEvent(mapBrowserEvent) {
        if (this.targetPointers.length < 2) {
          const map = mapBrowserEvent.map;
          const view = map.getView();
          const direction = this.lastScaleDelta_ > 1 ? 1 : -1;
          view.endInteraction(this.duration_, direction);
          return false;
        }
        return true;
      }

      /**
       * Handle pointer down events.
       * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
       * @return {boolean} If the event was consumed.
       */
      handleDownEvent(mapBrowserEvent) {
        if (this.targetPointers.length >= 2) {
          const map = mapBrowserEvent.map;
          this.anchor_ = null;
          this.lastDistance_ = undefined;
          this.lastScaleDelta_ = 1;
          if (!this.handlingDownUpSequence) {
            map.getView().beginInteraction();
          }
          return true;
        }
        return false;
      }
    }

    var PinchZoom$1 = PinchZoom;

    /**
     * @module ol/interaction/defaults
     */

    /**
     * @typedef {Object} DefaultsOptions
     * @property {boolean} [altShiftDragRotate=true] Whether Alt-Shift-drag rotate is
     * desired.
     * @property {boolean} [onFocusOnly=false] Interact only when the map has the
     * focus. This affects the `MouseWheelZoom` and `DragPan` interactions and is
     * useful when page scroll is desired for maps that do not have the browser's
     * focus.
     * @property {boolean} [doubleClickZoom=true] Whether double click zoom is
     * desired.
     * @property {boolean} [keyboard=true] Whether keyboard interaction is desired.
     * @property {boolean} [mouseWheelZoom=true] Whether mousewheel zoom is desired.
     * @property {boolean} [shiftDragZoom=true] Whether Shift-drag zoom is desired.
     * @property {boolean} [dragPan=true] Whether drag pan is desired.
     * @property {boolean} [pinchRotate=true] Whether pinch rotate is desired.
     * @property {boolean} [pinchZoom=true] Whether pinch zoom is desired.
     * @property {number} [zoomDelta] Zoom level delta when using keyboard or double click zoom.
     * @property {number} [zoomDuration] Duration of the zoom animation in
     * milliseconds.
     */

    /**
     * Set of interactions included in maps by default. Specific interactions can be
     * excluded by setting the appropriate option to false in the constructor
     * options, but the order of the interactions is fixed.  If you want to specify
     * a different order for interactions, you will need to create your own
     * {@link module:ol/interaction/Interaction~Interaction} instances and insert
     * them into a {@link module:ol/Collection~Collection} in the order you want
     * before creating your {@link module:ol/Map~Map} instance. Changing the order can
     * be of interest if the event propagation needs to be stopped at a point.
     * The default set of interactions, in sequence, is:
     * * {@link module:ol/interaction/DragRotate~DragRotate}
     * * {@link module:ol/interaction/DoubleClickZoom~DoubleClickZoom}
     * * {@link module:ol/interaction/DragPan~DragPan}
     * * {@link module:ol/interaction/PinchRotate~PinchRotate}
     * * {@link module:ol/interaction/PinchZoom~PinchZoom}
     * * {@link module:ol/interaction/KeyboardPan~KeyboardPan}
     * * {@link module:ol/interaction/KeyboardZoom~KeyboardZoom}
     * * {@link module:ol/interaction/MouseWheelZoom~MouseWheelZoom}
     * * {@link module:ol/interaction/DragZoom~DragZoom}
     *
     * @param {DefaultsOptions} [options] Defaults options.
     * @return {Collection<import("./Interaction.js").default>}
     * A collection of interactions to be used with the {@link module:ol/Map~Map}
     * constructor's `interactions` option.
     * @api
     */
    function defaults(options) {
      options = options ? options : {};

      /** @type {Collection<import("./Interaction.js").default>} */
      const interactions = new Collection["default"]();

      const kinetic = new Kinetic$1(-0.005, 0.05, 100);

      const altShiftDragRotate =
        options.altShiftDragRotate !== undefined
          ? options.altShiftDragRotate
          : true;
      if (altShiftDragRotate) {
        interactions.push(new DragRotate$1());
      }

      const doubleClickZoom =
        options.doubleClickZoom !== undefined ? options.doubleClickZoom : true;
      if (doubleClickZoom) {
        interactions.push(
          new DoubleClickZoom$1({
            delta: options.zoomDelta,
            duration: options.zoomDuration,
          })
        );
      }

      const dragPan = options.dragPan !== undefined ? options.dragPan : true;
      if (dragPan) {
        interactions.push(
          new DragPan$1({
            onFocusOnly: options.onFocusOnly,
            kinetic: kinetic,
          })
        );
      }

      const pinchRotate =
        options.pinchRotate !== undefined ? options.pinchRotate : true;
      if (pinchRotate) {
        interactions.push(new PinchRotate$1());
      }

      const pinchZoom = options.pinchZoom !== undefined ? options.pinchZoom : true;
      if (pinchZoom) {
        interactions.push(
          new PinchZoom$1({
            duration: options.zoomDuration,
          })
        );
      }

      const keyboard = options.keyboard !== undefined ? options.keyboard : true;
      if (keyboard) {
        interactions.push(new KeyboardPan$1());
        interactions.push(
          new KeyboardZoom$1({
            delta: options.zoomDelta,
            duration: options.zoomDuration,
          })
        );
      }

      const mouseWheelZoom =
        options.mouseWheelZoom !== undefined ? options.mouseWheelZoom : true;
      if (mouseWheelZoom) {
        interactions.push(
          new MouseWheelZoom$1({
            onFocusOnly: options.onFocusOnly,
            duration: options.zoomDuration,
          })
        );
      }

      const shiftDragZoom =
        options.shiftDragZoom !== undefined ? options.shiftDragZoom : true;
      if (shiftDragZoom) {
        interactions.push(
          new DragZoom$1({
            duration: options.zoomDuration,
          })
        );
      }

      return interactions;
    }

    /**
     * @module ol/Map
     */

    /**
     * State of the current frame. Only `pixelRatio`, `time` and `viewState` should
     * be used in applications.
     * @typedef {Object} FrameState
     * @property {number} pixelRatio The pixel ratio of the frame.
     * @property {number} time The time when rendering of the frame was requested.
     * @property {import("./View.js").State} viewState The state of the current view.
     * @property {boolean} animate Animate.
     * @property {import("./transform.js").Transform} coordinateToPixelTransform CoordinateToPixelTransform.
     * @property {import("rbush").default} declutterTree DeclutterTree.
     * @property {null|import("./extent.js").Extent} extent Extent.
     * @property {import("./extent.js").Extent} [nextExtent] Next extent during an animation series.
     * @property {number} index Index.
     * @property {Array<import("./layer/Layer.js").State>} layerStatesArray LayerStatesArray.
     * @property {number} layerIndex LayerIndex.
     * @property {import("./transform.js").Transform} pixelToCoordinateTransform PixelToCoordinateTransform.
     * @property {Array<PostRenderFunction>} postRenderFunctions PostRenderFunctions.
     * @property {import("./size.js").Size} size Size.
     * @property {TileQueue} tileQueue TileQueue.
     * @property {!Object<string, Object<string, boolean>>} usedTiles UsedTiles.
     * @property {Array<number>} viewHints ViewHints.
     * @property {!Object<string, Object<string, boolean>>} wantedTiles WantedTiles.
     * @property {string} mapId The id of the map.
     * @property {Object<string, boolean>} renderTargets Identifiers of previously rendered elements.
     */

    /**
     * @typedef {function(Map, ?FrameState): any} PostRenderFunction
     */

    /**
     * @typedef {Object} AtPixelOptions
     * @property {undefined|function(import("./layer/Layer.js").default<import("./source/Source").default>): boolean} [layerFilter] Layer filter
     * function. The filter function will receive one argument, the
     * {@link module:ol/layer/Layer~Layer layer-candidate} and it should return a boolean value.
     * Only layers which are visible and for which this function returns `true`
     * will be tested for features. By default, all visible layers will be tested.
     * @property {number} [hitTolerance=0] Hit-detection tolerance in css pixels. Pixels
     * inside the radius around the given position will be checked for features.
     * @property {boolean} [checkWrapped=true] Check-Wrapped Will check for wrapped geometries inside the range of
     *   +/- 1 world width. Works only if a projection is used that can be wrapped.
     */

    /**
     * @typedef {Object} MapOptionsInternal
     * @property {Collection<import("./control/Control.js").default>} [controls] Controls.
     * @property {Collection<import("./interaction/Interaction.js").default>} [interactions] Interactions.
     * @property {HTMLElement|Document} keyboardEventTarget KeyboardEventTarget.
     * @property {Collection<import("./Overlay.js").default>} overlays Overlays.
     * @property {Object<string, *>} values Values.
     */

    /**
     * @typedef {import("./ObjectEventType").Types|'change:layergroup'|'change:size'|'change:target'|'change:view'} MapObjectEventTypes
     */

    /***
     * @template Return
     * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
     *    import("./Observable").OnSignature<MapObjectEventTypes, import("./Object").ObjectEvent, Return> &
     *    import("./Observable").OnSignature<import("./MapBrowserEventType").Types, import("./MapBrowserEvent").default, Return> &
     *    import("./Observable").OnSignature<import("./MapEventType").Types, import("./MapEvent").default, Return> &
     *    import("./Observable").OnSignature<import("./render/EventType").MapRenderEventTypes, import("./render/Event").default, Return> &
     *    import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|MapObjectEventTypes|
     *      import("./MapBrowserEventType").Types|import("./MapEventType").Types|
     *      import("./render/EventType").MapRenderEventTypes, Return>} MapEventHandler
     */

    /**
     * Object literal with config options for the map.
     * @typedef {Object} MapOptions
     * @property {Collection<import("./control/Control.js").default>|Array<import("./control/Control.js").default>} [controls]
     * Controls initially added to the map. If not specified,
     * {@link module:ol/control/defaults.defaults} is used.
     * @property {number} [pixelRatio=window.devicePixelRatio] The ratio between
     * physical pixels and device-independent pixels (dips) on the device.
     * @property {Collection<import("./interaction/Interaction.js").default>|Array<import("./interaction/Interaction.js").default>} [interactions]
     * Interactions that are initially added to the map. If not specified,
     * {@link module:ol/interaction/defaults.defaults} is used.
     * @property {HTMLElement|Document|string} [keyboardEventTarget] The element to
     * listen to keyboard events on. This determines when the `KeyboardPan` and
     * `KeyboardZoom` interactions trigger. For example, if this option is set to
     * `document` the keyboard interactions will always trigger. If this option is
     * not specified, the element the library listens to keyboard events on is the
     * map target (i.e. the user-provided div for the map). If this is not
     * `document`, the target element needs to be focused for key events to be
     * emitted, requiring that the target element has a `tabindex` attribute.
     * @property {Array<import("./layer/Base.js").default>|Collection<import("./layer/Base.js").default>|LayerGroup} [layers]
     * Layers. If this is not defined, a map with no layers will be rendered. Note
     * that layers are rendered in the order supplied, so if you want, for example,
     * a vector layer to appear on top of a tile layer, it must come after the tile
     * layer.
     * @property {number} [maxTilesLoading=16] Maximum number tiles to load
     * simultaneously.
     * @property {number} [moveTolerance=1] The minimum distance in pixels the
     * cursor must move to be detected as a map move event instead of a click.
     * Increasing this value can make it easier to click on the map.
     * @property {Collection<import("./Overlay.js").default>|Array<import("./Overlay.js").default>} [overlays]
     * Overlays initially added to the map. By default, no overlays are added.
     * @property {HTMLElement|string} [target] The container for the map, either the
     * element itself or the `id` of the element. If not specified at construction
     * time, {@link module:ol/Map~Map#setTarget} must be called for the map to be
     * rendered. If passed by element, the container can be in a secondary document.
     * **Note:** CSS `transform` support for the target element is limited to `scale`.
     * @property {View|Promise<import("./View.js").ViewOptions>} [view] The map's view.  No layer sources will be
     * fetched unless this is specified at construction time or through
     * {@link module:ol/Map~Map#setView}.
     */

    /**
     * @param {import("./layer/Base.js").default} layer Layer.
     */
    function removeLayerMapProperty(layer) {
      if (layer instanceof Layer$1) {
        layer.setMapInternal(null);
        return;
      }
      if (layer instanceof LayerGroup$2) {
        layer.getLayers().forEach(removeLayerMapProperty);
      }
    }

    /**
     * @param {import("./layer/Base.js").default} layer Layer.
     * @param {Map} map Map.
     */
    function setLayerMapProperty(layer, map) {
      if (layer instanceof Layer$1) {
        layer.setMapInternal(map);
        return;
      }
      if (layer instanceof LayerGroup$2) {
        const layers = layer.getLayers().getArray();
        for (let i = 0, ii = layers.length; i < ii; ++i) {
          setLayerMapProperty(layers[i], map);
        }
      }
    }

    /**
     * @classdesc
     * The map is the core component of OpenLayers. For a map to render, a view,
     * one or more layers, and a target container are needed:
     *
     *     import Map from 'ol/Map.js';
     *     import View from 'ol/View.js';
     *     import TileLayer from 'ol/layer/Tile.js';
     *     import OSM from 'ol/source/OSM.js';
     *
     *     const map = new Map({
     *       view: new View({
     *         center: [0, 0],
     *         zoom: 1,
     *       }),
     *       layers: [
     *         new TileLayer({
     *           source: new OSM(),
     *         }),
     *       ],
     *       target: 'map',
     *     });
     *
     * The above snippet creates a map using a {@link module:ol/layer/Tile~TileLayer} to
     * display {@link module:ol/source/OSM~OSM} OSM data and render it to a DOM
     * element with the id `map`.
     *
     * The constructor places a viewport container (with CSS class name
     * `ol-viewport`) in the target element (see `getViewport()`), and then two
     * further elements within the viewport: one with CSS class name
     * `ol-overlaycontainer-stopevent` for controls and some overlays, and one with
     * CSS class name `ol-overlaycontainer` for other overlays (see the `stopEvent`
     * option of {@link module:ol/Overlay~Overlay} for the difference). The map
     * itself is placed in a further element within the viewport.
     *
     * Layers are stored as a {@link module:ol/Collection~Collection} in
     * layerGroups. A top-level group is provided by the library. This is what is
     * accessed by `getLayerGroup` and `setLayerGroup`. Layers entered in the
     * options are added to this group, and `addLayer` and `removeLayer` change the
     * layer collection in the group. `getLayers` is a convenience function for
     * `getLayerGroup().getLayers()`. Note that {@link module:ol/layer/Group~LayerGroup}
     * is a subclass of {@link module:ol/layer/Base~BaseLayer}, so layers entered in the
     * options or added with `addLayer` can be groups, which can contain further
     * groups, and so on.
     *
     * @fires import("./MapBrowserEvent.js").MapBrowserEvent
     * @fires import("./MapEvent.js").MapEvent
     * @fires import("./render/Event.js").default#precompose
     * @fires import("./render/Event.js").default#postcompose
     * @fires import("./render/Event.js").default#rendercomplete
     * @api
     */
    class Map$1 extends Object$1["default"] {
      /**
       * @param {MapOptions} [options] Map options.
       */
      constructor(options) {
        super();

        options = options || {};

        /***
         * @type {MapEventHandler<import("./events").EventsKey>}
         */
        this.on;

        /***
         * @type {MapEventHandler<import("./events").EventsKey>}
         */
        this.once;

        /***
         * @type {MapEventHandler<void>}
         */
        this.un;

        const optionsInternal = createOptionsInternal(options);

        /**
         * @private
         * @type {boolean|undefined}
         */
        this.renderComplete_;

        /**
         * @private
         * @type {boolean}
         */
        this.loaded_ = true;

        /** @private */
        this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this);

        /**
         * @type {number}
         * @private
         */
        this.maxTilesLoading_ =
          options.maxTilesLoading !== undefined ? options.maxTilesLoading : 16;

        /**
         * @private
         * @type {number}
         */
        this.pixelRatio_ =
          options.pixelRatio !== undefined
            ? options.pixelRatio
            : has.DEVICE_PIXEL_RATIO;

        /**
         * @private
         * @type {*}
         */
        this.postRenderTimeoutHandle_;

        /**
         * @private
         * @type {number|undefined}
         */
        this.animationDelayKey_;

        /**
         * @private
         */
        this.animationDelay_ = this.animationDelay_.bind(this);

        /**
         * @private
         * @type {import("./transform.js").Transform}
         */
        this.coordinateToPixelTransform_ = transform.create();

        /**
         * @private
         * @type {import("./transform.js").Transform}
         */
        this.pixelToCoordinateTransform_ = transform.create();

        /**
         * @private
         * @type {number}
         */
        this.frameIndex_ = 0;

        /**
         * @private
         * @type {?FrameState}
         */
        this.frameState_ = null;

        /**
         * The extent at the previous 'moveend' event.
         * @private
         * @type {import("./extent.js").Extent}
         */
        this.previousExtent_ = null;

        /**
         * @private
         * @type {?import("./events.js").EventsKey}
         */
        this.viewPropertyListenerKey_ = null;

        /**
         * @private
         * @type {?import("./events.js").EventsKey}
         */
        this.viewChangeListenerKey_ = null;

        /**
         * @private
         * @type {?Array<import("./events.js").EventsKey>}
         */
        this.layerGroupPropertyListenerKeys_ = null;

        /**
         * @private
         * @type {!HTMLElement}
         */
        this.viewport_ = document.createElement('div');
        this.viewport_.className =
          'ol-viewport' + ('ontouchstart' in window ? ' ol-touch' : '');
        this.viewport_.style.position = 'relative';
        this.viewport_.style.overflow = 'hidden';
        this.viewport_.style.width = '100%';
        this.viewport_.style.height = '100%';

        /**
         * @private
         * @type {!HTMLElement}
         */
        this.overlayContainer_ = document.createElement('div');
        this.overlayContainer_.style.position = 'absolute';
        this.overlayContainer_.style.zIndex = '0';
        this.overlayContainer_.style.width = '100%';
        this.overlayContainer_.style.height = '100%';
        this.overlayContainer_.style.pointerEvents = 'none';
        this.overlayContainer_.className = 'ol-overlaycontainer';
        this.viewport_.appendChild(this.overlayContainer_);

        /**
         * @private
         * @type {!HTMLElement}
         */
        this.overlayContainerStopEvent_ = document.createElement('div');
        this.overlayContainerStopEvent_.style.position = 'absolute';
        this.overlayContainerStopEvent_.style.zIndex = '0';
        this.overlayContainerStopEvent_.style.width = '100%';
        this.overlayContainerStopEvent_.style.height = '100%';
        this.overlayContainerStopEvent_.style.pointerEvents = 'none';
        this.overlayContainerStopEvent_.className = 'ol-overlaycontainer-stopevent';
        this.viewport_.appendChild(this.overlayContainerStopEvent_);

        /**
         * @private
         * @type {MapBrowserEventHandler}
         */
        this.mapBrowserEventHandler_ = null;

        /**
         * @private
         * @type {number}
         */
        this.moveTolerance_ = options.moveTolerance;

        /**
         * @private
         * @type {HTMLElement|Document}
         */
        this.keyboardEventTarget_ = optionsInternal.keyboardEventTarget;

        /**
         * @private
         * @type {?Array<import("./events.js").EventsKey>}
         */
        this.targetChangeHandlerKeys_ = null;

        /**
         * @private
         * @type {HTMLElement|null}
         */
        this.targetElement_ = null;

        /**
         * @type {ResizeObserver}
         */
        this.resizeObserver_ = new ResizeObserver(() => this.updateSize());

        /**
         * @type {Collection<import("./control/Control.js").default>}
         * @protected
         */
        this.controls = optionsInternal.controls || defaults$1();

        /**
         * @type {Collection<import("./interaction/Interaction.js").default>}
         * @protected
         */
        this.interactions =
          optionsInternal.interactions ||
          defaults({
            onFocusOnly: true,
          });

        /**
         * @type {Collection<import("./Overlay.js").default>}
         * @private
         */
        this.overlays_ = optionsInternal.overlays;

        /**
         * A lookup of overlays by id.
         * @private
         * @type {Object<string, import("./Overlay.js").default>}
         */
        this.overlayIdIndex_ = {};

        /**
         * @type {import("./renderer/Map.js").default|null}
         * @private
         */
        this.renderer_ = null;

        /**
         * @private
         * @type {!Array<PostRenderFunction>}
         */
        this.postRenderFunctions_ = [];

        /**
         * @private
         * @type {TileQueue}
         */
        this.tileQueue_ = new TileQueue$1(
          this.getTilePriority.bind(this),
          this.handleTileChange_.bind(this)
        );

        this.addChangeListener(
          MapProperty.LAYERGROUP,
          this.handleLayerGroupChanged_
        );
        this.addChangeListener(MapProperty.VIEW, this.handleViewChanged_);
        this.addChangeListener(MapProperty.SIZE, this.handleSizeChanged_);
        this.addChangeListener(MapProperty.TARGET, this.handleTargetChanged_);

        // setProperties will trigger the rendering of the map if the map
        // is "defined" already.
        this.setProperties(optionsInternal.values);

        const map = this;
        if (options.view && !(options.view instanceof View["default"])) {
          options.view.then(function (viewOptions) {
            map.setView(new View["default"](viewOptions));
          });
        }

        this.controls.addEventListener(
          CollectionEventType.ADD,
          /**
           * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent
           */
          (event) => {
            event.element.setMap(this);
          }
        );

        this.controls.addEventListener(
          CollectionEventType.REMOVE,
          /**
           * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent.
           */
          (event) => {
            event.element.setMap(null);
          }
        );

        this.interactions.addEventListener(
          CollectionEventType.ADD,
          /**
           * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
           */
          (event) => {
            event.element.setMap(this);
          }
        );

        this.interactions.addEventListener(
          CollectionEventType.REMOVE,
          /**
           * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
           */
          (event) => {
            event.element.setMap(null);
          }
        );

        this.overlays_.addEventListener(
          CollectionEventType.ADD,
          /**
           * @param {import("./Collection.js").CollectionEvent<import("./Overlay.js").default>} event CollectionEvent.
           */
          (event) => {
            this.addOverlayInternal_(event.element);
          }
        );

        this.overlays_.addEventListener(
          CollectionEventType.REMOVE,
          /**
           * @param {import("./Collection.js").CollectionEvent<import("./Overlay.js").default>} event CollectionEvent.
           */
          (event) => {
            const id = event.element.getId();
            if (id !== undefined) {
              delete this.overlayIdIndex_[id.toString()];
            }
            event.element.setMap(null);
          }
        );

        this.controls.forEach(
          /**
           * @param {import("./control/Control.js").default} control Control.
           */
          (control) => {
            control.setMap(this);
          }
        );

        this.interactions.forEach(
          /**
           * @param {import("./interaction/Interaction.js").default} interaction Interaction.
           */
          (interaction) => {
            interaction.setMap(this);
          }
        );

        this.overlays_.forEach(this.addOverlayInternal_.bind(this));
      }

      /**
       * Add the given control to the map.
       * @param {import("./control/Control.js").default} control Control.
       * @api
       */
      addControl(control) {
        this.getControls().push(control);
      }

      /**
       * Add the given interaction to the map. If you want to add an interaction
       * at another point of the collection use `getInteractions()` and the methods
       * available on {@link module:ol/Collection~Collection}. This can be used to
       * stop the event propagation from the handleEvent function. The interactions
       * get to handle the events in the reverse order of this collection.
       * @param {import("./interaction/Interaction.js").default} interaction Interaction to add.
       * @api
       */
      addInteraction(interaction) {
        this.getInteractions().push(interaction);
      }

      /**
       * Adds the given layer to the top of this map. If you want to add a layer
       * elsewhere in the stack, use `getLayers()` and the methods available on
       * {@link module:ol/Collection~Collection}.
       * @param {import("./layer/Base.js").default} layer Layer.
       * @api
       */
      addLayer(layer) {
        const layers = this.getLayerGroup().getLayers();
        layers.push(layer);
      }

      /**
       * @param {import("./layer/Group.js").GroupEvent} event The layer add event.
       * @private
       */
      handleLayerAdd_(event) {
        setLayerMapProperty(event.layer, this);
      }

      /**
       * Add the given overlay to the map.
       * @param {import("./Overlay.js").default} overlay Overlay.
       * @api
       */
      addOverlay(overlay) {
        this.getOverlays().push(overlay);
      }

      /**
       * This deals with map's overlay collection changes.
       * @param {import("./Overlay.js").default} overlay Overlay.
       * @private
       */
      addOverlayInternal_(overlay) {
        const id = overlay.getId();
        if (id !== undefined) {
          this.overlayIdIndex_[id.toString()] = overlay;
        }
        overlay.setMap(this);
      }

      /**
       *
       * Clean up.
       */
      disposeInternal() {
        this.controls.clear();
        this.interactions.clear();
        this.overlays_.clear();
        this.resizeObserver_.disconnect();
        this.setTarget(null);
        super.disposeInternal();
      }

      /**
       * Detect features that intersect a pixel on the viewport, and execute a
       * callback with each intersecting feature. Layers included in the detection can
       * be configured through the `layerFilter` option in `options`.
       * @param {import("./pixel.js").Pixel} pixel Pixel.
       * @param {function(import("./Feature.js").FeatureLike, import("./layer/Layer.js").default<import("./source/Source").default>, import("./geom/SimpleGeometry.js").default): T} callback Feature callback. The callback will be
       *     called with two arguments. The first argument is one
       *     {@link module:ol/Feature~Feature feature} or
       *     {@link module:ol/render/Feature~RenderFeature render feature} at the pixel, the second is
       *     the {@link module:ol/layer/Layer~Layer layer} of the feature and will be null for
       *     unmanaged layers. To stop detection, callback functions can return a
       *     truthy value.
       * @param {AtPixelOptions} [options] Optional options.
       * @return {T|undefined} Callback result, i.e. the return value of last
       * callback execution, or the first truthy callback return value.
       * @template T
       * @api
       */
      forEachFeatureAtPixel(pixel, callback, options) {
        if (!this.frameState_ || !this.renderer_) {
          return;
        }
        const coordinate = this.getCoordinateFromPixelInternal(pixel);
        options = options !== undefined ? options : {};
        const hitTolerance =
          options.hitTolerance !== undefined ? options.hitTolerance : 0;
        const layerFilter =
          options.layerFilter !== undefined ? options.layerFilter : functions.TRUE;
        const checkWrapped = options.checkWrapped !== false;
        return this.renderer_.forEachFeatureAtCoordinate(
          coordinate,
          this.frameState_,
          hitTolerance,
          checkWrapped,
          callback,
          null,
          layerFilter,
          null
        );
      }

      /**
       * Get all features that intersect a pixel on the viewport.
       * @param {import("./pixel.js").Pixel} pixel Pixel.
       * @param {AtPixelOptions} [options] Optional options.
       * @return {Array<import("./Feature.js").FeatureLike>} The detected features or
       * an empty array if none were found.
       * @api
       */
      getFeaturesAtPixel(pixel, options) {
        const features = [];
        this.forEachFeatureAtPixel(
          pixel,
          function (feature) {
            features.push(feature);
          },
          options
        );
        return features;
      }

      /**
       * Get all layers from all layer groups.
       * @return {Array<import("./layer/Layer.js").default>} Layers.
       * @api
       */
      getAllLayers() {
        const layers = [];
        function addLayersFrom(layerGroup) {
          layerGroup.forEach(function (layer) {
            if (layer instanceof LayerGroup$2) {
              addLayersFrom(layer.getLayers());
            } else {
              layers.push(layer);
            }
          });
        }
        addLayersFrom(this.getLayers());
        return layers;
      }

      /**
       * Detect if features intersect a pixel on the viewport. Layers included in the
       * detection can be configured through the `layerFilter` option.
       * @param {import("./pixel.js").Pixel} pixel Pixel.
       * @param {AtPixelOptions} [options] Optional options.
       * @return {boolean} Is there a feature at the given pixel?
       * @api
       */
      hasFeatureAtPixel(pixel, options) {
        if (!this.frameState_ || !this.renderer_) {
          return false;
        }
        const coordinate = this.getCoordinateFromPixelInternal(pixel);
        options = options !== undefined ? options : {};
        const layerFilter =
          options.layerFilter !== undefined ? options.layerFilter : functions.TRUE;
        const hitTolerance =
          options.hitTolerance !== undefined ? options.hitTolerance : 0;
        const checkWrapped = options.checkWrapped !== false;
        return this.renderer_.hasFeatureAtCoordinate(
          coordinate,
          this.frameState_,
          hitTolerance,
          checkWrapped,
          layerFilter,
          null
        );
      }

      /**
       * Returns the coordinate in user projection for a browser event.
       * @param {MouseEvent} event Event.
       * @return {import("./coordinate.js").Coordinate} Coordinate.
       * @api
       */
      getEventCoordinate(event) {
        return this.getCoordinateFromPixel(this.getEventPixel(event));
      }

      /**
       * Returns the coordinate in view projection for a browser event.
       * @param {MouseEvent} event Event.
       * @return {import("./coordinate.js").Coordinate} Coordinate.
       */
      getEventCoordinateInternal(event) {
        return this.getCoordinateFromPixelInternal(this.getEventPixel(event));
      }

      /**
       * Returns the map pixel position for a browser event relative to the viewport.
       * @param {UIEvent|{clientX: number, clientY: number}} event Event.
       * @return {import("./pixel.js").Pixel} Pixel.
       * @api
       */
      getEventPixel(event) {
        const viewport = this.viewport_;
        const viewportPosition = viewport.getBoundingClientRect();
        const viewportSize = this.getSize();
        const scaleX = viewportPosition.width / viewportSize[0];
        const scaleY = viewportPosition.height / viewportSize[1];
        const eventPosition =
          //FIXME Are we really calling this with a TouchEvent anywhere?
          'changedTouches' in event
            ? /** @type {TouchEvent} */ (event).changedTouches[0]
            : /** @type {MouseEvent} */ (event);

        return [
          (eventPosition.clientX - viewportPosition.left) / scaleX,
          (eventPosition.clientY - viewportPosition.top) / scaleY,
        ];
      }

      /**
       * Get the target in which this map is rendered.
       * Note that this returns what is entered as an option or in setTarget:
       * if that was an element, it returns an element; if a string, it returns that.
       * @return {HTMLElement|string|undefined} The Element or id of the Element that the
       *     map is rendered in.
       * @observable
       * @api
       */
      getTarget() {
        return /** @type {HTMLElement|string|undefined} */ (
          this.get(MapProperty.TARGET)
        );
      }

      /**
       * Get the DOM element into which this map is rendered. In contrast to
       * `getTarget` this method always return an `Element`, or `null` if the
       * map has no target.
       * @return {HTMLElement} The element that the map is rendered in.
       * @api
       */
      getTargetElement() {
        return this.targetElement_;
      }

      /**
       * Get the coordinate for a given pixel.  This returns a coordinate in the
       * user projection.
       * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
       * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
       * @api
       */
      getCoordinateFromPixel(pixel) {
        return toUserCoordinate(
          this.getCoordinateFromPixelInternal(pixel),
          this.getView().getProjection()
        );
      }

      /**
       * Get the coordinate for a given pixel.  This returns a coordinate in the
       * map view projection.
       * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
       * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
       */
      getCoordinateFromPixelInternal(pixel) {
        const frameState = this.frameState_;
        if (!frameState) {
          return null;
        }
        return apply(frameState.pixelToCoordinateTransform, pixel.slice());
      }

      /**
       * Get the map controls. Modifying this collection changes the controls
       * associated with the map.
       * @return {Collection<import("./control/Control.js").default>} Controls.
       * @api
       */
      getControls() {
        return this.controls;
      }

      /**
       * Get the map overlays. Modifying this collection changes the overlays
       * associated with the map.
       * @return {Collection<import("./Overlay.js").default>} Overlays.
       * @api
       */
      getOverlays() {
        return this.overlays_;
      }

      /**
       * Get an overlay by its identifier (the value returned by overlay.getId()).
       * Note that the index treats string and numeric identifiers as the same. So
       * `map.getOverlayById(2)` will return an overlay with id `'2'` or `2`.
       * @param {string|number} id Overlay identifier.
       * @return {import("./Overlay.js").default} Overlay.
       * @api
       */
      getOverlayById(id) {
        const overlay = this.overlayIdIndex_[id.toString()];
        return overlay !== undefined ? overlay : null;
      }

      /**
       * Get the map interactions. Modifying this collection changes the interactions
       * associated with the map.
       *
       * Interactions are used for e.g. pan, zoom and rotate.
       * @return {Collection<import("./interaction/Interaction.js").default>} Interactions.
       * @api
       */
      getInteractions() {
        return this.interactions;
      }

      /**
       * Get the layergroup associated with this map.
       * @return {LayerGroup} A layer group containing the layers in this map.
       * @observable
       * @api
       */
      getLayerGroup() {
        return /** @type {LayerGroup} */ (this.get(MapProperty.LAYERGROUP));
      }

      /**
       * Clear any existing layers and add layers to the map.
       * @param {Array<import("./layer/Base.js").default>|Collection<import("./layer/Base.js").default>} layers The layers to be added to the map.
       * @api
       */
      setLayers(layers) {
        const group = this.getLayerGroup();
        if (layers instanceof Collection["default"]) {
          group.setLayers(layers);
          return;
        }

        const collection = group.getLayers();
        collection.clear();
        collection.extend(layers);
      }

      /**
       * Get the collection of layers associated with this map.
       * @return {!Collection<import("./layer/Base.js").default>} Layers.
       * @api
       */
      getLayers() {
        const layers = this.getLayerGroup().getLayers();
        return layers;
      }

      /**
       * @return {boolean} Layers have sources that are still loading.
       */
      getLoadingOrNotReady() {
        const layerStatesArray = this.getLayerGroup().getLayerStatesArray();
        for (let i = 0, ii = layerStatesArray.length; i < ii; ++i) {
          const state = layerStatesArray[i];
          if (!state.visible) {
            continue;
          }
          const renderer = state.layer.getRenderer();
          if (renderer && !renderer.ready) {
            return true;
          }
          const source = state.layer.getSource();
          if (source && source.loading) {
            return true;
          }
        }
        return false;
      }

      /**
       * Get the pixel for a coordinate.  This takes a coordinate in the user
       * projection and returns the corresponding pixel.
       * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
       * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
       * @api
       */
      getPixelFromCoordinate(coordinate) {
        const viewCoordinate = fromUserCoordinate(
          coordinate,
          this.getView().getProjection()
        );
        return this.getPixelFromCoordinateInternal(viewCoordinate);
      }

      /**
       * Get the pixel for a coordinate.  This takes a coordinate in the map view
       * projection and returns the corresponding pixel.
       * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
       * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
       */
      getPixelFromCoordinateInternal(coordinate) {
        const frameState = this.frameState_;
        if (!frameState) {
          return null;
        }
        return apply(
          frameState.coordinateToPixelTransform,
          coordinate.slice(0, 2)
        );
      }

      /**
       * Get the map renderer.
       * @return {import("./renderer/Map.js").default|null} Renderer
       */
      getRenderer() {
        return this.renderer_;
      }

      /**
       * Get the size of this map.
       * @return {import("./size.js").Size|undefined} The size in pixels of the map in the DOM.
       * @observable
       * @api
       */
      getSize() {
        return /** @type {import("./size.js").Size|undefined} */ (
          this.get(MapProperty.SIZE)
        );
      }

      /**
       * Get the view associated with this map. A view manages properties such as
       * center and resolution.
       * @return {View} The view that controls this map.
       * @observable
       * @api
       */
      getView() {
        return /** @type {View} */ (this.get(MapProperty.VIEW));
      }

      /**
       * Get the element that serves as the map viewport.
       * @return {HTMLElement} Viewport.
       * @api
       */
      getViewport() {
        return this.viewport_;
      }

      /**
       * Get the element that serves as the container for overlays.  Elements added to
       * this container will let mousedown and touchstart events through to the map,
       * so clicks and gestures on an overlay will trigger {@link module:ol/MapBrowserEvent~MapBrowserEvent}
       * events.
       * @return {!HTMLElement} The map's overlay container.
       */
      getOverlayContainer() {
        return this.overlayContainer_;
      }

      /**
       * Get the element that serves as a container for overlays that don't allow
       * event propagation. Elements added to this container won't let mousedown and
       * touchstart events through to the map, so clicks and gestures on an overlay
       * don't trigger any {@link module:ol/MapBrowserEvent~MapBrowserEvent}.
       * @return {!HTMLElement} The map's overlay container that stops events.
       */
      getOverlayContainerStopEvent() {
        return this.overlayContainerStopEvent_;
      }

      /**
       * @return {!Document} The document where the map is displayed.
       */
      getOwnerDocument() {
        const targetElement = this.getTargetElement();
        return targetElement ? targetElement.ownerDocument : document;
      }

      /**
       * @param {import("./Tile.js").default} tile Tile.
       * @param {string} tileSourceKey Tile source key.
       * @param {import("./coordinate.js").Coordinate} tileCenter Tile center.
       * @param {number} tileResolution Tile resolution.
       * @return {number} Tile priority.
       */
      getTilePriority(tile, tileSourceKey, tileCenter, tileResolution) {
        return getTilePriority(
          this.frameState_,
          tile,
          tileSourceKey,
          tileCenter,
          tileResolution
        );
      }

      /**
       * @param {UIEvent} browserEvent Browser event.
       * @param {string} [type] Type.
       */
      handleBrowserEvent(browserEvent, type) {
        type = type || browserEvent.type;
        const mapBrowserEvent = new MapBrowserEvent$1(type, this, browserEvent);
        this.handleMapBrowserEvent(mapBrowserEvent);
      }

      /**
       * @param {MapBrowserEvent} mapBrowserEvent The event to handle.
       */
      handleMapBrowserEvent(mapBrowserEvent) {
        if (!this.frameState_) {
          // With no view defined, we cannot translate pixels into geographical
          // coordinates so interactions cannot be used.
          return;
        }
        const originalEvent = /** @type {PointerEvent} */ (
          mapBrowserEvent.originalEvent
        );
        const eventType = originalEvent.type;
        if (
          eventType === PointerEventType.POINTERDOWN ||
          eventType === EventType.WHEEL ||
          eventType === EventType.KEYDOWN
        ) {
          const doc = this.getOwnerDocument();
          const rootNode = this.viewport_.getRootNode
            ? this.viewport_.getRootNode()
            : doc;
          const target = /** @type {Node} */ (originalEvent.target);
          if (
            // Abort if the target is a child of the container for elements whose events are not meant
            // to be handled by map interactions.
            this.overlayContainerStopEvent_.contains(target) ||
            // Abort if the event target is a child of the container that is no longer in the page.
            // It's possible for the target to no longer be in the page if it has been removed in an
            // event listener, this might happen in a Control that recreates it's content based on
            // user interaction either manually or via a render in something like https://reactjs.org/
            !(rootNode === doc ? doc.documentElement : rootNode).contains(target)
          ) {
            return;
          }
        }
        mapBrowserEvent.frameState = this.frameState_;
        if (this.dispatchEvent(mapBrowserEvent) !== false) {
          const interactionsArray = this.getInteractions().getArray().slice();
          for (let i = interactionsArray.length - 1; i >= 0; i--) {
            const interaction = interactionsArray[i];
            if (
              interaction.getMap() !== this ||
              !interaction.getActive() ||
              !this.getTargetElement()
            ) {
              continue;
            }
            const cont = interaction.handleEvent(mapBrowserEvent);
            if (!cont || mapBrowserEvent.propagationStopped) {
              break;
            }
          }
        }
      }

      /**
       * @protected
       */
      handlePostRender() {
        const frameState = this.frameState_;

        // Manage the tile queue
        // Image loads are expensive and a limited resource, so try to use them
        // efficiently:
        // * When the view is static we allow a large number of parallel tile loads
        //   to complete the frame as quickly as possible.
        // * When animating or interacting, image loads can cause janks, so we reduce
        //   the maximum number of loads per frame and limit the number of parallel
        //   tile loads to remain reactive to view changes and to reduce the chance of
        //   loading tiles that will quickly disappear from view.
        const tileQueue = this.tileQueue_;
        if (!tileQueue.isEmpty()) {
          let maxTotalLoading = this.maxTilesLoading_;
          let maxNewLoads = maxTotalLoading;
          if (frameState) {
            const hints = frameState.viewHints;
            if (hints[ViewHint.ANIMATING] || hints[ViewHint.INTERACTING]) {
              const lowOnFrameBudget = Date.now() - frameState.time > 8;
              maxTotalLoading = lowOnFrameBudget ? 0 : 8;
              maxNewLoads = lowOnFrameBudget ? 0 : 2;
            }
          }
          if (tileQueue.getTilesLoading() < maxTotalLoading) {
            tileQueue.reprioritize(); // FIXME only call if view has changed
            tileQueue.loadMoreTiles(maxTotalLoading, maxNewLoads);
          }
        }

        if (frameState && this.renderer_ && !frameState.animate) {
          if (this.renderComplete_ === true) {
            if (this.hasListener(RenderEventType.RENDERCOMPLETE)) {
              this.renderer_.dispatchRenderEvent(
                RenderEventType.RENDERCOMPLETE,
                frameState
              );
            }
            if (this.loaded_ === false) {
              this.loaded_ = true;
              this.dispatchEvent(
                new MapEvent$1(MapEventType.LOADEND, this, frameState)
              );
            }
          } else if (this.loaded_ === true) {
            this.loaded_ = false;
            this.dispatchEvent(
              new MapEvent$1(MapEventType.LOADSTART, this, frameState)
            );
          }
        }

        const postRenderFunctions = this.postRenderFunctions_;
        for (let i = 0, ii = postRenderFunctions.length; i < ii; ++i) {
          postRenderFunctions[i](this, frameState);
        }
        postRenderFunctions.length = 0;
      }

      /**
       * @private
       */
      handleSizeChanged_() {
        if (this.getView() && !this.getView().getAnimating()) {
          this.getView().resolveConstraints(0);
        }

        this.render();
      }

      /**
       * @private
       */
      handleTargetChanged_() {
        if (this.mapBrowserEventHandler_) {
          for (let i = 0, ii = this.targetChangeHandlerKeys_.length; i < ii; ++i) {
            events.unlistenByKey(this.targetChangeHandlerKeys_[i]);
          }
          this.targetChangeHandlerKeys_ = null;
          this.viewport_.removeEventListener(
            EventType.CONTEXTMENU,
            this.boundHandleBrowserEvent_
          );
          this.viewport_.removeEventListener(
            EventType.WHEEL,
            this.boundHandleBrowserEvent_
          );
          this.mapBrowserEventHandler_.dispose();
          this.mapBrowserEventHandler_ = null;
          dom.removeNode(this.viewport_);
        }

        if (this.targetElement_) {
          this.resizeObserver_.unobserve(this.targetElement_);
          const rootNode = this.targetElement_.getRootNode();
          if (rootNode instanceof ShadowRoot) {
            this.resizeObserver_.unobserve(rootNode.host);
          }
        }

        // target may be undefined, null, a string or an Element.
        // If it's a string we convert it to an Element before proceeding.
        // If it's not now an Element we remove the viewport from the DOM.
        // If it's an Element we append the viewport element to it.

        const target = this.getTarget();
        const targetElement =
          typeof target === 'string' ? document.getElementById(target) : target;
        this.targetElement_ = targetElement;
        if (!targetElement) {
          if (this.renderer_) {
            clearTimeout(this.postRenderTimeoutHandle_);
            this.postRenderTimeoutHandle_ = undefined;
            this.postRenderFunctions_.length = 0;
            this.renderer_.dispose();
            this.renderer_ = null;
          }
          if (this.animationDelayKey_) {
            cancelAnimationFrame(this.animationDelayKey_);
            this.animationDelayKey_ = undefined;
          }
        } else {
          targetElement.appendChild(this.viewport_);
          if (!this.renderer_) {
            this.renderer_ = new CompositeMapRenderer$1(this);
          }

          this.mapBrowserEventHandler_ = new MapBrowserEventHandler$1(
            this,
            this.moveTolerance_
          );
          for (const key in MapBrowserEventType) {
            this.mapBrowserEventHandler_.addEventListener(
              MapBrowserEventType[key],
              this.handleMapBrowserEvent.bind(this)
            );
          }
          this.viewport_.addEventListener(
            EventType.CONTEXTMENU,
            this.boundHandleBrowserEvent_,
            false
          );
          this.viewport_.addEventListener(
            EventType.WHEEL,
            this.boundHandleBrowserEvent_,
            PASSIVE_EVENT_LISTENERS ? {passive: false} : false
          );

          const keyboardEventTarget = !this.keyboardEventTarget_
            ? targetElement
            : this.keyboardEventTarget_;
          this.targetChangeHandlerKeys_ = [
            events.listen(
              keyboardEventTarget,
              EventType.KEYDOWN,
              this.handleBrowserEvent,
              this
            ),
            events.listen(
              keyboardEventTarget,
              EventType.KEYPRESS,
              this.handleBrowserEvent,
              this
            ),
          ];
          const rootNode = targetElement.getRootNode();
          if (rootNode instanceof ShadowRoot) {
            this.resizeObserver_.observe(rootNode.host);
          }
          this.resizeObserver_.observe(targetElement);
        }

        this.updateSize();
        // updateSize calls setSize, so no need to call this.render
        // ourselves here.
      }

      /**
       * @private
       */
      handleTileChange_() {
        this.render();
      }

      /**
       * @private
       */
      handleViewPropertyChanged_() {
        this.render();
      }

      /**
       * @private
       */
      handleViewChanged_() {
        if (this.viewPropertyListenerKey_) {
          events.unlistenByKey(this.viewPropertyListenerKey_);
          this.viewPropertyListenerKey_ = null;
        }
        if (this.viewChangeListenerKey_) {
          events.unlistenByKey(this.viewChangeListenerKey_);
          this.viewChangeListenerKey_ = null;
        }
        const view = this.getView();
        if (view) {
          this.updateViewportSize_();

          this.viewPropertyListenerKey_ = events.listen(
            view,
            ObjectEventType.PROPERTYCHANGE,
            this.handleViewPropertyChanged_,
            this
          );
          this.viewChangeListenerKey_ = events.listen(
            view,
            EventType.CHANGE,
            this.handleViewPropertyChanged_,
            this
          );

          view.resolveConstraints(0);
        }
        this.render();
      }

      /**
       * @private
       */
      handleLayerGroupChanged_() {
        if (this.layerGroupPropertyListenerKeys_) {
          this.layerGroupPropertyListenerKeys_.forEach(events.unlistenByKey);
          this.layerGroupPropertyListenerKeys_ = null;
        }
        const layerGroup = this.getLayerGroup();
        if (layerGroup) {
          this.handleLayerAdd_(new GroupEvent('addlayer', layerGroup));
          this.layerGroupPropertyListenerKeys_ = [
            events.listen(layerGroup, ObjectEventType.PROPERTYCHANGE, this.render, this),
            events.listen(layerGroup, EventType.CHANGE, this.render, this),
            events.listen(layerGroup, 'addlayer', this.handleLayerAdd_, this),
            events.listen(layerGroup, 'removelayer', this.handleLayerRemove_, this),
          ];
        }
        this.render();
      }

      /**
       * @return {boolean} Is rendered.
       */
      isRendered() {
        return !!this.frameState_;
      }

      /**
       * @private
       */
      animationDelay_() {
        this.animationDelayKey_ = undefined;
        this.renderFrame_(Date.now());
      }

      /**
       * Requests an immediate render in a synchronous manner.
       * @api
       */
      renderSync() {
        if (this.animationDelayKey_) {
          cancelAnimationFrame(this.animationDelayKey_);
        }
        this.animationDelay_();
      }

      /**
       * Redraws all text after new fonts have loaded
       */
      redrawText() {
        const layerStates = this.getLayerGroup().getLayerStatesArray();
        for (let i = 0, ii = layerStates.length; i < ii; ++i) {
          const layer = layerStates[i].layer;
          if (layer.hasRenderer()) {
            layer.getRenderer().handleFontsChanged();
          }
        }
      }

      /**
       * Request a map rendering (at the next animation frame).
       * @api
       */
      render() {
        if (this.renderer_ && this.animationDelayKey_ === undefined) {
          this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_);
        }
      }

      /**
       * Remove the given control from the map.
       * @param {import("./control/Control.js").default} control Control.
       * @return {import("./control/Control.js").default|undefined} The removed control (or undefined
       *     if the control was not found).
       * @api
       */
      removeControl(control) {
        return this.getControls().remove(control);
      }

      /**
       * Remove the given interaction from the map.
       * @param {import("./interaction/Interaction.js").default} interaction Interaction to remove.
       * @return {import("./interaction/Interaction.js").default|undefined} The removed interaction (or
       *     undefined if the interaction was not found).
       * @api
       */
      removeInteraction(interaction) {
        return this.getInteractions().remove(interaction);
      }

      /**
       * Removes the given layer from the map.
       * @param {import("./layer/Base.js").default} layer Layer.
       * @return {import("./layer/Base.js").default|undefined} The removed layer (or undefined if the
       *     layer was not found).
       * @api
       */
      removeLayer(layer) {
        const layers = this.getLayerGroup().getLayers();
        return layers.remove(layer);
      }

      /**
       * @param {import("./layer/Group.js").GroupEvent} event The layer remove event.
       * @private
       */
      handleLayerRemove_(event) {
        removeLayerMapProperty(event.layer);
      }

      /**
       * Remove the given overlay from the map.
       * @param {import("./Overlay.js").default} overlay Overlay.
       * @return {import("./Overlay.js").default|undefined} The removed overlay (or undefined
       *     if the overlay was not found).
       * @api
       */
      removeOverlay(overlay) {
        return this.getOverlays().remove(overlay);
      }

      /**
       * @param {number} time Time.
       * @private
       */
      renderFrame_(time) {
        const size = this.getSize();
        const view = this.getView();
        const previousFrameState = this.frameState_;
        /** @type {?FrameState} */
        let frameState = null;
        if (size !== undefined && hasArea(size) && view && view.isDef()) {
          const viewHints = view.getHints(
            this.frameState_ ? this.frameState_.viewHints : undefined
          );
          const viewState = view.getState();
          frameState = {
            animate: false,
            coordinateToPixelTransform: this.coordinateToPixelTransform_,
            declutterTree: null,
            extent: getForViewAndSize(
              viewState.center,
              viewState.resolution,
              viewState.rotation,
              size
            ),
            index: this.frameIndex_++,
            layerIndex: 0,
            layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
            pixelRatio: this.pixelRatio_,
            pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
            postRenderFunctions: [],
            size: size,
            tileQueue: this.tileQueue_,
            time: time,
            usedTiles: {},
            viewState: viewState,
            viewHints: viewHints,
            wantedTiles: {},
            mapId: util.getUid(this),
            renderTargets: {},
          };
          if (viewState.nextCenter && viewState.nextResolution) {
            const rotation = isNaN(viewState.nextRotation)
              ? viewState.rotation
              : viewState.nextRotation;

            frameState.nextExtent = getForViewAndSize(
              viewState.nextCenter,
              viewState.nextResolution,
              rotation,
              size
            );
          }
        }

        this.frameState_ = frameState;
        this.renderer_.renderFrame(frameState);

        if (frameState) {
          if (frameState.animate) {
            this.render();
          }
          Array.prototype.push.apply(
            this.postRenderFunctions_,
            frameState.postRenderFunctions
          );

          if (previousFrameState) {
            const moveStart =
              !this.previousExtent_ ||
              (!isEmpty(this.previousExtent_) &&
                !equals$1(frameState.extent, this.previousExtent_));
            if (moveStart) {
              this.dispatchEvent(
                new MapEvent$1(MapEventType.MOVESTART, this, previousFrameState)
              );
              this.previousExtent_ = extent.createOrUpdateEmpty(this.previousExtent_);
            }
          }

          const idle =
            this.previousExtent_ &&
            !frameState.viewHints[ViewHint.ANIMATING] &&
            !frameState.viewHints[ViewHint.INTERACTING] &&
            !equals$1(frameState.extent, this.previousExtent_);

          if (idle) {
            this.dispatchEvent(
              new MapEvent$1(MapEventType.MOVEEND, this, frameState)
            );
            clone(frameState.extent, this.previousExtent_);
          }
        }

        this.dispatchEvent(new MapEvent$1(MapEventType.POSTRENDER, this, frameState));

        this.renderComplete_ =
          this.hasListener(MapEventType.LOADSTART) ||
          this.hasListener(MapEventType.LOADEND) ||
          this.hasListener(RenderEventType.RENDERCOMPLETE)
            ? !this.tileQueue_.getTilesLoading() &&
              !this.tileQueue_.getCount() &&
              !this.getLoadingOrNotReady()
            : undefined;

        if (!this.postRenderTimeoutHandle_) {
          this.postRenderTimeoutHandle_ = setTimeout(() => {
            this.postRenderTimeoutHandle_ = undefined;
            this.handlePostRender();
          }, 0);
        }
      }

      /**
       * Sets the layergroup of this map.
       * @param {LayerGroup} layerGroup A layer group containing the layers in this map.
       * @observable
       * @api
       */
      setLayerGroup(layerGroup) {
        const oldLayerGroup = this.getLayerGroup();
        if (oldLayerGroup) {
          this.handleLayerRemove_(new GroupEvent('removelayer', oldLayerGroup));
        }
        this.set(MapProperty.LAYERGROUP, layerGroup);
      }

      /**
       * Set the size of this map.
       * @param {import("./size.js").Size|undefined} size The size in pixels of the map in the DOM.
       * @observable
       * @api
       */
      setSize(size) {
        this.set(MapProperty.SIZE, size);
      }

      /**
       * Set the target element to render this map into.
       * @param {HTMLElement|string} [target] The Element or id of the Element
       *     that the map is rendered in.
       * @observable
       * @api
       */
      setTarget(target) {
        this.set(MapProperty.TARGET, target);
      }

      /**
       * Set the view for this map.
       * @param {View|Promise<import("./View.js").ViewOptions>} view The view that controls this map.
       * It is also possible to pass a promise that resolves to options for constructing a view.  This
       * alternative allows view properties to be resolved by sources or other components that load
       * view-related metadata.
       * @observable
       * @api
       */
      setView(view) {
        if (!view || view instanceof View["default"]) {
          this.set(MapProperty.VIEW, view);
          return;
        }
        this.set(MapProperty.VIEW, new View["default"]());

        const map = this;
        view.then(function (viewOptions) {
          map.setView(new View["default"](viewOptions));
        });
      }

      /**
       * Force a recalculation of the map viewport size.  This should be called when
       * third-party code changes the size of the map viewport.
       * @api
       */
      updateSize() {
        const targetElement = this.getTargetElement();

        let size = undefined;
        if (targetElement) {
          const computedStyle = getComputedStyle(targetElement);
          const width =
            targetElement.offsetWidth -
            parseFloat(computedStyle['borderLeftWidth']) -
            parseFloat(computedStyle['paddingLeft']) -
            parseFloat(computedStyle['paddingRight']) -
            parseFloat(computedStyle['borderRightWidth']);
          const height =
            targetElement.offsetHeight -
            parseFloat(computedStyle['borderTopWidth']) -
            parseFloat(computedStyle['paddingTop']) -
            parseFloat(computedStyle['paddingBottom']) -
            parseFloat(computedStyle['borderBottomWidth']);
          if (!isNaN(width) && !isNaN(height)) {
            size = [width, height];
            if (
              !hasArea(size) &&
              !!(
                targetElement.offsetWidth ||
                targetElement.offsetHeight ||
                targetElement.getClientRects().length
              )
            ) {
              warn(
                "No map visible because the map container's width or height are 0."
              );
            }
          }
        }

        const oldSize = this.getSize();
        if (size && (!oldSize || !array.equals(size, oldSize))) {
          this.setSize(size);
          this.updateViewportSize_();
        }
      }

      /**
       * Recomputes the viewport size and save it on the view object (if any)
       * @private
       */
      updateViewportSize_() {
        const view = this.getView();
        if (view) {
          let size = undefined;
          const computedStyle = getComputedStyle(this.viewport_);
          if (computedStyle.width && computedStyle.height) {
            size = [
              parseInt(computedStyle.width, 10),
              parseInt(computedStyle.height, 10),
            ];
          }
          view.setViewportSize(size);
        }
      }
    }

    /**
     * @param {MapOptions} options Map options.
     * @return {MapOptionsInternal} Internal map options.
     */
    function createOptionsInternal(options) {
      /**
       * @type {HTMLElement|Document}
       */
      let keyboardEventTarget = null;
      if (options.keyboardEventTarget !== undefined) {
        keyboardEventTarget =
          typeof options.keyboardEventTarget === 'string'
            ? document.getElementById(options.keyboardEventTarget)
            : options.keyboardEventTarget;
      }

      /**
       * @type {Object<string, *>}
       */
      const values = {};

      const layerGroup =
        options.layers &&
        typeof (/** @type {?} */ (options.layers).getLayers) === 'function'
          ? /** @type {LayerGroup} */ (options.layers)
          : new LayerGroup$2({
              layers:
                /** @type {Collection<import("./layer/Base.js").default>|Array<import("./layer/Base.js").default>} */ (
                  options.layers
                ),
            });
      values[MapProperty.LAYERGROUP] = layerGroup;

      values[MapProperty.TARGET] = options.target;

      values[MapProperty.VIEW] =
        options.view instanceof View["default"] ? options.view : new View["default"]();

      /** @type {Collection<import("./control/Control.js").default>} */
      let controls;
      if (options.controls !== undefined) {
        if (Array.isArray(options.controls)) {
          controls = new Collection["default"](options.controls.slice());
        } else {
          asserts.assert(
            typeof (/** @type {?} */ (options.controls).getArray) === 'function',
            47
          ); // Expected `controls` to be an array or an `import("./Collection.js").Collection`
          controls = options.controls;
        }
      }

      /** @type {Collection<import("./interaction/Interaction").default>} */
      let interactions;
      if (options.interactions !== undefined) {
        if (Array.isArray(options.interactions)) {
          interactions = new Collection["default"](options.interactions.slice());
        } else {
          asserts.assert(
            typeof (/** @type {?} */ (options.interactions).getArray) ===
              'function',
            48
          ); // Expected `interactions` to be an array or an `import("./Collection.js").Collection`
          interactions = options.interactions;
        }
      }

      /** @type {Collection<import("./Overlay.js").default>} */
      let overlays;
      if (options.overlays !== undefined) {
        if (Array.isArray(options.overlays)) {
          overlays = new Collection["default"](options.overlays.slice());
        } else {
          asserts.assert(
            typeof (/** @type {?} */ (options.overlays).getArray) === 'function',
            49
          ); // Expected `overlays` to be an array or an `import("./Collection.js").Collection`
          overlays = options.overlays;
        }
      } else {
        overlays = new Collection["default"]();
      }

      return {
        controls: controls,
        interactions: interactions,
        keyboardEventTarget: keyboardEventTarget,
        overlays: overlays,
        values: values,
      };
    }
    var OlMap = Map$1;

    function ModifyAnnotation(props) {
      const clickedAnnotation = useSelectAnnotation();
      const modifyInteractionRef = React.useRef(null);
      const map = useMap();
      const onModifyEnd = React.useCallback(event => {
        if (props.onChange) {
          props.onChange(event);
        }
      }, []);
      React.useEffect(() => {
        if (clickedAnnotation && props.isActive) {
          if (!modifyInteractionRef.current) {
            modifyInteractionRef.current = new interaction.Modify({
              features: new Collection["default"]([clickedAnnotation]),
              deleteCondition: condition.doubleClick
            });
            modifyInteractionRef.current.on("modifyend", onModifyEnd);
            map.addInteraction(modifyInteractionRef.current);
          }
        } else {
          if (modifyInteractionRef.current) {
            modifyInteractionRef.current.un("modifyend", onModifyEnd);
            map.removeInteraction(modifyInteractionRef.current);
            modifyInteractionRef.current = null;
          }
        }
        return () => {
          if (modifyInteractionRef.current) {
            modifyInteractionRef.current.un("modifyend", onModifyEnd);
            map.removeInteraction(modifyInteractionRef.current);
            modifyInteractionRef.current = null;
          }
        };
      }, [clickedAnnotation, map, props.isActive]);
      return jsxRuntime.jsx(Button, Object.assign({}, props, {
        children: jsxRuntime.jsx(AiOutlineEdit, {})
      }));
    }

    // THIS FILE IS AUTO GENERATED
    function BiMove (props) {
      return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 11h-5V6h3l-4-4-4 4h3v5H6V8l-4 4 4 4v-3h5v5H8l4 4 4-4h-3v-5h5v3l4-4-4-4z"}}]})(props);
    }

    function MoveAnnotation(props) {
      const translateInteractionRef = React.useRef(null);
      const clickedAnnotation = useSelectAnnotation();
      const map = useMap();
      const onMoveEnd = React.useCallback(event => {
        if (props.onChange) {
          props.onChange(event);
        }
      }, []);
      React.useEffect(() => {
        if (clickedAnnotation && props.isActive) {
          translateInteractionRef.current = new interaction.Translate({
            features: new Collection["default"]([clickedAnnotation])
          });
          translateInteractionRef.current.on("translateend", onMoveEnd);
          map.addInteraction(translateInteractionRef.current);
        }
        return () => {
          if (translateInteractionRef.current) {
            translateInteractionRef.current.un("translateend", onMoveEnd);
            map.removeInteraction(translateInteractionRef.current);
            translateInteractionRef.current = null;
          }
        };
      }, [clickedAnnotation, map, props.isActive]);
      return jsxRuntime.jsx(Button, Object.assign({}, props, {
        children: jsxRuntime.jsx(BiMove, {})
      }));
    }

    const ControlGroup = ({
      children
    }) => {
      return jsxRuntime.jsx("div", Object.assign({
        style: {
          margin: "10px 0 10px 0 "
        }
      }, {
        children: React.Children.map(children, (child, index) => {
          if (React.Children.count(children) === 1) {
            const props = Object.assign(Object.assign({}, child.props), {
              side: "solo"
            });
            return React.cloneElement(child, props);
          }
          if (index === 0) {
            const props = Object.assign(Object.assign({}, child.props), {
              side: "top"
            });
            return React.cloneElement(child, props);
          }
          if (index === React.Children.toArray(children).length - 1) {
            const props = Object.assign(Object.assign({}, child.props), {
              side: "bottom"
            });
            return React.cloneElement(child, props);
          }
          return child;
        })
      }));
    };

    const ControlSection = ({
      children
    }) => {
      const map = useMap();
      const ref = React.useRef(null);
      React.useEffect(() => {
        if (!map) return;
        const controlSection = new control.Control({
          element: ref.current ? ref.current : undefined
        });
        map.addControl(controlSection);
      }, [map]);
      return jsxRuntime.jsx("div", Object.assign({
        ref: ref,
        style: {
          position: "absolute",
          left: "10px"
        }
      }, {
        children: children
      }));
    };

    const CompassWheel = ({
      size = "sm",
      onWheel
    }) => {
      const [rotationDegree, setRotate, resetRotation] = useMapRotation();
      const [mouseDown, setMouseDown] = React.useState(false);
      const [rotation, setRotation] = React.useState(0);
      const ref = React.useRef(null);
      const map = useMap();
      const compassSize = size => {
        if (size === "sm") {
          return 100;
        }
        if (size === "md") {
          return 150;
        }
        if (size === "lg") {
          return 200;
        }
      };
      const handleMouseDown = () => {
        setMouseDown(true);
      };
      const handleMouseUp = () => {
        setMouseDown(false);
      };
      const handleMouseMove = e => {
        if (mouseDown) {
          const {
            movementY
          } = e;
          const abjustedMovementY = movementY * 0.7;
          setRotation(prevRotation => {
            let newRotation = (prevRotation + abjustedMovementY) % 360;
            if (newRotation < 0) {
              newRotation += 360;
            }
            if (onWheel) {
              onWheel(newRotation);
            }
            setRotate(newRotation);
            return newRotation;
          });
        }
      };
      const resetValue = () => {
        setRotation(0);
        resetRotation();
      };
      React.useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
          window.removeEventListener("mouseup", handleMouseUp);
        };
      }, [mouseDown]);
      React.useEffect(() => {
        const customControl = new control.Control({
          element: ref.current ? ref.current : undefined
        });
        map.addControl(customControl);
      }, [map]);
      return jsxRuntime.jsxs("div", Object.assign({
        ref: ref,
        style: {
          position: "absolute",
          top: "10px",
          right: "10px"
        }
      }, {
        children: [jsxRuntime.jsx("div", Object.assign({
          onMouseDown: handleMouseDown,
          style: {
            zIndex: 1,
            transform: `rotate(${rotationDegree}deg)`
          }
        }, {
          children: jsxRuntime.jsx("div", Object.assign({
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }
          }, {
            children: jsxRuntime.jsx("img", {
              src: "/mapicon/compass.png",
              alt: "compass",
              draggable: false,
              height: compassSize(size),
              width: compassSize(size)
            })
          }))
        })), jsxRuntime.jsx("div", Object.assign({
          style: {
            display: "flex",
            justifyContent: "center",
            marginTop: "10px"
          }
        }, {
          children: jsxRuntime.jsx("button", Object.assign({
            style: {
              width: "60px",
              height: "20px",
              background: "white",
              border: "1px solid #858484",
              borderRadius: "3px",
              paddingBottom: "3px"
            },
            onClick: resetValue
          }, {
            children: "reset"
          }))
        })), jsxRuntime.jsx("div", Object.assign({
          style: {
            marginTop: "px",
            width: "100%",
            display: "flex",
            justifyContent: "center"
          }
        }, {
          children: jsxRuntime.jsx("form", Object.assign({
            onSubmit: e => {
              e.preventDefault();
              setRotate(rotation);
            }
          }, {
            children: jsxRuntime.jsx("input", {
              value: rotation.toFixed(0),
              onChange: e => {
                setRotation(Number(e.target.value));
              },
              type: "number",
              name: "degree",
              style: {
                width: "53px"
              }
            })
          }))
        }))]
      }));
    };

    function DrawingTools({
      marker,
      polyline,
      rectangle,
      polygon,
      text,
      edit,
      movement,
      remove,
      onCanvas = false,
      onDrawEnd
    }) {
      const [isSelected, setIsSelected] = React.useState(null);
      const switchControl = key => {
        if (isSelected === key) {
          setIsSelected(null);
        }
        if (isSelected !== key) {
          setIsSelected(key);
        }
      };
      const endDrawing = event => {
        if (onDrawEnd) {
          onDrawEnd(event);
        }
        setIsSelected(null);
      };
      return jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [jsxRuntime.jsxs(ControlGroup, {
          children: [jsxRuntime.jsx(MultiPointDrawButton, {
            isActive: isSelected === 0,
            onEnd: endDrawing,
            onClick: () => {
              switchControl(0);
            },
            onCanvas: onCanvas
          }), jsxRuntime.jsx(PointDrawButton, {
            isActive: isSelected === 1,
            onEnd: endDrawing,
            onClick: () => {
              switchControl(1);
            },
            onCanvas: onCanvas
          }), jsxRuntime.jsx(PolylineDrawButton, {
            isActive: isSelected === 2,
            onClick: () => {
              switchControl(2);
            },
            onEnd: endDrawing,
            onCanvas: onCanvas
          }), jsxRuntime.jsx(RectangleDrawButton, {
            isActive: isSelected === 3,
            onClick: () => {
              switchControl(3);
            },
            onEnd: endDrawing,
            onCanvas: onCanvas
          }), jsxRuntime.jsx(PolygonDrawButton, {
            isActive: isSelected === 4,
            onClick: () => {
              switchControl(4);
            },
            onEnd: endDrawing,
            onCanvas: onCanvas
          }), jsxRuntime.jsx(TextDrawButton, {
            isActive: isSelected === 5,
            onClick: () => {
              switchControl(5);
            },
            onEnd: endDrawing,
            onCanvas: onCanvas
          })]
        }), jsxRuntime.jsxs(ControlGroup, {
          children: [jsxRuntime.jsx(ModifyAnnotation, {
            isActive: isSelected === 6,
            onClick: () => {
              switchControl(6);
            }
          }), jsxRuntime.jsx(MoveAnnotation, {
            isActive: isSelected === 7,
            onClick: () => {
              switchControl(7);
            }
          }), jsxRuntime.jsx(DeleteAnnotation, {
            isActive: isSelected === 8,
            onClick: () => {
              switchControl(8);
            }
          })]
        })]
      });
    }

    // THIS FILE IS AUTO GENERATED
    function BsArrowsFullscreen (props) {
      return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"}}]})(props);
    }function BsFullscreenExit (props) {
      return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"}}]})(props);
    }

    const InnerButton = styled__default["default"].div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
    const FullScreenFeature = () => {
      const map = useMap();
      const ref = React.useRef(null);
      const onBtnRef = React.useRef(null);
      const offBtnRef = React.useRef(null);
      const [isFull, setIsFull] = React.useState(false);
      useEffectIfMounted(() => {
        onBtnRef.current = document.querySelector(".ol-full-screen-false");
        offBtnRef.current = document.querySelector(".ol-full-screen-true");
      }, [isFull]);
      const toggleFullScreen = () => {
        var _a, _b;
        if (isFull) {
          (_a = offBtnRef.current) === null || _a === void 0 ? void 0 : _a.click();
        } else {
          (_b = onBtnRef.current) === null || _b === void 0 ? void 0 : _b.click();
        }
      };
      const onFull = () => {
        setIsFull(true);
      };
      const offFull = () => {
        setIsFull(false);
      };
      React.useEffect(() => {
        if (!map || !ref.current) return;
        const fullScreenSource = new control.FullScreen({
          target: ref.current
        });
        fullScreenSource.on("enterfullscreen", onFull);
        fullScreenSource.on("leavefullscreen", offFull);
        map.addControl(fullScreenSource);
        return () => {
          map.removeControl(fullScreenSource);
          fullScreenSource.un("enterfullscreen", onFull);
          fullScreenSource.un("leavefullscreen", offFull);
        };
      }, [map]);
      return jsxRuntime.jsx(ControlGroup, {
        children: jsxRuntime.jsx(Button, Object.assign({
          ref: ref,
          onClick: toggleFullScreen
        }, {
          children: jsxRuntime.jsx(InnerButton, {
            children: isFull ? jsxRuntime.jsx(BsFullscreenExit, {}) : jsxRuntime.jsx(BsArrowsFullscreen, {})
          })
        }))
      });
    };

    // THIS FILE IS AUTO GENERATED
    function IoAddSharp (props) {
      return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"fill":"none","strokeLinecap":"square","strokeLinejoin":"round","strokeWidth":"32","d":"M256 112v288m144-144H112"}}]})(props);
    }

    const ZoomFeature = () => {
      var _a;
      const map = useMap();
      const [zoomAmount, setZoomAmount] = React.useState((_a = map.getView().getZoom()) !== null && _a !== void 0 ? _a : 0);
      const maxZoom = map.getView().getMaxZoom();
      const minZoom = map.getView().getMinZoom();
      const isAbledZoomIn = zoomAmount !== maxZoom;
      const isAbledZoomOut = zoomAmount !== minZoom;
      const zoomIn = () => {
        if (zoomAmount < maxZoom) {
          setZoomAmount(prev => prev + 1);
          map.getView().setZoom(zoomAmount + 1);
        }
      };
      const zoomOut = () => {
        if (zoomAmount > minZoom) {
          setZoomAmount(prev => prev - 1);
          map.getView().setZoom(zoomAmount - 1);
        }
      };
      const handleWheel = event => {
        var _a;
        event.preventDefault();
        console.log(map.getView().getZoom());
        setZoomAmount((_a = map.getView().getZoom()) !== null && _a !== void 0 ? _a : 0);
      };
      React.useEffect(() => {
        const viewPort = map.getViewport();
        viewPort.addEventListener("wheel", handleWheel, {
          passive: false
        });
        return () => {
          viewPort.removeEventListener("wheel", handleWheel);
        };
      }, []);
      return jsxRuntime.jsxs(ControlGroup, {
        children: [jsxRuntime.jsx(Button, Object.assign({
          onClick: zoomIn,
          isDisabled: !isAbledZoomIn
        }, {
          children: jsxRuntime.jsx(IoAddSharp, {
            size: 18,
            color: isAbledZoomIn ? "black" : "#e2e2e2"
          })
        })), jsxRuntime.jsx(Button, Object.assign({
          onClick: zoomOut,
          isDisabled: !isAbledZoomOut
        }, {
          children: jsxRuntime.jsx(AiOutlineMinus, {
            size: 18,
            color: isAbledZoomOut ? "black" : "#e2e2e2"
          })
        }))]
      });
    };

    const CustomCircle = ({
      center,
      radius,
      color = "BLUE",
      properties = {},
      onClick,
      onHover,
      zIndex = 0,
      children
    }) => {
      const map = useMap();
      const annotationRef = React.useRef(new Feature$1(new Circle__default["default"](proj.fromLonLat(center), radius)));
      const annotationLayerRef = React.useRef(null);
      React.useEffect(() => {
        if (annotationLayerRef.current) {
          annotationLayerRef.current.setZIndex(zIndex);
        }
      }, [zIndex]);
      React.useEffect(() => {
        annotationRef.current.setStyle(new Style__default["default"]({
          stroke: new Stroke__default["default"]({
            color: ANNOTATION_COLOR[color].stroke,
            width: 2
          }),
          fill: new Fill__default["default"]({
            color: ANNOTATION_COLOR[color].fill
          }),
          text: makeText({
            text: children ? children.props.children : "",
            size: (children === null || children === void 0 ? void 0 : children.props.size) || 15,
            color: (children === null || children === void 0 ? void 0 : children.props.color) ? children.props.color : "black",
            outline: children === null || children === void 0 ? void 0 : children.props.outline
          })
        }));
        const vectorSource = new VectorSource__default["default"]({
          features: [annotationRef.current]
        });
        const vectorLayer = new VectorLayer__default["default"]({
          source: vectorSource
        });
        annotationLayerRef.current = vectorLayer;
        annotationLayerRef.current = vectorLayer;
        annotationRef.current.setProperties({
          source: vectorSource,
          layer: vectorLayer
        });
        vectorLayer.setZIndex(zIndex);
        const clickSelect = new interaction.Select({
          condition: condition.click,
          style: null,
          layers: [vectorLayer]
        });
        const hoverSelect = new interaction.Select({
          condition: condition.pointerMove,
          style: null,
          layers: [vectorLayer]
        });
        map.addInteraction(hoverSelect);
        map.addInteraction(clickSelect);
        map.addLayer(vectorLayer);
        function onHoverHandler(event) {
          if (event.selected.length > 0) {
            if (onHover) {
              onHover({
                annotation: annotationRef.current,
                properties
              });
            }
          }
        }
        function onClickHandler(event) {
          if (event.selected.length > 0) {
            // 클릭 이벤트에 의해 선택된 Circle이 있는 경우
            if (onClick) {
              onClick({
                annotation: annotationRef.current,
                properties
              });
            }
            // 선택된 Feature에 대한 작업 수행
            // 예: 스타일 변경, 정보 표시 등
          }
        }

        hoverSelect.on("select", onHoverHandler);
        clickSelect.on("select", onClickHandler);
        return () => {
          var _a;
          hoverSelect.un("select", onHoverHandler);
          clickSelect.un("select", onClickHandler);
          map.removeInteraction(hoverSelect);
          map.removeInteraction(clickSelect);
          (_a = vectorLayer.getSource()) === null || _a === void 0 ? void 0 : _a.clear();
          map.removeLayer(vectorLayer);
        };
      }, [color, children, map, onHover, properties, onClick]);
      return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    };

    const CustomMarker = ({
      center,
      color = "BLUE",
      properties = {},
      onClick,
      onHover,
      zIndex = 0,
      children
    }) => {
      const map = useMap();
      const annotationRef = React.useRef(new Feature__default["default"](new geom.Point(proj.fromLonLat(center))));
      const annotationLayerRef = React.useRef(null);
      React.useEffect(() => {
        if (annotationLayerRef.current) {
          annotationLayerRef.current.setZIndex(zIndex);
        }
      }, [zIndex]);
      React.useEffect(() => {
        annotationRef.current.setStyle(new Style__default["default"]({
          text: makeText({
            text: children ? children.props.children : "",
            size: (children === null || children === void 0 ? void 0 : children.props.size) || 15,
            color: (children === null || children === void 0 ? void 0 : children.props.color) ? children.props.color : "black",
            outline: children === null || children === void 0 ? void 0 : children.props.outline,
            isMarker: true
          }),
          image: new Icon__default["default"]({
            src: "/mapicon/marker-icon.png",
            anchor: [0.5, 1] // 마커 이미지의 앵커 위치
          })
        }));

        const vectorSource = new VectorSource__default["default"]({
          features: [annotationRef.current]
        });
        const vectorLayer = new VectorLayer__default["default"]({
          source: vectorSource
        });
        annotationLayerRef.current = vectorLayer;
        annotationRef.current.setProperties({
          source: vectorSource,
          layer: vectorLayer
        });
        vectorLayer.setZIndex(zIndex);
        const clickSelect = new interaction.Select({
          condition: condition.click,
          style: null,
          layers: [vectorLayer]
        });
        const hoverSelect = new interaction.Select({
          condition: condition.pointerMove,
          style: null,
          layers: [vectorLayer]
        });
        map.addInteraction(hoverSelect);
        map.addInteraction(clickSelect);
        map.addLayer(vectorLayer);
        function onHoverHandler(event) {
          if (event.selected.length > 0) {
            if (onHover) {
              onHover({
                annotation: annotationRef.current,
                properties
              });
            }
          }
        }
        function onClickHandler(event) {
          if (event.selected.length > 0) {
            // 클릭 이벤트에 의해 선택된 Circle이 있는 경우
            if (onClick) {
              onClick({
                annotation: annotationRef.current,
                properties
              });
            }
            // 선택된 Feature에 대한 작업 수행
            // 예: 스타일 변경, 정보 표시 등
          }
        }

        hoverSelect.on("select", onHoverHandler);
        clickSelect.on("select", onClickHandler);
        return () => {
          hoverSelect.un("select", onHoverHandler);
          clickSelect.un("select", onClickHandler);
          map.removeInteraction(hoverSelect);
          map.removeInteraction(clickSelect);
          map.removeLayer(vectorLayer);
        };
      }, [color, children, map, onHover, properties, onClick]);
      return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    };

    function CustomMultiPoint({
      positions,
      color = "BLUE",
      properties = {},
      onClick,
      onHover,
      zIndex = 0,
      children
    }) {
      const map = useMap();
      const annotationRef = React.useRef(new Feature__default["default"](new geom.MultiPoint(positions.map(position => proj.fromLonLat(position)))));
      const annotationLayerRef = React.useRef(null);
      React.useEffect(() => {
        if (annotationLayerRef.current) {
          annotationLayerRef.current.setZIndex(zIndex);
        }
      }, [zIndex]);
      React.useEffect(() => {
        const vectorSource = new VectorSource__default["default"]();
        const vectorLayer = new VectorLayer__default["default"]({
          source: vectorSource
        });
        const geometry = annotationRef.current.getGeometry();
        const features = geometry.getPoints().map((point, index) => {
          const text = index + 1; // 순번 설정
          const style$1 = new style.Style({
            image: new style.Circle({
              radius: 10,
              fill: new style.Fill({
                color: ANNOTATION_COLOR[color].fill // 원의 색상
              }),

              stroke: new style.Stroke({
                color: ANNOTATION_COLOR[color].stroke,
                width: 2
              })
            }),
            text: makeText({
              text: String(text),
              size: (children === null || children === void 0 ? void 0 : children.props.size) || 15,
              color: (children === null || children === void 0 ? void 0 : children.props.color) ? children.props.color : "black",
              outline: children === null || children === void 0 ? void 0 : children.props.outline,
              isMarker: false
            })
          });
          style$1.getText().setText(text.toString());
          const pointFeature = new Feature__default["default"](point);
          pointFeature.setStyle(style$1);
          pointFeature.setProperties({
            source: vectorSource,
            layer: vectorLayer
          });
          return pointFeature;
        });
        vectorSource.addFeatures(features);
        annotationLayerRef.current = vectorLayer;
        vectorLayer.setZIndex(zIndex);
        const clickSelect = new interaction.Select({
          condition: condition.click,
          style: null,
          layers: [vectorLayer]
        });
        const hoverSelect = new interaction.Select({
          condition: condition.pointerMove,
          style: null,
          layers: [vectorLayer]
        });
        map.addInteraction(hoverSelect);
        map.addInteraction(clickSelect);
        map.addLayer(vectorLayer);
        function onHoverHandler(event) {
          if (event.selected.length > 0) {
            if (onHover) {
              onHover({
                annotation: annotationRef.current,
                properties
              });
            }
          }
        }
        function onClickHandler(event) {
          if (event.selected.length > 0) {
            // 클릭 이벤트에 의해 선택된 Circle이 있는 경우
            if (onClick) {
              onClick({
                annotation: annotationRef.current,
                properties
              });
            }
            // 선택된 Feature에 대한 작업 수행
            // 예: 스타일 변경, 정보 표시 등
          }
        }

        hoverSelect.on("select", onHoverHandler);
        clickSelect.on("select", onClickHandler);
        return () => {
          hoverSelect.un("select", onHoverHandler);
          clickSelect.un("select", onClickHandler);
          map.removeInteraction(hoverSelect);
          map.removeInteraction(clickSelect);
          map.removeLayer(vectorLayer);
        };
      }, [color, children, map, onHover, properties, onClick]);
      return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    }

    const CustomPolygon = ({
      positions,
      color = "BLUE",
      properties = {},
      onClick,
      onHover,
      zIndex = 0,
      children
    }) => {
      const map = useMap();
      const annotationRef = React.useRef(new Feature__default["default"](new geom.Polygon([positions[0].map(position => proj.fromLonLat(position))])));
      const annotationLayerRef = React.useRef(null);
      React.useEffect(() => {
        if (annotationLayerRef.current) {
          annotationLayerRef.current.setZIndex(zIndex);
        }
      }, [zIndex]);
      React.useEffect(() => {
        annotationRef.current.setStyle(new Style__default["default"]({
          stroke: new Stroke__default["default"]({
            color: ANNOTATION_COLOR[color].stroke,
            width: 2
          }),
          fill: new Fill__default["default"]({
            color: ANNOTATION_COLOR[color].fill
          }),
          text: makeText({
            text: children ? children.props.children : "",
            size: (children === null || children === void 0 ? void 0 : children.props.size) || 15,
            color: (children === null || children === void 0 ? void 0 : children.props.color) ? children.props.color : "black",
            outline: children === null || children === void 0 ? void 0 : children.props.outline
          })
        }));
        const vectorSource = new VectorSource__default["default"]({
          features: [annotationRef.current]
        });
        const vectorLayer = new VectorLayer__default["default"]({
          source: vectorSource
        });
        annotationLayerRef.current = vectorLayer;
        annotationRef.current.setProperties({
          source: vectorSource,
          layer: vectorLayer
        });
        vectorLayer.setZIndex(zIndex);
        const clickSelect = new interaction.Select({
          condition: condition.click,
          style: null,
          layers: [vectorLayer]
        });
        const hoverSelect = new interaction.Select({
          condition: condition.pointerMove,
          style: null,
          layers: [vectorLayer]
        });
        map.addInteraction(hoverSelect);
        map.addInteraction(clickSelect);
        map.addLayer(vectorLayer);
        function onHoverHandler(event) {
          if (event.selected.length > 0) {
            if (onHover) {
              onHover({
                annotation: annotationRef.current,
                properties
              });
            }
          }
        }
        function onClickHandler(event) {
          if (event.selected.length > 0) {
            // 클릭 이벤트에 의해 선택된 Circle이 있는 경우
            if (onClick) {
              onClick({
                annotation: annotationRef.current,
                properties
              });
            }
            // 선택된 Feature에 대한 작업 수행
            // 예: 스타일 변경, 정보 표시 등
          }
        }

        hoverSelect.on("select", onHoverHandler);
        clickSelect.on("select", onClickHandler);
        return () => {
          hoverSelect.un("select", onHoverHandler);
          clickSelect.un("select", onClickHandler);
          map.removeInteraction(hoverSelect);
          map.removeInteraction(clickSelect);
          map.removeLayer(vectorLayer);
        };
      }, [color, children, map, onHover, properties, onClick]);
      return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    };

    const CustomPolyLine = ({
      positions,
      color = "BLUE",
      properties = {},
      onClick,
      onHover,
      zIndex = 0,
      children
    }) => {
      const map = useMap();
      const annotationRef = React.useRef(new Feature__default["default"](new geom.LineString(positions.map(position => proj.fromLonLat(position)))));
      const annotationLayerRef = React.useRef(null);
      React.useEffect(() => {
        if (annotationLayerRef.current) {
          annotationLayerRef.current.setZIndex(zIndex);
        }
      }, [zIndex]);
      React.useEffect(() => {
        annotationRef.current.setStyle(new Style__default["default"]({
          stroke: new Stroke__default["default"]({
            color: ANNOTATION_COLOR[color].stroke,
            width: 2
          }),
          fill: new Fill__default["default"]({
            color: ANNOTATION_COLOR[color].fill
          }),
          text: makeText({
            text: children ? children.props.children : "",
            size: (children === null || children === void 0 ? void 0 : children.props.size) || 15,
            color: (children === null || children === void 0 ? void 0 : children.props.color) ? children.props.color : "black",
            outline: children === null || children === void 0 ? void 0 : children.props.outline
          })
        }));
        const vectorSource = new VectorSource__default["default"]({
          features: [annotationRef.current]
        });
        const vectorLayer = new VectorLayer__default["default"]({
          source: vectorSource
        });
        annotationLayerRef.current = vectorLayer;
        annotationRef.current.setProperties({
          source: vectorSource,
          layer: vectorLayer
        });
        vectorLayer.setZIndex(zIndex);
        const clickSelect = new interaction.Select({
          condition: condition.click,
          style: null,
          layers: [vectorLayer]
        });
        const hoverSelect = new interaction.Select({
          condition: condition.pointerMove,
          style: null,
          layers: [vectorLayer]
        });
        map.addInteraction(hoverSelect);
        map.addInteraction(clickSelect);
        map.addLayer(vectorLayer);
        function onHoverHandler(event) {
          if (event.selected.length > 0) {
            if (onHover) {
              onHover({
                annotation: annotationRef.current,
                properties
              });
            }
          }
        }
        function onClickHandler(event) {
          if (event.selected.length > 0) {
            // 클릭 이벤트에 의해 선택된 Circle이 있는 경우
            if (onClick) {
              onClick({
                annotation: annotationRef.current,
                properties
              });
            }
            // 선택된 Feature에 대한 작업 수행
            // 예: 스타일 변경, 정보 표시 등
          }
        }

        hoverSelect.on("select", onHoverHandler);
        clickSelect.on("select", onClickHandler);
        return () => {
          hoverSelect.un("select", onHoverHandler);
          clickSelect.un("select", onClickHandler);
          map.removeInteraction(hoverSelect);
          map.removeInteraction(clickSelect);
          map.removeLayer(vectorLayer);
        };
      }, [color, children, map, onHover, properties, onClick]);
      return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    };

    const CustomRectangle = ({
      positions,
      color = "BLUE",
      properties = {},
      onClick,
      onHover,
      zIndex = 0,
      children
    }) => {
      const map = useMap();
      const annotationRef = React.useRef(new Feature__default["default"](new geom.Polygon([positions[0].map(position => proj.fromLonLat(position))])));
      const annotationLayerRef = React.useRef(null);
      React.useEffect(() => {
        if (annotationLayerRef.current && zIndex) {
          annotationLayerRef.current.setZIndex(zIndex);
        }
      }, [zIndex]);
      React.useEffect(() => {
        if (!map) return;
        annotationRef.current.setStyle(new Style__default["default"]({
          stroke: new Stroke__default["default"]({
            color: ANNOTATION_COLOR[color].stroke,
            width: 2
          }),
          fill: new Fill__default["default"]({
            color: ANNOTATION_COLOR[color].fill
          }),
          text: makeText({
            text: children ? children.props.children : "",
            size: (children === null || children === void 0 ? void 0 : children.props.size) || 15,
            color: (children === null || children === void 0 ? void 0 : children.props.color) ? children.props.color : "black",
            outline: children === null || children === void 0 ? void 0 : children.props.outline
          })
        }));
        const vectorSource = new VectorSource__default["default"]({
          features: [annotationRef.current]
        });
        const vectorLayer = new VectorLayer__default["default"]({
          source: vectorSource
        });
        annotationLayerRef.current = vectorLayer;
        annotationRef.current.setProperties({
          source: vectorSource,
          layer: vectorLayer
        });
        vectorLayer.setZIndex(zIndex);
        const clickSelect = new interaction.Select({
          condition: condition.click,
          style: null,
          layers: [vectorLayer]
        });
        const hoverSelect = new interaction.Select({
          condition: condition.pointerMove,
          style: null,
          layers: [vectorLayer]
        });
        map.addInteraction(hoverSelect);
        map.addInteraction(clickSelect);
        map.addLayer(vectorLayer);
        function onHoverHandler(event) {
          if (event.selected.length > 0) {
            if (onHover) {
              onHover({
                annotation: annotationRef.current,
                properties
              });
            }
          }
        }
        function onClickHandler(event) {
          if (event.selected.length > 0) {
            // 클릭 이벤트에 의해 선택된 Circle이 있는 경우
            if (onClick) {
              onClick({
                annotation: annotationRef.current,
                properties
              });
            }
            // 선택된 Feature에 대한 작업 수행
            // 예: 스타일 변경, 정보 표시 등
          }
        }

        hoverSelect.on("select", onHoverHandler);
        clickSelect.on("select", onClickHandler);
        return () => {
          hoverSelect.un("select", onHoverHandler);
          clickSelect.un("select", onClickHandler);
          map.removeInteraction(hoverSelect);
          map.removeInteraction(clickSelect);
          map.removeLayer(vectorLayer);
        };
      }, [children, color, map, onClick, onHover, properties]);
      return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    };

    const TextMarker = ({
      center,
      color = "BLUE",
      properties = {},
      onClick,
      onHover,
      children,
      zIndex = 0
    }) => {
      const map = useMap();
      const annotationRef = React.useRef(new Feature__default["default"]({
        geometry: new geom.Point(proj.fromLonLat(center))
      }));
      const annotationLayerRef = React.useRef(null);
      React.useEffect(() => {
        if (annotationLayerRef.current && zIndex) {
          annotationLayerRef.current.setZIndex(zIndex);
        }
      }, [zIndex]);
      React.useEffect(() => {
        annotationRef.current.setStyle(new Style__default["default"]({
          text: new Text__default["default"]({
            text: children ? children.props.children : "",
            font: `${(children === null || children === void 0 ? void 0 : children.props.size) || 15}px Arial`,
            fill: new Fill__default["default"]({
              color: (children === null || children === void 0 ? void 0 : children.props.color) ? children.props.color : "black" // 텍스트의 색상
            }),

            overflow: true,
            offsetX: 0,
            offsetY: -15,
            stroke: (children === null || children === void 0 ? void 0 : children.props.outline) ? new Stroke__default["default"]({
              color: "white",
              width: 3
            }) : undefined
          })
        }));
        const vectorSource = new VectorSource__default["default"]({
          features: [annotationRef.current]
        });
        const vectorLayer = new VectorLayer__default["default"]({
          source: vectorSource
        });
        annotationLayerRef.current = vectorLayer;
        annotationRef.current.setProperties({
          source: vectorSource,
          layer: vectorLayer
        });
        vectorLayer.setZIndex(zIndex);
        const clickSelect = new interaction.Select({
          condition: condition.click,
          style: null,
          layers: [vectorLayer]
        });
        const hoverSelect = new interaction.Select({
          condition: condition.pointerMove,
          style: null,
          layers: [vectorLayer]
        });
        map.addInteraction(hoverSelect);
        map.addInteraction(clickSelect);
        map.addLayer(vectorLayer);
        function onHoverHandler(event) {
          if (event.selected.length > 0) {
            if (onHover) {
              onHover({
                annotation: annotationRef.current,
                properties
              });
            }
          }
        }
        function onClickHandler(event) {
          if (event.selected.length > 0) {
            // 클릭 이벤트에 의해 선택된 Circle이 있는 경우
            if (onClick) {
              onClick({
                annotation: annotationRef.current,
                properties
              });
            }
            // 선택된 Feature에 대한 작업 수행
            // 예: 스타일 변경, 정보 표시 등
          }
        }

        hoverSelect.on("select", onHoverHandler);
        clickSelect.on("select", onClickHandler);
        return () => {
          hoverSelect.un("select", onHoverHandler);
          clickSelect.un("select", onClickHandler);
          map.removeInteraction(hoverSelect);
          map.removeInteraction(clickSelect);
          map.removeLayer(vectorLayer);
        };
      }, [color, children, map, onHover, properties, onClick]);
      return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    };

    class TileUrl {
      constructor(url) {
        this.url = url;
      }
      /**
       * This mehod is for converting tile url
       * @param z z coordination
       * @param x x coordination
       * @param y y coordination
       * @returns
       */
      getUrlFromPosition(z, x, y) {
        const fixedUrl = this.url.replace("{z}/{x}/{y}", `${z}/${x}/${y}`);
        return fixedUrl;
      }
    }
    const getProfileFromFeature = feature => {
      const geometry = feature.getGeometry();
      const geometryType = geometry.getType();
      if (geometryType === "Point") {
        return getProfileFromPoint(feature);
      } else if (geometryType === "LineString") {
        return getProfileFromPolyline(feature);
      } else if (geometryType === "Polygon") {
        return getProfileFromPolygon(feature);
      } else if (geometryType === "MultiPoint") {
        return getProfileFromMultiPoint(feature);
      }
      return null;
    };
    const getProfileFromMultiPoint = feature => {
      const geometry = feature.getGeometry();
      return {
        positions: geometry.getCoordinates(),
        properties: geometry.getProperties()
      };
    };
    const getProfileFromPoint = feature => {
      const geometry = feature.getGeometry();
      return {
        positions: geometry.getCoordinates(),
        properties: geometry.getProperties()
      };
    };
    const getProfileFromPolyline = feature => {
      const geometry = feature.getGeometry();
      return {
        positions: geometry.getCoordinates(),
        properties: geometry.getProperties()
      };
    };
    const getProfileFromPolygon = feature => {
      const geometry = feature.getGeometry();
      return {
        positions: geometry.getCoordinates(),
        properties: geometry.getProperties()
      };
    };

    const TileLayer = ({
      url,
      zIndex = 0,
      maxZoom = 42,
      minZoom = 0
    }) => {
      const map = useMap();
      React.useEffect(() => {
        const customTmsSource = new source.XYZ({
          maxZoom,
          minZoom,
          tileUrlFunction: tileCoord => {
            const tileUrl = new TileUrl(url);
            const z = tileCoord[0];
            const x = tileCoord[1];
            const y = Math.pow(2, z) - tileCoord[2] - 1;
            return tileUrl.getUrlFromPosition(z, x, y);
          }
        });
        const customTmsLayer = new OlTileLayer__default["default"]({
          source: customTmsSource,
          zIndex
        });
        map.addLayer(customTmsLayer);
      }, [map]);
      return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    };

    function globals(defs) {
      defs('EPSG:4326', "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees");
      defs('EPSG:4269', "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees");
      defs('EPSG:3857', "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");

      defs.WGS84 = defs['EPSG:4326'];
      defs['EPSG:3785'] = defs['EPSG:3857']; // maintain backward compat, official code is 3857
      defs.GOOGLE = defs['EPSG:3857'];
      defs['EPSG:900913'] = defs['EPSG:3857'];
      defs['EPSG:102113'] = defs['EPSG:3857'];
    }

    var values.PJD_3PARAM = 1;
    var values.PJD_7PARAM = 2;
    var PJD_GRIDSHIFT = 3;
    var PJD_WGS84 = 4; // WGS84 or equivalent
    var PJD_NODATUM = 5; // WGS84 or equivalent
    var SRS_WGS84_SEMIMAJOR = 6378137.0;  // only used in grid shift transforms
    var SRS_WGS84_SEMIMINOR = 6356752.314;  // only used in grid shift transforms
    var SRS_WGS84_ESQUARED = 0.0066943799901413165; // only used in grid shift transforms
    var SEC_TO_RAD = 4.84813681109535993589914102357e-6;
    var values.HALF_PI = Math.PI/2;
    // ellipoid pj_set_ell.c
    var SIXTH = 0.1666666666666666667;
    /* 1/6 */
    var RA4 = 0.04722222222222222222;
    /* 17/360 */
    var RA6 = 0.02215608465608465608;
    var values.EPSLN = 1.0e-10;
    // you'd think you could use Number.EPSILON above but that makes
    // Mollweide get into an infinate loop.

    var D2R$1 = 0.01745329251994329577;
    var values.R2D = 57.29577951308232088;
    var values.FORTPI = Math.PI/4;
    var values.TWO_PI = Math.PI * 2;
    // SPI is slightly greater than Math.PI, so values that exceed the -180..180
    // degree range by a tiny amount don't get wrapped. This prevents points that
    // have drifted from their original location along the 180th meridian (due to
    // floating point error) from changing their sign.
    var values.SPI = 3.14159265359;

    var exports$3 = {};

    exports$3.greenwich = 0.0; //"0dE",
    exports$3.lisbon = -9.131906111111; //"9d07'54.862\"W",
    exports$3.paris = 2.337229166667; //"2d20'14.025\"E",
    exports$3.bogota = -74.080916666667; //"74d04'51.3\"W",
    exports$3.madrid = -3.687938888889; //"3d41'16.58\"W",
    exports$3.rome = 12.452333333333; //"12d27'8.4\"E",
    exports$3.bern = 7.439583333333; //"7d26'22.5\"E",
    exports$3.jakarta = 106.807719444444; //"106d48'27.79\"E",
    exports$3.ferro = -17.666666666667; //"17d40'W",
    exports$3.brussels = 4.367975; //"4d22'4.71\"E",
    exports$3.stockholm = 18.058277777778; //"18d3'29.8\"E",
    exports$3.athens = 23.7163375; //"23d42'58.815\"E",
    exports$3.oslo = 10.722916666667; //"10d43'22.5\"E"

    var units = {
      ft: {to_meter: 0.3048},
      'us-ft': {to_meter: 1200 / 3937}
    };

    var ignoredChar = /[\s_\-\/\(\)]/g;
    function match(obj, key) {
      if (obj[key]) {
        return obj[key];
      }
      var keys = Object.keys(obj);
      var lkey = key.toLowerCase().replace(ignoredChar, '');
      var i = -1;
      var testkey, processedKey;
      while (++i < keys.length) {
        testkey = keys[i];
        processedKey = testkey.toLowerCase().replace(ignoredChar, '');
        if (processedKey === lkey) {
          return obj[testkey];
        }
      }
    }

    function projStr(defData) {
      var self = {};
      var paramObj = defData.split('+').map(function(v) {
        return v.trim();
      }).filter(function(a) {
        return a;
      }).reduce(function(p, a) {
        var split = a.split('=');
        split.push(true);
        p[split[0].toLowerCase()] = split[1];
        return p;
      }, {});
      var paramName, paramVal, paramOutname;
      var params = {
        proj: 'projName',
        datum: 'datumCode',
        rf: function(v) {
          self.rf = parseFloat(v);
        },
        lat_0: function(v) {
          self.lat0 = v * D2R$1;
        },
        lat_1: function(v) {
          self.lat1 = v * D2R$1;
        },
        lat_2: function(v) {
          self.lat2 = v * D2R$1;
        },
        lat_ts: function(v) {
          self.lat_ts = v * D2R$1;
        },
        lon_0: function(v) {
          self.long0 = v * D2R$1;
        },
        lon_1: function(v) {
          self.long1 = v * D2R$1;
        },
        lon_2: function(v) {
          self.long2 = v * D2R$1;
        },
        alpha: function(v) {
          self.alpha = parseFloat(v) * D2R$1;
        },
        gamma: function(v) {
          self.rectified_grid_angle = parseFloat(v);
        },
        lonc: function(v) {
          self.longc = v * D2R$1;
        },
        x_0: function(v) {
          self.x0 = parseFloat(v);
        },
        y_0: function(v) {
          self.y0 = parseFloat(v);
        },
        k_0: function(v) {
          self.k0 = parseFloat(v);
        },
        k: function(v) {
          self.k0 = parseFloat(v);
        },
        a: function(v) {
          self.a = parseFloat(v);
        },
        b: function(v) {
          self.b = parseFloat(v);
        },
        r_a: function() {
          self.R_A = true;
        },
        zone: function(v) {
          self.zone = parseInt(v, 10);
        },
        south: function() {
          self.utmSouth = true;
        },
        towgs84: function(v) {
          self.datum_params = v.split(",").map(function(a) {
            return parseFloat(a);
          });
        },
        to_meter: function(v) {
          self.to_meter = parseFloat(v);
        },
        units: function(v) {
          self.units = v;
          var unit = match(units, v);
          if (unit) {
            self.to_meter = unit.to_meter;
          }
        },
        from_greenwich: function(v) {
          self.from_greenwich = v * D2R$1;
        },
        pm: function(v) {
          var pm = match(exports$3, v);
          self.from_greenwich = (pm ? pm : parseFloat(v)) * D2R$1;
        },
        nadgrids: function(v) {
          if (v === '@null') {
            self.datumCode = 'none';
          }
          else {
            self.nadgrids = v;
          }
        },
        axis: function(v) {
          var legalAxis = "ewnsud";
          if (v.length === 3 && legalAxis.indexOf(v.substr(0, 1)) !== -1 && legalAxis.indexOf(v.substr(1, 1)) !== -1 && legalAxis.indexOf(v.substr(2, 1)) !== -1) {
            self.axis = v;
          }
        },
        approx: function() {
          self.approx = true;
        }
      };
      for (paramName in paramObj) {
        paramVal = paramObj[paramName];
        if (paramName in params) {
          paramOutname = params[paramName];
          if (typeof paramOutname === 'function') {
            paramOutname(paramVal);
          }
          else {
            self[paramOutname] = paramVal;
          }
        }
        else {
          self[paramName] = paramVal;
        }
      }
      if(typeof self.datumCode === 'string' && self.datumCode !== "WGS84"){
        self.datumCode = self.datumCode.toLowerCase();
      }
      return self;
    }

    var NEUTRAL = 1;
    var KEYWORD = 2;
    var NUMBER = 3;
    var QUOTED = 4;
    var AFTERQUOTE = 5;
    var ENDED = -1;
    var whitespace = /\s/;
    var latin = /[A-Za-z]/;
    var keyword = /[A-Za-z84_]/;
    var endThings = /[,\]]/;
    var digets = /[\d\.E\-\+]/;
    // const ignoredChar = /[\s_\-\/\(\)]/g;
    function Parser(text) {
      if (typeof text !== 'string') {
        throw new Error('not a string');
      }
      this.text = text.trim();
      this.level = 0;
      this.place = 0;
      this.root = null;
      this.stack = [];
      this.currentObject = null;
      this.state = NEUTRAL;
    }
    Parser.prototype.readCharicter = function() {
      var char = this.text[this.place++];
      if (this.state !== QUOTED) {
        while (whitespace.test(char)) {
          if (this.place >= this.text.length) {
            return;
          }
          char = this.text[this.place++];
        }
      }
      switch (this.state) {
        case NEUTRAL:
          return this.neutral(char);
        case KEYWORD:
          return this.keyword(char)
        case QUOTED:
          return this.quoted(char);
        case AFTERQUOTE:
          return this.afterquote(char);
        case NUMBER:
          return this.number(char);
        case ENDED:
          return;
      }
    };
    Parser.prototype.afterquote = function(char) {
      if (char === '"') {
        this.word += '"';
        this.state = QUOTED;
        return;
      }
      if (endThings.test(char)) {
        this.word = this.word.trim();
        this.afterItem(char);
        return;
      }
      throw new Error('havn\'t handled "' +char + '" in afterquote yet, index ' + this.place);
    };
    Parser.prototype.afterItem = function(char) {
      if (char === ',') {
        if (this.word !== null) {
          this.currentObject.push(this.word);
        }
        this.word = null;
        this.state = NEUTRAL;
        return;
      }
      if (char === ']') {
        this.level--;
        if (this.word !== null) {
          this.currentObject.push(this.word);
          this.word = null;
        }
        this.state = NEUTRAL;
        this.currentObject = this.stack.pop();
        if (!this.currentObject) {
          this.state = ENDED;
        }

        return;
      }
    };
    Parser.prototype.number = function(char) {
      if (digets.test(char)) {
        this.word += char;
        return;
      }
      if (endThings.test(char)) {
        this.word = parseFloat(this.word);
        this.afterItem(char);
        return;
      }
      throw new Error('havn\'t handled "' +char + '" in number yet, index ' + this.place);
    };
    Parser.prototype.quoted = function(char) {
      if (char === '"') {
        this.state = AFTERQUOTE;
        return;
      }
      this.word += char;
      return;
    };
    Parser.prototype.keyword = function(char) {
      if (keyword.test(char)) {
        this.word += char;
        return;
      }
      if (char === '[') {
        var newObjects = [];
        newObjects.push(this.word);
        this.level++;
        if (this.root === null) {
          this.root = newObjects;
        } else {
          this.currentObject.push(newObjects);
        }
        this.stack.push(this.currentObject);
        this.currentObject = newObjects;
        this.state = NEUTRAL;
        return;
      }
      if (endThings.test(char)) {
        this.afterItem(char);
        return;
      }
      throw new Error('havn\'t handled "' +char + '" in keyword yet, index ' + this.place);
    };
    Parser.prototype.neutral = function(char) {
      if (latin.test(char)) {
        this.word = char;
        this.state = KEYWORD;
        return;
      }
      if (char === '"') {
        this.word = '';
        this.state = QUOTED;
        return;
      }
      if (digets.test(char)) {
        this.word = char;
        this.state = NUMBER;
        return;
      }
      if (endThings.test(char)) {
        this.afterItem(char);
        return;
      }
      throw new Error('havn\'t handled "' +char + '" in neutral yet, index ' + this.place);
    };
    Parser.prototype.output = function() {
      while (this.place < this.text.length) {
        this.readCharicter();
      }
      if (this.state === ENDED) {
        return this.root;
      }
      throw new Error('unable to parse string "' +this.text + '". State is ' + this.state);
    };

    function parseString(txt) {
      var parser = new Parser(txt);
      return parser.output();
    }

    function mapit(obj, key, value) {
      if (Array.isArray(key)) {
        value.unshift(key);
        key = null;
      }
      var thing = key ? {} : obj;

      var out = value.reduce(function(newObj, item) {
        sExpr(item, newObj);
        return newObj
      }, thing);
      if (key) {
        obj[key] = out;
      }
    }

    function sExpr(v, obj) {
      if (!Array.isArray(v)) {
        obj[v] = true;
        return;
      }
      var key = v.shift();
      if (key === 'PARAMETER') {
        key = v.shift();
      }
      if (v.length === 1) {
        if (Array.isArray(v[0])) {
          obj[key] = {};
          sExpr(v[0], obj[key]);
          return;
        }
        obj[key] = v[0];
        return;
      }
      if (!v.length) {
        obj[key] = true;
        return;
      }
      if (key === 'TOWGS84') {
        obj[key] = v;
        return;
      }
      if (key === 'AXIS') {
        if (!(key in obj)) {
          obj[key] = [];
        }
        obj[key].push(v);
        return;
      }
      if (!Array.isArray(key)) {
        obj[key] = {};
      }

      var i;
      switch (key) {
        case 'UNIT':
        case 'PRIMEM':
        case 'VERT_DATUM':
          obj[key] = {
            name: v[0].toLowerCase(),
            convert: v[1]
          };
          if (v.length === 3) {
            sExpr(v[2], obj[key]);
          }
          return;
        case 'SPHEROID':
        case 'ELLIPSOID':
          obj[key] = {
            name: v[0],
            a: v[1],
            rf: v[2]
          };
          if (v.length === 4) {
            sExpr(v[3], obj[key]);
          }
          return;
        case 'PROJECTEDCRS':
        case 'PROJCRS':
        case 'GEOGCS':
        case 'GEOCCS':
        case 'PROJCS':
        case 'LOCAL_CS':
        case 'GEODCRS':
        case 'GEODETICCRS':
        case 'GEODETICDATUM':
        case 'EDATUM':
        case 'ENGINEERINGDATUM':
        case 'VERT_CS':
        case 'VERTCRS':
        case 'VERTICALCRS':
        case 'COMPD_CS':
        case 'COMPOUNDCRS':
        case 'ENGINEERINGCRS':
        case 'ENGCRS':
        case 'FITTED_CS':
        case 'LOCAL_DATUM':
        case 'DATUM':
          v[0] = ['name', v[0]];
          mapit(obj, key, v);
          return;
        default:
          i = -1;
          while (++i < v.length) {
            if (!Array.isArray(v[i])) {
              return sExpr(v, obj[key]);
            }
          }
          return mapit(obj, key, v);
      }
    }

    var D2R = 0.01745329251994329577;



    function rename(obj, params) {
      var outName = params[0];
      var inName = params[1];
      if (!(outName in obj) && (inName in obj)) {
        obj[outName] = obj[inName];
        if (params.length === 3) {
          obj[outName] = params[2](obj[outName]);
        }
      }
    }

    function d2r(input) {
      return input * D2R;
    }

    function cleanWKT(wkt) {
      if (wkt.type === 'GEOGCS') {
        wkt.projName = 'longlat';
      } else if (wkt.type === 'LOCAL_CS') {
        wkt.projName = 'identity';
        wkt.local = true;
      } else {
        if (typeof wkt.PROJECTION === 'object') {
          wkt.projName = Object.keys(wkt.PROJECTION)[0];
        } else {
          wkt.projName = wkt.PROJECTION;
        }
      }
      if (wkt.AXIS) {
        var axisOrder = '';
        for (var i = 0, ii = wkt.AXIS.length; i < ii; ++i) {
          var axis = [wkt.AXIS[i][0].toLowerCase(), wkt.AXIS[i][1].toLowerCase()];
          if (axis[0].indexOf('north') !== -1 || ((axis[0] === 'y' || axis[0] === 'lat') && axis[1] === 'north')) {
            axisOrder += 'n';
          } else if (axis[0].indexOf('south') !== -1 || ((axis[0] === 'y' || axis[0] === 'lat') && axis[1] === 'south')) {
            axisOrder += 's';
          } else if (axis[0].indexOf('east') !== -1 || ((axis[0] === 'x' || axis[0] === 'lon') && axis[1] === 'east')) {
            axisOrder += 'e';
          } else if (axis[0].indexOf('west') !== -1 || ((axis[0] === 'x' || axis[0] === 'lon') && axis[1] === 'west')) {
            axisOrder += 'w';
          }
        }
        if (axisOrder.length === 2) {
          axisOrder += 'u';
        }
        if (axisOrder.length === 3) {
          wkt.axis = axisOrder;
        }
      }
      if (wkt.UNIT) {
        wkt.units = wkt.UNIT.name.toLowerCase();
        if (wkt.units === 'metre') {
          wkt.units = 'meter';
        }
        if (wkt.UNIT.convert) {
          if (wkt.type === 'GEOGCS') {
            if (wkt.DATUM && wkt.DATUM.SPHEROID) {
              wkt.to_meter = wkt.UNIT.convert*wkt.DATUM.SPHEROID.a;
            }
          } else {
            wkt.to_meter = wkt.UNIT.convert;
          }
        }
      }
      var geogcs = wkt.GEOGCS;
      if (wkt.type === 'GEOGCS') {
        geogcs = wkt;
      }
      if (geogcs) {
        //if(wkt.GEOGCS.PRIMEM&&wkt.GEOGCS.PRIMEM.convert){
        //  wkt.from_greenwich=wkt.GEOGCS.PRIMEM.convert*D2R;
        //}
        if (geogcs.DATUM) {
          wkt.datumCode = geogcs.DATUM.name.toLowerCase();
        } else {
          wkt.datumCode = geogcs.name.toLowerCase();
        }
        if (wkt.datumCode.slice(0, 2) === 'd_') {
          wkt.datumCode = wkt.datumCode.slice(2);
        }
        if (wkt.datumCode === 'new_zealand_geodetic_datum_1949' || wkt.datumCode === 'new_zealand_1949') {
          wkt.datumCode = 'nzgd49';
        }
        if (wkt.datumCode === 'wgs_1984' || wkt.datumCode === 'world_geodetic_system_1984') {
          if (wkt.PROJECTION === 'Mercator_Auxiliary_Sphere') {
            wkt.sphere = true;
          }
          wkt.datumCode = 'wgs84';
        }
        if (wkt.datumCode.slice(-6) === '_ferro') {
          wkt.datumCode = wkt.datumCode.slice(0, - 6);
        }
        if (wkt.datumCode.slice(-8) === '_jakarta') {
          wkt.datumCode = wkt.datumCode.slice(0, - 8);
        }
        if (~wkt.datumCode.indexOf('belge')) {
          wkt.datumCode = 'rnb72';
        }
        if (geogcs.DATUM && geogcs.DATUM.SPHEROID) {
          wkt.ellps = geogcs.DATUM.SPHEROID.name.replace('_19', '').replace(/[Cc]larke\_18/, 'clrk');
          if (wkt.ellps.toLowerCase().slice(0, 13) === 'international') {
            wkt.ellps = 'intl';
          }

          wkt.a = geogcs.DATUM.SPHEROID.a;
          wkt.rf = parseFloat(geogcs.DATUM.SPHEROID.rf, 10);
        }

        if (geogcs.DATUM && geogcs.DATUM.TOWGS84) {
          wkt.datum_params = geogcs.DATUM.TOWGS84;
        }
        if (~wkt.datumCode.indexOf('osgb_1936')) {
          wkt.datumCode = 'osgb36';
        }
        if (~wkt.datumCode.indexOf('osni_1952')) {
          wkt.datumCode = 'osni52';
        }
        if (~wkt.datumCode.indexOf('tm65')
          || ~wkt.datumCode.indexOf('geodetic_datum_of_1965')) {
          wkt.datumCode = 'ire65';
        }
        if (wkt.datumCode === 'ch1903+') {
          wkt.datumCode = 'ch1903';
        }
        if (~wkt.datumCode.indexOf('israel')) {
          wkt.datumCode = 'isr93';
        }
      }
      if (wkt.b && !isFinite(wkt.b)) {
        wkt.b = wkt.a;
      }

      function toMeter(input) {
        var ratio = wkt.to_meter || 1;
        return input * ratio;
      }
      var renamer = function(a) {
        return rename(wkt, a);
      };
      var list = [
        ['standard_parallel_1', 'Standard_Parallel_1'],
        ['standard_parallel_1', 'Latitude of 1st standard parallel'],
        ['standard_parallel_2', 'Standard_Parallel_2'],
        ['standard_parallel_2', 'Latitude of 2nd standard parallel'],
        ['false_easting', 'False_Easting'],
        ['false_easting', 'False easting'],
        ['false-easting', 'Easting at false origin'],
        ['false_northing', 'False_Northing'],
        ['false_northing', 'False northing'],
        ['false_northing', 'Northing at false origin'],
        ['central_meridian', 'Central_Meridian'],
        ['central_meridian', 'Longitude of natural origin'],
        ['central_meridian', 'Longitude of false origin'],
        ['latitude_of_origin', 'Latitude_Of_Origin'],
        ['latitude_of_origin', 'Central_Parallel'],
        ['latitude_of_origin', 'Latitude of natural origin'],
        ['latitude_of_origin', 'Latitude of false origin'],
        ['scale_factor', 'Scale_Factor'],
        ['k0', 'scale_factor'],
        ['latitude_of_center', 'Latitude_Of_Center'],
        ['latitude_of_center', 'Latitude_of_center'],
        ['lat0', 'latitude_of_center', d2r],
        ['longitude_of_center', 'Longitude_Of_Center'],
        ['longitude_of_center', 'Longitude_of_center'],
        ['longc', 'longitude_of_center', d2r],
        ['x0', 'false_easting', toMeter],
        ['y0', 'false_northing', toMeter],
        ['long0', 'central_meridian', d2r],
        ['lat0', 'latitude_of_origin', d2r],
        ['lat0', 'standard_parallel_1', d2r],
        ['lat1', 'standard_parallel_1', d2r],
        ['lat2', 'standard_parallel_2', d2r],
        ['azimuth', 'Azimuth'],
        ['alpha', 'azimuth', d2r],
        ['srsCode', 'name']
      ];
      list.forEach(renamer);
      if (!wkt.long0 && wkt.longc && (wkt.projName === 'Albers_Conic_Equal_Area' || wkt.projName === 'Lambert_Azimuthal_Equal_Area')) {
        wkt.long0 = wkt.longc;
      }
      if (!wkt.lat_ts && wkt.lat1 && (wkt.projName === 'Stereographic_South_Pole' || wkt.projName === 'Polar Stereographic (variant B)')) {
        wkt.lat0 = d2r(wkt.lat1 > 0 ? 90 : -90);
        wkt.lat_ts = wkt.lat1;
      } else if (!wkt.lat_ts && wkt.lat0 && wkt.projName === 'Polar_Stereographic') {
        wkt.lat_ts = wkt.lat0;
        wkt.lat0 = d2r(wkt.lat0 > 0 ? 90 : -90);
      }
    }
    function wkt(wkt) {
      var lisp = parseString(wkt);
      var type = lisp.shift();
      var name = lisp.shift();
      lisp.unshift(['name', name]);
      lisp.unshift(['type', type]);
      var obj = {};
      sExpr(lisp, obj);
      cleanWKT(obj);
      return obj;
    }

    function defs(name) {
      /*global console*/
      var that = this;
      if (arguments.length === 2) {
        var def = arguments[1];
        if (typeof def === 'string') {
          if (def.charAt(0) === '+') {
            defs[name] = projStr(arguments[1]);
          }
          else {
            defs[name] = wkt(arguments[1]);
          }
        } else {
          defs[name] = def;
        }
      }
      else if (arguments.length === 1) {
        if (Array.isArray(name)) {
          return name.map(function(v) {
            if (Array.isArray(v)) {
              defs.apply(that, v);
            }
            else {
              defs(v);
            }
          });
        }
        else if (typeof name === 'string') {
          if (name in defs) {
            return defs[name];
          }
        }
        else if ('EPSG' in name) {
          defs['EPSG:' + name.EPSG] = name;
        }
        else if ('ESRI' in name) {
          defs['ESRI:' + name.ESRI] = name;
        }
        else if ('IAU2000' in name) {
          defs['IAU2000:' + name.IAU2000] = name;
        }
        else {
          console.log(name);
        }
        return;
      }


    }
    globals(defs);

    function testObj(code){
      return typeof code === 'string';
    }
    function testDef(code){
      return code in defs;
    }
    var codeWords = ['PROJECTEDCRS', 'PROJCRS', 'GEOGCS','GEOCCS','PROJCS','LOCAL_CS', 'GEODCRS', 'GEODETICCRS', 'GEODETICDATUM', 'ENGCRS', 'ENGINEERINGCRS'];
    function testWKT(code){
      return codeWords.some(function (word) {
        return code.indexOf(word) > -1;
      });
    }
    var codes = ['3857', '900913', '3785', '102113'];
    function checkMercator(item) {
      var auth = match(item, 'authority');
      if (!auth) {
        return;
      }
      var code = match(auth, 'epsg');
      return code && codes.indexOf(code) > -1;
    }
    function checkProjStr(item) {
      var ext = match(item, 'extension');
      if (!ext) {
        return;
      }
      return match(ext, 'proj4');
    }
    function testProj(code){
      return code[0] === '+';
    }
    function parse(code){
      if (testObj(code)) {
        //check to see if this is a WKT string
        if (testDef(code)) {
          return defs[code];
        }
        if (testWKT(code)) {
          var out = wkt(code);
          // test of spetial case, due to this being a very common and often malformed
          if (checkMercator(out)) {
            return defs['EPSG:3857'];
          }
          var maybeProjStr = checkProjStr(out);
          if (maybeProjStr) {
            return projStr(maybeProjStr);
          }
          return out;
        }
        if (testProj(code)) {
          return projStr(code);
        }
      }else {
        return code;
      }
    }

    function extend(destination, source) {
      destination = destination || {};
      var value, property;
      if (!source) {
        return destination;
      }
      for (property in source) {
        value = source[property];
        if (value !== undefined) {
          destination[property] = value;
        }
      }
      return destination;
    }

    function msfnz(eccent, sinphi, cosphi) {
      var con = eccent * sinphi;
      return cosphi / (Math.sqrt(1 - con * con));
    }

    function sign(x) {
      return x<0 ? -1 : 1;
    }

    function adjust_lon(x) {
      return (Math.abs(x) <= values.SPI) ? x : (x - (sign(x) * values.TWO_PI));
    }

    function tsfnz(eccent, phi, sinphi) {
      var con = eccent * sinphi;
      var com = 0.5 * eccent;
      con = Math.pow(((1 - con) / (1 + con)), com);
      return (Math.tan(0.5 * (values.HALF_PI - phi)) / con);
    }

    function phi2z(eccent, ts) {
      var eccnth = 0.5 * eccent;
      var con, dphi;
      var phi = values.HALF_PI - 2 * Math.atan(ts);
      for (var i = 0; i <= 15; i++) {
        con = eccent * Math.sin(phi);
        dphi = values.HALF_PI - 2 * Math.atan(ts * (Math.pow(((1 - con) / (1 + con)), eccnth))) - phi;
        phi += dphi;
        if (Math.abs(dphi) <= 0.0000000001) {
          return phi;
        }
      }
      //console.log("phi2z has NoConvergence");
      return -9999;
    }

    function init$v() {
      var con = this.b / this.a;
      this.es = 1 - con * con;
      if(!('x0' in this)){
        this.x0 = 0;
      }
      if(!('y0' in this)){
        this.y0 = 0;
      }
      this.e = Math.sqrt(this.es);
      if (this.lat_ts) {
        if (this.sphere) {
          this.k0 = Math.cos(this.lat_ts);
        }
        else {
          this.k0 = msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
        }
      }
      else {
        if (!this.k0) {
          if (this.k) {
            this.k0 = this.k;
          }
          else {
            this.k0 = 1;
          }
        }
      }
    }

    /* Mercator forward equations--mapping lat,long to x,y
      --------------------------------------------------*/

    function forward$u(p) {
      var lon = p.x;
      var lat = p.y;
      // convert to radians
      if (lat * values.R2D > 90 && lat * values.R2D < -90 && lon * values.R2D > 180 && lon * values.R2D < -180) {
        return null;
      }

      var x, y;
      if (Math.abs(Math.abs(lat) - values.HALF_PI) <= values.EPSLN) {
        return null;
      }
      else {
        if (this.sphere) {
          x = this.x0 + this.a * this.k0 * adjust_lon(lon - this.long0);
          y = this.y0 + this.a * this.k0 * Math.log(Math.tan(values.FORTPI + 0.5 * lat));
        }
        else {
          var sinphi = Math.sin(lat);
          var ts = tsfnz(this.e, lat, sinphi);
          x = this.x0 + this.a * this.k0 * adjust_lon(lon - this.long0);
          y = this.y0 - this.a * this.k0 * Math.log(ts);
        }
        p.x = x;
        p.y = y;
        return p;
      }
    }

    /* Mercator inverse equations--mapping x,y to lat/long
      --------------------------------------------------*/
    function inverse$u(p) {

      var x = p.x - this.x0;
      var y = p.y - this.y0;
      var lon, lat;

      if (this.sphere) {
        lat = values.HALF_PI - 2 * Math.atan(Math.exp(-y / (this.a * this.k0)));
      }
      else {
        var ts = Math.exp(-y / (this.a * this.k0));
        lat = phi2z(this.e, ts);
        if (lat === -9999) {
          return null;
        }
      }
      lon = adjust_lon(this.long0 + x / (this.a * this.k0));

      p.x = lon;
      p.y = lat;
      return p;
    }

    var names$w = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"];
    var merc = {
      init: init$v,
      forward: forward$u,
      inverse: inverse$u,
      names: names$w
    };

    function init$u() {
      //no-op for longlat
    }

    function identity(pt) {
      return pt;
    }
    var names$v = ["longlat", "identity"];
    var longlat = {
      init: init$u,
      forward: identity,
      inverse: identity,
      names: names$v
    };

    var projs = [merc, longlat];
    var names$u = {};
    var projStore = [];

    function add(proj, i) {
      var len = projStore.length;
      if (!proj.names) {
        console.log(i);
        return true;
      }
      projStore[len] = proj;
      proj.names.forEach(function(n) {
        names$u[n.toLowerCase()] = len;
      });
      return this;
    }

    function get(name) {
      if (!name) {
        return false;
      }
      var n = name.toLowerCase();
      if (typeof names$u[n] !== 'undefined' && projStore[names$u[n]]) {
        return projStore[names$u[n]];
      }
    }

    function start() {
      projs.forEach(add);
    }
    var projections = {
      start: start,
      add: add,
      get: get
    };

    var exports$2 = {};
    exports$2.MERIT = {
      a: 6378137.0,
      rf: 298.257,
      ellipseName: "MERIT 1983"
    };

    exports$2.SGS85 = {
      a: 6378136.0,
      rf: 298.257,
      ellipseName: "Soviet Geodetic System 85"
    };

    exports$2.GRS80 = {
      a: 6378137.0,
      rf: 298.257222101,
      ellipseName: "GRS 1980(IUGG, 1980)"
    };

    exports$2.IAU76 = {
      a: 6378140.0,
      rf: 298.257,
      ellipseName: "IAU 1976"
    };

    exports$2.airy = {
      a: 6377563.396,
      b: 6356256.910,
      ellipseName: "Airy 1830"
    };

    exports$2.APL4 = {
      a: 6378137,
      rf: 298.25,
      ellipseName: "Appl. Physics. 1965"
    };

    exports$2.NWL9D = {
      a: 6378145.0,
      rf: 298.25,
      ellipseName: "Naval Weapons Lab., 1965"
    };

    exports$2.mod_airy = {
      a: 6377340.189,
      b: 6356034.446,
      ellipseName: "Modified Airy"
    };

    exports$2.andrae = {
      a: 6377104.43,
      rf: 300.0,
      ellipseName: "Andrae 1876 (Den., Iclnd.)"
    };

    exports$2.aust_SA = {
      a: 6378160.0,
      rf: 298.25,
      ellipseName: "Australian Natl & S. Amer. 1969"
    };

    exports$2.GRS67 = {
      a: 6378160.0,
      rf: 298.2471674270,
      ellipseName: "GRS 67(IUGG 1967)"
    };

    exports$2.bessel = {
      a: 6377397.155,
      rf: 299.1528128,
      ellipseName: "Bessel 1841"
    };

    exports$2.bess_nam = {
      a: 6377483.865,
      rf: 299.1528128,
      ellipseName: "Bessel 1841 (Namibia)"
    };

    exports$2.clrk66 = {
      a: 6378206.4,
      b: 6356583.8,
      ellipseName: "Clarke 1866"
    };

    exports$2.clrk80 = {
      a: 6378249.145,
      rf: 293.4663,
      ellipseName: "Clarke 1880 mod."
    };

    exports$2.clrk80ign = {
      a: 6378249.2,
      b: 6356515,
      rf: 293.4660213,
      ellipseName: "Clarke 1880 (IGN)"
    };

    exports$2.clrk58 = {
      a: 6378293.645208759,
      rf: 294.2606763692654,
      ellipseName: "Clarke 1858"
    };

    exports$2.CPM = {
      a: 6375738.7,
      rf: 334.29,
      ellipseName: "Comm. des Poids et Mesures 1799"
    };

    exports$2.delmbr = {
      a: 6376428.0,
      rf: 311.5,
      ellipseName: "Delambre 1810 (Belgium)"
    };

    exports$2.engelis = {
      a: 6378136.05,
      rf: 298.2566,
      ellipseName: "Engelis 1985"
    };

    exports$2.evrst30 = {
      a: 6377276.345,
      rf: 300.8017,
      ellipseName: "Everest 1830"
    };

    exports$2.evrst48 = {
      a: 6377304.063,
      rf: 300.8017,
      ellipseName: "Everest 1948"
    };

    exports$2.evrst56 = {
      a: 6377301.243,
      rf: 300.8017,
      ellipseName: "Everest 1956"
    };

    exports$2.evrst69 = {
      a: 6377295.664,
      rf: 300.8017,
      ellipseName: "Everest 1969"
    };

    exports$2.evrstSS = {
      a: 6377298.556,
      rf: 300.8017,
      ellipseName: "Everest (Sabah & Sarawak)"
    };

    exports$2.fschr60 = {
      a: 6378166.0,
      rf: 298.3,
      ellipseName: "Fischer (Mercury Datum) 1960"
    };

    exports$2.fschr60m = {
      a: 6378155.0,
      rf: 298.3,
      ellipseName: "Fischer 1960"
    };

    exports$2.fschr68 = {
      a: 6378150.0,
      rf: 298.3,
      ellipseName: "Fischer 1968"
    };

    exports$2.helmert = {
      a: 6378200.0,
      rf: 298.3,
      ellipseName: "Helmert 1906"
    };

    exports$2.hough = {
      a: 6378270.0,
      rf: 297.0,
      ellipseName: "Hough"
    };

    exports$2.intl = {
      a: 6378388.0,
      rf: 297.0,
      ellipseName: "International 1909 (Hayford)"
    };

    exports$2.kaula = {
      a: 6378163.0,
      rf: 298.24,
      ellipseName: "Kaula 1961"
    };

    exports$2.lerch = {
      a: 6378139.0,
      rf: 298.257,
      ellipseName: "Lerch 1979"
    };

    exports$2.mprts = {
      a: 6397300.0,
      rf: 191.0,
      ellipseName: "Maupertius 1738"
    };

    exports$2.new_intl = {
      a: 6378157.5,
      b: 6356772.2,
      ellipseName: "New International 1967"
    };

    exports$2.plessis = {
      a: 6376523.0,
      rf: 6355863.0,
      ellipseName: "Plessis 1817 (France)"
    };

    exports$2.krass = {
      a: 6378245.0,
      rf: 298.3,
      ellipseName: "Krassovsky, 1942"
    };

    exports$2.SEasia = {
      a: 6378155.0,
      b: 6356773.3205,
      ellipseName: "Southeast Asia"
    };

    exports$2.walbeck = {
      a: 6376896.0,
      b: 6355834.8467,
      ellipseName: "Walbeck"
    };

    exports$2.WGS60 = {
      a: 6378165.0,
      rf: 298.3,
      ellipseName: "WGS 60"
    };

    exports$2.WGS66 = {
      a: 6378145.0,
      rf: 298.25,
      ellipseName: "WGS 66"
    };

    exports$2.WGS7 = {
      a: 6378135.0,
      rf: 298.26,
      ellipseName: "WGS 72"
    };

    var WGS84 = exports$2.WGS84 = {
      a: 6378137.0,
      rf: 298.257223563,
      ellipseName: "WGS 84"
    };

    exports$2.sphere = {
      a: 6370997.0,
      b: 6370997.0,
      ellipseName: "Normal Sphere (r=6370997)"
    };

    function eccentricity(a, b, rf, R_A) {
      var a2 = a * a; // used in geocentric
      var b2 = b * b; // used in geocentric
      var es = (a2 - b2) / a2; // e ^ 2
      var e = 0;
      if (R_A) {
        a *= 1 - es * (SIXTH + es * (RA4 + es * RA6));
        a2 = a * a;
        es = 0;
      } else {
        e = Math.sqrt(es); // eccentricity
      }
      var ep2 = (a2 - b2) / b2; // used in geocentric
      return {
        es: es,
        e: e,
        ep2: ep2
      };
    }
    function sphere(a, b, rf, ellps, sphere) {
      if (!a) { // do we have an ellipsoid?
        var ellipse = match(exports$2, ellps);
        if (!ellipse) {
          ellipse = WGS84;
        }
        a = ellipse.a;
        b = ellipse.b;
        rf = ellipse.rf;
      }

      if (rf && !b) {
        b = (1.0 - 1.0 / rf) * a;
      }
      if (rf === 0 || Math.abs(a - b) < values.EPSLN) {
        sphere = true;
        b = a;
      }
      return {
        a: a,
        b: b,
        rf: rf,
        sphere: sphere
      };
    }

    var exports$1 = {};
    exports$1.wgs84 = {
      towgs84: "0,0,0",
      ellipse: "WGS84",
      datumName: "WGS84"
    };

    exports$1.ch1903 = {
      towgs84: "674.374,15.056,405.346",
      ellipse: "bessel",
      datumName: "swiss"
    };

    exports$1.ggrs87 = {
      towgs84: "-199.87,74.79,246.62",
      ellipse: "GRS80",
      datumName: "Greek_Geodetic_Reference_System_1987"
    };

    exports$1.nad83 = {
      towgs84: "0,0,0",
      ellipse: "GRS80",
      datumName: "North_American_Datum_1983"
    };

    exports$1.nad27 = {
      nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
      ellipse: "clrk66",
      datumName: "North_American_Datum_1927"
    };

    exports$1.potsdam = {
      towgs84: "598.1,73.7,418.2,0.202,0.045,-2.455,6.7",
      ellipse: "bessel",
      datumName: "Potsdam Rauenberg 1950 DHDN"
    };

    exports$1.carthage = {
      towgs84: "-263.0,6.0,431.0",
      ellipse: "clark80",
      datumName: "Carthage 1934 Tunisia"
    };

    exports$1.hermannskogel = {
      towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232",
      ellipse: "bessel",
      datumName: "Hermannskogel"
    };

    exports$1.osni52 = {
      towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
      ellipse: "airy",
      datumName: "Irish National"
    };

    exports$1.ire65 = {
      towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
      ellipse: "mod_airy",
      datumName: "Ireland 1965"
    };

    exports$1.rassadiran = {
      towgs84: "-133.63,-157.5,-158.62",
      ellipse: "intl",
      datumName: "Rassadiran"
    };

    exports$1.nzgd49 = {
      towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
      ellipse: "intl",
      datumName: "New Zealand Geodetic Datum 1949"
    };

    exports$1.osgb36 = {
      towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
      ellipse: "airy",
      datumName: "Airy 1830"
    };

    exports$1.s_jtsk = {
      towgs84: "589,76,480",
      ellipse: 'bessel',
      datumName: 'S-JTSK (Ferro)'
    };

    exports$1.beduaram = {
      towgs84: '-106,-87,188',
      ellipse: 'clrk80',
      datumName: 'Beduaram'
    };

    exports$1.gunung_segara = {
      towgs84: '-403,684,41',
      ellipse: 'bessel',
      datumName: 'Gunung Segara Jakarta'
    };

    exports$1.rnb72 = {
      towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",
      ellipse: "intl",
      datumName: "Reseau National Belge 1972"
    };

    function datum(datumCode, datum_params, a, b, es, ep2, nadgrids) {
      var out = {};

      if (datumCode === undefined || datumCode === 'none') {
        out.datum_type = PJD_NODATUM;
      } else {
        out.datum_type = PJD_WGS84;
      }

      if (datum_params) {
        out.datum_params = datum_params.map(parseFloat);
        if (out.datum_params[0] !== 0 || out.datum_params[1] !== 0 || out.datum_params[2] !== 0) {
          out.datum_type = values.PJD_3PARAM;
        }
        if (out.datum_params.length > 3) {
          if (out.datum_params[3] !== 0 || out.datum_params[4] !== 0 || out.datum_params[5] !== 0 || out.datum_params[6] !== 0) {
            out.datum_type = values.PJD_7PARAM;
            out.datum_params[3] *= SEC_TO_RAD;
            out.datum_params[4] *= SEC_TO_RAD;
            out.datum_params[5] *= SEC_TO_RAD;
            out.datum_params[6] = (out.datum_params[6] / 1000000.0) + 1.0;
          }
        }
      }

      if (nadgrids) {
        out.datum_type = PJD_GRIDSHIFT;
        out.grids = nadgrids;
      }
      out.a = a; //datum object also uses these values
      out.b = b;
      out.es = es;
      out.ep2 = ep2;
      return out;
    }

    /**
     * Resources for details of NTv2 file formats:
     * - https://web.archive.org/web/20140127204822if_/http://www.mgs.gov.on.ca:80/stdprodconsume/groups/content/@mgs/@iandit/documents/resourcelist/stel02_047447.pdf
     * - http://mimaka.com/help/gs/html/004_NTV2%20Data%20Format.htm
     */

    var loadedNadgrids = {};

    /**
     * Load a binary NTv2 file (.gsb) to a key that can be used in a proj string like +nadgrids=<key>. Pass the NTv2 file
     * as an ArrayBuffer.
     */
    function nadgrid(key, data) {
      var view = new DataView(data);
      var isLittleEndian = detectLittleEndian(view);
      var header = readHeader(view, isLittleEndian);
      if (header.nSubgrids > 1) {
        console.log('Only single NTv2 subgrids are currently supported, subsequent sub grids are ignored');
      }
      var subgrids = readSubgrids(view, header, isLittleEndian);
      var nadgrid = {header: header, subgrids: subgrids};
      loadedNadgrids[key] = nadgrid;
      return nadgrid;
    }

    /**
     * Given a proj4 value for nadgrids, return an array of loaded grids
     */
    function getNadgrids(nadgrids) {
      // Format details: http://proj.maptools.org/gen_parms.html
      if (nadgrids === undefined) { return null; }
      var grids = nadgrids.split(',');
      return grids.map(parseNadgridString);
    }

    function parseNadgridString(value) {
      if (value.length === 0) {
        return null;
      }
      var optional = value[0] === '@';
      if (optional) {
        value = value.slice(1);
      }
      if (value === 'null') {
        return {name: 'null', mandatory: !optional, grid: null, isNull: true};
      }
      return {
        name: value,
        mandatory: !optional,
        grid: loadedNadgrids[value] || null,
        isNull: false
      };
    }

    function secondsToRadians(seconds) {
      return (seconds / 3600) * Math.PI / 180;
    }

    function detectLittleEndian(view) {
      var nFields = view.getInt32(8, false);
      if (nFields === 11) {
        return false;
      }
      nFields = view.getInt32(8, true);
      if (nFields !== 11) {
        console.warn('Failed to detect nadgrid endian-ness, defaulting to little-endian');
      }
      return true;
    }

    function readHeader(view, isLittleEndian) {
      return {
        nFields: view.getInt32(8, isLittleEndian),
        nSubgridFields: view.getInt32(24, isLittleEndian),
        nSubgrids: view.getInt32(40, isLittleEndian),
        shiftType: decodeString(view, 56, 56 + 8).trim(),
        fromSemiMajorAxis: view.getFloat64(120, isLittleEndian),
        fromSemiMinorAxis: view.getFloat64(136, isLittleEndian),
        toSemiMajorAxis: view.getFloat64(152, isLittleEndian),
        toSemiMinorAxis: view.getFloat64(168, isLittleEndian),
      };
    }

    function decodeString(view, start, end) {
      return String.fromCharCode.apply(null, new Uint8Array(view.buffer.slice(start, end)));
    }

    function readSubgrids(view, header, isLittleEndian) {
      var gridOffset = 176;
      var grids = [];
      for (var i = 0; i < header.nSubgrids; i++) {
        var subHeader = readGridHeader(view, gridOffset, isLittleEndian);
        var nodes = readGridNodes(view, gridOffset, subHeader, isLittleEndian);
        var lngColumnCount = Math.round(
          1 + (subHeader.upperLongitude - subHeader.lowerLongitude) / subHeader.longitudeInterval);
        var latColumnCount = Math.round(
          1 + (subHeader.upperLatitude - subHeader.lowerLatitude) / subHeader.latitudeInterval);
        // Proj4 operates on radians whereas the coordinates are in seconds in the grid
        grids.push({
          ll: [secondsToRadians(subHeader.lowerLongitude), secondsToRadians(subHeader.lowerLatitude)],
          del: [secondsToRadians(subHeader.longitudeInterval), secondsToRadians(subHeader.latitudeInterval)],
          lim: [lngColumnCount, latColumnCount],
          count: subHeader.gridNodeCount,
          cvs: mapNodes(nodes)
        });
      }
      return grids;
    }

    function mapNodes(nodes) {
      return nodes.map(function (r) {return [secondsToRadians(r.longitudeShift), secondsToRadians(r.latitudeShift)];});
    }

    function readGridHeader(view, offset, isLittleEndian) {
      return {
        name: decodeString(view, offset + 8, offset + 16).trim(),
        parent: decodeString(view, offset + 24, offset + 24 + 8).trim(),
        lowerLatitude: view.getFloat64(offset + 72, isLittleEndian),
        upperLatitude: view.getFloat64(offset + 88, isLittleEndian),
        lowerLongitude: view.getFloat64(offset + 104, isLittleEndian),
        upperLongitude: view.getFloat64(offset + 120, isLittleEndian),
        latitudeInterval: view.getFloat64(offset + 136, isLittleEndian),
        longitudeInterval: view.getFloat64(offset + 152, isLittleEndian),
        gridNodeCount: view.getInt32(offset + 168, isLittleEndian)
      };
    }

    function readGridNodes(view, offset, gridHeader, isLittleEndian) {
      var nodesOffset = offset + 176;
      var gridRecordLength = 16;
      var gridShiftRecords = [];
      for (var i = 0; i < gridHeader.gridNodeCount; i++) {
        var record = {
          latitudeShift: view.getFloat32(nodesOffset + i * gridRecordLength, isLittleEndian),
          longitudeShift: view.getFloat32(nodesOffset + i * gridRecordLength + 4, isLittleEndian),
          latitudeAccuracy: view.getFloat32(nodesOffset + i * gridRecordLength + 8, isLittleEndian),
          longitudeAccuracy: view.getFloat32(nodesOffset + i * gridRecordLength + 12, isLittleEndian),
        };
        gridShiftRecords.push(record);
      }
      return gridShiftRecords;
    }

    function Projection(srsCode,callback) {
      if (!(this instanceof Projection)) {
        return new Projection(srsCode);
      }
      callback = callback || function(error){
        if(error){
          throw error;
        }
      };
      var json = parse(srsCode);
      if(typeof json !== 'object'){
        callback(srsCode);
        return;
      }
      var ourProj = Projection.projections.get(json.projName);
      if(!ourProj){
        callback(srsCode);
        return;
      }
      if (json.datumCode && json.datumCode !== 'none') {
        var datumDef = match(exports$1, json.datumCode);
        if (datumDef) {
          json.datum_params = json.datum_params || (datumDef.towgs84 ? datumDef.towgs84.split(',') : null);
          json.ellps = datumDef.ellipse;
          json.datumName = datumDef.datumName ? datumDef.datumName : json.datumCode;
        }
      }
      json.k0 = json.k0 || 1.0;
      json.axis = json.axis || 'enu';
      json.ellps = json.ellps || 'wgs84';
      json.lat1 = json.lat1 || json.lat0; // Lambert_Conformal_Conic_1SP, for example, needs this

      var sphere_ = sphere(json.a, json.b, json.rf, json.ellps, json.sphere);
      var ecc = eccentricity(sphere_.a, sphere_.b, sphere_.rf, json.R_A);
      var nadgrids = getNadgrids(json.nadgrids);
      var datumObj = json.datum || datum(json.datumCode, json.datum_params, sphere_.a, sphere_.b, ecc.es, ecc.ep2,
        nadgrids);

      extend(this, json); // transfer everything over from the projection because we don't know what we'll need
      extend(this, ourProj); // transfer all the methods from the projection

      // copy the 4 things over we calculated in deriveConstants.sphere
      this.a = sphere_.a;
      this.b = sphere_.b;
      this.rf = sphere_.rf;
      this.sphere = sphere_.sphere;

      // copy the 3 things we calculated in deriveConstants.eccentricity
      this.es = ecc.es;
      this.e = ecc.e;
      this.ep2 = ecc.ep2;

      // add in the datum object
      this.datum = datumObj;

      // init the projection
      this.init();

      // legecy callback from back in the day when it went to spatialreference.org
      callback(null, this);

    }
    Projection.projections = projections;
    Projection.projections.start();

    function compareDatums(source, dest) {
      if (source.datum_type !== dest.datum_type) {
        return false; // false, datums are not equal
      } else if (source.a !== dest.a || Math.abs(source.es - dest.es) > 0.000000000050) {
        // the tolerance for es is to ensure that GRS80 and WGS84
        // are considered identical
        return false;
      } else if (source.datum_type === values.PJD_3PARAM) {
        return (source.datum_params[0] === dest.datum_params[0] && source.datum_params[1] === dest.datum_params[1] && source.datum_params[2] === dest.datum_params[2]);
      } else if (source.datum_type === values.PJD_7PARAM) {
        return (source.datum_params[0] === dest.datum_params[0] && source.datum_params[1] === dest.datum_params[1] && source.datum_params[2] === dest.datum_params[2] && source.datum_params[3] === dest.datum_params[3] && source.datum_params[4] === dest.datum_params[4] && source.datum_params[5] === dest.datum_params[5] && source.datum_params[6] === dest.datum_params[6]);
      } else {
        return true; // datums are equal
      }
    } // cs_compare_datums()

    /*
     * The function Convert_Geodetic_To_Geocentric converts geodetic coordinates
     * (latitude, longitude, and height) to geocentric coordinates (X, Y, Z),
     * according to the current ellipsoid parameters.
     *
     *    Latitude  : Geodetic latitude in radians                     (input)
     *    Longitude : Geodetic longitude in radians                    (input)
     *    Height    : Geodetic height, in meters                       (input)
     *    X         : Calculated Geocentric X coordinate, in meters    (output)
     *    Y         : Calculated Geocentric Y coordinate, in meters    (output)
     *    Z         : Calculated Geocentric Z coordinate, in meters    (output)
     *
     */
    function geodeticToGeocentric(p, es, a) {
      var Longitude = p.x;
      var Latitude = p.y;
      var Height = p.z ? p.z : 0; //Z value not always supplied

      var Rn; /*  Earth radius at location  */
      var Sin_Lat; /*  Math.sin(Latitude)  */
      var Sin2_Lat; /*  Square of Math.sin(Latitude)  */
      var Cos_Lat; /*  Math.cos(Latitude)  */

      /*
       ** Don't blow up if Latitude is just a little out of the value
       ** range as it may just be a rounding issue.  Also removed longitude
       ** test, it should be wrapped by Math.cos() and Math.sin().  NFW for PROJ.4, Sep/2001.
       */
      if (Latitude < -values.HALF_PI && Latitude > -1.001 * values.HALF_PI) {
        Latitude = -values.HALF_PI;
      } else if (Latitude > values.HALF_PI && Latitude < 1.001 * values.HALF_PI) {
        Latitude = values.HALF_PI;
      } else if (Latitude < -values.HALF_PI) {
        /* Latitude out of range */
        //..reportError('geocent:lat out of range:' + Latitude);
        return { x: -Infinity, y: -Infinity, z: p.z };
      } else if (Latitude > values.HALF_PI) {
        /* Latitude out of range */
        return { x: Infinity, y: Infinity, z: p.z };
      }

      if (Longitude > Math.PI) {
        Longitude -= (2 * Math.PI);
      }
      Sin_Lat = Math.sin(Latitude);
      Cos_Lat = Math.cos(Latitude);
      Sin2_Lat = Sin_Lat * Sin_Lat;
      Rn = a / (Math.sqrt(1.0e0 - es * Sin2_Lat));
      return {
        x: (Rn + Height) * Cos_Lat * Math.cos(Longitude),
        y: (Rn + Height) * Cos_Lat * Math.sin(Longitude),
        z: ((Rn * (1 - es)) + Height) * Sin_Lat
      };
    } // cs_geodetic_to_geocentric()

    function geocentricToGeodetic(p, es, a, b) {
      /* local defintions and variables */
      /* end-criterium of loop, accuracy of sin(Latitude) */
      var genau = 1e-12;
      var genau2 = (genau * genau);
      var maxiter = 30;

      var P; /* distance between semi-minor axis and location */
      var RR; /* distance between center and location */
      var CT; /* sin of geocentric latitude */
      var ST; /* cos of geocentric latitude */
      var RX;
      var RK;
      var RN; /* Earth radius at location */
      var CPHI0; /* cos of start or old geodetic latitude in iterations */
      var SPHI0; /* sin of start or old geodetic latitude in iterations */
      var CPHI; /* cos of searched geodetic latitude */
      var SPHI; /* sin of searched geodetic latitude */
      var SDPHI; /* end-criterium: addition-theorem of sin(Latitude(iter)-Latitude(iter-1)) */
      var iter; /* # of continous iteration, max. 30 is always enough (s.a.) */

      var X = p.x;
      var Y = p.y;
      var Z = p.z ? p.z : 0.0; //Z value not always supplied
      var Longitude;
      var Latitude;
      var Height;

      P = Math.sqrt(X * X + Y * Y);
      RR = Math.sqrt(X * X + Y * Y + Z * Z);

      /*      special cases for latitude and longitude */
      if (P / a < genau) {

        /*  special case, if P=0. (X=0., Y=0.) */
        Longitude = 0.0;

        /*  if (X,Y,Z)=(0.,0.,0.) then Height becomes semi-minor axis
         *  of ellipsoid (=center of mass), Latitude becomes PI/2 */
        if (RR / a < genau) {
          Latitude = values.HALF_PI;
          Height = -b;
          return {
            x: p.x,
            y: p.y,
            z: p.z
          };
        }
      } else {
        /*  ellipsoidal (geodetic) longitude
         *  interval: -PI < Longitude <= +PI */
        Longitude = Math.atan2(Y, X);
      }

      /* --------------------------------------------------------------
       * Following iterative algorithm was developped by
       * "Institut for Erdmessung", University of Hannover, July 1988.
       * Internet: www.ife.uni-hannover.de
       * Iterative computation of CPHI,SPHI and Height.
       * Iteration of CPHI and SPHI to 10**-12 radian resp.
       * 2*10**-7 arcsec.
       * --------------------------------------------------------------
       */
      CT = Z / RR;
      ST = P / RR;
      RX = 1.0 / Math.sqrt(1.0 - es * (2.0 - es) * ST * ST);
      CPHI0 = ST * (1.0 - es) * RX;
      SPHI0 = CT * RX;
      iter = 0;

      /* loop to find sin(Latitude) resp. Latitude
       * until |sin(Latitude(iter)-Latitude(iter-1))| < genau */
      do {
        iter++;
        RN = a / Math.sqrt(1.0 - es * SPHI0 * SPHI0);

        /*  ellipsoidal (geodetic) height */
        Height = P * CPHI0 + Z * SPHI0 - RN * (1.0 - es * SPHI0 * SPHI0);

        RK = es * RN / (RN + Height);
        RX = 1.0 / Math.sqrt(1.0 - RK * (2.0 - RK) * ST * ST);
        CPHI = ST * (1.0 - RK) * RX;
        SPHI = CT * RX;
        SDPHI = SPHI * CPHI0 - CPHI * SPHI0;
        CPHI0 = CPHI;
        SPHI0 = SPHI;
      }
      while (SDPHI * SDPHI > genau2 && iter < maxiter);

      /*      ellipsoidal (geodetic) latitude */
      Latitude = Math.atan(SPHI / Math.abs(CPHI));
      return {
        x: Longitude,
        y: Latitude,
        z: Height
      };
    } // cs_geocentric_to_geodetic()

    /****************************************************************/
    // pj_geocentic_to_wgs84( p )
    //  p = point to transform in geocentric coordinates (x,y,z)


    /** point object, nothing fancy, just allows values to be
        passed back and forth by reference rather than by value.
        Other point classes may be used as long as they have
        x and y properties, which will get modified in the transform method.
    */
    function geocentricToWgs84(p, datum_type, datum_params) {

      if (datum_type === values.PJD_3PARAM) {
        // if( x[io] === HUGE_VAL )
        //    continue;
        return {
          x: p.x + datum_params[0],
          y: p.y + datum_params[1],
          z: p.z + datum_params[2],
        };
      } else if (datum_type === values.PJD_7PARAM) {
        var Dx_BF = datum_params[0];
        var Dy_BF = datum_params[1];
        var Dz_BF = datum_params[2];
        var Rx_BF = datum_params[3];
        var Ry_BF = datum_params[4];
        var Rz_BF = datum_params[5];
        var M_BF = datum_params[6];
        // if( x[io] === HUGE_VAL )
        //    continue;
        return {
          x: M_BF * (p.x - Rz_BF * p.y + Ry_BF * p.z) + Dx_BF,
          y: M_BF * (Rz_BF * p.x + p.y - Rx_BF * p.z) + Dy_BF,
          z: M_BF * (-Ry_BF * p.x + Rx_BF * p.y + p.z) + Dz_BF
        };
      }
    } // cs_geocentric_to_wgs84

    /****************************************************************/
    // pj_geocentic_from_wgs84()
    //  coordinate system definition,
    //  point to transform in geocentric coordinates (x,y,z)
    function geocentricFromWgs84(p, datum_type, datum_params) {

      if (datum_type === values.PJD_3PARAM) {
        //if( x[io] === HUGE_VAL )
        //    continue;
        return {
          x: p.x - datum_params[0],
          y: p.y - datum_params[1],
          z: p.z - datum_params[2],
        };

      } else if (datum_type === values.PJD_7PARAM) {
        var Dx_BF = datum_params[0];
        var Dy_BF = datum_params[1];
        var Dz_BF = datum_params[2];
        var Rx_BF = datum_params[3];
        var Ry_BF = datum_params[4];
        var Rz_BF = datum_params[5];
        var M_BF = datum_params[6];
        var x_tmp = (p.x - Dx_BF) / M_BF;
        var y_tmp = (p.y - Dy_BF) / M_BF;
        var z_tmp = (p.z - Dz_BF) / M_BF;
        //if( x[io] === HUGE_VAL )
        //    continue;

        return {
          x: x_tmp + Rz_BF * y_tmp - Ry_BF * z_tmp,
          y: -Rz_BF * x_tmp + y_tmp + Rx_BF * z_tmp,
          z: Ry_BF * x_tmp - Rx_BF * y_tmp + z_tmp
        };
      } //cs_geocentric_from_wgs84()
    }

    function checkParams(type) {
      return (type === values.PJD_3PARAM || type === values.PJD_7PARAM);
    }

    function datum_transform(source, dest, point) {
      // Short cut if the datums are identical.
      if (compareDatums(source, dest)) {
        return point; // in this case, zero is sucess,
        // whereas cs_compare_datums returns 1 to indicate TRUE
        // confusing, should fix this
      }

      // Explicitly skip datum transform by setting 'datum=none' as parameter for either source or dest
      if (source.datum_type === PJD_NODATUM || dest.datum_type === PJD_NODATUM) {
        return point;
      }

      // If this datum requires grid shifts, then apply it to geodetic coordinates.
      var source_a = source.a;
      var source_es = source.es;
      if (source.datum_type === PJD_GRIDSHIFT) {
        var gridShiftCode = applyGridShift(source, false, point);
        if (gridShiftCode !== 0) {
          return undefined;
        }
        source_a = SRS_WGS84_SEMIMAJOR;
        source_es = SRS_WGS84_ESQUARED;
      }

      var dest_a = dest.a;
      var dest_b = dest.b;
      var dest_es = dest.es;
      if (dest.datum_type === PJD_GRIDSHIFT) {
        dest_a = SRS_WGS84_SEMIMAJOR;
        dest_b = SRS_WGS84_SEMIMINOR;
        dest_es = SRS_WGS84_ESQUARED;
      }

      // Do we need to go through geocentric coordinates?
      if (source_es === dest_es && source_a === dest_a && !checkParams(source.datum_type) &&  !checkParams(dest.datum_type)) {
        return point;
      }

      // Convert to geocentric coordinates.
      point = geodeticToGeocentric(point, source_es, source_a);
      // Convert between datums
      if (checkParams(source.datum_type)) {
        point = geocentricToWgs84(point, source.datum_type, source.datum_params);
      }
      if (checkParams(dest.datum_type)) {
        point = geocentricFromWgs84(point, dest.datum_type, dest.datum_params);
      }
      point = geocentricToGeodetic(point, dest_es, dest_a, dest_b);

      if (dest.datum_type === PJD_GRIDSHIFT) {
        var destGridShiftResult = applyGridShift(dest, true, point);
        if (destGridShiftResult !== 0) {
          return undefined;
        }
      }

      return point;
    }

    function applyGridShift(source, inverse, point) {
      if (source.grids === null || source.grids.length === 0) {
        console.log('Grid shift grids not found');
        return -1;
      }
      var input = {x: -point.x, y: point.y};
      var output = {x: Number.NaN, y: Number.NaN};
      var attemptedGrids = [];
      for (var i = 0; i < source.grids.length; i++) {
        var grid = source.grids[i];
        attemptedGrids.push(grid.name);
        if (grid.isNull) {
          output = input;
          break;
        }
        grid.mandatory;
        if (grid.grid === null) {
          if (grid.mandatory) {
            console.log("Unable to find mandatory grid '" + grid.name + "'");
            return -1;
          }
          continue;
        }
        var subgrid = grid.grid.subgrids[0];
        // skip tables that don't match our point at all
        var epsilon = (Math.abs(subgrid.del[1]) + Math.abs(subgrid.del[0])) / 10000.0;
        var minX = subgrid.ll[0] - epsilon;
        var minY = subgrid.ll[1] - epsilon;
        var maxX = subgrid.ll[0] + (subgrid.lim[0] - 1) * subgrid.del[0] + epsilon;
        var maxY = subgrid.ll[1] + (subgrid.lim[1] - 1) * subgrid.del[1] + epsilon;
        if (minY > input.y || minX > input.x || maxY < input.y || maxX < input.x ) {
          continue;
        }
        output = applySubgridShift(input, inverse, subgrid);
        if (!isNaN(output.x)) {
          break;
        }
      }
      if (isNaN(output.x)) {
        console.log("Failed to find a grid shift table for location '"+
          -input.x * values.R2D + " " + input.y * values.R2D + " tried: '" + attemptedGrids + "'");
        return -1;
      }
      point.x = -output.x;
      point.y = output.y;
      return 0;
    }

    function applySubgridShift(pin, inverse, ct) {
      var val = {x: Number.NaN, y: Number.NaN};
      if (isNaN(pin.x)) { return val; }
      var tb = {x: pin.x, y: pin.y};
      tb.x -= ct.ll[0];
      tb.y -= ct.ll[1];
      tb.x = adjust_lon(tb.x - Math.PI) + Math.PI;
      var t = nadInterpolate(tb, ct);
      if (inverse) {
        if (isNaN(t.x)) {
          return val;
        }
        t.x = tb.x - t.x;
        t.y = tb.y - t.y;
        var i = 9, tol = 1e-12;
        var dif, del;
        do {
          del = nadInterpolate(t, ct);
          if (isNaN(del.x)) {
            console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");
            break;
          }
          dif = {x: tb.x - (del.x + t.x), y: tb.y - (del.y + t.y)};
          t.x += dif.x;
          t.y += dif.y;
        } while (i-- && Math.abs(dif.x) > tol && Math.abs(dif.y) > tol);
        if (i < 0) {
          console.log("Inverse grid shift iterator failed to converge.");
          return val;
        }
        val.x = adjust_lon(t.x + ct.ll[0]);
        val.y = t.y + ct.ll[1];
      } else {
        if (!isNaN(t.x)) {
          val.x = pin.x + t.x;
          val.y = pin.y + t.y;
        }
      }
      return val;
    }

    function nadInterpolate(pin, ct) {
      var t = {x: pin.x / ct.del[0], y: pin.y / ct.del[1]};
      var indx = {x: Math.floor(t.x), y: Math.floor(t.y)};
      var frct = {x: t.x - 1.0 * indx.x, y: t.y - 1.0 * indx.y};
      var val= {x: Number.NaN, y: Number.NaN};
      var inx;
      if (indx.x < 0 || indx.x >= ct.lim[0]) {
        return val;
      }
      if (indx.y < 0 || indx.y >= ct.lim[1]) {
        return val;
      }
      inx = (indx.y * ct.lim[0]) + indx.x;
      var f00 = {x: ct.cvs[inx][0], y: ct.cvs[inx][1]};
      inx++;
      var f10= {x: ct.cvs[inx][0], y: ct.cvs[inx][1]};
      inx += ct.lim[0];
      var f11 = {x: ct.cvs[inx][0], y: ct.cvs[inx][1]};
      inx--;
      var f01 = {x: ct.cvs[inx][0], y: ct.cvs[inx][1]};
      var m11 = frct.x * frct.y, m10 = frct.x * (1.0 - frct.y),
        m00 = (1.0 - frct.x) * (1.0 - frct.y), m01 = (1.0 - frct.x) * frct.y;
      val.x = (m00 * f00.x + m10 * f10.x + m01 * f01.x + m11 * f11.x);
      val.y = (m00 * f00.y + m10 * f10.y + m01 * f01.y + m11 * f11.y);
      return val;
    }

    function adjust_axis(crs, denorm, point) {
      var xin = point.x,
        yin = point.y,
        zin = point.z || 0.0;
      var v, t, i;
      var out = {};
      for (i = 0; i < 3; i++) {
        if (denorm && i === 2 && point.z === undefined) {
          continue;
        }
        if (i === 0) {
          v = xin;
          if ("ew".indexOf(crs.axis[i]) !== -1) {
            t = 'x';
          } else {
            t = 'y';
          }

        }
        else if (i === 1) {
          v = yin;
          if ("ns".indexOf(crs.axis[i]) !== -1) {
            t = 'y';
          } else {
            t = 'x';
          }
        }
        else {
          v = zin;
          t = 'z';
        }
        switch (crs.axis[i]) {
        case 'e':
          out[t] = v;
          break;
        case 'w':
          out[t] = -v;
          break;
        case 'n':
          out[t] = v;
          break;
        case 's':
          out[t] = -v;
          break;
        case 'u':
          if (point[t] !== undefined) {
            out.z = v;
          }
          break;
        case 'd':
          if (point[t] !== undefined) {
            out.z = -v;
          }
          break;
        default:
          //console.log("ERROR: unknow axis ("+crs.axis[i]+") - check definition of "+crs.projName);
          return null;
        }
      }
      return out;
    }

    function common (array){
      var out = {
        x: array[0],
        y: array[1]
      };
      if (array.length>2) {
        out.z = array[2];
      }
      if (array.length>3) {
        out.m = array[3];
      }
      return out;
    }

    function checkSanity (point) {
      checkCoord(point.x);
      checkCoord(point.y);
    }
    function checkCoord(num) {
      if (typeof Number.isFinite === 'function') {
        if (Number.isFinite(num)) {
          return;
        }
        throw new TypeError('coordinates must be finite numbers');
      }
      if (typeof num !== 'number' || num !== num || !isFinite(num)) {
        throw new TypeError('coordinates must be finite numbers');
      }
    }

    function checkNotWGS(source, dest) {
      return (
        (source.datum.datum_type === values.PJD_3PARAM || source.datum.datum_type === values.PJD_7PARAM || source.datum.datum_type === PJD_GRIDSHIFT) && dest.datumCode !== 'WGS84') ||
        ((dest.datum.datum_type === values.PJD_3PARAM || dest.datum.datum_type === values.PJD_7PARAM || dest.datum.datum_type === PJD_GRIDSHIFT) && source.datumCode !== 'WGS84');
    }

    function transform(source, dest, point, enforceAxis) {
      var wgs84;
      if (Array.isArray(point)) {
        point = common(point);
      } else {
        // Clone the point object so inputs don't get modified
        point = {
          x: point.x,
          y: point.y,
          z: point.z,
          m: point.m
        };
      }
      var hasZ = point.z !== undefined;
      checkSanity(point);
      // Workaround for datum shifts towgs84, if either source or destination projection is not wgs84
      if (source.datum && dest.datum && checkNotWGS(source, dest)) {
        wgs84 = new Projection('WGS84');
        point = transform(source, wgs84, point, enforceAxis);
        source = wgs84;
      }
      // DGR, 2010/11/12
      if (enforceAxis && source.axis !== 'enu') {
        point = adjust_axis(source, false, point);
      }
      // Transform source points to long/lat, if they aren't already.
      if (source.projName === 'longlat') {
        point = {
          x: point.x * D2R$1,
          y: point.y * D2R$1,
          z: point.z || 0
        };
      } else {
        if (source.to_meter) {
          point = {
            x: point.x * source.to_meter,
            y: point.y * source.to_meter,
            z: point.z || 0
          };
        }
        point = source.inverse(point); // Convert Cartesian to longlat
        if (!point) {
          return;
        }
      }
      // Adjust for the prime meridian if necessary
      if (source.from_greenwich) {
        point.x += source.from_greenwich;
      }

      // Convert datums if needed, and if possible.
      point = datum_transform(source.datum, dest.datum, point);
      if (!point) {
        return;
      }

      // Adjust for the prime meridian if necessary
      if (dest.from_greenwich) {
        point = {
          x: point.x - dest.from_greenwich,
          y: point.y,
          z: point.z || 0
        };
      }

      if (dest.projName === 'longlat') {
        // convert radians to decimal degrees
        point = {
          x: point.x * values.R2D,
          y: point.y * values.R2D,
          z: point.z || 0
        };
      } else { // else project
        point = dest.forward(point);
        if (dest.to_meter) {
          point = {
            x: point.x / dest.to_meter,
            y: point.y / dest.to_meter,
            z: point.z || 0
          };
        }
      }

      // DGR, 2010/11/12
      if (enforceAxis && dest.axis !== 'enu') {
        return adjust_axis(dest, true, point);
      }

      if (!hasZ) {
        delete point.z;
      }
      return point;
    }

    var wgs84 = Projection('WGS84');

    function transformer(from, to, coords, enforceAxis) {
      var transformedArray, out, keys;
      if (Array.isArray(coords)) {
        transformedArray = transform(from, to, coords, enforceAxis) || {x: NaN, y: NaN};
        if (coords.length > 2) {
          if ((typeof from.name !== 'undefined' && from.name === 'geocent') || (typeof to.name !== 'undefined' && to.name === 'geocent')) {
            if (typeof transformedArray.z === 'number') {
              return [transformedArray.x, transformedArray.y, transformedArray.z].concat(coords.splice(3));
            } else {
              return [transformedArray.x, transformedArray.y, coords[2]].concat(coords.splice(3));
            }
          } else {
            return [transformedArray.x, transformedArray.y].concat(coords.splice(2));
          }
        } else {
          return [transformedArray.x, transformedArray.y];
        }
      } else {
        out = transform(from, to, coords, enforceAxis);
        keys = Object.keys(coords);
        if (keys.length === 2) {
          return out;
        }
        keys.forEach(function (key) {
          if ((typeof from.name !== 'undefined' && from.name === 'geocent') || (typeof to.name !== 'undefined' && to.name === 'geocent')) {
            if (key === 'x' || key === 'y' || key === 'z') {
              return;
            }
          } else {
            if (key === 'x' || key === 'y') {
              return;
            }
          }
          out[key] = coords[key];
        });
        return out;
      }
    }

    function checkProj(item) {
      if (item instanceof Projection) {
        return item;
      }
      if (item.oProj) {
        return item.oProj;
      }
      return Projection(item);
    }

    function proj4(fromProj, toProj, coord) {
      fromProj = checkProj(fromProj);
      var single = false;
      var obj;
      if (typeof toProj === 'undefined') {
        toProj = fromProj;
        fromProj = wgs84;
        single = true;
      } else if (typeof toProj.x !== 'undefined' || Array.isArray(toProj)) {
        coord = toProj;
        toProj = fromProj;
        fromProj = wgs84;
        single = true;
      }
      toProj = checkProj(toProj);
      if (coord) {
        return transformer(fromProj, toProj, coord);
      } else {
        obj = {
          forward: function (coords, enforceAxis) {
            return transformer(fromProj, toProj, coords, enforceAxis);
          },
          inverse: function (coords, enforceAxis) {
            return transformer(toProj, fromProj, coords, enforceAxis);
          }
        };
        if (single) {
          obj.oProj = toProj;
        }
        return obj;
      }
    }

    /**
     * UTM zones are grouped, and assigned to one of a group of 6
     * sets.
     *
     * {int} @private
     */
    var NUM_100K_SETS = 6;

    /**
     * The column letters (for easting) of the lower left value, per
     * set.
     *
     * {string} @private
     */
    var SET_ORIGIN_COLUMN_LETTERS = 'AJSAJS';

    /**
     * The row letters (for northing) of the lower left value, per
     * set.
     *
     * {string} @private
     */
    var SET_ORIGIN_ROW_LETTERS = 'AFAFAF';

    var A = 65; // A
    var I = 73; // I
    var O = 79; // O
    var V = 86; // V
    var Z = 90; // Z
    var mgrs = {
      forward: forward$t,
      inverse: inverse$t,
      toPoint: toPoint
    };
    /**
     * Conversion of lat/lon to MGRS.
     *
     * @param {object} ll Object literal with lat and lon properties on a
     *     WGS84 ellipsoid.
     * @param {int} accuracy Accuracy in digits (5 for 1 m, 4 for 10 m, 3 for
     *      100 m, 2 for 1000 m or 1 for 10000 m). Optional, default is 5.
     * @return {string} the MGRS string for the given location and accuracy.
     */
    function forward$t(ll, accuracy) {
      accuracy = accuracy || 5; // default accuracy 1m
      return encode(LLtoUTM({
        lat: ll[1],
        lon: ll[0]
      }), accuracy);
    }
    /**
     * Conversion of MGRS to lat/lon.
     *
     * @param {string} mgrs MGRS string.
     * @return {array} An array with left (longitude), bottom (latitude), right
     *     (longitude) and top (latitude) values in WGS84, representing the
     *     bounding box for the provided MGRS reference.
     */
    function inverse$t(mgrs) {
      var bbox = UTMtoLL(decode(mgrs.toUpperCase()));
      if (bbox.lat && bbox.lon) {
        return [bbox.lon, bbox.lat, bbox.lon, bbox.lat];
      }
      return [bbox.left, bbox.bottom, bbox.right, bbox.top];
    }
    function toPoint(mgrs) {
      var bbox = UTMtoLL(decode(mgrs.toUpperCase()));
      if (bbox.lat && bbox.lon) {
        return [bbox.lon, bbox.lat];
      }
      return [(bbox.left + bbox.right) / 2, (bbox.top + bbox.bottom) / 2];
    }/**
     * Conversion from degrees to radians.
     *
     * @private
     * @param {number} deg the angle in degrees.
     * @return {number} the angle in radians.
     */
    function degToRad(deg) {
      return (deg * (Math.PI / 180.0));
    }

    /**
     * Conversion from radians to degrees.
     *
     * @private
     * @param {number} rad the angle in radians.
     * @return {number} the angle in degrees.
     */
    function radToDeg(rad) {
      return (180.0 * (rad / Math.PI));
    }

    /**
     * Converts a set of Longitude and Latitude co-ordinates to UTM
     * using the WGS84 ellipsoid.
     *
     * @private
     * @param {object} ll Object literal with lat and lon properties
     *     representing the WGS84 coordinate to be converted.
     * @return {object} Object literal containing the UTM value with easting,
     *     northing, zoneNumber and zoneLetter properties, and an optional
     *     accuracy property in digits. Returns null if the conversion failed.
     */
    function LLtoUTM(ll) {
      var Lat = ll.lat;
      var Long = ll.lon;
      var a = 6378137.0; //ellip.radius;
      var eccSquared = 0.00669438; //ellip.eccsq;
      var k0 = 0.9996;
      var LongOrigin;
      var eccPrimeSquared;
      var N, T, C, A, M;
      var LatRad = degToRad(Lat);
      var LongRad = degToRad(Long);
      var LongOriginRad;
      var ZoneNumber;
      // (int)
      ZoneNumber = Math.floor((Long + 180) / 6) + 1;

      //Make sure the longitude 180.00 is in Zone 60
      if (Long === 180) {
        ZoneNumber = 60;
      }

      // Special zone for Norway
      if (Lat >= 56.0 && Lat < 64.0 && Long >= 3.0 && Long < 12.0) {
        ZoneNumber = 32;
      }

      // Special zones for Svalbard
      if (Lat >= 72.0 && Lat < 84.0) {
        if (Long >= 0.0 && Long < 9.0) {
          ZoneNumber = 31;
        }
        else if (Long >= 9.0 && Long < 21.0) {
          ZoneNumber = 33;
        }
        else if (Long >= 21.0 && Long < 33.0) {
          ZoneNumber = 35;
        }
        else if (Long >= 33.0 && Long < 42.0) {
          ZoneNumber = 37;
        }
      }

      LongOrigin = (ZoneNumber - 1) * 6 - 180 + 3; //+3 puts origin
      // in middle of
      // zone
      LongOriginRad = degToRad(LongOrigin);

      eccPrimeSquared = (eccSquared) / (1 - eccSquared);

      N = a / Math.sqrt(1 - eccSquared * Math.sin(LatRad) * Math.sin(LatRad));
      T = Math.tan(LatRad) * Math.tan(LatRad);
      C = eccPrimeSquared * Math.cos(LatRad) * Math.cos(LatRad);
      A = Math.cos(LatRad) * (LongRad - LongOriginRad);

      M = a * ((1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256) * LatRad - (3 * eccSquared / 8 + 3 * eccSquared * eccSquared / 32 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(2 * LatRad) + (15 * eccSquared * eccSquared / 256 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(4 * LatRad) - (35 * eccSquared * eccSquared * eccSquared / 3072) * Math.sin(6 * LatRad));

      var UTMEasting = (k0 * N * (A + (1 - T + C) * A * A * A / 6.0 + (5 - 18 * T + T * T + 72 * C - 58 * eccPrimeSquared) * A * A * A * A * A / 120.0) + 500000.0);

      var UTMNorthing = (k0 * (M + N * Math.tan(LatRad) * (A * A / 2 + (5 - T + 9 * C + 4 * C * C) * A * A * A * A / 24.0 + (61 - 58 * T + T * T + 600 * C - 330 * eccPrimeSquared) * A * A * A * A * A * A / 720.0)));
      if (Lat < 0.0) {
        UTMNorthing += 10000000.0; //10000000 meter offset for
        // southern hemisphere
      }

      return {
        northing: Math.round(UTMNorthing),
        easting: Math.round(UTMEasting),
        zoneNumber: ZoneNumber,
        zoneLetter: getLetterDesignator(Lat)
      };
    }

    /**
     * Converts UTM coords to lat/long, using the WGS84 ellipsoid. This is a convenience
     * class where the Zone can be specified as a single string eg."60N" which
     * is then broken down into the ZoneNumber and ZoneLetter.
     *
     * @private
     * @param {object} utm An object literal with northing, easting, zoneNumber
     *     and zoneLetter properties. If an optional accuracy property is
     *     provided (in meters), a bounding box will be returned instead of
     *     latitude and longitude.
     * @return {object} An object literal containing either lat and lon values
     *     (if no accuracy was provided), or top, right, bottom and left values
     *     for the bounding box calculated according to the provided accuracy.
     *     Returns null if the conversion failed.
     */
    function UTMtoLL(utm) {

      var UTMNorthing = utm.northing;
      var UTMEasting = utm.easting;
      var zoneLetter = utm.zoneLetter;
      var zoneNumber = utm.zoneNumber;
      // check the ZoneNummber is valid
      if (zoneNumber < 0 || zoneNumber > 60) {
        return null;
      }

      var k0 = 0.9996;
      var a = 6378137.0; //ellip.radius;
      var eccSquared = 0.00669438; //ellip.eccsq;
      var eccPrimeSquared;
      var e1 = (1 - Math.sqrt(1 - eccSquared)) / (1 + Math.sqrt(1 - eccSquared));
      var N1, T1, C1, R1, D, M;
      var LongOrigin;
      var mu, phi1Rad;

      // remove 500,000 meter offset for longitude
      var x = UTMEasting - 500000.0;
      var y = UTMNorthing;

      // We must know somehow if we are in the Northern or Southern
      // hemisphere, this is the only time we use the letter So even
      // if the Zone letter isn't exactly correct it should indicate
      // the hemisphere correctly
      if (zoneLetter < 'N') {
        y -= 10000000.0; // remove 10,000,000 meter offset used
        // for southern hemisphere
      }

      // There are 60 zones with zone 1 being at West -180 to -174
      LongOrigin = (zoneNumber - 1) * 6 - 180 + 3; // +3 puts origin
      // in middle of
      // zone

      eccPrimeSquared = (eccSquared) / (1 - eccSquared);

      M = y / k0;
      mu = M / (a * (1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256));

      phi1Rad = mu + (3 * e1 / 2 - 27 * e1 * e1 * e1 / 32) * Math.sin(2 * mu) + (21 * e1 * e1 / 16 - 55 * e1 * e1 * e1 * e1 / 32) * Math.sin(4 * mu) + (151 * e1 * e1 * e1 / 96) * Math.sin(6 * mu);
      // double phi1 = ProjMath.radToDeg(phi1Rad);

      N1 = a / Math.sqrt(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad));
      T1 = Math.tan(phi1Rad) * Math.tan(phi1Rad);
      C1 = eccPrimeSquared * Math.cos(phi1Rad) * Math.cos(phi1Rad);
      R1 = a * (1 - eccSquared) / Math.pow(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad), 1.5);
      D = x / (N1 * k0);

      var lat = phi1Rad - (N1 * Math.tan(phi1Rad) / R1) * (D * D / 2 - (5 + 3 * T1 + 10 * C1 - 4 * C1 * C1 - 9 * eccPrimeSquared) * D * D * D * D / 24 + (61 + 90 * T1 + 298 * C1 + 45 * T1 * T1 - 252 * eccPrimeSquared - 3 * C1 * C1) * D * D * D * D * D * D / 720);
      lat = radToDeg(lat);

      var lon = (D - (1 + 2 * T1 + C1) * D * D * D / 6 + (5 - 2 * C1 + 28 * T1 - 3 * C1 * C1 + 8 * eccPrimeSquared + 24 * T1 * T1) * D * D * D * D * D / 120) / Math.cos(phi1Rad);
      lon = LongOrigin + radToDeg(lon);

      var result;
      if (utm.accuracy) {
        var topRight = UTMtoLL({
          northing: utm.northing + utm.accuracy,
          easting: utm.easting + utm.accuracy,
          zoneLetter: utm.zoneLetter,
          zoneNumber: utm.zoneNumber
        });
        result = {
          top: topRight.lat,
          right: topRight.lon,
          bottom: lat,
          left: lon
        };
      }
      else {
        result = {
          lat: lat,
          lon: lon
        };
      }
      return result;
    }

    /**
     * Calculates the MGRS letter designator for the given latitude.
     *
     * @private
     * @param {number} lat The latitude in WGS84 to get the letter designator
     *     for.
     * @return {char} The letter designator.
     */
    function getLetterDesignator(lat) {
      //This is here as an error flag to show that the Latitude is
      //outside MGRS limits
      var LetterDesignator = 'Z';

      if ((84 >= lat) && (lat >= 72)) {
        LetterDesignator = 'X';
      }
      else if ((72 > lat) && (lat >= 64)) {
        LetterDesignator = 'W';
      }
      else if ((64 > lat) && (lat >= 56)) {
        LetterDesignator = 'V';
      }
      else if ((56 > lat) && (lat >= 48)) {
        LetterDesignator = 'U';
      }
      else if ((48 > lat) && (lat >= 40)) {
        LetterDesignator = 'T';
      }
      else if ((40 > lat) && (lat >= 32)) {
        LetterDesignator = 'S';
      }
      else if ((32 > lat) && (lat >= 24)) {
        LetterDesignator = 'R';
      }
      else if ((24 > lat) && (lat >= 16)) {
        LetterDesignator = 'Q';
      }
      else if ((16 > lat) && (lat >= 8)) {
        LetterDesignator = 'P';
      }
      else if ((8 > lat) && (lat >= 0)) {
        LetterDesignator = 'N';
      }
      else if ((0 > lat) && (lat >= -8)) {
        LetterDesignator = 'M';
      }
      else if ((-8 > lat) && (lat >= -16)) {
        LetterDesignator = 'L';
      }
      else if ((-16 > lat) && (lat >= -24)) {
        LetterDesignator = 'K';
      }
      else if ((-24 > lat) && (lat >= -32)) {
        LetterDesignator = 'J';
      }
      else if ((-32 > lat) && (lat >= -40)) {
        LetterDesignator = 'H';
      }
      else if ((-40 > lat) && (lat >= -48)) {
        LetterDesignator = 'G';
      }
      else if ((-48 > lat) && (lat >= -56)) {
        LetterDesignator = 'F';
      }
      else if ((-56 > lat) && (lat >= -64)) {
        LetterDesignator = 'E';
      }
      else if ((-64 > lat) && (lat >= -72)) {
        LetterDesignator = 'D';
      }
      else if ((-72 > lat) && (lat >= -80)) {
        LetterDesignator = 'C';
      }
      return LetterDesignator;
    }

    /**
     * Encodes a UTM location as MGRS string.
     *
     * @private
     * @param {object} utm An object literal with easting, northing,
     *     zoneLetter, zoneNumber
     * @param {number} accuracy Accuracy in digits (1-5).
     * @return {string} MGRS string for the given UTM location.
     */
    function encode(utm, accuracy) {
      // prepend with leading zeroes
      var seasting = "00000" + utm.easting,
        snorthing = "00000" + utm.northing;

      return utm.zoneNumber + utm.zoneLetter + get100kID(utm.easting, utm.northing, utm.zoneNumber) + seasting.substr(seasting.length - 5, accuracy) + snorthing.substr(snorthing.length - 5, accuracy);
    }

    /**
     * Get the two letter 100k designator for a given UTM easting,
     * northing and zone number value.
     *
     * @private
     * @param {number} easting
     * @param {number} northing
     * @param {number} zoneNumber
     * @return the two letter 100k designator for the given UTM location.
     */
    function get100kID(easting, northing, zoneNumber) {
      var setParm = get100kSetForZone(zoneNumber);
      var setColumn = Math.floor(easting / 100000);
      var setRow = Math.floor(northing / 100000) % 20;
      return getLetter100kID(setColumn, setRow, setParm);
    }

    /**
     * Given a UTM zone number, figure out the MGRS 100K set it is in.
     *
     * @private
     * @param {number} i An UTM zone number.
     * @return {number} the 100k set the UTM zone is in.
     */
    function get100kSetForZone(i) {
      var setParm = i % NUM_100K_SETS;
      if (setParm === 0) {
        setParm = NUM_100K_SETS;
      }

      return setParm;
    }

    /**
     * Get the two-letter MGRS 100k designator given information
     * translated from the UTM northing, easting and zone number.
     *
     * @private
     * @param {number} column the column index as it relates to the MGRS
     *        100k set spreadsheet, created from the UTM easting.
     *        Values are 1-8.
     * @param {number} row the row index as it relates to the MGRS 100k set
     *        spreadsheet, created from the UTM northing value. Values
     *        are from 0-19.
     * @param {number} parm the set block, as it relates to the MGRS 100k set
     *        spreadsheet, created from the UTM zone. Values are from
     *        1-60.
     * @return two letter MGRS 100k code.
     */
    function getLetter100kID(column, row, parm) {
      // colOrigin and rowOrigin are the letters at the origin of the set
      var index = parm - 1;
      var colOrigin = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(index);
      var rowOrigin = SET_ORIGIN_ROW_LETTERS.charCodeAt(index);

      // colInt and rowInt are the letters to build to return
      var colInt = colOrigin + column - 1;
      var rowInt = rowOrigin + row;
      var rollover = false;

      if (colInt > Z) {
        colInt = colInt - Z + A - 1;
        rollover = true;
      }

      if (colInt === I || (colOrigin < I && colInt > I) || ((colInt > I || colOrigin < I) && rollover)) {
        colInt++;
      }

      if (colInt === O || (colOrigin < O && colInt > O) || ((colInt > O || colOrigin < O) && rollover)) {
        colInt++;

        if (colInt === I) {
          colInt++;
        }
      }

      if (colInt > Z) {
        colInt = colInt - Z + A - 1;
      }

      if (rowInt > V) {
        rowInt = rowInt - V + A - 1;
        rollover = true;
      }
      else {
        rollover = false;
      }

      if (((rowInt === I) || ((rowOrigin < I) && (rowInt > I))) || (((rowInt > I) || (rowOrigin < I)) && rollover)) {
        rowInt++;
      }

      if (((rowInt === O) || ((rowOrigin < O) && (rowInt > O))) || (((rowInt > O) || (rowOrigin < O)) && rollover)) {
        rowInt++;

        if (rowInt === I) {
          rowInt++;
        }
      }

      if (rowInt > V) {
        rowInt = rowInt - V + A - 1;
      }

      var twoLetter = String.fromCharCode(colInt) + String.fromCharCode(rowInt);
      return twoLetter;
    }

    /**
     * Decode the UTM parameters from a MGRS string.
     *
     * @private
     * @param {string} mgrsString an UPPERCASE coordinate string is expected.
     * @return {object} An object literal with easting, northing, zoneLetter,
     *     zoneNumber and accuracy (in meters) properties.
     */
    function decode(mgrsString) {

      if (mgrsString && mgrsString.length === 0) {
        throw ("MGRSPoint coverting from nothing");
      }

      var length = mgrsString.length;

      var hunK = null;
      var sb = "";
      var testChar;
      var i = 0;

      // get Zone number
      while (!(/[A-Z]/).test(testChar = mgrsString.charAt(i))) {
        if (i >= 2) {
          throw ("MGRSPoint bad conversion from: " + mgrsString);
        }
        sb += testChar;
        i++;
      }

      var zoneNumber = parseInt(sb, 10);

      if (i === 0 || i + 3 > length) {
        // A good MGRS string has to be 4-5 digits long,
        // ##AAA/#AAA at least.
        throw ("MGRSPoint bad conversion from: " + mgrsString);
      }

      var zoneLetter = mgrsString.charAt(i++);

      // Should we check the zone letter here? Why not.
      if (zoneLetter <= 'A' || zoneLetter === 'B' || zoneLetter === 'Y' || zoneLetter >= 'Z' || zoneLetter === 'I' || zoneLetter === 'O') {
        throw ("MGRSPoint zone letter " + zoneLetter + " not handled: " + mgrsString);
      }

      hunK = mgrsString.substring(i, i += 2);

      var set = get100kSetForZone(zoneNumber);

      var east100k = getEastingFromChar(hunK.charAt(0), set);
      var north100k = getNorthingFromChar(hunK.charAt(1), set);

      // We have a bug where the northing may be 2000000 too low.
      // How
      // do we know when to roll over?

      while (north100k < getMinNorthing(zoneLetter)) {
        north100k += 2000000;
      }

      // calculate the char index for easting/northing separator
      var remainder = length - i;

      if (remainder % 2 !== 0) {
        throw ("MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters" + mgrsString);
      }

      var sep = remainder / 2;

      var sepEasting = 0.0;
      var sepNorthing = 0.0;
      var accuracyBonus, sepEastingString, sepNorthingString, easting, northing;
      if (sep > 0) {
        accuracyBonus = 100000.0 / Math.pow(10, sep);
        sepEastingString = mgrsString.substring(i, i + sep);
        sepEasting = parseFloat(sepEastingString) * accuracyBonus;
        sepNorthingString = mgrsString.substring(i + sep);
        sepNorthing = parseFloat(sepNorthingString) * accuracyBonus;
      }

      easting = sepEasting + east100k;
      northing = sepNorthing + north100k;

      return {
        easting: easting,
        northing: northing,
        zoneLetter: zoneLetter,
        zoneNumber: zoneNumber,
        accuracy: accuracyBonus
      };
    }

    /**
     * Given the first letter from a two-letter MGRS 100k zone, and given the
     * MGRS table set for the zone number, figure out the easting value that
     * should be added to the other, secondary easting value.
     *
     * @private
     * @param {char} e The first letter from a two-letter MGRS 100´k zone.
     * @param {number} set The MGRS table set for the zone number.
     * @return {number} The easting value for the given letter and set.
     */
    function getEastingFromChar(e, set) {
      // colOrigin is the letter at the origin of the set for the
      // column
      var curCol = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(set - 1);
      var eastingValue = 100000.0;
      var rewindMarker = false;

      while (curCol !== e.charCodeAt(0)) {
        curCol++;
        if (curCol === I) {
          curCol++;
        }
        if (curCol === O) {
          curCol++;
        }
        if (curCol > Z) {
          if (rewindMarker) {
            throw ("Bad character: " + e);
          }
          curCol = A;
          rewindMarker = true;
        }
        eastingValue += 100000.0;
      }

      return eastingValue;
    }

    /**
     * Given the second letter from a two-letter MGRS 100k zone, and given the
     * MGRS table set for the zone number, figure out the northing value that
     * should be added to the other, secondary northing value. You have to
     * remember that Northings are determined from the equator, and the vertical
     * cycle of letters mean a 2000000 additional northing meters. This happens
     * approx. every 18 degrees of latitude. This method does *NOT* count any
     * additional northings. You have to figure out how many 2000000 meters need
     * to be added for the zone letter of the MGRS coordinate.
     *
     * @private
     * @param {char} n Second letter of the MGRS 100k zone
     * @param {number} set The MGRS table set number, which is dependent on the
     *     UTM zone number.
     * @return {number} The northing value for the given letter and set.
     */
    function getNorthingFromChar(n, set) {

      if (n > 'V') {
        throw ("MGRSPoint given invalid Northing " + n);
      }

      // rowOrigin is the letter at the origin of the set for the
      // column
      var curRow = SET_ORIGIN_ROW_LETTERS.charCodeAt(set - 1);
      var northingValue = 0.0;
      var rewindMarker = false;

      while (curRow !== n.charCodeAt(0)) {
        curRow++;
        if (curRow === I) {
          curRow++;
        }
        if (curRow === O) {
          curRow++;
        }
        // fixing a bug making whole application hang in this loop
        // when 'n' is a wrong character
        if (curRow > V) {
          if (rewindMarker) { // making sure that this loop ends
            throw ("Bad character: " + n);
          }
          curRow = A;
          rewindMarker = true;
        }
        northingValue += 100000.0;
      }

      return northingValue;
    }

    /**
     * The function getMinNorthing returns the minimum northing value of a MGRS
     * zone.
     *
     * Ported from Geotrans' c Lattitude_Band_Value structure table.
     *
     * @private
     * @param {char} zoneLetter The MGRS zone to get the min northing for.
     * @return {number}
     */
    function getMinNorthing(zoneLetter) {
      var northing;
      switch (zoneLetter) {
      case 'C':
        northing = 1100000.0;
        break;
      case 'D':
        northing = 2000000.0;
        break;
      case 'E':
        northing = 2800000.0;
        break;
      case 'F':
        northing = 3700000.0;
        break;
      case 'G':
        northing = 4600000.0;
        break;
      case 'H':
        northing = 5500000.0;
        break;
      case 'J':
        northing = 6400000.0;
        break;
      case 'K':
        northing = 7300000.0;
        break;
      case 'L':
        northing = 8200000.0;
        break;
      case 'M':
        northing = 9100000.0;
        break;
      case 'N':
        northing = 0.0;
        break;
      case 'P':
        northing = 800000.0;
        break;
      case 'Q':
        northing = 1700000.0;
        break;
      case 'R':
        northing = 2600000.0;
        break;
      case 'S':
        northing = 3500000.0;
        break;
      case 'T':
        northing = 4400000.0;
        break;
      case 'U':
        northing = 5300000.0;
        break;
      case 'V':
        northing = 6200000.0;
        break;
      case 'W':
        northing = 7000000.0;
        break;
      case 'X':
        northing = 7900000.0;
        break;
      default:
        northing = -1.0;
      }
      if (northing >= 0.0) {
        return northing;
      }
      else {
        throw ("Invalid zone letter: " + zoneLetter);
      }

    }

    function Point(x, y, z) {
      if (!(this instanceof Point)) {
        return new Point(x, y, z);
      }
      if (Array.isArray(x)) {
        this.x = x[0];
        this.y = x[1];
        this.z = x[2] || 0.0;
      } else if(typeof x === 'object') {
        this.x = x.x;
        this.y = x.y;
        this.z = x.z || 0.0;
      } else if (typeof x === 'string' && typeof y === 'undefined') {
        var coords = x.split(',');
        this.x = parseFloat(coords[0], 10);
        this.y = parseFloat(coords[1], 10);
        this.z = parseFloat(coords[2], 10) || 0.0;
      } else {
        this.x = x;
        this.y = y;
        this.z = z || 0.0;
      }
      console.warn('proj4.Point will be removed in version 3, use proj4.toPoint');
    }

    Point.fromMGRS = function(mgrsStr) {
      return new Point(toPoint(mgrsStr));
    };
    Point.prototype.toMGRS = function(accuracy) {
      return forward$t([this.x, this.y], accuracy);
    };

    var C00 = 1;
    var C02 = 0.25;
    var C04 = 0.046875;
    var C06 = 0.01953125;
    var C08 = 0.01068115234375;
    var C22 = 0.75;
    var C44 = 0.46875;
    var C46 = 0.01302083333333333333;
    var C48 = 0.00712076822916666666;
    var C66 = 0.36458333333333333333;
    var C68 = 0.00569661458333333333;
    var C88 = 0.3076171875;

    function pj_enfn(es) {
      var en = [];
      en[0] = C00 - es * (C02 + es * (C04 + es * (C06 + es * C08)));
      en[1] = es * (C22 - es * (C04 + es * (C06 + es * C08)));
      var t = es * es;
      en[2] = t * (C44 - es * (C46 + es * C48));
      t *= es;
      en[3] = t * (C66 - es * C68);
      en[4] = t * es * C88;
      return en;
    }

    function pj_mlfn(phi, sphi, cphi, en) {
      cphi *= sphi;
      sphi *= sphi;
      return (en[0] * phi - cphi * (en[1] + sphi * (en[2] + sphi * (en[3] + sphi * en[4]))));
    }

    var MAX_ITER$3 = 20;

    function pj_inv_mlfn(arg, es, en) {
      var k = 1 / (1 - es);
      var phi = arg;
      for (var i = MAX_ITER$3; i; --i) { /* rarely goes over 2 iterations */
        var s = Math.sin(phi);
        var t = 1 - es * s * s;
        //t = this.pj_mlfn(phi, s, Math.cos(phi), en) - arg;
        //phi -= t * (t * Math.sqrt(t)) * k;
        t = (pj_mlfn(phi, s, Math.cos(phi), en) - arg) * (t * Math.sqrt(t)) * k;
        phi -= t;
        if (Math.abs(t) < values.EPSLN) {
          return phi;
        }
      }
      //..reportError("cass:pj_inv_mlfn: Convergence error");
      return phi;
    }

    // Heavily based on this tmerc projection implementation

    function init$t() {
      this.x0 = this.x0 !== undefined ? this.x0 : 0;
      this.y0 = this.y0 !== undefined ? this.y0 : 0;
      this.long0 = this.long0 !== undefined ? this.long0 : 0;
      this.lat0 = this.lat0 !== undefined ? this.lat0 : 0;

      if (this.es) {
        this.en = pj_enfn(this.es);
        this.ml0 = pj_mlfn(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en);
      }
    }

    /**
        Transverse Mercator Forward  - long/lat to x/y
        long/lat in radians
      */
    function forward$s(p) {
      var lon = p.x;
      var lat = p.y;

      var delta_lon = adjust_lon(lon - this.long0);
      var con;
      var x, y;
      var sin_phi = Math.sin(lat);
      var cos_phi = Math.cos(lat);

      if (!this.es) {
        var b = cos_phi * Math.sin(delta_lon);

        if ((Math.abs(Math.abs(b) - 1)) < values.EPSLN) {
          return (93);
        }
        else {
          x = 0.5 * this.a * this.k0 * Math.log((1 + b) / (1 - b)) + this.x0;
          y = cos_phi * Math.cos(delta_lon) / Math.sqrt(1 - Math.pow(b, 2));
          b = Math.abs(y);

          if (b >= 1) {
            if ((b - 1) > values.EPSLN) {
              return (93);
            }
            else {
              y = 0;
            }
          }
          else {
            y = Math.acos(y);
          }

          if (lat < 0) {
            y = -y;
          }

          y = this.a * this.k0 * (y - this.lat0) + this.y0;
        }
      }
      else {
        var al = cos_phi * delta_lon;
        var als = Math.pow(al, 2);
        var c = this.ep2 * Math.pow(cos_phi, 2);
        var cs = Math.pow(c, 2);
        var tq = Math.abs(cos_phi) > values.EPSLN ? Math.tan(lat) : 0;
        var t = Math.pow(tq, 2);
        var ts = Math.pow(t, 2);
        con = 1 - this.es * Math.pow(sin_phi, 2);
        al = al / Math.sqrt(con);
        var ml = pj_mlfn(lat, sin_phi, cos_phi, this.en);

        x = this.a * (this.k0 * al * (1 +
          als / 6 * (1 - t + c +
          als / 20 * (5 - 18 * t + ts + 14 * c - 58 * t * c +
          als / 42 * (61 + 179 * ts - ts * t - 479 * t))))) +
          this.x0;

        y = this.a * (this.k0 * (ml - this.ml0 +
          sin_phi * delta_lon * al / 2 * (1 +
          als / 12 * (5 - t + 9 * c + 4 * cs +
          als / 30 * (61 + ts - 58 * t + 270 * c - 330 * t * c +
          als / 56 * (1385 + 543 * ts - ts * t - 3111 * t)))))) +
          this.y0;
      }

      p.x = x;
      p.y = y;

      return p;
    }

    /**
        Transverse Mercator Inverse  -  x/y to long/lat
      */
    function inverse$s(p) {
      var con, phi;
      var lat, lon;
      var x = (p.x - this.x0) * (1 / this.a);
      var y = (p.y - this.y0) * (1 / this.a);

      if (!this.es) {
        var f = Math.exp(x / this.k0);
        var g = 0.5 * (f - 1 / f);
        var temp = this.lat0 + y / this.k0;
        var h = Math.cos(temp);
        con = Math.sqrt((1 - Math.pow(h, 2)) / (1 + Math.pow(g, 2)));
        lat = Math.asin(con);

        if (y < 0) {
          lat = -lat;
        }

        if ((g === 0) && (h === 0)) {
          lon = 0;
        }
        else {
          lon = adjust_lon(Math.atan2(g, h) + this.long0);
        }
      }
      else { // ellipsoidal form
        con = this.ml0 + y / this.k0;
        phi = pj_inv_mlfn(con, this.es, this.en);

        if (Math.abs(phi) < values.HALF_PI) {
          var sin_phi = Math.sin(phi);
          var cos_phi = Math.cos(phi);
          var tan_phi = Math.abs(cos_phi) > values.EPSLN ? Math.tan(phi) : 0;
          var c = this.ep2 * Math.pow(cos_phi, 2);
          var cs = Math.pow(c, 2);
          var t = Math.pow(tan_phi, 2);
          var ts = Math.pow(t, 2);
          con = 1 - this.es * Math.pow(sin_phi, 2);
          var d = x * Math.sqrt(con) / this.k0;
          var ds = Math.pow(d, 2);
          con = con * tan_phi;

          lat = phi - (con * ds / (1 - this.es)) * 0.5 * (1 -
            ds / 12 * (5 + 3 * t - 9 * c * t + c - 4 * cs -
            ds / 30 * (61 + 90 * t - 252 * c * t + 45 * ts + 46 * c -
            ds / 56 * (1385 + 3633 * t + 4095 * ts + 1574 * ts * t))));

          lon = adjust_lon(this.long0 + (d * (1 -
            ds / 6 * (1 + 2 * t + c -
            ds / 20 * (5 + 28 * t + 24 * ts + 8 * c * t + 6 * c -
            ds / 42 * (61 + 662 * t + 1320 * ts + 720 * ts * t)))) / cos_phi));
        }
        else {
          lat = values.HALF_PI * sign(y);
          lon = 0;
        }
      }

      p.x = lon;
      p.y = lat;

      return p;
    }

    var names$t = ["Fast_Transverse_Mercator", "Fast Transverse Mercator"];
    var tmerc["default"] = {
      init: init$t,
      forward: forward$s,
      inverse: inverse$s,
      names: names$t
    };

    function sinh(x) {
      var r = Math.exp(x);
      r = (r - 1 / r) / 2;
      return r;
    }

    function hypot(x, y) {
      x = Math.abs(x);
      y = Math.abs(y);
      var a = Math.max(x, y);
      var b = Math.min(x, y) / (a ? a : 1);

      return a * Math.sqrt(1 + Math.pow(b, 2));
    }

    function log1py(x) {
      var y = 1 + x;
      var z = y - 1;

      return z === 0 ? x : x * Math.log(y) / z;
    }

    function asinhy(x) {
      var y = Math.abs(x);
      y = log1py(y * (1 + y / (hypot(1, y) + 1)));

      return x < 0 ? -y : y;
    }

    function gatg(pp, B) {
      var cos_2B = 2 * Math.cos(2 * B);
      var i = pp.length - 1;
      var h1 = pp[i];
      var h2 = 0;
      var h;

      while (--i >= 0) {
        h = -h2 + cos_2B * h1 + pp[i];
        h2 = h1;
        h1 = h;
      }

      return (B + h * Math.sin(2 * B));
    }

    function clens(pp, arg_r) {
      var r = 2 * Math.cos(arg_r);
      var i = pp.length - 1;
      var hr1 = pp[i];
      var hr2 = 0;
      var hr;

      while (--i >= 0) {
        hr = -hr2 + r * hr1 + pp[i];
        hr2 = hr1;
        hr1 = hr;
      }

      return Math.sin(arg_r) * hr;
    }

    function cosh(x) {
      var r = Math.exp(x);
      r = (r + 1 / r) / 2;
      return r;
    }

    function clens_cmplx(pp, arg_r, arg_i) {
      var sin_arg_r = Math.sin(arg_r);
      var cos_arg_r = Math.cos(arg_r);
      var sinh_arg_i = sinh(arg_i);
      var cosh_arg_i = cosh(arg_i);
      var r = 2 * cos_arg_r * cosh_arg_i;
      var i = -2 * sin_arg_r * sinh_arg_i;
      var j = pp.length - 1;
      var hr = pp[j];
      var hi1 = 0;
      var hr1 = 0;
      var hi = 0;
      var hr2;
      var hi2;

      while (--j >= 0) {
        hr2 = hr1;
        hi2 = hi1;
        hr1 = hr;
        hi1 = hi;
        hr = -hr2 + r * hr1 - i * hi1 + pp[j];
        hi = -hi2 + i * hr1 + r * hi1;
      }

      r = sin_arg_r * cosh_arg_i;
      i = cos_arg_r * sinh_arg_i;

      return [r * hr - i * hi, r * hi + i * hr];
    }

    // Heavily based on this etmerc projection implementation

    function init$s() {
      if (!this.approx && (isNaN(this.es) || this.es <= 0)) {
        throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');
      }
      if (this.approx) {
        // When '+approx' is set, use tmerc instead
        tmerc["default"].init.apply(this);
        this.forward = tmerc["default"].forward;
        this.inverse = tmerc["default"].inverse;
      }

      this.x0 = this.x0 !== undefined ? this.x0 : 0;
      this.y0 = this.y0 !== undefined ? this.y0 : 0;
      this.long0 = this.long0 !== undefined ? this.long0 : 0;
      this.lat0 = this.lat0 !== undefined ? this.lat0 : 0;

      this.cgb = [];
      this.cbg = [];
      this.utg = [];
      this.gtu = [];

      var f = this.es / (1 + Math.sqrt(1 - this.es));
      var n = f / (2 - f);
      var np = n;

      this.cgb[0] = n * (2 + n * (-2 / 3 + n * (-2 + n * (116 / 45 + n * (26 / 45 + n * (-2854 / 675 ))))));
      this.cbg[0] = n * (-2 + n * ( 2 / 3 + n * ( 4 / 3 + n * (-82 / 45 + n * (32 / 45 + n * (4642 / 4725))))));

      np = np * n;
      this.cgb[1] = np * (7 / 3 + n * (-8 / 5 + n * (-227 / 45 + n * (2704 / 315 + n * (2323 / 945)))));
      this.cbg[1] = np * (5 / 3 + n * (-16 / 15 + n * ( -13 / 9 + n * (904 / 315 + n * (-1522 / 945)))));

      np = np * n;
      this.cgb[2] = np * (56 / 15 + n * (-136 / 35 + n * (-1262 / 105 + n * (73814 / 2835))));
      this.cbg[2] = np * (-26 / 15 + n * (34 / 21 + n * (8 / 5 + n * (-12686 / 2835))));

      np = np * n;
      this.cgb[3] = np * (4279 / 630 + n * (-332 / 35 + n * (-399572 / 14175)));
      this.cbg[3] = np * (1237 / 630 + n * (-12 / 5 + n * ( -24832 / 14175)));

      np = np * n;
      this.cgb[4] = np * (4174 / 315 + n * (-144838 / 6237));
      this.cbg[4] = np * (-734 / 315 + n * (109598 / 31185));

      np = np * n;
      this.cgb[5] = np * (601676 / 22275);
      this.cbg[5] = np * (444337 / 155925);

      np = Math.pow(n, 2);
      this.Qn = this.k0 / (1 + n) * (1 + np * (1 / 4 + np * (1 / 64 + np / 256)));

      this.utg[0] = n * (-0.5 + n * ( 2 / 3 + n * (-37 / 96 + n * ( 1 / 360 + n * (81 / 512 + n * (-96199 / 604800))))));
      this.gtu[0] = n * (0.5 + n * (-2 / 3 + n * (5 / 16 + n * (41 / 180 + n * (-127 / 288 + n * (7891 / 37800))))));

      this.utg[1] = np * (-1 / 48 + n * (-1 / 15 + n * (437 / 1440 + n * (-46 / 105 + n * (1118711 / 3870720)))));
      this.gtu[1] = np * (13 / 48 + n * (-3 / 5 + n * (557 / 1440 + n * (281 / 630 + n * (-1983433 / 1935360)))));

      np = np * n;
      this.utg[2] = np * (-17 / 480 + n * (37 / 840 + n * (209 / 4480 + n * (-5569 / 90720 ))));
      this.gtu[2] = np * (61 / 240 + n * (-103 / 140 + n * (15061 / 26880 + n * (167603 / 181440))));

      np = np * n;
      this.utg[3] = np * (-4397 / 161280 + n * (11 / 504 + n * (830251 / 7257600)));
      this.gtu[3] = np * (49561 / 161280 + n * (-179 / 168 + n * (6601661 / 7257600)));

      np = np * n;
      this.utg[4] = np * (-4583 / 161280 + n * (108847 / 3991680));
      this.gtu[4] = np * (34729 / 80640 + n * (-3418889 / 1995840));

      np = np * n;
      this.utg[5] = np * (-20648693 / 638668800);
      this.gtu[5] = np * (212378941 / 319334400);

      var Z = gatg(this.cbg, this.lat0);
      this.Zb = -this.Qn * (Z + clens(this.gtu, 2 * Z));
    }

    function forward$r(p) {
      var Ce = adjust_lon(p.x - this.long0);
      var Cn = p.y;

      Cn = gatg(this.cbg, Cn);
      var sin_Cn = Math.sin(Cn);
      var cos_Cn = Math.cos(Cn);
      var sin_Ce = Math.sin(Ce);
      var cos_Ce = Math.cos(Ce);

      Cn = Math.atan2(sin_Cn, cos_Ce * cos_Cn);
      Ce = Math.atan2(sin_Ce * cos_Cn, hypot(sin_Cn, cos_Cn * cos_Ce));
      Ce = asinhy(Math.tan(Ce));

      var tmp = clens_cmplx(this.gtu, 2 * Cn, 2 * Ce);

      Cn = Cn + tmp[0];
      Ce = Ce + tmp[1];

      var x;
      var y;

      if (Math.abs(Ce) <= 2.623395162778) {
        x = this.a * (this.Qn * Ce) + this.x0;
        y = this.a * (this.Qn * Cn + this.Zb) + this.y0;
      }
      else {
        x = Infinity;
        y = Infinity;
      }

      p.x = x;
      p.y = y;

      return p;
    }

    function inverse$r(p) {
      var Ce = (p.x - this.x0) * (1 / this.a);
      var Cn = (p.y - this.y0) * (1 / this.a);

      Cn = (Cn - this.Zb) / this.Qn;
      Ce = Ce / this.Qn;

      var lon;
      var lat;

      if (Math.abs(Ce) <= 2.623395162778) {
        var tmp = clens_cmplx(this.utg, 2 * Cn, 2 * Ce);

        Cn = Cn + tmp[0];
        Ce = Ce + tmp[1];
        Ce = Math.atan(sinh(Ce));

        var sin_Cn = Math.sin(Cn);
        var cos_Cn = Math.cos(Cn);
        var sin_Ce = Math.sin(Ce);
        var cos_Ce = Math.cos(Ce);

        Cn = Math.atan2(sin_Cn * cos_Ce, hypot(sin_Ce, cos_Ce * cos_Cn));
        Ce = Math.atan2(sin_Ce, cos_Ce * cos_Cn);

        lon = adjust_lon(Ce + this.long0);
        lat = gatg(this.cgb, Cn);
      }
      else {
        lon = Infinity;
        lat = Infinity;
      }

      p.x = lon;
      p.y = lat;

      return p;
    }

    var names$s = ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc", "Transverse_Mercator", "Transverse Mercator", "tmerc"];
    var etmerc = {
      init: init$s,
      forward: forward$r,
      inverse: inverse$r,
      names: names$s
    };

    function adjust_zone(zone, lon) {
      if (zone === undefined) {
        zone = Math.floor((adjust_lon(lon) + Math.PI) * 30 / Math.PI) + 1;

        if (zone < 0) {
          return 0;
        } else if (zone > 60) {
          return 60;
        }
      }
      return zone;
    }

    var dependsOn = 'etmerc';


    function init$r() {
      var zone = adjust_zone(this.zone, this.long0);
      if (zone === undefined) {
        throw new Error('unknown utm zone');
      }
      this.lat0 = 0;
      this.long0 =  ((6 * Math.abs(zone)) - 183) * D2R$1;
      this.x0 = 500000;
      this.y0 = this.utmSouth ? 10000000 : 0;
      this.k0 = 0.9996;

      etmerc.init.apply(this);
      this.forward = etmerc.forward;
      this.inverse = etmerc.inverse;
    }

    var names$r = ["Universal Transverse Mercator System", "utm"];
    var utm = {
      init: init$r,
      names: names$r,
      dependsOn: dependsOn
    };

    function srat(esinp, exp) {
      return (Math.pow((1 - esinp) / (1 + esinp), exp));
    }

    var MAX_ITER$2 = 20;

    function init$q() {
      var sphi = Math.sin(this.lat0);
      var cphi = Math.cos(this.lat0);
      cphi *= cphi;
      this.rc = Math.sqrt(1 - this.es) / (1 - this.es * sphi * sphi);
      this.C = Math.sqrt(1 + this.es * cphi * cphi / (1 - this.es));
      this.phic0 = Math.asin(sphi / this.C);
      this.ratexp = 0.5 * this.C * this.e;
      this.K = Math.tan(0.5 * this.phic0 + values.FORTPI) / (Math.pow(Math.tan(0.5 * this.lat0 + values.FORTPI), this.C) * srat(this.e * sphi, this.ratexp));
    }

    function forward$q(p) {
      var lon = p.x;
      var lat = p.y;

      p.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * lat + values.FORTPI), this.C) * srat(this.e * Math.sin(lat), this.ratexp)) - values.HALF_PI;
      p.x = this.C * lon;
      return p;
    }

    function inverse$q(p) {
      var DEL_TOL = 1e-14;
      var lon = p.x / this.C;
      var lat = p.y;
      var num = Math.pow(Math.tan(0.5 * lat + values.FORTPI) / this.K, 1 / this.C);
      for (var i = MAX_ITER$2; i > 0; --i) {
        lat = 2 * Math.atan(num * srat(this.e * Math.sin(p.y), - 0.5 * this.e)) - values.HALF_PI;
        if (Math.abs(lat - p.y) < DEL_TOL) {
          break;
        }
        p.y = lat;
      }
      /* convergence failed */
      if (!i) {
        return null;
      }
      p.x = lon;
      p.y = lat;
      return p;
    }

    var names$q = ["gauss"];
    var gauss = {
      init: init$q,
      forward: forward$q,
      inverse: inverse$q,
      names: names$q
    };

    function init$p() {
      gauss.init.apply(this);
      if (!this.rc) {
        return;
      }
      this.sinc0 = Math.sin(this.phic0);
      this.cosc0 = Math.cos(this.phic0);
      this.R2 = 2 * this.rc;
      if (!this.title) {
        this.title = "Oblique Stereographic Alternative";
      }
    }

    function forward$p(p) {
      var sinc, cosc, cosl, k;
      p.x = adjust_lon(p.x - this.long0);
      gauss.forward.apply(this, [p]);
      sinc = Math.sin(p.y);
      cosc = Math.cos(p.y);
      cosl = Math.cos(p.x);
      k = this.k0 * this.R2 / (1 + this.sinc0 * sinc + this.cosc0 * cosc * cosl);
      p.x = k * cosc * Math.sin(p.x);
      p.y = k * (this.cosc0 * sinc - this.sinc0 * cosc * cosl);
      p.x = this.a * p.x + this.x0;
      p.y = this.a * p.y + this.y0;
      return p;
    }

    function inverse$p(p) {
      var sinc, cosc, lon, lat, rho;
      p.x = (p.x - this.x0) / this.a;
      p.y = (p.y - this.y0) / this.a;

      p.x /= this.k0;
      p.y /= this.k0;
      if ((rho = Math.sqrt(p.x * p.x + p.y * p.y))) {
        var c = 2 * Math.atan2(rho, this.R2);
        sinc = Math.sin(c);
        cosc = Math.cos(c);
        lat = Math.asin(cosc * this.sinc0 + p.y * sinc * this.cosc0 / rho);
        lon = Math.atan2(p.x * sinc, rho * this.cosc0 * cosc - p.y * this.sinc0 * sinc);
      }
      else {
        lat = this.phic0;
        lon = 0;
      }

      p.x = lon;
      p.y = lat;
      gauss.inverse.apply(this, [p]);
      p.x = adjust_lon(p.x + this.long0);
      return p;
    }

    var names$p = ["Stereographic_North_Pole", "Oblique_Stereographic", "Polar_Stereographic", "sterea","Oblique Stereographic Alternative","Double_Stereographic"];
    var sterea = {
      init: init$p,
      forward: forward$p,
      inverse: inverse$p,
      names: names$p
    };

    function ssfn_(phit, sinphi, eccen) {
      sinphi *= eccen;
      return (Math.tan(0.5 * (values.HALF_PI + phit)) * Math.pow((1 - sinphi) / (1 + sinphi), 0.5 * eccen));
    }

    function init$o() {
      this.coslat0 = Math.cos(this.lat0);
      this.sinlat0 = Math.sin(this.lat0);
      if (this.sphere) {
        if (this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= values.EPSLN) {
          this.k0 = 0.5 * (1 + sign(this.lat0) * Math.sin(this.lat_ts));
        }
      }
      else {
        if (Math.abs(this.coslat0) <= values.EPSLN) {
          if (this.lat0 > 0) {
            //North pole
            //trace('stere:north pole');
            this.con = 1;
          }
          else {
            //South pole
            //trace('stere:south pole');
            this.con = -1;
          }
        }
        this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e));
        if (this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= values.EPSLN) {
          this.k0 = 0.5 * this.cons * msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / tsfnz(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts));
        }
        this.ms1 = msfnz(this.e, this.sinlat0, this.coslat0);
        this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - values.HALF_PI;
        this.cosX0 = Math.cos(this.X0);
        this.sinX0 = Math.sin(this.X0);
      }
    }

    // Stereographic forward equations--mapping lat,long to x,y
    function forward$o(p) {
      var lon = p.x;
      var lat = p.y;
      var sinlat = Math.sin(lat);
      var coslat = Math.cos(lat);
      var A, X, sinX, cosX, ts, rh;
      var dlon = adjust_lon(lon - this.long0);

      if (Math.abs(Math.abs(lon - this.long0) - Math.PI) <= values.EPSLN && Math.abs(lat + this.lat0) <= values.EPSLN) {
        //case of the origine point
        //trace('stere:this is the origin point');
        p.x = NaN;
        p.y = NaN;
        return p;
      }
      if (this.sphere) {
        //trace('stere:sphere case');
        A = 2 * this.k0 / (1 + this.sinlat0 * sinlat + this.coslat0 * coslat * Math.cos(dlon));
        p.x = this.a * A * coslat * Math.sin(dlon) + this.x0;
        p.y = this.a * A * (this.coslat0 * sinlat - this.sinlat0 * coslat * Math.cos(dlon)) + this.y0;
        return p;
      }
      else {
        X = 2 * Math.atan(this.ssfn_(lat, sinlat, this.e)) - values.HALF_PI;
        cosX = Math.cos(X);
        sinX = Math.sin(X);
        if (Math.abs(this.coslat0) <= values.EPSLN) {
          ts = tsfnz(this.e, lat * this.con, this.con * sinlat);
          rh = 2 * this.a * this.k0 * ts / this.cons;
          p.x = this.x0 + rh * Math.sin(lon - this.long0);
          p.y = this.y0 - this.con * rh * Math.cos(lon - this.long0);
          //trace(p.toString());
          return p;
        }
        else if (Math.abs(this.sinlat0) < values.EPSLN) {
          //Eq
          //trace('stere:equateur');
          A = 2 * this.a * this.k0 / (1 + cosX * Math.cos(dlon));
          p.y = A * sinX;
        }
        else {
          //other case
          //trace('stere:normal case');
          A = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * sinX + this.cosX0 * cosX * Math.cos(dlon)));
          p.y = A * (this.cosX0 * sinX - this.sinX0 * cosX * Math.cos(dlon)) + this.y0;
        }
        p.x = A * cosX * Math.sin(dlon) + this.x0;
      }
      //trace(p.toString());
      return p;
    }

    //* Stereographic inverse equations--mapping x,y to lat/long
    function inverse$o(p) {
      p.x -= this.x0;
      p.y -= this.y0;
      var lon, lat, ts, ce, Chi;
      var rh = Math.sqrt(p.x * p.x + p.y * p.y);
      if (this.sphere) {
        var c = 2 * Math.atan(rh / (2 * this.a * this.k0));
        lon = this.long0;
        lat = this.lat0;
        if (rh <= values.EPSLN) {
          p.x = lon;
          p.y = lat;
          return p;
        }
        lat = Math.asin(Math.cos(c) * this.sinlat0 + p.y * Math.sin(c) * this.coslat0 / rh);
        if (Math.abs(this.coslat0) < values.EPSLN) {
          if (this.lat0 > 0) {
            lon = adjust_lon(this.long0 + Math.atan2(p.x, - 1 * p.y));
          }
          else {
            lon = adjust_lon(this.long0 + Math.atan2(p.x, p.y));
          }
        }
        else {
          lon = adjust_lon(this.long0 + Math.atan2(p.x * Math.sin(c), rh * this.coslat0 * Math.cos(c) - p.y * this.sinlat0 * Math.sin(c)));
        }
        p.x = lon;
        p.y = lat;
        return p;
      }
      else {
        if (Math.abs(this.coslat0) <= values.EPSLN) {
          if (rh <= values.EPSLN) {
            lat = this.lat0;
            lon = this.long0;
            p.x = lon;
            p.y = lat;
            //trace(p.toString());
            return p;
          }
          p.x *= this.con;
          p.y *= this.con;
          ts = rh * this.cons / (2 * this.a * this.k0);
          lat = this.con * phi2z(this.e, ts);
          lon = this.con * adjust_lon(this.con * this.long0 + Math.atan2(p.x, - 1 * p.y));
        }
        else {
          ce = 2 * Math.atan(rh * this.cosX0 / (2 * this.a * this.k0 * this.ms1));
          lon = this.long0;
          if (rh <= values.EPSLN) {
            Chi = this.X0;
          }
          else {
            Chi = Math.asin(Math.cos(ce) * this.sinX0 + p.y * Math.sin(ce) * this.cosX0 / rh);
            lon = adjust_lon(this.long0 + Math.atan2(p.x * Math.sin(ce), rh * this.cosX0 * Math.cos(ce) - p.y * this.sinX0 * Math.sin(ce)));
          }
          lat = -1 * phi2z(this.e, Math.tan(0.5 * (values.HALF_PI + Chi)));
        }
      }
      p.x = lon;
      p.y = lat;

      //trace(p.toString());
      return p;

    }

    var names$o = ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)"];
    var stere = {
      init: init$o,
      forward: forward$o,
      inverse: inverse$o,
      names: names$o,
      ssfn_: ssfn_
    };

    /*
      references:
        Formules et constantes pour le Calcul pour la
        projection cylindrique conforme à axe oblique et pour la transformation entre
        des systèmes de référence.
        http://www.swisstopo.admin.ch/internet/swisstopo/fr/home/topics/survey/sys/refsys/switzerland.parsysrelated1.31216.downloadList.77004.DownloadFile.tmp/swissprojectionfr.pdf
      */

    function init$n() {
      var phy0 = this.lat0;
      this.lambda0 = this.long0;
      var sinPhy0 = Math.sin(phy0);
      var semiMajorAxis = this.a;
      var invF = this.rf;
      var flattening = 1 / invF;
      var e2 = 2 * flattening - Math.pow(flattening, 2);
      var e = this.e = Math.sqrt(e2);
      this.R = this.k0 * semiMajorAxis * Math.sqrt(1 - e2) / (1 - e2 * Math.pow(sinPhy0, 2));
      this.alpha = Math.sqrt(1 + e2 / (1 - e2) * Math.pow(Math.cos(phy0), 4));
      this.b0 = Math.asin(sinPhy0 / this.alpha);
      var k1 = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2));
      var k2 = Math.log(Math.tan(Math.PI / 4 + phy0 / 2));
      var k3 = Math.log((1 + e * sinPhy0) / (1 - e * sinPhy0));
      this.K = k1 - this.alpha * k2 + this.alpha * e / 2 * k3;
    }

    function forward$n(p) {
      var Sa1 = Math.log(Math.tan(Math.PI / 4 - p.y / 2));
      var Sa2 = this.e / 2 * Math.log((1 + this.e * Math.sin(p.y)) / (1 - this.e * Math.sin(p.y)));
      var S = -this.alpha * (Sa1 + Sa2) + this.K;

      // spheric latitude
      var b = 2 * (Math.atan(Math.exp(S)) - Math.PI / 4);

      // spheric longitude
      var I = this.alpha * (p.x - this.lambda0);

      // psoeudo equatorial rotation
      var rotI = Math.atan(Math.sin(I) / (Math.sin(this.b0) * Math.tan(b) + Math.cos(this.b0) * Math.cos(I)));

      var rotB = Math.asin(Math.cos(this.b0) * Math.sin(b) - Math.sin(this.b0) * Math.cos(b) * Math.cos(I));

      p.y = this.R / 2 * Math.log((1 + Math.sin(rotB)) / (1 - Math.sin(rotB))) + this.y0;
      p.x = this.R * rotI + this.x0;
      return p;
    }

    function inverse$n(p) {
      var Y = p.x - this.x0;
      var X = p.y - this.y0;

      var rotI = Y / this.R;
      var rotB = 2 * (Math.atan(Math.exp(X / this.R)) - Math.PI / 4);

      var b = Math.asin(Math.cos(this.b0) * Math.sin(rotB) + Math.sin(this.b0) * Math.cos(rotB) * Math.cos(rotI));
      var I = Math.atan(Math.sin(rotI) / (Math.cos(this.b0) * Math.cos(rotI) - Math.sin(this.b0) * Math.tan(rotB)));

      var lambda = this.lambda0 + I / this.alpha;

      var S = 0;
      var phy = b;
      var prevPhy = -1000;
      var iteration = 0;
      while (Math.abs(phy - prevPhy) > 0.0000001) {
        if (++iteration > 20) {
          //...reportError("omercFwdInfinity");
          return;
        }
        //S = Math.log(Math.tan(Math.PI / 4 + phy / 2));
        S = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + b / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(phy)) / 2));
        prevPhy = phy;
        phy = 2 * Math.atan(Math.exp(S)) - Math.PI / 2;
      }

      p.x = lambda;
      p.y = phy;
      return p;
    }

    var names$n = ["somerc"];
    var somerc = {
      init: init$n,
      forward: forward$n,
      inverse: inverse$n,
      names: names$n
    };

    var TOL = 1e-7;

    function isTypeA(P) {
      var typeAProjections = ['Hotine_Oblique_Mercator','Hotine_Oblique_Mercator_Azimuth_Natural_Origin'];
      var projectionName = typeof P.PROJECTION === "object" ? Object.keys(P.PROJECTION)[0] : P.PROJECTION;
      
      return 'no_uoff' in P || 'no_off' in P || typeAProjections.indexOf(projectionName) !== -1;
    }


    /* Initialize the Oblique Mercator  projection
        ------------------------------------------*/
    function init$m() {  
      var con, com, cosph0, D, F, H, L, sinph0, p, J, gamma = 0,
        gamma0, lamc = 0, lam1 = 0, lam2 = 0, phi1 = 0, phi2 = 0, alpha_c = 0;
      
      // only Type A uses the no_off or no_uoff property
      // https://github.com/OSGeo/proj.4/issues/104
      this.no_off = isTypeA(this);
      this.no_rot = 'no_rot' in this;
      
      var alp = false;
      if ("alpha" in this) {
        alp = true;
      }

      var gam = false;
      if ("rectified_grid_angle" in this) {
        gam = true;
      }

      if (alp) {
        alpha_c = this.alpha;
      }
      
      if (gam) {
        gamma = (this.rectified_grid_angle * D2R$1);
      }
      
      if (alp || gam) {
        lamc = this.longc;
      } else {
        lam1 = this.long1;
        phi1 = this.lat1;
        lam2 = this.long2;
        phi2 = this.lat2;
        
        if (Math.abs(phi1 - phi2) <= TOL || (con = Math.abs(phi1)) <= TOL ||
            Math.abs(con - values.HALF_PI) <= TOL || Math.abs(Math.abs(this.lat0) - values.HALF_PI) <= TOL ||
            Math.abs(Math.abs(phi2) - values.HALF_PI) <= TOL) {
          throw new Error();
        }
      }
      
      var one_es = 1.0 - this.es;
      com = Math.sqrt(one_es);
      
      if (Math.abs(this.lat0) > values.EPSLN) {
        sinph0 = Math.sin(this.lat0);
        cosph0 = Math.cos(this.lat0);
        con = 1 - this.es * sinph0 * sinph0;
        this.B = cosph0 * cosph0;
        this.B = Math.sqrt(1 + this.es * this.B * this.B / one_es);
        this.A = this.B * this.k0 * com / con;
        D = this.B * com / (cosph0 * Math.sqrt(con));
        F = D * D -1;
        
        if (F <= 0) {
          F = 0;
        } else {
          F = Math.sqrt(F);
          if (this.lat0 < 0) {
            F = -F;
          }
        }
        
        this.E = F += D;
        this.E *= Math.pow(tsfnz(this.e, this.lat0, sinph0), this.B);
      } else {
        this.B = 1 / com;
        this.A = this.k0;
        this.E = D = F = 1;
      }
      
      if (alp || gam) {
        if (alp) {
          gamma0 = Math.asin(Math.sin(alpha_c) / D);
          if (!gam) {
            gamma = alpha_c;
          }
        } else {
          gamma0 = gamma;
          alpha_c = Math.asin(D * Math.sin(gamma0));
        }
        this.lam0 = lamc - Math.asin(0.5 * (F - 1 / F) * Math.tan(gamma0)) / this.B;
      } else {
        H = Math.pow(tsfnz(this.e, phi1, Math.sin(phi1)), this.B);
        L = Math.pow(tsfnz(this.e, phi2, Math.sin(phi2)), this.B);
        F = this.E / H;
        p = (L - H) / (L + H);
        J = this.E * this.E;
        J = (J - L * H) / (J + L * H);
        con = lam1 - lam2;
        
        if (con < -Math.pi) {
          lam2 -=values.TWO_PI;
        } else if (con > Math.pi) {
          lam2 += values.TWO_PI;
        }
        
        this.lam0 = adjust_lon(0.5 * (lam1 + lam2) - Math.atan(J * Math.tan(0.5 * this.B * (lam1 - lam2)) / p) / this.B);
        gamma0 = Math.atan(2 * Math.sin(this.B * adjust_lon(lam1 - this.lam0)) / (F - 1 / F));
        gamma = alpha_c = Math.asin(D * Math.sin(gamma0));
      }
      
      this.singam = Math.sin(gamma0);
      this.cosgam = Math.cos(gamma0);
      this.sinrot = Math.sin(gamma);
      this.cosrot = Math.cos(gamma);
      
      this.rB = 1 / this.B;
      this.ArB = this.A * this.rB;
      this.BrA = 1 / this.ArB;
      this.A * this.B;
      
      if (this.no_off) {
        this.u_0 = 0;
      } else {
        this.u_0 = Math.abs(this.ArB * Math.atan(Math.sqrt(D * D - 1) / Math.cos(alpha_c)));
        
        if (this.lat0 < 0) {
          this.u_0 = - this.u_0;
        }  
      }
        
      F = 0.5 * gamma0;
      this.v_pole_n = this.ArB * Math.log(Math.tan(values.FORTPI - F));
      this.v_pole_s = this.ArB * Math.log(Math.tan(values.FORTPI + F));
    }


    /* Oblique Mercator forward equations--mapping lat,long to x,y
        ----------------------------------------------------------*/
    function forward$m(p) {
      var coords = {};
      var S, T, U, V, W, temp, u, v;
      p.x = p.x - this.lam0;
      
      if (Math.abs(Math.abs(p.y) - values.HALF_PI) > values.EPSLN) {
        W = this.E / Math.pow(tsfnz(this.e, p.y, Math.sin(p.y)), this.B);
        
        temp = 1 / W;
        S = 0.5 * (W - temp);
        T = 0.5 * (W + temp);
        V = Math.sin(this.B * p.x);
        U = (S * this.singam - V * this.cosgam) / T;
            
        if (Math.abs(Math.abs(U) - 1.0) < values.EPSLN) {
          throw new Error();
        }
        
        v = 0.5 * this.ArB * Math.log((1 - U)/(1 + U));
        temp = Math.cos(this.B * p.x);
        
        if (Math.abs(temp) < TOL) {
          u = this.A * p.x;
        } else {
          u = this.ArB * Math.atan2((S * this.cosgam + V * this.singam), temp);
        }    
      } else {
        v = p.y > 0 ? this.v_pole_n : this.v_pole_s;
        u = this.ArB * p.y;
      }
         
      if (this.no_rot) {
        coords.x = u;
        coords.y = v;
      } else {
        u -= this.u_0;
        coords.x = v * this.cosrot + u * this.sinrot;
        coords.y = u * this.cosrot - v * this.sinrot;
      }
      
      coords.x = (this.a * coords.x + this.x0);
      coords.y = (this.a * coords.y + this.y0);
      
      return coords;
    }

    function inverse$m(p) {
      var u, v, Qp, Sp, Tp, Vp, Up;
      var coords = {};
      
      p.x = (p.x - this.x0) * (1.0 / this.a);
      p.y = (p.y - this.y0) * (1.0 / this.a);

      if (this.no_rot) {
        v = p.y;
        u = p.x;
      } else {
        v = p.x * this.cosrot - p.y * this.sinrot;
        u = p.y * this.cosrot + p.x * this.sinrot + this.u_0;
      }
      
      Qp = Math.exp(-this.BrA * v);
      Sp = 0.5 * (Qp - 1 / Qp);
      Tp = 0.5 * (Qp + 1 / Qp);
      Vp = Math.sin(this.BrA * u);
      Up = (Vp * this.cosgam + Sp * this.singam) / Tp;
      
      if (Math.abs(Math.abs(Up) - 1) < values.EPSLN) {
        coords.x = 0;
        coords.y = Up < 0 ? -values.HALF_PI : values.HALF_PI;
      } else {
        coords.y = this.E / Math.sqrt((1 + Up) / (1 - Up));
        coords.y = phi2z(this.e, Math.pow(coords.y, 1 / this.B));
        
        if (coords.y === Infinity) {
          throw new Error();
        }
            
        coords.x = -this.rB * Math.atan2((Sp * this.cosgam - Vp * this.singam), Math.cos(this.BrA * u));
      }
      
      coords.x += this.lam0;
      
      return coords;
    }

    var names$m = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Two_Point_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "Oblique_Mercator", "omerc"];
    var omerc = {
      init: init$m,
      forward: forward$m,
      inverse: inverse$m,
      names: names$m
    };

    function init$l() {
      
      //double lat0;                    /* the reference latitude               */
      //double long0;                   /* the reference longitude              */
      //double lat1;                    /* first standard parallel              */
      //double lat2;                    /* second standard parallel             */
      //double r_maj;                   /* major axis                           */
      //double r_min;                   /* minor axis                           */
      //double false_east;              /* x offset in meters                   */
      //double false_north;             /* y offset in meters                   */
      
      //the above value can be set with proj4.defs
      //example: proj4.defs("EPSG:2154","+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

      if (!this.lat2) {
        this.lat2 = this.lat1;
      } //if lat2 is not defined
      if (!this.k0) {
        this.k0 = 1;
      }
      this.x0 = this.x0 || 0;
      this.y0 = this.y0 || 0;
      // Standard Parallels cannot be equal and on opposite sides of the equator
      if (Math.abs(this.lat1 + this.lat2) < values.EPSLN) {
        return;
      }

      var temp = this.b / this.a;
      this.e = Math.sqrt(1 - temp * temp);

      var sin1 = Math.sin(this.lat1);
      var cos1 = Math.cos(this.lat1);
      var ms1 = msfnz(this.e, sin1, cos1);
      var ts1 = tsfnz(this.e, this.lat1, sin1);

      var sin2 = Math.sin(this.lat2);
      var cos2 = Math.cos(this.lat2);
      var ms2 = msfnz(this.e, sin2, cos2);
      var ts2 = tsfnz(this.e, this.lat2, sin2);

      var ts0 = tsfnz(this.e, this.lat0, Math.sin(this.lat0));

      if (Math.abs(this.lat1 - this.lat2) > values.EPSLN) {
        this.ns = Math.log(ms1 / ms2) / Math.log(ts1 / ts2);
      }
      else {
        this.ns = sin1;
      }
      if (isNaN(this.ns)) {
        this.ns = sin1;
      }
      this.f0 = ms1 / (this.ns * Math.pow(ts1, this.ns));
      this.rh = this.a * this.f0 * Math.pow(ts0, this.ns);
      if (!this.title) {
        this.title = "Lambert Conformal Conic";
      }
    }

    // Lambert Conformal conic forward equations--mapping lat,long to x,y
    // -----------------------------------------------------------------
    function forward$l(p) {

      var lon = p.x;
      var lat = p.y;

      // singular cases :
      if (Math.abs(2 * Math.abs(lat) - Math.PI) <= values.EPSLN) {
        lat = sign(lat) * (values.HALF_PI - 2 * values.EPSLN);
      }

      var con = Math.abs(Math.abs(lat) - values.HALF_PI);
      var ts, rh1;
      if (con > values.EPSLN) {
        ts = tsfnz(this.e, lat, Math.sin(lat));
        rh1 = this.a * this.f0 * Math.pow(ts, this.ns);
      }
      else {
        con = lat * this.ns;
        if (con <= 0) {
          return null;
        }
        rh1 = 0;
      }
      var theta = this.ns * adjust_lon(lon - this.long0);
      p.x = this.k0 * (rh1 * Math.sin(theta)) + this.x0;
      p.y = this.k0 * (this.rh - rh1 * Math.cos(theta)) + this.y0;

      return p;
    }

    // Lambert Conformal Conic inverse equations--mapping x,y to lat/long
    // -----------------------------------------------------------------
    function inverse$l(p) {

      var rh1, con, ts;
      var lat, lon;
      var x = (p.x - this.x0) / this.k0;
      var y = (this.rh - (p.y - this.y0) / this.k0);
      if (this.ns > 0) {
        rh1 = Math.sqrt(x * x + y * y);
        con = 1;
      }
      else {
        rh1 = -Math.sqrt(x * x + y * y);
        con = -1;
      }
      var theta = 0;
      if (rh1 !== 0) {
        theta = Math.atan2((con * x), (con * y));
      }
      if ((rh1 !== 0) || (this.ns > 0)) {
        con = 1 / this.ns;
        ts = Math.pow((rh1 / (this.a * this.f0)), con);
        lat = phi2z(this.e, ts);
        if (lat === -9999) {
          return null;
        }
      }
      else {
        lat = -values.HALF_PI;
      }
      lon = adjust_lon(theta / this.ns + this.long0);

      p.x = lon;
      p.y = lat;
      return p;
    }

    var names$l = [
      "Lambert Tangential Conformal Conic Projection",
      "Lambert_Conformal_Conic",
      "Lambert_Conformal_Conic_1SP",
      "Lambert_Conformal_Conic_2SP",
      "lcc",
      "Lambert Conic Conformal (1SP)",
      "Lambert Conic Conformal (2SP)"
    ];

    var lcc = {
      init: init$l,
      forward: forward$l,
      inverse: inverse$l,
      names: names$l
    };

    function init$k() {
      this.a = 6377397.155;
      this.es = 0.006674372230614;
      this.e = Math.sqrt(this.es);
      if (!this.lat0) {
        this.lat0 = 0.863937979737193;
      }
      if (!this.long0) {
        this.long0 = 0.7417649320975901 - 0.308341501185665;
      }
      /* if scale not set default to 0.9999 */
      if (!this.k0) {
        this.k0 = 0.9999;
      }
      this.s45 = 0.785398163397448; /* 45 */
      this.s90 = 2 * this.s45;
      this.fi0 = this.lat0;
      this.e2 = this.es;
      this.e = Math.sqrt(this.e2);
      this.alfa = Math.sqrt(1 + (this.e2 * Math.pow(Math.cos(this.fi0), 4)) / (1 - this.e2));
      this.uq = 1.04216856380474;
      this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa);
      this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2);
      this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g;
      this.k1 = this.k0;
      this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2));
      this.s0 = 1.37008346281555;
      this.n = Math.sin(this.s0);
      this.ro0 = this.k1 * this.n0 / Math.tan(this.s0);
      this.ad = this.s90 - this.uq;
    }

    /* ellipsoid */
    /* calculate xy from lat/lon */
    /* Constants, identical to inverse transform function */
    function forward$k(p) {
      var gfi, u, deltav, s, d, eps, ro;
      var lon = p.x;
      var lat = p.y;
      var delta_lon = adjust_lon(lon - this.long0);
      /* Transformation */
      gfi = Math.pow(((1 + this.e * Math.sin(lat)) / (1 - this.e * Math.sin(lat))), (this.alfa * this.e / 2));
      u = 2 * (Math.atan(this.k * Math.pow(Math.tan(lat / 2 + this.s45), this.alfa) / gfi) - this.s45);
      deltav = -delta_lon * this.alfa;
      s = Math.asin(Math.cos(this.ad) * Math.sin(u) + Math.sin(this.ad) * Math.cos(u) * Math.cos(deltav));
      d = Math.asin(Math.cos(u) * Math.sin(deltav) / Math.cos(s));
      eps = this.n * d;
      ro = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(s / 2 + this.s45), this.n);
      p.y = ro * Math.cos(eps) / 1;
      p.x = ro * Math.sin(eps) / 1;

      if (!this.czech) {
        p.y *= -1;
        p.x *= -1;
      }
      return (p);
    }

    /* calculate lat/lon from xy */
    function inverse$k(p) {
      var u, deltav, s, d, eps, ro, fi1;
      var ok;

      /* Transformation */
      /* revert y, x*/
      var tmp = p.x;
      p.x = p.y;
      p.y = tmp;
      if (!this.czech) {
        p.y *= -1;
        p.x *= -1;
      }
      ro = Math.sqrt(p.x * p.x + p.y * p.y);
      eps = Math.atan2(p.y, p.x);
      d = eps / Math.sin(this.s0);
      s = 2 * (Math.atan(Math.pow(this.ro0 / ro, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45);
      u = Math.asin(Math.cos(this.ad) * Math.sin(s) - Math.sin(this.ad) * Math.cos(s) * Math.cos(d));
      deltav = Math.asin(Math.cos(s) * Math.sin(d) / Math.cos(u));
      p.x = this.long0 - deltav / this.alfa;
      fi1 = u;
      ok = 0;
      var iter = 0;
      do {
        p.y = 2 * (Math.atan(Math.pow(this.k, - 1 / this.alfa) * Math.pow(Math.tan(u / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(fi1)) / (1 - this.e * Math.sin(fi1)), this.e / 2)) - this.s45);
        if (Math.abs(fi1 - p.y) < 0.0000000001) {
          ok = 1;
        }
        fi1 = p.y;
        iter += 1;
      } while (ok === 0 && iter < 15);
      if (iter >= 15) {
        return null;
      }

      return (p);
    }

    var names$k = ["Krovak", "krovak"];
    var krovak = {
      init: init$k,
      forward: forward$k,
      inverse: inverse$k,
      names: names$k
    };

    function mlfn(e0, e1, e2, e3, phi) {
      return (e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi));
    }

    function e0fn(x) {
      return (1 - 0.25 * x * (1 + x / 16 * (3 + 1.25 * x)));
    }

    function e1fn(x) {
      return (0.375 * x * (1 + 0.25 * x * (1 + 0.46875 * x)));
    }

    function e2fn(x) {
      return (0.05859375 * x * x * (1 + 0.75 * x));
    }

    function e3fn(x) {
      return (x * x * x * (35 / 3072));
    }

    function gN(a, e, sinphi) {
      var temp = e * sinphi;
      return a / Math.sqrt(1 - temp * temp);
    }

    function adjust_lat(x) {
      return (Math.abs(x) < values.HALF_PI) ? x : (x - (sign(x) * Math.PI));
    }

    function imlfn(ml, e0, e1, e2, e3) {
      var phi;
      var dphi;

      phi = ml / e0;
      for (var i = 0; i < 15; i++) {
        dphi = (ml - (e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi))) / (e0 - 2 * e1 * Math.cos(2 * phi) + 4 * e2 * Math.cos(4 * phi) - 6 * e3 * Math.cos(6 * phi));
        phi += dphi;
        if (Math.abs(dphi) <= 0.0000000001) {
          return phi;
        }
      }

      //..reportError("IMLFN-CONV:Latitude failed to converge after 15 iterations");
      return NaN;
    }

    function init$j() {
      if (!this.sphere) {
        this.e0 = e0fn(this.es);
        this.e1 = e1fn(this.es);
        this.e2 = e2fn(this.es);
        this.e3 = e3fn(this.es);
        this.ml0 = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0);
      }
    }

    /* Cassini forward equations--mapping lat,long to x,y
      -----------------------------------------------------------------------*/
    function forward$j(p) {

      /* Forward equations
          -----------------*/
      var x, y;
      var lam = p.x;
      var phi = p.y;
      lam = adjust_lon(lam - this.long0);

      if (this.sphere) {
        x = this.a * Math.asin(Math.cos(phi) * Math.sin(lam));
        y = this.a * (Math.atan2(Math.tan(phi), Math.cos(lam)) - this.lat0);
      }
      else {
        //ellipsoid
        var sinphi = Math.sin(phi);
        var cosphi = Math.cos(phi);
        var nl = gN(this.a, this.e, sinphi);
        var tl = Math.tan(phi) * Math.tan(phi);
        var al = lam * Math.cos(phi);
        var asq = al * al;
        var cl = this.es * cosphi * cosphi / (1 - this.es);
        var ml = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, phi);

        x = nl * al * (1 - asq * tl * (1 / 6 - (8 - tl + 8 * cl) * asq / 120));
        y = ml - this.ml0 + nl * sinphi / cosphi * asq * (0.5 + (5 - tl + 6 * cl) * asq / 24);


      }

      p.x = x + this.x0;
      p.y = y + this.y0;
      return p;
    }

    /* Inverse equations
      -----------------*/
    function inverse$j(p) {
      p.x -= this.x0;
      p.y -= this.y0;
      var x = p.x / this.a;
      var y = p.y / this.a;
      var phi, lam;

      if (this.sphere) {
        var dd = y + this.lat0;
        phi = Math.asin(Math.sin(dd) * Math.cos(x));
        lam = Math.atan2(Math.tan(x), Math.cos(dd));
      }
      else {
        /* ellipsoid */
        var ml1 = this.ml0 / this.a + y;
        var phi1 = imlfn(ml1, this.e0, this.e1, this.e2, this.e3);
        if (Math.abs(Math.abs(phi1) - values.HALF_PI) <= values.EPSLN) {
          p.x = this.long0;
          p.y = values.HALF_PI;
          if (y < 0) {
            p.y *= -1;
          }
          return p;
        }
        var nl1 = gN(this.a, this.e, Math.sin(phi1));

        var rl1 = nl1 * nl1 * nl1 / this.a / this.a * (1 - this.es);
        var tl1 = Math.pow(Math.tan(phi1), 2);
        var dl = x * this.a / nl1;
        var dsq = dl * dl;
        phi = phi1 - nl1 * Math.tan(phi1) / rl1 * dl * dl * (0.5 - (1 + 3 * tl1) * dl * dl / 24);
        lam = dl * (1 - dsq * (tl1 / 3 + (1 + 3 * tl1) * tl1 * dsq / 15)) / Math.cos(phi1);

      }

      p.x = adjust_lon(lam + this.long0);
      p.y = adjust_lat(phi);
      return p;

    }

    var names$j = ["Cassini", "Cassini_Soldner", "cass"];
    var cass = {
      init: init$j,
      forward: forward$j,
      inverse: inverse$j,
      names: names$j
    };

    function qsfnz(eccent, sinphi) {
      var con;
      if (eccent > 1.0e-7) {
        con = eccent * sinphi;
        return ((1 - eccent * eccent) * (sinphi / (1 - con * con) - (0.5 / eccent) * Math.log((1 - con) / (1 + con))));
      }
      else {
        return (2 * sinphi);
      }
    }

    /*
      reference
        "New Equal-Area Map Projections for Noncircular Regions", John P. Snyder,
        The American Cartographer, Vol 15, No. 4, October 1988, pp. 341-355.
      */

    var S_POLE = 1;

    var N_POLE = 2;
    var EQUIT = 3;
    var OBLIQ = 4;

    /* Initialize the Lambert Azimuthal Equal Area projection
      ------------------------------------------------------*/
    function init$i() {
      var t = Math.abs(this.lat0);
      if (Math.abs(t - values.HALF_PI) < values.EPSLN) {
        this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE;
      }
      else if (Math.abs(t) < values.EPSLN) {
        this.mode = this.EQUIT;
      }
      else {
        this.mode = this.OBLIQ;
      }
      if (this.es > 0) {
        var sinphi;

        this.qp = qsfnz(this.e, 1);
        this.mmf = 0.5 / (1 - this.es);
        this.apa = authset(this.es);
        switch (this.mode) {
        case this.N_POLE:
          this.dd = 1;
          break;
        case this.S_POLE:
          this.dd = 1;
          break;
        case this.EQUIT:
          this.rq = Math.sqrt(0.5 * this.qp);
          this.dd = 1 / this.rq;
          this.xmf = 1;
          this.ymf = 0.5 * this.qp;
          break;
        case this.OBLIQ:
          this.rq = Math.sqrt(0.5 * this.qp);
          sinphi = Math.sin(this.lat0);
          this.sinb1 = qsfnz(this.e, sinphi) / this.qp;
          this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1);
          this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * sinphi * sinphi) * this.rq * this.cosb1);
          this.ymf = (this.xmf = this.rq) / this.dd;
          this.xmf *= this.dd;
          break;
        }
      }
      else {
        if (this.mode === this.OBLIQ) {
          this.sinph0 = Math.sin(this.lat0);
          this.cosph0 = Math.cos(this.lat0);
        }
      }
    }

    /* Lambert Azimuthal Equal Area forward equations--mapping lat,long to x,y
      -----------------------------------------------------------------------*/
    function forward$i(p) {

      /* Forward equations
          -----------------*/
      var x, y, coslam, sinlam, sinphi, q, sinb, cosb, b, cosphi;
      var lam = p.x;
      var phi = p.y;

      lam = adjust_lon(lam - this.long0);
      if (this.sphere) {
        sinphi = Math.sin(phi);
        cosphi = Math.cos(phi);
        coslam = Math.cos(lam);
        if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
          y = (this.mode === this.EQUIT) ? 1 + cosphi * coslam : 1 + this.sinph0 * sinphi + this.cosph0 * cosphi * coslam;
          if (y <= values.EPSLN) {
            return null;
          }
          y = Math.sqrt(2 / y);
          x = y * cosphi * Math.sin(lam);
          y *= (this.mode === this.EQUIT) ? sinphi : this.cosph0 * sinphi - this.sinph0 * cosphi * coslam;
        }
        else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
          if (this.mode === this.N_POLE) {
            coslam = -coslam;
          }
          if (Math.abs(phi + this.lat0) < values.EPSLN) {
            return null;
          }
          y = values.FORTPI - phi * 0.5;
          y = 2 * ((this.mode === this.S_POLE) ? Math.cos(y) : Math.sin(y));
          x = y * Math.sin(lam);
          y *= coslam;
        }
      }
      else {
        sinb = 0;
        cosb = 0;
        b = 0;
        coslam = Math.cos(lam);
        sinlam = Math.sin(lam);
        sinphi = Math.sin(phi);
        q = qsfnz(this.e, sinphi);
        if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
          sinb = q / this.qp;
          cosb = Math.sqrt(1 - sinb * sinb);
        }
        switch (this.mode) {
        case this.OBLIQ:
          b = 1 + this.sinb1 * sinb + this.cosb1 * cosb * coslam;
          break;
        case this.EQUIT:
          b = 1 + cosb * coslam;
          break;
        case this.N_POLE:
          b = values.HALF_PI + phi;
          q = this.qp - q;
          break;
        case this.S_POLE:
          b = phi - values.HALF_PI;
          q = this.qp + q;
          break;
        }
        if (Math.abs(b) < values.EPSLN) {
          return null;
        }
        switch (this.mode) {
        case this.OBLIQ:
        case this.EQUIT:
          b = Math.sqrt(2 / b);
          if (this.mode === this.OBLIQ) {
            y = this.ymf * b * (this.cosb1 * sinb - this.sinb1 * cosb * coslam);
          }
          else {
            y = (b = Math.sqrt(2 / (1 + cosb * coslam))) * sinb * this.ymf;
          }
          x = this.xmf * b * cosb * sinlam;
          break;
        case this.N_POLE:
        case this.S_POLE:
          if (q >= 0) {
            x = (b = Math.sqrt(q)) * sinlam;
            y = coslam * ((this.mode === this.S_POLE) ? b : -b);
          }
          else {
            x = y = 0;
          }
          break;
        }
      }

      p.x = this.a * x + this.x0;
      p.y = this.a * y + this.y0;
      return p;
    }

    /* Inverse equations
      -----------------*/
    function inverse$i(p) {
      p.x -= this.x0;
      p.y -= this.y0;
      var x = p.x / this.a;
      var y = p.y / this.a;
      var lam, phi, cCe, sCe, q, rho, ab;
      if (this.sphere) {
        var cosz = 0,
          rh, sinz = 0;

        rh = Math.sqrt(x * x + y * y);
        phi = rh * 0.5;
        if (phi > 1) {
          return null;
        }
        phi = 2 * Math.asin(phi);
        if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
          sinz = Math.sin(phi);
          cosz = Math.cos(phi);
        }
        switch (this.mode) {
        case this.EQUIT:
          phi = (Math.abs(rh) <= values.EPSLN) ? 0 : Math.asin(y * sinz / rh);
          x *= sinz;
          y = cosz * rh;
          break;
        case this.OBLIQ:
          phi = (Math.abs(rh) <= values.EPSLN) ? this.lat0 : Math.asin(cosz * this.sinph0 + y * sinz * this.cosph0 / rh);
          x *= sinz * this.cosph0;
          y = (cosz - Math.sin(phi) * this.sinph0) * rh;
          break;
        case this.N_POLE:
          y = -y;
          phi = values.HALF_PI - phi;
          break;
        case this.S_POLE:
          phi -= values.HALF_PI;
          break;
        }
        lam = (y === 0 && (this.mode === this.EQUIT || this.mode === this.OBLIQ)) ? 0 : Math.atan2(x, y);
      }
      else {
        ab = 0;
        if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
          x /= this.dd;
          y *= this.dd;
          rho = Math.sqrt(x * x + y * y);
          if (rho < values.EPSLN) {
            p.x = this.long0;
            p.y = this.lat0;
            return p;
          }
          sCe = 2 * Math.asin(0.5 * rho / this.rq);
          cCe = Math.cos(sCe);
          x *= (sCe = Math.sin(sCe));
          if (this.mode === this.OBLIQ) {
            ab = cCe * this.sinb1 + y * sCe * this.cosb1 / rho;
            q = this.qp * ab;
            y = rho * this.cosb1 * cCe - y * this.sinb1 * sCe;
          }
          else {
            ab = y * sCe / rho;
            q = this.qp * ab;
            y = rho * cCe;
          }
        }
        else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
          if (this.mode === this.N_POLE) {
            y = -y;
          }
          q = (x * x + y * y);
          if (!q) {
            p.x = this.long0;
            p.y = this.lat0;
            return p;
          }
          ab = 1 - q / this.qp;
          if (this.mode === this.S_POLE) {
            ab = -ab;
          }
        }
        lam = Math.atan2(x, y);
        phi = authlat(Math.asin(ab), this.apa);
      }

      p.x = adjust_lon(this.long0 + lam);
      p.y = phi;
      return p;
    }

    /* determine latitude from authalic latitude */
    var P00 = 0.33333333333333333333;

    var P01 = 0.17222222222222222222;
    var P02 = 0.10257936507936507936;
    var P10 = 0.06388888888888888888;
    var P11 = 0.06640211640211640211;
    var P20 = 0.01641501294219154443;

    function authset(es) {
      var t;
      var APA = [];
      APA[0] = es * P00;
      t = es * es;
      APA[0] += t * P01;
      APA[1] = t * P10;
      t *= es;
      APA[0] += t * P02;
      APA[1] += t * P11;
      APA[2] = t * P20;
      return APA;
    }

    function authlat(beta, APA) {
      var t = beta + beta;
      return (beta + APA[0] * Math.sin(t) + APA[1] * Math.sin(t + t) + APA[2] * Math.sin(t + t + t));
    }

    var names$i = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];
    var laea = {
      init: init$i,
      forward: forward$i,
      inverse: inverse$i,
      names: names$i,
      S_POLE: S_POLE,
      N_POLE: N_POLE,
      EQUIT: EQUIT,
      OBLIQ: OBLIQ
    };

    function asinz(x) {
      if (Math.abs(x) > 1) {
        x = (x > 1) ? 1 : -1;
      }
      return Math.asin(x);
    }

    function init$h() {

      if (Math.abs(this.lat1 + this.lat2) < values.EPSLN) {
        return;
      }
      this.temp = this.b / this.a;
      this.es = 1 - Math.pow(this.temp, 2);
      this.e3 = Math.sqrt(this.es);

      this.sin_po = Math.sin(this.lat1);
      this.cos_po = Math.cos(this.lat1);
      this.t1 = this.sin_po;
      this.con = this.sin_po;
      this.ms1 = msfnz(this.e3, this.sin_po, this.cos_po);
      this.qs1 = qsfnz(this.e3, this.sin_po);

      this.sin_po = Math.sin(this.lat2);
      this.cos_po = Math.cos(this.lat2);
      this.t2 = this.sin_po;
      this.ms2 = msfnz(this.e3, this.sin_po, this.cos_po);
      this.qs2 = qsfnz(this.e3, this.sin_po);

      this.sin_po = Math.sin(this.lat0);
      this.cos_po = Math.cos(this.lat0);
      this.t3 = this.sin_po;
      this.qs0 = qsfnz(this.e3, this.sin_po);

      if (Math.abs(this.lat1 - this.lat2) > values.EPSLN) {
        this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1);
      }
      else {
        this.ns0 = this.con;
      }
      this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1;
      this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0;
    }

    /* Albers Conical Equal Area forward equations--mapping lat,long to x,y
      -------------------------------------------------------------------*/
    function forward$h(p) {

      var lon = p.x;
      var lat = p.y;

      this.sin_phi = Math.sin(lat);
      this.cos_phi = Math.cos(lat);

      var qs = qsfnz(this.e3, this.sin_phi);
      var rh1 = this.a * Math.sqrt(this.c - this.ns0 * qs) / this.ns0;
      var theta = this.ns0 * adjust_lon(lon - this.long0);
      var x = rh1 * Math.sin(theta) + this.x0;
      var y = this.rh - rh1 * Math.cos(theta) + this.y0;

      p.x = x;
      p.y = y;
      return p;
    }

    function inverse$h(p) {
      var rh1, qs, con, theta, lon, lat;

      p.x -= this.x0;
      p.y = this.rh - p.y + this.y0;
      if (this.ns0 >= 0) {
        rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
        con = 1;
      }
      else {
        rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
        con = -1;
      }
      theta = 0;
      if (rh1 !== 0) {
        theta = Math.atan2(con * p.x, con * p.y);
      }
      con = rh1 * this.ns0 / this.a;
      if (this.sphere) {
        lat = Math.asin((this.c - con * con) / (2 * this.ns0));
      }
      else {
        qs = (this.c - con * con) / this.ns0;
        lat = this.phi1z(this.e3, qs);
      }

      lon = adjust_lon(theta / this.ns0 + this.long0);
      p.x = lon;
      p.y = lat;
      return p;
    }

    /* Function to compute phi1, the latitude for the inverse of the
       Albers Conical Equal-Area projection.
    -------------------------------------------*/
    function phi1z(eccent, qs) {
      var sinphi, cosphi, con, com, dphi;
      var phi = asinz(0.5 * qs);
      if (eccent < values.EPSLN) {
        return phi;
      }

      var eccnts = eccent * eccent;
      for (var i = 1; i <= 25; i++) {
        sinphi = Math.sin(phi);
        cosphi = Math.cos(phi);
        con = eccent * sinphi;
        com = 1 - con * con;
        dphi = 0.5 * com * com / cosphi * (qs / (1 - eccnts) - sinphi / com + 0.5 / eccent * Math.log((1 - con) / (1 + con)));
        phi = phi + dphi;
        if (Math.abs(dphi) <= 1e-7) {
          return phi;
        }
      }
      return null;
    }

    var names$h = ["Albers_Conic_Equal_Area", "Albers", "aea"];
    var aea = {
      init: init$h,
      forward: forward$h,
      inverse: inverse$h,
      names: names$h,
      phi1z: phi1z
    };

    /*
      reference:
        Wolfram Mathworld "Gnomonic Projection"
        http://mathworld.wolfram.com/GnomonicProjection.html
        Accessed: 12th November 2009
      */
    function init$g() {

      /* Place parameters in static storage for common use
          -------------------------------------------------*/
      this.sin_p14 = Math.sin(this.lat0);
      this.cos_p14 = Math.cos(this.lat0);
      // Approximation for projecting points to the horizon (infinity)
      this.infinity_dist = 1000 * this.a;
      this.rc = 1;
    }

    /* Gnomonic forward equations--mapping lat,long to x,y
        ---------------------------------------------------*/
    function forward$g(p) {
      var sinphi, cosphi; /* sin and cos value        */
      var dlon; /* delta longitude value      */
      var coslon; /* cos of longitude        */
      var ksp; /* scale factor          */
      var g;
      var x, y;
      var lon = p.x;
      var lat = p.y;
      /* Forward equations
          -----------------*/
      dlon = adjust_lon(lon - this.long0);

      sinphi = Math.sin(lat);
      cosphi = Math.cos(lat);

      coslon = Math.cos(dlon);
      g = this.sin_p14 * sinphi + this.cos_p14 * cosphi * coslon;
      ksp = 1;
      if ((g > 0) || (Math.abs(g) <= values.EPSLN)) {
        x = this.x0 + this.a * ksp * cosphi * Math.sin(dlon) / g;
        y = this.y0 + this.a * ksp * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon) / g;
      }
      else {

        // Point is in the opposing hemisphere and is unprojectable
        // We still need to return a reasonable point, so we project
        // to infinity, on a bearing
        // equivalent to the northern hemisphere equivalent
        // This is a reasonable approximation for short shapes and lines that
        // straddle the horizon.

        x = this.x0 + this.infinity_dist * cosphi * Math.sin(dlon);
        y = this.y0 + this.infinity_dist * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon);

      }
      p.x = x;
      p.y = y;
      return p;
    }

    function inverse$g(p) {
      var rh; /* Rho */
      var sinc, cosc;
      var c;
      var lon, lat;

      /* Inverse equations
          -----------------*/
      p.x = (p.x - this.x0) / this.a;
      p.y = (p.y - this.y0) / this.a;

      p.x /= this.k0;
      p.y /= this.k0;

      if ((rh = Math.sqrt(p.x * p.x + p.y * p.y))) {
        c = Math.atan2(rh, this.rc);
        sinc = Math.sin(c);
        cosc = Math.cos(c);

        lat = asinz(cosc * this.sin_p14 + (p.y * sinc * this.cos_p14) / rh);
        lon = Math.atan2(p.x * sinc, rh * this.cos_p14 * cosc - p.y * this.sin_p14 * sinc);
        lon = adjust_lon(this.long0 + lon);
      }
      else {
        lat = this.phic0;
        lon = 0;
      }

      p.x = lon;
      p.y = lat;
      return p;
    }

    var names$g = ["gnom"];
    var gnom = {
      init: init$g,
      forward: forward$g,
      inverse: inverse$g,
      names: names$g
    };

    function iqsfnz(eccent, q) {
      var temp = 1 - (1 - eccent * eccent) / (2 * eccent) * Math.log((1 - eccent) / (1 + eccent));
      if (Math.abs(Math.abs(q) - temp) < 1.0E-6) {
        if (q < 0) {
          return (-1 * values.HALF_PI);
        }
        else {
          return values.HALF_PI;
        }
      }
      //var phi = 0.5* q/(1-eccent*eccent);
      var phi = Math.asin(0.5 * q);
      var dphi;
      var sin_phi;
      var cos_phi;
      var con;
      for (var i = 0; i < 30; i++) {
        sin_phi = Math.sin(phi);
        cos_phi = Math.cos(phi);
        con = eccent * sin_phi;
        dphi = Math.pow(1 - con * con, 2) / (2 * cos_phi) * (q / (1 - eccent * eccent) - sin_phi / (1 - con * con) + 0.5 / eccent * Math.log((1 - con) / (1 + con)));
        phi += dphi;
        if (Math.abs(dphi) <= 0.0000000001) {
          return phi;
        }
      }

      //console.log("IQSFN-CONV:Latitude failed to converge after 30 iterations");
      return NaN;
    }

    /*
      reference:
        "Cartographic Projection Procedures for the UNIX Environment-
        A User's Manual" by Gerald I. Evenden,
        USGS Open File Report 90-284and Release 4 Interim Reports (2003)
    */
    function init$f() {
      //no-op
      if (!this.sphere) {
        this.k0 = msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
      }
    }

    /* Cylindrical Equal Area forward equations--mapping lat,long to x,y
        ------------------------------------------------------------*/
    function forward$f(p) {
      var lon = p.x;
      var lat = p.y;
      var x, y;
      /* Forward equations
          -----------------*/
      var dlon = adjust_lon(lon - this.long0);
      if (this.sphere) {
        x = this.x0 + this.a * dlon * Math.cos(this.lat_ts);
        y = this.y0 + this.a * Math.sin(lat) / Math.cos(this.lat_ts);
      }
      else {
        var qs = qsfnz(this.e, Math.sin(lat));
        x = this.x0 + this.a * this.k0 * dlon;
        y = this.y0 + this.a * qs * 0.5 / this.k0;
      }

      p.x = x;
      p.y = y;
      return p;
    }

    /* Cylindrical Equal Area inverse equations--mapping x,y to lat/long
        ------------------------------------------------------------*/
    function inverse$f(p) {
      p.x -= this.x0;
      p.y -= this.y0;
      var lon, lat;

      if (this.sphere) {
        lon = adjust_lon(this.long0 + (p.x / this.a) / Math.cos(this.lat_ts));
        lat = Math.asin((p.y / this.a) * Math.cos(this.lat_ts));
      }
      else {
        lat = iqsfnz(this.e, 2 * p.y * this.k0 / this.a);
        lon = adjust_lon(this.long0 + p.x / (this.a * this.k0));
      }

      p.x = lon;
      p.y = lat;
      return p;
    }

    var names$f = ["cea"];
    var cea = {
      init: init$f,
      forward: forward$f,
      inverse: inverse$f,
      names: names$f
    };

    function init$e() {

      this.x0 = this.x0 || 0;
      this.y0 = this.y0 || 0;
      this.lat0 = this.lat0 || 0;
      this.long0 = this.long0 || 0;
      this.lat_ts = this.lat_ts || 0;
      this.title = this.title || "Equidistant Cylindrical (Plate Carre)";

      this.rc = Math.cos(this.lat_ts);
    }

    // forward equations--mapping lat,long to x,y
    // -----------------------------------------------------------------
    function forward$e(p) {

      var lon = p.x;
      var lat = p.y;

      var dlon = adjust_lon(lon - this.long0);
      var dlat = adjust_lat(lat - this.lat0);
      p.x = this.x0 + (this.a * dlon * this.rc);
      p.y = this.y0 + (this.a * dlat);
      return p;
    }

    // inverse equations--mapping x,y to lat/long
    // -----------------------------------------------------------------
    function inverse$e(p) {

      var x = p.x;
      var y = p.y;

      p.x = adjust_lon(this.long0 + ((x - this.x0) / (this.a * this.rc)));
      p.y = adjust_lat(this.lat0 + ((y - this.y0) / (this.a)));
      return p;
    }

    var names$e = ["Equirectangular", "Equidistant_Cylindrical", "eqc"];
    var eqc = {
      init: init$e,
      forward: forward$e,
      inverse: inverse$e,
      names: names$e
    };

    var MAX_ITER$1 = 20;

    function init$d() {
      /* Place parameters in static storage for common use
          -------------------------------------------------*/
      this.temp = this.b / this.a;
      this.es = 1 - Math.pow(this.temp, 2); // devait etre dans tmerc.js mais n y est pas donc je commente sinon retour de valeurs nulles
      this.e = Math.sqrt(this.es);
      this.e0 = e0fn(this.es);
      this.e1 = e1fn(this.es);
      this.e2 = e2fn(this.es);
      this.e3 = e3fn(this.es);
      this.ml0 = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0); //si que des zeros le calcul ne se fait pas
    }

    /* Polyconic forward equations--mapping lat,long to x,y
        ---------------------------------------------------*/
    function forward$d(p) {
      var lon = p.x;
      var lat = p.y;
      var x, y, el;
      var dlon = adjust_lon(lon - this.long0);
      el = dlon * Math.sin(lat);
      if (this.sphere) {
        if (Math.abs(lat) <= values.EPSLN) {
          x = this.a * dlon;
          y = -1 * this.a * this.lat0;
        }
        else {
          x = this.a * Math.sin(el) / Math.tan(lat);
          y = this.a * (adjust_lat(lat - this.lat0) + (1 - Math.cos(el)) / Math.tan(lat));
        }
      }
      else {
        if (Math.abs(lat) <= values.EPSLN) {
          x = this.a * dlon;
          y = -1 * this.ml0;
        }
        else {
          var nl = gN(this.a, this.e, Math.sin(lat)) / Math.tan(lat);
          x = nl * Math.sin(el);
          y = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, lat) - this.ml0 + nl * (1 - Math.cos(el));
        }

      }
      p.x = x + this.x0;
      p.y = y + this.y0;
      return p;
    }

    /* Inverse equations
      -----------------*/
    function inverse$d(p) {
      var lon, lat, x, y, i;
      var al, bl;
      var phi, dphi;
      x = p.x - this.x0;
      y = p.y - this.y0;

      if (this.sphere) {
        if (Math.abs(y + this.a * this.lat0) <= values.EPSLN) {
          lon = adjust_lon(x / this.a + this.long0);
          lat = 0;
        }
        else {
          al = this.lat0 + y / this.a;
          bl = x * x / this.a / this.a + al * al;
          phi = al;
          var tanphi;
          for (i = MAX_ITER$1; i; --i) {
            tanphi = Math.tan(phi);
            dphi = -1 * (al * (phi * tanphi + 1) - phi - 0.5 * (phi * phi + bl) * tanphi) / ((phi - al) / tanphi - 1);
            phi += dphi;
            if (Math.abs(dphi) <= values.EPSLN) {
              lat = phi;
              break;
            }
          }
          lon = adjust_lon(this.long0 + (Math.asin(x * Math.tan(phi) / this.a)) / Math.sin(lat));
        }
      }
      else {
        if (Math.abs(y + this.ml0) <= values.EPSLN) {
          lat = 0;
          lon = adjust_lon(this.long0 + x / this.a);
        }
        else {

          al = (this.ml0 + y) / this.a;
          bl = x * x / this.a / this.a + al * al;
          phi = al;
          var cl, mln, mlnp, ma;
          var con;
          for (i = MAX_ITER$1; i; --i) {
            con = this.e * Math.sin(phi);
            cl = Math.sqrt(1 - con * con) * Math.tan(phi);
            mln = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, phi);
            mlnp = this.e0 - 2 * this.e1 * Math.cos(2 * phi) + 4 * this.e2 * Math.cos(4 * phi) - 6 * this.e3 * Math.cos(6 * phi);
            ma = mln / this.a;
            dphi = (al * (cl * ma + 1) - ma - 0.5 * cl * (ma * ma + bl)) / (this.es * Math.sin(2 * phi) * (ma * ma + bl - 2 * al * ma) / (4 * cl) + (al - ma) * (cl * mlnp - 2 / Math.sin(2 * phi)) - mlnp);
            phi -= dphi;
            if (Math.abs(dphi) <= values.EPSLN) {
              lat = phi;
              break;
            }
          }

          //lat=phi4z(this.e,this.e0,this.e1,this.e2,this.e3,al,bl,0,0);
          cl = Math.sqrt(1 - this.es * Math.pow(Math.sin(lat), 2)) * Math.tan(lat);
          lon = adjust_lon(this.long0 + Math.asin(x * cl / this.a) / Math.sin(lat));
        }
      }

      p.x = lon;
      p.y = lat;
      return p;
    }

    var names$d = ["Polyconic", "poly"];
    var poly = {
      init: init$d,
      forward: forward$d,
      inverse: inverse$d,
      names: names$d
    };

    function init$c() {
      this.A = [];
      this.A[1] = 0.6399175073;
      this.A[2] = -0.1358797613;
      this.A[3] = 0.063294409;
      this.A[4] = -0.02526853;
      this.A[5] = 0.0117879;
      this.A[6] = -0.0055161;
      this.A[7] = 0.0026906;
      this.A[8] = -0.001333;
      this.A[9] = 0.00067;
      this.A[10] = -0.00034;

      this.B_re = [];
      this.B_im = [];
      this.B_re[1] = 0.7557853228;
      this.B_im[1] = 0;
      this.B_re[2] = 0.249204646;
      this.B_im[2] = 0.003371507;
      this.B_re[3] = -0.001541739;
      this.B_im[3] = 0.041058560;
      this.B_re[4] = -0.10162907;
      this.B_im[4] = 0.01727609;
      this.B_re[5] = -0.26623489;
      this.B_im[5] = -0.36249218;
      this.B_re[6] = -0.6870983;
      this.B_im[6] = -1.1651967;

      this.C_re = [];
      this.C_im = [];
      this.C_re[1] = 1.3231270439;
      this.C_im[1] = 0;
      this.C_re[2] = -0.577245789;
      this.C_im[2] = -0.007809598;
      this.C_re[3] = 0.508307513;
      this.C_im[3] = -0.112208952;
      this.C_re[4] = -0.15094762;
      this.C_im[4] = 0.18200602;
      this.C_re[5] = 1.01418179;
      this.C_im[5] = 1.64497696;
      this.C_re[6] = 1.9660549;
      this.C_im[6] = 2.5127645;

      this.D = [];
      this.D[1] = 1.5627014243;
      this.D[2] = 0.5185406398;
      this.D[3] = -0.03333098;
      this.D[4] = -0.1052906;
      this.D[5] = -0.0368594;
      this.D[6] = 0.007317;
      this.D[7] = 0.01220;
      this.D[8] = 0.00394;
      this.D[9] = -0.0013;
    }

    /**
        New Zealand Map Grid Forward  - long/lat to x/y
        long/lat in radians
      */
    function forward$c(p) {
      var n;
      var lon = p.x;
      var lat = p.y;

      var delta_lat = lat - this.lat0;
      var delta_lon = lon - this.long0;

      // 1. Calculate d_phi and d_psi    ...                          // and d_lambda
      // For this algorithm, delta_latitude is in seconds of arc x 10-5, so we need to scale to those units. Longitude is radians.
      var d_phi = delta_lat / SEC_TO_RAD * 1E-5;
      var d_lambda = delta_lon;
      var d_phi_n = 1; // d_phi^0

      var d_psi = 0;
      for (n = 1; n <= 10; n++) {
        d_phi_n = d_phi_n * d_phi;
        d_psi = d_psi + this.A[n] * d_phi_n;
      }

      // 2. Calculate theta
      var th_re = d_psi;
      var th_im = d_lambda;

      // 3. Calculate z
      var th_n_re = 1;
      var th_n_im = 0; // theta^0
      var th_n_re1;
      var th_n_im1;

      var z_re = 0;
      var z_im = 0;
      for (n = 1; n <= 6; n++) {
        th_n_re1 = th_n_re * th_re - th_n_im * th_im;
        th_n_im1 = th_n_im * th_re + th_n_re * th_im;
        th_n_re = th_n_re1;
        th_n_im = th_n_im1;
        z_re = z_re + this.B_re[n] * th_n_re - this.B_im[n] * th_n_im;
        z_im = z_im + this.B_im[n] * th_n_re + this.B_re[n] * th_n_im;
      }

      // 4. Calculate easting and northing
      p.x = (z_im * this.a) + this.x0;
      p.y = (z_re * this.a) + this.y0;

      return p;
    }

    /**
        New Zealand Map Grid Inverse  -  x/y to long/lat
      */
    function inverse$c(p) {
      var n;
      var x = p.x;
      var y = p.y;

      var delta_x = x - this.x0;
      var delta_y = y - this.y0;

      // 1. Calculate z
      var z_re = delta_y / this.a;
      var z_im = delta_x / this.a;

      // 2a. Calculate theta - first approximation gives km accuracy
      var z_n_re = 1;
      var z_n_im = 0; // z^0
      var z_n_re1;
      var z_n_im1;

      var th_re = 0;
      var th_im = 0;
      for (n = 1; n <= 6; n++) {
        z_n_re1 = z_n_re * z_re - z_n_im * z_im;
        z_n_im1 = z_n_im * z_re + z_n_re * z_im;
        z_n_re = z_n_re1;
        z_n_im = z_n_im1;
        th_re = th_re + this.C_re[n] * z_n_re - this.C_im[n] * z_n_im;
        th_im = th_im + this.C_im[n] * z_n_re + this.C_re[n] * z_n_im;
      }

      // 2b. Iterate to refine the accuracy of the calculation
      //        0 iterations gives km accuracy
      //        1 iteration gives m accuracy -- good enough for most mapping applications
      //        2 iterations bives mm accuracy
      for (var i = 0; i < this.iterations; i++) {
        var th_n_re = th_re;
        var th_n_im = th_im;
        var th_n_re1;
        var th_n_im1;

        var num_re = z_re;
        var num_im = z_im;
        for (n = 2; n <= 6; n++) {
          th_n_re1 = th_n_re * th_re - th_n_im * th_im;
          th_n_im1 = th_n_im * th_re + th_n_re * th_im;
          th_n_re = th_n_re1;
          th_n_im = th_n_im1;
          num_re = num_re + (n - 1) * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
          num_im = num_im + (n - 1) * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
        }

        th_n_re = 1;
        th_n_im = 0;
        var den_re = this.B_re[1];
        var den_im = this.B_im[1];
        for (n = 2; n <= 6; n++) {
          th_n_re1 = th_n_re * th_re - th_n_im * th_im;
          th_n_im1 = th_n_im * th_re + th_n_re * th_im;
          th_n_re = th_n_re1;
          th_n_im = th_n_im1;
          den_re = den_re + n * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
          den_im = den_im + n * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
        }

        // Complex division
        var den2 = den_re * den_re + den_im * den_im;
        th_re = (num_re * den_re + num_im * den_im) / den2;
        th_im = (num_im * den_re - num_re * den_im) / den2;
      }

      // 3. Calculate d_phi              ...                                    // and d_lambda
      var d_psi = th_re;
      var d_lambda = th_im;
      var d_psi_n = 1; // d_psi^0

      var d_phi = 0;
      for (n = 1; n <= 9; n++) {
        d_psi_n = d_psi_n * d_psi;
        d_phi = d_phi + this.D[n] * d_psi_n;
      }

      // 4. Calculate latitude and longitude
      // d_phi is calcuated in second of arc * 10^-5, so we need to scale back to radians. d_lambda is in radians.
      var lat = this.lat0 + (d_phi * SEC_TO_RAD * 1E5);
      var lon = this.long0 + d_lambda;

      p.x = lon;
      p.y = lat;

      return p;
    }

    var names$c = ["New_Zealand_Map_Grid", "nzmg"];
    var nzmg = {
      init: init$c,
      forward: forward$c,
      inverse: inverse$c,
      names: names$c
    };

    /*
      reference
        "New Equal-Area Map Projections for Noncircular Regions", John P. Snyder,
        The American Cartographer, Vol 15, No. 4, October 1988, pp. 341-355.
      */


    /* Initialize the Miller Cylindrical projection
      -------------------------------------------*/
    function init$b() {
      //no-op
    }

    /* Miller Cylindrical forward equations--mapping lat,long to x,y
        ------------------------------------------------------------*/
    function forward$b(p) {
      var lon = p.x;
      var lat = p.y;
      /* Forward equations
          -----------------*/
      var dlon = adjust_lon(lon - this.long0);
      var x = this.x0 + this.a * dlon;
      var y = this.y0 + this.a * Math.log(Math.tan((Math.PI / 4) + (lat / 2.5))) * 1.25;

      p.x = x;
      p.y = y;
      return p;
    }

    /* Miller Cylindrical inverse equations--mapping x,y to lat/long
        ------------------------------------------------------------*/
    function inverse$b(p) {
      p.x -= this.x0;
      p.y -= this.y0;

      var lon = adjust_lon(this.long0 + p.x / this.a);
      var lat = 2.5 * (Math.atan(Math.exp(0.8 * p.y / this.a)) - Math.PI / 4);

      p.x = lon;
      p.y = lat;
      return p;
    }

    var names$b = ["Miller_Cylindrical", "mill"];
    var mill = {
      init: init$b,
      forward: forward$b,
      inverse: inverse$b,
      names: names$b
    };

    var MAX_ITER = 20;


    function init$a() {
      /* Place parameters in static storage for common use
        -------------------------------------------------*/


      if (!this.sphere) {
        this.en = pj_enfn(this.es);
      }
      else {
        this.n = 1;
        this.m = 0;
        this.es = 0;
        this.C_y = Math.sqrt((this.m + 1) / this.n);
        this.C_x = this.C_y / (this.m + 1);
      }

    }

    /* Sinusoidal forward equations--mapping lat,long to x,y
      -----------------------------------------------------*/
    function forward$a(p) {
      var x, y;
      var lon = p.x;
      var lat = p.y;
      /* Forward equations
        -----------------*/
      lon = adjust_lon(lon - this.long0);

      if (this.sphere) {
        if (!this.m) {
          lat = this.n !== 1 ? Math.asin(this.n * Math.sin(lat)) : lat;
        }
        else {
          var k = this.n * Math.sin(lat);
          for (var i = MAX_ITER; i; --i) {
            var V = (this.m * lat + Math.sin(lat) - k) / (this.m + Math.cos(lat));
            lat -= V;
            if (Math.abs(V) < values.EPSLN) {
              break;
            }
          }
        }
        x = this.a * this.C_x * lon * (this.m + Math.cos(lat));
        y = this.a * this.C_y * lat;

      }
      else {

        var s = Math.sin(lat);
        var c = Math.cos(lat);
        y = this.a * pj_mlfn(lat, s, c, this.en);
        x = this.a * lon * c / Math.sqrt(1 - this.es * s * s);
      }

      p.x = x;
      p.y = y;
      return p;
    }

    function inverse$a(p) {
      var lat, temp, lon, s;

      p.x -= this.x0;
      lon = p.x / this.a;
      p.y -= this.y0;
      lat = p.y / this.a;

      if (this.sphere) {
        lat /= this.C_y;
        lon = lon / (this.C_x * (this.m + Math.cos(lat)));
        if (this.m) {
          lat = asinz((this.m * lat + Math.sin(lat)) / this.n);
        }
        else if (this.n !== 1) {
          lat = asinz(Math.sin(lat) / this.n);
        }
        lon = adjust_lon(lon + this.long0);
        lat = adjust_lat(lat);
      }
      else {
        lat = pj_inv_mlfn(p.y / this.a, this.es, this.en);
        s = Math.abs(lat);
        if (s < values.HALF_PI) {
          s = Math.sin(lat);
          temp = this.long0 + p.x * Math.sqrt(1 - this.es * s * s) / (this.a * Math.cos(lat));
          //temp = this.long0 + p.x / (this.a * Math.cos(lat));
          lon = adjust_lon(temp);
        }
        else if ((s - values.EPSLN) < values.HALF_PI) {
          lon = this.long0;
        }
      }
      p.x = lon;
      p.y = lat;
      return p;
    }

    var names$a = ["Sinusoidal", "sinu"];
    var sinu = {
      init: init$a,
      forward: forward$a,
      inverse: inverse$a,
      names: names$a
    };

    function init$9() {}
    /* Mollweide forward equations--mapping lat,long to x,y
        ----------------------------------------------------*/
    function forward$9(p) {

      /* Forward equations
          -----------------*/
      var lon = p.x;
      var lat = p.y;

      var delta_lon = adjust_lon(lon - this.long0);
      var theta = lat;
      var con = Math.PI * Math.sin(lat);

      /* Iterate using the Newton-Raphson method to find theta
          -----------------------------------------------------*/
      while (true) {
        var delta_theta = -(theta + Math.sin(theta) - con) / (1 + Math.cos(theta));
        theta += delta_theta;
        if (Math.abs(delta_theta) < values.EPSLN) {
          break;
        }
      }
      theta /= 2;

      /* If the latitude is 90 deg, force the x coordinate to be "0 + false easting"
           this is done here because of precision problems with "cos(theta)"
           --------------------------------------------------------------------------*/
      if (Math.PI / 2 - Math.abs(lat) < values.EPSLN) {
        delta_lon = 0;
      }
      var x = 0.900316316158 * this.a * delta_lon * Math.cos(theta) + this.x0;
      var y = 1.4142135623731 * this.a * Math.sin(theta) + this.y0;

      p.x = x;
      p.y = y;
      return p;
    }

    function inverse$9(p) {
      var theta;
      var arg;

      /* Inverse equations
          -----------------*/
      p.x -= this.x0;
      p.y -= this.y0;
      arg = p.y / (1.4142135623731 * this.a);

      /* Because of division by zero problems, 'arg' can not be 1.  Therefore
           a number very close to one is used instead.
           -------------------------------------------------------------------*/
      if (Math.abs(arg) > 0.999999999999) {
        arg = 0.999999999999;
      }
      theta = Math.asin(arg);
      var lon = adjust_lon(this.long0 + (p.x / (0.900316316158 * this.a * Math.cos(theta))));
      if (lon < (-Math.PI)) {
        lon = -Math.PI;
      }
      if (lon > Math.PI) {
        lon = Math.PI;
      }
      arg = (2 * theta + Math.sin(2 * theta)) / Math.PI;
      if (Math.abs(arg) > 1) {
        arg = 1;
      }
      var lat = Math.asin(arg);

      p.x = lon;
      p.y = lat;
      return p;
    }

    var names$9 = ["Mollweide", "moll"];
    var moll = {
      init: init$9,
      forward: forward$9,
      inverse: inverse$9,
      names: names$9
    };

    function init$8() {

      /* Place parameters in static storage for common use
          -------------------------------------------------*/
      // Standard Parallels cannot be equal and on opposite sides of the equator
      if (Math.abs(this.lat1 + this.lat2) < values.EPSLN) {
        return;
      }
      this.lat2 = this.lat2 || this.lat1;
      this.temp = this.b / this.a;
      this.es = 1 - Math.pow(this.temp, 2);
      this.e = Math.sqrt(this.es);
      this.e0 = e0fn(this.es);
      this.e1 = e1fn(this.es);
      this.e2 = e2fn(this.es);
      this.e3 = e3fn(this.es);

      this.sinphi = Math.sin(this.lat1);
      this.cosphi = Math.cos(this.lat1);

      this.ms1 = msfnz(this.e, this.sinphi, this.cosphi);
      this.ml1 = mlfn(this.e0, this.e1, this.e2, this.e3, this.lat1);

      if (Math.abs(this.lat1 - this.lat2) < values.EPSLN) {
        this.ns = this.sinphi;
      }
      else {
        this.sinphi = Math.sin(this.lat2);
        this.cosphi = Math.cos(this.lat2);
        this.ms2 = msfnz(this.e, this.sinphi, this.cosphi);
        this.ml2 = mlfn(this.e0, this.e1, this.e2, this.e3, this.lat2);
        this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1);
      }
      this.g = this.ml1 + this.ms1 / this.ns;
      this.ml0 = mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0);
      this.rh = this.a * (this.g - this.ml0);
    }

    /* Equidistant Conic forward equations--mapping lat,long to x,y
      -----------------------------------------------------------*/
    function forward$8(p) {
      var lon = p.x;
      var lat = p.y;
      var rh1;

      /* Forward equations
          -----------------*/
      if (this.sphere) {
        rh1 = this.a * (this.g - lat);
      }
      else {
        var ml = mlfn(this.e0, this.e1, this.e2, this.e3, lat);
        rh1 = this.a * (this.g - ml);
      }
      var theta = this.ns * adjust_lon(lon - this.long0);
      var x = this.x0 + rh1 * Math.sin(theta);
      var y = this.y0 + this.rh - rh1 * Math.cos(theta);
      p.x = x;
      p.y = y;
      return p;
    }

    /* Inverse equations
      -----------------*/
    function inverse$8(p) {
      p.x -= this.x0;
      p.y = this.rh - p.y + this.y0;
      var con, rh1, lat, lon;
      if (this.ns >= 0) {
        rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
        con = 1;
      }
      else {
        rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
        con = -1;
      }
      var theta = 0;
      if (rh1 !== 0) {
        theta = Math.atan2(con * p.x, con * p.y);
      }

      if (this.sphere) {
        lon = adjust_lon(this.long0 + theta / this.ns);
        lat = adjust_lat(this.g - rh1 / this.a);
        p.x = lon;
        p.y = lat;
        return p;
      }
      else {
        var ml = this.g - rh1 / this.a;
        lat = imlfn(ml, this.e0, this.e1, this.e2, this.e3);
        lon = adjust_lon(this.long0 + theta / this.ns);
        p.x = lon;
        p.y = lat;
        return p;
      }

    }

    var names$8 = ["Equidistant_Conic", "eqdc"];
    var eqdc = {
      init: init$8,
      forward: forward$8,
      inverse: inverse$8,
      names: names$8
    };

    /* Initialize the Van Der Grinten projection
      ----------------------------------------*/
    function init$7() {
      //this.R = 6370997; //Radius of earth
      this.R = this.a;
    }

    function forward$7(p) {

      var lon = p.x;
      var lat = p.y;

      /* Forward equations
        -----------------*/
      var dlon = adjust_lon(lon - this.long0);
      var x, y;

      if (Math.abs(lat) <= values.EPSLN) {
        x = this.x0 + this.R * dlon;
        y = this.y0;
      }
      var theta = asinz(2 * Math.abs(lat / Math.PI));
      if ((Math.abs(dlon) <= values.EPSLN) || (Math.abs(Math.abs(lat) - values.HALF_PI) <= values.EPSLN)) {
        x = this.x0;
        if (lat >= 0) {
          y = this.y0 + Math.PI * this.R * Math.tan(0.5 * theta);
        }
        else {
          y = this.y0 + Math.PI * this.R * -Math.tan(0.5 * theta);
        }
        //  return(OK);
      }
      var al = 0.5 * Math.abs((Math.PI / dlon) - (dlon / Math.PI));
      var asq = al * al;
      var sinth = Math.sin(theta);
      var costh = Math.cos(theta);

      var g = costh / (sinth + costh - 1);
      var gsq = g * g;
      var m = g * (2 / sinth - 1);
      var msq = m * m;
      var con = Math.PI * this.R * (al * (g - msq) + Math.sqrt(asq * (g - msq) * (g - msq) - (msq + asq) * (gsq - msq))) / (msq + asq);
      if (dlon < 0) {
        con = -con;
      }
      x = this.x0 + con;
      //con = Math.abs(con / (Math.PI * this.R));
      var q = asq + g;
      con = Math.PI * this.R * (m * q - al * Math.sqrt((msq + asq) * (asq + 1) - q * q)) / (msq + asq);
      if (lat >= 0) {
        //y = this.y0 + Math.PI * this.R * Math.sqrt(1 - con * con - 2 * al * con);
        y = this.y0 + con;
      }
      else {
        //y = this.y0 - Math.PI * this.R * Math.sqrt(1 - con * con - 2 * al * con);
        y = this.y0 - con;
      }
      p.x = x;
      p.y = y;
      return p;
    }

    /* Van Der Grinten inverse equations--mapping x,y to lat/long
      ---------------------------------------------------------*/
    function inverse$7(p) {
      var lon, lat;
      var xx, yy, xys, c1, c2, c3;
      var a1;
      var m1;
      var con;
      var th1;
      var d;

      /* inverse equations
        -----------------*/
      p.x -= this.x0;
      p.y -= this.y0;
      con = Math.PI * this.R;
      xx = p.x / con;
      yy = p.y / con;
      xys = xx * xx + yy * yy;
      c1 = -Math.abs(yy) * (1 + xys);
      c2 = c1 - 2 * yy * yy + xx * xx;
      c3 = -2 * c1 + 1 + 2 * yy * yy + xys * xys;
      d = yy * yy / c3 + (2 * c2 * c2 * c2 / c3 / c3 / c3 - 9 * c1 * c2 / c3 / c3) / 27;
      a1 = (c1 - c2 * c2 / 3 / c3) / c3;
      m1 = 2 * Math.sqrt(-a1 / 3);
      con = ((3 * d) / a1) / m1;
      if (Math.abs(con) > 1) {
        if (con >= 0) {
          con = 1;
        }
        else {
          con = -1;
        }
      }
      th1 = Math.acos(con) / 3;
      if (p.y >= 0) {
        lat = (-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
      }
      else {
        lat = -(-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
      }

      if (Math.abs(xx) < values.EPSLN) {
        lon = this.long0;
      }
      else {
        lon = adjust_lon(this.long0 + Math.PI * (xys - 1 + Math.sqrt(1 + 2 * (xx * xx - yy * yy) + xys * xys)) / 2 / xx);
      }

      p.x = lon;
      p.y = lat;
      return p;
    }

    var names$7 = ["Van_der_Grinten_I", "VanDerGrinten", "vandg"];
    var vandg = {
      init: init$7,
      forward: forward$7,
      inverse: inverse$7,
      names: names$7
    };

    function init$6() {
      this.sin_p12 = Math.sin(this.lat0);
      this.cos_p12 = Math.cos(this.lat0);
    }

    function forward$6(p) {
      var lon = p.x;
      var lat = p.y;
      var sinphi = Math.sin(p.y);
      var cosphi = Math.cos(p.y);
      var dlon = adjust_lon(lon - this.long0);
      var e0, e1, e2, e3, Mlp, Ml, tanphi, Nl1, Nl, psi, Az, G, H, GH, Hs, c, kp, cos_c, s, s2, s3, s4, s5;
      if (this.sphere) {
        if (Math.abs(this.sin_p12 - 1) <= values.EPSLN) {
          //North Pole case
          p.x = this.x0 + this.a * (values.HALF_PI - lat) * Math.sin(dlon);
          p.y = this.y0 - this.a * (values.HALF_PI - lat) * Math.cos(dlon);
          return p;
        }
        else if (Math.abs(this.sin_p12 + 1) <= values.EPSLN) {
          //South Pole case
          p.x = this.x0 + this.a * (values.HALF_PI + lat) * Math.sin(dlon);
          p.y = this.y0 + this.a * (values.HALF_PI + lat) * Math.cos(dlon);
          return p;
        }
        else {
          //default case
          cos_c = this.sin_p12 * sinphi + this.cos_p12 * cosphi * Math.cos(dlon);
          c = Math.acos(cos_c);
          kp = c ? c / Math.sin(c) : 1;
          p.x = this.x0 + this.a * kp * cosphi * Math.sin(dlon);
          p.y = this.y0 + this.a * kp * (this.cos_p12 * sinphi - this.sin_p12 * cosphi * Math.cos(dlon));
          return p;
        }
      }
      else {
        e0 = e0fn(this.es);
        e1 = e1fn(this.es);
        e2 = e2fn(this.es);
        e3 = e3fn(this.es);
        if (Math.abs(this.sin_p12 - 1) <= values.EPSLN) {
          //North Pole case
          Mlp = this.a * mlfn(e0, e1, e2, e3, values.HALF_PI);
          Ml = this.a * mlfn(e0, e1, e2, e3, lat);
          p.x = this.x0 + (Mlp - Ml) * Math.sin(dlon);
          p.y = this.y0 - (Mlp - Ml) * Math.cos(dlon);
          return p;
        }
        else if (Math.abs(this.sin_p12 + 1) <= values.EPSLN) {
          //South Pole case
          Mlp = this.a * mlfn(e0, e1, e2, e3, values.HALF_PI);
          Ml = this.a * mlfn(e0, e1, e2, e3, lat);
          p.x = this.x0 + (Mlp + Ml) * Math.sin(dlon);
          p.y = this.y0 + (Mlp + Ml) * Math.cos(dlon);
          return p;
        }
        else {
          //Default case
          tanphi = sinphi / cosphi;
          Nl1 = gN(this.a, this.e, this.sin_p12);
          Nl = gN(this.a, this.e, sinphi);
          psi = Math.atan((1 - this.es) * tanphi + this.es * Nl1 * this.sin_p12 / (Nl * cosphi));
          Az = Math.atan2(Math.sin(dlon), this.cos_p12 * Math.tan(psi) - this.sin_p12 * Math.cos(dlon));
          if (Az === 0) {
            s = Math.asin(this.cos_p12 * Math.sin(psi) - this.sin_p12 * Math.cos(psi));
          }
          else if (Math.abs(Math.abs(Az) - Math.PI) <= values.EPSLN) {
            s = -Math.asin(this.cos_p12 * Math.sin(psi) - this.sin_p12 * Math.cos(psi));
          }
          else {
            s = Math.asin(Math.sin(dlon) * Math.cos(psi) / Math.sin(Az));
          }
          G = this.e * this.sin_p12 / Math.sqrt(1 - this.es);
          H = this.e * this.cos_p12 * Math.cos(Az) / Math.sqrt(1 - this.es);
          GH = G * H;
          Hs = H * H;
          s2 = s * s;
          s3 = s2 * s;
          s4 = s3 * s;
          s5 = s4 * s;
          c = Nl1 * s * (1 - s2 * Hs * (1 - Hs) / 6 + s3 / 8 * GH * (1 - 2 * Hs) + s4 / 120 * (Hs * (4 - 7 * Hs) - 3 * G * G * (1 - 7 * Hs)) - s5 / 48 * GH);
          p.x = this.x0 + c * Math.sin(Az);
          p.y = this.y0 + c * Math.cos(Az);
          return p;
        }
      }


    }

    function inverse$6(p) {
      p.x -= this.x0;
      p.y -= this.y0;
      var rh, z, sinz, cosz, lon, lat, con, e0, e1, e2, e3, Mlp, M, N1, psi, Az, cosAz, tmp, A, B, D, Ee, F, sinpsi;
      if (this.sphere) {
        rh = Math.sqrt(p.x * p.x + p.y * p.y);
        if (rh > (2 * values.HALF_PI * this.a)) {
          return;
        }
        z = rh / this.a;

        sinz = Math.sin(z);
        cosz = Math.cos(z);

        lon = this.long0;
        if (Math.abs(rh) <= values.EPSLN) {
          lat = this.lat0;
        }
        else {
          lat = asinz(cosz * this.sin_p12 + (p.y * sinz * this.cos_p12) / rh);
          con = Math.abs(this.lat0) - values.HALF_PI;
          if (Math.abs(con) <= values.EPSLN) {
            if (this.lat0 >= 0) {
              lon = adjust_lon(this.long0 + Math.atan2(p.x, - p.y));
            }
            else {
              lon = adjust_lon(this.long0 - Math.atan2(-p.x, p.y));
            }
          }
          else {
            /*con = cosz - this.sin_p12 * Math.sin(lat);
            if ((Math.abs(con) < EPSLN) && (Math.abs(p.x) < EPSLN)) {
              //no-op, just keep the lon value as is
            } else {
              var temp = Math.atan2((p.x * sinz * this.cos_p12), (con * rh));
              lon = adjust_lon(this.long0 + Math.atan2((p.x * sinz * this.cos_p12), (con * rh)));
            }*/
            lon = adjust_lon(this.long0 + Math.atan2(p.x * sinz, rh * this.cos_p12 * cosz - p.y * this.sin_p12 * sinz));
          }
        }

        p.x = lon;
        p.y = lat;
        return p;
      }
      else {
        e0 = e0fn(this.es);
        e1 = e1fn(this.es);
        e2 = e2fn(this.es);
        e3 = e3fn(this.es);
        if (Math.abs(this.sin_p12 - 1) <= values.EPSLN) {
          //North pole case
          Mlp = this.a * mlfn(e0, e1, e2, e3, values.HALF_PI);
          rh = Math.sqrt(p.x * p.x + p.y * p.y);
          M = Mlp - rh;
          lat = imlfn(M / this.a, e0, e1, e2, e3);
          lon = adjust_lon(this.long0 + Math.atan2(p.x, - 1 * p.y));
          p.x = lon;
          p.y = lat;
          return p;
        }
        else if (Math.abs(this.sin_p12 + 1) <= values.EPSLN) {
          //South pole case
          Mlp = this.a * mlfn(e0, e1, e2, e3, values.HALF_PI);
          rh = Math.sqrt(p.x * p.x + p.y * p.y);
          M = rh - Mlp;

          lat = imlfn(M / this.a, e0, e1, e2, e3);
          lon = adjust_lon(this.long0 + Math.atan2(p.x, p.y));
          p.x = lon;
          p.y = lat;
          return p;
        }
        else {
          //default case
          rh = Math.sqrt(p.x * p.x + p.y * p.y);
          Az = Math.atan2(p.x, p.y);
          N1 = gN(this.a, this.e, this.sin_p12);
          cosAz = Math.cos(Az);
          tmp = this.e * this.cos_p12 * cosAz;
          A = -tmp * tmp / (1 - this.es);
          B = 3 * this.es * (1 - A) * this.sin_p12 * this.cos_p12 * cosAz / (1 - this.es);
          D = rh / N1;
          Ee = D - A * (1 + A) * Math.pow(D, 3) / 6 - B * (1 + 3 * A) * Math.pow(D, 4) / 24;
          F = 1 - A * Ee * Ee / 2 - D * Ee * Ee * Ee / 6;
          psi = Math.asin(this.sin_p12 * Math.cos(Ee) + this.cos_p12 * Math.sin(Ee) * cosAz);
          lon = adjust_lon(this.long0 + Math.asin(Math.sin(Az) * Math.sin(Ee) / Math.cos(psi)));
          sinpsi = Math.sin(psi);
          lat = Math.atan2((sinpsi - this.es * F * this.sin_p12) * Math.tan(psi), sinpsi * (1 - this.es));
          p.x = lon;
          p.y = lat;
          return p;
        }
      }

    }

    var names$6 = ["Azimuthal_Equidistant", "aeqd"];
    var aeqd = {
      init: init$6,
      forward: forward$6,
      inverse: inverse$6,
      names: names$6
    };

    function init$5() {
      //double temp;      /* temporary variable    */

      /* Place parameters in static storage for common use
          -------------------------------------------------*/
      this.sin_p14 = Math.sin(this.lat0);
      this.cos_p14 = Math.cos(this.lat0);
    }

    /* Orthographic forward equations--mapping lat,long to x,y
        ---------------------------------------------------*/
    function forward$5(p) {
      var sinphi, cosphi; /* sin and cos value        */
      var dlon; /* delta longitude value      */
      var coslon; /* cos of longitude        */
      var ksp; /* scale factor          */
      var g, x, y;
      var lon = p.x;
      var lat = p.y;
      /* Forward equations
          -----------------*/
      dlon = adjust_lon(lon - this.long0);

      sinphi = Math.sin(lat);
      cosphi = Math.cos(lat);

      coslon = Math.cos(dlon);
      g = this.sin_p14 * sinphi + this.cos_p14 * cosphi * coslon;
      ksp = 1;
      if ((g > 0) || (Math.abs(g) <= values.EPSLN)) {
        x = this.a * ksp * cosphi * Math.sin(dlon);
        y = this.y0 + this.a * ksp * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon);
      }
      p.x = x;
      p.y = y;
      return p;
    }

    function inverse$5(p) {
      var rh; /* height above ellipsoid      */
      var z; /* angle          */
      var sinz, cosz; /* sin of z and cos of z      */
      var con;
      var lon, lat;
      /* Inverse equations
          -----------------*/
      p.x -= this.x0;
      p.y -= this.y0;
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      z = asinz(rh / this.a);

      sinz = Math.sin(z);
      cosz = Math.cos(z);

      lon = this.long0;
      if (Math.abs(rh) <= values.EPSLN) {
        lat = this.lat0;
        p.x = lon;
        p.y = lat;
        return p;
      }
      lat = asinz(cosz * this.sin_p14 + (p.y * sinz * this.cos_p14) / rh);
      con = Math.abs(this.lat0) - values.HALF_PI;
      if (Math.abs(con) <= values.EPSLN) {
        if (this.lat0 >= 0) {
          lon = adjust_lon(this.long0 + Math.atan2(p.x, - p.y));
        }
        else {
          lon = adjust_lon(this.long0 - Math.atan2(-p.x, p.y));
        }
        p.x = lon;
        p.y = lat;
        return p;
      }
      lon = adjust_lon(this.long0 + Math.atan2((p.x * sinz), rh * this.cos_p14 * cosz - p.y * this.sin_p14 * sinz));
      p.x = lon;
      p.y = lat;
      return p;
    }

    var names$5 = ["ortho"];
    var ortho = {
      init: init$5,
      forward: forward$5,
      inverse: inverse$5,
      names: names$5
    };

    // QSC projection rewritten from the original PROJ4

    /* constants */
    var FACE_ENUM = {
        FRONT: 1,
        RIGHT: 2,
        BACK: 3,
        LEFT: 4,
        TOP: 5,
        BOTTOM: 6
    };

    var AREA_ENUM = {
        AREA_0: 1,
        AREA_1: 2,
        AREA_2: 3,
        AREA_3: 4
    };

    function init$4() {

      this.x0 = this.x0 || 0;
      this.y0 = this.y0 || 0;
      this.lat0 = this.lat0 || 0;
      this.long0 = this.long0 || 0;
      this.lat_ts = this.lat_ts || 0;
      this.title = this.title || "Quadrilateralized Spherical Cube";

      /* Determine the cube face from the center of projection. */
      if (this.lat0 >= values.HALF_PI - values.FORTPI / 2.0) {
        this.face = FACE_ENUM.TOP;
      } else if (this.lat0 <= -(values.HALF_PI - values.FORTPI / 2.0)) {
        this.face = FACE_ENUM.BOTTOM;
      } else if (Math.abs(this.long0) <= values.FORTPI) {
        this.face = FACE_ENUM.FRONT;
      } else if (Math.abs(this.long0) <= values.HALF_PI + values.FORTPI) {
        this.face = this.long0 > 0.0 ? FACE_ENUM.RIGHT : FACE_ENUM.LEFT;
      } else {
        this.face = FACE_ENUM.BACK;
      }

      /* Fill in useful values for the ellipsoid <-> sphere shift
       * described in [LK12]. */
      if (this.es !== 0) {
        this.one_minus_f = 1 - (this.a - this.b) / this.a;
        this.one_minus_f_squared = this.one_minus_f * this.one_minus_f;
      }
    }

    // QSC forward equations--mapping lat,long to x,y
    // -----------------------------------------------------------------
    function forward$4(p) {
      var xy = {x: 0, y: 0};
      var lat, lon;
      var theta, phi;
      var t, mu;
      /* nu; */
      var area = {value: 0};

      // move lon according to projection's lon
      p.x -= this.long0;

      /* Convert the geodetic latitude to a geocentric latitude.
       * This corresponds to the shift from the ellipsoid to the sphere
       * described in [LK12]. */
      if (this.es !== 0) {//if (P->es != 0) {
        lat = Math.atan(this.one_minus_f_squared * Math.tan(p.y));
      } else {
        lat = p.y;
      }

      /* Convert the input lat, lon into theta, phi as used by QSC.
       * This depends on the cube face and the area on it.
       * For the top and bottom face, we can compute theta and phi
       * directly from phi, lam. For the other faces, we must use
       * unit sphere cartesian coordinates as an intermediate step. */
      lon = p.x; //lon = lp.lam;
      if (this.face === FACE_ENUM.TOP) {
        phi = values.HALF_PI - lat;
        if (lon >= values.FORTPI && lon <= values.HALF_PI + values.FORTPI) {
          area.value = AREA_ENUM.AREA_0;
          theta = lon - values.HALF_PI;
        } else if (lon > values.HALF_PI + values.FORTPI || lon <= -(values.HALF_PI + values.FORTPI)) {
          area.value = AREA_ENUM.AREA_1;
          theta = (lon > 0.0 ? lon - values.SPI : lon + values.SPI);
        } else if (lon > -(values.HALF_PI + values.FORTPI) && lon <= -values.FORTPI) {
          area.value = AREA_ENUM.AREA_2;
          theta = lon + values.HALF_PI;
        } else {
          area.value = AREA_ENUM.AREA_3;
          theta = lon;
        }
      } else if (this.face === FACE_ENUM.BOTTOM) {
        phi = values.HALF_PI + lat;
        if (lon >= values.FORTPI && lon <= values.HALF_PI + values.FORTPI) {
          area.value = AREA_ENUM.AREA_0;
          theta = -lon + values.HALF_PI;
        } else if (lon < values.FORTPI && lon >= -values.FORTPI) {
          area.value = AREA_ENUM.AREA_1;
          theta = -lon;
        } else if (lon < -values.FORTPI && lon >= -(values.HALF_PI + values.FORTPI)) {
          area.value = AREA_ENUM.AREA_2;
          theta = -lon - values.HALF_PI;
        } else {
          area.value = AREA_ENUM.AREA_3;
          theta = (lon > 0.0 ? -lon + values.SPI : -lon - values.SPI);
        }
      } else {
        var q, r, s;
        var sinlat, coslat;
        var sinlon, coslon;

        if (this.face === FACE_ENUM.RIGHT) {
          lon = qsc_shift_lon_origin(lon, +values.HALF_PI);
        } else if (this.face === FACE_ENUM.BACK) {
          lon = qsc_shift_lon_origin(lon, +values.SPI);
        } else if (this.face === FACE_ENUM.LEFT) {
          lon = qsc_shift_lon_origin(lon, -values.HALF_PI);
        }
        sinlat = Math.sin(lat);
        coslat = Math.cos(lat);
        sinlon = Math.sin(lon);
        coslon = Math.cos(lon);
        q = coslat * coslon;
        r = coslat * sinlon;
        s = sinlat;

        if (this.face === FACE_ENUM.FRONT) {
          phi = Math.acos(q);
          theta = qsc_fwd_equat_face_theta(phi, s, r, area);
        } else if (this.face === FACE_ENUM.RIGHT) {
          phi = Math.acos(r);
          theta = qsc_fwd_equat_face_theta(phi, s, -q, area);
        } else if (this.face === FACE_ENUM.BACK) {
          phi = Math.acos(-q);
          theta = qsc_fwd_equat_face_theta(phi, s, -r, area);
        } else if (this.face === FACE_ENUM.LEFT) {
          phi = Math.acos(-r);
          theta = qsc_fwd_equat_face_theta(phi, s, q, area);
        } else {
          /* Impossible */
          phi = theta = 0;
          area.value = AREA_ENUM.AREA_0;
        }
      }

      /* Compute mu and nu for the area of definition.
       * For mu, see Eq. (3-21) in [OL76], but note the typos:
       * compare with Eq. (3-14). For nu, see Eq. (3-38). */
      mu = Math.atan((12 / values.SPI) * (theta + Math.acos(Math.sin(theta) * Math.cos(values.FORTPI)) - values.HALF_PI));
      t = Math.sqrt((1 - Math.cos(phi)) / (Math.cos(mu) * Math.cos(mu)) / (1 - Math.cos(Math.atan(1 / Math.cos(theta)))));

      /* Apply the result to the real area. */
      if (area.value === AREA_ENUM.AREA_1) {
        mu += values.HALF_PI;
      } else if (area.value === AREA_ENUM.AREA_2) {
        mu += values.SPI;
      } else if (area.value === AREA_ENUM.AREA_3) {
        mu += 1.5 * values.SPI;
      }

      /* Now compute x, y from mu and nu */
      xy.x = t * Math.cos(mu);
      xy.y = t * Math.sin(mu);
      xy.x = xy.x * this.a + this.x0;
      xy.y = xy.y * this.a + this.y0;

      p.x = xy.x;
      p.y = xy.y;
      return p;
    }

    // QSC inverse equations--mapping x,y to lat/long
    // -----------------------------------------------------------------
    function inverse$4(p) {
      var lp = {lam: 0, phi: 0};
      var mu, nu, cosmu, tannu;
      var tantheta, theta, cosphi, phi;
      var t;
      var area = {value: 0};

      /* de-offset */
      p.x = (p.x - this.x0) / this.a;
      p.y = (p.y - this.y0) / this.a;

      /* Convert the input x, y to the mu and nu angles as used by QSC.
       * This depends on the area of the cube face. */
      nu = Math.atan(Math.sqrt(p.x * p.x + p.y * p.y));
      mu = Math.atan2(p.y, p.x);
      if (p.x >= 0.0 && p.x >= Math.abs(p.y)) {
        area.value = AREA_ENUM.AREA_0;
      } else if (p.y >= 0.0 && p.y >= Math.abs(p.x)) {
        area.value = AREA_ENUM.AREA_1;
        mu -= values.HALF_PI;
      } else if (p.x < 0.0 && -p.x >= Math.abs(p.y)) {
        area.value = AREA_ENUM.AREA_2;
        mu = (mu < 0.0 ? mu + values.SPI : mu - values.SPI);
      } else {
        area.value = AREA_ENUM.AREA_3;
        mu += values.HALF_PI;
      }

      /* Compute phi and theta for the area of definition.
       * The inverse projection is not described in the original paper, but some
       * good hints can be found here (as of 2011-12-14):
       * http://fits.gsfc.nasa.gov/fitsbits/saf.93/saf.9302
       * (search for "Message-Id: <9302181759.AA25477 at fits.cv.nrao.edu>") */
      t = (values.SPI / 12) * Math.tan(mu);
      tantheta = Math.sin(t) / (Math.cos(t) - (1 / Math.sqrt(2)));
      theta = Math.atan(tantheta);
      cosmu = Math.cos(mu);
      tannu = Math.tan(nu);
      cosphi = 1 - cosmu * cosmu * tannu * tannu * (1 - Math.cos(Math.atan(1 / Math.cos(theta))));
      if (cosphi < -1) {
        cosphi = -1;
      } else if (cosphi > +1) {
        cosphi = +1;
      }

      /* Apply the result to the real area on the cube face.
       * For the top and bottom face, we can compute phi and lam directly.
       * For the other faces, we must use unit sphere cartesian coordinates
       * as an intermediate step. */
      if (this.face === FACE_ENUM.TOP) {
        phi = Math.acos(cosphi);
        lp.phi = values.HALF_PI - phi;
        if (area.value === AREA_ENUM.AREA_0) {
          lp.lam = theta + values.HALF_PI;
        } else if (area.value === AREA_ENUM.AREA_1) {
          lp.lam = (theta < 0.0 ? theta + values.SPI : theta - values.SPI);
        } else if (area.value === AREA_ENUM.AREA_2) {
          lp.lam = theta - values.HALF_PI;
        } else /* area.value == AREA_ENUM.AREA_3 */ {
          lp.lam = theta;
        }
      } else if (this.face === FACE_ENUM.BOTTOM) {
        phi = Math.acos(cosphi);
        lp.phi = phi - values.HALF_PI;
        if (area.value === AREA_ENUM.AREA_0) {
          lp.lam = -theta + values.HALF_PI;
        } else if (area.value === AREA_ENUM.AREA_1) {
          lp.lam = -theta;
        } else if (area.value === AREA_ENUM.AREA_2) {
          lp.lam = -theta - values.HALF_PI;
        } else /* area.value == AREA_ENUM.AREA_3 */ {
          lp.lam = (theta < 0.0 ? -theta - values.SPI : -theta + values.SPI);
        }
      } else {
        /* Compute phi and lam via cartesian unit sphere coordinates. */
        var q, r, s;
        q = cosphi;
        t = q * q;
        if (t >= 1) {
          s = 0;
        } else {
          s = Math.sqrt(1 - t) * Math.sin(theta);
        }
        t += s * s;
        if (t >= 1) {
          r = 0;
        } else {
          r = Math.sqrt(1 - t);
        }
        /* Rotate q,r,s into the correct area. */
        if (area.value === AREA_ENUM.AREA_1) {
          t = r;
          r = -s;
          s = t;
        } else if (area.value === AREA_ENUM.AREA_2) {
          r = -r;
          s = -s;
        } else if (area.value === AREA_ENUM.AREA_3) {
          t = r;
          r = s;
          s = -t;
        }
        /* Rotate q,r,s into the correct cube face. */
        if (this.face === FACE_ENUM.RIGHT) {
          t = q;
          q = -r;
          r = t;
        } else if (this.face === FACE_ENUM.BACK) {
          q = -q;
          r = -r;
        } else if (this.face === FACE_ENUM.LEFT) {
          t = q;
          q = r;
          r = -t;
        }
        /* Now compute phi and lam from the unit sphere coordinates. */
        lp.phi = Math.acos(-s) - values.HALF_PI;
        lp.lam = Math.atan2(r, q);
        if (this.face === FACE_ENUM.RIGHT) {
          lp.lam = qsc_shift_lon_origin(lp.lam, -values.HALF_PI);
        } else if (this.face === FACE_ENUM.BACK) {
          lp.lam = qsc_shift_lon_origin(lp.lam, -values.SPI);
        } else if (this.face === FACE_ENUM.LEFT) {
          lp.lam = qsc_shift_lon_origin(lp.lam, +values.HALF_PI);
        }
      }

      /* Apply the shift from the sphere to the ellipsoid as described
       * in [LK12]. */
      if (this.es !== 0) {
        var invert_sign;
        var tanphi, xa;
        invert_sign = (lp.phi < 0 ? 1 : 0);
        tanphi = Math.tan(lp.phi);
        xa = this.b / Math.sqrt(tanphi * tanphi + this.one_minus_f_squared);
        lp.phi = Math.atan(Math.sqrt(this.a * this.a - xa * xa) / (this.one_minus_f * xa));
        if (invert_sign) {
          lp.phi = -lp.phi;
        }
      }

      lp.lam += this.long0;
      p.x = lp.lam;
      p.y = lp.phi;
      return p;
    }

    /* Helper function for forward projection: compute the theta angle
     * and determine the area number. */
    function qsc_fwd_equat_face_theta(phi, y, x, area) {
      var theta;
      if (phi < values.EPSLN) {
        area.value = AREA_ENUM.AREA_0;
        theta = 0.0;
      } else {
        theta = Math.atan2(y, x);
        if (Math.abs(theta) <= values.FORTPI) {
          area.value = AREA_ENUM.AREA_0;
        } else if (theta > values.FORTPI && theta <= values.HALF_PI + values.FORTPI) {
          area.value = AREA_ENUM.AREA_1;
          theta -= values.HALF_PI;
        } else if (theta > values.HALF_PI + values.FORTPI || theta <= -(values.HALF_PI + values.FORTPI)) {
          area.value = AREA_ENUM.AREA_2;
          theta = (theta >= 0.0 ? theta - values.SPI : theta + values.SPI);
        } else {
          area.value = AREA_ENUM.AREA_3;
          theta += values.HALF_PI;
        }
      }
      return theta;
    }

    /* Helper function: shift the longitude. */
    function qsc_shift_lon_origin(lon, offset) {
      var slon = lon + offset;
      if (slon < -values.SPI) {
        slon += values.TWO_PI;
      } else if (slon > +values.SPI) {
        slon -= values.TWO_PI;
      }
      return slon;
    }

    var names$4 = ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"];
    var qsc = {
      init: init$4,
      forward: forward$4,
      inverse: inverse$4,
      names: names$4
    };

    // Robinson projection

    var COEFS_X = [
        [1.0000, 2.2199e-17, -7.15515e-05, 3.1103e-06],
        [0.9986, -0.000482243, -2.4897e-05, -1.3309e-06],
        [0.9954, -0.00083103, -4.48605e-05, -9.86701e-07],
        [0.9900, -0.00135364, -5.9661e-05, 3.6777e-06],
        [0.9822, -0.00167442, -4.49547e-06, -5.72411e-06],
        [0.9730, -0.00214868, -9.03571e-05, 1.8736e-08],
        [0.9600, -0.00305085, -9.00761e-05, 1.64917e-06],
        [0.9427, -0.00382792, -6.53386e-05, -2.6154e-06],
        [0.9216, -0.00467746, -0.00010457, 4.81243e-06],
        [0.8962, -0.00536223, -3.23831e-05, -5.43432e-06],
        [0.8679, -0.00609363, -0.000113898, 3.32484e-06],
        [0.8350, -0.00698325, -6.40253e-05, 9.34959e-07],
        [0.7986, -0.00755338, -5.00009e-05, 9.35324e-07],
        [0.7597, -0.00798324, -3.5971e-05, -2.27626e-06],
        [0.7186, -0.00851367, -7.01149e-05, -8.6303e-06],
        [0.6732, -0.00986209, -0.000199569, 1.91974e-05],
        [0.6213, -0.010418, 8.83923e-05, 6.24051e-06],
        [0.5722, -0.00906601, 0.000182, 6.24051e-06],
        [0.5322, -0.00677797, 0.000275608, 6.24051e-06]
    ];

    var COEFS_Y = [
        [-5.20417e-18, 0.0124, 1.21431e-18, -8.45284e-11],
        [0.0620, 0.0124, -1.26793e-09, 4.22642e-10],
        [0.1240, 0.0124, 5.07171e-09, -1.60604e-09],
        [0.1860, 0.0123999, -1.90189e-08, 6.00152e-09],
        [0.2480, 0.0124002, 7.10039e-08, -2.24e-08],
        [0.3100, 0.0123992, -2.64997e-07, 8.35986e-08],
        [0.3720, 0.0124029, 9.88983e-07, -3.11994e-07],
        [0.4340, 0.0123893, -3.69093e-06, -4.35621e-07],
        [0.4958, 0.0123198, -1.02252e-05, -3.45523e-07],
        [0.5571, 0.0121916, -1.54081e-05, -5.82288e-07],
        [0.6176, 0.0119938, -2.41424e-05, -5.25327e-07],
        [0.6769, 0.011713, -3.20223e-05, -5.16405e-07],
        [0.7346, 0.0113541, -3.97684e-05, -6.09052e-07],
        [0.7903, 0.0109107, -4.89042e-05, -1.04739e-06],
        [0.8435, 0.0103431, -6.4615e-05, -1.40374e-09],
        [0.8936, 0.00969686, -6.4636e-05, -8.547e-06],
        [0.9394, 0.00840947, -0.000192841, -4.2106e-06],
        [0.9761, 0.00616527, -0.000256, -4.2106e-06],
        [1.0000, 0.00328947, -0.000319159, -4.2106e-06]
    ];

    var FXC = 0.8487;
    var FYC = 1.3523;
    var C1 = values.R2D/5; // rad to 5-degree interval
    var RC1 = 1/C1;
    var NODES = 18;

    var poly3_val = function(coefs, x) {
        return coefs[0] + x * (coefs[1] + x * (coefs[2] + x * coefs[3]));
    };

    var poly3_der = function(coefs, x) {
        return coefs[1] + x * (2 * coefs[2] + x * 3 * coefs[3]);
    };

    function newton_rapshon(f_df, start, max_err, iters) {
        var x = start;
        for (; iters; --iters) {
            var upd = f_df(x);
            x -= upd;
            if (Math.abs(upd) < max_err) {
                break;
            }
        }
        return x;
    }

    function init$3() {
        this.x0 = this.x0 || 0;
        this.y0 = this.y0 || 0;
        this.long0 = this.long0 || 0;
        this.es = 0;
        this.title = this.title || "Robinson";
    }

    function forward$3(ll) {
        var lon = adjust_lon(ll.x - this.long0);

        var dphi = Math.abs(ll.y);
        var i = Math.floor(dphi * C1);
        if (i < 0) {
            i = 0;
        } else if (i >= NODES) {
            i = NODES - 1;
        }
        dphi = values.R2D * (dphi - RC1 * i);
        var xy = {
            x: poly3_val(COEFS_X[i], dphi) * lon,
            y: poly3_val(COEFS_Y[i], dphi)
        };
        if (ll.y < 0) {
            xy.y = -xy.y;
        }

        xy.x = xy.x * this.a * FXC + this.x0;
        xy.y = xy.y * this.a * FYC + this.y0;
        return xy;
    }

    function inverse$3(xy) {
        var ll = {
            x: (xy.x - this.x0) / (this.a * FXC),
            y: Math.abs(xy.y - this.y0) / (this.a * FYC)
        };

        if (ll.y >= 1) { // pathologic case
            ll.x /= COEFS_X[NODES][0];
            ll.y = xy.y < 0 ? -values.HALF_PI : values.HALF_PI;
        } else {
            // find table interval
            var i = Math.floor(ll.y * NODES);
            if (i < 0) {
                i = 0;
            } else if (i >= NODES) {
                i = NODES - 1;
            }
            for (;;) {
                if (COEFS_Y[i][0] > ll.y) {
                    --i;
                } else if (COEFS_Y[i+1][0] <= ll.y) {
                    ++i;
                } else {
                    break;
                }
            }
            // linear interpolation in 5 degree interval
            var coefs = COEFS_Y[i];
            var t = 5 * (ll.y - coefs[0]) / (COEFS_Y[i+1][0] - coefs[0]);
            // find t so that poly3_val(coefs, t) = ll.y
            t = newton_rapshon(function(x) {
                return (poly3_val(coefs, x) - ll.y) / poly3_der(coefs, x);
            }, t, values.EPSLN, 100);

            ll.x /= poly3_val(COEFS_X[i], t);
            ll.y = (5 * i + t) * D2R$1;
            if (xy.y < 0) {
                ll.y = -ll.y;
            }
        }

        ll.x = adjust_lon(ll.x + this.long0);
        return ll;
    }

    var names$3 = ["Robinson", "robin"];
    var robin = {
      init: init$3,
      forward: forward$3,
      inverse: inverse$3,
      names: names$3
    };

    function init$2() {
        this.name = 'geocent';

    }

    function forward$2(p) {
        var point = geodeticToGeocentric(p, this.es, this.a);
        return point;
    }

    function inverse$2(p) {
        var point = geocentricToGeodetic(p, this.es, this.a, this.b);
        return point;
    }

    var names$2 = ["Geocentric", 'geocentric', "geocent", "Geocent"];
    var geocent = {
        init: init$2,
        forward: forward$2,
        inverse: inverse$2,
        names: names$2
    };

    var mode = {
      N_POLE: 0,
      S_POLE: 1,
      EQUIT: 2,
      OBLIQ: 3
    };

    var params = {
      h:     { def: 100000, num: true },           // default is Karman line, no default in PROJ.7
      azi:   { def: 0, num: true, degrees: true }, // default is North
      tilt:  { def: 0, num: true, degrees: true }, // default is Nadir
      long0: { def: 0, num: true },                // default is Greenwich, conversion to rad is automatic
      lat0:  { def: 0, num: true }                 // default is Equator, conversion to rad is automatic
    };

    function init$1() {
      Object.keys(params).forEach(function (p) {
        if (typeof this[p] === "undefined") {
          this[p] = params[p].def;
        } else if (params[p].num && isNaN(this[p])) {
          throw new Error("Invalid parameter value, must be numeric " + p + " = " + this[p]);
        } else if (params[p].num) {
          this[p] = parseFloat(this[p]);
        }
        if (params[p].degrees) {
          this[p] = this[p] * D2R$1;
        }
      }.bind(this));

      if (Math.abs((Math.abs(this.lat0) - values.HALF_PI)) < values.EPSLN) {
        this.mode = this.lat0 < 0 ? mode.S_POLE : mode.N_POLE;
      } else if (Math.abs(this.lat0) < values.EPSLN) {
        this.mode = mode.EQUIT;
      } else {
        this.mode = mode.OBLIQ;
        this.sinph0 = Math.sin(this.lat0);
        this.cosph0 = Math.cos(this.lat0);
      }

      this.pn1 = this.h / this.a;  // Normalize relative to the Earth's radius

      if (this.pn1 <= 0 || this.pn1 > 1e10) {
        throw new Error("Invalid height");
      }
      
      this.p = 1 + this.pn1;
      this.rp = 1 / this.p;
      this.h1 = 1 / this.pn1;
      this.pfact = (this.p + 1) * this.h1;
      this.es = 0;

      var omega = this.tilt;
      var gamma = this.azi;
      this.cg = Math.cos(gamma);
      this.sg = Math.sin(gamma);
      this.cw = Math.cos(omega);
      this.sw = Math.sin(omega);
    }

    function forward$1(p) {
      p.x -= this.long0;
      var sinphi = Math.sin(p.y);
      var cosphi = Math.cos(p.y);
      var coslam = Math.cos(p.x);
      var x, y;
      switch (this.mode) {
        case mode.OBLIQ:
          y = this.sinph0 * sinphi + this.cosph0 * cosphi * coslam;
          break;
        case mode.EQUIT:
          y = cosphi * coslam;
          break;
        case mode.S_POLE:
          y = -sinphi;
          break;
        case mode.N_POLE:
          y = sinphi;
          break;
      }
      y = this.pn1 / (this.p - y);
      x = y * cosphi * Math.sin(p.x);

      switch (this.mode) {
        case mode.OBLIQ:
          y *= this.cosph0 * sinphi - this.sinph0 * cosphi * coslam;
          break;
        case mode.EQUIT:
          y *= sinphi;
          break;
        case mode.N_POLE:
          y *= -(cosphi * coslam);
          break;
        case mode.S_POLE:
          y *= cosphi * coslam;
          break;
      }

      // Tilt 
      var yt, ba;
      yt = y * this.cg + x * this.sg;
      ba = 1 / (yt * this.sw * this.h1 + this.cw);
      x = (x * this.cg - y * this.sg) * this.cw * ba;
      y = yt * ba;

      p.x = x * this.a;
      p.y = y * this.a;
      return p;
    }

    function inverse$1(p) {
      p.x /= this.a;
      p.y /= this.a;
      var r = { x: p.x, y: p.y };

      // Un-Tilt
      var bm, bq, yt;
      yt = 1 / (this.pn1 - p.y * this.sw);
      bm = this.pn1 * p.x * yt;
      bq = this.pn1 * p.y * this.cw * yt;
      p.x = bm * this.cg + bq * this.sg;
      p.y = bq * this.cg - bm * this.sg;

      var rh = hypot(p.x, p.y);
      if (Math.abs(rh) < values.EPSLN) {
        r.x = 0;
        r.y = p.y;
      } else {
        var cosz, sinz;
        sinz = 1 - rh * rh * this.pfact;
        sinz = (this.p - Math.sqrt(sinz)) / (this.pn1 / rh + rh / this.pn1);
        cosz = Math.sqrt(1 - sinz * sinz);
        switch (this.mode) {
          case mode.OBLIQ:
            r.y = Math.asin(cosz * this.sinph0 + p.y * sinz * this.cosph0 / rh);
            p.y = (cosz - this.sinph0 * Math.sin(r.y)) * rh;
            p.x *= sinz * this.cosph0;
            break;
          case mode.EQUIT:
            r.y = Math.asin(p.y * sinz / rh);
            p.y = cosz * rh;
            p.x *= sinz;
            break;
          case mode.N_POLE:
            r.y = Math.asin(cosz);
            p.y = -p.y;
            break;
          case mode.S_POLE:
            r.y = -Math.asin(cosz);
            break;
        }
        r.x = Math.atan2(p.x, p.y);
      }

      p.x = r.x + this.long0;
      p.y = r.y;
      return p;
    }

    var names$1 = ["Tilted_Perspective", "tpers"];
    var tpers = {
      init: init$1,
      forward: forward$1,
      inverse: inverse$1,
      names: names$1
    };

    function init() {
        this.flip_axis = (this.sweep === 'x' ? 1 : 0);
        this.h = Number(this.h);
        this.radius_g_1 = this.h / this.a;

        if (this.radius_g_1 <= 0 || this.radius_g_1 > 1e10) {
            throw new Error();
        }

        this.radius_g = 1.0 + this.radius_g_1;
        this.C = this.radius_g * this.radius_g - 1.0;

        if (this.es !== 0.0) {
            var one_es = 1.0 - this.es;
            var rone_es = 1 / one_es;

            this.radius_p = Math.sqrt(one_es);
            this.radius_p2 = one_es;
            this.radius_p_inv2 = rone_es;

            this.shape = 'ellipse'; // Use as a condition in the forward and inverse functions.
        } else {
            this.radius_p = 1.0;
            this.radius_p2 = 1.0;
            this.radius_p_inv2 = 1.0;

            this.shape = 'sphere';  // Use as a condition in the forward and inverse functions.
        }

        if (!this.title) {
            this.title = "Geostationary Satellite View";
        }
    }

    function forward(p) {
        var lon = p.x;
        var lat = p.y;
        var tmp, v_x, v_y, v_z;
        lon = lon - this.long0;

        if (this.shape === 'ellipse') {
            lat = Math.atan(this.radius_p2 * Math.tan(lat));
            var r = this.radius_p / hypot(this.radius_p * Math.cos(lat), Math.sin(lat));

            v_x = r * Math.cos(lon) * Math.cos(lat);
            v_y = r * Math.sin(lon) * Math.cos(lat);
            v_z = r * Math.sin(lat);

            if (((this.radius_g - v_x) * v_x - v_y * v_y - v_z * v_z * this.radius_p_inv2) < 0.0) {
                p.x = Number.NaN;
                p.y = Number.NaN;
                return p;
            }

            tmp = this.radius_g - v_x;
            if (this.flip_axis) {
                p.x = this.radius_g_1 * Math.atan(v_y / hypot(v_z, tmp));
                p.y = this.radius_g_1 * Math.atan(v_z / tmp);
            } else {
                p.x = this.radius_g_1 * Math.atan(v_y / tmp);
                p.y = this.radius_g_1 * Math.atan(v_z / hypot(v_y, tmp));
            }
        } else if (this.shape === 'sphere') {
            tmp = Math.cos(lat);
            v_x = Math.cos(lon) * tmp;
            v_y = Math.sin(lon) * tmp;
            v_z = Math.sin(lat);
            tmp = this.radius_g - v_x;

            if (this.flip_axis) {
                p.x = this.radius_g_1 * Math.atan(v_y / hypot(v_z, tmp));
                p.y = this.radius_g_1 * Math.atan(v_z / tmp);
            } else {
                p.x = this.radius_g_1 * Math.atan(v_y / tmp);
                p.y = this.radius_g_1 * Math.atan(v_z / hypot(v_y, tmp));
            }
        }
        p.x = p.x * this.a;
        p.y = p.y * this.a;
        return p;
    }

    function inverse(p) {
        var v_x = -1.0;
        var v_y = 0.0;
        var v_z = 0.0;
        var a, b, det, k;

        p.x = p.x / this.a;
        p.y = p.y / this.a;

        if (this.shape === 'ellipse') {
            if (this.flip_axis) {
                v_z = Math.tan(p.y / this.radius_g_1);
                v_y = Math.tan(p.x / this.radius_g_1) * hypot(1.0, v_z);
            } else {
                v_y = Math.tan(p.x / this.radius_g_1);
                v_z = Math.tan(p.y / this.radius_g_1) * hypot(1.0, v_y);
            }

            var v_zp = v_z / this.radius_p;
            a = v_y * v_y + v_zp * v_zp + v_x * v_x;
            b = 2 * this.radius_g * v_x;
            det = (b * b) - 4 * a * this.C;

            if (det < 0.0) {
                p.x = Number.NaN;
                p.y = Number.NaN;
                return p;
            }

            k = (-b - Math.sqrt(det)) / (2.0 * a);
            v_x = this.radius_g + k * v_x;
            v_y *= k;
            v_z *= k;

            p.x = Math.atan2(v_y, v_x);
            p.y = Math.atan(v_z * Math.cos(p.x) / v_x);
            p.y = Math.atan(this.radius_p_inv2 * Math.tan(p.y));
        } else if (this.shape === 'sphere') {
            if (this.flip_axis) {
                v_z = Math.tan(p.y / this.radius_g_1);
                v_y = Math.tan(p.x / this.radius_g_1) * Math.sqrt(1.0 + v_z * v_z);
            } else {
                v_y = Math.tan(p.x / this.radius_g_1);
                v_z = Math.tan(p.y / this.radius_g_1) * Math.sqrt(1.0 + v_y * v_y);
            }

            a = v_y * v_y + v_z * v_z + v_x * v_x;
            b = 2 * this.radius_g * v_x;
            det = (b * b) - 4 * a * this.C;
            if (det < 0.0) {
                p.x = Number.NaN;
                p.y = Number.NaN;
                return p;
            }

            k = (-b - Math.sqrt(det)) / (2.0 * a);
            v_x = this.radius_g + k * v_x;
            v_y *= k;
            v_z *= k;

            p.x = Math.atan2(v_y, v_x);
            p.y = Math.atan(v_z * Math.cos(p.x) / v_x);
        }
        p.x = p.x + this.long0;
        return p;
    }

    var names = ["Geostationary Satellite View", "Geostationary_Satellite", "geos"];
    var geos = {
        init: init,
        forward: forward,
        inverse: inverse,
        names: names,
    };

    function includedProjections(proj4){
      proj4.Proj.projections.add(tmerc["default"]);
      proj4.Proj.projections.add(etmerc);
      proj4.Proj.projections.add(utm);
      proj4.Proj.projections.add(sterea);
      proj4.Proj.projections.add(stere);
      proj4.Proj.projections.add(somerc);
      proj4.Proj.projections.add(omerc);
      proj4.Proj.projections.add(lcc);
      proj4.Proj.projections.add(krovak);
      proj4.Proj.projections.add(cass);
      proj4.Proj.projections.add(laea);
      proj4.Proj.projections.add(aea);
      proj4.Proj.projections.add(gnom);
      proj4.Proj.projections.add(cea);
      proj4.Proj.projections.add(eqc);
      proj4.Proj.projections.add(poly);
      proj4.Proj.projections.add(nzmg);
      proj4.Proj.projections.add(mill);
      proj4.Proj.projections.add(sinu);
      proj4.Proj.projections.add(moll);
      proj4.Proj.projections.add(eqdc);
      proj4.Proj.projections.add(vandg);
      proj4.Proj.projections.add(aeqd);
      proj4.Proj.projections.add(ortho);
      proj4.Proj.projections.add(qsc);
      proj4.Proj.projections.add(robin);
      proj4.Proj.projections.add(geocent);
      proj4.Proj.projections.add(tpers);
      proj4.Proj.projections.add(geos);
    }

    proj4.defaultDatum = 'WGS84'; //default datum
    proj4.Proj = Projection;
    proj4.WGS84 = new proj4.Proj('WGS84');
    proj4.Point = Point;
    proj4.toPoint = common;
    proj4.defs = defs;
    proj4.nadgrid = nadgrid;
    proj4.transform = transform;
    proj4.mgrs = mgrs;
    proj4.version = '__VERSION__';
    includedProjections(proj4);

    proj4.defs("EPSG:5185", "+proj=tmerc +lat_0=38 +lon_0=125 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs");
    proj4.defs("EPSG:5186", "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs");
    proj4.defs("EPSG:5187", "+proj=tmerc +lat_0=38 +lon_0=129 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs");
    proj4.defs("EPSG:5188", "+proj=tmerc +lat_0=38 +lon_0=131 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs");
    proj4.defs("EPSG:3857", "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");
    proj4.defs("WGS:84", "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs");
    proj4$1.register(proj4);
    function GeoJsonLayer({
      geoJson,
      zIndex = 1,
      projectionCode = "EPSG:5186"
    }) {
      const map = useMap();
      const geoJsonLayer = React.useRef(null);
      const fromProjection = projectionCode;
      const toProjection = "EPSG:3857";
      React.useEffect(() => {
        if (geoJsonLayer.current) {
          geoJsonLayer.current.setZIndex(zIndex);
        }
      }, [zIndex]);
      React.useEffect(() => {
        const geoJsonFormat = new GeoJSON__default["default"]();
        const features = geoJsonFormat.readFeatures(geoJson);
        features.forEach(feature => {
          const geoMetry = feature.getGeometry();
          if (geoMetry) {
            geoMetry.transform(fromProjection, toProjection);
          }
        });
        const vectorSource = new VectorSource__default["default"]({
          features
        });
        const vectorLayer = new VectorLayer__default["default"]({
          source: vectorSource
        });
        geoJsonLayer.current = vectorLayer;
        map.addLayer(vectorLayer);
      }, [map, geoJson]);
      return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    }

    function LayerGroup({
      zIndex,
      children
    }) {
      if (!Array.isArray(children) && zIndex) {
        return React.cloneElement(children, Object.assign(Object.assign({}, children.props), {
          zIndex
        }));
      }
      if (Array.isArray(children) && zIndex) {
        return jsxRuntime.jsx(jsxRuntime.Fragment, {
          children: React.Children.map(children, child => {
            return React.cloneElement(child, Object.assign(Object.assign({}, child.props), {
              zIndex
            }));
          })
        });
      }
      return jsxRuntime.jsx(jsxRuntime.Fragment, {
        children: children
      });
    }

    const Map = React.forwardRef(({
      children,
      isZoomAbled = true,
      isRotateAbled = false,
      center = [126.841, 35.1896563],
      defaultZoomLevel = 18,
      bounds,
      maxZoom = 24,
      minZoom = 3,
      height = "1000px",
      width = "1000px"
    }, ref) => {
      const mapObj = React.useRef(new OlMap({
        controls: control.defaults({
          zoom: isZoomAbled,
          rotate: isRotateAbled
        }).extend([]),
        layers: [new layer.Tile({
          source: new source.OSM()
        })],
        // 하위 요소 중 id 가 map 인 element가 있어야함.
        view: new View["default"]({
          extent: bounds ? proj.fromLonLat(concat__default["default"]([...[...bounds[0], ...bounds[1]]])) : undefined,
          center: proj.fromLonLat(center),
          zoom: defaultZoomLevel,
          maxZoom: !isZoomAbled ? defaultZoomLevel : maxZoom,
          minZoom: !isZoomAbled ? defaultZoomLevel : minZoom,
          constrainResolution: true
        })
      }));
      React.useImperativeHandle(ref, () => mapObj);
      React.useLayoutEffect(() => {
        const mapRef = mapObj.current;
        const defaultZoomControl = mapRef.getControls().getArray().find(control$1 => control$1 instanceof control.Zoom);
        if (defaultZoomControl) {
          mapRef.removeControl(defaultZoomControl);
        }
        mapRef.setTarget("map");
        return () => {
          mapRef.setTarget(undefined);
        };
      }, []);
      // MapContext.Provider 에 객체 저장
      return jsxRuntime.jsxs(MapContext.Provider, Object.assign({
        value: mapObj.current
      }, {
        children: [jsxRuntime.jsx("div", {
          id: "map",
          style: {
            width,
            height
          }
        }), children]
      }));
    });

    function InnerText({
      color,
      size,
      outline,
      children
    }) {
      return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    }

    exports.ANNOTATION_COLOR = ANNOTATION_COLOR;
    exports.Button = Button;
    exports.CompassWheel = CompassWheel;
    exports.ControlGroup = ControlGroup;
    exports.ControlSection = ControlSection;
    exports.CustomCircle = CustomCircle;
    exports.CustomMarker = CustomMarker;
    exports.CustomMultiPoint = CustomMultiPoint;
    exports.CustomPolyLine = CustomPolyLine;
    exports.CustomPolygon = CustomPolygon;
    exports.CustomRectangle = CustomRectangle;
    exports.CustomTextMarker = TextMarker;
    exports.DeleteAnnotation = DeleteAnnotation;
    exports.DrawingTools = DrawingTools;
    exports.FullScreenFeature = FullScreenFeature;
    exports.GeoJsonLayer = GeoJsonLayer;
    exports.LayerGroup = LayerGroup;
    exports.Map = Map;
    exports.ModifyAnnotattion = ModifyAnnotation;
    exports.MoveAnnotation = MoveAnnotation;
    exports.MultiPointDrawButton = MultiPointDrawButton;
    exports.PointDrawButton = PointDrawButton;
    exports.PolygonDrawButton = PolygonDrawButton;
    exports.PolylineDrawButton = PolylineDrawButton;
    exports.RectangleDrawButton = RectangleDrawButton;
    exports.Text = InnerText;
    exports.TextDrawButton = TextDrawButton;
    exports.TileLayer = TileLayer;
    exports.TileUrl = TileUrl;
    exports.ZoomFeature = ZoomFeature;
    exports.getProfileFromFeature = getProfileFromFeature;
    exports.getProfileFromMultiPoint = getProfileFromMultiPoint;
    exports.getProfileFromPoint = getProfileFromPoint;
    exports.getProfileFromPolygon = getProfileFromPolygon;
    exports.getProfileFromPolyline = getProfileFromPolyline;
    exports.makeText = makeText;
    exports.useDidUpdate = useDidUpdate;
    exports.useEffectIfMounted = useEffectIfMounted;
    exports.useIsMounted = useIsMount;
    exports.useMap = useMap;
    exports.useMapEventHandler = useMapEventHandler;
    exports.useMapRotation = useMapRotation;
    exports.useSelectAnnotation = useSelectAnnotation;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
