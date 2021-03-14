function show_hide(id) {
    var e = document.getElementById(id);
    if (e.style.display === 'none') {
        e.style.display = 'inline';
    } else {
        e.style.display = 'none';
    }
}

