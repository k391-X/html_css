import "./style.css";
import "./custom.css";
import "../src/font.js";
import Layout from "./layout/Layout.js";
import NewsList from "./pages/NewsList/index.js";

const app = document.getElementById("app");

function render(pageContent) {
  app.innerHTML = Layout(pageContent);
}

// Mặc định vào danh sách tin
render(NewsList());

