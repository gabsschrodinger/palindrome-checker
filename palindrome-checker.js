function palindrome(str) {
  let newStr = str.replace(/([^a-zA-Z0-9])/g, "").toLowerCase();
  let oddOrEven = 0;
  if(newStr.length % 2 == 0) {
    oddOrEven = 0;
  } else {
    oddOrEven = 0.5;
  }

  let arr = newStr.split("");
  let firstHalf = arr.slice(0, (arr.length / 2) - oddOrEven);
  let secondHalf = arr.slice((arr.length / 2) + oddOrEven, arr.length).reverse();

  for(let i = 0; i < firstHalf.length; i++) {
    if(firstHalf[i] != secondHalf[i]) return false;
  }
  return true;
}