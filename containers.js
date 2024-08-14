const items = document.querySelectorAll(".container-item")

for (let i = 0; i < items.length; ++i) {
    items[i].textContent = `Item${i + 1}`;
}