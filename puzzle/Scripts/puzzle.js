//replacement to $( document ).ready(function() {});
$(function () {
    //chlng01(200, 4, 1, 3);
    //$(".freeze-overlay").css({ "display": "flex" });
    $(".page-frame").append(getPuzzleChallenge(400, 3, 2, 1, 60));

});

function shffl_tiles(row_vol, col_vol) {
    let tileArr = [...Array((row_vol * col_vol) - 1).keys()];
    for (let i = tileArr.length - 1; i > 0; i--) {
        let rndm_indx = Math.floor(Math.random() * (i + 1));
        let cln_rndm_val = tileArr[i];
        tileArr[i] = tileArr[rndm_indx];
        tileArr[rndm_indx] = cln_rndm_val;
    }

    return tileArr;
}

function isPuzzleDone() {
    $(".tile").each(function () {




    });
}

//function drawShfflImg(puzzle_size, puzzle_dimension, tile_gap, img_vol, time_lmt) {
//    let dv_plc_hldr = document.getElementById("dv_plc_hldr");

//    let dv_puzzle_frame = document.createElement('div');
//    let frame_size = puzzle_size + (tile_gap * (puzzle_dimension - 1));
//    dv_puzzle_frame.style.cssText = "position:relative; width:" + frame_size + "px; height:" + frame_size + "px;";
//    //let tile_dmnsn = Math.pow(parseInt(dv_plc_hldr.dataset.tiles, 10), 1 / 2);
//    //offsetWidth return element width including padding and border
//    //let tile_size = Math.floor(dv_plc_hldr.offsetWidth / tile_dmnsn);
//    let tile_size = Math.floor(puzzle_size / puzzle_dimension); 
//    //img_id will be an integer between 1 and img_vol 
//    let img_id = Math.floor(Math.random() * img_vol) + 1;
//    let dv_grid = document.createElement('div');
//    //dv_grid.className = "grid";
//    //dv_grid.style.setProperty('grid-template-rows', 'repeat(' + tile_dmnsn + ', ' + tile_size + 'px)');
//    //dv_grid.style.setProperty('grid-template-columns', 'repeat(' + tile_dmnsn + ', ' + tile_size + 'px)');
//    //dv_grid.style.gap = "2px";
//    //dv_grid.style.cssText = "display:grid; width:100%; height:100%; grid-template-rows:repeat(" + tile_dmnsn + ", " + tile_size + "px); grid-template-columns:repeat(" + tile_dmnsn + ", " + tile_size + "px); gap:2px;";
//    dv_grid.style.cssText = "display:grid; width:100%; height:100%; grid-template-rows:repeat(" + puzzle_dimension + ", " + tile_size + "px); grid-template-columns:repeat(" + puzzle_dimension + ", " + tile_size + "px); gap:2px;";
//    let shffl_tile_arr = shffl_tiles(puzzle_dimension, puzzle_dimension);
//    for (let i = 0; i < shffl_tile_arr.length; i++) {
//        let curr_row = (Math.floor(i / puzzle_dimension)) + 1;
//        let curr_col = (i % puzzle_dimension) + 1;
//        let curr_shffl_row = (Math.floor(shffl_tile_arr[i] / puzzle_dimension)) + 1;
//        let curr_shffl_col = (shffl_tile_arr[i] % puzzle_dimension) + 1;
//        //document.getElementById("cell" + curr_row + curr_col).className = "tile" + curr_shffl_row + curr_shffl_col;
//        let dv_cell = document.createElement('div');
//        dv_cell.id = "cell" + curr_row + curr_col;
//        //dv_cell.style.backgroundImage = "url('/Images/" + img_id + ".jpg')";
//        //dv_cell.style.backgroundSize = dv_plc_hldr.offsetWidth + "px";
//        dv_cell.style.cssText = "background-image: url('/Images/" + img_id + ".jpg'); background-size: " + puzzle_size + "px; background-position: " + ((curr_row - 1) * tile_size) * -1 + "px " + ((curr_col - 1) * tile_size) * -1 + "px; cursor: pointer;";
//        //dv_cell.style.cssText = "background-image: url('/Images/" + img_id + ".jpg'); background-size: " + dv_plc_hldr.offsetWidth + "px; cursor: pointer;";
//        //dv_cell.className = "tile" + curr_shffl_row + curr_shffl_col;        
//        dv_cell.onclick = function () { clickTile(curr_row, curr_col); };
//        dv_grid.appendChild(dv_cell);
//    }
//    //document.getElementById("cell" + row_vol + col_vol).className = "blank";
//    let dv_cell = document.createElement('div');
//    dv_cell.id = "cell" + puzzle_dimension + puzzle_dimension;
//    //dv_cell.className = "blank";
//    dv_cell.style.cssText = "background-color:white;";
//    dv_cell.onclick = function () { clickTile(puzzle_dimension, puzzle_dimension); };
//    dv_grid.appendChild(dv_cell);
//    dv_plc_hldr.appendChild(dv_grid);
//    // create progress bar
//    let prgrss = document.createElement('progress');
//    prgrss.id = "prgrss_time_lmt";
//    prgrss.value = "0";
//    prgrss.max = time_lmt;
//    dv_plc_hldr.appendChild(prgrss);
//    // set timer label
//    //let label = document.createElement('label');
//    //label.id = "lbl_tmr_msg";
//    //dv_plc_hldr.appendChild(label);
//    let inpt = document.createElement('input');
//    inpt.type = "hidden";
//    inpt.id = "hd_blnk_cell";
//    //inpt.value = tile_dmnsn + "_" + tile_dmnsn;
//    inpt.value = puzzle_dimension + "_" + puzzle_dimension;
//    dv_plc_hldr.appendChild(inpt);
//}

function getPuzzleChallenge(puzzle_size, puzzle_dimension, tile_gap, img_vol, time_lmt) {
    let challenge_frame = document.createElement('div');
    $(challenge_frame).addClass("column-flex-box center-cross-axis");

    let frame_size = puzzle_size + (tile_gap * (puzzle_dimension - 1));
    let puzzle_frame = document.createElement('div');
    puzzle_frame.style.cssText = "position:relative; width:" + frame_size + "px; height:" + frame_size + "px;";

    puzzle_frame.appendChild(getShfflImg(puzzle_size, puzzle_dimension, tile_gap, img_vol));

    puzzle_frame.appendChild(getFreezeOverlay());

    //set blank tile position
    let inpt = document.createElement('input');
    inpt.type = "hidden";
    inpt.id = "hd_blnk_cell";
    inpt.value = puzzle_dimension + "_" + puzzle_dimension;
    puzzle_frame.appendChild(inpt);

    challenge_frame.appendChild(puzzle_frame);
    challenge_frame.appendChild(getProgressBar(time_lmt));

    return challenge_frame;
}

function getShfflImg(puzzle_size, puzzle_dimension, tile_gap, img_vol) {

    //let tile_dmnsn = Math.pow(parseInt(dv_plc_hldr.dataset.tiles, 10), 1 / 2);
    //offsetWidth return element width including padding and border
    //let tile_size = Math.floor(dv_plc_hldr.offsetWidth / tile_dmnsn);
    let tile_size = Math.floor(puzzle_size / puzzle_dimension);
    //img_id will be an integer between 1 and img_vol 
    let img_id = Math.floor(Math.random() * img_vol) + 1;
    let dv_grid = document.createElement('div');
    //dv_grid.className = "grid";
    //dv_grid.style.setProperty('grid-template-rows', 'repeat(' + tile_dmnsn + ', ' + tile_size + 'px)');
    //dv_grid.style.setProperty('grid-template-columns', 'repeat(' + tile_dmnsn + ', ' + tile_size + 'px)');
    //dv_grid.style.gap = "2px";
    //dv_grid.style.cssText = "display:grid; width:100%; height:100%; grid-template-rows:repeat(" + tile_dmnsn + ", " + tile_size + "px); grid-template-columns:repeat(" + tile_dmnsn + ", " + tile_size + "px); gap:2px;";
    dv_grid.style.cssText = "display:grid; width:100%; height:100%; grid-template-rows:repeat(" + puzzle_dimension + ", " + tile_size + "px); grid-template-columns:repeat(" + puzzle_dimension + ", " + tile_size + "px); gap:" + tile_gap + "px;";
    let shffl_tile_arr = shffl_tiles(puzzle_dimension, puzzle_dimension);
    for (let i = 0; i < shffl_tile_arr.length; i++) {
        let curr_row = (Math.floor(i / puzzle_dimension)) + 1;
        let curr_col = (i % puzzle_dimension) + 1;
        let curr_shffl_row = (Math.floor(shffl_tile_arr[i] / puzzle_dimension)) + 1;
        let curr_shffl_col = (shffl_tile_arr[i] % puzzle_dimension) + 1;
        //document.getElementById("cell" + curr_row + curr_col).className = "tile" + curr_shffl_row + curr_shffl_col;
        let dv_cell = document.createElement('div');
        dv_cell.id = "cell" + curr_row.toString() + curr_col.toString();
        dv_cell.dataset.position = curr_row.toString() + curr_col.toString();
        dv_cell.dataset.tile = curr_shffl_row.toString() + curr_shffl_col.toString();
        $(dv_cell).addClass("tile");
        //dv_cell.style.backgroundImage = "url('/Images/" + img_id + ".jpg')";
        //dv_cell.style.backgroundSize = dv_plc_hldr.offsetWidth + "px";
        //dv_cell.style.cssText = "background-image: url('/Images/" + img_id + ".jpg'); background-size: " + puzzle_size + "px; background-position: " + ((curr_row - 1) * tile_size) * -1 + "px " + ((curr_col - 1) * tile_size) * -1 + "px;";
        //dv_cell.style.cssText = "background-image: url('/Images/" + img_id + ".jpg'); background-size: " + puzzle_size + "px; background-position: " + ((curr_shffl_row - 1) * tile_size) * -1 + "px " + ((curr_shffl_col - 1) * tile_size) * -1 + "px;";
        dv_cell.style.cssText = "background-image: url('Images/puzzle/" + img_id + ".jpg'); background-size: " + puzzle_size + "px; background-position: " + ((curr_shffl_col - 1) * tile_size) * -1 + "px " + ((curr_shffl_row - 1) * tile_size) * -1 + "px;";
        //dv_cell.className = "tile" + curr_shffl_row + curr_shffl_col;
        //dv_cell.onclick = function () { clickTile(curr_row, curr_col); };
        dv_cell.onclick = function () { clickTile(this); };

        //test
        let position_label = document.createElement('label');
        $(position_label).text(curr_shffl_row.toString() + curr_shffl_col.toString());
        dv_cell.appendChild(position_label);
        //test

        dv_grid.appendChild(dv_cell);
    }
    //document.getElementById("cell" + row_vol + col_vol).className = "blank";
    let dv_cell = document.createElement('div');
    dv_cell.id = "cell" + puzzle_dimension + puzzle_dimension;
    dv_cell.dataset.position = puzzle_dimension.toString() + puzzle_dimension.toString();
    dv_cell.dataset.tile = '00';
    //new
    //dv_cell.dataset.position = puzzle_dimension.toString() + puzzle_dimension.toString();
    //new
    //dv_cell.className = "blank";
    $(dv_cell).addClass("tile");
    dv_cell.style.cssText = "background-color:white;";
    //dv_cell.onclick = function () { clickTile(puzzle_dimension, puzzle_dimension); };
    dv_cell.onclick = function () { clickTile(this); };
    dv_cell.appendChild(document.createElement('label'));
    dv_grid.appendChild(dv_cell);

    return dv_grid;
}

function getFreezeOverlay() {
    let overlay = document.createElement('div');
    $(overlay).addClass("overlay center-all-axis hide");
    let label = document.createElement('label');
    $(label).text("נסה שוב");
    overlay.appendChild(label);
    return overlay;
}

function getProgressBar(time_lmt) {
    // create progress bar
    let prgrss = document.createElement('progress');
    prgrss.id = "prgrss_time_lmt";
    prgrss.value = "0";
    prgrss.max = time_lmt;

    let timeleft = time_lmt;
    let downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);

            $(".overlay label").text('נגמר הזמן');
            $(".overlay").css({ "display": "flex" });

        }
        else if ($('[name=isWin]').val() == "true") {
            clearInterval(downloadTimer);

            //$(".overlay label").text('כל הכבוד');
            //$(".overlay").css({ "display": "flex" });
            //$("[name=isWin]").val('true');
        }
        prgrss.value = time_lmt - timeleft;
        timeleft -= 1;
    }, 1000);

    return prgrss;
}

//function clickTile(row, col) {
//    //let jObj_blnk_cell = JSON.parse(document.getElementById("hd_blnk_cell").value);
//    let blnk_tile_pos = document.getElementById("hd_blnk_cell").value;
//    let blnk_row = blnk_tile_pos.split("_")[0];
//    let blnk_col = blnk_tile_pos.split("_")[1];
//    //alert(row + " " + col + "\n" + blnk_row + " " + blnk_col);
//    if ((row == blnk_row && Math.abs(col - blnk_col)) == 1 || (col == blnk_col && Math.abs(row - blnk_row) == 1)) {
//        //alert("1");
//        //document.getElementById(blnk_tile_id).className = document.getElementById("cell" + row + col).className;
//        //document.getElementById("cell" + row + col).className = "blank";
//        //let blank_tile = $("#cell" + blnk_row + blnk_col);
//        let new_blank = row.toString() + col.toString();
//        let new_tile = blnk_row.toString() + blnk_col.toString();
//        //alert(new_tile + ": " + $("#cell" + new_blank).data("tile"));
//        //$("#cell" + new_tile).data("tile", $("#cell" + new_blank).data("tile"));
//        $("#cell" + new_tile).attr("data-tile", $("#cell" + new_blank).data("tile"));
//        //new
//        //$('[data-position=' + new_tile + ']').data("position", $('[data-position=' + new_blank + ']').data("position"));
//        //new
//        $("#cell" + new_tile + " label").text($("#cell" + new_blank).data("tile"));

//        //new
//        //$('[data-position=' + new_tile + ']').data("position", $('[data-position=' + new_blank + ']').data("position"));
//        //new
//        $("#cell" + new_blank).attr("data-tile", '00');
//        //$("#cell" + new_blank).removeAttr("data-tile");
//        $("#cell" + new_blank + " label").text('');
//        document.getElementById("cell" + new_tile).style.cssText = document.getElementById("cell" + new_blank).style.cssText;
//        document.getElementById("cell" + new_blank).style.cssText = "background-color:white;";
//        //document.getElementById("hd_blnk_cell").value = "cell" + row + col;
//        document.getElementById("hd_blnk_cell").value = row + "_" + col;

//        let isDone = true;
//        $(".tile").each(function () {
//            let tileCoordinates = $(this).data("tile");
//            if (tileCoordinates != new_blank && tileCoordinates != $(this).data("position")) {


//                isDone = false;
//                return;
//            }
//        });

//        if (isDone) {
//            $(".overlay label").text('כל הכבוד');
//            $(".overlay").css({ "display": "flex" });
//        }
//    }

//}

function clickTile(e) {
    
    
    let cell_position = $(e).attr("data-position");
    let blank_position = $('[data-tile=00]').attr("data-position");
    //check if clicked cell is next to the blank cell
    if ((cell_position[0] == blank_position[0] && Math.abs(cell_position[1] - blank_position[1]) == 1) || (cell_position[1] == blank_position[1] && Math.abs(cell_position[0] - blank_position[0]) == 1)) {
        //let cell_position = $(e).attr("data-position");
        //let blank_position = $('[data-tile=00]').attr("data-position");
        let cell_tile = $(e).attr("data-tile");
        $('[data-tile=00]').attr("data-tile", cell_tile).find("label").text(cell_tile);
        //$('[data-tile=00] label').text(cell_tile);

        $(e).attr("data-tile", "00").find("label").text("");        
        //$(e).find("label").text("");

        
        document.getElementById("cell" + blank_position).style.cssText = document.getElementById("cell" + cell_position).style.cssText;
        document.getElementById("cell" + cell_position).style.cssText = "background-color:white;";
        

        let isDone = true;
        $(".tile").each(function () {
            let tileCoordinates = $(this).attr("data-tile");
            if (tileCoordinates != "00" && tileCoordinates != $(this).attr("data-position")) {
                
                isDone = false;
                return;
            }
        });

        if (isDone) {
            $("[name=isWin]").val('true');
            $(".overlay label").text('כל הכבוד');
            $(".overlay").css({ "display": "flex" });
            
        }
    }

}

//function setTimer(time_lmt) {
//    let timeleft = time_lmt;
//    let downloadTimer = setInterval(function () {
//        if (timeleft <= 0) {
//            clearInterval(downloadTimer);


//            $(".overlay").css({ "display": "flex" });
//        }
//        document.getElementById("prgrss_time_lmt").value = time_lmt - timeleft;
//        timeleft -= 1;
//    }, 1000);
//}

//function tile_img(src, width, height, col, row, tile_size) {
//    var img = new Image();
//    //img.onload = start;
//    img.src = src;

//    let cnvs = document.createElement('canvas');
//    cnvs.id = "cnvs_pzzl";
//    cnvs.width = width;
//    cnvs.height = height;
//    let cntx = cnvs.getContext("2d");

//    let shffl_tile_arr = shffl_tiles(row, col);

//    for (let i = 0; i < shffl_tile_arr.length; i++) {
//        cntx.drawImage(
//            // from the original image
//            img,
//            // take the next x,y piece
//            ((i + 1) % row) * tile_size, (((i + 1) / row) + 1) * tile_size, tile_size, tile_size,
//            // draw it on canvas based on the shuffled pieces[] array
//            ((shffl_tile_arr[i] + 1) % row) * tile_size, (((shffl_tile_arr[i] + 1) / row) + 1) * tile_size, tile_size, tile_size
//        );
//    }

//    return cnvs;
//}

//function chlng01(puzzle_size, puzzle_dimension, img_vol, time_lmt) {
//    drawShfflImg(puzzle_size, puzzle_dimension, img_vol, time_lmt);
//    setTimer(time_lmt);
//}

