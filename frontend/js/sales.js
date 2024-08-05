// erp-system/js/sales.js
document.addEventListener('DOMContentLoaded', () => {
    const salesForm = document.getElementById('salesForm');
    const salesList = document.getElementById('salesList');
    const searchSales = document.getElementById('searchSales');

    salesForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(salesForm);
        const sale = {
            product: formData.get('product'),
            amount: formData.get('amount')
        };
        addSaleToList(sale);
        salesForm.reset();
    });

    searchSales.addEventListener('input', () => {
        const query = searchSales.value.toLowerCase();
        const sales = salesList.getElementsByTagName('div');
        Array.from(sales).forEach(sale => {
            const productName = sale.querySelector('.product-name').textContent.toLowerCase();
            sale.style.display = productName.includes(query) ? '' : 'none';
        });
    });

    function addSaleToList(sale) {
        const saleElement = document.createElement('div');
        saleElement.classList.add('sales-item');
        saleElement.innerHTML = `
            <span class="product-name">${sale.product}</span>, Amount: ${sale.amount}
            <button class="btn btn-sm btn-warning" onclick="editSale('${sale.product}')">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="deleteSale('${sale.product}')">Delete</button>
        `;
        salesList.appendChild(saleElement);
    }
});

function editSale(productName) {
    alert(`Edit sale: ${productName}`);
    // Implement edit logic
}

function deleteSale(productName) {
    alert(`Delete sale: ${productName}`);
    // Implement delete logic
}
