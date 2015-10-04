/**
 * Created by vishalkuo on 15-10-04.
 */


$(document).ready(function(){
    local_data = JSON.parse(local_data)
    local_data.text = local_data.text.replace(/\n/, '<br />')
    $('#pp').html(local_data.text)
})

function replaceText(data){
    var arr = []
    var lines = data.split(/\n/)
    var tempDiv = jQuery(document.createElement('div'));
    for (var i = 0; i < lines.length; i++){
        arr.push(tempDiv.text(lines[i]).html())
    }
    return arr.join("<br>")
}