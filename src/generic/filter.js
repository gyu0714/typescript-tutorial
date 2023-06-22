var Filter = /** @class */ (function () {
    function Filter() {
    }
    Filter.prototype.unique = function (array) {
        return array.filter(function (value, index, array) { return array.indexOf(value) === index; });
    };
    return Filter;
}());
var myFilter = new Filter();
var resultFilter = myFilter.unique(['b', 'c', 'd', 'a', 'a']);
console.log(resultFilter);
