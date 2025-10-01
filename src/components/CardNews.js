export default function CardNews(title, summary) {
  return `
    <div class="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
      <h2 class="text-lg font-bold text-blue-600">${title}</h2>
      <p class="text-gray-600">${summary}</p>
      <button class="mt-2 text-sm text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600" onclick="showDetail('${title}')">
        Xem chi tiết
      </button>
    </div>
  `;
}
