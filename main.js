document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'flex';
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('changeColor').addEventListener('click', function() {
    const validColors = ['red', 'blue', 'green', 'black', 'white'];
    const color = document.getElementById('colorInput').value.toLowerCase();
    
    if (validColors.includes(color)) {
        document.body.style.background = color;
    } else {
        alert('Invalid color! Please enter red, blue, green, black, or white.');
    }
});

document.getElementById('averageButton').addEventListener('click', function() {
    const input = document.getElementById('numberInput').value;
    const numbers = input.split(':').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    
    if (numbers.length > 0) {
        const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
        document.getElementById('averageResult').innerText = `Average: ${average}`;
    } else {
        document.getElementById('averageResult').innerText = 'Invalid input. Please enter valid numbers separated by ":"';
    }
});

