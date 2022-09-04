(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[929],{3929:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return nn}});var i,r,a,s,o,l=t(168),c=t(885),d=t(2791),p=t(6444),u=p.ZP.form(i||(i=(0,l.Z)(["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n"]))),x=p.ZP.label(r||(r=(0,l.Z)(["\n  margin-bottom: 10px;\n"]))),h=p.ZP.button(a||(a=(0,l.Z)(["\n  border-color: rgb(14, 49, 230);\n  border-radius: 5px;\n"]))),f=p.ZP.input(s||(s=(0,l.Z)(["\n  margin-left: 5px;\n"]))),m=p.ZP.span(o||(o=(0,l.Z)(["\n  display: flex;\n"]))),b=t(6812),g=t(5048),Z=t(3342),j=t(5562),y=t.n(j),v=t(184);var P,w,C,_,T,k,z=function(){var n=(0,b.Jx)().data,e=(0,b.Tn)(),t=(0,c.Z)(e,2),i=t[0],r=t[1].isLoading,a=(0,g.I0)(),s=(0,g.v9)(b.oY),o=(0,g.v9)(b.Dx),l=(0,d.useState)(""),p=(0,c.Z)(l,2),j=p[0],P=p[1],w=(0,d.useState)(""),C=(0,c.Z)(w,2),_=C[0],T=C[1],k=function(e){n.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))?y().Notify.failure("That name already in the list",{position:"center-center"}):i(e)&&a((0,b.Zz)(""))&&a((0,b.Ft)(""))},z=function(n){var e=n.currentTarget,t=e.name,i=e.value;switch(t){case"name":P(i),a((0,b.Zz)(i));break;case"number":T(i),a((0,b.Ft)(i))}};return(0,v.jsxs)(u,{autoComplete:"off",onSubmit:function(n){n.preventDefault(),k({number:_,name:j})},children:[(0,v.jsxs)(x,{children:[(0,v.jsx)("span",{children:"Name"}),(0,v.jsx)(f,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:s,onChange:z})]}),(0,v.jsxs)(x,{children:[(0,v.jsx)("span",{children:"Number"}),(0,v.jsx)(f,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:z})]}),(0,v.jsx)(h,{type:"submit",disabled:r,children:r?(0,v.jsxs)(m,{children:["Adding..... ",(0,v.jsx)(Z.Z,{size:"small"})]}):(0,v.jsx)("span",{children:"Add contact"})})]})},N=t(1413),O=t(2007),A=t.n(O),L=function(n){var e=n.title,t=(0,g.I0)(),i=(0,g.v9)(b.zK);return(0,v.jsxs)("div",{children:[(0,v.jsx)("h3",{children:e}),(0,v.jsx)("label",{children:(0,v.jsx)("input",{type:"text",placeholder:"add something",onChange:function(n){t((0,b.KJ)(n.currentTarget.value.toLowerCase()))},value:i})})]})},R=L;L.protoTypes={title:A().string.isRequired,filter:A().func.isRequired,filterValue:A().string.isRequired};var q,F,S,I,E,D,J,K=p.ZP.button(P||(P=(0,l.Z)(["\n  margin-left: 5px;\n"]))),W=p.ZP.li(w||(w=(0,l.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: stretch;\n  margin-bottom: 5px;\n"]))),B=p.ZP.span(C||(C=(0,l.Z)(["\n  display: inline-block;\n  margin-left: auto;\n  padding-left: 10px;\n"]))),U=p.ZP.span(_||(_=(0,l.Z)(["\n  color: blue;\n"]))),V=p.ZP.span(T||(T=(0,l.Z)(["\n  font-weight: bold;\n  margin-left: 10px;\n"]))),Y=p.ZP.span(k||(k=(0,l.Z)(["\n  display: flex;\n"]))),H=function(n){var e=n.id,t=n.name,i=n.number,r=(0,b.Nt)(),a=(0,c.Z)(r,2),s=a[0],o=a[1].isLoading;return(0,v.jsxs)(W,{children:[(0,v.jsxs)("span",{children:[(0,v.jsx)(U,{children:"Name:"}),(0,v.jsxs)(V,{children:[" ",t]})]}),(0,v.jsxs)(B,{children:[(0,v.jsx)(U,{children:"Number:"}),(0,v.jsx)(V,{children:i})]}),(0,v.jsx)(K,{type:"button",onClick:function(){return s(e)},disabled:o,children:o?(0,v.jsxs)(Y,{children:["removing... ",(0,v.jsx)(Z.Z,{size:"small"})]}):(0,v.jsx)("span",{children:"delete"})})]})},M=p.ZP.ul(q||(q=(0,l.Z)(["\n  list-style: none;\n  padding-left: 0px;\n"]))),$=(p.ZP.button(F||(F=(0,l.Z)(["\n  margin-left: 5px;\n"]))),p.ZP.li(S||(S=(0,l.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: stretch;\n  margin-bottom: 5px;\n"]))),p.ZP.span(I||(I=(0,l.Z)(["\n  display: inline-block;\n  margin-left: auto;\n  padding-left: 10px;\n"]))),p.ZP.span(E||(E=(0,l.Z)(["\n  color: blue;\n"])))),G=(p.ZP.span(D||(D=(0,l.Z)(["\n  font-weight: bold;\n  margin-left: 10px;\n"]))),function(){var n=(0,b.Jx)(),e=n.data,t=n.isFetching,i=(0,g.v9)(b.zK),r=[];e&&(r=e);var a=r.filter((function(n){return n.name.toLowerCase().includes(i)}));return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h2",{children:"Contacts"}),r.length?(0,v.jsx)(R,{title:"Find contacts by name"}):(0,v.jsx)("div",{}),t&&(0,v.jsx)(Z.Z,{size:"large"}),(0,v.jsx)(M,{children:a.length?a.map((function(n){return(0,v.jsx)(H,(0,N.Z)({},n),n.id)})):(0,v.jsx)("div",{children:i?(0,v.jsxs)("span",{children:["No contacts ",(0,v.jsx)($,{children:"found"})]}):(0,v.jsxs)("span",{children:["No contacts ",(0,v.jsx)($,{children:"yet"})]})})})]})}),Q=function(){return(0,v.jsx)("div",{children:(0,v.jsx)(G,{})})},X=p.ZP.div(J||(J=(0,l.Z)(["\n  display: inline-flex;\n  flex-direction: column;\n  border: 1px solid aqua;\n  min-width: 500px;\n  box-shadow: 33px 14px 33px 10px rgba(14, 178, 230, 0.75);\n  margin-left: 40px;\n  margin-top: 30px;\n  padding: 20px;\n"])));function nn(){return(0,v.jsxs)(X,{children:[(0,v.jsx)(z,{}),(0,v.jsx)(Q,{})]})}},888:function(n,e,t){"use strict";var i=t(9047);function r(){}function a(){}a.resetWarningCache=r,n.exports=function(){function n(n,e,t,r,a,s){if(s!==i){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:r};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=929.b6ee876c.chunk.js.map