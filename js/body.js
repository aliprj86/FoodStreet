export function setupbody() {
  // slider

  var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

  const slidesData = [
    { title: "spicy noodles" },
    { title: "fried chicken" },
    { title: "hot pizza" },
  ];

  const slideElements = document.querySelectorAll(".swiper-slide .content");

  slidesData.forEach((slide, index) => {
    slideElements[index].querySelector("span").textContent = "our special dish";
    slideElements[index].querySelector("h3").textContent = slide.title;
    slideElements[index].querySelector("p").textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quisquam error ea!";
    slideElements[index].querySelector("a").textContent = "order now";
  });
  //end slider
  //   home
  const contentss = {
    h3: "Tasty Food",
    span: "$15.99",
    stars:
      '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>',
    button: "non-existent",
  };

  const boxes = document.querySelectorAll(".box1");

  boxes.forEach((box) => {
    box.querySelector("h3").textContent = contentss.h3;
    box.querySelector("span").textContent = contentss.span;
    box.querySelector(".stars").innerHTML = contentss.stars;
    box.querySelector(".btn").textContent = contentss.button;
  });
  document.querySelectorAll(".fa-heart").forEach((heart) => {
    heart.addEventListener("click", function (event) {
      event.stopPropagation();

      if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else {
        this.classList.add("active");
      }
    });
  });
  // end home
  // dishes
  const contents = {
    subHeading: "About Us",
    heading: "Why Choose Us?",
    offerTitle: "Our Special Offer",
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste neque ipsam nihil earum sint! Maiores eos natus vero tenetur accusamus commodi odio consequatur placeat. Dolorum explicabo deserunt quisquam repellat alias!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa impedit pariatur ipsa a accusamus veritatis? Quas repudiandae alias vitae possimus!",
    ],
    icons: ["Free Delivery", "Easy Payments", "24/7 Service"],
    buttonText: "Learn More",
    modalText: `Taame Khial Restaurant started its journey in 2016, bringing high-quality dishes and unique flavors to food lovers. With 3 active branches in the city, we strive to create a memorable dining experience for our customers.  

  Using fresh ingredients and a professional team, we offer a warm and welcoming atmosphere where every meal becomes a delightful memory. We look forward to serving you!`,
  };

  document.querySelector(".sub-heading1").textContent = contents.subHeading;
  document.querySelector(".heading1").textContent = contents.heading;
  document.querySelector(".offer-title").textContent = contents.offerTitle;
  document.querySelector(".desc-1").textContent = contents.paragraphs[0];
  document.querySelector(".desc-2").textContent = contents.paragraphs[1];

  document.querySelector(".icon-1").textContent = contents.icons[0];
  document.querySelector(".icon-2").textContent = contents.icons[1];
  document.querySelector(".icon-3").textContent = contents.icons[2];

  document.querySelector(".btn.bgn").textContent = contents.buttonText;

  document.querySelector(".modal-text").textContent = contents.modalText;
  var swiper = new Swiper(".my-1Swiper", {
    rewind: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const btn = document.querySelector(".bgn");
    const closeBtn = document.querySelector(".close");
    btn.addEventListener("click", function () {
      modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  //end  dishes
  //menu

  const menuData = [
    {
      title: "Delicious food 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, animi!",
      price: "$13.45",
    },
    {
      title: "Delicious food 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, animi!",
      price: "$13.45",
    },
    {
      title: "Delicious food 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, animi!",
      price: "$13.45",
    },
    {
      title: "Delicious food 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, animi!",
      price: "$13.45",
    },
    {
      title: "Delicious food 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, animi!",
      price: "$13.45",
    },
    {
      title: "Delicious food 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, animi!",
      price: "$13.45",
    },
    {
      title: "Delicious food 7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, animi!",
      price: "$13.45",
    },
    {
      title: "Delicious food 8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, animi!",
      price: "$13.45",
    },
    {
      title: "Delicious food 9",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, animi!",
      price: "$13.45",
    },
    {
      title: "Delicious food 10",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, animi!",
      price: "$13.45",
    },
  ];

  const headerData = {
    h3Text: "Our Menu",
    h1Text: "Today's Speciality",
  };

  function loadMenu() {
    document.querySelector(".sub-heading2").textContent = headerData.h3Text;
    document.querySelector(".heading2").textContent = headerData.h1Text;

    const boxes = document.querySelectorAll(".box2");
    boxes.forEach((box, index) => {
      const data = menuData[index];
      if (data) {
        box.querySelector(".content h3").textContent = data.title;
        box.querySelector(".content p").textContent = data.description;
        box.querySelector(".btn").textContent = "Add to Cart";
        box.querySelector(".price").textContent = data.price;
      }
    });
  }
  window.onload = loadMenu;
  document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".contentt");

    products.forEach((product) => {
      const addToCartButton = product.querySelector(".btnadd");
      const cartDetails = product.querySelector(".cart-details");
      const increaseButton = product.querySelector(".increase");
      const decreaseButton = product.querySelector(".decrease");
      const itemQuantity = product.querySelector(".itemQuantity");

      let quantity = 0;

      cartDetails.style.display = "none";

      addToCartButton.addEventListener("click", function () {
        quantity = 1;
        updateQuantity();
        cartDetails.style.display = "flex";
        addToCartButton.style.display = "none";
      });

      increaseButton.addEventListener("click", function () {
        quantity++;
        updateQuantity();
      });

      decreaseButton.addEventListener("click", function () {
        if (quantity > 0) {
          quantity--;
        }
        updateQuantity();
      });

      function updateQuantity() {
        itemQuantity.textContent = quantity;

        if (quantity === 0) {
          cartDetails.style.display = "none";
          addToCartButton.style.display = "block";
        }
      }
    });
  });
  // end menu
  // review
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

   const headerData1 = {
    h3Text: "Customer's Review",
    h1Text: "What They Say"
  };

  const reviewsData = [
    {
      userName1: "aliprj",
      reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eum ab impedit, perspiciatis laborum quasi sint natus itaque distinctio veritatis consequatur est? Consectetur, numquam provident modi sint totam velit tempore?"
    },
    {
      userName1: "aliprj",
      reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eum ab impedit, perspiciatis laborum quasi sint natus itaque distinctio veritatis consequatur est? Consectetur, numquam provident modi sint totam velit tempore?"
    },
    {
      userName1: "aliprj",
      reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eum ab impedit, perspiciatis laborum quasi sint natus itaque distinctio veritatis consequatur est? Consectetur, numquam provident modi sint totam velit tempore?"
    },
    {
      userName1: "aliprj",
      reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eum ab impedit, perspiciatis laborum quasi sint natus itaque distinctio veritatis consequatur est? Consectetur, numquam provident modi sint totam velit tempore?"
    },
    {
      userName1: "aliprj",
      reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eum ab impedit, perspiciatis laborum quasi sint natus itaque distinctio veritatis consequatur est? Consectetur, numquam provident modi sint totam velit tempore?"
    },
    {
      userName1: "aliprj",
      reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eum ab impedit, perspiciatis laborum quasi sint natus itaque distinctio veritatis consequatur est? Consectetur, numquam provident modi sint totam velit tempore?"
    }
  ];

  function loadReviews() {
  
    document.querySelector(".sub-heading3").textContent = headerData1.h3Text;
    document.querySelector(".heading3").textContent = headerData1.h1Text;

   
    const slides = document.querySelectorAll('.swiper-slide1');
    slides.forEach((slide, index) => {
      const userName1Element = slide.querySelector('.user-info h3');
      const reviewTextElement = slide.querySelector('p');
      if (reviewsData[index]) {
        userName1Element.textContent = reviewsData[index].userName1;
        reviewTextElement.textContent = reviewsData[index].reviewText;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", loadReviews);
  //end review
  // order
  document.addEventListener("DOMContentLoaded", function () {
  
    const headerData2 = {
      h3Text1: "order now",
      h1Text1: "free and fast"
    };
  

    const orderData = {
      fields: [
        { label: "Your Name", placeholder: "enter your name" },
        { label: "Your Number", placeholder: "enter your number" }
      ],
      fields2: [
        { label: "Your order", placeholder: "enter food name" },
        { label: "Additional food", placeholder: "extra with food" }
      ],
      fields3: [
        { label: "How much", placeholder: "how many orders" },
        { label: "Date And Time", placeholder: "" } 
      ],
      fields4: [
        { label: "Your Address", placeholder: "enter your address" },
        { label: "Your Message", placeholder: "enter your message" }
      ],
      submitValue: "order now"
    };
  

    document.querySelector(".sub-heading4").textContent = headerData2.h3Text1;
    document.querySelector(".heading4").textContent = headerData2.h1Text1;
  
 
    const inputBoxes = document.querySelectorAll("#order .inputbox");
  

    if (inputBoxes.length >= 1) {
      const inputs1 = inputBoxes[0].querySelectorAll(".input");
      inputs1[0].querySelector("span").textContent = orderData.fields[0].label;
      inputs1[0].querySelector("input").placeholder = orderData.fields[0].placeholder;
      inputs1[1].querySelector("span").textContent = orderData.fields[1].label;
      inputs1[1].querySelector("input").placeholder = orderData.fields[1].placeholder;
    }
  
   
    if (inputBoxes.length >= 2) {
      const inputs2 = inputBoxes[1].querySelectorAll(".input");
      inputs2[0].querySelector("span").textContent = orderData.fields2[0].label;
      inputs2[0].querySelector("input").placeholder = orderData.fields2[0].placeholder;
      inputs2[1].querySelector("span").textContent = orderData.fields2[1].label;
      inputs2[1].querySelector("input").placeholder = orderData.fields2[1].placeholder;
    }
  
  
    if (inputBoxes.length >= 3) {
      const inputs3 = inputBoxes[2].querySelectorAll(".input");
      inputs3[0].querySelector("span").textContent = orderData.fields3[0].label;
      inputs3[0].querySelector("input").placeholder = orderData.fields3[0].placeholder;
      inputs3[1].querySelector("span").textContent = orderData.fields3[1].label;
      inputs3[1].querySelector("input").placeholder = orderData.fields3[1].placeholder;
    }
  

    if (inputBoxes.length >= 4) {
      const inputs4 = inputBoxes[3].querySelectorAll(".input");
      inputs4[0].querySelector("span").textContent = orderData.fields4[0].label;
      inputs4[0].querySelector("textarea").placeholder = orderData.fields4[0].placeholder;
      inputs4[1].querySelector("span").textContent = orderData.fields4[1].label;
      inputs4[1].querySelector("textarea").placeholder = orderData.fields4[1].placeholder;
    }
  

    const submitBtn = document.querySelector("#order input[type='submit']");
    if (submitBtn) {
      submitBtn.value = orderData.submitValue;
    }
  });
    //end order
}
