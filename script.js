function guessNo(){
	var numArray=[];
    var stringArray="";
    for(i=0;i<5;i++)
    {
        numArray[i]=getRandomNo(1,10);
        stringArray+=numArray[i] + " "
    }
    var userGuess = prompt("Guess a number between 1 and 10 (in the array of 5 numbers)");
    var elementCount = countElementInArray(userGuess, numArray);
    alert("Your guess of the number "+userGuess+" appeared in the random array "+elementCount+" time(s)");
    alert("The random array of the numbers was: "+stringArray);
}

function getRandomNo(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function countElementInArray(guess, array){
    var count=0;
    for(i=0;i<array.length;i++){
        if(array[i]==guess){
            count++;
        }
    }
    return count;
}