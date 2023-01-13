function Girar() {
    document.getElementById('rotate-img').style.display = 'none';
    document.getElementById('static-img').style.display = 'none';
    document.getElementById('rotate-360-img').style.display = 'flex';
    document.getElementById('close-img').style.display = 'flex';
}

function Parar() {
    document.getElementById('rotate-img').style.display = 'flex';
    document.getElementById('static-img').style.display = 'flex';
    document.getElementById('rotate-360-img').style.display = 'none';
    document.getElementById('close-img').style.display = 'none';
}