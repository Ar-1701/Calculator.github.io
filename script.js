	//<<<<<------Coverter TO Calculator ------>>>>>
	function show21() {
	    document.querySelector(".wrapCon").style.visibility = "hidden";
	    document.querySelector(".table1").style.visibility = "hidden";
	    document.querySelector(".table2").style.visibility = "hidden";
	    document.querySelector(".table3").style.visibility = "hidden";
	    document.querySelector(".table4").style.visibility = "hidden";
	    document.querySelector(".table5").style.visibility = "hidden";
	    document.querySelector(".table6").style.visibility = "hidden";
	    document.querySelector(".table7").style.visibility = "hidden";
	    document.querySelector(".table8").style.visibility = "hidden";
	    document.querySelector(".table9").style.visibility = "hidden";

	}
	//<<<<<------ Calculator To Converter ------>>>>>
	function show19() {
	    document.querySelector(".wrapCon").style.visibility = "visible";

	}
	//<<<<<------KILOMETER TO METER------>>>>>
	function KmToM() {
	    var a = document.getElementById("num").value;
	    var b = document.getElementById("num1").value;
	    if (a == "") {
	        alert("Please Fill Number.");
	        return false;
	    }

	    var meter = a * 1000; // KiloMeter TO Meter
	    var km = b / 1000; // Meter TO KiloMeter

	    document.getElementById("num1").value = meter + " Meter";
	    document.getElementById("num").value = km + " Kilo Meter";
	}

	function show() {
	    document.querySelector(".table1").style.visibility = "visible";
	    document.querySelector(".table2").style.visibility = "hidden";
	    document.querySelector(".table3").style.visibility = "hidden";
	    document.querySelector(".table4").style.visibility = "hidden";
	    document.querySelector(".table5").style.visibility = "hidden";
	    document.querySelector(".table6").style.visibility = "hidden";
	    document.querySelector(".table7").style.visibility = "hidden";
	    document.querySelector(".table8").style.visibility = "hidden";
	    document.querySelector(".table9").style.visibility = "hidden";

	}

	function show2() {
	    document.querySelector(".table1").style.visibility = "hidden";
	}
	//<<<<<------CENTIMETER TO METER----->>>>
	function CmToM() {

	    var a = document.getElementById("num2").value;
	    var b = document.getElementById("num3").value;
	    if (a == "") {
	        alert("Please Fill Number.");
	        return false;
	    }
	    var meter = a / 100; // CM TO Meter
	    var cm = b * 100; // Meter TO CM

	    document.getElementById("num3").value = meter + " meter";
	    document.getElementById("num2").value = cm + " Centi meter";


	}

	function show3() {
	    document.querySelector(".table1").style.visibility = "hidden";
	    document.querySelector(".table2").style.visibility = "visible";
	    document.querySelector(".table3").style.visibility = "hidden";
	    document.querySelector(".table4").style.visibility = "hidden";
	    document.querySelector(".table5").style.visibility = "hidden";
	    document.querySelector(".table6").style.visibility = "hidden";
	    document.querySelector(".table7").style.visibility = "hidden";
	    document.querySelector(".table8").style.visibility = "hidden";
	    document.querySelector(".table9").style.visibility = "hidden";
	}

	function show4() {
	    document.querySelector(".table2").style.visibility = "hidden";
	}
	//<<<<------VOWEL/CONSONANT/DIGIT/SYMBOL

	function vowelCons() {
	    var a = document.getElementById("volnum").value;
	    if (a == " ") {
	        alert("Please Fill Character.")
	    } else if (a == 'a' || a == 'A' || a == 'e' || a == 'E' || a == 'i' || a == 'I' || a == 'o' || a == 'O' || a == 'u' || a == 'U') {
	        document.getElementById("volAns").value = a + " Is Vowel.";
	    } else if (!isNaN(a)) {
	        alert("Please Enter only Character.")
	    } else {
	        document.getElementById("volAns").value = a + " Is Consonant";
	    }
	}

	function show5() {

	    document.querySelector(".table1").style.visibility = "hidden";
	    document.querySelector(".table2").style.visibility = "hidden";
	    document.querySelector(".table3").style.visibility = "visible";
	    document.querySelector(".table4").style.visibility = "hidden";
	    document.querySelector(".table5").style.visibility = "hidden";
	    document.querySelector(".table6").style.visibility = "hidden";
	    document.querySelector(".table7").style.visibility = "hidden";
	    document.querySelector(".table8").style.visibility = "hidden";
	    document.querySelector(".table9").style.visibility = "hidden";
	}

	function show6() {
	    document.querySelector(".table3").style.visibility = "hidden";
	}
	//
	function AsciiCode() {
	    var a = document.getElementById("AsciiNum").value;

	    var n = a.charCodeAt();
	    for (a = 33; a <= 126; a++) {
	        document.getElementById("AsciiAns").value = "ASCII CODE is " + n;
	    }
	}

	function show7() {
	    document.querySelector(".table1").style.visibility = "hidden";
	    document.querySelector(".table2").style.visibility = "hidden";
	    document.querySelector(".table3").style.visibility = "hidden";
	    document.querySelector(".table4").style.visibility = "visible";
	    document.querySelector(".table5").style.visibility = "hidden";
	    document.querySelector(".table6").style.visibility = "hidden";
	    document.querySelector(".table7").style.visibility = "hidden";
	    document.querySelector(".table8").style.visibility = "hidden";
	    document.querySelector(".table9").style.visibility = "hidden";
	}

	function show8() {
	    document.querySelector(".table4").style.visibility = "hidden";
	}

	// <<<<<------ARMSTRONG----->>>>>>
	function arm() {
	    var no = document.getElementById("ArmNum").value;
	    if (no == "") {
	        alert("Please Fill Number.");
	        return false;
	    } else if (isNaN(no)) {
	        alert("Please!Fill Only Number");
	        return false;
	    }
	    var arm = 0,
	        rem, c;
	    c = no;
	    while (no > 0) {
	        rem = no % 10;
	        arm = (rem * rem * rem) + arm;
	        no = parseInt(no / 10);
	    }

	    if (c == arm) {
	        document.getElementById("ArmAns").value = "ArmStrong Number";
	    } else {
	        document.getElementById("ArmAns").value = "Not Armstrong Number.";
	    }
	}

	function show9() {
	    document.querySelector(".table2").style.visibility = "hidden";
	    document.querySelector(".table1").style.visibility = "hidden";
	    document.querySelector(".table3").style.visibility = "hidden";
	    document.querySelector(".table4").style.visibility = "hidden";
	    document.querySelector(".table5").style.visibility = "visible";
	    document.querySelector(".table6").style.visibility = "hidden";
	    document.querySelector(".table7").style.visibility = "hidden";
	    document.querySelector(".table8").style.visibility = "hidden";
	    document.querySelector(".table9").style.visibility = "hidden";
	}

	function show10() {
	    document.querySelector(".table5").style.visibility = "hidden";
	}
	//<<<<-------PALINDROME------>>>>>
	function pal() {
	    var nu = document.getElementById("PalNum").value;
	    var r, c, s = 0;
	    if (nu == "") {
	        alert("Please Fill Number.");
	        return false;
	    } else if (isNaN(nu)) {
	        alert("Please!Fill Only Number");
	        return false;
	    }
	    c = nu;
	    while (nu > 0) {
	        r = nu % 10;
	        s = s * 10 + r;
	        nu = parseInt(nu / 10);
	    }

	    if (c == s) {
	        document.getElementById("PalAns").value = s + " Is Palindrome Number";
	    } else {
	        document.getElementById("PalAns").value = "Not Palindrome Number";

	    }
	}

	function show11() {
	    document.querySelector(".table2").style.visibility = "hidden";
	    document.querySelector(".table1").style.visibility = "hidden";
	    document.querySelector(".table3").style.visibility = "hidden";
	    document.querySelector(".table4").style.visibility = "hidden";
	    document.querySelector(".table5").style.visibility = "hidden";
	    document.querySelector(".table6").style.visibility = "visible";
	    document.querySelector(".table7").style.visibility = "hidden";
	    document.querySelector(".table8").style.visibility = "hidden";
	    document.querySelector(".table9").style.visibility = "hidden";
	}

	function show12() {
	    document.querySelector(".table6").style.visibility = "hidden";
	}

	//	<<<<<--------GREATER NUMBER------->>>>>
	function Greater() {
	    var a, b;
	    a = Number(document.getElementById("grNum1").value);
	    b = Number(document.getElementById("grNum2").value);
	    // c = Number(document.getElementById("num2").value);
	    if (a == " " || b == " ") {
	        alert("Please Fill No !Thank You!");
	    } else if (a == b) {
	        document.getElementById("grAns").value = "Both Number is Same. ";

	    } else if (a > b) {
	        document.getElementById("grAns").value = a + " is Greater than " + b;
	    } else if (a > b && a > b) {
	        document.getElementById("grAns").value = a + " is Greater than " + b;
	    } else {

	        document.getElementById("grAns").value = a + " is not Greater than " + b;
	    }
	}

	function show13() {
	    document.querySelector(".table1").style.visibility = "hidden";
	    document.querySelector(".table2").style.visibility = "hidden";
	    document.querySelector(".table3").style.visibility = "hidden";
	    document.querySelector(".table4").style.visibility = "hidden";
	    document.querySelector(".table5").style.visibility = "hidden";
	    document.querySelector(".table6").style.visibility = "hidden";
	    document.querySelector(".table7").style.visibility = "visible";
	    document.querySelector(".table8").style.visibility = "hidden";
	    document.querySelector(".table9").style.visibility = "hidden";
	}

	function show14() {
	    document.querySelector(".table7").style.visibility = "hidden";
	}

	// <<<<----EVEN/ODD----->>>
	function EvenOdd() {
	    var evno = Number(document.getElementById("EoNum").value);
	    if (evno == "") {
	        alert("Please Fill Number.");
	        return false;
	    } else if (isNaN(evno)) {
	        alert("Please!Fill Only Number");
	        return false;
	    }
	    if (evno % 2 == 0) {
	        document.getElementById("EoAns").value = "EVEN";
	    } else {
	        document.getElementById("EoAns").value = "ODD";
	    }
	}

	function show15() {
	    document.querySelector(".table1").style.visibility = "hidden";
	    document.querySelector(".table2").style.visibility = "hidden";
	    document.querySelector(".table3").style.visibility = "hidden";
	    document.querySelector(".table4").style.visibility = "hidden";
	    document.querySelector(".table5").style.visibility = "hidden";
	    document.querySelector(".table6").style.visibility = "hidden";
	    document.querySelector(".table7").style.visibility = "hidden";
	    document.querySelector(".table8").style.visibility = "visible";
	    document.querySelector(".table9").style.visibility = "hidden";
	}

	function show16() {
	    document.querySelector(".table8").style.visibility = "hidden";
	}

	// <<<------LEAP YEAR----->>>>
	function Leap() {

	    var nom = Number(document.getElementById("LNum").value);
	    if (nom == "") {
	        alert("Please Fill Number.");
	        return false;
	    } else if (isNaN(nom)) {
	        alert("Please!Fill Only Number");
	        return false;
	    } else if (nom % 4 == 0) {
	        document.getElementById("LAns").value = "Leap Year";

	    } else {

	        document.getElementById("LAns").value = "Not Leap Year";
	    }
	}

	function show17() {
	    document.querySelector(".table1").style.visibility = "hidden";
	    document.querySelector(".table2").style.visibility = "hidden";
	    document.querySelector(".table3").style.visibility = "hidden";
	    document.querySelector(".table4").style.visibility = "hidden";
	    document.querySelector(".table5").style.visibility = "hidden";
	    document.querySelector(".table6").style.visibility = "hidden";
	    document.querySelector(".table7").style.visibility = "hidden";
	    document.querySelector(".table8").style.visibility = "hidden";
	    document.querySelector(".table9").style.visibility = "visible";
	}

	function show18() {
	    document.querySelector(".table9").style.visibility = "hidden";
	}
	// <<<<<--------CLEAR FUNCTION------->>>>>
	function clearFun() {
	    document.getElementById("num").value = "";
	    document.getElementById("num1").value = "";
	    document.getElementById("num2").value = "";
	    document.getElementById("num3").value = "";
	    document.getElementById("volAns").value = "";
	    document.getElementById("volnum").value = "";
	    document.getElementById("AsciiNum").value = "";
	    document.getElementById("AsciiAns").value = "";
	    document.getElementById("PalAns").value = "";
	    document.getElementById("PalNum").value = "";
	    document.getElementById("grNum1").value = "";
	    document.getElementById("grNum2").value = "";
	    document.getElementById("grAns").value = "";
	    document.getElementById("EoNum").value = "";
	    document.getElementById("EoAns").value = "";
	    document.getElementById("LAns").value = "";
	    document.getElementById("LNum").value = "";
	    document.getElementById("ArmNum").value = "";
	    document.getElementById("ArmAns").value = "";
	}