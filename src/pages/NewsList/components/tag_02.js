import image02 from "../../../assets/left/image_02.png";
import image03 from "../../../assets/left/image_03.png";
import image04 from "../../../assets/left/image_04.png";
import image05 from "../../../assets/left/image_05.png";

import NewsItem from "../../../components/NewsItem";
import Pagination from "../../../components/Pagination";

export default function tag_02() {
  const limit = 5;
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
      image: image03,
      date: "18/02/2025",
      title:
        "Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới",
      desc: "Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao",
    },
    {
      image: image04,
      date: "18/02/2025",
      title:
        "Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới",
      desc: "Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao",
    },
    {
      image: image05,
      date: "18/02/2025",
      title:
        "Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới",
      desc: "Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao",
    },
    {
      image: image04,
      date: "18/02/2025",
      title:
        "Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới",
      desc: "Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao",
    },
    {
      image: image05,
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
      date: "16/02/2025",
      title:
        "Viện Công nghệ - HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image03,
      date: "18/02/2025",
      title:
        "Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới",
      desc: "Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao",
    },
    {
      image: image04,
      date: "18/02/2025",
      title:
        "Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới",
      desc: "Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao",
    },
    {
      image: image05,
      date: "18/02/2025",
      title:
        "Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới",
      desc: "Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao",
    },
    {
      image: image04,
      date: "18/02/2025",
      title:
        "Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới",
      desc: "Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao",
    },
    {
      image: image05,
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
      date: "16/02/2025",
      title:
        "Viện Công nghệ - HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image03,
      date: "18/02/2025",
      title:
        "Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới Trường Đại học mở chương trình đào tạo mới",
      desc: "Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao Chương trình nhằm đáp ứng nhu cầu nhân lực chất lượng cao",
    },
    {
      image: image04,
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
    <main class="px-6 pb-6">
      ${Pagination({
        data: newsData,
        limit: limit,
        renderItem: (item) => NewsItem(item),
      })}
    </main>
  `;
}
