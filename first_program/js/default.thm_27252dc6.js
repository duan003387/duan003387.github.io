window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","page1":"resource/myPage/page1.exml","page2":"resource/myPage/page2.exml","A":"resource/myPage/A.exml","B":"resource/myPage/B.exml","C":"resource/myPage/C.exml","A2":"resource/myPage/A2.exml","Find":"resource/myPage/Find.exml","A3":"resource/myPage/A3.exml","A4":"resource/myPage/A4.exml","Last":"resource/myPage/Last.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/myPage/A.exml'] = window.ASkin = (function (_super) {
	__extends(ASkin, _super);
	function ASkin() {
		_super.call(this);
		this.skinParts = ["bottom_an","bottom_liang","bottom_mask","icon1","icon2","A","center","center_group","center2","C","B"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.bottom_an_i(),this.bottom_liang_i(),this.bottom_mask_i(),this.icon1_i(),this.icon2_i(),this.A_i(),this.center_i(),this.center_group_i(),this.center2_i(),this.C_i(),this.B_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Image32_i()];
	}
	var _proto = ASkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 1136;
		t.source = "bg_2_jpg";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bottom_an_i = function () {
		var t = new eui.Image();
		this.bottom_an = t;
		t.alpha = 1;
		t.source = "page2_2_json.bg_2_bottom_png";
		t.width = 640;
		t.x = 0;
		t.y = 613;
		return t;
	};
	_proto.bottom_liang_i = function () {
		var t = new eui.Image();
		this.bottom_liang = t;
		t.source = "page2_2_json.bg_2_bottom2_png";
		t.width = 640;
		t.x = 0;
		t.y = 731;
		return t;
	};
	_proto.bottom_mask_i = function () {
		var t = new eui.Image();
		this.bottom_mask = t;
		t.height = 375;
		t.source = "page2_2_json.msk3_png";
		t.width = 223;
		t.x = 643;
		t.y = 761;
		return t;
	};
	_proto.icon1_i = function () {
		var t = new eui.Image();
		this.icon1 = t;
		t.source = "page2_2_json.p2_1_icon1_png";
		t.x = 150;
		t.y = 258;
		return t;
	};
	_proto.icon2_i = function () {
		var t = new eui.Image();
		this.icon2 = t;
		t.anchorOffsetX = 46;
		t.anchorOffsetY = 52.67;
		t.source = "page2_2_json.p2_1_icon2_png";
		t.x = 115;
		t.y = 500.67;
		return t;
	};
	_proto.A_i = function () {
		var t = new eui.Image();
		this.A = t;
		t.anchorOffsetX = 1;
		t.anchorOffsetY = 213.33;
		t.rotation = 336.44;
		t.source = "page2_2_json.p2_1_text_frame1_png";
		t.touchEnabled = true;
		t.x = 394.92;
		t.y = 372.02;
		return t;
	};
	_proto.center_i = function () {
		var t = new eui.Image();
		this.center = t;
		t.source = "page2_2_json.p2_1_title_frame1_png";
		t.x = 184;
		t.y = 330;
		return t;
	};
	_proto.center_group_i = function () {
		var t = new eui.Group();
		this.center_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 366;
		t.width = 362;
		t.x = 178;
		t.y = 330;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_2_json.p2_1_text_light1_png";
		t.visible = false;
		t.x = -28;
		t.y = -174;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.rotation = 10;
		t.source = "page2_2_json.p2_1_text_light4_png";
		t.visible = false;
		t.x = 51;
		t.y = -43;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.rotation = 10;
		t.source = "page2_2_json.p2_1_text_light4_png";
		t.visible = false;
		t.x = 79;
		t.y = -43;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.rotation = 25;
		t.source = "page2_2_json.p2_1_text_light4_png";
		t.visible = false;
		t.x = 119;
		t.y = -67;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.rotation = 30;
		t.source = "page2_2_json.p2_1_text_light4_png";
		t.visible = false;
		t.x = 155;
		t.y = -70;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.rotation = 40;
		t.source = "page2_2_json.p2_1_text_light4_png";
		t.visible = false;
		t.x = 203;
		t.y = -72;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.rotation = 50;
		t.source = "page2_2_json.p2_1_text_light4_png";
		t.visible = false;
		t.x = 259;
		t.y = -58;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.rotation = 70;
		t.source = "page2_2_json.p2_1_text_light4_png";
		t.visible = false;
		t.x = 331;
		t.y = -32;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "page2_2_json.p2_1_text_light2_png";
		t.visible = false;
		t.x = 277;
		t.y = 4;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.rotation = -30;
		t.source = "page2_2_json.p2_1_text_light1_png";
		t.visible = false;
		t.x = 81;
		t.y = 98;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.rotation = -30;
		t.source = "page2_2_json.p2_1_text_light1_png";
		t.visible = false;
		t.x = 47;
		t.y = 129;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.rotation = 10;
		t.source = "page2_2_json.p2_1_text_light3_png";
		t.visible = false;
		t.x = 92;
		t.y = 117;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.rotation = 30;
		t.source = "page2_2_json.p2_1_text_light3_png";
		t.visible = false;
		t.x = 143;
		t.y = 110;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "page2_2_json.p2_1_text_light1_png";
		t.visible = false;
		t.x = 87;
		t.y = 141;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.rotation = 20;
		t.source = "page2_2_json.p2_1_text_light1_png";
		t.visible = false;
		t.x = 108;
		t.y = 108;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.rotation = 20;
		t.source = "page2_2_json.p2_1_text_light1_png";
		t.visible = false;
		t.x = 55;
		t.y = 106;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.rotation = 50;
		t.source = "page2_2_json.p2_1_text_light1_png";
		t.visible = false;
		t.x = 149;
		t.y = 75;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.rotation = 90;
		t.source = "page2_2_json.p2_1_text_light1_png";
		t.visible = false;
		t.x = 288;
		t.y = 145;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.rotation = 110;
		t.source = "page2_2_json.p2_1_text_light1_png";
		t.visible = false;
		t.x = 328;
		t.y = 184;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.rotation = -30;
		t.source = "page2_2_json.p2_1_text_light3_png";
		t.visible = false;
		t.x = -179;
		t.y = 239;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.rotation = 10;
		t.source = "page2_2_json.p2_1_text_light3_png";
		t.visible = false;
		t.x = -161;
		t.y = 36;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.rotation = 10;
		t.source = "page2_2_json.p2_1_text_light3_png";
		t.visible = false;
		t.x = -172;
		t.y = -11;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.rotation = 50;
		t.source = "page2_2_json.p2_1_text_light3_png";
		t.visible = false;
		t.x = -22;
		t.y = -144;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.rotation = 70;
		t.source = "page2_2_json.p2_1_text_light3_png";
		t.visible = false;
		t.x = 108;
		t.y = -191;
		return t;
	};
	_proto.center2_i = function () {
		var t = new eui.Image();
		this.center2 = t;
		t.height = 364;
		t.source = "page2_2_json.p2_1_title_frame2_png";
		t.width = 347;
		t.x = 184;
		t.y = 330;
		return t;
	};
	_proto.C_i = function () {
		var t = new eui.Image();
		this.C = t;
		t.anchorOffsetX = 1.33;
		t.anchorOffsetY = -1.33;
		t.rotation = 6.59;
		t.source = "page2_2_json.p2_1_text_frame2_png";
		t.touchEnabled = true;
		t.x = 438.96;
		t.y = 659.4;
		return t;
	};
	_proto.B_i = function () {
		var t = new eui.Image();
		this.B = t;
		t.anchorOffsetX = 213.33;
		t.anchorOffsetY = -1.34;
		t.rotation = 10.93;
		t.source = "page2_2_json.p2_1_text_frame3_png";
		t.touchEnabled = true;
		t.x = 282.65;
		t.y = 654.88;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.source = "page2_2_json.p2_1_line1_png";
		t.x = 383;
		t.y = 283;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.source = "page2_2_json.p2_1_line2_png";
		t.x = 204;
		t.y = 639;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.height = 102;
		t.source = "page2_2_json.p2_1_line3_png";
		t.x = 416;
		t.y = 637;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.source = "page2_2_json.p2_1_text1_png";
		t.touchEnabled = false;
		t.x = 386;
		t.y = 197;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.source = "page2_2_json.p2_1_title_png";
		t.x = 251;
		t.y = 373;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.source = "page2_2_json.p2_1_text3_png";
		t.touchEnabled = false;
		t.x = 489;
		t.y = 741;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.source = "page2_2_json.p2_1_text2_png";
		t.touchEnabled = false;
		t.x = 92;
		t.y = 714;
		return t;
	};
	return ASkin;
})(eui.Skin);generateEUI.paths['resource/myPage/A2.exml'] = window.A2Skin = (function (_super) {
	__extends(A2Skin, _super);
	function A2Skin() {
		_super.call(this);
		this.skinParts = ["lian","A","A_group","B","B_group","C","C_group","shan1","tg_1","tg_2","tg_3","tg_4","shan2"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.lian_i(),this.A_group_i(),this.B_group_i(),this.C_group_i(),this.shan1_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this.tg_1_i(),this.tg_2_i(),this.tg_3_i(),this.tg_4_i(),this.shan2_i()];
	}
	var _proto = A2Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_3_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "page2_3_json.p2_3_title_png";
		t.y = 134;
		return t;
	};
	_proto.lian_i = function () {
		var t = new eui.Image();
		this.lian = t;
		t.horizontalCenter = 0;
		t.source = "page2_3_json.p2_3_prop_line_png";
		t.y = 373;
		return t;
	};
	_proto.A_group_i = function () {
		var t = new eui.Group();
		this.A_group = t;
		t.height = 200;
		t.touchEnabled = false;
		t.width = 200;
		t.x = 29;
		t.y = -215;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this.A_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 101;
		t.source = "page2_1_json.t_g_1_png";
		t.touchEnabled = false;
		t.width = 100;
		t.x = -46;
		t.y = 12;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_2_png";
		t.touchEnabled = false;
		t.width = 260;
		t.x = -17;
		t.y = -26;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 109;
		t.source = "page2_1_json.t_g_3_png";
		t.touchEnabled = false;
		t.width = 109;
		t.x = 161;
		t.y = 10;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 143;
		t.source = "page2_1_json.t_g_4_png";
		t.touchEnabled = false;
		t.width = 272;
		t.x = -7;
		t.y = 28;
		return t;
	};
	_proto.A_i = function () {
		var t = new eui.Image();
		this.A = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_3_json.p2_3_text1_png";
		t.touchEnabled = true;
		t.x = -2;
		t.y = 34;
		return t;
	};
	_proto.B_group_i = function () {
		var t = new eui.Group();
		this.B_group = t;
		t.height = 200;
		t.touchEnabled = false;
		t.width = 200;
		t.x = 393;
		t.y = -108;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this.B_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 101;
		t.source = "page2_1_json.t_g_1_png";
		t.touchEnabled = false;
		t.width = 100;
		t.x = -46;
		t.y = 12;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_2_png";
		t.touchEnabled = false;
		t.width = 260;
		t.x = -17;
		t.y = -26;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 109;
		t.source = "page2_1_json.t_g_3_png";
		t.touchEnabled = false;
		t.width = 109;
		t.x = 161;
		t.y = 10;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 143;
		t.source = "page2_1_json.t_g_4_png";
		t.touchEnabled = false;
		t.width = 272;
		t.x = -7;
		t.y = 28;
		return t;
	};
	_proto.B_i = function () {
		var t = new eui.Image();
		this.B = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_3_json.p2_3_text2_png";
		t.x = -2;
		t.y = 37;
		return t;
	};
	_proto.C_group_i = function () {
		var t = new eui.Group();
		this.C_group = t;
		t.height = 200;
		t.touchEnabled = false;
		t.width = 200;
		t.x = 28;
		t.y = -127;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this.C_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 101;
		t.source = "page2_1_json.t_g_1_png";
		t.touchEnabled = false;
		t.width = 100;
		t.x = -46;
		t.y = 12;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_2_png";
		t.touchEnabled = false;
		t.width = 260;
		t.x = -17;
		t.y = -26;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 109;
		t.source = "page2_1_json.t_g_3_png";
		t.touchEnabled = false;
		t.width = 109;
		t.x = 161;
		t.y = 10;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 143;
		t.source = "page2_1_json.t_g_4_png";
		t.touchEnabled = false;
		t.width = 272;
		t.x = -7;
		t.y = 28;
		return t;
	};
	_proto.C_i = function () {
		var t = new eui.Image();
		this.C = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_3_json.p2_3_text3_png";
		t.x = -8;
		t.y = 37.000000000000114;
		return t;
	};
	_proto.shan1_i = function () {
		var t = new eui.Image();
		this.shan1 = t;
		t.horizontalCenter = 0;
		t.source = "page2_3_json.p2_3_prop_light1_png";
		t.touchEnabled = false;
		t.width = 640;
		t.y = 353;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "page2_3_json.p2_3_text1_frame1_png";
		t.touchEnabled = false;
		t.x = 195;
		t.y = 315;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "page2_3_json.p2_3_text3_frame1_png";
		t.x = 229;
		t.y = 847;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "page2_3_json.p2_3_text2_frame1_png";
		t.x = 301;
		t.y = 767;
		return t;
	};
	_proto.tg_1_i = function () {
		var t = new eui.Image();
		this.tg_1 = t;
		t.source = "page2_1_json.t_g_1_png";
		t.touchEnabled = false;
		t.x = 21;
		t.y = -232;
		return t;
	};
	_proto.tg_2_i = function () {
		var t = new eui.Image();
		this.tg_2 = t;
		t.source = "page2_1_json.t_g_2_png";
		t.x = 516;
		t.y = 33;
		return t;
	};
	_proto.tg_3_i = function () {
		var t = new eui.Image();
		this.tg_3 = t;
		t.source = "page2_1_json.t_g_3_png";
		t.x = 474;
		t.y = 1073;
		return t;
	};
	_proto.tg_4_i = function () {
		var t = new eui.Image();
		this.tg_4 = t;
		t.source = "page2_1_json.t_g_4_png";
		t.touchEnabled = false;
		t.x = -526;
		t.y = 194;
		return t;
	};
	_proto.shan2_i = function () {
		var t = new eui.Image();
		this.shan2 = t;
		t.anchorOffsetX = 236;
		t.anchorOffsetY = 226;
		t.horizontalCenter = 0;
		t.source = "page2_3_json.p2_3_prop_light3_png";
		t.touchEnabled = false;
		t.width = 640;
		t.y = 580;
		return t;
	};
	return A2Skin;
})(eui.Skin);generateEUI.paths['resource/myPage/A3.exml'] = window.A3Skin = (function (_super) {
	__extends(A3Skin, _super);
	function A3Skin() {
		_super.call(this);
		this.skinParts = ["Q","zhuzi","peopleBottom","circle","peopleBottom0","circle2","t_g_1","t_g_2","t_g_3","A","t_g_4","A_group","B_group","C_group"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.Q_i(),this.zhuzi_i(),this._Image3_i(),this.circle_i(),this.circle2_i(),this.t_g_1_i(),this.t_g_2_i(),this.t_g_3_i(),this.A_i(),this.t_g_4_i(),this._Image36_i(),this._Image37_i(),this._Image38_i(),this._Image39_i(),this._Image40_i(),this.A_group_i(),this.B_group_i(),this.C_group_i()];
	}
	var _proto = A3Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_42_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "page2_4_json.bg_4_bottom_png";
		t.x = 188;
		t.y = 433;
		return t;
	};
	_proto.Q_i = function () {
		var t = new eui.Image();
		this.Q = t;
		t.source = "page2_4_json.p2_4_title_png";
		t.x = 99;
		t.y = 134;
		return t;
	};
	_proto.zhuzi_i = function () {
		var t = new eui.Image();
		this.zhuzi = t;
		t.source = "page2_4_json.p2_4_icon_png";
		t.x = 190;
		t.y = 439;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "page2_4_json.p2_4_icon_bg_png";
		t.x = 200.5;
		t.y = 469;
		return t;
	};
	_proto.circle_i = function () {
		var t = new eui.Group();
		this.circle = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 0;
		t.y = 597;
		t.elementsContent = [this.peopleBottom_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i()];
		return t;
	};
	_proto.peopleBottom_i = function () {
		var t = new eui.Image();
		this.peopleBottom = t;
		t.anchorOffsetX = 67;
		t.anchorOffsetY = 66;
		t.horizontalCenter = 0;
		t.source = "circle_json.circle0_1_png";
		t.y = 878;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_11_png";
		t.x = 20;
		t.y = 878;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_13_png";
		t.x = 40;
		t.y = 878;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_14_png";
		t.x = 10;
		t.y = 878;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_15_png";
		t.x = 46;
		t.y = 878;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_16_png";
		t.x = 14;
		t.y = 878;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_17_png";
		t.x = -100;
		t.y = 878;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_18_png";
		t.x = -212;
		t.y = 878;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_2_png";
		t.x = 54;
		t.y = 878;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_3_png";
		t.x = 14;
		t.y = 878;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_4_png";
		t.x = 60;
		t.y = 878;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_5_png";
		t.x = 32;
		t.y = 878;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_6_png";
		t.x = 20;
		t.y = 878;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_7_png";
		t.x = 10;
		t.y = 878;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_8_png";
		t.x = 34;
		t.y = 878;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_9_png";
		t.x = 16;
		t.y = 878;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_bg_png";
		t.x = 46;
		t.y = 878;
		return t;
	};
	_proto.circle2_i = function () {
		var t = new eui.Group();
		this.circle2 = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 10;
		t.y = 597;
		t.elementsContent = [this.peopleBottom0_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Image35_i()];
		return t;
	};
	_proto.peopleBottom0_i = function () {
		var t = new eui.Image();
		this.peopleBottom0 = t;
		t.anchorOffsetX = 67;
		t.anchorOffsetY = 66;
		t.horizontalCenter = 0;
		t.source = "circle_json.circle0_1_png";
		t.y = 412;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_11_png";
		t.x = 20;
		t.y = 412;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_13_png";
		t.x = 40;
		t.y = 412;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_14_png";
		t.x = 10;
		t.y = 412;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_15_png";
		t.x = 46;
		t.y = 412;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_16_png";
		t.x = 14;
		t.y = 412;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_17_png";
		t.x = -100;
		t.y = 412;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_18_png";
		t.x = -212;
		t.y = 412;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_2_png";
		t.x = 54;
		t.y = 412;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_3_png";
		t.x = 14;
		t.y = 412;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_4_png";
		t.x = 60;
		t.y = 412;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_5_png";
		t.x = 32;
		t.y = 412;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_6_png";
		t.x = 20;
		t.y = 412;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_7_png";
		t.x = 10;
		t.y = 412;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_8_png";
		t.x = 34;
		t.y = 412;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_9_png";
		t.x = 16;
		t.y = 412;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_bg_png";
		t.x = 46;
		t.y = 412;
		return t;
	};
	_proto.t_g_1_i = function () {
		var t = new eui.Image();
		this.t_g_1 = t;
		t.source = "page2_1_json.t_g_1_png";
		t.x = -8;
		t.y = -253;
		return t;
	};
	_proto.t_g_2_i = function () {
		var t = new eui.Image();
		this.t_g_2 = t;
		t.source = "page2_1_json.t_g_2_png";
		t.x = 565;
		t.y = 47;
		return t;
	};
	_proto.t_g_3_i = function () {
		var t = new eui.Image();
		this.t_g_3 = t;
		t.source = "page2_1_json.t_g_3_png";
		t.x = 475;
		t.y = 1026;
		return t;
	};
	_proto.A_i = function () {
		var t = new eui.Image();
		this.A = t;
		t.source = "page2_4_json.p2_4_text1_png";
		t.touchEnabled = true;
		t.x = 353;
		t.y = 437;
		return t;
	};
	_proto.t_g_4_i = function () {
		var t = new eui.Image();
		this.t_g_4 = t;
		t.source = "page2_1_json.t_g_4_png";
		t.x = -548;
		t.y = 187;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.source = "page2_4_json.p2_4_text2_png";
		t.x = 410;
		t.y = 569;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.source = "page2_4_json.p2_4_text3_png";
		t.x = 422;
		t.y = 695;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.source = "page2_4_json.p2_4_text3_frame1_png";
		t.touchEnabled = false;
		t.x = 224;
		t.y = 432;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.source = "page2_4_json.p2_4_text3_frame1_png";
		t.touchEnabled = false;
		t.width = 285;
		t.x = 220;
		t.y = 561;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.source = "page2_4_json.p2_4_text3_frame1_png";
		t.touchEnabled = false;
		t.width = 285;
		t.x = 220;
		t.y = 690;
		return t;
	};
	_proto.A_group_i = function () {
		var t = new eui.Group();
		this.A_group = t;
		t.height = 200;
		t.touchEnabled = false;
		t.width = 200;
		t.x = 362;
		t.y = 401;
		t.elementsContent = [this._Image41_i(),this._Image42_i(),this._Image43_i(),this._Image44_i()];
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.height = 120;
		t.source = "page2_1_json.t_g_1_png";
		t.touchEnabled = false;
		t.width = 100;
		t.x = -42;
		t.y = -3;
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_2_png";
		t.touchEnabled = false;
		t.width = 240;
		t.x = -23;
		t.y = -26;
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.source = "page2_1_json.t_g_3_png";
		t.touchEnabled = false;
		t.width = 109;
		t.x = 122;
		t.y = 8;
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_4_png";
		t.touchEnabled = false;
		t.width = 240;
		t.x = -5;
		t.y = 22;
		return t;
	};
	_proto.B_group_i = function () {
		var t = new eui.Group();
		this.B_group = t;
		t.height = 200;
		t.touchEnabled = false;
		t.width = 200;
		t.x = 403;
		t.y = 534;
		t.elementsContent = [this._Image45_i(),this._Image46_i(),this._Image47_i(),this._Image48_i()];
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		t.height = 120;
		t.source = "page2_1_json.t_g_1_png";
		t.touchEnabled = false;
		t.width = 100;
		t.x = -42;
		t.y = -3;
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_2_png";
		t.touchEnabled = false;
		t.width = 240;
		t.x = -23;
		t.y = -26;
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.source = "page2_1_json.t_g_3_png";
		t.touchEnabled = false;
		t.width = 109;
		t.x = 122;
		t.y = 8;
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_4_png";
		t.touchEnabled = false;
		t.width = 240;
		t.x = -5;
		t.y = 22;
		return t;
	};
	_proto.C_group_i = function () {
		var t = new eui.Group();
		this.C_group = t;
		t.height = 200;
		t.touchEnabled = false;
		t.width = 200;
		t.x = 412;
		t.y = 693;
		t.elementsContent = [this._Image49_i(),this._Image50_i(),this._Image51_i(),this._Image52_i()];
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		t.height = 162;
		t.source = "page2_1_json.t_g_1_png";
		t.touchEnabled = false;
		t.width = 100;
		t.x = -37;
		t.y = -28;
		return t;
	};
	_proto._Image50_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_2_png";
		t.touchEnabled = false;
		t.width = 240;
		t.x = -16;
		t.y = -59;
		return t;
	};
	_proto._Image51_i = function () {
		var t = new eui.Image();
		t.height = 174;
		t.source = "page2_1_json.t_g_3_png";
		t.touchEnabled = false;
		t.width = 109;
		t.x = 133;
		t.y = -35;
		return t;
	};
	_proto._Image52_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_4_png";
		t.touchEnabled = false;
		t.width = 240;
		t.x = 3;
		t.y = 16;
		return t;
	};
	return A3Skin;
})(eui.Skin);generateEUI.paths['resource/myPage/A4.exml'] = window.A4Skin = (function (_super) {
	__extends(A4Skin, _super);
	function A4Skin() {
		_super.call(this);
		this.skinParts = ["music","A","B","C","t_g_1","t_g_2","t_g_3","t_g_4","A_group","B_group","C_group"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.music_i(),this.A_i(),this.B_i(),this.C_i(),this.t_g_1_i(),this.t_g_2_i(),this.t_g_3_i(),this.t_g_4_i(),this.A_group_i(),this.B_group_i(),this.C_group_i()];
	}
	var _proto = A4Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_5_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 190;
		t.anchorOffsetY = 46;
		t.height = 100;
		t.horizontalCenter = 0.5;
		t.source = "page2_5_json.p2_5_title_png";
		t.width = 383;
		t.y = 180;
		return t;
	};
	_proto.music_i = function () {
		var t = new eui.Image();
		this.music = t;
		t.anchorOffsetX = 384;
		t.anchorOffsetY = 32;
		t.source = "page2_5_json.p2_5_prop_png";
		t.x = 451;
		t.y = 350;
		return t;
	};
	_proto.A_i = function () {
		var t = new eui.Image();
		this.A = t;
		t.source = "page2_5_json.p2_5_text1_png";
		t.x = 76;
		t.y = 403;
		return t;
	};
	_proto.B_i = function () {
		var t = new eui.Image();
		this.B = t;
		t.source = "page2_5_json.p2_5_text2_png";
		t.x = 21;
		t.y = 588;
		return t;
	};
	_proto.C_i = function () {
		var t = new eui.Image();
		this.C = t;
		t.source = "page2_5_json.p2_5_text3_png";
		t.x = 363;
		t.y = 795;
		return t;
	};
	_proto.t_g_1_i = function () {
		var t = new eui.Image();
		this.t_g_1 = t;
		t.source = "page2_1_json.t_g_1_png";
		t.x = -8;
		t.y = -253;
		return t;
	};
	_proto.t_g_2_i = function () {
		var t = new eui.Image();
		this.t_g_2 = t;
		t.source = "page2_1_json.t_g_2_png";
		t.x = 565;
		t.y = 47;
		return t;
	};
	_proto.t_g_3_i = function () {
		var t = new eui.Image();
		this.t_g_3 = t;
		t.source = "page2_1_json.t_g_3_png";
		t.x = 475;
		t.y = 1026;
		return t;
	};
	_proto.t_g_4_i = function () {
		var t = new eui.Image();
		this.t_g_4 = t;
		t.source = "page2_1_json.t_g_4_png";
		t.x = -548;
		t.y = 187;
		return t;
	};
	_proto.A_group_i = function () {
		var t = new eui.Group();
		this.A_group = t;
		t.height = 200;
		t.touchEnabled = false;
		t.width = 200;
		t.x = 112;
		t.y = 365;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 120;
		t.source = "page2_1_json.t_g_1_png";
		t.touchEnabled = false;
		t.width = 100;
		t.x = -76;
		t.y = 7;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_2_png";
		t.touchEnabled = false;
		t.width = 277;
		t.x = -48;
		t.y = -26;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.source = "page2_1_json.t_g_3_png";
		t.touchEnabled = false;
		t.width = 109;
		t.x = 122;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_4_png";
		t.touchEnabled = false;
		t.width = 272;
		t.x = -33;
		t.y = 22;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_5_json.p2_5_text1_frame1_png";
		t.touchEnabled = false;
		t.width = 115;
		t.x = 161;
		t.y = 39;
		return t;
	};
	_proto.B_group_i = function () {
		var t = new eui.Group();
		this.B_group = t;
		t.height = 200;
		t.touchEnabled = false;
		t.width = 200;
		t.x = 50;
		t.y = 549;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 120;
		t.source = "page2_1_json.t_g_1_png";
		t.touchEnabled = false;
		t.width = 100;
		t.x = -71;
		t.y = 5;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_2_png";
		t.touchEnabled = false;
		t.width = 301;
		t.x = -58;
		t.y = -26;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.source = "page2_1_json.t_g_3_png";
		t.touchEnabled = false;
		t.width = 109;
		t.x = 122;
		t.y = -1;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_4_png";
		t.touchEnabled = false;
		t.width = 284;
		t.x = -36;
		t.y = 22;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "page2_5_json.p2_5_text2_frame1_png";
		t.touchEnabled = false;
		t.x = 155;
		t.y = 36;
		return t;
	};
	_proto.C_group_i = function () {
		var t = new eui.Group();
		this.C_group = t;
		t.height = 200;
		t.touchEnabled = false;
		t.width = 200;
		t.x = 401;
		t.y = 776;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 162;
		t.source = "page2_1_json.t_g_1_png";
		t.touchEnabled = false;
		t.width = 100;
		t.x = -80;
		t.y = -34;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_2_png";
		t.touchEnabled = false;
		t.width = 331;
		t.x = -80;
		t.y = -48;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 174;
		t.source = "page2_1_json.t_g_3_png";
		t.touchEnabled = false;
		t.width = 109;
		t.x = 136;
		t.y = -35;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_4_png";
		t.touchEnabled = false;
		t.width = 319;
		t.x = -54;
		t.y = 9;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_5_json.p2_5_text3_frame1_png";
		t.touchEnabled = false;
		t.width = 268;
		t.x = -199;
		t.y = 17;
		return t;
	};
	return A4Skin;
})(eui.Skin);generateEUI.paths['resource/myPage/Find.exml'] = window.FindSkin = (function (_super) {
	__extends(FindSkin, _super);
	function FindSkin() {
		_super.call(this);
		this.skinParts = ["dna_Big","title","jiqi","jiqi_Bg","bottomnima","dna","circle_","lunzi","dian","kaishijiemi","fish","quan","paopao","group"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.group_i()];
	}
	var _proto = FindSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1136;
		t.source = "bg1_jpg";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 568;
		t.height = 1136;
		t.width = 640;
		t.x = 320;
		t.y = 568;
		t.elementsContent = [this._Image2_i(),this.dna_Big_i(),this.title_i(),this._Image3_i(),this._Image4_i(),this.jiqi_i(),this.jiqi_Bg_i(),this.bottomnima_i(),this.dna_i(),this.circle__i(),this.lunzi_i(),this.dian_i(),this.kaishijiemi_i(),this.fish_i(),this.quan_i(),this.paopao_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg1_jpg";
		t.top = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.dna_Big_i = function () {
		var t = new eui.Image();
		this.dna_Big = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page_5_json.dna_png";
		t.x = 32;
		t.y = 61;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Image();
		this.title = t;
		t.anchorOffsetX = 212;
		t.anchorOffsetY = 58;
		t.height = 122;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page_6_json.p3_txt2_png";
		t.width = 429;
		t.x = 106;
		t.y = 134;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page_6_json.p3_txt3_png";
		t.width = 414;
		t.x = 113;
		t.y = 256;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page_6_json.p3_guan1_png";
		t.x = 0;
		t.y = 679;
		return t;
	};
	_proto.jiqi_i = function () {
		var t = new eui.Image();
		this.jiqi = t;
		t.anchorOffsetX = 323.33;
		t.anchorOffsetY = 199.33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page_6_json.p3_jq_png";
		t.x = 323.33;
		t.y = 570;
		return t;
	};
	_proto.jiqi_Bg_i = function () {
		var t = new eui.Image();
		this.jiqi_Bg = t;
		t.anchorOffsetX = 323.33;
		t.anchorOffsetY = 199.33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page_6_json.p3_guan2_png";
		t.visible = false;
		t.x = 455.33;
		t.y = 646;
		return t;
	};
	_proto.bottomnima_i = function () {
		var t = new eui.Image();
		this.bottomnima = t;
		t.anchorOffsetX = 324;
		t.anchorOffsetY = 98;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page_6_json.p3_bottom_png";
		return t;
	};
	_proto.dna_i = function () {
		var t = new eui.Image();
		this.dna = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page_6_json.dna1_0_png";
		t.x = 298;
		t.y = 553;
		return t;
	};
	_proto.circle__i = function () {
		var t = new eui.Image();
		this.circle_ = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page_6_json.circle1_0_png";
		t.x = 237;
		t.y = 975;
		return t;
	};
	_proto.lunzi_i = function () {
		var t = new eui.Image();
		this.lunzi = t;
		t.anchorOffsetX = 34.5;
		t.anchorOffsetY = 34.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page_6_json.p3_lun_png";
		t.x = 99;
		t.y = 529;
		return t;
	};
	_proto.dian_i = function () {
		var t = new eui.Image();
		this.dian = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page_6_json.p3_qui_png";
		t.x = 306;
		t.y = 990;
		return t;
	};
	_proto.kaishijiemi_i = function () {
		var t = new eui.Image();
		this.kaishijiemi = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page_6_json.p3_txt1_png";
		t.x = 250;
		t.y = 840;
		return t;
	};
	_proto.fish_i = function () {
		var t = new eui.Image();
		this.fish = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page_6_json.p3_yu_png";
		t.x = 89;
		t.y = 412;
		return t;
	};
	_proto.quan_i = function () {
		var t = new eui.Image();
		this.quan = t;
		t.anchorOffsetX = 115.5;
		t.anchorOffsetY = 115.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page_6_json.p3_quan_png";
		t.touchEnabled = true;
		t.x = 321.5;
		t.y = 1010.5;
		return t;
	};
	_proto.paopao_i = function () {
		var t = new eui.Image();
		this.paopao = t;
		t.source = "page_6_json.p3_len_png";
		t.visible = false;
		t.x = 175;
		t.y = 456;
		return t;
	};
	return FindSkin;
})(eui.Skin);generateEUI.paths['resource/myPage/Last.exml'] = window.LastSkin = (function (_super) {
	__extends(LastSkin, _super);
	function LastSkin() {
		_super.call(this);
		this.skinParts = ["bg","btn1","btn2","mask1"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.btn1_i(),this.btn2_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this.mask1_i()];
	}
	var _proto = LastSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.alpha = 1;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "p_bg_jpg";
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 248;
		t.anchorOffsetY = 256;
		t.source = "page_8_json.p_kuan_png";
		t.touchEnabled = false;
		t.x = 315;
		t.y = 545;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "page_8_json.p_lian_png";
		t.touchEnabled = false;
		t.x = 83;
		t.y = 332;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "page_8_json.p_txt_png";
		t.touchEnabled = false;
		t.x = 168;
		t.y = 269;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Image();
		this.btn1 = t;
		t.source = "page_7_json.p_btn_1_png";
		t.x = 84;
		t.y = 858;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Image();
		this.btn2 = t;
		t.source = "page_7_json.p_btn_2_png";
		t.x = 327;
		t.y = 858;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "page_7_json.p_x10_img1_png";
		t.x = 411;
		t.y = 1021;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "page_7_json.p_x10_img3_png";
		t.x = 507;
		t.y = 1030;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "page_7_json.p_x10_img2_png";
		t.x = 473;
		t.y = 958;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "page_7_json.p_x12_kuan_png";
		t.x = 212;
		t.y = 1052;
		return t;
	};
	_proto.mask1_i = function () {
		var t = new eui.Rect();
		this.mask1 = t;
		t.alpha = 0;
		t.anchorOffsetX = 245;
		t.anchorOffsetY = 218;
		t.ellipseHeight = 90;
		t.ellipseWidth = 90;
		t.height = 436;
		t.rotation = 90;
		t.width = 490;
		t.x = 314;
		t.y = 559;
		return t;
	};
	return LastSkin;
})(eui.Skin);generateEUI.paths['resource/myPage/page1.exml'] = window.page1Skin = (function (_super) {
	__extends(page1Skin, _super);
	function page1Skin() {
		_super.call(this);
		this.skinParts = ["star1","star2","light_1","icon1","icon2","dna","sanjiao1","guandao1","guandao2","guandao3","dianranBG","quanquan","littleHand","btn1_light1","btn1_light2","group","light","peopleBottom","circle","baojing","people","imgMask","p1","p2","p3","p4","p5","p6","three","t1","t2","t3","t4","t5","t6","t7","t8","zhe","dian","numa","txtGroup1","txtGroup4","saomiao","ranshao","ranshaoMask","shenzhun","yice","imgTest","imgTest_","page4_icon4","page4_Star","wendu_81","page4_icon5","page4_icon1","page4_icon2","page4_icon3","panel1"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.panel1_i()];
	}
	var _proto = page1Skin.prototype;

	_proto.panel1_i = function () {
		var t = new eui.Panel();
		this.panel1 = t;
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 568;
		t.height = 1136;
		t.width = 640;
		t.x = 320;
		t.y = 568;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.star1_i(),this.star2_i(),this.light_1_i(),this.icon1_i(),this.icon2_i(),this.dna_i(),this.sanjiao1_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this.guandao1_i(),this.guandao2_i(),this.guandao3_i(),this.group_i(),this.light_i(),this.circle_i(),this.baojing_i(),this.people_i(),this.imgMask_i(),this.p1_i(),this.p2_i(),this.p3_i(),this.p4_i(),this.p5_i(),this.p6_i(),this.three_i(),this.txtGroup1_i(),this.txtGroup4_i(),this._Image55_i(),this.saomiao_i(),this._Image56_i(),this.ranshao_i(),this.ranshaoMask_i(),this.shenzhun_i(),this.yice_i(),this.imgTest_i(),this.imgTest__i(),this.page4_icon4_i(),this.page4_Star_i(),this.wendu_81_i(),this.page4_icon5_i(),this.page4_icon1_i(),this.page4_icon2_i(),this._Image57_i(),this.page4_icon3_i(),this._Image58_i(),this._Image59_i(),this._Image60_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg3_jpg";
		t.top = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 1136;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg1_jpg";
		t.x = 0;
		t.y = -1136;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 1136;
		t.source = "bg1_jpg";
		t.x = 0;
		t.y = -2272;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 1136;
		t.source = "bg1_jpg";
		t.x = 0;
		t.y = -3408;
		return t;
	};
	_proto.star1_i = function () {
		var t = new eui.Image();
		this.star1 = t;
		t.source = "page1_2_json.p1_star1_png";
		t.x = 435.68;
		t.y = 1003.66;
		return t;
	};
	_proto.star2_i = function () {
		var t = new eui.Image();
		this.star2 = t;
		t.source = "page1_2_json.p1_star2_png";
		t.x = 58;
		t.y = 1136;
		return t;
	};
	_proto.light_1_i = function () {
		var t = new eui.Image();
		this.light_1 = t;
		t.anchorOffsetX = 8.33;
		t.anchorOffsetY = -0.17;
		t.height = 0;
		t.rotation = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_prop_light_1_png";
		t.width = 16;
		t.x = 323.99;
		t.y = 942.4899999999999;
		return t;
	};
	_proto.icon1_i = function () {
		var t = new eui.Image();
		this.icon1 = t;
		t.anchorOffsetX = 60.6;
		t.anchorOffsetY = 39.39;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_1_json.p1_icon1_1_png";
		t.x = 141.5;
		t.y = 845.88;
		return t;
	};
	_proto.icon2_i = function () {
		var t = new eui.Image();
		this.icon2 = t;
		t.alpha = 1;
		t.anchorOffsetX = 98.49;
		t.anchorOffsetY = 90.91;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_1_json.p1_icon1_20_png";
		t.x = 532.5;
		t.y = 292.56;
		return t;
	};
	_proto.dna_i = function () {
		var t = new eui.Image();
		this.dna = t;
		t.anchorOffsetX = 69.7;
		t.anchorOffsetY = 74.24;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_1_json.p1_icon1_21_png";
		t.x = 117.5;
		t.y = 286.56;
		return t;
	};
	_proto.sanjiao1_i = function () {
		var t = new eui.Image();
		this.sanjiao1 = t;
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 17.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_1_json.p1_icon1_13_png";
		t.x = 517.18;
		t.y = 109.03;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_1_json.p1_icon1_5_png";
		t.x = 518.5;
		t.y = 843;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_1_json.p1_icon1_17_png";
		t.x = 158;
		t.y = 88.00000000000001;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "page1_2_json.p1_num1_png";
		t.x = 415;
		t.y = 496.66;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "page1_2_json.p1_num2_png";
		t.x = 415;
		t.y = 360;
		return t;
	};
	_proto.guandao1_i = function () {
		var t = new eui.Image();
		this.guandao1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_1_json.p1_height_1_png";
		t.x = 286;
		t.y = -813;
		return t;
	};
	_proto.guandao2_i = function () {
		var t = new eui.Image();
		this.guandao2 = t;
		t.source = "page1_1_json.p1_height_2_png";
		t.x = 286;
		t.y = -2424.74;
		return t;
	};
	_proto.guandao3_i = function () {
		var t = new eui.Image();
		this.guandao3 = t;
		t.height = 802;
		t.source = "page1_1_json.p1_height_3_png";
		t.x = 286;
		t.y = -3203;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetX = 164;
		t.anchorOffsetY = 62;
		t.height = 138;
		t.width = 328;
		t.x = 330;
		t.y = 604;
		t.elementsContent = [this.dianranBG_i(),this.quanquan_i(),this._Image9_i(),this.littleHand_i(),this._Image10_i(),this._Image11_i(),this.btn1_light1_i(),this.btn1_light2_i()];
		return t;
	};
	_proto.dianranBG_i = function () {
		var t = new eui.Image();
		this.dianranBG = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_1_json.p1_btn1_png";
		t.x = -31.49999999999997;
		t.y = -11;
		return t;
	};
	_proto.quanquan_i = function () {
		var t = new eui.Image();
		this.quanquan = t;
		t.anchorOffsetX = 27;
		t.anchorOffsetY = 27;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_1_json.p1_btn1_text4_png";
		t.x = 36;
		t.y = 41;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_1_json.p1_btn1_text4_png";
		t.x = 10.000000000000028;
		t.y = 14;
		return t;
	};
	_proto.littleHand_i = function () {
		var t = new eui.Image();
		this.littleHand = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_1_json.p1_btn1_text3_png";
		t.x = 20.5;
		t.y = 37.000000000000114;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_1_json.p1_btn1_text2_png";
		t.x = 126;
		t.y = 23;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_1_json.p1_btn1_text1_png";
		t.x = 111.00000000000006;
		t.y = 34;
		return t;
	};
	_proto.btn1_light1_i = function () {
		var t = new eui.Image();
		this.btn1_light1 = t;
		t.source = "page1_1_json.p1_btn1_light1_png";
		t.touchEnabled = false;
		t.x = -585;
		t.y = -51;
		return t;
	};
	_proto.btn1_light2_i = function () {
		var t = new eui.Image();
		this.btn1_light2 = t;
		t.source = "page1_1_json.p1_btn1_light2_png";
		t.touchEnabled = false;
		t.x = 438;
		t.y = 50;
		return t;
	};
	_proto.light_i = function () {
		var t = new eui.Image();
		this.light = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_light_png";
		t.x = 274.59;
		t.y = 767.66;
		return t;
	};
	_proto.circle_i = function () {
		var t = new eui.Group();
		this.circle = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 220;
		t.y = -813;
		t.elementsContent = [this.peopleBottom_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i()];
		return t;
	};
	_proto.peopleBottom_i = function () {
		var t = new eui.Image();
		this.peopleBottom = t;
		t.anchorOffsetX = 67;
		t.anchorOffsetY = 66;
		t.horizontalCenter = 0;
		t.source = "circle_json.circle0_1_png";
		t.y = 80;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_11_png";
		t.x = 20;
		t.y = 65;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_13_png";
		t.x = 40;
		t.y = 13;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_14_png";
		t.x = 10;
		t.y = 53;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_15_png";
		t.x = 46;
		t.y = 21;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_16_png";
		t.x = 14;
		t.y = 37;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_17_png";
		t.x = -100;
		t.y = -120;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_18_png";
		t.x = -212;
		t.y = 35;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_2_png";
		t.x = 54;
		t.y = 11;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_3_png";
		t.x = 14;
		t.y = 35;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_4_png";
		t.x = 60;
		t.y = 15;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_5_png";
		t.x = 32;
		t.y = 37;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_6_png";
		t.x = 20;
		t.y = 13;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_7_png";
		t.x = 10;
		t.y = 31;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_8_png";
		t.x = 34;
		t.y = 21;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_9_png";
		t.x = 16;
		t.y = 21;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.source = "circle_json.circle0_bg_png";
		t.x = 46;
		t.y = 9;
		return t;
	};
	_proto.baojing_i = function () {
		var t = new eui.Image();
		this.baojing = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text1_png";
		t.x = 66;
		t.y = -513;
		return t;
	};
	_proto.people_i = function () {
		var t = new eui.Image();
		this.people = t;
		t.anchorOffsetY = 0;
		t.height = 660;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_prop1_png";
		t.visible = false;
		t.width = 640;
		t.x = 74;
		t.y = -1111;
		return t;
	};
	_proto.imgMask_i = function () {
		var t = new eui.Image();
		this.imgMask = t;
		t.height = 0;
		t.rotation = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_jpg";
		t.width = 493;
		t.x = 570;
		t.y = -495;
		return t;
	};
	_proto.p1_i = function () {
		var t = new eui.Image();
		this.p1 = t;
		t.alpha = 1;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "page1_2_json.p1_icon2_1_png";
		t.x = 77;
		t.y = -1171;
		return t;
	};
	_proto.p2_i = function () {
		var t = new eui.Image();
		this.p2 = t;
		t.alpha = 1;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "page1_2_json.p1_icon2_2_png";
		t.x = 454.5;
		t.y = -1159.5;
		return t;
	};
	_proto.p3_i = function () {
		var t = new eui.Image();
		this.p3 = t;
		t.alpha = 1;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "page1_2_json.p1_icon2_3_png";
		t.x = 27;
		t.y = -1274.18;
		return t;
	};
	_proto.p4_i = function () {
		var t = new eui.Image();
		this.p4 = t;
		t.alpha = 1;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "page1_2_json.p1_icon2_4_png";
		t.x = 435.68;
		t.y = -1294.18;
		return t;
	};
	_proto.p5_i = function () {
		var t = new eui.Image();
		this.p5 = t;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "page1_2_json.p1_icon2_5_png";
		t.x = 413.18;
		t.y = -1494;
		return t;
	};
	_proto.p6_i = function () {
		var t = new eui.Image();
		this.p6 = t;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "page1_2_json.p1_icon2_6_png";
		t.x = 18;
		t.y = -1509;
		return t;
	};
	_proto.three_i = function () {
		var t = new eui.Image();
		this.three = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_prop2_png";
		t.x = 0;
		t.y = -1828;
		return t;
	};
	_proto.txtGroup1_i = function () {
		var t = new eui.Group();
		this.txtGroup1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 27.27;
		t.y = -1681;
		t.elementsContent = [this.t1_i(),this.t2_i(),this.t3_i(),this.t4_i(),this.t5_i(),this.t6_i(),this.t7_i(),this.t8_i(),this.zhe_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Image32_i(),this._Image33_i(),this.dian_i(),this._Image34_i(),this._Image35_i(),this._Image36_i(),this.numa_i(),this._Image37_i(),this._Image38_i(),this._Image39_i(),this._Image40_i(),this._Image41_i(),this._Image42_i(),this._Image43_i(),this._Image44_i(),this._Image45_i(),this._Image46_i(),this._Image47_i(),this._Image48_i(),this._Image49_i(),this._Image50_i(),this._Image51_i(),this._Image52_i(),this._Image53_i(),this._Image54_i()];
		return t;
	};
	_proto.t1_i = function () {
		var t = new eui.Image();
		this.t1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_1_png";
		t.visible = false;
		t.x = 40;
		t.y = -100;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Image();
		this.t2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_2_png";
		t.visible = false;
		t.x = 60;
		t.y = -100;
		return t;
	};
	_proto.t3_i = function () {
		var t = new eui.Image();
		this.t3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_3_png";
		t.visible = false;
		t.x = 80;
		t.y = -100;
		return t;
	};
	_proto.t4_i = function () {
		var t = new eui.Image();
		this.t4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_4_png";
		t.visible = false;
		t.x = 100;
		t.y = -100;
		return t;
	};
	_proto.t5_i = function () {
		var t = new eui.Image();
		this.t5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_5_png";
		t.visible = false;
		t.x = 120;
		t.y = -100;
		return t;
	};
	_proto.t6_i = function () {
		var t = new eui.Image();
		this.t6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_6_png";
		t.visible = false;
		t.x = 140;
		t.y = -100;
		return t;
	};
	_proto.t7_i = function () {
		var t = new eui.Image();
		this.t7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_7_png";
		t.visible = false;
		t.x = 160;
		t.y = -100;
		return t;
	};
	_proto.t8_i = function () {
		var t = new eui.Image();
		this.t8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_8_png";
		t.visible = false;
		t.x = 180;
		t.y = -100;
		return t;
	};
	_proto.zhe_i = function () {
		var t = new eui.Image();
		this.zhe = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_9_png";
		t.visible = false;
		t.x = 40;
		t.y = -100;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_10_png";
		t.visible = false;
		t.x = 60;
		t.y = -100;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_11_png";
		t.visible = false;
		t.x = 80;
		t.y = -100;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_12_png";
		t.visible = false;
		t.x = 100;
		t.y = -100;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_13_png";
		t.visible = false;
		t.x = 119.99999999999999;
		t.y = -100;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_14_png";
		t.visible = false;
		t.x = 139.99999999999997;
		t.y = -100;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_15_png";
		t.visible = false;
		t.x = 159.99999999999997;
		t.y = -100;
		return t;
	};
	_proto.dian_i = function () {
		var t = new eui.Image();
		this.dian = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_16_png";
		t.visible = false;
		t.x = 92.73;
		t.y = -100;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_17_png";
		t.visible = false;
		t.x = 112.73;
		t.y = -100;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_18_png";
		t.visible = false;
		t.x = 132.73;
		t.y = -100;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_19_png";
		t.visible = false;
		t.x = 152.73;
		t.y = -100;
		return t;
	};
	_proto.numa_i = function () {
		var t = new eui.Image();
		this.numa = t;
		t.height = 103;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_1_png";
		t.visible = false;
		t.width = 446;
		t.x = 62;
		t.y = -526;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_2_png";
		t.visible = false;
		t.x = 62;
		t.y = -526;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_3_png";
		t.visible = false;
		t.x = 62;
		t.y = -526;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_4_png";
		t.visible = false;
		t.x = 62;
		t.y = -526;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_5_png";
		t.visible = false;
		t.x = 62;
		t.y = -526;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_6_png";
		t.visible = false;
		t.x = 62;
		t.y = -526;
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_7_png";
		t.visible = false;
		t.x = 62;
		t.y = -526;
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_8_png";
		t.visible = false;
		t.x = 62;
		t.y = -526;
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_9_png";
		t.visible = false;
		t.x = 62;
		t.y = -526;
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_10_png";
		t.visible = false;
		t.x = 66.73;
		t.y = -520;
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_11_png";
		t.visible = false;
		t.x = 66.73;
		t.y = -520;
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_12_png";
		t.visible = false;
		t.x = 66.73;
		t.y = -520;
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_13_png";
		t.visible = false;
		t.x = 66.73;
		t.y = -520;
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_14_png";
		t.visible = false;
		t.x = 68.73;
		t.y = -520;
		return t;
	};
	_proto._Image50_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_15_png";
		t.visible = false;
		t.x = 68.73;
		t.y = -520;
		return t;
	};
	_proto._Image51_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_16_png";
		t.visible = false;
		t.x = 69.73;
		t.y = -520;
		return t;
	};
	_proto._Image52_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_17_png";
		t.visible = false;
		t.width = 424;
		t.x = 86.73;
		t.y = -520;
		return t;
	};
	_proto._Image53_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_18_png";
		t.visible = false;
		t.x = 72.73;
		t.y = -520;
		return t;
	};
	_proto._Image54_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_19_png";
		t.visible = false;
		t.x = 73.73;
		t.y = -520;
		return t;
	};
	_proto.txtGroup4_i = function () {
		var t = new eui.Group();
		this.txtGroup4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62.79;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 640;
		t.x = 37.269999999999996;
		t.y = -2277;
		return t;
	};
	_proto._Image55_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_title1_png";
		t.x = 118;
		t.y = -3371.52;
		return t;
	};
	_proto.saomiao_i = function () {
		var t = new eui.Image();
		this.saomiao = t;
		t.anchorOffsetX = 113.33;
		t.anchorOffsetY = 166.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_light_1_png";
		t.x = 318;
		t.y = -3136;
		return t;
	};
	_proto._Image56_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_title2_png";
		t.x = 78;
		t.y = -3228;
		return t;
	};
	_proto.ranshao_i = function () {
		var t = new eui.Image();
		this.ranshao = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_title_png";
		t.x = 134;
		t.y = -3176;
		return t;
	};
	_proto.ranshaoMask_i = function () {
		var t = new eui.Image();
		this.ranshaoMask = t;
		t.anchorOffsetY = 0;
		t.height = 97.09;
		t.rotation = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_jpg";
		t.width = 39;
		t.x = 112.09;
		t.y = -3193.8;
		return t;
	};
	_proto.shenzhun_i = function () {
		var t = new eui.Image();
		this.shenzhun = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text4_1_png";
		t.x = -406.32;
		t.y = -2825.3;
		return t;
	};
	_proto.yice_i = function () {
		var t = new eui.Image();
		this.yice = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text4_2_png";
		t.x = 676.5;
		t.y = -2809.8;
		return t;
	};
	_proto.imgTest_i = function () {
		var t = new eui.Image();
		this.imgTest = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_1_json.p1_btn2_png";
		t.touchEnabled = false;
		t.x = 72;
		t.y = -2564.5;
		return t;
	};
	_proto.imgTest__i = function () {
		var t = new eui.Image();
		this.imgTest_ = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_1_json.p1_btn2_text_png";
		t.touchEnabled = false;
		t.x = 118;
		t.y = -2529;
		return t;
	};
	_proto.page4_icon4_i = function () {
		var t = new eui.Image();
		this.page4_icon4 = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 74;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "page1_1_json.p1_icon1_21_png";
		t.x = 525;
		t.y = -2409;
		return t;
	};
	_proto.page4_Star_i = function () {
		var t = new eui.Image();
		this.page4_Star = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_light1_png";
		t.x = 48;
		t.y = -3061;
		return t;
	};
	_proto.wendu_81_i = function () {
		var t = new eui.Image();
		this.wendu_81 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_num7_png";
		t.x = 658;
		t.y = -2906;
		return t;
	};
	_proto.page4_icon5_i = function () {
		var t = new eui.Image();
		this.page4_icon5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_1_json.p1_icon1_3_png";
		t.width = 54.79;
		t.x = 554;
		t.y = -3356;
		return t;
	};
	_proto.page4_icon1_i = function () {
		var t = new eui.Image();
		this.page4_icon1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_1_json.p1_icon1_10_png";
		t.x = 42;
		t.y = -3341;
		return t;
	};
	_proto.page4_icon2_i = function () {
		var t = new eui.Image();
		this.page4_icon2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_icon1_28_png";
		t.x = 17.27;
		t.y = -3040;
		return t;
	};
	_proto._Image57_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_num6_png";
		t.width = 87.3;
		t.x = 423;
		t.y = -2590;
		return t;
	};
	_proto.page4_icon3_i = function () {
		var t = new eui.Image();
		this.page4_icon3 = t;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "page1_2_json.p1_icon1_30_png";
		t.x = 50;
		t.y = -2310;
		return t;
	};
	_proto._Image58_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_num3_png";
		t.x = 431;
		t.y = -92;
		return t;
	};
	_proto._Image59_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_num4_png";
		t.x = 448;
		t.y = -648;
		return t;
	};
	_proto._Image60_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_num5_png";
		t.x = 428;
		t.y = -66;
		return t;
	};
	return page1Skin;
})(eui.Skin);generateEUI.paths['resource/myPage/page2.exml'] = window.page2Skin = (function (_super) {
	__extends(page2Skin, _super);
	function page2Skin() {
		_super.call(this);
		this.skinParts = ["lian_an","lian_liang","lianMask","star","wenzi","top_zhuan","t_g_1","t_g_2","t_g_3","t_g_4","s_imgGroup","bottomImg","A","B","C","A_group","B_group","C_group","D_group","lou1","lou2","Lou_group","icon6","icon1","icon2","icon3","icon4","icon5","icon_group"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.lian_an_i(),this.lian_liang_i(),this.lianMask_i(),this._Image2_i(),this.star_i(),this.wenzi_i(),this.top_zhuan_i(),this.t_g_1_i(),this.t_g_2_i(),this.t_g_3_i(),this.t_g_4_i(),this.s_imgGroup_i(),this.bottomImg_i(),this.A_i(),this.B_i(),this.C_i(),this.A_group_i(),this.B_group_i(),this.C_group_i(),this.D_group_i(),this.Lou_group_i(),this.icon_group_i()];
	}
	var _proto = page2Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1136;
		t.source = "bg_1_jpg";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lian_an_i = function () {
		var t = new eui.Image();
		this.lian_an = t;
		t.alpha = 0.6;
		t.source = "page2_1_json.p2_2_prop_png";
		t.x = 157;
		t.y = 392;
		return t;
	};
	_proto.lian_liang_i = function () {
		var t = new eui.Image();
		this.lian_liang = t;
		t.source = "page2_1_json.p2_2_prop_png";
		t.x = 157;
		t.y = 392;
		return t;
	};
	_proto.lianMask_i = function () {
		var t = new eui.Image();
		this.lianMask = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.source = "bg_jpg";
		t.width = 326;
		t.x = 157;
		t.y = 835;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.p2_2_prop_line_png";
		t.x = 157;
		t.y = 392;
		return t;
	};
	_proto.star_i = function () {
		var t = new eui.Image();
		this.star = t;
		t.source = "page2_1_json.p2_2_prop_light_png";
		t.x = 73;
		t.y = 411;
		return t;
	};
	_proto.wenzi_i = function () {
		var t = new eui.Image();
		this.wenzi = t;
		t.anchorOffsetX = 260;
		t.anchorOffsetY = 49;
		t.source = "page2_1_json.p2_2_title_png";
		t.x = 320;
		t.y = 231;
		return t;
	};
	_proto.top_zhuan_i = function () {
		var t = new eui.Image();
		this.top_zhuan = t;
		t.anchorOffsetX = 331;
		t.anchorOffsetY = 237;
		t.source = "page2_1_json.top_zhuan_png";
		t.x = 644;
		t.y = -4;
		return t;
	};
	_proto.t_g_1_i = function () {
		var t = new eui.Image();
		this.t_g_1 = t;
		t.source = "page2_1_json.t_g_1_png";
		t.x = -23;
		t.y = -246;
		return t;
	};
	_proto.t_g_2_i = function () {
		var t = new eui.Image();
		this.t_g_2 = t;
		t.source = "page2_1_json.t_g_2_png";
		t.x = 548;
		t.y = 91;
		return t;
	};
	_proto.t_g_3_i = function () {
		var t = new eui.Image();
		this.t_g_3 = t;
		t.source = "page2_1_json.t_g_3_png";
		t.x = 501;
		t.y = 921;
		return t;
	};
	_proto.t_g_4_i = function () {
		var t = new eui.Image();
		this.t_g_4 = t;
		t.source = "page2_1_json.t_g_4_png";
		t.x = -487;
		t.y = 236;
		return t;
	};
	_proto.s_imgGroup_i = function () {
		var t = new eui.Group();
		this.s_imgGroup = t;
		t.height = 200;
		t.width = 200;
		t.x = 100;
		t.y = 384;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.s1_img_1_png";
		t.x = -12;
		t.y = 151;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.s1_img_2_png";
		t.x = -8;
		t.y = 195;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.s1_img_3_png";
		t.x = 17;
		t.y = 189;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.s1_img_4_png";
		t.x = 1;
		t.y = 92;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.s1_img_5_png";
		t.x = -12;
		t.y = 57;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.s1_img_6_png";
		t.x = 36;
		t.y = 126;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.s1_img_7_png";
		t.x = 22;
		t.y = 24;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.s2_img_1_png";
		t.x = 410;
		t.y = 12;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.s2_img_2_png";
		t.x = 426;
		t.y = 110;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.s2_img_3_png";
		t.x = 408;
		t.y = 164;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.s2_img_4_png";
		t.x = 410;
		t.y = 77;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.s2_img_5_png";
		t.x = 2;
		t.y = 234;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.s2_img_6_png";
		t.x = 468;
		t.y = 113;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.s2_img_7_png";
		t.x = 473;
		t.y = 164;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.s3_img_1_png";
		t.x = 440;
		t.y = -1;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.s3_img_2_png";
		t.x = 292;
		t.y = 400;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.s3_img_3_png";
		t.x = 331;
		t.y = 380;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.s3_img_4_png";
		t.x = 399;
		t.y = 294;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.s3_img_5_png";
		t.x = -26;
		t.y = 132;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.s3_img_6_png";
		t.x = 436;
		t.y = 38;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.s3_img_7_png";
		t.x = 448;
		t.y = 214;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.s3_img_8_png";
		t.x = 399;
		t.y = 294;
		return t;
	};
	_proto.bottomImg_i = function () {
		var t = new eui.Image();
		this.bottomImg = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.t_bottom_png";
		t.y = 765;
		return t;
	};
	_proto.A_i = function () {
		var t = new eui.Image();
		this.A = t;
		t.anchorOffsetX = 97;
		t.anchorOffsetY = 30.5;
		t.source = "page2_1_json.p2_2_text1_png";
		t.touchEnabled = true;
		t.x = 488;
		t.y = 345;
		return t;
	};
	_proto.B_i = function () {
		var t = new eui.Image();
		this.B = t;
		t.anchorOffsetX = 106.06;
		t.anchorOffsetY = 28.79;
		t.source = "page2_1_json.p2_2_text2_png";
		t.touchEnabled = true;
		t.x = 156.06;
		t.y = 864.79;
		return t;
	};
	_proto.C_i = function () {
		var t = new eui.Image();
		this.C = t;
		t.anchorOffsetX = 98.48;
		t.anchorOffsetY = 27.27;
		t.source = "page2_1_json.p2_2_text3_png";
		t.touchEnabled = true;
		t.x = 495.48;
		t.y = 881.27;
		return t;
	};
	_proto.A_group_i = function () {
		var t = new eui.Group();
		this.A_group = t;
		t.height = 200;
		t.touchEnabled = false;
		t.width = 200;
		t.x = 388;
		t.y = 280;
		t.elementsContent = [this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i()];
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.height = 120;
		t.source = "page2_1_json.t_g_1_png";
		t.touchEnabled = false;
		t.width = 100;
		t.x = -42;
		t.y = -3;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_2_png";
		t.touchEnabled = false;
		t.width = 240;
		t.x = -23;
		t.y = -26;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.source = "page2_1_json.t_g_3_png";
		t.touchEnabled = false;
		t.width = 109;
		t.x = 122;
		t.y = 8;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_4_png";
		t.touchEnabled = false;
		t.width = 240;
		t.x = -5;
		t.y = 22;
		return t;
	};
	_proto.B_group_i = function () {
		var t = new eui.Group();
		this.B_group = t;
		t.height = 200;
		t.touchEnabled = false;
		t.width = 200;
		t.x = 56;
		t.y = 799;
		t.elementsContent = [this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Image32_i()];
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.height = 120;
		t.source = "page2_1_json.t_g_1_png";
		t.touchEnabled = false;
		t.width = 100;
		t.x = -42;
		t.y = -3;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_2_png";
		t.touchEnabled = false;
		t.width = 240;
		t.x = -23;
		t.y = -26;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.source = "page2_1_json.t_g_3_png";
		t.touchEnabled = false;
		t.width = 109;
		t.x = 122;
		t.y = 8;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_4_png";
		t.touchEnabled = false;
		t.width = 240;
		t.x = -5;
		t.y = 22;
		return t;
	};
	_proto.C_group_i = function () {
		var t = new eui.Group();
		this.C_group = t;
		t.height = 200;
		t.touchEnabled = false;
		t.width = 200;
		t.x = 399;
		t.y = 816;
		t.elementsContent = [this._Image33_i(),this._Image34_i(),this._Image35_i(),this._Image36_i()];
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.height = 120;
		t.source = "page2_1_json.t_g_1_png";
		t.touchEnabled = false;
		t.width = 100;
		t.x = -42;
		t.y = -3;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_2_png";
		t.touchEnabled = false;
		t.width = 240;
		t.x = -23;
		t.y = -26;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.height = 137;
		t.source = "page2_1_json.t_g_3_png";
		t.touchEnabled = false;
		t.width = 109;
		t.x = 122;
		t.y = 8;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.source = "page2_1_json.t_g_4_png";
		t.touchEnabled = false;
		t.width = 240;
		t.x = -5;
		t.y = 22;
		return t;
	};
	_proto.D_group_i = function () {
		var t = new eui.Group();
		this.D_group = t;
		t.height = 200;
		t.touchEnabled = false;
		t.width = 200;
		t.x = 409;
		t.y = 826;
		t.elementsContent = [this._Image37_i(),this._Image38_i(),this._Image39_i(),this._Image40_i()];
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.height = 99;
		t.rotation = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.t_g_1_png";
		t.width = 50;
		t.x = -101;
		t.y = -38;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.t_g_2_png";
		t.width = 102;
		t.x = -182;
		t.y = -5;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.height = 99;
		t.rotation = -20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.t_g_1_png";
		t.width = 50;
		t.x = -111;
		t.y = -10;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.t_g_2_png";
		t.width = 87;
		t.x = -73;
		t.y = 11;
		return t;
	};
	_proto.Lou_group_i = function () {
		var t = new eui.Group();
		this.Lou_group = t;
		t.height = 200;
		t.touchEnabled = false;
		t.width = 200;
		t.x = 419;
		t.y = 836;
		t.elementsContent = [this.lou1_i(),this.lou2_i()];
		return t;
	};
	_proto.lou1_i = function () {
		var t = new eui.Image();
		this.lou1 = t;
		t.height = 142;
		t.rotation = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.t_g_1_png";
		t.width = 50;
		t.x = -95;
		t.y = -541;
		return t;
	};
	_proto.lou2_i = function () {
		var t = new eui.Image();
		this.lou2 = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.t_g_2_png";
		t.width = 102;
		t.x = -105;
		t.y = -539;
		return t;
	};
	_proto.icon_group_i = function () {
		var t = new eui.Group();
		this.icon_group = t;
		t.height = 376;
		t.width = 304;
		t.x = 159;
		t.y = 426;
		t.elementsContent = [this.icon6_i(),this.icon1_i(),this.icon2_i(),this.icon3_i(),this.icon4_i(),this.icon5_i()];
		return t;
	};
	_proto.icon6_i = function () {
		var t = new eui.Image();
		this.icon6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.p2_2_prop_icon6_png";
		t.x = 353;
		t.y = -231;
		return t;
	};
	_proto.icon1_i = function () {
		var t = new eui.Image();
		this.icon1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.p2_2_prop_icon1_png";
		t.x = 505;
		t.y = -210;
		return t;
	};
	_proto.icon2_i = function () {
		var t = new eui.Image();
		this.icon2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.p2_2_prop_icon2_png";
		t.x = 353;
		t.y = -231;
		return t;
	};
	_proto.icon3_i = function () {
		var t = new eui.Image();
		this.icon3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.p2_2_prop_icon3_png";
		t.x = -480;
		t.y = 110;
		return t;
	};
	_proto.icon4_i = function () {
		var t = new eui.Image();
		this.icon4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.p2_2_prop_icon4_png";
		t.x = -480;
		t.y = 110;
		return t;
	};
	_proto.icon5_i = function () {
		var t = new eui.Image();
		this.icon5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page2_1_json.p2_2_prop_icon5_png";
		t.x = -480;
		t.y = 110;
		return t;
	};
	return page2Skin;
})(eui.Skin);