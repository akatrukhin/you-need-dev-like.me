import{S as N,i as D,s as S,e as l,a as p,b as r,t as R,c as Y,d as a,l as U,f as y,g as X,h as $,j as q,k as O,m as B,n as L,o as F,p as P,q as G,r as J,u as K,v as Q}from"./index.7e46ff32.js";function H(i){let e,s,t;return{c(){e=l("span"),e.textContent="|",r(e,"class","animate-pulse")},m(n,c){Y(n,e,c),t=!0},i(n){t||(s&&s.end(1),t=!0)},o(n){s=F(e,P,{}),t=!1},d(n){n&&L(e),n&&s&&s.end()}}}function V(i){let e,s,t,n,c,d,u,E,g,C,z,v,j,_,I,x,m,w,M,k,b,T,A,o=i[1]&&H();return{c(){e=l("section"),s=l("div"),t=l("h1"),n=l("span"),n.innerHTML=`Hi, I&#39;m an UX expert 
        <img loading="lazy" src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png" data-src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png" data-srcset="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png 2x" alt="Technologist" title="Technologist" width="72" height="72" srcset="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png 2x"/>`,c=p(),d=l("span"),u=l("span"),u.textContent="with solid coding skills",C=p(),o&&o.c(),z=p(),v=l("div"),v.innerHTML=`<p>My name is Alex and I&#39;m working as User Experience Engineer. I have a passion for
    integrating Design, Development, and User Experience. I&#39;m a creative
    technologist with a concentration in development. I possess a strong
    focus on user-centered design and an understanding of the way effective
    designs achieve business goals.</p> 
  
  <p>My hobby to develop products for everyone, implement the best user
    experience in my projects, make everything is possible to make design
    ideas come true. I have a huge aspiration solve problems and set and
    achieve objectives.</p>`,j=p(),_=l("div"),_.textContent="Hello",I=p(),x=l("div"),m=l("div"),w=l("div"),w.textContent=`${i[2]}`,M=p(),k=l("div"),k.innerHTML="Years of<br/>Experience",r(n,"class","flex items-center"),r(u,"class","relative z-10"),R(u,"highlight",i[0]),r(d,"class",g=(i[0]?"before:scale-x-100":"before:scale-x-0")+" before:origin-top-left before:block before:duration-300 before:ease-in-out before:delay-150 before:transition-transform before:absolute before:z-0 before:w-48 before:right-32 before:bottom-0 relative before:h-2 before:bg-teal-400"),r(t,"class","cpd text-5xl"),r(v,"class","l opacity-70 mt-14 mb-[11vh] ml-9 leading-8"),r(_,"class","flex"),r(s,"class","flex flex-col"),r(w,"class","nb text-7xl opacity-20"),r(k,"class","b text-lg uppercase leading-6 mb-3 ml-3"),r(m,"class","flex items-center"),r(m,"title",i[2]+" years experience"),r(x,"class","w-full max-w-xs pl-6"),r(e,"class","relative mb-[16vh] pt-[15vh] flex border-b-2")},m(f,h){Y(f,e,h),a(e,s),a(s,t),a(t,n),a(t,c),a(t,d),a(d,u),a(t,C),o&&o.m(t,null),a(s,z),a(s,v),a(s,j),a(s,_),a(e,I),a(e,x),a(x,m),a(m,w),a(m,M),a(m,k),b=!0,T||(A=U(u,"introend",i[3]),T=!0)},p(f,[h]){h&1&&R(u,"highlight",f[0]),(!b||h&1&&g!==(g=(f[0]?"before:scale-x-100":"before:scale-x-0")+" before:origin-top-left before:block before:duration-300 before:ease-in-out before:delay-150 before:transition-transform before:absolute before:z-0 before:w-48 before:right-32 before:bottom-0 relative before:h-2 before:bg-teal-400"))&&r(d,"class",g),f[1]?o?h&2&&y(o,1):(o=H(),o.c(),y(o,1),o.m(t,null)):o&&(X(),$(o,1,1,()=>{o=null}),q())},i(f){b||(E||O(()=>{E=B(u,Z,{}),E.start()}),y(o),b=!0)},o(f){$(o),b=!1},d(f){f&&L(e),o&&o.d(),T=!1,A()}}}const W=109;function Z(i,{speed:e=1}){if(!(i.childNodes.length===1&&i.childNodes[0].nodeType===Node.TEXT_NODE))throw new Error("This transition only works on elements with a single text node child");const t=i.textContent;return{duration:t.length/(e*.01),tick:c=>{const d=Math.trunc(t.length*c);i.textContent=t.slice(0,d)}}}function ee(i,e,s){const t=new Date().getYear()-W;let n=!1,c=!0;return setTimeout(()=>{s(1,c=!1)},5e3),[n,c,t,()=>{s(0,n=!0)}]}class te extends N{constructor(e){super(),D(this,e,ee,V,S,{})}}function se(i){let e,s;return e=new te({}),{c(){G(e.$$.fragment)},m(t,n){J(e,t,n),s=!0},p:K,i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){Q(e,t)}}}class oe extends N{constructor(e){super(),D(this,e,null,se,S,{})}}export{oe as default};
