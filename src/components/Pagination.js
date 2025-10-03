export default function Pagination({ data, limit = 5, renderItem, isFirstLast = false }) {
  let currentPage = 1;
  const totalPages = Math.ceil(data.length / limit);

  function renderPage(page) {
    const start = (page - 1) * limit;
    const end = start + limit;
    const items = data.slice(start, end);

    return `
      <div class="flex flex-col gap-4">
        ${items.map(renderItem).join("")}
      </div>
      ${renderControls(page)}
    `;
  }

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
        .pagination { display: flex; gap: 0.5rem; justify-content: center; margin-top: 1rem; flex-wrap: wrap; }
        .pagination button {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          border: none;           /* bỏ border */
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
          box-shadow: none;
        }
        .pagination button:focus {
          outline: none;
          box-shadow: none;
          border: none;            /* tránh border khi click */
        }
        .pagination button.active {
          background: #32AAFF;
          color: #ffffff;
          font-weight: 600;
        }
        .pagination button.disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .pagination .dots {
          display: flex;
          align-items: center;
          padding: 0.25rem 0.5rem;
          color: #666666;
        }
        .pagination svg {
          display: block;          /* đảm bảo svg hiển thị */
          width: 16px;
          height: 16px;
        }
      </style>
    `;

    const prevButton = page > 1
      ? `<button data-page="${page - 1}" aria-label="Prev">
           <svg viewBox="0 0 24 24" fill="none" style="height: 2rem; width:2rem">
             <path d="M15 8 L11 12 L15 16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
         </button>`
      : `<button class="disabled"></button>`;

    const nextButton = page < totalPages
      ? `<button data-page="${page + 1}" aria-label="Next">
           <svg viewBox="0 0 24 24" fill="none" style="transform: rotate(180deg);width: 2rem;height: 2rem;">
             <path d="M15 8 L11 12 L15 16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
         </button>`
      : `<button class="disabled"></button>`;

    const firstButton = isFirstLast && page !== 1 ? `<button data-page="1">« First</button>` : "";
    const lastButton = isFirstLast && page !== totalPages ? `<button data-page="${totalPages}">Last »</button>` : "";

    const pageButtons = pages.map(p =>
      p === "..." ? `<span class="dots">...</span>` 
                  : `<button data-page="${p}" class="${p === page ? "active" : ""}">${p}</button>`
    ).join("");

    return `
      ${style}
      <div class="pagination">
        ${prevButton}
        ${firstButton}
        ${pageButtons}
        ${lastButton}
        ${nextButton}
      </div>
    `;
  }

  function render() {
    return `<div id="pagination-container">${renderPage(currentPage)}</div>`;
  }

  function attachEvents() {
    document.addEventListener("click", e => {
      const btn = e.target.closest("[data-page]");
      if (btn) {
        const newPage = parseInt(btn.getAttribute("data-page"));
        if (newPage >= 1 && newPage <= totalPages && newPage !== currentPage) {
          currentPage = newPage;
          document.getElementById("pagination-container").innerHTML = renderPage(currentPage);
        }
      }
    });
  }

  setTimeout(attachEvents, 0);
  return render();
}
