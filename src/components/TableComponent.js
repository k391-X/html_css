// TableComponent.js
import CheckOutline from "../assets/icons/check_circle.svg";
import CloseOutline from "../assets/icons/close_circle.svg";
import WaitOutline from "../assets/icons/wait_circle.svg";

export default function TableComponent(data) {
  const getStatus = (status) => {
    switch (status) {
      case "success":
        return {
          icon: CheckOutline,
          label: "Hoàn thành",
          className: "custom-success-color text-[#16A34A]",
        };
      case "error":
        return {
          icon: CloseOutline,
          label: "Thất bại",
          className: "custom-error-color text-[#DC2626]",
        };
      case "wait":
        return {
          icon: WaitOutline,
          label: "Đang xử lý",
          className: "custom-wait-color text-[#F59E0B]",
        };
      default:
        return {
          icon: WaitOutline,
          label: "Không xác định",
          className: "text-gray-400",
        };
    }
  };

  // Bảng chính (desktop + tablet)
  const tableView = `
    <div class="mt-6 overflow-x-auto hidden md:block">
      <table class="min-w-[700px] md:min-w-full text-sm md:text-base border-collapse rounded-xl overflow-hidden">
        <thead class="bg-[#6bcce24d] text-left sticky top-0 z-10">
          <tr>
            <th class="py-3 px-4 w-[50px]">STT</th>
            <th class="py-3 px-4 w-[160px]">Thời gian</th>
            <th class="py-3 px-4 w-[120px]">Số tiền</th>
            <th class="py-3 px-4 w-[120px]">Tổng</th>
            <th class="py-3 px-4 w-[300px]">Nội dung</th>
            <th class="py-3 px-4 w-[160px]">Trạng thái</th>
          </tr>
        </thead>
        <tbody class="text-[#484554] bg-white">
          ${data
            .map((item, index) => {
              const s = getStatus(item.status);
              return `
                <tr class="border-b border-[#E5E5E5] hover:bg-[#f9fafb] transition-colors duration-150">
                  <td class="py-3 px-4 text-[#656565]">${index + 1}</td>
                  <td class="py-3 px-4 text-[#656565]">${item.time}</td>
                  <td class="py-3 px-4 text-[#656565]">${item.amount}</td>
                  <td class="py-3 px-4 text-[#2BBEF9]">${item.total}</td>
                  <td class="py-3 px-4 text-[#656565] text-left max-w-[300px] line-clamp-5">
                    ${item.content}
                  </td>
                  <td class="py-3 px-4">
                    <div class="flex items-center ${s.className} whitespace-nowrap">
                      <img src="${s.icon}" alt="${s.label}" class="w-[20px] h-[20px]" />
                      <span class="ml-1">${s.label}</span>
                    </div>
                  </td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;

  // Dạng thẻ (mobile)
  const cardView = `
    <div class="block md:hidden mt-4 space-y-4">
      ${data
        .map((item, index) => {
          const s = getStatus(item.status);
          return `
            <div class="border border-[#E5E5E5] rounded-xl p-4 shadow-sm bg-white">
              <div class="flex justify-between items-center mb-2">
                <span class="font-semibold text-[#0455A4]">#${index + 1}</span>
                <div class="flex items-center ${s.className}">
                  <img src="${s.icon}" alt="${s.label}" class="w-[18px] h-[18px]" />
                  <span class="ml-1 text-sm">${s.label}</span>
                </div>
              </div>
              <div class="text-[#484554] text-sm">
                <div><strong>Thời gian:</strong> ${item.time}</div>
                <div><strong>Số tiền:</strong> ${item.amount}</div>
                <div><strong>Tổng:</strong> <span class="text-[#2BBEF9]">${item.total}</span></div>
                <div><strong>Nội dung:</strong> ${item.content}</div>
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;

  return tableView + cardView;
}
