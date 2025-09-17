 import './App.css'
export default function Book({book}){
    return <li className="book">
        Name: {book.name}
       <br /> Price: {book.price}
    </li>
}