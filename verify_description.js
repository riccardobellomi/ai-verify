const verifyDescription = (keyword, description) => {
  if (!keyword || !description) {
    return false;
  }

  let keywordLength = keyword.length;
  let descriptionArray = description.split(" ");

  if (descriptionArray.length < keywordLength) {
    return false;
  }

  let position = 0;
  for (let i = 0; i < keywordLength; i++) {
    position = Math.floor((descriptionArray.length / keywordLength) * i);
    if (
      descriptionArray[position].charAt(0).toLowerCase() !==
      keyword.charAt(i).toLowerCase()
    ) {
      return false;
    }
  }
  return true;
};
