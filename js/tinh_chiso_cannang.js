let height=parseFloat(prompt("nhap chieu cao"));
let weight=parseFloat(prompt("nhap can nang:"));

let bmi= weight/(height*height);
if(bmi<18.5){
    alert("underweight");
}else if(bmi>=18.5 && bmi<25){
    alert("normal");
}else if(bmi>=25 && bmi<30){
    alert("overweight");
}else{
    alert("obese")
}



