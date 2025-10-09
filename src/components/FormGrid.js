import IconExpand from "../assets/icons/expand_more_24px.svg";

export default function FormGrid({ fields = [] }) {
  // Dùng Tailwind grid để đảm bảo 2 cột trên desktop, 1 cột trên mobile
  const fieldHTML = fields
    .map((f) => {
      if (f.type.trim() === "input") {
        return `
          <div class="w-full">
            <input
              name="${f.name}"
              type="${f.inputType || "text"}"
              placeholder="${f.placeholder || ""}"
              class="border border-[#EDEDED] w-full h-[40px] px-3 rounded-[4px]
                     text-[14px] text-[#161616] leading-[40px] min-w-[150px]
                     placeholder:text-[#A5A5A5] focus:outline-none custom-input-login"
            />
          </div>
        `;
      } else if (f.type.trim() === "select") {
        const optionsHTML = f.options
          .map(
            (opt) =>
              `<option value="${opt.value}" class="text-[#161616]">${opt.label}</option>`
          )
          .join("");

        return `
          <div class="w-full relative">
            <select
              name="${f.name}"
              class="border border-[#EDEDED] w-full h-[40px] appearance-none px-3 pr-8 leading-[normal]
                     rounded-[4px] text-[14px] text-[#A5A5A5] focus:outline-none custom-input-login
                     min-w-[150px]"
              onchange="this.style.color='#161616';"
            >
              <option value="" disabled selected hidden>${f.placeholder || "Chọn"}</option>
              ${optionsHTML}
            </select>
            <img
              src="${IconExpand}"
              alt="expand"
              class="w-[20px] h-[20px] object-cover absolute top-3 right-2 pointer-events-none"
            />
          </div>
        `;
      } else {
        return "";
      }
    })
    .join("");

  // Sử dụng Tailwind grid, tự động chia 2 cột trên màn hình lớn
  return `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-[10px] items-center">
      ${fieldHTML}
    </div>
  `;
}
