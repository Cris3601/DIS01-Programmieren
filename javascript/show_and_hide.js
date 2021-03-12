function show_hide(id) {
    var e = document.getElementById(id);
    if (e.style.display === 'inline') {
        e.style.display = 'none';
    } else {
        e.style.display = 'inline';
    }
}
