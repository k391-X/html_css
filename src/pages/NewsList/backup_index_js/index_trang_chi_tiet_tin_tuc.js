import Tag01 from "./components/tag_01.js";
import Tag02 from "./components/tag_02_trang_chi_tiet_tin_tuc.js";
import Tag03 from "./components/tag_03.js";
import Tag04 from "./components/tag_04.js";
import HomeIcon from "../../assets/home_icon.svg";

export default function NewsList() {
  return `
    <main class="min-h-screen gap-4 px-4 pb-4 w-full">

      <!-- Phần thanh điều hướng - Ngay dưới header -->
      <div class="bg-[#F5F4F4] w-full h-[2rem] flex items-center p-4 mb-2">
        <img 
          src="${HomeIcon}" 
          alt="demo" 
          class="cursor-pointer" 
        />

        <div class="px-[8px]">/</div>

        <div class="text-[#2BBEF9]"> Tin tức </div>
      </div>

      <!-- Layout chính -->
      <div class="flex flex-col md:flex-row gap-4">
        
        <!-- Cột trái 70% trên desktop -->
        <div class="w-full md:w-[70%] flex flex-col gap-4 overflow-y-auto">
          <div>
            ${Tag01()}
          </div>

          <div class="flex justify-start">
            <div class="font-[700] text-[28px] text-[#0455A4]">
              Các bài đã đăng
            </div>
          </div>
          <div>
            ${Tag02()}
          </div>
        </div>

        <!-- Cột phải 30% trên desktop -->
        <div class="w-full md:w-[30%] flex flex-col gap-4 overflow-y-auto">
          <div>
            <div class="text-left title-txt uppercase">
              Tin nổi bật
            </div>
          
            <div class="border-[#2bbef9] border-t-[2px] mt-4"></div>
          
            <div>
              ${Tag03()}
            </div>
          </div>
          
          <div>
            <div class="text-left title-txt uppercase">
              Tạp chí có nhiều lượt đọc
            </div> 
            
            <div class="my-4 border-[#2bbef9] border-b-[2px]"></div>
            
            <div>
              ${Tag04()}
            </div>
          </div>
        </div>
      </div>
    </main>
  `;
}
