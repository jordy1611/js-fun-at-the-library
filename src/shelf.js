
function shelfBook(book, scifiShelf) {
  if (scifiShelf.length <= 2) {
if (book.genre === "scifi") {
  return scifiShelf.unshift(book)
}
}
};

function unshelfBook(book, scifiShelf) {
  for (i = 0; i < scifiShelf.length; i++) {
    if (scifiShelf[i].title === book) {
      scifiShelf.splice(i,1)
    }
  }
};

function listTitles(fantasyShelf, shelf) {
  var titles = [];
for (i=0; i < fantasyShelf.length; i++) {
  titles.push(fantasyShelf[i].title);
} return titles.join(', ')
};

function searchShelf(scifiShelf, book) {
for (i = 0; i < scifiShelf.length; i++) {
  if (scifiShelf[i].title === book) {
    return true;
  }
} return false;
};

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf,
};
