/**
 * Created by vishalkuo on 15-10-04.
 */


$(document).ready(function(){
    $('#pp').lettering('words');
    $("span").attr("data-toggle", "tooltip")
    x = $('#op').text().split(' ')

    for (var i = 0; i < x.length; i++){
        mystr = '.word' + parseInt(i + 2)
        $(mystr).attr('title', x[i])
    }

    $('[data-toggle="tooltip"]').tooltip()
})


jQuery.fn.selectText = function(){
    var doc = document
        , element = this[0]
        , range, selection
        ;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
};
