import{r as b,j as e,S as n,e as c,T as o,G as R,C as N,B as g,n as W,I as k,L as S,i as w,z as q,P as l,A as U,M as V,E as _,D as H,h as $,x as Y,F as J,W as K}from"./index-3d48c83d.js";import{M as Q}from"./blog-3323741a.js";import{c as X,d as Z,F}from"./format-time-285169c3.js";import{A as ee,a as te,F as se,R as T,b as O,C as re,c as P}from"./color-preview-b8e2e9bb.js";import{T as C}from"./TextField-139945fb.js";import{C as ne}from"./Checkbox-f266ce4f.js";import{G as y}from"./Grid-ed3ea8ac.js";import"./Select-6173e96e.js";import"./Popper-ef2f1dd3.js";function B({post:i,index:s}){const{cover:a,nom_modele:f,prix:d,annee:p,author:v,createdAt:m}=i,[u,x]=b.useState(!1),t=()=>{x(()=>x(!u))},r=s===-1,h=s===-1||s===-1,D=e.jsxs(g,{children:[e.jsx(S,{color:"inherit",variant:"subtitle2",underline:"hover",sx:{fontSize:15,height:44,overflow:"hidden",WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical",...r&&{typography:"h3",height:60},...(r||h)&&{color:"common.white"}},children:f}),e.jsx(o,{variant:"body1",sx:{color:"green",fontSize:15,mt:1},children:`Ar ${d}`})]}),E=e.jsx(n,{direction:"row",flexWrap:"wrap",spacing:1.5,justifyContent:"flex-end",sx:{mt:3,color:"text.disabled"},children:[{number:p,icon:"eva:trending-up-outline "},{number:d}].map((j,z)=>e.jsxs(n,{direction:"row",sx:{...(r||h)&&{opacity:.48,color:"common.white"}},children:[e.jsx(c,{width:16,icon:j.icon,sx:{mr:.5}}),e.jsx(o,{variant:"caption",children:X(j.number)})]},z))}),G=e.jsx(o,{variant:"caption",component:"div",sx:{mb:2,color:"text.disabled",...(r||h)&&{opacity:.48,color:"common.white"}},children:Z(p)}),M=e.jsx(q,{color:"paper",src:"/assets/icons/shape-avatar.svg",sx:{width:80,height:36,zIndex:9,bottom:-15,position:"absolute",color:"background.paper",...(r||h)&&{display:"none"}}});return e.jsx(R,{xs:12,sm:r?12:6,md:r?6:3,children:e.jsxs(N,{children:[e.jsx(g,{sx:{position:"relative",pt:"calc(100% * 3 / 4)",...(r||h)&&{pt:"calc(100% * 4 / 3)","&:after":{top:0,content:"''",width:"100%",height:"100%",position:"absolute",bgcolor:j=>W(j.palette.grey[900],.72)}},...r&&{pt:{xs:"calc(100% * 4 / 3)",sm:"calc(100% * 3 / 4.66)"}}},children:M}),e.jsxs(g,{sx:{p:j=>j.spacing(4,3,3,3),...(r||h)&&{width:1,bottom:0,position:"absolute"}},children:[G,D,E]}),e.jsx(g,{sx:{p:3},children:e.jsxs(n,{direction:"row",spacing:1,children:[e.jsx(k,{onClick:t,children:e.jsx(c,{icon:u?"ic:baseline-favorite":"ic:outline-favorite-border"})}),e.jsx(S,{href:"/detail",underline:"none",children:e.jsx(w,{fullWidth:!0,size:"large",type:"submit",color:"inherit",variant:"outlined",startIcon:e.jsx(c,{icon:"ic:round-clear-all"}),children:"Voir détail"})})]})})]})})}B.propTypes={post:l.object.isRequired,index:l.number};L.propTypes={posts:l.array.isRequired};function L({posts:i}){return e.jsx(ee,{sx:{width:280},autoHighlight:!0,popupIcon:null,slotProps:{paper:{sx:{width:320,[`& .${te.option}`]:{typography:"body2"}}}},options:i,getOptionLabel:s=>s.title,isOptionEqualToValue:(s,a)=>s.id===a.id,renderInput:s=>e.jsx(C,{...s,placeholder:"Search post...",InputProps:{...s.InputProps,startAdornment:e.jsx(U,{position:"start",children:e.jsx(c,{icon:"eva:search-fill",sx:{ml:1,width:20,height:20,color:"text.disabled"}})})}})})}I.propTypes={options:l.array,onSort:l.func};function I({options:i,onSort:s}){return e.jsx(C,{select:!0,size:"small",value:"latest",onChange:s,children:i.map(a=>e.jsx(V,{value:a.value,children:a.label},a.value))})}const ie=["Tout","Manuelle","Automatique"],oe=["Tout","Diesel","Essence","Gaz"],ae=["up4Star","up3Star","up2Star","up1Star"],le=["#00AB55","#000000","#FFFFFF","#FFC0CB","#FF4842","#1890FF","#94D82D","#FFC107"];function A({openFilter:i,onOpenFilter:s,onCloseFilter:a}){const f=e.jsxs(n,{spacing:1,children:[e.jsx(o,{variant:"subtitle2",children:"Transmission"}),e.jsx(se,{children:ie.map(t=>e.jsx(F,{control:e.jsx(ne,{}),label:t},t))})]}),d=e.jsxs(n,{spacing:1,children:[e.jsx(o,{variant:"subtitle2",children:"Carburant"}),e.jsx(T,{children:oe.map(t=>e.jsx(F,{value:t,control:e.jsx(O,{}),label:t},t))})]}),p=e.jsxs(n,{spacing:1,children:[e.jsx(o,{variant:"subtitle2",children:"Colors"}),e.jsx(re,{name:"colors",selected:[],colors:le,onSelectColor:t=>[].includes(t),sx:{maxWidth:38*4}})]}),v=e.jsxs(n,{spacing:1,children:[e.jsx(o,{variant:"subtitle2",children:"Rating"}),e.jsx(T,{children:ae.map((t,r)=>e.jsx(F,{value:t,control:e.jsx(O,{disableRipple:!0,color:"default",icon:e.jsx(P,{readOnly:!0,value:4-r}),checkedIcon:e.jsx(P,{readOnly:!0,value:4-r}),sx:{"&:hover":{bgcolor:"transparent"}}}),label:"& Up",sx:{my:.5,borderRadius:1,"&:hover":{opacity:.48}}},t))})]}),m=e.jsxs(n,{spacing:1,children:[e.jsx(o,{variant:"subtitle2",children:"Marque"}),e.jsx(I,{options:[{value:"latest",label:"Tout"},{value:"Audi",label:"Audi"},{value:"Bentley",label:"Bentley"},{value:"Dacia",label:"Dacia"}]})]}),u=e.jsxs(n,{spacing:1,children:[e.jsx(o,{variant:"subtitle2",children:"Type de voiture"}),e.jsx(I,{options:[{value:"latest",label:"Tout"},{value:"Berline",label:"Berline"},{value:"Cabriolet",label:"Cabriolet"},{value:"SUV",label:"SUV"}]})]}),x=e.jsxs(y,{container:!0,spacing:1,alignItems:"center",children:[" ",e.jsx(y,{item:!0,xs:12,children:e.jsx(o,{variant:"subtitle2",children:"Prix"})}),e.jsx(y,{item:!0,xs:6,children:e.jsx(C,{name:"prixmin",label:"Prix min"})}),e.jsx(y,{item:!0,xs:6,children:e.jsx(C,{name:"prixmax",label:"Prix max"})})]});return e.jsxs(e.Fragment,{children:[e.jsx(w,{disableRipple:!0,color:"inherit",endIcon:e.jsx(c,{icon:"ic:round-filter-list"}),onClick:s,children:"Filters "}),e.jsxs(_,{anchor:"right",open:i,onClose:a,PaperProps:{sx:{width:280,border:"none",overflow:"hidden"}},children:[e.jsxs(n,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{px:1,py:2},children:[e.jsx(o,{variant:"h6",sx:{ml:1},children:"Filters"}),e.jsx(k,{onClick:a,children:e.jsx(c,{icon:"eva:close-fill"})})]}),e.jsx(H,{}),e.jsx($,{children:e.jsxs(n,{spacing:3,sx:{p:3},children:[m,u,f,d,p,x,v]})}),e.jsx(g,{sx:{p:3},children:e.jsx(w,{fullWidth:!0,size:"large",type:"submit",color:"inherit",variant:"outlined",startIcon:e.jsx(c,{icon:"ic:round-clear-all"}),children:"RECHERCHER"})})]})]})}A.propTypes={openFilter:l.bool,onOpenFilter:l.func,onCloseFilter:l.func};async function ce(i){try{return(await J.get(i)).data}catch(s){return console.error("Une erreur s'est produite lors de la récupération de la liste:",s),null}}function de(){const i=Q(),[s,a]=b.useState([]),[f,d]=b.useState(!1),p=t=>{d(!0)};b.useEffect(()=>{async function t(){const r=await ce("/api/liste");r&&a(r)}t()},[]);const[v,m]=b.useState(!1),u=()=>{m(!0)},x=()=>{m(!1)};return e.jsxs(Y,{children:[e.jsx(n,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:e.jsx(o,{variant:"h4",children:"Liste des annonces"})}),e.jsxs(n,{mb:5,direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(L,{posts:i}),e.jsx("div",{style:{marginLeft:"auto"},children:e.jsx(A,{openFilter:v,onOpenFilter:u,onCloseFilter:x})})]}),e.jsx(R,{container:!0,spacing:3,children:i.map((t,r)=>e.jsx(B,{post:t,index:r,onOpenDetail:()=>p(t.id)},t.id))})]})}function ve(){return e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsx("title",{children:" Blog | Minimal UI "})}),e.jsx(de,{})]})}export{ve as default};