import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

export default function Layout(content) {
  return `
    <div class="min-h-screen flex flex-col">
      ${Header()}
      <main class="flex justify-center bg-gray-50 flex-grow">
        <div class="container">
          ${content}
        </div>
      </main>
      ${Footer()}
    </div>
  `;
}
