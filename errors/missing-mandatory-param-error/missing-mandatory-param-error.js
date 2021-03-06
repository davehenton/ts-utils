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
var base_error_1 = require("./../base-error");
var MissingMandatoryParamError = /** @class */ (function (_super) {
    __extends(MissingMandatoryParamError, _super);
    function MissingMandatoryParamError(paramName) {
        var _this = _super.call(this, "It is mandatory to pass the parameter: \"" + paramName + "\"") || this;
        _this.name = 'MissingMandatoryParamError';
        _this.missingParam = paramName;
        return _this;
    }
    return MissingMandatoryParamError;
}(base_error_1.BaseError));
exports.MissingMandatoryParamError = MissingMandatoryParamError;
