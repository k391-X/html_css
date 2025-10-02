import image02 from "../../../assets/left/image-02.png";
import NewsItem02 from "../../../components/NewsItem02";

export default function tag_03() {
  const limit = 6;
  const shuffle = false;

  const newsData = [
    {
      image: image02,
      date: "16/02/2025",
      title:
        "Viện Công nghệ - HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image02,
      date: "18/02/2025",
      title:
        "Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới",
      desc: "Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao",
    },
    {
      image: image02,
      date: "18/02/2025",
      title:
        "Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới",
      desc: "Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao",
    },
    {
      image: image02,
      date: "18/02/2025",
      title:
        "Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới",
      desc: "Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao",
    },
    {
      image: image02,
      date: "18/02/2025",
      title:
        "Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới",
      desc: "Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao",
    },
    {
      image: image02,
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
    <main class="px-4">
      <div class="p-4 shadow-figma-card">
        ${displayItems.map((item) => NewsItem02(item)).join("")}
      </div>
    </main>
  `;
}
