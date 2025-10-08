import Vetor01 from "../../../assets/payment_success/Vector01.svg";
import Vetor02 from "../../../assets/payment_success/Vector02.svg";

export default function Tag01() {
  return `
        <div class="mt-20 flex flex-col items-center">
            
          <div class="relative w-[50px] h-[50px]">
            <!-- Phần tử 1 -->
            <img 
              src="${Vetor01}" 
              alt="demo" 
              class="w-[48px] h-[48px] object-cover absolute top-0 left-0 z-0" 
            />

            <!-- Phần tử 2 chồng lên phần tử 1 -->
            <img 
              src="${Vetor02}" 
              alt="demo" 
              class="w-[49px] h-[34px] object-cover absolute top-1 left-2 z-10" 
            />
          </div>

          <div class="mt-4 text-[#0455A4] font-[700] text-[24px]">
            Thanh toán thành công
          </div>

          <div class="mt-4 max-w-[260px] md:max-w-none">
            Gói cước 1 tháng đã được thanh toán thành công.
          </div>
          <div class="max-w-[260px] mt-2 md:max-w-none md:mt-0">
            Quý khách vui lòng quay lại trang để sử dụng dịch vụ.
          </div>

          <div class="mt-7">
              <div class="text-[#FFFFFF] font-[500] text-[18px] bg-[#2BBEF9] rounded-[5px] py-2 px-7 custom-btn-blue-chi-tiet-tcdt">
                Bắt đầu sử dụng
              </div>
          </div>
        </div>
  `;
}
