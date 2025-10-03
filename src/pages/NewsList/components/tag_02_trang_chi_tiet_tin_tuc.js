import image01 from "../../../assets/details/image_chi_tiet_tin_tuc.png";
import NewsItem02 from "../../../components/NewsItem02_trang_chi_tiet_tin_tuc";

export default function tag_02() {
  const limit = 4;
  const shuffle = false;

  const newsData = [
    {
      image: image01,
      date: "16/02/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image01,
      date: "16/02/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao",
    },
    {
      image: image01,
      date: "16/02/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao",
    },
    {
      image: image01,
      date: "16/02/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao",
    },
    {
      image: image01,
      date: "18/02/2025",
      title:
        "Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới",
      desc: "Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao",
    },
  ];

  // Hàm xáo trộn Fisher–Yates
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Xử lý dữ liệu hiển thị
  let displayItems = shuffle ? shuffleArray(newsData) : [...newsData];
  displayItems = displayItems.slice(0, limit);

  return `
    <main class="px-2">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
        ${displayItems.map((item) => NewsItem02(item)).join("")}
        </div>
    </main>
  `;
}
