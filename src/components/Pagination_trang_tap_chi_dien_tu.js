export default function Pagination({
  data,
  limit = 5,
  renderItem,
  isFirstLast = false,
}) {
  let currentPage = 1;
  const totalPages = Math.ceil(data.length / limit);

  // Hàm render một trang
  function renderPage(page) {
    const start = (page - 1) * limit;
    const end = start + limit;
    const items = data.slice(start, end);

    return `
      <!-- Grid items -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        ${items.map(renderItem).join("")}
      </div>

      <!-- Pagination controls -->
      ${renderControls(page)}
    `;
  }

  // Hàm render nút điều hướng
  function renderControls(page) {
    let pages = [];
    if (totalPages <= 7) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      pages.push(1);
      if (page > 3) pages.push("...");
      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (page < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    const style = `
      <style>
        .pagination { 
          display: flex; 
          gap: 0.5rem; 
          justify-content: center; 
          margin-top: 1rem; 
          flex-wrap: wrap; 
        }
        .pagination button {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          border: none;
          background: #ffffff;
          color: #333333;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          outline: none;
        }
        .pagination button.active {
          background: #32AAFF;
          color: #ffffff;
          font-weight: 600;
        }
        .pagination button:not(.active):not(.disabled):hover {
          background: #20C997;
          color: #ffffff;
        }
        .pagination button.disabled {
          opacity: 0.3;
          cursor: not-allowed;
          pointer-events: none;
        }
        .pagination .dots {
          display: flex;
          align-items: center;
          padding: 0.25rem 0.5rem;
          color: #666666;
        }
      </style>
    `;

    const prevButton =
      page > 1
        ? `<button data-page="${page - 1}" aria-label="Prev">
              <svg viewBox="0 0 24 24" fill="none" style="width:24px; height:24px;">
                <path d="M15 8 L11 12 L15 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>        
           </button>`
        : `<button class="disabled">‹</button>`;

    const nextButton =
      page < totalPages
        ? `<button data-page="${page + 1}" aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" style="transform: rotate(180deg); width:24px; height:24px;">
                <path d="M15 8 L11 12 L15 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>        
           </button>`
        : `<button class="disabled">›</button>`;

    const firstButton =
      isFirstLast && page !== 1 ? `<button data-page="1">« First</button>` : "";
    const lastButton =
      isFirstLast && page !== totalPages
        ? `<button data-page="${totalPages}">Last »</button>`
        : "";

    const pageButtons = pages
      .map((p) =>
        p === "..."
          ? `<span class="dots">...</span>`
          : `<button data-page="${p}" class="${
              p === page ? "active" : ""
            }">${p}</button>`
      )
      .join("");

    return `
      ${style}
      <div class="pagination">
        ${firstButton}
        ${prevButton}
        ${pageButtons}
        ${nextButton}
        ${lastButton}
      </div>
    `;
  }

  // Hàm render toàn bộ pagination
  function render() {
    return `<div id="pagination-container">${renderPage(currentPage)}</div>`;
  }

  // Gắn sự kiện click cho nút
  function attachEvents() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-page]");
      if (btn) {
        const newPage = parseInt(btn.getAttribute("data-page"));
        if (newPage >= 1 && newPage <= totalPages && newPage !== currentPage) {
          currentPage = newPage;
          document.getElementById("pagination-container").innerHTML =
            renderPage(currentPage);
        }
      }
    });
  }

  setTimeout(attachEvents, 0);
  return render();
}
