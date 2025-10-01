export default function NewsDetail(title) {
  return `
    <main class="p-6">
      <h2 class="text-2xl font-bold text-blue-600">${title}</h2>
      <p class="mt-4 text-gray-700">Đây là nội dung chi tiết cho bài viết "${title}".</p>
      <button class="mt-6 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" onclick="goBack()">
        Quay lại danh sách
      </button>
    </main>
  `;
}
