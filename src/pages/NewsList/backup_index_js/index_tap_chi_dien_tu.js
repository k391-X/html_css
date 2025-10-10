import Tag01 from "./components/tag_01_tap_chi_dien_tu.js";
import MobileTag01 from "./components/mobile_tag_01_tap_chi_dien_tu.js";
import Tag02 from "./components/tag_02_tap_chi_dien_tu.js";

import HomeIcon from "../../assets/home_icon.svg";
import SortIcon from "../../assets/icons/sort.svg";
import Banner from "../../assets/magazines/banner_tap_chi_dien_tu.png";

export default function NewsList() {
  const html = `
    <main class="min-h-screen px-4 pb-4">

      <!-- Banner -->
      <div class="relative w-full">
        <img src="${Banner}" alt="Banner" class="w-full min-h-[100px] object-cover" />

        <div class="absolute inset-0 flex flex-col justify-start p-4 md:p-6 z-10 top-0 left-0">
          <span class="font-[700] text-xl md:text-[28px] text-[#0455A4] text-left">
            Tạp chí điện tử
          </span>

          <div class="flex items-center mt-2 text-[14px] md:text-[16px]">
            <img src="${HomeIcon}" alt="Home" class="w-5 h-5 md:w-6 md:h-6 cursor-pointer" />
            <span class="px-2">/</span>
            <span class="text-[#2BBEF9]">Tạp chí điện tử</span>
          </div>
        </div>
      </div>

      <!-- Main content -->
      <div class="flex">
        <!-- Cột trái: Tag01 (ẩn trên mobile) -->
        <div class="mt-12 hidden md:block">
          ${Tag01()}
        </div>

        <!-- Cột phải: Tag02 -->
        <div class="mt-[50px] flex-1">
          <div class="flex justify-between items-center">
            <span class="font-[700] text-xl md:text-[28px] text-[#0455A4]">
              Danh sách tạp chí
            </span>

            <!-- Nút mở modal -->
            <img 
              src="${SortIcon}" 
              alt="Sort" 
              class="w-[24px] h-[24px] object-cover custom-img-zoom-svg cursor-pointer ml-2 md:hidden"
              data-bs-toggle="modal" 
              data-bs-target="#filterModal"
            />
          </div>

          ${Tag02()}
        </div>
      </div>
    </main>

    <!-- Modal -->
    <div class="modal fade slide-up-modal" id="filterModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header !px-6 border-b !border-[#0455A4]">
            <h5 class="modal-title !font-[700] !text-[28px] !text-[#0455A4]">Bộ lọc</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <!-- Body có thể dài và scroll -->
          <div class="modal-body overflow-y-auto max-h-[70vh] !px-6">
            ${MobileTag01()}
          </div>

          <!-- Footer sticky -->
          <div class="modal-footer sticky bottom-0 bg-white !px-6 border-t !border-[#0455A4]">
            <button
              type="button"
              class="btn btn-primary !bg-[#0455A4] w-full"
              data-bs-dismiss="modal"
            >
              Áp dụng
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  return html;
}
