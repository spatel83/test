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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadFeaturedStorySlider = loadFeaturedStorySlider;
exports.loadSliders = loadSliders;
/* jshint esversion: 6 */
/* eslint-env browser */
/* eslint-disable global-require */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
/* eslint-disable import/prefer-default-export */
/* eslint no-console: 0 */
/* eslint no-undef: 0 */

/**
 * Start Featured Story Slider
 */
function startFeaturedStorySlider() {
  $('.featured-story-slider').bxSlider({
    auto: true,
    pause: 9000,
    infiniteLoop: true,
    hideControlOnEnd: true,
    autoHover: true,
    autoStart: true,
    onSliderLoad: function sliderLoad() {
      $('.featured-stories .featured-story-slider li:nth-child(2)').addClass('activeSlide');
    },
    onSlideBefore: function slideBefore(slide) {
      $('li.slide.activeSlide.topSlide').removeClass('topSlide activeSlide');
      $(slide).addClass('topSlide');
      setTimeout(function () {
        $(slide).addClass('activeSlide');
      }, 0);
    }
  });
}

/**
 * Load Featured Story Slider.
 */
function loadFeaturedStorySlider() {
  var homeStories = document.querySelector('.home-features-stories-cont');
  if (homeStories !== null) {
    var featuredStoriesLoaded = false;
    var featuredStoryCheck = setInterval(function () {
      if (featuredStoriesLoaded === false) {
        var featuredStoryContainer = document.querySelector('.featured-story-slider');
        if (featuredStoryContainer !== null) {
          startFeaturedStorySlider();
          featuredStoriesLoaded = true;
          clearTimeout(featuredStoryCheck);
        }
      }
    }, 100);
  }
}

/**
 * Load Miscellaneous Sliders.
 */
function loadSliders() {
  $('.cbs-List li').addClass('clearfix');

  /**
   * VMS Wire Slider.
   */
  if ($('.home-VMS-slider').length > 0) {
    $('.home-VMS-slider').bxSlider({
      pager: false,
      infiniteLoop: false,
      hideControlOnEnd: true
    });
  }

  /**
   * Featured Application Slider.
   */
  if ($('.featured-app-slider').length > 0) {
    $('.featured-app-slider').bxSlider({
      pager: false,
      infiniteLoop: false,
      hideControlOnEnd: true
    });
  }

  /**
   * Item Slider.
   */
  if ($('.slides').length > 0) {
    $('.slides').bxSlider({
      pause: 7000,
      pager: false,
      infiniteLoop: false,
      auto: true
    });
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
/* eslint global-require: 0 */
/* esversion: 6 */

var vmsnetScripts = {};

/**
 * DOM content loaded events.
 */
vmsnetScripts.domLoaded = function () {
  /**
   * Google Analytics.
   */
  var googleAnalytics = __webpack_require__(3);
  googleAnalytics.loadGoogleAnalytics();

  /**
   * Spadeworx Scripts.
   */
  var spadeworxScripts = __webpack_require__(4);
  spadeworxScripts.loadSpadeworxScripts();

  /**
   * Breadcrumb.
   */
  var breadcrumbScript = __webpack_require__(5);
  var breadcrumb = document.querySelector('.breadcumb-sub-menu');
  if (breadcrumb !== null) {
    breadcrumbScript.loadBreadcrumb();
  }

  /**
   * Menu.
   */
  var menuScripts = __webpack_require__(6);
  var megaMenu = document.querySelector('.mega-menu-content');
  if (megaMenu !== null) {
    menuScripts.buildMenus();
  }

  /**
   *  Arrange Content.
   */
  var arrangeContentScripts = __webpack_require__(7);
  arrangeContentScripts.checkContentLayout();

  /**
   *  Featured Story Slider
   */
  var sliderScripts = __webpack_require__(0);
  sliderScripts.loadFeaturedStorySlider();

  /**
   * Varian Evacuation App.
   * Found on page: https://vmsnet.varian.com/corporateservices/global_workplace_solutions/Pages/Varian%20Evacuation%20Protocol.aspx
   */
  var safetyScript = __webpack_require__(8);
  var safetyDiv = document.getElementById('safety-app');
  if (safetyDiv !== null) {
    safetyScript.loadSafetyApp();
    console.log('safety app found.');
  }
};

/**
 * Window load events.
 */
vmsnetScripts.windowLoaded = function () {
  /**
   * Classification Calculator.
   * Found on page: https://vmsnet.varian.com/corporateservices/VIT/SecVal/InfoSec/Pages/Data-Governance-.aspx
   */
  var calculatorScript = __webpack_require__(9);
  var calculatorDiv = document.getElementById('classification-calculator');
  if (calculatorDiv !== null) {
    calculatorScript.classificationCalculator();
  }

  /**
   * Stock Ticker.
   */
  var stockScript = __webpack_require__(10);
  var stockTickerDiv = document.querySelector('.wd_widget');
  if (stockTickerDiv !== null) {
    stockScript.loadStockTicker();
  }

  /**
   * Clock
   */
  var clockScript = __webpack_require__(11);
  clockScript.startClock();

  /**
   * Additional Sliders.
   */
  var sliderScripts = __webpack_require__(0);
  sliderScripts.loadSliders();

  /**
   * Scroll Events.
   */
  var scrollScripts = __webpack_require__(12);
  scrollScripts.loadScrollEvents();
};

document.addEventListener('DOMContentLoaded', function () {
  vmsnetScripts.domLoaded();
});

window.addEventListener('load', function () {
  vmsnetScripts.windowLoaded();
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGoogleAnalytics = loadGoogleAnalytics;
/* eslint no-unused-expressions: 0 */
/* eslint import/prefer-default-export: 0 */

/**
 * Google Analytics
 */
function loadGoogleAnalytics() {
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-71005337-1', 'auto');
  ga('send', 'pageview');
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadSpadeworxScripts = loadSpadeworxScripts;
/* jshint esversion: 6 */
/* eslint no-unused-expressions: 0 */
/* eslint import/prefer-default-export: 0 */
/* eslint no-undef: 0 */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
/* eslint no-underscore-dangle: 0 */
/* eslint max-len: 0 */
/* eslint func-names: 0 */
/* eslint no-console: 0 */
/* Sanjay Patel */

/**
 * Spadeworx Scripts.
 *
 * Cleaned up a bit to be easier to read, more reusable and ES6-ish compliant,
 * but left most of the original comments, particularly the "searchOverride"
 * method.
 */

function loadSpadeworxScripts() {
  /**
   * The search suggestions functionality in SharePoint 2013 is provided by
   * ajaxtoolkit.js. In order to extend the existing functionality I had to
   * override the _update function of the
   * AjaxControlToolkit.AutoCompleteBehavior.prototype which is responsible for
   * the search as you type functionality of the search box.
   */
  function searchOverride() {
    /**
     * Keep a copy of the original function
     */
    AjaxControlToolkit.AutoCompleteBehavior.prototype._update2 = AjaxControlToolkit.AutoCompleteBehavior.prototype._update;

    /**
     * Highlight Search Term.
     *
     * @param {string} picUrl
     *   Picture URL used for autocomplete search results.
     * @param {string} fullName
     *   Full name of the person found for autocomplete search results.
     * @param {string} prefixText
     *   Prefix text.
     *
     * @return {string} divElement
     *   HTML for the particular autocomplete search result.
     */
    function buildSearchResult(picUrl, fullName, prefixText) {
      /**
       * Add highlighting of the search term.
       */
      var index = fullName.toLowerCase().indexOf(prefixText.toLowerCase());
      var userName = '';
      var divElement = '';

      if (index >= 0) {
        userName = fullName.substr(0, index) + '<b>' + fullName.substr(index, prefixText.length) + '</b>' + fullName.substr(index + prefixText.length);
      } else {
        userName = fullName;
      }

      divElement = '<div class="item">\n        <div class="id">\n          <div class="ms-tableCell ms-verticalAlignTop">\n            <div class="ms-peopleux-userImgDiv">\n              <div class="ms-imnSpan">\n                <div style="width: 36px; height: 30px;" id="ImgPicSpan1" class="ms-peopleux-userImgWrapper ms-subtleLink ms-peopleux-imgUserLink"><img style="cliptop: 0px; clipright: 36px; clipbottom: 36px; clipleft: 0px; min-height: 30px; max-height:30px; min-width: 30px; max-width: 30px;" id="PictureDiv1" class="ms-peopleux-userImg" src="' + picUrl + '"/></div>\n              </div>\n            </div>\n          </div>\n          <div id="PersonNameDiv" class="ms-tableCell ms-verticalAlignTop" >\n            <div>' + userName + '</div>\n          </div>\n        </div>\n      </div>';

      return divElement;
    }

    /**
     * Format Autocomplete Results.
     *
     * @param {object} results
     *   Autocomplete results object.
     *
     * @return {array} names
     *   Array of all of the people found for autocomplete results.
     */
    function formatAutocompleteResults(results, prefixText) {
      var names = [];
      var fullName = null;
      var picUrl = null;
      var divElement = null;

      for (var i = 0; i < results.length; i++) {
        picUrl = '/Style%20Library/VMSNet/images/Anniversaries/person.gif';
        if (results[i].Cells.results[2].Value !== null) {
          picUrl = results[i].Cells.results[2].Value;
        }
        fullName = results[i].Cells.results[3].Value;
        divElement = buildSearchResult(picUrl, fullName, prefixText);
        names.push(divElement);
      }
      return names;
    }

    /**
     * Format Autocomplete Results With Pictures.
     *
     * @param {object} results
     *   Autocomplete results object.
     *
     * @return {array} names
     *   Array of all of the people found for autocomplete results.
     */
    function formatAutocompleteResutlsWithPictures(results, prefixText) {
      var names = [];
      var fullName = null;
      var userName = null;
      var index = null;
      var picUrl = null;
      var divElement = null;

      for (var i = 0; i < results.length; i++) {
        fullName = results[i].Cells.results[3].Value;
        index = fullName.toLowerCase().indexOf(prefixText.toLowerCase());

        if (index >= 0) {
          userName = fullName.substr(0, index) + '<b>' + fullName.substr(index, prefixText.length) + '</b>' + fullName.substr(index + prefixText.length);
        }

        if (results[i].Cells.results[4].Value.indexOf('Person.aspx?accountname') > -1) {
          picUrl = '/Style%20Library/VMSNet/images/Anniversaries/person.gif';
          if (results[i].Cells.results[2].Value !== null) {
            picUrl = results[i].Cells.results[2].Value;
          }
          divElement = buildSearchResult(picUrl, fullName, prefixText);
          names.push(divElement);
        } else {
          names.push(userName);
        }
      }
      return names;
    }

    /**
     * Register the searchOnSuccess on the same prototype object in order for
     * the update2 function to keep the context with all variables.
     */
    AjaxControlToolkit.AutoCompleteBehavior.prototype.searchOnSuccess = function (data, prefixText, completionItems, cacheResults) {
      var results = null;
      var names = null;

      if (data.d) {
        if ($('a[id$="csr_NavButton"]').text() === 'People') {
          if (data.d.query) {
            results = data.d.query.PrimaryQueryResult.RelevantResults.Table.Rows.results;
          }
          names = formatAutocompleteResults(results, prefixText);
        } else {
          results = data.d.query.PrimaryQueryResult.RelevantResults.Table.Rows.results;
          names = formatAutocompleteResutlsWithPictures(results, prefixText);
        }
      } else if (data.d.postquery) {
        results = data.d.postquery.PrimaryQueryResult.RelevantResults.Table.Rows.results;
      } else {
        throw 'Results not found';
      }

      /**
       * Put our results in the people name container as we're not using it on our page
       */
      completionItems.set_peopleNames(names);
      /**
       * Call the original update function which renders out the results.
       */
      this._update2(prefixText, completionItems, cacheResults);
    };

    /**
     * Register an overload update function which executes a real search.
     */
    AjaxControlToolkit.AutoCompleteBehavior.prototype._update = function (prefixText, completionItems, cacheResults) {
      var context = this;
      var prefixTextWithAll = prefixText + '*';
      var queryUrl = '/_api/search/query?rowlimit=15&querytext=\'' + prefixTextWithAll + '\'&sourceid=\'2e49acca-b037-413c-a140-f62c5938e7d8\'&refinementfilters=\'title:phrase(%22' + prefixTextWithAll + '%22)\'&fprequerysuggestions=true&selectproperties=\'PictureURL, Title, Path\'';

      $.ajax({
        /**
         * Get top 5 results searching only on title field. Other paramaters can
         * be added as well query term is what the user has entered with a
         * wildcard appended.
         */
        url: queryUrl,
        method: 'GET',
        headers: {
          accept: 'application/json;odata=verbose;charset=utf-8'
        },
        success: function success(data) {
          context.searchOnSuccess(data, prefixText, completionItems, cacheResults);
        },
        error: function error(_error) {
          console.warn('Warning: ' + _error);
        }
      });
    };
  }

  /**
   * Override Share Point OOB Autopopulate Search.
   * Make sure ajaxtoolkit is loaded before registering the functions.
   */
  ExecuteOrDelayUntilScriptLoaded(searchOverride, 'ajaxtoolkit.js');

  /**
   * PDF Preview.
   */
  function pdfPreview() {
    SP.SOD.executeOrDelayUntilScriptLoaded(function () {
      filePreviewManager.previewers.extensionToPreviewerMap.pdf = [embeddedWACPreview, WACImagePreview];
      embeddedWACPreview.dimensions.pdf = {
        width: 379,
        height: 252
      };
    }, 'filepreview.js');
    notifyScriptsLoadedAndExecuteWaitingJobs('VMSNet.pdfpreviews/previews.js');
  }

  var searchContainer = document.querySelector('.search-result-cont');
  if (searchContainer !== null) {
    pdfPreview();
  }

  /**
   * Check Refinement Panel
   */
  function checkRefinementPanel() {
    if ($(window).width() <= 567 && $('.search-result-cont .refinement-btn').length > 0) {
      $('#refinementPanel').addClass('fastTransition closed');
      $('.contact-details').toggleClass('wide');
      setTimeout(function () {
        $('#refinementPanel').removeClass('fastTransition');
      }, 300);
    }
  }

  var refinementPanel = document.getElementById('refinementPanel');
  if (refinementPanel !== null) {
    checkRefinementPanel();
  }

  /**
   * Check Contact Lists.
   */
  function checkContactLists() {
    var _this = this;

    $('body').on('click', '#longContactList .ms-ref-refinername', function () {
      $(_this).parents('#longContactList').siblings('#LessLinkContact').toggle();
    });
    $('body').on('click', '#shortContactList .ms-ref-refinername', function () {
      $(_this).parents('#shortContactList').siblings('#MoreLinkContact').toggle();
    });
  }

  var contactList = document.getElementById('#longContactList');
  if (contactList !== null) {
    checkContactLists();
  }

  /**
   * Hide Refinement Panel.
   */
  window.HideRefinementPanel = function () {
    $('#refinementPanel').toggleClass('closed');
    $('.contact-details').toggleClass('wide');
    $('#refinementLink p').toggleClass('closed');
  };

  /**
   * Show Less Contact.
   */
  window.ShowLessContact = function (parentNode) {
    $('#longContactList').css('display', 'none');
    $('#shortContactList').css('display', 'block');
    $('#shortContactList').find('#UnselectedSection').css('display', 'block');
    $('#shortContactList').find('#refinerExpandCollapseArrow').attr('class', 'ms-ref-uparrow');
    $('#MoreLinkContact').css('display', 'block');
    $('#LessLinkContact').css('display', 'none');
  };

  /**
   * Show More Contact.
   */
  window.ShowMoreContact = function (parentNode) {
    $('#shortContactList').css('display', 'none');
    $('#longContactList').css('display', 'block');
    $('#longContactList').find('#UnselectedSection').css('display', 'block');
    $('#longContactList').find('#refinerExpandCollapseArrow').attr('class', 'ms-ref-uparrow');
    $('#MoreLinkContact').css('display', 'none');
    $('#LessLinkContact').css('display', 'block');
  };

  /**
   * Get Category.
   */
  window.GetCategory = function (elem, categories) {
    var categoriesList = categories.split(';');
    var wireDescription = $(elem).closest('.wire-description');
    var wireListItem = $(elem).closest('li');
    var initWidth = wireDescription.width();
    var aTag = '';
    var url = '';
    var addedWidth = $(elem).prev().width() + 5;

    for (var index = 1; index < categoriesList.length && index <= 5; index++) {
      aTag = document.createElement('a');
      url = '/News/Pages/ArticleArchive.aspx?Category=' + categoriesList[index] + '&#k=' + categoriesList[index];
      aTag.href = url;
      $(elem).parent().append(', ');
      elem.parentNode.appendChild(aTag);
      aTag.innerHTML = categoriesList[index];
      addedWidth += $(aTag).width() + 5;
      $(aTag).css({
        opacity: 0
      }).delay(100 + index * 50).animate({
        opacity: 1
      }, 150);
    }

    /**
     * Check to make sure the initial width is less than the new width. If new
     * width is larger, expand wire stories.  If not, keep the same size.
     */
    if (initWidth < addedWidth + 100) {
      wireDescription.animate({
        width: addedWidth + 100
      }, 200);
      wireListItem.animate({
        width: addedWidth + 267
      }, 200);
    }
    $(elem).remove();
  };

  /**
   * Set the SearchBox to dynamic width if category is not present.
   */
  if ($('header #SearchBox').find('.ms-srch-sb-navLink').length === 0) {
    $('header #SearchBox').addClass('no_category');
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadBreadcrumb = loadBreadcrumb;
/* jshint esversion: 6 */
/* eslint-env browser */
/* eslint-disable global-require */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
/* eslint-disable import/prefer-default-export */
/* eslint no-undef: 0 */

function loadBreadcrumb() {
  /**
   * Breadcrumb reset.
   */
  document.addEventListener('click', function () {
    if ($('.breadcumb-sub-menu').hasClass('open')) {
      $('.breadcumb-sub-menu').removeClass('open');
      $('.breadcumb-main-menu .down-arrow').removeClass('open');
    }
  });

  /**
   * Breadcrumb dropdown functionality.
   */
  $(document).on('click', '.breadcumb-main-menu .down-arrow', function toggleBreadcrumb(event) {
    if ($(this).closest('li').find('.breadcumb-sub-menu').hasClass('open')) {
      $('.breadcumb-main-menu .down-arrow').removeClass('open');
      $('.breadcumb-sub-menu').removeClass('open');
    } else {
      $('.breadcumb-sub-menu').removeClass('open');
      $('.breadcumb-main-menu .down-arrow').removeClass('open');
      $(this).addClass('open');
      $(this).closest('li').find('.breadcumb-sub-menu').addClass('open');
    }
    event.stopPropagation();
  });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.megaMenu = megaMenu;
exports.stickyMegaMenu = stickyMegaMenu;
exports.responsiveMenu = responsiveMenu;
exports.buildMenus = buildMenus;
/* jshint esversion: 6 */
/* eslint-env browser */
/* eslint-disable global-require */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
/* eslint-disable import/prefer-default-export */
/* eslint no-console: 0 */
/* eslint no-undef: 0 */

/**
 * Mega Menu
 */
function megaMenu() {
  /**
   * Remove Transition Class.
   *
   * @param {string} item
   *   Current menu item being hovered.
   */
  function removeTransitionClass(item) {
    setTimeout(function () {
      item.removeClass('transitioning');
    }, 300);
  }

  var hoverConfig = {
    sensitivity: 3,
    intervale: 500,
    timeout: 0,
    over: function hoverOver() {
      if ($(window).width() > 719) {
        if ($(this).attr('class') !== 'home') {
          $(this).addClass('open');
          $(this).children('a').addClass('active');
        }
      }
    },
    out: function hoverOut() {
      if ($(window).width() > 719) {
        removeTransitionClass($(this));
        $(this).addClass('transitioning');
        $(this).removeClass('open');
        $(this).children('a').removeClass('active');
      }
    }
  };

  $('.mega-menu-content ul#main-nav li').hoverIntent(hoverConfig);
}

/**
 * Sticky Mega Menu.
 */
function stickyMegaMenu() {
  var deltaStatusHeight = 0;
  var menuPosition = null;
  var workspaceTop = null;
  var resizing = false;
  var scrolling = false;

  /**
   * Check Dimensions
   */
  function checkDimensions() {
    /**
     * Get the height of the ribbon.
     */
    if ($('#ms-designer-ribbon').length > 0 && $('#ms-designer-ribbon').css('display') !== 'none') {
      $('section.mega-menu-cont').addClass('ribbon-active');
    }

    /**
     * Get the height of the status bar (Checked in/Checked out/etc).
     */
    if ($('#DeltaPageStatusBar').length > 0) {
      deltaStatusHeight = $('#DeltaPageStatusBar').height();
    }
  }

  /**
   * Sticky Check.
   */
  function stickyCheck() {
    menuPosition = $('section.mega-menu-cont').position().top;
    if (menuPosition + deltaStatusHeight < workspaceTop && $(window).width() > 719) {
      $('section.mega-menu-cont, section.main-search-cont').addClass('sticky');
    } else {
      $('section.mega-menu-cont, section.main-search-cont').removeClass('sticky');
    }
  }

  /**
   * Sticky Scroll Events.
   */
  function stickyScrollEvents() {
    var workspace = document.getElementById('s4-workspace');
    var scrollTimeout = void 0;

    function scrollThrottler() {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(function () {
          scrollTimeout = null;
          if (workspace !== null) {
            workspaceTop = workspace.scrollTop;
            stickyCheck();
          }
        }, 20);
      }
    }

    workspace.addEventListener('scroll', scrollThrottler, false);
  }

  /**
   * Sticky Window Resize Events.
   */
  function stickyResizeEvents() {
    var resizeTimeout = void 0;
    function resizeThrottler() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null;
          if ($(window).width() > 719) {
            checkDimensions();
            setTimeout(function () {
              stickyCheck();
            }, 10);
          }
        }, 66);
      }
    }
    window.addEventListener('resize', resizeThrottler, false);
  }

  /**
   * Initialize Sticky Menu.
   */
  function initStickyMenu() {
    checkDimensions();
    stickyCheck();
    stickyScrollEvents();
    stickyResizeEvents();

    /**
     * Check to see if the user is on the search page.
     */
    if ($('.search-result-cont').length > 0) {
      $('section.mega-menu-cont').addClass('search-page');
    }
  }

  initStickyMenu();
}

/**
 * Responsive Menu.
 */
function responsiveMenu() {
  var overlayOpen = false;
  var currentMenu = 'none';

  /**
   * Close Everything
   */
  function closeEverything() {
    $('.user-control-panel').removeClass('open');
    $('.dropDownCont').removeClass('user-open');
    $('.main-search-cont').removeClass('open');
    $('.menu-overlay').removeClass('open');
    $('.mega-menu-cont').removeClass('open');
    $('.mega-menu-content ul#main-nav li').removeClass('open');
    overlayOpen = false;
  }

  /**
   * Toggle Menu
   *
   * @param menuItem
   *  The current menu item.
   */
  function toggleMenu(menuItem) {
    console.log(menuItem);
    if (overlayOpen === false) {
      $('.' + menuItem).toggleClass('open');
      $('.menu-overlay').toggleClass('open');
      overlayOpen = true;
      currentMenu = menuItem;
    } else if (currentMenu === menuItem) {
      closeEverything();
    } else {
      $('.' + currentMenu).removeClass('open');
      setTimeout(function () {
        $('.' + menuItem).toggleClass('open');
        currentMenu = menuItem;
      }, 300);
    }
  }

  /**
   * Responsive Window Resize Events.
   */
  function responsiveResizeEvents() {
    var resizeTimeout = void 0;
    function resizeThrottler() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null;
          if ($(window).width() > 719) {
            closeEverything();
          }
        }, 66);
      }
    }
    window.addEventListener('resize', resizeThrottler, false);
  }

  /**
   * Initialize Responsive Menu.
   */
  function initResponsiveMenu() {
    var menuNavigationButtons = document.querySelectorAll('.mega-menu-content > ul#main-nav > li > a');

    if (menuNavigationButtons !== null) {
      [].forEach.call(menuNavigationButtons, function (menuButton) {
        menuButton.addEventListener('click', function () {
          menuButton.parentNode.classList.toggle('open');
        }, false);
        menuButton.addEventListener('touchstart', function () {
          menuButton.parentNode.classList.toggle('open');
        }, false);
      });
    }

    $('.menu-overlay').on('click touchstart', function () {
      closeEverything();
    });

    $('.header .top-buttons .user').on('click touchstart', function () {
      toggleMenu('user-control-panel');
    });

    $('.header .top-buttons .search').on('click touchstart', function () {
      toggleMenu('main-search-cont');
    });

    $('.header .top-buttons .menu').on('click touchstart', function () {
      toggleMenu('mega-menu-cont');
    });

    closeEverything();
    responsiveResizeEvents();
  }

  initResponsiveMenu();
}

/**
 * Build Menus
 */
function buildMenus() {
  var megaMenuContainer = document.querySelector('.mega-menu-cont');

  if (megaMenuContainer !== null) {
    var hoverIntentLoaded = false;
    var hoverIntentCheck = setInterval(function () {
      if (hoverIntentLoaded === false) {
        var hoverIntentScript = $('script[src*="jquery.hoverIntent.minified.js"]');
        if (hoverIntentScript.length > 0) {
          megaMenu();
          hoverIntentLoaded = true;
          clearTimeout(hoverIntentCheck);
        }
      }
    }, 50);
  }

  window.addEventListener('load', function () {
    if (megaMenuContainer !== null) {
      stickyMegaMenu();
      responsiveMenu();
      megaMenu();
    }
  });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkContentLayout = checkContentLayout;
/* jshint esversion: 6 */
/* eslint-env browser */
/* eslint-disable global-require */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
/* eslint-disable import/prefer-default-export */
/* eslint no-console: 0 */

/* eslint no-undef: 0 */

/**
 * Check Content Layout
 */
function checkContentLayout() {
  /**
   * Check Events
   *
   * @return {bool} hideEvents
   *   Returns true if events are hidden.
   */

  function checkEvents() {
    var hideEvents = false;

    if ($('.events-bg .ms-hide').parents().eq(4).hasClass('events-bg') || $('.events-bg').children().children().children().is('menu.ms-hide') || $('.events-bg').children().children().children().length === 0) {
      hideEvents = true;
      $('.events-bg').hide();
    }

    return hideEvents;
  }

  /**
   * Check People
   *
   * @return {bool} hidePeople
   *   Returns true if people are hidden.
   */
  function checkPeople() {
    var hidePeople = false;

    if ($('.varian-people-bg .ms-hide').parents().eq(4).hasClass('varian-people-bg') || $('.varian-people-bg').children().children().children().is('menu.ms-hide') || $('.varian-people-bg').children().children().children().length === 0) {
      hidePeople = true;
      $('.varian-people-bg').hide();
    }

    return hidePeople;
  }

  /**
   * Adjust Stocker Ticker
   */
  function adjustWireStories() {
    if ($('#stock_widget_container').length === 0 && $('.site-stories-cont').children().children().children().length === 0 && $('.home-stories-cont').children().children().children().length === 0) {
      $('.vmsNet-wire-cont').hide();
    }
  }

  /**
   * Adjust Notices Container.
   */
  function adjustNoticesContainer(pageType) {
    var noticesContainer = document.querySelector('.notices-cont');
    var offset = pageType === 'business-unit' ? 22 : 0;
    var railHeight = 0;

    if (noticesContainer !== null) {
      noticesContainer.style.height = '400px';

      var border = document.querySelector('.notices-cont .ms-WPBorderBorderOnl');
      var msField = document.querySelector('.notices-cont .ms-rtestate-field');

      if (msField !== null) {
        msField.style.padding = '10px';
        msField.style.paddingTop = '0px';
        msField.style.height = '370px';
        railHeight = 370 + offset;

        if (border !== null) {
          msField.style.height = '382px';
          msField.style.padding = '10px';
          railHeight = 382;
        }

        msField.classList.add('notice-scroll');
        $('.notice-scroll').slimScroll({
          alwaysVisible: false,
          railVisible: true,
          height: railHeight,
          size: '10px',
          borderRadius: '0px',
          railBorderRadius: '0px',
          distance: '0px'
        });
      }
    }
  }

  /**
   * Check Gateway Page.
   */
  function checkGatewayPage() {
    var homepage = document.querySelector('.home-cont');
    var ceoUpdate = document.querySelector('.ceo-update-block');
    var location = document.querySelector('.location-cont');

    if (homepage === null && ceoUpdate === null && location === null) {
      var hidePeople = checkPeople();
      var hideEvents = checkEvents();

      if (hidePeople === true && hideEvents === true) {
        if ($('.notices-cont').next().hasClass('varian-people-bg') && $('.notices-cont').next().next().hasClass('events-bg')) {
          adjustNoticesContainer('corporate-services');
        } else if ($('.notices-cont').prev().hasClass('events-bg') && $('.notices-cont').prev().prev().hasClass('varian-people-bg')) {
          adjustNoticesContainer('business-unit');
        }
      }
    }
  }

  /**
   * Check Org Chart Zone.
   */
  function checkOrgChartZone() {
    var _this = this;

    $('.org-char-cont .ms-hide').each(function () {
      if ($(_this).parents().eq(4).hasClass('org-char-cont') || $(_this).parents().eq(5).hasClass('org-char-cont')) {
        $(_this).parent().hide();
      }
    });

    if ($('.org-char-cont').children().children().children().children().length === 0 || $('.org-char-cont').children().children().children().children().children().length === $('.org-char-cont .ms-hide').length) {
      $('.org-char-cont').hide();
    }

    $('.org-char-cont .iconPDF').parents().eq(4).css({
      background: 'none',
      padding: 0
    });

    $('.org-char-cont .iconPPT').parents().eq(4).css({
      background: 'none',
      padding: 0
    });

    $('.org-char-cont .iconPPT, .org-char-cont .iconPDF').parent().parent().css({
      marginTop: '-10px'
    });
  }

  /**
   * Check Content Types.
   *
   * Iterate through all of the different webpart content types and check to see
   * if the number of hidden web parts is the same as the number of webparts for
   * that particular zone.  If so, then hide the whole zone.
   */
  function checkContentTypes() {
    var _this2 = this;

    var contentTypes = ['.how-do-i', '.referrals', '.featured-application', '.management-team-cont', '.notices-cont'];

    var _loop = function _loop(i) {
      if ($(contentTypes[i] + ' .ms-hide').length >= 1 || $(contentTypes[i]).children().children().children().length === 0 || $(contentTypes[i]).children().children().children().is('menu.ms-hide')) {
        if ($(contentTypes[i]).children().children().children().children().length === $(contentTypes[i] + ' .ms-hide').length || $(contentTypes[i]).children().children().children().length === 0 || $(contentTypes[i]).children().children().children().is('menu.ms-hide')) {
          $(contentTypes[i]).hide();
        } else {
          $(contentTypes[i] + ' .ms-hide').each(function () {
            if ($(_this2).parents().eq(4).hasClass(contentTypes[i])) {
              $(_this2).parent().hide();
            }
          });
        }
      }
    };

    for (var i = 0; i < contentTypes.length; i++) {
      _loop(i);
    }
  }

  /**
   * Convert Date.
   *
   * @param {string} publishDate
   *   Article publish date in DD/MM/YYYY format.
   *
   * @return {string}
   *   Converted date in DD Month YY format.
   */
  function dateConversion(publishDate) {
    var convertDate = publishDate.replace(/[\n\t\s ]/g, '');
    var newDate = new Date(convertDate);
    if (publishDate === '') {
      return 'DD MMM YY';
    }
    newDate = newDate.format('dd MMM yy');
    return newDate;
  }

  /**
   * Adjust Article Image Block.
   */
  function adjustArticleImageBlock() {
    var articleImage = document.querySelector('.article-block .article-img-block img');
    var articleImageBlock = document.querySelector('.article-block .article-img-block');
    var articleDate = document.getElementById('dvPublishDate');

    if (articleImage === null && articleImageBlock !== null) {
      $(articleImageBlock).hide();
    }

    if (articleDate !== null) {
      var newDate = dateConversion(articleDate.innerText);
      articleDate.innerText = newDate;
    }
  }

  /**
   * Collapsible List.
   */
  function collapsibleList() {
    var collapsibleToggle = document.querySelectorAll('span.toggle_button');
    if (collapsibleToggle !== null) {
      Array.prototype.forEach.call(collapsibleToggle, function (toggleButton) {
        toggleButton.addEventListener('click', function () {
          toggleButton.parentNode.classList.toggle('collapsed');
        });
      });
    }
  }

  /**
   * Custom Checkboxes.
   */
  function customCheckboxes() {
    var checkBoxes = document.querySelectorAll('.tab_contents input[type="checkbox"]');
    if (checkBoxes !== null) {
      [].forEach.call(checkBoxes, function (checkBox) {
        var spanWrap = document.createElement('span');
        spanWrap.classList.add('custom-checkbox');
        checkBox.parentElement.insertBefore(spanWrap, checkBox);
        spanWrap.append(checkBox);

        if (checkBox.checked) {
          checkBox.parentNode.classList.add('selected');
        }

        checkBox.addEventListener('click', function () {
          checkBox.parentNode.classList.toggle('selected');
        });
      });
    }
  }

  /**
   * Start MyVMSNet.
   */
  function startMyVMSNet() {
    var _this3 = this;

    $(document).on('click', '#edit_vms', function () {
      $('.nav-tabs li:first-child a').addClass('edit_mode');
      $('#tab_1_contents').addClass('edit_mode');
    });

    $(document).on('click', '#done_vms', function () {
      $('.nav-tabs li:first-child a').removeClass('edit_mode');
      $('#tab_1_contents').removeClass('edit_mode');
    });

    $(document).on('click', '#add-tab a', function () {
      $(_this3).addClass('edit_mode');
      $('#tab_4_contents').addClass('edit_mode');
    });

    $(document).on('click', '#tab_4_contents .actions a', function () {
      $('#tab_4_contents').removeClass('edit_mode');
      $('add-tab a').removeClass('edit_mode');
    });
  }

  /**
   * Start User Controls.
   */
  function startUserControls() {
    var userControls = document.querySelector('.user-control');
    if (userControls !== null) {
      userControls.addEventListener('click', function () {
        $('.user-control-panel').toggleClass('open');
        $('.user-control').find('p').toggleClass('arrow-down');
        $('.dropDownCont').toggleClass('user-open');
      });
    }
  }

  /**
   * How Do I
   */
  function howDoI() {
    var questions = document.querySelectorAll('.how-do-i-questions select');
    var answer = document.querySelector('article.answer');

    if (questions !== null) {
      [].forEach.call(questions, function (question) {
        question.addEventListener('change', function () {
          answer.classList.remove('show');
          setTimeout(function () {
            answer.classList.add('show');
          }, 50);
        });
      });
    }
  }

  /**
   * Article Comments.
   */
  function articleComments() {
    var comments = document.querySelector('.comments-section');
    if (comments !== null) {
      $('.show-comments').toggleClass('comments-arrow-down');
      $('.show-comments').on('click', function () {
        $('.comments-section').toggleClass('hide-comments');
        $('.show-comments span').toggleClass('comments-arrow-down');
      });
    }

    /**
     * Show More
     */
    window.Toggle = function toggleText() {
      if ($('#introText').length > 0) {
        $('#introText').slimScroll({
          railVisible: true,
          height: 'auto',
          size: '10px',
          borderRadius: '0px',
          railBorderRadius: '0px',
          distance: '0px'
        });
        $('.slimScrollDiv').css('height', 'auto');
      }

      if ($('#gatewayIntroText').length > 0) {
        $('#gatewayIntroText').slimScroll({
          railVisible: true,
          height: 'auto',
          size: '10px',
          borderRadius: '0px',
          railBorderRadius: '0px',
          distance: '0px'
        });
        $('.slimScrollDiv').css('height', 'auto');
      }

      $('#introAnchor').hide();
    };
  }

  /**
   * Intro Text
   */
  function introText() {
    if ($('#introText').length > 0) {
      if ($('#introText').children('div').height() > 190) {
        $('#intro').append('<a onclick="Toggle()" id="introAnchor">More +</a>');
      } else {
        $('#introAnchor').hide();
      }
    }
    if ($('#gatewayIntroText').length > 0) {
      if ($('#gatewayIntroText').children('div').height() > 190) {
        $('#intro').append('<a onclick="Toggle()" id="introAnchor">More +</a>');
      } else {
        $('#introAnchor').hide();
      }
    }
  }

  /**
   * Wire Stories.
   */
  function wireStories() {
    var _this4 = this;

    if ($('.site-stories').length > 0 && $('.home-stories').length > 0) {
      $('.site-stories').on('click', function () {
        $(_this4).addClass('select');
        $('.home-stories').removeClass('select');
        $('.site-stories-cont').show();
        $('.home-stories-cont').hide();
        $('.site-stories-cont .bx-viewport').css('height', '100px');
      });

      $('.home-stories').on('click', function () {
        $(_this4).addClass('select');
        $('.site-stories').removeClass('select');
        $('.site-stories-cont').hide();
        $('.home-stories-cont').show();
        $('.home-stories-cont .bx-viewport').css('height', '100px');
      });

      if (!$('.home-stories').hasClass('select')) {
        $('.home-stories').addClass('deafult_unselect');
      } else if (!$('.site-stories').hasClass('select')) {
        $('.site-stories').addClass('deafult_unselect');
      }
    }
  }

  /**
   * Wire Category.
   */
  function wireCatagory() {
    var _this5 = this;

    if ($('.site-stories').length > 0 || $('.home-stories').length > 0 || $('.wire-category .category-expand').length > 0) {
      var tabCounter = 0;
      $(document).on('click', '.home-stories, .site-stories', function () {
        if ($(_this5).hasClass('deafult_unselect')) {
          tabCounter += 1;
        }
        if (tabCounter === 1) {
          $('.wire-category').each(function () {
            if ($(_this5).parent('div').height() > 12) {
              $(_this5).closest('li').width($(_this5).closest('li').width() + $(_this5).width());
              $(_this5).closest('.wire-description').width($(_this5).closest('.wire-description').width() + $(_this5).width());
            }
          });
        }
      });
    }
  }

  /**
   * Update More Search Text.
   */
  function updateMoreSearchText() {
    if ($('ms-srch-group-link a') !== null) {
      $('.ms-srch-group-link a').text('Show All People Results');
      $('.ms-srch-group-link a').attr('title', 'Show All People Results...');
    }
  }

  /**
   * Initialize Content.
   *
   * Used to rearrange and adjust templates as needed as well as set up
   * miscellanious event listenrs used throughout the site.
   */
  function initContent() {
    var msHide = document.querySelectorAll('.ms-hide');

    /**
     * Place the Yellow ribbon after the header.
     */
    $('#s4-workspace').prepend($('#DeltaPageStatusBar'));

    if (msHide.length > 0) {
      /**
       * Hide all right section web parts that are marked as "hidden".
       */
      if ($('.ms-hide').closest('.right-section')) {
        $('.right-section .ms-hide').parent().hide();
      }
      checkContentTypes();
      checkOrgChartZone();
      checkGatewayPage();
    }

    adjustArticleImageBlock();
    adjustWireStories();
    collapsibleList();
    customCheckboxes();
    howDoI();
    articleComments();
    startMyVMSNet();
    startUserControls();

    /**
     * Window Load Events.
     */
    window.addEventListener('load', function () {
      introText();
      wireStories();
      wireCatagory();
      updateMoreSearchText();
    });
  }
  initContent();
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadSafetyApp = loadSafetyApp;
/* jshint esversion: 6 */
/* eslint-env browser */
/* eslint-disable global-require */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
/* eslint-disable import/prefer-default-export */
/* eslint no-console: 0 */

function loadSafetyApp() {
  /**
   * Build Map Markup
   *
   * @param string mapsData
   *   JSON representation of the safety map data.
   *
   * @return string
   *   Returns markup used for maps.
   */
  function buildMapMarkup(mapsData) {
    var mapsMarkup = '';
    if (typeof mapsData !== 'undefined') {
      for (var i = 0; i < mapsData.length; i++) {
        if (typeof mapsData[i].mapURL !== 'undefined' && typeof mapsData[i].name !== 'undefined' && typeof mapsData[i].googleMapURL !== 'undefined') {
          mapsMarkup += '<li><a href="' + mapsData[i].mapURL + '"><img src="' + mapsData[i].icon + '" alt="' + mapsData[i].name + '" /></a><br /><a class="googleCampusMap" href="' + mapsData[i].googleMapURL + '">View on Google Maps</a></li>';
        }
      }
    }
    return mapsMarkup;
  }

  /**
   * Build Non-Emergency Phone Markup
   *
   * @param string phoneData
   *   JSON representation of the safety map data.
   *
   * @return string
   *   Returns markup used for non-emergency phone numbers.
   */
  function buildPhoneMarkup(phoneData) {
    var phoneMarkup = '';
    var telLink = null;
    if (typeof phoneData !== 'undefined') {
      if (phoneData.length > 1) {
        for (var i = 0; i < phoneData.length; i++) {
          if (typeof phoneData[i].phone !== 'undefined' && typeof phoneData[i].name !== 'undefined') {
            telLink = phoneData[i].phone.replace('(', '1-').replace(') ', '-');
            phoneMarkup += '<li><a href="tel:' + telLink + '">' + phoneData[i].name + ' - ' + phoneData[i].phone + '</a></li>';
          }
        }
      }
    }
    return phoneMarkup;
  }

  /**
   * Generate Safety Markup
   *
   * @param object parsedSafetyData
   *   Object of the safety map data.
   */
  function generateSafetyMarkup(parsedSafetyData) {
    var emergencyContact = document.querySelector('#emergency-contact .phone-number');
    var nonEmergencyContact = document.querySelector('#non-emergency-contact .phone-number');
    var evacuationMaps = document.getElementById('maps');
    var additionalContacts = document.getElementById('additional-numbers');
    var safetyApp = document.getElementById('safety-app');

    /**
     * Emergency Contact
     */
    if (emergencyContact !== null) {
      emergencyContact.innerHTML = parsedSafetyData.emergencyContact;
    }

    /**
     * Non-emergency Contact
     */
    if (nonEmergencyContact !== null) {
      nonEmergencyContact.innerHTML = parsedSafetyData.nonEmergencyContact;
    }

    /**
     * Additional Cotacts
     */
    if (additionalContacts !== null) {
      additionalContacts.innerHTML = '<div id="additional-contact-title">Additional Contacts</div><div id="additional-phone-numbers"><ul>' + parsedSafetyData.phoneMarkup + '</ul></div>';

      var addContactButton = document.getElementById('additional-contact-title');
      var additionalPhoneNumbers = document.getElementById('additional-phone-numbers');
      var additionalPhoneNumbersList = document.querySelector('#additional-phone-numbers ul');
      if (addContactButton !== null) {
        addContactButton.addEventListener('click', function () {
          addContactButton.classList.toggle('open');
          additionalPhoneNumbers.classList.toggle('show');
          setTimeout(function () {
            additionalPhoneNumbersList.classList.toggle('show');
          }, 50);
        }, false);
      }
    }

    /**
     * Maps
     */
    if (evacuationMaps !== null) {
      evacuationMaps.innerHTML = '<ul>' + parsedSafetyData.mapsMarkup + '</ul>';
    }

    setTimeout(function () {
      safetyApp.classList.remove('loading');
    }, 50);
  }

  /**
   * Parse Safety JSON.
   *
   * @param string safetyData
   *   JSON representation of safety data.
   * @param string location
   *   Current location to parse. Hardcoded for now until more locations are added.
   *
   * @return bool
   *   Returns boolean based off if it's valid safety app JSON
   */
  function parseSafetyJson(safetyData, location) {
    if (typeof safetyData !== 'undefined' && typeof location !== 'undefined') {
      var parsedSafetyData = {};
      for (var i = 0; i < safetyData.length; i++) {
        if (safetyData[i].id === location) {
          if (safetyData[i].emergencyContact === null || safetyData[i].nonEmergency[0].phone === null || safetyData[i].maps === null) {
            return false;
          }

          parsedSafetyData.emergencyContact = safetyData[i].emergencyContact;
          parsedSafetyData.nonEmergencyContact = safetyData[i].nonEmergency[0].phone;
          parsedSafetyData.phoneMarkup = buildPhoneMarkup(safetyData[i].nonEmergency);
          parsedSafetyData.mapsMarkup = buildMapMarkup(safetyData[i].maps);
          break;
        }
      }

      generateSafetyMarkup(parsedSafetyData);
      return true;
    }
    return false;
  }

  /**
   * Safety Script Initialize.
   */
  function safetyScriptInit() {
    var request = new XMLHttpRequest();
    var location = 'PA';
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        parseSafetyJson(JSON.parse(request.responseText), location);
      } else {
        console.error('ERROR: could not reach safety.txt JSON file.');
      }
    };
    request.open('GET', '/corporateservices/global_workplace_solutions/Shared%20Documents/VMS-Evac-Protocol/safety.txt', true);
    request.send();
  }

  safetyScriptInit();
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classificationCalculator = classificationCalculator;
/* eslint no-unused-expressions: 0 */
/* eslint import/prefer-default-export: 0 */
/* eslint no-undef: 0 */
/* eslint prefer-destructuring: 0 */
/* eslint no-console: 0 */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

/**
 * Classification Calculator.
 * Found on page: https://vmsnet.varian.com/corporateservices/VIT/SecVal/InfoSec/Pages/Data-Governance-.aspx
 */
function classificationCalculator() {
  var _this = this;

  var classification = {};

  classification.config = {
    jsonData: null,
    secondaryButtons: false
  };

  /**
   * First Level Buttons.
   */
  classification.firstLevelButtons = function () {
    var firstButtons = document.getElementsByClassName('first-class');
    var firstLevel = document.getElementById('first-classification-selection');
    var jsonData = classification.config.jsonData;
    var secondLevel = document.getElementById('second-classification-selection');
    var secondLevelLinks = '<li class="second-class"><strong>-- Select Use Case --</strong></li>';

    var _loop = function _loop(i) {
      if (i === 0) {
        firstButtons[i].addEventListener('click', function (event) {
          event.preventDefault();
          firstLevel.firstChild.innerHTML = '<strong>-- Select Organization --</strong>';
          firstLevel.classList.toggle('close');
          secondLevel.innerHTML = '';
          classification.resetResults();
        }, false);
      } else {
        firstButtons[i].addEventListener('click', function (event) {
          event.preventDefault();
          var currentButton = firstButtons[i].innerHTML;
          firstLevel.firstChild.innerHTML = '<strong>' + currentButton + '</strong>';
          firstLevel.classList.add('close');
          secondLevelLinks = classification.secondLevelLinks(jsonData[currentButton]);
          secondLevel.innerHTML = secondLevelLinks;
          classification.secondaryButtons(currentButton, jsonData);
          classification.resetResults();
        }, false);
      }
    };

    for (var i = 0; i < firstButtons.length; i++) {
      _loop(i);
    }
  };

  /**
   * Second Level Buttons.
   *
   * @param {object} data
   *   JSON classification data.
   *
   * @return string
   *   Markup string of the second level links.
   */
  classification.secondLevelLinks = function (data) {
    var secondLevelLinks = '<li class="second-class"><strong>-- Select Use Case --</strong></li>';
    Object.keys(data).forEach(function (link) {
      secondLevelLinks += '<li class="second-class">' + link + '</li>';
    });
    return secondLevelLinks;
  };

  /**
   * Secondary Buttons
   *
   * @param {string} list
   *   List name.
   * @param {object} jsonData
   *   JSON classification data.
   */
  classification.secondaryButtons = function (list, jsonData) {
    var secondaryButtons = document.getElementsByClassName('second-class');
    var secondLevel = document.getElementById('second-classification-selection');
    var resultTitle = document.getElementById('classification-title');
    var resultDescription = document.getElementById('classification-description');
    var results = document.getElementById('classification-result');
    var classResult = document.getElementById('class-result');

    var _loop2 = function _loop2(i) {
      if (i === 0) {
        secondaryButtons[i].addEventListener('click', function (event) {
          event.preventDefault();
          secondLevel.firstChild.innerHTML = '<strong>-- Select Use Case --</strong>';
          secondLevel.classList.toggle('close');
          classification.resetResults();
        }, false);
      } else {
        secondaryButtons[i].addEventListener('click', function (event) {
          event.preventDefault();
          var currentButton = secondaryButtons[i].innerHTML;
          secondLevel.firstChild.innerHTML = '<strong>' + currentButton + '</strong>';
          secondLevel.classList.add('close');
          resultTitle.innerHTML = jsonData[list][currentButton].classification;
          resultDescription.innerHTML = jsonData[list][currentButton].description;
          classResult.innerHTML = 'Data Classification: ' + _this.innerHTML;
          results.classList.remove('hide');
        }, false);
      }
    };

    for (var i = 0; i < secondaryButtons.length; i++) {
      _loop2(i);
    }
  };

  /**
   * Reset Results.
   */
  classification.resetResults = function () {
    var resultTitle = document.getElementById('classification-title');
    var resultDescription = document.getElementById('classification-description');
    var results = document.getElementById('classification-result');
    var classResult = document.getElementById('class-result');
    resultTitle.innerHTML = '';
    resultDescription.innerHTML = '';
    classResult.innerHTML = '';
    results.classList.add('hide');
  };

  /**
   * Initialize HTTP request to recieve classification JSON data.
   */
  classification.init = function () {
    var classificationJson = 'https://vmsnet.varian.com/corporateservices/VIT/SecVal/InfoSec/Docs/classifications.txt';
    var request = new XMLHttpRequest();

    request.open('GET', classificationJson, true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        classification.config.jsonData = data;
        classification.config.secondaryButtons = false;
        classification.firstLevelButtons();
      } else {
        console.warn('Warning: unable to find classification.txt JSON file.');
      }
    };

    request.onerror = function () {
      console.warn('Warning: unable to find classification.txt JSON file.');
    };

    request.send();
  };

  classification.init();
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadStockTicker = loadStockTicker;
/* jshint esversion: 6 */
/* eslint-env browser */
/* eslint-disable global-require */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
/* eslint-disable import/prefer-default-export */
/* eslint no-undef: 0 */

function loadStockTicker() {
  var originalPrice = 'div.wd_quote.wd_quote-show_detail.wd_quote-onecol > div.wd_main-wrapper > div > div.wd_price > span';
  var originalDeviation = 'div.wd_quote.wd_quote-show_detail.wd_quote-onecol > div.wd_values-wrapper > div > div:nth-child(2) > div > div.wd_value';
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  var triggerPrice = false;
  var triggerDeviation = false;

  /**
   * Format Price.
   *
   * @param target
   *   Target DOM element.
   */
  function formatPrice(target) {
    setTimeout(function () {
      if ($(target).find(originalPrice).text() !== '') {
        var price = $(target).find(originalPrice).text().replace('$', '');
        $(target).find(originalPrice).text(price);
      }
    }, 500);
  }

  /**
   * Format Deviation.
   *
   * @param target
   *   Target DOM element.
   */
  function formatDeviation(target) {
    setTimeout(function () {
      if ($(target).find(originalDeviation).text() !== '') {

        var deviation = $(target).find(originalDeviation).text().replace('$', '').replace('(', '<span class="stock_spacer"></span>(');

        $(target).find(originalDeviation).text('').html(deviation).afterTime(200, function () {
          $('div.wd_widget').fadeIn(250);
        });
      }
    }, 500);
  }

  /**
   * Create Stock Observer.
   */
  function createStockObserver() {
    var observer = new MutationObserver(function () {
      /**
       * Find the price and format it correctly
       */
      if ($('.wd_quote-wrapper').length > 0) {
        if ($(document).find(originalPrice)) {
          setTimeout(function () {
            if ($(document).find(originalPrice).text() !== '' && triggerPrice === false) {
              var price = $(document).find(originalPrice).text().replace('$', '');
              $(document).find(originalPrice).text(price);
              triggerPrice = true;
            }
          }, 500);
        }

        /**
         * Find the deviation in price and format it correctly
         */
        if ($(document).find(originalDeviation)) {
          setTimeout(function () {
            if ($(document).find(originalDeviation).text() !== '' && triggerDeviation === false) {

              var deviation = $(document).find(originalDeviation).text().replace('$', '').replace('(', '<span class="stock_spacer"></span>(');

              triggerDeviation = true;

              $(document).find(originalDeviation).text('').html(deviation).afterTime(200, function () {
                $('div.wd_widget').fadeIn(250);
              });
            }
          }, 500);
        }
      }
    });

    observer.observe(document, {
      childList: true,
      subtree: true,
      attributes: false,
      characterData: false
    });
  }

  /**
   * Initialize Stock Ticker
   */
  function initStockTicker() {
    /**
     * Check to see if the browser is IE and is 10 or less.
     */
    if (msie > 0 && parseInt(ua.toLowerCase().split('msie')[1]) <= 10) {
      document.addEventListener('DOMNodeInserted', function (event) {
        /**
         * Find the price and format it correctly
         */
        if ($(event.target).find(originalPrice)) {
          formatPrice(event.target);
        }

        /**
         * Find the deviation in price and format it correctly
         */
        if ($(event.target).find(originalDeviation)) {
          formatDeviation(event.target);
        }
      });
    } else {
      createStockObserver();
    }
  }

  initStockTicker();
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startClock = startClock;
/* jshint esversion: 6 */
/* eslint-env browser */
/* eslint-disable global-require */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
/* eslint-disable import/prefer-default-export */
/* eslint no-console: 0 */
/* eslint no-undef: 0 */

/**
 * Clock Timing.
 */
function startClock() {
  var time = $('#dvWeather > .left-side > .timing > #lblTime').text().trim();
  var hour = parseInt(time.substring(0, 2), 10);
  var min = parseInt(time.substring(3, 5), 10);
  var ampm = time.substring(6, 8);
  var currentLocation = $('#dvWeather > .left-side > .location').text().trim();
  var previousLocation = $('#dvWeather > .left-side > .location').text().trim();
  var textMinute = null;
  var textHour = null;
  var textTime = null;
  var twelveHourReset = false;

  /**
   * Check Current Location Time.
   */
  function checkCurrentLocationTime() {
    currentLocation = $('#dvWeather > .left-side > .location').text().trim();
    if (currentLocation !== previousLocation) {
      time = $('#dvWeather > .left-side > .timing > #lblTime').text().trim();
      hour = parseInt(time.substring(0, 2), 10);
      min = parseInt(time.substring(3, 5), 10);
      ampm = time.substring(6, 8);
    }
    previousLocation = currentLocation;
  }

  /**
   * Increment Clock
   */
  function incrementClock() {
    if (min < 59) {
      min += 1;
    } else {
      min = 0;
      if (hour <= 11) {
        hour += 1;
        if (hour === 12 && twelveHourReset === false) {
          ampm = ampm === 'AM' ? 'PM' : 'AM';
          twelveHourReset = true;
        }
      } else {
        hour = 1;
        twelveHourReset = false;
      }
    }
    textMinute = min < 10 ? '0' + min : min;
    textHour = hour < 10 ? '0' + hour : hour;
    if (textHour.length === 3) {
      textHour = textHour.substring(1, 3);
    }
    textTime = textHour + ':' + textMinute + ' ' + ampm;
    $('#dvWeather > .left-side > .timing > #lblTime').text(textTime);
  }

  if (time !== null) {
    setInterval(function () {
      checkCurrentLocationTime();
      incrementClock();
    }, 60000);
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadScrollEvents = loadScrollEvents;
/* jshint esversion: 6 */
/* eslint-env browser */
/* eslint-disable global-require */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
/* eslint-disable import/prefer-default-export */
/* eslint no-console: 0 */
/* eslint no-undef: 0 */

/**
 * Scroll Scripts.
 */
function loadScrollEvents() {
  /**
   * Remove Unnecessary Scroll Windows.
   */
  function removeUnnecessaryScrollWindows() {
    if ($('.home-features-stories-cont .custom-scroll').length > 0) {
      $('.home-features-stories-cont .custom-scroll').removeClass('custom-scroll');
    }

    if ($('.todays-varian-item.referrals.auto-section .custom-scroll').length > 0) {
      $('.todays-varian-item.referrals.auto-section .custom-scroll').removeClass('custom-scroll');
    }

    if ($('.todays-varian-item.our-people-bg.auto-section .custom-scroll').length > 0) {
      $('.todays-varian-item.our-people-bg.auto-section .custom-scroll').removeClass('custom-scroll');
    }

    if ($('.todays-varian-item.our-location-bg.auto-section .custom-scroll').length > 0) {
      $('.todays-varian-item.our-location-bg.auto-section .custom-scroll').removeClass('custom-scroll');
    }

    if ($('.todays-varian-item.how-do-i.auto-section .custom-scroll').length > 0) {
      $('.todays-varian-item.how-do-i.auto-section .custom-scroll').removeClass('custom-scroll');
    }

    if ($('.Emergency-bg .custom-scroll').length > 0) {
      $('.Emergency-bg .custom-scroll').removeClass('custom-scroll');
    }
  }

  /**
   * Add Gallery Scroll.
   */
  function addGalleryScroll() {
    var gallery = $('.notices-cont div.gallery.business-unit');
    var noticeBox = $('.notices-cont');

    if (gallery !== null && noticeBox !== null) {
      if (gallery.height() > noticeBox.height()) {
        gallery.addClass('gallery-scroll');
        $('.gallery-scroll').slimScroll({
          alwaysVisible: false,
          railVisible: true,
          height: '400px',
          size: '10px',
          borderRadius: '0px',
          railBorderRadius: '0px',
          distance: '0px'
        });
      }
    }
  }

  /**
   * Scroll Resize Events.
   */
  function scrollResizeEvents() {
    var resizeTimeout = void 0;
    function resizeThrottler() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null;
          addGalleryScroll();
        }, 66);
      }
    }
    window.addEventListener('resize', resizeThrottler, false);
  }

  /**
   * Initialize Scroll Scripts.
   */
  function initScrollScripts() {
    removeUnnecessaryScrollWindows();
    addGalleryScroll();
    scrollResizeEvents();
    if ($('.custom-scroll').length > 0) {
      $('.custom-scroll').slimScroll({
        alwaysVisible: false,
        railVisible: true,
        height: 'auto',
        size: '10px',
        borderRadius: '0px',
        railBorderRadius: '0px',
        distance: '0px'
      });
      $('.slimScrollDiv').css('height', 'auto');
    }
  }

  initScrollScripts();
}

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map