//business logic
class Haiku{
  contructor(line1, line2, line3) {
  this.line1 = line1;
  this.line2 = line2;
  this.line3 = line3;
  }

  countVowels(inputWord){
    let letters=[];
    letters = inputWord.split("");
    for (i=0; i < letters.length; i++){
      if(letters[i].match(/[aeiouAEIOU]/) && letters[i-1].match(/[aeiouAEIUO]/)){
        count+=1;
      }
    }
    return count;
  }


  silentVowels(inputWord){
    let letters=[];
    let count = 0;
    words = inputSentence.split("");

    words.forEach(function(word){
    let letters=[];
    letters = words.split("");
    if(letters[letters.length-1] === "e" && letters[letters.length-2].match(/[aeiouAEIOU]/)){
        count-=1;
      }
    }
    return count;
  }

  removeDiphthong(inputWord){
    let letters = [];
    letters = inputWord.split("");
    for (i=0; i < letters.length; i++){
      if (letters[i].match(/[aeiouAEIOU]/) && letters[i-1].match(/[aeiouAEIOU]/)){
        count+=1;
      }
    }
    return count;
  }

}
