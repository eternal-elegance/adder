const Add = function () {

    /*function sleep(msec) {
        const date = Date.now();
        let currentdate = null;
        do {
            currentdate = Date.now();
        } while (currentdate - date < msec);
    }*/


    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (isNaN(num1) == true && isNaN(num2) == true) {
        ons.notification.alert("The data intered is invalid");
        //sleep(3000);
        ons.notification.toast("Enter numbers in both fields", { timeout: 5000 })
    }

    else if (num1 == "" && num2 == "") {
        ons.notification.toast("Please fill the fields", { timeout: 3000 });
    }

    else {
        const n1 = Number(num1);
        const n2 = Number(num2);

        console.log(n1);
        console.log(n2);

        ons.notification.alert("The sum is " + eval(n1 + n2));
    }
}

const cln = function () {

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (num1 == "" && num2 == "") {
        ons.notification.toast("Laugh at yourself,XD", { timeout: 2000 })
    }
    else {
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";

        ons.notification.toast("Cleared", { timeout: 2000 })
    }

}