// Fitur 1: Kombinasi, memilih starter dari skuad (urutan tidak penting)
Features.kom={
  label:"Kombinasi",
  hint:"Seret pemain dari daftar ke lapangan, atau seret antarpemain untuk bertukar posisi. Garis putus-putus merah berarti pemain di luar posisi alaminya.",
  html(){return `<h2>Memilih starter dari skuad</h2><p class="mut">Hanya siapa yang terpilih yang penting, urutan tidak. Berikut jumlah susunan starter ${state.fm} yang bisa dibentuk dari skuad Barça.</p><div id="res"></div>`},
  update(res){
    const L=F[state.fm],off=offCount();
    const cnt=[0,1,2,3].map(l=>R.filter(r=>r.l===l).length),need=[1,...L];
    const t=need.map((k,i)=>C(cnt[i],k)),prod=t.reduce((a,b)=>a*b,1);
    const rest=R.length-11;
    res.innerHTML=`<div class="f">${need.map((k,i)=>`C(${cnt[i]},${k})`).join(" × ")}<br>= ${t.map(fmt).join(" × ")}</div>
    <div class="big">${fmt(prod)} susunan</div>
    <p class="mut">Skuad terdiri atas ${cnt.map((c,i)=>c+" "+LN[i].toLowerCase()).join(", ")}. Satu kiper, ${L[0]} bek, ${L[1]} gelandang, dan ${L[2]} penyerang dipilih sesuai posisi alaminya.</p>
    <div class="f">C(${rest},7) = ${fmt(C(rest,7))}</div><p class="mut">cara memilih 7 cadangan dari ${rest} pemain yang tersisa setelah 11 starter dipilih.</p>
    <p>Susunanmu saat ini: ${off===0?"semua pemain berada di posisi alaminya, jadi termasuk dalam hitungan di atas.":`<span class="warn">${off} pemain di luar posisi alaminya</span>, sehingga susunan ini tidak termasuk dalam hitungan di atas.`}</p>`;
  }
};
