```javascript
const books = [
    {
        id: 1,
        title: "Things Fall Apart",
        author: "Chinua Achebe",
        category: "African Literature",
        year: 1958,
        available: true
    },
    {
        id: 2,
        title: "The River Between",
        author: "Ngugi wa Thiong'o",
        category: "African Literature",
        year: 1965,
        available: true
    },
    {
        id: 3,
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Programming",
        year: 2008,
        available: true
    },
    {
        id: 4,
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        category: "Computer Science",
        year: 2009,
        available: true
    },
    {
        id: 5,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Fiction",
        year: 1925,
        available: true
    },
    {
        id: 6,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self Development",
        year: 2018,
        available: true
    }
];


// ========================================
// LOAD SAVED BOOK DATA SAFELY
// ========================================

try {

    const savedBooks =
        localStorage.getItem("libraryBooks");


    if (savedBooks) {

        const savedBooksData =
            JSON.parse(savedBooks);


        // Make sure the saved data is an array

        if (Array.isArray(savedBooksData)) {

            // Make sure each saved book has
            // the required properties

            const validBooks =
                savedBooksData.filter(book =>

                    book &&
                    typeof book.id !== "undefined" &&
                    typeof book.title === "string" &&
                    typeof book.author === "string" &&
                    typeof book.category === "string" &&
                    typeof book.available === "boolean"

                );


            // Only replace the catalogue if
            // valid saved data exists

            if (validBooks.length > 0) {

                books.splice(
                    0,
                    books.length,
                    ...validBooks
                );

            }

        }

    }

} catch (error) {

    console.error(
        "Unable to load saved library data:",
        error
    );

}


// ========================================
// EXPORT THE BOOK CATALOGUE
// ========================================

export default books;
```
