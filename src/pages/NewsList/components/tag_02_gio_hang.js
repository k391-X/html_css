import Camera from "../../../assets/icons/chinh_sua_thong_tin/linked_camera_24px.svg";
import Image208 from "../../../assets/shopping_cart/image 208.png";

import IconDelete from "../../../assets/icons/delete_forever_24px.svg";

export default function Tag02() { 
  return `
  <div class="flex flex-col lg:flex-row items-start md:items-center gap-6 lg:gap-0">
    <!-- Khối thông tin -->
    <div class="tag_02_right_chinh_sua_thong_tin py-4 px-2 w-full lg:w-2/3">
      <div class="text-[20px] md:text-[22px] lg:text-[24px] font-[700] text-[#0455A4]">
        Giỏ hàng của bạn
      </div>

      <div class="flex mt-8">
        <div class="max-w-[75px] max-h-[100px] custom-border-shopping-cart w-full h-full">
          <img src="${Image208}" alt="demo" class="w-full h-auto rounded-lg shadow custom-img-zoom" />
        </div>

        <div class="ml-6 max-h-[100px] flex flex-col justify-between w-full">
          <div class="flex justify-between">
            <div class="text-[14px] font-[600] text-[#484554] max-w-[390px]">
              Đánh giá độ tin cậy của hệ thống cách điện cho các động cơ điện có điện áp thấp được điều khiển bởi biến tần PWMt
            </div>

            <div class="text-[16px] font-[400] text-[#2BBEF9] max-w-[100px]">
              72.000đ
            </div>
          </div>

          <div class="flex justify-between">
            <div class="max-w-[390px] flex">
              <div class="w-[26px] h-[26px] text-center rounded-[5px] bg-[#D9D9D9]">
                -
              </div>

              <div class="text-center px-6">
                1
              </div>

              <div class="w-[26px] h-[26px] text-center rounded-[5px] bg-[#D9D9D9]">
                +
              </div>
            </div>

            <div class="max-w-[24px] max-h-[24px]">
              <img src="${IconDelete}" alt="demo" class="w-full h-auto rounded-lg shadow custom-img-zoom" />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 flex">
        <div class="text-[14px] font-[600] text-[#FF853F] rounded-[5px] custom-border-bought px-5 py-1">
          Mua thêm
        </div>
      </div>
    </div>
  </div>
  `;
}
