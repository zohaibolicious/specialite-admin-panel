(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[12],{283:function(e,s,t){"use strict";var a=t(72),c=t(0),i=t(35),r=t(263),n=t(374),l=t(372),o=t(373),m=t(254),d=t(110),j=t(46),h=t(38),u=t(275),b=t(3),x={email:[{required:!0,message:"Please input your email address"},{type:"email",message:"Please enter a validate email!"}],password:[{required:!0,message:"Please input your password"}],confirm:[{required:!0,message:"Please confirm your password!"},function(e){var s=e.getFieldValue;return{validator:function(e,t){return t&&s("password")!==t?Promise.reject("Passwords do not match!"):Promise.resolve()}}}]},g={signUp:j.l,showAuthMessage:j.c,hideAuthMessage:j.b,showLoading:j.d};s.a=Object(i.b)((function(e){var s=e.auth;return{loading:s.loading,message:s.message,showMessage:s.showMessage,token:s.token,redirect:s.redirect}}),g)((function(e){var s=e.signUp,t=e.showLoading,i=e.token,j=e.loading,g=e.redirect,p=e.message,f=e.showMessage,O=e.hideAuthMessage,w=e.allowRedirect,v=l.a.useForm(),y=Object(a.a)(v,1)[0],N=Object(h.g)();return Object(c.useEffect)((function(){null!==i&&w&&N.push(g),f&&setTimeout((function(){O()}),3e3)})),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:f?1:0,marginBottom:f?20:0},children:Object(b.jsx)(o.a,{type:"error",showIcon:!0,message:p})}),Object(b.jsxs)(l.a,{form:y,layout:"vertical",name:"register-form",onFinish:function(){y.validateFields().then((function(e){t(),s(e)})).catch((function(e){console.log("Validate Failed:",e)}))},children:[Object(b.jsx)(l.a.Item,{name:"email",label:"Email",rules:x.email,hasFeedback:!0,children:Object(b.jsx)(m.a,{prefix:Object(b.jsx)(r.a,{className:"text-primary"})})}),Object(b.jsx)(l.a.Item,{name:"password",label:"Password",rules:x.password,hasFeedback:!0,children:Object(b.jsx)(m.a.Password,{prefix:Object(b.jsx)(n.a,{className:"text-primary"})})}),Object(b.jsx)(l.a.Item,{name:"confirm",label:"ConfirmPassword",rules:x.confirm,hasFeedback:!0,children:Object(b.jsx)(m.a.Password,{prefix:Object(b.jsx)(n.a,{className:"text-primary"})})}),Object(b.jsx)(l.a.Item,{children:Object(b.jsx)(d.a,{type:"primary",htmlType:"submit",block:!0,loading:j,children:"Sign Up"})})]})]})}))},368:function(e,s,t){"use strict";t.r(s);var a=t(15),c=(t(0),t(283)),i=t(295),r=t(296),n=t(35),l=t(3),o={backgroundImage:"url(".concat("/img/others/img-17.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"};s.default=function(e){var s=Object(n.c)((function(e){return e.theme.currentTheme}));return Object(l.jsx)("div",{className:"h-100 ".concat("light"===s?"bg-white":""),children:Object(l.jsxs)(i.a,{justify:"center",className:"align-items-stretch h-100",children:[Object(l.jsx)(r.a,{xs:20,sm:20,md:24,lg:16,children:Object(l.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(l.jsx)(i.a,{justify:"center",children:Object(l.jsxs)(r.a,{xs:24,sm:24,md:20,lg:12,xl:8,children:[Object(l.jsx)("h1",{children:"Sign Up"}),Object(l.jsxs)("p",{children:["Already have an account? ",Object(l.jsx)("a",{href:"/auth/login-2",children:"Sign In"})]}),Object(l.jsx)("div",{className:"mt-4",children:Object(l.jsx)(c.a,Object(a.a)({},e))})]})})})}),Object(l.jsx)(r.a,{xs:0,sm:0,md:0,lg:8,children:Object(l.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100 px-4",style:o,children:[Object(l.jsx)("div",{className:"text-right",children:Object(l.jsx)("img",{src:"/img/logo-white.png",alt:"logo"})}),Object(l.jsx)(i.a,{justify:"center",children:Object(l.jsxs)(r.a,{xs:0,sm:0,md:0,lg:20,children:[Object(l.jsx)("img",{className:"img-fluid mb-5",src:"/img/others/img-19.png",alt:""}),Object(l.jsx)("h1",{className:"text-white",children:"Welcome to emilus"}),Object(l.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque."})]})}),Object(l.jsx)("div",{className:"d-flex justify-content-end pb-4",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Term & Conditions"}),Object(l.jsx)("span",{className:"mx-2 text-white",children:" | "}),Object(l.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Privacy & Policy"})]})})]})})]})})}}}]);
//# sourceMappingURL=12.699aca1a.chunk.js.map