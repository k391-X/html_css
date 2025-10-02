import image02 from "../../../assets/left/image-02.png";
import NewsItem03 from "../../../components/NewsItem03";

export default function tag_04() {
  const limit = 5;
  const shuffle = false;

  const newsData = [
    {
      image: image02,
      date: "16/02/2025",
      title:
        "Viện Công nghệ - HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
      author: "Nguyễn Thiên Tuế",
      price: "72,000",
      view: "4206"
    },
        {
      image: image02,
      date: "16/02/2025",
      title:
        "Viện Công nghệ - HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
      author: "Nguyễn Thiên Tuế",
      price: "72,000",
      view: "4206"
    },
        {
      image: image02,
      date: "16/02/2025",
      title:
        "Viện Công nghệ - HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
      author: "Nguyễn Thiên Tuế",
      price: "72,000",
      view: "4206"
    },
        {
      image: image02,
      date: "16/02/2025",
      title:
        "Viện Công nghệ - HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
      author: "Nguyễn Thiên Tuế",
      price: "72,000",
      view: "4206"
    },
        {
      image: image02,
      date: "16/02/2025",
      title:
        "Viện Công nghệ - HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
      author: "Nguyễn Thiên Tuế",
      price: "72,000",
      view: "4206"
    },
        {
      image: image02,
      date: "16/02/2025",
      title:
        "Viện Công nghệ - HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ HaUI tổ chức thành công hai hội thảo khoa học công nghệ",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
      author: "Nguyễn Thiên Tuế",
      price: "72,000",
      view: "4206"
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
    <main class="p-6">
      ${displayItems.map((item) => NewsItem03(item)).join("")}
    </main>
  `;
}
