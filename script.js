//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  getAllEpisodes().forEach((episode) => {
    // Add elements
    const card = document.createElement("div");
    card.classList.add("card");
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("cardHeader");
    const title = document.createElement("h3");
    const season = document.createElement("h4");
    const image = document.createElement("img");
    const summary = document.createElement("p");
    summary.classList.add("summary");

    // Add content to your elements 
    title.textContent = episode.name;
    season.textContent = `S${episode.season
      .toString()
      .padStart(2, "0")}E${episode.number.toString().padStart(2, "0")}`;
    image.src = episode.image.medium;
    summary.innerHTML = episode.summary;

    // Append
    cardHeader.appendChild(title);
    cardHeader.appendChild(season);
    cardHeader.classList.add("header-title");
    card.appendChild(cardHeader);
    card.appendChild(image);
    card.appendChild(summary);
    rootElem.appendChild(card);
  });
}
window.onload = setup;
