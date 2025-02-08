class BookClub {
    constructor(library){
        this.library = library;
        this.books = [];
        this.members = [];
    }
    addBook(title, author){
        class Book{
            constructor(title,author){
                this.title = title;
                this.author = author;
            }
        }
        
        const existingBook = this.books.find(b => {
            return b.title === title && b.author === author
        })

        if(existingBook){
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        } else {
            const newBook = new Book(title,author);
            this.books.push(newBook);
           return `The book "${title}" by ${author} has been added to ${this.library} library.`
        }
    }

    addMember (memberName){
        class Member{
            constructor(memberName){
                this.memberName = memberName;
            }
        }

        const existingMember = this.members.find(m => {
            return m.memberName === memberName
        })

        if(existingMember){
            return `Member ${memberName} is already a part of the book club.`
        } else{
            const newMember = new Member(memberName);
            this.members.push(newMember);
            return `Member ${memberName} has been joined to the book club.`
        }
    }
    assignBookToMember (memberName, bookTitle){

        const existingBook = this.books.find(b => {
            return b.title === bookTitle
        })
        const existingMember = this.members.find(m => {
            return m.memberName === memberName
        })

        if(!existingMember){
            throw new Error(`Member ${memberName} not found.`)
        } else if(!existingBook){
            throw new Error(`Book "${bookTitle}" not found.`)
        } else{
            const removedBookIndex = this.books.findIndex(b => 
                b.title === bookTitle
            );
            const removedBook = this.books.splice(removedBookIndex, 1)[0];
            return `Member ${memberName} has been assigned the book "${removedBook.title}" by ${removedBook.author}.`
        }
    }

    generateReadingReport(){

        const bookInfo = this.books.map(b => `"${b.title}" by ${b.author}`);

        if(this.members.length === 0){
            return `No members in the book club.`;
        } else if(this.books.length === 0){
           return `No available books in the library.`;
        } else{
            return `Available Books in ${this.library} library:\n${bookInfo.join('\n')}`
        }
    }
}

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Mary", "The Great Gatsby"));

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
// console.log(myBookClub.generateReadingReport());

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Peter", "The Da Vinci Code"));

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "1984"));
console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub.generateReadingReport());




