document.addEventListener('DOMContentLoaded', () => {
    // Get all price elements from the table
    const priceElements = document.querySelectorAll('.prices');

    // Calculate the sum of the prices
    let totalPrice = 0;
    priceElements.forEach(priceElement => {
        // Parse price as float and add to total
        const price = parseFloat(priceElement.textContent);
        if (!isNaN(price)) {
            totalPrice += price;
        }
    });

    // Create a new row for the total price
    const totalRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    
    // Set colspan to 2 to make the total cell span across both columns
    totalCell.setAttribute('colspan', '2');
    totalCell.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

    // Add the total cell to the row
    totalRow.appendChild(totalCell);

    // Append the total row to the table body
    document.getElementById('grocery-list').querySelector('tbody').appendChild(totalRow);
});
