﻿(function(g,f,b,d,c,e,z){/*! Jssor */
$Jssor$=g.$Jssor$=g.$Jssor$||{};new(function(){});var m=function(){var b=this,a={};b.$On=b.addEventListener=function(b,c){if(typeof c!="function")return;if(!a[b])a[b]=[];a[b].push(c)};b.$Off=b.removeEventListener=function(e,d){var b=a[e];if(typeof d!="function")return;else if(!b)return;for(var c=0;c<b.length;c++)if(d==b[c]){b.splice(c,1);return}};b.e=function(e){var c=a[e],d=[];if(!c)return;for(var b=1;b<arguments.length;b++)d.push(arguments[b]);for(var b=0;b<c.length;b++)try{c[b].apply(g,d)}catch(f){}}},h;(function(){h=function(a,b){this.x=typeof a=="number"?a:0;this.y=typeof b=="number"?b:0};})();var l=g.$JssorEasing$={$EaseLinear:function(a){return a},$EaseGoBack:function(a){return 1-b.abs(2-1)},$EaseSwing:function(a){return-b.cos(a*b.PI)/2+.5},$EaseInQuad:function(a){return a*a},$EaseOutQuad:function(a){return-a*(a-2)},$EaseInOutQuad:function(a){return(a*=2)<1?1/2*a*a:-1/2*(--a*(a-2)-1)},$EaseInCubic:function(a){return a*a*a},$EaseOutCubic:function(a){return(a-=1)*a*a+1},$EaseInOutCubic:function(a){return(a*=2)<1?1/2*a*a*a:1/2*((a-=2)*a*a+2)},$EaseInQuart:function(a){return a*a*a*a},$EaseOutQuart:function(a){return-((a-=1)*a*a*a-1)},$EaseInOutQuart:function(a){return(a*=2)<1?1/2*a*a*a*a:-1/2*((a-=2)*a*a*a-2)},$EaseInQuint:function(a){return a*a*a*a*a},$EaseOutQuint:function(a){return(a-=1)*a*a*a*a+1},$EaseInOutQuint:function(a){return(a*=2)<1?1/2*a*a*a*a*a:1/2*((a-=2)*a*a*a*a+2)},$EaseInSine:function(a){return 1-b.cos(a*b.PI/2)},$EaseOutSine:function(a){return b.sin(a*b.PI/2)},$EaseInOutSine:function(a){return-1/2*(b.cos(b.PI*a)-1)},$EaseInExpo:function(a){return a==0?0:b.pow(2,10*(a-1))},$EaseOutExpo:function(a){return a==1?1:-b.pow(2,-10*a)+1},$EaseInOutExpo:function(a){return a==0||a==1?a:(a*=2)<1?1/2*b.pow(2,10*(a-1)):1/2*(-b.pow(2,-10*--a)+2)},$EaseInCirc:function(a){return-(b.sqrt(1-a*a)-1)},$EaseOutCirc:function(a){return b.sqrt(1-(a-=1)*a)},$EaseInOutCirc:function(a){return(a*=2)<1?-1/2*(b.sqrt(1-a*a)-1):1/2*(b.sqrt(1-(a-=2)*a)+1)},$EaseInElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return-(b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c))},$EaseOutElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return b.pow(2,-10*a)*b.sin((a-d)*2*b.PI/c)+1},$EaseInOutElastic:function(a){if(!a||a==1)return a;var c=.45,d=.1125;return(a*=2)<1?-.5*b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c):b.pow(2,-10*(a-=1))*b.sin((a-d)*2*b.PI/c)*.5+1},$EaseInBack:function(a){var b=1.70158;return a*a*((b+1)*a-b)},$EaseOutBack:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},$EaseInOutBack:function(a){var b=1.70158;return(a*=2)<1?1/2*a*a*(((b*=1.525)+1)*a-b):1/2*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},$EaseInBounce:function(a){return 1-l.$EaseOutBounce(1-a)},$EaseOutBounce:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},$EaseInOutBounce:function(a){return a<1/2?l.$EaseInBounce(a*2)*.5:l.$EaseOutBounce(a*2-1)*.5+.5},$EaseInWave:function(a){return 1-b.cos(a*b.PI*2)},$EaseOutWave:function(a){return b.sin(a*b.PI*2)},$EaseOutJump:function(a){return 1-((a*=2)<1?(a=1-a)*a*a:(a-=1)*a*a)},$EaseInJump:function(a){return(a*=2)<1?a*a*a:(a=2-a)*a*a}},i={Fe:function(a){return(a&3)==1},He:function(a){return(a&3)==2},De:function(a){return(a&12)==4},Ee:function(a){return(a&12)==8}},q={Xe:37,Ze:39},o,n={Ie:0,Re:1,Qe:2,Je:3,Oe:4,Ne:5},y=1,u=2,w=3,v=4,x=5,j,a=new function(){var i=this,m=n.Ie,j=0,q=0,P=0,t=0,cb=navigator.appName,k=navigator.userAgent;function D(){if(!m)if(cb=="Microsoft Internet Explorer"&&!!g.attachEvent&&!!g.ActiveXObject){var d=k.indexOf("MSIE");m=n.Re;q=parseFloat(k.substring(d+5,k.indexOf(";",d)));/*@cc_on P=@_jscript_version@*/;j=f.documentMode||q}else if(cb=="Netscape"&&!!g.addEventListener){var c=k.indexOf("Firefox"),a=k.indexOf("Safari"),h=k.indexOf("Chrome"),b=k.indexOf("AppleWebKit");if(c>=0){m=n.Qe;j=parseFloat(k.substring(c+8))}else if(a>=0){var i=k.substring(0,a).lastIndexOf("/");m=h>=0?n.Oe:n.Je;j=parseFloat(k.substring(i+1,a))}if(b>=0)t=parseFloat(k.substring(b+12))}else{var e=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);if(e){m=n.Ne;j=parseFloat(e[2])}}}function l(){D();return m==y}function G(){return l()&&(j<6||f.compatMode=="BackCompat")}function V(){D();return m==u}function M(){D();return m==w}function hb(){D();return m==v}function ib(){D();return m==x}function R(){return M()&&t>534&&t<535}function s(){return l()&&j<9}var B;function r(a){if(!B){p(["transform","WebkitTransform","msTransform","MozTransform","OTransform"],function(b){if(!i.Ib(a.style[b])){B=b;return c}});B=B||"transform"}return B}function ab(a){return Object.prototype.toString.call(a)}var J;function p(a,c){if(ab(a)=="[object Array]"){for(var b=0;b<a.length;b++)if(c(a[b],b,a))break}else for(var d in a)if(c(a[d],d,a))break}function jb(){if(!J){J={};p(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){J["[object "+a+"]"]=a.toLowerCase()})}return J}function A(a){return a==d?String(a):jb()[ab(a)]||"object"}function bb(b,a){setTimeout(b,a||0)}function I(b,d,c){var a=!b||b=="inherit"?"":b;p(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.lastIndex+1,a.length-(b.lastIndex+1));a=d+e}});a=c+(a.indexOf(" ")!=0?" ":"")+a;return a}function W(b,a){if(j<9)b.style.filter=a}function fb(b,a,c){if(P<9){var e=b.style.filter,g=new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),f=a?"progid:DXImageTransform.Microsoft.Matrix(M11="+a[0][0]+", M12="+a[0][1]+", M21="+a[1][0]+", M22="+a[1][1]+", SizingMethod='auto expand')":"",d=I(e,[g],f);W(b,d);i.ic(b,c.y);i.fc(b,c.x)}}i.Ob=l;i.Mb=hb;i.Sb=ib;i.tb=s;i.qb=function(){return j};i.Vc=function(){return t};i.$Delay=bb;i.I=function(a){if(i.qc(a))a=f.getElementById(a);return a};i.ac=function(a){return a?a:g.event};i.vc=function(a){a=i.ac(a);var b=new h;if(a.type=="DOMMouseScroll"&&V()&&j<3){b.x=a.screenX;b.y=a.screenY}else if(typeof a.pageX=="number"){b.x=a.pageX;b.y=a.pageY}else if(typeof a.clientX=="number"){b.x=a.clientX+f.body.scrollLeft+f.documentElement.scrollLeft;b.y=a.clientY+f.body.scrollTop+f.documentElement.scrollTop}return b};i.We=function(b){if(l()&&q<9){var a=/opacity=([^)]*)/.exec(b.style.filter||"");return a?parseFloat(a[1])/100:1}else return parseFloat(b.style.opacity||"1")};i.Ub=function(c,a,f){if(l()&&q<9){var h=c.style.filter||"",i=new RegExp(/[\s]*alpha\([^\)]*\)/g),e=b.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+") ";var g=I(h,[i],d);W(c,g)}else c.style.opacity=a==1?"":b.round(a*100)/100};function O(g,c){var f=c.$Rotate||0,e=c.gc||1;if(s()){var k=i.Ke(f/180*b.PI,e,e);fb(g,!f&&e==1?d:k,i.Le(k,c.bb,c.ab))}else{var h=r(g);if(h){var j="rotate("+f%360+"deg) scale("+e+")";if(a.Mb()&&t>535)j+=" perspective(2000px)";g.style[h]=j}}}i.Se=function(b,a){if(R())bb(i.q(d,O,b,a));else O(b,a)};i.Te=function(b,c){var a=r(b);if(a)b.style[a+"Origin"]=c};i.Ue=function(a,c){if(l()&&q<9||q<10&&G())a.style.zoom=c==1?"":c;else{var b=r(a);if(b){var f="scale("+c+")",e=a.style[b],g=new RegExp(/[\s]*scale\(.*?\)/g),d=I(e,[g],f);a.style[b]=d}}};i.Pe=function(a){if(!a.style[r(a)]||a.style[r(a)]=="none")a.style[r(a)]="perspective(2000px)"};i.d=function(a,c,d,b){a=i.I(a);if(a.addEventListener){c=="mousewheel"&&a.addEventListener("DOMMouseScroll",d,b);a.addEventListener(c,d,b)}else if(a.attachEvent){a.attachEvent("on"+c,d);b&&a.setCapture&&a.setCapture()}};i.ze=function(a,c,d,b){a=i.I(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};i.Ae=function(b,a){i.d(s()?f:g,"mouseup",b,a)};i.U=function(a){a=i.ac(a);a.preventDefault&&a.preventDefault();a.cancel=c;a.returnValue=e};i.q=function(e,d){for(var b=[],a=2;a<arguments.length;a++)b.push(arguments[a]);var c=function(){for(var c=b.concat([]),a=0;a<arguments.length;a++)c.push(arguments[a]);return d.apply(e,c)};return c};i.Be=function(a,c){var b=f.createTextNode(c);i.jc(a);a.appendChild(b)};i.jc=function(a){a.innerHTML=""};i.fb=function(c){for(var b=[],a=c.firstChild;a;a=a.nextSibling)a.nodeType==1&&b.push(a);return b};function N(a,c,b,f){if(!b)b="u";for(a=a?a.firstChild:d;a;a=a.nextSibling)if(a.nodeType==1){if(a.getAttribute(b)==c)return a;if(f){var e=N(a,c,b,f);if(e)return e}}}i.o=N;function S(a,c,e){for(a=a?a.firstChild:d;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)return a;if(e){var b=S(a,c,e);if(b)return b}}}i.xe=S;i.Ce=function(b,a){return b.getElementsByTagName(a)};i.j=function(c){for(var b=1;b<arguments.length;b++){var a=arguments[b];if(a)for(var d in a)c[d]=a[d]}return c};i.Ib=function(a){return A(a)=="undefined"};i.Ve=function(a){return A(a)=="function"};i.bc=Array.isArray||function(a){return A(a)=="array"};i.qc=function(a){return A(a)=="string"};i.Ye=function(a){return!isNaN(parseFloat(a))&&isFinite(a)};i.f=p;i.lb=function(a){return i.yc("DIV",a)};i.af=function(a){return i.yc("SPAN",a)};i.yc=function(b,a){a=a||f;return a.createElement(b)};i.db=function(){};i.O=function(a,b){return a.getAttribute(b)};i.bf=function(b,c,a){b.setAttribute(c,a)};i.Bc=function(a){return a.className};i.Nc=function(b,a){b.className=a?a:""};i.Mc=function(a){return a.style.display};i.Y=function(b,a){b.style.display=a||""};i.Ab=function(b,a){b.style.overflow=a};i.V=function(a){return a.parentNode};i.z=function(a){i.Y(a,"none")};i.s=function(a,b){i.Y(a,b==e?"none":"")};i.id=function(a){return a.style.position};i.v=function(b,a){b.style.position=a};i.Hc=function(a){return parseInt(a.style.top,10)};i.k=function(a,b){a.style.top=b+"px"};i.Pc=function(a){return parseInt(a.style.left,10)};i.l=function(a,b){a.style.left=b+"px"};i.g=function(a){return parseInt(a.style.width,10)};i.M=function(c,a){c.style.width=b.max(a,0)+"px"};i.i=function(a){return parseInt(a.style.height,10)};i.L=function(c,a){c.style.height=b.max(a,0)+"px"};i.zc=function(a){return a.style.cssText};i.dc=function(b,a){b.style.cssText=a};i.Ec=function(b,a){b.removeAttribute(a)};i.fc=function(b,a){b.style.marginLeft=a+"px"};i.ic=function(b,a){b.style.marginTop=a+"px"};i.Kb=function(a){return parseInt(a.style.zIndex)||0};i.T=function(c,a){c.style.zIndex=b.ceil(a)};i.dd=function(b,a){b.style.backgroundColor=a};i.nd=function(){return l()&&j<10};i.md=function(d,c){if(c)d.style.clip="rect("+b.round(c.$Top)+"px "+b.round(c.$Right)+"px "+b.round(c.$Bottom)+"px "+b.round(c.$Left)+"px)";else{var g=i.zc(d),f=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],e=I(g,f,"");a.dc(d,e)}};i.x=function(){return+new Date};i.w=function(b,a){b.appendChild(a)};i.ld=function(b,a){p(a,function(a){i.w(b,a)})};i.rb=function(c,b,a){c.insertBefore(b,a)};i.cb=function(b,a){b.removeChild(a)};i.pd=function(b,a){p(a,function(a){i.cb(b,a)})};i.qd=function(a){i.pd(a,i.fb(a))};i.ed=function(b,a){return parseInt(b,a||10)};i.nc=function(a){return parseFloat(a)};i.uc=function(b,a){var c=f.body;while(a&&b!=a&&c!=a)try{a=a.parentNode}catch(d){return e}return b==a};i.u=function(b,a){return b.cloneNode(a)};function L(b,a,c){a.onload=d;a.abort=d;b&&b(a,c)}i.Z=function(e,b){if(i.Sb()&&j<11.6||!e)L(b,d);else{var a=new Image;a.onload=i.q(d,L,b,a);a.onabort=i.q(d,L,b,a,c);a.src=e}};i.fe=function(e,b,f){var d=e.length+1;function c(a){d--;if(b&&a&&a.src==b.src)b=a;!d&&f&&f(b)}a.f(e,function(b){a.Z(b.src,c)});c()};i.hc=function(d,k,j,i){if(i)d=a.u(d,c);for(var h=a.Ce(d,k),f=h.length-1;f>-1;f--){var b=h[f],e=a.u(j,c);a.Nc(e,a.Bc(b));a.dc(e,a.zc(b));var g=a.V(b);a.rb(g,e,b);a.cb(g,b)}return d};var C;function lb(b){var g=this,h,d,j;function f(){var c=h;if(d)c+="dn";else if(j)c+="av";a.Nc(b,c)}function k(){C.push(g);d=c;f()}g.de=function(){d=e;f()};g.mc=function(a){j=a;f()};b=i.I(b);if(!C){i.Ae(function(){var a=C;C=[];p(a,function(a){a.de()})});C=[]}h=i.Bc(b);a.d(b,"mousedown",k)}i.Eb=function(a){return new lb(a)};var Z={$Opacity:i.We,$Top:i.Hc,$Left:i.Pc,Cb:i.g,zb:i.i,S:i.id,Yd:i.Mc,$ZIndex:i.Kb},F={$Opacity:i.Ub,$Top:i.k,$Left:i.l,Cb:i.M,zb:i.L,Yd:i.Y,$Clip:i.md,mg:i.fc,lg:i.ic,pb:i.Se,S:i.v,$ZIndex:i.T};function H(){return F}function U(){H();F.pb=F.pb;return F}i.Xd=H;i.Wd=U;i.be=function(c,b){H();var a={};p(b,function(d,b){if(Z[b])a[b]=Z[b](c)});return a};i.C=function(c,b){var a=H();p(b,function(d,b){a[b]&&a[b](c,d)})};o=new function(){var a=this;function b(d,g){for(var j=d[0].length,i=d.length,h=g[0].length,f=[],c=0;c<i;c++)for(var k=f[c]=[],b=0;b<h;b++){for(var e=0,a=0;a<j;a++)e+=d[c][a]*g[a][b];k[b]=e}return f}a.wb=function(d,c){var a=b(d,[[c.x],[c.y]]);return new h(a[0][0],a[1][0])}};i.Ke=function(d,a,c){var e=b.cos(d),f=b.sin(d);return[[e*a,-f*c],[f*a,e*c]]};i.Le=function(d,c,a){var e=o.wb(d,new h(-c/2,-a/2)),f=o.wb(d,new h(c/2,-a/2)),g=o.wb(d,new h(c/2,a/2)),i=o.wb(d,new h(-c/2,a/2));return new h(b.min(e.x,f.x,g.x,i.x)+c/2,b.min(e.y,f.y,g.y,i.y)+a/2)}};j=function(m,r,g,O,C,y){m=m||0;var f=this,q,n,o,x,z=0,B,M,L,D,j=0,t=0,E,k=m,i,h,p,u=[],A;function I(b){i+=b;h+=b;k+=b;j+=b;t+=b;a.f(u,function(a){a,a.$Shift(b)})}function N(a,b){var c=a-i+m*b;I(c);return h}function w(w,G){var m=w;if(p&&(m>=h||m<=i))m=((m-i)%p+p)%p+i;if(!E||x||G||j!=m){var o=b.min(m,h);o=b.max(o,i);if(!E||x||G||o!=t){if(y){var s=(o-k)/r;if(g.ae&&a.Mb())s=b.round(s*r/16)/r*16;if(g.$Reverse)s=1-s;var e={};for(var n in y){var R=M[n]||1,J=L[n]||[0,1],l=(s-J[0])/J[1];l=b.min(b.max(l,0),1);l=l*R;var H=b.floor(l);if(l!=H)l-=H;var Q=B[n]||B.D,I=Q(l),q,K=C[n],F=y[n];if(a.Ye(F))q=K+(F-K)*I;else{q=a.j({E:{}},C[n]);a.f(F.E,function(c,b){var a=c*I;q.E[b]=a;q[b]+=a})}e[n]=q}if(C.$Zoom)e.pb={$Rotate:e.$Rotate||0,gc:e.$Zoom,bb:g.bb,ab:g.ab};if(y.$Clip&&g.$Move){var v=e.$Clip.E,D=(v.$Top||0)+(v.$Bottom||0),z=(v.$Left||0)+(v.$Right||0);e.$Left=(e.$Left||0)+z;e.$Top=(e.$Top||0)+D;e.$Clip.$Left-=z;e.$Clip.$Right-=z;e.$Clip.$Top-=D;e.$Clip.$Bottom-=D}if(e.$Clip&&a.nd()&&!e.$Clip.$Top&&!e.$Clip.$Left&&e.$Clip.$Right==g.bb&&e.$Clip.$Bottom==g.ab)e.$Clip=d;a.f(e,function(b,a){A[a]&&A[a](O,b)})}f.Pb(t-k,o-k)}t=o;a.f(u,function(b,c){var a=w<j?u[u.length-c-1]:b;a.B(w,G)});var P=j,N=w;j=m;E=c;f.nb(P,N)}}function F(a,c){c&&a.ub(h,1);h=b.max(h,a.K());u.push(a)}function H(){if(q){var d=a.x(),e=b.min(d-z,a.Sb()?80:20),c=j+e*o;z=d;if(c*o>=n*o)c=n;w(c);if(!x&&c*o>=n*o)J(D);else a.$Delay(H,g.$Interval)}}function v(d,e,g){if(!q){q=c;x=g;D=e;d=b.max(d,i);d=b.min(d,h);n=d;o=n<j?-1:1;f.Xc();z=a.x();H()}}function J(a){if(q){x=q=D=e;f.Wc();a&&a()}}f.$Play=function(a,b,c){v(a?j+a:h,b,c)};f.Zc=function(b,a,c){v(b,a,c)};f.H=function(){J()};f.te=function(a){v(a)};f.J=function(){return j};f.Uc=function(){return n};f.Db=function(){return t};f.B=w;f.Nb=function(){w(i,c)};f.$Move=function(a){w(j+a)};f.$IsPlaying=function(){return q};f.ke=function(a){p=a};f.ub=N;f.$Shift=I;f.G=function(a){F(a,0)};f.Tb=function(a){F(a,1)};f.K=function(){return h};f.nb=a.db;f.Xc=a.db;f.Wc=a.db;f.Pb=a.db;f.Qb=a.x();g=a.j({$Interval:15},g);p=g.Tc;A=a.j({},a.Xd(),g.ad);i=k=m;h=m+r;var M=g.$Round||{},L=g.$During||{};B=a.j({D:a.Ve(g.$Easing)&&g.$Easing||l.$EaseSwing},g.$Easing)};var r;new function(){;function n(o,Wb){var k=this;function rc(){var a=this;j.call(a,-1e8,2e8);a.Fd=function(){var c=a.Db(),d=b.floor(c),f=v(d),e=c-b.floor(c);return{F:f,Ed:d,S:e}};a.nb=function(d,a){var e=b.floor(a);if(e!=a&&a>d)e++;Lb(e,c);k.e(n.$EVT_POSITION_CHANGE,v(a),v(d),a,d)}}function qc(){var b=this;j.call(b,0,0,{Tc:u});a.f(B,function(a){a.ke(u);b.Tb(a);a.$Shift(rb/Rb)})}function pc(){var a=this,b=Kb.$Elmt;j.call(a,-1,2,{$Easing:l.$EaseLinear,ad:{S:Qb},Tc:u},b,{S:1},{S:-1});a.kb=b}function ec(o,m){var a=this,f,g,h,l,b;j.call(a,-1e8,2e8);a.Xc=function(){M=c;Q=d;k.e(n.$EVT_SWIPE_START,v(x.J()),x.J())};a.Wc=function(){M=e;l=e;var a=x.Fd();k.e(n.$EVT_SWIPE_END,v(x.J()),x.J());!a.S&&tc(a.Ed,r)};a.nb=function(d,c){var a;if(l)a=b;else{a=g;if(h)a=i.$SlideEasing(c/h)*(g-f)+f}x.B(a)};a.mb=function(b,d,c,e){f=b;g=d;h=c;x.B(b);a.B(0);a.Zc(c,e)};a.zd=function(e){l=c;b=e;a.$Play(e,d,c)};a.yd=function(a){b=a};x=new rc;x.G(o);x.G(m)}function fc(){var c=this,b=Pb();a.T(b,0);c.$Elmt=b;c.xb=function(){a.z(b);a.jc(b)}}function oc(p,o){var f=this,s,w,G,x,g,y=[],Z,q,bb,F,W,D,l,t,h;j.call(f,-E,E+1,{});function C(a){w&&w.Yb();s&&s.Yb();ab(p,a);s=new H.$Class(p,H,1);w=new H.$Class(p,H);w.Nb();s.Nb()}function db(){s.Qb<H.Qb&&C()}function M(o,q,m){if(!F){F=c;if(g&&m){var d=m.width,b=m.height,l=d,j=b;if(d&&b&&i.$FillMode){if(i.$FillMode&3){var h=e,p=L/K*b/d;if(i.$FillMode&1)h=p>1;else if(i.$FillMode&2)h=p<1;l=h?d*K/b:L;j=h?K:b*L/d}a.M(g,l);a.L(g,j);a.k(g,(K-j)/2);a.l(g,(L-l)/2)}a.v(g,"absolute");k.e(n.$EVT_LOAD_END,Ub)}}a.z(q);o&&o(f)}function cb(b,c,d,e){if(e==Q&&r==o&&N)if(!sc){var a=v(b);z.Bd(a,o,c,f,d);c.Qd();U.ub(a,1);U.B(a);A.mb(b,b,0)}}function eb(b){if(b==Q&&r==o){if(!l){var a=d;if(z)if(z.F==o)a=z.Hd();else z.xb();db();l=new mc(o,a,f.Pd(),f.Ud());l.Qc(h)}!l.$IsPlaying()&&l.Xb()}}function X(e,c){if(e==o){if(e!=c)B[c]&&B[c].Td();h&&h.$Enable();var j=Q=a.x();f.Z(a.q(d,eb,j))}else{var g=b.abs(o-e);(!W||g<=i.$LazyLoading||u-g<=i.$LazyLoading)&&f.Z()}}function fb(){if(r==o&&l){l.H();h&&h.$Quit();h&&h.$Disable();l.Jc()}}function gb(){r==o&&l&&l.H()}function T(b){if(P)a.U(b);else k.e(n.$EVT_CLICK,o,b)}function R(){h=t.pInstance;l&&l.Qc(h)}f.Z=function(e,b){b=b||x;if(y.length&&!F){a.s(b);if(!bb){bb=c;k.e(n.$EVT_LOAD_START);a.f(y,function(b){if(!b.src){b.src=a.O(b,"src2");a.Y(b,b["display-origin"])}})}a.fe(y,g,a.q(d,M,e,b))}else M(e,b)};f.Nd=function(){if(z){var b=z.Cd(u);if(b){var f=Q=a.x(),c=o+1,e=B[v(c)];return e.Z(a.q(d,cb,c,e,b,f),x)}}V(r+i.$AutoPlaySteps)};f.Rb=function(){X(o,o)};f.Td=function(){h&&h.$Quit();h&&h.$Disable();f.Kc();l&&l.Ld();l=d;C()};f.Qd=function(){a.z(p)};f.Kc=function(){a.s(p)};f.Zd=function(){h&&h.$Enable()};function ab(b,f,d){d=d||0;if(!D){if(b.tagName=="IMG"){y.push(b);if(!b.src){W=c;b["display-origin"]=a.Mc(b);a.z(b)}}a.tb()&&a.T(b,a.Kb(b)+1);if(a.Vc()>0)(!I||a.Vc()<534||!S)&&a.Pe(b)}var h=a.fb(b);a.f(h,function(h){var j=a.O(h,"u");if(j=="player"&&!t){t=h;if(t.pInstance)R();else a.d(t,"dataavailable",R)}if(j=="caption"){if(!a.Ob()&&!f){var i=a.u(h,c);a.rb(b,i,h);a.cb(b,h);h=i;f=c}}else if(!D&&!d&&!g&&a.O(h,"u")=="image"){g=h;if(g){if(g.tagName=="A"){Z=g;a.C(Z,O);q=a.u(g,e);a.d(q,"click",T);a.C(q,O);a.Y(q,"block");a.Ub(q,0);a.dd(q,"#000");g=a.xe(g,"IMG")}g.border=0;a.C(g,O)}}ab(h,f,d+1)})}f.Pb=function(c,b){var a=E-b;Qb(G,a)};f.Pd=function(){return s};f.Ud=function(){return w};f.F=o;m.call(f);var J=a.o(p,"thumb");if(J){f.xd=a.u(J,c);a.z(J)}a.s(p);x=a.u(Y,c);a.T(x,1e3);a.d(p,"click",T);C(c);D=c;f.Fc=g;f.Ac=q;f.kb=G=p;a.w(G,x);k.$On(203,X);k.$On(22,gb);k.$On(24,fb)}function mc(g,q,v,u){var b=this,m=0,x=0,o,h,d,f,l,s,w,t,p=B[g];j.call(b,0,0);function y(){a.qd(J);Vb&&l&&p.Ac&&a.w(J,p.Ac);a.s(J,l||!p.Fc)}function A(){if(s){s=e;k.e(n.$EVT_ROLLBACK_END,g,d,m,h,d,f);b.B(h)}b.Xb()}function C(a){t=a;b.H();b.Xb()}b.Xb=function(){var a=b.Db();if(!F&&!M&&!t&&(a!=d||N&&(!Nb||fb))&&r==g){if(!a){if(o&&!l){l=c;b.Jc(c);k.e(n.$EVT_SLIDESHOW_START,g,m,x,o,f)}y()}var e,i=n.$EVT_STATE_CHANGE;if(a==f)return p.Nd();else if(a==d)e=f;else if(a==h)e=d;else if(!a)e=h;else if(a>d){s=c;e=d;i=n.$EVT_ROLLBACK_START}else e=b.Uc();k.e(i,g,a,m,h,d,f);b.Zc(e,A)}};b.Ld=function(){z&&z.F==g&&z.xb();var a=b.Db();a<f&&k.e(n.$EVT_STATE_CHANGE,g,-a-1,m,h,d,f)};b.Jc=function(b){q&&a.Ab(bb,b&&q.W.$Outside?"":"hidden")};b.Pb=function(b,a){if(l&&a>=o){l=e;y();p.Kc();z.xb();k.e(n.$EVT_SLIDESHOW_END,g,m,x,o,f)}k.e(n.$EVT_PROGRESS_CHANGE,g,a,m,h,d,f)};b.Qc=function(a){if(a&&!w){w=a;a.$On($JssorPlayer$.oe,C)}};q&&b.Tb(q);o=b.K();b.K();b.Tb(v);h=v.K();d=h+i.$AutoPlayInterval;u.$Shift(d);b.G(u);f=b.K()}function Qb(c,g){var f=w>0?w:i.$PlayOrientation,d=b.round(vb*g*(f&1)),e=b.round(wb*g*(f>>1&1));if(a.Ob()&&a.qb()>=10&&a.qb()<11)c.style.msTransform="translate("+d+"px, "+e+"px)";else if(a.Mb()&&a.qb()>=30){c.style.WebkitTransition="transform 0s";c.style.WebkitTransform="translate3d("+d+"px, "+e+"px, 0px) perspective(2000px)"}else{a.l(c,d);a.k(c,e)}}function lc(a){P=0;!G&&ic()&&kc(a)}function kc(b){kb=M;F=c;ub=e;Q=d;a.d(f,hb,Sb);a.x();Db=A.Uc();A.H();if(!kb)w=0;if(I){var h=b.touches[0];pb=h.clientX;qb=h.clientY}else{var g=a.vc(b);pb=g.x;qb=g.y;a.U(b)}D=0;X=0;ab=0;C=x.J();k.e(n.$EVT_DRAG_START,v(C),C,b)}function Sb(d){if(F&&(!a.tb()||d.button)){var e;if(I){var j=d.touches;if(j&&j.length>0)e=new h(j[0].clientX,j[0].clientY)}else e=a.vc(d);if(e){var f=e.x-pb,g=e.y-qb;if(b.floor(C)!=C)w=i.$PlayOrientation&G;if((f||g)&&!w){if(G==3)if(b.abs(g)>b.abs(f))w=2;else w=1;else w=G;if(I&&w==1&&b.abs(g)-b.abs(f)>3)ub=c}if(w){var l=g,k=wb;if(w==1){l=f;k=vb}if(D-X<-2)ab=1;else if(D-X>2)ab=0;X=D;D=l;mb=C-D/k/(gb||1);if(D&&w&&!ub){a.U(d);if(!M)A.zd(mb);else A.yd(mb)}else a.tb()&&a.U(d)}}}else zb(d)}function zb(h){gc();if(F){F=e;a.x();a.ze(f,hb,Sb);P=D;P&&a.U(h);A.H();var c=x.J();k.e(n.$EVT_DRAG_END,v(c),c,v(C),C,h);var d=b.floor(C);if(b.abs(D)>=i.$MinDragOffsetToSlide){d=b.floor(c);d+=ab}var g=b.abs(d-c);g=1-b.pow(1-g,5);if(!P&&kb)A.te(Db);else if(c==d){nb.Zd();nb.Rb()}else A.mb(c,d,g*Mb)}}function dc(a){B[r];r=v(a);nb=B[r];Lb(a);return r}function tc(a,b){w=0;dc(a);k.e(n.$EVT_PARK,v(a),b)}function Lb(b,c){a.f(R,function(a){a.Hb(v(b),b,c)})}function ic(){var a=n.lc||0;n.lc|=i.$DragOrientation;return G=i.$DragOrientation&~a}function gc(){if(G){n.lc&=~i.$DragOrientation;G=0}}function Pb(){var b=a.lb();a.C(b,O);a.v(b,"absolute");return b}function v(a){return(a%u+u)%u}function ac(b,a){V(b,i.$SlideDuration,a)}function tb(){a.f(R,function(a){a.cc(a.Fb.$ChanceToShow>fb)})}function Yb(b){b=a.ac(b);var c=b.target?b.target:b.srcElement,d=b.relatedTarget?b.relatedTarget:b.toElement;if(!a.uc(o,c)||a.uc(o,d))return;fb=1;tb();B[r].Rb()}function Xb(){fb=0;tb()}function Zb(){O={Cb:L,zb:K,$Top:0,$Left:0};a.f(T,function(b){a.C(b,O);a.v(b,"absolute");a.Ab(b,"hidden");a.z(b)});a.C(Y,O)}function db(b,a){V(b,a,c)}function V(h,g,l){if(Jb&&(!F||i.$NaviQuitDrag)){M=c;F=e;A.H();if(a.Ib(g))g=Mb;var f=Ab.Db(),d=h;if(l){d=f+h;if(h>0)d=b.ceil(d);else d=b.floor(d)}var k=(d-f)%u;d=f+k;var j=f==d?0:g*b.abs(k);j=b.min(j,g*E*1.5);A.mb(f,d,j)}}k.$PlayTo=V;k.$GoTo=function(a){V(a,0)};k.$Next=function(){db(1)};k.$Prev=function(){db(-1)};k.$Pause=function(){N=e};k.$Play=function(){if(!N){N=c;B[r]&&B[r].Rb()}};k.$SetSlideshowTransitions=function(a){i.$SlideshowOptions.$Transitions=a};k.$SetCaptionTransitions=function(b){H.$CaptionTransitions=b;H.Qb=a.x()};k.$SlidesCount=function(){return T.length};k.$CurrentIndex=function(){return r};k.$IsAutoPlaying=function(){return N};k.$IsDragging=function(){return F};k.$IsSliding=function(){return M};k.$LastDragSucceded=function(){return P};k.$GetOriginalWidth=function(){return a.g(t||o)};k.$GetOriginalHeight=function(){return a.i(t||o)};k.$GetScaleWidth=function(){return a.g(o)};k.$GetScaleHeight=function(){return a.i(o)};k.$SetScaleWidth=function(c){if(!S||!a.Ob()||a.qb()>=8){if(!t){var b=a.u(o,e);a.Ec(b,"id");a.v(b,"relative");a.k(b,0);a.l(b,0);t=a.u(o,e);a.Ec(t,"id");a.dc(t,"");a.v(t,"absolute");a.k(t,0);a.l(t,0);a.M(t,a.g(o));a.L(t,a.i(o));a.Te(t,"0 0");a.w(t,b);var d=a.fb(o);a.w(o,t);a.ld(b,d);a.s(b);a.s(t)}gb=c/a.g(t);a.Ue(t,gb);a.M(o,c);a.L(o,gb*a.i(t))}};k.kc=function(a){var d=b.ceil(v(rb/Rb)),c=v(a-r+d);if(c>E){if(a-r>u/2)a-=u;else if(a-r<=-u/2)a+=u}else a=r+c-d;return a};m.call(this);k.$Elmt=o=a.I(o);var i=a.j({$FillMode:0,$LazyLoading:1,$StartIndex:0,$AutoPlay:e,$NaviQuitDrag:c,$AutoPlaySteps:1,$AutoPlayInterval:3e3,$PauseOnHover:3,$HwaMode:1,$SlideDuration:500,$SlideEasing:l.$EaseOutQuad,$MinDragOffsetToSlide:20,$SlideSpacing:0,$DisplayPieces:1,$ParkingPosition:0,$UISearchMode:1,$PlayOrientation:1,$DragOrientation:1},Wb),Z=i.$SlideshowOptions,H=a.j({$Class:s,$PlayInMode:1,$PlayOutMode:1},i.$CaptionSliderOptions),ob=i.$NavigatorOptions,jb=i.$DirectionNavigatorOptions,W=i.$ThumbnailNavigatorOptions,cb=i.$UISearchMode,t,y=a.o(o,"slides",d,cb),Y=a.o(o,"loading",d,cb)||a.lb(f),Gb=a.o(o,"navigator",d,cb),Cb=a.o(o,"thumbnavigator",d,cb),cc=a.g(y),bc=a.i(y);if(i.$DisplayPieces>1||i.$ParkingPosition)i.$DragOrientation&=i.$PlayOrientation;var O,T=a.fb(y),r=-1,nb,u=T.length,L=i.$SlideWidth||cc,K=i.$SlideHeight||bc,Ob=i.$SlideSpacing,vb=L+Ob,wb=K+Ob,Rb=i.$PlayOrientation==1?vb:wb,E=b.min(i.$DisplayPieces,u),bb,w,G,ub,I,R=[],Tb,Eb,Ib,Vb,sc,N,Nb=i.$PauseOnHover,Mb=i.$SlideDuration,lb,S,rb,Jb=E<u,jc=Jb&&i.$DragOrientation,P,fb=1,M,F,Q,pb=0,qb=0,D,X,ab,Ab,x,U,A,Kb=new fc,gb;N=i.$AutoPlay;k.Fb=Wb;Zb();o["jssor-slider"]=c;a.T(y,a.Kb(y));a.v(y,"absolute");bb=a.u(y);a.rb(a.V(y),bb,y);if(Z){Vb=Z.$ShowLink;lb=Z.$Class;S=E==1&&u>1&&lb}rb=S||E>=u?0:i.$ParkingPosition;var sb=y,B=[],z,J,yb="mousedown",hb="mousemove",Bb="mouseup",eb,C,kb,Db,mb;if(g.navigator.msPointerEnabled){yb="MSPointerDown";hb="MSPointerMove";Bb="MSPointerUp";eb="MSPointerCancel";if(i.$DragOrientation){var xb="none";if(i.$DragOrientation==1)xb="pan-y";else if(i.$DragOrientation==2)xb="pan-x";a.bf(sb.style,"-ms-touch-action",xb)}}else if("ontouchstart"in g||"createTouch"in f){I=c;yb="touchstart";hb="touchmove";Bb="touchend";eb="touchcancel"}U=new pc;if(S)z=new lb(Kb,L,K,Z,I);a.w(bb,U.kb);a.Ab(y,"hidden");J=Pb();a.dd(J,"#000");a.Ub(J,0);a.rb(sb,J,sb.firstChild);for(var ib=0;ib<T.length;ib++){var nc=T[ib],Ub=new oc(nc,ib);B.push(Ub)}a.z(Y);Ab=new qc;A=new ec(Ab,U);if(jc){a.d(y,yb,lc);a.d(f,Bb,zb);eb&&a.d(f,eb,zb)}Nb&=I?2:1;if(Gb&&ob){Tb=new ob.$Class(Gb,ob);R.push(Tb)}if(jb){Eb=new jb.$Class(o,jb,i.$UISearchMode);R.push(Eb)}if(Cb&&W){W.$StartIndex=i.$StartIndex;Ib=new W.$Class(Cb,W);R.push(Ib)}a.f(R,function(a){a.Zb(u,B,Y);a.$On(p.vb,ac)});a.d(o,"mouseout",Yb);a.d(o,"mouseover",Xb);tb();i.$ArrowKeyNavigation&&a.d(f,"keydown",function(a){if(a.keyCode==q.Xe)db(-1);else a.keyCode==q.Ze&&db(1)});k.$SetScaleWidth(k.$GetOriginalWidth());A.mb(i.$StartIndex,i.$StartIndex,0)}n.$EVT_CLICK=21;n.$EVT_DRAG_START=22;n.$EVT_DRAG_END=23;n.$EVT_SWIPE_START=24;n.$EVT_SWIPE_END=25;n.$EVT_LOAD_START=26;n.$EVT_LOAD_END=27;n.$EVT_POSITION_CHANGE=202;n.$EVT_PARK=203;n.$EVT_SLIDESHOW_START=206;n.$EVT_SLIDESHOW_END=207;n.$EVT_PROGRESS_CHANGE=208;n.$EVT_STATE_CHANGE=209;n.$EVT_ROLLBACK_START=210;n.$EVT_ROLLBACK_END=211;g.$JssorSlider$=r=n};var p={vb:1};g.$JssorNavigator$=function(e,B){var g=this;m.call(g);e=a.I(e);var s,t,r,q,k=0,f,l,j,x,y,i,h,o,n,A=[],z=[];function w(a){a!=-1&&z[a].mc(a==k)}function u(a){g.e(p.vb,a*l)}g.$Elmt=e;g.Hb=function(a){if(a!=q){var d=k,c=b.floor(a/l);k=c;q=a;w(d);w(c)}};g.cc=function(b){a.s(e,b)};var v;g.Zb=function(E){if(!v){s=b.ceil(E/l);k=0;var q=o+x,w=n+y,p=b.ceil(s/j)-1;t=o+q*(!i?p:j-1);r=n+w*(i?p:j-1);a.M(e,t);a.L(e,r);f.$AutoCenter&1&&a.l(e,(a.g(a.V(e))-t)/2);f.$AutoCenter&2&&a.k(e,(a.i(a.V(e))-r)/2);for(var g=0;g<s;g++){var D=a.af();a.Be(D,g+1);var m=a.hc(h,"NumberTemplate",D,c);a.v(m,"absolute");var B=g%(p+1);a.l(m,!i?q*B:g%j*q);a.k(m,i?w*B:b.floor(g/(p+1))*w);a.w(e,m);A[g]=m;f.$ActionMode&1&&a.d(m,"click",a.q(d,u,g));f.$ActionMode&2&&a.d(m,"mouseover",a.q(d,u,g));z[g]=a.Eb(m)}v=c}};g.Fb=f=a.j({$SpacingX:0,$SpacingY:0,$Orientation:1,$ActionMode:1},B);h=a.o(e,"prototype");o=a.g(h);n=a.i(h);a.cb(e,h);l=f.$Steps||1;j=f.$Lanes||1;x=f.$SpacingX;y=f.$SpacingY;i=f.$Orientation-1};g.$JssorDirectionNavigator$=function(i,t,o){var e=this;m.call(e);var b=a.o(i,"arrowleft",d,o),f=a.o(i,"arrowright",d,o),h,j,n=a.g(i),l=a.i(i),r=a.g(b),q=a.i(b);function k(a){e.e(p.vb,a,c)}e.Hb=function(b,a,c){if(c);};e.cc=function(c){a.s(b,c);a.s(f,c)};var s;e.Zb=function(c){if(!s){if(h.$AutoCenter&1){a.l(b,(n-r)/2);a.l(f,(n-r)/2)}if(h.$AutoCenter&2){a.k(b,(l-q)/2);a.k(f,(l-q)/2)}a.d(b,"click",a.q(d,k,-j));a.d(f,"click",a.q(d,k,j));a.Eb(b);a.Eb(f)}};e.Fb=h=a.j({$Steps:1},t);j=h.$Steps};g.$JssorThumbnailNavigator$=function(i,A){var h=this,x,l,d,u=[],y,w,f,n,o,t,s,k,q,g,j;m.call(h);i=a.I(i);function z(n,e){var g=this,b,m,k;function o(){m.mc(l==e)}function i(){if(!q.$LastDragSucceded()){var a=(f-e%f)%f,b=q.kc((e+a)/f),c=b*f-a;h.e(p.vb,c)}}g.F=e;g.Lc=o;k=n.xd||n.Fc||a.lb();g.kb=b=a.hc(j,"ThumbnailTemplate",k,c);m=a.Eb(b);d.$ActionMode&1&&a.d(b,"click",i);d.$ActionMode&2&&a.d(b,"mouseover",i)}h.Hb=function(c,d,e){var a=l;l=c;a!=-1&&u[a].Lc();u[c].Lc();!e&&q.$PlayTo(q.kc(b.floor(d/f)))};h.cc=function(b){a.s(i,b)};var v;h.Zb=function(F,D){if(!v){x=F;b.ceil(x/f);l=-1;k=b.min(k,D.length);var h=d.$Orientation&1,p=t+(t+n)*(f-1)*(1-h),m=s+(s+o)*(f-1)*h,C=p+(p+n)*(k-1)*h,A=m+(m+o)*(k-1)*(1-h);a.v(g,"absolute");a.Ab(g,"hidden");d.$AutoCenter&1&&a.l(g,(y-C)/2);d.$AutoCenter&2&&a.k(g,(w-A)/2);a.M(g,C);a.L(g,A);var j=[];a.f(D,function(l,e){var i=new z(l,e),d=i.kb,c=b.floor(e/f),k=e%f;a.l(d,(t+n)*k*(1-h));a.k(d,(s+o)*k*h);if(!j[c]){j[c]=a.lb();a.w(g,j[c])}a.w(j[c],d);u.push(i)});var E=a.j({$AutoPlay:e,$NaviQuitDrag:e,$SlideWidth:p,$SlideHeight:m,$SlideSpacing:n*h+o*(1-h),$MinDragOffsetToSlide:12,$SlideDuration:200,$PauseOnHover:3,$PlayOrientation:d.$Orientation,$DragOrientation:d.$DisableDrag?0:d.$Orientation},d);q=new r(i,E);v=c}};h.Fb=d=a.j({$SpacingX:3,$SpacingY:3,$DisplayPieces:1,$Orientation:1,$AutoCenter:3,$ActionMode:1},A);y=a.g(i);w=a.i(i);g=a.o(i,"slides");j=a.o(g,"prototype");a.cb(g,j);f=d.$Lanes||1;n=d.$SpacingX;o=d.$SpacingY;t=a.g(j);s=a.i(j);k=d.$DisplayPieces};function s(){j.call(this,0,0);this.Yb=a.db}g.$JssorCaptionSlider$=function(p,k,g){var d=this,h,f=k.$CaptionTransitions,o={W:"t",$Delay:"d",$Duration:"du",$ScaleHorizontal:"x",$ScaleVertical:"y",$Rotate:"r",$Zoom:"z",$Opacity:"f",P:"b"},e={D:function(b,a){if(!isNaN(a.Q))b=a.Q;else b*=a.jd;return b},$Opacity:function(b,a){return this.D(b-1,a)}};e.$Zoom=e.$Opacity;j.call(d,0,0);function m(r,n){var l=[],i,j=[],c=[];function h(c,d){var b={};a.f(o,function(g,h){var e=a.O(c,g+(d||""));if(e){var f={};if(g=="t")f.Q=e;else if(e.indexOf("%")+1)f.jd=a.nc(e)/100;else f.Q=a.nc(e);b[h]=f}});return b}function p(){return f[b.floor(b.random()*f.length)]}function d(g){var h;if(g=="*")h=p();else if(g){var e=f[a.ed(g)]||f[g];if(a.bc(e)){if(g!=i){i=g;c[g]=0;j[g]=e[b.floor(b.random()*e.length)]}else c[g]++;e=j[g];if(a.bc(e)){e=e.length&&e[c[g]%e.length];if(a.bc(e))e=e[b.floor(b.random()*e.length)]}}h=e;if(a.qc(h))h=d(h)}return h}var q=a.fb(r);a.f(q,function(b){var c=[];c.$Elmt=b;var f=a.O(b,"u")=="caption";a.f(g?[0,3]:[2],function(o,p){if(f){var l,i;if(o!=2||!a.O(b,"t3")){i=h(b,o);if(o==2&&!i.W){i.$Delay=i.$Delay||{Q:0};i=a.j(h(b,0),i)}}if(i&&i.W){l=d(i.W.Q);if(l){var j=a.j({$Delay:0,$ScaleHorizontal:1,$ScaleVertical:1},l);a.f(i,function(c,a){var b=(e[a]||e.D).apply(e,[j[a],i[a]]);if(!isNaN(b))j[a]=b});if(!p)if(i.P)c.P=i.P.Q||0;else if((g?k.$PlayInMode:k.$PlayOutMode)&2)j.P=0}}c.push(j)}if(n%2&&!p)c.hd=m(b,n+1)});l.push(c)});return l}function n(E,d,F){var h={$Easing:d.$Easing,$Round:d.$Round,$During:d.$During,$Reverse:g&&!F,ae:c},k=E,y=a.V(E),o=a.g(k),n=a.i(k),u=a.g(y),t=a.i(y),f={},l={},m=d.$ScaleClip||1;if(d.$Opacity)f.$Opacity=2-d.$Opacity;h.bb=o;h.ab=n;if(d.$Zoom||d.$Rotate){f.$Zoom=d.$Zoom?d.$Zoom-1:1;if(a.tb()||a.Sb())f.$Zoom=b.min(f.$Zoom,2);l.$Zoom=1;var s=d.$Rotate||0;if(s==c)s=1;f.$Rotate=s*360;l.$Rotate=0}else if(d.$Clip){var z={$Top:0,$Right:o,$Bottom:n,$Left:0},D=a.j({},z),e=D.E={},C=d.$Clip&4,v=d.$Clip&8,A=d.$Clip&1,x=d.$Clip&2;if(C&&v){e.$Top=n/2*m;e.$Bottom=-e.$Top}else if(C)e.$Bottom=-n*m;else if(v)e.$Top=n*m;if(A&&x){e.$Left=o/2*m;e.$Right=-e.$Left}else if(A)e.$Right=-o*m;else if(x)e.$Left=o*m;h.$Move=d.$Move;f.$Clip=D;l.$Clip=z}var p=d.$FlyDirection,q=0,r=0,w=d.$ScaleHorizontal,B=d.$ScaleVertical;if(i.Fe(p))q-=u*w;else if(i.He(p))q+=u*w;if(i.De(p))r-=t*B;else if(i.Ee(p))r+=t*B;if(q||r||h.$Move){f.$Left=q+a.Pc(k);f.$Top=r+a.Hc(k)}var G=d.$Duration;l=a.j(l,a.be(k,f));h.ad=a.Wd();return new j(d.$Delay,G,h,k,l,f)}function l(b,c){a.f(c,function(c){var f,i=c.$Elmt,e=c[0],j=c[1];if(e){f=n(i,e);b=f.ub(a.Ib(e.P)?b:e.P,1)}b=l(b,c.hd);if(j){var g=n(i,j,1);g.ub(b,1);d.G(g);h.G(g)}f&&d.G(f)});return b}d.Yb=function(){d.B(d.K()*(g||0));h.Nb()};h=new j(0,0);l(0,m(p,1))}})(window,document,Math,null,true,false)