// Hero Section Animation
gsap.from(".hero h1", {
  duration: window.innerWidth < 768 ? 1 : 2, 
  y: 100,
  opacity: 0,
  ease: "power4.out",
});

gsap.from(".hero p", {
  duration: window.innerWidth < 768 ? 1 : 2, 
  y: 200,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5,
});

// Timeline for smoother animations
let tl = gsap.timeline();

// About Section Animation
tl.from(".about", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  x: window.innerWidth < 768 ? 0 : -200, 
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

// Work Section Animation
tl.from(".work", {
  scrollTrigger: {
    trigger: ".work",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  x: window.innerWidth < 768 ? 0 : 200, 
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

// Skills Section Animation
tl.from(".skills", {
  scrollTrigger: {
    trigger: ".skills",
    start: "top 85%",
    toggleActions: "play none none none",
  },
  scale: window.innerWidth < 768 ? 1 : 0.8, 
  opacity: 0,
  duration: 1.5,
  ease: "elastic.out(1, 0.5)",
});

// Contact Section Animation
tl.from(".contact", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 85%",
    toggleActions: "play none none none",
  },
  y: window.innerWidth < 768 ? 50 : 150, 
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
});

// Footer Fade-in Animation
tl.from(".footer", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
});

// Smooth Background Color Change on Scroll
let lastScrollTop = 0;
let throttleTimeout;

function changeBackgroundColorOnScroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop !== lastScrollTop) {
    clearTimeout(throttleTimeout);

    throttleTimeout = setTimeout(() => {
      document.body.style.transition = "background-color 0.5s ease-in-out";
      document.body.style.backgroundColor =
        "#" +
        ((1 << 24) |
          (Math.floor(Math.random() * 156) + 100) << 16 |
          (Math.floor(Math.random() * 156) + 100) << 8 |
          (Math.floor(Math.random() * 156) + 100))
          .toString(16)
          .slice(1);
    }, 100); // Throttle frequency
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
}

window.addEventListener("scroll", changeBackgroundColorOnScroll);


// animation for section content
gsap.utils.toArray("section").forEach((section, index) => {
  const isOdd = index % 2 !== 0;

  gsap.from(section.children, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%", // Trigger when the section is about to enter the viewport
      toggleActions: "play none none none",
    },
    x: isOdd ? 100 : -100, // Alternate sliding direction
    y: 50, // Slight upward movement
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.2, // Stagger elements for a cascading effect
  });
});

if (window.innerWidth < 768) {
  gsap.set("section", { opacity: 1, x: 0, y: 0 }); // Disable animations for mobile
}
