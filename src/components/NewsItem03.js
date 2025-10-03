import ShoppingCart from "../../src/assets/right/shopping_cart.svg";

export default function NewsItem03({ image, date, title, desc, author, price, view }) {
  return `
    <div class="flex gap-2 solid_item_tag04">
      <!-- Hình (40%) -->
      <div class="w-2/5 p-3">
        <img 
          src="${image}" 
          alt="demo" 
          class="w-full h-full object-cover rounded-lg shadow custom-img-zoom" 
        />
      </div>

      <!-- Nội dung (60%) -->
      <div class="w-3/5 flex flex-col py-3 pr-3">
        <!-- 
        <div class="text-left date-txt">
          ${date}
        </div>
        -->

        <!-- Title nếu cần mở lại -->
        <!--
        <div class="py-3">
          <div class="text-left line-clamp-2">
            ${title}
          </div>
        </div>
        -->

        <div class="text-left title-news-item-txt line-clamp-2">
          ${desc}
        </div>

        <div class="text-left line-clamp-1 author-news-items-txt my-4">
          ${author}
        </div>

        <div class="flex justify-between">
          <div>
            <div class="text-left line-clamp-1 price-news-items-txt mb-2">
              ${price}đ
            </div>

            <div class="text-left line-clamp-1 view-news-items-txt">
              ${view} lượt xem
            </div>
          </div>

          <div class="flex items-end pb-[2px]">
            <span>
              <img 
                src="${ShoppingCart}" 
                alt="demo" 
                class="w-full h-full object-cover rounded-lg shadow custom-img-zoom" 
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  `;
}
