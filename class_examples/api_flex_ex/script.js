document.addEventListener('DOMContentLoaded', function () {
});

document.addEventListener('DOMContentLoaded', fetchArtData);

function fetchArtData() {
    let randArt = Math.floor(Math.random() * 1000) + 1;
    console.log(randArt);

    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randArt}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayArt(data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
};

function displayArt(art) {
    const artList = document.getElementById('artList');
    const artItem = document.createElement('div');

    artItem.innerHTML = `
        <h2>${art.title}</h2>
        <img src="${art.primaryImageSmall}" alt="${art.title}" />
        <p>Artist: ${art.artistDisplayName}</p>
        <p>Year: ${art.objectDate}</p>
        <p>Department: ${art.department}</p>
    `;

    artList.appendChild(artItem);

}