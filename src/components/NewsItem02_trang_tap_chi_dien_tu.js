export default function NewsItem02({ image, date, title, desc, name }) {
  return `
    <div class="">
      <!-- Hình (40%) -->
      <div class="w-full h-[200px] md:h-[270px] p-1">
        <img 
          src="${image}" 
          alt="demo" 
          class="w-full h-full object-cover rounded-lg shadow custom-img-zoom" 
        />
      </div>

      <!-- Nội dung (60%) -->
      <div class="flex text-left text-[14px] font-[600] text-[#18364D] w-full px-3">
        <div class="custom-link-underline title-news-item-txt !line-clamp-1" title="${name}">
          ${name}
        </div>
      </div>
    </div>
  `;
}
