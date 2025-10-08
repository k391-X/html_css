import CheckOutline from "../../../assets/icons/check_circle.svg";
import CloseOutline from "../../../assets/icons/close_circle.svg";
import WaitOutline from "../../../assets/icons/wait_circle.svg";

export default function Tag02() {
  return `
    <div class="flex flex-col lg:flex-row items-start gap-6">
      <!-- Khối thông tin -->
      <div class="tag_02_right_chinh_sua_thong_tin py-4 px-2 w-full">
        <div>
          <div class="text-[20px] md:text-[22px] lg:text-[24px] font-[700] text-[#0455A4] text-center md:text-left pb-3 pl-4">
            Lịch sử giao dịch
          </div>
        </div>

        <div class="mt-6 overflow-x-auto">
          <table class="min-w-full text-sm md:text-base">
            <thead class="custom-header-table-lich-su-giao-dich bg-[#6bcce24d] text-left">
              <tr>
                <th class="py-3 px-4">STT</th>
                <th class="py-3 px-4">Thời gian</th>
                <th class="py-3 px-4">Số tiền</th>
                <th class="py-3 px-4">Tổng</th>
                <th class="py-3 px-4">Nội dung</th>
                <th class="py-3 px-4">Trạng thái</th>
              </tr>
            </thead>
            <tbody class="text-[#484554]">
              <tr class="border-b border-[#E5E5E5]">
                <td class="py-3 px-4 text-[#656565]">1</td>
                <td class="py-3 px-4 text-[#656565]">16:53  02/10/2025</td>
                <td class="py-3 px-4 text-[#656565]">72.000đ</td>
                <td class="py-3 px-4 text-[#2BBEF9]">72.000đ</td>
                <td class="py-3 px-4 max-w-[300px] line-clamp-5">Đánh giá độ tin cậy của hệ thống cách điện cho các động cơ điện có điện áp thấp được điều khiển bởi biến tần PWMt</td>
                <td class="py-3 px-4 text-[#FF853F]"> 
                  <div class="flex items-center custom-success-color">
                      <img src="${CheckOutline}" alt="demo" class="w-[20px] h-[20px] rounded-lg" />
                      <span class="ml-1">
                        Hoàn thành
                      </span>
                  </div>
                </td>
              </tr>
              <tr class="border-b border-[#E5E5E5]">
                <td class="py-3 px-4 text-[#656565]">2</td>
                <td class="py-3 px-4 text-[#656565]">16:53  02/10/2025</td>
                <td class="py-3 px-4 text-[#656565]">72.000đ</td>
                <td class="py-3 px-4 text-[#2BBEF9]">72.000đ</td>
                <td class="py-3 px-4 max-w-[300px] line-clamp-5">Đánh giá độ tin cậy của hệ thống cách điện cho các động cơ điện có điện áp thấp được điều khiển bởi biến tần PWMt</td>
                <td class="py-3 px-4 text-[#FF853F]">
                  <div class="flex items-center custom-error-color">
                      <img src="${CloseOutline}" alt="demo" class="w-[20px] h-[20px] rounded-lg" />
                      <span class="ml-1">
                        Thất bại
                      </span>
                  </div>
                </td>
              </tr>
              <tr class="border-b border-[#E5E5E5]">
                <td class="py-3 px-4 text-[#656565]">3</td>
                <td class="py-3 px-4 text-[#656565]">16:53  02/10/2025</td>
                <td class="py-3 px-4 text-[#656565]">72.000đ</td>
                <td class="py-3 px-4 text-[#2BBEF9]">72.000đ</td>
                <td class="py-3 px-4 max-w-[300px] line-clamp-5">Đánh giá độ tin cậy của hệ thống cách điện cho các động cơ điện có điện áp thấp được điều khiển bởi biến tần PWMt</td>
                <td class="py-3 px-4 text-[#FF853F]"> 
                  <div class="flex items-center custom-wait-color">
                      <img src="${WaitOutline}" alt="demo" class="w-[20px] h-[20px] rounded-lg" />
                      <span class="ml-1">
                        Đang xử lý
                      </span>
                  </div>
                </td>
              </tr>

              <tr class="border-b border-[#E5E5E5]">
                <td class="py-3 px-4 text-[#656565]"></td>
                <td class="py-3 px-4 text-[#656565]">16:53  02/10/2025</td>
                <td class="py-3 px-4 text-[#656565]">72.000đ</td>
                <td class="py-3 px-4 text-[#2BBEF9]">72.000đ</td>
                <td class="py-3 px-4 max-w-[300px] line-clamp-5">Đánh giá độ tin cậy của hệ thống cách điện cho các động cơ điện có điện áp thấp được điều khiển bởi biến tần PWMt</td>
                <td class="py-3 px-4 text-[#FF853F]"> 
                  <div class="flex items-center custom-error-color">
                      <img src="${CloseOutline}" alt="demo" class="w-[20px] h-[20px] rounded-lg" />
                      <span class="ml-1">
                        Đã hủy bỏ
                      </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}
