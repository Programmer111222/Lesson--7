const contentSelect = document.getElementById('contentSelect');
const contentInput = document.getElementById('contentInput');
const addContentBtn = document.getElementById('addContentBtn');
const newContainer = document.getElementById('newContainer');

addContentBtn.addEventListener('click', () => {
    const selectedOption = contentSelect.value;
    const inputValue = contentInput.value;

    if (selectedOption === 'text' && inputValue) {
        const textEl = document.createElement('p');
        textEl.textContent = inputValue;
        newContainer.appendChild(textEl);
    } else if (selectedOption === 'img' && inputValue) {
        const imgEl = document.createElement('img');
        imgEl.src = inputValue;
        imgEl.alt = 'Image Error';
        imgEl.style.maxWidth = '300px';
        newContainer.appendChild(imgEl);
    }

});