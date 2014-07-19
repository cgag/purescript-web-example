var PS = PS || {};
PS.Debug_Trace = (function () {
    "use strict";
    function trace(s) {  return function() {    console.log(s);    return {};  };};
    return {
        trace: trace
    };
})();
var PS = PS || {};
PS.Example_Main = (function () {
    "use strict";
    var Debug_Trace = PS.Debug_Trace;
    var main = Debug_Trace.trace("hello purescript");
    return {
        main: main
    };
})();
PS.Example_Main.main();