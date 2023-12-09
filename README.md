# HydroponiQ

HydroponiQ adalah sebuah layanan inovatif yang menerapkan konsep *Smart Farming* dengan fokus utama pada budidaya tanaman hidroponik. HydroponiQ ini meliputi pengadaan material, penanaman dan pemeliharaan, panen dan produksi, pemasaran dan distribusi, serta pengelolaan keuangan. 

## Set Up & Installation

- Clone repository "https://github.com/HydroponiQ/inventory_service.git" 
- Instal dependencies yang dibutuhkan untuk nodejs: ```npm i```
- Jalankan aplikasi dengan perintah: ```npm run dev```
- Buka [http://localhost:3000](http://localhost:3000) dengan browser untuk melihat hasilnya.

## How to Use

1. Ketika membuka website, user diharuskan untuk login terlebih dahulu. Jika user belum memiliki akun, user dapat melakukan registrasi di menu register. Setelah registrasi, user dapat login dengan akun tersebut.

2. Setelah login, user akan masuk ke halaman home page yang berisikan pilihan menu **_inventory_**  atau **_yield_**. 

3. Pada menu **_inventory_**, user dapat meletakkan persediaan alat dan bahan pertanian, sedangkan pada menu **_yield_**, user dapat meletakkan hasil panen. Secara default, kedua menu tersebut kosong sehingga user harus memasukkan data terlebih dahulu

4. Jika terdapat perubahan pada item yang sudah tersedia, user dapat melakukan update pada inventory ataupun yield dengan menekan tombol **Update**. User dapat merubah kuantitas item yang dipilih dan menekan tombol update ketika sudah selesai.

5. Jika user mau menambahkan item pada menu inventory atau yield, user dapat menekan tombol **Add new item**. User dapat menambahkan nama item, kuantitas, dan foto dari item tersebut lalu menekan tombol save ketika sudah selesai.

## Deploy on Vercel

[HydroponiQ](https://hydroponiq.vercel.app/) 