class Book {
    constructor(title, author, yearPublished) {
        this.Booktitle = title;
        if (this.Booktitle === null || this.Booktitle === '') {
            console.log('no title');             
        }
        this.Bookauthor = author;
        if (this.Bookauthor === null || this.Bookauthor === '') {
            console.log('no author');            
        }
        this.BookyearPublished = yearPublished;
        if (this.BookyearPublished == null || this.BookyearPublished === '') {
            console.log('no year published');           
        }
    }

    getInfo() {
        return `title:${this.Booktitle}, author:${this.Bookauthor}, yearPublished:${this.BookyearPublished}`;
    }
}

let b1 = new Book('', null,1);
console.log(b1);
console.log(b1.getInfo());