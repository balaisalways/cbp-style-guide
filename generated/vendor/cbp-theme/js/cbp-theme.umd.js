!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],t):t(e["cbp-theme"]={},e.$)}(this,function(e,t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return e.prototype.setupCBPHeader=function(){t(window).on("load",function(){t(window).scrollTop(0),t(window).scroll(function(){var e=t(window).scrollTop();0===t(".app-header").length?e>=50?t(".sidebar").removeClass("after-header"):t(".sidebar").addClass("after-header"):e>=50?(t(".app-header").addClass("top"),t(".sidebar").removeClass("after-double-header").addClass("after-header")):(t(".app-header").removeClass("top"),t(".sidebar").removeClass("after-header").addClass("after-double-header"))})})},e.prototype.applyDatePicker=function(){return function(e){if(t(e=e||".datepicker").length>0){if(!t.datepicker)return!1;var a=t.datepicker._gotoToday;t.datepicker._gotoToday=function(e){a.call(this,e),this._selectDate(e)}}}()},e.prototype.applyCharLimit=function(){var e;t(e=e||"[data-charlimit]").each(function(e,a){var r=t(a).attr("data-charlimit");if(r&&""!==r){r=r.replace(new RegExp("'","g"),'"');var n=t.parseJSON("{"+r+"}"),o=n.template,i=function(e){var r=t(e.currentTarget).val().length,i=n.limit;t(a).parent().find(n.target).html(o||"<strong> "+r+"/"+i+" </strong> character limit")};t(a).on("input contextmenu",i),i({currentTarget:a})}})},e.prototype.applyTags=function(){var e;t(e=e||'[data-dismiss="tag"]').each(function(e,a){t(a).on("click",function(e){t(e.currentTarget.parentElement).remove()})})},e.prototype.applyThirdPartySelect=function(){return e=function(e,a){void 0!==a&&t(a).children("select").length>0&&t(t(a).children("select").get(0)).on("change",function(e){var r=t(e.currentTarget).find("option:selected").val(),n=r&&r.length>0?"addClass":"removeClass";t(a)[n]("is-dirty")})},t(".selectize-field").each(e),void t(".select2-field").each(e);var e},e}();e.CBPTheme=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=cbp-theme.umd.js.map
