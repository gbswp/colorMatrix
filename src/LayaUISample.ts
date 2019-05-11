import test = ui.test.TestPageUI;
import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;
import WebGL = Laya.WebGL;

class TestUI extends ui.test.TestPageUI {

	constructor() {
		super();
		this.r0.txtInput.text = "1";
		this.g1.txtInput.text = "1";
		this.b2.txtInput.text = "1";
		this.a3.txtInput.text = "1";

		this.frameLoop(1, this, () => {
			this.txtUrl.text && (this.imgTarget.skin = this.txtUrl.text);
			let temp = this.getMatrix();
			this.imgTarget.filters = [new Laya.ColorFilter(temp)];
			this.txtArea.text = temp.join(",");
		})
	}

	private _enumSlider(cb: (view: ui.test.TestView) => void) {
		let keys = "rgba".split("");
		for (let i = 0, len = keys.length; i < len; i++) {
			for (let j = 0; j < 5; j++) {
				let view = this[keys[i] + j] as ui.test.TestView;
				if (!view) continue;
				cb && cb(view);
			}
		}
	}

	getMatrix() {
		let temp: number[] = [];
		this._enumSlider(view => {
			temp.push(+view.txtInput.text);
		})
		return temp;
	}

}

namespace ui.test {
	export class TestView extends ui.test.TestViewUI {
		constructor() {
			super();
			this.txtInput.on(Laya.Event.CHANGED, this, () => {
				this.slider.value = (+this.txtInput.text || 0) * 100;
			})
			this.slider.on(Laya.Event.CHANGE, this, () => {
				this.txtInput.text = (this.slider.value / 100).toFixed(2);
			})
		}
	}
}




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

function onLoaded(): void {
	//实例UI界面
	var testUI: TestUI = new TestUI();
	Laya.stage.addChild(testUI);
}