
;(function harvestImprove() {

var lines,
    linesPerItemType = new Map();

// Grab data
lines = document.querySelectorAll('.client-doc-items .client-doc-rows tr');

lines.forEach(function(line) {
    var itemType = line.querySelector('.item-type').innerText;
    var qty = parseFloat(line.querySelector('.item-qty').innerText);
    var amount = parseFloat(line.querySelector('.item-amount').innerText
        .substring(4)     // Remove 'CHF '
        .replace(/'/, '')) // Remove currency formatting 10'500 -> 10500
    ;

    if (!linesPerItemType.has(itemType)) {
        linesPerItemType.set(itemType, {
            itemType: itemType,
            qty: 0.0,
            amount: 0.0,
        });
    }

    var prevObject = linesPerItemType.get(itemType);
    linesPerItemType.set(itemType, {
        itemType: itemType,
        qty: prevObject.qty + qty,
        amount: prevObject.amount + amount
    });
})

// Build the new Table
var container = document.createElement('div');

var tableHeader = `<h4 class="no-print">Résumé (non visible par le client)</h4>
<table class="client-doc-items no-print" cellspacing="0" cellpadding="0" border="0" style="margin-top: 10px; width: 600px;">
    <thead class="client-doc-items-header desktop-only">
      <tr>
        <th class="item-type">Item Type</th>
        <th class="item-qty">Quantité</th>
        <th class="item-amount">Montant</th>
      </tr>
    </thead>
    <tbody class="client-doc-rows">
    `;

tableBody = '';
for (var [key, data] of linesPerItemType) {
    tableBody += `
    <tr>
        <td class="item-type desktop-only">${key}</td>
        <td class="item-qty desktop-only">${data.qty}</td>
        <td class="item-amount">${data.amount}</td>
    </tr>
    `;
}

var tableFooter = `</table>`;

container.innerHTML = tableHeader + tableBody + tableFooter;

document.querySelector('#client-document').insertBefore(container, document.querySelector('.client-doc-notes'));

})();

