/*
var ILikePaneer=false;
var myNum=8;

if (myNum==10){

    document.write("MyNum is greater than 10");

}
else{

    document.write("myNum is not equal");
}
*/

/*
var myAge = 24;

if (myAge > 30) {

    document.write("you are over 30");

} else if (myAge > 20) {

    document.write("you are over 20");

} else if (myAge > 10) {

    document.write("you are over 10");

} else {

document.write("you are not over 10");}


//COMPARISION OPERATOR

var x = 5
x > 4

var myAge = 4;

if (myAge >= 18 && myAge <= 30) {
    document.write("you can come, you eligabe"); 
} else {
    document.write("you aint coming!"); 
}

//Video_15

var myAge= 14;

if(myAge >= 18 || myAge > 30){
        document.write("you aint coming!");
        

} else{
    document.write("you can come, you eligabe");
}


//video_16_WhileLoop

var age = 5;

while (age < 10) {

    console.log("your age is less than 10");
    age++; //third_component

}
document.write("you are now over 10");
*/


// video_17_ForLoop

var links = document.getElementsByTagName("a");
// console.log(links);

for (i = 0; i < links.length; i++) {
   console.log(links[i].innerText);
}
// document.write("all links looped now");


function btnClick () {
    // var firstInput = document.getElementById('f').value;
    // var secondInput = document.getElementById('s').value;
    // if(!firstInput) {
    //     swal({
    //         title: "Input First number!",
    //         icon: "warning",
    //     });
    //     return;
    // }

    // if(!secondInput) {
    //     swal({
    //         title: "Input Second number!",
    //         icon: "warning",
    //     });
    //     return;
    // }

    // var convertedFirstInput = parseInt(firstInput);
    // var convertedSecondInput = parseInt(secondInput);
    var returnedVal = getParsedValues();
    var result = returnedVal[0] + returnedVal[1];
    // var resultDiv = document.getElementById('g');
    var resultText = returnedVal[0]  + ' + '  + returnedVal[1] + " = " + result
    // resultDiv.value = resultText;

    swal({
        title: resultText,
        icon: "success",
    });
}
function minus () {
    // var firstInput = document.getElementById('f').value;
    // var secondInput = document.getElementById('s').value;
    // if(!firstInput) {
    //     swal({
    //         title: "Input First number!",
    //         icon: "warning",
    //     });
    //     return;
    // }

    // if(!secondInput) {
    //     swal({
    //         title: "Input Second number!",
    //         icon: "warning",
    //     });
    //     return;
    // }
    // var convertedFirstInput = parseInt(firstInput);
    // var convertedSecondInput = parseInt(secondInput);
    var returnedVal = getParsedValues();
    var result = returnedVal[0] - returnedVal[1];
    // var resultDiv = document.getElementById('g');
    var resultText = returnedVal[0]  + ' - '  + returnedVal[1] + " = " + result
    // resultDiv.value = resultText;

    swal({
        title: resultText,
        icon: "success",
    });
}
function multiply () {
    // var firstInput = document.getElementById('f').value;
    // var secondInput = document.getElementById('s').value;
    // if(!firstInput) {
    //     swal({
    //         title: "Input First number!",
    //         icon: "warning",
    //     });
    //     return;
    // }

    // if(!secondInput) {
    //     swal({
    //         title: "Input Second number!",
    //         icon: "warning",
    //     });
    //     return;
    // }
    // var convertedFirstInput = parseInt(firstInput);
    // var convertedSecondInput = parseInt(secondInput);
    var returnedVal = getParsedValues();
    var result = returnedVal[0] * returnedVal[1];
    // var resultDiv = document.getElementById('g');
    var resultText = returnedVal[0]  + ' * '  + returnedVal[1] + " = " + result
    // resultDiv.value = resultText;

    swal({
        title: resultText,
        icon: "success",
    });
}

function division () {
    // var firstInput = document.getElementById('f').value;
    // var secondInput = document.getElementById('s').value;
    // if(!firstInput) {
    //     swal({
    //         title: "Input First number!",
    //         icon: "warning",
    //     });
    //     return;
    // }

    // if(!secondInput) {
    //     swal({
    //         title: "Input Second number!",
    //         icon: "warning",
    //     });
    //     return;
    // }
    // var convertedFirstInput = parseInt(firstInput);
    // var convertedSecondInput = parseInt(secondInput);
    var returnedVal = getParsedValues();
    var result = returnedVal[0] / returnedVal[1];
    // var resultDiv = document.getElementById('g');
    var resultText = returnedVal[0]  + ' / '  + returnedVal[1] + " = " + result
    // resultDiv.value = resultText;

    swal({
        title: resultText,
        icon: "success",
    });
}

function percentage () {
    // var firstInput = document.getElementById('f').value;
    // var secondInput = document.getElementById('s').value;
    // if(!firstInput) {
    //     swal({
    //         title: "Input First number!",
    //         icon: "warning",
    //     });
    //     return;
    // }

    // if(!secondInput) {
    //     swal({
    //         title: "Input Second number!",
    //         icon: "warning",
    //     });
    //     return;
    // }
    // var convertedFirstInput = parseInt(firstInput);
    // var convertedSecondInput = parseInt(secondInput);
    var returnedVal = getParsedValues();
    var result = returnedVal[0] / returnedVal[1];
    // var resultDiv = document.getElementById('g');
    var resultText = returnedVal[0]  + ' % '  + returnedVal[1] + " = " + result
    // resultDiv.value = resultText;

    swal({
        title: resultText,
        icon: "success",
    });
}

function getParsedValues () {
    var firstInput = document.getElementById('f').value;
    var secondInput = document.getElementById('s').value;
    if(!firstInput) {
        swal({
            title: "Input First number!",
            icon: "warning",
        });
        return;
    }

    if(!secondInput) {
        swal({
            title: "Input Second number!",
            icon: "warning",
        });
        return;
    }
    var convertedFirstInput = parseInt(firstInput);
    var convertedSecondInput = parseInt(secondInput);
    return [convertedFirstInput, convertedSecondInput];
}