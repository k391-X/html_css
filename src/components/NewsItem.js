export default function NewsItem({ image, date, title, desc }) {
  return `
    <div class="flex flex-col md:flex-row gap-4 mb-6">
      <!-- Hình -->
      <div class="w-full md:w-1/4">
        <img src="${image}" alt="demo" class="w-full h-auto rounded-lg shadow custom-img-zoom" />
      </div>

      <!-- Nội dung -->
      <div class="w-full md:w-3/4 flex flex-col py-[4px]">
        <div class="text-left text-sm md:text-base date-txt">
          ${date}
        </div>

        <div class="py-2">
          <div class="custom-link-underline">
            <div class="text-left text-base md:text-lg font-medium title-news-item-txt line-clamp-2" title="${title}">
              ${title}
            </div>
          </div>
        </div>

        <div class="text-left text-sm md:text-base description-news-item-txt line-clamp-2">
          ${desc}
        </div>
      </div>
    </div>
  `;
}
