// Returns a Boolean for if a string is a palindrome
// A palindrome is a word, phrase, or sentence that is
// spelt the same way forwards and backwards.
// e.g. racecar, Hannah, madam.

function palindrome(str) {

  str = str.toLowerCase();
  let letters = str.split(/[\W_]/);
  str = letters.join('');

  let midLetterIndex;

  midLetterIndex = Math.floor(str.length/2);

  let firstHalf = str.slice(0, midLetterIndex);

  let secondHalf = str.slice(midLetterIndex + str.length % 2);
  // odd length words start the second half one index point ahead of the evens.
  // rac[e]car, Han[n]ah
  // + 1 for the odd length strings so the middle letter isn't included.

  if (firstHalf === reverseString(secondHalf)) {
    return true;
  } else {
    return false;
  }

  function reverseString(toReverse) {
    let reversed = "";
    for (let i = toReverse.length - 1; i >= 0; i--) {
      reversed += toReverse[i];
    }
    return reversed;
  }
}
