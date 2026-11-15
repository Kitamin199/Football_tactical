# Papan Taktik FC Barcelona

Buka `index.html` di browser (tidak perlu server).

## Struktur File

```
Football_tactical/
│
├── index.html                  ← Halaman utama aplikasi
│
├── css/                        ← Semua gaya tampilan
│   ├── dasar.css               ← Warna, tipografi, elemen umum
│   ├── tata-letak.css          ← Grid halaman, panel, tab
│   ├── lapangan.css            ← Lapangan SVG dan efek drag
│   └── daftar-pemain.css       ← Chip nama pemain di skuad
│
└── js/                         ← Semua logika JavaScript
    │
    ├── inti/                   ← Fondasi aplikasi (dimuat pertama)
    │   ├── data-pemain.js      ← Data formasi & skuad (ubah pemain di sini)
    │   ├── fungsi-bantu.js     ← C(n,k), faktorial, pengacak
    │   └── status-aplikasi.js  ← State, slot posisi, susunan otomatis
    │
    ├── komponen/               ← Komponen antarmuka
    │   ├── gambar-lapangan.js  ← Render lapangan SVG
    │   ├── daftar-skuad.js     ← Render chip daftar pemain
    │   └── seret-lepas.js      ← Interaksi drag & drop
    │
    ├── fitur/                  ← Satu file per tab fitur
    │   ├── kombinasi.js        ← Tab Kombinasi (C(n,k))
    │   ├── permutasi.js        ← Tab Permutasi (P(n,r), n!)
    │   └── graf.js             ← Tab Graf (Dijkstra)
    │
    └── utama.js                ← Penghubung semua komponen
```

## Menambah Fitur Baru

Buat file `js/fitur/nama-fitur.js` yang mengisi:

```js
Features.kunci = {
  label: "Nama Tab",
  hint:  "Petunjuk yang muncul di bawah lapangan.",
  html()   { return `<div id="res"></div>` },
  update(res) { res.innerHTML = "..." }
};
```

Lalu tambahkan `<script src="js/fitur/nama-fitur.js"></script>` di `index.html` sebelum `utama.js`.
