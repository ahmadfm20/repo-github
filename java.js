// Fungsi untuk memutar atau menghentikan lagu
function playBirthdaySong() {
  var audio = document.getElementById("birthday-song");
  if (audio.paused) {
      audio.play();
  } else {
      audio.pause();
  }
}

// Fungsi untuk menampilkan pesan ucapan
function showMessage() {
  var messageContainer = document.getElementById("message-container");
  messageContainer.style.display = "block"; // Menampilkan pesan
}
