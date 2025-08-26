document.addEventListener("DOMContentLoaded", () => {
  const timer = document.getElementById("timer");
  const target = new Date(config.date).getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      timer.innerHTML = "Chegou o grande dia!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  setInterval(updateCountdown, 1000);
});
