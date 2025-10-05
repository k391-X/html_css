import Tag01 from "./components/tag_01_trang_chi_tiet_tap_chi_dien_tu.js";
import Tag02 from "./components/tag_02_trang_chi_tiet_tap_chi_dien_tu.js";
import Tag03 from "./components/tag_03_trang_chi_tiet_tap_chi_dien_tu.js";


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

      <!-- Main content: Tag01 - Review sách -->
      <div class="">

        <!-- Cột trái: Tag01 -->
        <div class="mt-12">
          ${Tag01()}
        </div>

        <!-- Nội dung Tag02 -->
        <div class="mt-[50px]">
            ${Tag02()}
        </div>

        <!-- Nội dung Tag03 -->
        <div class="mt-[75px]">
          ${Tag03()}
        </div>

      </div>
    </main>
  `;
}
