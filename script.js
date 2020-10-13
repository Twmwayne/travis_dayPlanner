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

})