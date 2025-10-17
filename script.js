function updateTime() {
  document.getElementById("time").textContent = Date.now();
}

// Initialize time on load
updateTime();

// Optional: Update every 5 seconds to show live tick
setInterval(updateTime, 5000);
