import CardNews from "../components/CardNews.js";

export default function NewsList() {
  return `
    <main class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      <!-- Đoạn test Tailwind -->
      <div class="col-span-3 p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-[#ff5733] text-xl rounded-lg text-center">
        ✅ TailwindCSS hoạt động!
      </div>
      ${CardNews("Bài viết số 1", "Tóm tắt ngắn gọn về tin số 1")}
      ${CardNews("Bài viết số 2", "Tóm tắt ngắn gọn về tin số 2")}
      ${CardNews("Bài viết số 3", "Tóm tắt ngắn gọn về tin số 3")}
    </main>
  `;
}
