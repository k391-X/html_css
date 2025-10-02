import Tag01 from "./components/tag_01.js";
import Tag02 from "./components/tag_02.js";
import Tag03 from "./components/tag_03.js";
import Tag04 from "./components/tag_04.js";

export default function NewsList() {
  return `
<main class="flex flex-col md:flex-row min-h-screen gap-4 p-4">
  <!-- Cột trái 60% trên desktop -->
  <div class="flex-1 md:basis-3/4 flex flex-col gap-4 overflow-y-auto">
    <div>
      ${Tag01()}
    </div>

    <div>
      ${Tag02()}
    </div>
  </div>

  <!-- Cột phải 40% trên desktop -->
  <div class="flex-1 md:basis-1/4 flex flex-col gap-4 overflow-y-auto">
    <div>
      <div class="text-left title-txt">
        Tin nổi bật
      </div>
    
      <div class="border-[#2bbef9] border-t-[2px] my-4">
      </div>
    
      <div>
        ${Tag03()}
      </div>
    </div>
    
    <div>
      <div class="text-left title-txt">
        Tạp chí có nhiều lượt đọc
      </div> 
      
      <div class="my-4 border-[#2bbef9] border-b-[2px]">
      </div>
      
      <div>
        ${Tag04()}
      </div>
    </div>
  </div>
</main>
  `;
}
