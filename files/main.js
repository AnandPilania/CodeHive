		var stickyScroll = 1;  // Sticky Scroll ON by default
		var autoRun = 1;  // Auto-run ON by default
		var delay;
  
	  // HTML5
      var htmlEditor = CodeMirror.fromTextArea(document.getElementById('html-source'), {
		mode: "pophtmlmixed",
		profile: 'xhtml',
		lineNumbers: true,
		lineWrapping: true,	
		dragDrop : true,
		//theme: "tomorrow-night-eighties",
		//theme: "mdn-like",

		onChange: function () { 	if(autoRun==1) {  clearTimeout(delay); delay = setTimeout(renderPreview, 300); } },
		onFocus: function() { $(".html-logo").fadeOut("slow"); },
		onBlur: function() { $(".html-logo").fadeIn("slow"); },
		extraKeys: { Tab: betterTab }  
      });
	  			
      var htmlCompletion = new CodeCompletion(htmlEditor, new HtmlCompletion());
      htmlEditor.setOption("onKeyEvent", function(cm, e) {
          return htmlCompletion.handleKeyEvent(cm, e);
      });
	  
      // CSS3
      var cssEditor =CodeMirror.fromTextArea(document.getElementById('css-source'), {
		mode: "css",
		lineNumbers: true,
		lineWrapping: true,		
		dragDrop : true,
		//theme: "tomorrow-night-eighties",
		//theme: "mdn-like",

		onChange: function () { if(autoRun==1) {  clearTimeout(delay); delay = setTimeout(renderPreview, 300);} },
		onFocus: function() { $(".css-logo").fadeOut("slow"); },
		onBlur: function() { $(".css-logo").fadeIn("slow"); },
		extraKeys: { Tab: betterTab }
      });
	  
      var cssCompletion = new CodeCompletion(cssEditor, new CssCompletion());
      cssEditor.setOption("onKeyEvent", function(cm, e) {
          return cssCompletion.handleKeyEvent(cm, e);
      });
	  	  
	 function passAndHint(cm) {
     	setTimeout(function() {cm.execCommand("autocomplete");}, 100);
		return CodeMirror3.Pass;
      }
       
      function myHint(cm) {
      	return CodeMirror3.showHint(cm, CodeMirror3.ternHint, {async: true}); 
      }
     
      CodeMirror3.commands.autocomplete = function(cm) {
        CodeMirror3.showHint(cm, myHint);
      }
        
	  // JavaScript
      var jsEditor = CodeMirror3.fromTextArea(document.getElementById("js-source"), {
        mode: 'application/javascript',
		//theme: "tomorrow-night-eighties",
		//theme: "mdn-like",

        styleActiveLine: true,
        lineNumbers: true,
        lineWrapping: true,
        autoCloseBrackets: true,
		dragDrop : true,
        matchBrackets: true,
        extraKeys: {
         	"'.'": passAndHint
        },
        gutters: ["CodeMirror3-lint-markers", "CodeMirror3-linenumbers"],
    	lintWith: CodeMirror3.javascriptValidator,
    	textHover: {delay:300},
		onKeyEvent: function (e, s) {
	     if(s.type == "keyup" && ((s.keyCode >= 65 && s.keyCode <= 90) || s.keyCode == 190))
		 	{ CodeMirror3.showHint(e, myHint); }
		}
	
      });
	
		jsEditor.on("change", function() {  if(autoRun==1) {   clearTimeout(delay); delay = setTimeout(renderPreview, 300);} });
		jsEditor.on("focus", function() {  $(".js-logo").fadeOut("slow");  });
		jsEditor.on("blur", function() {   $(".js-logo").fadeIn("slow"); });		
		
        setTimeout(renderPreview, 300); // Important!
		
	 // Advanced tab	  
	 function betterTab(cm) { if (cm.somethingSelected()) { cm.indentSelection("add"); } else { cm.replaceSelection(cm.getOption("indentWithTabs")? "\t": 
      Array(cm.getOption("indentUnit") + 1).join(" "), "end", "+input"); }}	
 		
  	 // Auto-scroll to the bottom of iframe
	 function scrollToBottom() { if (stickyScroll==1) {	$('#preview').contents().scrollTop($('#preview').contents().height()); } else if (stickyScroll==0) { $('#preview').contents().scrollTo(0, 0); } }
	 
	  // Auto-run
	 function autoRun() { if (autoRun==0) { $('#run').hide(); }	else if (autoRun==1) { $('#run').show(); } }
      
	  // Get selected text	
	  function getSelectedRange() {	return { from: htmlEditor.getCursor(true), to: htmlEditor.getCursor(false) };  }
      
	  // Auto-format selected text
      function autoFormatSelection() { var range = getSelectedRange(); htmlEditor.autoFormatRange(range.from, range.to); }
	  
	  // Tidy HTML
	  $("#tidy").click(function() { autoFormatSelection(); });	 
	  
	// Combining HTML5, CSS3 and JavaScript
	function renderPreview() {
		var previewFrame = document.getElementById('preview');
		var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;		
		preview.open();
		preview.write('<style type="text/css">' + cssEditor.getValue() + '</style>'); 
		preview.write(htmlEditor.getValue());		
		preview.write('<scr' + 'ipt>' + jsEditor.getValue() + '</scr' + 'ipt>');		
		preview.close();
		$('#preview').contents().find('a').click(function(event) { event.preventDefault(); }); 

	}	