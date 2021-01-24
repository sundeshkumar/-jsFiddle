function calculate() {
    var age = document.forms["myForm"]["age"].value;
    var gender = document.forms["myForm"]["gender"].value;
    var Feet = document.forms["myForm"]["Feet"].value;
    var inches = document.forms["myForm"]["inches"].value;
    var weight = document.forms["myForm"]["weight"].value;
    var bmr = 0;
    if (age == '' || gender == '' || Feet == '' || inches == '' || weight == '') {
      alert("All fields are required");
      return false;
    }

    if (gender == 1) {
      bmr = 66.47 + (13.75 * (weight/2.2046)) + (5.003 * (Feet + inches)) - (6.755 * age);
    } else {
      bmr = 655.1 + (9.563 * (weight/2.2046)) + (1.85 * (Feet + inches)) - (4.676 * age);
    }

    document.getElementById("result").innerHTML = 'Your BMR: ' + bmr.toFixed(2) + 'kCal/Day';
    document.getElementById("result").style.display = "block";

    return false;

  }