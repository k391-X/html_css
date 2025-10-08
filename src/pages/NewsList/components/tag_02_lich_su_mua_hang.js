// Tag02.js
import TableComponent from "../../../components/TableComponent";

export default function Tag02() {
  const transactionData = [
    {
      time: "16:53 02/10/2025",
      amount: "72.000đ",
      total: "72.000đ",
      content:
        "Đánh giá độ tin cậy của hệ thống cách điện cho các động cơ điện có điện áp thấp được điều khiển bởi biến tần PWMt",
      status: "success",
    },
    {
      time: "16:53 02/10/2025",
      amount: "72.000đ",
      total: "72.000đ",
      content:
        "Đánh giá độ tin cậy của hệ thống cách điện cho các động cơ điện có điện áp thấp được điều khiển bởi biến tần PWMt",
      status: "error",
    },
    {
      time: "16:53 02/10/2025",
      amount: "72.000đ",
      total: "72.000đ",
      content:
        "Đánh giá độ tin cậy của hệ thống cách điện cho các động cơ điện có điện áp thấp được điều khiển bởi biến tần PWMt",
      status: "wait",
    },
  ];

  return `
    <div class="flex flex-col lg:flex-row items-start gap-6">
      <div class="py-4 px-2 w-full">
        <div class="text-[20px] md:text-[22px] lg:text-[24px] font-[700] text-[#0455A4] text-center md:text-left pb-3 pl-4">
          Lịch sử giao dịch
        </div>

        ${TableComponent(transactionData)}
      </div>
    </div>
  `;
}
