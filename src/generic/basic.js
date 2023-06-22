var Profile = /** @class */ (function () {
    function Profile() {
        this.name = 'GYU';
        this.age = 29;
    }
    return Profile;
}());
var Accessor = /** @class */ (function () {
    function Accessor() {
    }
    Accessor.prototype.getKey1 = function (obj) {
        return obj['name'];
    };
    Accessor.prototype.getKey2 = function (obj) {
        return obj['name'];
    };
    Accessor.prototype.get = function (obj) {
        var objName = obj instanceof Profile ? obj.name : obj;
        return objName;
    };
    return Accessor;
}());
var ac = new Accessor();
console.log(ac.getKey1(new Profile()));
console.log(ac.getKey2(new Profile()));
console.log(ac.get(new Profile()));
console.log(ac.getKey1(new Profile()));
