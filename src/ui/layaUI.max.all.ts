
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.test {
    export class TestPageUI extends View {
		public r0:ui.test.TestView;
		public r1:TestView;
		public r2:TestView;
		public r3:TestView;
		public r4:TestView;
		public g0:TestView;
		public g1:TestView;
		public g2:TestView;
		public g3:TestView;
		public g4:TestView;
		public b0:TestView;
		public b1:TestView;
		public b2:TestView;
		public b3:TestView;
		public b4:TestView;
		public a0:TestView;
		public a1:TestView;
		public a2:TestView;
		public a3:TestView;
		public a4:TestView;
		public txtArea:Laya.TextArea;
		public imgTarget:Laya.Image;
		public txtUrl:Laya.TextInput;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"top":0,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"y":952,"x":42,"scaleY":1.2,"scaleX":1.2,"centerX":0},"child":[{"type":"TestView","props":{"var":"r0","runtime":"ui.test.TestView"}},{"type":"TestView","props":{"x":107,"var":"r1","runtime":"TestView"}},{"type":"TestView","props":{"x":215,"var":"r2","runtime":"TestView"}},{"type":"TestView","props":{"x":322,"var":"r3","runtime":"TestView"}},{"type":"TestView","props":{"x":429,"var":"r4","runtime":"TestView"}}]},{"type":"Box","props":{"y":1011,"x":42,"scaleY":1.2,"scaleX":1.2,"centerX":0},"child":[{"type":"TestView","props":{"var":"g0","runtime":"TestView"}},{"type":"TestView","props":{"x":107,"var":"g1","runtime":"TestView"}},{"type":"TestView","props":{"x":215,"var":"g2","runtime":"TestView"}},{"type":"TestView","props":{"x":322,"var":"g3","runtime":"TestView"}},{"type":"TestView","props":{"x":429,"var":"g4","runtime":"TestView"}}]},{"type":"Box","props":{"y":1071,"x":42,"scaleY":1.2,"scaleX":1.2,"centerX":0},"child":[{"type":"TestView","props":{"var":"b0","runtime":"TestView"}},{"type":"TestView","props":{"x":107,"var":"b1","runtime":"TestView"}},{"type":"TestView","props":{"x":215,"var":"b2","runtime":"TestView"}},{"type":"TestView","props":{"x":322,"var":"b3","runtime":"TestView"}},{"type":"TestView","props":{"x":429,"var":"b4","runtime":"TestView"}}]},{"type":"Box","props":{"y":1130,"x":42,"scaleY":1.2,"scaleX":1.2,"centerX":0},"child":[{"type":"TestView","props":{"var":"a0","runtime":"TestView"}},{"type":"TestView","props":{"x":107,"var":"a1","runtime":"TestView"}},{"type":"TestView","props":{"x":215,"var":"a2","runtime":"TestView"}},{"type":"TestView","props":{"x":322,"var":"a3","runtime":"TestView"}},{"type":"TestView","props":{"x":429,"var":"a4","runtime":"TestView"}}]},{"type":"TextArea","props":{"y":811,"x":45,"wordWrap":true,"width":661,"var":"txtArea","prompt":"矩阵输出","height":123,"fontSize":30,"editable":true,"color":"#000000"}},{"type":"Box","props":{"y":32,"x":0,"width":720,"height":690},"child":[{"type":"Image","props":{"var":"imgTarget","top":0,"skin":"res/1_000.png","right":0,"left":0,"bottom":0}}]},{"type":"TextInput","props":{"y":738,"x":20,"width":681,"var":"txtUrl","prompt":"res/1_000.png","height":36,"fontSize":30,"color":"#000000"}},{"type":"Label","props":{"y":960,"x":13,"text":"R","fontSize":30}},{"type":"Label","props":{"y":1019,"x":13,"text":"G","fontSize":30}},{"type":"Label","props":{"y":1077,"x":13,"text":"B","fontSize":30}},{"type":"Label","props":{"y":1136,"x":13,"text":"A","fontSize":30}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.test.TestView",ui.test.TestView);
			View.regComponent("TestView",TestView);

            super.createChildren();
            this.createView(ui.test.TestPageUI.uiView);

        }

    }
}

module ui.test {
    export class TestViewUI extends View {
		public slider:Laya.HSlider;
		public txtInput:Laya.TextInput;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":26},"child":[{"type":"HSlider","props":{"y":16,"x":0,"var":"slider","value":0,"skin":"comp/hslider.png","sizeGrid":"0,0,0,0","showLabel":false,"min":0,"max":25500}},{"type":"TextInput","props":{"y":0,"width":28,"var":"txtInput","text":"0","height":14,"color":"#ff0000","centerX":1}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.TestViewUI.uiView);

        }

    }
}
