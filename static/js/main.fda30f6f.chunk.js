(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],[,function(e,t,a){e.exports={App:"App_App__2pfjB",AppForm:"App_AppForm__mYZdZ",AppInput:"App_AppInput__103fz",AppBtn:"App_AppBtn__1sIAt",AppList:"App_AppList__2A5eR"}},,,,,function(e,t,a){e.exports={Item:"Recipe_Item__1tatz"}},function(e,t,a){e.exports={Header:"Navbar_Header__3AN-a"}},function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),p=a.n(r),i=(a(13),a(2)),o=a.n(i),l=a(3),s=a(6),u=a.n(s),m=function(e){var t=e.ingredients.map((function(e){return c.a.createElement("li",null,e.text)}));return c.a.createElement("div",{className:u.a.Item},c.a.createElement("h2",null,e.title),c.a.createElement("h3",null,"Cal > ",e.calories),c.a.createElement("ol",null,t),c.a.createElement("img",{src:e.img,alt:"recipeIMAGE"}))},f=a(7),d=a.n(f),h=function(e){return c.a.createElement("div",{className:d.a.Header},c.a.createElement("h2",null,"myRecipes"))},A=a(1),_=a.n(A),E=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),r=a[0],p=a[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),u=s[0],f=s[1],d=Object(n.useState)("banana"),A=Object(l.a)(d,2),E=A[0],v=A[1];Object(n.useEffect)((function(){b()}),[E]);var b=function(){var e,t;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.awrap(fetch("https://api.edamam.com/search?q=".concat(E,"&app_id=").concat("cf010f72","&app_key=").concat("c2691d0fdf556cf3a9282ac6fb6d1297")));case 2:return e=a.sent,a.next=5,o.a.awrap(e.json());case 5:t=a.sent,console.log(t.hits),p(t.hits);case 8:case"end":return a.stop()}}))},g=r.map((function(e){return c.a.createElement(m,{img:e.recipe.image,title:e.recipe.label,calories:e.recipe.calories,ingredients:e.recipe.ingredients})}));return c.a.createElement("div",{className:_.a.App},c.a.createElement(h,null),c.a.createElement("div",{className:_.a.AppForm},c.a.createElement("h3",null,"What are recipes do you want to know ?"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(u)}},c.a.createElement("input",{type:"text",className:_.a.AppInput,onChange:function(e){f(e.target.value),console.log(u)},placeholder:"Go to Search..."}),c.a.createElement("button",{onClick:b,type:"submit",className:_.a.AppBtn},"Search"))),c.a.createElement("h1",null,"Recipes:"),c.a.createElement("div",{className:_.a.AppList},g))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.render(c.a.createElement(E,null),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.fda30f6f.chunk.js.map