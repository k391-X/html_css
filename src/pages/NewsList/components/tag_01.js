import image from "../../../assets/left/image.png";

export default function tag_01() {
  return `
    <div class="flex flex-col gap-4 overflow-y-auto">
        <div class="flex justify-start">
            <span class="font-bold text-[28px] text-[#0455A4]">Tin tức</span>
        </div>

        <div class="flex gap-4">
            <div class="w-1/2">
                <img src="${image}" alt="demo" class="w-full h-auto rounded-lg shadow" />
            </div>
            <div class="w-1/2">

                <div class="text-[20px] font-[400] text-left">
                    Cơ sở dữ liệu thống kê quốc gia -  Chuyển đổi toàn diện việc sản xuất và sử dụng thông tin thống kê
                </div>

                <div class="flex my-5 text-left date-txt">
                    <span>16/02/2025</span>
                </div>

                <div class="text-left font-[400] text-[14px]">
                    Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc nhằm thực hiện Chiến lược phát triển Thống kê Việt Nam theo Quyết định số...
                </div>
            </div>
        </div>

        <div class="border-b-1 border-[#C1C7CD] my-4">
        </div>
    </div>
  `;
}