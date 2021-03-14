function show_hide(id) {
    var bild = document.getElementById(id);
    if (bild.style.display === 'none') {
        bild.style.display = 'inline';
    } else {
        bild.style.display = 'none';
    }
}

