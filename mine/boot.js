var confloaded=0,fullyloaded=0,checkOnLoad,confeditortheme,boot=document.getElementById('boot');var bootmsg='<div id="bootmsg"><i class="icon spin"></i>Loading...<hr/><input type="button" onclick="loadconf();" value="Select theme" class="white" /></div>';
if(boot!=null){boot.innerHTML=bootmsg;}

var conf='<div id="conf">'+
    '<div class="blue">Choose theme for Editors</div>'+
	'<div class="white"><select id="conftheme"><option selected>default</option><option>3024-day</option><option>3024-night</option><option>ambiance</option><option>blackboard</option><option>cobalt</option><option>eclipse</option><option>elegant</option><option>erlang-dark</option><option>lesser-dark</option><option>mbo</option><option>midnight</option><option>monokai</option><option>neat</option><option>night</option><option>paraiso-dark</option><option>paraiso-light</option><option>pastel-on-dark</option><option>rubyblue</option><option>solarized-dark</option><option>solarized-light</option><option>the-matrix</option><option>tomorrow-night-eighties</option><option>twilight</option><option>vibrant-ink</option><option>xq-dark</option><option>xq-light</option><option>mdn-like</option></select></div>'+
	'<div class="bootbtn"><input type="button" onclick="saveconf();" value="Save" class="magenta" /><input type="button" onclick="unloadconf();" value="Close" class="black" /></div>'+
  '</div>';

function loadconf(){boot.innerHTML=conf;confloaded=1;}
function unloadconf(){boot.innerHTML=bootmsg;if(fullyloaded==1){boot.style.display='none';}}
function saveconf(){var s=document.getElementById("conftheme");confeditortheme = s.options[s.selectedIndex].innerHTML;if(fullyloaded==1){boot.style.display='none';}else{boot.innerHTML=bootmsg;}init();}
function siteloaded(){var inf=document.createElement('div');inf.setAttribute('class','loadedinfo orange');inf.innerHTML='Website is completely loaded';boot.appendChild(inf);}

var c = document.createElement('div');
c.innerHTML = '<p id="done" title="Show Smile/Sad & ThumbUP/ThumbDown when your triggered function is successfully done or not" class="icon"></p><ul id="top"><li class="mainmenu"><a title="Menu" id="menu" class="icon menu" href="#"></a><ul style="width: 220px;" class="menuitem" title=""><li><a title="All Beautifier tools for HTML/CSS/JS Editor" href="#">Beautify<i class="black" style="margin-right:15px;">New</i><div class="menubullet"></div></a><ul><li><a id="tidyjs" href="#">JS Beautifier</a></li><li><a id="tidycss" href="#">CSS Beautifier<i class="magenta">1</i></a></li><li><a id="beautifycss" href="#">CSS Beautifier<i class="black">2</i></a></li><li><a id="tabifier" href="#">HTML Beautifier</a></li></ul></li><li><a title="Beautify/Auto Format HTML Editor" href="#">AutoFormat<div class="menubullet"></div></a><ul><li><a onclick="javascript:autoFormatSelection()" href="#">AutoFormat Selected</a></li><li><a onclick="javascript:commentSelection(true)" href="#">Comment Selected</a></li><li><a onclick="javascript:commentSelection(false)" href="#">Uncomment Selected</a></li></ul></li><li><a title="Compress HTML/CSS/JS Code" href="#">Compress<i class="magenta" style="margin-right:15px;">New</i><div class="menubullet"></div></a><ul><li><a id="compressjs" href="#">JS Compress</a></li><li><a id="compresscss" href="#">CSS Compress</a></li><li><a id="compresshtml" href="#">HTML Compress</a></li></ul></li><li><a title="Add jQ/JS SCRIPTS from pre-defined library" id="jslib" href="#">JS Library</a></li><li><a title="Add CSS from pre-defined library" id="csslib" href="#">CSS Library</a></li><li><a title="Inclued CSS RESET, META Tags & STYLESHEET Tag" href="#">CSS/META<div class="menubullet"></div></a><ul><li><a id="cssreset" href="#">CSS RESET</a></li><li><a id="metalib" href="#">META Tags</a></li><li><a id="styletag" href="#">STYLESHEET Tag</a></li></ul></li><li><a title="jQ/JS Tools : DocReady, Integrated jQ Code & jQ/JS Packer/Unpacker" href="#">JS Tools<div class="menubullet"></div></a><ul><li><a id="docready" href="#">DocReady jQ Code</a></li><li><a id="integcode" href="#">Integrated jq Code</a></li><li><a id="jsunpack" href="#">Packer/Unpacker<i class="blue">New</i></a></li></ul></li><li><a title="Include Conditions for IE" id="ielib" href="#">IE Conditioner</a></li><li><a title="Encrypt HTML Code & Protect it from stolen" id="encrypthtml" href="#">Encrypt HTML<i class="blue">New</i></a></li><li><a title="Convert HTML Code in JS for saving it from stolen" id="h2js" href="#">HTML to JS<i class="orange">New</i></a></li></ul></li><li class="mainmenu"><a title="On/Off intro tip" id="bulb" class="icon bulb" href="#"></a></li><li id="warning" class="mainmenu none"><a title="All WARNINGS/Required changes into your coding is provided here with their solution" class="icon warning" href="#"></a></li><li class="mainmenu"><a id="auto" title="On/Off AutoUpdation of RESULT" class="icon pause" href="#"></a></li><li id="refresh" class="mainmenu none"><a title="Update the RESULT." class="icon refresh" href="#"></a></li><li class="mainmenu"><a id="magic" title="SAMPLE coding for HTML/JS/CSS Editor" class="icon magic" href="#"></a><ul style="width:100px;margin-left:-35px;text-align:center;" class="menuitem"><li><a id="rjs" href="#">JS</a></li><li><a id="rcss" href="#">CSS</a></li><li><a id="rhtml" href="#">HTML</a></li><li><a id="rall" href="#">ALL</a></li></ul></li><li class="mainmenu"><a id="trash" title="Clear any/all Editors" class="icon trash" href="#"></a><ul style="width:100px;margin-left:-35px;text-align:center;" class="menuitem"><li><a id="tjs" href="#">JS</a></li><li><a id="tcss" href="#">CSS</a></li><li><a id="thtml" href="#">HTML</a></li><li><a id="tall" href="#">ALL</a></li></ul></li><li class="right mainmenu"><a title="Show preview in a new window/tab" id="go" class="icon go" href="#"></a></li><li class="right mainmenu"><a title="Lock WebSite if you are away from your PC/Laptop" id="lock" class="icon unlock" href="#"></a></li><li class="right mainmenu"><a title="Auto-Correct/Provide Assistance regarding errors into your code" id="eye" class="icon eyeopen" href="#"></a></li><li class="right mainmenu"><a title="Download any/all coding" id="download" class="icon download" href="#"></a><ul style="margin-left:-43px;" class="menuitem"><li><a id="djs" href="#">Download JS</a></li><li><a id="dcss" href="#">Download CSS</a></li><li><a id="dhtml" href="#">Download HTML</a></li><li><a id="dall" href="#">ALL-IN-ONE</a></li></ul></li><li class="right mainmenu"><a title="NoInfo" id="code" class="icon code" href="#"></a></li><li class="right mainmenu"><a title="Enable/Disable Notification Sound" id="sound" class="icon soundon" href="#"></a></li><li class="right mainmenu"><a title="Search text/pharse from your code" id="search" class="icon search" href="#"></a><ul style="width:100%;left:0;padding:5px 0;" class="white menuitem"><li style="height:30px;"><input style="border:1px solid #ccc;height:30px;width:90%;margin:0 5%;" type="text" placeholder="Search" /></li></ul></li><li class="right mainmenu"><a title="Change theme of Editor or WebSite" id="theme" class="icon down2" href="#"></a><ul style="width:200px;margin-left:-85px;text-align:Center;" class="menuitem"><li><a data-theme="light" class="aiotheme" href="#">Light</a></li><li><a data-theme="dark" class="aiotheme" href="#">Dark</a></li><li><div class="cmtheme"><h4>Editors Theme</h4><select onchange="selectTheme()" id="cmtheme"><option selected>default</option><option>3024-day</option><option>3024-night</option><option>ambiance</option><option>blackboard</option><option>cobalt</option><option>eclipse</option><option>elegant</option><option>erlang-dark</option><option>lesser-dark</option><option>mbo</option><option>midnight</option><option>monokai</option><option>neat</option><option>night</option><option>paraiso-dark</option><option>paraiso-light</option><option>pastel-on-dark</option><option>rubyblue</option><option>solarized-dark</option><option>solarized-light</option><option>the-matrix</option><option>tomorrow-night-eighties</option><option>twilight</option><option>vibrant-ink</option><option>xq-dark</option><option>xq-light</option><option>mdn-like</option></select></div></li></ul></li></ul><div id="bottom"><div class="resizer"><em title="Show one Editor at a time in one row & RESULT into another one" class="vth"></em><em title="Show one Editor at a time into a column & RESULT into another one" class="hth"></em><em title="Show Editors & RESULT Vertically (25:25:25:25)" class="v"></em><em title="Show Editors & RESULT Horizontally (25:25:25:25)" class="h"></em><em title="Show HTML/CSS/JS into one column & RESULT into another (50[33:33:33]:50)" class="ht1"></em><em title="Show one Editor at a time in a row and RESULT into another (50[33:33:33]:50)" class="vt1"></em><em title="Show Editors & RESULT into 25:25:25:25 Ratio" class="sq"></em></div><div id="hint"><i title="Load new HINT" class="icon refresh"></i><p class="howto" title="Provide important How-To notifications, so that you can utilize all functions of that website"></p></div></div><div id="main" class="hth"><div id="editor"><div id="hvthdiv"><div id="changer"><i title="Show HTML Editor" class="icon html active"></i><i title="Show CSS Editor" class="icon css"></i><i title="Show jQ/JS Editor" class="icon code"></i></div><div id="hvthinfo"></div></div><div id="html" class="ecode"><div><i title="Resize HTML Editor" class="ico try icon html"></i><textarea id="htmlarea" name="htmlarea" placeholder="HTML(CSS+JS) Code goes here..."></textarea></div></div><div id="css" class="ecode"><div><i title="Resize CSS Editor" class="ico icon css"></i><textarea id="cssarea" name="cssarea" placeholder="CSS Code goes here..."></textarea></div></div><div id="js" class="ecode"><div><i title="Resize jQ/JS Editor" class="ico icon code"></i><textarea id="jsarea" name="jsarea" placeholder="JS/JQ goes here..."></textarea></div></div></div><div id="output"><div><i title="Resize RESULT Window" class="rzoom ico icon desktop"></i><iframe name="resultarea" id="resultarea"></iframe><i title="Resize RESULT Window" id="zoom" class="rzoom ico2 icon full"></i></div></div></div>';
document.body.appendChild(c);

document.Echo=document["standard"+"Write"]==null?document["write"]:document["standard"+"Write"];var head=function(o){var js=o.js,j,css=o.css,c,main=o.main,m;for(var x in css){c=document.createElement('link');c.setAttribute('rel','stylesheet');c.setAttribute('type','text/css');c.setAttribute('href',css[x]+'.css');if(typeof c!='undefined'){document.getElementsByTagName('head')[0].appendChild(c);}}for(var y in js){j=js[y]+'.js';document.Echo('<script type="text/javascript" src="'+j+'"></'+'script>');}
window.onload=function(){for(var z in main){m=document.createElement('script');m.src=main[z]+'.js';m.type="text/javascript";document.body.appendChild(m);}main.splice(0,main.length);main=null;m=null;fullyloaded=1;setTimeout(function(){rmsg();init();if(confloaded===0){document.getElementById('boot').style.display='none';}else{siteloaded();}},1000);}
css.splice(0,css.length);css=null;c=null,js.splice(0,js.length);js=null;j=null;};
head({
  css:['mine/mine','files/dialog',,'files/dropit','files/code-completion','files/lint','files/show-hint','files/tern-extension','files/show-hint-eclipse','files/show-context-info','files/templates-hint','files/mdn-like'],
  js:['files/jquery.min','files/codemirror','files/formatting','files/xml','files/javascript','files/css','files/poptags','files/pophtmlmixed','files/code-completion','files/css-completion','files/html-completion','files/jquery.history','files/browserdetect','files/gettheme','files/dropit','files/jshint','files/emmet.min','files/codemirror3','files/cm3javascript','files/lint','files/javascript-lint','files/javascript-hint','files/show-hint','files/closetag','files/closebrackets','files/matchbrackets','files/runmode','files/jshint-r12-80277ef','files/acorn','files/acorn_loose','files/walk','files/signal','files/tern','files/def','files/comment','files/infer','files/cm3tern','files/tern-extension','files/emac5.json','files/jquery.json','files/browser.json','files/keywords.json','files/show-context-info','files/templates-hint','files/javascript-templates','mine/tabifier'],
  main:['mine/main','mine/core']
});