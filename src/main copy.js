import "./style.css";
import "./custom.css";
import "../src/font.js";

import Layout from "./layout/Layout.js";
import LayoutLogin from "./layout/Layout_Login.js";
import NewsList from "./pages/NewsList/index.js";

import "bootstrap/dist/css/bootstrap.min.css";

// Chỉ load JS Bootstrap khi chạy trên trình duyệt
if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap.bundle.min.js");
}

const app = document.getElementById("app");

// Nếu modal hoặc component nào render bằng JS, trigger event prerender
document.dispatchEvent(new Event('render-event'));
// function render(pageContent) {
//   app.innerHTML = Layout(pageContent);
// }

// Đối với các màn đơn login
function render(pageContent) {
  app.innerHTML = LayoutLogin(pageContent);
}

// Mặc định vào danh sách tin
render(NewsList());

