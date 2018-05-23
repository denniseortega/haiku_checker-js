//ui
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { haiku } from './haiku-checker.js';

$(document).ready(function() {
  $('#haiku-form').submit(function(event) {
    event.preventDefault();
    $(".output").hide();

    let line1 = $("#haikuLine1").val();
    let line2 = $("#haikuLine2").val();
    let line3 = $("#haikuLine3").val();

    let NewHaiku = new Haiku();

    let vowels1 = NewHaiku.countVowels(NewHaiku.line1) + NewHaiku.silentVowels(NewHaiku.line1) + NewHaiku.removeDiphthong(NewHaiku.line1);
    let vowels2 = NewHaiku.countVowels(NewHaiku.line2) + NewHaiku.silentVowels(NewHaiku.line2) + NewHaiku.removeDiphthong(NewHaiku.line2);
    let vowels3 = NewHaiku.countVowels(NewHaiku.line3) + NewHaiku.silentVowels(NewHaiku.line3) + NewHaiku.removeDiphthong(NewHaiku.line3);

    if (vowels1 === 5 && vowels2 === 7 && vowels3 === 5){
      let result = "Congratulations, your poem is a haiku!"
    }
    $(".haikuResults").text(result);
    $(".output").show();
  });
});
