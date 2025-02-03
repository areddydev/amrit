// Mobile Menu Logic
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const menuItems = document.querySelectorAll(".menu-item");
let menuOpen = false;

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle("hidden", !menuOpen);

  // Animate hamburger icon
  if (menuOpen) {
    gsap.to(hamburger.children[0], { 
      rotate: 45, 
      y: 7.5, 
      duration: 0.3 
    });
    gsap.to(hamburger.children[1], { 
      opacity: 0, 
      duration: 0.3 
    });
    gsap.to(hamburger.children[2], { 
      rotate: -45, 
      y: -7.5, 
      duration: 0.3 
    });
    gsap.fromTo(
      menuItems,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }
    );
  } else {
    gsap.to(hamburger.children[0], { 
      rotate: 0, 
      y: 0, 
      duration: 0.3 
    });
    gsap.to(hamburger.children[1], { 
      opacity: 1, 
      duration: 0.3 
    });
    gsap.to(hamburger.children[2], { 
      rotate: 0, 
      y: 0, 
      duration: 0.3 
    });
  }
});

// Close menu on item click and smooth scroll
menuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    menuOpen = false;
    mobileMenu.classList.add("hidden");
    
    // Close the hamburger menu
    hamburger.classList.remove("open");

    const targetId = item.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    // Scroll smoothly to the target element
    lenis.scrollTo(targetElement);
  });
});