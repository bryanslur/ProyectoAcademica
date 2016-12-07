PrimeFaces.widget.BlockUI=PrimeFaces.widget.BaseWidget.extend({init:function(a){this.cfg=a;this.id=this.cfg.id;this.jqId=PrimeFaces.escapeClientId(this.id);this.block=PrimeFaces.expressions.SearchExpressionFacade.resolveComponentsAsSelector(this.cfg.block);this.content=$(this.jqId);this.cfg.animate=(this.cfg.animate===false)?false:true;this.cfg.blocked=(this.cfg.blocked===true)?true:false;this.render();if(this.cfg.triggers){this.bindTriggers()}if(this.cfg.blocked){this.show()}this.removeScriptElement(this.id)},refresh:function(a){this.blocker.remove();this.block.children(".ui-blockui-content").remove();$(document).off("pfAjaxSend."+this.id+" pfAjaxComplete."+this.id);this._super(a)},bindTriggers:function(){var b=this,a=PrimeFaces.expressions.SearchExpressionFacade.resolveComponents(this.cfg.triggers);$(document).on("pfAjaxSend."+this.id,function(f,g,c){var d=$.type(c.source)==="string"?c.source:c.source.name;if($.inArray(d,a)!==-1&&!b.cfg.blocked){b.show()}});$(document).on("pfAjaxComplete."+this.id,function(f,g,c){var d=$.type(c.source)==="string"?c.source:c.source.name;if($.inArray(d,a)!==-1&&!b.cfg.blocked){b.hide()}})},show:function(){this.blocker.css("z-index",++PrimeFaces.zindex);for(var b=0;b<this.block.length;b++){var a=$(this.blocker[b]),c=$(this.content[b]);c.css({left:(a.width()-c.outerWidth())/2,top:(a.height()-c.outerHeight())/2,"z-index":++PrimeFaces.zindex})}if(this.cfg.animate){this.blocker.fadeIn()}else{this.blocker.show()}if(this.hasContent()){if(this.cfg.animate){this.content.fadeIn()}else{this.content.show()}}this.block.attr("aria-busy",true)},hide:function(){if(this.cfg.animate){this.blocker.fadeOut()}else{this.blocker.hide()}if(this.hasContent()){if(this.cfg.animate){this.content.fadeOut()}else{this.content.hide()}}this.block.attr("aria-busy",false)},render:function(){this.blocker=$('<div id="'+this.id+'_blocker" class="ui-blockui ui-widget-overlay ui-helper-hidden"></div>');if(this.cfg.styleClass){this.blocker.addClass(this.cfg.styleClass)}if(this.block.hasClass("ui-corner-all")){this.blocker.addClass("ui-corner-all")}if(this.block.length>1){this.content=this.content.clone()}this.block.css("position","relative").attr("aria-busy",this.cfg.blocked).append(this.blocker).append(this.content);if(this.block.length>1){this.blocker=$(PrimeFaces.escapeClientId(this.id+"_blocker"));this.content=this.block.children(".ui-blockui-content")}},hasContent:function(){return this.content.contents().length>0}});