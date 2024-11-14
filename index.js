const apiKey = "UkNxd8sijc0PbaIug6lWkimGlL3eHXhA2BzSK1FFDzIXK1bVkkfiIt4S";
const API_URL = "https://api.pexels.com/v1/search"; // URL di
const query = "cat"; // per cambiar le foto
const secondaryQuery = "sea"; // per cambiare 2

document.getElementById("loadImages").addEventListener("click", function () {
  loadImages(query);
});

document
  .getElementById("loadSecondaryImages")
  .addEventListener("click", function () {
    loadImages(secondaryQuery);
  });

function loadImages(searchQuery) {
  fetch(`${API_URL}?query=${searchQuery}`, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      displayImages(data.photos);
    })
    .catch((error) => console.error("Errore:", error));
}

function displayImages(photos) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ""; // Cancella le immagini precedenti
  photos.forEach((photo) => {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const imgElement = document.createElement("img");
    imgElement.src = photo.src.medium;
    imgElement.alt = photo.photographer;

    const hideButton = document.createElement("button");
    hideButton.innerText = "Hide";
    hideButton.addEventListener("click", () => {
      imgContainer.style.display = "none";
    });

    imgContainer.appendChild(imgElement);
    imgContainer.appendChild(hideButton);
    gallery.appendChild(imgContainer);
  });
}
