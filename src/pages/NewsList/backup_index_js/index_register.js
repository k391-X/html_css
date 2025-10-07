import ImageLogin from "../../assets/login/login.png";

import IconHide from "../../assets/icons/visibility_off_24px_rounded.svg";
import IconGoogle from "../../assets/icons/google.svg";
import IconFacebook from "../../assets/icons/face_icon.svg";

export default function NewsList() {
  return `
    <main class="flex-grow px-6 pb-4 w-full">
      <!-- mobile & tablet: column (stacked), desktop (lg): row -->
      <div class="flex flex-col lg:flex-row items-center lg:items-start pt-[80px]">

        <!-- Ảnh (stacked trên mobile/tablet, left trên desktop) -->
        <div class="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
          <img 
            src="${ImageLogin}" 
            alt="demo" 
            class="w-full max-w-[600px] md:max-w-[520px] h-auto max-h-[300px] md:max-h-[380px] object-cover rounded-[13px] shadow" 
          />
        </div>

        <!-- Form (stacked dưới mobile/tablet, right trên desktop) -->
        <div class="w-full lg:w-1/2 lg:pl-[35px] lg:pr-[150px] text-left flex justify-center">
          <div class="w-full max-w-[400px]">
            <div class="text-[22px] sm:text-[28px] font-[700] text-[#0455A4]">
              ĐĂNG KÝ
            </div>

            <div class="text-[13px] sm:text-[14px] font-[300] text-[#000000] mt-1">
              Chào mừng bạn đến với Nền tảng xuất bản Tạp chí điện tử
            </div>

            <div class="mt-[14px] sm:mt-[18px] text-[14px] sm:text-[16px] font-[500] text-[#717171]">
              Đã có tài khoản? 
                <a href="#" class="text-link-register hover:underline">Đăng nhập</a>
            </div>

            <!-- Họ và tên -->
            <div class="mt-[24px] sm:mt-[18px] text-[14px] font-[600] text-[#484554]">
              Họ và tên <span class="text-[#E52B2F]">*</span>
            </div>
            <div class="mt-[10px] sm:mt-[14px]">
              <input type="text" name="email" placeholder="Nhập họ và tên" 
                class="w-full h-[44px] sm:h-[47px] custom-input-login"/>
            </div>

            <!-- Email -->
            <div class="mt-[24px] sm:mt-[18px] text-[14px] font-[600] text-[#484554]">
              Email <span class="text-[#E52B2F]">*</span>
            </div>
            <div class="mt-[10px] sm:mt-[14px]">
              <input type="text" name="email" placeholder="Nhập email" 
                class="w-full h-[44px] sm:h-[47px] custom-input-login"/>
            </div>

            <!-- Password -->
            <div class="mt-[24px] sm:mt-[18px] text-[14px] font-[600] text-[#484554]">
              Mật khẩu <span class="text-[#E52B2F]">*</span>
            </div>
            <div class="mt-[10px] sm:mt-[14px] relative w-full">
              <input type="password" name="password" placeholder="Nhập mật khẩu" 
                class="w-full h-[44px] sm:h-[47px] custom-input-login"/>
              <img src="${IconHide}" alt="demo" 
                class="shadow custom-img-zoom absolute top-3 right-3 w-6 h-6 cursor-pointer" />
            </div>

            <!-- RePassword -->
            <div class="mt-[24px] sm:mt-[18px] text-[14px] font-[600] text-[#484554]">
              Nhập lại mật khẩu <span class="text-[#E52B2F]">*</span>
            </div>
            <div class="mt-[10px] sm:mt-[14px] relative w-full">
              <input type="password" name="password" placeholder="Nhập lại mật khẩu" 
                class="w-full h-[44px] sm:h-[47px] custom-input-login"/>
              <img src="${IconHide}" alt="demo" 
                class="shadow custom-img-zoom absolute top-3 right-3 w-6 h-6 cursor-pointer" />
            </div>

            <!-- Điều khoản sử dụng -->
            <div class="mt-[24px] sm:mt-[16px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div class="flex items-center">
                <label class="custom-checkbox custom-checkbox-chi-tiet-tcdt">
                  <input type="checkbox" checked>
                  <span class="checkmark"></span>
                </label>
                <div class="md:whitespace-nowrap ml-2 pt-1 text-[14px] font-[300] text-[#000000]">
                  Tôi đồng ý với các 
                    <span class="text-[14px] font-[600] text-[#000000] text-link-policy">
                      Điều khoản sử dụng 
                    </span>
                  và 
                    <span class="text-[14px] font-[600] text-[#000000] text-link-policy">
                      Chính sách bảo mật
                    </span>
                </div>
              </div>
            </div>

            <!-- Button + social -->
            <div class="mt-6">
              <div class="custom-btn-blue-login w-full sm:w-auto">
                <span>Đăng ký</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  `;
}
