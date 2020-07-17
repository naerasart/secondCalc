 function cos(form) {
     calc.result.value = Math.cos(calc.result.value);
 }

 function sin(form) {
     calc.result.value = Math.sin(calc.result.value);

 }

 function tan(form) {
     calc.result.value = Math.tan(calc.result.value);
 }


 function sqrt(form) {
     calc.result.value = Math.pow(calc.result.value, 1 / 2);
 }

 function del(input) {
     calc.result.value = calc.result.value.substring(0, calc.result.value.length - 1)
 }

 function del2(input) {
     calc.result2.value = calc.result2.value.substring(0, calc.result2.value.length - 1)
 }

 function number(value) {
     calc.result.value += value;
     calc.result2.value += value;
 }

 function number2(value) {

     calc.result2.value += value;


 }

 function clearing(value) {
     calc.result.value = " ";
 }

 function clearing2(value) {
     calc.result2.value = " ";
 }

 function equal() {
     calc.result.value = eval(calc.result.value);
 }

 function square() {
     calc.result.value = Math.pow(calc.result.value, 2);

 }

 function cube(form) {
     calc.result.value = Math.pow(calc.result.value, 3);
 }


 /************************************
 Citation:
 .........
 Scientific Calculator | Build with | JavaScript
 Posted on Apr 10, 2020 by Mohammed Rakib
 https://www.youtube.com/watch?v=WxaxSwNrgCE
 **************************************/