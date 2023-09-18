export default function AddBookForm () {
    return <>
        <div className="form-container">
            <p>Book Name:</p>
            <input type="text" placeholder="Enter book name" />
            <p>Author</p>
            <input type="text" placeholder="Author name" />
            <p>Edition</p>
            <input type="text" placeholder="Which year's edition it is?" /><br />
            <button type="submit">Add</button>
        </div>
    </>
}