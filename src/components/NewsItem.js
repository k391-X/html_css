export default function NewsItem({ image, date, title, desc }) {
  return `
    <div class="flex gap-4 mb-6">
      <!-- Hình -->
      <div class="w-1/4">
        <img src="${image}" alt="demo" class="w-full h-auto rounded-lg shadow" />
      </div>

      <!-- Nội dung -->
      <div class="w-3/4 flex flex-col py-[4px]">
        <div class="text-left date-txt">
          ${date}
        </div>

        <div class="py-2">
          <div class="text-left title-news-item-txt line-clamp-2">
            ${title}
          </div>
        </div>

        <div class="text-left description-news-item-txt line-clamp-2">
          ${desc}
        </div>
      </div>
    </div>
  `;
}
