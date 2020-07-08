class Book {
	constructor(title, genre, author, read, readDate) {
		this.title = title;
		this.genre = genre;
		this.author = author;
		this.read = read;
		this.readDate = readDate;
	}
}

class BookList  extends Book {
	constructor(completedBook, notRead, nextRead, currentRead, lastRead, allBooks) {
		super(currentRead); 
		this.completedBook = completedBook;
		this.notRead = notRead;
		this.nextRead = nextRead;
		this.lastRead = lastRead;
		this.allBooks = [];
    }
    addBook(book){
        this.allBooks.push(book);
    }
    finishCurrentBook(){
        this.currentRead === this.read;
        this.currentRead === new Date(Date.now())
        this.lastRead === this.completedBook;
        this.currentRead === this.nextRead;
        this.nextRead === this.allBooks.unshift(this.nextRead)
    }
}


// new instances of Book Class
let Book1 = new Book('half of a yellow sun', 'african prose', 'chimamanda', true, new Date());
let Book2 = new Book('purple hibiscus', 'african fiction', 'chimammnada', true, new Date());

//new instances of book list class
let proxyBookList = new BookList('yellow sun', 'black sun', 'red sun', 'blue sun', 'dark sun');

// add Book 1 as a new book to the proxyBooklist
proxyBookList.addBook('Book1');