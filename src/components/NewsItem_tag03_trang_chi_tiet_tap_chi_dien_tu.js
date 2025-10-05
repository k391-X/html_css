// NewsItem_tag03_trang_chi_tiet_tap_chi_dien_tu.js
export default function NewsItem(title, author) {
    return `
        <div class="news-item-tag-03-trang-chi-tiet-tap-chi-dien-tu mb-2 w-fit">
            <ul class="list-disc list-inside">
                <li class="text-[16px] font-[600] text-[#484554] break-words">
                    ${title}
                </li>
            </ul>
            <div class="pl-[1.5em] text-[14px] font-[400] text-[#A1A3A5] mt-1 break-words">
                ${author}
            </div>
        </div>
    `;
}
