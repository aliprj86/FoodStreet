export function setupHeader() {
  document.querySelector(".logo").innerHTML =
    '<i class="fas fa-utensils"></i>FoodStreet';

  const navLinks = [
    { selector: 'a[href="#home"]', text: "home" },
    { selector: 'a[href="#dishes"]', text: "dishes" },
    { selector: 'a[href="#about"]', text: "about" },
    { selector: 'a[href="#menu"]', text: "menu" },
    { selector: 'a[href="#review"]', text: "review" },
    { selector: 'a[href="#order"]', text: "order" },
  ];

  navLinks.forEach((linkData) => {
    document.querySelector(linkData.selector).textContent = linkData.text;
  });

  let menu = document.querySelector("#menu-bars");
  let navbar = document.querySelector(".navbar");

  menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  };

  let section = document.querySelectorAll("section");
  let navLinks1 = document.querySelectorAll("header .navbar a");

  window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    section.forEach((sec) => {
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute(`id`);

      if (top >= offset && top < offset + height) {
        if (navLinks1 && document.querySelector(`header .navbar a[href*="${id}"]`)) {
          navLinks1.forEach((link) => {
            link.classList.remove("active");
          });
          document.querySelector(`header .navbar a[href*="${id}"]`).classList.add("active");
        }
      }
    });
  };

  document.querySelector("#search-icon").onclick = () => {
    document.querySelector("#search-form").classList.toggle("active");
  };

  document.querySelector("#close").onclick = () => {
    document.querySelector("#search-form").classList.remove("active");
  };
  
}
