const pmain = document.getElementById("smimg");
const thumbnail = document.getElementById('thumbnail');
const reviewsContainer = document.getElementById('reviews-container');
const cartCount = document.getElementById('cart-count');
let str = "";

const params = new URLSearchParams(window.location.search);
const itemId = params.get("url");

console.log(itemId);

const url = `https://dummyjson.com/products/${itemId}`;
fetch(url)
  .then((res) => res.json())
  .then((data) => {

    const mainImage = `<img src="${data.thumbnail}" class="main_image" id="main_image">`;
    thumbnail.innerHTML = mainImage;

    data.images.forEach((element) => {
      str += `
        <div class="img">
          <img src="${element}" class="mini_img" data-src="${element}">
        </div>`;
    });

    pmain.innerHTML = str;

    const descriptionContent = `
      <h2>${data.title}</h2>
      <p>${data.description}</p>
      <h3>$${data.price}</h3>
      <button onclick="addToCart(${data.id}, '${data.title}', ${data.price}, '${data.thumbnail}')">Add to Cart</button>
    `;

    const desContainer = document.getElementById("des");
    desContainer.innerHTML = descriptionContent;


    displayReviews(data.reviews);

    const miniImages = document.querySelectorAll('.mini_img');
    miniImages.forEach((img) => {
      img.addEventListener('mouseover', () => {
        changeImage(img.getAttribute('data-src'));
      });
    });
  });

function changeImage(imageSrc) {
    const mainImage = document.getElementById("main_image");
    if (mainImage) {
        mainImage.src = imageSrc; 
    }
}

function displayReviews(reviews) {
  if (reviews && reviews.length > 0) {
    reviews.forEach(review => {
      const reviewCard = `
        <div class="review-card">
          <h4>${review.reviewerName || "Anonymous"}</h4>
          <div class="star-rating">${generateStars(review.rating)}</div>
          <p>${review.comment}</p>
        </div>
      `;
      reviewsContainer.innerHTML += reviewCard;
    });
  } else {
    reviewsContainer.innerHTML = "<p>No reviews available.</p>";
  }
}

// Function to generate star ratings
function generateStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating ? "⭐" : "☆";
  }
  return stars;
}

function addToCart(id, title, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ id, title, price, image, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  console.log("Redirecting to cart.html");

  window.location.href = "cart.html";
}

function updateCartCount() {
  if (cartCount) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartCount.textContent = `Cart: ${cart.length}`;
  } else {
    console.warn("Element with ID 'cart-count' not found!");
  }
}

updateCartCount();
