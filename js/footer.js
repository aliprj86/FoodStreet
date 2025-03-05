export function setupfooter() {
    document.addEventListener("DOMContentLoaded", function () {
        var footerData = [
          {
            title: "locations",
            links: ["india", "japan", "USA", "iran", "france"]
          },
          {
            title: "quick links",
            links: ["home", "dishes", "about", "menu", "review", "order"]
          },
          {
            title: "contact info",
            links: ["+989123456789", "+989212345678", "example@gmail.com", "info@example.com", "tehran,iran-111111", ]
          },
          {
            title: "follow us",
            links: ["facebook", "instagram", "linkedin", "twitter"]
          }
        ];
      
        var boxes = document.querySelectorAll(".footer .box");
      
        for (var i = 0; i < boxes.length; i++) {
          if (footerData[i]) {
            var h3 = boxes[i].querySelector("h3");
            h3.textContent = footerData[i].title;
      
            var links = boxes[i].querySelectorAll("a");
            for (var j = 0; j < links.length; j++) {
              if (footerData[i].links[j]) {
                links[j].textContent = footerData[i].links[j];
                links[j].href = "#";
              }
            }
          }
        }
      
        var credit = document.querySelector(".credit");
        credit.innerHTML = "copyright @ 2025 by <span>aliprj</span>";
      });












}