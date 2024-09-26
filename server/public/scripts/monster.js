const renderMonster = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());

  const response = await fetch("/monsters");
  const data = await response.json();

  const monster = data.find((monster) => monster.id === requestedID);

  if (monster) {
    document.getElementById("image").src = monster.image;
    document.getElementById("name").textContent = monster.name;
    document.getElementById("type").textContent = "Type: " + monster.type;
    document.getElementById("description").textContent = monster.description;
    document.title = `${monster.name}`;
  } else {
    const message = document.createElement("h2");
    message.textContent = "Monster Not Found 😞";
    monsterContent.appendChild(message);
  }
};
renderMonster();
