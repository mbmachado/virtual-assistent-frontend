var ee=Object.defineProperty,te=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var M=(t,a,l)=>a in t?ee(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,F=(t,a)=>{for(var l in a||(a={}))ne.call(a,l)&&M(t,l,a[l]);if(L)for(var l of L(a))le.call(a,l)&&M(t,l,a[l]);return t},D=(t,a)=>te(t,ae(a));import{r as d,R as e,a as se,u as I,F as N,I as C,O as w,b as W,c as x,V as re,d as oe,L as K,B as S,H as ce,e as ie,f as me,P as ue,T as de,S as pe,g as Ee,h as he,i as ge,j as fe,k as B,A as J,D as ve,l as be,m as xe,n as ye,o as Ne,p as Ce,q as we,s as Se,t as ke,v as Te,w as j,x as A,y as Ae,E as Ie,z as Fe,C as De,G as Oe,J as h,N as $e,K as Ue,M as Be}from"./vendor.33e91e56.js";const Re=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=l(n);fetch(n.href,r)}};Re();const X=d.exports.createContext({}),Pe=({children:t})=>{const[a,l]=d.exports.useState(),[s,n]=d.exports.useState(""),r=E=>{l(E)},o=E=>{n(E)},m=()=>{n(""),l(void 0)};return e.createElement(X.Provider,{value:{user:a,authToken:s,storeUser:r,storeToken:o,clean:m}},t)},O=()=>e.useContext(X);const qe={Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:"Bearer "},f=se.create({baseURL:"https://virtual-assistent-backend.herokuapp.com",headers:qe}),v={login:async(t,a)=>f.post("/api/v2/auth/login",{email:t,password:a}),getTopicsTree:async t=>{var l;let a=t;return a||(a=((l=y())==null?void 0:l.token)||""),f.get("/api/v3/topics",{headers:{Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:`Bearer ${a}`}})},createQuestion:async(t,a,l,s)=>{var o;let n=t;n||(n=((o=y())==null?void 0:o.token)||"");const r={topic_id:a,description:l,answer:s};return f.post("/api/v3/questions",r,{headers:{Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:`Bearer ${n}`}})},getInitialTopicsTree:async()=>f.get("/api/v1/topics"),getTopicsTreeById:async t=>f.get(`/api/v1/topics/${t}`),getTopicsTreeByNlp:async t=>f.get("/api/v3/nlp",{params:{text:t}}),getUsers:async()=>{var a;const t={headers:{Authorization:"Bearer "+((a=y())==null?void 0:a.token)}};return f.get("/api/v3/users",t)},createUser:async(t,a,l)=>{var n;const s={headers:{Authorization:"Bearer "+((n=y())==null?void 0:n.token)}};return f.post("/api/v3/users",{email:t,name:a,password:l},s)},editUser:async(t,a,l,s)=>{var r;const n={headers:{Authorization:"Bearer "+((r=y())==null?void 0:r.token)}};return f.patch(`/api/v3/users/${t}`,{email:a,name:l,password:s},n)},deleteUser:async t=>{var l;const a={headers:{Authorization:"Bearer "+((l=y())==null?void 0:l.token)}};return f.delete(`/api/v3/users/${t}`,a)}},Le=t=>{window.sessionStorage.setItem("AUTH",JSON.stringify(t))},y=()=>{const t=window.sessionStorage.getItem("AUTH");return t?JSON.parse(t):null},Me=()=>{window.sessionStorage.removeItem("AUTH")};var je="/assets/logo-icia-vertical.dc3a2a24.svg";function P({children:t}){return e.createElement("div",{className:`auth-container d-flex flex-column overflow-auto justify-content-start\r
                 justify-content-sm-center align-items-center p-3 p-md-4 min-vh-100 w-100`},e.createElement("div",{className:"shadow-sm rounded bg-white w-100 p-3"},e.createElement("div",{className:"px-3 pt-3 pb-4"},e.createElement("a",{className:"logo d-block mx-auto mb-3"},e.createElement("img",{src:je,alt:"Logomarca ICIA",className:"w-100"})),t)),e.createElement("div",{className:"w-100 mt-2 text-center text-white"},"\xA9 Todos os direitos reservados."))}function ze(){const t=I(),[a,l]=e.useState({email:"",password:"",showPassword:!1}),{storeUser:s,storeToken:n}=O(),r=i=>u=>{l(D(F({},a),{[i]:u.target.value}))},o=()=>{l(D(F({},a),{showPassword:!a.showPassword}))},m=i=>{i.preventDefault()},E=i=>{i.preventDefault(),v.login(a.email,a.password).then(u=>u.data).then(u=>{var b,k;if(u.status==="Success"){const T=(b=u.data)==null?void 0:b.user;s(T),n((k=u.data)==null?void 0:k.token),Le(u.data),t("/dashboard")}}).catch(u=>{console.log(u),l(D(F({},a),{password:""}))})};return e.createElement(P,null,e.createElement("p",{className:"text-center mb-3"},"Fa\xE7a login com e-mail e senha para acessar o painel administrativo do Assistente Virtual do ",e.createElement("span",{className:"text-primary font-weight-bold"},"IC-UFBA"),"."),e.createElement("form",{onSubmit:E,action:"#"},e.createElement(N,{variant:"outlined",fullWidth:!0,margin:"normal"},e.createElement(C,{htmlFor:"email"},"E-mail"),e.createElement(w,{id:"email",type:"email",value:a.email,onChange:r("email"),label:"E-mail"})),e.createElement(N,{variant:"outlined",fullWidth:!0,margin:"normal"},e.createElement(C,{htmlFor:"password"},"Senha"),e.createElement(w,{id:"password",type:a.showPassword?"text":"password",value:a.password,onChange:r("password"),endAdornment:e.createElement(W,{position:"end"},e.createElement(x,{"aria-label":"toggle password visibility",onClick:o,onMouseDown:m,edge:"end"},a.showPassword?e.createElement(re,null):e.createElement(oe,null))),label:"Senha"})),e.createElement("div",{className:"d-flex mb-3 justify-content-end"},e.createElement(K,{to:"/request-password"},"Esqueceu sua senha?")),e.createElement(S,{type:"submit",variant:"contained",className:"mb-3",disableElevation:!0,fullWidth:!0},"Entrar")))}function He(){return e.createElement(P,null,e.createElement("p",null,"request-password works!"))}function Qe(){return e.createElement(P,null,e.createElement("p",null,"request-password works!"))}function Ve({handleSidebarOptionClick:t}){return e.createElement("aside",{className:"d-none d-sm-flex flex-column align-items-center border-right border-info h-100"},e.createElement(x,{"aria-label":"home",onClick:()=>t("home")},e.createElement(ce,null)),e.createElement(x,{"aria-label":"brightness4",onClick:()=>t("dark")},e.createElement(ie,null)),e.createElement(x,{"aria-label":"cached",onClick:()=>t("font")},e.createElement(me,null)))}function We(){const[t,a]=d.exports.useState(null),l=o=>{a(o.currentTarget)},s=()=>{a(null)},n=Boolean(t),r=n?"learn-more-popover":void 0;return e.createElement(e.Fragment,null,e.createElement("h2",{className:"mb-0 text-dark"},"ChatBot do IC-UFBA"),e.createElement("div",{className:"flex-fill"}),e.createElement(S,{"aria-describedby":r,variant:"outlined",color:"secondary",onClick:l},"Saiba mais"),e.createElement(ue,{id:r,open:n,anchorEl:t,onClose:s,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e.createElement(de,{sx:{p:2}},"Icia ChatBot",e.createElement("br",null),e.createElement("br",null),"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa aliquam ipsa in deserunt, veniam tempore recusandae amet velit molestiae repudiandae. Rem incidunt possimus dolores harum id modi.")))}function Ke({generateMessegesOnFormSubmit:t}){const[a,l]=e.useState(""),s=()=>r=>{r.preventDefault(),t(a),l("")},n=()=>r=>{l(r.target.value)};return e.createElement("div",{className:"chat-input-container rounded-pill border border-info position-relative overflow-hidden w-100"},e.createElement("form",{onSubmit:s()},e.createElement("input",{type:"text",className:"py-2 pl-4 pr-5 w-100 border-0",onChange:n(),placeholder:"Digite algo",value:a}),e.createElement("div",{className:"position-absolute"},e.createElement(x,{type:"submit","aria-label":"cached",disabled:!a.length},e.createElement(pe,null)))))}var Je="/assets/icon-icia.06ab72ef.svg";function z({items:t,handleItemSelection:a}){const[l,s]=d.exports.useState(),n=o=>{s(o.id),a(o)},r=o=>o.description!==void 0;return e.createElement(e.Fragment,null,t!=null&&t.length?e.createElement("div",{className:"chat-items"},t.map(o=>e.createElement("button",{type:"button",key:o.id,onClick:()=>n(o),title:r(o)?o.description:o.name,className:`chat-item-option d-block rounded-pill bg-info text-dark py-${r(o)?"1":"2"} px-3 mt-3 border-0${l===o.id?" selected":""}`},e.createElement("span",null,r(o)?o.description:o.name)))):null)}function H({children:t,questions:a,side:l,text:s,topics:n,generateMessegesForTopicSelection:r,generateMessegesForQuestionSelection:o}){const m=u=>{typeof r=="function"&&E(u)&&r(u),typeof o=="function"&&i(u)&&o(u)},E=u=>u.name!==void 0,i=u=>u.description!==void 0;return e.createElement("div",{className:`chat-message d-flex ${l} w-100`},e.createElement("div",{className:"chat-user rounded-circle align-self-end d-flex align-items-center justify-content-center"},l==="left"?e.createElement("img",{src:Je,className:"h-auto",alt:"assistente chatbot"}):e.createElement(Ee,null,"person")),e.createElement("div",{className:"chat-ballon py-3 px-4"},s!=null&&s.length?e.createElement("h3",{className:"mb-0"},s.includes("https://")?e.createElement("a",{target:"_blank",className:"text-white",href:s,rel:"noreferrer"},s):s):null,t,e.createElement(z,{items:n,handleItemSelection:m}),a!=null&&a.length?e.createElement("div",{className:"d-block w-100"},e.createElement("h4",{className:"text-white mt-3 mb-0"},"Quest\xF5es:"),e.createElement(z,{items:a,handleItemSelection:m})):null,e.createElement("div",null)))}function Xe(){return e.createElement("div",{className:"d-flex align-items-center typing"},e.createElement("div",{className:"dot"}),e.createElement("div",{className:"dot"}),e.createElement("div",{className:"dot"}))}var Ye="/assets/logo-icia-horizontal-text-white.dc2df070.svg";function Y({children:t}){return e.createElement("div",null,e.createElement("header",{className:"d-flex align-items-center justify-content-start w-100 app-header px-3"},e.createElement("img",{src:Ye,className:"app-logo",alt:"logo"}),e.createElement("div",{className:"flex-fill"}),t))}function _e(){const t=d.exports.useRef(null),[a,l]=d.exports.useState(0),[s,n]=d.exports.useState([]),[r,o]=d.exports.useState(!0),m=["Agora escolha uma op\xE7\xE3o :)","Escolha mais uma op\xE7\xE3o abaixo.","Quase l\xE1, selecione uma op\xE7\xE3o.","Veja algumas op\xE7\xF5es que encontrei :)"];d.exports.useEffect(()=>{v.getInitialTopicsTree().then(p=>{const c=T(p.data);o(!1),n([...s,{text:a===0?"Ol\xE1, eu sou a Icia. Como posso te ajudar hoje?":"Ok... vamos tentar de novo. Como posso te ajudar hoje?",side:"left",topics:c}])}),a===0&&E()},[a]);const E=()=>{t&&t.current.addEventListener("DOMNodeInserted",p=>{const c=p.currentTarget;c.scroll({top:c.scrollHeight,behavior:"smooth"})})},i=p=>{p==="home"?l(1+a):alert("N\xE3o implementado!")},u=async p=>{const c=[...s,{text:p.name,side:"right"}];n(c),o(!0);const $=(await v.getTopicsTreeById(p.id)).data.find(Boolean),G=T($.children),Z=$.questions;c.push({text:m[Math.floor(Math.random()*m.length)],side:"left",topics:G,questions:Z}),o(!1),n(c)},b=async p=>{const c=[...s,{text:p.description,side:"right"},{text:p.answer,side:"left"}];n(c)},k=async p=>{const c=[];c.push({text:p,side:"right"}),c.push({text:"Ohh, n\xE3o... N\xE3o encontrei uma resposta para a sua pergunta.         Tente pesquisar com outro termo ou utilizar as op\xE7\xF5es do menu :(",side:"left"}),n([...s,...c])},T=p=>p.filter(g=>!!g.name.length).map(g=>({id:g.id,name:g.name}));return e.createElement("div",{className:"chatbot d-block w-100"},e.createElement("div",{className:"d-block min-vh-100 vh-100 w-100 mx-auto"},e.createElement(Y,null,e.createElement(S,{type:"button",variant:"contained",color:"secondary",disableElevation:!0,href:"/login"},"Login")),e.createElement("div",{className:"chat-container d-flex"},e.createElement(Ve,{handleSidebarOptionClick:i}),e.createElement("main",{className:"d-flex flex-column flex-fill"},e.createElement("div",{className:"chat-toolbar d-flex align-items-center border-bottom border-info px-3"},e.createElement(We,null)),e.createElement("div",{ref:t,className:"chat-content d-flex flex-column flex-fill w-100 mw-100 p-3"},s.map((p,c)=>e.createElement(H,{key:c,text:p.text,side:p.side,topics:p.topics,questions:p.questions,generateMessegesForTopicSelection:u,generateMessegesForQuestionSelection:b})),r?e.createElement(H,{side:"left"},e.createElement(Xe,null)):null),e.createElement("div",{className:"chat-toolbar d-flex align-items-center border-top border-info px-3"},e.createElement(Ke,{generateMessegesOnFormSubmit:k}))))))}const _=he({palette:{primary:{light:"#72C3E6",main:"#72C3E6",dark:"#72C3E6",contrastText:"#FFF"},secondary:{light:"#F9D055",main:"#F9D055",dark:"#F9D055",contrastText:"#FFF"}},typography:{fontFamily:["IBM Plex Sans","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),Ge=[{icon:t=>e.createElement(ge,{htmlColor:t}),name:"Perguntas",path:"/questions",isSelected:!1},{icon:t=>e.createElement(fe,{htmlColor:t}),name:"Usu\xE1rios",path:"/users",isSelected:!1}],Ze=()=>e.createElement("nav",{id:"container"},Ge.map((t,a)=>{const l=window.location.pathname.includes(t.path);return e.createElement(K,{to:t.path,key:a},e.createElement("div",{className:"menu-option"},e.createElement("i",{className:"menu-icon"},t.icon(l?_.palette.secondary.main:"")),e.createElement("span",{className:l?"is-selected":""},t.name)))}));function R({children:t}){const{clean:a,user:l}=O(),s=I(),n=B().pathname;return e.createElement("div",{className:"app"},e.createElement(Y,null,e.createElement("button",{id:"logout-button",onClick:()=>{Me(),a(),s("/login",{replace:!0})}},n==="/"?"ACESSO ADMIN":"SAIR")),e.createElement("div",{id:"admin-container"},e.createElement(Ze,null),e.createElement("main",{id:"admin-content"},t)))}const q=({name:t,type:a="button",onClick:l})=>e.createElement("button",{type:a,className:"yellow-button",onClick:l},t),et=()=>{const t=I(),[a,l]=d.exports.useState(""),[s,n]=d.exports.useState(""),{authToken:r}=O(),{topicId:o,topicName:m}=B().state;console.log(B().state);const E=i=>{i.preventDefault(),v.createQuestion(r,o,a,s).then(u=>u.data).then(u=>{console.log(u),t(-1)}).catch(u=>{})};return e.createElement(R,null,e.createElement("div",{className:"d-flex align-items-center mt-2"},e.createElement("i",{className:"mr-3 ml-3",onClick:()=>{t(-1)}},e.createElement(J,null)),e.createElement("span",{className:"title"},"Cadastrar Pergunta em ",m)),e.createElement("form",{onSubmit:E,className:"formContainer"},e.createElement("div",{className:"formControl"},e.createElement(N,{className:"formControl",variant:"outlined",fullWidth:!0,color:"secondary"},e.createElement(C,{htmlFor:"email"},"Pergunta"),e.createElement(w,{id:"description",type:"text",placeholder:"Digite a pergunta",value:a,onChange:i=>l(i.target.value)}))),e.createElement("div",{className:"formControl mb-2"},e.createElement(N,{className:"formControl",variant:"outlined",fullWidth:!0,color:"secondary"},e.createElement(C,{htmlFor:"email"},"Resposta"),e.createElement(w,{id:"email",type:"text",placeholder:"Digite a resposta",value:s,onChange:i=>n(i.target.value)}))),e.createElement(q,{type:"submit",name:"CADASTRAR"})))};const tt=({question:t})=>{const{id:a,description:l,answer:s}=t;return e.createElement("div",{className:"question-container"},e.createElement("div",null,e.createElement("h4",{className:"question-text"},l),e.createElement("p",{className:"question-text"},s)),e.createElement(q,{name:"EDITAR",onClick:n=>{}}))};function U(){const[t,a]=d.exports.useState([]),[l,s]=d.exports.useState([]),[n,r]=d.exports.useState([]),[o,m]=d.exports.useState([]),[E,i]=d.exports.useState(""),[u,b]=d.exports.useState(0),k=I(),{authToken:T}=O(),{getTopicsTree:p}=v;return d.exports.useEffect(()=>{p(T).then(c=>{m(c.data||[]),r(c.data||[])})},[]),e.createElement(R,null,e.createElement("div",{className:"title-container"},e.createElement("h2",{className:"title"},"Perguntas por categoria")),e.createElement("div",{className:"questions-container"},e.createElement("div",{className:"breadcrumb-container"},u!==0?e.createElement("span",null,e.createElement("a",{className:"breadcrumb-item",onClick:()=>{s([]),m(n),i(""),b(0),a([])}},"Inicio")," > "):e.createElement("span",null,"Inicio"),l.map((c,g)=>g!==l.length-1?e.createElement("span",null,e.createElement("a",{className:"breadcrumb-item",onClick:()=>{s($=>$.slice(0,g+1)),m(c.children),i(c.name),b(c.id),a(c.questions)}},c.name)," > "):e.createElement(e.Fragment,null,c.name))),o.map(c=>c.name===""?null:e.createElement("button",{className:"filter-question-button",onClick:()=>{a(c.questions),s(g=>[...g,c]),m(c.children),i(c.name),b(c.id)}},c.name)),e.createElement("button",{className:"add-category-button"},"+"),e.createElement("div",{className:"mt-3"},E&&e.createElement(e.Fragment,null,e.createElement("h3",null," ",`Perguntas categoria ${E}`),e.createElement("br",null),e.createElement("div",null,e.createElement(q,{name:"ADICIONAR",onClick:()=>{k("/questions/create",{state:{topicId:u,topicName:E}})}})))),e.createElement("div",{id:"questions-container"},t.map(c=>e.createElement(tt,{question:c})))))}function Q(){const t=I(),{id:a,name:l,email:s}=B().state,[n,r]=e.useState({email:s||"",name:l||"",password:""}),o=E=>i=>{r(D(F({},n),{[E]:i.target.value}))},m=E=>{E.preventDefault(),a?v.editUser(a,n.email,n.name,n.password).then(i=>i.data).then(i=>{console.log(i),t("/users")}).catch(i=>{console.log(i)}):v.createUser(n.email,n.name,n.password).then(i=>i.data).then(i=>{console.log(i),t("/users")}).catch(i=>{console.log(i)})};return e.createElement(R,null,e.createElement("div",{className:"user-container title-container"},e.createElement(x,{"aria-label":"Voltar",component:"span",onClick:()=>{t("/users")}},e.createElement(J,null)),e.createElement("h2",null,"Cadastrar Usu\xE1rio")),e.createElement("div",{className:"user-container"},e.createElement("form",{onSubmit:m,action:"#"},e.createElement(N,{color:"secondary",variant:"outlined",fullWidth:!0,margin:"normal"},e.createElement(C,{htmlFor:"text"},"Nome"),e.createElement(w,{id:"name",type:"text",value:n.name,onChange:o("name"),label:"Nome"})),e.createElement(N,{color:"secondary",variant:"outlined",fullWidth:!0,margin:"normal"},e.createElement(C,{htmlFor:"text"},"E-mail"),e.createElement(w,{id:"email",type:"email",value:n.email,onChange:o("email"),label:"E-mail"})),e.createElement(N,{variant:"outlined",fullWidth:!0,margin:"normal"},e.createElement(C,{color:"secondary",htmlFor:"text"},"Senha"),e.createElement(w,{id:"password",type:"text",value:n.password,onChange:o("password"),label:"Senha",color:"secondary"})),e.createElement(S,{type:"submit",variant:"contained",color:"secondary",disableElevation:!0},"Enviar"))))}const at=t=>{const{title:a,children:l,open:s,setOpen:n,onConfirm:r}=t;return e.createElement(ve,{open:s,onClose:()=>n(!1),"aria-labelledby":"confirm-dialog"},e.createElement(be,{id:"confirm-dialog"},a),e.createElement(xe,null,l),e.createElement(ye,null,e.createElement(S,{variant:"contained",onClick:()=>n(!1),color:"secondary"},"No"),e.createElement(S,{variant:"contained",onClick:()=>{n(!1),r()},color:"secondary"},"Yes")))};function V(){const t=I(),[a,l]=d.exports.useState([]),[s,n]=d.exports.useState(!1),r=m=>{v.deleteUser(m).then(()=>o()).catch(E=>{console.log(E)})},o=()=>{v.getUsers().then(m=>{l(m.data)})};return d.exports.useEffect(()=>{o()},[]),e.createElement(R,null,e.createElement("div",{className:"user-container title-container"},e.createElement("h2",null,"Usu\xE1rios Cadastrados"),e.createElement(S,{variant:"outlined",color:"secondary",onClick:()=>{t("/users/create",{state:{id:"",name:"",email:""}})}},"CRIAR NOVO")),e.createElement("div",{className:"user-container",style:{display:"none"}},e.createElement(Ne,{id:"search",label:"Pesquisar",InputProps:{startAdornment:e.createElement(W,{position:"start"},e.createElement(Ce,null))},variant:"standard"})),e.createElement("div",{className:"user-container"},e.createElement(we,{component:Se},e.createElement(ke,{sx:{minWidth:450},size:"small"},e.createElement(Te,null,e.createElement(j,null,e.createElement(A,null,"Nome"),e.createElement(A,null,"Email"),e.createElement(A,null,"A\xE7\xF5es"))),e.createElement(Ae,null,a.map(m=>e.createElement(j,{key:m.name,sx:{"&:last-child td, &:last-child th":{border:0}}},e.createElement(A,{component:"th",scope:"row"},m.name),e.createElement(A,null,m.email),e.createElement(A,null,e.createElement(x,{"aria-label":"Editar",component:"span",onClick:()=>{t("/users/edit",{state:{id:m.id,name:m.name,email:m.email}})}},e.createElement(Ie,null)),e.createElement(x,{"aria-label":"Deletar",component:"span",onClick:()=>n(!0)},e.createElement(Fe,null),e.createElement(at,{title:`Deletar usu\xE1rio ${m.name}`,open:s,setOpen:n,onConfirm:r(m.id)},"Are you sure you want to delete this post?"))))))))))}function nt(){const{user:t,storeToken:a,storeUser:l}=O(),s=d.exports.useMemo(()=>{let n=!!t;if(!t){const r=y();r&&(n=!0,l(r.user),a((r==null?void 0:r.token)||""))}return n},[t]);return e.createElement(De,null,e.createElement(Oe,null,s?e.createElement(e.Fragment,null,e.createElement(h,{path:"/dashboard",element:e.createElement(U,null)}),e.createElement(h,{path:"/users",element:e.createElement(V,null)}),e.createElement(h,{path:"/questions",element:e.createElement(U,null)}),e.createElement(h,{path:"/questions/create",element:e.createElement(et,null)}),e.createElement(h,{path:"dashboard",element:e.createElement(U,null)}),e.createElement(h,{path:"users",element:e.createElement(V,null)}),e.createElement(h,{path:"users/create",element:e.createElement(Q,null)}),e.createElement(h,{path:"users/edit",element:e.createElement(Q,null)}),e.createElement(h,{path:"questions",element:e.createElement(U,null)})):e.createElement(e.Fragment,null,e.createElement(h,{path:"login",element:e.createElement(ze,null)}),e.createElement(h,{path:"request-password",element:e.createElement(He,null)}),e.createElement(h,{path:"reset-password",element:e.createElement(Qe,null)})),e.createElement(h,{path:"/",element:e.createElement(_e,null)}),e.createElement(h,{path:"*",element:e.createElement($e,{to:s?"/dashboard":"/",replace:!0})})))}function lt(){return e.createElement(e.Fragment,null,e.createElement(Pe,null,e.createElement(Ue,{theme:_},e.createElement(nt,null))))}Be.render(e.createElement(e.StrictMode,null,e.createElement(lt,null)),document.getElementById("root"));
