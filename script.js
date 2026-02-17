const apps = [
  { name: "Chat AI", category: "AI Tool" },
  { name: "Photo Editor Pro", category: "Editing" },
  { name: "Game Zone", category: "Games" },
  { name: "Learning Hub", category: "Education" }
];

function loadApps() {
  const container = document.getElementById("appsContainer");
  container.innerHTML = "";

  apps.forEach(app => {
    const div = document.createElement("div");
    div.className = "app-card";
    div.innerHTML = `
      <h3>${app.name}</h3>
      <p>${app.category}</p>
      <button onclick="boostApp('${app.name}')">Boost</button>
    `;
    container.appendChild(div);
  });
}

function searchApps() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const container = document.getElementById("appsContainer");
  container.innerHTML = "";

  const filtered = apps.filter(app =>
    app.name.toLowerCase().includes(searchValue)
  );

  filtered.forEach(app => {
    const div = document.createElement("div");
    div.className = "app-card";
    div.innerHTML = `
      <h3>${app.name}</h3>
      <p>${app.category}</p>
      <button onclick="boostApp('${app.name}')">Boost</button>
    `;
    container.appendChild(div);
  });
}

function boostApp(name) {
  alert("🔥 " + name + " Boosted Successfully!");
}

loadApps();
