function makeGrid() {
    // console.log("makeGrid is running!")

    // Select size input

    var canvas, cell, gridHeight, gridWidth, rows, clear;

    canvas = $('#pixelCanvas');
    gridHeight = $('#inputHeight').val();
    gridWidth = $('#inputWidth').val();
    clear = $('input[type="reset"]');

    canvas.children().remove()

    for (x = 0; x < gridHeight; x++) {
        canvas.append('<tr></tr>');
    }

    rows = $('tr');

    for (y = 0; y < gridWidth; y++) {
        rows.append('<td></td>');
    }

    cell = canvas.find('td');

    // When td is clicked by the user, change color of td
    cell.click(function () {
        // Select color input
        // console.log("changeColor is running!");
        var color;
        color = $("#colorPicker").val();
        $(this).attr('bgcolor', color);
    });

    // When input reset is clicked, clear width, height, canvans 
    clear.click(function () {
        // alert('sss');
        $('#inputHeight, #inputWidth').val(' ');
        $('td').remove();
    });

}

// When size is submitted by the user, call makeGrid()
var createGrid;

createGrid = $('input[type="submit"]')

createGrid.click(function (event) {
    event.preventDefault();
    makeGrid();
});
