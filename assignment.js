//1 No. Problem: Kilometer to Meter Function

function kilometerToMeter(kilometer) {
    if(kilometer >= 0){
        var meter =kilometer*1000;
        return meter;
    }
    else(
        console.log("Given Distance is Invalid")
    )
    
}    

var distanceInMeter = kilometerToMeter(100);
console.log(distanceInMeter);



//2 No. Problem: Budget Calculator

function budgetCalculator(watch, phone, laptop){
    if(watch>=0 && phone>=0 && laptop>=0){
        var totalCost =watch*watchPrice + phone*phonePrice + laptop*laptopPrice;

        return totalCost;
    }

    else{
        console.log("Invalid Amount");
    }
}

var watchPrice=50;
var phonePrice=100;
var laptopPrice =500;
var myTotalBudget =budgetCalculator(-2, 1, 1);
console.log(myTotalBudget);







//3 No. Propblem: Hotel Cost

function hotelCost(day){
    if(day<=10){
        return day*100;
    }
    else if(day>=11 && day<=20){
        var cost1 =10*100;
        day-=10;
        day*=80;
        day+=cost1;
        return day;
    }
    else if(day>20){
        var cost1 =10*100;
        var cost2=10*80;
        day-=20;
        day*=50;
        day+=(cost1+cost2);
        return day;
    }
    else{
        console.log("Invalid Input");
    }


}

var hotelStayCost=hotelCost(11);
console.log(hotelStayCost);
        
 
 //No.4 Problem: return largest element of an array

 function megaFriend(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  
  var word = megaFriend(["shakib","tamim","Mushfiq"]);
  console.log(word); 
