const renderMonsters = async () => {
  const response = await fetch("/monsters");
  const data = await response.json();

  const mainContent = document.getElementById("main-content");

  if (data) {
    data.map((monster) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      topContainer.style.backgroundImage = `url(${monster.image})`;

      const name = document.createElement("h3");
      name.textContent = monster.name;
      bottomContainer.appendChild(name);

      const type = document.createElement("p");
      type.textContent = "Type: " + monster.type;
      bottomContainer.appendChild(type);

      const description = document.createElement("p");
      description.textContent = "Description: " + monster.description;
      bottomContainer.appendChild(description);

      const link = document.createElement("a");
      link.textContent = "Read More >";
      link.setAttribute("role", "button");
      link.href = `/monsters/${monster.id}`;
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);

      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Monsters Available 😞";
    mainContent.appendChild(message);
  }
};

const requestedUrl = window.location.href.split("/").pop();

if (requestedUrl) {
  window.location.href = "../404.html";
} else {
  renderMonsters();
}
