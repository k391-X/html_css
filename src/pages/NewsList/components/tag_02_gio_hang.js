import Image208 from "../../../assets/shopping_cart/image 208.png";
import IconDelete from "../../../assets/icons/delete_forever_24px.svg";

export default function Tag02() { 
  return `
    <div class="flex flex-col lg:flex-row items-start gap-6">
      <!-- Khối thông tin -->
      <div class="tag_02_right_chinh_sua_thong_tin py-4 px-2 w-full lg:w-2/3">
        <div class="text-[20px] md:text-[22px] lg:text-[24px] font-[700] text-[#0455A4] text-center lg:text-left">
          Giỏ hàng của bạn
        </div>

        <div class="flex flex-col sm:flex-row sm:items-start mt-6 sm:mt-8 border-b border-[#E5E5E5] pb-4">
          <!-- Ảnh sản phẩm -->
          <div class="w-[75px] sm:w-[100px] flex-shrink-0 mx-auto sm:mx-0">
            <img src="${Image208}" alt="demo" class="w-full h-auto rounded-lg shadow custom-img-zoom" />
          </div>

          <!-- Thông tin sản phẩm -->
          <div class="mt-4 sm:mt-0 sm:ml-6 flex flex-col justify-between w-full">
            <div class="flex flex-col sm:flex-row sm:justify-between gap-2">
              <div class="text-[14px] font-[600] text-[#484554] sm:max-w-[380px] text-center sm:text-left">
                Đánh giá độ tin cậy của hệ thống cách điện cho các động cơ điện có điện áp thấp được điều khiển bởi biến tần PWM
              </div>

              <div class="text-[15px] sm:text-[16px] font-[400] text-[#2BBEF9] text-center sm:text-right">
                72.000đ
              </div>
            </div>

            <!-- Nút tăng giảm & xóa -->
            <div class="flex flex-col sm:flex-row justify-between items-center sm:items-end mt-3 sm:mt-0 gap-2 sm:gap-0">
              <div class="flex items-center justify-center sm:justify-start">
                <div class="custom-btn-plus">-</div>
                <div class="text-center px-5 sm:px-6">1</div>
                <div class="custom-btn-plus">+</div>
              </div>

              <div class="max-w-[24px] max-h-[24px] cursor-pointer">
                <img src="${IconDelete}" alt="demo" class="w-full h-auto rounded-lg shadow custom-img-zoom" />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex justify-center sm:justify-start">
          <div class="custom-btn-buy">
            Mua thêm
          </div>
        </div>
      </div>

      <!-- Khối thanh toán -->
      <div class="w-full lg:w-1/3 max-w-[300px] text-left mt-6 lg:mt-0 mx-auto lg:mx-0 bg-[#F9F9F9] p-4 rounded-[5px]">
        <div class="text-[18px] font-[700] text-[#0455A4] text-center lg:text-left">
          Thông tin thanh toán
        </div>

        <div class="flex justify-between items-center mt-6">
          <div class="text-[14px] font-[400] text-[#000000]">Tạm tính</div>
          <div class="text-[14px] font-[400] text-[#000000]">72.000đ</div>
        </div>

        <div class="flex justify-between items-center mt-2">
          <div class="text-[14px] font-[400] text-[#000000]">Giảm giá</div>
          <div class="text-[14px] font-[400] text-[#000000]">0đ</div>
        </div>

        <div class="flex justify-between items-center mt-2">
          <div class="text-[14px] font-[400] text-[#000000]">Phí vận chuyển</div>
          <div class="text-[14px] font-[400] text-[#000000]">0đ</div>
        </div>

        <div class="mt-3 text-[13px] font-[400] text-[#656565]">
          Đối với sách giấy, phí ship tính theo đơn (không giới hạn số lượng sách) theo khu vực: miền Bắc 20k, miền Trung 25k, miền Nam 35k
        </div>

        <div class="flex justify-between items-center mt-3">
          <div class="text-[14px] font-[400] text-[#000000]">Tổng cộng</div>
          <div class="text-[16px] font-[700] text-[#0455A4]">72.000đ</div>
        </div>

        <div class="mt-4 text-[16px] font-[500] text-[#FFFFFF] bg-[#2BBEF9] text-center py-2 rounded-[5px] custom-btn-blue-login cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#1CA6DC] hover:scale-105 active:scale-95">
          Đặt mua
        </div>
      </div>
    </div>
  `;
}
