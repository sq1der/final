document.addEventListener("DOMContentLoaded", loadFilters);

const categoryFilter = document.getElementById("category-filter");
categoryFilter.addEventListener("change", applyFilter);

function applyFilter() {
    const selectedCategory = categoryFilter.value;
    localStorage.setItem("selectedCategory", selectedCategory);

    const items = document.querySelectorAll(".item-card");
    items.forEach(item => {
        const itemCategory = item.classList.contains(selectedCategory) || selectedCategory === "all";
        item.style.display = itemCategory ? "block" : "none";
    });
}

function loadFilters() {
    const savedCategory = localStorage.getItem("selectedCategory") || "all";
    categoryFilter.value = savedCategory;
    applyFilter();
}
