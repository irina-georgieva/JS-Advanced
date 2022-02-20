class LibraryCollection {
    constructor(capacityNumber) {
        this.capacity = capacityNumber;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {

            if (this.books.length >= this.capacity) {
                throw new Error('Not enough space in the collection.');
            } else {
                let book = {
                    bookName,
                    bookAuthor,
                    payed: false
                };

                this.books.push(book);
                return `The ${bookName}, with an author ${bookAuthor}, collect.`;
            }
        
    };

    payBook(bookName) {

            let currentBook = this.books.find(b => b.bookName == bookName);

            if (!this.books.some(b => b.bookName === bookName)) {
                throw new Error(`${bookName} is not in the collection.`);
            } else {
                if (currentBook.payed == true) {
                    throw new Error(`${bookName} has already been paid.`);
                } else {
                    currentBook.payed = true;
                    return `${bookName} has been successfully paid.`;
                }
            }
        
    };

    removeBook(bookName) {

            let currentBook = this.books.find(b => b.bookName === bookName);

            if (!this.books.some(b => b.bookName === bookName)) {
                throw new Error("The book, you're looking for, is not found.");
            } else {
                if (currentBook.payed == false) {
                    throw new Error(`${bookName} need to be paid before removing from the collection.`);
                } else {
                    let index = this.books.indexOf(currentBook);
                    this.books.splice(index, 1);

                    return `${bookName} remove from the collection.`;
                }
            }
        
    }

    getStatistics(bookAuthor) {
        
        if (bookAuthor === undefined) {
            let emptySlots = this.capacity - this.books.length;
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            let string = `The book collection has ${emptySlots} empty spots left.\n`;

            for (const book of this.books) {
                let statusPaid = 'Not Paid';
                if (book.payed) {
                    statusPaid = 'Has Paid';
                } else {
                    statusPaid = 'Not Paid';
                }
                string += `${book.bookName} == ${book.bookAuthor} - ${statusPaid}.\n`;
            }

            return string.trim();

        } else if(typeof(bookAuthor) === 'string') {
            if (this.books.some(b => b.bookAuthor === bookAuthor)) {
                let book = this.books.find(b => b.bookAuthor == bookAuthor);
                let statusPaid = 'Not Paid';
                if (book.payed) {
                    statusPaid = 'Has Paid';
                } else {
                    statusPaid = 'Not Paid';
                }

                return `${book.bookName} == ${book.bookAuthor} - ${statusPaid}.`;
            } else {
                throw new Error( `${bookAuthor} is not in the collection.`);
            }
        }

    };
}
const library = new LibraryCollection(5)
library.addBook("Don Quixote", "Miguel de Cervantes");
library.payBook("Don Quixote");
library.addBook("In Search of Lost Time", "Marcel Proust");
library.addBook("Ulysses", "James Joyce");
console.log(library.getStatistics());
