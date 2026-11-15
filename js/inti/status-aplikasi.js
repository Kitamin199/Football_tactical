// Status aplikasi, slot posisi per formasi, dan registri fitur
const state={fm:"4-3-3",tab:"kom",A:0,B:10,nextA:false,lineup:[]};
const Features={}; // tiap fitur mendaftar di js/fitur/*.js

// Koordinat 11 slot untuk formasi aktif (lapangan 68 x 105)
function slots(){
  const ys=[76,54,30],o=[{x:34,y:95,l:0}];
  F[state.fm].forEach((c,i)=>{for(let j=0;j<c;j++)o.push({x:68*(j+1)/(c+1),y:ys[i],l:i+1})});
  return o;
}
// Isi susunan otomatis: pemain pertama tiap lini menurut urutan di data-pemain.js
function auto(){
  const used=[0,0,0,0];
  state.lineup=slots().map(s=>R.map((r,i)=>i).filter(i=>R[i].l===s.l)[used[s.l]++]);
  state.A=0;state.B=state.lineup.length-1;state.nextA=false;
}
// Jumlah starter yang berada di luar posisi alaminya
function offCount(){return slots().filter((q,i)=>R[state.lineup[i]].l!==q.l).length}
