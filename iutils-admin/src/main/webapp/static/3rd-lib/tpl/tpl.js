/*! tpl.js 0.3.1, github.com/niceue/tpl.js */
!function(n){function t(n,t){var i=e(n);return t?i(t):i}function e(n){n=n||"","#"===n.charAt(0)&&(n=document.getElementById(n.substring(1)).innerHTML);for(var e,i,r,_=function(n){return n.trim?n.trim():n.replace(/^\s*|\s*$/g,"")},u=function(n){return n.replace(/('|\\|\r?\n)/g,"\\$1")},f=t.begin,s=t.end,c=t.variable,d=c||"$",o="var "+d+"="+d+"||this,__='',___,                echo=function(s){__+=s},                include=function(t,d){__+=tpl(t).call(d||"+d+")};"+(c?"":"with($||{}){"),g=f.length,l=s.length,a=n.indexOf(f);-1!=a&&(e=i?a+g:n.indexOf(s),!(a>e));)o+="__+='"+u(n.substring(0,a))+"';",i?(n=n.substring(g+l+1),i--):(r=_(n.substring(a+g,e)),"#"===r?i=1:0===r.indexOf("=")?(r=r.substring(1),o+="___="+r+";typeof ___!=='undefined'&&(__+=___);"):o+="\n"+r+"\n"),n=n.substring(e+l),a=n.indexOf(f+(i?"#"+s:""));return o+="__+='"+u(n)+"'"+(c?";":"}")+"return __",new Function(d,o)}t.begin="<#",t.end="#>",n.tpl=t,"function"==typeof define&&define("tpl",[],function(){return t})}(this);