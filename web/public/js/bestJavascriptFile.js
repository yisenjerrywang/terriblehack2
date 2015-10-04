/**
 * Created by vishalkuo on 15-10-04.
 */


$(document).ready(function(){
    document.getElementById('sel').onclick = function(){
        console.log('here')
        $('#pp').selectText()
    }
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

window.addEventListener('load', function() {
    window.doppler.init(function(bandwidth) {
        var threshold = 4;
        if (bandwidth.left > threshold || bandwidth.right > threshold) {
            var scale    = 10;
            var baseSize = 100;
            var diff = bandwidth.left - bandwidth.right;
            var dimension = (baseSize + scale*diff) + 'px';
            document.getElementById('box').style.width  = dimension;
            document.getElementById('box').style.height = dimension;
        }
    });
});