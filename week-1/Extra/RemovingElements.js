function removeEveryOther(arr) {
  return arr.filter((item, index) => {
    return index % 2 === 0;
  });
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again', 'Goodbye Again', 'Hello Again Again']));
