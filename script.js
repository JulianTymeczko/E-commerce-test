const listOfAnchors = document.querySelectorAll("nav > div:first-child a");
function removeClass() {
  for (let i = 0; i < listOfAnchors.length; i++) {
    listOfAnchors[i].classList.remove("bottom-orange");
  }
}
function removeImgClass() {
  for (let i = 0; i < fourImages.length; i++) {
    fourImages[i].classList.remove("clicked-image");
  }
}
listOfAnchors.forEach((el, index) => {
  el.addEventListener("click", function (e) {
    removeClass();
    if (index != 0) {
      e.target.classList.add("bottom-orange");
    }
  });
});

document
  .querySelector(".counter .minus")
  .addEventListener("click", function () {
    if (parseInt(document.querySelector(".counter input").value) > 0) {
      document.querySelector(".counter input").value =
        parseInt(document.querySelector(".counter input").value) - 1;
    }
  });
document.querySelector(".counter .plus").addEventListener("click", function () {
  document.querySelector(".counter input").value =
    parseInt(document.querySelector(".counter input").value) + 1;
});

let bigImg = document.querySelector("main > div:first-child > img");
const fourImages = document.querySelectorAll(".four-images button");

fourImages.forEach((el) => {
  el.addEventListener("click", function (e) {
    if (e.target.tagName == "IMG") {
      removeImgClass();

      this.classList.add("clicked-image");
      bigImg.setAttribute(
        "src",
        `./images/${e.target
          .getAttribute("src")
          .split("/")[2]
          .slice(0, 15)}.jpg`,
      );
    }
  });
});

// everything for mobile

document.querySelector(".next").addEventListener("click", function () {
  if (
    parseInt(bigImg.getAttribute("src").split("/")[2].slice(14, 15)) + 1 <
    5
  ) {
    bigImg.setAttribute(
      "src",
      `./images/image-product-${(
        parseInt(bigImg.getAttribute("src").split("/")[2].slice(14, 15)) + 1
      ).toString()}.jpg`,
    );
  }
});
document.querySelector(".previous").addEventListener("click", function () {
  if (
    parseInt(bigImg.getAttribute("src").split("/")[2].slice(14, 15)) - 1 >
    0
  ) {
    bigImg.setAttribute(
      "src",
      `./images/image-product-${(
        parseInt(bigImg.getAttribute("src").split("/")[2].slice(14, 15)) - 1
      ).toString()}.jpg`,
    );
  }
});
document
  .querySelector(".hamburger-button")
  .addEventListener("click", function () {
    document.querySelector("dialog").showModal();
  });
document.querySelector(".close-button").addEventListener("click", function () {
  document.querySelector("dialog").close();
});

let cart = false;
const theCart = document.querySelector(".cart");
document.querySelector(".cart-button").addEventListener("click", function () {
  cart = !cart;
  if (!cart) {
    theCart.setAttribute("style", "display: none;");
  } else if (cart) {
    theCart.setAttribute("style", "display: flex;");
  }
});
let inCart = document.getElementById("in-cart");

// document.querySelector(".add-to-cart").addEventListener("click", function () {
//   let total;
//   let quantity;
//   let inCartDiv = document.createElement("div");
//   let inCartH3 = document.createElement("h3");
//   quantity = document.querySelector(".counter input").value;
//   total = parseInt(document.querySelector(".counter input").value) * 125;

//   inCart.appendChild(document.createElement(""));
// });
