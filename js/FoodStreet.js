import { setupHeader } from "./header.js";
import { setupbody } from "./body.js";
import { setupfooter } from "./footer.js";

setupHeader();
setupbody();
setupfooter();
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 1500);
}

window.addEventListener("load", function () {
  fadeOut();
});
