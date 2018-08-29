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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","page1":"resource/myPage/page1.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/myPage/page1.exml'] = window.page1Skin = (function (_super) {
	__extends(page1Skin, _super);
	function page1Skin() {
		_super.call(this);
		this.skinParts = ["star1","star2","light_1","icon1","icon2","dna","sanjiao1","guandao1","guandao2","guandao3","quanquan","littleHand","btn1_light1","btn1_light2","group","light","circle1","circle","baojing","people","imgMask","p1","p2","p3","p4","three","t1","t2","t3","t4","t5","t6","t7","t8","txtGroup1","zhe","txtGroup2","dian","txtGroup3","numa","txtGroup4","txtMask1","txtMask2","txtMask3","saomiao","ranshao","ranshaoMask","shenzhun","yice","imgTest","imgTest_","page4_icon4","page4_Star","wendu_81","page4_icon5","page4_icon1","page4_icon2","page4_icon3","panel1"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.panel1_i()];
	}
	var _proto = page1Skin.prototype;

	_proto.panel1_i = function () {
		var t = new eui.Panel();
		this.panel1 = t;
		t.height = 1136;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.star1_i(),this.star2_i(),this.light_1_i(),this.icon1_i(),this.icon2_i(),this.dna_i(),this.sanjiao1_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this.guandao1_i(),this.guandao2_i(),this.guandao3_i(),this.group_i(),this.light_i(),this.circle_i(),this.baojing_i(),this.people_i(),this.imgMask_i(),this.p1_i(),this.p2_i(),this.p3_i(),this.p4_i(),this.three_i(),this.txtGroup1_i(),this.txtGroup2_i(),this.txtGroup3_i(),this.txtGroup4_i(),this.txtMask1_i(),this.txtMask2_i(),this.txtMask3_i(),this._Image44_i(),this.saomiao_i(),this._Image45_i(),this.ranshao_i(),this.ranshaoMask_i(),this.shenzhun_i(),this.yice_i(),this.imgTest_i(),this.imgTest__i(),this.page4_icon4_i(),this.page4_Star_i(),this.wendu_81_i(),this.page4_icon5_i(),this.page4_icon1_i(),this.page4_icon2_i(),this._Image46_i(),this.page4_icon3_i()];
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
		t.x = 743.5;
		t.y = 466.56;
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
		t.source = "page1_1_json.p1_height_3_png";
		t.x = 286;
		t.y = -3734;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.width = 328;
		t.x = 166;
		t.y = 542;
		t.elementsContent = [this._Image9_i(),this.quanquan_i(),this._Image10_i(),this.littleHand_i(),this._Image11_i(),this._Image12_i(),this.btn1_light1_i(),this.btn1_light2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
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
	_proto._Image10_i = function () {
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
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_1_json.p1_btn1_text2_png";
		t.x = 126;
		t.y = 23;
		return t;
	};
	_proto._Image12_i = function () {
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
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this.circle1_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "circle_json.circle0_bg_png";
		t.x = -216;
		t.y = 46;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 182;
		t.anchorOffsetY = 182;
		t.skewX = 80;
		t.skewY = 10;
		t.source = "circle_json.circle0_13_png";
		t.x = 93.82;
		t.y = 225.85;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "circle_json.circle0_1_png";
		t.visible = false;
		t.x = -140;
		t.y = 33;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "circle_json.circle0_17_png";
		t.visible = false;
		t.x = -105.32000000000001;
		t.y = 1136;
		return t;
	};
	_proto.circle1_i = function () {
		var t = new eui.Image();
		this.circle1 = t;
		t.anchorOffsetX = 315;
		t.anchorOffsetY = 315;
		t.height = 500;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skewX = 80;
		t.skewY = 10;
		t.smoothing = true;
		t.source = "circle_json.circle0_18_png";
		t.width = 500;
		t.x = 100;
		t.y = 251;
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
	_proto.three_i = function () {
		var t = new eui.Image();
		this.three = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_prop2_png";
		t.x = 0;
		t.y = -1817;
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
		t.elementsContent = [this.t1_i(),this.t2_i(),this.t3_i(),this.t4_i(),this.t5_i(),this.t6_i(),this.t7_i(),this.t8_i()];
		return t;
	};
	_proto.t1_i = function () {
		var t = new eui.Image();
		this.t1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_1_png";
		t.x = 40;
		t.y = 9;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Image();
		this.t2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_2_png";
		t.x = 60;
		t.y = 9;
		return t;
	};
	_proto.t3_i = function () {
		var t = new eui.Image();
		this.t3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_3_png";
		t.x = 80;
		t.y = 9;
		return t;
	};
	_proto.t4_i = function () {
		var t = new eui.Image();
		this.t4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_4_png";
		t.x = 100;
		t.y = 9;
		return t;
	};
	_proto.t5_i = function () {
		var t = new eui.Image();
		this.t5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_5_png";
		t.x = 120;
		t.y = 9;
		return t;
	};
	_proto.t6_i = function () {
		var t = new eui.Image();
		this.t6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_6_png";
		t.x = 140;
		t.y = 9;
		return t;
	};
	_proto.t7_i = function () {
		var t = new eui.Image();
		this.t7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_7_png";
		t.x = 160;
		t.y = 9;
		return t;
	};
	_proto.t8_i = function () {
		var t = new eui.Image();
		this.t8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_8_png";
		t.x = 180;
		t.y = 9;
		return t;
	};
	_proto.txtGroup2_i = function () {
		var t = new eui.Group();
		this.txtGroup2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 37.269999999999996;
		t.y = -1617;
		t.elementsContent = [this.zhe_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i()];
		return t;
	};
	_proto.zhe_i = function () {
		var t = new eui.Image();
		this.zhe = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_9_png";
		t.x = 30;
		t.y = -45;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_10_png";
		t.x = 50;
		t.y = -45;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_11_png";
		t.x = 70;
		t.y = -45;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_12_png";
		t.x = 90;
		t.y = -45;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_13_png";
		t.x = 110;
		t.y = -45;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_14_png";
		t.x = 130;
		t.y = -45;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_15_png";
		t.x = 150;
		t.y = -45;
		return t;
	};
	_proto.txtGroup3_i = function () {
		var t = new eui.Group();
		this.txtGroup3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 37.269999999999996;
		t.y = -1550;
		t.elementsContent = [this.dian_i(),this._Image23_i(),this._Image24_i(),this._Image25_i()];
		return t;
	};
	_proto.dian_i = function () {
		var t = new eui.Image();
		this.dian = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_16_png";
		t.x = 82.73;
		t.y = -104;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_17_png";
		t.x = 102.73;
		t.y = -104;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_18_png";
		t.x = 122.73;
		t.y = -104;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text2_19_png";
		t.x = 142.73000000000002;
		t.y = -104;
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
		t.width = 640;
		t.x = 37.269999999999996;
		t.y = -2277;
		t.elementsContent = [this.numa_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Image35_i(),this._Image36_i(),this._Image37_i(),this._Image38_i(),this._Image39_i(),this._Image40_i(),this._Image41_i(),this._Image42_i(),this._Image43_i()];
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
		t.x = 52;
		t.y = 70;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_2_png";
		t.visible = false;
		t.x = 52;
		t.y = 70;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_3_png";
		t.visible = false;
		t.x = 52;
		t.y = 70;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_4_png";
		t.visible = false;
		t.x = 52;
		t.y = 70;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_5_png";
		t.visible = false;
		t.x = 52;
		t.y = 70;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_6_png";
		t.visible = false;
		t.x = 52;
		t.y = 70;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_7_png";
		t.visible = false;
		t.x = 52;
		t.y = 70;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_8_png";
		t.visible = false;
		t.x = 52;
		t.y = 70;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_9_png";
		t.visible = false;
		t.x = 52;
		t.y = 70;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_10_png";
		t.visible = false;
		t.x = 56.73;
		t.y = 76;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_11_png";
		t.visible = false;
		t.x = 56.73;
		t.y = 76;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_12_png";
		t.visible = false;
		t.x = 56.73;
		t.y = 76;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_13_png";
		t.visible = false;
		t.x = 56.73;
		t.y = 76;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_14_png";
		t.visible = false;
		t.x = 58.73;
		t.y = 76;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_15_png";
		t.visible = false;
		t.x = 58.73;
		t.y = 76;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_16_png";
		t.visible = false;
		t.x = 59.73;
		t.y = 76;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_17_png";
		t.visible = false;
		t.width = 424;
		t.x = 76.73;
		t.y = 76;
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_18_png";
		t.visible = false;
		t.x = 62.73;
		t.y = 76;
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_text3_19_png";
		t.visible = false;
		t.x = 63.73;
		t.y = 76;
		return t;
	};
	_proto.txtMask1_i = function () {
		var t = new eui.Image();
		this.txtMask1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.source = "bg_jpg";
		t.visible = false;
		t.width = 640;
		t.x = -640;
		t.y = -1690;
		return t;
	};
	_proto.txtMask2_i = function () {
		var t = new eui.Image();
		this.txtMask2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.source = "bg_jpg";
		t.visible = false;
		t.width = 640;
		t.x = -640;
		t.y = -1644;
		return t;
	};
	_proto.txtMask3_i = function () {
		var t = new eui.Image();
		this.txtMask3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.source = "bg_jpg";
		t.visible = false;
		t.width = 640;
		t.x = -640;
		t.y = -1562;
		return t;
	};
	_proto._Image44_i = function () {
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
	_proto._Image45_i = function () {
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
		t.scaleX = 1;
		t.scaleY = 1;
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
	_proto._Image46_i = function () {
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
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "page1_2_json.p1_icon1_30_png";
		t.x = 50;
		t.y = -2310;
		return t;
	};
	return page1Skin;
})(eui.Skin);