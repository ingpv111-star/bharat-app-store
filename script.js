const apps = [
  {
    name: "Chat AI",
    developer: "Bharat Tech",
    category: "AI Tool",
    rating: "4.8 ⭐",
    image: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    boosted: true
  },
  {
    name: "Game Zone",
    developer: "Fun Studio",
    category: "Games",
    rating: "4.5 ⭐",
    image: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
    boosted: false
  },
  {
    name: "Photo Editor Pro",
    developer: "EditX",
    category: "Editing",
    rating: "4.6 ⭐",
    image: "https://cdn-icons-png.flaticon.com/512/2919/2919600.png",
    boosted: false
  }
];

function loadApps(list = apps) {
  const container = document.getElementById("appsContainer");
  container.innerHTML = "";

  list.forEach(app => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      ${app.boosted ? '<span class="badge">🔥 Boosted</span>' : ""}
      <img src="${app.image}" class="app-img">
      <h3>${app.name}</h3>
      <p>${app.developer}</p>
      <p>${app.category}</p>
      <p>${app.rating}</p>
      <button onclick="installApp('${app.name}')">Install</button>
    `;

    container.appendChild(div);
  });
}

function searchApps() {
  const value = document.getElementById("searchInput").value.toLowerCase();
  const filtered = apps.filter(app =>
    app.name.toLowerCase().includes(value)
  );
  loadApps(filtered);
}

function installApp(name) {
  alert("✅ " + name + " Installed Successfully!");
}

loadApps();
