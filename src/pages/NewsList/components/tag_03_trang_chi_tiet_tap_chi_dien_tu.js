import NewsItem from "../../../components/NewsItem_tag03_trang_chi_tiet_tap_chi_dien_tu";

export default function tag_03() {
  const articles = [
    {
      title: "Mô hình hóa hệ cầu trục xét tới yếu tố rung lắc dọc trục",
      author: "Vũ Thị Yến, Trần Đức Hiệp, Phạm Thế Vũ, Phạm Trung Hiếu"
    },
    {
      title: "Nghiên cứu ảnh hưởng của điện gió công suất nhỏ vào lưới điện hạ thế",
      author: "Trương Đình Nhơn, Hoàng An Quốc"
    },
    {
      title: "Nghiên cứu thiết kế chế tạo thiết bị giám sát máy biến áp",
      author: "Phạm Văn Hùng, Đỗ Mạnh Dũng, Phạm Văn Minh"
    },
    {
      title: "Nghiên cứu ảnh hưởng của điện gió công suất nhỏ vào lưới điện hạ thế",
      author: "Trương Đình Nhơn, Hoàng An Quốc"
    },
    {
      title: "Nghiên cứu thiết kế chế tạo thiết bị giám sát máy biến áp",
      author: "Phạm Văn Hùng, Đỗ Mạnh Dũng, Phạm Văn Minh"
    },
        {
      title: "Nghiên cứu thiết kế chế tạo thiết bị giám sát máy biến áp",
      author: "Phạm Văn Hùng, Đỗ Mạnh Dũng, Phạm Văn Minh"
    },
  ];

  return `
    <div class="text-left">
      <div class="text-[28px] font-[700] text-[#0455A4]">
        Các bài viết khác
      </div>

      <div class="mt-[25px] flex flex-col gap-4">
        ${articles.map(item => NewsItem(item.title, item.author)).join("")}
      </div>
    </div>
  `;
}
