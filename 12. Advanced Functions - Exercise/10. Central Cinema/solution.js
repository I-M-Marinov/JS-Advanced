function solve() {

    const [movieNameInput, hallInput, ticketPriceInput] = document.querySelectorAll('#container input');
    const onScreenButton = document.querySelector('#container button');
    const moviesList = document.querySelector('#movies ul');
    const archiveList = document.querySelector('#archive ul');
    const clearButton = document.querySelector('#archive button');

    onScreenButton.addEventListener('click', (event) => {
        event.preventDefault();

        const movieName = movieNameInput.value.trim();
        const hall = hallInput.value.trim();
        const ticketPrice = parseFloat(ticketPriceInput.value.trim());

        if (movieName === '' || hall === '' || ticketPriceInput.value.trim() === '' || isNaN(ticketPrice) || ticketPrice <= 0) {
            return;
        }

        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = movieName;

        const strongHall = document.createElement('strong');
        strongHall.textContent = `Hall: ${hall}`;

        const div = document.createElement('div');

        const strongPrice = document.createElement('strong');
        strongPrice.textContent = ticketPrice.toFixed(2);

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Tickets Sold';

        const archiveButton = document.createElement('button');
        archiveButton.textContent = 'Archive';

        div.appendChild(strongPrice);
        div.appendChild(input);
        div.appendChild(archiveButton);

        li.appendChild(span);
        li.appendChild(strongHall);
        li.appendChild(div);

        moviesList.appendChild(li);

        movieNameInput.value = '';
        hallInput.value = '';
        ticketPriceInput.value = '';

        archiveButton.addEventListener('click', () => {

            if(isNaN(input.value.trim())){
                return;
            }
            const ticketsSold = parseInt(input.value.trim());

            if (input.value.trim() === '' || ticketsSold < 0) {
                return;
            }
            
            const totalProfit = Number(ticketsSold) * parseFloat(ticketPrice);

            const archiveLi = document.createElement('li');

            const archiveSpan = document.createElement('span');
            archiveSpan.textContent = movieName;

            const archiveStrong = document.createElement('strong');
            archiveStrong.textContent = `Total amount: ${totalProfit.toFixed(2)}`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';

            archiveLi.appendChild(archiveSpan);
            archiveLi.appendChild(archiveStrong);
            archiveLi.appendChild(deleteButton);

            archiveList.appendChild(archiveLi);

            li.remove();

            deleteButton.addEventListener('click', () => {
                archiveLi.remove();
            });
        });
    });

    clearButton.addEventListener('click', () => {
        archiveList.innerHTML = ''; 
    });
}
