import{u as g}from"./useSupabaseClient.d26d72dc.js";import{e as b,o as v,f as x,s as c,v as d,u as i,l as s,O as w}from"./entry.abcdf86a.js";const y={class:"flex flex-col"},_=s("label",{for:"post-title",class:"block text-lg m-2 font-semibold text-gray-700"},"Title",-1),h=s("label",{for:"post-content",class:"block m-2 text-lg font-semibold text-gray-700"},"Content",-1),S={__name:"PostEditor",props:{post:Object},setup(u){const n=u,l=g();console.log("here"+JSON.stringify(n));const t=b(()=>({id:n.post.id,title:n.post.title??"",content:n.post.content??""}));function r(a){var e=a.replace(/\r/g,""),o=e.replace(/\n{2,}/g,"<br><br>"),m=o.replace(/\n/g,"<br>"),f=m.replace(/\r/g,"<br>");return f}async function p(){t.value.id?await l.from("posts").update([{title:t.value.title,content:r(t.value.content)}]).eq("id",t.value.id):await l.from("posts").insert([{title:t.value.title,content:r(t.value.content)}]),await await w("/admin")}return(a,e)=>(v(),x("div",y,[_,c(s("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>i(t).title=o),type:"text",id:"post-title",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,512),[[d,i(t).title]]),h,c(s("textarea",{"onUpdate:modelValue":e[1]||(e[1]=o=>i(t).content=o),id:"post-content",class:"mt-1 hover:resize block w-full h-96 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,512),[[d,i(t).content]]),s("button",{onClick:p,class:"mt-4 px-4 py-2 rounded-md bg-indigo-500 text-white"},"Submit")]))}};export{S as _};
