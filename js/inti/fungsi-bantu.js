// Fungsi bantu umum dan rumus kombinatorika
const $=s=>document.querySelector(s);
const fact=n=>{let r=1;for(let i=2;i<=n;i++)r*=i;return r};
// Kombinasi C(n,k)
const C=(n,k)=>{if(k<0||k>n)return 0;let r=1;for(let i=1;i<=k;i++)r=r*(n-k+i)/i;return Math.round(r)};
const fmt=n=>n.toLocaleString("id-ID");
// Acak Fisher-Yates (mengubah array asli)
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
