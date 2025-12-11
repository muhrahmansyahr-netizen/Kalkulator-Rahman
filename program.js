//Fungsi untuk menambah angka/operator ke tampilan kalkulator
function appendValue(value) {
  // Ambil elemen input dengan id 'display' lalu tambahkan nilai yang ditekan ke dalamnya
  document.getElementById("display").value += value;
}

// Fungsi untuk menghapus semua isi tampilan kalkulator
function clearDisplay() {
  // Mengkosongkan isi dari input display
  document.getElementById("display").value = "";
}

// Fungsi untuk menghapus 1 karakter di tampilan
function deleteLast() {
  // Ambil isi saat ini, lalu potong 1 karakter dari belakang
  const curent = document.getElementById("display").value;
  document.getElementById("display").value = curent.slice(0, -1);
}

// Fungsi untuk menghitung hasil ekspersi matematika
function calculate() {
  try {
    // Evaluasi string mamtematika dan tampilan hasilnya di input display
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    // Jika terjadi error (seperti sintaks salah), tampilan pesan error
    document.getElementById("display").value = "Error";
  }
}
