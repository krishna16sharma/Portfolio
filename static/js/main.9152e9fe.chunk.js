(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){},,function(e,c,s){"use strict";s.r(c);var t=s(1),i=s.n(t),a=s(4),n=s.n(a),l=(s(13),s(14),s(15),s(16),s(3)),r=s(5),o=s(6),j=s(8),d=s(7),h=s(0);var m=function(e,c){return function(s){Object(j.a)(n,s);var a=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=a.call(this,e)).animate_scroll=function(){c.animation_running||(c.animation_running=!0,requestAnimationFrame(c.animation_loop))},c.animation_loop=function(){var e=window.pageYOffset,s=e-c.last_offset;if(s*=c.state.ease,Math.abs(s)<.05)return c.last_offset=e,void(c.animation_running=!1);c.wrappedJSXElement.current.style.top="".concat(c.state.start_position-c.last_offset,"px"),c.last_offset+=s,requestAnimationFrame(c.animation_loop)},c.state={start_position:null,ease:.05,WrappedJSXElement:Object(h.jsx)(t.Fragment,{})},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var s=this;this.last_offset=0,this.animation_running=!1,this.wrappedJSXElement=null;var t=i.a.createRef(),a=i.a.cloneElement(e,Object(l.a)(Object(l.a)({},e.props),{},{ref:t}));this.setState({ease:c,WrappedJSXElement:a},(function(){s.setState({start_position:t.current.offsetTop},(function(){s.wrappedJSXElement=t,document.addEventListener("scroll",s.animate_scroll)}))}))}},{key:"render",value:function(){return Object(h.jsx)(t.Fragment,{children:this.state.WrappedJSXElement})}}]),n}(i.a.Component)};var b=function(){var e=m(Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:"./images/background.png",alt:"",className:"sky"})}),.05),c=m(Object(h.jsxs)("div",{className:"night",children:[Object(h.jsx)("div",{className:"star"}),Object(h.jsx)("div",{className:"star"})]}),.02),s=m(Object(h.jsxs)("div",{className:"social",children:[Object(h.jsx)("a",{href:"mailto:krishna16sharma.s@gmail.com",children:Object(h.jsx)("i",{class:"fas fa-envelope"})}),Object(h.jsx)("a",{href:"https://in.linkedin.com/in/krishna-sharma-s-a438671b4",children:Object(h.jsx)("i",{className:"fab fa-linkedin"})}),Object(h.jsx)("a",{href:"https://github.com/krishna16sharma",children:Object(h.jsx)("i",{className:"fab fa-github"})})]}),.04),t=m(Object(h.jsx)("img",{src:"./images/Moon.png",alt:"",className:"moon"}),.02),i=m(Object(h.jsx)("div",{className:"greeting",children:"Welcome"}),.04),a=m(Object(h.jsxs)("div",{className:"section2",children:[Object(h.jsx)("svg",{className:"svg_curve_top",xmlns:"http://www.w3.org/2000/svg",fill:"#000101",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:Object(h.jsx)("path",{d:"M0,100 C65,93 76,10 100,100"})}),Object(h.jsxs)("div",{className:"section2_container",children:[Object(h.jsxs)("div",{className:"left_side",children:[Object(h.jsx)("h2",{children:"About Me"}),Object(h.jsxs)("p",{children:["Hello! I am ",Object(h.jsx)("strong",{children:"Krishna Sharma S,"})," a final year student undertaking my B.Tech in Computer Science Engineering at Amrita Vishwa Vidhyapeetham, Coimbatore."]}),Object(h.jsx)("p",{children:"I love to make websites and have a good knowledge in the field of Machine Learning and Data Science."}),Object(h.jsx)("p",{children:"My hobbies include Digital Art and Chess."}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("div",{class:"button button1",onClick:function(){window.scroll({top:document.body.offsetHeight,left:0,behavior:"smooth"})},children:"Projects"}),Object(h.jsx)("a",{href:"https://drive.google.com/file/d/1pO0SpJMcckYm7U0tHNy_e5hTkUnJWcVJ/view?usp=sharing",children:Object(h.jsx)("div",{class:"button button1",children:"Resume"})}),Object(h.jsx)("a",{href:"https://drive.google.com/file/d/1f6lNXoSuKnz8OwB4C9i9ycIfm-Z_2uYM/view?usp=sharing",children:Object(h.jsx)("div",{class:"button button1",children:"Video Resume"})})]})]}),Object(h.jsxs)("div",{className:"right_side",children:[Object(h.jsx)("img",{src:"./images/Photo_Circle.jpg",className:"image",alt:""}),Object(h.jsxs)("p",{className:"Reach",children:[" Reach out to me at:",Object(h.jsx)("strong",{children:" krishna16sharma.s@gmail.com"})]})]})]}),Object(h.jsx)("svg",{className:"svg_curve_bottom",xmlns:"http://www.w3.org/2000/svg",fill:"#000101",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:Object(h.jsx)("path",{d:"M0,0 C65,20 90,5 100,0"})})]}),.05),n=m(Object(h.jsxs)("div",{className:"section3",children:[Object(h.jsx)("h2",{children:" Skills "}),Object(h.jsxs)("div",{className:"grid-container",children:[Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("h1",{className:"fab fa-html5",style:{margin:"0",width:"100%"}}),Object(h.jsx)("span",{className:"caption",children:"HTML 5"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("h1",{className:"fab fa-css3-alt",style:{margin:"0",width:"100%"}}),Object(h.jsx)("span",{className:"caption",children:"CSS 3"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("h1",{className:"fab fa-js-square",style:{margin:"0",width:"100%"}}),Object(h.jsx)("span",{className:"caption",children:"Javascript"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("h1",{className:"fab fa-node",style:{margin:"0",width:"100%"}}),Object(h.jsx)("span",{className:"caption",children:"Node.js"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("h1",{className:"fab fa-react",style:{margin:"0",width:"100%"}}),Object(h.jsx)("span",{className:"caption",children:"React"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"99.56",viewBox:"0 0 226 226",style:{fill:"#000000"},children:Object(h.jsxs)("g",{fill:"none","fill-rule":"nonzero",stroke:"none","stroke-width":"1","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"","stroke-dashoffset":"0","font-family":"none","font-weight":"none","font-size":"none","text-anchor":"none",style:{mixBlendMode:"normal"},children:[Object(h.jsx)("path",{d:"M0,226v-226h226v226z",fill:"none"}),Object(h.jsx)("g",{fill:"#ffffff",children:Object(h.jsx)("path",{d:"M27.32305,72.27586v19.12172c-1.84416,-0.4746 -4.05804,-0.63562 -6.06492,-0.63562c-12.92268,0 -21.25812,8.10295 -21.25812,20.58719c0,12.96336 7.85611,19.70395 22.96195,19.72203c5.04432,0 9.71701,-0.46189 16.04953,-1.65969v-57.13563zM46.31234,72.33766v12.56242h12.3682v-12.56242zM46.31234,90.4v25.38086c0,10.65816 -0.55448,14.71394 -2.3218,18.21242c-1.68596,3.42164 -4.33023,5.65678 -9.79039,8.1925l11.47656,5.41164c5.46016,-2.71652 8.10132,-5.17025 10.1082,-9.06648c2.147,-4.04992 2.87797,-8.74917 2.87797,-18.52141v-29.60953zM205.96016,90.4c-12.69668,0 -20.61756,7.96375 -20.64016,20.73727c0,12.30344 7.67531,19.94273 20.13695,19.94273c12.61984,0 20.54305,-7.9523 20.54305,-20.64898c0,-12.3848 -7.59628,-20.03102 -20.03984,-20.03102zM81.73961,90.76195c-5.4692,0 -10.47538,1.11934 -15.71406,3.64602l0.01766,9.43726c4.62848,-2.45436 9.55521,-3.72547 13.93961,-3.72547c2.99224,0 4.07859,0.80442 4.07859,3.01922v2.68375c-14.5544,1.25656 -20.48125,5.21983 -20.48125,13.78071c0,7.91452 4.4635,11.47656 14.4075,11.47656c4.91776,0 11.62134,-0.56422 16.93234,-1.3507v-24.78055c0,-5.07144 -0.32099,-7.44797 -1.31539,-9.26953c-1.77184,-3.2544 -5.77204,-4.91727 -11.865,-4.91727zM121.66922,90.76195c-6.09296,0 -12.10873,0.86459 -19.41305,2.77203v37.05164h12.35055v-29.0975c2.486,-0.7232 4.00366,-0.87398 5.69414,-0.87398c4.407,0 6.47102,1.74825 6.47102,6.44453v23.52695h11.91797v-24.0125c0,-6.11556 -0.81833,-8.98308 -3.38117,-11.60016c-2.72104,-2.77528 -7.30693,-4.21102 -13.63945,-4.21102zM170.78891,90.83258c-18.04836,0 -28.25,7.85738 -28.25,21.77898c0,11.2096 6.88791,18.29188 17.72688,18.29188c3.20016,0 5.62013,-0.48428 8.02477,-1.66852v0.22953c0,7.78796 -3.45618,11.05281 -11.55602,11.05281c-4.5878,0 -8.91655,-1.02491 -13.24219,-3.24875h-0.00883v11.30883c4.33016,1.6724 8.4988,2.38359 13.32164,2.38359c9.47392,0 16.14466,-2.95022 19.9957,-8.90758c2.63968,-4.06348 3.53125,-8.99254 3.53125,-19.4925v-3.33703c-0.08136,-1.6724 -0.07755,-3.34197 -0.15891,-5.01438l-0.07945,-6.68289l-0.15891,-5.17328v-1.28008c2.48148,0.23504 -0.53619,-0.29733 2.75437,0.33547l4.2375,-8.82812c-5.93476,-1.1978 -10.83585,-1.74797 -16.13781,-1.74797zM205.78359,100.15508c4.77312,0 7.51273,3.93643 7.51273,10.56727c0,6.70768 -2.81455,10.57609 -7.59219,10.57609c-4.84092,0 -7.6893,-3.86841 -7.6893,-10.57609c0,-6.70768 2.82839,-10.56727 7.76875,-10.56727zM22.46758,100.61414c1.52507,0 3.40128,0.16297 4.84664,0.63563v19.65141c-1.76732,0.23504 -3.55653,0.31781 -4.92609,0.31781c-6.33252,0 -9.79039,-3.5994 -9.79039,-10.1082c0,-6.68508 3.61416,-10.49664 9.86984,-10.49664zM166.76328,100.69359h0.89164h0.39727v0.94461l0.07945,4.05211l0.07945,5.65c0,1.66788 0.07945,3.26372 0.07945,4.69656v3.33703v0.89164c-1.59104,0.4746 -2.95763,0.7857 -4.64359,0.7857c-5.46016,0 -8.51914,-3.5071 -8.51914,-9.62266c0,-4.28948 1.52409,-7.31463 4.48469,-8.98703c1.92552,-1.1978 4.74614,-1.82481 7.15078,-1.74797zM84.59992,113.80336v8.16602c-2.3052,0.39324 -3.93113,0.55617 -5.70297,0.55617c-3.24084,0 -4.70539,-1.11411 -4.70539,-3.48711c0,-3.16852 2.55712,-4.4486 10.40836,-5.23508z"})})]})}),Object(h.jsx)("span",{className:"caption",children:"Django"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("h1",{className:"fab fa-python",style:{margin:"0",width:"100%"}}),Object(h.jsx)("span",{className:"caption",children:"Python"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("h1",{className:"fab fa-java",style:{margin:"0",width:"100%"}}),Object(h.jsx)("span",{className:"caption",children:"Java"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"99.56",viewBox:"0 0 172 172",style:{fill:"#000000"},children:Object(h.jsxs)("g",{fill:"none","fill-rule":"nonzero",stroke:"none","stroke-width":"1","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"","stroke-dashoffset":"0","font-family":"none","font-weight":"none","font-size":"none","text-anchor":"none",style:{mixBlendMode:"normal"},children:[Object(h.jsx)("path",{d:"M0,172v-172h172v172z",fill:"none"}),Object(h.jsx)("g",{fill:"#ffffff",children:Object(h.jsx)("path",{d:"M121.08531,7.22938c-5.16,0 -9.63469,1.02125 -13.76,2.05594c7.22937,3.09062 11.70406,6.88 14.10937,8.6c5.50938,4.81062 8.6,9.63469 14.10938,17.54937c1.02125,1.72 2.74125,4.12531 3.77594,7.90125c1.03469,3.44 1.03469,6.19469 1.03469,8.94938c0,3.78937 -0.34937,6.88 -0.69875,9.97062c-0.33594,2.41875 -0.33594,3.45344 -0.67187,4.13875c0,0.34938 0,0.68531 -0.34938,1.37063c0,1.72 0,2.41875 0.34938,3.78937c0,1.37063 0.33594,2.75469 0.33594,5.16c0.34938,4.47469 0.34938,7.56531 -0.33594,11.34125v1.38406c-0.69875,3.09063 -1.38406,6.19469 -3.10406,8.93594c0.34938,0.69875 0.68531,1.03469 1.03469,1.72c1.72,-2.40531 3.09063,-4.81062 4.46125,-7.55187c4.13875,-7.57875 6.54406,-14.10938 8.26406,-18.92c3.09063,-8.94938 4.81063,-15.49344 5.84531,-20.30406c2.40531,-10.32 2.75469,-15.13062 1.72,-20.64c0,-1.72 -0.68531,-4.82406 -2.40531,-7.91469c-3.78937,-6.88 -9.63469,-9.97063 -13.76,-12.04c-2.75469,-1.37063 -9.98406,-5.16 -19.95469,-5.49594zM46.56094,8.74781c-3.96406,-0.08063 -8.80156,0.36281 -14.23031,2.94281c-1.72,0.69875 -6.88,3.10406 -11.00531,8.6c-2.75469,3.44 -4.81063,8.6 -5.84531,14.44531c-1.03469,5.16 -1.38406,11.36813 0.68531,23.05875c1.37062,8.25063 2.75469,13.76 5.50937,25.10125c0.34938,1.38406 2.40531,7.57875 6.88,21.33875l0.33594,0.68531c0.69875,2.40531 2.75469,7.56531 7.22937,12.72531c3.09063,3.44 5.84531,5.50937 8.26406,5.50937h0.67187c4.47469,0 7.57875,-3.44 10.32,-6.19469c0,-0.34937 6.54406,-8.25062 8.94938,-11.00531c-0.34938,-0.34937 -1.02125,-0.34937 -1.37063,-0.69875c-4.12531,-2.40531 -7.22937,-6.18125 -9.63469,-10.32c-4.12531,-7.56531 -3.78937,-15.13062 -3.10406,-18.92l0.34938,-5.83187c-1.37063,-9.29875 -1.02125,-18.23469 0.69875,-27.18406c1.37062,-7.56531 3.09062,-15.13062 9.27187,-23.04531c2.06938,-2.75469 4.47469,-5.16 6.88,-6.88c-5.49594,-2.40531 -11.34125,-3.78937 -17.2,-4.12531c-1.11531,-0.09406 -2.33812,-0.17469 -3.655,-0.20156zM89.77594,11.69063c-1.72,0 -3.44,0 -5.16,0.34937c-6.88,1.37063 -13.41062,5.16 -18.57062,11.69063c-5.16,6.54406 -6.53063,12.72531 -7.90125,19.95469c-0.69875,2.75469 -0.69875,5.16 -1.04813,7.91469c2.06938,-1.72 4.82406,-3.78937 8.94938,-4.82406c2.40531,-0.68531 8.6,-2.74125 13.76,0.34938c1.72,1.03469 4.12531,3.10406 6.53062,8.94937c5.16,14.44531 0.01344,29.24 -0.67187,30.61063c-0.34938,1.37062 -1.03469,2.40531 -1.38406,3.09062c-0.68531,1.72 -1.37062,3.10406 -2.05594,5.85875c-0.34938,2.40531 -0.69875,4.47469 -0.69875,6.88c1.03469,0 2.06937,0.33594 3.09062,1.02125c1.72,1.72 2.06938,4.13875 2.41875,5.16c0.68531,5.50938 0.68531,12.38938 0.68531,19.26938c0,5.50937 0,10.66937 0.33594,14.10937c0.69875,7.91469 3.10406,13.41063 6.54406,16.16531c2.40531,2.06938 5.49594,2.05594 7.21594,2.40531h0.69875c5.16,0 13.41063,-3.44 16.50125,-8.25063c1.72,-2.75469 2.41875,-5.16 3.10406,-8.6c0.34938,-2.06937 0.33594,-3.09062 0.68531,-5.16c0,-1.03469 0.34937,-2.75469 0.34937,-4.81062c0,-1.72 0.33594,-3.78938 0.68531,-6.20813c0.34938,-5.84531 1.37063,-12.71187 1.72,-16.50125c0.34938,-4.47469 2.40531,-8.26406 4.12531,-10.66937c-2.40531,-0.34938 -4.81063,-2.40531 -6.18125,-5.84531c-2.06938,-3.78937 -2.41875,-4.82406 -2.76813,-6.54406c-0.33594,-1.37062 -1.02125,-3.09062 -3.44,-8.25062c-5.16,-11.69063 -5.83187,-15.13063 -5.83187,-17.88531c-0.34938,-3.78937 -0.69875,-8.93594 3.44,-12.37594c6.18125,-5.50938 14.09594,-5.16 18.22125,-3.78938v-0.69875c-0.68531,-2.74125 -2.05594,-4.81062 -3.09063,-6.18125c-5.16,-7.91469 -7.91469,-12.04 -12.73875,-16.16531c-2.05594,-1.72 -7.21594,-5.85875 -14.78125,-8.6c-3.44,-1.03469 -7.57875,-2.41875 -12.73875,-2.41875zM127.80406,52.03c-2.49938,-0.17469 -5.68406,0.25531 -8.43875,2.67406c-1.37063,1.37062 -1.37063,4.12531 -1.02125,6.53062c0,1.72 0.33594,4.12531 5.49594,15.82938c2.40531,5.49594 3.09063,7.21594 3.44,8.6c0.34938,1.37062 0.68531,2.05594 2.75469,5.83187c0.34938,0.69875 0.68531,1.38406 1.37063,2.06938c0.68531,-1.03469 1.03469,-2.75469 1.37062,-5.50938l0.34938,-1.02125c0.68531,-3.09062 0.34937,-5.50937 0.34937,-9.63469c0,-2.06937 -0.34937,-3.44 -0.34937,-4.47469c-0.34938,-1.72 -0.34938,-3.09063 -0.34938,-5.16c-0.68531,-1.03469 -0.68531,-1.37063 -0.33594,-2.06938c0,-0.68531 0.33594,-1.70656 0.68531,-3.77594c0.34937,-2.75469 0.69875,-5.16 0.69875,-7.91469c-0.69875,-0.34938 -1.03469,-0.68531 -1.72,-1.02125c0,0 -1.81406,-0.77938 -4.3,-0.95406zM74.01375,53.38719c-2.19031,-0.25531 -4.70312,0.45688 -6.24844,0.9675c-3.78938,1.03469 -6.18125,3.44 -7.90125,4.81063c-1.03469,1.03469 -2.06938,2.06937 -3.10406,3.44c0,2.40531 0.33594,4.82406 0.68531,7.22937v0.34938l-0.68531,6.88c-0.68531,3.09062 -1.03469,8.93594 2.40531,14.78125c1.72,3.44 4.13875,6.19469 7.22937,7.91469c2.06938,1.37063 4.81063,2.40531 7.90125,3.10406c0,-2.41875 0.34938,-5.17344 0.69875,-7.57875c0.68531,-3.44 1.37063,-5.16 2.40531,-7.22938c0.34938,-1.02125 0.68531,-1.70656 1.38406,-2.74125c0.33594,-1.03469 5.14656,-14.10937 0.67187,-26.14937c-1.02125,-2.75469 -2.05594,-4.47469 -3.44,-5.16c-0.59125,-0.34938 -1.29,-0.5375 -2.00219,-0.61813zM124.485,55.34906c0.90031,-0.05375 1.76031,0.02687 2.10969,0.37625c1.03469,0.68531 -0.34937,2.40531 -0.69875,2.75469c-0.33594,0.34938 -1.02125,1.03469 -2.05594,1.38406c-1.37062,0.33594 -2.40531,-0.69875 -2.75469,-0.69875c-0.34938,-0.34938 -1.37063,-1.37063 -1.02125,-2.40531c0.33594,-0.68531 0.68531,-0.68531 2.05594,-1.03469c0.51063,-0.17469 1.46469,-0.33594 2.365,-0.37625zM72.7775,58.19781c1.15563,-0.08063 2.12313,0.36281 2.9025,0.61812c1.03469,0.34938 2.05594,0.69875 2.05594,1.38406c0.34938,1.03469 -0.67187,1.72 -1.02125,2.05594c-1.03469,1.03469 -2.75469,1.04813 -2.75469,1.04813c-1.72,0 -2.75469,-1.03469 -3.44,-2.06938c-0.34937,-0.34937 -0.68531,-1.03469 -0.33594,-1.72c0.33594,-0.68531 1.02125,-1.03469 1.37062,-1.03469c0.43,-0.17469 0.83313,-0.25531 1.22281,-0.28219zM135.88,103.2c-1.72,2.40531 -4.12531,5.50938 -4.47469,9.63469c0,0.68531 0,1.03469 -0.34938,1.72c2.75469,0.68531 5.17344,0.68531 7.57875,0.34938c5.50938,-0.69875 9.28531,-3.45344 9.97063,-4.13875c2.40531,-1.72 5.50937,-5.16 4.81062,-6.53063c-0.33594,-0.68531 -1.37062,-0.34937 -6.88,0c-1.37062,0 -5.49594,1.03469 -8.25062,0.34938h-0.68531c-0.68531,-0.34938 -1.37062,-0.69875 -1.72,-1.38406zM76.01594,110.08c-0.68531,1.03469 -1.70656,1.72 -2.39187,2.40531c-2.75469,1.72 -6.20813,3.10406 -9.64813,3.78937c-3.09062,1.03469 -4.81062,1.03469 -4.81062,2.06938c-0.34938,1.37062 3.09062,3.09062 4.81062,3.77594c5.85875,2.40531 11.70406,1.03469 12.73875,0.68531c0.68531,-0.34938 2.40531,-1.03469 4.12531,-2.06938c0,-3.77594 -0.33594,-7.21594 -0.68531,-9.97062v-0.34938h-0.34937c-1.03469,0 -2.40531,0.01344 -3.78938,-0.33594z"})})]})}),Object(h.jsx)("span",{className:"caption",children:"PostgeSQL"})]})]})]}),.05),l=m(Object(h.jsxs)("div",{className:"section4",children:[Object(h.jsx)("h2",{children:"My Projects"}),Object(h.jsxs)("div",{className:"project-grid-container",children:[Object(h.jsxs)("div",{className:"project-grid-item",children:[Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("img",{src:"./images/covid.jpg",alt:"Covid-19 Dashboard",style:{width:"500px",height:"300px"}}),Object(h.jsx)("a",{href:"https://github.com/krishna16sharma/Covid19_Dashboard",children:Object(h.jsx)("div",{class:"overlay",children:Object(h.jsx)("div",{class:"text",children:"A website built using React.js and deployed at Heroku which helps users get important statistics about Covid-19 cases in India."})})})]}),Object(h.jsx)("span",{className:"project_captions",children:"Covid-19 Dashboard"})]}),Object(h.jsxs)("div",{className:"project-grid-item",children:[Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("img",{src:"./images/House.webp",alt:"Predict house Prices",style:{width:"500px",height:"300px"}}),Object(h.jsx)("a",{href:"https://github.com/krishna16sharma/Predict-House-Prices",children:Object(h.jsx)("div",{class:"overlay",children:Object(h.jsx)("div",{class:"text",children:"A machine learning model built using Linear Regression. Using GridSearchCV, the best method was determined. Then, the model was integrated into a Flask application."})})})]}),Object(h.jsx)("span",{className:"project_captions",children:"Predict House Prices"})]}),Object(h.jsxs)("div",{className:"project-grid-item",children:[Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("img",{src:"./images/Teacher.png",alt:"Profile Builder",style:{width:"500px",height:"300px"}}),Object(h.jsx)("a",{href:"https://github.com/krishna16sharma/Profile-Builder",children:Object(h.jsx)("div",{class:"overlay",children:Object(h.jsx)("div",{class:"text",children:"A website built using Django to build Portfolio for faculties based on their research works and help students contact these researchers. This project was built based on the Agile model. Testing was done using tools like Selinium, SonarQube and Django's inbuilt Unit Testing module."})})})]}),Object(h.jsx)("span",{className:"project_captions",children:"Profile Builder"})]}),Object(h.jsxs)("div",{className:"project-grid-item",children:[Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("img",{src:"./images/Campus.jpg",alt:"Campus Recruitment",style:{width:"500px",height:"300px"}}),Object(h.jsx)("a",{href:"https://github.com/krishna16sharma/Campus-Recruitment",children:Object(h.jsx)("div",{class:"overlay",children:Object(h.jsx)("div",{class:"text",children:"A case study where several classification models were used on the dataset and compared to see which worked the best."})})})]}),Object(h.jsx)("span",{className:"project_captions",children:"Campus Recruitment"})]})]})]}),.05);return Object(h.jsxs)("div",{className:"main_container",children:[Object(h.jsxs)("div",{className:"section1",children:[Object(h.jsx)(e,{}),Object(h.jsx)(c,{}),Object(h.jsx)(s,{}),Object(h.jsx)(t,{}),Object(h.jsx)(i,{})]}),Object(h.jsx)(a,{}),Object(h.jsx)(n,{}),Object(h.jsx)(l,{})]})},x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,19)).then((function(c){var s=c.getCLS,t=c.getFID,i=c.getFCP,a=c.getLCP,n=c.getTTFB;s(e),t(e),i(e),a(e),n(e)}))};n.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),x()}],[[18,1,2]]]);
//# sourceMappingURL=main.9152e9fe.chunk.js.map