import image from "../../../assets/left/image.png";

export default function tag_01() {
  return `
    <div class="flex flex-col gap-4 overflow-y-auto">
        <!-- Tiêu đề -->
        <div class="flex justify-start">
            <span class="font-bold text-xl md:text-[28px] text-[#0455A4]">
                Tin tức
            </span>
        </div>

        <!-- Nội dung chính -->
        <div class="flex flex-col md:flex-row gap-4">
            <!-- Ảnh -->
            <div class="w-full md:w-1/2">
                <img src="${image}" alt="demo" class="w-full h-auto rounded-lg shadow custom-img-zoom" />
            </div>

            <!-- Nội dung text -->
            <div class="w-full md:w-1/2 flex flex-col justify-between">
                <div class="text-base md:text-[20px] font-normal text-left custom-link-underline">
                    Cơ sở dữ liệu thống kê quốc gia - Chuyển đổi toàn diện việc sản xuất và sử dụng thông tin thống kê
                </div>

                <div class="flex my-3 md:my-5 text-left date-txt text-sm md:text-base">
                    <span>16/02/2025</span>
                </div>

                <div class="text-left font-normal text-sm md:text-[14px]">
                    Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc nhằm thực hiện Chiến lược phát triển Thống kê Việt Nam theo Quyết định số...
                </div>
            </div>
        </div>

        <!-- Gạch ngang -->
        <div class="border-b border-[#C1C7CD] my-4"></div>
    </div>
  `;
}
