function sumTable() {

    const rows = document.querySelectorAll('tbody tr td');
    const lastRow = document.getElementById('sum');
    let total = 0;

    for (let i = 1; i < rows.length; i+=2) {
        total += Number(rows[i].textContent);        
    }

    lastRow.textContent = Number(total);
}