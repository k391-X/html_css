import IconPerm from "../../../assets/icons/chinh_sua_thong_tin/perm_identity_24px.svg";
import IconAssignment from "../../../assets/icons/chinh_sua_thong_tin/assignment_ind_24px_rounded.svg";
import IconShoppingCart from "../../../assets/icons/add_shopping_cart_24px.svg";

export default function Tag01() {
  return `
  <div class="w-full">
    <!-- Tài khoản -->
    <div class="w-full bg-[#2BBEF9] rounded-[5px] flex items-center p-4 max-w-[230px] sm:max-w-full sm:p-3 min-h-[48px]">
      <img src="${IconPerm}" alt="demo" class="w-[29px] h-[27px] flex-shrink-0" />
      <span class="text-[16px] font-[500] text-[#FFFFFF] ml-2 leading-snug">
        Tài khoản
      </span>
    </div>

    <div class="mt-2 tag_01_left_chinh_sua_thong_tin text-left">
      <!-- Thông tin -->
      <div class="w-full rounded-[5px] flex items-center max-w-[230px] sm:max-w-full min-h-[48px]">
        <img src="${IconAssignment}" alt="demo" class="w-[29px] h-[27px] flex-shrink-0" />
        <span class="text-[16px] font-[700] text-[#484554] ml-2 leading-snug">
          Thông tin
        </span>
      </div>

      <div class="ml-2 md:ml-5 space-y-2 sm:space-y-4">
        <div class="bullet mt-4 md:mt-0 md:mb-1 text-[16px] font-[500] text-[#484554] custom-link py-2 min-h-[36px] cursor-pointer">
          Chỉnh sửa thông tin
        </div>

        <div class="bullet mt-4 md:mt-0 md:mb-1 text-[16px] font-[500] text-[#484554] custom-link py-2 min-h-[36px] cursor-pointer">
          Ví
        </div>
      </div>

      <!-- Quản lý đơn hàng -->
      <div class="w-full rounded-[5px] flex items-center max-w-[230px] sm:max-w-full mt-5 sm:mt-6 min-h-[48px]">
        <img src="${IconShoppingCart}" alt="demo" class="w-[29px] h-[27px] flex-shrink-0" />
        <span class="text-[16px] font-[700] text-[#484554] ml-2 leading-snug">
          Quản lý đơn hàng
        </span>
      </div>

      <div class="ml-2 md:ml-5 space-y-2 sm:space-y-4">
        <div class="bullet mt-4 md:mt-0 md:mb-1 text-[16px] font-[500] text-[#484554] custom-link py-2 min-h-[36px] cursor-pointer">
          Đơn mua
        </div>

        <div class="bullet mt-4 md:mt-0 md:mb-1 text-[16px] font-[500] text-[#484554] custom-link py-2 min-h-[36px] cursor-pointer">
          Lịch sử giao dịch
        </div>

        <div class="bullet mt-4 md:mt-0 md:mb-1 text-[16px] font-[500] text-[#484554] custom-link py-2 min-h-[36px] cursor-pointer">
          Thanh toán
        </div>
      </div>
    </div>
  </div>
  `;
}
