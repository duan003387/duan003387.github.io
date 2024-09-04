window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skin/demo/Skin_Demo_Complete.exml'] = window.Skin_Demo_Complete = (function (_super) {
	__extends(Skin_Demo_Complete, _super);
	var Skin_Demo_Complete$Skin1 = 	(function (_super) {
		__extends(Skin_Demo_Complete$Skin1, _super);
		function Skin_Demo_Complete$Skin1() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Demo_Complete$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "demo_start_png";
			t.verticalCenter = 0;
			return t;
		};
		return Skin_Demo_Complete$Skin1;
	})(eui.Skin);

	function Skin_Demo_Complete() {
		_super.call(this);
		this.skinParts = ["gameBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.gameBtn_i()];
	}
	var _proto = Skin_Demo_Complete.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1;
		t.source = "demo_success_bg_png";
		t.y = 308;
		return t;
	};
	_proto.gameBtn_i = function () {
		var t = new eui.Button();
		this.gameBtn = t;
		t.horizontalCenter = 1;
		t.y = 695;
		t.skinName = Skin_Demo_Complete$Skin1;
		return t;
	};
	return Skin_Demo_Complete;
})(eui.Skin);generateEUI.paths['resource/skin/demo/Skin_Demo_Fail.exml'] = window.Skin_Demo_Fail = (function (_super) {
	__extends(Skin_Demo_Fail, _super);
	var Skin_Demo_Fail$Skin2 = 	(function (_super) {
		__extends(Skin_Demo_Fail$Skin2, _super);
		function Skin_Demo_Fail$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Demo_Fail$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "demo_replay_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Skin_Demo_Fail$Skin2;
	})(eui.Skin);

	var Skin_Demo_Fail$Skin3 = 	(function (_super) {
		__extends(Skin_Demo_Fail$Skin3, _super);
		function Skin_Demo_Fail$Skin3() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Demo_Fail$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "demo_start_png";
			t.verticalCenter = 0;
			return t;
		};
		return Skin_Demo_Fail$Skin3;
	})(eui.Skin);

	function Skin_Demo_Fail() {
		_super.call(this);
		this.skinParts = ["replayBtn","gameBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.replayBtn_i(),this.gameBtn_i()];
	}
	var _proto = Skin_Demo_Fail.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "demo_fail_bg_png";
		t.y = 387;
		return t;
	};
	_proto.replayBtn_i = function () {
		var t = new eui.Button();
		this.replayBtn = t;
		t.horizontalCenter = 0;
		t.y = 708;
		t.skinName = Skin_Demo_Fail$Skin2;
		return t;
	};
	_proto.gameBtn_i = function () {
		var t = new eui.Button();
		this.gameBtn = t;
		t.horizontalCenter = 0;
		t.y = 805;
		t.skinName = Skin_Demo_Fail$Skin3;
		return t;
	};
	return Skin_Demo_Fail;
})(eui.Skin);generateEUI.paths['resource/skin/demo/Skin_Demo_Success.exml'] = window.Skin_Demo_Success = (function (_super) {
	__extends(Skin_Demo_Success, _super);
	var Skin_Demo_Success$Skin4 = 	(function (_super) {
		__extends(Skin_Demo_Success$Skin4, _super);
		function Skin_Demo_Success$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Demo_Success$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "demo_send_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Skin_Demo_Success$Skin4;
	})(eui.Skin);

	var Skin_Demo_Success$Skin5 = 	(function (_super) {
		__extends(Skin_Demo_Success$Skin5, _super);
		function Skin_Demo_Success$Skin5() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Demo_Success$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "demo_start_png";
			t.verticalCenter = 0;
			return t;
		};
		return Skin_Demo_Success$Skin5;
	})(eui.Skin);

	function Skin_Demo_Success() {
		_super.call(this);
		this.skinParts = ["sendBtn","gameBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Label1_i(),this.sendBtn_i(),this.gameBtn_i()];
	}
	var _proto = Skin_Demo_Success.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1;
		t.source = "demo_success_bg_png";
		t.y = 308;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.size = 18;
		t.stroke = 1;
		t.strokeColor = 0xff9000;
		t.text = "快把闯关记录发送给Ta吧";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 300;
		t.x = 170;
		t.y = 678;
		return t;
	};
	_proto.sendBtn_i = function () {
		var t = new eui.Button();
		this.sendBtn = t;
		t.horizontalCenter = 0;
		t.y = 708;
		t.skinName = Skin_Demo_Success$Skin4;
		return t;
	};
	_proto.gameBtn_i = function () {
		var t = new eui.Button();
		this.gameBtn = t;
		t.horizontalCenter = 0;
		t.y = 805;
		t.skinName = Skin_Demo_Success$Skin5;
		return t;
	};
	return Skin_Demo_Success;
})(eui.Skin);generateEUI.paths['resource/skin/demo/Skin_Demo.exml'] = window.Skin_Demo = (function (_super) {
	__extends(Skin_Demo, _super);
	var Skin_Demo$Skin6 = 	(function (_super) {
		__extends(Skin_Demo$Skin6, _super);
		function Skin_Demo$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Demo$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "footer_reset_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Skin_Demo$Skin6;
	})(eui.Skin);

	var Skin_Demo$Skin7 = 	(function (_super) {
		__extends(Skin_Demo$Skin7, _super);
		function Skin_Demo$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Demo$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "footer_back_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Skin_Demo$Skin7;
	})(eui.Skin);

	function Skin_Demo() {
		_super.call(this);
		this.skinParts = ["mazePanel","mazeGroup","restBtn","backBtn","avatarImg","avatarMask","userName","gameLab"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.mazeGroup_i(),this.restBtn_i(),this.backBtn_i(),this._Group1_i(),this.gameLab_i()];
	}
	var _proto = Skin_Demo.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "game_bg_jpg";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "demo_title_png";
		t.top = 0;
		return t;
	};
	_proto.mazeGroup_i = function () {
		var t = new eui.Group();
		this.mazeGroup = t;
		t.height = 640;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 0;
		t.y = 270;
		t.elementsContent = [this.mazePanel_i()];
		return t;
	};
	_proto.mazePanel_i = function () {
		var t = new mummy.game.Panel();
		this.mazePanel = t;
		t.height = 20;
		t.width = 20;
		t.x = 156;
		t.y = 72;
		return t;
	};
	_proto.restBtn_i = function () {
		var t = new eui.Button();
		this.restBtn = t;
		t.height = 34;
		t.width = 170;
		t.x = 119.66;
		t.y = 936;
		t.skinName = Skin_Demo$Skin6;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.height = 34;
		t.width = 170;
		t.x = 339;
		t.y = 936;
		t.skinName = Skin_Demo$Skin7;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.width = 488;
		t.x = 56;
		t.y = 179;
		t.elementsContent = [this.avatarImg_i(),this.avatarMask_i(),this._Image3_i(),this.userName_i(),this._Image4_i()];
		return t;
	};
	_proto.avatarImg_i = function () {
		var t = new eui.Image();
		this.avatarImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "demo2_json.demo_record_ava_png";
		t.width = 60;
		t.x = 14;
		t.y = 2;
		return t;
	};
	_proto.avatarMask_i = function () {
		var t = new eui.Rect();
		this.avatarMask = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 26;
		t.height = 60;
		t.width = 60;
		t.x = 14;
		t.y = 2;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "end_record_portrait_png";
		t.x = 11;
		t.y = 0;
		return t;
	};
	_proto.userName_i = function () {
		var t = new eui.Label();
		this.userName = t;
		t.anchorOffsetX = 0;
		t.height = 18;
		t.size = 12;
		t.stroke = 2;
		t.strokeColor = 0x695630;
		t.text = "";
		t.textAlign = "center";
		t.width = 135;
		t.x = -22.32;
		t.y = 78;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "demo_info_png";
		t.x = 109.34;
		t.y = 0.34;
		return t;
	};
	_proto.gameLab_i = function () {
		var t = new eui.Label();
		this.gameLab = t;
		t.bottom = 10;
		t.height = 40;
		t.italic = true;
		t.right = 0;
		t.size = 18;
		t.stroke = 2;
		t.text = "点击进入完整版";
		t.textAlign = "center";
		t.textColor = 0xFBD222;
		t.verticalAlign = "middle";
		t.width = 160;
		return t;
	};
	return Skin_Demo;
})(eui.Skin);generateEUI.paths['resource/skin/demo/Skin_DemoRecord.exml'] = window.Skin_DemoRecord = (function (_super) {
	__extends(Skin_DemoRecord, _super);
	var Skin_DemoRecord$Skin8 = 	(function (_super) {
		__extends(Skin_DemoRecord$Skin8, _super);
		function Skin_DemoRecord$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_DemoRecord$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "record_back_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Skin_DemoRecord$Skin8;
	})(eui.Skin);

	var Skin_DemoRecord$Skin9 = 	(function (_super) {
		__extends(Skin_DemoRecord$Skin9, _super);
		function Skin_DemoRecord$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_DemoRecord$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "record_next_png";
			t.verticalCenter = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Skin_DemoRecord$Skin9;
	})(eui.Skin);

	function Skin_DemoRecord() {
		_super.call(this);
		this.skinParts = ["mazeGroup","avatarImg","avatarMask","userName","backBtn","nextBtn","gameLab"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.mazeGroup_i(),this._Group1_i(),this.backBtn_i(),this.nextBtn_i(),this.gameLab_i()];
	}
	var _proto = Skin_DemoRecord.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "game_bg_jpg";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "demo_title_png";
		t.top = 0;
		return t;
	};
	_proto.mazeGroup_i = function () {
		var t = new eui.Group();
		this.mazeGroup = t;
		t.height = 640;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 0;
		t.y = 270;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 56.66;
		t.y = 179.66;
		t.elementsContent = [this.avatarImg_i(),this.avatarMask_i(),this._Image3_i(),this.userName_i(),this._Image4_i()];
		return t;
	};
	_proto.avatarImg_i = function () {
		var t = new eui.Image();
		this.avatarImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 60;
		t.x = 14;
		t.y = 2;
		return t;
	};
	_proto.avatarMask_i = function () {
		var t = new eui.Rect();
		this.avatarMask = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 26;
		t.height = 60;
		t.width = 60;
		t.x = 14;
		t.y = 2;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "end_record_portrait_png";
		t.x = 11;
		t.y = 0;
		return t;
	};
	_proto.userName_i = function () {
		var t = new eui.Label();
		this.userName = t;
		t.anchorOffsetX = 0;
		t.height = 18;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x695630;
		t.text = "";
		t.textAlign = "center";
		t.width = 88;
		t.x = 0;
		t.y = 78;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "demo_record_info_png";
		t.x = 109.34;
		t.y = 0.34;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.x = 170;
		t.y = 935;
		t.skinName = Skin_DemoRecord$Skin8;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Button();
		this.nextBtn = t;
		t.x = 384;
		t.y = 935;
		t.skinName = Skin_DemoRecord$Skin9;
		return t;
	};
	_proto.gameLab_i = function () {
		var t = new eui.Label();
		this.gameLab = t;
		t.bottom = 10;
		t.height = 40;
		t.italic = true;
		t.right = 0;
		t.size = 18;
		t.stroke = 2;
		t.text = "点击进入完整版";
		t.textAlign = "center";
		t.textColor = 0xFBD222;
		t.verticalAlign = "middle";
		t.width = 160;
		return t;
	};
	return Skin_DemoRecord;
})(eui.Skin);generateEUI.paths['resource/skin/game/end/Skin_BulbDialog.exml'] = window.Skin_BulbDialog = (function (_super) {
	__extends(Skin_BulbDialog, _super);
	var Skin_BulbDialog$Skin10 = 	(function (_super) {
		__extends(Skin_BulbDialog$Skin10, _super);
		function Skin_BulbDialog$Skin10() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_BulbDialog$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 65;
			t.horizontalCenter = 0;
			t.source = "bulb_closeBtn_png";
			t.verticalCenter = 0;
			t.width = 65;
			return t;
		};
		return Skin_BulbDialog$Skin10;
	})(eui.Skin);

	var Skin_BulbDialog$Skin11 = 	(function (_super) {
		__extends(Skin_BulbDialog$Skin11, _super);
		function Skin_BulbDialog$Skin11() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.95),
						new eui.SetProperty("_Image1","scaleY",0.95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_BulbDialog$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 65;
			t.horizontalCenter = 0;
			t.source = "yaoqing_png";
			t.verticalCenter = 0;
			t.width = 204;
			return t;
		};
		return Skin_BulbDialog$Skin11;
	})(eui.Skin);

	var Skin_BulbDialog$Skin12 = 	(function (_super) {
		__extends(Skin_BulbDialog$Skin12, _super);
		function Skin_BulbDialog$Skin12() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.95),
						new eui.SetProperty("_Image1","scaleY",0.95)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","bulb_adBtn_hui_png")
					])
			];
		}
		var _proto = Skin_BulbDialog$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 65;
			t.horizontalCenter = 0;
			t.source = "bulb_adBtn_png";
			t.verticalCenter = 0;
			t.width = 204;
			return t;
		};
		return Skin_BulbDialog$Skin12;
	})(eui.Skin);

	function Skin_BulbDialog() {
		_super.call(this);
		this.skinParts = ["closeBtn","inviteBtn","playAdBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = Skin_BulbDialog.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 452;
		t.horizontalCenter = 0;
		t.top = "23%";
		t.width = 536;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Image3_i(),this._Label2_i(),this._Label3_i(),this._Image4_i(),this._Label4_i(),this.closeBtn_i(),this.inviteBtn_i(),this.playAdBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bulb_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "bulbTip_png";
		t.y = 57;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.stroke = 2;
		t.text = "邀请好友获得";
		t.textColor = 0xf5ec99;
		t.x = 158;
		t.y = 151;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "base_icon_png";
		t.x = 306;
		t.y = 142.32;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.stroke = 2;
		t.text = "x1";
		t.textColor = 0xf5ec99;
		t.x = 359;
		t.y = 151;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.stroke = 2;
		t.text = "观看视频获得";
		t.textColor = 0xF5EC99;
		t.x = 158;
		t.y = 297;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "base_icon_png";
		t.x = 306;
		t.y = 284.67;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.stroke = 2;
		t.text = "x1";
		t.textColor = 0xf5ec99;
		t.x = 359;
		t.y = 297;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.height = 65;
		t.label = "";
		t.width = 65;
		t.x = 487;
		t.y = -5;
		t.skinName = Skin_BulbDialog$Skin10;
		return t;
	};
	_proto.inviteBtn_i = function () {
		var t = new eui.Button();
		this.inviteBtn = t;
		t.height = 65;
		t.horizontalCenter = 0;
		t.label = "";
		t.width = 204;
		t.y = 198.32;
		t.skinName = Skin_BulbDialog$Skin11;
		return t;
	};
	_proto.playAdBtn_i = function () {
		var t = new eui.Button();
		this.playAdBtn = t;
		t.height = 65;
		t.horizontalCenter = 0;
		t.label = "";
		t.width = 204;
		t.y = 341.97;
		t.skinName = Skin_BulbDialog$Skin12;
		return t;
	};
	return Skin_BulbDialog;
})(eui.Skin);generateEUI.paths['resource/skin/game/end/Skin_DialogEnd.exml'] = window.Skin_DialogEnd = (function (_super) {
	__extends(Skin_DialogEnd, _super);
	var Skin_DialogEnd$Skin13 = 	(function (_super) {
		__extends(Skin_DialogEnd$Skin13, _super);
		function Skin_DialogEnd$Skin13() {
			_super.call(this);
			this.skinParts = ["iconDisplay"];
			
			this.elementsContent = [this.iconDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("iconDisplay","scaleX",0.95),
						new eui.SetProperty("iconDisplay","scaleY",0.95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_DialogEnd$Skin13.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.horizontalCenter = 0;
			t.source = "end_record_restart_png";
			t.verticalCenter = 0;
			return t;
		};
		return Skin_DialogEnd$Skin13;
	})(eui.Skin);

	var Skin_DialogEnd$Skin14 = 	(function (_super) {
		__extends(Skin_DialogEnd$Skin14, _super);
		function Skin_DialogEnd$Skin14() {
			_super.call(this);
			this.skinParts = ["iconDisplay"];
			
			this.elementsContent = [this.iconDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("iconDisplay","scaleX",0.95),
						new eui.SetProperty("iconDisplay","scaleY",0.95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_DialogEnd$Skin14.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.horizontalCenter = 0;
			t.source = "end_next_png";
			t.verticalCenter = 0;
			return t;
		};
		return Skin_DialogEnd$Skin14;
	})(eui.Skin);

	function Skin_DialogEnd() {
		_super.call(this);
		this.skinParts = ["scrollerMask","indexLab","recordGroup","recordScroller","myGroup","tipLab","restartBtn","nextBtn","btnGroup"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = Skin_DialogEnd.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = -6;
		t.y = 143;
		t.elementsContent = [this.scrollerMask_i(),this._Image1_i(),this.indexLab_i(),this.recordScroller_i(),this._Group1_i(),this.myGroup_i(),this.tipLab_i(),this.btnGroup_i()];
		return t;
	};
	_proto.scrollerMask_i = function () {
		var t = new eui.Image();
		this.scrollerMask = t;
		t.alpha = 0.8;
		t.anchorOffsetY = 0;
		t.height = 502.67;
		t.scale9Grid = new egret.Rectangle(2,66,17,13);
		t.source = "bg_maskTest_png";
		t.touchEnabled = false;
		t.width = 522;
		t.x = 65;
		t.y = 76.33;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "info_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.indexLab_i = function () {
		var t = new eui.BitmapLabel();
		this.indexLab = t;
		t.font = "level_font_fnt";
		t.horizontalCenter = 0;
		t.text = "第 1 层";
		t.y = 71;
		return t;
	};
	_proto.recordScroller_i = function () {
		var t = new eui.Scroller();
		this.recordScroller = t;
		t.anchorOffsetY = 0;
		t.height = 426.88;
		t.width = 505;
		t.x = 74;
		t.y = 152.97;
		t.viewport = this.recordGroup_i();
		return t;
	};
	_proto.recordGroup_i = function () {
		var t = new eui.Group();
		this.recordGroup = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 326;
		t.y = 157;
		t.layout = this._VerticalLayout2_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 8;
		return t;
	};
	_proto.myGroup_i = function () {
		var t = new eui.Group();
		this.myGroup = t;
		t.anchorOffsetY = 0;
		t.height = 73;
		t.horizontalCenter = 0;
		t.y = 594.32;
		return t;
	};
	_proto.tipLab_i = function () {
		var t = new eui.Label();
		this.tipLab = t;
		t.fontFamily = "KaiTi";
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "点击\"查看\"可以学习大神是怎么通关的!";
		t.textColor = 0xd5d179;
		t.verticalCenter = 232.5;
		return t;
	};
	_proto.btnGroup_i = function () {
		var t = new eui.Group();
		this.btnGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.width = 440;
		t.x = 106;
		t.y = 686;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.restartBtn_i(),this.nextBtn_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 42;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.restartBtn_i = function () {
		var t = new eui.Button();
		this.restartBtn = t;
		t.height = 58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 196;
		t.x = 33;
		t.y = 83.38999999999999;
		t.skinName = Skin_DialogEnd$Skin13;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Button();
		this.nextBtn = t;
		t.height = 58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 196;
		t.x = 254;
		t.y = 83.38999999999999;
		t.skinName = Skin_DialogEnd$Skin14;
		return t;
	};
	return Skin_DialogEnd;
})(eui.Skin);generateEUI.paths['resource/skin/game/end/Skin_EndRecord.exml'] = window.Skin_EndRecord = (function (_super) {
	__extends(Skin_EndRecord, _super);
	var Skin_EndRecord$Skin15 = 	(function (_super) {
		__extends(Skin_EndRecord$Skin15, _super);
		function Skin_EndRecord$Skin15() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.95),
						new eui.SetProperty("_Image1","scaleY",0.95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_EndRecord$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 46;
			t.horizontalCenter = 0;
			t.source = "end_check_png";
			t.verticalCenter = 0;
			t.width = 92;
			return t;
		};
		return Skin_EndRecord$Skin15;
	})(eui.Skin);

	function Skin_EndRecord() {
		_super.call(this);
		this.skinParts = ["bgImg","rankLab","avatarMask","avatarImg","nameLab","dateLab","stepLab","timeLab","helpBtn","consumeBulbNum"];
		
		this.elementsContent = [this.bgImg_i(),this.rankLab_i(),this.avatarMask_i(),this.avatarImg_i(),this._Image1_i(),this.nameLab_i(),this.dateLab_i(),this._Image2_i(),this.stepLab_i(),this._Image3_i(),this.timeLab_i(),this.helpBtn_i(),this._Group1_i()];
	}
	var _proto = Skin_EndRecord.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.source = "end_record_bg_oth_png";
		return t;
	};
	_proto.rankLab_i = function () {
		var t = new eui.Label();
		this.rankLab = t;
		t.fontFamily = "KaiTi";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x433c36;
		t.text = "";
		t.verticalCenter = -5;
		t.x = 28;
		return t;
	};
	_proto.avatarMask_i = function () {
		var t = new eui.Rect();
		this.avatarMask = t;
		t.ellipseWidth = 26;
		t.height = 48;
		t.visible = false;
		t.width = 48;
		t.x = 62.03;
		t.y = 19.06;
		return t;
	};
	_proto.avatarImg_i = function () {
		var t = new eui.Image();
		this.avatarImg = t;
		t.height = 60;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "";
		t.width = 60;
		t.x = 62.01;
		t.y = 19.34;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "end_record_portrait_png";
		t.x = 60;
		t.y = 18.02;
		return t;
	};
	_proto.nameLab_i = function () {
		var t = new eui.Label();
		this.nameLab = t;
		t.fontFamily = "KaiTi";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x191818;
		t.text = "";
		t.width = 88;
		t.x = 121;
		t.y = 32.64;
		return t;
	};
	_proto.dateLab_i = function () {
		var t = new eui.Label();
		this.dateLab = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "KaiTi";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 12;
		t.stroke = 1;
		t.strokeColor = 0x1c1919;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xe2e1e0;
		t.verticalCenter = 24.5;
		t.width = 150;
		t.x = 122.64;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "end_record_step_png";
		t.x = 220;
		t.y = 26.1;
		return t;
	};
	_proto.stepLab_i = function () {
		var t = new eui.Label();
		this.stepLab = t;
		t.fontFamily = "KaiTi";
		t.height = 18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.stroke = 2;
		t.text = "aaa";
		t.textAlign = "left";
		t.textColor = 0xf7fe00;
		t.width = 33;
		t.x = 251.5;
		t.y = 33;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "shijiana_png";
		t.x = 293.5;
		t.y = 25.5;
		return t;
	};
	_proto.timeLab_i = function () {
		var t = new eui.Label();
		this.timeLab = t;
		t.fontFamily = "KaiTi";
		t.height = 18;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.stroke = 2;
		t.text = "aaa";
		t.textAlign = "left";
		t.textColor = 0xf7fe00;
		t.width = 70;
		t.x = 328.65;
		t.y = 33;
		return t;
	};
	_proto.helpBtn_i = function () {
		var t = new eui.Button();
		this.helpBtn = t;
		t.height = 46;
		t.width = 92;
		t.x = 397.98;
		t.y = 12.01;
		t.skinName = Skin_EndRecord$Skin15;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 113.6;
		t.x = 387.31;
		t.y = 59.83;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.consumeBulbNum_i(),this._Image4_i(),this._Label1_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -1;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.consumeBulbNum_i = function () {
		var t = new eui.Label();
		this.consumeBulbNum = t;
		t.size = 13;
		t.stroke = 2;
		t.text = "消耗 20";
		t.textColor = 0xa2dd6c;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "base_icon_png";
		t.verticalCenter = 0;
		t.x = 36.3;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 13;
		t.stroke = 2;
		t.text = "观看";
		t.textColor = 0xA2DD6C;
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	return Skin_EndRecord;
})(eui.Skin);generateEUI.paths['resource/skin/game/end/Skin_MyEndRecord.exml'] = window.Skin_MyEndRecord = (function (_super) {
	__extends(Skin_MyEndRecord, _super);
	function Skin_MyEndRecord() {
		_super.call(this);
		this.skinParts = ["bgImg","isRank","avatarMask","avatarImg","nameLab","stepLab","timeLab","dateLab"];
		
		this.elementsContent = [this.bgImg_i(),this.isRank_i(),this.avatarMask_i(),this.avatarImg_i(),this._Image1_i(),this.nameLab_i(),this._Image2_i(),this.stepLab_i(),this._Image3_i(),this.timeLab_i(),this.dateLab_i()];
	}
	var _proto = Skin_MyEndRecord.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.source = "end_record_bg_min_png";
		return t;
	};
	_proto.isRank_i = function () {
		var t = new eui.Image();
		this.isRank = t;
		t.source = "is_rank_png";
		t.x = 5;
		t.y = 12.51;
		return t;
	};
	_proto.avatarMask_i = function () {
		var t = new eui.Rect();
		this.avatarMask = t;
		t.ellipseWidth = 26;
		t.height = 48;
		t.visible = false;
		t.width = 48;
		t.x = 61.36;
		t.y = 9.04;
		return t;
	};
	_proto.avatarImg_i = function () {
		var t = new eui.Image();
		this.avatarImg = t;
		t.height = 60;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "";
		t.width = 60;
		t.x = 61.34;
		t.y = 9.32;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "end_record_portrait_png";
		t.x = 59.33;
		t.y = 8;
		return t;
	};
	_proto.nameLab_i = function () {
		var t = new eui.Label();
		this.nameLab = t;
		t.fontFamily = "KaiTi";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x191818;
		t.text = "";
		t.width = 88;
		t.x = 121;
		t.y = 22.64;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "end_record_step_png";
		t.x = 212.66;
		t.y = 16.1;
		return t;
	};
	_proto.stepLab_i = function () {
		var t = new eui.Label();
		this.stepLab = t;
		t.fontFamily = "KaiTi";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.stroke = 2;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xf7fe00;
		t.width = 33;
		t.x = 241.16;
		t.y = 22;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "shijiana_png";
		t.x = 275;
		t.y = 17.5;
		return t;
	};
	_proto.timeLab_i = function () {
		var t = new eui.Label();
		this.timeLab = t;
		t.bold = true;
		t.fontFamily = "KaiTi";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.stroke = 2;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xf7fe00;
		t.width = 70;
		t.x = 308.15;
		t.y = 22.51;
		return t;
	};
	_proto.dateLab_i = function () {
		var t = new eui.Label();
		this.dateLab = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "KaiTi";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 12;
		t.stroke = 1;
		t.strokeColor = 0x1c1919;
		t.text = "";
		t.textAlign = "right";
		t.textColor = 0xe2e1e0;
		t.verticalAlign = "middle";
		t.verticalCenter = 17.5;
		t.width = 213.83;
		t.x = 272.99;
		return t;
	};
	return Skin_MyEndRecord;
})(eui.Skin);generateEUI.paths['resource/skin/game/getbulb/Skin_GetBulb.exml'] = window.Skin_GetBulb = (function (_super) {
	__extends(Skin_GetBulb, _super);
	var Skin_GetBulb$Skin16 = 	(function (_super) {
		__extends(Skin_GetBulb$Skin16, _super);
		function Skin_GetBulb$Skin16() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_GetBulb$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 65;
			t.horizontalCenter = 0;
			t.source = "bulb_closeBtn_png";
			t.verticalCenter = 0;
			t.width = 65;
			return t;
		};
		return Skin_GetBulb$Skin16;
	})(eui.Skin);

	var Skin_GetBulb$Skin17 = 	(function (_super) {
		__extends(Skin_GetBulb$Skin17, _super);
		function Skin_GetBulb$Skin17() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.95),
						new eui.SetProperty("_Image1","scaleY",0.95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_GetBulb$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 65;
			t.horizontalCenter = 0;
			t.source = "yaoqing_png";
			t.verticalCenter = 0;
			t.width = 204;
			return t;
		};
		return Skin_GetBulb$Skin17;
	})(eui.Skin);

	var Skin_GetBulb$Skin18 = 	(function (_super) {
		__extends(Skin_GetBulb$Skin18, _super);
		function Skin_GetBulb$Skin18() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.95),
						new eui.SetProperty("_Image1","scaleY",0.95)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","bulb_adBtn_hui_png")
					])
			];
		}
		var _proto = Skin_GetBulb$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 65;
			t.horizontalCenter = 0;
			t.source = "bulb_adBtn_png";
			t.verticalCenter = 0;
			t.width = 204;
			return t;
		};
		return Skin_GetBulb$Skin18;
	})(eui.Skin);

	function Skin_GetBulb() {
		_super.call(this);
		this.skinParts = ["video_label","closeBtn","inviteBtn","playAdBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = Skin_GetBulb.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 430;
		t.horizontalCenter = 0;
		t.top = "23%";
		t.width = 536;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label1_i(),this.video_label_i(),this.closeBtn_i(),this.inviteBtn_i(),this.playAdBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 430;
		t.source = "bulb_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "base_icon_png";
		t.x = 306;
		t.y = 74;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "base_icon_png";
		t.x = 306;
		t.y = 246.34;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 25;
		t.stroke = 2;
		t.text = "邀请好友获得        x1";
		t.textColor = 0xf5ec99;
		t.x = 155;
		t.y = 85.01;
		return t;
	};
	_proto.video_label_i = function () {
		var t = new eui.Label();
		this.video_label = t;
		t.size = 25;
		t.stroke = 2;
		t.text = "观看视频获得        x1";
		t.textColor = 0xf5ec99;
		t.x = 155;
		t.y = 258.01;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.height = 65;
		t.label = "";
		t.width = 65;
		t.x = 487;
		t.y = -5;
		t.skinName = Skin_GetBulb$Skin16;
		return t;
	};
	_proto.inviteBtn_i = function () {
		var t = new eui.Button();
		this.inviteBtn = t;
		t.height = 65;
		t.horizontalCenter = 0;
		t.label = "";
		t.width = 204;
		t.y = 136;
		t.skinName = Skin_GetBulb$Skin17;
		return t;
	};
	_proto.playAdBtn_i = function () {
		var t = new eui.Button();
		this.playAdBtn = t;
		t.height = 65;
		t.horizontalCenter = 0;
		t.label = "";
		t.width = 204;
		t.y = 309.97;
		t.skinName = Skin_GetBulb$Skin18;
		return t;
	};
	return Skin_GetBulb;
})(eui.Skin);generateEUI.paths['resource/skin/game/rank/Skin_Rank_Item.exml'] = window.Skin_Rank_Item = (function (_super) {
	__extends(Skin_Rank_Item, _super);
	function Skin_Rank_Item() {
		_super.call(this);
		this.skinParts = ["rank_img","rank_label","avatarImg","avatarMask","userName","enterRankCount","totalChapterNo"];
		
		this.elementsContent = [this._Image1_i(),this.rank_img_i(),this.rank_label_i(),this._Group1_i(),this.userName_i(),this._Label1_i(),this.enterRankCount_i(),this._Label2_i(),this.totalChapterNo_i()];
	}
	var _proto = Skin_Rank_Item.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "item_bg_png";
		return t;
	};
	_proto.rank_img_i = function () {
		var t = new eui.Image();
		this.rank_img = t;
		t.source = "";
		t.verticalCenter = 0.5;
		t.x = 18.66;
		return t;
	};
	_proto.rank_label_i = function () {
		var t = new eui.Label();
		this.rank_label = t;
		t.italic = true;
		t.stroke = 2;
		t.strokeColor = 0x332e2e;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xe0d1ba;
		t.width = 52;
		t.x = 6.64;
		t.y = 18.99;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 63.83;
		t.y = 9.33;
		t.elementsContent = [this.avatarImg_i(),this.avatarMask_i(),this._Image2_i()];
		return t;
	};
	_proto.avatarImg_i = function () {
		var t = new eui.Image();
		this.avatarImg = t;
		t.height = 48;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 48;
		t.x = 2.33;
		t.y = 1.67;
		return t;
	};
	_proto.avatarMask_i = function () {
		var t = new eui.Rect();
		this.avatarMask = t;
		t.ellipseWidth = 18;
		t.height = 48;
		t.width = 48;
		t.x = 1.85;
		t.y = 1.17;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "end_record_portrait_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.userName_i = function () {
		var t = new eui.Label();
		this.userName = t;
		t.height = 48;
		t.size = 20;
		t.stroke = 3;
		t.strokeColor = 0x433b38;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xf9c970;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 127.66;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 15;
		t.stroke = 2;
		t.strokeColor = 0x433b38;
		t.text = "上榜次数";
		t.verticalCenter = 0.5;
		t.x = 254.35;
		return t;
	};
	_proto.enterRankCount_i = function () {
		var t = new eui.Label();
		this.enterRankCount = t;
		t.size = 25;
		t.stroke = 3;
		t.strokeColor = 0x433b38;
		t.text = "";
		t.textColor = 0xe2eb06;
		t.verticalCenter = 0;
		t.x = 321.69;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 15;
		t.stroke = 2;
		t.strokeColor = 0x433B38;
		t.text = "完成层数";
		t.verticalCenter = 0.5;
		t.x = 384.36;
		return t;
	};
	_proto.totalChapterNo_i = function () {
		var t = new eui.Label();
		this.totalChapterNo = t;
		t.size = 25;
		t.stroke = 3;
		t.strokeColor = 0x433b38;
		t.text = "";
		t.textColor = 0xe2eb06;
		t.verticalCenter = 0.5;
		t.x = 452.33;
		return t;
	};
	return Skin_Rank_Item;
})(eui.Skin);generateEUI.paths['resource/skin/game/rank/Skin_Rank.exml'] = window.Skin_Rank = (function (_super) {
	__extends(Skin_Rank, _super);
	var Skin_Rank$Skin19 = 	(function (_super) {
		__extends(Skin_Rank$Skin19, _super);
		function Skin_Rank$Skin19() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Rank$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 65;
			t.horizontalCenter = 0;
			t.source = "bulb_closeBtn_png";
			t.verticalCenter = 0;
			t.width = 65;
			return t;
		};
		return Skin_Rank$Skin19;
	})(eui.Skin);

	function Skin_Rank() {
		_super.call(this);
		this.skinParts = ["closeBtn","list_mask","list","selfRank"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = Skin_Rank.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -5.5;
		t.top = "15%";
		t.width = 589;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.closeBtn_i(),this.list_mask_i(),this.list_i(),this.selfRank_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tab_bg_png";
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "rank_title_png";
		t.x = 18.99;
		t.y = -16.01;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.height = 65;
		t.label = "";
		t.width = 65;
		t.x = 543;
		t.y = -14;
		t.skinName = Skin_Rank$Skin19;
		return t;
	};
	_proto.list_mask_i = function () {
		var t = new eui.Image();
		this.list_mask = t;
		t.anchorOffsetY = 0;
		t.height = 642.88;
		t.horizontalCenter = 6.5;
		t.scale9Grid = new egret.Rectangle(2,44,17,43);
		t.source = "bg_maskTest_png";
		t.touchEnabled = false;
		t.visible = false;
		t.width = 580;
		t.y = 80.29;
		return t;
	};
	_proto.list_i = function () {
		var t = new mummy.game.RankList();
		this.list = t;
		t.anchorOffsetY = 0;
		t.height = 615.6;
		t.horizontalCenter = 8.5;
		t.width = 500;
		t.y = 98.46;
		return t;
	};
	_proto.selfRank_i = function () {
		var t = new eui.Label();
		this.selfRank = t;
		t.size = 20;
		t.text = "未进入排行榜";
		t.visible = false;
		t.x = 91;
		t.y = 729;
		return t;
	};
	return Skin_Rank;
})(eui.Skin);generateEUI.paths['resource/skin/game/Skin_Game.exml'] = window.Skin_Game = (function (_super) {
	__extends(Skin_Game, _super);
	var Skin_Game$Skin20 = 	(function (_super) {
		__extends(Skin_Game$Skin20, _super);
		function Skin_Game$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","game_btn_music_c_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Game$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "game_btn_music_d_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Skin_Game$Skin20;
	})(eui.Skin);

	var Skin_Game$Skin21 = 	(function (_super) {
		__extends(Skin_Game$Skin21, _super);
		function Skin_Game$Skin21() {
			_super.call(this);
			this.skinParts = [];
			
			this.height = 110;
			this.width = 110;
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Game$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "game_btn_map_png";
			t.verticalCenter = 0;
			return t;
		};
		return Skin_Game$Skin21;
	})(eui.Skin);

	var Skin_Game$Skin22 = 	(function (_super) {
		__extends(Skin_Game$Skin22, _super);
		function Skin_Game$Skin22() {
			_super.call(this);
			this.skinParts = [];
			
			this.height = 110;
			this.width = 110;
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Game$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "game_btn_rank_png";
			t.verticalCenter = 0;
			return t;
		};
		return Skin_Game$Skin22;
	})(eui.Skin);

	var Skin_Game$Skin23 = 	(function (_super) {
		__extends(Skin_Game$Skin23, _super);
		function Skin_Game$Skin23() {
			_super.call(this);
			this.skinParts = [];
			
			this.height = 110;
			this.width = 110;
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Game$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "game_btn_collection_png";
			t.verticalCenter = 0;
			return t;
		};
		return Skin_Game$Skin23;
	})(eui.Skin);

	function Skin_Game() {
		_super.call(this);
		this.skinParts = ["bulbNum","touchRect","avatarImg","avatarMask","userName","topGroup","musicBtn","mazeGroup","torchGroup","mapBtn","rankBtn","collectionBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.topGroup_i(),this.musicBtn_i(),this.mazeGroup_i(),this.torchGroup_i(),this._Image6_i(),this._Group2_i()];
	}
	var _proto = Skin_Game.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "game_bg_jpg";
		return t;
	};
	_proto.topGroup_i = function () {
		var t = new eui.Group();
		this.topGroup = t;
		t.height = 112;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.width = 640;
		t.x = 0;
		t.y = 44;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.bulbNum_i(),this._Image4_i(),this.touchRect_i(),this._Group1_i(),this.userName_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "game_titleBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "base_icon_png";
		t.x = 270.7;
		t.y = 22.29;
		return t;
	};
	_proto.bulbNum_i = function () {
		var t = new eui.Label();
		this.bulbNum = t;
		t.anchorOffsetX = 0;
		t.borderColor = 0xdb3434;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xffda00;
		t.width = 72.8;
		t.x = 304.99;
		t.y = 28;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "addIcon_png";
		t.x = 379.52;
		t.y = 22.88;
		return t;
	};
	_proto.touchRect_i = function () {
		var t = new eui.Rect();
		this.touchRect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 31;
		t.touchEnabled = true;
		t.width = 148.5;
		t.x = 263.5;
		t.y = 22.69;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 12.99;
		t.y = 19.67;
		t.elementsContent = [this.avatarImg_i(),this.avatarMask_i(),this._Image5_i()];
		return t;
	};
	_proto.avatarImg_i = function () {
		var t = new eui.Image();
		this.avatarImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.width = 60;
		t.y = 2.02;
		return t;
	};
	_proto.avatarMask_i = function () {
		var t = new eui.Rect();
		this.avatarMask = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 26;
		t.height = 60;
		t.horizontalCenter = 0;
		t.width = 60;
		t.y = 2.08;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "end_record_portrait_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.userName_i = function () {
		var t = new eui.Label();
		this.userName = t;
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.stroke = 2;
		t.strokeColor = 0x695630;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 134.16;
		t.x = 101.85;
		t.y = 28;
		return t;
	};
	_proto.musicBtn_i = function () {
		var t = new eui.ToggleButton();
		this.musicBtn = t;
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 3;
		t.y = 163;
		t.skinName = Skin_Game$Skin20;
		return t;
	};
	_proto.mazeGroup_i = function () {
		var t = new eui.Group();
		this.mazeGroup = t;
		t.height = 740;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 0;
		t.y = 230;
		return t;
	};
	_proto.torchGroup_i = function () {
		var t = new eui.Group();
		this.torchGroup = t;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 640;
		t.y = 96;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "bg_bottom_png";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 11;
		t.width = 640;
		t.x = 0;
		t.elementsContent = [this.mapBtn_i(),this.rankBtn_i(),this.collectionBtn_i()];
		return t;
	};
	_proto.mapBtn_i = function () {
		var t = new eui.Button();
		this.mapBtn = t;
		t.bottom = 0;
		t.left = 80;
		t.skinName = Skin_Game$Skin21;
		return t;
	};
	_proto.rankBtn_i = function () {
		var t = new eui.Button();
		this.rankBtn = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.skinName = Skin_Game$Skin22;
		return t;
	};
	_proto.collectionBtn_i = function () {
		var t = new eui.Button();
		this.collectionBtn = t;
		t.bottom = 0;
		t.right = 80;
		t.skinName = Skin_Game$Skin23;
		return t;
	};
	return Skin_Game;
})(eui.Skin);generateEUI.paths['resource/skin/game/Skin_GameDialog.exml'] = window.Skin_GameDialog = (function (_super) {
	__extends(Skin_GameDialog, _super);
	var Skin_GameDialog$Skin24 = 	(function (_super) {
		__extends(Skin_GameDialog$Skin24, _super);
		function Skin_GameDialog$Skin24() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.95),
						new eui.SetProperty("_Image1","scaleY",0.95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_GameDialog$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 58;
			t.horizontalCenter = 0;
			t.source = "game_againLoginBtn_png";
			t.verticalCenter = 0;
			t.width = 196;
			return t;
		};
		return Skin_GameDialog$Skin24;
	})(eui.Skin);

	function Skin_GameDialog() {
		_super.call(this);
		this.skinParts = ["infoLab","loginBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = Skin_GameDialog.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 314;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 536;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.infoLab_i(),this.loginBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 314;
		t.horizontalCenter = 0;
		t.source = "bulb_bg_png";
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game_error_png";
		t.y = 48;
		return t;
	};
	_proto.infoLab_i = function () {
		var t = new eui.Label();
		this.infoLab = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 114;
		t.horizontalCenter = 0;
		t.lineSpacing = 12;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x966712;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 463;
		t.y = 111;
		return t;
	};
	_proto.loginBtn_i = function () {
		var t = new eui.Button();
		this.loginBtn = t;
		t.height = 58;
		t.horizontalCenter = 0;
		t.label = "";
		t.width = 196;
		t.y = 216;
		t.skinName = Skin_GameDialog$Skin24;
		return t;
	};
	return Skin_GameDialog;
})(eui.Skin);generateEUI.paths['resource/skin/game/Skin_Panel.exml'] = window.Skin_Panel = (function (_super) {
	__extends(Skin_Panel, _super);
	var Skin_Panel$Skin25 = 	(function (_super) {
		__extends(Skin_Panel$Skin25, _super);
		function Skin_Panel$Skin25() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Panel$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.alpha = 0;
			t.percentHeight = 100;
			t.source = "button_up_png";
			t.percentWidth = 100;
			return t;
		};
		return Skin_Panel$Skin25;
	})(eui.Skin);

	var Skin_Panel$Skin26 = 	(function (_super) {
		__extends(Skin_Panel$Skin26, _super);
		function Skin_Panel$Skin26() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Panel$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.alpha = 0;
			t.percentHeight = 100;
			t.source = "button_up_png";
			t.percentWidth = 100;
			return t;
		};
		return Skin_Panel$Skin26;
	})(eui.Skin);

	var Skin_Panel$Skin27 = 	(function (_super) {
		__extends(Skin_Panel$Skin27, _super);
		function Skin_Panel$Skin27() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Panel$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.alpha = 0;
			t.percentHeight = 100;
			t.source = "button_up_png";
			t.percentWidth = 100;
			return t;
		};
		return Skin_Panel$Skin27;
	})(eui.Skin);

	var Skin_Panel$Skin28 = 	(function (_super) {
		__extends(Skin_Panel$Skin28, _super);
		function Skin_Panel$Skin28() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Panel$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.alpha = 0;
			t.percentHeight = 100;
			t.source = "button_up_png";
			t.percentWidth = 100;
			return t;
		};
		return Skin_Panel$Skin28;
	})(eui.Skin);

	var Skin_Panel$Skin29 = 	(function (_super) {
		__extends(Skin_Panel$Skin29, _super);
		function Skin_Panel$Skin29() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Panel$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.alpha = 0;
			t.percentHeight = 100;
			t.source = "button_up_png";
			t.percentWidth = 100;
			return t;
		};
		return Skin_Panel$Skin29;
	})(eui.Skin);

	function Skin_Panel() {
		_super.call(this);
		this.skinParts = ["upImg","downImg","leftImg","rightImg","waitImg","upBtn","rightBtn","downBtn","leftBtn","waitBtn","panelGroup"];
		
		this.elementsContent = [this.panelGroup_i()];
	}
	var _proto = Skin_Panel.prototype;

	_proto.panelGroup_i = function () {
		var t = new eui.Group();
		this.panelGroup = t;
		t.alpha = 1;
		t.height = 240;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 240;
		t.x = 0;
		t.elementsContent = [this.upImg_i(),this.downImg_i(),this.leftImg_i(),this.rightImg_i(),this.waitImg_i(),this.upBtn_i(),this.rightBtn_i(),this.downBtn_i(),this.leftBtn_i(),this.waitBtn_i()];
		return t;
	};
	_proto.upImg_i = function () {
		var t = new eui.Image();
		this.upImg = t;
		t.anchorOffsetX = 22;
		t.anchorOffsetY = 34;
		t.height = 33;
		t.source = "cursor_up_png";
		t.width = 44;
		t.x = 120;
		t.y = 54;
		return t;
	};
	_proto.downImg_i = function () {
		var t = new eui.Image();
		this.downImg = t;
		t.anchorOffsetX = 22;
		t.anchorOffsetY = 0;
		t.source = "cursor_down_png";
		t.x = 120;
		t.y = 187;
		return t;
	};
	_proto.leftImg_i = function () {
		var t = new eui.Image();
		this.leftImg = t;
		t.anchorOffsetX = 29;
		t.anchorOffsetY = 24;
		t.source = "cursor_left_png";
		t.x = 49;
		t.y = 120;
		return t;
	};
	_proto.rightImg_i = function () {
		var t = new eui.Image();
		this.rightImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 24;
		t.source = "cursor_right_png";
		t.x = 191;
		t.y = 120;
		return t;
	};
	_proto.waitImg_i = function () {
		var t = new eui.Image();
		this.waitImg = t;
		t.horizontalCenter = 0;
		t.source = "cursor_wait_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.upBtn_i = function () {
		var t = new eui.Button();
		this.upBtn = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.label = "";
		t.top = 0;
		t.width = 80;
		t.skinName = Skin_Panel$Skin25;
		return t;
	};
	_proto.rightBtn_i = function () {
		var t = new eui.Button();
		this.rightBtn = t;
		t.height = 80;
		t.label = "";
		t.right = 0;
		t.verticalCenter = 0;
		t.width = 80;
		t.skinName = Skin_Panel$Skin26;
		return t;
	};
	_proto.downBtn_i = function () {
		var t = new eui.Button();
		this.downBtn = t;
		t.bottom = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.label = "";
		t.width = 80;
		t.skinName = Skin_Panel$Skin27;
		return t;
	};
	_proto.leftBtn_i = function () {
		var t = new eui.Button();
		this.leftBtn = t;
		t.height = 80;
		t.label = "";
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 80;
		t.skinName = Skin_Panel$Skin28;
		return t;
	};
	_proto.waitBtn_i = function () {
		var t = new eui.Button();
		this.waitBtn = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.width = 80;
		t.skinName = Skin_Panel$Skin29;
		return t;
	};
	return Skin_Panel;
})(eui.Skin);generateEUI.paths['resource/skin/game/start/Skin_GridStart.exml'] = window.Skin_GridStart = (function (_super) {
	__extends(Skin_GridStart, _super);
	function Skin_GridStart() {
		_super.call(this);
		this.skinParts = ["bgImg","lightImg","boxImg","playerImg"];
		
		this.height = 75;
		this.width = 86;
		this.elementsContent = [this.bgImg_i(),this.lightImg_i(),this.boxImg_i(),this.playerImg_i()];
	}
	var _proto = Skin_GridStart.prototype;

	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.source = "start_index_dis_png";
		t.touchEnabled = false;
		return t;
	};
	_proto.lightImg_i = function () {
		var t = new eui.Image();
		this.lightImg = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "light_png";
		t.touchEnabled = false;
		t.verticalCenter = -6;
		t.visible = false;
		return t;
	};
	_proto.boxImg_i = function () {
		var t = new eui.Image();
		this.boxImg = t;
		t.height = 75;
		t.horizontalCenter = 0;
		t.source = "";
		t.touchEnabled = false;
		t.verticalCenter = -8.5;
		t.visible = false;
		t.width = 75;
		return t;
	};
	_proto.playerImg_i = function () {
		var t = new eui.Image();
		this.playerImg = t;
		t.horizontalCenter = 0.5;
		t.source = "start_index_sel_png";
		t.touchEnabled = false;
		t.verticalCenter = -6;
		t.visible = false;
		return t;
	};
	return Skin_GridStart;
})(eui.Skin);generateEUI.paths['resource/skin/game/start/Skin_DialogStart.exml'] = window.Skin_DialogStart = (function (_super) {
	__extends(Skin_DialogStart, _super);
	var Skin_DialogStart$Skin30 = 	(function (_super) {
		__extends(Skin_DialogStart$Skin30, _super);
		function Skin_DialogStart$Skin30() {
			_super.call(this);
			this.skinParts = ["iconDisplay"];
			
			this.elementsContent = [this.iconDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("iconDisplay","scaleX",0.9),
						new eui.SetProperty("iconDisplay","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_DialogStart$Skin30.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.horizontalCenter = 0;
			t.source = "start_play_png";
			t.verticalCenter = 0;
			return t;
		};
		return Skin_DialogStart$Skin30;
	})(eui.Skin);

	function Skin_DialogStart() {
		_super.call(this);
		this.skinParts = ["levelLab","tipLab","startBtn","lineImg","gridGroup"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = Skin_DialogStart.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = -6;
		t.y = 143;
		t.elementsContent = [this._Image1_i(),this.levelLab_i(),this.tipLab_i(),this.startBtn_i(),this.lineImg_i(),this.gridGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "info_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.levelLab_i = function () {
		var t = new eui.Image();
		this.levelLab = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 70;
		return t;
	};
	_proto.tipLab_i = function () {
		var t = new eui.Label();
		this.tipLab = t;
		t.fontFamily = "KaiTi";
		t.height = 20;
		t.size = 18;
		t.stroke = 1;
		t.text = "小提示：选中已通过的迷宫，可以重新挑战";
		t.textAlign = "center";
		t.textColor = 0xD5D179;
		t.verticalAlign = "middle";
		t.width = 420;
		t.x = 117;
		t.y = 626;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.height = 58;
		t.width = 196;
		t.x = 228;
		t.y = 681.72;
		t.skinName = Skin_DialogStart$Skin30;
		return t;
	};
	_proto.lineImg_i = function () {
		var t = new eui.Image();
		this.lineImg = t;
		t.source = "start_line_png";
		t.x = 65;
		t.y = 275.3;
		return t;
	};
	_proto.gridGroup_i = function () {
		var t = new eui.Group();
		this.gridGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 396;
		t.width = 498;
		t.x = 78;
		t.y = 214.3;
		t.elementsContent = [this._GridStart1_i(),this._GridStart2_i(),this._GridStart3_i(),this._GridStart4_i(),this._GridStart5_i(),this._GridStart6_i(),this._GridStart7_i(),this._GridStart8_i(),this._GridStart9_i(),this._GridStart10_i(),this._GridStart11_i(),this._GridStart12_i(),this._GridStart13_i(),this._GridStart14_i(),this._GridStart15_i()];
		return t;
	};
	_proto._GridStart1_i = function () {
		var t = new mummy.game.GridStart();
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Skin_GridStart";
		t.x = 0;
		t.y = 321;
		return t;
	};
	_proto._GridStart2_i = function () {
		var t = new mummy.game.GridStart();
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Skin_GridStart";
		t.x = 103;
		t.y = 321;
		return t;
	};
	_proto._GridStart3_i = function () {
		var t = new mummy.game.GridStart();
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Skin_GridStart";
		t.x = 206;
		t.y = 321;
		return t;
	};
	_proto._GridStart4_i = function () {
		var t = new mummy.game.GridStart();
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Skin_GridStart";
		t.x = 309;
		t.y = 321;
		return t;
	};
	_proto._GridStart5_i = function () {
		var t = new mummy.game.GridStart();
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Skin_GridStart";
		t.x = 412;
		t.y = 321;
		return t;
	};
	_proto._GridStart6_i = function () {
		var t = new mummy.game.GridStart();
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Skin_GridStart";
		t.x = 357;
		t.y = 241;
		return t;
	};
	_proto._GridStart7_i = function () {
		var t = new mummy.game.GridStart();
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Skin_GridStart";
		t.x = 254;
		t.y = 241;
		return t;
	};
	_proto._GridStart8_i = function () {
		var t = new mummy.game.GridStart();
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Skin_GridStart";
		t.x = 151;
		t.y = 241;
		return t;
	};
	_proto._GridStart9_i = function () {
		var t = new mummy.game.GridStart();
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Skin_GridStart";
		t.x = 48;
		t.y = 241;
		return t;
	};
	_proto._GridStart10_i = function () {
		var t = new mummy.game.GridStart();
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Skin_GridStart";
		t.x = 102;
		t.y = 162;
		return t;
	};
	_proto._GridStart11_i = function () {
		var t = new mummy.game.GridStart();
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Skin_GridStart";
		t.x = 205;
		t.y = 162;
		return t;
	};
	_proto._GridStart12_i = function () {
		var t = new mummy.game.GridStart();
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Skin_GridStart";
		t.x = 308;
		t.y = 162;
		return t;
	};
	_proto._GridStart13_i = function () {
		var t = new mummy.game.GridStart();
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Skin_GridStart";
		t.x = 255;
		t.y = 85;
		return t;
	};
	_proto._GridStart14_i = function () {
		var t = new mummy.game.GridStart();
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Skin_GridStart";
		t.x = 152;
		t.y = 85;
		return t;
	};
	_proto._GridStart15_i = function () {
		var t = new mummy.game.GridStart();
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "Skin_GridStart";
		t.x = 209;
		t.y = 2;
		return t;
	};
	return Skin_DialogStart;
})(eui.Skin);generateEUI.paths['resource/skin/game/treasure/Skin_Treasure.exml'] = window.Skin_Treasure = (function (_super) {
	__extends(Skin_Treasure, _super);
	var Skin_Treasure$Skin31 = 	(function (_super) {
		__extends(Skin_Treasure$Skin31, _super);
		function Skin_Treasure$Skin31() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Treasure$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 65;
			t.horizontalCenter = 0;
			t.source = "bulb_closeBtn_png";
			t.verticalCenter = 0;
			t.width = 65;
			return t;
		};
		return Skin_Treasure$Skin31;
	})(eui.Skin);

	function Skin_Treasure() {
		_super.call(this);
		this.skinParts = ["closeBtn","list_mask","list"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = Skin_Treasure.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.6;
		t.percentHeight = 100;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = "15%";
		t.width = 589;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.closeBtn_i(),this.list_mask_i(),this.list_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "tab_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "collection_title_png";
		t.x = 27;
		t.y = -16;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.height = 65;
		t.label = "";
		t.width = 65;
		t.x = 540;
		t.y = -8;
		t.skinName = Skin_Treasure$Skin31;
		return t;
	};
	_proto.list_mask_i = function () {
		var t = new eui.Image();
		this.list_mask = t;
		t.height = 600;
		t.horizontalCenter = 6.5;
		t.scale9Grid = new egret.Rectangle(0,61,21,19);
		t.source = "bg_maskTest_png";
		t.touchEnabled = false;
		t.width = 580;
		t.y = 110;
		return t;
	};
	_proto.list_i = function () {
		var t = new mummy.game.TreasureList();
		this.list = t;
		t.anchorOffsetY = 0;
		t.height = 600;
		t.horizontalCenter = 8.5;
		t.width = 550;
		t.y = 110;
		return t;
	};
	return Skin_Treasure;
})(eui.Skin);generateEUI.paths['resource/skin/game/treasure/Skin_TreasureItem.exml'] = window.Skin_TreasureItem = (function (_super) {
	__extends(Skin_TreasureItem, _super);
	function Skin_TreasureItem() {
		_super.call(this);
		this.skinParts = ["item_img"];
		
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Image1_i(),this.item_img_i()];
	}
	var _proto = Skin_TreasureItem.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseWidth = 78;
		t.fillColor = 0xf2d38e;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "物品";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "collection_di_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.item_img_i = function () {
		var t = new eui.Image();
		this.item_img = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	return Skin_TreasureItem;
})(eui.Skin);generateEUI.paths['resource/skin/login/Skin_LoginComponent.exml'] = window.Skin_LoginComponent = (function (_super) {
	__extends(Skin_LoginComponent, _super);
	var Skin_LoginComponent$Skin32 = 	(function (_super) {
		__extends(Skin_LoginComponent$Skin32, _super);
		function Skin_LoginComponent$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_LoginComponent$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "startGame_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Skin_LoginComponent$Skin32;
	})(eui.Skin);

	var Skin_LoginComponent$Skin33 = 	(function (_super) {
		__extends(Skin_LoginComponent$Skin33, _super);
		function Skin_LoginComponent$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","shiwan_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_LoginComponent$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shiwan_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Skin_LoginComponent$Skin33;
	})(eui.Skin);

	function Skin_LoginComponent() {
		_super.call(this);
		this.skinParts = ["version","progressbar_di","progressbar","progressbar_mask","resCount","loadingGroup","startBtn","testPlayBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this.version_i(),this.loadingGroup_i(),this._Group1_i(),this.testPlayBtn_i()];
	}
	var _proto = Skin_LoginComponent.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x015091;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "login_bg_jpg";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 826;
		t.height = 310;
		t.horizontalCenter = 0;
		t.source = "login_title_png";
		return t;
	};
	_proto.version_i = function () {
		var t = new eui.Label();
		this.version = t;
		t.bottom = 20;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x4f4d43;
		t.text = "Label";
		t.textColor = 0xffffff;
		t.x = 556.66;
		return t;
	};
	_proto.loadingGroup_i = function () {
		var t = new eui.Group();
		this.loadingGroup = t;
		t.bottom = 130;
		t.height = 26;
		t.horizontalCenter = 0.5;
		t.width = 419;
		t.elementsContent = [this.progressbar_di_i(),this.progressbar_i(),this.progressbar_mask_i(),this.resCount_i()];
		return t;
	};
	_proto.progressbar_di_i = function () {
		var t = new eui.Image();
		this.progressbar_di = t;
		t.source = "loading_di_png";
		t.x = 0;
		t.y = 0.05;
		return t;
	};
	_proto.progressbar_i = function () {
		var t = new eui.Image();
		this.progressbar = t;
		t.source = "loading_mc_progressbar_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.progressbar_mask_i = function () {
		var t = new eui.Image();
		this.progressbar_mask = t;
		t.source = "loading_mc_progressbar_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.resCount_i = function () {
		var t = new eui.Label();
		this.resCount = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0xffffff;
		t.text = "资源加载中...";
		t.textColor = 0x0c0c0b;
		t.y = -34;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 80;
		t.height = 120;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.width = 300;
		t.elementsContent = [this.startBtn_i()];
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 60;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 153;
		t.y = 60;
		t.skinName = Skin_LoginComponent$Skin32;
		return t;
	};
	_proto.testPlayBtn_i = function () {
		var t = new eui.Button();
		this.testPlayBtn = t;
		t.bottom = 70;
		t.horizontalCenter = 0;
		t.label = "";
		t.skinName = Skin_LoginComponent$Skin33;
		return t;
	};
	return Skin_LoginComponent;
})(eui.Skin);generateEUI.paths['resource/skin/map/Skin_Map.exml'] = window.Skin_Map = (function (_super) {
	__extends(Skin_Map, _super);
	var Skin_Map$Skin34 = 	(function (_super) {
		__extends(Skin_Map$Skin34, _super);
		function Skin_Map$Skin34() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.95),
						new eui.SetProperty("_Image1","scaleY",0.95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Map$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 86;
			t.horizontalCenter = 0;
			t.source = "map_enterBtn_png";
			t.verticalCenter = 0;
			t.width = 132;
			return t;
		};
		return Skin_Map$Skin34;
	})(eui.Skin);

	var Skin_Map$Skin35 = 	(function (_super) {
		__extends(Skin_Map$Skin35, _super);
		function Skin_Map$Skin35() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_Map$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 65;
			t.horizontalCenter = 0;
			t.source = "bulb_closeBtn_png";
			t.verticalCenter = 0;
			t.width = 65;
			return t;
		};
		return Skin_Map$Skin35;
	})(eui.Skin);

	function Skin_Map() {
		_super.call(this);
		this.skinParts = ["chapterGroup","treasure_box","playerImg","joinBtn","closeBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = Skin_Map.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.6;
		t.percentHeight = 100;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 786;
		t.horizontalCenter = 0;
		t.top = "15%";
		t.width = 640;
		t.elementsContent = [this._Image1_i(),this.chapterGroup_i(),this.treasure_box_i(),this.playerImg_i(),this.joinBtn_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "map_bg_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.chapterGroup_i = function () {
		var t = new eui.Group();
		this.chapterGroup = t;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 29.5;
		t.anchorOffsetY = 3;
		t.height = 61;
		t.source = "map_cpt_0_png";
		t.width = 72;
		t.x = 512.46;
		t.y = 540.43;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 29.5;
		t.anchorOffsetY = 3;
		t.height = 61;
		t.source = "map_cpt_0_png";
		t.width = 72;
		t.x = 509.25;
		t.y = 457.94;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 29.5;
		t.anchorOffsetY = 3;
		t.height = 61;
		t.source = "map_cpt_0_png";
		t.width = 72;
		t.x = 462.33;
		t.y = 343.07;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 29.5;
		t.anchorOffsetY = 3;
		t.height = 61;
		t.source = "map_cpt_0_png";
		t.width = 72;
		t.x = 516.26;
		t.y = 281.74;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 29.5;
		t.anchorOffsetY = 3;
		t.height = 61;
		t.source = "map_cpt_0_png";
		t.width = 72;
		t.x = 500.13;
		t.y = 195.97;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 29.5;
		t.anchorOffsetY = 3;
		t.height = 61;
		t.source = "map_cpt_0_png";
		t.width = 72;
		t.x = 389.31;
		t.y = 296.42;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 29.5;
		t.anchorOffsetY = 3;
		t.height = 61;
		t.source = "map_cpt_0_png";
		t.width = 72;
		t.x = 423.79;
		t.y = 511.91;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 29.5;
		t.anchorOffsetY = 3;
		t.height = 61;
		t.source = "map_cpt_0_png";
		t.width = 72;
		t.x = 308.62;
		t.y = 569.9;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 29.5;
		t.anchorOffsetY = 3;
		t.height = 61;
		t.source = "map_cpt_0_png";
		t.width = 72;
		t.x = 335.45;
		t.y = 405.94;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 29.5;
		t.anchorOffsetY = 3;
		t.height = 61;
		t.source = "map_cpt_0_png";
		t.width = 72;
		t.x = 272.58;
		t.y = 358.92;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 29.5;
		t.anchorOffsetY = 3;
		t.height = 61;
		t.source = "map_cpt_0_png";
		t.width = 72;
		t.x = 234.09;
		t.y = 462.59;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 29.5;
		t.anchorOffsetY = 3;
		t.height = 61;
		t.source = "map_cpt_0_png";
		t.width = 72;
		t.x = 101.59;
		t.y = 387.32;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 29.5;
		t.anchorOffsetY = 3;
		t.height = 61;
		t.source = "map_cpt_0_png";
		t.width = 72;
		t.x = 181.73;
		t.y = 322.29;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 29.5;
		t.anchorOffsetY = 3;
		t.height = 61;
		t.source = "map_cpt_0_png";
		t.width = 72;
		t.x = 187.01;
		t.y = 247.29;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 29.5;
		t.anchorOffsetY = 3;
		t.height = 61;
		t.source = "map_cpt_0_png";
		t.width = 72;
		t.x = 291.47;
		t.y = 258.47;
		return t;
	};
	_proto.treasure_box_i = function () {
		var t = new eui.Image();
		this.treasure_box = t;
		t.source = "map_box_png";
		t.x = 269;
		t.y = 219.66;
		return t;
	};
	_proto.playerImg_i = function () {
		var t = new eui.Image();
		this.playerImg = t;
		t.anchorOffsetX = 22;
		t.anchorOffsetY = 40;
		t.height = 40;
		t.source = "start_index_sel_png";
		t.touchEnabled = false;
		t.width = 44;
		t.x = 512.99;
		t.y = 556.32;
		return t;
	};
	_proto.joinBtn_i = function () {
		var t = new eui.Button();
		this.joinBtn = t;
		t.height = 86;
		t.label = "";
		t.width = 132;
		t.x = 437.46;
		t.y = 640.08;
		t.skinName = Skin_Map$Skin34;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.height = 65;
		t.label = "";
		t.width = 65;
		t.x = 565;
		t.y = -17;
		t.skinName = Skin_Map$Skin35;
		return t;
	};
	return Skin_Map;
})(eui.Skin);generateEUI.paths['resource/skin/maze/Skin_BoxMaze.exml'] = window.Skin_Maze = (function (_super) {
	__extends(Skin_Maze, _super);
	function Skin_Maze() {
		_super.call(this);
		this.skinParts = ["centerMask","bgImg","staticGroup","mazeGroup","lightEffectImg","treasureImg","treasureGrp","centerGroup"];
		
		this.height = 640;
		this.width = 640;
		this.elementsContent = [this.centerMask_i(),this.centerGroup_i()];
	}
	var _proto = Skin_Maze.prototype;

	_proto.centerMask_i = function () {
		var t = new eui.Image();
		this.centerMask = t;
		t.height = 640;
		t.source = "bg_mask_png";
		t.visible = false;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.centerGroup_i = function () {
		var t = new eui.Group();
		this.centerGroup = t;
		t.height = 640;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this.mazeGroup_i(),this.treasureGrp_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 1;
		t.fillColor = 0x000000;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mazeGroup_i = function () {
		var t = new eui.Group();
		this.mazeGroup = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bgImg_i(),this.staticGroup_i()];
		return t;
	};
	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.staticGroup_i = function () {
		var t = new eui.Group();
		this.staticGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.treasureGrp_i = function () {
		var t = new eui.Group();
		this.treasureGrp = t;
		t.anchorOffsetX = 165;
		t.anchorOffsetY = 165;
		t.height = 330;
		t.width = 330;
		t.x = 320;
		t.y = 280;
		t.elementsContent = [this.lightEffectImg_i(),this.treasureImg_i()];
		return t;
	};
	_proto.lightEffectImg_i = function () {
		var t = new eui.Image();
		this.lightEffectImg = t;
		t.anchorOffsetX = 163.5;
		t.anchorOffsetY = 159;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lighteffect_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.treasureImg_i = function () {
		var t = new eui.Image();
		this.treasureImg = t;
		t.anchorOffsetX = 75;
		t.anchorOffsetY = 75;
		t.height = 150;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 150;
		return t;
	};
	return Skin_Maze;
})(eui.Skin);generateEUI.paths['resource/skin/maze/Skin_GameMaze.exml'] = window.Skin_GameMaze = (function (_super) {
	__extends(Skin_GameMaze, _super);
	var Skin_GameMaze$Skin36 = 	(function (_super) {
		__extends(Skin_GameMaze$Skin36, _super);
		function Skin_GameMaze$Skin36() {
			_super.call(this);
			this.skinParts = ["iconDisplay"];
			
			this.elementsContent = [this.iconDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("iconDisplay","scaleX",0.9),
						new eui.SetProperty("iconDisplay","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_GameMaze$Skin36.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.horizontalCenter = 0;
			t.source = "footer_reset_png";
			t.verticalCenter = 0;
			return t;
		};
		return Skin_GameMaze$Skin36;
	})(eui.Skin);

	var Skin_GameMaze$Skin37 = 	(function (_super) {
		__extends(Skin_GameMaze$Skin37, _super);
		function Skin_GameMaze$Skin37() {
			_super.call(this);
			this.skinParts = ["iconDisplay"];
			
			this.elementsContent = [this.iconDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("iconDisplay","scaleX",0.9),
						new eui.SetProperty("iconDisplay","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_GameMaze$Skin37.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.horizontalCenter = 0;
			t.source = "footer_back_png";
			t.verticalCenter = 0;
			return t;
		};
		return Skin_GameMaze$Skin37;
	})(eui.Skin);

	var Skin_GameMaze$Skin38 = 	(function (_super) {
		__extends(Skin_GameMaze$Skin38, _super);
		function Skin_GameMaze$Skin38() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_GameMaze$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 35;
			t.horizontalCenter = 0;
			t.source = "maze_help2_png";
			t.verticalCenter = 0;
			t.width = 124;
			return t;
		};
		return Skin_GameMaze$Skin38;
	})(eui.Skin);

	function Skin_GameMaze() {
		_super.call(this);
		this.skinParts = ["mazePanel","mazeGroup","indexLab","timeLab","stepLab","tipLab","titleGroup","exitBtn","backBtn","helpBtn","footerGroup"];
		
		this.width = 640;
		this.elementsContent = [this.mazeGroup_i(),this.titleGroup_i(),this.footerGroup_i()];
	}
	var _proto = Skin_GameMaze.prototype;

	_proto.mazeGroup_i = function () {
		var t = new eui.Group();
		this.mazeGroup = t;
		t.height = 640;
		t.width = 640;
		t.x = 0;
		t.y = 50;
		t.elementsContent = [this.mazePanel_i()];
		return t;
	};
	_proto.mazePanel_i = function () {
		var t = new mummy.game.Panel();
		this.mazePanel = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = -50;
		return t;
	};
	_proto.titleGroup_i = function () {
		var t = new eui.Group();
		this.titleGroup = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = -34;
		t.elementsContent = [this._Image1_i(),this.indexLab_i(),this._Image2_i(),this.timeLab_i(),this._Image3_i(),this.stepLab_i(),this.tipLab_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "title_index_png";
		t.x = 100;
		t.y = 3.2;
		return t;
	};
	_proto.indexLab_i = function () {
		var t = new eui.Label();
		this.indexLab = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18;
		t.size = 18;
		t.stroke = 2;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xf7fe00;
		t.verticalAlign = "middle";
		t.width = 65.5;
		t.x = 134.52;
		t.y = 10.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "title_time_png";
		t.x = 279;
		t.y = 0;
		return t;
	};
	_proto.timeLab_i = function () {
		var t = new eui.Label();
		this.timeLab = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 22;
		t.size = 18;
		t.stroke = 2;
		t.text = "00:00";
		t.textAlign = "center";
		t.textColor = 0xf7fe00;
		t.verticalAlign = "middle";
		t.width = 60;
		t.x = 302.25;
		t.y = 8.33;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "title_step_png";
		t.x = 457;
		return t;
	};
	_proto.stepLab_i = function () {
		var t = new eui.Label();
		this.stepLab = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.size = 18;
		t.stroke = 2;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xf7fe00;
		t.verticalAlign = "middle";
		t.width = 48;
		t.x = 488.01;
		t.y = 8.33;
		return t;
	};
	_proto.tipLab_i = function () {
		var t = new eui.Label();
		this.tipLab = t;
		t.fontFamily = "KaiTi";
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 18;
		t.stroke = 1;
		t.text = "小提示：白色僵尸会优先横向追击";
		t.textAlign = "center";
		t.textColor = 0xD5D179;
		t.verticalAlign = "middle";
		t.width = 580;
		t.y = 61;
		return t;
	};
	_proto.footerGroup_i = function () {
		var t = new eui.Group();
		this.footerGroup = t;
		t.width = 640;
		t.x = 0;
		t.y = 700;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.exitBtn_i(),this.backBtn_i(),this.helpBtn_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.exitBtn_i = function () {
		var t = new eui.Button();
		this.exitBtn = t;
		t.height = 40;
		t.left = 20;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 170;
		t.skinName = Skin_GameMaze$Skin36;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.height = 40;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 170;
		t.y = 0;
		t.skinName = Skin_GameMaze$Skin37;
		return t;
	};
	_proto.helpBtn_i = function () {
		var t = new eui.Button();
		this.helpBtn = t;
		t.height = 40;
		t.right = 40;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 124;
		t.y = 0;
		t.skinName = Skin_GameMaze$Skin38;
		return t;
	};
	return Skin_GameMaze;
})(eui.Skin);generateEUI.paths['resource/skin/maze/Skin_Maze.exml'] = window.Skin_Maze = (function (_super) {
	__extends(Skin_Maze, _super);
	function Skin_Maze() {
		_super.call(this);
		this.skinParts = ["centerMask","bgImg","staticGroup","dynamicGroup","mazeGroup","bMaskGroup","topGroup","centerGroup","helpGroup"];
		
		this.height = 640;
		this.width = 640;
		this.elementsContent = [this.centerMask_i(),this.centerGroup_i(),this.helpGroup_i()];
	}
	var _proto = Skin_Maze.prototype;

	_proto.centerMask_i = function () {
		var t = new eui.Image();
		this.centerMask = t;
		t.height = 640;
		t.source = "bg_mask_png";
		t.visible = false;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.centerGroup_i = function () {
		var t = new eui.Group();
		this.centerGroup = t;
		t.height = 640;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.touchThrough = true;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this.mazeGroup_i(),this.bMaskGroup_i(),this.topGroup_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 1;
		t.fillColor = 0x000000;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mazeGroup_i = function () {
		var t = new eui.Group();
		this.mazeGroup = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bgImg_i(),this.staticGroup_i(),this.dynamicGroup_i()];
		return t;
	};
	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.staticGroup_i = function () {
		var t = new eui.Group();
		this.staticGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.dynamicGroup_i = function () {
		var t = new eui.Group();
		this.dynamicGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bMaskGroup_i = function () {
		var t = new eui.Group();
		this.bMaskGroup = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.7;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto.topGroup_i = function () {
		var t = new eui.Group();
		this.topGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.helpGroup_i = function () {
		var t = new eui.Group();
		this.helpGroup = t;
		t.visible = false;
		t.x = 136;
		t.y = 320;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 114;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(67,56,402,340);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bulb_bg_png";
		t.width = 371;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0.5;
		t.lineSpacing = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x966712;
		t.text = "躲避怪物的追击，到达出口楼梯";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = -2;
		return t;
	};
	return Skin_Maze;
})(eui.Skin);generateEUI.paths['resource/skin/maze/Skin_RecordMaze.exml'] = window.Skin_RecordMaze = (function (_super) {
	__extends(Skin_RecordMaze, _super);
	var Skin_RecordMaze$Skin39 = 	(function (_super) {
		__extends(Skin_RecordMaze$Skin39, _super);
		function Skin_RecordMaze$Skin39() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_RecordMaze$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "record_back_png";
			t.verticalCenter = 0;
			return t;
		};
		return Skin_RecordMaze$Skin39;
	})(eui.Skin);

	var Skin_RecordMaze$Skin40 = 	(function (_super) {
		__extends(Skin_RecordMaze$Skin40, _super);
		function Skin_RecordMaze$Skin40() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_RecordMaze$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.horizontalCenter = 0;
			t.source = "record_next_png";
			t.verticalCenter = 0;
			return t;
		};
		return Skin_RecordMaze$Skin40;
	})(eui.Skin);

	var Skin_RecordMaze$Skin41 = 	(function (_super) {
		__extends(Skin_RecordMaze$Skin41, _super);
		function Skin_RecordMaze$Skin41() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","scaleX",0.9),
						new eui.SetProperty("_Image1","scaleY",0.9)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Skin_RecordMaze$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.height = 65;
			t.horizontalCenter = 0;
			t.source = "bulb_closeBtn_png";
			t.verticalCenter = 0;
			t.width = 65;
			return t;
		};
		return Skin_RecordMaze$Skin41;
	})(eui.Skin);

	function Skin_RecordMaze() {
		_super.call(this);
		this.skinParts = ["avatarMask","avatarImg","nameLab","stepLab","timeLab","dateLab","titleGroup","mazeGroup","backBtn","nextBtn","footerGroup","closeBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = Skin_RecordMaze.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.3;
		t.percentHeight = 100;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 780;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 589;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.titleGroup_i(),this.mazeGroup_i(),this.footerGroup_i(),this.closeBtn_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "dia_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "record_title_png";
		t.x = 24;
		t.y = -6;
		return t;
	};
	_proto.titleGroup_i = function () {
		var t = new eui.Group();
		this.titleGroup = t;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 45;
		t.y = 131;
		t.elementsContent = [this._Image3_i(),this.avatarMask_i(),this.avatarImg_i(),this._Image4_i(),this.nameLab_i(),this._Image5_i(),this.stepLab_i(),this.timeLab_i(),this.dateLab_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "record_item_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.avatarMask_i = function () {
		var t = new eui.Rect();
		this.avatarMask = t;
		t.ellipseWidth = 26;
		t.height = 48;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 48;
		t.x = 11.03;
		t.y = 5.04;
		return t;
	};
	_proto.avatarImg_i = function () {
		var t = new eui.Image();
		this.avatarImg = t;
		t.height = 60;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "";
		t.width = 60;
		t.x = 11.01;
		t.y = 5.32;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "end_record_portrait_png";
		t.x = 9;
		t.y = 4;
		return t;
	};
	_proto.nameLab_i = function () {
		var t = new eui.Label();
		this.nameLab = t;
		t.fontFamily = "KaiTi";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.stroke = 2;
		t.strokeColor = 0x191818;
		t.text = "";
		t.width = 88;
		t.x = 78.5;
		t.y = 24;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "end_record_step_png";
		t.x = 256;
		t.y = 15;
		return t;
	};
	_proto.stepLab_i = function () {
		var t = new eui.Label();
		this.stepLab = t;
		t.fontFamily = "KaiTi";
		t.height = 22;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.stroke = 2;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xF7FE00;
		t.width = 33;
		t.x = 289;
		t.y = 24;
		return t;
	};
	_proto.timeLab_i = function () {
		var t = new eui.Label();
		this.timeLab = t;
		t.bold = true;
		t.fontFamily = "KaiTi";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.stroke = 2;
		t.text = "";
		t.textAlign = "right";
		t.textColor = 0xF7FE00;
		t.width = 70;
		t.x = 411;
		t.y = 24;
		return t;
	};
	_proto.dateLab_i = function () {
		var t = new eui.Label();
		this.dateLab = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "KaiTi";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 12;
		t.stroke = 1;
		t.strokeColor = 0x1C1919;
		t.text = "";
		t.textAlign = "right";
		t.textColor = 0xEDEDED;
		t.width = 130;
		t.x = 354;
		t.y = 53;
		return t;
	};
	_proto.mazeGroup_i = function () {
		var t = new eui.Group();
		this.mazeGroup = t;
		t.height = 520;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 520;
		t.x = 35;
		t.y = 192;
		return t;
	};
	_proto.footerGroup_i = function () {
		var t = new eui.Group();
		this.footerGroup = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 280;
		t.y = 691;
		t.elementsContent = [this.backBtn_i(),this.nextBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.height = 56;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 86;
		t.skinName = Skin_RecordMaze$Skin39;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Button();
		this.nextBtn = t;
		t.height = 56;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 86;
		t.skinName = Skin_RecordMaze$Skin40;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.height = 65;
		t.label = "";
		t.width = 65;
		t.x = 541.65;
		t.y = -8.99;
		t.skinName = Skin_RecordMaze$Skin41;
		return t;
	};
	return Skin_RecordMaze;
})(eui.Skin);