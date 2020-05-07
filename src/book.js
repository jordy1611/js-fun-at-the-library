function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(charName, charAge, charPronouns) {
  return character = {
    name: charName,
    age: charAge,
    pronouns: charPronouns,
  }
};

function saveReview(review, reviews) {
  if (reviews.includes(review)) {
    return reviews
  } else {
    return reviews.push(review);
  }
};

function calculatePageCount(bookTitle) {
  bookPageCount = bookTitle.length * 20;
  return bookPageCount
};

function writeBook(bookTitle, bookCharacter, bookGenre) {
  return book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre,
  }
};

function editBook() {
book.pageCount = book.pageCount*.75
};

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook,
  // buildMainCharacter: buildMainCharacter,
  // saveReview: saveReview,
  // calculatePageCount: calculatePageCount,
  // writeBook: writeBook,
  // editBook: editBook
}
