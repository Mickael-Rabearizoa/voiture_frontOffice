import{r as t,E as r}from"./index-43ff6e2d.js";function c(){const[o,s]=t.useState([]);return t.useEffect(()=>{async function n(){try{const e=await r.get("http://localhost:8080/V_AnnonceUtilisateur/getListAnnonceValide",{headers:{"Content-Type":"application/json"}});s(e.data)}catch(e){console.error("Une erreur s'est produite lors de la récupération de la liste:",e)}}console.log("Mety io eeee"),n()},[]),o}export{c as M};