// ==============================
// Trang Thanh toán - Tag02 (thêm responsive mobile)
// ==============================

import IconGiaoHang from "../../../assets/icons/thanh_toan/giao_hang.svg";
import IconChuyenKhoan from "../../../assets/icons/thanh_toan/chuyen_khoan.svg";
import IconVNPAY from "../../../assets/icons/thanh_toan/vnpay.svg";

import PaymentOption from "../../../components/PaymentOption.js";
import FormGrid from "../../../components/FormGrid.js";

export default function Tag02() {

  // 1️⃣ Danh sách phương thức thanh toán
  const methods = [
    { id: "ck", icon: IconChuyenKhoan, label: "Thanh toán chuyển khoản", selected: true },
    { id: "vnpay", icon: IconVNPAY, label: "Thanh toán qua VNPay", selected: false },
    { id: "gh", icon: IconGiaoHang, label: "Thanh toán khi nhận hàng", selected: false },
  ];

  const paymentOptionsHTML = methods
    .map((m) =>
      PaymentOption({
        icon: m.icon,
        label: m.label,
        selected: m.selected,
      })
    )
    .join("");

  // 2️⃣ Form thông tin nhận hàng
  const fields = [
    { type: "input", name: "name", inputType: "text", placeholder: "Nhập họ tên" },
    { type: "input", name: "phone", inputType: "text", placeholder: "Nhập số điện thoại" },
    { type: "input", name: "email", inputType: "text", placeholder: "Nhập email" },
    { type: "input", name: "address", inputType: "text", placeholder: "Nhập địa chỉ giao hàng" },
    {
      type: "select",
      name: "city",
      placeholder: "Chọn Tỉnh / Thành phố",
      options: [
        { value: "", label: "Lựa chọn 1" },
        { value: "", label: "Lựa chọn 2" },
        { value: "", label: "Lựa chọn 3" },
      ],
    },
    {
      type: "select",
      name: "ward",
      placeholder: "Chọn Phường / Xã",
      options: [
        { value: "", label: "Lựa chọn 1" },
        { value: "", label: "Lựa chọn 2" },
        { value: "", label: "Lựa chọn 3" },
      ],
    },
  ];

  const fields02 = [
    { type: "input", name: "company", inputType: "text", placeholder: "Nhập tên công ty" },
    { type: "input", name: "email", inputType: "text", placeholder: "Nhập email" },
    { type: "input", name: "address", inputType: "text", placeholder: "Nhập địa chỉ" },
    { type: "input", name: "code", inputType: "text", placeholder: "Nhập mã số thuế" },
  ];

  const formGridHTML = FormGrid({ fields });
  const formGridHTML02 = FormGrid({ fields: fields02 });

  return `
    <div class="flex flex-col lg:flex-row items-start gap-6">
      <div class="py-4 pr-3 pl-3 lg:pl-6 w-full custom-border-DCDCDC flex flex-col lg:flex-row rounded-[5px]">

        <!-- Cột bên trái -->
        <div class="flex-1">
          <!-- Tiêu đề -->
          <div class="text-[20px] md:text-[22px] lg:text-[24px] font-[700] text-[#0455A4] text-center md:text-left">
            Thanh toán
          </div>

          <!-- Bước 1 -->
          <div class="mt-4 text-left">
            <div class="text-[16px] font-[700] text-[#484554] pl-1">1. Chọn phương thức thanh toán</div>
          </div>

          <!-- Responsive grid cho mobile -->
          <div class="mt-4 w-full max-w-[540px] grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
            ${paymentOptionsHTML}
          </div>

          <!-- Bước 2 -->
          <div class="mt-4 text-left">
            <div class="text-[16px] font-[700] text-[#484554] pl-1">2. Thông tin nhận hàng</div>
          </div>

          <div class="mt-4 w-full max-w-[540px]">
            ${formGridHTML}
          </div>

          <!-- Bước 3 -->
          <div class="mt-4 text-left">
            <div class="text-[16px] font-[700] text-[#484554] pl-1">3. Xuất hóa đơn công ty</div>
          </div>

          <div class="mt-4 mb-4 w-full max-w-[540px]">
            ${formGridHTML02}
          </div>
        </div>

        <!-- Cột bên phải -->
        <div class="rounded-[5px] bg-[#F6F6F6] px-4 py-3 w-full md:w-[300px] text-left lg:ml-4 h-max mt-8 lg:mt-16">
          <div class="text-[18px] font-[700] text-[#0455A4] border-b border-[#DCDCDC] pb-3 mb-3">Thông tin thanh toán</div>

          <div class="flex justify-between items-center text-[14px] text-[#000000] mt-3"><div>Tạm tính</div><div>72.000đ</div></div>
          <div class="flex justify-between items-center text-[14px] text-[#000000] mt-3"><div>Giảm giá</div><div>0đ</div></div>
          <div class="flex justify-between items-center text-[14px] text-[#000000] mt-3"><div>Phí vận chuyển</div><div>0đ</div></div>

          <div class="mt-3 text-[13px] text-[#656565]">
            Đối với sách giấy, phí ship tính theo đơn (không giới hạn số lượng) theo khu vực: miền Bắc 20k, miền Trung 25k, miền Nam 35k.
          </div>

          <div class="border-t border-[#DCDCDC] mt-3 mb-3"></div>

          <div class="flex justify-between items-center text-[14px] text-[#000000]">
            <div>Tổng cộng</div>
            <div class="text-[16px] font-[700] text-[#0455A4]">72.000đ</div>
          </div>

          <div class="mt-5">
            <div class="flex justify-center w-full rounded-[5px] px-3 custom-btn-blue-login">
              <!-- Hiển thị ở màn hình >= md -->
              <div class="hidden md:block text-[18px] font-[500] text-white py-1">
                Tiếp tục thanh toán
              </div>

              <!-- Hiển thị ở màn hình < md -->
              <div class="block md:hidden text-[18px] font-[500] text-white py-1">
                Thanh toán
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
