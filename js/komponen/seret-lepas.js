// Seret-dan-lepas memakai pointer events (mouse dan sentuh)
let drag=null;
// Tempatkan pemain di slot; jika sudah jadi starter, tukar dengan penghuni slot
function assign(pid,slot){
  const prev=state.lineup.indexOf(pid),occ=state.lineup[slot];
  state.lineup[slot]=pid;if(prev>=0)state.lineup[prev]=occ;
  refresh();
}
document.addEventListener("pointerdown",e=>{
  const el=e.target.closest("[data-pid],[data-slot]");if(!el)return;
  const from=el.dataset.slot!==undefined?+el.dataset.slot:null;
  const pid=from!==null?state.lineup[from]:+el.dataset.pid;
  drag={pid,from,x:e.clientX,y:e.clientY,moved:false,g:null};
  e.preventDefault();
});
document.addEventListener("pointermove",e=>{
  if(!drag)return;
  if(!drag.moved&&Math.hypot(e.clientX-drag.x,e.clientY-drag.y)>6){
    drag.moved=true;drag.g=document.createElement("div");drag.g.className="ghost";drag.g.textContent=R[drag.pid].n;document.body.appendChild(drag.g);
  }
  if(drag.g){drag.g.style.left=e.clientX+"px";drag.g.style.top=e.clientY+"px"}
});
function endDrag(e,cancel){
  if(!drag)return;const d=drag;drag=null;
  if(d.g)d.g.remove();
  if(cancel)return;
  if(d.moved){
    const s=$("#pitch"),pt=s.createSVGPoint();pt.x=e.clientX;pt.y=e.clientY;
    const q=pt.matrixTransform(s.getScreenCTM().inverse());
    let best=-1,bd=8;
    slots().forEach((c,i)=>{const dd=Math.hypot(c.x-q.x,c.y-q.y);if(dd<bd){bd=dd;best=i}});
    if(best>=0)assign(d.pid,best);
  }else if(d.from!==null&&Features[state.tab].onNodeClick){
    Features[state.tab].onNodeClick(d.from);
  }
}
document.addEventListener("pointerup",e=>endDrag(e,false));
document.addEventListener("pointercancel",e=>endDrag(e,true));
