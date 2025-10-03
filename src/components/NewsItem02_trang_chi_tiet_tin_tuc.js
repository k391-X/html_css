export default function NewsItem02({ image, date, title, desc }) {
  return `
    <div class="flex">
      <!-- Hình (40%) -->
      <div class="w-2/5 p-3">
        <img 
          src="${image}" 
          alt="demo" 
          class="w-full h-full object-cover rounded-lg shadow custom-img-zoom" 
        />
      </div>

      <!-- Nội dung (60%) -->
      <div class="w-3/5 flex flex-col p-2">
        <div class="text-left date-txt">
          ${date}
        </div>

        <div class="custom-link-underline">
          <div class="text-left line-clamp-3 mt-[0.8125rem] text-[14px] font-[500]" title="${title}">
            ${title}
          </div>
        </div>
      </div>
    </div>
  `;
}
