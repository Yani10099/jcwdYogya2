/*

buat parent class Product
    constructor = nama, berat, price,stok

    buat child class dari produk yaitu Buku dan Pakaian 
    constructor = super, data unik dari buku dan pakaian 

    buat class OnlineShop
    constructor = products dan cart (private)
    method : 
        - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products
            return produk sudah ada dalam toko

        - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi
            sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog, kalau yang di masukkan 
            melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

        - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir. example: 1km * 2000.
            tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi
            untuk uangUser tidak boleh kurang dari total pembayaran.

        - showCatalog : menampilkan isi catalog dari toko

        - showCart : menampilkan isi cart use

        */

class Product {
  constructor(nama, berat, price, stock) {
    this.nama = nama;
    this.berat = berat;
    this.price = price;
    this.stock = stock;
  }
}

class Buku extends Product {
  constructor(nama, berat, price, stock, jumlahHalaman) {
    super(nama, berat, price, stock);
    this.jumlahHalaman = jumlahHalaman;
  }
}

class Pakaian extends Product {
  constructor(nama, berat, price, stock, ukuran) {
    super(nama, berat, price, stock);
    this.ukuran = ukuran;
  }
}

class Onlineshop {
  constructor() {
    this.products = [];
    this.cart = [];
  }

  tambahProduct(produk) {
    if (this.products.some((p) => p.nama === products.nama)) {
      return `Products ${products.nama} sudah ada dalam toko.`;
    }
    this.products.push(this.products);
    return `Product ${product.nama} berhasil di tambahkan ke dalam toko.`;
  }

  tambahkeKeranjang(product, jumlah) {
    if (!this.products.some((p) => p.nama === product.nama)) {
      return `Product ${product.nama} tidak ada dalam catalog.`;
    }

    if (this.cart.some((c) => c.product.nama === product.nama)) {
      let index = this.cart.findIndex(
        (c) => c.products.nama === this.products.nama
      );
      this.cart[index].jumlah += jumlah;
      if (this.cart[index].jumlah > this.products.stock) {
      }
      return `stock product ${products.nama} tidak mencukupi. Stock: ${products.stock}`;
    } else {
      this.cart.push({ product, jumlah });
    }
    return `Product ${
      (product, nama)
    } berhasil ditambahkan ke keranjang dengan jumlah ${jumlah}.`;
  }

  transaksi(uangUser, jarak) {
    let totalPembayaran = 0;
    let ongkir = jarak * 2000;

    this.cart.forEach((item) => {
      totalPembayaran += item.product.price * item.jumlah;
    });

    if (uanguser < totalPembayaran + ongkir) {
      return `Uang anda tidak mencukupi. Total pembayaran: ${totalPembayaran} + ongkir: ${ongkir}`;
    }

    let kembalian = uangUser - totalPembayaran - ongkir;
    this.cart = [];
    return "Transaksi berhasil. Total pembayaran: ${totalPembayaran} + ongkir: ${ongkir}. Kembalian: ${kembalian}.";
  }

  showCatalog() {
    return this.products;
  }

  showCart() {
    return this.cart;
  }
}
