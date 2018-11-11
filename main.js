(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/code-mirror/src/index.ts":
/*!*************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/code-mirror/src/index.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./lib/code-mirror.module */ "../../libs/code-mirror/src/lib/code-mirror.module.ts"));


/***/ }),

/***/ "../../libs/code-mirror/src/lib/code-mirror.component.html":
/*!***********************************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/code-mirror/src/lib/code-mirror.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../libs/code-mirror/src/lib/code-mirror.component.scss":
/*!***********************************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/code-mirror/src/lib/code-mirror.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n\n.CodeMirror-linenumbers {}\n\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n\n/* Shown when moving in bi-directional text */\n\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: -20px;\n  overflow: hidden;\n}\n\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n\n.cm-s-default .cm-quote {color: #090;}\n\n.cm-negative {color: #d44;}\n\n.cm-positive {color: #292;}\n\n.cm-header, .cm-strong {font-weight: bold;}\n\n.cm-em {font-style: italic;}\n\n.cm-link {text-decoration: underline;}\n\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n\n.cm-s-default .cm-atom {color: #219;}\n\n.cm-s-default .cm-number {color: #164;}\n\n.cm-s-default .cm-def {color: #00f;}\n\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n\n.cm-s-default .cm-variable-2 {color: #05a;}\n\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n\n.cm-s-default .cm-comment {color: #a50;}\n\n.cm-s-default .cm-string {color: #a11;}\n\n.cm-s-default .cm-string-2 {color: #f50;}\n\n.cm-s-default .cm-meta {color: #555;}\n\n.cm-s-default .cm-qualifier {color: #555;}\n\n.cm-s-default .cm-builtin {color: #30a;}\n\n.cm-s-default .cm-bracket {color: #997;}\n\n.cm-s-default .cm-tag {color: #170;}\n\n.cm-s-default .cm-attribute {color: #00c;}\n\n.cm-s-default .cm-hr {color: #999;}\n\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\n\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */ border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\n\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n\n.CodeMirror-crosshair { cursor: crosshair; }\n\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\n\nspan.CodeMirror-selectedtext { background: none; }\n\n/*\nSolarized theme for code-mirror\nhttp://ethanschoonover.com/solarized\n*/\n\n/*\nSolarized color palette\nhttp://ethanschoonover.com/solarized/img/solarized-palette.png\n*/\n\n.solarized.base03 { color: #002b36; }\n\n.solarized.base02 { color: #073642; }\n\n.solarized.base01 { color: #586e75; }\n\n.solarized.base00 { color: #657b83; }\n\n.solarized.base0 { color: #839496; }\n\n.solarized.base1 { color: #93a1a1; }\n\n.solarized.base2 { color: #eee8d5; }\n\n.solarized.base3  { color: #fdf6e3; }\n\n.solarized.solar-yellow  { color: #b58900; }\n\n.solarized.solar-orange  { color: #cb4b16; }\n\n.solarized.solar-red { color: #dc322f; }\n\n.solarized.solar-magenta { color: #d33682; }\n\n.solarized.solar-violet  { color: #6c71c4; }\n\n.solarized.solar-blue { color: #268bd2; }\n\n.solarized.solar-cyan { color: #2aa198; }\n\n.solarized.solar-green { color: #859900; }\n\n/* Color scheme for code-mirror */\n\n.cm-s-solarized {\n  line-height: 1.45em;\n  color-profile: sRGB;\n  rendering-intent: auto;\n}\n\n.cm-s-solarized.cm-s-dark {\n  color: #839496;\n  background-color: #002b36;\n  text-shadow: #002b36 0 1px;\n}\n\n.cm-s-solarized.cm-s-light {\n  background-color: #fdf6e3;\n  color: #657b83;\n  text-shadow: #eee8d5 0 1px;\n}\n\n.cm-s-solarized .CodeMirror-widget {\n  text-shadow: none;\n}\n\n.cm-s-solarized .cm-header { color: #586e75; }\n\n.cm-s-solarized .cm-quote { color: #93a1a1; }\n\n.cm-s-solarized .cm-keyword { color: #cb4b16; }\n\n.cm-s-solarized .cm-atom { color: #d33682; }\n\n.cm-s-solarized .cm-number { color: #d33682; }\n\n.cm-s-solarized .cm-def { color: #2aa198; }\n\n.cm-s-solarized .cm-variable { color: #839496; }\n\n.cm-s-solarized .cm-variable-2 { color: #b58900; }\n\n.cm-s-solarized .cm-variable-3, .cm-s-solarized .cm-type { color: #6c71c4; }\n\n.cm-s-solarized .cm-property { color: #2aa198; }\n\n.cm-s-solarized .cm-operator { color: #6c71c4; }\n\n.cm-s-solarized .cm-comment { color: #586e75; font-style:italic; }\n\n.cm-s-solarized .cm-string { color: #859900; }\n\n.cm-s-solarized .cm-string-2 { color: #b58900; }\n\n.cm-s-solarized .cm-meta { color: #859900; }\n\n.cm-s-solarized .cm-qualifier { color: #b58900; }\n\n.cm-s-solarized .cm-builtin { color: #d33682; }\n\n.cm-s-solarized .cm-bracket { color: #cb4b16; }\n\n.cm-s-solarized .CodeMirror-matchingbracket { color: #859900; }\n\n.cm-s-solarized .CodeMirror-nonmatchingbracket { color: #dc322f; }\n\n.cm-s-solarized .cm-tag { color: #93a1a1; }\n\n.cm-s-solarized .cm-attribute { color: #2aa198; }\n\n.cm-s-solarized .cm-hr {\n  color: transparent;\n  border-top: 1px solid #586e75;\n  display: block;\n}\n\n.cm-s-solarized .cm-link { color: #93a1a1; cursor: pointer; }\n\n.cm-s-solarized .cm-special { color: #6c71c4; }\n\n.cm-s-solarized .cm-em {\n  color: #999;\n  text-decoration: underline;\n  -webkit-text-decoration-style: dotted;\n          text-decoration-style: dotted;\n}\n\n.cm-s-solarized .cm-error,\n.cm-s-solarized .cm-invalidchar {\n  color: #586e75;\n  border-bottom: 1px dotted #dc322f;\n}\n\n.cm-s-solarized.cm-s-dark div.CodeMirror-selected { background: #073642; }\n\n.cm-s-solarized.cm-s-dark.CodeMirror ::-moz-selection { background: rgba(7, 54, 66, 0.99); }\n\n.cm-s-solarized.cm-s-dark.CodeMirror ::selection { background: rgba(7, 54, 66, 0.99); }\n\n.cm-s-solarized.cm-s-dark .CodeMirror-line::-moz-selection, .cm-s-dark .CodeMirror-line > span::-moz-selection, .cm-s-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(7, 54, 66, 0.99); }\n\n.cm-s-solarized.cm-s-light div.CodeMirror-selected { background: #eee8d5; }\n\n.cm-s-solarized.cm-s-light .CodeMirror-line::-moz-selection, .cm-s-light .CodeMirror-line > span::-moz-selection, .cm-s-light .CodeMirror-line > span > span::-moz-selection { background: #eee8d5; }\n\n.cm-s-solarized.cm-s-light .CodeMirror-line::selection, .cm-s-light .CodeMirror-line > span::selection, .cm-s-light .CodeMirror-line > span > span::selection { background: #eee8d5; }\n\n.cm-s-solarized.cm-s-light .CodeMirror-line::-moz-selection, .cm-s-ligh .CodeMirror-line > span::-moz-selection, .cm-s-ligh .CodeMirror-line > span > span::-moz-selection { background: #eee8d5; }\n\n/* Editor styling */\n\n/* Little shadow on the view-port of the buffer view */\n\n.cm-s-solarized.CodeMirror {\n  box-shadow: inset 7px 0 12px -6px #000;\n}\n\n/* Remove gutter border */\n\n.cm-s-solarized .CodeMirror-gutters {\n  border-right: 0;\n}\n\n/* Gutter colors and line number styling based of color scheme (dark / light) */\n\n/* Dark */\n\n.cm-s-solarized.cm-s-dark .CodeMirror-gutters {\n  background-color: #073642;\n}\n\n.cm-s-solarized.cm-s-dark .CodeMirror-linenumber {\n  color: #586e75;\n  text-shadow: #021014 0 -1px;\n}\n\n/* Light */\n\n.cm-s-solarized.cm-s-light .CodeMirror-gutters {\n  background-color: #eee8d5;\n}\n\n.cm-s-solarized.cm-s-light .CodeMirror-linenumber {\n  color: #839496;\n}\n\n/* Common */\n\n.cm-s-solarized .CodeMirror-linenumber {\n  padding: 0 5px;\n}\n\n.cm-s-solarized .CodeMirror-guttermarker-subtle { color: #586e75; }\n\n.cm-s-solarized.cm-s-dark .CodeMirror-guttermarker { color: #ddd; }\n\n.cm-s-solarized.cm-s-light .CodeMirror-guttermarker { color: #cb4b16; }\n\n.cm-s-solarized .CodeMirror-gutter .CodeMirror-gutter-text {\n  color: #586e75;\n}\n\n/* Cursor */\n\n.cm-s-solarized .CodeMirror-cursor { border-left: 1px solid #819090; }\n\n/* Fat cursor */\n\n.cm-s-solarized.cm-s-light.cm-fat-cursor .CodeMirror-cursor { background: #77ee77; }\n\n.cm-s-solarized.cm-s-light .cm-animate-fat-cursor { background-color: #77ee77; }\n\n.cm-s-solarized.cm-s-dark.cm-fat-cursor .CodeMirror-cursor { background: #586e75; }\n\n.cm-s-solarized.cm-s-dark .cm-animate-fat-cursor { background-color: #586e75; }\n\n/* Active line */\n\n.cm-s-solarized.cm-s-dark .CodeMirror-activeline-background {\n  background: rgba(255, 255, 255, 0.06);\n}\n\n.cm-s-solarized.cm-s-light .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.06);\n}\n\nangular-kythe-ui-code-mirror {\n  display: block;\n  height: calc(100vh - 64px); }\n\nangular-kythe-ui-code-mirror .code-mirror-container {\n    height: 100%; }\n\nangular-kythe-ui-code-mirror .CodeMirror {\n    height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9jb2RlbWlycm9yL2xpYi9jb2RlbWlycm9yLmNzcyIsIm5vZGVfbW9kdWxlcy9jb2RlbWlycm9yL3RoZW1lL3NvbGFyaXplZC5jc3MiLCIvaG9tZS9jaXJjbGVjaS9hbmd1bGFyLWNsaS1jaXJjbGVjaS9saWJzL2NvZGUtbWlycm9yL3NyYy9saWIvY29kZS1taXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTs7QUFFWjtFQUNFLGlFQUFpRTtFQUNqRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0NBQ2hCOztBQUVELGFBQWE7O0FBRWI7RUFDRSxlQUFlLENBQUMscUNBQXFDO0NBQ3REOztBQUNEO0VBQ0UsZUFBZSxDQUFDLG1DQUFtQztDQUNwRDs7QUFFRDtFQUNFLHdCQUF3QixDQUFDLGtEQUFrRDtDQUM1RTs7QUFFRCxZQUFZOztBQUVaO0VBQ0UsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixvQkFBb0I7Q0FDckI7O0FBQ0QsMEJBQTBCOztBQUMxQjtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixvQkFBb0I7Q0FDckI7O0FBRUQsMkJBQTJCLGFBQWEsRUFBRTs7QUFDMUMsa0NBQWtDLFlBQVksRUFBRTs7QUFFaEQsWUFBWTs7QUFFWjtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsU0FBUztDQUNWOztBQUNELDhDQUE4Qzs7QUFDOUM7RUFDRSw4QkFBOEI7Q0FDL0I7O0FBQ0Q7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGlCQUFpQjtDQUNsQjs7QUFDRDtFQUNFLFdBQVc7Q0FDWjs7QUFDRDtFQUNFLHlDQUF5QztFQUN6QyxpREFBaUQ7RUFFakQseUNBQXlDO0NBQzFDOztBQUNEO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixpREFBaUQ7RUFFakQseUNBQXlDO0VBQ3pDLHVCQUF1QjtDQUN4Qjs7QUFNRDtFQUNFLEtBQUs7RUFDTCxNQUFNLDhCQUE4QixFQUFFO0VBQ3RDLE9BQU87Q0FDUjs7QUFDRDtFQUNFLEtBQUs7RUFDTCxNQUFNLDhCQUE4QixFQUFFO0VBQ3RDLE9BQU87Q0FDUjs7QUFFRCwrREFBK0Q7O0FBQy9ELDJDQUEyQzs7QUFFM0MsVUFBVSxzQkFBc0IsQ0FBQyx5QkFBeUIsRUFBRTs7QUFFNUQ7RUFDRSxtQkFBbUI7RUFDbkIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsY0FBYztFQUM3QyxpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSw0QkFBNEI7RUFDNUIsT0FBTyxDQUFDLFVBQVU7RUFDbEIsbUJBQW1CO0NBQ3BCOztBQUVELG1CQUFtQjs7QUFFbkIsMEJBQTBCLFlBQVksQ0FBQzs7QUFDdkMseUJBQXlCLFlBQVksQ0FBQzs7QUFDdEMsY0FBYyxZQUFZLENBQUM7O0FBQzNCLGNBQWMsWUFBWSxDQUFDOztBQUMzQix3QkFBd0Isa0JBQWtCLENBQUM7O0FBQzNDLFFBQVEsbUJBQW1CLENBQUM7O0FBQzVCLFVBQVUsMkJBQTJCLENBQUM7O0FBQ3RDLG1CQUFtQiw4QkFBOEIsQ0FBQzs7QUFFbEQsMkJBQTJCLFlBQVksQ0FBQzs7QUFDeEMsd0JBQXdCLFlBQVksQ0FBQzs7QUFDckMsMEJBQTBCLFlBQVksQ0FBQzs7QUFDdkMsdUJBQXVCLFlBQVksQ0FBQzs7QUFDcEM7Ozs2QkFHNkI7O0FBQzdCLDhCQUE4QixZQUFZLENBQUM7O0FBQzNDLHNEQUFzRCxZQUFZLENBQUM7O0FBQ25FLDJCQUEyQixZQUFZLENBQUM7O0FBQ3hDLDBCQUEwQixZQUFZLENBQUM7O0FBQ3ZDLDRCQUE0QixZQUFZLENBQUM7O0FBQ3pDLHdCQUF3QixZQUFZLENBQUM7O0FBQ3JDLDZCQUE2QixZQUFZLENBQUM7O0FBQzFDLDJCQUEyQixZQUFZLENBQUM7O0FBQ3hDLDJCQUEyQixZQUFZLENBQUM7O0FBQ3hDLHVCQUF1QixZQUFZLENBQUM7O0FBQ3BDLDZCQUE2QixZQUFZLENBQUM7O0FBQzFDLHNCQUFzQixZQUFZLENBQUM7O0FBQ25DLHdCQUF3QixZQUFZLENBQUM7O0FBRXJDLHlCQUF5QixZQUFZLENBQUM7O0FBQ3RDLGlCQUFpQixZQUFZLENBQUM7O0FBRTlCLHdCQUF3Qix5QkFBeUIsRUFBRTs7QUFFbkQsc0NBQXNDOztBQUV0QyxnREFBZ0QsWUFBWSxDQUFDOztBQUM3RCxtREFBbUQsWUFBWSxDQUFDOztBQUNoRSwwQkFBMEIsa0NBQWtDLEVBQUU7O0FBQzlELG1DQUFtQyxvQkFBb0IsQ0FBQzs7QUFFeEQsVUFBVTs7QUFFVjtvREFDb0Q7O0FBRXBEO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSw0QkFBNEIsQ0FBQyw2Q0FBNkM7RUFDMUUseUVBQXlFO0VBQ3pFLHlDQUF5QztFQUN6QyxxQkFBcUIsQ0FBQyxvQkFBb0I7RUFDMUMscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixjQUFjLENBQUMsb0RBQW9EO0VBQ25FLG1CQUFtQjtDQUNwQjs7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixxQ0FBcUM7Q0FDdEM7O0FBRUQ7OzJCQUUyQjs7QUFDM0I7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGNBQWM7Q0FDZjs7QUFDRDtFQUNFLFNBQVMsQ0FBQyxPQUFPO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxVQUFVLENBQUMsUUFBUTtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0NBQ3BCOztBQUNEO0VBQ0UsU0FBUyxDQUFDLFVBQVU7Q0FDckI7O0FBQ0Q7RUFDRSxRQUFRLENBQUMsVUFBVTtDQUNwQjs7QUFFRDtFQUNFLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxPQUFPO0VBQ3BDLGlCQUFpQjtFQUNqQixXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIscUJBQXFCO0NBQ3RCOztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsd0JBQXdCO0NBQ3pCOztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLE9BQU8sQ0FBQyxVQUFVO0VBQ2xCLFdBQVc7Q0FDWjs7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVztDQUNaOztBQUNELDhDQUF5Qyw2QkFBNkIsRUFBRTs7QUFBeEUseUNBQXlDLDZCQUE2QixFQUFFOztBQUN4RSw4Q0FBOEMsNkJBQTZCLEVBQUU7O0FBRTdFO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQixDQUFDLDJDQUEyQztDQUM3RDs7QUFDRDtFQUNFLGdFQUFnRSxDQUNmLGlCQUFpQjtFQUNsRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsMkNBQTJDO0VBQzNDLG1DQUFtQztDQUNwQzs7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVU7RUFDckMsV0FBVztDQUNaOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlLENBQUMsMERBQTBEO0NBQzNFOztBQUVELHFCQUFxQjs7QUFFckIsc0JBQXNCLGVBQWUsRUFBRTs7QUFFdkM7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQsa0VBQWtFOztBQUNsRTs7Ozs7RUFNRSx3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtDQUN0Qjs7QUFDRCwwQkFBMEIsaUJBQWlCLEVBQUU7O0FBRTdDO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0NBQ1o7O0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQsdUJBQXVCLG9CQUFvQixFQUFFOztBQUM3QywyQ0FBMkMsb0JBQW9CLEVBQUU7O0FBQ2pFLHdCQUF3QixrQkFBa0IsRUFBRTs7QUFDNUMsNEhBQTZHLG9CQUFvQixFQUFFOztBQUFuSSw2R0FBNkcsb0JBQW9CLEVBQUU7O0FBQ25JLDRIQUE0SCxvQkFBb0IsRUFBRTs7QUFFbEo7RUFDRSx1QkFBdUI7RUFDdkIsd0NBQXdDO0NBQ3pDOztBQUVELDZDQUE2Qzs7QUFDN0MsbUJBQW1CLG9CQUFvQixFQUFFOztBQUV6QztFQUNFLG1DQUFtQztFQUNuQztJQUNFLG1CQUFtQjtHQUNwQjtDQUNGOztBQUVELHFCQUFxQjs7QUFDckIsMEJBQTBCLFlBQVksRUFBRTs7QUFFeEMsa0VBQWtFOztBQUNsRSwrQkFBK0IsaUJBQWlCLEVBQUU7O0FDelZsRDs7O0VBR0U7O0FBRUY7OztFQUdFOztBQUVGLG9CQUFvQixlQUFlLEVBQUU7O0FBQ3JDLG9CQUFvQixlQUFlLEVBQUU7O0FBQ3JDLG9CQUFvQixlQUFlLEVBQUU7O0FBQ3JDLG9CQUFvQixlQUFlLEVBQUU7O0FBQ3JDLG1CQUFtQixlQUFlLEVBQUU7O0FBQ3BDLG1CQUFtQixlQUFlLEVBQUU7O0FBQ3BDLG1CQUFtQixlQUFlLEVBQUU7O0FBQ3BDLG9CQUFvQixlQUFlLEVBQUU7O0FBQ3JDLDJCQUEyQixlQUFlLEVBQUU7O0FBQzVDLDJCQUEyQixlQUFlLEVBQUU7O0FBQzVDLHVCQUF1QixlQUFlLEVBQUU7O0FBQ3hDLDJCQUEyQixlQUFlLEVBQUU7O0FBQzVDLDJCQUEyQixlQUFlLEVBQUU7O0FBQzVDLHdCQUF3QixlQUFlLEVBQUU7O0FBQ3pDLHdCQUF3QixlQUFlLEVBQUU7O0FBQ3pDLHlCQUF5QixlQUFlLEVBQUU7O0FBRTFDLGtDQUFrQzs7QUFFbEM7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtDQUN4Qjs7QUFDRDtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsMkJBQTJCO0NBQzVCOztBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZiwyQkFBMkI7Q0FDNUI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQsNkJBQTZCLGVBQWUsRUFBRTs7QUFDOUMsNEJBQTRCLGVBQWUsRUFBRTs7QUFFN0MsOEJBQThCLGVBQWUsRUFBRTs7QUFDL0MsMkJBQTJCLGVBQWUsRUFBRTs7QUFDNUMsNkJBQTZCLGVBQWUsRUFBRTs7QUFDOUMsMEJBQTBCLGVBQWUsRUFBRTs7QUFFM0MsK0JBQStCLGVBQWUsRUFBRTs7QUFDaEQsaUNBQWlDLGVBQWUsRUFBRTs7QUFDbEQsMkRBQTJELGVBQWUsRUFBRTs7QUFFNUUsK0JBQStCLGVBQWUsRUFBRTs7QUFDaEQsK0JBQStCLGVBQWUsRUFBRTs7QUFFaEQsOEJBQThCLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRTs7QUFFbEUsNkJBQTZCLGVBQWUsRUFBRTs7QUFDOUMsK0JBQStCLGVBQWUsRUFBRTs7QUFFaEQsMkJBQTJCLGVBQWUsRUFBRTs7QUFDNUMsZ0NBQWdDLGVBQWUsRUFBRTs7QUFDakQsOEJBQThCLGVBQWUsRUFBRTs7QUFDL0MsOEJBQThCLGVBQWUsRUFBRTs7QUFDL0MsOENBQThDLGVBQWUsRUFBRTs7QUFDL0QsaURBQWlELGVBQWUsRUFBRTs7QUFDbEUsMEJBQTBCLGVBQWUsRUFBRTs7QUFDM0MsZ0NBQWdDLGVBQWUsRUFBRTs7QUFDakQ7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWU7Q0FDaEI7O0FBQ0QsMkJBQTJCLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRTs7QUFDN0QsOEJBQThCLGVBQWUsRUFBRTs7QUFDL0M7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLHNDQUE4QjtVQUE5Qiw4QkFBOEI7Q0FDL0I7O0FBQ0Q7O0VBRUUsZUFBZTtFQUNmLGtDQUFrQztDQUNuQzs7QUFFRCxvREFBb0Qsb0JBQW9CLEVBQUU7O0FBQzFFLHdEQUFtRCxrQ0FBa0MsRUFBRTs7QUFBdkYsbURBQW1ELGtDQUFrQyxFQUFFOztBQUN2Riw0S0FBNEssa0NBQWtDLEVBQUU7O0FBRWhOLHFEQUFxRCxvQkFBb0IsRUFBRTs7QUFDM0UsK0tBQWdLLG9CQUFvQixFQUFFOztBQUF0TCxnS0FBZ0ssb0JBQW9CLEVBQUU7O0FBQ3RMLDZLQUE2SyxvQkFBb0IsRUFBRTs7QUFFbk0sb0JBQW9COztBQUlwQix1REFBdUQ7O0FBQ3ZEO0VBR0UsdUNBQXVDO0NBQ3hDOztBQUVELDBCQUEwQjs7QUFDMUI7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQsZ0ZBQWdGOztBQUVoRixVQUFVOztBQUNWO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLDRCQUE0QjtDQUM3Qjs7QUFFRCxXQUFXOztBQUNYO0VBQ0UsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRCxZQUFZOztBQUNaO0VBQ0UsZUFBZTtDQUNoQjs7QUFDRCxrREFBa0QsZUFBZSxFQUFFOztBQUNuRSxxREFBcUQsWUFBWSxFQUFFOztBQUNuRSxzREFBc0QsZUFBZSxFQUFFOztBQUV2RTtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQsWUFBWTs7QUFDWixxQ0FBcUMsK0JBQStCLEVBQUU7O0FBRXRFLGdCQUFnQjs7QUFDaEIsOERBQThELG9CQUFvQixFQUFFOztBQUNwRixvREFBb0QsMEJBQTBCLEVBQUU7O0FBQ2hGLDZEQUE2RCxvQkFBb0IsRUFBRTs7QUFDbkYsbURBQW1ELDBCQUEwQixFQUFFOztBQUUvRSxpQkFBaUI7O0FBQ2pCO0VBQ0Usc0NBQXNDO0NBQ3ZDOztBQUNEO0VBQ0UsZ0NBQWdDO0NBQ2pDOztBQ3BLRDtFQUNFLGVBQWM7RUFDZCwyQkFBMEIsRUFTM0I7O0FBWEQ7SUFLSSxhQUFZLEVBQ2I7O0FBTkg7SUFTSSxhQUFZLEVBQ2IiLCJmaWxlIjoibGlicy9jb2RlLW1pcnJvci9zcmMvbGliL2NvZGUtbWlycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQkFTSUNTICovXG5cbi5Db2RlTWlycm9yIHtcbiAgLyogU2V0IGhlaWdodCwgd2lkdGgsIGJvcmRlcnMsIGFuZCBnbG9iYWwgZm9udCBwcm9wZXJ0aWVzIGhlcmUgKi9cbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXJlY3Rpb246IGx0cjtcbn1cblxuLyogUEFERElORyAqL1xuXG4uQ29kZU1pcnJvci1saW5lcyB7XG4gIHBhZGRpbmc6IDRweCAwOyAvKiBWZXJ0aWNhbCBwYWRkaW5nIGFyb3VuZCBjb250ZW50ICovXG59XG4uQ29kZU1pcnJvciBwcmUge1xuICBwYWRkaW5nOiAwIDRweDsgLyogSG9yaXpvbnRhbCBwYWRkaW5nIG9mIGNvbnRlbnQgKi9cbn1cblxuLkNvZGVNaXJyb3Itc2Nyb2xsYmFyLWZpbGxlciwgLkNvZGVNaXJyb3ItZ3V0dGVyLWZpbGxlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvKiBUaGUgbGl0dGxlIHNxdWFyZSBiZXR3ZWVuIEggYW5kIFYgc2Nyb2xsYmFycyAqL1xufVxuXG4vKiBHVVRURVIgKi9cblxuLkNvZGVNaXJyb3ItZ3V0dGVycyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uQ29kZU1pcnJvci1saW5lbnVtYmVycyB7fVxuLkNvZGVNaXJyb3ItbGluZW51bWJlciB7XG4gIHBhZGRpbmc6IDAgM3B4IDAgNXB4O1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzk5OTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLkNvZGVNaXJyb3ItZ3V0dGVybWFya2VyIHsgY29sb3I6IGJsYWNrOyB9XG4uQ29kZU1pcnJvci1ndXR0ZXJtYXJrZXItc3VidGxlIHsgY29sb3I6ICM5OTk7IH1cblxuLyogQ1VSU09SICovXG5cbi5Db2RlTWlycm9yLWN1cnNvciB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgd2lkdGg6IDA7XG59XG4vKiBTaG93biB3aGVuIG1vdmluZyBpbiBiaS1kaXJlY3Rpb25hbCB0ZXh0ICovXG4uQ29kZU1pcnJvciBkaXYuQ29kZU1pcnJvci1zZWNvbmRhcnljdXJzb3Ige1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHNpbHZlcjtcbn1cbi5jbS1mYXQtY3Vyc29yIC5Db2RlTWlycm9yLWN1cnNvciB7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzdlNztcbn1cbi5jbS1mYXQtY3Vyc29yIGRpdi5Db2RlTWlycm9yLWN1cnNvcnMge1xuICB6LWluZGV4OiAxO1xufVxuLmNtLWZhdC1jdXJzb3ItbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDI1NSwgMjAsIDAuNSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAxLjA2cyBzdGVwcygxKSBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGJsaW5rIDEuMDZzIHN0ZXBzKDEpIGluZmluaXRlO1xuICBhbmltYXRpb246IGJsaW5rIDEuMDZzIHN0ZXBzKDEpIGluZmluaXRlO1xufVxuLmNtLWFuaW1hdGUtZmF0LWN1cnNvciB7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXI6IDA7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAxLjA2cyBzdGVwcygxKSBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGJsaW5rIDEuMDZzIHN0ZXBzKDEpIGluZmluaXRlO1xuICBhbmltYXRpb246IGJsaW5rIDEuMDZzIHN0ZXBzKDEpIGluZmluaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U3O1xufVxuQC1tb3ota2V5ZnJhbWVzIGJsaW5rIHtcbiAgMCUge31cbiAgNTAlIHsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgMTAwJSB7fVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcbiAgMCUge31cbiAgNTAlIHsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgMTAwJSB7fVxufVxuQGtleWZyYW1lcyBibGluayB7XG4gIDAlIHt9XG4gIDUwJSB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gIDEwMCUge31cbn1cblxuLyogQ2FuIHN0eWxlIGN1cnNvciBkaWZmZXJlbnQgaW4gb3ZlcndyaXRlIChub24taW5zZXJ0KSBtb2RlICovXG4uQ29kZU1pcnJvci1vdmVyd3JpdGUgLkNvZGVNaXJyb3ItY3Vyc29yIHt9XG5cbi5jbS10YWIgeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDsgfVxuXG4uQ29kZU1pcnJvci1ydWxlcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7IHJpZ2h0OiAwOyB0b3A6IC01MHB4OyBib3R0b206IC0yMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLkNvZGVNaXJyb3ItcnVsZXIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XG4gIHRvcDogMDsgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi8qIERFRkFVTFQgVEhFTUUgKi9cblxuLmNtLXMtZGVmYXVsdCAuY20taGVhZGVyIHtjb2xvcjogYmx1ZTt9XG4uY20tcy1kZWZhdWx0IC5jbS1xdW90ZSB7Y29sb3I6ICMwOTA7fVxuLmNtLW5lZ2F0aXZlIHtjb2xvcjogI2Q0NDt9XG4uY20tcG9zaXRpdmUge2NvbG9yOiAjMjkyO31cbi5jbS1oZWFkZXIsIC5jbS1zdHJvbmcge2ZvbnQtd2VpZ2h0OiBib2xkO31cbi5jbS1lbSB7Zm9udC1zdHlsZTogaXRhbGljO31cbi5jbS1saW5rIHt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTt9XG4uY20tc3RyaWtldGhyb3VnaCB7dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7fVxuXG4uY20tcy1kZWZhdWx0IC5jbS1rZXl3b3JkIHtjb2xvcjogIzcwODt9XG4uY20tcy1kZWZhdWx0IC5jbS1hdG9tIHtjb2xvcjogIzIxOTt9XG4uY20tcy1kZWZhdWx0IC5jbS1udW1iZXIge2NvbG9yOiAjMTY0O31cbi5jbS1zLWRlZmF1bHQgLmNtLWRlZiB7Y29sb3I6ICMwMGY7fVxuLmNtLXMtZGVmYXVsdCAuY20tdmFyaWFibGUsXG4uY20tcy1kZWZhdWx0IC5jbS1wdW5jdHVhdGlvbixcbi5jbS1zLWRlZmF1bHQgLmNtLXByb3BlcnR5LFxuLmNtLXMtZGVmYXVsdCAuY20tb3BlcmF0b3Ige31cbi5jbS1zLWRlZmF1bHQgLmNtLXZhcmlhYmxlLTIge2NvbG9yOiAjMDVhO31cbi5jbS1zLWRlZmF1bHQgLmNtLXZhcmlhYmxlLTMsIC5jbS1zLWRlZmF1bHQgLmNtLXR5cGUge2NvbG9yOiAjMDg1O31cbi5jbS1zLWRlZmF1bHQgLmNtLWNvbW1lbnQge2NvbG9yOiAjYTUwO31cbi5jbS1zLWRlZmF1bHQgLmNtLXN0cmluZyB7Y29sb3I6ICNhMTE7fVxuLmNtLXMtZGVmYXVsdCAuY20tc3RyaW5nLTIge2NvbG9yOiAjZjUwO31cbi5jbS1zLWRlZmF1bHQgLmNtLW1ldGEge2NvbG9yOiAjNTU1O31cbi5jbS1zLWRlZmF1bHQgLmNtLXF1YWxpZmllciB7Y29sb3I6ICM1NTU7fVxuLmNtLXMtZGVmYXVsdCAuY20tYnVpbHRpbiB7Y29sb3I6ICMzMGE7fVxuLmNtLXMtZGVmYXVsdCAuY20tYnJhY2tldCB7Y29sb3I6ICM5OTc7fVxuLmNtLXMtZGVmYXVsdCAuY20tdGFnIHtjb2xvcjogIzE3MDt9XG4uY20tcy1kZWZhdWx0IC5jbS1hdHRyaWJ1dGUge2NvbG9yOiAjMDBjO31cbi5jbS1zLWRlZmF1bHQgLmNtLWhyIHtjb2xvcjogIzk5OTt9XG4uY20tcy1kZWZhdWx0IC5jbS1saW5rIHtjb2xvcjogIzAwYzt9XG5cbi5jbS1zLWRlZmF1bHQgLmNtLWVycm9yIHtjb2xvcjogI2YwMDt9XG4uY20taW52YWxpZGNoYXIge2NvbG9yOiAjZjAwO31cblxuLkNvZGVNaXJyb3ItY29tcG9zaW5nIHsgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkOyB9XG5cbi8qIERlZmF1bHQgc3R5bGVzIGZvciBjb21tb24gYWRkb25zICovXG5cbmRpdi5Db2RlTWlycm9yIHNwYW4uQ29kZU1pcnJvci1tYXRjaGluZ2JyYWNrZXQge2NvbG9yOiAjMGIwO31cbmRpdi5Db2RlTWlycm9yIHNwYW4uQ29kZU1pcnJvci1ub25tYXRjaGluZ2JyYWNrZXQge2NvbG9yOiAjYTIyO31cbi5Db2RlTWlycm9yLW1hdGNoaW5ndGFnIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE1MCwgMCwgLjMpOyB9XG4uQ29kZU1pcnJvci1hY3RpdmVsaW5lLWJhY2tncm91bmQge2JhY2tncm91bmQ6ICNlOGYyZmY7fVxuXG4vKiBTVE9QICovXG5cbi8qIFRoZSByZXN0IG9mIHRoaXMgZmlsZSBjb250YWlucyBzdHlsZXMgcmVsYXRlZCB0byB0aGUgbWVjaGFuaWNzIG9mXG4gICB0aGUgZWRpdG9yLiBZb3UgcHJvYmFibHkgc2hvdWxkbid0IHRvdWNoIHRoZW0uICovXG5cbi5Db2RlTWlycm9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLkNvZGVNaXJyb3Itc2Nyb2xsIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbCAhaW1wb3J0YW50OyAvKiBUaGluZ3Mgd2lsbCBicmVhayBpZiB0aGlzIGlzIG92ZXJyaWRkZW4gKi9cbiAgLyogMzBweCBpcyB0aGUgbWFnaWMgbWFyZ2luIHVzZWQgdG8gaGlkZSB0aGUgZWxlbWVudCdzIHJlYWwgc2Nyb2xsYmFycyAqL1xuICAvKiBTZWUgb3ZlcmZsb3c6IGhpZGRlbiBpbiAuQ29kZU1pcnJvciAqL1xuICBtYXJnaW4tYm90dG9tOiAtMzBweDsgbWFyZ2luLXJpZ2h0OiAtMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTsgLyogUHJldmVudCBkcmFnZ2luZyBmcm9tIGhpZ2hsaWdodGluZyB0aGUgZWxlbWVudCAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uQ29kZU1pcnJvci1zaXplciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJpZ2h0OiAzMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4vKiBUaGUgZmFrZSwgdmlzaWJsZSBzY3JvbGxiYXJzLiBVc2VkIHRvIGZvcmNlIHJlZHJhdyBkdXJpbmcgc2Nyb2xsaW5nXG4gICBiZWZvcmUgYWN0dWFsIHNjcm9sbGluZyBoYXBwZW5zLCB0aHVzIHByZXZlbnRpbmcgc2hha2luZyBhbmRcbiAgIGZsaWNrZXJpbmcgYXJ0aWZhY3RzLiAqL1xuLkNvZGVNaXJyb3ItdnNjcm9sbGJhciwgLkNvZGVNaXJyb3ItaHNjcm9sbGJhciwgLkNvZGVNaXJyb3Itc2Nyb2xsYmFyLWZpbGxlciwgLkNvZGVNaXJyb3ItZ3V0dGVyLWZpbGxlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNjtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5Db2RlTWlycm9yLXZzY3JvbGxiYXIge1xuICByaWdodDogMDsgdG9wOiAwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5Db2RlTWlycm9yLWhzY3JvbGxiYXIge1xuICBib3R0b206IDA7IGxlZnQ6IDA7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuLkNvZGVNaXJyb3Itc2Nyb2xsYmFyLWZpbGxlciB7XG4gIHJpZ2h0OiAwOyBib3R0b206IDA7XG59XG4uQ29kZU1pcnJvci1ndXR0ZXItZmlsbGVyIHtcbiAgbGVmdDogMDsgYm90dG9tOiAwO1xufVxuXG4uQ29kZU1pcnJvci1ndXR0ZXJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDM7XG59XG4uQ29kZU1pcnJvci1ndXR0ZXIge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XG59XG4uQ29kZU1pcnJvci1ndXR0ZXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5Db2RlTWlycm9yLWd1dHRlci1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7IGJvdHRvbTogMDtcbiAgei1pbmRleDogNDtcbn1cbi5Db2RlTWlycm9yLWd1dHRlci1lbHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgei1pbmRleDogNDtcbn1cbi5Db2RlTWlycm9yLWd1dHRlci13cmFwcGVyIDo6c2VsZWN0aW9uIHsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgfVxuLkNvZGVNaXJyb3ItZ3V0dGVyLXdyYXBwZXIgOjotbW96LXNlbGVjdGlvbiB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IH1cblxuLkNvZGVNaXJyb3ItbGluZXMge1xuICBjdXJzb3I6IHRleHQ7XG4gIG1pbi1oZWlnaHQ6IDFweDsgLyogcHJldmVudHMgY29sbGFwc2luZyBiZWZvcmUgZmlyc3QgZHJhdyAqL1xufVxuLkNvZGVNaXJyb3IgcHJlIHtcbiAgLyogUmVzZXQgc29tZSBzdHlsZXMgdGhhdCB0aGUgcmVzdCBvZiB0aGUgcGFnZSBtaWdodCBoYXZlIHNldCAqL1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDA7IC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDsgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LWZvbnQtdmFyaWFudC1saWdhdHVyZXM6IGNvbnRleHR1YWw7XG4gIGZvbnQtdmFyaWFudC1saWdhdHVyZXM6IGNvbnRleHR1YWw7XG59XG4uQ29kZU1pcnJvci13cmFwIHByZSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG59XG5cbi5Db2RlTWlycm9yLWxpbmViYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwOyByaWdodDogMDsgdG9wOiAwOyBib3R0b206IDA7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5Db2RlTWlycm9yLWxpbmV3aWRnZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIHBhZGRpbmc6IDAuMXB4OyAvKiBGb3JjZSB3aWRnZXQgbWFyZ2lucyB0byBzdGF5IGluc2lkZSBvZiB0aGUgY29udGFpbmVyICovXG59XG5cbi5Db2RlTWlycm9yLXdpZGdldCB7fVxuXG4uQ29kZU1pcnJvci1ydGwgcHJlIHsgZGlyZWN0aW9uOiBydGw7IH1cblxuLkNvZGVNaXJyb3ItY29kZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIEZvcmNlIGNvbnRlbnQtYm94IHNpemluZyBmb3IgdGhlIGVsZW1lbnRzIHdoZXJlIHdlIGV4cGVjdCBpdCAqL1xuLkNvZGVNaXJyb3Itc2Nyb2xsLFxuLkNvZGVNaXJyb3Itc2l6ZXIsXG4uQ29kZU1pcnJvci1ndXR0ZXIsXG4uQ29kZU1pcnJvci1ndXR0ZXJzLFxuLkNvZGVNaXJyb3ItbGluZW51bWJlciB7XG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG4uQ29kZU1pcnJvci1tZWFzdXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5Db2RlTWlycm9yLWN1cnNvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uQ29kZU1pcnJvci1tZWFzdXJlIHByZSB7IHBvc2l0aW9uOiBzdGF0aWM7IH1cblxuZGl2LkNvZGVNaXJyb3ItY3Vyc29ycyB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAzO1xufVxuZGl2LkNvZGVNaXJyb3ItZHJhZ2N1cnNvcnMge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uQ29kZU1pcnJvci1mb2N1c2VkIGRpdi5Db2RlTWlycm9yLWN1cnNvcnMge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uQ29kZU1pcnJvci1zZWxlY3RlZCB7IGJhY2tncm91bmQ6ICNkOWQ5ZDk7IH1cbi5Db2RlTWlycm9yLWZvY3VzZWQgLkNvZGVNaXJyb3Itc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiAjZDdkNGYwOyB9XG4uQ29kZU1pcnJvci1jcm9zc2hhaXIgeyBjdXJzb3I6IGNyb3NzaGFpcjsgfVxuLkNvZGVNaXJyb3ItbGluZTo6c2VsZWN0aW9uLCAuQ29kZU1pcnJvci1saW5lID4gc3Bhbjo6c2VsZWN0aW9uLCAuQ29kZU1pcnJvci1saW5lID4gc3BhbiA+IHNwYW46OnNlbGVjdGlvbiB7IGJhY2tncm91bmQ6ICNkN2Q0ZjA7IH1cbi5Db2RlTWlycm9yLWxpbmU6Oi1tb3otc2VsZWN0aW9uLCAuQ29kZU1pcnJvci1saW5lID4gc3Bhbjo6LW1vei1zZWxlY3Rpb24sIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuID4gc3Bhbjo6LW1vei1zZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiAjZDdkNGYwOyB9XG5cbi5jbS1zZWFyY2hpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAuNCk7XG59XG5cbi8qIFVzZWQgdG8gZm9yY2UgYSBib3JkZXIgbW9kZWwgZm9yIGEgbm9kZSAqL1xuLmNtLWZvcmNlLWJvcmRlciB7IHBhZGRpbmctcmlnaHQ6IC4xcHg7IH1cblxuQG1lZGlhIHByaW50IHtcbiAgLyogSGlkZSB0aGUgY3Vyc29yIHdoZW4gcHJpbnRpbmcgKi9cbiAgLkNvZGVNaXJyb3IgZGl2LkNvZGVNaXJyb3ItY3Vyc29ycyB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5cbi8qIFNlZSBpc3N1ZSAjMjkwMSAqL1xuLmNtLXRhYi13cmFwLWhhY2s6YWZ0ZXIgeyBjb250ZW50OiAnJzsgfVxuXG4vKiBIZWxwIHVzZXJzIHVzZSBtYXJrc2VsZWN0aW9uIHRvIHNhZmVseSBzdHlsZSB0ZXh0IGJhY2tncm91bmQgKi9cbnNwYW4uQ29kZU1pcnJvci1zZWxlY3RlZHRleHQgeyBiYWNrZ3JvdW5kOiBub25lOyB9XG4iLCIvKlxuU29sYXJpemVkIHRoZW1lIGZvciBjb2RlLW1pcnJvclxuaHR0cDovL2V0aGFuc2Nob29ub3Zlci5jb20vc29sYXJpemVkXG4qL1xuXG4vKlxuU29sYXJpemVkIGNvbG9yIHBhbGV0dGVcbmh0dHA6Ly9ldGhhbnNjaG9vbm92ZXIuY29tL3NvbGFyaXplZC9pbWcvc29sYXJpemVkLXBhbGV0dGUucG5nXG4qL1xuXG4uc29sYXJpemVkLmJhc2UwMyB7IGNvbG9yOiAjMDAyYjM2OyB9XG4uc29sYXJpemVkLmJhc2UwMiB7IGNvbG9yOiAjMDczNjQyOyB9XG4uc29sYXJpemVkLmJhc2UwMSB7IGNvbG9yOiAjNTg2ZTc1OyB9XG4uc29sYXJpemVkLmJhc2UwMCB7IGNvbG9yOiAjNjU3YjgzOyB9XG4uc29sYXJpemVkLmJhc2UwIHsgY29sb3I6ICM4Mzk0OTY7IH1cbi5zb2xhcml6ZWQuYmFzZTEgeyBjb2xvcjogIzkzYTFhMTsgfVxuLnNvbGFyaXplZC5iYXNlMiB7IGNvbG9yOiAjZWVlOGQ1OyB9XG4uc29sYXJpemVkLmJhc2UzICB7IGNvbG9yOiAjZmRmNmUzOyB9XG4uc29sYXJpemVkLnNvbGFyLXllbGxvdyAgeyBjb2xvcjogI2I1ODkwMDsgfVxuLnNvbGFyaXplZC5zb2xhci1vcmFuZ2UgIHsgY29sb3I6ICNjYjRiMTY7IH1cbi5zb2xhcml6ZWQuc29sYXItcmVkIHsgY29sb3I6ICNkYzMyMmY7IH1cbi5zb2xhcml6ZWQuc29sYXItbWFnZW50YSB7IGNvbG9yOiAjZDMzNjgyOyB9XG4uc29sYXJpemVkLnNvbGFyLXZpb2xldCAgeyBjb2xvcjogIzZjNzFjNDsgfVxuLnNvbGFyaXplZC5zb2xhci1ibHVlIHsgY29sb3I6ICMyNjhiZDI7IH1cbi5zb2xhcml6ZWQuc29sYXItY3lhbiB7IGNvbG9yOiAjMmFhMTk4OyB9XG4uc29sYXJpemVkLnNvbGFyLWdyZWVuIHsgY29sb3I6ICM4NTk5MDA7IH1cblxuLyogQ29sb3Igc2NoZW1lIGZvciBjb2RlLW1pcnJvciAqL1xuXG4uY20tcy1zb2xhcml6ZWQge1xuICBsaW5lLWhlaWdodDogMS40NWVtO1xuICBjb2xvci1wcm9maWxlOiBzUkdCO1xuICByZW5kZXJpbmctaW50ZW50OiBhdXRvO1xufVxuLmNtLXMtc29sYXJpemVkLmNtLXMtZGFyayB7XG4gIGNvbG9yOiAjODM5NDk2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyYjM2O1xuICB0ZXh0LXNoYWRvdzogIzAwMmIzNiAwIDFweDtcbn1cbi5jbS1zLXNvbGFyaXplZC5jbS1zLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjZlMztcbiAgY29sb3I6ICM2NTdiODM7XG4gIHRleHQtc2hhZG93OiAjZWVlOGQ1IDAgMXB4O1xufVxuXG4uY20tcy1zb2xhcml6ZWQgLkNvZGVNaXJyb3Itd2lkZ2V0IHtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jbS1zLXNvbGFyaXplZCAuY20taGVhZGVyIHsgY29sb3I6ICM1ODZlNzU7IH1cbi5jbS1zLXNvbGFyaXplZCAuY20tcXVvdGUgeyBjb2xvcjogIzkzYTFhMTsgfVxuXG4uY20tcy1zb2xhcml6ZWQgLmNtLWtleXdvcmQgeyBjb2xvcjogI2NiNGIxNjsgfVxuLmNtLXMtc29sYXJpemVkIC5jbS1hdG9tIHsgY29sb3I6ICNkMzM2ODI7IH1cbi5jbS1zLXNvbGFyaXplZCAuY20tbnVtYmVyIHsgY29sb3I6ICNkMzM2ODI7IH1cbi5jbS1zLXNvbGFyaXplZCAuY20tZGVmIHsgY29sb3I6ICMyYWExOTg7IH1cblxuLmNtLXMtc29sYXJpemVkIC5jbS12YXJpYWJsZSB7IGNvbG9yOiAjODM5NDk2OyB9XG4uY20tcy1zb2xhcml6ZWQgLmNtLXZhcmlhYmxlLTIgeyBjb2xvcjogI2I1ODkwMDsgfVxuLmNtLXMtc29sYXJpemVkIC5jbS12YXJpYWJsZS0zLCAuY20tcy1zb2xhcml6ZWQgLmNtLXR5cGUgeyBjb2xvcjogIzZjNzFjNDsgfVxuXG4uY20tcy1zb2xhcml6ZWQgLmNtLXByb3BlcnR5IHsgY29sb3I6ICMyYWExOTg7IH1cbi5jbS1zLXNvbGFyaXplZCAuY20tb3BlcmF0b3IgeyBjb2xvcjogIzZjNzFjNDsgfVxuXG4uY20tcy1zb2xhcml6ZWQgLmNtLWNvbW1lbnQgeyBjb2xvcjogIzU4NmU3NTsgZm9udC1zdHlsZTppdGFsaWM7IH1cblxuLmNtLXMtc29sYXJpemVkIC5jbS1zdHJpbmcgeyBjb2xvcjogIzg1OTkwMDsgfVxuLmNtLXMtc29sYXJpemVkIC5jbS1zdHJpbmctMiB7IGNvbG9yOiAjYjU4OTAwOyB9XG5cbi5jbS1zLXNvbGFyaXplZCAuY20tbWV0YSB7IGNvbG9yOiAjODU5OTAwOyB9XG4uY20tcy1zb2xhcml6ZWQgLmNtLXF1YWxpZmllciB7IGNvbG9yOiAjYjU4OTAwOyB9XG4uY20tcy1zb2xhcml6ZWQgLmNtLWJ1aWx0aW4geyBjb2xvcjogI2QzMzY4MjsgfVxuLmNtLXMtc29sYXJpemVkIC5jbS1icmFja2V0IHsgY29sb3I6ICNjYjRiMTY7IH1cbi5jbS1zLXNvbGFyaXplZCAuQ29kZU1pcnJvci1tYXRjaGluZ2JyYWNrZXQgeyBjb2xvcjogIzg1OTkwMDsgfVxuLmNtLXMtc29sYXJpemVkIC5Db2RlTWlycm9yLW5vbm1hdGNoaW5nYnJhY2tldCB7IGNvbG9yOiAjZGMzMjJmOyB9XG4uY20tcy1zb2xhcml6ZWQgLmNtLXRhZyB7IGNvbG9yOiAjOTNhMWExOyB9XG4uY20tcy1zb2xhcml6ZWQgLmNtLWF0dHJpYnV0ZSB7IGNvbG9yOiAjMmFhMTk4OyB9XG4uY20tcy1zb2xhcml6ZWQgLmNtLWhyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzU4NmU3NTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY20tcy1zb2xhcml6ZWQgLmNtLWxpbmsgeyBjb2xvcjogIzkzYTFhMTsgY3Vyc29yOiBwb2ludGVyOyB9XG4uY20tcy1zb2xhcml6ZWQgLmNtLXNwZWNpYWwgeyBjb2xvcjogIzZjNzFjNDsgfVxuLmNtLXMtc29sYXJpemVkIC5jbS1lbSB7XG4gIGNvbG9yOiAjOTk5O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBkb3R0ZWQ7XG59XG4uY20tcy1zb2xhcml6ZWQgLmNtLWVycm9yLFxuLmNtLXMtc29sYXJpemVkIC5jbS1pbnZhbGlkY2hhciB7XG4gIGNvbG9yOiAjNTg2ZTc1O1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNkYzMyMmY7XG59XG5cbi5jbS1zLXNvbGFyaXplZC5jbS1zLWRhcmsgZGl2LkNvZGVNaXJyb3Itc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiAjMDczNjQyOyB9XG4uY20tcy1zb2xhcml6ZWQuY20tcy1kYXJrLkNvZGVNaXJyb3IgOjpzZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiByZ2JhKDcsIDU0LCA2NiwgMC45OSk7IH1cbi5jbS1zLXNvbGFyaXplZC5jbS1zLWRhcmsgLkNvZGVNaXJyb3ItbGluZTo6LW1vei1zZWxlY3Rpb24sIC5jbS1zLWRhcmsgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW46Oi1tb3otc2VsZWN0aW9uLCAuY20tcy1kYXJrIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuID4gc3Bhbjo6LW1vei1zZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiByZ2JhKDcsIDU0LCA2NiwgMC45OSk7IH1cblxuLmNtLXMtc29sYXJpemVkLmNtLXMtbGlnaHQgZGl2LkNvZGVNaXJyb3Itc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiAjZWVlOGQ1OyB9XG4uY20tcy1zb2xhcml6ZWQuY20tcy1saWdodCAuQ29kZU1pcnJvci1saW5lOjpzZWxlY3Rpb24sIC5jbS1zLWxpZ2h0IC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuOjpzZWxlY3Rpb24sIC5jbS1zLWxpZ2h0IC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuID4gc3Bhbjo6c2VsZWN0aW9uIHsgYmFja2dyb3VuZDogI2VlZThkNTsgfVxuLmNtLXMtc29sYXJpemVkLmNtLXMtbGlnaHQgLkNvZGVNaXJyb3ItbGluZTo6LW1vei1zZWxlY3Rpb24sIC5jbS1zLWxpZ2ggLkNvZGVNaXJyb3ItbGluZSA+IHNwYW46Oi1tb3otc2VsZWN0aW9uLCAuY20tcy1saWdoIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuID4gc3Bhbjo6LW1vei1zZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiAjZWVlOGQ1OyB9XG5cbi8qIEVkaXRvciBzdHlsaW5nICovXG5cblxuXG4vKiBMaXR0bGUgc2hhZG93IG9uIHRoZSB2aWV3LXBvcnQgb2YgdGhlIGJ1ZmZlciB2aWV3ICovXG4uY20tcy1zb2xhcml6ZWQuQ29kZU1pcnJvciB7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgN3B4IDAgMTJweCAtNnB4ICMwMDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgN3B4IDAgMTJweCAtNnB4ICMwMDA7XG4gIGJveC1zaGFkb3c6IGluc2V0IDdweCAwIDEycHggLTZweCAjMDAwO1xufVxuXG4vKiBSZW1vdmUgZ3V0dGVyIGJvcmRlciAqL1xuLmNtLXMtc29sYXJpemVkIC5Db2RlTWlycm9yLWd1dHRlcnMge1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG5cbi8qIEd1dHRlciBjb2xvcnMgYW5kIGxpbmUgbnVtYmVyIHN0eWxpbmcgYmFzZWQgb2YgY29sb3Igc2NoZW1lIChkYXJrIC8gbGlnaHQpICovXG5cbi8qIERhcmsgKi9cbi5jbS1zLXNvbGFyaXplZC5jbS1zLWRhcmsgLkNvZGVNaXJyb3ItZ3V0dGVycyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzM2NDI7XG59XG5cbi5jbS1zLXNvbGFyaXplZC5jbS1zLWRhcmsgLkNvZGVNaXJyb3ItbGluZW51bWJlciB7XG4gIGNvbG9yOiAjNTg2ZTc1O1xuICB0ZXh0LXNoYWRvdzogIzAyMTAxNCAwIC0xcHg7XG59XG5cbi8qIExpZ2h0ICovXG4uY20tcy1zb2xhcml6ZWQuY20tcy1saWdodCAuQ29kZU1pcnJvci1ndXR0ZXJzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZThkNTtcbn1cblxuLmNtLXMtc29sYXJpemVkLmNtLXMtbGlnaHQgLkNvZGVNaXJyb3ItbGluZW51bWJlciB7XG4gIGNvbG9yOiAjODM5NDk2O1xufVxuXG4vKiBDb21tb24gKi9cbi5jbS1zLXNvbGFyaXplZCAuQ29kZU1pcnJvci1saW5lbnVtYmVyIHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG4uY20tcy1zb2xhcml6ZWQgLkNvZGVNaXJyb3ItZ3V0dGVybWFya2VyLXN1YnRsZSB7IGNvbG9yOiAjNTg2ZTc1OyB9XG4uY20tcy1zb2xhcml6ZWQuY20tcy1kYXJrIC5Db2RlTWlycm9yLWd1dHRlcm1hcmtlciB7IGNvbG9yOiAjZGRkOyB9XG4uY20tcy1zb2xhcml6ZWQuY20tcy1saWdodCAuQ29kZU1pcnJvci1ndXR0ZXJtYXJrZXIgeyBjb2xvcjogI2NiNGIxNjsgfVxuXG4uY20tcy1zb2xhcml6ZWQgLkNvZGVNaXJyb3ItZ3V0dGVyIC5Db2RlTWlycm9yLWd1dHRlci10ZXh0IHtcbiAgY29sb3I6ICM1ODZlNzU7XG59XG5cbi8qIEN1cnNvciAqL1xuLmNtLXMtc29sYXJpemVkIC5Db2RlTWlycm9yLWN1cnNvciB7IGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzgxOTA5MDsgfVxuXG4vKiBGYXQgY3Vyc29yICovXG4uY20tcy1zb2xhcml6ZWQuY20tcy1saWdodC5jbS1mYXQtY3Vyc29yIC5Db2RlTWlycm9yLWN1cnNvciB7IGJhY2tncm91bmQ6ICM3N2VlNzc7IH1cbi5jbS1zLXNvbGFyaXplZC5jbS1zLWxpZ2h0IC5jbS1hbmltYXRlLWZhdC1jdXJzb3IgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdlZTc3OyB9XG4uY20tcy1zb2xhcml6ZWQuY20tcy1kYXJrLmNtLWZhdC1jdXJzb3IgLkNvZGVNaXJyb3ItY3Vyc29yIHsgYmFja2dyb3VuZDogIzU4NmU3NTsgfVxuLmNtLXMtc29sYXJpemVkLmNtLXMtZGFyayAuY20tYW5pbWF0ZS1mYXQtY3Vyc29yIHsgYmFja2dyb3VuZC1jb2xvcjogIzU4NmU3NTsgfVxuXG4vKiBBY3RpdmUgbGluZSAqL1xuLmNtLXMtc29sYXJpemVkLmNtLXMtZGFyayAuQ29kZU1pcnJvci1hY3RpdmVsaW5lLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xufVxuLmNtLXMtc29sYXJpemVkLmNtLXMtbGlnaHQgLkNvZGVNaXJyb3ItYWN0aXZlbGluZS1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cbiIsIkBpbXBvcnQgJ35jb2RlbWlycm9yL2xpYi9jb2RlbWlycm9yLmNzcyc7XG5AaW1wb3J0ICd+Y29kZW1pcnJvci90aGVtZS9zb2xhcml6ZWQuY3NzJztcblxuYW5ndWxhci1reXRoZS11aS1jb2RlLW1pcnJvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcblxuICAuY29kZS1taXJyb3ItY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuQ29kZU1pcnJvciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/code-mirror/src/lib/code-mirror.component.ts":
/*!*********************************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/code-mirror/src/lib/code-mirror.component.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var CodeMirror = __webpack_require__(/*! codemirror */ "../../node_modules/codemirror/lib/codemirror.js");
var kythe_1 = __webpack_require__(/*! @angular-kythe-ui/kythe */ "../../libs/kythe/src/index.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var CODE_MIRROR_CONTAINER_SELECTOR = '.code-mirror-container';
var CodeMirrorComponent = /** @class */ (function () {
    function CodeMirrorComponent(elementRef, activeRoute, kytheService, ngZone) {
        this.elementRef = elementRef;
        this.activeRoute = activeRoute;
        this.kytheService = kytheService;
        this.ngZone = ngZone;
        this.nativeElement = this.elementRef.nativeElement;
    }
    CodeMirrorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.codeMirrorContainer = document.createElement('div');
            _this.codeMirrorContainer.classList.add('code-mirror-container');
            var editor = CodeMirror(_this.codeMirrorContainer, {
                theme: 'solarized',
                lineNumbers: true,
                styleSelectedText: true,
                mode: 'go',
                readOnly: 'nocursor'
            });
            _this.paramsSubscription = _this.activeRoute.paramMap
                .pipe(operators_1.map(function (paramMap) {
                return kythe_1.KytheTarget.fromCorpusAndPath({
                    corpus: paramMap.get('corpus'),
                    path: paramMap.get('path')
                });
            }), operators_1.switchMap(function (kytheTarget) {
                return _this.kytheService.getDecorations(kythe_1.GetDecorationsRequest.fromTicket(kytheTarget));
            }))
                .subscribe(function (kytheDecoration) {
                if (_this.nativeElement.hasChildNodes()) {
                    _this.nativeElement.removeChild(_this.codeMirrorContainer);
                }
                kythe_1.decorate(editor, kytheDecoration);
                _this.nativeElement.prepend(_this.codeMirrorContainer);
                editor.refresh();
            });
        });
    };
    CodeMirrorComponent.prototype.ngOnDestroy = function () {
        if (this.paramsSubscription) {
            this.paramsSubscription.unsubscribe();
        }
    };
    CodeMirrorComponent = __decorate([
        core_1.Component({
            selector: 'angular-kythe-ui-code-mirror',
            template: __webpack_require__(/*! ./code-mirror.component.html */ "../../libs/code-mirror/src/lib/code-mirror.component.html"),
            styles: [__webpack_require__(/*! ./code-mirror.component.scss */ "../../libs/code-mirror/src/lib/code-mirror.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            router_1.ActivatedRoute,
            kythe_1.KytheService,
            core_1.NgZone])
    ], CodeMirrorComponent);
    return CodeMirrorComponent;
}());
exports.CodeMirrorComponent = CodeMirrorComponent;


/***/ }),

/***/ "../../libs/code-mirror/src/lib/code-mirror.module.ts":
/*!******************************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/code-mirror/src/lib/code-mirror.module.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var code_mirror_component_1 = __webpack_require__(/*! ./code-mirror.component */ "../../libs/code-mirror/src/lib/code-mirror.component.ts");
var kythe_1 = __webpack_require__(/*! @angular-kythe-ui/kythe */ "../../libs/kythe/src/index.ts");
function matcher(segments) {
    return {
        consumed: segments,
        posParams: {
            corpus: new router_1.UrlSegment(segments[0].toString(), {}),
            path: new router_1.UrlSegment(segments
                .slice(1)
                .map(function (s) { return s.toString(); })
                .join('/'), {})
        }
    };
}
exports.matcher = matcher;
exports.codeMirrorRoutes = [
    {
        component: code_mirror_component_1.CodeMirrorComponent,
        matcher: matcher
    }
];
exports.CODE_MIRROR_FACTORY = new core_1.InjectionToken('CodeMirror');
var CodeMirrorModule = /** @class */ (function () {
    function CodeMirrorModule() {
    }
    CodeMirrorModule = __decorate([
        core_1.NgModule({
            imports: [kythe_1.KytheModule, common_1.CommonModule],
            declarations: [code_mirror_component_1.CodeMirrorComponent],
            exports: [code_mirror_component_1.CodeMirrorComponent]
            // providers: [{ provide: CODE_MIRROR_FACTORY, useFactory: () => CodeMirror }]
        })
    ], CodeMirrorModule);
    return CodeMirrorModule;
}());
exports.CodeMirrorModule = CodeMirrorModule;


/***/ }),

/***/ "../../libs/file-tree/src/index.ts":
/*!***********************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/file-tree/src/index.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./lib/file-tree.module */ "../../libs/file-tree/src/lib/file-tree.module.ts"));


/***/ }),

/***/ "../../libs/file-tree/src/lib/file-tree.component.html":
/*!*******************************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/file-tree/src/lib/file-tree.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button> {{ node.name }}\n  </mat-tree-node>\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{ treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right' }}\n      </mat-icon>\n    </button>\n    {{ node.name }}\n  </mat-tree-node>\n</mat-tree>\n"

/***/ }),

/***/ "../../libs/file-tree/src/lib/file-tree.component.scss":
/*!*******************************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/file-tree/src/lib/file-tree.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2ZpbGUtdHJlZS9zcmMvbGliL2ZpbGUtdHJlZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "../../libs/file-tree/src/lib/file-tree.component.ts":
/*!*****************************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/file-tree/src/lib/file-tree.component.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var file_tree_data_source_1 = __webpack_require__(/*! ./file-tree.data-source */ "../../libs/file-tree/src/lib/file-tree.data-source.ts");
var tree_1 = __webpack_require__(/*! @angular/cdk/tree */ "../../node_modules/@angular/cdk/esm5/tree.es5.js");
var kythe_1 = __webpack_require__(/*! @angular-kythe-ui/kythe */ "../../libs/kythe/src/index.ts");
var FileTreeComponent = /** @class */ (function () {
    function FileTreeComponent(kytheService) {
        this.kytheService = kytheService;
        this.treeControl = new tree_1.FlatTreeControl(this.getLevel, this.hasChild);
        this.dataSource = new file_tree_data_source_1.FileTreeDataSource(this.treeControl, this.kytheService);
    }
    FileTreeComponent.prototype.ngOnInit = function () { };
    FileTreeComponent.prototype.getLevel = function (dynamicFlatNode) {
        return dynamicFlatNode.kytheTarget.depth;
    };
    FileTreeComponent.prototype.hasChild = function () {
        return true;
    };
    FileTreeComponent = __decorate([
        core_1.Component({
            selector: 'angular-kythe-ui-file-tree',
            template: __webpack_require__(/*! ./file-tree.component.html */ "../../libs/file-tree/src/lib/file-tree.component.html"),
            styles: [__webpack_require__(/*! ./file-tree.component.scss */ "../../libs/file-tree/src/lib/file-tree.component.scss")]
        }),
        __metadata("design:paramtypes", [kythe_1.KytheService])
    ], FileTreeComponent);
    return FileTreeComponent;
}());
exports.FileTreeComponent = FileTreeComponent;


/***/ }),

/***/ "../../libs/file-tree/src/lib/file-tree.data-source.ts":
/*!*******************************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/file-tree/src/lib/file-tree.data-source.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var table_1 = __webpack_require__(/*! @angular/cdk/table */ "../../node_modules/@angular/cdk/esm5/table.es5.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var DynamicFlatNode = /** @class */ (function () {
    function DynamicFlatNode(kytheTarget, name, level, isLoading) {
        if (isLoading === void 0) { isLoading = false; }
        this.kytheTarget = kytheTarget;
        this.name = name;
        this.level = level;
        this.isLoading = new rxjs_1.BehaviorSubject(isLoading);
    }
    DynamicFlatNode.fromKytheTarget = function (kytheTarget, level) {
        return new DynamicFlatNode(kytheTarget, kytheTarget.corpus, level);
    };
    return DynamicFlatNode;
}());
exports.DynamicFlatNode = DynamicFlatNode;
var FileTreeDataSource = /** @class */ (function (_super) {
    __extends(FileTreeDataSource, _super);
    function FileTreeDataSource(treeControl, kytheService) {
        var _this = _super.call(this) || this;
        _this.treeControl = treeControl;
        _this.kytheService = kytheService;
        _this.dataChange = new rxjs_1.BehaviorSubject([]);
        return _this;
    }
    Object.defineProperty(FileTreeDataSource.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        set: function (value) {
            this.treeControl.dataNodes = value;
            this.dataChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    FileTreeDataSource.prototype.connect = function (collectionViewer) {
        var _this = this;
        this.kytheService.corpusRoots().subscribe(function (kytheTargets) {
            _this.data = kytheTargets.map(function (target) {
                return DynamicFlatNode.fromKytheTarget(target, 0);
            });
        });
        if (!this.treeControl.expansionModel.changed) {
            throw new Error('Tree control does not have change handler');
        }
        this.treeControl.expansionModel.changed.subscribe(function (change) {
            if (change.added || change.removed) {
                _this.handleTreeControl(change);
            }
        });
        return rxjs_1.merge(collectionViewer.viewChange, this.dataChange).pipe(operators_1.map(function () { return _this.data; }));
    };
    FileTreeDataSource.prototype.disconnect = function () { };
    /** Handle expand/collapse behaviors */
    FileTreeDataSource.prototype.handleTreeControl = function (change) {
        var _this = this;
        if (change.added) {
            change.added.forEach(function (node) { return _this.toggleNode(node, true); });
        }
        if (change.removed) {
            change.removed
                .slice()
                .reverse()
                .forEach(function (node) { return _this.toggleNode(node, false); });
        }
    };
    FileTreeDataSource.prototype.toggleNode = function (node, expand) {
        var _this = this;
        var index = this.data.indexOf(node);
        if (index < 0) {
            return;
        }
        node.isLoading.next(true);
        if (expand) {
            this.getChildren(node)
                .pipe(operators_1.tap(function () { return node.isLoading.next(true); }))
                .subscribe(function (children) {
                node.isLoading.next(false);
                index = _this.data.indexOf(node);
                _this.data = _this.data.slice(0, index + 1).concat(children, _this.data.slice(index + 1, _this.data.length));
            });
        }
        else {
            var count_1 = 0;
            for (var i = index + 1; i < this.data.length && this.data[i].level > node.level; i++, count_1++) { }
            if (count_1) {
                this.data = this.data.filter(function (_, i) { return !Boolean(index + 1 <= i && i < index + 1 + count_1); });
            }
        }
    };
    FileTreeDataSource.prototype.getChildren = function (node) {
        return this.kytheService
            .dir({
            corpus: node.kytheTarget.corpus,
            path: node.kytheTarget.path,
            root: null
        })
            .pipe(operators_1.first(), operators_1.map(function (kytheTargets) { return kytheTargets.map(DynamicFlatNode.fromKytheTarget); }));
    };
    return FileTreeDataSource;
}(table_1.DataSource));
exports.FileTreeDataSource = FileTreeDataSource;


/***/ }),

/***/ "../../libs/file-tree/src/lib/file-tree.module.ts":
/*!**************************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/file-tree/src/lib/file-tree.module.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var file_tree_component_1 = __webpack_require__(/*! ./file-tree.component */ "../../libs/file-tree/src/lib/file-tree.component.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
var FileTreeModule = /** @class */ (function () {
    function FileTreeModule() {
    }
    FileTreeModule = __decorate([
        core_1.NgModule({
            declarations: [file_tree_component_1.FileTreeComponent],
            imports: [
                material_1.MatButtonModule,
                material_1.MatTreeModule,
                material_1.MatIconModule,
                common_1.CommonModule,
                http_1.HttpClientModule,
                material_1.MatTreeModule,
                material_1.MatIconModule
            ],
            exports: [file_tree_component_1.FileTreeComponent]
        })
    ], FileTreeModule);
    return FileTreeModule;
}());
exports.FileTreeModule = FileTreeModule;


/***/ }),

/***/ "../../libs/kythe/src/index.ts":
/*!*******************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/kythe/src/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Public API Surface of kythe
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./lib/kythe.service */ "../../libs/kythe/src/lib/kythe.service.ts"));
__export(__webpack_require__(/*! ./lib/kythe.module */ "../../libs/kythe/src/lib/kythe.module.ts"));
__export(__webpack_require__(/*! ./lib/codemirror */ "../../libs/kythe/src/lib/codemirror.ts"));
/**
 * Testing API of kythe.
 */
var response_large_1 = __webpack_require__(/*! ./testing/response_large */ "../../libs/kythe/src/testing/response_large.ts");
exports.largeResponse = response_large_1.response;
var response_small_1 = __webpack_require__(/*! ./testing/response_small */ "../../libs/kythe/src/testing/response_small.ts");
exports.smallResponse = response_small_1.response;


/***/ }),

/***/ "../../libs/kythe/src/lib/codemirror.ts":
/*!****************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/kythe/src/lib/codemirror.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function offsetToPosition(offset) {
    return { ch: offset.column_offset, line: offset.line_number - 1 };
}
function decorate(codeMirror, kytheDecoration) {
    var value = atob(kytheDecoration.source_text);
    codeMirror.setValue(value);
    kytheDecoration.reference.forEach(function (reference) {
        if (!reference.span.start.column_offset ||
            !reference.span.end.column_offset) {
            // TODO: Figure out what circumstances don't have column offsets and
            // handle them better than this.
            console.log(reference.target_ticket);
            // These things we don't do either!
            return;
        }
        if (reference.span.start.line_number !== reference.span.end.line_number) {
            // TODO: Figure out what circumstances hilighting spans multiple lines and
            // handle them better than ignoring.
            console.log(reference.target_ticket);
            // We don't do multi line hilighting;
            return;
        }
        var start = offsetToPosition(reference.span.start), end = offsetToPosition(reference.span.end), elText = value.substr(reference.span.start.byte_offset, reference.span.end.byte_offset - reference.span.start.byte_offset);
        var el = document.createElement('a');
        el.setAttribute('href', 'https://google.com');
        el.innerText = elText;
        codeMirror.markText(start, end, { replacedWith: el });
    });
}
exports.decorate = decorate;


/***/ }),

/***/ "../../libs/kythe/src/lib/kythe.module.ts":
/*!******************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/kythe/src/lib/kythe.module.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
var kythe_service_1 = __webpack_require__(/*! ./kythe.service */ "../../libs/kythe/src/lib/kythe.service.ts");
var KytheModule = /** @class */ (function () {
    function KytheModule() {
    }
    KytheModule = __decorate([
        core_1.NgModule({
            providers: [kythe_service_1.KytheService],
            imports: [http_1.HttpClientModule]
        })
    ], KytheModule);
    return KytheModule;
}());
exports.KytheModule = KytheModule;


/***/ }),

/***/ "../../libs/kythe/src/lib/kythe.service.ts":
/*!*******************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/kythe/src/lib/kythe.service.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var KytheTarget = /** @class */ (function () {
    function KytheTarget(kytheUri) {
        this.kytheUri = kytheUri;
        // kythe-uri    = "kythe:" [corpus] attrs ["#" signature]
        // corpus       = "//" label 0*{"/" path-segment}
        // label        = ireg-name -- RFC 3987
        // attrs        = ["?" lang-attr] ["?" path-attr] ["?" root-attr]
        // lang-attr    = "lang=" language
        // path-attr    = "path=" path-segment 0*{"/" path-segment}
        // root-attr    = "root=" root-segment 0*{"/" root-segment}
        // language     = 1*ipchar  -- RFC 3987
        // signature    = 1*ipchar  -- RFC 3987
        // root-segment = 1*ipchar  -- RFC 3987
        // path-segment = 1*{unreserved | pct-encoded | "/"}  -- RFC 3987
        this.url = new URL(this.kytheUri);
        this.corpus = this.url.pathname.slice(2);
        this.path = this.url.searchParams.get('path') || '';
        this.depth = this.path.split('/').length;
    }
    KytheTarget.fromCorpusRoot = function (corpusRoot) {
        var root = corpusRoot.root[0] ? "?root=" + corpusRoot.root[0] : '';
        return new KytheTarget("kythe://" + corpusRoot.name + root);
    };
    KytheTarget.fromCorpusAndPath = function (_a) {
        var corpus = _a.corpus, path = _a.path;
        return new KytheTarget("kythe://" + corpus + "?path=" + path);
    };
    KytheTarget.prototype.toString = function () {
        return "kythe://" + this.corpus + "?path=" + this.corpus + "%2f" + encodeURIComponent(this.path);
    };
    return KytheTarget;
}());
exports.KytheTarget = KytheTarget;
var GetDecorationsRequest = /** @class */ (function () {
    function GetDecorationsRequest(location, references, source_text, target_definitions) {
        this.location = location;
        this.references = references;
        this.source_text = source_text;
        this.target_definitions = target_definitions;
    }
    GetDecorationsRequest.fromTicket = function (target) {
        return new GetDecorationsRequest({ ticket: target }, true, true, true);
    };
    return GetDecorationsRequest;
}());
exports.GetDecorationsRequest = GetDecorationsRequest;
var baseUrl = 'https://cors-anywhere.herokuapp.com/xrefs-dot-kythe-repo.appspot.com';
var KytheService = /** @class */ (function () {
    function KytheService(http) {
        this.http = http;
    }
    KytheService.prototype.corpusRoots = function () {
        return this.http
            .get(baseUrl + '/corpusRoots')
            .pipe(operators_1.map(function (response) { return response.corpus.map(KytheTarget.fromCorpusRoot); }));
    };
    KytheService.prototype.dir = function (dirRequest) {
        return this.http
            .post(baseUrl + '/dir', dirRequest)
            .pipe(operators_1.map(function (response) { return response.subdirectory.map(function (uri) { return new KytheTarget(uri); }); }));
    };
    KytheService.prototype.getDecorations = function (getDecorationsRequest) {
        return this.http.post(baseUrl + '/decorations', {
            location: { ticket: getDecorationsRequest.location.ticket.toString() },
            references: true,
            source_text: true,
            target_definitions: true
        });
    };
    KytheService = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], KytheService);
    return KytheService;
}());
exports.KytheService = KytheService;


/***/ }),

/***/ "../../libs/kythe/src/testing/response_large.ts":
/*!************************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/kythe/src/testing/response_large.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.response = {
    location: {
        ticket: 'kythe://kythe.io?path=kythe.io/kythe/go/extractors/golang/golang.go'
    },
    source_text: 'LyoKICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4KICoKICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlICJMaWNlbnNlIik7CiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4KICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CiAqCiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCiAqCiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gIkFTIElTIiBCQVNJUywKICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCiAqLwoKLy8gUGFja2FnZSBnb2xhbmcgcHJvZHVjZXMgS3l0aGUgY29tcGlsYXRpb24gdW5pdHMgZm9yIGVhY2ggR28gaW1wb3J0IHBhdGgKLy8gc3BlY2lmaWVkLiAgQ29tcGlsYXRpb25zIGFyZSBleHRyYWN0ZWQgaW5jcmVtZW50YWxseSwgc28gdGhhdCBwYXJ0aWFsCi8vIHJlc3VsdHMgYXJlIGF2YWlsYWJsZSB0byB0aGUgY2FsbGVyLgovLwovLyBVc2FnZToKLy8gICB2YXIgYyBnb2xhbmcuRXh0cmFjdG9yCi8vICAgaWYgXywgZXJyIDo9IGMuTG9jYXRlKCJmbXQiKTsgZXJyICE9IG5pbCB7Ci8vICAgICBsb2cuRmF0YWxmKGBVbmFibGUgdG8gbG9jYXRlIHBhY2thZ2UgImZtdCI6ICV2YCwgZXJyKQovLyAgIH0KLy8gICBjLkV4dHJhY3QoKQovLyAgIGZvciBfLCBwa2cgOj0gcmFuZ2UgYy5QYWNrYWdlcyB7Ci8vICAgICBpZiBwa2cuRXJyICE9IG5pbCB7Ci8vICAgICAgIGxvZy5QcmludGYoIkVycm9yIGV4dHJhY3RpbmcgJXE6ICV2IiwgcGtnLlBhdGgsIHBrZy5FcnIpCi8vICAgICB9IGVsc2UgewovLyAgICAgICB3cml0ZU91dHB1dChwa2cpCi8vICAgICB9Ci8vICAgfQovLwpwYWNrYWdlIGdvbGFuZwoKaW1wb3J0ICgKCSJjb250ZXh0IgoJImZtdCIKCSJnby9idWlsZCIKCSJvcyIKCSJwYXRoL2ZpbGVwYXRoIgoJInN0cmluZ3MiCgoJImt5dGhlLmlvL2t5dGhlL2dvL2V4dHJhY3RvcnMvZ292bmFtZSIKCSJreXRoZS5pby9reXRoZS9nby9wbGF0Zm9ybS9pbmRleHBhY2siCgkia3l0aGUuaW8va3l0aGUvZ28vcGxhdGZvcm0va2luZGV4IgoJImt5dGhlLmlvL2t5dGhlL2dvL3BsYXRmb3JtL3ZmcyIKCSJreXRoZS5pby9reXRoZS9nby91dGlsL3B0eXBlcyIKCgkiYml0YnVja2V0Lm9yZy9jcmVhY2hhZGFpci9zdHJpbmdzZXQiCgoJYXBiICJreXRoZS5pby9reXRoZS9wcm90by9hbmFseXNpc19wcm90byIKCWdvcGIgImt5dGhlLmlvL2t5dGhlL3Byb3RvL2dvX3Byb3RvIgoJc3BiICJreXRoZS5pby9reXRoZS9wcm90by9zdG9yYWdlX3Byb3RvIgopCgp2YXIgd29ya2luZ0RpciBzdHJpbmcKCmZ1bmMgaW5pdCgpIHsKCWlmIHdkLCBlcnIgOj0gb3MuR2V0d2QoKTsgZXJyID09IG5pbCB7CgkJd29ya2luZ0RpciA9IHdkCgl9Cn0KCi8vIEFuIEV4dHJhY3RvciBjb250YWlucyB0aGUgc3RhdGUgbmVlZGVkIHRvIGV4dHJhY3QgR28gY29tcGlsYXRpb25zIGZyb20gYnVpbGQKLy8gaW5mb3JtYXRpb24uICBUaGUgemVybyB2YWx1ZSBpcyByZWFkeSBmb3IgdXNlIHdpdGggZGVmYXVsdCBzZXR0aW5ncy4KdHlwZSBFeHRyYWN0b3Igc3RydWN0IHsKCS8vIFRoZSBidWlsZCBjb25maWd1cmF0aW9uIHRvIHVzZSBmb3IgZXh0cmFjdGlvbi4KCUJ1aWxkQ29udGV4dCBidWlsZC5Db250ZXh0CgoJLy8gVGhlIHBhY2thZ2VzIHRoYXQgaGF2ZSBiZWVuIGV4dHJhY3RlZCBzbyBmYXIgKGluaXRpYWxseSBlbXB0eSkuCglQYWNrYWdlcyBbXSpQYWNrYWdlCgoJLy8gVGhlIG5hbWUgb2YgdGhlIGNvcnB1cyB0aGF0IHNob3VsZCBiZSBhdHRyaWJ1dGVkIHRvIHBhY2thZ2VzIHdob3NlCgkvLyBjb3JwdXMgaXMgbm90IHNwZWNpZmllZCBhbmQgY2Fubm90IGJlIGluZmVycmVkIChlLmcuLCBsb2NhbCBpbXBvcnRzKS4KCUNvcnB1cyBzdHJpbmcKCgkvLyBUaGUgbG9jYWwgcGF0aCBhZ2FpbnN0IHdoaWNoIHJlbGF0aXZlIGltcG9ydHMgc2hvdWxkIGJlIHJlc29sdmVkLgoJTG9jYWxQYXRoIHN0cmluZwoKCS8vIEFuIGFsdGVybmF0aXZlIGluc3RhbGxhdGlvbiBwYXRoIGZvciBjb21waWxlZCBwYWNrYWdlcy4gIElmIHRoaXMgaXMgc2V0LAoJLy8gYW5kIGEgY29tcGlsZWQgcGFja2FnZSBjYW5ub3QgYmUgZm91bmQgaW4gdGhlIG5vcm1hbCBsb2NhdGlvbiwgdGhlCgkvLyBleHRyYWN0b3Igd2lsbCB0cnkgaW4gdGhpcyBsb2NhdGlvbi4KCUFsdEluc3RhbGxQYXRoIHN0cmluZwoKCS8vIEV4dHJhIGZpbGUgcGF0aHMgdG8gaW5jbHVkZSBpbiBlYWNoIGNvbXBpbGF0aW9uIHJlY29yZC4KCUV4dHJhRmlsZXMgW11zdHJpbmcKCgkvLyBBIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGEgdm5hbWUgZnJvbSBhIHBhY2thZ2UncyBpbXBvcnQgcGF0aC4gIElmIG5pbCwKCS8vIHRoZSBleHRyYWN0b3Igd2lsbCB1c2UgZ292bmFtZS5Gb3JQYWNrYWdlLgoJUGFja2FnZVZOYW1lIGZ1bmMoY29ycHVzIHN0cmluZywgYnAgKmJ1aWxkLlBhY2thZ2UpICpzcGIuVk5hbWUKCgkvLyBBIGZ1bmN0aW9uIHRvIGNvbnZlcnQgYSBkaXJlY3RvcnkgcGF0aCB0byBhbiBpbXBvcnQgcGF0aC4gIElmIG5pbCwgdGhlCgkvLyBwYXRoIGlzIG1hZGUgcmVsYXRpdmUgdG8gdGhlIGZpcnN0IG1hdGNoaW5nIGVsZW1lbnQgb2YgdGhlIGJ1aWxkCgkvLyBjb250ZXh0J3MgR09ST09UIG9yIEdPUEFUSCBvciB0aGUgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeS4KCURpclRvSW1wb3J0IGZ1bmMocGF0aCBzdHJpbmcpIChzdHJpbmcsIGVycm9yKQoKCXBtYXAgbWFwW3N0cmluZ10qYnVpbGQuUGFja2FnZSAvLyBNYXAgb2YgaW1wb3J0IHBhdGggdG8gYnVpbGQgcGFja2FnZQoJZm1hcCBtYXBbc3RyaW5nXXN0cmluZyAgICAgICAgIC8vIE1hcCBvZiBmaWxlIHBhdGggdG8gY29udGVudCBkaWdlc3QKfQoKLy8gYWRkUGFja2FnZSBpbXBvcnRzIHRoZSBzcGVjaWZpZWQgcGFja2FnZSwgaWYgaXQgaGFzIG5vdCBhbHJlYWR5IGJlZW4KLy8gaW1wb3J0ZWQsIGFuZCByZXR1cm5zIGl0cyBwYWNrYWdlIHZhbHVlLgpmdW5jIChlICpFeHRyYWN0b3IpIGFkZFBhY2thZ2UoaW1wb3J0UGF0aCBzdHJpbmcpICgqYnVpbGQuUGFja2FnZSwgZXJyb3IpIHsKCWlmIGJwIDo9IGUucG1hcFtpbXBvcnRQYXRoXTsgYnAgIT0gbmlsIHsKCQlyZXR1cm4gYnAsIG5pbAoJfQoJYnAsIGVyciA6PSBlLkJ1aWxkQ29udGV4dC5JbXBvcnQoaW1wb3J0UGF0aCwgZS5Mb2NhbFBhdGgsIGJ1aWxkLkFsbG93QmluYXJ5KQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIG5pbCwgZXJyCgl9CgllLm1hcFBhY2thZ2UoaW1wb3J0UGF0aCwgYnApCglyZXR1cm4gYnAsIG5pbAp9CgpmdW5jIChlICpFeHRyYWN0b3IpIG1hcFBhY2thZ2UoaW1wb3J0UGF0aCBzdHJpbmcsIGJwICpidWlsZC5QYWNrYWdlKSB7CglpZiBlLnBtYXAgPT0gbmlsIHsKCQllLnBtYXAgPSBtYXBbc3RyaW5nXSpidWlsZC5QYWNrYWdle2ltcG9ydFBhdGg6IGJwfQoJfSBlbHNlIHsKCQllLnBtYXBbaW1wb3J0UGF0aF0gPSBicAoJfQp9CgovLyByZWFkRmlsZSByZWFkcyB0aGUgY29udGVudHMgb2YgcGF0aCBhcyByZXNvbHZlZCB0aHJvdWdoIHRoZSBleHRyYWN0ZWQgc2V0dGluZ3MuCmZ1bmMgKGUgKkV4dHJhY3RvcikgcmVhZEZpbGUoY3R4IGNvbnRleHQuQ29udGV4dCwgcGF0aCBzdHJpbmcpIChbXWJ5dGUsIGVycm9yKSB7CglkYXRhLCBlcnIgOj0gdmZzLlJlYWRGaWxlKGN0eCwgcGF0aCkKCWlmIGVyciAhPSBuaWwgewoJCS8vIElmIHRoZXJlJ3MgYW4gYWx0ZXJuYXRpdmUgaW5zdGFsbGF0aW9uIHBhdGgsIGFuZCB0aGlzIGlzIGEgcGF0aCB0aGF0CgkJLy8gY291bGQgcG90ZW50aWFsbHkgYmUgdGhlcmUsIHRyeSB0aGF0LgoJCWlmIGkgOj0gc3RyaW5ncy5JbmRleChwYXRoLCAiL3BrZy8iKTsgaSA+PSAwICYmIGUuQWx0SW5zdGFsbFBhdGggIT0gIiIgewoJCQlhbHQgOj0gZS5BbHRJbnN0YWxsUGF0aCArIHBhdGhbaTpdCgkJCXJldHVybiB2ZnMuUmVhZEZpbGUoY3R4LCBhbHQpCgkJfQoJfQoJcmV0dXJuIGRhdGEsIGVycgp9CgovLyBmZXRjaEFuZFN0b3JlIHJlYWRzIHRoZSBjb250ZW50cyBvZiBwYXRoIGFuZCBzdG9yZXMgdGhlbSBpbnRvIGEsIHJldHVybmluZwovLyB0aGUgZGlnZXN0IG9mIHRoZSBjb250ZW50cy4gIFRoZSBwYXRoIHRvIGRpZ2VzdCBtYXBwaW5nIGlzIGNhY2hlZCBzbyB0aGF0Ci8vIHJlcGVhdGVkIHVzZXMgb2YgdGhlIHNhbWUgZmlsZSB3aWxsIGF2b2lkIHJlZHVuZGFudCB3b3JrLgpmdW5jIChlICpFeHRyYWN0b3IpIGZldGNoQW5kU3RvcmUoY3R4IGNvbnRleHQuQ29udGV4dCwgcGF0aCBzdHJpbmcsIGEgKmluZGV4cGFjay5BcmNoaXZlKSAoc3RyaW5nLCBlcnJvcikgewoJaWYgZGlnZXN0LCBvayA6PSBlLmZtYXBbcGF0aF07IG9rIHsKCQlyZXR1cm4gZGlnZXN0LCBuaWwKCX0KCWRhdGEsIGVyciA6PSBlLnJlYWRGaWxlKGN0eCwgcGF0aCkKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiAiIiwgZXJyCgl9CgluYW1lLCBlcnIgOj0gYS5Xcml0ZUZpbGUoY3R4LCBkYXRhKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuICIiLCBlcnIKCX0KCWRpZ2VzdCA6PSBzdHJpbmdzLlRyaW1TdWZmaXgobmFtZSwgZmlsZXBhdGguRXh0KG5hbWUpKQoJaWYgZS5mbWFwID09IG5pbCB7CgkJZS5mbWFwID0gbWFrZShtYXBbc3RyaW5nXXN0cmluZykKCX0KCWUuZm1hcFtwYXRoXSA9IGRpZ2VzdAoJcmV0dXJuIGRpZ2VzdCwgZXJyCn0KCi8vIGZpbmRQYWNrYWdlcyByZXR1cm5zIHRoZSBmaXJzdCAqUGFja2FnZSB2YWx1ZSBpbiBQYWNrYWdlcyBoYXZpbmcgdGhlIGdpdmVuCi8vIGltcG9ydCBwYXRoLCBvciBuaWwgaWYgbm9uZSBpcyBmb3VuZC4KZnVuYyAoZSAqRXh0cmFjdG9yKSBmaW5kUGFja2FnZShpbXBvcnRQYXRoIHN0cmluZykgKlBhY2thZ2UgewoJZm9yIF8sIHBrZyA6PSByYW5nZSBlLlBhY2thZ2VzIHsKCQlpZiBwa2cuUGF0aCA9PSBpbXBvcnRQYXRoIHsKCQkJcmV0dXJuIHBrZwoJCX0KCX0KCXJldHVybiBuaWwKfQoKLy8gdm5hbWVGb3IgcmV0dXJucyBhIHZuYW1lIGZvciB0aGUgc3BlY2lmaWVkIHBhY2thZ2UsIGhhbmRsaW5nIHRoZSBkZWZhdWx0LgpmdW5jIChlICpFeHRyYWN0b3IpIHZuYW1lRm9yKGJwICpidWlsZC5QYWNrYWdlKSAqc3BiLlZOYW1lIHsKCWlmIGUuUGFja2FnZVZOYW1lICE9IG5pbCB7CgkJcmV0dXJuIGUuUGFja2FnZVZOYW1lKGUuQ29ycHVzLCBicCkKCX0KCXYgOj0gZ292bmFtZS5Gb3JQYWNrYWdlKGUuQ29ycHVzLCBicCkKCXYuU2lnbmF0dXJlID0gIiIgLy8gbm90IHVzZWZ1bCBpbiB0aGlzIGNvbnRleHQKCXJldHVybiB2Cn0KCi8vIGRpclRvSW1wb3J0IGNvbnZlcnRzIGEgZGlyZWN0b3J5IG5hbWUgdG8gYW4gaW1wb3J0IHBhdGgsIGlmIHBvc3NpYmxlLgpmdW5jIChlICpFeHRyYWN0b3IpIGRpclRvSW1wb3J0KGRpciBzdHJpbmcpIChzdHJpbmcsIGVycm9yKSB7CglpZiBjb252IDo9IGUuRGlyVG9JbXBvcnQ7IGNvbnYgIT0gbmlsIHsKCQlyZXR1cm4gY29udihkaXIpCgl9Cglmb3IgXywgcGF0aCA6PSByYW5nZSBlLkJ1aWxkQ29udGV4dC5TcmNEaXJzKCkgewoJCWlmIHJlbCwgZXJyIDo9IGZpbGVwYXRoLlJlbChwYXRoLCBkaXIpOyBlcnIgPT0gbmlsIHsKCQkJcmV0dXJuIHJlbCwgbmlsCgkJfQoJfQoJaWYgcmVsLCBlcnIgOj0gZmlsZXBhdGguUmVsKHdvcmtpbmdEaXIsIGRpcik7IGVyciA9PSBuaWwgewoJCXJldHVybiByZWwsIG5pbAoJfQoJcmV0dXJuIGRpciwgbmlsCn0KCi8vIExvY2F0ZSBhdHRlbXB0cyB0byBsb2NhdGUgdGhlIHNwZWNpZmllZCBpbXBvcnQgcGF0aCBpbiB0aGUgYnVpbGQgY29udGV4dC4KLy8gSWYgdGhlIHBhY2thZ2UgaGFzIGFscmVhZHkgYmVlbiBsb2NhdGVkLCBpdHMgZXhpc3RpbmcgcGFja2FnZSBpcyByZXR1cm5lZC4KLy8gT3RoZXJ3aXNlLCBpZiBpbXBvcnRpbmcgc3VjY2VlZHMsIGEgbmV3ICpQYWNrYWdlIHZhbHVlIGlzIHJldHVybmVkLCBhbmQgYWxzbwovLyBhcHBlbmRlZCB0byB0aGUgUGFja2FnZXMgZmllbGQuCmZ1bmMgKGUgKkV4dHJhY3RvcikgTG9jYXRlKGltcG9ydFBhdGggc3RyaW5nKSAoKlBhY2thZ2UsIGVycm9yKSB7CglpZiBwa2cgOj0gZS5maW5kUGFja2FnZShpbXBvcnRQYXRoKTsgcGtnICE9IG5pbCB7CgkJcmV0dXJuIHBrZywgbmlsCgl9CglicCwgZXJyIDo9IGUuYWRkUGFja2FnZShpbXBvcnRQYXRoKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIG5pbCwgZXJyCgl9Cglwa2cgOj0gJlBhY2thZ2V7CgkJZXh0OiAgICAgICAgICBlLAoJCVBhdGg6ICAgICAgICAgaW1wb3J0UGF0aCwKCQlCdWlsZFBhY2thZ2U6IGJwLAoJfQoJZS5QYWNrYWdlcyA9IGFwcGVuZChlLlBhY2thZ2VzLCBwa2cpCglyZXR1cm4gcGtnLCBuaWwKfQoKLy8gSW1wb3J0RGlyIGF0dGVtcHRzIHRvIGltcG9ydCB0aGUgR28gcGFja2FnZSBsb2NhdGVkIGluIHRoZSBnaXZlbiBkaXJlY3RvcnkuCi8vIEFuIGltcG9ydCBwYXRoIGlzIGluZmVycmVkIGZyb20gdGhlIGRpcmVjdG9yeSBwYXRoLgpmdW5jIChlICpFeHRyYWN0b3IpIEltcG9ydERpcihkaXIgc3RyaW5nKSAoKlBhY2thZ2UsIGVycm9yKSB7CgljbGVhbiA6PSBmaWxlcGF0aC5DbGVhbihkaXIpCglpbXBvcnRQYXRoLCBlcnIgOj0gZS5kaXJUb0ltcG9ydChjbGVhbikKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBuaWwsIGVycgoJfQoJaWYgcGtnIDo9IGUuZmluZFBhY2thZ2UoaW1wb3J0UGF0aCk7IHBrZyAhPSBuaWwgewoJCXJldHVybiBwa2csIG5pbAoJfQoJYnAsIGVyciA6PSBlLkJ1aWxkQ29udGV4dC5JbXBvcnREaXIoY2xlYW4sIGJ1aWxkLkFsbG93QmluYXJ5KQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIG5pbCwgZXJyCgl9CglicC5JbXBvcnRQYXRoID0gaW1wb3J0UGF0aAoJZS5tYXBQYWNrYWdlKGltcG9ydFBhdGgsIGJwKQoJcGtnIDo9ICZQYWNrYWdlewoJCWV4dDogICAgICAgICAgZSwKCQlQYXRoOiAgICAgICAgIGltcG9ydFBhdGgsCgkJQnVpbGRQYWNrYWdlOiBicCwKCX0KCWUuUGFja2FnZXMgPSBhcHBlbmQoZS5QYWNrYWdlcywgcGtnKQoJcmV0dXJuIHBrZywgbmlsCn0KCi8vIEV4dHJhY3QgaW52b2tlcyB0aGUgRXh0cmFjdCBtZXRob2Qgb2YgZWFjaCBwYWNrYWdlIGluIHRoZSBQYWNrYWdlcyBsaXN0LCBhbmQKLy8gdXBkYXRlcyBpdHMgRXJyIGZpZWxkIHdpdGggdGhlIHJlc3VsdC4gIElmIHRoZXJlIHdlcmUgZXJyb3JzIGluIGV4dHJhY3Rpb24sCi8vIG9uZSBvZiB0aGVtIGlzIHJldHVybmVkLgpmdW5jIChlICpFeHRyYWN0b3IpIEV4dHJhY3QoKSBlcnJvciB7Cgl2YXIgZXJyIGVycm9yCglmb3IgXywgcGtnIDo9IHJhbmdlIGUuUGFja2FnZXMgewoJCXBrZy5FcnIgPSBwa2cuRXh0cmFjdCgpCgkJaWYgcGtnLkVyciAhPSBuaWwgJiYgZXJyID09IG5pbCB7CgkJCWVyciA9IHBrZy5FcnIKCQl9Cgl9CglyZXR1cm4gZXJyCn0KCi8vIFBhY2thZ2UgcmVwcmVzZW50cyBhIHNpbmdsZSBHbyBwYWNrYWdlIGV4dHJhY3RlZCBmcm9tIGxvY2FsIGZpbGVzLgp0eXBlIFBhY2thZ2Ugc3RydWN0IHsKCWV4dCAgKkV4dHJhY3RvciAgICAvLyBwb2ludGVyIGJhY2sgdG8gdGhlIGV4dHJhY3RvciB0aGF0IGdlbmVyYXRlZCB0aGlzIHBhY2thZ2UKCXNlZW4gc3RyaW5nc2V0LlNldCAvLyBpbnB1dCBmaWxlcyBhbHJlYWR5IGFkZGVkIHRvIHRoaXMgcGFja2FnZQoKCVBhdGggICAgICAgICBzdHJpbmcgICAgICAgICAgICAgICAgIC8vIEltcG9ydCBvciBkaXJlY3RvcnkgcGF0aAoJRXJyICAgICAgICAgIGVycm9yICAgICAgICAgICAgICAgICAgLy8gRXJyb3IgZGlzY292ZXJlZCBkdXJpbmcgcHJvY2Vzc2luZwoJQnVpbGRQYWNrYWdlICpidWlsZC5QYWNrYWdlICAgICAgICAgLy8gUGFja2FnZSBpbmZvIGZyb20gdGhlIGdvL2J1aWxkIGxpYnJhcnkKCVZOYW1lICAgICAgICAqc3BiLlZOYW1lICAgICAgICAgICAgIC8vIFRoZSBwYWNrYWdlJ3MgS3l0aGUgdm5hbWUKCVVuaXRzICAgICAgICBbXSphcGIuQ29tcGlsYXRpb25Vbml0IC8vIENvbXBpbGF0aW9ucyBnZW5lcmF0ZWQgZnJvbSBQYWNrYWdlCn0KCi8vIEV4dHJhY3QgcG9wdWxhdGVzIHRoZSBVbml0cyBmaWVsZCBvZiBwLCBhbmQgcmVwb3J0cyBhbiBlcnJvciBpZiBhbnkgb2NjdXJyZWQuCi8vCi8vIEFmdGVyIHRoaXMgbWV0aG9kIHJldHVybnMgc3VjY2Vzc2Z1bGx5LCB0aGUgcmVxdWlyZSBpbnB1dHMgZm9yIGVhY2ggb2YgdGhlCi8vIFVuaXRzIGFyZSBwYXJ0aWFsbHkgcmVzb2x2ZWQsIG1lYW5pbmcgd2Uga25vdyB0aGVpciBmaWxlc3lzdGVtIHBhdGhzIGJ1dCBub3QKLy8gdGhlaXIgY29udGVudHMuICBUaGUgZmlsZXN5c3RlbSBwYXRocyBhcmUgcmVzb2x2ZWQgdG8gY29udGVudHMgYW5kIGRpZ2VzdHMKLy8gYnkgdGhlIFN0b3JlIG1ldGhvZC4KZnVuYyAocCAqUGFja2FnZSkgRXh0cmFjdCgpIGVycm9yIHsKCXAuVk5hbWUgPSBwLmV4dC52bmFtZUZvcihwLkJ1aWxkUGFja2FnZSkKCWN1IDo9ICZhcGIuQ29tcGlsYXRpb25Vbml0ewoJCVZOYW1lOiAgICBwLlZOYW1lLAoJCUFyZ3VtZW50OiBbXXN0cmluZ3siZ28iLCAiYnVpbGQifSwKCX0KCWJjIDo9IHAuZXh0LkJ1aWxkQ29udGV4dAoJaWYgaW5mbywgZXJyIDo9IHB0eXBlcy5NYXJzaGFsQW55KCZnb3BiLkdvRGV0YWlsc3sKCQlHb3BhdGg6ICAgICBiYy5HT1BBVEgsCgkJR29vczogICAgICAgYmMuR09PUywKCQlHb2FyY2g6ICAgICBiYy5HT0FSQ0gsCgkJQ29tcGlsZXI6ICAgYmMuQ29tcGlsZXIsCgkJQnVpbGRUYWdzOiAgYmMuQnVpbGRUYWdzLAoJCUNnb0VuYWJsZWQ6IGJjLkNnb0VuYWJsZWQsCgl9KTsgZXJyID09IG5pbCB7CgkJY3UuRGV0YWlscyA9IGFwcGVuZChjdS5EZXRhaWxzLCBpbmZvKQoJfQoKCS8vIEFkZCByZXF1aXJlZCBpbnB1dHMgZnJvbSB0aGlzIHBhY2thZ2UgKHNvdXJjZSBmaWxlcyBvZiB2YXJpb3VzIGtpbmRzKS4KCWJwIDo9IHAuQnVpbGRQYWNrYWdlCglzcmNCYXNlIDo9IGZpbGVwYXRoLkpvaW4oYnAuU3JjUm9vdCwgYnAuSW1wb3J0UGF0aCkKCXAuYWRkU291cmNlKGN1LCBicC5Sb290LCBzcmNCYXNlLCBicC5Hb0ZpbGVzKQoJcC5hZGRGaWxlcyhjdSwgYnAuUm9vdCwgc3JjQmFzZSwgYnAuQ2dvRmlsZXMpCglwLmFkZEZpbGVzKGN1LCBicC5Sb290LCBzcmNCYXNlLCBicC5DRmlsZXMpCglwLmFkZEZpbGVzKGN1LCBicC5Sb290LCBzcmNCYXNlLCBicC5DWFhGaWxlcykKCXAuYWRkRmlsZXMoY3UsIGJwLlJvb3QsIHNyY0Jhc2UsIGJwLkhGaWxlcykKCXAuYWRkU291cmNlKGN1LCBicC5Sb290LCBzcmNCYXNlLCBicC5UZXN0R29GaWxlcykKCgkvLyBBZGQgZXh0cmEgaW5wdXRzIHRoYXQgbWF5IGJlIHNwZWNpZmllZCBieSB0aGUgZXh0cmFjdG9yLgoJcC5hZGRGaWxlcyhjdSwgZmlsZXBhdGguRGlyKGJwLlNyY1Jvb3QpLCAiIiwgcC5leHQuRXh0cmFGaWxlcykKCgkvLyBUT0RPKGZyb21iZXJnZXIpOiBUcmVhdCB0ZXN0cyB0aGF0IGFyZSBub3QgaW4gdGhlIHNhbWUgcGFja2FnZSBhcyBhCgkvLyBzZXBhcmF0ZSBjb21waWxhdGlvbiwgZS5nLiwKCS8vIHAuYWRkU291cmNlKGN1LCBicC5Sb290LCBzcmNCYXNlLCBicC5YVGVzdEdvRmlsZXMpCgkvLyBtaXNzaW5nID0gYXBwZW5kKG1pc3NpbmcsIHAuYWRkRGVwcyhjdSwgYnAuWFRlc3RJbXBvcnRzKS4uLikKCgkvLyBBZGQgdGhlIG91dHB1dHMgb2YgYWxsIHRoZSBkZXBlbmRlbmNpZXMgYXMgcmVxdWlyZWQgaW5wdXRzLgoJLy8KCS8vIFRPRE8oZnJvbWJlcmdlcik6IENvbnNpZGVyIG1ha2luZyBhIHRyYW5zaXRpdmUgb3B0aW9uLCB0byBmbGF0dGVuIG91dAoJLy8gdGhlIHNvdXJjZSByZXF1aXJlbWVudHMgZm9yIHRvb2xzIGxpa2UgdGhlIG9yYWNsZS4KCW1pc3NpbmcgOj0gcC5hZGREZXBzKGN1LCBicC5JbXBvcnRzKQoJbWlzc2luZyA9IGFwcGVuZChtaXNzaW5nLCBwLmFkZERlcHMoY3UsIGJwLlRlc3RJbXBvcnRzKS4uLikKCgkvLyBBZGQgY29tbWFuZC1saW5lIGFyZ3VtZW50cy4KCS8vIFRPRE8oZnJvbWJlcmdlcik6IEZpZ3VyZSBvdXQgd2hldGhlciB3ZSBzaG91bGQgZW1pdCBzZXBhcmF0ZQoJLy8gY29tcGlsYXRpb25zIGZvciBjZ28gYWN0aW9ucy4KCXAuYWRkRmxhZyhjdSwgIi1jb21waWxlciIsIGJjLkNvbXBpbGVyKQoJaWYgdCA6PSBicC5BbGxUYWdzOyBsZW4odCkgPiAwIHsKCQlwLmFkZEZsYWcoY3UsICItdGFncyIsIHN0cmluZ3MuSm9pbih0LCAiICIpKQoJfQoJY3UuQXJndW1lbnQgPSBhcHBlbmQoY3UuQXJndW1lbnQsIGJwLkltcG9ydFBhdGgpCgoJcC5Vbml0cyA9IGFwcGVuZChwLlVuaXRzLCBjdSkKCWlmIGxlbihtaXNzaW5nKSAhPSAwIHsKCQljdS5IYXNDb21waWxlRXJyb3JzID0gdHJ1ZQoJCXJldHVybiAmTWlzc2luZ0Vycm9ye3AuUGF0aCwgbWlzc2luZ30KCX0KCXJldHVybiBuaWwKfQoKLy8gU3RvcmUgd3JpdGVzIHRoZSBjb21waWxhdGlvbiB1bml0cyBvZiBwIHRvIHRoZSBzcGVjaWZpZWQgYXJjaGl2ZSBhbmQgcmV0dXJucwovLyBpdHMgdW5pdCBmaWxlIG5hbWVzLiAgVGhpcyBoYXMgdGhlIHNpZGUtZWZmZWN0IG9mIHVwZGF0aW5nIHRoZSByZXF1aXJlZAovLyBpbnB1dHMgb2YgdGhlIGNvbXBpbGF0aW9ucyBzbyB0aGF0IHRoZXkgY29udGFpbiB0aGUgcHJvcGVyIGRpZ2VzdCB2YWx1ZXMuCmZ1bmMgKHAgKlBhY2thZ2UpIFN0b3JlKGN0eCBjb250ZXh0LkNvbnRleHQsIGEgKmluZGV4cGFjay5BcmNoaXZlKSAoW11zdHJpbmcsIGVycm9yKSB7Cgljb25zdCBmb3JtYXRLZXkgPSAia3l0aGUiCgoJdmFyIHVuaXRGaWxlcyBbXXN0cmluZwoJZm9yIF8sIGN1IDo9IHJhbmdlIHAuVW5pdHMgewoJCS8vIFBhY2sgdGhlIHJlcXVpcmVkIGlucHV0cyBpbnRvIHRoZSBhcmNoaXZlLgoJCWZvciBfLCByaSA6PSByYW5nZSBjdS5SZXF1aXJlZElucHV0IHsKCQkJLy8gQ2hlY2sgd2hldGhlciB3ZSBhbHJlYWR5IGRpZCB0aGlzLCBzbyBTdG9yZSBjYW4gYmUgaWRlbXBvdGVudC4KCQkJLy8KCQkJLy8gV2hlbiBhZGRGaWxlcyBmaXJzdCBhZGRzIHRoZSByZXF1aXJlZCBpbnB1dCB0byB0aGUgcmVjb3JkLCB3ZQoJCQkvLyBrbm93IGl0cyBwYXRoIGJ1dCBoYXZlIG5vdCB5ZXQgZmV0Y2hlZCBpdHMgY29udGVudHMgLS0gdGhhdCBzdGVwCgkJCS8vIGlzIGRlZmVycmVkIHVudGlsIHdlIGFyZSByZWFkeSB0byBzdG9yZSB0aGVtIGZvciBvdXRwdXQgKGkuZS4sCgkJCS8vIG5vdykuICBPbmNlIHdlIGhhdmUgZmV0Y2hlZCB0aGUgZmlsZSBjb250ZW50cywgd2UnbGwgdXBkYXRlIHRoZQoJCQkvLyBmaWVsZCB3aXRoIHRoZSBjb3JyZWN0IGRpZ2VzdCB2YWx1ZS4gIFdlIG9ubHkgd2FudCB0byBkbyB0aGlzCgkJCS8vIG9uY2UsIHBlciBpbnB1dCwgaG93ZXZlci4KCQkJcGF0aCA6PSByaS5JbmZvLkRpZ2VzdAoJCQlpZiAhc3RyaW5ncy5Db250YWlucyhwYXRoLCAiLyIpIHsKCQkJCWNvbnRpbnVlCgkJCX0KCgkJCS8vIEZldGNoIHRoZSBmaWxlIGFuZCBzdG9yZSBpdCBpbnRvIHRoZSBhcmNoaXZlLiAgV2UgbWF5IGdldCBhCgkJCS8vIGNhY2hlIGhpdCBoZXJlLCBoYW5kbGVkIGJ5IGZldGNoQW5kU3RvcmUuCgkJCWRpZ2VzdCwgZXJyIDo9IHAuZXh0LmZldGNoQW5kU3RvcmUoY3R4LCBwYXRoLCBhKQoJCQlpZiBlcnIgIT0gbmlsIHsKCQkJCXJldHVybiBuaWwsIGVycgoJCQl9CgkJCXJpLkluZm8uRGlnZXN0ID0gZGlnZXN0CgkJfQoKCQkvLyBQYWNrIHRoZSBjb21waWxhdGlvbiB1bml0IGludG8gdGhlIGFyY2hpdmUuCgkJZm4sIGVyciA6PSBhLldyaXRlVW5pdChjdHgsIGZvcm1hdEtleSwgY3UpCgkJaWYgZXJyICE9IG5pbCB7CgkJCXJldHVybiBuaWwsIGVycgoJCX0KCQl1bml0RmlsZXMgPSBhcHBlbmQodW5pdEZpbGVzLCBmbikKCX0KCXJldHVybiB1bml0RmlsZXMsIG5pbAp9CgovLyBtYXBGZXRjaGVyIGltcGxlbWVudHMgYW5hbHlzaXMuRmV0Y2hlciBieSBkaXNwYXRjaGluZyB0byBhIHByZWxvYWRlZCBtYXAKLy8gZnJvbSBkaWdlc3RzIHRvIGNvbnRlbnRzLgp0eXBlIG1hcEZldGNoZXIgbWFwW3N0cmluZ11bXWJ5dGUKCi8vIEZldGNoIGltcGxlbWVudHMgdGhlIGFuYWx5c2lzLkZldGNoZXIgaW50ZXJmYWNlLiBUaGUgcGF0aCBhcmd1bWVudCBpcyBpZ25vcmVkLgpmdW5jIChtIG1hcEZldGNoZXIpIEZldGNoKF8sIGRpZ2VzdCBzdHJpbmcpIChbXWJ5dGUsIGVycm9yKSB7CglpZiBkYXRhLCBvayA6PSBtW2RpZ2VzdF07IG9rIHsKCQlyZXR1cm4gZGF0YSwgbmlsCgl9CglyZXR1cm4gbmlsLCBvcy5FcnJOb3RFeGlzdAp9CgovLyBFYWNoVW5pdCBjYWxscyBmIHdpdGggYSBjb21waWxhdGlvbiByZWNvcmQgZm9yIGVhY2ggdW5pdCBpbiBwLiAgSWYgZiByZXBvcnRzCi8vIGFuIGVycm9yLCB0aGF0IGVycm9yIGlzIHJldHVybmVkIGJ5IEVhY2hVbml0LgpmdW5jIChwICpQYWNrYWdlKSBFYWNoVW5pdChjdHggY29udGV4dC5Db250ZXh0LCBmIGZ1bmMoKmtpbmRleC5Db21waWxhdGlvbikgZXJyb3IpIGVycm9yIHsKCWZldGNoZXIgOj0gbWFrZShtYXBGZXRjaGVyKQoJZm9yIF8sIGN1IDo9IHJhbmdlIHAuVW5pdHMgewoJCS8vIEVuc3VyZSBhbGwgdGhlIGZpbGUgY29udGVudHMgYXJlIGxvYWRlZCwgYW5kIHVwZGF0ZSB0aGUgZGlnZXN0cy4KCQlmb3IgXywgcmkgOj0gcmFuZ2UgY3UuUmVxdWlyZWRJbnB1dCB7CgkJCWlmICFzdHJpbmdzLkNvbnRhaW5zKHJpLkluZm8uRGlnZXN0LCAiLyIpIHsKCQkJCWNvbnRpbnVlIC8vIHNraXAgdGhvc2UgdGhhdCBhcmUgYWxyZWFkeSBjb21wbGV0ZQoJCQl9CgkJCXJjLCBlcnIgOj0gdmZzLk9wZW4oY3R4LCByaS5JbmZvLkRpZ2VzdCkKCQkJaWYgZXJyICE9IG5pbCB7CgkJCQlyZXR1cm4gZm10LkVycm9yZigib3BlbmluZyBpbnB1dDogJXYiLCBlcnIpCgkJCX0KCQkJZmQsIGVyciA6PSBraW5kZXguRmlsZURhdGEocmkuSW5mby5QYXRoLCByYykKCQkJcmMuQ2xvc2UoKQoJCQlpZiBlcnIgIT0gbmlsIHsKCQkJCXJldHVybiBmbXQuRXJyb3JmKCJyZWFkaW5nIGlucHV0OiAldiIsIGVycikKCQkJfQoJCQlmZXRjaGVyW2ZkLkluZm8uRGlnZXN0XSA9IGZkLkNvbnRlbnQKCQkJcmkuSW5mby5EaWdlc3QgPSBmZC5JbmZvLkRpZ2VzdAoJCX0KCgkJaWR4LCBlcnIgOj0ga2luZGV4LkZyb21Vbml0KGN1LCBmZXRjaGVyKQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXR1cm4gZm10LkVycm9yZigibG9hZGluZyBjb21waWxhdGlvbjogJXYiLCBlcnIpCgkJfQoJCWlmIGVyciA6PSBmKGlkeCk7IGVyciAhPSBuaWwgewoJCQlyZXR1cm4gZXJyCgkJfQoJfQoJcmV0dXJuIG5pbAp9CgovLyBhZGRGaWxlcyBhZGRzIGEgcmVxdWlyZWQgaW5wdXQgdG8gY3UgZm9yIGVhY2ggZmlsZSB3aG9zZSBiYXNlbmFtZSBvciBwYXRoIGlzCi8vIGdpdmVuIGluIG5hbWVzLiAgSWYgYmFzZSAhPSAiIiwgaXQgaXMgcHJlam9pbmVkIHRvIGVhY2ggbmFtZS4KLy8gVGhlIHBhdGggb2YgdGhlIGlucHV0IHdpbGwgaGF2ZSByb290LyB0cmltbWVkIGZyb20gdGhlIGJlZ2lubmluZy4KLy8gVGhlIGRpZ2VzdCB3aWxsIGJlIHRoZSBjb21wbGV0ZSBwYXRoIGFzIHdyaXR0ZW4gLS0gdGhpcyB3aWxsIGJlIHJlcGxhY2VkCi8vIHdpdGggdGhlIGNvbnRlbnQgZGlnZXN0IGluIHRoZSBmZXRjaGVyLgpmdW5jIChwICpQYWNrYWdlKSBhZGRGaWxlcyhjdSAqYXBiLkNvbXBpbGF0aW9uVW5pdCwgcm9vdCwgYmFzZSBzdHJpbmcsIG5hbWVzIFtdc3RyaW5nKSB7Cglmb3IgXywgbmFtZSA6PSByYW5nZSBuYW1lcyB7CgkJcGF0aCA6PSBuYW1lCgkJaWYgYmFzZSAhPSAiIiB7CgkJCXBhdGggPSBmaWxlcGF0aC5Kb2luKGJhc2UsIG5hbWUpCgkJfQoJCXRyaW1tZWQgOj0gc3RyaW5ncy5UcmltUHJlZml4KHBhdGgsIHJvb3QrIi8iKQoJCWN1LlJlcXVpcmVkSW5wdXQgPSBhcHBlbmQoY3UuUmVxdWlyZWRJbnB1dCwgJmFwYi5Db21waWxhdGlvblVuaXRfRmlsZUlucHV0ewoJCQlWTmFtZTogJnNwYi5WTmFtZXsKCQkJCUNvcnB1czogcC5leHQuQ29ycHVzLAoJCQkJUGF0aDogICB0cmltbWVkLAoJCQl9LAoJCQlJbmZvOiAmYXBiLkZpbGVJbmZvewoJCQkJUGF0aDogICB0cmltbWVkLAoJCQkJRGlnZXN0OiBwYXRoLCAvLyBwcm92aXNpb25hbCwgdW50aWwgdGhlIGZpbGUgaXMgbG9hZGVkCgkJCX0sCgkJfSkKCX0KfQoKLy8gYWRkU291cmNlIGFjdHMgYXMgYWRkRmlsZXMsIGFuZCBpbiBhZGRpdGlvbiBtYXJrcyBlYWNoIHRyaW1tZWQgcGF0aCBhcyBhCi8vIHNvdXJjZSBpbnB1dCBmb3IgdGhlIGNvbXBpbGF0aW9uLgpmdW5jIChwICpQYWNrYWdlKSBhZGRTb3VyY2UoY3UgKmFwYi5Db21waWxhdGlvblVuaXQsIHJvb3QsIGJhc2Ugc3RyaW5nLCBuYW1lcyBbXXN0cmluZykgewoJcC5hZGRGaWxlcyhjdSwgcm9vdCwgYmFzZSwgbmFtZXMpCglmb3IgXywgaW4gOj0gcmFuZ2UgY3UuUmVxdWlyZWRJbnB1dFtsZW4oY3UuUmVxdWlyZWRJbnB1dCktbGVuKG5hbWVzKTpdIHsKCQljdS5Tb3VyY2VGaWxlID0gYXBwZW5kKGN1LlNvdXJjZUZpbGUsIGluLkluZm8uUGF0aCkKCX0KfQoKLy8gYWRkSW5wdXQgYWN0cyBhcyBhZGRGaWxlcyBmb3IgdGhlIG91dHB1dCBvZiBhIHBhY2thZ2UuCmZ1bmMgKHAgKlBhY2thZ2UpIGFkZElucHV0KGN1ICphcGIuQ29tcGlsYXRpb25Vbml0LCBicCAqYnVpbGQuUGFja2FnZSkgewoJb2JqIDo9IGJwLlBrZ09iagoJaWYgIXAuc2Vlbi5Db250YWlucyhvYmopIHsKCQlwLnNlZW4uQWRkKG9iaikKCQlwLmFkZEZpbGVzKGN1LCBicC5Sb290LCAiIiwgW11zdHJpbmd7b2JqfSkKCgkJLy8gUG9wdWxhdGUgdGhlIHZuYW1lIGZvciB0aGUgaW5wdXQgYmFzZWQgb24gdGhlIGNvcnB1cyBvZiB0aGUgcGFja2FnZS4KCQlmaSA6PSBjdS5SZXF1aXJlZElucHV0W2xlbihjdS5SZXF1aXJlZElucHV0KS0xXQoJCWZpLlZOYW1lID0gcC5leHQudm5hbWVGb3IoYnApCgl9Cn0KCi8vIGFkZEVudiBhZGRzIGFuIGVudmlyb25tZW50IHZhcmlhYmxlIHRvIGN1LgpmdW5jICgqUGFja2FnZSkgYWRkRW52KGN1ICphcGIuQ29tcGlsYXRpb25Vbml0LCBuYW1lLCB2YWx1ZSBzdHJpbmcpIHsKCWN1LkVudmlyb25tZW50ID0gYXBwZW5kKGN1LkVudmlyb25tZW50LCAmYXBiLkNvbXBpbGF0aW9uVW5pdF9FbnZ7CgkJTmFtZTogIG5hbWUsCgkJVmFsdWU6IHZhbHVlLAoJfSkKfQoKLy8gYWRkRmxhZyBhZGRzIGEgZmxhZyBhbmQgaXRzIGFyZ3VtZW50cyB0byB0aGUgY29tbWFuZCBsaW5lLCBpZiBsZW4odmFsdWVzKSAhPSAwLgpmdW5jICgqUGFja2FnZSkgYWRkRmxhZyhjdSAqYXBiLkNvbXBpbGF0aW9uVW5pdCwgbmFtZSBzdHJpbmcsIHZhbHVlcyAuLi5zdHJpbmcpIHsKCWlmIGxlbih2YWx1ZXMpICE9IDAgewoJCWN1LkFyZ3VtZW50ID0gYXBwZW5kKGN1LkFyZ3VtZW50LCBuYW1lKQoJCWN1LkFyZ3VtZW50ID0gYXBwZW5kKGN1LkFyZ3VtZW50LCB2YWx1ZXMuLi4pCgl9Cn0KCi8vIGFkZERlcHMgYWRkcyByZXF1aXJlZCBpbnB1dHMgZm9yIHRoZSBpbXBvcnQgcGF0aHMgZ2l2ZW4sIHJldHVybmluZyB0aGUgcGF0aHMKLy8gb2YgYW55IHBhY2thZ2VzIHRoYXQgY291bGQgbm90IGJlIGltcG9ydGVkIHN1Y2Nlc3NmdWxseS4KZnVuYyAocCAqUGFja2FnZSkgYWRkRGVwcyhjdSAqYXBiLkNvbXBpbGF0aW9uVW5pdCwgaW1wb3J0UGF0aHMgW11zdHJpbmcpIFtdc3RyaW5nIHsKCXZhciBtaXNzaW5nIFtdc3RyaW5nCglmb3IgXywgaXAgOj0gcmFuZ2UgaW1wb3J0UGF0aHMgewoJCWlmIGlwID09ICJ1bnNhZmUiIHsKCQkJLy8gcGFja2FnZSB1bnNhZmUgaXMgaW50cmluc2ljOyBub3RoaW5nIHRvIGRvCgkJfSBlbHNlIGlmIGRlcCwgZXJyIDo9IHAuZXh0LmFkZFBhY2thZ2UoaXApOyBlcnIgIT0gbmlsIHsKCQkJbWlzc2luZyA9IGFwcGVuZChtaXNzaW5nLCBpcCkKCQl9IGVsc2UgewoJCQlwLmFkZElucHV0KGN1LCBkZXApCgkJfQoJfQoJcmV0dXJuIG1pc3NpbmcKfQoKLy8gTWlzc2luZ0Vycm9yIGlzIHRoZSBjb25jcmV0ZSB0eXBlIG9mIGVycm9ycyBhYm91dCBtaXNzaW5nIGRlcGVuZGVuY2llcy4KdHlwZSBNaXNzaW5nRXJyb3Igc3RydWN0IHsKCVBhdGggICAgc3RyaW5nICAgLy8gVGhlIGltcG9ydCBwYXRoIG9mIHRoZSBpbmNvbXBsZXRlIHBhY2thZ2UKCU1pc3NpbmcgW11zdHJpbmcgLy8gVGhlIGltcG9ydCBwYXRocyBvZiB0aGUgbWlzc2luZyBkZXBlbmRlbmNpZXMKfQoKZnVuYyAobSAqTWlzc2luZ0Vycm9yKSBFcnJvcigpIHN0cmluZyB7CglyZXR1cm4gZm10LlNwcmludGYoInBhY2thZ2UgJXEgaXMgbWlzc2luZyAlZCBpbXBvcnRzICglcykiLAoJCW0uUGF0aCwgbGVuKG0uTWlzc2luZyksIHN0cmluZ3MuSm9pbihtLk1pc3NpbmcsICIsICIpKQp9Cg==',
    reference: [
        {
            target_ticket: 'kythe://kythe?lang=go#package',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 1177, line_number: 35, column_offset: 8 },
                end: { byte_offset: 1183, line_number: 35, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=context?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref/imports',
            span: {
                start: { byte_offset: 1195, line_number: 38, column_offset: 1 },
                end: { byte_offset: 1204, line_number: 38, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=fmt?root=pkg/linux_amd64_shared#package',
            kind: '/kythe/edge/ref/imports',
            span: {
                start: { byte_offset: 1206, line_number: 39, column_offset: 1 },
                end: { byte_offset: 1211, line_number: 39, column_offset: 6 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref/imports',
            span: {
                start: { byte_offset: 1213, line_number: 40, column_offset: 1 },
                end: { byte_offset: 1223, line_number: 40, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=os?root=pkg/linux_amd64_shared#package',
            kind: '/kythe/edge/ref/imports',
            span: {
                start: { byte_offset: 1225, line_number: 41, column_offset: 1 },
                end: { byte_offset: 1229, line_number: 41, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref/imports',
            span: {
                start: { byte_offset: 1231, line_number: 42, column_offset: 1 },
                end: { byte_offset: 1246, line_number: 42, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref/imports',
            span: {
                start: { byte_offset: 1248, line_number: 43, column_offset: 1 },
                end: { byte_offset: 1257, line_number: 43, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/extractors/govname.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref/imports',
            span: {
                start: { byte_offset: 1260, line_number: 45, column_offset: 1 },
                end: { byte_offset: 1298, line_number: 45, column_offset: 39 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/indexpack.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref/imports',
            span: {
                start: { byte_offset: 1300, line_number: 46, column_offset: 1 },
                end: { byte_offset: 1338, line_number: 46, column_offset: 39 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/kindex.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref/imports',
            span: {
                start: { byte_offset: 1340, line_number: 47, column_offset: 1 },
                end: { byte_offset: 1375, line_number: 47, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/vfs.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref/imports',
            span: {
                start: { byte_offset: 1377, line_number: 48, column_offset: 1 },
                end: { byte_offset: 1409, line_number: 48, column_offset: 33 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/util/ptypes.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref/imports',
            span: {
                start: { byte_offset: 1411, line_number: 49, column_offset: 1 },
                end: { byte_offset: 1442, line_number: 49, column_offset: 32 }
            }
        },
        {
            target_ticket: 'kythe://bitbucket.org/creachadair/stringset?lang=go#package',
            kind: '/kythe/edge/ref/imports',
            span: {
                start: { byte_offset: 1445, line_number: 51, column_offset: 1 },
                end: { byte_offset: 1482, line_number: 51, column_offset: 38 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref/imports',
            span: {
                start: { byte_offset: 1489, line_number: 53, column_offset: 5 },
                end: { byte_offset: 1526, line_number: 53, column_offset: 42 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/go_proto.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref/imports',
            span: {
                start: { byte_offset: 1533, line_number: 54, column_offset: 6 },
                end: { byte_offset: 1564, line_number: 54, column_offset: 37 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/storage_proto.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref/imports',
            span: {
                start: { byte_offset: 1570, line_number: 55, column_offset: 5 },
                end: { byte_offset: 1606, line_number: 55, column_offset: 41 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20workingDir',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 1614, line_number: 58, column_offset: 4 },
                end: { byte_offset: 1624, line_number: 58, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 1625, line_number: 58, column_offset: 15 },
                end: { byte_offset: 1631, line_number: 58, column_offset: 21 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#func%20init%231',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 1633, line_number: 60 },
                end: { byte_offset: 1709, line_number: 64, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#func%20init%231',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 1638, line_number: 60, column_offset: 5 },
                end: { byte_offset: 1642, line_number: 60, column_offset: 9 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8140%5D.wd',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 1651, line_number: 61, column_offset: 4 },
                end: { byte_offset: 1653, line_number: 61, column_offset: 6 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8190%5D.err',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 1655, line_number: 61, column_offset: 8 },
                end: { byte_offset: 1658, line_number: 61, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=os?root=pkg/linux_amd64_shared#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 1662, line_number: 61, column_offset: 15 },
                end: { byte_offset: 1664, line_number: 61, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=os?root=pkg/linux_amd64_shared#func%20Getwd',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 1662, line_number: 61, column_offset: 15 },
                end: { byte_offset: 1672, line_number: 61, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=os?root=pkg/linux_amd64_shared#func%20Getwd',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 1665, line_number: 61, column_offset: 18 },
                end: { byte_offset: 1670, line_number: 61, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8190%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 1674, line_number: 61, column_offset: 27 },
                end: { byte_offset: 1677, line_number: 61, column_offset: 30 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 1681, line_number: 61, column_offset: 34 },
                end: { byte_offset: 1684, line_number: 61, column_offset: 37 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20workingDir',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 1689, line_number: 62, column_offset: 2 },
                end: { byte_offset: 1699, line_number: 62, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8140%5D.wd',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 1702, line_number: 62, column_offset: 15 },
                end: { byte_offset: 1704, line_number: 62, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Extractor',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 1868, line_number: 68, column_offset: 5 },
                end: { byte_offset: 1877, line_number: 68, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Extractor',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 1868, line_number: 68, column_offset: 5 },
                end: { byte_offset: 3187, line_number: 101, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.BuildContext',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 1939, line_number: 70, column_offset: 1 },
                end: { byte_offset: 1951, line_number: 70, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 1952, line_number: 70, column_offset: 14 },
                end: { byte_offset: 1957, line_number: 70, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#type%20Context',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 1958, line_number: 70, column_offset: 20 },
                end: { byte_offset: 1965, line_number: 70, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.Packages',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 2036, line_number: 73, column_offset: 1 },
                end: { byte_offset: 2044, line_number: 73, column_offset: 9 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 2048, line_number: 73, column_offset: 13 },
                end: { byte_offset: 2055, line_number: 73, column_offset: 20 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.Corpus',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 2203, line_number: 77, column_offset: 1 },
                end: { byte_offset: 2209, line_number: 77, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 2210, line_number: 77, column_offset: 8 },
                end: { byte_offset: 2216, line_number: 77, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.LocalPath',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 2289, line_number: 80, column_offset: 1 },
                end: { byte_offset: 2298, line_number: 80, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 2299, line_number: 80, column_offset: 11 },
                end: { byte_offset: 2305, line_number: 80, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.AltInstallPath',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 2497, line_number: 85, column_offset: 1 },
                end: { byte_offset: 2511, line_number: 85, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 2512, line_number: 85, column_offset: 16 },
                end: { byte_offset: 2518, line_number: 85, column_offset: 22 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.ExtraFiles',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 2581, line_number: 88, column_offset: 1 },
                end: { byte_offset: 2591, line_number: 88, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 2594, line_number: 88, column_offset: 14 },
                end: { byte_offset: 2600, line_number: 88, column_offset: 20 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.PackageVName',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 2724, line_number: 92, column_offset: 1 },
                end: { byte_offset: 2736, line_number: 92, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 2749, line_number: 92, column_offset: 26 },
                end: { byte_offset: 2755, line_number: 92, column_offset: 32 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 2761, line_number: 92, column_offset: 38 },
                end: { byte_offset: 2766, line_number: 92, column_offset: 43 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 2767, line_number: 92, column_offset: 44 },
                end: { byte_offset: 2774, line_number: 92, column_offset: 51 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/storage_proto.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 2777, line_number: 92, column_offset: 54 },
                end: { byte_offset: 2780, line_number: 92, column_offset: 57 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/storage_proto.a?root=bazel-out/bin#type%20VName',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 2781, line_number: 92, column_offset: 58 },
                end: { byte_offset: 2786, line_number: 92, column_offset: 63 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.DirToImport',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 2998, line_number: 97, column_offset: 1 },
                end: { byte_offset: 3009, line_number: 97, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3020, line_number: 97, column_offset: 23 },
                end: { byte_offset: 3026, line_number: 97, column_offset: 29 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3029, line_number: 97, column_offset: 32 },
                end: { byte_offset: 3035, line_number: 97, column_offset: 38 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20error',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3037, line_number: 97, column_offset: 40 },
                end: { byte_offset: 3042, line_number: 97, column_offset: 45 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.pmap',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 3046, line_number: 99, column_offset: 1 },
                end: { byte_offset: 3050, line_number: 99, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3055, line_number: 99, column_offset: 10 },
                end: { byte_offset: 3061, line_number: 99, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3063, line_number: 99, column_offset: 18 },
                end: { byte_offset: 3068, line_number: 99, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3069, line_number: 99, column_offset: 24 },
                end: { byte_offset: 3076, line_number: 99, column_offset: 31 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.fmap',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 3117, line_number: 100, column_offset: 1 },
                end: { byte_offset: 3121, line_number: 100, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3126, line_number: 100, column_offset: 10 },
                end: { byte_offset: 3132, line_number: 100, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3133, line_number: 100, column_offset: 17 },
                end: { byte_offset: 3139, line_number: 100, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.addPackage',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 3305, line_number: 105 },
                end: { byte_offset: 3606, line_number: 115, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4eb0%5D.e',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 3311, line_number: 105, column_offset: 6 },
                end: { byte_offset: 3312, line_number: 105, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Extractor',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3314, line_number: 105, column_offset: 9 },
                end: { byte_offset: 3323, line_number: 105, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.addPackage',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 3325, line_number: 105, column_offset: 20 },
                end: { byte_offset: 3335, line_number: 105, column_offset: 30 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4f00%5D.importPath',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 3336, line_number: 105, column_offset: 31 },
                end: { byte_offset: 3346, line_number: 105, column_offset: 41 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3347, line_number: 105, column_offset: 42 },
                end: { byte_offset: 3353, line_number: 105, column_offset: 48 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3357, line_number: 105, column_offset: 52 },
                end: { byte_offset: 3362, line_number: 105, column_offset: 57 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3363, line_number: 105, column_offset: 58 },
                end: { byte_offset: 3370, line_number: 105, column_offset: 65 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20error',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3372, line_number: 105, column_offset: 67 },
                end: { byte_offset: 3377, line_number: 105, column_offset: 72 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472e10%5D.bp',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 3385, line_number: 106, column_offset: 4 },
                end: { byte_offset: 3387, line_number: 106, column_offset: 6 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4eb0%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3391, line_number: 106, column_offset: 10 },
                end: { byte_offset: 3392, line_number: 106, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.pmap',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3393, line_number: 106, column_offset: 12 },
                end: { byte_offset: 3397, line_number: 106, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4f00%5D.importPath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3398, line_number: 106, column_offset: 17 },
                end: { byte_offset: 3408, line_number: 106, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472e10%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3411, line_number: 106, column_offset: 30 },
                end: { byte_offset: 3413, line_number: 106, column_offset: 32 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3417, line_number: 106, column_offset: 36 },
                end: { byte_offset: 3420, line_number: 106, column_offset: 39 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472e10%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3432, line_number: 107, column_offset: 9 },
                end: { byte_offset: 3434, line_number: 107, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3436, line_number: 107, column_offset: 13 },
                end: { byte_offset: 3439, line_number: 107, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472eb0%5D.bp',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 3444, line_number: 109, column_offset: 1 },
                end: { byte_offset: 3446, line_number: 109, column_offset: 3 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472f00%5D.err',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 3448, line_number: 109, column_offset: 5 },
                end: { byte_offset: 3451, line_number: 109, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4eb0%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3455, line_number: 109, column_offset: 12 },
                end: { byte_offset: 3456, line_number: 109, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#method%20%28%2Abuild.Context%29.Import',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 3455, line_number: 109, column_offset: 12 },
                end: { byte_offset: 3520, line_number: 109, column_offset: 77 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.BuildContext',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3457, line_number: 109, column_offset: 14 },
                end: { byte_offset: 3469, line_number: 109, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#method%20%28%2Abuild.Context%29.Import',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3470, line_number: 109, column_offset: 27 },
                end: { byte_offset: 3476, line_number: 109, column_offset: 33 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4f00%5D.importPath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3477, line_number: 109, column_offset: 34 },
                end: { byte_offset: 3487, line_number: 109, column_offset: 44 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4eb0%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3489, line_number: 109, column_offset: 46 },
                end: { byte_offset: 3490, line_number: 109, column_offset: 47 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.LocalPath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3491, line_number: 109, column_offset: 48 },
                end: { byte_offset: 3500, line_number: 109, column_offset: 57 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3502, line_number: 109, column_offset: 59 },
                end: { byte_offset: 3507, line_number: 109, column_offset: 64 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#const%20AllowBinary',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3508, line_number: 109, column_offset: 65 },
                end: { byte_offset: 3519, line_number: 109, column_offset: 76 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472f00%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3525, line_number: 110, column_offset: 4 },
                end: { byte_offset: 3528, line_number: 110, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3532, line_number: 110, column_offset: 11 },
                end: { byte_offset: 3535, line_number: 110, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3547, line_number: 111, column_offset: 9 },
                end: { byte_offset: 3550, line_number: 111, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472f00%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3552, line_number: 111, column_offset: 14 },
                end: { byte_offset: 3555, line_number: 111, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4eb0%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3560, line_number: 113, column_offset: 1 },
                end: { byte_offset: 3561, line_number: 113, column_offset: 2 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.mapPackage',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 3560, line_number: 113, column_offset: 1 },
                end: { byte_offset: 3588, line_number: 113, column_offset: 29 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.mapPackage',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3562, line_number: 113, column_offset: 3 },
                end: { byte_offset: 3572, line_number: 113, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4f00%5D.importPath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3573, line_number: 113, column_offset: 14 },
                end: { byte_offset: 3583, line_number: 113, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472eb0%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3585, line_number: 113, column_offset: 26 },
                end: { byte_offset: 3587, line_number: 113, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472eb0%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3597, line_number: 114, column_offset: 8 },
                end: { byte_offset: 3599, line_number: 114, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3601, line_number: 114, column_offset: 12 },
                end: { byte_offset: 3604, line_number: 114, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.mapPackage',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 3608, line_number: 117 },
                end: { byte_offset: 3792, line_number: 123, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5040%5D.e',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 3614, line_number: 117, column_offset: 6 },
                end: { byte_offset: 3615, line_number: 117, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Extractor',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3617, line_number: 117, column_offset: 9 },
                end: { byte_offset: 3626, line_number: 117, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.mapPackage',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 3628, line_number: 117, column_offset: 20 },
                end: { byte_offset: 3638, line_number: 117, column_offset: 30 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5090%5D.importPath',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 3639, line_number: 117, column_offset: 31 },
                end: { byte_offset: 3649, line_number: 117, column_offset: 41 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3650, line_number: 117, column_offset: 42 },
                end: { byte_offset: 3656, line_number: 117, column_offset: 48 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a50e0%5D.bp',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 3658, line_number: 117, column_offset: 50 },
                end: { byte_offset: 3660, line_number: 117, column_offset: 52 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3662, line_number: 117, column_offset: 54 },
                end: { byte_offset: 3667, line_number: 117, column_offset: 59 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3668, line_number: 117, column_offset: 60 },
                end: { byte_offset: 3675, line_number: 117, column_offset: 67 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5040%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3683, line_number: 118, column_offset: 4 },
                end: { byte_offset: 3684, line_number: 118, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.pmap',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3685, line_number: 118, column_offset: 6 },
                end: { byte_offset: 3689, line_number: 118, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3693, line_number: 118, column_offset: 14 },
                end: { byte_offset: 3696, line_number: 118, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5040%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3701, line_number: 119, column_offset: 2 },
                end: { byte_offset: 3702, line_number: 119, column_offset: 3 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.pmap',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3703, line_number: 119, column_offset: 4 },
                end: { byte_offset: 3707, line_number: 119, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3714, line_number: 119, column_offset: 15 },
                end: { byte_offset: 3720, line_number: 119, column_offset: 21 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3722, line_number: 119, column_offset: 23 },
                end: { byte_offset: 3727, line_number: 119, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3728, line_number: 119, column_offset: 29 },
                end: { byte_offset: 3735, line_number: 119, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5090%5D.importPath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3736, line_number: 119, column_offset: 37 },
                end: { byte_offset: 3746, line_number: 119, column_offset: 47 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a50e0%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3748, line_number: 119, column_offset: 49 },
                end: { byte_offset: 3750, line_number: 119, column_offset: 51 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5040%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3764, line_number: 121, column_offset: 2 },
                end: { byte_offset: 3765, line_number: 121, column_offset: 3 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.pmap',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3766, line_number: 121, column_offset: 4 },
                end: { byte_offset: 3770, line_number: 121, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5090%5D.importPath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3771, line_number: 121, column_offset: 9 },
                end: { byte_offset: 3781, line_number: 121, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a50e0%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3785, line_number: 121, column_offset: 23 },
                end: { byte_offset: 3787, line_number: 121, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.readFile',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 3877, line_number: 126 },
                end: { byte_offset: 4302, line_number: 137, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5180%5D.e',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 3883, line_number: 126, column_offset: 6 },
                end: { byte_offset: 3884, line_number: 126, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Extractor',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3886, line_number: 126, column_offset: 9 },
                end: { byte_offset: 3895, line_number: 126, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.readFile',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 3897, line_number: 126, column_offset: 20 },
                end: { byte_offset: 3905, line_number: 126, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a51d0%5D.ctx',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 3906, line_number: 126, column_offset: 29 },
                end: { byte_offset: 3909, line_number: 126, column_offset: 32 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=context?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3910, line_number: 126, column_offset: 33 },
                end: { byte_offset: 3917, line_number: 126, column_offset: 40 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=context?root=pkg/linux_amd64#type%20Context',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3918, line_number: 126, column_offset: 41 },
                end: { byte_offset: 3925, line_number: 126, column_offset: 48 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5220%5D.path',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 3927, line_number: 126, column_offset: 50 },
                end: { byte_offset: 3931, line_number: 126, column_offset: 54 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3932, line_number: 126, column_offset: 55 },
                end: { byte_offset: 3938, line_number: 126, column_offset: 61 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20byte',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3943, line_number: 126, column_offset: 66 },
                end: { byte_offset: 3947, line_number: 126, column_offset: 70 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20error',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3949, line_number: 126, column_offset: 72 },
                end: { byte_offset: 3954, line_number: 126, column_offset: 77 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244730e0%5D.data',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 3959, line_number: 127, column_offset: 1 },
                end: { byte_offset: 3963, line_number: 127, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473130%5D.err',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 3965, line_number: 127, column_offset: 7 },
                end: { byte_offset: 3968, line_number: 127, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/vfs.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3972, line_number: 127, column_offset: 14 },
                end: { byte_offset: 3975, line_number: 127, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/vfs.a?root=bazel-out/bin#func%20ReadFile',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 3972, line_number: 127, column_offset: 14 },
                end: { byte_offset: 3995, line_number: 127, column_offset: 37 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/vfs.a?root=bazel-out/bin#func%20ReadFile',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3976, line_number: 127, column_offset: 18 },
                end: { byte_offset: 3984, line_number: 127, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a51d0%5D.ctx',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3985, line_number: 127, column_offset: 27 },
                end: { byte_offset: 3988, line_number: 127, column_offset: 30 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5220%5D.path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 3990, line_number: 127, column_offset: 32 },
                end: { byte_offset: 3994, line_number: 127, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473130%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4000, line_number: 128, column_offset: 4 },
                end: { byte_offset: 4003, line_number: 128, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4007, line_number: 128, column_offset: 11 },
                end: { byte_offset: 4010, line_number: 128, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473270%5D.i',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 4135, line_number: 131, column_offset: 5 },
                end: { byte_offset: 4136, line_number: 131, column_offset: 6 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4140, line_number: 131, column_offset: 10 },
                end: { byte_offset: 4147, line_number: 131, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#func%20Index',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 4140, line_number: 131, column_offset: 10 },
                end: { byte_offset: 4168, line_number: 131, column_offset: 38 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#func%20Index',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4148, line_number: 131, column_offset: 18 },
                end: { byte_offset: 4153, line_number: 131, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5220%5D.path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4154, line_number: 131, column_offset: 24 },
                end: { byte_offset: 4158, line_number: 131, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473270%5D.i',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4170, line_number: 131, column_offset: 40 },
                end: { byte_offset: 4171, line_number: 131, column_offset: 41 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5180%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4180, line_number: 131, column_offset: 50 },
                end: { byte_offset: 4181, line_number: 131, column_offset: 51 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.AltInstallPath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4182, line_number: 131, column_offset: 52 },
                end: { byte_offset: 4196, line_number: 131, column_offset: 66 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473310%5D.alt',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 4208, line_number: 132, column_offset: 3 },
                end: { byte_offset: 4211, line_number: 132, column_offset: 6 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5180%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4215, line_number: 132, column_offset: 10 },
                end: { byte_offset: 4216, line_number: 132, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.AltInstallPath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4217, line_number: 132, column_offset: 12 },
                end: { byte_offset: 4231, line_number: 132, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5220%5D.path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4234, line_number: 132, column_offset: 29 },
                end: { byte_offset: 4238, line_number: 132, column_offset: 33 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473270%5D.i',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4239, line_number: 132, column_offset: 34 },
                end: { byte_offset: 4240, line_number: 132, column_offset: 35 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/vfs.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4253, line_number: 133, column_offset: 10 },
                end: { byte_offset: 4256, line_number: 133, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/vfs.a?root=bazel-out/bin#func%20ReadFile',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 4253, line_number: 133, column_offset: 10 },
                end: { byte_offset: 4275, line_number: 133, column_offset: 32 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/vfs.a?root=bazel-out/bin#func%20ReadFile',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4257, line_number: 133, column_offset: 14 },
                end: { byte_offset: 4265, line_number: 133, column_offset: 22 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a51d0%5D.ctx',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4266, line_number: 133, column_offset: 23 },
                end: { byte_offset: 4269, line_number: 133, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473310%5D.alt',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4271, line_number: 133, column_offset: 28 },
                end: { byte_offset: 4274, line_number: 133, column_offset: 31 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244730e0%5D.data',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4291, line_number: 136, column_offset: 8 },
                end: { byte_offset: 4295, line_number: 136, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473130%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4297, line_number: 136, column_offset: 14 },
                end: { byte_offset: 4300, line_number: 136, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.fetchAndStore',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 4520, line_number: 142 },
                end: { byte_offset: 4994, line_number: 160, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5360%5D.e',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 4526, line_number: 142, column_offset: 6 },
                end: { byte_offset: 4527, line_number: 142, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Extractor',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4529, line_number: 142, column_offset: 9 },
                end: { byte_offset: 4538, line_number: 142, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.fetchAndStore',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 4540, line_number: 142, column_offset: 20 },
                end: { byte_offset: 4553, line_number: 142, column_offset: 33 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a53b0%5D.ctx',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 4554, line_number: 142, column_offset: 34 },
                end: { byte_offset: 4557, line_number: 142, column_offset: 37 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=context?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4558, line_number: 142, column_offset: 38 },
                end: { byte_offset: 4565, line_number: 142, column_offset: 45 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=context?root=pkg/linux_amd64#type%20Context',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4566, line_number: 142, column_offset: 46 },
                end: { byte_offset: 4573, line_number: 142, column_offset: 53 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5400%5D.path',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 4575, line_number: 142, column_offset: 55 },
                end: { byte_offset: 4579, line_number: 142, column_offset: 59 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4580, line_number: 142, column_offset: 60 },
                end: { byte_offset: 4586, line_number: 142, column_offset: 66 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5450%5D.a',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 4588, line_number: 142, column_offset: 68 },
                end: { byte_offset: 4589, line_number: 142, column_offset: 69 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/indexpack.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4591, line_number: 142, column_offset: 71 },
                end: { byte_offset: 4600, line_number: 142, column_offset: 80 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/indexpack.a?root=bazel-out/bin#type%20Archive',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4601, line_number: 142, column_offset: 81 },
                end: { byte_offset: 4608, line_number: 142, column_offset: 88 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4611, line_number: 142, column_offset: 91 },
                end: { byte_offset: 4617, line_number: 142, column_offset: 97 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20error',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4619, line_number: 142, column_offset: 99 },
                end: { byte_offset: 4624, line_number: 142, column_offset: 104 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244733b0%5D.digest',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 4632, line_number: 143, column_offset: 4 },
                end: { byte_offset: 4638, line_number: 143, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473400%5D.ok',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 4640, line_number: 143, column_offset: 12 },
                end: { byte_offset: 4642, line_number: 143, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5360%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4646, line_number: 143, column_offset: 18 },
                end: { byte_offset: 4647, line_number: 143, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.fmap',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4648, line_number: 143, column_offset: 20 },
                end: { byte_offset: 4652, line_number: 143, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5400%5D.path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4653, line_number: 143, column_offset: 25 },
                end: { byte_offset: 4657, line_number: 143, column_offset: 29 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473400%5D.ok',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4660, line_number: 143, column_offset: 32 },
                end: { byte_offset: 4662, line_number: 143, column_offset: 34 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244733b0%5D.digest',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4674, line_number: 144, column_offset: 9 },
                end: { byte_offset: 4680, line_number: 144, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4682, line_number: 144, column_offset: 17 },
                end: { byte_offset: 4685, line_number: 144, column_offset: 20 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473540%5D.data',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 4690, line_number: 146, column_offset: 1 },
                end: { byte_offset: 4694, line_number: 146, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473590%5D.err',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 4696, line_number: 146, column_offset: 7 },
                end: { byte_offset: 4699, line_number: 146, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5360%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4703, line_number: 146, column_offset: 14 },
                end: { byte_offset: 4704, line_number: 146, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.readFile',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 4703, line_number: 146, column_offset: 14 },
                end: { byte_offset: 4724, line_number: 146, column_offset: 35 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.readFile',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4705, line_number: 146, column_offset: 16 },
                end: { byte_offset: 4713, line_number: 146, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a53b0%5D.ctx',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4714, line_number: 146, column_offset: 25 },
                end: { byte_offset: 4717, line_number: 146, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5400%5D.path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4719, line_number: 146, column_offset: 30 },
                end: { byte_offset: 4723, line_number: 146, column_offset: 34 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473590%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4729, line_number: 147, column_offset: 4 },
                end: { byte_offset: 4732, line_number: 147, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4736, line_number: 147, column_offset: 11 },
                end: { byte_offset: 4739, line_number: 147, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473590%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4755, line_number: 148, column_offset: 13 },
                end: { byte_offset: 4758, line_number: 148, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473680%5D.name',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 4763, line_number: 150, column_offset: 1 },
                end: { byte_offset: 4767, line_number: 150, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473590%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4769, line_number: 150, column_offset: 7 },
                end: { byte_offset: 4772, line_number: 150, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5450%5D.a',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4776, line_number: 150, column_offset: 14 },
                end: { byte_offset: 4777, line_number: 150, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/indexpack.a?root=bazel-out/bin#method%20%28%2Aindexpack.Archive%29.WriteFile',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 4776, line_number: 150, column_offset: 14 },
                end: { byte_offset: 4798, line_number: 150, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/indexpack.a?root=bazel-out/bin#method%20%28%2Aindexpack.Archive%29.WriteFile',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4778, line_number: 150, column_offset: 16 },
                end: { byte_offset: 4787, line_number: 150, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a53b0%5D.ctx',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4788, line_number: 150, column_offset: 26 },
                end: { byte_offset: 4791, line_number: 150, column_offset: 29 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473540%5D.data',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4793, line_number: 150, column_offset: 31 },
                end: { byte_offset: 4797, line_number: 150, column_offset: 35 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473590%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4803, line_number: 151, column_offset: 4 },
                end: { byte_offset: 4806, line_number: 151, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4810, line_number: 151, column_offset: 11 },
                end: { byte_offset: 4813, line_number: 151, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473590%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4829, line_number: 152, column_offset: 13 },
                end: { byte_offset: 4832, line_number: 152, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473770%5D.digest',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 4837, line_number: 154, column_offset: 1 },
                end: { byte_offset: 4843, line_number: 154, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4847, line_number: 154, column_offset: 11 },
                end: { byte_offset: 4854, line_number: 154, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#func%20TrimSuffix',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 4847, line_number: 154, column_offset: 11 },
                end: { byte_offset: 4891, line_number: 154, column_offset: 55 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#func%20TrimSuffix',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4855, line_number: 154, column_offset: 19 },
                end: { byte_offset: 4865, line_number: 154, column_offset: 29 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473680%5D.name',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4866, line_number: 154, column_offset: 30 },
                end: { byte_offset: 4870, line_number: 154, column_offset: 34 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4872, line_number: 154, column_offset: 36 },
                end: { byte_offset: 4880, line_number: 154, column_offset: 44 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#func%20Ext',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 4872, line_number: 154, column_offset: 36 },
                end: { byte_offset: 4890, line_number: 154, column_offset: 54 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#func%20Ext',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4881, line_number: 154, column_offset: 45 },
                end: { byte_offset: 4884, line_number: 154, column_offset: 48 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473680%5D.name',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4885, line_number: 154, column_offset: 49 },
                end: { byte_offset: 4889, line_number: 154, column_offset: 53 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5360%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4896, line_number: 155, column_offset: 4 },
                end: { byte_offset: 4897, line_number: 155, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.fmap',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4898, line_number: 155, column_offset: 6 },
                end: { byte_offset: 4902, line_number: 155, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4906, line_number: 155, column_offset: 14 },
                end: { byte_offset: 4909, line_number: 155, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5360%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4914, line_number: 156, column_offset: 2 },
                end: { byte_offset: 4915, line_number: 156, column_offset: 3 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.fmap',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4916, line_number: 156, column_offset: 4 },
                end: { byte_offset: 4920, line_number: 156, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20make',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4923, line_number: 156, column_offset: 11 },
                end: { byte_offset: 4927, line_number: 156, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4932, line_number: 156, column_offset: 20 },
                end: { byte_offset: 4938, line_number: 156, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4939, line_number: 156, column_offset: 27 },
                end: { byte_offset: 4945, line_number: 156, column_offset: 33 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5360%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4951, line_number: 158, column_offset: 1 },
                end: { byte_offset: 4952, line_number: 158, column_offset: 2 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.fmap',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4953, line_number: 158, column_offset: 3 },
                end: { byte_offset: 4957, line_number: 158, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5400%5D.path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4958, line_number: 158, column_offset: 8 },
                end: { byte_offset: 4962, line_number: 158, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473770%5D.digest',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4966, line_number: 158, column_offset: 16 },
                end: { byte_offset: 4972, line_number: 158, column_offset: 22 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473770%5D.digest',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4981, line_number: 159, column_offset: 8 },
                end: { byte_offset: 4987, line_number: 159, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473590%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 4989, line_number: 159, column_offset: 16 },
                end: { byte_offset: 4992, line_number: 159, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.findPackage',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 5115, line_number: 164 },
                end: { byte_offset: 5275, line_number: 171, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5590%5D.e',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 5121, line_number: 164, column_offset: 6 },
                end: { byte_offset: 5122, line_number: 164, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Extractor',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5124, line_number: 164, column_offset: 9 },
                end: { byte_offset: 5133, line_number: 164, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.findPackage',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 5135, line_number: 164, column_offset: 20 },
                end: { byte_offset: 5146, line_number: 164, column_offset: 31 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a55e0%5D.importPath',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 5147, line_number: 164, column_offset: 32 },
                end: { byte_offset: 5157, line_number: 164, column_offset: 42 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5158, line_number: 164, column_offset: 43 },
                end: { byte_offset: 5164, line_number: 164, column_offset: 49 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5167, line_number: 164, column_offset: 52 },
                end: { byte_offset: 5174, line_number: 164, column_offset: 59 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244739a0%5D.pkg',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 5185, line_number: 165, column_offset: 8 },
                end: { byte_offset: 5188, line_number: 165, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5590%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5198, line_number: 165, column_offset: 21 },
                end: { byte_offset: 5199, line_number: 165, column_offset: 22 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.Packages',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5200, line_number: 165, column_offset: 23 },
                end: { byte_offset: 5208, line_number: 165, column_offset: 31 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244739a0%5D.pkg',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5216, line_number: 166, column_offset: 5 },
                end: { byte_offset: 5219, line_number: 166, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.Path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5220, line_number: 166, column_offset: 9 },
                end: { byte_offset: 5224, line_number: 166, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a55e0%5D.importPath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5228, line_number: 166, column_offset: 17 },
                end: { byte_offset: 5238, line_number: 166, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244739a0%5D.pkg',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5251, line_number: 167, column_offset: 10 },
                end: { byte_offset: 5254, line_number: 167, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5270, line_number: 170, column_offset: 8 },
                end: { byte_offset: 5273, line_number: 170, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.vnameFor',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 5354, line_number: 174 },
                end: { byte_offset: 5582, line_number: 181, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a56d0%5D.e',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 5360, line_number: 174, column_offset: 6 },
                end: { byte_offset: 5361, line_number: 174, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Extractor',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5363, line_number: 174, column_offset: 9 },
                end: { byte_offset: 5372, line_number: 174, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.vnameFor',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 5374, line_number: 174, column_offset: 20 },
                end: { byte_offset: 5382, line_number: 174, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5720%5D.bp',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 5383, line_number: 174, column_offset: 29 },
                end: { byte_offset: 5385, line_number: 174, column_offset: 31 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5387, line_number: 174, column_offset: 33 },
                end: { byte_offset: 5392, line_number: 174, column_offset: 38 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5393, line_number: 174, column_offset: 39 },
                end: { byte_offset: 5400, line_number: 174, column_offset: 46 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/storage_proto.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5403, line_number: 174, column_offset: 49 },
                end: { byte_offset: 5406, line_number: 174, column_offset: 52 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/storage_proto.a?root=bazel-out/bin#type%20VName',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5407, line_number: 174, column_offset: 53 },
                end: { byte_offset: 5412, line_number: 174, column_offset: 58 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a56d0%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5419, line_number: 175, column_offset: 4 },
                end: { byte_offset: 5420, line_number: 175, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.PackageVName',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5421, line_number: 175, column_offset: 6 },
                end: { byte_offset: 5433, line_number: 175, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5437, line_number: 175, column_offset: 22 },
                end: { byte_offset: 5440, line_number: 175, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a56d0%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5452, line_number: 176, column_offset: 9 },
                end: { byte_offset: 5453, line_number: 176, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.PackageVName',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5454, line_number: 176, column_offset: 11 },
                end: { byte_offset: 5466, line_number: 176, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a56d0%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5467, line_number: 176, column_offset: 24 },
                end: { byte_offset: 5468, line_number: 176, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.Corpus',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5469, line_number: 176, column_offset: 26 },
                end: { byte_offset: 5475, line_number: 176, column_offset: 32 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5720%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5477, line_number: 176, column_offset: 34 },
                end: { byte_offset: 5479, line_number: 176, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473b80%5D.v',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 5485, line_number: 178, column_offset: 1 },
                end: { byte_offset: 5486, line_number: 178, column_offset: 2 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/extractors/govname.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5490, line_number: 178, column_offset: 6 },
                end: { byte_offset: 5497, line_number: 178, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/extractors/govname.a?root=bazel-out/bin#func%20ForPackage',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 5490, line_number: 178, column_offset: 6 },
                end: { byte_offset: 5522, line_number: 178, column_offset: 38 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/extractors/govname.a?root=bazel-out/bin#func%20ForPackage',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5498, line_number: 178, column_offset: 14 },
                end: { byte_offset: 5508, line_number: 178, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a56d0%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5509, line_number: 178, column_offset: 25 },
                end: { byte_offset: 5510, line_number: 178, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.Corpus',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5511, line_number: 178, column_offset: 27 },
                end: { byte_offset: 5517, line_number: 178, column_offset: 33 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5720%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5519, line_number: 178, column_offset: 35 },
                end: { byte_offset: 5521, line_number: 178, column_offset: 37 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473b80%5D.v',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5524, line_number: 179, column_offset: 1 },
                end: { byte_offset: 5525, line_number: 179, column_offset: 2 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/storage_proto.a?root=bazel-out/bin#field%20VName.Signature',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5526, line_number: 179, column_offset: 3 },
                end: { byte_offset: 5535, line_number: 179, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473b80%5D.v',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5579, line_number: 180, column_offset: 8 },
                end: { byte_offset: 5580, line_number: 180, column_offset: 9 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.dirToImport',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 5657, line_number: 184 },
                end: { byte_offset: 6011, line_number: 197, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5810%5D.e',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 5663, line_number: 184, column_offset: 6 },
                end: { byte_offset: 5664, line_number: 184, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Extractor',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5666, line_number: 184, column_offset: 9 },
                end: { byte_offset: 5675, line_number: 184, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.dirToImport',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 5677, line_number: 184, column_offset: 20 },
                end: { byte_offset: 5688, line_number: 184, column_offset: 31 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5860%5D.dir',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 5689, line_number: 184, column_offset: 32 },
                end: { byte_offset: 5692, line_number: 184, column_offset: 35 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5693, line_number: 184, column_offset: 36 },
                end: { byte_offset: 5699, line_number: 184, column_offset: 42 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5702, line_number: 184, column_offset: 45 },
                end: { byte_offset: 5708, line_number: 184, column_offset: 51 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20error',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5710, line_number: 184, column_offset: 53 },
                end: { byte_offset: 5715, line_number: 184, column_offset: 58 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473c20%5D.conv',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 5723, line_number: 185, column_offset: 4 },
                end: { byte_offset: 5727, line_number: 185, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5810%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5731, line_number: 185, column_offset: 12 },
                end: { byte_offset: 5732, line_number: 185, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.DirToImport',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5733, line_number: 185, column_offset: 14 },
                end: { byte_offset: 5744, line_number: 185, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473c20%5D.conv',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5746, line_number: 185, column_offset: 27 },
                end: { byte_offset: 5750, line_number: 185, column_offset: 31 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5754, line_number: 185, column_offset: 35 },
                end: { byte_offset: 5757, line_number: 185, column_offset: 38 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473c20%5D.conv',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5769, line_number: 186, column_offset: 9 },
                end: { byte_offset: 5773, line_number: 186, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5860%5D.dir',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5774, line_number: 186, column_offset: 14 },
                end: { byte_offset: 5777, line_number: 186, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473d60%5D.path',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 5790, line_number: 188, column_offset: 8 },
                end: { byte_offset: 5794, line_number: 188, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5810%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5804, line_number: 188, column_offset: 22 },
                end: { byte_offset: 5805, line_number: 188, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#method%20%28%2Abuild.Context%29.SrcDirs',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 5804, line_number: 188, column_offset: 22 },
                end: { byte_offset: 5828, line_number: 188, column_offset: 46 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.BuildContext',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5806, line_number: 188, column_offset: 24 },
                end: { byte_offset: 5818, line_number: 188, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#method%20%28%2Abuild.Context%29.SrcDirs',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5819, line_number: 188, column_offset: 37 },
                end: { byte_offset: 5826, line_number: 188, column_offset: 44 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473e50%5D.rel',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 5836, line_number: 189, column_offset: 5 },
                end: { byte_offset: 5839, line_number: 189, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473ea0%5D.err',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 5841, line_number: 189, column_offset: 10 },
                end: { byte_offset: 5844, line_number: 189, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5848, line_number: 189, column_offset: 17 },
                end: { byte_offset: 5856, line_number: 189, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#func%20Rel',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 5848, line_number: 189, column_offset: 17 },
                end: { byte_offset: 5871, line_number: 189, column_offset: 40 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#func%20Rel',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5857, line_number: 189, column_offset: 26 },
                end: { byte_offset: 5860, line_number: 189, column_offset: 29 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473d60%5D.path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5861, line_number: 189, column_offset: 30 },
                end: { byte_offset: 5865, line_number: 189, column_offset: 34 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5860%5D.dir',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5867, line_number: 189, column_offset: 36 },
                end: { byte_offset: 5870, line_number: 189, column_offset: 39 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473ea0%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5873, line_number: 189, column_offset: 42 },
                end: { byte_offset: 5876, line_number: 189, column_offset: 45 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5880, line_number: 189, column_offset: 49 },
                end: { byte_offset: 5883, line_number: 189, column_offset: 52 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473e50%5D.rel',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5896, line_number: 190, column_offset: 10 },
                end: { byte_offset: 5899, line_number: 190, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5901, line_number: 190, column_offset: 15 },
                end: { byte_offset: 5904, line_number: 190, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473f90%5D.rel',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 5916, line_number: 193, column_offset: 4 },
                end: { byte_offset: 5919, line_number: 193, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423531bd0%5D.err',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 5921, line_number: 193, column_offset: 9 },
                end: { byte_offset: 5924, line_number: 193, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5928, line_number: 193, column_offset: 16 },
                end: { byte_offset: 5936, line_number: 193, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#func%20Rel',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 5928, line_number: 193, column_offset: 16 },
                end: { byte_offset: 5957, line_number: 193, column_offset: 45 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#func%20Rel',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5937, line_number: 193, column_offset: 25 },
                end: { byte_offset: 5940, line_number: 193, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20workingDir',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5941, line_number: 193, column_offset: 29 },
                end: { byte_offset: 5951, line_number: 193, column_offset: 39 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5860%5D.dir',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5953, line_number: 193, column_offset: 41 },
                end: { byte_offset: 5956, line_number: 193, column_offset: 44 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423531bd0%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5959, line_number: 193, column_offset: 47 },
                end: { byte_offset: 5962, line_number: 193, column_offset: 50 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5966, line_number: 193, column_offset: 54 },
                end: { byte_offset: 5969, line_number: 193, column_offset: 57 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424473f90%5D.rel',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5981, line_number: 194, column_offset: 9 },
                end: { byte_offset: 5984, line_number: 194, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 5986, line_number: 194, column_offset: 14 },
                end: { byte_offset: 5989, line_number: 194, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5860%5D.dir',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6001, line_number: 196, column_offset: 8 },
                end: { byte_offset: 6004, line_number: 196, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6006, line_number: 196, column_offset: 13 },
                end: { byte_offset: 6009, line_number: 196, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.Locate',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 6283, line_number: 203 },
                end: { byte_offset: 6640, line_number: 218, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a59a0%5D.e',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 6289, line_number: 203, column_offset: 6 },
                end: { byte_offset: 6290, line_number: 203, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Extractor',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6292, line_number: 203, column_offset: 9 },
                end: { byte_offset: 6301, line_number: 203, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.Locate',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 6303, line_number: 203, column_offset: 20 },
                end: { byte_offset: 6309, line_number: 203, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a59f0%5D.importPath',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 6310, line_number: 203, column_offset: 27 },
                end: { byte_offset: 6320, line_number: 203, column_offset: 37 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6321, line_number: 203, column_offset: 38 },
                end: { byte_offset: 6327, line_number: 203, column_offset: 44 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6331, line_number: 203, column_offset: 48 },
                end: { byte_offset: 6338, line_number: 203, column_offset: 55 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20error',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6340, line_number: 203, column_offset: 57 },
                end: { byte_offset: 6345, line_number: 203, column_offset: 62 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423df5360%5D.pkg',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 6353, line_number: 204, column_offset: 4 },
                end: { byte_offset: 6356, line_number: 204, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a59a0%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6360, line_number: 204, column_offset: 11 },
                end: { byte_offset: 6361, line_number: 204, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.findPackage',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 6360, line_number: 204, column_offset: 11 },
                end: { byte_offset: 6385, line_number: 204, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.findPackage',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6362, line_number: 204, column_offset: 13 },
                end: { byte_offset: 6373, line_number: 204, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a59f0%5D.importPath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6374, line_number: 204, column_offset: 25 },
                end: { byte_offset: 6384, line_number: 204, column_offset: 35 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423df5360%5D.pkg',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6387, line_number: 204, column_offset: 38 },
                end: { byte_offset: 6390, line_number: 204, column_offset: 41 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6394, line_number: 204, column_offset: 45 },
                end: { byte_offset: 6397, line_number: 204, column_offset: 48 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423df5360%5D.pkg',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6409, line_number: 205, column_offset: 9 },
                end: { byte_offset: 6412, line_number: 205, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6414, line_number: 205, column_offset: 14 },
                end: { byte_offset: 6417, line_number: 205, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423df5400%5D.bp',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 6422, line_number: 207, column_offset: 1 },
                end: { byte_offset: 6424, line_number: 207, column_offset: 3 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423df5450%5D.err',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 6426, line_number: 207, column_offset: 5 },
                end: { byte_offset: 6429, line_number: 207, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a59a0%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6433, line_number: 207, column_offset: 12 },
                end: { byte_offset: 6434, line_number: 207, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.addPackage',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 6433, line_number: 207, column_offset: 12 },
                end: { byte_offset: 6457, line_number: 207, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.addPackage',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6435, line_number: 207, column_offset: 14 },
                end: { byte_offset: 6445, line_number: 207, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a59f0%5D.importPath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6446, line_number: 207, column_offset: 25 },
                end: { byte_offset: 6456, line_number: 207, column_offset: 35 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423df5450%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6462, line_number: 208, column_offset: 4 },
                end: { byte_offset: 6465, line_number: 208, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6469, line_number: 208, column_offset: 11 },
                end: { byte_offset: 6472, line_number: 208, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6484, line_number: 209, column_offset: 9 },
                end: { byte_offset: 6487, line_number: 209, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423df5450%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6489, line_number: 209, column_offset: 14 },
                end: { byte_offset: 6492, line_number: 209, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f738b0%5D.pkg',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 6497, line_number: 211, column_offset: 1 },
                end: { byte_offset: 6500, line_number: 211, column_offset: 4 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6505, line_number: 211, column_offset: 9 },
                end: { byte_offset: 6512, line_number: 211, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.ext',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6516, line_number: 212, column_offset: 2 },
                end: { byte_offset: 6519, line_number: 212, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a59a0%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6530, line_number: 212, column_offset: 16 },
                end: { byte_offset: 6531, line_number: 212, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.ext',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 6530, line_number: 212, column_offset: 16 },
                end: { byte_offset: 6531, line_number: 212, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.Path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6535, line_number: 213, column_offset: 2 },
                end: { byte_offset: 6539, line_number: 213, column_offset: 6 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a59f0%5D.importPath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6549, line_number: 213, column_offset: 16 },
                end: { byte_offset: 6559, line_number: 213, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.Path',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 6549, line_number: 213, column_offset: 16 },
                end: { byte_offset: 6559, line_number: 213, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.BuildPackage',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6563, line_number: 214, column_offset: 2 },
                end: { byte_offset: 6575, line_number: 214, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423df5400%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6577, line_number: 214, column_offset: 16 },
                end: { byte_offset: 6579, line_number: 214, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.BuildPackage',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 6577, line_number: 214, column_offset: 16 },
                end: { byte_offset: 6579, line_number: 214, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a59a0%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6585, line_number: 216, column_offset: 1 },
                end: { byte_offset: 6586, line_number: 216, column_offset: 2 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.Packages',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6587, line_number: 216, column_offset: 3 },
                end: { byte_offset: 6595, line_number: 216, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20append',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6598, line_number: 216, column_offset: 14 },
                end: { byte_offset: 6604, line_number: 216, column_offset: 20 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a59a0%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6605, line_number: 216, column_offset: 21 },
                end: { byte_offset: 6606, line_number: 216, column_offset: 22 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.Packages',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6607, line_number: 216, column_offset: 23 },
                end: { byte_offset: 6615, line_number: 216, column_offset: 31 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f738b0%5D.pkg',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6617, line_number: 216, column_offset: 33 },
                end: { byte_offset: 6620, line_number: 216, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f738b0%5D.pkg',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6630, line_number: 217, column_offset: 8 },
                end: { byte_offset: 6633, line_number: 217, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6635, line_number: 217, column_offset: 13 },
                end: { byte_offset: 6638, line_number: 217, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.ImportDir',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 6776, line_number: 222 },
                end: { byte_offset: 7322, line_number: 244, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5b30%5D.e',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 6782, line_number: 222, column_offset: 6 },
                end: { byte_offset: 6783, line_number: 222, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Extractor',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6785, line_number: 222, column_offset: 9 },
                end: { byte_offset: 6794, line_number: 222, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.ImportDir',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 6796, line_number: 222, column_offset: 20 },
                end: { byte_offset: 6805, line_number: 222, column_offset: 29 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5b80%5D.dir',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 6806, line_number: 222, column_offset: 30 },
                end: { byte_offset: 6809, line_number: 222, column_offset: 33 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6810, line_number: 222, column_offset: 34 },
                end: { byte_offset: 6816, line_number: 222, column_offset: 40 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6820, line_number: 222, column_offset: 44 },
                end: { byte_offset: 6827, line_number: 222, column_offset: 51 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20error',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6829, line_number: 222, column_offset: 53 },
                end: { byte_offset: 6834, line_number: 222, column_offset: 58 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f739f0%5D.clean',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 6839, line_number: 223, column_offset: 1 },
                end: { byte_offset: 6844, line_number: 223, column_offset: 6 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6848, line_number: 223, column_offset: 10 },
                end: { byte_offset: 6856, line_number: 223, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#func%20Clean',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 6848, line_number: 223, column_offset: 10 },
                end: { byte_offset: 6867, line_number: 223, column_offset: 29 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#func%20Clean',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6857, line_number: 223, column_offset: 19 },
                end: { byte_offset: 6862, line_number: 223, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5b80%5D.dir',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6863, line_number: 223, column_offset: 25 },
                end: { byte_offset: 6866, line_number: 223, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73a40%5D.importPath',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 6869, line_number: 224, column_offset: 1 },
                end: { byte_offset: 6879, line_number: 224, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73a90%5D.err',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 6881, line_number: 224, column_offset: 13 },
                end: { byte_offset: 6884, line_number: 224, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5b30%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6888, line_number: 224, column_offset: 20 },
                end: { byte_offset: 6889, line_number: 224, column_offset: 21 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.dirToImport',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 6888, line_number: 224, column_offset: 20 },
                end: { byte_offset: 6908, line_number: 224, column_offset: 40 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.dirToImport',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6890, line_number: 224, column_offset: 22 },
                end: { byte_offset: 6901, line_number: 224, column_offset: 33 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f739f0%5D.clean',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6902, line_number: 224, column_offset: 34 },
                end: { byte_offset: 6907, line_number: 224, column_offset: 39 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73a90%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6913, line_number: 225, column_offset: 4 },
                end: { byte_offset: 6916, line_number: 225, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6920, line_number: 225, column_offset: 11 },
                end: { byte_offset: 6923, line_number: 225, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6935, line_number: 226, column_offset: 9 },
                end: { byte_offset: 6938, line_number: 226, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73a90%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6940, line_number: 226, column_offset: 14 },
                end: { byte_offset: 6943, line_number: 226, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73bd0%5D.pkg',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 6951, line_number: 228, column_offset: 4 },
                end: { byte_offset: 6954, line_number: 228, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5b30%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6958, line_number: 228, column_offset: 11 },
                end: { byte_offset: 6959, line_number: 228, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.findPackage',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 6958, line_number: 228, column_offset: 11 },
                end: { byte_offset: 6983, line_number: 228, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.findPackage',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6960, line_number: 228, column_offset: 13 },
                end: { byte_offset: 6971, line_number: 228, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73a40%5D.importPath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6972, line_number: 228, column_offset: 25 },
                end: { byte_offset: 6982, line_number: 228, column_offset: 35 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73bd0%5D.pkg',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6985, line_number: 228, column_offset: 38 },
                end: { byte_offset: 6988, line_number: 228, column_offset: 41 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 6992, line_number: 228, column_offset: 45 },
                end: { byte_offset: 6995, line_number: 228, column_offset: 48 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73bd0%5D.pkg',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7007, line_number: 229, column_offset: 9 },
                end: { byte_offset: 7010, line_number: 229, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7012, line_number: 229, column_offset: 14 },
                end: { byte_offset: 7015, line_number: 229, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73c70%5D.bp',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 7020, line_number: 231, column_offset: 1 },
                end: { byte_offset: 7022, line_number: 231, column_offset: 3 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73a90%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7024, line_number: 231, column_offset: 5 },
                end: { byte_offset: 7027, line_number: 231, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5b30%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7031, line_number: 231, column_offset: 12 },
                end: { byte_offset: 7032, line_number: 231, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#method%20%28%2Abuild.Context%29.ImportDir',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 7031, line_number: 231, column_offset: 12 },
                end: { byte_offset: 7081, line_number: 231, column_offset: 62 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.BuildContext',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7033, line_number: 231, column_offset: 14 },
                end: { byte_offset: 7045, line_number: 231, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#method%20%28%2Abuild.Context%29.ImportDir',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7046, line_number: 231, column_offset: 27 },
                end: { byte_offset: 7055, line_number: 231, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f739f0%5D.clean',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7056, line_number: 231, column_offset: 37 },
                end: { byte_offset: 7061, line_number: 231, column_offset: 42 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7063, line_number: 231, column_offset: 44 },
                end: { byte_offset: 7068, line_number: 231, column_offset: 49 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#const%20AllowBinary',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7069, line_number: 231, column_offset: 50 },
                end: { byte_offset: 7080, line_number: 231, column_offset: 61 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73a90%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7086, line_number: 232, column_offset: 4 },
                end: { byte_offset: 7089, line_number: 232, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7093, line_number: 232, column_offset: 11 },
                end: { byte_offset: 7096, line_number: 232, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7108, line_number: 233, column_offset: 9 },
                end: { byte_offset: 7111, line_number: 233, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73a90%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7113, line_number: 233, column_offset: 14 },
                end: { byte_offset: 7116, line_number: 233, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73c70%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7121, line_number: 235, column_offset: 1 },
                end: { byte_offset: 7123, line_number: 235, column_offset: 3 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.ImportPath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7124, line_number: 235, column_offset: 4 },
                end: { byte_offset: 7134, line_number: 235, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73a40%5D.importPath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7137, line_number: 235, column_offset: 17 },
                end: { byte_offset: 7147, line_number: 235, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5b30%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7149, line_number: 236, column_offset: 1 },
                end: { byte_offset: 7150, line_number: 236, column_offset: 2 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.mapPackage',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 7149, line_number: 236, column_offset: 1 },
                end: { byte_offset: 7177, line_number: 236, column_offset: 29 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.mapPackage',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7151, line_number: 236, column_offset: 3 },
                end: { byte_offset: 7161, line_number: 236, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73a40%5D.importPath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7162, line_number: 236, column_offset: 14 },
                end: { byte_offset: 7172, line_number: 236, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73c70%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7174, line_number: 236, column_offset: 26 },
                end: { byte_offset: 7176, line_number: 236, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73d60%5D.pkg',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 7179, line_number: 237, column_offset: 1 },
                end: { byte_offset: 7182, line_number: 237, column_offset: 4 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7187, line_number: 237, column_offset: 9 },
                end: { byte_offset: 7194, line_number: 237, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.ext',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7198, line_number: 238, column_offset: 2 },
                end: { byte_offset: 7201, line_number: 238, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5b30%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7212, line_number: 238, column_offset: 16 },
                end: { byte_offset: 7213, line_number: 238, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.ext',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 7212, line_number: 238, column_offset: 16 },
                end: { byte_offset: 7213, line_number: 238, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.Path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7217, line_number: 239, column_offset: 2 },
                end: { byte_offset: 7221, line_number: 239, column_offset: 6 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73a40%5D.importPath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7231, line_number: 239, column_offset: 16 },
                end: { byte_offset: 7241, line_number: 239, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.Path',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 7231, line_number: 239, column_offset: 16 },
                end: { byte_offset: 7241, line_number: 239, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.BuildPackage',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7245, line_number: 240, column_offset: 2 },
                end: { byte_offset: 7257, line_number: 240, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73c70%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7259, line_number: 240, column_offset: 16 },
                end: { byte_offset: 7261, line_number: 240, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.BuildPackage',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 7259, line_number: 240, column_offset: 16 },
                end: { byte_offset: 7261, line_number: 240, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5b30%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7267, line_number: 242, column_offset: 1 },
                end: { byte_offset: 7268, line_number: 242, column_offset: 2 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.Packages',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7269, line_number: 242, column_offset: 3 },
                end: { byte_offset: 7277, line_number: 242, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20append',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7280, line_number: 242, column_offset: 14 },
                end: { byte_offset: 7286, line_number: 242, column_offset: 20 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5b30%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7287, line_number: 242, column_offset: 21 },
                end: { byte_offset: 7288, line_number: 242, column_offset: 22 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.Packages',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7289, line_number: 242, column_offset: 23 },
                end: { byte_offset: 7297, line_number: 242, column_offset: 31 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73d60%5D.pkg',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7299, line_number: 242, column_offset: 33 },
                end: { byte_offset: 7302, line_number: 242, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73d60%5D.pkg',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7312, line_number: 243, column_offset: 8 },
                end: { byte_offset: 7315, line_number: 243, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7317, line_number: 243, column_offset: 13 },
                end: { byte_offset: 7320, line_number: 243, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.Extract',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 7511, line_number: 249 },
                end: { byte_offset: 7697, line_number: 258, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5cc0%5D.e',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 7517, line_number: 249, column_offset: 6 },
                end: { byte_offset: 7518, line_number: 249, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Extractor',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7520, line_number: 249, column_offset: 9 },
                end: { byte_offset: 7529, line_number: 249, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.Extract',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 7531, line_number: 249, column_offset: 20 },
                end: { byte_offset: 7538, line_number: 249, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20error',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7541, line_number: 249, column_offset: 30 },
                end: { byte_offset: 7546, line_number: 249, column_offset: 35 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73ea0%5D.err',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 7554, line_number: 250, column_offset: 5 },
                end: { byte_offset: 7557, line_number: 250, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20error',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7558, line_number: 250, column_offset: 9 },
                end: { byte_offset: 7563, line_number: 250, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73f90%5D.pkg',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 7572, line_number: 251, column_offset: 8 },
                end: { byte_offset: 7575, line_number: 251, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5cc0%5D.e',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7585, line_number: 251, column_offset: 21 },
                end: { byte_offset: 7586, line_number: 251, column_offset: 22 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.Packages',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7587, line_number: 251, column_offset: 23 },
                end: { byte_offset: 7595, line_number: 251, column_offset: 31 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73f90%5D.pkg',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7600, line_number: 252, column_offset: 2 },
                end: { byte_offset: 7603, line_number: 252, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.Err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7604, line_number: 252, column_offset: 6 },
                end: { byte_offset: 7607, line_number: 252, column_offset: 9 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73f90%5D.pkg',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7610, line_number: 252, column_offset: 12 },
                end: { byte_offset: 7613, line_number: 252, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.Extract',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 7610, line_number: 252, column_offset: 12 },
                end: { byte_offset: 7623, line_number: 252, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.Extract',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7614, line_number: 252, column_offset: 16 },
                end: { byte_offset: 7621, line_number: 252, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73f90%5D.pkg',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7629, line_number: 253, column_offset: 5 },
                end: { byte_offset: 7632, line_number: 253, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.Err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7633, line_number: 253, column_offset: 9 },
                end: { byte_offset: 7636, line_number: 253, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7640, line_number: 253, column_offset: 16 },
                end: { byte_offset: 7643, line_number: 253, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73ea0%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7647, line_number: 253, column_offset: 23 },
                end: { byte_offset: 7650, line_number: 253, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7654, line_number: 253, column_offset: 30 },
                end: { byte_offset: 7657, line_number: 253, column_offset: 33 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73ea0%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7663, line_number: 254, column_offset: 3 },
                end: { byte_offset: 7666, line_number: 254, column_offset: 6 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73f90%5D.pkg',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7669, line_number: 254, column_offset: 9 },
                end: { byte_offset: 7672, line_number: 254, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.Err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7673, line_number: 254, column_offset: 13 },
                end: { byte_offset: 7676, line_number: 254, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423f73ea0%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7692, line_number: 257, column_offset: 8 },
                end: { byte_offset: 7695, line_number: 257, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Package',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 7774, line_number: 261, column_offset: 5 },
                end: { byte_offset: 7781, line_number: 261, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Package',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 7774, line_number: 261, column_offset: 5 },
                end: { byte_offset: 8300, line_number: 270, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.ext',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 7792, line_number: 262, column_offset: 1 },
                end: { byte_offset: 7795, line_number: 262, column_offset: 4 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Extractor',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7798, line_number: 262, column_offset: 7 },
                end: { byte_offset: 7807, line_number: 262, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.seen',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 7873, line_number: 263, column_offset: 1 },
                end: { byte_offset: 7877, line_number: 263, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://bitbucket.org/creachadair/stringset?lang=go#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7878, line_number: 263, column_offset: 6 },
                end: { byte_offset: 7887, line_number: 263, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://bitbucket.org/creachadair/stringset?lang=go#type%20Set',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7888, line_number: 263, column_offset: 16 },
                end: { byte_offset: 7891, line_number: 263, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.Path',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 7939, line_number: 265, column_offset: 1 },
                end: { byte_offset: 7943, line_number: 265, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 7952, line_number: 265, column_offset: 14 },
                end: { byte_offset: 7958, line_number: 265, column_offset: 20 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.Err',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 8004, line_number: 266, column_offset: 1 },
                end: { byte_offset: 8007, line_number: 266, column_offset: 4 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20error',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8017, line_number: 266, column_offset: 14 },
                end: { byte_offset: 8022, line_number: 266, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.BuildPackage',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 8079, line_number: 267, column_offset: 1 },
                end: { byte_offset: 8091, line_number: 267, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8093, line_number: 267, column_offset: 15 },
                end: { byte_offset: 8098, line_number: 267, column_offset: 20 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8099, line_number: 267, column_offset: 21 },
                end: { byte_offset: 8106, line_number: 267, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.VName',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 8158, line_number: 268, column_offset: 1 },
                end: { byte_offset: 8163, line_number: 268, column_offset: 6 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/storage_proto.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8172, line_number: 268, column_offset: 15 },
                end: { byte_offset: 8175, line_number: 268, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/storage_proto.a?root=bazel-out/bin#type%20VName',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8176, line_number: 268, column_offset: 19 },
                end: { byte_offset: 8181, line_number: 268, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.Units',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 8224, line_number: 269, column_offset: 1 },
                end: { byte_offset: 8229, line_number: 269, column_offset: 6 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8240, line_number: 269, column_offset: 17 },
                end: { byte_offset: 8243, line_number: 269, column_offset: 20 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#type%20CompilationUnit',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8244, line_number: 269, column_offset: 21 },
                end: { byte_offset: 8259, line_number: 269, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.Extract',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 8646, line_number: 278 },
                end: { byte_offset: 10639, line_number: 336, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 8652, line_number: 278, column_offset: 6 },
                end: { byte_offset: 8653, line_number: 278, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8655, line_number: 278, column_offset: 9 },
                end: { byte_offset: 8662, line_number: 278, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.Extract',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 8664, line_number: 278, column_offset: 18 },
                end: { byte_offset: 8671, line_number: 278, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20error',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8674, line_number: 278, column_offset: 28 },
                end: { byte_offset: 8679, line_number: 278, column_offset: 33 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8683, line_number: 279, column_offset: 1 },
                end: { byte_offset: 8684, line_number: 279, column_offset: 2 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.VName',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8685, line_number: 279, column_offset: 3 },
                end: { byte_offset: 8690, line_number: 279, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8693, line_number: 279, column_offset: 11 },
                end: { byte_offset: 8694, line_number: 279, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.vnameFor',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 8693, line_number: 279, column_offset: 11 },
                end: { byte_offset: 8723, line_number: 279, column_offset: 41 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.ext',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8695, line_number: 279, column_offset: 13 },
                end: { byte_offset: 8698, line_number: 279, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.vnameFor',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8699, line_number: 279, column_offset: 17 },
                end: { byte_offset: 8707, line_number: 279, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8708, line_number: 279, column_offset: 26 },
                end: { byte_offset: 8709, line_number: 279, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.BuildPackage',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8710, line_number: 279, column_offset: 28 },
                end: { byte_offset: 8722, line_number: 279, column_offset: 40 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8230%5D.cu',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 8725, line_number: 280, column_offset: 1 },
                end: { byte_offset: 8727, line_number: 280, column_offset: 3 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8732, line_number: 280, column_offset: 8 },
                end: { byte_offset: 8735, line_number: 280, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#type%20CompilationUnit',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8736, line_number: 280, column_offset: 12 },
                end: { byte_offset: 8751, line_number: 280, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.VName',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8755, line_number: 281, column_offset: 2 },
                end: { byte_offset: 8760, line_number: 281, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8765, line_number: 281, column_offset: 12 },
                end: { byte_offset: 8766, line_number: 281, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.VName',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 8765, line_number: 281, column_offset: 12 },
                end: { byte_offset: 8772, line_number: 281, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.VName',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8767, line_number: 281, column_offset: 14 },
                end: { byte_offset: 8772, line_number: 281, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.Argument',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8776, line_number: 282, column_offset: 2 },
                end: { byte_offset: 8784, line_number: 282, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.Argument',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 8786, line_number: 282, column_offset: 12 },
                end: { byte_offset: 8809, line_number: 282, column_offset: 35 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8788, line_number: 282, column_offset: 14 },
                end: { byte_offset: 8794, line_number: 282, column_offset: 20 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8280%5D.bc',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 8815, line_number: 284, column_offset: 1 },
                end: { byte_offset: 8817, line_number: 284, column_offset: 3 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8821, line_number: 284, column_offset: 7 },
                end: { byte_offset: 8822, line_number: 284, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.ext',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8823, line_number: 284, column_offset: 9 },
                end: { byte_offset: 8826, line_number: 284, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.BuildContext',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8827, line_number: 284, column_offset: 13 },
                end: { byte_offset: 8839, line_number: 284, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8320%5D.info',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 8844, line_number: 285, column_offset: 4 },
                end: { byte_offset: 8848, line_number: 285, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8370%5D.err',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 8850, line_number: 285, column_offset: 10 },
                end: { byte_offset: 8853, line_number: 285, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/util/ptypes.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8857, line_number: 285, column_offset: 17 },
                end: { byte_offset: 8863, line_number: 285, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/util/ptypes.a?root=bazel-out/bin#func%20MarshalAny',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 8857, line_number: 285, column_offset: 17 },
                end: { byte_offset: 9052, line_number: 292, column_offset: 3 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/util/ptypes.a?root=bazel-out/bin#func%20MarshalAny',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8864, line_number: 285, column_offset: 24 },
                end: { byte_offset: 8874, line_number: 285, column_offset: 34 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/go_proto.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8876, line_number: 285, column_offset: 36 },
                end: { byte_offset: 8880, line_number: 285, column_offset: 40 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/go_proto.a?root=bazel-out/bin#type%20GoDetails',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8881, line_number: 285, column_offset: 41 },
                end: { byte_offset: 8890, line_number: 285, column_offset: 50 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/go_proto.a?root=bazel-out/bin#field%20GoDetails.Gopath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8894, line_number: 286, column_offset: 2 },
                end: { byte_offset: 8900, line_number: 286, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8280%5D.bc',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8906, line_number: 286, column_offset: 14 },
                end: { byte_offset: 8908, line_number: 286, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/go_proto.a?root=bazel-out/bin#field%20GoDetails.Gopath',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 8906, line_number: 286, column_offset: 14 },
                end: { byte_offset: 8915, line_number: 286, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Context.GOPATH',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8909, line_number: 286, column_offset: 17 },
                end: { byte_offset: 8915, line_number: 286, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/go_proto.a?root=bazel-out/bin#field%20GoDetails.Goos',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8919, line_number: 287, column_offset: 2 },
                end: { byte_offset: 8923, line_number: 287, column_offset: 6 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8280%5D.bc',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8931, line_number: 287, column_offset: 14 },
                end: { byte_offset: 8933, line_number: 287, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/go_proto.a?root=bazel-out/bin#field%20GoDetails.Goos',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 8931, line_number: 287, column_offset: 14 },
                end: { byte_offset: 8938, line_number: 287, column_offset: 21 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Context.GOOS',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8934, line_number: 287, column_offset: 17 },
                end: { byte_offset: 8938, line_number: 287, column_offset: 21 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/go_proto.a?root=bazel-out/bin#field%20GoDetails.Goarch',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8942, line_number: 288, column_offset: 2 },
                end: { byte_offset: 8948, line_number: 288, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8280%5D.bc',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8954, line_number: 288, column_offset: 14 },
                end: { byte_offset: 8956, line_number: 288, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/go_proto.a?root=bazel-out/bin#field%20GoDetails.Goarch',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 8954, line_number: 288, column_offset: 14 },
                end: { byte_offset: 8963, line_number: 288, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Context.GOARCH',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8957, line_number: 288, column_offset: 17 },
                end: { byte_offset: 8963, line_number: 288, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/go_proto.a?root=bazel-out/bin#field%20GoDetails.Compiler',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8967, line_number: 289, column_offset: 2 },
                end: { byte_offset: 8975, line_number: 289, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8280%5D.bc',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8979, line_number: 289, column_offset: 14 },
                end: { byte_offset: 8981, line_number: 289, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/go_proto.a?root=bazel-out/bin#field%20GoDetails.Compiler',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 8979, line_number: 289, column_offset: 14 },
                end: { byte_offset: 8990, line_number: 289, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Context.Compiler',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8982, line_number: 289, column_offset: 17 },
                end: { byte_offset: 8990, line_number: 289, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/go_proto.a?root=bazel-out/bin#field%20GoDetails.BuildTags',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 8994, line_number: 290, column_offset: 2 },
                end: { byte_offset: 9003, line_number: 290, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8280%5D.bc',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9006, line_number: 290, column_offset: 14 },
                end: { byte_offset: 9008, line_number: 290, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/go_proto.a?root=bazel-out/bin#field%20GoDetails.BuildTags',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 9006, line_number: 290, column_offset: 14 },
                end: { byte_offset: 9018, line_number: 290, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Context.BuildTags',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9009, line_number: 290, column_offset: 17 },
                end: { byte_offset: 9018, line_number: 290, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/go_proto.a?root=bazel-out/bin#field%20GoDetails.CgoEnabled',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9022, line_number: 291, column_offset: 2 },
                end: { byte_offset: 9032, line_number: 291, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8280%5D.bc',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9034, line_number: 291, column_offset: 14 },
                end: { byte_offset: 9036, line_number: 291, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/go_proto.a?root=bazel-out/bin#field%20GoDetails.CgoEnabled',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 9034, line_number: 291, column_offset: 14 },
                end: { byte_offset: 9047, line_number: 291, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Context.CgoEnabled',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9037, line_number: 291, column_offset: 17 },
                end: { byte_offset: 9047, line_number: 291, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8370%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9054, line_number: 292, column_offset: 5 },
                end: { byte_offset: 9057, line_number: 292, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9061, line_number: 292, column_offset: 12 },
                end: { byte_offset: 9064, line_number: 292, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8230%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9069, line_number: 293, column_offset: 2 },
                end: { byte_offset: 9071, line_number: 293, column_offset: 4 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.Details',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9072, line_number: 293, column_offset: 5 },
                end: { byte_offset: 9079, line_number: 293, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20append',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9082, line_number: 293, column_offset: 15 },
                end: { byte_offset: 9088, line_number: 293, column_offset: 21 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8230%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9089, line_number: 293, column_offset: 22 },
                end: { byte_offset: 9091, line_number: 293, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.Details',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9092, line_number: 293, column_offset: 25 },
                end: { byte_offset: 9099, line_number: 293, column_offset: 32 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8320%5D.info',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9101, line_number: 293, column_offset: 34 },
                end: { byte_offset: 9105, line_number: 293, column_offset: 38 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 9187, line_number: 297, column_offset: 1 },
                end: { byte_offset: 9189, line_number: 297, column_offset: 3 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9193, line_number: 297, column_offset: 7 },
                end: { byte_offset: 9194, line_number: 297, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.BuildPackage',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9195, line_number: 297, column_offset: 9 },
                end: { byte_offset: 9207, line_number: 297, column_offset: 21 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8550%5D.srcBase',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 9209, line_number: 298, column_offset: 1 },
                end: { byte_offset: 9216, line_number: 298, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9220, line_number: 298, column_offset: 12 },
                end: { byte_offset: 9228, line_number: 298, column_offset: 20 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#func%20Join',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 9220, line_number: 298, column_offset: 12 },
                end: { byte_offset: 9260, line_number: 298, column_offset: 52 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#func%20Join',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9229, line_number: 298, column_offset: 21 },
                end: { byte_offset: 9233, line_number: 298, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9234, line_number: 298, column_offset: 26 },
                end: { byte_offset: 9236, line_number: 298, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.SrcRoot',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9237, line_number: 298, column_offset: 29 },
                end: { byte_offset: 9244, line_number: 298, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9246, line_number: 298, column_offset: 38 },
                end: { byte_offset: 9248, line_number: 298, column_offset: 40 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.ImportPath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9249, line_number: 298, column_offset: 41 },
                end: { byte_offset: 9259, line_number: 298, column_offset: 51 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9262, line_number: 299, column_offset: 1 },
                end: { byte_offset: 9263, line_number: 299, column_offset: 2 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addSource',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 9262, line_number: 299, column_offset: 1 },
                end: { byte_offset: 9307, line_number: 299, column_offset: 46 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addSource',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9264, line_number: 299, column_offset: 3 },
                end: { byte_offset: 9273, line_number: 299, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8230%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9274, line_number: 299, column_offset: 13 },
                end: { byte_offset: 9276, line_number: 299, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9278, line_number: 299, column_offset: 17 },
                end: { byte_offset: 9280, line_number: 299, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.Root',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9281, line_number: 299, column_offset: 20 },
                end: { byte_offset: 9285, line_number: 299, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8550%5D.srcBase',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9287, line_number: 299, column_offset: 26 },
                end: { byte_offset: 9294, line_number: 299, column_offset: 33 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9296, line_number: 299, column_offset: 35 },
                end: { byte_offset: 9298, line_number: 299, column_offset: 37 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.GoFiles',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9299, line_number: 299, column_offset: 38 },
                end: { byte_offset: 9306, line_number: 299, column_offset: 45 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9309, line_number: 300, column_offset: 1 },
                end: { byte_offset: 9310, line_number: 300, column_offset: 2 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFiles',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 9309, line_number: 300, column_offset: 1 },
                end: { byte_offset: 9354, line_number: 300, column_offset: 46 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFiles',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9311, line_number: 300, column_offset: 3 },
                end: { byte_offset: 9319, line_number: 300, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8230%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9320, line_number: 300, column_offset: 12 },
                end: { byte_offset: 9322, line_number: 300, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9324, line_number: 300, column_offset: 16 },
                end: { byte_offset: 9326, line_number: 300, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.Root',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9327, line_number: 300, column_offset: 19 },
                end: { byte_offset: 9331, line_number: 300, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8550%5D.srcBase',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9333, line_number: 300, column_offset: 25 },
                end: { byte_offset: 9340, line_number: 300, column_offset: 32 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9342, line_number: 300, column_offset: 34 },
                end: { byte_offset: 9344, line_number: 300, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.CgoFiles',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9345, line_number: 300, column_offset: 37 },
                end: { byte_offset: 9353, line_number: 300, column_offset: 45 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9356, line_number: 301, column_offset: 1 },
                end: { byte_offset: 9357, line_number: 301, column_offset: 2 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFiles',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 9356, line_number: 301, column_offset: 1 },
                end: { byte_offset: 9399, line_number: 301, column_offset: 44 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFiles',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9358, line_number: 301, column_offset: 3 },
                end: { byte_offset: 9366, line_number: 301, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8230%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9367, line_number: 301, column_offset: 12 },
                end: { byte_offset: 9369, line_number: 301, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9371, line_number: 301, column_offset: 16 },
                end: { byte_offset: 9373, line_number: 301, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.Root',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9374, line_number: 301, column_offset: 19 },
                end: { byte_offset: 9378, line_number: 301, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8550%5D.srcBase',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9380, line_number: 301, column_offset: 25 },
                end: { byte_offset: 9387, line_number: 301, column_offset: 32 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9389, line_number: 301, column_offset: 34 },
                end: { byte_offset: 9391, line_number: 301, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.CFiles',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9392, line_number: 301, column_offset: 37 },
                end: { byte_offset: 9398, line_number: 301, column_offset: 43 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9401, line_number: 302, column_offset: 1 },
                end: { byte_offset: 9402, line_number: 302, column_offset: 2 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFiles',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 9401, line_number: 302, column_offset: 1 },
                end: { byte_offset: 9446, line_number: 302, column_offset: 46 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFiles',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9403, line_number: 302, column_offset: 3 },
                end: { byte_offset: 9411, line_number: 302, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8230%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9412, line_number: 302, column_offset: 12 },
                end: { byte_offset: 9414, line_number: 302, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9416, line_number: 302, column_offset: 16 },
                end: { byte_offset: 9418, line_number: 302, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.Root',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9419, line_number: 302, column_offset: 19 },
                end: { byte_offset: 9423, line_number: 302, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8550%5D.srcBase',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9425, line_number: 302, column_offset: 25 },
                end: { byte_offset: 9432, line_number: 302, column_offset: 32 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9434, line_number: 302, column_offset: 34 },
                end: { byte_offset: 9436, line_number: 302, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.CXXFiles',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9437, line_number: 302, column_offset: 37 },
                end: { byte_offset: 9445, line_number: 302, column_offset: 45 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9448, line_number: 303, column_offset: 1 },
                end: { byte_offset: 9449, line_number: 303, column_offset: 2 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFiles',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 9448, line_number: 303, column_offset: 1 },
                end: { byte_offset: 9491, line_number: 303, column_offset: 44 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFiles',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9450, line_number: 303, column_offset: 3 },
                end: { byte_offset: 9458, line_number: 303, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8230%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9459, line_number: 303, column_offset: 12 },
                end: { byte_offset: 9461, line_number: 303, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9463, line_number: 303, column_offset: 16 },
                end: { byte_offset: 9465, line_number: 303, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.Root',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9466, line_number: 303, column_offset: 19 },
                end: { byte_offset: 9470, line_number: 303, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8550%5D.srcBase',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9472, line_number: 303, column_offset: 25 },
                end: { byte_offset: 9479, line_number: 303, column_offset: 32 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9481, line_number: 303, column_offset: 34 },
                end: { byte_offset: 9483, line_number: 303, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.HFiles',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9484, line_number: 303, column_offset: 37 },
                end: { byte_offset: 9490, line_number: 303, column_offset: 43 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9493, line_number: 304, column_offset: 1 },
                end: { byte_offset: 9494, line_number: 304, column_offset: 2 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addSource',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 9493, line_number: 304, column_offset: 1 },
                end: { byte_offset: 9542, line_number: 304, column_offset: 50 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addSource',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9495, line_number: 304, column_offset: 3 },
                end: { byte_offset: 9504, line_number: 304, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8230%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9505, line_number: 304, column_offset: 13 },
                end: { byte_offset: 9507, line_number: 304, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9509, line_number: 304, column_offset: 17 },
                end: { byte_offset: 9511, line_number: 304, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.Root',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9512, line_number: 304, column_offset: 20 },
                end: { byte_offset: 9516, line_number: 304, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8550%5D.srcBase',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9518, line_number: 304, column_offset: 26 },
                end: { byte_offset: 9525, line_number: 304, column_offset: 33 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9527, line_number: 304, column_offset: 35 },
                end: { byte_offset: 9529, line_number: 304, column_offset: 37 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.TestGoFiles',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9530, line_number: 304, column_offset: 38 },
                end: { byte_offset: 9541, line_number: 304, column_offset: 49 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9606, line_number: 307, column_offset: 1 },
                end: { byte_offset: 9607, line_number: 307, column_offset: 2 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFiles',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 9606, line_number: 307, column_offset: 1 },
                end: { byte_offset: 9668, line_number: 307, column_offset: 63 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFiles',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9608, line_number: 307, column_offset: 3 },
                end: { byte_offset: 9616, line_number: 307, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8230%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9617, line_number: 307, column_offset: 12 },
                end: { byte_offset: 9619, line_number: 307, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9621, line_number: 307, column_offset: 16 },
                end: { byte_offset: 9629, line_number: 307, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#func%20Dir',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 9621, line_number: 307, column_offset: 16 },
                end: { byte_offset: 9645, line_number: 307, column_offset: 40 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#func%20Dir',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9630, line_number: 307, column_offset: 25 },
                end: { byte_offset: 9633, line_number: 307, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9634, line_number: 307, column_offset: 29 },
                end: { byte_offset: 9636, line_number: 307, column_offset: 31 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.SrcRoot',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9637, line_number: 307, column_offset: 32 },
                end: { byte_offset: 9644, line_number: 307, column_offset: 39 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9651, line_number: 307, column_offset: 46 },
                end: { byte_offset: 9652, line_number: 307, column_offset: 47 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.ext',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9653, line_number: 307, column_offset: 48 },
                end: { byte_offset: 9656, line_number: 307, column_offset: 51 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.ExtraFiles',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 9657, line_number: 307, column_offset: 52 },
                end: { byte_offset: 9667, line_number: 307, column_offset: 62 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c85a0%5D.missing',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 10093, line_number: 318, column_offset: 1 },
                end: { byte_offset: 10100, line_number: 318, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10104, line_number: 318, column_offset: 12 },
                end: { byte_offset: 10105, line_number: 318, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addDeps',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 10104, line_number: 318, column_offset: 12 },
                end: { byte_offset: 10129, line_number: 318, column_offset: 37 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addDeps',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10106, line_number: 318, column_offset: 14 },
                end: { byte_offset: 10113, line_number: 318, column_offset: 21 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8230%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10114, line_number: 318, column_offset: 22 },
                end: { byte_offset: 10116, line_number: 318, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10118, line_number: 318, column_offset: 26 },
                end: { byte_offset: 10120, line_number: 318, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.Imports',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10121, line_number: 318, column_offset: 29 },
                end: { byte_offset: 10128, line_number: 318, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c85a0%5D.missing',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10131, line_number: 319, column_offset: 1 },
                end: { byte_offset: 10138, line_number: 319, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20append',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10141, line_number: 319, column_offset: 11 },
                end: { byte_offset: 10147, line_number: 319, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c85a0%5D.missing',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10148, line_number: 319, column_offset: 18 },
                end: { byte_offset: 10155, line_number: 319, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10157, line_number: 319, column_offset: 27 },
                end: { byte_offset: 10158, line_number: 319, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addDeps',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 10157, line_number: 319, column_offset: 27 },
                end: { byte_offset: 10186, line_number: 319, column_offset: 56 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addDeps',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10159, line_number: 319, column_offset: 29 },
                end: { byte_offset: 10166, line_number: 319, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8230%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10167, line_number: 319, column_offset: 37 },
                end: { byte_offset: 10169, line_number: 319, column_offset: 39 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10171, line_number: 319, column_offset: 41 },
                end: { byte_offset: 10173, line_number: 319, column_offset: 43 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.TestImports',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10174, line_number: 319, column_offset: 44 },
                end: { byte_offset: 10185, line_number: 319, column_offset: 55 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10324, line_number: 324, column_offset: 1 },
                end: { byte_offset: 10325, line_number: 324, column_offset: 2 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFlag',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 10324, line_number: 324, column_offset: 1 },
                end: { byte_offset: 10363, line_number: 324, column_offset: 40 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFlag',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10326, line_number: 324, column_offset: 3 },
                end: { byte_offset: 10333, line_number: 324, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8230%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10334, line_number: 324, column_offset: 11 },
                end: { byte_offset: 10336, line_number: 324, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8280%5D.bc',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10351, line_number: 324, column_offset: 28 },
                end: { byte_offset: 10353, line_number: 324, column_offset: 30 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Context.Compiler',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10354, line_number: 324, column_offset: 31 },
                end: { byte_offset: 10362, line_number: 324, column_offset: 39 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8730%5D.t',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 10368, line_number: 325, column_offset: 4 },
                end: { byte_offset: 10369, line_number: 325, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10373, line_number: 325, column_offset: 9 },
                end: { byte_offset: 10375, line_number: 325, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.AllTags',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10376, line_number: 325, column_offset: 12 },
                end: { byte_offset: 10383, line_number: 325, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20len',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10385, line_number: 325, column_offset: 21 },
                end: { byte_offset: 10388, line_number: 325, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8730%5D.t',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10389, line_number: 325, column_offset: 25 },
                end: { byte_offset: 10390, line_number: 325, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10400, line_number: 326, column_offset: 2 },
                end: { byte_offset: 10401, line_number: 326, column_offset: 3 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFlag',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 10400, line_number: 326, column_offset: 2 },
                end: { byte_offset: 10444, line_number: 326, column_offset: 46 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFlag',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10402, line_number: 326, column_offset: 4 },
                end: { byte_offset: 10409, line_number: 326, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8230%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10410, line_number: 326, column_offset: 12 },
                end: { byte_offset: 10412, line_number: 326, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10423, line_number: 326, column_offset: 25 },
                end: { byte_offset: 10430, line_number: 326, column_offset: 32 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#func%20Join',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 10423, line_number: 326, column_offset: 25 },
                end: { byte_offset: 10443, line_number: 326, column_offset: 45 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#func%20Join',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10431, line_number: 326, column_offset: 33 },
                end: { byte_offset: 10435, line_number: 326, column_offset: 37 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8730%5D.t',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10436, line_number: 326, column_offset: 38 },
                end: { byte_offset: 10437, line_number: 326, column_offset: 39 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8230%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10449, line_number: 328, column_offset: 1 },
                end: { byte_offset: 10451, line_number: 328, column_offset: 3 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.Argument',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10452, line_number: 328, column_offset: 4 },
                end: { byte_offset: 10460, line_number: 328, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20append',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10463, line_number: 328, column_offset: 15 },
                end: { byte_offset: 10469, line_number: 328, column_offset: 21 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8230%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10470, line_number: 328, column_offset: 22 },
                end: { byte_offset: 10472, line_number: 328, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.Argument',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10473, line_number: 328, column_offset: 25 },
                end: { byte_offset: 10481, line_number: 328, column_offset: 33 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8500%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10483, line_number: 328, column_offset: 35 },
                end: { byte_offset: 10485, line_number: 328, column_offset: 37 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.ImportPath',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10486, line_number: 328, column_offset: 38 },
                end: { byte_offset: 10496, line_number: 328, column_offset: 48 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10500, line_number: 330, column_offset: 1 },
                end: { byte_offset: 10501, line_number: 330, column_offset: 2 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.Units',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10502, line_number: 330, column_offset: 3 },
                end: { byte_offset: 10507, line_number: 330, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20append',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10510, line_number: 330, column_offset: 11 },
                end: { byte_offset: 10516, line_number: 330, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10517, line_number: 330, column_offset: 18 },
                end: { byte_offset: 10518, line_number: 330, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.Units',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10519, line_number: 330, column_offset: 20 },
                end: { byte_offset: 10524, line_number: 330, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8230%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10526, line_number: 330, column_offset: 27 },
                end: { byte_offset: 10528, line_number: 330, column_offset: 29 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20len',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10534, line_number: 331, column_offset: 4 },
                end: { byte_offset: 10537, line_number: 331, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c85a0%5D.missing',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10538, line_number: 331, column_offset: 8 },
                end: { byte_offset: 10545, line_number: 331, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8230%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10556, line_number: 332, column_offset: 2 },
                end: { byte_offset: 10558, line_number: 332, column_offset: 4 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.HasCompileErrors',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10559, line_number: 332, column_offset: 5 },
                end: { byte_offset: 10575, line_number: 332, column_offset: 21 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20true',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10578, line_number: 332, column_offset: 24 },
                end: { byte_offset: 10582, line_number: 332, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20MissingError',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10593, line_number: 333, column_offset: 10 },
                end: { byte_offset: 10605, line_number: 333, column_offset: 22 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244859f0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10606, line_number: 333, column_offset: 23 },
                end: { byte_offset: 10607, line_number: 333, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20MissingError.Path',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 10606, line_number: 333, column_offset: 23 },
                end: { byte_offset: 10612, line_number: 333, column_offset: 29 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.Path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10608, line_number: 333, column_offset: 25 },
                end: { byte_offset: 10612, line_number: 333, column_offset: 29 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c85a0%5D.missing',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10614, line_number: 333, column_offset: 31 },
                end: { byte_offset: 10621, line_number: 333, column_offset: 38 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20MissingError.Missing',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 10614, line_number: 333, column_offset: 31 },
                end: { byte_offset: 10621, line_number: 333, column_offset: 38 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10634, line_number: 335, column_offset: 8 },
                end: { byte_offset: 10637, line_number: 335, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.Store',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 10873, line_number: 341 },
                end: { byte_offset: 12105, line_number: 378, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424485b30%5D.p',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 10879, line_number: 341, column_offset: 6 },
                end: { byte_offset: 10880, line_number: 341, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10882, line_number: 341, column_offset: 9 },
                end: { byte_offset: 10889, line_number: 341, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.Store',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 10891, line_number: 341, column_offset: 18 },
                end: { byte_offset: 10896, line_number: 341, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424485b80%5D.ctx',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 10897, line_number: 341, column_offset: 24 },
                end: { byte_offset: 10900, line_number: 341, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=context?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10901, line_number: 341, column_offset: 28 },
                end: { byte_offset: 10908, line_number: 341, column_offset: 35 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=context?root=pkg/linux_amd64#type%20Context',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10909, line_number: 341, column_offset: 36 },
                end: { byte_offset: 10916, line_number: 341, column_offset: 43 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424485bd0%5D.a',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 10918, line_number: 341, column_offset: 45 },
                end: { byte_offset: 10919, line_number: 341, column_offset: 46 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/indexpack.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10921, line_number: 341, column_offset: 48 },
                end: { byte_offset: 10930, line_number: 341, column_offset: 57 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/indexpack.a?root=bazel-out/bin#type%20Archive',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10931, line_number: 341, column_offset: 58 },
                end: { byte_offset: 10938, line_number: 341, column_offset: 65 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10943, line_number: 341, column_offset: 70 },
                end: { byte_offset: 10949, line_number: 341, column_offset: 76 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20error',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 10951, line_number: 341, column_offset: 78 },
                end: { byte_offset: 10956, line_number: 341, column_offset: 83 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#const%20%5B0xc424489680%5D.formatKey',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 10967, line_number: 342, column_offset: 7 },
                end: { byte_offset: 10976, line_number: 342, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8b90%5D.unitFiles',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 10993, line_number: 344, column_offset: 5 },
                end: { byte_offset: 11002, line_number: 344, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11005, line_number: 344, column_offset: 17 },
                end: { byte_offset: 11011, line_number: 344, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8c80%5D.cu',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 11020, line_number: 345, column_offset: 8 },
                end: { byte_offset: 11022, line_number: 345, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424485b30%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11032, line_number: 345, column_offset: 20 },
                end: { byte_offset: 11033, line_number: 345, column_offset: 21 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.Units',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11034, line_number: 345, column_offset: 22 },
                end: { byte_offset: 11039, line_number: 345, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8dc0%5D.ri',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 11099, line_number: 347, column_offset: 9 },
                end: { byte_offset: 11101, line_number: 347, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8c80%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11111, line_number: 347, column_offset: 21 },
                end: { byte_offset: 11113, line_number: 347, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.RequiredInput',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11114, line_number: 347, column_offset: 24 },
                end: { byte_offset: 11127, line_number: 347, column_offset: 37 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8e60%5D.path',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 11586, line_number: 356, column_offset: 3 },
                end: { byte_offset: 11590, line_number: 356, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8dc0%5D.ri',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11594, line_number: 356, column_offset: 11 },
                end: { byte_offset: 11596, line_number: 356, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit_FileInput.Info',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11597, line_number: 356, column_offset: 14 },
                end: { byte_offset: 11601, line_number: 356, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20FileInfo.Digest',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11602, line_number: 356, column_offset: 19 },
                end: { byte_offset: 11608, line_number: 356, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11616, line_number: 357, column_offset: 7 },
                end: { byte_offset: 11623, line_number: 357, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#func%20Contains',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 11616, line_number: 357, column_offset: 7 },
                end: { byte_offset: 11643, line_number: 357, column_offset: 34 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#func%20Contains',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11624, line_number: 357, column_offset: 15 },
                end: { byte_offset: 11632, line_number: 357, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8e60%5D.path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11633, line_number: 357, column_offset: 24 },
                end: { byte_offset: 11637, line_number: 357, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8f50%5D.digest',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 11782, line_number: 363, column_offset: 3 },
                end: { byte_offset: 11788, line_number: 363, column_offset: 9 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8fa0%5D.err',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 11790, line_number: 363, column_offset: 11 },
                end: { byte_offset: 11793, line_number: 363, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424485b30%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11797, line_number: 363, column_offset: 18 },
                end: { byte_offset: 11798, line_number: 363, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.fetchAndStore',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 11797, line_number: 363, column_offset: 18 },
                end: { byte_offset: 11830, line_number: 363, column_offset: 51 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.ext',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11799, line_number: 363, column_offset: 20 },
                end: { byte_offset: 11802, line_number: 363, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.fetchAndStore',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11803, line_number: 363, column_offset: 24 },
                end: { byte_offset: 11816, line_number: 363, column_offset: 37 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424485b80%5D.ctx',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11817, line_number: 363, column_offset: 38 },
                end: { byte_offset: 11820, line_number: 363, column_offset: 41 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8e60%5D.path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11822, line_number: 363, column_offset: 43 },
                end: { byte_offset: 11826, line_number: 363, column_offset: 47 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424485bd0%5D.a',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11828, line_number: 363, column_offset: 49 },
                end: { byte_offset: 11829, line_number: 363, column_offset: 50 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8fa0%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11837, line_number: 364, column_offset: 6 },
                end: { byte_offset: 11840, line_number: 364, column_offset: 9 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11844, line_number: 364, column_offset: 13 },
                end: { byte_offset: 11847, line_number: 364, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11861, line_number: 365, column_offset: 11 },
                end: { byte_offset: 11864, line_number: 365, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8fa0%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11866, line_number: 365, column_offset: 16 },
                end: { byte_offset: 11869, line_number: 365, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8dc0%5D.ri',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11878, line_number: 367, column_offset: 3 },
                end: { byte_offset: 11880, line_number: 367, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit_FileInput.Info',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11881, line_number: 367, column_offset: 6 },
                end: { byte_offset: 11885, line_number: 367, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20FileInfo.Digest',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11886, line_number: 367, column_offset: 11 },
                end: { byte_offset: 11892, line_number: 367, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8f50%5D.digest',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11895, line_number: 367, column_offset: 20 },
                end: { byte_offset: 11901, line_number: 367, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9090%5D.fn',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 11958, line_number: 371, column_offset: 2 },
                end: { byte_offset: 11960, line_number: 371, column_offset: 4 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c90e0%5D.err',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 11962, line_number: 371, column_offset: 6 },
                end: { byte_offset: 11965, line_number: 371, column_offset: 9 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424485bd0%5D.a',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11969, line_number: 371, column_offset: 13 },
                end: { byte_offset: 11970, line_number: 371, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/indexpack.a?root=bazel-out/bin#method%20%28%2Aindexpack.Archive%29.WriteUnit',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 11969, line_number: 371, column_offset: 13 },
                end: { byte_offset: 12000, line_number: 371, column_offset: 44 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/indexpack.a?root=bazel-out/bin#method%20%28%2Aindexpack.Archive%29.WriteUnit',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11971, line_number: 371, column_offset: 15 },
                end: { byte_offset: 11980, line_number: 371, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424485b80%5D.ctx',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11981, line_number: 371, column_offset: 25 },
                end: { byte_offset: 11984, line_number: 371, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#const%20%5B0xc424489680%5D.formatKey',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11986, line_number: 371, column_offset: 30 },
                end: { byte_offset: 11995, line_number: 371, column_offset: 39 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8c80%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 11997, line_number: 371, column_offset: 41 },
                end: { byte_offset: 11999, line_number: 371, column_offset: 43 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c90e0%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12006, line_number: 372, column_offset: 5 },
                end: { byte_offset: 12009, line_number: 372, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12013, line_number: 372, column_offset: 12 },
                end: { byte_offset: 12016, line_number: 372, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12029, line_number: 373, column_offset: 10 },
                end: { byte_offset: 12032, line_number: 373, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c90e0%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12034, line_number: 373, column_offset: 15 },
                end: { byte_offset: 12037, line_number: 373, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8b90%5D.unitFiles',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12044, line_number: 375, column_offset: 2 },
                end: { byte_offset: 12053, line_number: 375, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20append',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12056, line_number: 375, column_offset: 14 },
                end: { byte_offset: 12062, line_number: 375, column_offset: 20 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8b90%5D.unitFiles',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12063, line_number: 375, column_offset: 21 },
                end: { byte_offset: 12072, line_number: 375, column_offset: 30 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9090%5D.fn',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12074, line_number: 375, column_offset: 32 },
                end: { byte_offset: 12076, line_number: 375, column_offset: 34 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8b90%5D.unitFiles',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12089, line_number: 377, column_offset: 8 },
                end: { byte_offset: 12098, line_number: 377, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12100, line_number: 377, column_offset: 19 },
                end: { byte_offset: 12103, line_number: 377, column_offset: 22 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20mapFetcher',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 12217, line_number: 382, column_offset: 5 },
                end: { byte_offset: 12227, line_number: 382, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20mapFetcher',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 12217, line_number: 382, column_offset: 5 },
                end: { byte_offset: 12245, line_number: 382, column_offset: 33 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12232, line_number: 382, column_offset: 20 },
                end: { byte_offset: 12238, line_number: 382, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20byte',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12241, line_number: 382, column_offset: 29 },
                end: { byte_offset: 12245, line_number: 382, column_offset: 33 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28golang.mapFetcher%29.Fetch',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 12329, line_number: 385 },
                end: { byte_offset: 12474, line_number: 390, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5db0%5D.m',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 12335, line_number: 385, column_offset: 6 },
                end: { byte_offset: 12336, line_number: 385, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20mapFetcher',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12337, line_number: 385, column_offset: 8 },
                end: { byte_offset: 12347, line_number: 385, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28golang.mapFetcher%29.Fetch',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 12349, line_number: 385, column_offset: 20 },
                end: { byte_offset: 12354, line_number: 385, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5e50%5D.digest',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 12358, line_number: 385, column_offset: 29 },
                end: { byte_offset: 12364, line_number: 385, column_offset: 35 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12365, line_number: 385, column_offset: 36 },
                end: { byte_offset: 12371, line_number: 385, column_offset: 42 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20byte',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12376, line_number: 385, column_offset: 47 },
                end: { byte_offset: 12380, line_number: 385, column_offset: 51 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20error',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12382, line_number: 385, column_offset: 53 },
                end: { byte_offset: 12387, line_number: 385, column_offset: 58 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423ffe140%5D.data',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 12395, line_number: 386, column_offset: 4 },
                end: { byte_offset: 12399, line_number: 386, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423ffe190%5D.ok',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 12401, line_number: 386, column_offset: 10 },
                end: { byte_offset: 12403, line_number: 386, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5db0%5D.m',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12407, line_number: 386, column_offset: 16 },
                end: { byte_offset: 12408, line_number: 386, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a5e50%5D.digest',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12409, line_number: 386, column_offset: 18 },
                end: { byte_offset: 12415, line_number: 386, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423ffe190%5D.ok',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12418, line_number: 386, column_offset: 27 },
                end: { byte_offset: 12420, line_number: 386, column_offset: 29 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc423ffe140%5D.data',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12432, line_number: 387, column_offset: 9 },
                end: { byte_offset: 12436, line_number: 387, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12438, line_number: 387, column_offset: 15 },
                end: { byte_offset: 12441, line_number: 387, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12453, line_number: 389, column_offset: 8 },
                end: { byte_offset: 12456, line_number: 389, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=os?root=pkg/linux_amd64_shared#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12458, line_number: 389, column_offset: 13 },
                end: { byte_offset: 12460, line_number: 389, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=os?root=pkg/linux_amd64_shared#var%20ErrNotExist',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12461, line_number: 389, column_offset: 16 },
                end: { byte_offset: 12472, line_number: 389, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.EachUnit',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 12605, line_number: 394 },
                end: { byte_offset: 13485, line_number: 424, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424485d10%5D.p',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 12611, line_number: 394, column_offset: 6 },
                end: { byte_offset: 12612, line_number: 394, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12614, line_number: 394, column_offset: 9 },
                end: { byte_offset: 12621, line_number: 394, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.EachUnit',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 12623, line_number: 394, column_offset: 18 },
                end: { byte_offset: 12631, line_number: 394, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424485d60%5D.ctx',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 12632, line_number: 394, column_offset: 27 },
                end: { byte_offset: 12635, line_number: 394, column_offset: 30 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=context?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12636, line_number: 394, column_offset: 31 },
                end: { byte_offset: 12643, line_number: 394, column_offset: 38 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=context?root=pkg/linux_amd64#type%20Context',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12644, line_number: 394, column_offset: 39 },
                end: { byte_offset: 12651, line_number: 394, column_offset: 46 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424485ea0%5D.f',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 12653, line_number: 394, column_offset: 48 },
                end: { byte_offset: 12654, line_number: 394, column_offset: 49 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/kindex.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12661, line_number: 394, column_offset: 56 },
                end: { byte_offset: 12667, line_number: 394, column_offset: 62 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/kindex.a?root=bazel-out/bin#type%20Compilation',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12668, line_number: 394, column_offset: 63 },
                end: { byte_offset: 12679, line_number: 394, column_offset: 74 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20error',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12681, line_number: 394, column_offset: 76 },
                end: { byte_offset: 12686, line_number: 394, column_offset: 81 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20error',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12688, line_number: 394, column_offset: 83 },
                end: { byte_offset: 12693, line_number: 394, column_offset: 88 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c92c0%5D.fetcher',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 12697, line_number: 395, column_offset: 1 },
                end: { byte_offset: 12704, line_number: 395, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20make',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12708, line_number: 395, column_offset: 12 },
                end: { byte_offset: 12712, line_number: 395, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20mapFetcher',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12713, line_number: 395, column_offset: 17 },
                end: { byte_offset: 12723, line_number: 395, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9450%5D.cu',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 12733, line_number: 396, column_offset: 8 },
                end: { byte_offset: 12735, line_number: 396, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424485d10%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12745, line_number: 396, column_offset: 20 },
                end: { byte_offset: 12746, line_number: 396, column_offset: 21 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.Units',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12747, line_number: 396, column_offset: 22 },
                end: { byte_offset: 12752, line_number: 396, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9590%5D.ri',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 12834, line_number: 398, column_offset: 9 },
                end: { byte_offset: 12836, line_number: 398, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9450%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12846, line_number: 398, column_offset: 21 },
                end: { byte_offset: 12848, line_number: 398, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.RequiredInput',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12849, line_number: 398, column_offset: 24 },
                end: { byte_offset: 12862, line_number: 398, column_offset: 37 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12872, line_number: 399, column_offset: 7 },
                end: { byte_offset: 12879, line_number: 399, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#func%20Contains',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 12872, line_number: 399, column_offset: 7 },
                end: { byte_offset: 12909, line_number: 399, column_offset: 44 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#func%20Contains',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12880, line_number: 399, column_offset: 15 },
                end: { byte_offset: 12888, line_number: 399, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9590%5D.ri',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12889, line_number: 399, column_offset: 24 },
                end: { byte_offset: 12891, line_number: 399, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit_FileInput.Info',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12892, line_number: 399, column_offset: 27 },
                end: { byte_offset: 12896, line_number: 399, column_offset: 31 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20FileInfo.Digest',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12897, line_number: 399, column_offset: 32 },
                end: { byte_offset: 12903, line_number: 399, column_offset: 38 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c96d0%5D.rc',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 12973, line_number: 402, column_offset: 3 },
                end: { byte_offset: 12975, line_number: 402, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9720%5D.err',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 12977, line_number: 402, column_offset: 7 },
                end: { byte_offset: 12980, line_number: 402, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/vfs.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12984, line_number: 402, column_offset: 14 },
                end: { byte_offset: 12987, line_number: 402, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/vfs.a?root=bazel-out/bin#func%20Open',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 12984, line_number: 402, column_offset: 14 },
                end: { byte_offset: 13013, line_number: 402, column_offset: 43 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/vfs.a?root=bazel-out/bin#func%20Open',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12988, line_number: 402, column_offset: 18 },
                end: { byte_offset: 12992, line_number: 402, column_offset: 22 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424485d60%5D.ctx',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12993, line_number: 402, column_offset: 23 },
                end: { byte_offset: 12996, line_number: 402, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9590%5D.ri',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 12998, line_number: 402, column_offset: 28 },
                end: { byte_offset: 13000, line_number: 402, column_offset: 30 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit_FileInput.Info',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13001, line_number: 402, column_offset: 31 },
                end: { byte_offset: 13005, line_number: 402, column_offset: 35 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20FileInfo.Digest',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13006, line_number: 402, column_offset: 36 },
                end: { byte_offset: 13012, line_number: 402, column_offset: 42 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9720%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13020, line_number: 403, column_offset: 6 },
                end: { byte_offset: 13023, line_number: 403, column_offset: 9 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13027, line_number: 403, column_offset: 13 },
                end: { byte_offset: 13030, line_number: 403, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=fmt?root=pkg/linux_amd64_shared#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13044, line_number: 404, column_offset: 11 },
                end: { byte_offset: 13047, line_number: 404, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=fmt?root=pkg/linux_amd64_shared#func%20Errorf',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 13044, line_number: 404, column_offset: 11 },
                end: { byte_offset: 13080, line_number: 404, column_offset: 47 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=fmt?root=pkg/linux_amd64_shared#func%20Errorf',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13048, line_number: 404, column_offset: 15 },
                end: { byte_offset: 13054, line_number: 404, column_offset: 21 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9720%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13076, line_number: 404, column_offset: 43 },
                end: { byte_offset: 13079, line_number: 404, column_offset: 46 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9810%5D.fd',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 13089, line_number: 406, column_offset: 3 },
                end: { byte_offset: 13091, line_number: 406, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9720%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13093, line_number: 406, column_offset: 7 },
                end: { byte_offset: 13096, line_number: 406, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/kindex.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13100, line_number: 406, column_offset: 14 },
                end: { byte_offset: 13106, line_number: 406, column_offset: 20 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/kindex.a?root=bazel-out/bin#func%20FileData',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 13100, line_number: 406, column_offset: 14 },
                end: { byte_offset: 13133, line_number: 406, column_offset: 47 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/kindex.a?root=bazel-out/bin#func%20FileData',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13107, line_number: 406, column_offset: 21 },
                end: { byte_offset: 13115, line_number: 406, column_offset: 29 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9590%5D.ri',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13116, line_number: 406, column_offset: 30 },
                end: { byte_offset: 13118, line_number: 406, column_offset: 32 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit_FileInput.Info',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13119, line_number: 406, column_offset: 33 },
                end: { byte_offset: 13123, line_number: 406, column_offset: 37 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20FileInfo.Path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13124, line_number: 406, column_offset: 38 },
                end: { byte_offset: 13128, line_number: 406, column_offset: 42 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c96d0%5D.rc',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13130, line_number: 406, column_offset: 44 },
                end: { byte_offset: 13132, line_number: 406, column_offset: 46 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c96d0%5D.rc',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13137, line_number: 407, column_offset: 3 },
                end: { byte_offset: 13139, line_number: 407, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=io?root=pkg/linux_amd64_shared#method%20ReadCloser.Close',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 13137, line_number: 407, column_offset: 3 },
                end: { byte_offset: 13147, line_number: 407, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=io?root=pkg/linux_amd64_shared#method%20ReadCloser.Close',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13140, line_number: 407, column_offset: 6 },
                end: { byte_offset: 13145, line_number: 407, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9720%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13154, line_number: 408, column_offset: 6 },
                end: { byte_offset: 13157, line_number: 408, column_offset: 9 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13161, line_number: 408, column_offset: 13 },
                end: { byte_offset: 13164, line_number: 408, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=fmt?root=pkg/linux_amd64_shared#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13178, line_number: 409, column_offset: 11 },
                end: { byte_offset: 13181, line_number: 409, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=fmt?root=pkg/linux_amd64_shared#func%20Errorf',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 13178, line_number: 409, column_offset: 11 },
                end: { byte_offset: 13214, line_number: 409, column_offset: 47 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=fmt?root=pkg/linux_amd64_shared#func%20Errorf',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13182, line_number: 409, column_offset: 15 },
                end: { byte_offset: 13188, line_number: 409, column_offset: 21 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9720%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13210, line_number: 409, column_offset: 43 },
                end: { byte_offset: 13213, line_number: 409, column_offset: 46 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c92c0%5D.fetcher',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13223, line_number: 411, column_offset: 3 },
                end: { byte_offset: 13230, line_number: 411, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9810%5D.fd',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13231, line_number: 411, column_offset: 11 },
                end: { byte_offset: 13233, line_number: 411, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20FileData.Info',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13234, line_number: 411, column_offset: 14 },
                end: { byte_offset: 13238, line_number: 411, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20FileInfo.Digest',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13239, line_number: 411, column_offset: 19 },
                end: { byte_offset: 13245, line_number: 411, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9810%5D.fd',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13249, line_number: 411, column_offset: 29 },
                end: { byte_offset: 13251, line_number: 411, column_offset: 31 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20FileData.Content',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13252, line_number: 411, column_offset: 32 },
                end: { byte_offset: 13259, line_number: 411, column_offset: 39 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9590%5D.ri',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13263, line_number: 412, column_offset: 3 },
                end: { byte_offset: 13265, line_number: 412, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit_FileInput.Info',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13266, line_number: 412, column_offset: 6 },
                end: { byte_offset: 13270, line_number: 412, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20FileInfo.Digest',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13271, line_number: 412, column_offset: 11 },
                end: { byte_offset: 13277, line_number: 412, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9810%5D.fd',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13280, line_number: 412, column_offset: 20 },
                end: { byte_offset: 13282, line_number: 412, column_offset: 22 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20FileData.Info',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13283, line_number: 412, column_offset: 23 },
                end: { byte_offset: 13287, line_number: 412, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20FileInfo.Digest',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13288, line_number: 412, column_offset: 28 },
                end: { byte_offset: 13294, line_number: 412, column_offset: 34 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9900%5D.idx',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 13302, line_number: 415, column_offset: 2 },
                end: { byte_offset: 13305, line_number: 415, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9950%5D.err',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 13307, line_number: 415, column_offset: 7 },
                end: { byte_offset: 13310, line_number: 415, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/kindex.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13314, line_number: 415, column_offset: 14 },
                end: { byte_offset: 13320, line_number: 415, column_offset: 20 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/kindex.a?root=bazel-out/bin#func%20FromUnit',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 13314, line_number: 415, column_offset: 14 },
                end: { byte_offset: 13342, line_number: 415, column_offset: 42 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/go/platform/kindex.a?root=bazel-out/bin#func%20FromUnit',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13321, line_number: 415, column_offset: 21 },
                end: { byte_offset: 13329, line_number: 415, column_offset: 29 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9450%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13330, line_number: 415, column_offset: 30 },
                end: { byte_offset: 13332, line_number: 415, column_offset: 32 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c92c0%5D.fetcher',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13334, line_number: 415, column_offset: 34 },
                end: { byte_offset: 13341, line_number: 415, column_offset: 41 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9950%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13348, line_number: 416, column_offset: 5 },
                end: { byte_offset: 13351, line_number: 416, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13355, line_number: 416, column_offset: 12 },
                end: { byte_offset: 13358, line_number: 416, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=fmt?root=pkg/linux_amd64_shared#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13371, line_number: 417, column_offset: 10 },
                end: { byte_offset: 13374, line_number: 417, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=fmt?root=pkg/linux_amd64_shared#func%20Errorf',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 13371, line_number: 417, column_offset: 10 },
                end: { byte_offset: 13413, line_number: 417, column_offset: 52 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=fmt?root=pkg/linux_amd64_shared#func%20Errorf',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13375, line_number: 417, column_offset: 14 },
                end: { byte_offset: 13381, line_number: 417, column_offset: 20 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9950%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13409, line_number: 417, column_offset: 48 },
                end: { byte_offset: 13412, line_number: 417, column_offset: 51 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9a90%5D.err',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 13423, line_number: 419, column_offset: 5 },
                end: { byte_offset: 13426, line_number: 419, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424485ea0%5D.f',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13430, line_number: 419, column_offset: 12 },
                end: { byte_offset: 13431, line_number: 419, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9900%5D.idx',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13432, line_number: 419, column_offset: 14 },
                end: { byte_offset: 13435, line_number: 419, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9a90%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13438, line_number: 419, column_offset: 20 },
                end: { byte_offset: 13441, line_number: 419, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13445, line_number: 419, column_offset: 27 },
                end: { byte_offset: 13448, line_number: 419, column_offset: 30 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9a90%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13461, line_number: 420, column_offset: 10 },
                end: { byte_offset: 13464, line_number: 420, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13480, line_number: 423, column_offset: 8 },
                end: { byte_offset: 13483, line_number: 423, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFiles',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 13820, line_number: 431 },
                end: { byte_offset: 14332, line_number: 449, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424485f90%5D.p',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 13826, line_number: 431, column_offset: 6 },
                end: { byte_offset: 13827, line_number: 431, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13829, line_number: 431, column_offset: 9 },
                end: { byte_offset: 13836, line_number: 431, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFiles',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 13838, line_number: 431, column_offset: 18 },
                end: { byte_offset: 13846, line_number: 431, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4000%5D.cu',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 13847, line_number: 431, column_offset: 27 },
                end: { byte_offset: 13849, line_number: 431, column_offset: 29 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13851, line_number: 431, column_offset: 31 },
                end: { byte_offset: 13854, line_number: 431, column_offset: 34 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#type%20CompilationUnit',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13855, line_number: 431, column_offset: 35 },
                end: { byte_offset: 13870, line_number: 431, column_offset: 50 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4050%5D.root',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 13872, line_number: 431, column_offset: 52 },
                end: { byte_offset: 13876, line_number: 431, column_offset: 56 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a40a0%5D.base',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 13878, line_number: 431, column_offset: 58 },
                end: { byte_offset: 13882, line_number: 431, column_offset: 62 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13883, line_number: 431, column_offset: 63 },
                end: { byte_offset: 13889, line_number: 431, column_offset: 69 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a40f0%5D.names',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 13891, line_number: 431, column_offset: 71 },
                end: { byte_offset: 13896, line_number: 431, column_offset: 76 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13899, line_number: 431, column_offset: 79 },
                end: { byte_offset: 13905, line_number: 431, column_offset: 85 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9bd0%5D.name',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 13917, line_number: 432, column_offset: 8 },
                end: { byte_offset: 13921, line_number: 432, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a40f0%5D.names',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13931, line_number: 432, column_offset: 22 },
                end: { byte_offset: 13936, line_number: 432, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9c70%5D.path',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 13941, line_number: 433, column_offset: 2 },
                end: { byte_offset: 13945, line_number: 433, column_offset: 6 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9bd0%5D.name',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13949, line_number: 433, column_offset: 10 },
                end: { byte_offset: 13953, line_number: 433, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a40a0%5D.base',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13959, line_number: 434, column_offset: 5 },
                end: { byte_offset: 13963, line_number: 434, column_offset: 9 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9c70%5D.path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13975, line_number: 435, column_offset: 3 },
                end: { byte_offset: 13979, line_number: 435, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13982, line_number: 435, column_offset: 10 },
                end: { byte_offset: 13990, line_number: 435, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#func%20Join',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 13982, line_number: 435, column_offset: 10 },
                end: { byte_offset: 14007, line_number: 435, column_offset: 35 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=path/filepath?root=pkg/linux_amd64#func%20Join',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13991, line_number: 435, column_offset: 19 },
                end: { byte_offset: 13995, line_number: 435, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a40a0%5D.base',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 13996, line_number: 435, column_offset: 24 },
                end: { byte_offset: 14000, line_number: 435, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9bd0%5D.name',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14002, line_number: 435, column_offset: 30 },
                end: { byte_offset: 14006, line_number: 435, column_offset: 34 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9d60%5D.trimmed',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 14014, line_number: 437, column_offset: 2 },
                end: { byte_offset: 14021, line_number: 437, column_offset: 9 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14025, line_number: 437, column_offset: 13 },
                end: { byte_offset: 14032, line_number: 437, column_offset: 20 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#func%20TrimPrefix',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 14025, line_number: 437, column_offset: 13 },
                end: { byte_offset: 14059, line_number: 437, column_offset: 47 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#func%20TrimPrefix',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14033, line_number: 437, column_offset: 21 },
                end: { byte_offset: 14043, line_number: 437, column_offset: 31 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9c70%5D.path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14044, line_number: 437, column_offset: 32 },
                end: { byte_offset: 14048, line_number: 437, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4050%5D.root',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14050, line_number: 437, column_offset: 38 },
                end: { byte_offset: 14054, line_number: 437, column_offset: 42 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4000%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14062, line_number: 438, column_offset: 2 },
                end: { byte_offset: 14064, line_number: 438, column_offset: 4 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.RequiredInput',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14065, line_number: 438, column_offset: 5 },
                end: { byte_offset: 14078, line_number: 438, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20append',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14081, line_number: 438, column_offset: 21 },
                end: { byte_offset: 14087, line_number: 438, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4000%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14088, line_number: 438, column_offset: 28 },
                end: { byte_offset: 14090, line_number: 438, column_offset: 30 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.RequiredInput',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14091, line_number: 438, column_offset: 31 },
                end: { byte_offset: 14104, line_number: 438, column_offset: 44 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14107, line_number: 438, column_offset: 47 },
                end: { byte_offset: 14110, line_number: 438, column_offset: 50 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#type%20CompilationUnit_FileInput',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14111, line_number: 438, column_offset: 51 },
                end: { byte_offset: 14136, line_number: 438, column_offset: 76 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit_FileInput.VName',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14141, line_number: 439, column_offset: 3 },
                end: { byte_offset: 14146, line_number: 439, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit_FileInput.VName',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 14148, line_number: 439, column_offset: 10 },
                end: { byte_offset: 14211, line_number: 442, column_offset: 4 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/storage_proto.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14149, line_number: 439, column_offset: 11 },
                end: { byte_offset: 14152, line_number: 439, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/storage_proto.a?root=bazel-out/bin#type%20VName',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14153, line_number: 439, column_offset: 15 },
                end: { byte_offset: 14158, line_number: 439, column_offset: 20 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/storage_proto.a?root=bazel-out/bin#field%20VName.Corpus',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14164, line_number: 440, column_offset: 4 },
                end: { byte_offset: 14170, line_number: 440, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424485f90%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14172, line_number: 440, column_offset: 12 },
                end: { byte_offset: 14173, line_number: 440, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/storage_proto.a?root=bazel-out/bin#field%20VName.Corpus',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 14172, line_number: 440, column_offset: 12 },
                end: { byte_offset: 14184, line_number: 440, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.ext',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14174, line_number: 440, column_offset: 14 },
                end: { byte_offset: 14177, line_number: 440, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Extractor.Corpus',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14178, line_number: 440, column_offset: 18 },
                end: { byte_offset: 14184, line_number: 440, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/storage_proto.a?root=bazel-out/bin#field%20VName.Path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14190, line_number: 441, column_offset: 4 },
                end: { byte_offset: 14194, line_number: 441, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9d60%5D.trimmed',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14198, line_number: 441, column_offset: 12 },
                end: { byte_offset: 14205, line_number: 441, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/storage_proto.a?root=bazel-out/bin#field%20VName.Path',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 14198, line_number: 441, column_offset: 12 },
                end: { byte_offset: 14205, line_number: 441, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit_FileInput.Info',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14216, line_number: 443, column_offset: 3 },
                end: { byte_offset: 14220, line_number: 443, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit_FileInput.Info',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 14222, line_number: 443, column_offset: 9 },
                end: { byte_offset: 14321, line_number: 446, column_offset: 4 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14223, line_number: 443, column_offset: 10 },
                end: { byte_offset: 14226, line_number: 443, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#type%20FileInfo',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14227, line_number: 443, column_offset: 14 },
                end: { byte_offset: 14235, line_number: 443, column_offset: 22 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20FileInfo.Path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14241, line_number: 444, column_offset: 4 },
                end: { byte_offset: 14245, line_number: 444, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9d60%5D.trimmed',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14249, line_number: 444, column_offset: 12 },
                end: { byte_offset: 14256, line_number: 444, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20FileInfo.Path',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 14249, line_number: 444, column_offset: 12 },
                end: { byte_offset: 14256, line_number: 444, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20FileInfo.Digest',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14262, line_number: 445, column_offset: 4 },
                end: { byte_offset: 14268, line_number: 445, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c9c70%5D.path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14270, line_number: 445, column_offset: 12 },
                end: { byte_offset: 14274, line_number: 445, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20FileInfo.Digest',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 14270, line_number: 445, column_offset: 12 },
                end: { byte_offset: 14274, line_number: 445, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addSource',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 14447, line_number: 453 },
                end: { byte_offset: 14704, line_number: 458, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4190%5D.p',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 14453, line_number: 453, column_offset: 6 },
                end: { byte_offset: 14454, line_number: 453, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14456, line_number: 453, column_offset: 9 },
                end: { byte_offset: 14463, line_number: 453, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addSource',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 14465, line_number: 453, column_offset: 18 },
                end: { byte_offset: 14474, line_number: 453, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a41e0%5D.cu',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 14475, line_number: 453, column_offset: 28 },
                end: { byte_offset: 14477, line_number: 453, column_offset: 30 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14479, line_number: 453, column_offset: 32 },
                end: { byte_offset: 14482, line_number: 453, column_offset: 35 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#type%20CompilationUnit',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14483, line_number: 453, column_offset: 36 },
                end: { byte_offset: 14498, line_number: 453, column_offset: 51 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4230%5D.root',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 14500, line_number: 453, column_offset: 53 },
                end: { byte_offset: 14504, line_number: 453, column_offset: 57 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4280%5D.base',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 14506, line_number: 453, column_offset: 59 },
                end: { byte_offset: 14510, line_number: 453, column_offset: 63 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14511, line_number: 453, column_offset: 64 },
                end: { byte_offset: 14517, line_number: 453, column_offset: 70 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a42d0%5D.names',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 14519, line_number: 453, column_offset: 72 },
                end: { byte_offset: 14524, line_number: 453, column_offset: 77 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14527, line_number: 453, column_offset: 80 },
                end: { byte_offset: 14533, line_number: 453, column_offset: 86 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4190%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14538, line_number: 454, column_offset: 1 },
                end: { byte_offset: 14539, line_number: 454, column_offset: 2 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFiles',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 14538, line_number: 454, column_offset: 1 },
                end: { byte_offset: 14571, line_number: 454, column_offset: 34 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFiles',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14540, line_number: 454, column_offset: 3 },
                end: { byte_offset: 14548, line_number: 454, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a41e0%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14549, line_number: 454, column_offset: 12 },
                end: { byte_offset: 14551, line_number: 454, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4230%5D.root',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14553, line_number: 454, column_offset: 16 },
                end: { byte_offset: 14557, line_number: 454, column_offset: 20 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4280%5D.base',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14559, line_number: 454, column_offset: 22 },
                end: { byte_offset: 14563, line_number: 454, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a42d0%5D.names',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14565, line_number: 454, column_offset: 28 },
                end: { byte_offset: 14570, line_number: 454, column_offset: 33 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472190%5D.in',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 14580, line_number: 455, column_offset: 8 },
                end: { byte_offset: 14582, line_number: 455, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a41e0%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14592, line_number: 455, column_offset: 20 },
                end: { byte_offset: 14594, line_number: 455, column_offset: 22 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.RequiredInput',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14595, line_number: 455, column_offset: 23 },
                end: { byte_offset: 14608, line_number: 455, column_offset: 36 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20len',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14609, line_number: 455, column_offset: 37 },
                end: { byte_offset: 14612, line_number: 455, column_offset: 40 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a41e0%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14613, line_number: 455, column_offset: 41 },
                end: { byte_offset: 14615, line_number: 455, column_offset: 43 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.RequiredInput',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14616, line_number: 455, column_offset: 44 },
                end: { byte_offset: 14629, line_number: 455, column_offset: 57 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20len',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14631, line_number: 455, column_offset: 59 },
                end: { byte_offset: 14634, line_number: 455, column_offset: 62 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a42d0%5D.names',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14635, line_number: 455, column_offset: 63 },
                end: { byte_offset: 14640, line_number: 455, column_offset: 68 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a41e0%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14648, line_number: 456, column_offset: 2 },
                end: { byte_offset: 14650, line_number: 456, column_offset: 4 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.SourceFile',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14651, line_number: 456, column_offset: 5 },
                end: { byte_offset: 14661, line_number: 456, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20append',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14664, line_number: 456, column_offset: 18 },
                end: { byte_offset: 14670, line_number: 456, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a41e0%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14671, line_number: 456, column_offset: 25 },
                end: { byte_offset: 14673, line_number: 456, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.SourceFile',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14674, line_number: 456, column_offset: 28 },
                end: { byte_offset: 14684, line_number: 456, column_offset: 38 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472190%5D.in',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14686, line_number: 456, column_offset: 40 },
                end: { byte_offset: 14688, line_number: 456, column_offset: 42 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit_FileInput.Info',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14689, line_number: 456, column_offset: 43 },
                end: { byte_offset: 14693, line_number: 456, column_offset: 47 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20FileInfo.Path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14694, line_number: 456, column_offset: 48 },
                end: { byte_offset: 14698, line_number: 456, column_offset: 52 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addInput',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 14764, line_number: 461 },
                end: { byte_offset: 15107, line_number: 471, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4370%5D.p',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 14770, line_number: 461, column_offset: 6 },
                end: { byte_offset: 14771, line_number: 461, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14773, line_number: 461, column_offset: 9 },
                end: { byte_offset: 14780, line_number: 461, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addInput',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 14782, line_number: 461, column_offset: 18 },
                end: { byte_offset: 14790, line_number: 461, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a43c0%5D.cu',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 14791, line_number: 461, column_offset: 27 },
                end: { byte_offset: 14793, line_number: 461, column_offset: 29 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14795, line_number: 461, column_offset: 31 },
                end: { byte_offset: 14798, line_number: 461, column_offset: 34 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#type%20CompilationUnit',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14799, line_number: 461, column_offset: 35 },
                end: { byte_offset: 14814, line_number: 461, column_offset: 50 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4410%5D.bp',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 14816, line_number: 461, column_offset: 52 },
                end: { byte_offset: 14818, line_number: 461, column_offset: 54 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14820, line_number: 461, column_offset: 56 },
                end: { byte_offset: 14825, line_number: 461, column_offset: 61 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14826, line_number: 461, column_offset: 62 },
                end: { byte_offset: 14833, line_number: 461, column_offset: 69 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472320%5D.obj',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 14838, line_number: 462, column_offset: 1 },
                end: { byte_offset: 14841, line_number: 462, column_offset: 4 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4410%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14845, line_number: 462, column_offset: 8 },
                end: { byte_offset: 14847, line_number: 462, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.PkgObj',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14848, line_number: 462, column_offset: 11 },
                end: { byte_offset: 14854, line_number: 462, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4370%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14860, line_number: 463, column_offset: 5 },
                end: { byte_offset: 14861, line_number: 463, column_offset: 6 }
            }
        },
        {
            target_ticket: 'kythe://bitbucket.org/creachadair/stringset?lang=go#method%20%28stringset.Set%29.Contains',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 14860, line_number: 463, column_offset: 5 },
                end: { byte_offset: 14880, line_number: 463, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.seen',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14862, line_number: 463, column_offset: 7 },
                end: { byte_offset: 14866, line_number: 463, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://bitbucket.org/creachadair/stringset?lang=go#method%20%28stringset.Set%29.Contains',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14867, line_number: 463, column_offset: 12 },
                end: { byte_offset: 14875, line_number: 463, column_offset: 20 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472320%5D.obj',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14876, line_number: 463, column_offset: 21 },
                end: { byte_offset: 14879, line_number: 463, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4370%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14885, line_number: 464, column_offset: 2 },
                end: { byte_offset: 14886, line_number: 464, column_offset: 3 }
            }
        },
        {
            target_ticket: 'kythe://bitbucket.org/creachadair/stringset?lang=go#method%20%28%2Astringset.Set%29.Add',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 14885, line_number: 464, column_offset: 2 },
                end: { byte_offset: 14900, line_number: 464, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.seen',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14887, line_number: 464, column_offset: 4 },
                end: { byte_offset: 14891, line_number: 464, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://bitbucket.org/creachadair/stringset?lang=go#method%20%28%2Astringset.Set%29.Add',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14892, line_number: 464, column_offset: 9 },
                end: { byte_offset: 14895, line_number: 464, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472320%5D.obj',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14896, line_number: 464, column_offset: 13 },
                end: { byte_offset: 14899, line_number: 464, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4370%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14903, line_number: 465, column_offset: 2 },
                end: { byte_offset: 14904, line_number: 465, column_offset: 3 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFiles',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 14903, line_number: 465, column_offset: 2 },
                end: { byte_offset: 14945, line_number: 465, column_offset: 44 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFiles',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14905, line_number: 465, column_offset: 4 },
                end: { byte_offset: 14913, line_number: 465, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a43c0%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14914, line_number: 465, column_offset: 13 },
                end: { byte_offset: 14916, line_number: 465, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4410%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14918, line_number: 465, column_offset: 17 },
                end: { byte_offset: 14920, line_number: 465, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=go/build?root=pkg/linux_amd64#field%20Package.Root',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14921, line_number: 465, column_offset: 20 },
                end: { byte_offset: 14925, line_number: 465, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14933, line_number: 465, column_offset: 32 },
                end: { byte_offset: 14939, line_number: 465, column_offset: 38 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472320%5D.obj',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 14940, line_number: 465, column_offset: 39 },
                end: { byte_offset: 14943, line_number: 465, column_offset: 42 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472410%5D.fi',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 15023, line_number: 468, column_offset: 2 },
                end: { byte_offset: 15025, line_number: 468, column_offset: 4 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a43c0%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15029, line_number: 468, column_offset: 8 },
                end: { byte_offset: 15031, line_number: 468, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.RequiredInput',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15032, line_number: 468, column_offset: 11 },
                end: { byte_offset: 15045, line_number: 468, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20len',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15046, line_number: 468, column_offset: 25 },
                end: { byte_offset: 15049, line_number: 468, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a43c0%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15050, line_number: 468, column_offset: 29 },
                end: { byte_offset: 15052, line_number: 468, column_offset: 31 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.RequiredInput',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15053, line_number: 468, column_offset: 32 },
                end: { byte_offset: 15066, line_number: 468, column_offset: 45 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472410%5D.fi',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15073, line_number: 469, column_offset: 2 },
                end: { byte_offset: 15075, line_number: 469, column_offset: 4 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit_FileInput.VName',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15076, line_number: 469, column_offset: 5 },
                end: { byte_offset: 15081, line_number: 469, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4370%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15084, line_number: 469, column_offset: 13 },
                end: { byte_offset: 15085, line_number: 469, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.vnameFor',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 15084, line_number: 469, column_offset: 13 },
                end: { byte_offset: 15102, line_number: 469, column_offset: 31 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.ext',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15086, line_number: 469, column_offset: 15 },
                end: { byte_offset: 15089, line_number: 469, column_offset: 18 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.vnameFor',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15090, line_number: 469, column_offset: 19 },
                end: { byte_offset: 15098, line_number: 469, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4410%5D.bp',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15099, line_number: 469, column_offset: 28 },
                end: { byte_offset: 15101, line_number: 469, column_offset: 30 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addEnv',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 15155, line_number: 474 },
                end: { byte_offset: 15328, line_number: 479, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15162, line_number: 474, column_offset: 7 },
                end: { byte_offset: 15169, line_number: 474, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addEnv',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 15171, line_number: 474, column_offset: 16 },
                end: { byte_offset: 15177, line_number: 474, column_offset: 22 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4500%5D.cu',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 15178, line_number: 474, column_offset: 23 },
                end: { byte_offset: 15180, line_number: 474, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15182, line_number: 474, column_offset: 27 },
                end: { byte_offset: 15185, line_number: 474, column_offset: 30 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#type%20CompilationUnit',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15186, line_number: 474, column_offset: 31 },
                end: { byte_offset: 15201, line_number: 474, column_offset: 46 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4550%5D.name',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 15203, line_number: 474, column_offset: 48 },
                end: { byte_offset: 15207, line_number: 474, column_offset: 52 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a45a0%5D.value',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 15209, line_number: 474, column_offset: 54 },
                end: { byte_offset: 15214, line_number: 474, column_offset: 59 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15215, line_number: 474, column_offset: 60 },
                end: { byte_offset: 15221, line_number: 474, column_offset: 66 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4500%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15226, line_number: 475, column_offset: 1 },
                end: { byte_offset: 15228, line_number: 475, column_offset: 3 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.Environment',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15229, line_number: 475, column_offset: 4 },
                end: { byte_offset: 15240, line_number: 475, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20append',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15243, line_number: 475, column_offset: 18 },
                end: { byte_offset: 15249, line_number: 475, column_offset: 24 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4500%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15250, line_number: 475, column_offset: 25 },
                end: { byte_offset: 15252, line_number: 475, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.Environment',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15253, line_number: 475, column_offset: 28 },
                end: { byte_offset: 15264, line_number: 475, column_offset: 39 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15267, line_number: 475, column_offset: 42 },
                end: { byte_offset: 15270, line_number: 475, column_offset: 45 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#type%20CompilationUnit_Env',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15271, line_number: 475, column_offset: 46 },
                end: { byte_offset: 15290, line_number: 475, column_offset: 65 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit_Env.Name',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15294, line_number: 476, column_offset: 2 },
                end: { byte_offset: 15298, line_number: 476, column_offset: 6 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4550%5D.name',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15301, line_number: 476, column_offset: 9 },
                end: { byte_offset: 15305, line_number: 476, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit_Env.Name',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 15301, line_number: 476, column_offset: 9 },
                end: { byte_offset: 15305, line_number: 476, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit_Env.Value',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15309, line_number: 477, column_offset: 2 },
                end: { byte_offset: 15314, line_number: 477, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a45a0%5D.value',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15316, line_number: 477, column_offset: 9 },
                end: { byte_offset: 15321, line_number: 477, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit_Env.Value',
            kind: '/kythe/edge/ref/init',
            span: {
                start: { byte_offset: 15316, line_number: 477, column_offset: 9 },
                end: { byte_offset: 15321, line_number: 477, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFlag',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 15413, line_number: 482 },
                end: { byte_offset: 15611, line_number: 487, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15420, line_number: 482, column_offset: 7 },
                end: { byte_offset: 15427, line_number: 482, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addFlag',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 15429, line_number: 482, column_offset: 16 },
                end: { byte_offset: 15436, line_number: 482, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4690%5D.cu',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 15437, line_number: 482, column_offset: 24 },
                end: { byte_offset: 15439, line_number: 482, column_offset: 26 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15441, line_number: 482, column_offset: 28 },
                end: { byte_offset: 15444, line_number: 482, column_offset: 31 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#type%20CompilationUnit',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15445, line_number: 482, column_offset: 32 },
                end: { byte_offset: 15460, line_number: 482, column_offset: 47 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a46e0%5D.name',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 15462, line_number: 482, column_offset: 49 },
                end: { byte_offset: 15466, line_number: 482, column_offset: 53 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15467, line_number: 482, column_offset: 54 },
                end: { byte_offset: 15473, line_number: 482, column_offset: 60 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4730%5D.values',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 15475, line_number: 482, column_offset: 62 },
                end: { byte_offset: 15481, line_number: 482, column_offset: 68 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15485, line_number: 482, column_offset: 72 },
                end: { byte_offset: 15491, line_number: 482, column_offset: 78 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20len',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15499, line_number: 483, column_offset: 4 },
                end: { byte_offset: 15502, line_number: 483, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4730%5D.values',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15503, line_number: 483, column_offset: 8 },
                end: { byte_offset: 15509, line_number: 483, column_offset: 14 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4690%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15520, line_number: 484, column_offset: 2 },
                end: { byte_offset: 15522, line_number: 484, column_offset: 4 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.Argument',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15523, line_number: 484, column_offset: 5 },
                end: { byte_offset: 15531, line_number: 484, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20append',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15534, line_number: 484, column_offset: 16 },
                end: { byte_offset: 15540, line_number: 484, column_offset: 22 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4690%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15541, line_number: 484, column_offset: 23 },
                end: { byte_offset: 15543, line_number: 484, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.Argument',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15544, line_number: 484, column_offset: 26 },
                end: { byte_offset: 15552, line_number: 484, column_offset: 34 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a46e0%5D.name',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15554, line_number: 484, column_offset: 36 },
                end: { byte_offset: 15558, line_number: 484, column_offset: 40 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4690%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15562, line_number: 485, column_offset: 2 },
                end: { byte_offset: 15564, line_number: 485, column_offset: 4 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.Argument',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15565, line_number: 485, column_offset: 5 },
                end: { byte_offset: 15573, line_number: 485, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20append',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15576, line_number: 485, column_offset: 16 },
                end: { byte_offset: 15582, line_number: 485, column_offset: 22 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4690%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15583, line_number: 485, column_offset: 23 },
                end: { byte_offset: 15585, line_number: 485, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#field%20CompilationUnit.Argument',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15586, line_number: 485, column_offset: 26 },
                end: { byte_offset: 15594, line_number: 485, column_offset: 34 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4730%5D.values',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15596, line_number: 485, column_offset: 36 },
                end: { byte_offset: 15602, line_number: 485, column_offset: 42 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addDeps',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 15753, line_number: 491 },
                end: { byte_offset: 16114, line_number: 503, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a47d0%5D.p',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 15759, line_number: 491, column_offset: 6 },
                end: { byte_offset: 15760, line_number: 491, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20Package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15762, line_number: 491, column_offset: 9 },
                end: { byte_offset: 15769, line_number: 491, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addDeps',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 15771, line_number: 491, column_offset: 18 },
                end: { byte_offset: 15778, line_number: 491, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4820%5D.cu',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 15779, line_number: 491, column_offset: 26 },
                end: { byte_offset: 15781, line_number: 491, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15783, line_number: 491, column_offset: 30 },
                end: { byte_offset: 15786, line_number: 491, column_offset: 33 }
            }
        },
        {
            target_ticket: 'kythe://kythe.io?lang=go?path=kythe/proto/analysis_proto.a?root=bazel-out/bin#type%20CompilationUnit',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15787, line_number: 491, column_offset: 34 },
                end: { byte_offset: 15802, line_number: 491, column_offset: 49 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4870%5D.importPaths',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 15804, line_number: 491, column_offset: 51 },
                end: { byte_offset: 15815, line_number: 491, column_offset: 62 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15818, line_number: 491, column_offset: 65 },
                end: { byte_offset: 15824, line_number: 491, column_offset: 71 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15828, line_number: 491, column_offset: 75 },
                end: { byte_offset: 15834, line_number: 491, column_offset: 81 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472910%5D.missing',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 15842, line_number: 492, column_offset: 5 },
                end: { byte_offset: 15849, line_number: 492, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15852, line_number: 492, column_offset: 15 },
                end: { byte_offset: 15858, line_number: 492, column_offset: 21 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472a00%5D.ip',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 15867, line_number: 493, column_offset: 8 },
                end: { byte_offset: 15869, line_number: 493, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4870%5D.importPaths',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15879, line_number: 493, column_offset: 20 },
                end: { byte_offset: 15890, line_number: 493, column_offset: 31 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472a00%5D.ip',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15898, line_number: 494, column_offset: 5 },
                end: { byte_offset: 15900, line_number: 494, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472b90%5D.dep',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 15976, line_number: 496, column_offset: 12 },
                end: { byte_offset: 15979, line_number: 496, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472be0%5D.err',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 15981, line_number: 496, column_offset: 17 },
                end: { byte_offset: 15984, line_number: 496, column_offset: 20 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a47d0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15988, line_number: 496, column_offset: 24 },
                end: { byte_offset: 15989, line_number: 496, column_offset: 25 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.addPackage',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 15988, line_number: 496, column_offset: 24 },
                end: { byte_offset: 16008, line_number: 496, column_offset: 44 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20Package.ext',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15990, line_number: 496, column_offset: 26 },
                end: { byte_offset: 15993, line_number: 496, column_offset: 29 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Extractor%29.addPackage',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 15994, line_number: 496, column_offset: 30 },
                end: { byte_offset: 16004, line_number: 496, column_offset: 40 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472a00%5D.ip',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16005, line_number: 496, column_offset: 41 },
                end: { byte_offset: 16007, line_number: 496, column_offset: 43 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472be0%5D.err',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16010, line_number: 496, column_offset: 46 },
                end: { byte_offset: 16013, line_number: 496, column_offset: 49 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-const%20nil',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16017, line_number: 496, column_offset: 53 },
                end: { byte_offset: 16020, line_number: 496, column_offset: 56 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472910%5D.missing',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16026, line_number: 497, column_offset: 3 },
                end: { byte_offset: 16033, line_number: 497, column_offset: 10 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20append',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16036, line_number: 497, column_offset: 13 },
                end: { byte_offset: 16042, line_number: 497, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472910%5D.missing',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16043, line_number: 497, column_offset: 20 },
                end: { byte_offset: 16050, line_number: 497, column_offset: 27 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472a00%5D.ip',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16052, line_number: 497, column_offset: 29 },
                end: { byte_offset: 16054, line_number: 497, column_offset: 31 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a47d0%5D.p',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16070, line_number: 499, column_offset: 3 },
                end: { byte_offset: 16071, line_number: 499, column_offset: 4 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addInput',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 16070, line_number: 499, column_offset: 3 },
                end: { byte_offset: 16089, line_number: 499, column_offset: 22 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.Package%29.addInput',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16072, line_number: 499, column_offset: 5 },
                end: { byte_offset: 16080, line_number: 499, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244a4820%5D.cu',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16081, line_number: 499, column_offset: 14 },
                end: { byte_offset: 16083, line_number: 499, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472b90%5D.dep',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16085, line_number: 499, column_offset: 18 },
                end: { byte_offset: 16088, line_number: 499, column_offset: 21 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc424472910%5D.missing',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16105, line_number: 502, column_offset: 8 },
                end: { byte_offset: 16112, line_number: 502, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20MissingError',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 16196, line_number: 506, column_offset: 5 },
                end: { byte_offset: 16208, line_number: 506, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20MissingError',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 16196, line_number: 506, column_offset: 5 },
                end: { byte_offset: 16348, line_number: 509, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20MissingError.Path',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 16219, line_number: 507, column_offset: 1 },
                end: { byte_offset: 16223, line_number: 507, column_offset: 5 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16227, line_number: 507, column_offset: 9 },
                end: { byte_offset: 16233, line_number: 507, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20MissingError.Missing',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 16282, line_number: 508, column_offset: 1 },
                end: { byte_offset: 16289, line_number: 508, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16292, line_number: 508, column_offset: 11 },
                end: { byte_offset: 16298, line_number: 508, column_offset: 17 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.MissingError%29.Error',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 16350, line_number: 511 },
                end: { byte_offset: 16509, line_number: 514, column_offset: 1 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8050%5D.m',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 16356, line_number: 511, column_offset: 6 },
                end: { byte_offset: 16357, line_number: 511, column_offset: 7 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#type%20MissingError',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16359, line_number: 511, column_offset: 9 },
                end: { byte_offset: 16371, line_number: 511, column_offset: 21 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#method%20%28%2Agolang.MissingError%29.Error',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 16373, line_number: 511, column_offset: 23 },
                end: { byte_offset: 16378, line_number: 511, column_offset: 28 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-type%20string',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16381, line_number: 511, column_offset: 31 },
                end: { byte_offset: 16387, line_number: 511, column_offset: 37 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=fmt?root=pkg/linux_amd64_shared#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16398, line_number: 512, column_offset: 8 },
                end: { byte_offset: 16401, line_number: 512, column_offset: 11 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=fmt?root=pkg/linux_amd64_shared#func%20Sprintf',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 16398, line_number: 512, column_offset: 8 },
                end: { byte_offset: 16507, line_number: 513, column_offset: 56 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=fmt?root=pkg/linux_amd64_shared#func%20Sprintf',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16402, line_number: 512, column_offset: 12 },
                end: { byte_offset: 16409, line_number: 512, column_offset: 19 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8050%5D.m',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16453, line_number: 513, column_offset: 2 },
                end: { byte_offset: 16454, line_number: 513, column_offset: 3 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20MissingError.Path',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16455, line_number: 513, column_offset: 4 },
                end: { byte_offset: 16459, line_number: 513, column_offset: 8 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?root=ref/spec#builtin-func%20len',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16461, line_number: 513, column_offset: 10 },
                end: { byte_offset: 16464, line_number: 513, column_offset: 13 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8050%5D.m',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16465, line_number: 513, column_offset: 14 },
                end: { byte_offset: 16466, line_number: 513, column_offset: 15 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20MissingError.Missing',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16467, line_number: 513, column_offset: 16 },
                end: { byte_offset: 16474, line_number: 513, column_offset: 23 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#package',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16477, line_number: 513, column_offset: 26 },
                end: { byte_offset: 16484, line_number: 513, column_offset: 33 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#func%20Join',
            kind: '/kythe/edge/ref/call',
            span: {
                start: { byte_offset: 16477, line_number: 513, column_offset: 26 },
                end: { byte_offset: 16506, line_number: 513, column_offset: 55 }
            }
        },
        {
            target_ticket: 'kythe://golang.org?lang=go?path=strings?root=pkg/linux_amd64#func%20Join',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16485, line_number: 513, column_offset: 34 },
                end: { byte_offset: 16489, line_number: 513, column_offset: 38 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#var%20%5B0xc4244c8050%5D.m',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16490, line_number: 513, column_offset: 39 },
                end: { byte_offset: 16491, line_number: 513, column_offset: 40 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#field%20MissingError.Missing',
            kind: '/kythe/edge/ref',
            span: {
                start: { byte_offset: 16492, line_number: 513, column_offset: 41 },
                end: { byte_offset: 16499, line_number: 513, column_offset: 48 }
            }
        }
    ]
};


/***/ }),

/***/ "../../libs/kythe/src/testing/response_small.ts":
/*!************************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/kythe/src/testing/response_small.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.response = {
    location: {
        ticket: 'kythe://kythe.io?path=kythe.io%2Fkythe%2Fgo%2Findexer%2Ftestdata%2Fmeta.go'
    },
    source_text: 'cGFja2FnZSBtZXRhCgpmdW5jIEZvb2JhcigpIHt9Ci8vICAgXiAgICAgXiBvZmZzZXQgMjUKLy8gICBcIG9mZnNldCAxOQoKLy8gTm90ZTogVGhlIGxvY2F0aW9ucyBpbiB0aGlzIGZpbGUgYXJlIGNvbm5lY3RlZCB0byB0aGUgb2Zmc2V0cyBkZWZpbmVkIGluIHRoZQovLyBhc3NvY2lhdGVkIG1ldGEgZmlsZS4gSWYgeW91IG1vdmUgYW55dGhpbmcgYWJvdmUgdGhpcyBjb21tZW50IHdpdGhvdXQKLy8gdXBkYXRpbmcgdGhlIG1ldGFkYXRhLCB0aGUgdGVzdCBtYXkgYnJlYWsuCgovLy0gRkEubm9kZS9raW5kIGFuY2hvcgovLy0gRkEubG9jL3N0YXJ0IDE5Ci8vLSBGQS5sb2MvZW5kICAgMjUKLy8tIEZBIGRlZmluZXMvYmluZGluZyBGb29iYXIKLy8tIEZvb2Jhci5ub2RlL2tpbmQgZnVuY3Rpb24KLy8tIEFsdD12bmFtZShnc2lnLCBnY29ycCwgZ3Jvb3QsIGdwYXRoLCBnbGFuZykgZ2VuZXJhdGVzIEZvb2Jhcgo=',
    reference: [
        {
            target_ticket: 'kythe://kythe?lang=go#package',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 8, line_number: 1, column_offset: 8 },
                end: { byte_offset: 12, line_number: 1, column_offset: 12 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#func%20Foobar',
            kind: '/kythe/edge/defines',
            span: {
                start: { byte_offset: 14, line_number: 3 },
                end: { byte_offset: 30, line_number: 3, column_offset: 16 }
            }
        },
        {
            target_ticket: 'kythe://kythe?lang=go#func%20Foobar',
            kind: '/kythe/edge/defines/binding',
            span: {
                start: { byte_offset: 19, line_number: 3, column_offset: 5 },
                end: { byte_offset: 25, line_number: 3, column_offset: 11 }
            }
        }
    ]
};


/***/ }),

/***/ "../../libs/shell/src/index.ts":
/*!*******************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/shell/src/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Public API Surface of shell
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./lib/shell.service */ "../../libs/shell/src/lib/shell.service.ts"));
__export(__webpack_require__(/*! ./lib/shell.component */ "../../libs/shell/src/lib/shell.component.ts"));
__export(__webpack_require__(/*! ./lib/shell.module */ "../../libs/shell/src/lib/shell.module.ts"));


/***/ }),

/***/ "../../libs/shell/src/lib/shell.component.html":
/*!***********************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/shell/src/lib/shell.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <angular-kythe-ui-file-tree></angular-kythe-ui-file-tree>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>shell</span>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n    <!-- Add Content Here -->\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "../../libs/shell/src/lib/shell.component.scss":
/*!***********************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/shell/src/lib/shell.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 240px; }\n\n.sidenav .mat-toolbar {\n  background: inherit; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 11; }\n\nangular-kythe-ui-code-mirror {\n  height: calc(100vh - 64px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NpcmNsZWNpL2FuZ3VsYXItY2xpLWNpcmNsZWNpL2xpYnMvc2hlbGwvc3JjL2xpYi9zaGVsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLHlCQUFnQjtFQUFoQixpQkFBZ0I7RUFDaEIsT0FBTTtFQUNOLFlBQVcsRUFDWjs7QUFFRDtFQUNFLDJCQUEwQixFQUMzQiIsImZpbGUiOiJsaWJzL3NoZWxsL3NyYy9saWIvc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDI0MHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDExO1xufVxuXG5hbmd1bGFyLWt5dGhlLXVpLWNvZGUtbWlycm9yIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/shell/src/lib/shell.component.ts":
/*!*********************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/shell/src/lib/shell.component.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var layout_1 = __webpack_require__(/*! @angular/cdk/layout */ "../../node_modules/@angular/cdk/esm5/layout.es5.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var ShellComponent = /** @class */ (function () {
    function ShellComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver
            .observe(layout_1.Breakpoints.Handset)
            .pipe(operators_1.map(function (result) { return result.matches; }));
    }
    ShellComponent.prototype.ngOnInit = function () { };
    ShellComponent = __decorate([
        core_1.Component({
            selector: 'angular-kythe-ui-shell',
            template: __webpack_require__(/*! ./shell.component.html */ "../../libs/shell/src/lib/shell.component.html"),
            styles: [__webpack_require__(/*! ./shell.component.scss */ "../../libs/shell/src/lib/shell.component.scss")]
        }),
        __metadata("design:paramtypes", [layout_1.BreakpointObserver])
    ], ShellComponent);
    return ShellComponent;
}());
exports.ShellComponent = ShellComponent;


/***/ }),

/***/ "../../libs/shell/src/lib/shell.module.ts":
/*!******************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/shell/src/lib/shell.module.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var shell_component_1 = __webpack_require__(/*! ./shell.component */ "../../libs/shell/src/lib/shell.component.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var kythe_1 = __webpack_require__(/*! @angular-kythe-ui/kythe */ "../../libs/kythe/src/index.ts");
var code_mirror_1 = __webpack_require__(/*! @angular-kythe-ui/code-mirror */ "../../libs/code-mirror/src/index.ts");
var file_tree_1 = __webpack_require__(/*! @angular-kythe-ui/file-tree */ "../../libs/file-tree/src/index.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var routes = router_1.RouterModule.forChild(code_mirror_1.codeMirrorRoutes);
var ShellModule = /** @class */ (function () {
    function ShellModule() {
    }
    ShellModule = __decorate([
        core_1.NgModule({
            declarations: [shell_component_1.ShellComponent],
            imports: [
                routes,
                file_tree_1.FileTreeModule,
                kythe_1.KytheModule,
                code_mirror_1.CodeMirrorModule,
                common_1.CommonModule,
                material_1.MatIconModule,
                material_1.MatSidenavModule,
                material_1.MatToolbarModule,
                material_1.MatListModule,
                material_1.MatButtonModule
            ],
            exports: [shell_component_1.ShellComponent]
        })
    ], ShellModule);
    return ShellModule;
}());
exports.ShellModule = ShellModule;


/***/ }),

/***/ "../../libs/shell/src/lib/shell.service.ts":
/*!*******************************************************************************!*\
  !*** /home/circleci/angular-cli-circleci/libs/shell/src/lib/shell.service.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var ShellService = /** @class */ (function () {
    function ShellService() {
    }
    ShellService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ShellService);
    return ShellService;
}());
exports.ShellService = ShellService;


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<angular-kythe-ui-shell></angular-kythe-ui-shell>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2t5dGhlLXVpL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'kythe-ui';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'angular-kythe-ui-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
var shell_1 = __webpack_require__(/*! @angular-kythe-ui/shell */ "../../libs/shell/src/index.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            exports: [app_component_1.AppComponent],
            declarations: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                shell_1.ShellModule,
                router_1.RouterModule.forRoot([])
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_module_1.AppModule)
    .catch(console.error);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/circleci/angular-cli-circleci/apps/kythe-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map