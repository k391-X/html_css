import Tag01 from "./components/tag_01_tap_chi_dien_tu.js";
import Tag02 from "./components/tag_02_tap_chi_dien_tu.js";
import HomeIcon from "../../assets/home_icon.svg";
import Banner from "../../assets/magazines/banner_tap_chi_dien_tu.png";

export default function NewsList() {
  return `
    <main class="min-h-screen px-4 pb-4">

      <!-- Banner lớn với overlay text -->
      <div class="relative w-full">
        <img 
          src="${Banner}" 
          alt="Banner" 
          class="w-full min-h-[100px] object-cover"
        />

        <!-- Overlay text -->
        <div class="absolute inset-0 flex flex-col justify-start p-4 md:p-6 z-10 top-0 left-0">
          <!-- Tiêu đề -->
          <span class="font-[700] text-xl md:text-[28px] text-[#0455A4] text-left">
            Tạp chí điện tử
          </span>

          <!-- Breadcrumb -->
          <div class="flex items-center mt-2 text-[14px] md:text-[16px]">
            <img 
              src="${HomeIcon}" 
              alt="Home" 
              class="w-5 h-5 md:w-6 md:h-6 cursor-pointer" 
            />
            <span class="px-2">/</span>
            <span class="text-[#2BBEF9]">Tạp chí điện tử</span>
          </div>
        </div>
      </div>

      <!-- Main content: 2 cột responsive -->
      <div class="flex flex-col md:flex-row mt-4 gap-4">

        <!-- Cột trái: Tag01 -->
        <div class="w-full md:w-[30%] flex flex-col gap-4 overflow-y-auto pr-0 md:pr-4">
          ${Tag01()}
        </div>

        <!-- Cột phải: Tag02 -->
        <div class="w-full md:w-[70%] flex flex-col gap-4 overflow-y-auto">
          <!-- Tiêu đề danh sách -->
          <div class="flex flex-col gap-2">
            <span class="font-bold text-xl md:text-[28px] text-[#0455A4]">
              Danh sách tạp chí
            </span>
          </div>

          <!-- Nội dung Tag02 -->
          <div>
            ${Tag02()}
          </div>
        </div>

      </div>
    </main>
  `;
}
