import React from 'react'
import styles from './books.module.css'

function Books(props) {
	return (
		<div>
			<h1>This books are from the API</h1>
			<div className={styles['book-presentation-container']}>
				{props.books.map(book => {
					return <div key={book.id} className={styles['book-presentation']}>
						<img src={book.cover} alt={book.title} title={book.title} />
						<h2>{book.title}</h2>
						<p>{book.body}</p>
						<button>Buy this book for ${book.price} now!</button>
					</div>
				})}
			</div>
		</div>
	)
}

export default Books
