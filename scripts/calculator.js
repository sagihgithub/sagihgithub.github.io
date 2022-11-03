function openLgn() {
    document.getElementById("dv_ovrly").style.display = "flex";
}

function gnrtRow() {
    let tbl_new_rows = document.getElementById("tbl_new_rows");
    tbl_new_rows.style.cssText = "display: table;";
    document.getElementById("btn_calc").style.cssText = "display: initial;";
    let tBody = tbl_new_rows.getElementsByTagName('tbody')[0];
    let row_vol = tBody.rows.length;
    let row = tBody.insertRow(row_vol);

    let cell = row.insertCell(0);
    cell.innerHTML = row_vol + 1;
    
    cell = row.insertCell(1);
    let data = $('#ta_dscrptn').val();
    if (data == "")
        cell.innerHTML = "Description";
    else
        cell.innerHTML = data;

    let span = document.createElement("span");
    span.classList.add("vrtcl-sprtr-prfl");
    cell = row.insertCell(2);
    cell.appendChild(span);

    cell = row.insertCell(3);
    cell.innerHTML = $('#se_pwr').val();

    span = document.createElement("span");
    span.classList.add("vrtcl-sprtr-prfl");
    cell = row.insertCell(4);
    cell.appendChild(span);

    cell = row.insertCell(5);
    //data = document.querySelector('input[name="cbl_grp"]:checked').value;
    data = $('input[name=cbl_grp]:checked').val();
    if (data == null)
        cell.innerHTML = "Al / Cu";
    else
        cell.innerHTML = data;

    span = document.createElement("span");
    span.classList.add("vrtcl-sprtr-prfl");
    cell = row.insertCell(6);
    cell.appendChild(span);

    cell = row.insertCell(7);
    data = $('input[name=wr_grp]:checked').val();
    if (data == null)
        cell.innerHTML = "3 Wire / Single";
    else
        cell.innerHTML = data;

    span = document.createElement("span");
    span.classList.add("vrtcl-sprtr-prfl");
    cell = row.insertCell(8);
    cell.appendChild(span);

    cell = row.insertCell(9);
    cell.innerHTML = "Ampacity [A]";

    span = document.createElement("span");
    span.classList.add("vrtcl-sprtr-prfl");
    cell = row.insertCell(10);
    cell.appendChild(span);

    cell = row.insertCell(11);
    cell.innerHTML = "Reserve (%)";

    span = document.createElement("span");
    span.classList.add("vrtcl-sprtr-prfl");
    cell = row.insertCell(12);
    cell.appendChild(span);

    cell = row.insertCell(13);
    cell.innerHTML = "Imax";

    span = document.createElement("span");
    span.classList.add("vrtcl-sprtr-prfl");
    cell = row.insertCell(14);
    cell.appendChild(span);

    cell = row.insertCell(15);
    cell.innerHTML = "S [mm^2]";

    let a = document.createElement("a");
    a.href = "javascript:void(0)";
    a.classList.add("anchr-prfl");
    a.style.cssText = "--color: #828282; --dcrtn:none;";
    a.onclick = function () {
        $(this).closest('tr').remove();
        if (tBody.rows.length == 0) {
            tbl_new_rows.style.cssText = "display: none;";
            document.getElementById("btn_calc").style.cssText = "display: none;";
            //document.getElementById("dv_new_rows_frm").style.cssText = "display: none;";
        }
            
    };
    a.innerHTML = "X";
    cell = row.insertCell(16);
    cell.appendChild(a);
    return false;
}

function rstCalc() {
    /*$('#dv_calc_inpt input[type=radio]').removeAttr('checked');*/
    $('#dv_calc_inpt textarea').val('');
    $('#dv_calc_inpt input[type=radio]').prop('checked', false);
    let tbl_new_rows = document.getElementById("tbl_new_rows");
    tbl_new_rows.style.cssText = "display: none;";
    document.getElementById("btn_calc").style.cssText = "display: none;";
    let tBody = tbl_new_rows.getElementsByTagName('tbody')[0];
    tBody.innerHTML = "";
    //return false;
}

function calc() {
    alert('calculate');
    return false;
}