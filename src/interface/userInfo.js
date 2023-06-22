var UserInfo = /** @class */ (function () {
    function UserInfo() {
        this._firstName = '';
        this._secondName = '';
        this._age = 0;
    }
    UserInfo.getInstance = function () {
        if (!UserInfo.instance) {
            UserInfo.instance = new UserInfo();
        }
        return UserInfo.instance;
    };
    Object.defineProperty(UserInfo.prototype, "FRIST_NAME", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    return UserInfo;
}());
var userInfo = UserInfo.getInstance();
var userInfo1 = UserInfo.getInstance();
userInfo.FRIST_NAME = 'KIM';
console.log('⭐️⭐️⭐️⭐️');
console.log(userInfo.FRIST_NAME);
console.log(userInfo === userInfo1);
