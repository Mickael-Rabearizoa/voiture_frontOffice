import{r as d,E as w,a2 as v,j as e,B as x,T as r,i as g,a3 as k,C as f,S as p,P as y,e as I,M as W,a1 as _,L as D,a4 as O,a5 as T,s as A,x as R,G as b,a6 as F,W as L}from"./index-43ff6e2d.js";import{M,l as z}from"./Menu-e47c6deb.js";function C(t){const[s,l]=d.useState([]),i=localStorage.getItem("token");return d.useEffect(()=>{async function n(){try{const a=await w.get(`https://ventevoiture-production-989c.up.railway.app/photo/getPhoto?idAnnonceUtilisateur=${t}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`}});l(a.data)}catch(a){console.error("Une erreur s'est produite lors de la récupération de la liste:",a)}}console.log("Mety io eeee"),n()},[i,t]),s}function m({productId:t}){const s=v(),[l,i]=d.useState(!1),n=s.find(h=>h.Id_Annonceutilisateur===t),a=C(t.Id_Annonceutilisateur);if(!n)return e.jsx("div",{children:"Aucun produit trouvé pour cet ID."});const o=e.jsx(e.Fragment,{children:a.map((h,P)=>e.jsx(x,{component:"img",alt:h.nomphoto,src:h.nomphoto,sx:{top:0,width:1,height:1,objectFit:"cover",position:"absolute"}},P))}),c=e.jsxs(r,{variant:"subtitle1",children:[e.jsx(r,{component:"span",variant:"body1",sx:{color:"text.disabled",textDecoration:"line-through"},children:n.prix})," ",n.prix]}),u=e.jsxs(r,{variant:"subtitle1",children:[e.jsx(r,{component:"span",variant:"body1",sx:{color:"text.disabled",textDecoration:"line-through"},children:n.annee})," ",n.annee]}),j=()=>{i(!0)};return e.jsxs("div",{children:[e.jsx(g,{onClick:j,children:"Voir plus de detail"}),e.jsx(k,{onClose:()=>i(!1),open:l,children:e.jsx(f,{style:{maxHeight:700},children:e.jsxs(x,{p:3,style:{overflowY:"auto"},children:[o,u,e.jsxs(p,{spacing:2,sx:{mt:2},children:[e.jsx(r,{color:"inherit",variant:"subtitle2",noWrap:!0,children:n.name}),e.jsx(r,{color:"inherit",variant:"subtitle2",noWrap:!0,children:n.description}),e.jsx(r,{color:"inherit",variant:"subtitle2",noWrap:!0,children:n.nom_volant}),e.jsx(r,{color:"inherit",variant:"subtitle2",noWrap:!0,children:n.nom_couleur}),e.jsx(r,{color:"inherit",variant:"subtitle2",noWrap:!0,children:n.nom_carburant}),e.jsx(r,{color:"inherit",variant:"subtitle2",noWrap:!0,children:n.nom_transmission}),e.jsx(r,{color:"inherit",variant:"subtitle2",noWrap:!0,children:`${n.kilometrage}Km`}),e.jsx(r,{color:"inherit",variant:"subtitle2",noWrap:!0,children:n.moteur}),e.jsx(p,{direction:"row",alignItems:"center",justifyContent:"space-between",children:c})]})]})})})]})}m.propTypes={productId:y.number.isRequired};const B=[{value:"Vendu",label:"Vendu",id:3},{value:"A vendre",label:"a vendre",id:2}];function V(){const[t,s]=d.useState(null),l=o=>{s(o.currentTarget)},i=()=>{s(null)},[n]=d.useState(null),a=o=>{n(o),s(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs(g,{disableRipple:!0,color:"inherit",onClick:l,endIcon:e.jsx(I,{icon:t?"eva:chevron-up-fill":"eva:chevron-down-fill"}),children:["Voir ",e.jsx(r,{component:"span",variant:"subtitle2",sx:{color:"text.secondary"},children:"Vendu"})]}),e.jsx(M,{open:!!t,anchorEl:t,onClose:i,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},slotProps:{paper:{sx:{[`& .${z.root}`]:{p:0}}}},children:B.map(o=>e.jsx(W,{onClick:()=>a(o.id),children:o.label},o.value))})]})}function S({product:t}){const s=C(t.Id_Annonceutilisateur);console.log("photo",s);const l=e.jsx(_,{variant:"filled",color:t.status===2&&"success"||"info",sx:{zIndex:9,top:16,right:16,position:"absolute",textTransform:"uppercase"},children:t.status===2&&"vendu"||"a vendre"}),i=e.jsx(e.Fragment,{children:s.map((u,j)=>e.jsx(x,{component:"img",alt:u.nomphoto,src:u.nomphoto,sx:{top:0,width:1,height:1,objectFit:"cover",position:"absolute"}},j))}),n=e.jsxs(r,{variant:"subtitle1",children:[e.jsx(r,{component:"span",variant:"body1",sx:{color:"text.disabled",textDecoration:"line-through"},children:t.prix})," ",t.prix]}),[a,o]=d.useState(!1),c=()=>{o(u=>!u)};return e.jsxs(f,{sx:{maxWidth:400,margin:"auto"},children:[e.jsxs(x,{sx:{pt:"100%",position:"relative"},children:[t.status&&l,i]}),e.jsxs(p,{spacing:2,sx:{p:3},children:[e.jsxs(D,{color:"inherit",variant:"subtitle2",noWrap:!0,children:[t.nom_modele,t.Id_Annonceutilisateur]}),e.jsx(p,{direction:"row",alignItems:"center",justifyContent:"space-between",children:n}),e.jsx(g,{onClick:c,children:e.jsx(O,{})}),a&&e.jsx(m,{productId:t.Id_Annonceutilisateur})," "]})]})}S.propTypes={product:y.object};const E=A("div")(({theme:t})=>({zIndex:999,right:0,display:"flex",cursor:"pointer",position:"fixed",alignItems:"center",top:t.spacing(16),height:t.spacing(5),paddingLeft:t.spacing(2),paddingRight:t.spacing(2),paddingTop:t.spacing(1.25),boxShadow:t.customShadows.z20,color:t.palette.text.primary,backgroundColor:t.palette.background.paper,borderTopLeftRadius:Number(t.shape.borderRadius)*2,borderBottomLeftRadius:Number(t.shape.borderRadius)*2,transition:t.transitions.create("opacity"),"&:hover":{opacity:.72}}));function $(){return e.jsx(E,{children:e.jsx(T,{showZero:!0,badgeContent:0,color:"error",max:99,children:e.jsx(I,{icon:"eva:shopping-cart-fill",width:24,height:24})})})}function N(){const t=v(),[s,l]=d.useState(null),[i,n]=d.useState(!1),a=c=>{l(c),n(!0)},o=()=>{l(null),n(!1)};return e.jsxs(R,{children:[e.jsx(r,{variant:"h4",sx:{mb:5},children:"Favoris"}),e.jsx(p,{direction:"row",alignItems:"center",flexWrap:"wrap-reverse",justifyContent:"flex-end",sx:{mb:5},children:e.jsx(p,{direction:"row",spacing:1,flexShrink:0,sx:{my:1},children:e.jsx(V,{})})}),e.jsx(b,{container:!0,spacing:3,children:t.map(c=>e.jsx(b,{xs:12,sm:6,md:3,children:e.jsx(S,{product:c,onOpenDetail:()=>a(c.Id_Annonceutilisateur)})},c.Id_Annonceutilisateur))}),e.jsx($,{}),e.jsx(F,{open:i,onClose:o,"aria-labelledby":"product-detail-modal","aria-describedby":"product-detail-description",children:e.jsx(m,{productId:s})})]})}function q(){return e.jsxs(e.Fragment,{children:[e.jsx(L,{children:e.jsx("title",{children:" Products | Minimal UI "})}),e.jsx(N,{})]})}export{q as default};