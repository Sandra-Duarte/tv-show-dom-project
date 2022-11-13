let allEpisodes;

//You can edit ALL of the code here
function setup() {
  allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

const search = document.getElementById("searchEpisode");
const rootElem = document.getElementById("root");

search.addEventListener("input",(element) => {
  const value = element.target.value.toLowerCase();
  //console.log(value)


  const filterEpisodes = allEpisodes.filter((episode) =>
       episode.name.toLowerCase().includes(value) ||
        episode.summary.toLowerCase().includes(value)
        );

        console.log(filterEpisodes);


        rootElem.innerHTML ="";
        makePageForEpisodes(filterEpisodes); //////continue
})








function makePageForEpisodes(episodeList) {
 
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  episodeList.forEach((episode) => {
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
