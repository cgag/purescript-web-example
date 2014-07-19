var PS = PS || {};
PS.Prelude = (function () {
    "use strict";
    function showNumberImpl(n) {  return n.toString();};
    function concatString(s1) {  return function(s2) {    return s1 + s2;  };};
    var $greater$greater$eq = function (dict) {
        return dict[">>="];
    };
    var $less$greater = function (dict) {
        return dict["<>"];
    };
    var $less$times$greater = function (dict) {
        return dict["<*>"];
    };
    var $plus$plus = function (__dict_Semigroup_1) {
        return $less$greater(__dict_Semigroup_1);
    };
    var $dollar = function (f) {
        return function (x) {
            return f(x);
        };
    };
    var showNumber = function (_) {
        return {
            show: showNumberImpl
        };
    };
    var show = function (dict) {
        return dict.show;
    };
    var semigroupString = function (_) {
        return {
            "<>": concatString
        };
    };
    var pure = function (dict) {
        return dict.pure;
    };
    var $$return = function (__dict_Monad_4) {
        return pure(__dict_Monad_4["__superclasses"]["Prelude.Applicative_0"]({}));
    };
    var liftA1 = function (__dict_Applicative_6) {
        return function (f) {
            return function (a) {
                return $less$times$greater(__dict_Applicative_6["__superclasses"]["Prelude.Apply_0"]({}))(pure(__dict_Applicative_6)(f))(a);
            };
        };
    };
    var ap = function (__dict_Monad_14) {
        return function (f) {
            return function (a) {
                return $greater$greater$eq(__dict_Monad_14["__superclasses"]["Prelude.Bind_1"]({}))(f)(function (_2) {
                    return $greater$greater$eq(__dict_Monad_14["__superclasses"]["Prelude.Bind_1"]({}))(a)(function (_1) {
                        return $$return(__dict_Monad_14)(_2(_1));
                    });
                });
            };
        };
    };
    return {
        "++": $plus$plus, 
        "<>": $less$greater, 
        ap: ap, 
        "return": $$return, 
        ">>=": $greater$greater$eq, 
        liftA1: liftA1, 
        pure: pure, 
        "<*>": $less$times$greater, 
        show: show, 
        "$": $dollar, 
        showNumber: showNumber, 
        semigroupString: semigroupString
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function returnE(a) {  return function() {    return a;  };};
    function bindE(a) {  return function(f) {    return function() {      return f(a())();    };  };};
    var applicativeEff = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyEff({});
                }
            }, 
            pure: returnE
        };
    };
    var applyEff = function (_) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorEff({});
                }
            }, 
            "<*>": Prelude.ap(monadEff({}))
        };
    };
    var functorEff = function (_) {
        return {
            "<$>": Prelude.liftA1(applicativeEff({}))
        };
    };
    var monadEff = function (_) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeEff({});
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindEff({});
                }
            }
        };
    };
    var bindEff = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyEff({});
                }
            }, 
            ">>=": bindE
        };
    };
    return {
        bindE: bindE, 
        returnE: returnE, 
        functorEff: functorEff, 
        applyEff: applyEff, 
        applicativeEff: applicativeEff, 
        bindEff: bindEff, 
        monadEff: monadEff
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff_Random = (function () {
    "use strict";
    function random() {  return Math.random();};
    return {
        random: random
    };
})();
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
    var Prelude = PS.Prelude;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var Control_Monad_Eff_Random = PS.Control_Monad_Eff_Random;
    var Debug_Trace = PS.Debug_Trace;
    function alert(s) {   return function() {     window.alert(s);   }; };;
    var main = function __do() {
        alert("Woooo!")();
        var _3 = Control_Monad_Eff_Random.random();
        return Debug_Trace.trace("hello purescript: " + Prelude.show(Prelude.showNumber({}))(_3))();
    };
    return {
        main: main, 
        alert: alert
    };
})();
PS.Example_Main.main();