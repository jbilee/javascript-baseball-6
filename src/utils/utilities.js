const hasDuplicateChar = (string) => {
  const characters = string.split('');
  const charactersSet = new Set(characters);

  if (characters.length !== charactersSet.size) {
    return true;
  }

  return false;
};

export default hasDuplicateChar;
