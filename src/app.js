(function () {
    var el, i;

    function put_piece(e, id) {
        e.innerHTML = '<svg viewBox="0 0 100 100"><use xlink:href="#' + id + '"></use></svg>';
    }

    for (i = 0; i < 8; i++) {
        el = document.getElementById('f_1' + i);
        put_piece(el, 'w_pawn');

        el = document.getElementById('f_6' + i);
        put_piece(el, 'b_pawn');
    }

    el = document.getElementById('f_00');
    put_piece(el, 'w_rook');
    el = document.getElementById('f_07');
    put_piece(el, 'w_rook');
    el = document.getElementById('f_70');
    put_piece(el, 'b_rook');
    el = document.getElementById('f_77');
    put_piece(el, 'b_rook');

    el = document.getElementById('f_03');
    put_piece(el, 'w_queen');
    el = document.getElementById('f_73');
    put_piece(el, 'b_queen');
})();
