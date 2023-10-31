function findAccountById(accounts, id) {


  const result= accounts.find((e)=>
  e.id == id);

  return result;
}

function sortAccountsByLastName(accounts) {

  if (!accounts) return

 const acc= accounts.sort((a,b)=>{
   

    let la=a.name.last.toLowerCase();
    let lb=b.name.last.toLowerCase();

    if(la<lb){

      return -1;
    }

    if(la>lb){
      return 1;
    }

    return 0;

  })

  return acc;
}

function getTotalNumberOfBorrows(account, books) {
let result=0;

  for(let key in books){

   if(books[key].borrows.find((book)=> book.id === account.id)){
  result++;
  }   
  }
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
const booksCheckedOut=books.filter((bk)=>{

  for(let key in bk.borrows){
    const lastBorrow= bk.borrows[key];
    return lastBorrow.id==account.id && lastBorrow.returned==false;

  }
  

})
.map(
  (bk)=>{
    const author=authors.find((author)=>author.id==bk.authorId);
    return {...bk,author:author}
  });

console.log(booksCheckedOut);


return booksCheckedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
