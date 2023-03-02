var currentTab = 0;
document.addEventListener("DOMContentLoaded", function (event) {
    showTab(currentTab);
});

function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = 'Enter';
    } else {
        document.getElementById("nextBtn").innerHTML = 'Enter';
    }
    // fixStepIndicator(n)
}

var v = $("#regForm").validate({
    rules: {
        dd: {
            required: true
        },

        //   bf_fullname: {
        //     required: true
        //   },
        //   bf_email: {
        //     required: true,
        //     email: true
        //   }

    },
    errorElement: "span",
    errorClass: "error",
    errorPlacement: function (error, element) {
        error.insertBefore(element);
    }
});
function nextPrev(n) {
    

    var x = document.getElementsByClassName("tab");
    if (n == 1 && !v.form()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= (x.length-1)) {
        document.getElementById("nextprevious").style.display = "none";
        // document.getElementById("all-steps").style.display = "none";
        // document.getElementById("register").style.display = "none";
        // document.getElementById("text-message").style.display = "block";
    }
    showTab(currentTab);
}

// function validateForm() {
//     var x, y, i, valid = true;
//     x = document.getElementsByClassName("tab");
//     y = x[currentTab].getElementsByTagName("input");
//     for (i = 0; i < y.length; i++) {
//         if (y[i].value == "") {
//             y[i].className += " invalid";
//             valid = false;
//         }


//     }
//     if (valid) {
//         document.getElementsByClassName("step")[currentTab].className += " finish";
//     }
//     return valid;
// }

function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
}



$(document).ready(function () {
    $("#regForm").hide();
    $(".site_logo .start_btn").click(function () {
        $(".site_logo").hide();
        $("#regForm").show();
    })
})