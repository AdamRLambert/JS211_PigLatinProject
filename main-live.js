const pigLatin = (word) => {
  word = document.getElementById("user-input").value;
  word = word.toLowerCase().trim();

  const vowels = ["a", "e", "i", "o", "u"];
  let translated = "";
  let firstLetter = word.slice(0, 1);

  if (vowels.includes(firstLetter)) {
    translated = word + "yay";
    console.log(translated);
    document.getElementById("display-element").innerHTML = translated;
  } else {
    translated = word.slice(1) + word.slice(0, 1) + "ay";
    console.log(translated);
    document.getElementById("display-element").innerHTML = translated;
  }
};
