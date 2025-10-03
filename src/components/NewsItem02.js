export default function NewsItem02({ image, date, title, desc }) {
  return `
    <div class="flex gap-2 mb-1">
      <!-- Hình (40%) -->
      <div class="w-2/5 p-3">
        <img 
          src="${image}" 
          alt="demo" 
          class="w-full h-full object-cover rounded-lg shadow" 
        />
      </div>

      <!-- Nội dung (60%) -->
      <div class="w-3/5 flex flex-col p-2">
        <div class="text-left date-txt">
          ${date}
        </div>

        <!-- Title nếu cần mở lại -->
        <!--
        <div class="py-3">
          <div class="text-left font-bold text-lg line-clamp-2">
            ${title}
          </div>
        </div>
        -->

        <div class="text-left line-clamp-2" style="margin-top: 0.8125rem;">
          ${desc}
        </div>
      </div>
    </div>
  `;
}
