const verifyTitle = (keyword, title) => {
  if (!keyword || !title) {
    return false;
  }

  let keywordSum = 0;
  for (let i = 0; i < keyword.length; i++) {
    keywordSum += keyword.toLowerCase().charCodeAt(i) - 96;
  }

  let titleArray = title.split(" ");
  let titleWordsMatched = 0;
  for (let i = 0; i < titleArray.length; i++) {
    let wordSum = 0;
    let wordLower = titleArray[i].toLowerCase();
    for (let j = 0; j < wordLower.length; j++) {
      let char = wordLower[j];
      if (char >= "a" && char <= "z") {
        wordSum += char.charCodeAt(0) - 96;
      }
    }
    if (wordSum === keywordSum) {
      titleWordsMatched++;
    }
  }

  if (titleWordsMatched === 2) {
    return true;
  }
  return false;
};
