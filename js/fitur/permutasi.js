// Fitur 2: Permutasi, urutan dan penempatan posisi (urutan penting)
Features.per={
  label:"Permutasi",
  hint:"Seret pemain dari daftar ke lapangan, atau seret antarpemain untuk bertukar posisi. Garis putus-putus merah berarti pemain di luar posisi alaminya.",
  html(){return `<h2>Urutan dan posisi</h2><p class="mut">Di sini urutan penting: siapa di posisi mana, dan siapa menendang penalti pertama. Susunan yang kamu seret di lapangan adalah satu permutasi dari semuanya.</p>
    <div class="row"><button id="rnd">Acak susunan</button><button id="rst">Susun otomatis</button></div>
    <label>Jumlah penendang penalti: <b id="rv">5</b><input type="range" id="r" min="1" max="11" value="5"></label><div id="res"></div>
    <div class="row"><button id="sh">Acak urutan penendang</button></div><div id="shuf"></div>`},
  update(res){
    const L=F[state.fm],r=+$("#r").value;$("#rv").textContent=r;
    res.innerHTML=`<div class="f">P(11,${r}) = 11! / ${11-r}!</div><div class="big">${fmt(fact(11)/fact(11-r))}</div><p class="mut">urutan penendang penalti berbeda dari 11 starter.</p>
    <div class="f">11! = ${fmt(fact(11))}</div><p class="mut">cara menempatkan 11 starter ke 11 posisi yang berbeda. Saat ini ${offCount()} pemain di luar posisi alaminya.</p>
    <div class="f">10! / (${L.map(x=>x+"!").join(" × ")}) = ${fmt(fact(10)/L.reduce((a,x)=>a*fact(x),1))}</div><p class="mut">cara membagi 10 pemain lapangan ke tiga lini ${state.fm} jika pemain dalam satu lini dianggap sama (permutasi dengan unsur sama).</p>`;
  },
  onClick(e){
    const id=e.target.id;
    if(id==="sh"){
      const r=+$("#r").value,a=shuffle([...state.lineup]);
      $("#shuf").innerHTML=a.slice(0,r).map((n,i)=>`<span class="chip">${i+1}. ${R[n].s}</span>`).join("");
    }else if(id==="rnd"){shuffle(state.lineup);refresh()}
    else if(id==="rst"){auto();refresh()}
  }
};
