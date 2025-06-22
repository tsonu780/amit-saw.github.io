function toggleMenu() {
    var navbar = document.getElementById('navbar').querySelector('ul');
    navbar.classList.toggle('active');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function () {
      const target = this.getAttribute("href");

      // Remove active class from all links
      document.querySelectorAll(".nav-link").forEach(el => el.classList.remove("active"));

      // Add active class to matching navbar link
      const navLink = document.querySelector('nav .nav-link[href="' + target + '"]');
      if (navLink) {
        navLink.classList.add("active");
      }
    });
  });

  window.addEventListener("load", () => {
    if (!window.location.hash || window.location.hash === "#home") {
      document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
      const homeLink = document.querySelector('nav .nav-link[href="#home"]');
      if (homeLink) homeLink.classList.add("active");
    }
  });