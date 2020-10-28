/*! main.js | Bulkit | CSS Ninja */

/* ==========================================================================
Website core JS file
========================================================================== */
"use strict"; //Set environment variable (Used for development and demo)

/* 
    Possible values:
    1. development
    2. demo
    3. customization
*/

var env = 'customization';
initPageLoader();
$(document).ready(function ($) {
  if (env === 'development') {
    disableSidebarLinks();
    changeDemoImages();
  } else if (env === 'demo') {
    changeDemoImages();
  } else if (env === 'customization') {
    disableSidebarLinks();
  }

  initNavbar();
  initMobileMenu();
  initSlider();
  initParallax();
  initMockup();
  initSidebar();
  initCounters();
  initScrollReveal();
  initVideoEmbed();
  initVerticalCarousel();
  initPopovers();
  initTooltips();
  initBackgroundImages();
  initBackToTop();
  initGitem();
  initScrollToHash();
  highlightNavbarLinks();
  initGoogleMap();
});