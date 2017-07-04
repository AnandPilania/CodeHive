$(document).ready(function(){			 
		
		previewModeFullScreen=false;  		// default Preview mode (25%)	
		zipDownload=false;
		loadLayout();

		$(".layout0").tipTip();
		$(".layout1").tipTip();
		$(".layout2").tipTip();
		$(".layout3").tipTip();


		// Toggle Preview-mode fullscreen
		$("#preview-mode-toggle").click(function() {				
			maxPreview();
		});
		
		// Change layout
		$('#layout0').click(function() { layout=0;panelsReset0();$('#dummy-layout').val("0");selectedLayout();$('#layout0').addClass('icon-check'); });
		$('#layout1').click(function() { layout=1;panelsReset1();$('#dummy-layout').val("1");selectedLayout();$('#layout1').addClass('icon-check'); });
		$('#layout2').click(function() { layout=2;panelsReset2();$('#dummy-layout').val("2");selectedLayout();$('#layout2').addClass('icon-check');});
		$('#layout3').click(function() { layout=3;panelsReset3();$('#dummy-layout').val("3");selectedLayout();$('#layout3').addClass('icon-check'); });

		// Load layout, '0' for default
		function loadLayout() {
			var layoutType=$('#dummy-layout').val();
			if(layoutType==0) {panelsReset0(); layout=0;$('#layout0').addClass('icon-check');}
			if(layoutType==1) {panelsReset1(); layout=1;$('#layout1').addClass('icon-check');}
			if(layoutType==2) {panelsReset2(); layout=2;$('#layout2').addClass('icon-check');}
			if(layoutType==3) {panelsReset3(); layout=3;$('#layout3').addClass('icon-check');}

		}
		
		function selectedLayout() {
			$('#layout0').removeClass();
			$('#layout1').removeClass();
			$('#layout2').removeClass();
			$('#layout3').removeClass();
		}
		
			
		// Full preview
		function maxPreview() {
			if(previewModeFullScreen==false){
						$('#splitContainer').jqxSplitter({ height: '100%', width: '100%', orientation: 'vertical',  panels: [{ size: '0%'}, { size: '100%'}] });
						$('#rightSplitter').jqxSplitter({ height: '100%', width: '100%', orientation: 'horizontal',panels: [{ size: '0%' }, { size: '100%'}] });
						$('#preview-mode').removeClass('full-screen-logo');
						$('#preview-mode').addClass('full-screen-exit-logo');
						previewModeFullScreen=true; // fullscreen preview mode (100%)
				}
				else {
						if(layout==0) {panelsReset0(); }
						if(layout==1) { panelsReset1(); }
						if(layout==2) { panelsReset2(); }
						if(layout==3) { panelsReset3(); }
						$('#preview-mode').removeClass('full-screen-exit-logo');
						$('#preview-mode').addClass('full-screen-logo');
						previewModeFullScreen=false;   
					}

		}
		
		
		/*
		 _______________________
		|	  		|	  		|
		|	  H		|	  J		|
		|___________|___________|
		|	  		|		    |
		|	  C		|		    |
		|___________|___________|
		*/
		function panelsReset0() {
			$('#splitContainer').jqxSplitter({ height: '100%', width: '100%', orientation: 'horizontal',  panels: [{ size: '50%',collapsible:false }, { size: '50%', collapsible:false}] });
			$('#leftSplitter').jqxSplitter({ height: '100%', width: '100%', orientation: 'vertical',panels: [{ size: '50%', collapsible:false}, { size: '50%', collapsible:false}] });
			$('#rightSplitter').jqxSplitter({ height: '100%', width: '100%', orientation: 'vertical',panels: [{ size: '50%',collapsible:false }, { size: '50%',collapsible:false}] });
		}
		
		/*
		 _______________________
		|	  		|	  		|
		|	  H		|	  C		|
		|___________|___________|
		|	  		|		    |
		|	  J		|		    |
		|___________|___________|
		*/
		function panelsReset1() {
			$('#splitContainer').jqxSplitter({ height: '100%', width: '100%', orientation: 'vertical',  panels: [{ size: '50%', collapsible:false }, { size: '50%', collapsible:false}] });
			$('#leftSplitter').jqxSplitter({ height: '100%', width: '100%', orientation: 'horizontal',panels: [{ size: '50%', collapsible:false}, { size: '50%', collapsible:false}] });
			$('#rightSplitter').jqxSplitter({ height: '100%', width: '100%', orientation: 'horizontal',panels: [{ size: '50%', collapsible:false }, { size: '50%', collapsible:false}] });
		}
		
		/*
		 _______________________
		|	  |	  	|     |		|
		|	  |	  	|	  |		|
		|  H  |	 C 	|  J  |		|
		|	  |	  	|	  |		|
		|_____|_____|_____|_____|
	
		*/
		function panelsReset2() {
			$('#splitContainer').jqxSplitter({ height: '100%', width: '100%', orientation: 'vertical',  panels: [{ size: '50%', collapsible:false }, { size: '50%', collapsible:false}] });
			$('#leftSplitter').jqxSplitter({ height: '100%', width: '100%', orientation: 'vertical',panels: [{ size: '50%', collapsible:false},{ size: '50%', collapsible:false} ] });
			$('#rightSplitter').jqxSplitter({ height: '100%', width: '100%', orientation: 'vertical',panels: [{ size: '50%', collapsible:false }, { size: '50%', collapsible:false}] });
		}
		
		/*
		 _______________________
		|			H    		|
		|_______________________|
		|			C			|
		|_______________________|
		|			J    		|
		|_______________________|
		|						|
		|_______________________|
		*/ 
		function panelsReset3() {
			$('#splitContainer').jqxSplitter({ height: '100%', width: '100%', orientation: 'horizontal',  panels: [{ size: '50%', collapsible:false }, { size: '50%', collapsible:false}] });
			$('#leftSplitter').jqxSplitter({ height: '100%', width: '100%', orientation: 'horizontal',panels: [{ size: '50%', collapsible:false}, { size: '50%', collapsible:false}] });
			$('#rightSplitter').jqxSplitter({ height: '100%', width: '100%', orientation: 'horizontal',panels: [{ size: '50%', collapsible:false }, { size: '50%', collapsible:false}] });
		}
		
		function panelsRefresh() {
				$('#splitContainer').jqxSplitter('refresh');
				$('#leftSplitter').jqxSplitter('refresh');
				$('#rightSplitter').jqxSplitter('refresh');
		}	
			
		// Window resize refresh
		$(window).resize(function() {
			panelsRefresh();
		});
	
		// Close footer text
		$(".footer-message-close").click(function() {
			$("#footer-message").fadeOut("slow");
		}
		);
		
		// Zip and download the files
		$("#download-zip").on('click', function () {	
												 			
			var zip = new JSZip();
			
			var htmlContent = htmlEditor.getValue();
			var cssContent = cssEditor.getValue();
			var jsContent = jsEditor.getValue();	
			
			var cssLink="<"+"link type=\"text/css\" rel=\"stylesheet\" href=\"css/style.css\""+"/>"+"\n";
			var jsLink="<"+"script type=\"text/javascript\" src=\"js/script.js\">"+"</"+"script"+">"+"\n";
			
			cssLink = cssLink + "</head>";
			jsLink = jsLink + "</body>";
			
			htmlContent = htmlContent.replace("</head>",cssLink);
			htmlContent = htmlContent.replace("</body>",jsLink);

			zip.file("css/style.css", cssContent);
			zip.file("js/script.js", jsContent);
			zip.file("index.html", htmlContent);
			var content = zip.generate();
			location.href="data:application/zip;base64,"+content;
		});
		
		// Get the <title> from HTML
		function getTitle() {
			var htmlContent = htmlEditor.getValue();
			var xmlDoc = $.parseXML(htmlContent), $xml = $(xmlDoc), $title = $xml.find("title");
			var titleCheck = $title.text();
			
			// Default, if <title> is there
			if(titleCheck=='' || titleCheck==null ) {
			alertify.alert("WARNING:<br/> Your weave has been saved, but your HTML is invalid and is missing the &lt;title&gt; tag!"); 
			$('#dummy-title').val("A HTML5, CSS3 and JavaScript demo");
			}
			// If <title> is missing
			else {$('#dummy-title').val(titleCheck);}
		 }
		
		// Trigger the getTitle function
		$('#submit').on('mousedown', function() { getTitle(); });
		
	
		// Populate the share menu, only if an 'id' is passed in the URL
		$("#run").hide();
		$("#auto-run").attr('checked', true);			
		$("#night-vision").attr('checked', true);
		  
		var pathname = window.location.pathname;
		
		if(pathname.trim()!="/") {
			$("#share-url").attr("value","http://liveweave.com/"+pathname);
			$("#facebook-submit").attr("href","http://www.facebook.com/sharer.php?u="+"http://liveweave.com/"+pathname+"&t=Here's a new Weave!");
			$("#twitter-submit").attr("href","http://twitter.com/home?status=Here's a new Weave: "+"http://liveweave.com/"+pathname);	
		}
						
		 // Toggle switch for Sticky Scroll	
		  $('onchange :checkbox').iphoneStyle();
			var onchange_checkbox = ($('.onchange :checkbox')).iphoneStyle({
			onChange: function(elem, value) { 
			if (value) {	autoRun=1; 	$("#run").hide(); 	}
			else { autoRun=0; $("#run").show("slow");}
			}	
			});
			
			// Toggle switch for Night Vision
		  $('theme :checkbox').iphoneStyle();
			var onchange_theme = ($('.theme :checkbox')).iphoneStyle({
			onChange: function(elem, value) { 
				if (value) {	
					nightVision = true; // default theme (tomorrow-night-eighties)
					
					htmlEditor.setOption("theme", "tomorrow-night-eighties");
					cssEditor.setOption("theme", "tomorrow-night-eighties");
					jsEditor.setOption("theme", "tomorrow-night-eighties");								
					
					$(".CodeMirror").css({"width":"100%","position":"relative","top":"0","font-family":"Consola, sans-serif", "font-size":"15px", "line-height":"1.3em", "background":"#444 url(images/editor_bg.png) repeat-x", "overflow-y":"auto"});					
					$(".CodeMirror-scroll").css({"background":"#444 url(images/editor_bg.png) repeat-x", "border":"3px solid #333"});
					$(".CodeMirror-gutter").css({"background":"none", "border":"none"});					
					$(".jqx-fill-state-normal").css({"background-color": "#222", "border-top":"1px solid #333", "border-bottom":"1px solid #444", "border-left": "1px solid #444", "border-right":"1px solid #333"});
					$(".jqx-splitter-collapse-button-vertical").css({ "background-color":"#555"});
					$(".jqx-splitter-collapse-button-horizontal").css({ "background-color": "#555"});
					$("#footer").css({"background-color":"#333","border-top":"1px solid #444"}); 
					
					$(".CodeMirror3").css({"font-family":"Consola, sans-serif", "font-size":"15px", "line-height":"1.3em", "background-color":"#555"});					
					$(".CodeMirror3-scroll").css({"background":"#444 url(images/editor_bg.png) repeat-x", "border":"3px solid #333"});
					$(".CodeMirror3-gutter").css({"background":"none", "border":"none"});					
					$(".jqx-fill-state-normal").css({"background-color": "#222", "border-top":"1px solid #333", "border-bottom":"1px solid #444", "border-left": "1px solid #444", "border-right":"1px solid #333"});
					$(".jqx-splitter-collapse-button-vertical").css({ "background-color":"#555"});
					$(".jqx-splitter-collapse-button-horizontal").css({ "background-color": "#555"});
					$("#footer").css({"background-color":"#333","border-top":"1px solid #444"}); 

				}
				else { 
					nightVision=false; // white theme
					
					htmlEditor.setOption("theme", "default");
					cssEditor.setOption("theme", "default");
					jsEditor.setOption("theme", "default");
					
					$(".CodeMirror").css({"font-family":"Consola, sans-serif", "font-size":"15px", "line-height":"1.3em", "background":"white", "overflow-y":"auto"});					
                    $(".CodeMirror-scroll").css({"background":"white", "border":"2px solid #fff"});
					$(".CodeMirror-gutter").css({"background":"#f5f5f5"});
					$(".jqx-fill-state-normal").css({"background-color": "#ccc", "border-top":"1px solid #333", "border-bottom":"1px solid #444", "border-left": "1px solid #444", "border-right":"1px solid #333"});
					$(".jqx-splitter-collapse-button-vertical").css({ "background-color":"#999"});
					$(".jqx-splitter-collapse-button-horizontal").css({ "background-color": "#999"});					
					$("#footer").css({"background-color":"#f5f5f5","border-top":"1px solid #ccc"}); 
					
					$(".CodeMirror3").css({"font-family":"Consola, sans-serif", "font-size":"15px", "line-height":"1.3em", "background-color":"white"});					
                    $(".CodeMirror3-scroll").css({"background":"white", "border":"2px solid #fff"});
					$(".CodeMirror3-gutter").css({"background":"#f5f5f5"});
					$(".jqx-fill-state-normal").css({"background-color": "#ccc", "border-top":"1px solid #333", "border-bottom":"1px solid #444", "border-left": "1px solid #444", "border-right":"1px solid #333"});
					$(".jqx-splitter-collapse-button-vertical").css({ "background-color":"#999"});
					$(".jqx-splitter-collapse-button-horizontal").css({ "background-color": "#999"});					
					$("#footer").css({"background-color":"#f5f5f5","border-top":"1px solid #ccc"}); 

				}
			}	
			});
			           
					   
					   
					   
		 // AJAX form save
		 $("form#myform").submit( function () {    
		
				//getTitle();	
				
				  $.post(
				   'submit.php',
					$(this).serialize(),
						function(data){
							History.pushState({state:1}, "Liveweave", "/"+data); 
							alertify.success("Your weave is saved!"); // success message
							$("input:text").focus(function() { $(this).select(); } );
						}
				  );
				
				  return false;   
			});   			
	
	
		
		
		// Tooltip
		$(function(){ $(".tooltip").tipTip({duration: 0, edgeOffset: 0, fadeOut: 0, fadeIn: 0}); });		 
		 //$(".onchange").tipTip({maxWidth: "auto", edgeOffset: 0});

				
		// Visual effects speed
		$.fx.speeds._default = 300; 
		
				
		// Refresh Link
		$('#logo').click(function(){
			//location.reload();
			window.location.href = "../";
		});
		
		// Description
		$('#description').click(function(){
			$('#dialog-description').dialog('open');
			return false;
		});
		
		
		//hover states on the static widgets
		$('#dialog_about_link, ul#icons li').hover(
			function() { $(this).addClass('ui-state-hover'); },
			function() { $(this).removeClass('ui-state-hover'); }
		);

		// Hide title bar for About dialog box
		$('#dialog-about').dialog('widget').find(".ui-dialog-titlebar").hide();
	  	
	  // Get selected text	
	  function getSelectedRange() {	   
        return { from: htmlEditor.getCursor(true), to: htmlEditor.getCursor(false) };
      }
	  
	  // Initiate Alertify
	  function reset () {
			alertify.set({
				labels : {
					ok     : "OK",
					cancel : "Cancel"
				},
				delay : 5000,
				buttonReverse : false,
				buttonFocus   : "ok"
			});
		}

	  
	  // Append JS library to HTML <head>
	  function appendJSLib(txt) {
		  	var textArea=htmlEditor.getValue();
			var searchText = textArea.search("<head>");
			if(searchText>0) {
			txt = "<head>"+"\n"+txt;
			var updatedTextArea = textArea.replace("<head>",txt);
			htmlEditor.setValue(updatedTextArea);
			}
			else {
			reset();
			alertify.alert("<span style='color: #f5f5f5; padding:4px 6px 4px 6px; border-radius:3px; background-color: #cc0000;'>WARNING!</span><br/><br/> The <strong>&lt;head&gt;</strong> tag seems to be missing in your HTML. Although your code may still work, we highly recommened that you have a valid HTML syntax. Please refer to the structure of a correct HTML code below:<br/><br/>&lt;!DOCTYPE html&gt;<br/>&lt;html&gt;<br/>&lt;head&gt;<br/>&lt;title&gt&lt;!-- title --&gt;&lt;/title&gt;<br/> &lt;/head&gt;<br/> &lt;body&gt;<br/> &lt;!-- your content here --&gt;<br/> &lt;/body&gt;<br/>&lt;/html&gt;");
			txt = txt+textArea;
			htmlEditor.setLine(0, txt);
			return false;
			}
	  }
     	  
	 
	  // JavaScript library Menu-items
	   $(function() {
			// Angular JS
			$("#angular").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// Backbone JS
			$("#backbone").click(function() {
			txt1="<"+"script type=\"text/javascript\" src=\"http://documentcloud.github.io/backbone/backbone-min.js\">"+"</"+"script"+">"+"\n";
			txt2="<"+"script type=\"text/javascript\" src=\"http://documentcloud.github.io/underscore/underscore-min.js\">"+"</"+"script"+">";
			txt=txt1+txt2;
			appendJSLib(txt);  });		
			});	
			// Bootstrap
			$("#bootstrap").click(function() {
			txt1="<"+"script type=\"text/javascript\" src=\"http://code.jquery.com/jquery.min.js\">"+"</"+"script"+">"+"\n";
			txt2="<"+"script type=\"text/javascript\" src=\"http://getbootstrap.com/dist/js/bootstrap.js\">"+"</"+"script"+">"+"\n";
			txt3="<"+"link type=\"text/css\" rel=\"stylesheet\" href=\"http://getbootstrap.com/dist/css/bootstrap.css\""+"/>";
			txt=txt1+txt2+txt3;
			appendJSLib(txt);  });
			// Chart JS
			$("#chart").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"//cdnjs.cloudflare.com/ajax/libs/Chart.js/0.2.0/Chart.min.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// Create JS
			$("#create").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://code.createjs.com/createjs-2013.09.25.min.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// D3 JS
			$("#d3").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://d3js.org/d3.v3.min.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// DoJo
			$("#dojo").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/dojo/1/dojo/dojo.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });			
			// Ember JS
			$("#ember").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://builds.emberjs.com/tags/v1.1.2/ember.min.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// Enyo JS
			$("#enyo").click(function() {
			txt1="<"+"link type=\"text/css\" rel=\"stylesheet\" href=\"http://nightly.enyojs.com/latest/enyo-nightly/enyo.css\""+"/>"+"\n";
			txt2="<"+"script type=\"text/javascript\" src=\"http://nightly.enyojs.com/latest/enyo-nightly/enyo.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// Ext JS
			$("#ext").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://cdn.sencha.io/ext-4.2.0-gpl/ext-all.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// Fabric JS
			$("#fabric").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"//cdnjs.cloudflare.com/ajax/libs/fabric.js/1.3.0/fabric.min.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			
			
			// jQuery 
			$("#jquery").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://code.jquery.com/jquery-latest.min.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			$("#add-jquery").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://code.jquery.com/jquery-latest.min.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// jQuery UI
			$("#jqueryui").click(function() {
			txt1="<"+"link type=\"text/css\" rel=\"stylesheet\" href=\"http://ajax.googleapis.com/ajax/libs/jqueryui/1/themes/smoothness/jquery-ui.css\""+"/>"+"\n";
			txt2="<"+"script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js\">"+"</"+"script"+">"+"\n";
			txt3="<"+"script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js\">"+"</"+"script"+">";
			txt=txt1+txt2+txt3;
			appendJSLib(txt);  });
			// jQuery Mobile
			$("#jquerymobile").click(function() {
			txt1="<"+"script type=\"text/javascript\" src=\"http://code.jquery.com/jquery-latest.min.js\">"+"</"+"script"+">"+"\n";
			txt2="<"+"script type=\"text/javascript\" src=\"http://code.jquery.com/mobile/latest/jquery.mobile.js\">"+"</"+"script"+">"+"\n";
			txt3="<"+"link type=\"text/css\" rel=\"stylesheet\" href=\"http://code.jquery.com/mobile/latest/jquery.mobile.css\""+"/>";
			txt=txt1+txt2+txt3;
			appendJSLib(txt);  });	
			// jQuery Tools
			$("#jquerytools").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://cdn.jquerytools.org/1.2.7/full/jquery.tools.min.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// Kinetic JS
			$("#kinetic").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://d3lp1msu2r81bx.cloudfront.net/kjs/js/lib/kinetic-v4.7.3.min.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// Knockout JS
			$("#knockout").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://knockoutjs.com/downloads/knockout-3.0.0.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			
			
			// Modernizr
			$("#modernizr").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://modernizr.com/downloads/modernizr-latest.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// MooTools
			$("#mootools").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/mootools/1/mootools-yui-compressed.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// Paper JS
			$("#paper").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"//cdnjs.cloudflare.com/ajax/libs/paper.js/0.9.9/paper.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// Processing JS
			$("#processing").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://cloud.github.com/downloads/processing-js/processing-js/processing-1.4.1.min.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// Prototype
			$("#prototype").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/prototype/1/prototype.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// Pure CSS
			$("#purecss").click(function() {
			txt="<"+"link type=\"text/css\" rel=\"stylesheet\" href=\"http://yui.yahooapis.com/pure/0.3.0/pure-min.css\""+"/>"+"\n";
			appendJSLib(txt);  });
			// Qooxdoo
			$("#qooxdoo").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://demo.qooxdoo.org/3.0.1/framework/q-3.0.1.min.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// Raphael JS
			$("#raphael").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// Script.aculo.us
			$("#scriptaculous").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/scriptaculous/1/scriptaculous.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// Snap SVG
			$("#snapsvg").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://snapsvg.io/assets/js/snap.svg-min.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// SVG
			$("#svg").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"https://raw.github.com/wout/svg.js/master/dist/svg.min.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// Three JS
			$("#three").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://threejs.org/build/three.min.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// YUI
			$("#yui").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://yui.yahooapis.com/3.13.0/build/yui/yui-min.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// Underscore
			$("#underscore").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://underscorejs.org/underscore-min.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// Web Font Loader
			$("#webfontloader").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"//ajax.googleapis.com/ajax/libs/webfont/1.4.10/webfont.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
			// Zepto
			$("#zepto").click(function() {
			txt="<"+"script type=\"text/javascript\" src=\"http://zeptojs.com/zepto.min.js\">"+"</"+"script"+">";
			appendJSLib(txt);  });
	
			
 	// JavaScript Menu
      $(function() {
				/**
				 * the menu
				 */
				var $menu = $('#ldd-menu');
				
				/**
				 * for each list element,
				 * we show the submenu when hovering and
				 * expand the span element (title) to 510px
				 */
				$menu.children('li').each(function(){
					var $this = $(this);
					var $span = $this.children('span');
					$span.data('width',$span.width());
					
					$this.bind('click',function(){
						$menu.find('.ldd-submenu').stop(true,true).hide();
					
							$this.find('.ldd-submenu').slideDown(0);
					
					}).bind('mouseleave',function(){
						$this.find('.ldd-submenu').stop(true,true).hide();
						$span.stop().animate({'width':$span.data('width')+'px'},0);
					});
				});
            });


});