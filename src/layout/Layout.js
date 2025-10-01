import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

export default function Layout(content) {
  return `
    <div class="min-h-screen flex flex-col">
      ${Header()}
      <main class="flex-grow bg-gray-50 p-6">
        ${content}
      </main>
      ${Footer()}
    </div>
  `;
}
