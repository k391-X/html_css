import ImageLogin from "../../assets/login/login.png";

import IconHide from "../../assets/icons/visibility_off_24px_rounded.svg";
import IconGoogle from "../../assets/icons/google.svg";
import IconFacebook from "../../assets/icons/face_icon.svg";

export default function NewsList() {
  return `
    <main class="min-h-screen gap-4 px-6 pb-4 w-full">
      <div class="flex flex-col lg:flex-row pt-[80px]">
        
        <!-- Hình nền bên trái -->
          <div class="w-full lg:w-1/2 md:w-2/5 mb-6 lg:mb-0">
            <img 
              src="${ImageLogin}" 
              alt="demo" 
              class="w-full h-auto object-cover rounded-[13px] shadow" 
            />
          </div>

        <!-- Input bên phải -->
        <div class="w-full lg:w-1/2 md:w-3/5 lg:pl-[35px] lg:pr-[150px] text-left">
          <div class="text-[22px] sm:text-[28px] font-[700] text-[#0455A4]">
            ĐĂNG NHẬP
          </div>

          <div class="text-[13px] sm:text-[14px] font-[300] text-[#000000] mt-1">
            Chào mừng bạn đến với Nền tảng xuất bản Tạp chí điện tử
          </div>

          <div class="mt-[14px] sm:mt-[18px] text-[14px] sm:text-[16px] font-[500] text-[#717171]">
            Chưa có tài khoản? 
              <a href="#" class="text-link-register hover:underline">
                Đăng ký ngay
              </a>
          </div>

          <!-- Email -->
          <div class="mt-[24px] sm:mt-[30px] text-[14px] font-[600] text-[#484554]">
            Email <span class="text-[#E52B2F]">*</span>
          </div>
          <div class="mt-[10px] sm:mt-[14px]">
            <input type="text" name="email" placeholder="Nhập email" 
              class="w-full max-w-[400px] h-[44px] sm:h-[47px] custom-input-login"/>
          </div>

          <!-- Password -->
          <div class="mt-[24px] sm:mt-[30px] text-[14px] font-[600] text-[#484554]">
            Mật khẩu <span class="text-[#E52B2F]">*</span>
          </div>
          <div class="mt-[10px] sm:mt-[14px] relative w-full max-w-[400px]">
            <input type="password" name="password" placeholder="Nhập mật khẩu" 
              class="w-full h-[44px] sm:h-[47px] custom-input-login"/>
            <img src="${IconHide}" alt="demo" 
              class="shadow custom-img-zoom absolute top-3 right-3 w-6 h-6 cursor-pointer" />
          </div>

          <!-- Remember + Quên mật khẩu -->
          <div class="mt-[24px] sm:mt-[34px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div class="flex items-center">
              <label class="custom-checkbox custom-checkbox-chi-tiet-tcdt">
                <input type="checkbox" checked>
                <span class="checkmark"></span>
              </label>
              <div class="ml-2 pt-1 text-[14px] font-[400] text-[#717171]">
                Ghi nhớ đăng nhập
              </div>
            </div>

            <a href="#" class="pt-1 text-[14px] sm:text-[15px] font-[500] text-[#18364D] text-link-forget-password">
              Quên mật khẩu?
            </a>
          </div>

          <!-- Button + social -->
          <div class="mt-[24px] sm:mt-[30px] flex flex-col sm:flex-row items-center gap-4">
            <div class="custom-btn-blue-login w-full sm:w-auto">
              <span>Đăng nhập</span>
            </div>

            <div class="text-[14px] font-[400] text-[#656565] md:ml-7">Hoặc</div>

            <div class="flex items-center justify-center gap-6 md:ml-6">
              <img src="${IconGoogle}" alt="demo" class="w-[26px] h-[26px] object-cover rounded-[13px] shadow custom-img-zoom cursor-pointer"/> 
              <img src="${IconFacebook}" alt="demo" class="w-[26px] h-[26px] object-cover rounded-[13px] shadow custom-img-zoom cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
    </main>
  `;
}
