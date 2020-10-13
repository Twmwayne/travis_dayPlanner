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









     }

})