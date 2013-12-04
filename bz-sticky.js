/*! bzSticky v0.1.0 by Vitalii Savchuk(esvit666@gmail.com) - https://github.com/esvit/bz-sticky - New BSD License */

!function(a,b){return"function"==typeof define&&define.amd?(define(["angular"],function(a,c){return b(c)}),void 0):b(a)}(angular||null,function(a){var b=a.module("bzSticky",[]);return b.run(["$window","$rootScope",function(b,c){if(void 0===c._stickyElements){var d=a.element(b);d.bind("scroll.sticky",function(){for(var b=d.scrollTop(),e=0;e<c._stickyElements.length;e++){var f=c._stickyElements[e];!f.isStuck&&b>f.start?(f.element.addClass("bz-sticky"),f.isStuck=!0,f.placeholder&&(f.placeholder=a.element("<div></div>").css({height:f.element.outerHeight()+"px"}).insertBefore(f.element))):f.isStuck&&b<f.start&&(f.element.removeClass("bz-sticky"),f.isStuck=!1,f.placeholder&&(f.placeholder.remove(),f.placeholder=!0))}});var e=function(){for(var a=0;a<c._stickyElements.length;a++){var b=c._stickyElements[a];b.isStuck?b.placeholder&&(b.start=b.placeholder.offset().top):b.start=b.element.offset().top}};d.bind("load",e),d.bind("resize",e)}}]),b.directive("bzSticky",["$rootScope",function(a){return{link:function(b,c,d){var e={element:c,isStuck:!1,placeholder:void 0!==d.usePlaceholder,start:c.offset().top};a._stickyElements=a._stickyElements||[],a._stickyElements.push(e)}}}]),b});
//# sourceMappingURL=bz-sticky.map