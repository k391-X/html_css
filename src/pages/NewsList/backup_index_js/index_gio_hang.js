import HomeIcon from "../../assets/home_icon.svg";
import Tag01 from "./components/tag_01_gio_hang";
import Tag02 from "./components/tag_02_gio_hang";

export default function NewsList() {
  return `
    <main class="flex-grow px-3 sm:px-4 md:px-6 pb-4 w-full">
      <!-- Thanh điều hướng -->
      <div class="bg-[#F5F4F4] w-full flex items-center px-3 sm:px-4 py-2 md:py-3">
        <img 
          src="${HomeIcon}" 
          alt="Trang chủ" 
          class="cursor-pointer w-5 h-5 md:w-6 md:h-6"
        />
        <div class="px-[6px] md:px-[8px] text-[#656565]">/</div>
        <div class="text-[#2BBEF9] text-[14px] sm:text-[15px] md:text-[16px] font-[400]">
          Tài khoản
        </div>
      </div>

      <!-- Phần nội dung -->
      <div class="mt-3 flex flex-row gap-3 sm:gap-4 md:gap-6">
        <div class="w-[35%] sm:w-[30%] md:w-1/5 min-w-[130px]">
          ${Tag01()}
        </div>

        <div class="w-[65%] sm:w-[70%] md:w-4/5 overflow-hidden">
          ${Tag02()}
        </div>
      </div>
    </main>
  `;
}
