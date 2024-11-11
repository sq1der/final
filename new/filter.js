document.addEventListener("DOMContentLoaded", () => {
    const categoryFilter = document.getElementById("category-filter");
    categoryFilter.addEventListener("change", filterItems);
});

function filterItems() {
    const selectedCategory = document.getElementById("category-filter").value;
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        if (selectedCategory === "all" || item.classList.contains(selectedCategory)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
    