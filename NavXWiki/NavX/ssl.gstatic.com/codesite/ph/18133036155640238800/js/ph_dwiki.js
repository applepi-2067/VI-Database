var Z8c=!1;function Z9c(){Z8c=!0}function Z$c(a){if(null!=a){for(var b=a.nextSibling;b&&"LI"!=b.tagName&&"UL"!=b.tagName;)b=b.nextSibling;if(!b||"LI"==b.tagName)for(b=a.firstChild;b&&"UL"!=b.tagName;)b=b.nextSibling;return b}}function Zad(a){a.stopPropagation();if(!Z8c){a=a.target;var b=Z$c(a);b&&("treeopen"==a.className?(a.className="",b.className=""):(a.className="treeopen",b.className="treeleafcontainer"))}}var Zbd=void 0;
function Zcd(a){if(a)for(a=a.firstChild;a;){if("LI"==a.tagName){for(var b=a.firstChild;b&&"A"!=b.tagName;)b=b.nextSibling;b&&"A"==b.tagName&&(ZA(b,"click",Z9c),document.location.href.split("?")[0]==b.href||document.location.href.split("#")[0]==b.href)&&(Zbd=b);(b=Z$c(a))?(ZA(a,"click",Zad),Zcd(b)):a.className="treeleaf"}a=a.nextSibling}}Zcd(Z$c(Zs("sidebarcontainer")));
if(Zbd){Zbd.className="currentpagelink";for(var Z4=Zbd.parentNode.parentNode;Z4&&"UL"==Z4.tagName;){Z4.className="treeleafcontainer";for(var Z5=Z4.previousSibling;Z5&&"LI"!=Z5.tagName;)Z5=Z5.previousSibling;Z5&&"LI"==Z5.tagName&&(Z5.className="treeopen");Z4=Z4.parentNode}var Zdd=Zbd.parentNode;if(!Zdd.className){var Zed=Z$c(Zdd);Zed&&(Zdd.className="treeopen",Zed.className="treeleafcontainer")}}
_DW_toggleSidebar=function(a){a=Znc(a);CS_env.token&&ZP(CS_env.projectHomeUrl+"/w/setSidebarPref.do",Zba,{expanded:a?1:0})};function Zfd(a){a=ZK(a);var b=Zs("wikimaincol");b.innerHTML=a.preview_html;prettyPrint();gapi.plusone.go(b)}_DW_syncPreview=function(a){ZP(CS_env.projectHomeUrl+"/w/syncWikiPreviewJSON",Zfd,{content:a})};