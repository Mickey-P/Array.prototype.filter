(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
    }
}(this, function () {

    if (Array.prototype.filter) return;

    var filter = function (predicate/*, thisArg*/) {
        if (typeof predicate !== 'function') {
            throw new TypeError('Array#filter: predicate must be a function');
        }

        var list = Object(this);
        var length = Math.max(0, list.length) >>> 0; // ES.ToUint32;

        var resultArray = [];
        var thisArg = arguments.length > 1 ? arguments[1] : undefined;
        for (var i = 0; i < length; i++) {
            if (i in list) {
                var element = list[i];

                if (predicate.call(thisArg, element, i, list)) {
                    resultArray.push(element);
                }
            }
        }

        return resultArray;
    };

    if (Object.defineProperty) {
        try {
            Object.defineProperty(Array.prototype, 'filter', {
                value: filter, configurable: true, writable: true
            });
        } catch (e) { }
    }

    if (!Array.prototype.filter) {
        Array.prototype.filter = filter;
    }
}));
