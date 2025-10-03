import Tag01 from "./components/tag_01_tap_chi_dien_tu.js";
import Tag02 from "./components/tag_02_tap_chi_dien_tu.js";
import HomeIcon from "../../assets/home_icon.svg";
import Banner from "../../assets/magazines/banner_tap_chi_dien_tu.png";

export default function NewsList() {
  return `
    <main class="md:flex-row min-h-screen gap-4 px-4 pb-4 w-full">

      <!-- Phần thanh điều hướng - Ngay dưới header -->
      <div class="relative">
        <!-- Banner lớn phía sau -->
        <div class="w-full">
          <img 
            src="${Banner}" 
            alt="demo" 
            class="" 
          />
        </div>
        <div class="absolute z-10 top-0 left-6">
          <div class="flex justify-start mt-6">
            <span class="font-[700] text-xl md:text-[28px] text-[#0455A4]">
              Tạp chí điện tử
            </span>
          </div>
          <div class="w-full h-[2rem] flex items-center mt-3 h-full">
            <img 
              src="${HomeIcon}" 
              alt="demo" 
              class="cursor-pointer" 
            />

            <div class="px-[8px]">/</div>

            <div class="text-[#2BBEF9]"> Tạp chí điện tử </div>
          </div>
        </div>
      </div>

      <div class="flex mt-4">
        <!-- Cột trái 30% trên desktop -->
        <div class="w-full md:w-[30%] flex flex-col gap-4 overflow-y-auto pr-4">
          <div>
            ${Tag01()}
          </div>
        </div>

        <!-- Cột phải 70% trên desktop -->
        <div class="w-full md:w-[70%] flex flex-col gap-4 overflow-y-auto">    
            <div class="flex flex-col gap-4 overflow-y-auto">
                <!-- Tiêu đề -->
                <div class="flex justify-start">
                    <span class="font-bold text-xl md:text-[28px] text-[#0455A4]">
                        Danh sách tạp chí
                    </span>
                </div>
            </div>      
          <div>
            ${Tag02()}
          </div>
        </div>
      </div>
    </main>
  `;
}
