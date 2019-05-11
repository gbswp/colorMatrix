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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var test;
    (function (test) {
        var TestPageUI = /** @class */ (function (_super) {
            __extends(TestPageUI, _super);
            function TestPageUI() {
                return _super.call(this) || this;
            }
            TestPageUI.prototype.createChildren = function () {
                View.regComponent("ui.test.TestView", ui.test.TestView);
                View.regComponent("TestView", test.TestView);
                _super.prototype.createChildren.call(this);
                this.createView(ui.test.TestPageUI.uiView);
            };
            TestPageUI.uiView = { "type": "View", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "comp/bg.png", "sizeGrid": "30,4,4,4", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Box", "props": { "y": 952, "x": 42, "scaleY": 1.2, "scaleX": 1.2, "centerX": 0 }, "child": [{ "type": "TestView", "props": { "var": "r0", "runtime": "ui.test.TestView" } }, { "type": "TestView", "props": { "x": 107, "var": "r1", "runtime": "TestView" } }, { "type": "TestView", "props": { "x": 215, "var": "r2", "runtime": "TestView" } }, { "type": "TestView", "props": { "x": 322, "var": "r3", "runtime": "TestView" } }, { "type": "TestView", "props": { "x": 429, "var": "r4", "runtime": "TestView" } }] }, { "type": "Box", "props": { "y": 1011, "x": 42, "scaleY": 1.2, "scaleX": 1.2, "centerX": 0 }, "child": [{ "type": "TestView", "props": { "var": "g0", "runtime": "TestView" } }, { "type": "TestView", "props": { "x": 107, "var": "g1", "runtime": "TestView" } }, { "type": "TestView", "props": { "x": 215, "var": "g2", "runtime": "TestView" } }, { "type": "TestView", "props": { "x": 322, "var": "g3", "runtime": "TestView" } }, { "type": "TestView", "props": { "x": 429, "var": "g4", "runtime": "TestView" } }] }, { "type": "Box", "props": { "y": 1071, "x": 42, "scaleY": 1.2, "scaleX": 1.2, "centerX": 0 }, "child": [{ "type": "TestView", "props": { "var": "b0", "runtime": "TestView" } }, { "type": "TestView", "props": { "x": 107, "var": "b1", "runtime": "TestView" } }, { "type": "TestView", "props": { "x": 215, "var": "b2", "runtime": "TestView" } }, { "type": "TestView", "props": { "x": 322, "var": "b3", "runtime": "TestView" } }, { "type": "TestView", "props": { "x": 429, "var": "b4", "runtime": "TestView" } }] }, { "type": "Box", "props": { "y": 1130, "x": 42, "scaleY": 1.2, "scaleX": 1.2, "centerX": 0 }, "child": [{ "type": "TestView", "props": { "var": "a0", "runtime": "TestView" } }, { "type": "TestView", "props": { "x": 107, "var": "a1", "runtime": "TestView" } }, { "type": "TestView", "props": { "x": 215, "var": "a2", "runtime": "TestView" } }, { "type": "TestView", "props": { "x": 322, "var": "a3", "runtime": "TestView" } }, { "type": "TestView", "props": { "x": 429, "var": "a4", "runtime": "TestView" } }] }, { "type": "TextArea", "props": { "y": 811, "x": 45, "wordWrap": true, "width": 661, "var": "txtArea", "prompt": "矩阵输出", "height": 123, "fontSize": 30, "editable": true, "color": "#000000" } }, { "type": "Box", "props": { "y": 32, "x": 0, "width": 720, "height": 690 }, "child": [{ "type": "Image", "props": { "var": "imgTarget", "top": 0, "skin": "res/1_000.png", "right": 0, "left": 0, "bottom": 0 } }] }, { "type": "TextInput", "props": { "y": 738, "x": 20, "width": 681, "var": "txtUrl", "prompt": "res/1_000.png", "height": 36, "fontSize": 30, "color": "#000000" } }, { "type": "Label", "props": { "y": 960, "x": 13, "text": "R", "fontSize": 30 } }, { "type": "Label", "props": { "y": 1019, "x": 13, "text": "G", "fontSize": 30 } }, { "type": "Label", "props": { "y": 1077, "x": 13, "text": "B", "fontSize": 30 } }, { "type": "Label", "props": { "y": 1136, "x": 13, "text": "A", "fontSize": 30 } }] };
            return TestPageUI;
        }(View));
        test.TestPageUI = TestPageUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
(function (ui) {
    var test;
    (function (test) {
        var TestViewUI = /** @class */ (function (_super) {
            __extends(TestViewUI, _super);
            function TestViewUI() {
                return _super.call(this) || this;
            }
            TestViewUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.test.TestViewUI.uiView);
            };
            TestViewUI.uiView = { "type": "View", "props": { "width": 100, "height": 26 }, "child": [{ "type": "HSlider", "props": { "y": 16, "x": 0, "var": "slider", "value": 0, "skin": "comp/hslider.png", "sizeGrid": "0,0,0,0", "showLabel": false, "min": 0, "max": 25500 } }, { "type": "TextInput", "props": { "y": 0, "width": 28, "var": "txtInput", "text": "0", "height": 14, "color": "#ff0000", "centerX": 1 } }] };
            return TestViewUI;
        }(View));
        test.TestViewUI = TestViewUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map