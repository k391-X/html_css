// Sử dụng trong trang thanh toán

export default function PaymentOption({ icon, label, selected = false }) {
  return `
    <div 
      class="payment-option flex items-center rounded-[5px] min-w-[150px] border border-[#EDEDED] max-w-[300px] max-h-[50px] p-3 cursor-pointer transition-all duration-200 relative
        ${selected ? 'active' : ''}"
    >

      <!-- Icon phương thức -->
      <img 
        src="${icon}" 
        alt="${label}" 
        class="w-[24px] h-[24px] object-cover z-10" 
      />

      <!-- Tên hiển thị -->
      <div class="md:ml-3 text-[14px] font-[600] text-[#161616]">
        ${label}
      </div>

      <!-- Icon check -->
      <div class="check-icon hidden ml-auto w-[24px] h-[24px] rounded-full bg-[#2BBEF9] flex items-center justify-center">
        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M6 12L10 16L18 8" 
            stroke="white" 
            stroke-width="3" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  `;
}
