function findAuthorById(authors, id) {

  const author= authors.find((author)=>author.id==id)

  console.log(author);
  return author;
}

function findBookById(books, id) {
  const book = books.find((book)=>book.id==id);
  return book;
}

function partitionBooksByBorrowedStatus(books) {

 const booksCheckedOut= books.filter((book)=>{

    const bookBorrows=book.borrows[0];

   return  bookBorrows.returned==false;
  })

  const booksReturned= books.filter((book)=>{

    const bookBorrows=book.borrows[0];

   return  bookBorrows.returned==true;
  })


  return [booksCheckedOut,booksReturned];

}

function getBorrowersForBook(book, accounts) {
const res=  accounts.reduce((borrows,account)=>{
    const bookBorrows=book.borrows;
   
    for(let key in bookBorrows){
      if(bookBorrows[key].id === account.id ){

        borrows.push({...account,returned:book.borrows[key].returned});
      }
    }
    return borrows;

  },[])



  return res.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
