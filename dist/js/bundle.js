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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_enquire_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/enquire.js */ \"./src/js/lib/enquire.js\");\n/* harmony import */ var _lib_enquire_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_enquire_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n(function () {\r\n    //jQuery variables\r\n    const $spacerImg            = $('.spacer__img');\r\n    const $projectImg           = $('.project__img');\r\n    const $projectOverlay       = $('.project__overlay');\r\n    const $projectButton        = $('.project__button');\r\n\r\n    //variables\r\n    const skills              = document.getElementById('skills');\r\n    const skillBars           = document.querySelectorAll('.skill__bar');\r\n\r\n    /**\r\n     * @name        spacerImgParallax\r\n     * @desc        Function handles parallax effect for spacer images. It uses setInterval which updates the top and transform: translateY properties of the image.\r\n     *              The parallax effect is displayed only for window width greater than 1025px using enquire.js. For window width less than 1025px, the image properties are restored to default values.\r\n     *              Parallax function based on: https://codepen.io/RenanB/pen/GZeBNg by Renan Breno\r\n     * @param       speed - speed of the parallax effect (between 0 and 1)\r\n     * @param       $img - jQuery array like object of spacer images\r\n     * @param       $wrapper - jQuery array like object of spacer image wrappers\r\n     */\r\n    function spacerImgParallax(speed,$img,$wrapper) {\r\n        let parallaxInterval;\r\n        let imgPercent;\r\n        _lib_enquire_js__WEBPACK_IMPORTED_MODULE_0___default.a.register(\"screen and (min-width: 1025px)\", {\r\n            match: function () {\r\n                parallaxInterval = setInterval(function () {\r\n                    const winTop        = $(this).scrollTop();\r\n                    const winH          = $(this).height();\r\n                    const winBottom     = winTop + winH;\r\n                    const wrapperTop    = $wrapper.offset().top;\r\n                    const wrapperH      = $wrapper.innerHeight();\r\n\r\n                    const imgBottom = ((winBottom - wrapperTop) * speed);\r\n                    const imgTop = winH + wrapperH;\r\n                    imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));\r\n\r\n                    $img.css({\r\n                        top: imgPercent + '%',\r\n                        transform: 'translateY(-' + imgPercent + '%)'\r\n                    });\r\n                },1000/60);\r\n            },\r\n            unmatch: function () {\r\n                $img.css({\r\n                    top: '0',\r\n                    transform: 'translateY(0)'\r\n                });\r\n                clearInterval(parallaxInterval);\r\n            }\r\n        });\r\n    }\r\n\r\n    /**\r\n     * @name        responsiveSpacerImg\r\n     * @desc        Function adds img-responsive class to the image if screen width is greater than 540px.\r\n     *              Uses enquire.js.\r\n     */\r\n    function responsiveSpacerImg() {\r\n        _lib_enquire_js__WEBPACK_IMPORTED_MODULE_0___default.a.register(\"screen and (min-width: 540px)\", {\r\n            match: function () {\r\n                $spacerImg.addClass(\"img-responsive\");\r\n            },\r\n            unmatch: function () {\r\n                $spacerImg.removeClass(\"img-responsive\");\r\n            }\r\n        });\r\n    }\r\n\r\n    /**\r\n     * @name        animateSkillBars\r\n     * @desc        Function checks if skill bars are visible in the viewport.\r\n     *              If they are visible, a CSS class is added which adds their width - animates them.\r\n     */\r\n    function animateSkillBars() {\r\n        const interval = setInterval(function () {\r\n            if(skills.getBoundingClientRect().top<window.innerHeight){\r\n                for (let i=0;i<skillBars.length;i++){\r\n                    skillBars[i].classList.add(`skill__bar-${i+1}`);\r\n                }\r\n                clearInterval(interval);\r\n            }\r\n        },100);\r\n    }\r\n\r\n    /**\r\n     *\r\n     * @param e\r\n     */\r\n    function showProjectDescription(e) {\r\n        const $targetImage          = $(e.target);\r\n        const $targetProject        = $targetImage.closest('.portfolio__project');\r\n        const $targetOverlay        = $targetProject.find('.project__overlay');\r\n        $projectOverlay.not($targetOverlay).slideUp(600);\r\n        $targetOverlay.slideDown(400);\r\n    }\r\n\r\n    /**\r\n     *\r\n     * @param e\r\n     */\r\n    function hideProjectDescription(e) {\r\n        const $target               = $(e.target);\r\n        const $targetOverlay        = $target.closest('.project__overlay');\r\n        $targetOverlay.slideUp(600);\r\n    }\r\n\r\n    function showProjectLightBox(e) {\r\n        e.stopPropagation();\r\n        console.log(\"1\");\r\n    }\r\n    \r\n    function eventHandler() {\r\n        $('.spacer__img').each(function () {\r\n            const $spacerImg          = $(this);\r\n            const $spacerImgWrapper   = $(this).parent();\r\n            spacerImgParallax(0.4,$spacerImg,$spacerImgWrapper);\r\n        });\r\n        $projectButton.on('click',function (e) {\r\n            showProjectLightBox(e);\r\n        });\r\n        $projectImg.on('click',function (e) {\r\n            showProjectDescription(e);\r\n        });\r\n        $projectOverlay.on('click',function (e) {\r\n            hideProjectDescription(e);\r\n        });\r\n    }\r\n\r\n    function init() {\r\n        eventHandler();\r\n        responsiveSpacerImg();\r\n        animateSkillBars();\r\n    }\r\n\r\n    window.addEventListener(\"load\", init);\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/lib/enquire.js":
/*!*******************************!*\
  !*** ./src/js/lib/enquire.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var require;var require;/*!\n * enquire.js v2.1.6 - Awesome Media Queries in JavaScript\n * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/enquire.js\n * License: MIT */\n\n\n(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){\nvar QueryHandler = require(3);\nvar each = require(4).each;\n\n/**\n * Represents a single media query, manages it's state and registered handlers for this query\n *\n * @constructor\n * @param {string} query the media query string\n * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design\n */\nfunction MediaQuery(query, isUnconditional) {\n    this.query = query;\n    this.isUnconditional = isUnconditional;\n    this.handlers = [];\n    this.mql = window.matchMedia(query);\n\n    var self = this;\n    this.listener = function(mql) {\n        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly\n        self.mql = mql.currentTarget || mql;\n        self.assess();\n    };\n    this.mql.addListener(this.listener);\n}\n\nMediaQuery.prototype = {\n\n    constuctor : MediaQuery,\n\n    /**\n     * add a handler for this query, triggering if already active\n     *\n     * @param {object} handler\n     * @param {function} handler.match callback for when query is activated\n     * @param {function} [handler.unmatch] callback for when query is deactivated\n     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered\n     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?\n     */\n    addHandler : function(handler) {\n        var qh = new QueryHandler(handler);\n        this.handlers.push(qh);\n\n        this.matches() && qh.on();\n    },\n\n    /**\n     * removes the given handler from the collection, and calls it's destroy methods\n     *\n     * @param {object || function} handler the handler to remove\n     */\n    removeHandler : function(handler) {\n        var handlers = this.handlers;\n        each(handlers, function(h, i) {\n            if(h.equals(handler)) {\n                h.destroy();\n                return !handlers.splice(i,1); //remove from array and exit each early\n            }\n        });\n    },\n\n    /**\n     * Determine whether the media query should be considered a match\n     *\n     * @return {Boolean} true if media query can be considered a match, false otherwise\n     */\n    matches : function() {\n        return this.mql.matches || this.isUnconditional;\n    },\n\n    /**\n     * Clears all handlers and unbinds events\n     */\n    clear : function() {\n        each(this.handlers, function(handler) {\n            handler.destroy();\n        });\n        this.mql.removeListener(this.listener);\n        this.handlers.length = 0; //clear array\n    },\n\n    /*\n        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match\n        */\n    assess : function() {\n        var action = this.matches() ? 'on' : 'off';\n\n        each(this.handlers, function(handler) {\n            handler[action]();\n        });\n    }\n};\n\nmodule.exports = MediaQuery;\n\n},{\"3\":3,\"4\":4}],2:[function(require,module,exports){\nvar MediaQuery = require(1);\nvar Util = require(4);\nvar each = Util.each;\nvar isFunction = Util.isFunction;\nvar isArray = Util.isArray;\n\n/**\n * Allows for registration of query handlers.\n * Manages the query handler's state and is responsible for wiring up browser events\n *\n * @constructor\n */\nfunction MediaQueryDispatch () {\n    if(!window.matchMedia) {\n        throw new Error('matchMedia not present, legacy browsers require a polyfill');\n    }\n\n    this.queries = {};\n    this.browserIsIncapable = !window.matchMedia('only all').matches;\n}\n\nMediaQueryDispatch.prototype = {\n\n    constructor : MediaQueryDispatch,\n\n    /**\n     * Registers a handler for the given media query\n     *\n     * @param {string} q the media query\n     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers\n     * @param {function} options.match fired when query matched\n     * @param {function} [options.unmatch] fired when a query is no longer matched\n     * @param {function} [options.setup] fired when handler first triggered\n     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched\n     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers\n     */\n    register : function(q, options, shouldDegrade) {\n        var queries         = this.queries,\n            isUnconditional = shouldDegrade && this.browserIsIncapable;\n\n        if(!queries[q]) {\n            queries[q] = new MediaQuery(q, isUnconditional);\n        }\n\n        //normalise to object in an array\n        if(isFunction(options)) {\n            options = { match : options };\n        }\n        if(!isArray(options)) {\n            options = [options];\n        }\n        each(options, function(handler) {\n            if (isFunction(handler)) {\n                handler = { match : handler };\n            }\n            queries[q].addHandler(handler);\n        });\n\n        return this;\n    },\n\n    /**\n     * unregisters a query and all it's handlers, or a specific handler for a query\n     *\n     * @param {string} q the media query to target\n     * @param {object || function} [handler] specific handler to unregister\n     */\n    unregister : function(q, handler) {\n        var query = this.queries[q];\n\n        if(query) {\n            if(handler) {\n                query.removeHandler(handler);\n            }\n            else {\n                query.clear();\n                delete this.queries[q];\n            }\n        }\n\n        return this;\n    }\n};\n\nmodule.exports = MediaQueryDispatch;\n\n},{\"1\":1,\"4\":4}],3:[function(require,module,exports){\n/**\n * Delegate to handle a media query being matched and unmatched.\n *\n * @param {object} options\n * @param {function} options.match callback for when the media query is matched\n * @param {function} [options.unmatch] callback for when the media query is unmatched\n * @param {function} [options.setup] one-time callback triggered the first time a query is matched\n * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?\n * @constructor\n */\nfunction QueryHandler(options) {\n    this.options = options;\n    !options.deferSetup && this.setup();\n}\n\nQueryHandler.prototype = {\n\n    constructor : QueryHandler,\n\n    /**\n     * coordinates setup of the handler\n     *\n     * @function\n     */\n    setup : function() {\n        if(this.options.setup) {\n            this.options.setup();\n        }\n        this.initialised = true;\n    },\n\n    /**\n     * coordinates setup and triggering of the handler\n     *\n     * @function\n     */\n    on : function() {\n        !this.initialised && this.setup();\n        this.options.match && this.options.match();\n    },\n\n    /**\n     * coordinates the unmatch event for the handler\n     *\n     * @function\n     */\n    off : function() {\n        this.options.unmatch && this.options.unmatch();\n    },\n\n    /**\n     * called when a handler is to be destroyed.\n     * delegates to the destroy or unmatch callbacks, depending on availability.\n     *\n     * @function\n     */\n    destroy : function() {\n        this.options.destroy ? this.options.destroy() : this.off();\n    },\n\n    /**\n     * determines equality by reference.\n     * if object is supplied compare options, if function, compare match callback\n     *\n     * @function\n     * @param {object || function} [target] the target for comparison\n     */\n    equals : function(target) {\n        return this.options === target || this.options.match === target;\n    }\n\n};\n\nmodule.exports = QueryHandler;\n\n},{}],4:[function(require,module,exports){\n/**\n * Helper function for iterating over a collection\n *\n * @param collection\n * @param fn\n */\nfunction each(collection, fn) {\n    var i      = 0,\n        length = collection.length,\n        cont;\n\n    for(i; i < length; i++) {\n        cont = fn(collection[i], i);\n        if(cont === false) {\n            break; //allow early exit\n        }\n    }\n}\n\n/**\n * Helper function for determining whether target object is an array\n *\n * @param target the object under test\n * @return {Boolean} true if array, false otherwise\n */\nfunction isArray(target) {\n    return Object.prototype.toString.apply(target) === '[object Array]';\n}\n\n/**\n * Helper function for determining whether target object is a function\n *\n * @param target the object under test\n * @return {Boolean} true if function, false otherwise\n */\nfunction isFunction(target) {\n    return typeof target === 'function';\n}\n\nmodule.exports = {\n    isFunction : isFunction,\n    isArray : isArray,\n    each : each\n};\n\n},{}],5:[function(require,module,exports){\nvar MediaQueryDispatch = require(2);\nmodule.exports = new MediaQueryDispatch();\n\n},{\"2\":2}]},{},[5])(5)\n});\n\n//# sourceURL=webpack:///./src/js/lib/enquire.js?");

/***/ }),

/***/ "./src/js/modules/header.js":
/*!**********************************!*\
  !*** ./src/js/modules/header.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_enquire_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/enquire.js */ \"./src/js/lib/enquire.js\");\n/* harmony import */ var _lib_enquire_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_enquire_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n(function () {\r\n\r\n    //jQuery variables\r\n    const $menuItemsScroll          = $('.menu__item').not('.menu__home');\r\n    const $toggleMenuIconImg        = $('.toggle__img');\r\n    const $menuItemsHome            = $('.menu__home');\r\n\r\n    //variables\r\n    const typingSpace               = document.querySelector('.header__typing-animation');\r\n    const menuItems                 = document.querySelectorAll('.menu__item');\r\n\r\n    let toggleMenuActive = false;\r\n    let typedText = [\"Front-end.\",\"Node.js.\",\"JavaScript.\",\"MySQL.\",\"Python.\"];\r\n\r\n\r\n    /**\r\n     * @name    menuScroll\r\n     * @param   e - menu item click event\r\n     * @desc    Scrolls down to relevant section of the page after clicking on a menu item.\r\n     */\r\n    function menuScroll(e) {\r\n        let offset=0;\r\n        e.preventDefault();\r\n        const menuItemHref = $(e.target).attr(\"href\");\r\n        $(\"html, body\").animate(\r\n            {\r\n                \"scrollTop\" : $(menuItemHref).offset().top - offset\r\n            },\r\n            1000\r\n        );\r\n    }\r\n    /**\r\n     * @name    homeScroll\r\n     * @desc    Scrolls to the top of the page when logo is clicked (works only on home page).\r\n     */\r\n    function homeScroll(e) {\r\n        e.preventDefault();\r\n        $(\"html, body\").animate(\r\n            {\r\n                \"scrollTop\" : 0\r\n            },\r\n            500\r\n        );\r\n    }\r\n\r\n    /**\r\n     * @name        typingAnimation\r\n     * @desc        Function handles typing animation by invoking textTypingInterval function and separate setInterval to animate text cursor.\r\n     * @param       duration - duration of the typing animation [ms] including the time after a string is typed and a new animation is about to start.\r\n     *              Needs to be greater than typingDuration. Default value = 2500ms.\r\n     */\r\n    function typingAnimation(duration=2500) {\r\n        let i=0;\r\n        setInterval(function () {\r\n            $(typingSpace).toggleClass('header__typing-animation--active')\r\n        },400);\r\n        textTypingInterval(i);\r\n        setInterval(function () {\r\n            i++;\r\n            if(i>=typedText.length){\r\n                i=0;\r\n            }\r\n            textTypingInterval(i);\r\n        },duration);\r\n    }\r\n\r\n    /**\r\n     * @name        textTypingInterval\r\n     * @desc        Function animates the string from typedText array using setInterval.\r\n     *              It changes innerHTML of the typingSpace by adding subsequent characters at each interval step.\r\n     *              When typing animation is completed the interval is cleared.\r\n     * @param       index - index of the string from typedText array\r\n     * @param       typingDuration - duration of typing animation [ms] needs to be less than duration in typingAnimation function.\r\n     *              Default value = 800ms\r\n     */\r\n    function textTypingInterval(index,typingDuration=800) {\r\n        let j=0;\r\n        typingSpace.innerHTML=\"\";\r\n        const interval = setInterval(function () {\r\n           if(j<typedText[index].length){\r\n               typingSpace.innerHTML+=typedText[index].charAt(j);\r\n               j++;\r\n           }\r\n           else {\r\n               clearInterval(interval);\r\n           }\r\n       },typingDuration/typedText[index].length);\r\n    }\r\n\r\n    /**\r\n     * @name        registerMenu\r\n     * @desc        Function hides the menu bar links when width is less than 767px and shows when it is greater than 767px.\r\n     *              Uses enquire.js module.\r\n     */\r\n    function registerMenu() {\r\n        _lib_enquire_js__WEBPACK_IMPORTED_MODULE_0___default.a.register(\"screen and (max-width: 767px)\", {\r\n            match: function () {\r\n                $(menuItems).hide();\r\n                $toggleMenuIconImg.attr(\"src\",\"dist/img/icons/toggle-icon.png\");\r\n                toggleMenuActive=false;\r\n            },\r\n            unmatch: function () {\r\n                $(menuItems).show();\r\n            }\r\n        });\r\n    }\r\n\r\n    /**\r\n     * @name        toggleMenu\r\n     * @desc        Slide toggle animation for hamburger menu. Changes src attribute for menu icon image when icon is clicked.\r\n     */\r\n    function toggleMenu() {\r\n        $(menuItems).slideToggle();\r\n        if(toggleMenuActive){\r\n            $toggleMenuIconImg.attr(\"src\",\"dist/img/icons/toggle-icon.png\");\r\n            toggleMenuActive=false;\r\n        }\r\n        else {\r\n            $toggleMenuIconImg.attr(\"src\",\"dist/img/icons/toggle-icon-active.png\");\r\n            toggleMenuActive=true;\r\n        }\r\n    }\r\n\r\n    function eventHandler() {\r\n        $toggleMenuIconImg.on('click',toggleMenu);\r\n        $menuItemsScroll.on('click',function (e) {\r\n            menuScroll(e);\r\n        });\r\n        if($('#home-page').length){\r\n            $menuItemsHome.on('click',function (e) {\r\n                homeScroll(e);\r\n            });\r\n        }\r\n    }\r\n\r\n    function init() {\r\n        eventHandler();\r\n        registerMenu();\r\n        typingAnimation();\r\n    }\r\n\r\n    window.addEventListener(\"load\", init);\r\n})();\n\n//# sourceURL=webpack:///./src/js/modules/header.js?");

/***/ }),

/***/ "./src/js/modules/projects.js":
/*!************************************!*\
  !*** ./src/js/modules/projects.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/js/modules/projects.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ 0:
/*!************************************************************************************************************!*\
  !*** multi ./src/js/index.js ./src/js/modules/header.js ./src/js/modules/projects.js ./src/scss/main.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\n__webpack_require__(/*! ./src/js/modules/header.js */\"./src/js/modules/header.js\");\n__webpack_require__(/*! ./src/js/modules/projects.js */\"./src/js/modules/projects.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/main.scss */\"./src/scss/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/js/modules/header.js_./src/js/modules/projects.js_./src/scss/main.scss?");

/***/ })

/******/ });