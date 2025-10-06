import "./style.css";
import "./custom.css";
import "../src/font.js";
import Layout from "./layout/Layout.js";
import LayoutLogin from "./layout/Layout_Login.js";
import NewsList from "./pages/NewsList/index.js";

const app = document.getElementById("app");

// function render(pageContent) {
//   app.innerHTML = Layout(pageContent);
// }

// Đối với các màn đơn login
function render(pageContent) {
  app.innerHTML = LayoutLogin(pageContent);
}

// Mặc định vào danh sách tin
render(NewsList());

