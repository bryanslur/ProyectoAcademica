PrimeFaces.widget.InputNumber=PrimeFaces.widget.BaseWidget.extend({init:function(a){this._super(a);this.inputInternal=$(this.jqId+"_hinput");this.inputExternal=$(this.jqId+"_input");this.plugOptArray=a.pluginOptions;this.valueToRender=a.valueToRender;this.disabled=a.disabled;var d=this;if(this.disabled){this.inputExternal.attr("disabled","disabled");this.inputExternal.addClass("ui-state-disabled");this.inputInternal.attr("disabled","disabled")}PrimeFaces.skinInput(this.inputExternal);var b=this.inputExternal.prop("onkeyup");this.inputExternal.removeProp("onkeyup").off("keyup").on("keyup",function(i){var g=true;if(b){g=b.call(this,i)}if(g!==false){var h=i.which;if(h===8||h===13||h===32||(h>=46&&h<=90)||(h>=96&&h<=111)||(h>=186&&h<=222)){d.copyValueToHiddenInput()}}});var f=this.inputExternal.prop("onchange");this.inputExternal.removeProp("onchange").off("change").on("change",function(h){var g=true;if(f){g=f.call(this,h)}if(g!==false){d.copyValueToHiddenInput()}});var e=this.inputExternal.prop("onkeydown");this.inputExternal.removeProp("onkeydown").off("keydown").on("keydown",function(h){var g=true;if(e){g=e.call(this,h)}if(g!==false){d.copyValueToHiddenInput()}});this.inputExternal.autoNumeric("init",this.plugOptArray);if(this.valueToRender!==""){this.inputExternal.autoNumeric("set",this.valueToRender);var c=d.inputExternal.autoNumeric("get");d.inputInternal.attr("value",c)}else{d.inputInternal.removeAttr("value")}},copyValueToHiddenInput:function(){var a=this.inputExternal.autoNumeric("get");if(a!==""){this.inputInternal.attr("value",a)}else{this.inputInternal.removeAttr("value")}},enable:function(){this.inputExternal.removeAttr("disabled");this.inputExternal.removeClass("ui-state-disabled");this.inputInternal.removeAttr("disabled");this.disabled=false},disable:function(){this.inputExternal.attr("disabled","disabled");this.inputExternal.addClass("ui-state-disabled");this.inputInternal.attr("disabled","disabled");this.disabled=true},setValue:function(a){this.inputExternal.autoNumeric("set",a);var b=this.inputExternal.autoNumeric("get");this.inputInternal.attr("value",b)},getValue:function(){return this.inputExternal.autoNumeric("get")}});