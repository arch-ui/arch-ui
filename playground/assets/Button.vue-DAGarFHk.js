import{d as B,u as O,b as R,e as i,f as q,o as m,g,j as w,n as x,k as t,l as D,p as E,r as I,t as n,m as U,q as y,s as V,v as z,x as K}from"./vue.esm-bundler-D4nsrp9Q.js";import{L as C,T,h as $,w as h}from"./index-BRXAtGvy.js";const S=Symbol("BUTTON_GROUP_CTX_KEY"),k="button",L=B({name:C(k),__name:"Button",props:{tag:{default:"button"},type:{default:"secondary"},status:{},size:{},htmlType:{default:"button"},disabled:{type:Boolean},loading:{type:Boolean},icon:{},loadingIcon:{}},emits:["click"],setup(d,{expose:u,emit:o}){const l=h(k),s=d,N=o,j=O(),a=R(S,void 0),p=i(()=>(a==null?void 0:a.type)??(s==null?void 0:s.type)??""),c=i(()=>(a==null?void 0:a.size)??(s==null?void 0:s.size)??""),r=i(()=>(a==null?void 0:a.status)??(s==null?void 0:s.status)??""),v=i(()=>(a==null?void 0:a.disabled)||(s==null?void 0:s.disabled)||!1),f=q(),b=i(()=>({marginRight:j.default?"6px":"0px"})),G=e=>N("click",e);return u({ref:f,disabled:v,type:p,size:c,status:r}),(e,P)=>(m(),g(D(e.tag),{ref_key:"_ref",ref:f,type:e.tag==="button"?e.htmlType:void 0,disabled:v.value||e.loading?!0:void 0,class:x({[`${t(l)}`]:t(l),[`${t(l)}--${p.value}`]:p.value,[`${t(l)}--${c.value}`]:c.value,[`${t(l)}-status--${r.value}`]:r.value,"is-disabled":v.value,"is-loading":e.loading}),onClick:G},{default:w(()=>[e.loading?y(e.$slots,"loading",{key:0},()=>[V($,{class:"loading-icon",icon:e.loadingIcon??"spinner",size:"1x",style:z(b.value),spin:""},null,8,["icon","style"])]):e.icon?(m(),g($,{key:1,icon:e.icon,style:z(b.value),size:"1x"},null,8,["icon","style"])):K("",!0),y(e.$slots,"default")]),_:3},8,["type","disabled","class"]))}}),_="button-group",M=B({name:C(_),__name:"ButtonGroup",props:{size:{},type:{},status:{},disabled:{type:Boolean}},setup(d){const u=h(_),o=d;return E(S,I({size:n(o,"size"),type:n(o,"type"),status:n(o,"status"),disabled:n(o,"disabled")})),(l,s)=>(m(),U("div",{class:x(t(u))},[y(l.$slots,"default")],2))}}),Y=T(L),A=T(M);export{Y as M,A as Q};
