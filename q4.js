let book1 = {isbn: '1001', title: 'Happy', 
             author: 'Nattamon', page: '12'}
let book2 = {isbn: '1002', title: 'Sad'}

function newBook(book1, book2) {
    let merged = { ...book1, ...book2}
    return merged
}
console.log(newBook(book1, book2));