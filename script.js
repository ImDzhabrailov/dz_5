const list = document.getElementById('myList');

        document.getElementById('addEndButton').addEventListener('click', () => {
            const newItem = document.createElement('li');
            newItem.className = 'list-item';
            newItem.textContent = 'Новый элемент (конец)';
            list.appendChild(newItem);
        });

        document.getElementById('addStartButton').addEventListener('click', () => {
            const newItem = document.createElement('li');
            newItem.className = 'list-item';
            newItem.textContent = 'Новый элемент (начало)';
            list.insertBefore(newItem, list.firstChild);
        });

        document.getElementById('removeFirstButton').addEventListener('click', () => {
            if (list.firstChild) {
                list.removeChild(list.firstChild);
            }
        });

        document.getElementById('removeLastButton').addEventListener('click', () => {
            if (list.lastChild) {
                list.removeChild(list.lastChild);
            }
        });

        document.getElementById('destroyButton').addEventListener('click', () => {
            document.body.innerHTML = '';
            document.body.style.backgroundColor = 'black';
        });