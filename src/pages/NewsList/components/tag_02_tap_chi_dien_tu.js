import NewsItem02 from "../../../components/NewsItem02_trang_tap_chi_dien_tu";
import Pagination from "../../../components/Pagination_trang_tap_chi_dien_tu";

import image193 from "../../../assets/magazines/image 193.png";
import image195 from "../../../assets/magazines/image 195.png";
import image477 from "../../../assets/magazines/image 477.png";
import image478 from "../../../assets/magazines/image 478.png";
import image01 from "../../../assets/right/image_01.png";

export default function tag_02() {
  const limit = 20;
  const shuffle = false;
  const newsData = [
    {
      image: image193,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image195,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image193,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image195,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
        {
      image: image477,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image478,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image477,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image478,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },    
        {
      image: image193,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image195,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image193,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image193,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },    
        {
      image: image477,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image478,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image477,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image478,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },    
        {
      image: image193,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image195,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image193,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image195,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },    
        {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },    
        {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },    
        {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },    
        {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },    
        {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
    },
    {
      image: image01,
      date: "16/02/2025",
      name: "Tạp chí khoa học - Số 06/2025",
      title:
        "Ứng dụng trí tuệ nhân tạo AI trong báo chí: Tạo trải nghiệm mới cho bạn đọc",
      desc: "Giai đoạn 2021-2025, ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc ngành Thống kê tích cực triển khai nhiều phần việc",
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
    <main class="">
        ${Pagination({
        data: newsData,
        limit: limit,
        renderItem: (item) => NewsItem02(item),
        })}
    </main>
  `;

  
}
