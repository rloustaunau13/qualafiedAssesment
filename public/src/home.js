function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
 const totalBooks= books.filter((book)=>{

    const bookBorrowed=book.borrows;
    for(let key in bookBorrowed){

      if(bookBorrowed[key].returned==false){
        return true;
      }
    
    }
  })

  return totalBooks.length;
}

function getMostCommonGenres(books) {
  
 const result= books.reduce((acc,book)=>{

  acc[book.genre]=(acc[book.genre]||0)+1;
  return acc;
  },{});

  const genresArray=Object.keys(result).map((genre)=>({
    name:genre,
    count:result[genre],
  }))

  genresArray.sort((a,b)=>b.count-a.count);
  return genresArray.splice(0,5);
}

function getMostPopularBooks(books) {

  const result= books.reduce((acc,book)=>{
    const bookCount=book.borrows.length||0;
   
   acc[book.title]=bookCount;
   return acc;
  },{})

  const getMostPopularBooks=Object.keys(result).map((key)=>({
    name:key,
    count:result[key],
  }))


 // console.log(getMostPopularBooks);

  getMostPopularBooks.sort((a,b)=>b.count-a.count);
  return getMostPopularBooks.splice(0,5);
}

function getMostPopularAuthors(books, authors) {

  const authorBorrows={};

 //initializa author borrows to zero
  authors.forEach((author)=>{
    authorBorrows[author.id]=0;
  })

  books.forEach((book)=>{
    const Aid= book.authorId;
    const borrows= book.borrows.length;
    authorBorrows[Aid] += borrows;
  })
  console.log(authorBorrows);
  
  const popularAuthors = Object.keys(authorBorrows).map((authorId) => {
    const author = authors.find((author) => author.id == authorId);
    return {
      name:  author.name.first+" "+author.name.last,
      count: authorBorrows[authorId],
    };
  });


  popularAuthors.sort((a, b) => b.count - a.count);  //Sort


  console.log(popularAuthors);
  return popularAuthors.slice(0, 5); // Return the top 5 popular authors
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
