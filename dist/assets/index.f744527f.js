var de=Object.defineProperty,ue=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var Ee=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var K=(t,a,s)=>a in t?de(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,q=(t,a)=>{for(var s in a||(a={}))Ee.call(a,s)&&K(t,s,a[s]);if(_)for(var s of _(a))he.call(a,s)&&K(t,s,a[s]);return t},U=(t,a)=>ue(t,pe(a));import{r as m,R as e,a as ge,L,u as A,A as Z,F,I,O,b as z,c as ee,d as N,V as fe,e as ve,f as te,M as j,H as xe,B as be,g as ye,h as Ce,i as k,P as Ne,T as Q,S as Se,j as we,k as Te,l as ke,m as Ae,n as $,t as M,o as H,p as Fe,q as Ie,s as Oe,D as Me,E as ae,v as ne,w as Pe,x as qe,y as Ue,z as De,C as Re,G as X,J as D,K as $e,N as Be,Q as Le,U as b,W as R,X as je,Y as ze,Z as Qe}from"./vendor.6ec396a4.js";const He=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}};He();const se=m.exports.createContext({}),We=({children:t})=>{const[a,s]=m.exports.useState(),[r,n]=m.exports.useState(""),o=h=>{s(h)},l=h=>{n(h)},c=()=>{n(""),s(void 0)};return e.createElement(se.Provider,{value:{user:a,authToken:r,storeUser:o,storeToken:l,clean:c}},t)},P=()=>e.useContext(se);const Ve={Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:"Bearer "},C=ge.create({baseURL:"https://virtual-assistent-backend.herokuapp.com/",headers:Ve}),S={getInitialTopicsTree:async()=>C.get("/api/v1/topics"),getTopicsTreeById:async t=>C.get(`/api/v1/topics/${t}`),getTopicsTreeByNlp:async t=>C.post("/api/v1/nlp",{text:t}),login:async t=>C.post("/api/v2/auth/login",t),getTopicsTree:async t=>{var s;let a=t;return a||(a=((s=T())==null?void 0:s.token)||""),C.get("/api/v3/topics",{headers:{Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:`Bearer ${a}`}})},createQuestion:async(t,a,s,r)=>{var l;let n=t;n||(n=((l=T())==null?void 0:l.token)||"");const o={topic_id:a,description:s,answer:r};return C.post("/api/v3/questions",o,{headers:{Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:`Bearer ${n}`}})},getQuestions:async t=>{var s;let a=t;return a||(a=((s=T())==null?void 0:s.token)||""),C.get("/api/v3/questions",{headers:{Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:`Bearer ${a}`}})},editQuestion:async(t,a,s,r,n)=>{var c;let o=a;o||(o=((c=T())==null?void 0:c.token)||"");const l={id:t,topic_id:s,description:r,answer:n};return C.patch(`/api/v3/questions/${t}`,l,{headers:{Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:`Bearer ${o}`}})},deleteQuestion:async(t,a)=>{var r;let s=a;return s||(s=((r=T())==null?void 0:r.token)||""),C.delete(`/api/v3/questions/${t}`,{headers:{Accept:"application/json, text/plain, */*","X-CSRF-TOKEN":"",Authorization:`Bearer ${s}`}})},getUsers:async()=>{var a;const t={headers:{Authorization:"Bearer "+((a=T())==null?void 0:a.token)}};return C.get("/api/v3/users",t)},createUser:async(t,a,s)=>{var n;const r={headers:{Authorization:"Bearer "+((n=T())==null?void 0:n.token)}};return C.post("/api/v3/users",{email:t,name:a,password:s},r)},editUser:async(t,a,s,r)=>{var o;const n={headers:{Authorization:"Bearer "+((o=T())==null?void 0:o.token)}};return C.patch(`/api/v3/users/${t}`,{email:a,name:s,password:r},n)},deleteUser:async t=>{var s;const a={headers:{Authorization:"Bearer "+((s=T())==null?void 0:s.token)}};return C.delete(`/api/v3/users/${t}`,a)}},_e=t=>{window.sessionStorage.setItem("AUTH",JSON.stringify(t))},T=()=>{const t=window.sessionStorage.getItem("AUTH");return t?JSON.parse(t):null},Ke=()=>{window.sessionStorage.removeItem("AUTH")};var Xe="/assets/logo-ic-ufba.d4b7fcf3.png",Ge="/assets/logo-icia-vertical.dc3a2a24.svg";function W({children:t}){return e.createElement("div",{className:`auth-container d-flex flex-column overflow-auto justify-content-start\r
                 justify-content-sm-center align-items-center p-3 p-md-4 min-vh-100 w-100`},e.createElement("div",{className:"shadow-sm rounded bg-white w-100 p-3"},e.createElement("div",{className:"px-3 pt-3 pb-4"},e.createElement(L,{to:"/",className:"logo d-flex mx-auto mb-4 align-items-end justify-content-center"},e.createElement("div",{className:"d-flex",style:{width:"60%"}},e.createElement("img",{src:Ge,alt:"Logomarca ICIA",className:"w-100"})),e.createElement("div",{className:"d-flex pl-3",style:{width:"38%"}},e.createElement("img",{src:Xe,alt:"Logo Computa\xE7\xE3o Ufba",className:"w-100"}))),t)),e.createElement("div",{className:"w-100 mt-2 text-center text-white"},"\xA9 Todos os direitos reservados."))}function Je(){const t=A(),[a,s]=e.useState(!1),[r,n]=e.useState(!1),[o,l]=e.useState(!1),[c,h]=e.useState({email:"",password:"",showPassword:!1}),{storeUser:p,storeToken:E}=P(),d=y=>v=>{h(U(q({},c),{[y]:v.target.value})),n(!1)},x=()=>{h(U(q({},c),{showPassword:!c.showPassword}))},f=y=>{y.preventDefault()},w=y=>{y.preventDefault(),!!c.email||!!c.email?(l(!0),S.login(c).then(v=>v.data).then(v=>{var i,u;if(v.status==="Success"){const g=(i=v.data)==null?void 0:i.user;p(g),E((u=v.data)==null?void 0:u.token),_e(v.data),t("/dashboard")}l(!1)}).catch(v=>{l(!1),s(!0),n(!0),h(U(q({},c),{password:""}))})):n(!0)};return e.createElement(W,null,a?e.createElement(Z,{severity:"error"},"Seu e-mail ou senha n\xE3o correspondem aos nossos registros."):null,e.createElement("form",{onSubmit:w,action:"#"},e.createElement(F,{variant:"outlined",error:r,fullWidth:!0,margin:"normal"},e.createElement(I,{htmlFor:"email"},"E-mail"),e.createElement(O,{id:"email",type:"email",value:c.email,onChange:d("email"),label:"E-mail"}),r?e.createElement(z,{id:"e-mail-error-text"},c.email?"E-mail ou senha incorreto.":"Campo obrigat\xF3rio."):null),e.createElement(F,{variant:"outlined",error:r,fullWidth:!0,margin:"normal"},e.createElement(I,{htmlFor:"password"},"Senha"),e.createElement(O,{id:"password",type:c.showPassword?"text":"password",value:c.password,onChange:d("password"),endAdornment:e.createElement(ee,{position:"end"},e.createElement(N,{"aria-label":"toggle password visibility",onClick:x,onMouseDown:f,edge:"end"},c.showPassword?e.createElement(fe,null):e.createElement(ve,null))),label:"Senha"}),r?e.createElement(z,{id:"password-error-text"},c.password?"E-mail ou senha incorreto.":"Campo obrigat\xF3rio."):null),e.createElement("div",{className:"d-flex mb-3 justify-content-end"},e.createElement(L,{to:"/request-password",id:"request-password__button"},"Esqueceu sua senha?")),e.createElement(te,{id:"submitt-button",type:"submit",loading:o,variant:"contained",className:"mb-3",disableElevation:!0,fullWidth:!0},"Entrar")))}function Ye(){const[t,a]=e.useState(!1),[s,r]=e.useState(!1),[n,o]=e.useState(!1),[l,c]=e.useState({email:""}),h=E=>d=>{c(U(q({},l),{[E]:d.target.value})),o(!1)},p=E=>{E.preventDefault(),l.email?(a(!0),setTimeout(()=>{a(!1),r(!0)},1500)):o(!0)};return e.createElement(W,null,e.createElement("form",{onSubmit:p,action:"#"},s?e.createElement(Z,{severity:"success"},"Se o e-mail ",e.createElement("b",null,l.email)," estiver cadastrado, voc\xEA receber\xE1 intru\xE7\xF5es para recuperar sua senha."):null,e.createElement(F,{variant:"outlined",error:n,fullWidth:!0,margin:"normal",className:"mb-4"},e.createElement(I,{htmlFor:"email"},"E-mail"),e.createElement(O,{id:"email",type:"email",value:l.email,onChange:h("email"),label:"E-mail"}),n?e.createElement(z,{id:"e-mail-error-text"},"Campo obrigat\xF3rio."):null),e.createElement(te,{id:"submitt-button",type:"submit",loading:t,variant:"contained",className:"mb-3",disableElevation:!0,fullWidth:!0},"Entrar")),e.createElement(L,{to:"/login"},"Fazer login")," em vez disso.")}function Ze(){return e.createElement(W,null,e.createElement("p",null,"request-password works!"))}function et({handleSidebarOptionClick:t}){const[a,s]=m.exports.useState(!1);return e.createElement("aside",{className:"d-none d-sm-flex flex-column align-items-center border-right border-info h-100"},e.createElement(j,{title:"Reiniciar",placement:"right"},e.createElement(N,{"aria-label":"home",onClick:()=>t("home")},e.createElement(xe,null))),e.createElement(j,{title:a?"Modo claro":"Modo escuro",placement:"right"},e.createElement(N,{"aria-label":"theme-mode",onClick:()=>{s(!a),t("mode")}},a?e.createElement(be,null):e.createElement(ye,null))),e.createElement(j,{title:"Fonte",placement:"right"},e.createElement(N,{"aria-label":"cached",onClick:()=>t("font")},e.createElement(Ce,null))))}function tt(){const[t,a]=m.exports.useState(null),s=l=>{a(l.currentTarget)},r=()=>{a(null)},n=Boolean(t),o=n?"learn-more-popover":void 0;return e.createElement(e.Fragment,null,e.createElement("h2",{id:"chat-header-title",title:"Intelig\xEAncia Artificial do IC",className:"mb-0 text-dark"},"Intelig\xEAncia Artificial do IC"),e.createElement("div",{className:"flex-fill"}),e.createElement(k,{"aria-describedby":o,variant:"outlined",color:"secondary",onClick:s},"Saiba mais"),e.createElement(Ne,{id:o,open:n,anchorEl:t,onClose:r,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e.createElement(Q,{sx:{p:2}},'O ICIA \xE9 um sistema de "BOT" com o objetivo de responder as d\xFAvidas relacionadas ao Instituto de Computa\xE7\xE3o (IC) da UFBA, especialmente dos cursos de gradua\xE7\xE3o e p\xF3s-gradua\xE7\xE3o do PGCOMP.',e.createElement("br",null),e.createElement("br",null),"O aplicativo foi desenvolvido por discentes de cursos de gradua\xE7\xE3o e p\xF3s-gradua\xE7\xE3o vinculados ao PGCOMP, sob a orienta\xE7\xE3o do Prof. Dr. Frederico Dur\xE3o, referente a disciplina T\xF3picos em Sistemas de Informa\xE7\xE3o e Web I no semestre letivo de 2022.1.")))}function at({generateMessegesOnFormSubmit:t}){const[a,s]=e.useState(""),r=()=>o=>{o.preventDefault(),t(a),s("")},n=()=>o=>{s(o.target.value)};return e.createElement("div",{className:"chat-input-container rounded-pill border border-info position-relative overflow-hidden w-100"},e.createElement("form",{onSubmit:r()},e.createElement("input",{type:"text",className:"py-2 pl-4 pr-5 w-100 border-0",onChange:n(),placeholder:"Digite algo",value:a}),e.createElement("div",{className:"position-absolute"},e.createElement(N,{type:"submit","aria-label":"cached",disabled:!a.length},e.createElement(Se,null)))))}var nt="/assets/icon-icia.06ab72ef.svg";function G({items:t,handleItemSelection:a}){const[s,r]=m.exports.useState(),n=l=>{r(l.id),a(l)},o=l=>l.description!==void 0;return e.createElement(e.Fragment,null,t!=null&&t.length?e.createElement("div",{className:"chat-items"},t.map(l=>e.createElement("button",{type:"button",key:l.id,onClick:()=>n(l),title:o(l)?l.description:l.name,className:`chat-item-option d-block rounded-pill bg-info text-dark py-2 px-3 mt-3 border-0${s===l.id?" selected":""}`},e.createElement("span",null,o(l)?l.description:l.name)))):null)}function J({children:t,questions:a,side:s,text:r,topics:n,generateMessegesForTopicSelection:o,generateMessegesForQuestionSelection:l}){const c=E=>{typeof o=="function"&&h(E)&&o(E),typeof l=="function"&&p(E)&&l(E)},h=E=>E.name!==void 0,p=E=>E.description!==void 0;return e.createElement("div",{className:`chat-message d-flex ${s} w-100`},e.createElement("div",{className:"chat-user rounded-circle align-self-end d-flex align-items-center justify-content-center"},s==="left"?e.createElement("img",{src:nt,className:"h-auto",alt:"assistente chatbot"}):e.createElement(we,null,"person")),e.createElement("div",{className:"chat-ballon py-3 px-4"},r!=null&&r.length?e.createElement("h3",{className:"font-weight-normal mb-0"},r.includes("https://")?e.createElement("a",{target:"_blank",className:"text-white",href:r,rel:"noreferrer"},r):r):null,t,e.createElement(G,{items:n,handleItemSelection:c}),a!=null&&a.length?e.createElement("div",{className:"d-block w-100"},e.createElement(G,{items:a,handleItemSelection:c})):null,e.createElement("div",null)))}function st(){return e.createElement("div",{className:"d-flex align-items-center typing"},e.createElement("div",{className:"dot"}),e.createElement("div",{className:"dot"}),e.createElement("div",{className:"dot"}))}var rt="/assets/logo-icia-horizontal-text-white.dc2df070.svg";function re({children:t}){return e.createElement("div",null,e.createElement("header",{className:"d-flex align-items-center justify-content-start w-100 app-header px-3"},e.createElement("img",{"data-testid":"logo",src:rt,className:"app-logo",alt:"logo"}),e.createElement("div",{className:"flex-fill"}),t))}function ot(){const t=m.exports.useRef(null),[a,s]=m.exports.useState(0),[r,n]=m.exports.useState([]),[o,l]=m.exports.useState(!0),[c,h]=m.exports.useState(!1);let p=A();const E=["Agora escolha uma op\xE7\xE3o :)","Escolha mais uma op\xE7\xE3o abaixo.","Quase l\xE1, selecione uma op\xE7\xE3o.","Veja algumas op\xE7\xF5es que encontrei :)"];m.exports.useEffect(()=>{S.getInitialTopicsTree().then(i=>{const u=v(i.data);l(!1),n([...r,{text:a===0?"Ol\xE1, eu sou a Icia. Como posso te ajudar hoje?":"Ok... vamos tentar de novo. Como posso te ajudar hoje?",side:"left",topics:u}])}),a===0&&d()},[a]);const d=()=>{t&&t.current.addEventListener("DOMNodeInserted",i=>{const u=i.currentTarget;u.scroll({top:u.scrollHeight,behavior:"smooth"})})},x=i=>{switch(i){case"home":s(1+a);break;case"mode":h(!c);break;default:alert("N\xE3o implementado!")}},f=async i=>{const u=[...r,{text:i.name,side:"right"}];n(u),l(!0);const V=(await S.getTopicsTreeById(i.id)).data.find(Boolean),ce=v(V.children),me=V.questions;u.push({text:E[Math.floor(Math.random()*E.length)],side:"left",topics:ce,questions:me}),l(!1),n(u)},w=async i=>{const u=[...r,{text:i.description,side:"right"},{text:i.answer,side:"left"}];n(u)},y=async i=>{const u=[...r,{text:i,side:"right"}];n(u),l(!0);try{const g=await S.getTopicsTreeByNlp(i);if(!g.data)throw new Error("no content");g.data[0].description!==void 0&&u.push({text:E[Math.floor(Math.random()*E.length)],side:"left",topics:[],questions:g.data})}catch{u.push({text:"Ohh, n\xE3o... N\xE3o encontrei uma resposta para a sua pergunta.           Tente pesquisar com outro termo ou utilizar as op\xE7\xF5es do menu :(",side:"left"})}l(!1),n(u)},v=i=>i.filter(g=>!!g.name.length).map(g=>({id:g.id,name:g.name}));return e.createElement("div",{className:"chatbot d-block w-100"+(c?" dark":"")},e.createElement("div",{className:"d-block min-vh-100 vh-100 w-100 mx-auto"},e.createElement(re,null,e.createElement(k,{id:"login-button",type:"button",variant:"contained",color:"secondary",disableElevation:!0,onClick:()=>{p("/login")}},"Login")),e.createElement("div",{className:"chat-container d-flex"},e.createElement(et,{handleSidebarOptionClick:x}),e.createElement("main",{className:"d-flex flex-column flex-fill"},e.createElement("div",{className:"chat-toolbar d-flex align-items-center border-bottom border-info px-3"},e.createElement(tt,null)),e.createElement("div",{ref:t,className:"chat-content d-flex flex-column flex-fill w-100 mw-100 p-3"},r.map((i,u)=>e.createElement(J,{key:u,text:i.text,side:i.side,topics:i.topics,questions:i.questions,generateMessegesForTopicSelection:f,generateMessegesForQuestionSelection:w})),o?e.createElement(J,{side:"left"},e.createElement(st,null)):null),e.createElement("div",{className:"chat-toolbar d-flex align-items-center border-top border-info px-3"},e.createElement(at,{generateMessegesOnFormSubmit:y}))))))}const oe=Te({palette:{primary:{light:"#72C3E6",main:"#72C3E6",dark:"#72C3E6",contrastText:"#FFF"},secondary:{light:"#F9D055",main:"#F9D055",dark:"#F9D055",contrastText:"#FFF"}},typography:{fontFamily:["IBM Plex Sans","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),lt=[{id:"question-link",icon:t=>e.createElement(ke,{htmlColor:t}),name:"Perguntas",path:"/dashboard/questions",isSelected:!1},{id:"users-link",icon:t=>e.createElement(Ae,{htmlColor:t}),name:"Usu\xE1rios",path:"/dashboard/users",isSelected:!1}],it=()=>e.createElement("nav",{id:"container"},lt.map(t=>{const a=window.location.pathname.includes(t.path);return e.createElement(L,{"data-testid":t.id,to:t.path,key:t.id},e.createElement("div",{className:"menu-option"},e.createElement("i",{className:"menu-icon"},t.icon(a?oe.palette.secondary.main:"")),e.createElement("span",{className:a?"is-selected":""},t.name)))}));function B({children:t}){const{clean:a,user:s}=P(),r=A(),n=$().state,o=n==null?void 0:n.message;return m.exports.useEffect(()=>{o&&(M[o.type](o.text),history.replaceState({message:null},""))},[]),e.createElement("div",{className:"app"},e.createElement(re,null,e.createElement(k,{id:"logout-button",type:"button",variant:"contained",color:"secondary",disableElevation:!0,onClick:()=>{Ke(),a(),r("/login",{replace:!0})}},"Sair")),e.createElement("div",{id:"admin-container",className:"d-flex"},e.createElement(it,null),e.createElement("main",{id:"admin-content"},t)))}const le=({description:t,answer:a,isEdit:s,handleSubmit:r,handleQuestionChange:n,handleAnswerChange:o})=>e.createElement("form",{onSubmit:r,className:"formContainer"},e.createElement(F,{className:"mt-4",variant:"outlined",fullWidth:!0,color:"secondary"},e.createElement(I,{htmlFor:"input-question"},"Pergunta"),e.createElement(O,{id:"input-question",type:"text",placeholder:"Digite a pergunta",value:t,onChange:l=>n(l.target.value),label:"Pergunta"})),e.createElement("div",{className:" mb-2"},e.createElement(F,{className:"mt-4",variant:"outlined",color:"secondary",fullWidth:!0},e.createElement(I,{htmlFor:"input-answer"},"Resposta"),e.createElement(O,{id:"input-answer",type:"text",placeholder:"Digite a resposta",value:a,onChange:l=>o(l.target.value),label:"Resposta"}))),s?e.createElement(k,{variant:"contained",color:"secondary",type:"submit","data-testid":"submit-button"},"EDITAR"):e.createElement(k,{variant:"contained",color:"secondary",type:"submit","data-testid":"submit-button"},"CADASTRAR")),ct=()=>{const t=A(),[a,s]=m.exports.useState(""),[r,n]=m.exports.useState(""),{authToken:o}=P(),{topicId:l,topicName:c}=$().state,h=d=>{n(d)},p=d=>{s(d)},E=d=>{d.preventDefault(),S.createQuestion(o,l,a,r).then(x=>x.data).then(x=>{console.log(x),t("/dashboard/questions",{state:{message:{type:"success",text:"Pergunta adicionada com sucesso!"}}})}).catch(x=>{})};return e.createElement(B,null,e.createElement("div",{className:"d-flex align-items-center mt-2"},e.createElement(N,{className:"mr-3 ml-3","aria-label":"Voltar",component:"span",onClick:()=>{t(-1)}},e.createElement(H,null)),e.createElement("span",{className:"title"},"Cadastrar Pergunta em ",c)),e.createElement(le,{description:a,answer:r,handleSubmit:E,handleAnswerChange:h,handleQuestionChange:p}))},mt=()=>{const{id:t,topic_id:a,topicName:s,description:r,answer:n}=$().state,o=A(),[l,c]=m.exports.useState(r),[h,p]=m.exports.useState(n),{authToken:E}=P(),[d,x]=m.exports.useState(!1),{pathname:f}=$(),w=f.includes("edit"),y=u=>{p(u)},v=u=>{c(u)},i=u=>{u.preventDefault(),x(!0),S.editQuestion(t,E,a,l,h).then(g=>g.data).then(g=>{x(!1),o("/dashboard/questions",{state:{message:{type:"success",text:"Pergunta editada com sucesso!"}}})}).catch(g=>{M.error("Ocorreu um erro"),x(!1)})};return e.createElement(B,null,d&&e.createElement(Fe,{variant:"indeterminate"}),e.createElement("div",{className:"d-flex align-items-center mt-2"},e.createElement(N,{className:"mr-3 ml-3","aria-label":"Voltar",component:"span",onClick:()=>{o(-1)}},e.createElement(H,null)),e.createElement("span",{className:"title"},"Editar Pergunta",s)),e.createElement(le,{description:l,answer:h,handleSubmit:i,handleAnswerChange:y,handleQuestionChange:v,isEdit:w}))};function ie({title:t,text:a,isOpen:s,handleClose:r,handleConfirm:n}){return m.exports.createElement("div",null,m.exports.createElement(Ie,{open:s,onClose:r,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},m.exports.createElement(Oe,{className:"modal-box"},m.exports.createElement(Q,{id:"modal-modal-title",variant:"h6",component:"h2"},t),m.exports.createElement(Q,{id:"modal-modal-description",sx:{mt:2}},a),m.exports.createElement("div",{className:"modal-footer"},m.exports.createElement(k,{variant:"contained",color:"warning",onClick:n,"data-testid":"confirm-button"},"Sim"),m.exports.createElement(k,{variant:"outlined",onClick:r,className:"ml-2"},"N\xE3o")))))}function dt({questions:t,removeQuestion:a}){const s=A(),{authToken:r}=P(),[n,o]=e.useState(!1),[l,c]=e.useState(),h=f=>{const{id:w,topic_id:y,description:v,answer:i,parents:u}=f;let g=y;!g&&u&&(g=u[u.length-1].id),s("edit",{state:{id:w,topic_id:g,description:v,answer:i}})},p=f=>{S.deleteQuestion(f,r).then(w=>{w.data.status==="Success"?(a&&a(f),M.success("Pergunta exclu\xEDda com sucesso!")):M.error("Houve um erro ao excluir a pergunta."),d()})},E=f=>{c(f),o(!0)},d=()=>{c(void 0),o(!1)},x=[{field:"description",headerName:"Pergunta",flex:4},{field:"answer",headerName:"Resposta",flex:4},{field:"id",headerName:"A\xE7\xF5es",renderCell:f=>e.createElement(e.Fragment,null,e.createElement(ie,{title:"Excluir Pergunta",text:"Tem certeza que deseja excluir essa pergunta?",isOpen:n&&l===f.row.id,handleClose:d,handleConfirm:()=>p(l)}),e.createElement(N,{"aria-label":"Editar","data-testid":"edit-button",component:"span",onClick:()=>h(f.row)},e.createElement(ae,null)),e.createElement(N,{"data-testid":"delete-button","aria-label":"Deletar",component:"span",onClick:()=>{E(f.row.id)}},e.createElement(ne,null)))}];return e.createElement("div",{style:{height:"80vh",width:"100%"}},e.createElement(Me,{rows:t,columns:x,pageSize:15,rowsPerPageOptions:[],disableSelectionOnClick:!0}))}function ut(){const[t,a]=m.exports.useState([]),[s,r]=m.exports.useState([]),[n,o]=m.exports.useState([]),[l,c]=m.exports.useState([]),[h,p]=m.exports.useState(""),[E,d]=m.exports.useState(0),x=A(),{authToken:f}=P(),{getTopicsTree:w,getQuestions:y}=S,v=i=>{a(u=>u.filter(g=>g.id!==i))};return m.exports.useEffect(()=>{E===0&&y(f).then(i=>{a(i.data)})},[E]),m.exports.useEffect(()=>{w(f).then(i=>{c(i.data||[]),o(i.data||[])})},[]),e.createElement(B,null,e.createElement("div",{className:"title-container"},e.createElement("h2",{className:"title"},"Perguntas por categoria")),e.createElement("div",{className:"questions-container"},e.createElement("div",{className:"breadcrumb-container"},E!==0?e.createElement("span",null,e.createElement("button",{className:"breadcrumb-item",onClick:()=>{r([]),c(n),p(""),d(0),a([])}},"Inicio")," > "):e.createElement("span",null,"Inicio"),s.map((i,u)=>u!==s.length-1?e.createElement("span",{key:i.id},e.createElement("button",{className:"breadcrumb-item",onClick:()=>{r(g=>g.slice(0,u+1)),c(i.children),p(i.name),d(i.id),a(i.questions)}},i.name)," > "):e.createElement(e.Fragment,null,i.name))),l.map(i=>i.name===""?null:e.createElement("button",{key:i.id,className:"filter-question-button",onClick:()=>{a(i.questions),r(u=>[...u,i]),c(i.children),p(i.name),d(i.id)}},i.name)),e.createElement("div",{className:"mt-3"},h&&e.createElement(e.Fragment,null,e.createElement("h3",null," ",`Perguntas categoria ${h}`),e.createElement("br",null),e.createElement("div",null,e.createElement(k,{variant:"contained","data-testid":"add-question-button",onClick:()=>{x("/dashboard/questions/create",{state:{topicId:E,topicName:h}})}},"ADICIONAR")))),e.createElement("div",{id:"questions-container"},e.createElement(dt,{questions:t,removeQuestion:v}))))}function Y(){const t=A(),{id:a,name:s,email:r}=$().state,[n,o]=e.useState({email:r||"",name:s||"",password:""}),l=h=>p=>{o(U(q({},n),{[h]:p.target.value}))},c=h=>{h.preventDefault(),a?S.editUser(a,n.email,n.name,n.password).then(p=>p.data).then(p=>{console.log(p),t("/dashboard/users",{state:{message:{type:"success",text:"Usu\xE1rio editado com sucesso!"}}})}).catch(p=>{M.error("Houve um erro ao editar usu\xE1rio."),console.log(p)}):S.createUser(n.email,n.name,n.password).then(p=>p.data).then(p=>{console.log(p),t("/dashboard/users",{state:{message:{type:"success",text:"Usu\xE1rio criado com sucesso!"}}})}).catch(p=>{M.error("Houve um erro ao criar usu\xE1rio."),console.log(p)})};return e.createElement(B,null,e.createElement("div",{className:"user-container title-container"},e.createElement(N,{"aria-label":"Voltar",component:"span",onClick:()=>{t("/dashboard/users")}},e.createElement(H,null)),e.createElement("h2",null,a?"Editar Usu\xE1rio":"Cadastrar Usu\xE1rio")),e.createElement("div",{className:"user-container"},e.createElement("form",{onSubmit:c,action:"#"},e.createElement(F,{color:"secondary",variant:"outlined",fullWidth:!0,margin:"normal"},e.createElement(I,{htmlFor:"text"},"Nome"),e.createElement(O,{id:"name",type:"text",value:n.name,onChange:l("name"),label:"Nome"})),e.createElement(F,{color:"secondary",variant:"outlined",fullWidth:!0,margin:"normal"},e.createElement(I,{htmlFor:"text"},"E-mail"),e.createElement(O,{id:"email",type:"email",value:n.email,onChange:l("email"),label:"E-mail"})),e.createElement(F,{variant:"outlined",fullWidth:!0,margin:"normal"},e.createElement(I,{color:"secondary",htmlFor:"text"},"Senha"),e.createElement(O,{id:"password",type:"text",value:n.password,onChange:l("password"),label:"Senha",color:"secondary"})),e.createElement(k,{type:"submit","data-testid":"submit-button",variant:"contained",color:"secondary",disableElevation:!0},"Enviar"))))}function pt(){const t=A(),[a,s]=m.exports.useState([]),[r,n]=m.exports.useState(!1),[o,l]=m.exports.useState(),c=d=>{S.deleteUser(d).then(()=>{M.success("Usu\xE1rio exclu\xEDdo com sucesso!"),E()}).catch(x=>{M.error("Houve um erro ao excluir o usu\xE1rio")})},h=d=>{l(d),n(!0)},p=()=>{l(void 0),n(!1)},E=()=>{S.getUsers().then(d=>{s(d.data)})};return m.exports.useEffect(()=>{E()},[]),e.createElement(B,null,e.createElement("div",{className:"user-container title-container"},e.createElement("h2",null,"Usu\xE1rios Cadastrados"),e.createElement(k,{"data-testid":"add_user-button",variant:"outlined",color:"secondary",onClick:()=>{t("/dashboard/users/create",{state:{id:"",name:"",email:""}})}},"CRIAR NOVO")),e.createElement("div",{className:"user-container",style:{display:"none"}},e.createElement(Pe,{id:"search",label:"Pesquisar",InputProps:{startAdornment:e.createElement(ee,{position:"start"},e.createElement(qe,null))},variant:"standard"})),e.createElement("div",{className:"user-container"},e.createElement(Ue,null,e.createElement(De,{sx:{minWidth:450},size:"small"},e.createElement(Re,null,e.createElement(X,null,e.createElement(D,null,"Nome"),e.createElement(D,null,"Email"),e.createElement(D,{align:"center"},"A\xE7\xF5es"))),e.createElement($e,null,a.map(d=>e.createElement(X,{key:d.id,sx:{"&:last-child td, &:last-child th":{border:0}}},e.createElement(D,{width:"40%","data-testid":"user-name"},d.name),e.createElement(D,{width:"40%"},d.email),e.createElement(D,{width:"20%",align:"center"},e.createElement(N,{"aria-label":"Editar","data-testid":"edit_user-button",component:"span",onClick:()=>{t("/dashboard/users/edit",{state:{id:d.id,name:d.name,email:d.email}})}},e.createElement(ae,null)),e.createElement(N,{"data-testid":"delete_user-button","aria-label":"Deletar",component:"span",onClick:()=>h(d.id)},e.createElement(ne,null)),e.createElement(ie,{title:"Excluir usu\xE1rio",text:`Tem certeza que deseja excluir o usu\xE1rio ${d.name}?`,isOpen:r&&o==d.id,handleClose:()=>p(),handleConfirm:()=>c(d.id)})))))))))}function Et(){const{user:t,storeToken:a,storeUser:s}=P(),r=m.exports.useMemo(()=>{let n=!!t;if(!t){const o=T();o&&(n=!0,s(o.user),a((o==null?void 0:o.token)||""))}return n},[t]);return e.createElement(Be,null,e.createElement(Le,null,r?e.createElement(e.Fragment,null,e.createElement(b,{path:"/dashboard",element:e.createElement(R,{to:"/dashboard/questions"})}),e.createElement(b,{path:"/dashboard/users",element:e.createElement(pt,null)}),e.createElement(b,{path:"/dashboard/users/create",element:e.createElement(Y,null)}),e.createElement(b,{path:"/dashboard/users/edit",element:e.createElement(Y,null)}),e.createElement(b,{path:"/dashboard/questions",element:e.createElement(ut,null)}),e.createElement(b,{path:"/dashboard/questions/create",element:e.createElement(ct,null)}),e.createElement(b,{path:"/dashboard/questions/edit",element:e.createElement(mt,null)}),e.createElement(b,{path:"questions",element:e.createElement(R,{to:"/dashboard/questions"})}),e.createElement(b,{path:"users",element:e.createElement(R,{to:"/dashboard/users"})}),e.createElement(b,{path:"dashboard",element:e.createElement(R,{to:"/dashboard/questions"})})):e.createElement(e.Fragment,null,e.createElement(b,{path:"login",element:e.createElement(Je,null)}),e.createElement(b,{path:"request-password",element:e.createElement(Ye,null)}),e.createElement(b,{path:"reset-password",element:e.createElement(Ze,null)})),e.createElement(b,{path:"/",element:e.createElement(ot,null)}),e.createElement(b,{path:"*",element:e.createElement(R,{to:r?"/dashboard":"/",replace:!0})})))}function ht(){return e.createElement(e.Fragment,null,e.createElement(We,null,e.createElement(je,{theme:oe},e.createElement(ze,null),e.createElement(Et,null))))}Qe.render(e.createElement(e.StrictMode,null,e.createElement(ht,null)),document.getElementById("root"));