var pos1 = 0
var pos2 = 0

function lancerDe(j){
    var de = ((Math.random() * 5 + 1)).toFixed(0)
    
    if(j == 1) {
        $("#case-" + pos1).css("background", "none")
        pos1 += parseInt(de) 
        if(pos1 == 50) {
            $('#victoire').val(1)
            $('#form-victoire').submit()
        }
        if(pos1 > 50) pos1 = 25

        if(pos1 == 37) pos1 == 12
        if(pos1 == 14) pos1 == 7
        if(pos1 == 46) pos1 == 33

        if(pos1 == 20) pos1 == 35
        if(pos1 == 2) pos1 == 17
        if(pos1 == 31) pos1 == 43

        $("#case-" + pos1).css("background-color", "red")
        $("#btn-de").attr('onClick', 'lancerDe(2)')
        return pos1
    }

    else {
        $("#case-" + pos2).css("background", "none")
        pos2 += parseInt(de)
        if(pos2 == 50) {
            $('#victoire').val(2)
            $('#form-victoire').submit()
        }

        if(pos2 > 50) pos2 = 25

        if(pos2 == 37) pos2 == 12
        if(pos2 == 14) pos2 == 7
        if(pos2 == 46) pos2 == 33

        if(pos2 == 20) pos2 == 35
        if(pos2 == 2) pos2 == 17
        if(pos2 == 31) pos2 == 43

        
        $("#case-" + pos2).css("background-color", "blue")
        $("#btn-de").attr('onClick', 'lancerDe(1)')

        return pos2

    }
}


module.exports = {lancerDe}