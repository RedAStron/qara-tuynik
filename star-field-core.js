(function(root){
 'use strict';
 const clamp=(value,min=0,max=1)=>Math.min(max,Math.max(min,Number(value)||0));
 function point(clientX,clientY,rect){return {x:clamp((clientX-rect.left)/rect.width),y:clamp((clientY-rect.top)/rect.height)};}
 function crop(width,height,x,y,zoom,aspect=1.5){
  const sw=Math.min(width/zoom,height*aspect/zoom),sh=sw/aspect;
  return {x:clamp(x*width-sw/2,0,width-sw),y:clamp(y*height-sh/2,0,height-sh),width:sw,height:sh};
 }
 function visited(raw,valid){try{const value=JSON.parse(raw);return new Set(Array.isArray(value)?value.filter(x=>valid.includes(x)):[]);}catch(_){return new Set();}}
 const api={clamp,point,crop,visited};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.StarFieldCore=api;
})(typeof window!=='undefined'?window:globalThis);
