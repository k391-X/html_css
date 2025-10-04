import image208 from "../../../assets/details_magazines/image 208.png";
import image193 from "../../../assets/magazines/image 193.png";
import image195 from "../../../assets/magazines/image 195.png";
import image477 from "../../../assets/magazines/image 477.png";

import facebook from "../../../assets/icons/chi_tiet_tap_chi_dien_tu/face_icon.svg";
import linkedin from "../../../assets/icons/chi_tiet_tap_chi_dien_tu/linkedin.svg";
import twitter from "../../../assets/icons/chi_tiet_tap_chi_dien_tu/twitter_icon.svg";
import shopping_cart from "../../../assets/icons/chi_tiet_tap_chi_dien_tu/white_shopping_cart.svg";
import arrow_down from "../../../assets/icons/chi_tiet_tap_chi_dien_tu/white_arrow_down.svg";

export default function tag_01() {
  return `
    <div class="flex flex-col md:flex-row">
        <!-- Cột trái -->
        <div class="w-full md:w-1/5">
            <div class="w-full max-h-[360px] book_shadow rounded-sm">
                <img src="${image193}" alt="demo" class="w-full h-full rounded-sm shadow custom-img-zoom object-cover" />
            </div>

            <div class="text-[16px] font-[400] text-[#18364D] mt-6 !line-clamp-2 custom-link-underline" title="Số 6/2025 Tạp chí Khoa học tự nhiên">
                Số 6/2025 Tạp chí Khoa học tự nhiên
            </div>
        </div>

        <!-- Cột phải -->
        <div class="w-full md:w-4/5 md:ml-6 mt-6 md:mt-0">
            <div class="font-[700] text-[20px] sm:text-[24px] text-[#484554] text-left">
                Đánh giá độ tin cậy của hệ thống cách điện cho các động cơ điện có điện áp thấp được điều khiển bởi biến tần PWMt
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center my-3">
                <div class="text-[16px] font-[400] text-[#18364D]">Tác giả:</div>
                <div class="sm:ml-3 text-[14px] sm:text-[16px] font-[600] text-[#484554]">
                    Vũ Thị Yến, Trần Đức Hiệp, Phạm Thế Vũ, Phạm Trung Hiếu
                </div>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div class="flex flex-col sm:flex-row gap-3 sm:gap-6 text-[#656565]">
                    <div>Lượt xem: <span class="text-[#2BBEF9]">15</span></div>
                    <div>Lượt mua: <span class="text-[#2BBEF9]">15</span></div>
                    <div>Lượt trích dẫn: <span class="text-[#2BBEF9]">15</span></div>
                </div>

                <div class="flex items-center gap-4">
                    <img src="${facebook}" alt="demo" class="w-5 h-5 sm:w-6 sm:h-6 custom-img-zoom" />
                    <img src="${linkedin}" alt="demo" class="w-5 h-5 sm:w-6 sm:h-6 custom-img-zoom" />
                    <img src="${twitter}" alt="demo" class="w-5 h-5 sm:w-6 sm:h-6 custom-img-zoom" />
                </div>
            </div>

            <!-- Phần giá tiền -->
            <div class="flex flex-col md:flex-row mt-6 gap-6">
                <!-- Cột thông tin -->
                <div class="w-full md:w-1/2 grid grid-cols-3 gap-x-6 gap-y-2 text-left text-[14px] sm:text-[16px] font-[400] text-[#656565] custom-border-details-magazine">
                    <div>Danh mục tạp chí:</div>
                    <div class="col-span-2 text-[#161616]"></div>

                    <div>Nhà xuất bản:</div>
                    <div class="col-span-2 text-[#161616]">NXB Khoa học</div>

                    <div>Năm xuất bản:</div>
                    <div class="col-span-2 text-[#161616]">2025</div>

                    <div>Số trang:</div>
                    <div class="col-span-2 text-[#161616]">5 trang</div>

                    <div>Mã ISBN:</div>
                    <div class="col-span-2 text-[#161616]"></div>
                </div>

                <!-- Cột giá + mua -->
                <div class="w-full md:w-1/2 grid grid-cols-[2fr_auto_3fr] gap-y-5 md:gap-x-2 xl:gap-x-0 text-[14px] sm:text-[16px] font-[400] text-[#656565] items-center">
                    
                    <!-- Dòng 1 -->
                    <div class="text-left">Giá tiền:</div>
                    <div></div>
                    <div class="pl-1 xl:pl-[30px] text-[20px] sm:text-[24px] font-[700] text-[#2BBEF9] text-left">72.000đ</div>

                    <!-- Dòng 2 -->
                    <div class="text-left flex items-center">Chọn mua gói:</div>
                    <div class="flex items-center justify-center">
                        <label class="custom-checkbox custom-checkbox-chi-tiet-tcdt">
                            <input type="checkbox" checked>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="pl-1 xl:pl-[30px] flex items-center gap-3">
                        <div class="min-w-[100px] sm:min-w-[130px] h-[35px] sm:h-[40px] bg-[#FF853F] rounded-[5px] flex items-center justify-between px-3 custom-btn-orange-chi-tiet-tcdt">
                            <span class="text-[#000000] text-[14px] sm:text-[16px]">1 tháng</span>
                            <img src="${arrow_down}" alt="demo" class="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]" />
                        </div>
                        <span class="font-[500] text-[#656565] whitespace-nowrap">150.000đ</span>
                    </div>

                    <!-- Dòng 3 -->
                    <div class="font-[700] text-left">Cho vào giỏ hàng:</div>
                    <div></div>
                    <div class="pl-1 xl:pl-[30px]">
                        <div class="min-w-[160px] sm:min-w-[200px] h-[40px] sm:h-[45px] bg-[#0455A4] rounded-[5px] flex items-center justify-center text-white custom-btn-blue-chi-tiet-tcdt">
                            <span class="text-[16px] sm:text-[18px] font-[400]">MUA HÀNG</span>
                            <img src="${shopping_cart}" alt="cart" class="ml-3 w-[18px] sm:w-[20px] h-[18px] sm:h-[20px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `;
}
