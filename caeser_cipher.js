function rot13(str) {
  let letters = str.split('');

  for (let i = 0; i < letters.length; i++) {
    if (isAlpha(letters[i])) {
      if (str.charCodeAt(i) < "N".charCodeAt(0)) {
        letters[i] = String.fromCharCode(str.charCodeAt(i) + 13);
      } else {
        letters[i] = String.fromCharCode(str.charCodeAt(i) - 13);
      }
    }
  }

  // tests if the character is a letter
  function isAlpha(ch) {
    return /[a-z]/i.test(ch);
  }

  return letters.join('');

}

rot13("SERR PBQR PNZC");
