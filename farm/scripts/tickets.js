//$("#datepicker").datepicker({
//    beforeShowDay: function (date) {
//        var day = date.getDay();
//        return [(day != 1 && day != 0 && day != 6)];
//    }
//});

//var $j = jQuery.noConflict();
//$j("#datepicker").datepicker({
//    beforeShowDay: function (date) {
//        var day = date.getDay();
//        return [(day != 1 && day != 0 && day != 6)];
//    }
//});

//$("#datepicker").flatpickr({
//    enableTime: true,
//    dateFormat: "m-d-Y",
//    "disable": [
//        function (date) {
//            return (date.getDay() === 0 || date.getDay() === 1 || date.getDay() === 2 || date.getDay() === 3 || date.getDay() === 4);  // disable weekends
//        }
//    ],
//    "locale": {
//        "firstDayOfWeek": 0 // set start day of week to Monday
//    }
//});

//$('.fixed-datepicker').datepicker({
//    autoclose: true,
//    //orientation: 'top',
//    orientation: 'bottom',
//    daysOfWeekDisabled: [0, 1, 2, 3, 4],
//    container: '.fixed-datepicker'
//});

$("#btn_toggleOvrlay").on("click", function () {
    $(".ovrly-lyr").show();
    //$('.ovrly-lyr').css('display', 'flex');
    //$('.ovrly-lyr').attr("style", "display: block !important");
});

function closeOverlay() {
    $(".ovrly-lyr").hide();
    //$('.ovrly-lyr').attr("style", "display: none !important");
}

$('[data-role=fixed-datepicker]').datepicker({
    autoclose: true,
    //orientation: 'top',
    orientation: 'bottom',
    daysOfWeekDisabled: [0, 1, 2, 3, 4],
    container: '[data-role=fixed-datepicker]'
});

//$(function () {
//    $('#datepicker').datepicker();
//});

//$(function () {
//    $('#datepicker').datepicker({
//        autoclose: true,
//        //orientation: 'top',
//        orientation: 'bottom',
//        daysOfWeekDisabled: [5, 6]
//        //container: container
//    });
//});

$('.btn-number').on("click", function (e) {
    
    e.preventDefault();
    
    var fieldName = $(this).attr('data-field');
    var type = $(this).attr('data-type');
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseInt(input.val());
    
    if (!isNaN(currentVal)) {
        
        if (type == 'minus') {
            
            if (currentVal > input.attr('min')) {
                //input.val(currentVal - 1).change();
                input.val(currentVal - 1).on("change");
            }
            if (parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

            if ($('#dv_ticketsVol [data-type=plus]').prop('disabled')) {
                $('#dv_ticketsVol [data-type=plus]').attr('disabled', false);

            }

            $('#sp_total').text(parseInt($('#sp_total').text()) - 40);

        } else if (type == 'plus') {
            
            if (currentVal < input.attr('max')) {
                /*input.val(currentVal + 1).change();*/
                input.val(currentVal + 1).on("change");
            }
            if (parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }
            else {
                $(this).attr('disabled', false);
            }

            if ($('#dv_ticketsVol [data-type=minus]').prop('disabled')) {
                $('#dv_ticketsVol [data-type=minus]').attr('disabled', false);
                
            }
            
            $('#sp_total').text(parseInt($('#sp_total').text()) + 40);
        }
    } else {
        input.val(0);
    }

    //alert(parseInt(input.val()));
});

//$('.input-number').focusin(function () {
//    $(this).data('oldValue', $(this).val());
//});
//$('.input-number').change(function () {

//    minValue = parseInt($(this).attr('min'));
//    maxValue = parseInt($(this).attr('max'));
//    valueCurrent = parseInt($(this).val());

//    name = $(this).attr('name');
//    if (valueCurrent >= minValue) {
//        $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
//    } else {
//        alert('Sorry, the minimum value was reached');
//        $(this).val($(this).data('oldValue'));
//    }
//    if (valueCurrent <= maxValue) {
//        $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
//    } else {
//        alert('Sorry, the maximum value was reached');
//        $(this).val($(this).data('oldValue'));
//    }


//});
//$(".input-number").keydown(function (e) {
//    // Allow: backspace, delete, tab, escape, enter and .
//    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
//        // Allow: Ctrl+A
//        (e.keyCode == 65 && e.ctrlKey === true) ||
//        // Allow: home, end, left, right
//        (e.keyCode >= 35 && e.keyCode <= 39)) {
//        // let it happen, don't do anything
//        return;
//    }
//    // Ensure that it is a number and stop the keypress
//    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
//        e.preventDefault();
//    }
//});
