"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[78806],{610954:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(883119),n=r(140017),a=r(785893);function i({accessibilityLabel:e,fixedPosition:t,rounding:r}){let i=(0,n.ZP)();return(0,a.jsxs)(o.xu,{children:[(0,a.jsx)(o.xu,{alignItems:"center",bottom:!0,display:"flex",justifyContent:"center",left:!0,opacity:1,position:t?"fixed":"absolute",right:!0,top:!0,zIndex:new o.Ry(101),children:(0,a.jsx)(o.$j,{accessibilityLabel:e||i.bt("Cargando", "Loading", "Label for loading spinner", undefined, true),show:!0})}),(0,a.jsx)(o.xu,{bottom:!0,color:"default",left:!0,opacity:.7,position:t?"fixed":"absolute",right:!0,rounding:r,top:!0,zIndex:new o.Ry(100)})]})}},876569:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(883119),n=r(22724),a=r(140017),i=r(785893);let s=()=>{let e=(0,a.ZP)();return(0,i.jsx)(o.xu,{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",position:"absolute",width:"100%",children:(0,i.jsxs)(o.xu,{color:"default",height:600,minWidth:"500px",rounding:2,width:"30%",children:[(0,i.jsxs)(o.xu,{alignItems:"center",direction:"column",display:"flex",height:"99%",justifyContent:"center",padding:12,children:[(0,i.jsx)(o.xu,{alignItems:"center",color:"primary",display:"flex",height:60,justifyContent:"center",marginBottom:4,rounding:"circle",width:60,children:(0,i.jsx)(o.JO,{accessibilityLabel:e.bt("Cargando el estado del registro en Google con un toque", "Loading state for google one tap registration", " - ", undefined, true),color:"inverse",icon:"pin",size:"28"})}),(0,i.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{"text-align":"center"}},paddingY:5,children:(0,i.jsx)(o.X6,{children:e.bt("¡Te damos la bienvenida a Pinterest!", "Welcome to Pinterest!", "Welcome to Pinterest!", undefined, true)})}),(0,i.jsx)(o.xv,{align:"center",overflow:"normal",size:"400",children:e.bt("Tus respuestas a las próximas preguntas nos ayudarán a encontrar las ideas correctas para ti.", "Your answers to the next questions will help us find the right ideas for you", "loading state description while waiting for google one tap registration to complete", undefined, true)})]}),(0,i.jsx)(o.xu,{width:"100%",children:(0,i.jsx)(n.Z,{duration:6e3,finalProgress:95,shape:"rounded"})})]})})}},165736:(e,t,r)=>{r.d(t,{a$:()=>d,kv:()=>u,pH:()=>g});var o=r(216167),n=r(96452),a=r(702497),i=r(337478);function s(e,t,r){var o;return(t="symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?o:String(o))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class l extends Error{constructor(e){super(e.statusText),s(this,"name","CrossDomainHandshakeHttpError"),this.response=e}}class c extends Error{constructor(e){super(e.message??void 0),s(this,"name","CrossDomainHandshakeApiError"),this.api_error_code=e.code,this.response=e}}let _=({path:e,data:t,unauthId:r})=>fetch(`${a.cDv}/v3/${e}/handshake/`,{credentials:"include",mode:"cors",method:"POST",body:(0,i.Z)(t),headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8","X-Pinterest-InstallId":r}}).then(e=>{if(200===e.status||401===e.status||409===e.status)return e;throw new l(e)}).then(e=>e.json()).then(e=>{if("success"===e.status)return Promise.resolve(e);if(e.code===n.Zn)return e.api_error_code=e.code,Promise.reject(e);throw new c(e)}).catch(e=>{throw e}),u=(e,t=!1)=>o.Z.create("HandshakeSessionResource",{token:e,isRegistration:t}).callCreate(),d=(e,{facebookToken:t,inviteCode:r,locale:o,referrer:n,unauthId:a})=>{let i="sso"===e.type,s="email"===e.type,l="line"===e.type,c="google"===e.type,u="facebook"===e.type,d=(i||s)&&e.business_name&&"partner"||u&&e.facebook_id&&"facebook"||"email",g={email:c?"":e.email||"",username:s&&e.username||"",password:s&&e.password||"",first_name:e.first_name||"",last_name:(u||c||s)&&e.last_name||"",country:s&&e.country||"",locale:o,referrer:n};return e.birthday&&(g={...g,birthday:e.birthday}),s&&e.custom_gender&&(g={...g,custom_gender:e.custom_gender}),(s||u||l)&&e.gender&&(g={...g,gender:e.gender}),(i||s)&&e.business_name&&(g={...g,business_name:e.business_name,first_name:e.business_name}),r&&(g={...g,invite_code:r}),u&&e.facebook_id&&(g={...g,facebook_id:e.facebook_id,facebook_token:t||e.facebook_token||""}),s&&e.recaptchaV3Token&&(g={...g,recaptcha_v3_token:e.recaptchaV3Token}),_({path:`register/${d}`,data:g,unauthId:a})},g=(e,{recaptchaV3Token:t,referrer:r,unauthId:o})=>{let n=e.mfa_token&&"login/mfa"||"login",a={username_or_email:e.username_or_email.trim(),password:e.password,referrer:r};return e.mfa_token&&(a={...a,mfa_token:e.mfa_token}),t&&(a={...a,token:t}),_({path:n,data:a,unauthId:o})}},516562:(e,t,r)=>{r.d(t,{B$:()=>c,Cw:()=>i,I7:()=>l,c4:()=>s});var o=r(667294),n=r(342513);let a=(0,o.createContext)(null),i=()=>(0,o.useContext)(a),s=a.Provider,{Provider:l,useHook:c}=(0,n.Z)("DesktopCoreLogin")},239493:(e,t,r)=>{r.d(t,{o:()=>s,x:()=>i});var o=r(667294),n=r(140017);let a=new Set,i=e=>{a.forEach(t=>t(e))},s=e=>{let t=(0,n.ZP)();(0,o.useEffect)(()=>{let r=r=>{e(r||t.bt("Error desconocido", "Unknown Error", "unauth.error.modal.unknown", undefined, true))};return a.add(r),()=>{a.delete(r)}},[])}},322079:(e,t,r)=>{r.d(t,{Z:()=>j});var o=r(667294),n=r(216167),a=r(224796),i=r(214877),s=r(658583),l=r(622541),c=r(165736),_=r(123526),u=r(769666),d=r(96452),g=r(488726),p=r(467707),m=r(508218),h=r(182962),f=r(891276),w=r(535053),b=r(890833),y=r(731714),x=r(217058),k=r(722363),v=r(926234),P=r(67661),Z=r(953565);function j(){let e=(0,g.hq)(),t=(0,h.Z)(),{logContextEvent:r}=(0,i.v)(),j=(0,k.Z)();return(0,o.useCallback)(({creds:o,isAccountSwitch:i,loggingOptions:{loggingData:g={},loginAttemptContextEvent:h},recaptchaV2Token:k,recaptchaV3Token:$})=>{t();let C=!!(o.facebook_autologin||o.autologin),A=(0,m.eD)(o),E=e=>{let t=o.google_open_id_token?"google":"facebook";C&&(0,x.dy)({event:e,provider:t})},I=e=>{C||(0,x.EX)({event:e,provider:(0,m.nY)(o)})},L=e=>{r({...h,event_type:e,aux_data:{...h.aux_data,upsell_reason:h.aux_data?.upsell_reason||(C?"autologin":y.Z.getItem(a.bg)||null),upsell_view_count:y.Z.getItem(a.w0)||0}}),7536===e&&(y.Z.setItem(a.w0,0),y.Z.setItem(a.V6,(0,m.nY)(o)))};L(7534),j({action:C?"autologin":"login",event:"attempt",trigger:g.trigger,type:A});let z=e=>{let t="referrer_unknown";try{let e=document.referrer;t=e?e.indexOf("/t.co/")>-1?"twitter":e.indexOf("google.")>-1?"google":e.indexOf("bing.")>-1?"bing":e.indexOf("facebook.")>-1?"facebook":"other":"direct"}catch(e){}let r=g===Object(g)?g.container:"container_unknown";(0,x.My)("login.referrer."+t+"."+A),(0,x.My)("login.container."+String(r)+"."+A),(0,x.My)("login.type."+A);let n=A||"method_unknown",a=g.page||"page_unknown";o.facebook_autologin?((0,x.My)("web_autologin_facebook"),(0,x.My)("new_web_autologin_facebook",{page:a,referrer:t,container:r})):((0,x.My)(`web_login.${n}.success.${a}.${String(r)}.${t}.tier1`),(0,Z.nP)(`web_login.${n}.success.${a}.${String(r)}.${t}.tier1`),(0,x.My)(`new_web_login.${n}.success`,{page:a,referrer:t,container:r})),(0,f.ko)({country:e?.country,countryFromHostName:e?.countryFromHostName,countryFromIp:e?.countryFromIp,regionFromIp:e?.regionFromIp,deviceType:"Desktop",eventCategory:"Logins"}),L(7536),j({action:C?"autologin":"login",event:"success",trigger:g&&g.trigger,type:A})},D=({error:e,isCrossDomain:t})=>{if(!e)return;let r=e.http_status===w.Ej?w.Ej:e.api_error_code,o=r;r&&d.qF.has(r)&&(o=d.qF.get(r));let{container:n,trigger:a}=g;(0,x.My)(`${t?"unauth_web_client_cctld_login_api_error":"unauth_web_client_login_api_error"}.${String(o)}.${n||"unknow_container"}.${A}`),L(7535),j({action:C?"autologin":"login",event:"fail",trigger:a,type:A})};if(o.username_or_email&&!o.mfa_resend&&e&&-1!==p.Z.indexOf(e.origin)){let t=e=>(0,x.My)(`web_cross_domain_login.${e}.${(0,m.eD)(o)}`);t("attempt");let{referrer:r,facebookToken:n,unauthId:a}=e;return(0,c.pH)(o,{recaptchaV3Token:$,referrer:r,facebookToken:n,unauthId:a}).then(e=>{let r=e&&e.data;if(r)return t("success_with_token"),(0,c.kv)(r).then(()=>(t("success_token_exchanged"),z(),Promise.resolve()),e=>{throw t("success_token_not_exchanged"),e});throw t("success_without_token"),Error()},e=>{throw t("failure"),D({error:e,isCrossDomain:!0}),e})}E("login_api_call_start"),I("login_api_call_start");let O=(0,v.O)();return n.Z.create("UserSessionResource",{...o,...O?{referrer:O}:Object.freeze({}),get_user:o.get_user||o.switch_account&&i,app_type_from_client:7===e.appType?7:5,visited_pages_before_login:(0,P.t_)()||null,recaptchaV2Token:k,recaptchaV3Token:$}).callCreate({showError:!1,async:!0}).then(e=>{let{country:t,country_from_hostname:r,country_from_ip:o,region_from_ip:n}=e?.client_context||Object.freeze({});return z({country:t,countryFromHostName:r,countryFromIp:o,regionFromIp:n}),E("login_api_call_success"),I("login_api_call_success"),(0,_.B)(!1),(0,u.Z)(),s.zN(l.e7.name),s.zN(l.x3.name),(0,b.Z)("login").then(()=>e)},e=>(D({error:e,isCrossDomain:!1}),E("login_api_call_failure"),I("login_api_call_failure"),Promise.reject(e)))},[e,t,r,j])}},278967:(e,t,r)=>{r.d(t,{C:()=>a,P:()=>n});var o=r(883119);let n=new o.Ry(1e4),a=new o.H3([n])},123526:(e,t,r)=>{r.d(t,{B:()=>i,a:()=>a});var o=r(224796),n=r(731714);let a=()=>!!n.Z.getItem(o.WM),i=e=>{n.Z.setItem(o.WM,!!e)}},54576:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(300494),n=r(598753);let a=e=>{let t={id:e.id,username:e.username,email:e.email,fullName:e.fullName||e.full_name,imageMediumUrl:e.imageMediumUrl||e.image_medium_url,imageLargeUrl:e.imageLargeUrl||e.image_large_url};return(t.fullName&&t.imageMediumUrl&&t.imageLargeUrl||(0,o.Z)("utils.incomplete_user_values"),e.partner?.is_create)?{...t,partner:{is_create:!0}}:t},i=(e,t,r)=>{(0,n.r8)({...(0,n.rl)(),[e.id]:a(e)}),t&&r&&(0,o.Z)("new_account_add_success",{method:t,user_added:e.id},r)}},300494:(e,t,r)=>{r.d(t,{Z:()=>l});var o=r(172045),n=r(598753),a=r(217058);let i="web_account_switcher",s=()=>{let e=(0,o.Z)();return(0,a.tj)(`${i}.utils.group_created`,{group_id:e,group_count:(0,n.lv)()}),e},l=(e,t,r)=>{let o=(0,n.yW)();o||(o=s(),(0,n.M3)(o));let l={group_count:(0,n.lv)()},c="";r&&(c="account_switcher_modal"===r?"modal.":"flyout."),(0,a.tj)(`${i}.${c}${e}`,{...t,...l})}},488726:(e,t,r)=>{r.d(t,{aU:()=>i,hq:()=>a,o_:()=>o});let{Provider:o,useHook:n}=(0,r(342513).Z)("AuthenticationContext");function a(){return n().loginContext}function i(){return n().logout}},61137:(e,t,r)=>{r.d(t,{D:()=>l,T:()=>s});var o=r(667294),n=r(657376),a=r(785893);let i=(0,o.createContext)({recaptchaV3Token:"",refreshToken:()=>{}});function s({children:e}){let[t,r]=(0,o.useState)(""),s=(0,o.useCallback)(()=>{(0,n.rY)(e=>r(e),()=>{},n.sk)},[]);(0,o.useEffect)(()=>{s();let e=setInterval(s,n.yc);return()=>{clearInterval(e)}},[s]);let l=(0,o.useMemo)(()=>({recaptchaV3Token:t,refreshToken:s}),[t,s]);return(0,a.jsx)(i.Provider,{value:l,children:e})}let l=()=>(0,o.useContext)(i)},657376:(e,t,r)=>{r.d(t,{Ec:()=>b,OA:()=>u,TL:()=>y,dA:()=>x,f$:()=>h,nP:()=>w,oH:()=>d,rY:()=>c,sk:()=>f,wQ:()=>g,xW:()=>p,yc:()=>_,ys:()=>m});var o=r(953565);let n="onloadRecaptchaJsCallback",a="6Ldx7ZkUAAAAAF3SZ05DRL2Kdh911tCa3qFP0-0r",i="recaptcha-enterprise-src",s=(e,t,r)=>{(0,o.nP)("recaptcha_v3.request_token.attempt",{sampleRate:.1,tags:{action:r}}),void 0===window.grecaptcha||void 0===window.grecaptcha.enterprise?(t(Error("Error loading reCAPTCHA Enterprise")),(0,o.nP)("recaptcha_v3.request_token.js_loading_error",{sampleRate:.1,tags:{action:r}})):window.grecaptcha.enterprise.ready(()=>{try{window.grecaptcha.enterprise.execute(a,{action:r}).then(e).catch(t)}catch(e){(0,o.nP)("recaptcha_v3.request_token.exec_error",{sampleRate:.1,tags:{action:r}}),t(e)}})},l=()=>null!==document.getElementById(i),c=(e,t,r)=>{if(window[n]=()=>s(e,t,r),l())s(e,t,r);else{let e=document.createElement("script");e.id=i,e.src=`https://www.recaptcha.net/recaptcha/enterprise.js?onload=${n}&render=${a}`;let t=document.getElementsByTagName("script")[0];t.parentNode&&t.parentNode.insertBefore(e,t)}},_=105e3,u=8e3,d=3e4,g="mweb_auth",p="mweb_login",m="mweb_signup",h="web_auth",f="web_unauth",w="mweb_reset_password",b="web_reset_password",y="mweb_change_password",x="web_change_password"},598228:(e,t,r)=>{r.d(t,{Ag:()=>a,C0:()=>l,L1:()=>d,Vi:()=>i,YD:()=>u,kS:()=>n,oo:()=>s,p3:()=>g,vC:()=>c,vI:()=>_});var o=r(244413);let n="https://www.pinterest.com/business/hub/",a="https://www.pinterest.com/homefeed/",i="www.pinterest.com",s="https://help.pinterest.com",l=`${(0,o.Z)({site:"www"})}`,c=(0,o.Z)({site:"developers"}),_=`${(0,o.Z)({site:"sterling"})}`,u=`${(0,o.Z)({site:"analytics"})}`,d=`${(0,o.Z)({site:"trends"})}`,g=`${(0,o.Z)({site:"www",path:"/product-catalogs/data-source/?advertiserId="})}`}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/78806.es_419-b4caa7375fd94f84.mjs.map