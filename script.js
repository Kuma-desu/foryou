document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("paper-text");
    const music = document.getElementById("background-music");
    const startButton = document.getElementById("start-btn");
    const paper = document.querySelector(".paper");

    // Teks yang akan diketik otomatis (ditambahkan spasi lebih agar sejajar dengan garis)
    const textToType = `
        Terima kasih ya sudah menerima aku jadi pacar kmu, aku binggung mau ketik apa apa lagi wkkw, tapi mohon bantunnya yaa
        dan jangan lupa jaga kesehatan.
    `.replace(/\n/g, "\n\n"); // Menyesuaikan dengan tinggi garis

    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            textarea.value += textToType[index];
            index++;
            setTimeout(typeText, Math.random() * (150 - 50) + 50); // Waktu mengetik acak
        }
    }

    // Event klik tombol untuk memulai musik & pengetikan
    startButton.addEventListener("click", function () {
        music.play(); // Putar musik
        startButton.style.display = "none"; // Sembunyikan tombol
        paper.style.display = "block"; // Tampilkan kertas
        setTimeout(typeText, 1000);
    });
});
