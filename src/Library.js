
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
}; if (book.genre === "nonFiction") {
  cityLibrary.shelves.nonFiction.push(book);
} if (book.genre === "fiction") {
  cityLibrary.shelves.fiction.push(book);
}
};

function checkoutBook(cityLibrary, bookName) {;
  for (i = 0; i < cityLibrary.shelves.fiction.length; i++) {;
    if (cityLibrary.shelves.fiction[i].title.includes(bookName)) {
      cityLibrary.shelves.fiction.splice(i, 1);
      return `You have now checked out ${bookName} from the ${cityLibrary.name}`;
  }
} for (i = 0; i < cityLibrary.shelves.fantasy.length; i++) {;
  if (cityLibrary.shelves.fantasy[i].title.includes(bookName)) {
    cityLibrary.shelves.fantasy.splice(i, 1);
    return `You have now checked out ${bookName} from the ${cityLibrary.name}`;
}
} for (i = 0; i < cityLibrary.shelves.nonFiction.length; i++) {;
  if (cityLibrary.shelves.nonFiction[i].title.includes(bookName)) {
    cityLibrary.shelves.nonFiction.splice(i, 1);
    return `You have now checked out ${bookName} from the ${cityLibrary.name}`;
}
} return `Sorry, there are currently no copies of ${bookName} available at the ${cityLibrary.name}`
}

    /*for (i = 0; i < cityLibrary.shelves.fiction.length; i++) {
      if (cityLibrary.shelves.fiction[i].title === book.title) {
        cityLibrary.shelves.fiction.splice(i,1);
     }
   } return`You have now checked out ${book} from the ${cityLibrary.name}`
 };*/
/*function checkoutBook(cityLibrary, book) {
/*  if (book.genre === "fantasy") {
    for (i = 0; i < cityLibrary.shelves.fantasy.length; i++) {
      if (cityLibrary.shelves.fantasy.title === book) {
        cityLibrary.shelves.fantasy.splice(i,1);
      } return `You have now checked out ${book} from the ${cityLibrary}`
    }
  }; if (book.genre === "nonFiction") {
    for (i = 0; i < cityLibrary.shelves.nonFiction.length; i++) {
      if (cityLibrary.shelves.nonFiction.title === book) {
        cityLibrary.shelves.nonFiction.splice(i,1);
      } return `You have now checked out ${book} from the ${cityLibrary}`
    }
  } if (book.genre === "fiction") {
    for (i = 0; i < cityLibrary.shelves.fiction.length; i++) {
      if (cityLibrary.shelves.fiction.title === book) {
        cityLibrary.shelves.fiction.splice(i,1);
     }
   }
 } console.log("You have now checked out Pride and Prejudice from the Denver Public Library")
} */
module.exports = {
createLibrary: createLibrary,
addBook: addBook,
checkoutBook: checkoutBook
};
