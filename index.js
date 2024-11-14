const apiKey = "UkNxd8sijc0PbaIug6lWkimGlL3eHXhA2BzSK1FFDzIXK1bVkkfiIt4S";
const API_URL = "https://api.pexels.com/v1/search"; // URL di base
const query = "cat"; // questa query per caricare altre foto
const secondaryQuery = "sea"; // invece questa query per caricare altre immagini della 2conda

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
    imgContainer.classList.add("col-md-4"); //  classi di Bootstrap per la formattazione
    imgContainer.innerHTML = `
      <div class="card mb-4 shadow-sm">
        <img src="${
          photo.src.medium
        }" class="bd-placeholder-img card-img-top" alt="${photo.photographer}">
        <div class="card-body">
          <h5 class="card-title">Lorem Ipsum</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary hide-btn">Hide</button>
            </div>
            <small class="text-muted">${new Date().toLocaleDateString(
              DataView
            )}</small>
          </div>
        </div>
      </div>
    `; // per cambiare data
    gallery.appendChild(imgContainer);

    // evento click per il bottone "Hide"
    imgContainer.querySelector(".hide-btn").addEventListener("click", () => {
      imgContainer.style.display = "none";
    });
  });
}
