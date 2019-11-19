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
generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","Login":"resource/mySkins/Login.exml","Lobby":"resource/mySkins/Lobby.exml","match":"resource/mySkins/match.exml","ErrorNote":"resource/screen/ErrorNote.exml","ReconnectUI":"resource/screen/ReconnectUI.exml"}
generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/screen/ErrorNote.exml'] = window.ErrorNoteSkin = (function (_super) {
	__extends(ErrorNoteSkin, _super);
	function ErrorNoteSkin() {
		_super.call(this);
		this.skinParts = ["lab_userID","lab_title","btn_reconnect","btn_return"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.btn_reconnect_i(),this.btn_return_i()];
	}
	var _proto = ErrorNoteSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillMode = "scale";
		t.left = 0;
		t.right = 0;
		t.source = "bg0_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.right = 0;
		t.y = 56;
		t.elementsContent = [this.lab_userID_i(),this.lab_title_i()];
		return t;
	};
	_proto.lab_userID_i = function () {
		var t = new eui.Label();
		this.lab_userID = t;
		t.size = 24;
		t.text = "用户ID：";
		t.textAlign = "left";
		t.textColor = 0x999999;
		t.verticalAlign = "middle";
		t.width = 178;
		t.x = 812;
		t.y = 13;
		return t;
	};
	_proto.lab_title_i = function () {
		var t = new eui.Label();
		this.lab_title = t;
		t.height = 50;
		t.size = 36;
		t.text = "错误";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.x = 49;
		t.y = 0;
		return t;
	};
	_proto.btn_reconnect_i = function () {
		var t = new eui.Button();
		this.btn_reconnect = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.label = "重连";
		t.scaleX = 2;
		t.scaleY = 2;
		t.verticalCenter = 0;
		t.width = 240;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.label = "重连到房间";
		t.scaleX = 2;
		t.scaleY = 2;
		t.skinName = "skins.ButtonSkin";
		t.verticalCenter = 0;
		t.width = 240;
		return t;
	};
	return ErrorNoteSkin;
})(eui.Skin);generateEUI.paths['resource/screen/ReconnectUI.exml'] = window.ReconnectUISkin = (function (_super) {
	__extends(ReconnectUISkin, _super);
	function ReconnectUISkin() {
		_super.call(this);
		this.skinParts = ["btn_return","lab_title0","lab_note"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Rect1_i(),this.lab_note_i()];
	}
	var _proto = ReconnectUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillMode = "scale";
		t.left = 0;
		t.right = 0;
		t.source = "bg0_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 56;
		t.elementsContent = [this.btn_return_i(),this.lab_title0_i()];
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.label = "";
		t.width = 250;
		t.x = 0;
		t.y = 9;
		return t;
	};
	_proto.lab_title0_i = function () {
		var t = new eui.Label();
		this.lab_title0 = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "断线重连";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillAlpha = 0.2;
		t.fillColor = 0x545454;
		t.height = 50;
		t.horizontalCenter = 0;
		t.strokeColor = 0x545454;
		t.strokeWeight = 2;
		t.width = 540;
		t.y = 334.57;
		return t;
	};
	_proto.lab_note_i = function () {
		var t = new eui.Label();
		this.lab_note = t;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "重连中...";
		t.textAlign = "center";
		t.textColor = 0x00c1e0;
		t.width = 200;
		t.y = 348;
		return t;
	};
	return ReconnectUISkin;
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
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text")
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
})(eui.Skin);generateEUI.paths['resource/mySkins/GameResultSkin.exml'] = window.GameResultSkin = (function (_super) {
	__extends(GameResultSkin, _super);
	var GameResultSkin$Skin1 = 	(function (_super) {
		__extends(GameResultSkin$Skin1, _super);
		function GameResultSkin$Skin1() {
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
						new eui.SetProperty("_Image1","source","btnCancel_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameResultSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btnCancel_png";
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
		return GameResultSkin$Skin1;
	})(eui.Skin);

	var GameResultSkin$Skin2 = 	(function (_super) {
		__extends(GameResultSkin$Skin2, _super);
		function GameResultSkin$Skin2() {
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
						new eui.SetProperty("_Image1","source","again_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameResultSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "again_png";
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
		return GameResultSkin$Skin2;
	})(eui.Skin);

	function GameResultSkin() {
		_super.call(this);
		this.skinParts = ["alphaRect1","img_result1","gp_people1","lab_otherName","group_result1","img_result2","gp_people2","lab_myName","group_flower","group_result2","gp_particle","gp_wenzi","group_selected","btn_leave","btn_again","group_btns"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.alphaRect1_i(),this._Image1_i(),this._Group1_i(),this.gp_wenzi_i(),this.group_selected_i(),this.group_btns_i()];
	}
	var _proto = GameResultSkin.prototype;

	_proto.alphaRect1_i = function () {
		var t = new eui.Rect();
		this.alphaRect1 = t;
		t.alpha = 0.6;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 3000;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 3000;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiesuanBG_png";
		t.verticalCenter = "-21%";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = "-15%";
		t.elementsContent = [this.group_result1_i(),this.group_result2_i(),this.gp_particle_i()];
		return t;
	};
	_proto.group_result1_i = function () {
		var t = new eui.Group();
		this.group_result1 = t;
		t.verticalCenter = -29.5;
		t.x = 10;
		t.elementsContent = [this.img_result1_i(),this.gp_people1_i(),this.lab_otherName_i()];
		return t;
	};
	_proto.img_result1_i = function () {
		var t = new eui.Image();
		this.img_result1 = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gp_people1_i = function () {
		var t = new eui.Group();
		this.gp_people1 = t;
		t.height = 200;
		t.width = 490;
		t.x = 117;
		t.y = 203;
		return t;
	};
	_proto.lab_otherName_i = function () {
		var t = new eui.Label();
		this.lab_otherName = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "对手";
		t.width = 672.73;
		t.x = 30;
		t.y = 10;
		return t;
	};
	_proto.group_result2_i = function () {
		var t = new eui.Group();
		this.group_result2 = t;
		t.x = 807.72;
		t.y = 0.91;
		t.elementsContent = [this.img_result2_i(),this.gp_people2_i(),this.lab_myName_i(),this.group_flower_i()];
		return t;
	};
	_proto.img_result2_i = function () {
		var t = new eui.Image();
		this.img_result2 = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gp_people2_i = function () {
		var t = new eui.Group();
		this.gp_people2 = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 490;
		t.x = 117;
		t.y = 203;
		return t;
	};
	_proto.lab_myName_i = function () {
		var t = new eui.Label();
		this.lab_myName = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "我";
		t.width = 679.58;
		t.x = 30;
		t.y = 10;
		return t;
	};
	_proto.group_flower_i = function () {
		var t = new eui.Group();
		this.group_flower = t;
		t.height = 200;
		t.horizontalCenter = -170;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 200;
		t.x = -702.7200000000001;
		t.y = 128.09;
		return t;
	};
	_proto.gp_particle_i = function () {
		var t = new eui.Group();
		this.gp_particle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 558;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1575.39;
		t.x = -31;
		t.y = -41;
		return t;
	};
	_proto.gp_wenzi_i = function () {
		var t = new eui.Group();
		this.gp_wenzi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 539.39;
		t.horizontalCenter = 0;
		t.verticalCenter = -20.5;
		t.width = 1578.79;
		return t;
	};
	_proto.group_selected_i = function () {
		var t = new eui.Group();
		this.group_selected = t;
		t.anchorOffsetX = 0;
		t.bottom = "8.5%";
		t.height = 159;
		t.horizontalCenter = 0;
		t.width = 576;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xFFFFFF;
		t.height = 155;
		t.visible = false;
		t.width = 155;
		t.x = -5;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xFFFFFF;
		t.height = 155;
		t.visible = false;
		t.width = 310;
		t.x = 272;
		t.y = 0;
		return t;
	};
	_proto.group_btns_i = function () {
		var t = new eui.Group();
		this.group_btns = t;
		t.bottom = "8%";
		t.horizontalCenter = 0;
		t.elementsContent = [this.btn_leave_i(),this.btn_again_i()];
		return t;
	};
	_proto.btn_leave_i = function () {
		var t = new eui.Button();
		this.btn_leave = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = GameResultSkin$Skin1;
		return t;
	};
	_proto.btn_again_i = function () {
		var t = new eui.Button();
		this.btn_again = t;
		t.label = "";
		t.x = 279;
		t.y = 0;
		t.skinName = GameResultSkin$Skin2;
		return t;
	};
	return GameResultSkin;
})(eui.Skin);generateEUI.paths['resource/mySkins/GameSureLeaveSkin.exml'] = window.GameSureLeaveSkin = (function (_super) {
	__extends(GameSureLeaveSkin, _super);
	var GameSureLeaveSkin$Skin3 = 	(function (_super) {
		__extends(GameSureLeaveSkin$Skin3, _super);
		function GameSureLeaveSkin$Skin3() {
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
						new eui.SetProperty("_Image1","source","btn_cancel1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSureLeaveSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_cancel1_png";
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
		return GameSureLeaveSkin$Skin3;
	})(eui.Skin);

	var GameSureLeaveSkin$Skin4 = 	(function (_super) {
		__extends(GameSureLeaveSkin$Skin4, _super);
		function GameSureLeaveSkin$Skin4() {
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
						new eui.SetProperty("_Image1","source","btn_sure_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSureLeaveSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_sure_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "SimHei";
			t.horizontalCenter = 3;
			t.size = 32;
			t.verticalCenter = -5;
			return t;
		};
		return GameSureLeaveSkin$Skin4;
	})(eui.Skin);

	function GameSureLeaveSkin() {
		_super.call(this);
		this.skinParts = ["rect_cancel","btn_cancel","rect_sure","btn_sure"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = GameSureLeaveSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 261;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 442;
		t.elementsContent = [this._Image1_i(),this.rect_cancel_i(),this.btn_cancel_i(),this.rect_sure_i(),this.btn_sure_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_exit_png";
		t.verticalCenter = 0;
		t.x = 444;
		t.y = -307.00000000000006;
		return t;
	};
	_proto.rect_cancel_i = function () {
		var t = new eui.Rect();
		this.rect_cancel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 80;
		t.ellipseWidth = 80;
		t.fillColor = 0xffffff;
		t.height = 78;
		t.width = 190;
		t.x = 25.44;
		t.y = 132.02;
		return t;
	};
	_proto.btn_cancel_i = function () {
		var t = new AnimationButton();
		this.btn_cancel = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 35;
		t.label = "";
		t.x = 120;
		t.y = 172;
		t.skinName = GameSureLeaveSkin$Skin3;
		return t;
	};
	_proto.rect_sure_i = function () {
		var t = new eui.Rect();
		this.rect_sure = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 80;
		t.ellipseWidth = 80;
		t.fillColor = 0xFFFFFF;
		t.height = 78;
		t.visible = false;
		t.width = 190;
		t.x = 226.92;
		t.y = 131.5;
		return t;
	};
	_proto.btn_sure_i = function () {
		var t = new AnimationButton();
		this.btn_sure = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 35;
		t.label = "确定";
		t.x = 322;
		t.y = 172;
		t.skinName = GameSureLeaveSkin$Skin4;
		return t;
	};
	return GameSureLeaveSkin;
})(eui.Skin);generateEUI.paths['resource/mySkins/Lobby.exml'] = window.LobbySkin = (function (_super) {
	__extends(LobbySkin, _super);
	var LobbySkin$Skin5 = 	(function (_super) {
		__extends(LobbySkin$Skin5, _super);
		function LobbySkin$Skin5() {
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
						new eui.SetProperty("_Image1","source","pipeiduizhan_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LobbySkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pipeiduizhan_png";
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
		return LobbySkin$Skin5;
	})(eui.Skin);

	var LobbySkin$Skin6 = 	(function (_super) {
		__extends(LobbySkin$Skin6, _super);
		function LobbySkin$Skin6() {
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
						new eui.SetProperty("_Image1","source","paiweiduizhan_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LobbySkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "paiweiduizhan_png";
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
		return LobbySkin$Skin6;
	})(eui.Skin);

	var LobbySkin$Skin7 = 	(function (_super) {
		__extends(LobbySkin$Skin7, _super);
		function LobbySkin$Skin7() {
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
						new eui.SetProperty("_Image1","source","homemodle_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LobbySkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "homemodle_png";
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
		return LobbySkin$Skin7;
	})(eui.Skin);

	function LobbySkin() {
		_super.call(this);
		this.skinParts = ["gp_bg","selected","group"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.gp_bg_i(),this.selected_i(),this.group_i(),this._Image1_i()];
	}
	var _proto = LobbySkin.prototype;

	_proto.gp_bg_i = function () {
		var t = new eui.Group();
		this.gp_bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.selected_i = function () {
		var t = new eui.Group();
		this.selected = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 165;
		t.horizontalCenter = 0;
		t.top = "70%";
		t.touchEnabled = false;
		t.width = 1300;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 87;
		t.horizontalAlign = "center";
		t.paddingTop = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xffffff;
		t.height = 158;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 310;
		t.x = 1236;
		t.y = 73;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xFFFFFF;
		t.height = 160;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 310;
		t.x = 1246;
		t.y = 83;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xFFFFFF;
		t.height = 159;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 310;
		t.x = 1256;
		t.y = 93;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 165;
		t.horizontalCenter = 0;
		t.top = "70%";
		t.touchEnabled = false;
		t.width = 1300;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Button1_i(),this._Button2_i(),this._Button3_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 100;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -106;
		t.y = 58;
		t.skinName = LobbySkin$Skin5;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.height = 146;
		t.label = "";
		t.width = 297;
		t.x = -96;
		t.y = 4;
		t.skinName = LobbySkin$Skin6;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.height = 146;
		t.label = "";
		t.width = 297;
		t.x = -86;
		t.y = 78;
		t.skinName = LobbySkin$Skin7;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 500;
		t.horizontalCenter = 0;
		t.source = "icon_game5_png";
		t.top = 120;
		t.width = 500;
		return t;
	};
	return LobbySkin;
})(eui.Skin);generateEUI.paths['resource/mySkins/Login.exml'] = window.LoginSkin = (function (_super) {
	__extends(LoginSkin, _super);
	var LoginSkin$Skin8 = 	(function (_super) {
		__extends(LoginSkin$Skin8, _super);
		function LoginSkin$Skin8() {
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
						new eui.SetProperty("_Image1","source","pipeiduizhan_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "pipeiduizhan_png";
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
		return LoginSkin$Skin8;
	})(eui.Skin);

	var LoginSkin$Skin9 = 	(function (_super) {
		__extends(LoginSkin$Skin9, _super);
		function LoginSkin$Skin9() {
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
						new eui.SetProperty("_Image1","source","paiweiduizhan_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "paiweiduizhan_png";
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
		return LoginSkin$Skin9;
	})(eui.Skin);

	var LoginSkin$Skin10 = 	(function (_super) {
		__extends(LoginSkin$Skin10, _super);
		function LoginSkin$Skin10() {
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
						new eui.SetProperty("_Image1","source","homemodle_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "homemodle_png";
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
		return LoginSkin$Skin10;
	})(eui.Skin);

	function LoginSkin() {
		_super.call(this);
		this.skinParts = ["gp_bg","selected","group"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.gp_bg_i(),this.selected_i(),this.group_i(),this._Image1_i()];
	}
	var _proto = LoginSkin.prototype;

	_proto.gp_bg_i = function () {
		var t = new eui.Group();
		this.gp_bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.selected_i = function () {
		var t = new eui.Group();
		this.selected = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 165;
		t.horizontalCenter = 0;
		t.top = "70%";
		t.touchEnabled = false;
		t.width = 1300;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 86;
		t.horizontalAlign = "center";
		t.paddingTop = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xffffff;
		t.height = 158;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 310;
		t.x = 1236;
		t.y = 73;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xFFFFFF;
		t.height = 160;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 310;
		t.x = 1246;
		t.y = 83;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xFFFFFF;
		t.height = 159;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 310;
		t.x = 1256;
		t.y = 93;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 165;
		t.horizontalCenter = 0;
		t.top = "70%";
		t.touchEnabled = false;
		t.width = 1300;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Button1_i(),this._Button2_i(),this._Button3_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 100;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -106;
		t.y = 58;
		t.skinName = LoginSkin$Skin8;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.height = 146;
		t.label = "";
		t.width = 297;
		t.x = -96;
		t.y = 4;
		t.skinName = LoginSkin$Skin9;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.height = 146;
		t.label = "";
		t.width = 297;
		t.x = -86;
		t.y = 78;
		t.skinName = LoginSkin$Skin10;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 500;
		t.horizontalCenter = 0;
		t.source = "icon_game5_png";
		t.top = 120;
		t.width = 500;
		return t;
	};
	return LoginSkin;
})(eui.Skin);generateEUI.paths['resource/mySkins/match.exml'] = window.LobbySkin = (function (_super) {
	__extends(LobbySkin, _super);
	var LobbySkin$Skin11 = 	(function (_super) {
		__extends(LobbySkin$Skin11, _super);
		function LobbySkin$Skin11() {
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
						new eui.SetProperty("_Image1","source","btnCancel_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LobbySkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btnCancel_png";
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
		return LobbySkin$Skin11;
	})(eui.Skin);

	var LobbySkin$Skin12 = 	(function (_super) {
		__extends(LobbySkin$Skin12, _super);
		function LobbySkin$Skin12() {
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
						new eui.SetProperty("_Image1","source","btnStartGame_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LobbySkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btnStartGame_png";
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
		return LobbySkin$Skin12;
	})(eui.Skin);

	function LobbySkin() {
		_super.call(this);
		this.skinParts = ["gp_bg","pipeiIng_img","pipeidao_img","qrcodebg","saomatip","player1_name","txt","txtGroup","player1Loading","player1LoadingMask","player1loadingtxt","playerbg1_group","player2_name","player2Loading","player2LoadingMask","player2loadingtxt","playerbg2_group","group","wenxintishi","btn_leaveSelected","btn_startSelected","group_selected","btn_leave","btn_start","group_btns","vsImg","shandian","v","s","vs_group"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.gp_bg_i(),this._Image1_i(),this.group_i(),this.wenxintishi_i(),this.group_selected_i(),this.group_btns_i(),this.vsImg_i(),this.vs_group_i()];
	}
	var _proto = LobbySkin.prototype;

	_proto.gp_bg_i = function () {
		var t = new eui.Group();
		this.gp_bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 54;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jiesuanBG_png";
		t.top = "12%";
		t.percentWidth = 85;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 54;
		t.horizontalCenter = 0;
		t.top = "12%";
		t.percentWidth = 85;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.playerbg1_group_i(),this.playerbg2_group_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 60;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.playerbg1_group_i = function () {
		var t = new eui.Group();
		this.playerbg1_group = t;
		t.percentHeight = 77;
		t.percentWidth = 44;
		t.x = 177;
		t.y = 137;
		t.elementsContent = [this.pipeiIng_img_i(),this.pipeidao_img_i(),this.qrcodebg_i(),this.saomatip_i(),this.player1_name_i(),this.txtGroup_i(),this.player1Loading_i(),this.player1LoadingMask_i(),this.player1loadingtxt_i()];
		return t;
	};
	_proto.pipeiIng_img_i = function () {
		var t = new eui.Image();
		this.pipeiIng_img = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg1_png";
		t.top = 0;
		return t;
	};
	_proto.pipeidao_img_i = function () {
		var t = new eui.Image();
		this.pipeidao_img = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg2_png";
		t.visible = false;
		t.width = 718;
		t.x = 0;
		t.y = -461;
		return t;
	};
	_proto.qrcodebg_i = function () {
		var t = new eui.Rect();
		this.qrcodebg = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 150;
		t.fillColor = 0xffffff;
		t.height = 300;
		t.horizontalCenter = 0;
		t.top = "13%";
		t.visible = false;
		t.width = 300;
		return t;
	};
	_proto.saomatip_i = function () {
		var t = new eui.Label();
		this.saomatip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "手机扫码立即加入";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 396;
		t.y = 0;
		return t;
	};
	_proto.player1_name_i = function () {
		var t = new eui.Label();
		this.player1_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.textAlign = "left";
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 312;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.txtGroup_i = function () {
		var t = new eui.Group();
		this.txtGroup = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 717;
		t.elementsContent = [this._Label1_i(),this.txt_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "正在匹配玩家";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 650;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txt_i = function () {
		var t = new eui.Label();
		this.txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "...";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 244.34;
		t.x = 482.78;
		t.y = 0;
		return t;
	};
	_proto.player1Loading_i = function () {
		var t = new eui.Image();
		this.player1Loading = t;
		t.mask = this.player1LoadingMask;
		t.scale9Grid = new egret.Rectangle(10,3,706,24);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loading_png";
		t.top = "11.6%";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto.player1LoadingMask_i = function () {
		var t = new eui.Image();
		this.player1LoadingMask = t;
		t.height = 30;
		t.source = "loading_png";
		t.top = "11.6%";
		t.width = 0;
		t.x = 0;
		if(this.player1Loading)
		{
			this.player1Loading.mask = this.player1LoadingMask;
		}
		return t;
	};
	_proto.player1loadingtxt_i = function () {
		var t = new eui.Label();
		this.player1loadingtxt = t;
		t.horizontalCenter = 0;
		t.text = "";
		t.textAlign = "center";
		t.top = "11.6%";
		t.verticalAlign = "middle";
		t.width = 717;
		return t;
	};
	_proto.playerbg2_group_i = function () {
		var t = new eui.Group();
		this.playerbg2_group = t;
		t.percentHeight = 77;
		t.percentWidth = 44;
		t.x = 1026;
		t.y = 185;
		t.elementsContent = [this._Image2_i(),this.player2_name_i(),this.player2Loading_i(),this.player2LoadingMask_i(),this.player2loadingtxt_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = -2;
		t.right = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg2_png";
		t.top = 0;
		return t;
	};
	_proto.player2_name_i = function () {
		var t = new eui.Label();
		this.player2_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 12;
		t.text = "";
		t.textAlign = "left";
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 312;
		t.x = 50;
		return t;
	};
	_proto.player2Loading_i = function () {
		var t = new eui.Image();
		this.player2Loading = t;
		t.left = -2;
		t.mask = this.player2LoadingMask;
		t.scale9Grid = new egret.Rectangle(15,3,695,24);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loading_png";
		t.top = "11.7%";
		t.percentWidth = 100;
		return t;
	};
	_proto.player2LoadingMask_i = function () {
		var t = new eui.Image();
		this.player2LoadingMask = t;
		t.height = 30;
		t.left = -2;
		t.source = "loading_png";
		t.top = "11.6%";
		t.width = 0;
		if(this.player2Loading)
		{
			this.player2Loading.mask = this.player2LoadingMask;
		}
		return t;
	};
	_proto.player2loadingtxt_i = function () {
		var t = new eui.Label();
		this.player2loadingtxt = t;
		t.horizontalCenter = 0;
		t.text = "";
		t.textAlign = "center";
		t.top = "11.6%";
		t.verticalAlign = "middle";
		t.width = 717;
		return t;
	};
	_proto.wenxintishi_i = function () {
		var t = new eui.Label();
		this.wenxintishi = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "温馨提示：请确保手机与机顶盒在同一WIFI下";
		t.textAlign = "center";
		t.top = "66%";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 1200;
		return t;
	};
	_proto.group_selected_i = function () {
		var t = new eui.Group();
		this.group_selected = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 77.5;
		t.height = 155;
		t.top = "74.55%";
		t.width = 1920;
		t.x = 0;
		t.elementsContent = [this.btn_leaveSelected_i(),this.btn_startSelected_i()];
		return t;
	};
	_proto.btn_leaveSelected_i = function () {
		var t = new eui.Rect();
		this.btn_leaveSelected = t;
		t.anchorOffsetX = 77.5;
		t.anchorOffsetY = 77.5;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xffffff;
		t.height = 155;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 155;
		t.x = 750;
		return t;
	};
	_proto.btn_startSelected_i = function () {
		var t = new eui.Rect();
		this.btn_startSelected = t;
		t.anchorOffsetX = 155;
		t.anchorOffsetY = 77.5;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xFFFFFF;
		t.height = 155;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 310;
		t.x = 1150;
		return t;
	};
	_proto.group_btns_i = function () {
		var t = new eui.Group();
		this.group_btns = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 73;
		t.height = 146;
		t.horizontalCenter = 0;
		t.top = "75%";
		t.width = 1920;
		t.elementsContent = [this.btn_leave_i(),this.btn_start_i()];
		return t;
	};
	_proto.btn_leave_i = function () {
		var t = new eui.Button();
		this.btn_leave = t;
		t.anchorOffsetX = 73;
		t.anchorOffsetY = 73;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 750;
		t.skinName = LobbySkin$Skin11;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new eui.Button();
		this.btn_start = t;
		t.anchorOffsetX = 148.5;
		t.anchorOffsetY = 73;
		t.label = "";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 1150;
		t.skinName = LobbySkin$Skin12;
		return t;
	};
	_proto.vsImg_i = function () {
		var t = new eui.Image();
		this.vsImg = t;
		t.horizontalCenter = 0;
		t.source = "VS_png";
		t.visible = false;
		t.y = 342;
		return t;
	};
	_proto.vs_group_i = function () {
		var t = new eui.Group();
		this.vs_group = t;
		t.anchorOffsetX = 0;
		t.height = 188;
		t.horizontalCenter = 0;
		t.top = "35%";
		t.width = 364;
		t.elementsContent = [this.shandian_i(),this.v_i(),this.s_i()];
		return t;
	};
	_proto.shandian_i = function () {
		var t = new eui.Image();
		this.shandian = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shandian_png";
		t.y = 0;
		return t;
	};
	_proto.v_i = function () {
		var t = new eui.Image();
		this.v = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "v_png";
		t.x = 51;
		t.y = 0;
		return t;
	};
	_proto.s_i = function () {
		var t = new eui.Image();
		this.s = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "s_png";
		t.x = 198;
		t.y = 58;
		return t;
	};
	return LobbySkin;
})(eui.Skin);