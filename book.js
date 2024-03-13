class Book {

    constructor (isbn, title=undefined, ebook=false) {
        this.isbn = isbn
        this.title = title
        this.ebook = ebook
        this.authors = []
    }

    addAuthor (fn, ln) {
        return this.authors.push({ firstname: fn, lastname: ln })
    }

    getFirstAuthors () {
        return this.authors[0]
    }

    getLastAuthors () {
        return this.authors[this.authors.length - 1]
    }

    getCoAuthors () {
        const [ , ...coAuthors] = this.authors
        return coAuthors 
    }

    findAuthor (firstname,lastname) {
        return this.authors.find(
            (author) => { return (
              author.firstname.toLowerCase() === firstname.toLowerCase() &&
              author.lastname.toLowerCase() === lastname.toLowerCase()
            )}
          )
    }

    hasEbook () {
        return this.ebook
    }
}

const bk1 = new Book()
console.log(bk1.addAuthor('Somsak', 'Jaidee')) //1
console.log(bk1.addAuthor('Somsri', 'Jaidee')) //2
console.log(bk1.addAuthor('Somchai', 'Jaidee')) //3
console.log(bk1)
const bk2 = new Book('1-234-567-8', 'Introduction to JavaScript', true)
console.log(bk2.addAuthor('John', 'May'))
console.log(bk2)

console.log(bk1.getFirstAuthor())
console.log(bk1.getLastAuthor())
console.log(bk1.getCoAuthors())
console.log(bk1.findAuthor('Somchai', 'JAIDEE'))
console.log(bk1.hasEbook())