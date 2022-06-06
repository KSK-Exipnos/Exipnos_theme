/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.editor.RichText;
registerBlockType('lh-theme/lh-65phone', {
  title: 'Telefon',
  description: 'Telefonblock',
  icon: 'shield',
  category: 'common',
  attributes: {
    tel_num: {
      type: 'string'
    },
    tel_name: {
      type: 'string'
    },
    tel_href: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        className = _ref.className,
        isSelected = _ref.isSelected;

    //const updateDate;
    function updateTelName(event) {
      setAttributes({
        tel_name: event.target.value
      });
    }

    function updateTelNum(event) {
      setAttributes({
        tel_num: event.target.value
      });
    }

    function updateTelHref(event) {
      setAttributes({
        tel_href: event.target.value
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        display: " flex",
        flexDirection: "column"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Tel. Label"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      type: "text",
      value: attributes.tel_name,
      onChange: updateTelName
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Nummer"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      type: "text",
      value: attributes.tel_num,
      onChange: updateTelNum
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "href"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      type: "text",
      value: attributes.tel_href,
      onChange: updateTelHref
    }))];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "kontakt__phone"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: 'mail:' + attributes.tel_href
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "adress__name"
    }, attributes.tel_name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "adress"
    }, attributes.tel_num)));
  }
});
registerBlockType('lh-theme/lh-mail', {
  title: 'Email',
  description: 'Emailblock',
  icon: 'shield',
  category: 'common',
  attributes: {
    mail_name: {
      type: 'string'
    },
    mail_ad: {
      type: 'string'
    },
    mail_href: {
      type: 'string'
    }
  },
  edit: function edit(_ref3) {
    var attributes = _ref3.attributes,
        setAttributes = _ref3.setAttributes,
        className = _ref3.className,
        isSelected = _ref3.isSelected;

    //const updateDate;
    function updateMailName(event) {
      setAttributes({
        mail_name: event.target.value
      });
    }

    function updateMailAd(event) {
      setAttributes({
        mail_ad: event.target.value
      });
    }

    function updateMailHref(event) {
      setAttributes({
        mail_href: event.target.value
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        display: " flex",
        flexDirection: "column"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Mail Label"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      type: "text",
      value: attributes.mail_name,
      onChange: updateMailName
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Adresse"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      type: "text",
      value: attributes.mail_ad,
      onChange: updateMailAd
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "href"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      type: "text",
      value: attributes.mail_href,
      onChange: updateMailHref
    }))];
  },
  save: function save(_ref4) {
    var attributes = _ref4.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "kontakt__mail"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: 'mailto:' + attributes.mail_href
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "adress__name"
    }, attributes.mail_name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "adress"
    }, attributes.mail_ad)));
  }
});
/* registerBlockType('lh-theme/lh-svg', {
    title: 'SVG',
    description: 'SVG-block',
    icon: 'shield',
    category: 'common',

    
    attributes: {
        svg_class: {
            type: 'string'
        },
        svg_attributes: {
            type: 'string'
        },
        svg_content: {
            type: 'string'
        },
        date: {
            type: 'html',
            source: 'children',
            selector: '.date',
            className: 'vita__date'
        },
    },

    edit: function ({ attributes, setAttributes, className, isSelected }) {
        //const updateDate;
        function updateSvgClass(event) {
            setAttributes( { svg_class: event.target.value } );
        }
        function updateSvgAttributes(event) {
            setAttributes( { svg_attributes: event.target.value } );
        }
        function updateSvgContent(event) {
            setAttributes( { svg_content: event.target.value } );
        }


        return ([
            <div>
                <label>SVG Class</label>
                <input type="text" value={attributes.svg_class} onChange={ updateSvgClass }></input>  
                <RichText
                        key="editable"
                        tagName="p"
                        className={className}
                        value={attributes.date}
                        onChange={(date) => setAttributes({ date })}
                        placeholder={'JJJJ – JJJJ'}
                        keepPlaceholderOnFocus={true}
                    />
                <label>Attributes</label>
                <input type="text" value={attributes.svg_attributes} onChange={ updateSvgAttributes }></input>  
                <label>Inhalt</label>
                <input type="text" value={attributes.svg_content} onChange={ updateSvgContent }></input>  
            </div>
        ]);
    },

    save: function( { attributes } ) {

        return (
            <RichText.Content tagName="p" className="vita__date" value={ attributes.date } />
            //<svg className={ attributes.svg_class }  value={ attributes.svg_attributes } >
            //    {attributes.svg_content}
            //</svg>
        );
    }
}); */

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map