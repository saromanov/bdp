"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

//https://en.wikipedia.org/wiki/Birth%E2%80%93death_process
//

var BDP = exports.BDP = (function () {
    function BDP(lambdas, mus) {
        _classCallCheck(this, BDP);

        if (lambdas.length !== mus.length) {
            throw "Length of arrays is not equal";
        }

        this.lambdas = lambdas;
        this.mus = mus;
    }

    _createClass(BDP, {
        probability: {

            //Return from the first state at the time t

            value: function probability(t) {
                var start = start_probability(this.lambdas, this.mus);
                if (t === 0) {
                    return start;
                }

                if (t > this.lambdas.length + 1) {
                    throw "t is greather then lambdas length";
                }

                var result = 0;
                var last_probability = start;
                for (var i = 0; i < t; ++i) {
                    var item = 1;
                    for (var j = 0; j <= i; ++j) {
                        var tmp = this.lambdas[j] / this.mus[j];
                        item *= tmp;
                    }
                    last_probability *= item;
                }

                return last_probability;
            }
        }
    });

    return BDP;
})();

var start_probability = function start_probability(lambdas, mus) {
    var result = 0;
    for (var i = 0; i < lambdas.length; ++i) {
        var item = 1;
        for (var j = 0; j <= i; ++j) {
            var tmp = lambdas[j] / mus[j];
            item *= tmp;
        }
        result += item;
    }
    return 1 / (1 + result);
};