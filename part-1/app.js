var Admin = /** @class */ (function () {
    function Admin(products) {
        var _this = this;
        this.products = products;
        this.setProd = function () {
            var _a;
            var restProds = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                restProds[_i] = arguments[_i];
            }
            (_a = _this.products).push.apply(_a, restProds);
            return _this.products;
        };
        console.log(this.products);
    }
    return Admin;
}());
var instance = new Admin([]);
instance.setProd("mmdzov", "Foo", "Bar", "shalvar");
console.log(instance.products);
