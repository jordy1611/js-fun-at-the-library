
function createLibrary(library) {
cityLibrary = {
  name: library,
shelves: {fantasy: [], fiction: [], nonFiction: []}
};
return cityLibrary;
};

function addBook(cityLibrary, book) {
  if (book.genre === "fantasy") {
  cityLibrary.shelves.fantasy.push(book);
};
};

module.exports = {
createLibrary: createLibrary,
addBook: addBook,
  // checkoutBook: checkoutBook
};
