const user = {
    id: 1,
    username: "John Doe"
}


const Books = (props) => {
    return(
        <div>
            <h2 className="text-center">{user.username}'s Books</h2>
            <ul>
                { props.books.map((book) => 
                    <li key={book.id}>{book.title}</li>
                    )}
            </ul>
        </div>
    )
}
export default Books