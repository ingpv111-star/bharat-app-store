let apps = [
  {
    name: "Chat AI",
    developer: "Bharat Tech",
    category: "AI",
    image: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    boosted: true
  },
  {
    name: "Game Zone",
    developer: "Fun Studio",
    category: "Games",
    image: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
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
      ${app.boosted ? '<span class="badge">⭐ Featured</span>' : ""}
      <img src="${app.image}">
      <h3>${app.name}</h3>
      <p>${app.developer}</p>
      <p>${app.category}</p>
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

function filterCategory(category) {
  if(category === "All") {
    loadApps();
  } else {
    const filtered = apps.filter(app => app.category === category);
    loadApps(filtered);
  }
}

function installApp(name) {
  alert("🚀 " + name + " Installed Successfully!");
}

function toggleForm() {
  const form = document.getElementById("uploadForm");
  form.style.display = form.style.display === "block" ? "none" : "block";
}

function addApp() {
  const name = document.getElementById("appName").value;
  const dev = document.getElementById("appDev").value;
  const cat = document.getElementById("appCategory").value;
  const img = document.getElementById("appImage").value;

  if(!name || !dev || !cat || !img) {
    alert("Please fill all fields!");
    return;
  }

  apps.push({
    name,
    developer: dev,
    category: cat,
    image: img,
    boosted: false
  });

  loadApps();
  toggleForm();
}

loadApps();
