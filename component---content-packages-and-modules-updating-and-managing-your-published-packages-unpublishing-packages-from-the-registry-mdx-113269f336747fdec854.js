(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{O6H6:function(e,t,a){"use strict";var n=a("vOnD"),o=a("u9kb"),i=a("aOgs"),l=a("q1tI"),r=a.n(l),c=a("7ljp"),p=a("pD55"),u=a("8Aig"),s=a("ReZb"),b=a("GCVy"),m=a("+6vE");var d=function(e){var t=e.children;return r.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return r.a.createElement("strong",null,t)},h=a("gnlW"),f=a("mwnC"),y=a("/Rw0"),O=a("dVM4"),j=Object(n.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,a=e.depth;return r.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(o.e,{as:"li",key:e.url,pl:a>0?3:0},r.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(k,{items:e.items,depth:a+1}):null)})))}k.defaultProps={depth:0};var w=k,v=a("MfeC");function N(e){var t=v.a.getPath(e.location.pathname),a=v.a.getVariantAndPage(e.root,t);if(!a)return null;var n=v.a.getVariantsForPage(e.root,a.page),i=[],l=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(l=e),i.push(r.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(o.i,{overlay:e.overlay},r.a.createElement(o.i.Button,null,l.variant.title),r.a.createElement(N.Menu,{direction:e.direction,width:e.menuWidth},i)))}N.Menu=Object(n.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=N,x=Object(n.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(n.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),I=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),_=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(n.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,l=a.frontmatter,j=l.title,k=l.description,N=l.status,W=l.source,H=l.additionalContributors,D=void 0===H?[]:H,P=v.a.getVariantRoot(n.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:b.a,Prompt:d,PromptReply:g,Screenshot:h.a}},r.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:j,description:k}),r.a.createElement(u.b,{location:n,isSearchEnabled:a.isSearchEnabled}),r.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(o.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{editOnGitHub:a.themeOptions.editOnGitHub,location:n})),r.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(I,null,r.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(o.e,null,r.a.createElement(o.e,null,r.a.createElement(o.m,{as:"h1"},j),k))),null!=P?r.a.createElement(_,null,r.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:P,location:n})):null),a.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:u.a+24,mt:"6px",maxHeight:"calc(100vh - "+u.a+"px - 24px)"},r.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:a.tableOfContents.items})):null,r.a.createElement(T,null,N||W?r.a.createElement(o.k,{mb:3,alignItems:"center"},N?r.a.createElement(O.a,{status:N}):null,r.a.createElement(o.e,{mx:"auto"}),W?r.a.createElement(y.a,{href:W}):null):null,a.tableOfContents.items?r.a.createElement(o.e,{display:["block",null,"none"],mb:3},r.a.createElement(o.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.r,{icon:i.b,mr:2}):r.a.createElement(o.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(o.e,{pt:1},r.a.createElement(w,{items:a.tableOfContents.items})))}))):null,t,r.a.createElement(m.a,{editOnGitHub:a.themeOptions.editOnGitHub,editUrl:a.editUrl,contributors:a.contributors.concat(D.map((function(e){return{login:e}})))}))))))}},"j/Hi":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a("zLVn"),o=a("q1tI"),i=a("7ljp"),l=a("O6H6"),r=a("4LHR"),c={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},u=p("Note"),s=p("Screenshot"),b={_frontmatter:c},m=l.a;function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(m,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"As a package owner or collaborator, if your package has no dependents, you can permanently remove it from the npm registry by using the CLI. You can ",Object(i.b)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/commands/npm-unpublish"},"unpublish")," within 72 hours of the initial publish; beyond 72 hours, you can still unpublish your package if ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/policies/unpublish"},"it meets certain criteria"),"."),Object(i.b)("p",null,"These criteria are set to avoid damaging the JavaScript package ecosystem.  If you cannot unpublish your package, you can ",Object(i.b)("a",{parentName:"p",href:"/deprecating-and-undeprecating-packages-or-package-versions"},"deprecate it instead"),"."),Object(i.b)(u,{mdxType:"Note"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Removing all the collaborators or teams from the package will not unpublish it.")),Object(i.b)("h2",null,"Unpublishing a package"),Object(i.b)("p",null,"If you want to completely remove all versions of a package from the registry, you can unpublish it completely.  This will delete it from the registry and it will be unable to be installed."),Object(i.b)("p",null,"To unpublish a package, you must meet the requirements of the ",Object(i.b)("a",{parentName:"p",href:"#how-to-unpublish"},"package unpublishing rules"),"."),Object(i.b)("h3",null,"Using the website"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)(o.Fragment,null,r.a["user-login"].text),Object(i.b)(o.Fragment,null,r.a["user-login"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Navigate to the package page for the package you want to unpublish, replacing ",Object(i.b)("inlineCode",{parentName:"p"},"<your-package-name>")," with the name of your package:\n",Object(i.b)("inlineCode",{parentName:"p"},"https://www.npmjs.com/package/<your-package-name>"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Settings"),"."),Object(i.b)(s,{src:"/packages-and-modules/securing-your-code/2fa-package-admin.png",alt:"Screenshot showing the admin tab on a package page",mdxType:"Screenshot"})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'Under "delete package", click ',Object(i.b)("strong",null,"Delete package"),"."),Object(i.b)(s,{src:"/packages-and-modules/deleting-deprecating/delete-package-settings.png",alt:"Screenshot showing the admin tab on a package page",mdxType:"Screenshot"}),Object(i.b)(u,{mdxType:"Note"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Note:")," If you cannot delete the package because it does not meet the ",Object(i.b)("a",{parentName:"p",href:"#how-to-unpublish"},"unpublishing requirements"),", then the delete package option will not be available.  Instead, you will be prompted to ",Object(i.b)("a",{parentName:"p",href:"/deprecating-and-undeprecating-packages-or-package-versions#deprecating-a-package-from-the-website"},"deprecate the package"),"."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you are sure that you want to continue, enter your package name and click ",Object(i.b)("strong",null,"Delete package"),"."),Object(i.b)(s,{src:"/packages-and-modules/deleting-deprecating/delete-package-confirm.png",alt:"Screenshot showing the admin tab on a package page",mdxType:"Screenshot"}))),Object(i.b)("h3",null,"Using the command line"),Object(i.b)("p",null,"To unpublish an entire package, run the following command, replacing ",Object(i.b)("inlineCode",{parentName:"p"},"<package-name>")," with the name of your package:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm unpublish <package-name> -f\n")),Object(i.b)("p",null,"If you have ",Object(i.b)("a",{parentName:"p",href:"about-two-factor-authentication"},"two-factor authentication")," enabled for writes, you will need to add a one-time password to the ",Object(i.b)("inlineCode",{parentName:"p"},"unpublish")," command, ",Object(i.b)("inlineCode",{parentName:"p"},"--otp=123456")," (where ",Object(i.b)("em",{parentName:"p"},"123456")," is the code from your authenticator app)."),Object(i.b)(o.Fragment,null,"If you need help unpublishing your package, please ",r.a["contact-support"].text,". If you are an Enterprise customer, please ",r.a["contact-enterprise-support"].text),".",Object(i.b)(u,{mdxType:"Note"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," If you unpublish an entire package, you may not publish any new versions of that package until 24 hours have passed.")),Object(i.b)("h2",null,"Unpublishing a single version of a package"),Object(i.b)("p",null,"If you want to remove a single version of a package, you can unpublish one version without affecting the others.   This will delete only that version from the registry and it will be unable to be installed. This option is only available via the npm CLI."),Object(i.b)("h3",null,"Using the command line"),Object(i.b)("p",null,"To unpublish a single version of a package, run the following command, replacing ",Object(i.b)("inlineCode",{parentName:"p"},"<package-name>")," with the name of your package, and ",Object(i.b)("inlineCode",{parentName:"p"},"<version>")," with your version number:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm unpublish <package-name>@<version>\n")),Object(i.b)("h2",null,"When to unpublish"),Object(i.b)("p",null,"Unpublishing a package permanently removes the package from the registry so it is no longer available for other users to install. Once a package is unpublished, republishing under the same name is blocked for 24 hours. If you've unpublished a package by mistake, we'd recommend publishing again under a different name, or for unpublished versions, bumping the version number and publishing again."),Object(i.b)("p",null,"You might want to unpublish a package because you:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Published something accidentally."),Object(i.b)("li",{parentName:"ul"},"Wanted to test npm."),Object(i.b)("li",{parentName:"ul"},"Published content you ",Object(i.b)("a",{parentName:"li",href:"https://blog.npmjs.org/post/101934969510/oh-no-i-accidentally-published-private-data-to"},"didn't intend to be public"),"."),Object(i.b)("li",{parentName:"ul"},"Want to rename a package. (The only way to rename a package is to re-publish it under a new name)")),Object(i.b)(u,{mdxType:"Note"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," ",Object(i.b)("inlineCode",{parentName:"p"},"package-name@version")," is unique, and cannot be reused by unpublishing and re-publishing it. We recommend publishing a minor version update instead.")),Object(i.b)("h2",null,"When to deprecate"),Object(i.b)("p",null,"If you are no longer interested in maintaining a package, but want it to remain available for users to install, or if your package has dependents, we'd recommend ",Object(i.b)("a",{parentName:"p",href:"cli/deprecate"},"deprecating"),' it. To learn about how to deprecate a package, see "',Object(i.b)("a",{parentName:"p",href:"deprecating-and-undeprecating-packages-or-package-versions"},"Deprecating and undeprecating packages or package versions"),'".'))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-packages-and-modules-updating-and-managing-your-published-packages-unpublishing-packages-from-the-registry-mdx-113269f336747fdec854.js.map