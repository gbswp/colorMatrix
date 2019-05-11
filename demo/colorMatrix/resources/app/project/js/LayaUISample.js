var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var test = ui.test.TestPageUI;
var Label = Laya.Label;
var Handler = Laya.Handler;
var Loader = Laya.Loader;
var WebGL = Laya.WebGL;
var TestUI = /** @class */ (function (_super) {
    __extends(TestUI, _super);
    function TestUI() {
        var _this = _super.call(this) || this;
        _this.r0.txtInput.text = "1";
        _this.g1.txtInput.text = "1";
        _this.b2.txtInput.text = "1";
        _this.a3.txtInput.text = "1";
        _this.frameLoop(1, _this, function () {
            _this.txtUrl.text && (_this.imgTarget.skin = _this.txtUrl.text);
            var temp = _this.getMatrix();
            _this.imgTarget.filters = [new Laya.ColorFilter(temp)];
            _this.txtArea.text = temp.join(",");
        });
        return _this;
    }
    TestUI.prototype._enumSlider = function (cb) {
        var keys = "rgba".split("");
        for (var i = 0, len = keys.length; i < len; i++) {
            for (var j = 0; j < 5; j++) {
                var view = this[keys[i] + j];
                if (!view)
                    continue;
                cb && cb(view);
            }
        }
    };
    TestUI.prototype.getMatrix = function () {
        var temp = [];
        this._enumSlider(function (view) {
            temp.push(+view.txtInput.text);
        });
        return temp;
    };
    return TestUI;
}(ui.test.TestPageUI));
var ui;
(function (ui) {
    var test;
    (function (test) {
        var TestView = /** @class */ (function (_super) {
            __extends(TestView, _super);
            function TestView() {
                var _this = _super.call(this) || this;
                _this.txtInput.on(Laya.Event.CHANGED, _this, function () {
                    _this.slider.value = (+_this.txtInput.text || 0) * 100;
                });
                _this.slider.on(Laya.Event.CHANGE, _this, function () {
                    _this.txtInput.text = (_this.slider.value / 100).toFixed(2);
                });
                return _this;
            }
            return TestView;
        }(ui.test.TestViewUI));
        test.TestView = TestView;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
//程序入口
Laya.init(720, 1280, WebGL);
Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
Laya.stage.alignH = Laya.Stage.ALIGN_MIDDLE;
Laya.stage.alignV = Laya.Stage.ALIGN_CENTER;
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad));
function beginLoad() {
    Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
}
function onLoaded() {
    //实例UI界面
    var testUI = new TestUI();
    Laya.stage.addChild(testUI);
}
//# sourceMappingURL=LayaUISample.js.map