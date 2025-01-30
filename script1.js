// Handle Popup Open and Close
function openOrderPopup(dishName) {
    document.getElementById("orderPopup").style.display = "flex";
    document.getElementById("dishNamePopup").innerText = dishName;
  }
  
  function closeOrderPopup() {
    document.getElementById("orderPopup").style.display = "none";
  }
  
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Order Form Submission (simulated)
  document.getElementById("orderForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your order has been placed! Thank you.");
    closeOrderPopup();
  });
  
