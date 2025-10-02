import "./style.css";
import "./custom.css";
import Layout from "./layout/Layout.js";
import NewsList from "./pages/NewsList/index.js";
import NewsDetail from "./pages/NewsDetail.js";

const app = document.getElementById("app");

function render(pageContent) {
  app.innerHTML = Layout(pageContent);
}

// Mặc định vào danh sách tin
render(NewsList());

// Điều hướng
window.showDetail = function(title) {
  render(NewsDetail(title));
};

window.goBack = function() {
  render(NewsList());
};
