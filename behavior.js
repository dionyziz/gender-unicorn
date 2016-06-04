function share() {
    var store = serialize();
    document.location.hash = store;
    $('#share-modal input').val(document.location.href).focus();
    setTimeout(function() {
        $('#share-modal input').val(document.location.href).select();
    }, 50);
    $('#share-modal').show();
    $('#share-modal').modal();
}

$('button').click(share);

function serialize() {
    var data = [];

    $('input[type=range]').each(function() {
        data.push(this.value);
    });
    $('input[type=radio]').each(function() {
        data.push(this.checked - 0);
    });

    return data.join(',');
}

function unserialize(store) {
    var data = store.split(',');

    $('input[type=range]').each(function() {
        this.value = data.shift();
    });
    $('input[type=radio]').each(function() {
        this.checked = data.shift() == '1'? true: false;
    });
}

if (document.location.hash.length > 1) {
    unserialize(document.location.hash);
}
