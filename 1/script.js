window.addEventListener('load', () => {
    const moon = document.querySelector('.moon');
    const goodNight = document.querySelector('.good-night');
    const goodMorning = document.querySelector('.good-morning');
    const wakeupButton = document.getElementById('wakeupButton');

    moon.style.left = `${goodNight.offsetWidth - moon.offsetWidth - 20}px`;

    // Menampilkan tombol bangun setelah beberapa detik
    setTimeout(() => {
        wakeupButton.style.display = 'block';
    }, 5000); // Ubah angka 5000 menjadi jumlah detik yang diinginkan

    // Ketika tombol bangun diklik
    wakeupButton.addEventListener('click', () => {
        goodNight.style.display = 'none'; // Sembunyikan ucapan "Good Night"
        goodMorning.style.display = 'block'; // Tampilkan ucapan "Selamat Pagi"
    });
});

