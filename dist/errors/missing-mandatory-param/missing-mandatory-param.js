"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MissingMandatoryParamError = /** @class */ (function (_super) {
    __extends(MissingMandatoryParamError, _super);
    function MissingMandatoryParamError(paramName) {
        var _newTarget = this.constructor;
        var _this = _super.call(this) || this;
        _this.name = 'MissingMandatoryParamError';
        _this.message = "It is mandtory to pass the parameter \"" + paramName + "\"";
        // The next statement is used to fix an issue with TypeScript.
        // Reference: https://github.com/Microsoft/TypeScript/issues/13965
        _this.__proto__ = _newTarget.prototype;
        return _this;
    }
    return MissingMandatoryParamError;
}(Error));
exports.MissingMandatoryParamError = MissingMandatoryParamError;
