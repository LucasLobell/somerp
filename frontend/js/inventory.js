// erp-system/js/inventory.js
document.addEventListener('DOMContentLoaded', () => {
    const inventoryForm = document.getElementById('inventoryForm');
    const inventoryList = document.getElementById('inventoryList');
    const searchInventory = document.getElementById('searchInventory');

    inventoryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(inventoryForm);
        const item = {
            name: formData.get('item'),
            quantity: formData.get('quantity')
        };
        addItemToList(item);
        inventoryForm.reset();
    });

    searchInventory.addEventListener('input', () => {
        const query = searchInventory.value.toLowerCase();
        const items = inventoryList.getElementsByTagName('div');
        Array.from(items).forEach(item => {
            const itemName = item.querySelector('.item-name').textContent.toLowerCase();
            item.style.display = itemName.includes(query) ? '' : 'none';
        });
    });

    function addItemToList(item) {
        const itemElement = document.createElement('div');
        itemElement.classList.add('inventory-item');
        itemElement.innerHTML = `
            <span class="item-name">${item.name}</span>, Quantity: ${item.quantity}
            <button class="btn btn-sm btn-warning" onclick="editItem('${item.name}')">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="deleteItem('${item.name}')">Delete</button>
        `;
        inventoryList.appendChild(itemElement);
    }
});

function editItem(itemName) {
    alert(`Edit item: ${itemName}`);
    // Implement edit logic
}

function deleteItem(itemName) {
    alert(`Delete item: ${itemName}`);
    // Implement delete logic
}
