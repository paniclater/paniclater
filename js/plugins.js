// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

(function($){
 var _e = document.createElement("canvas").width
 $.fn.cssrotate = function(d) {  
    return this.css({
  '-moz-transform':'rotate('+d+'deg)',
  '-webkit-transform':'rotate('+d+'deg)',
  '-o-transform':'rotate('+d+'deg)',
  '-ms-transform':'rotate('+d+'deg)'
 }).prop("rotate", _e ? d : null)
 }; 
 var $_fx_step_default = $.fx.step._default;
 $.fx.step._default = function (fx) {
 if(fx.prop != "rotate")return $_fx_step_default(fx);
 if(typeof fx.elem.rotate == "undefined")fx.start = fx.elem.rotate = 0;
 $(fx.elem).cssrotate(fx.now)
 }; 
})(jQuery);