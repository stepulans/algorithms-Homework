function buildLetterFrequency(text) {
    var frequency = {};
    var letters = text.replace(/[^a-z]/gi, '').toLowerCase();
  
    for (var i = 0; i < letters.length; i++) {
      var letter = letters[i];
      if (frequency[letter]) {
        frequency[letter]++;
      } else {
        frequency[letter] = 1;
      }
    }
  
    return frequency;
  }
  
  var text = "Hello, World!";
  var letterFrequency = buildLetterFrequency(text);
  
  console.log(letterFrequency);
  