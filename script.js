$(document).ready(function() {

    const now = moment().format('MMMM Do YYYY');
    const nowHour24 = moment().format('H');
    const nowHour12 = moment().format('h');

    let $dateHeading = $('#navbar-subtitle');
    $dateHeading.text(now);

    const saveIcon = "./images/save-regular.svg";
    const test = true;
    let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

    console.log(storedPlans);


    if (storedPlans !== null) {
        planTextArr = storedPlans;
    }
    else {
        planTextArr = new Array(9);
        planTextArr[4] = "Dont forget Lunch";
    }


    let $plannerDiv = $('#plannerContainer');
    $plannerDiv.empty();

    if (test) { console.log("current time",nowHour12); }

    for (let hour = 9; hour <= 17; hour++) {
        let index = hour - 9;

        let $rowDiv = $('<div>');
        $rowDiv.addClass('row');
        $rowDiv.addClass('plannerRow');
        $rowDiv.attr('hour-index',hour);

        let $col2SaveDiv = $('<div>');
        $col2SaveDiv.addClass('col-md-2');

        let $col2TimeDiv = $('<div>');
        $col2TimeDiv.addClass('col-md-2');

        const $timeBoxSpn = $('<span>');
        $timeBoxSpn.attr('class','timeBox');

        let displayHour = 0;
        let ampm = "";
        if (hour > 12) {
            displayHour = hour - 12;
            ampm = "pm";
        }
        else {
            displayHour = hour;
            ampm = "am";
        }

        $timeBoxSpn.text(`${displayHour}) ${ampm}`);

        $rowDiv.append($col2TimeDiv);
        $col2TimeDiv.append($timeBoxSpn);

        let $dailyPlanSpn = $('<input>');
        $dailyPlanSpn.attr('id',`input-${index}`);
        $dailyPlanSpn.attr('type','text');
        $dailyPlanSpn.attr('class','dailyPlan');
        $dailyPlanSpn.val( planTextArr[index] );
        let $col9IptDiv = $('<div>');
        $col9IptDiv.addClass('col-md-9');

        $rowDiv.append($col9IptDiv);
        $col9IptDiv.append($dailyPlanSpn);

        let $col1SaveDiv = $('<div>');
        $col1SaveDiv.addClass('col-md-1');

        let $saveBtn = $('<i>');
        $saveBtn.attr('save-id',index);
        $saveBtn.attr('class',"far fa-save saveIcon");

        $rowDiv.append($col1SaveDiv);
        $col1SaveDiv.append($saveBtn);

        updateRowColor($rowDiv, hour);

        $plannerDiv.append($rowDiv);

     };



     

})