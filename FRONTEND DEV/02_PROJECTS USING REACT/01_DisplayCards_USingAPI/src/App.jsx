import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Navbar/>
      <div className="container1 bg-violet-200">
      <div className="container mx-auto p-4 bg-violet-200  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="card bg-white p-6 rounded-lg shadow-lg">
              <img className="rounded-md" src="https://source.unsplash.com/500x300/?coding,technology,Programming" alt="API images failed..." />
              <h1 className="text-xl font-semibold mb-2">{card.title}</h1>
              <p className="text-gray-700 mb-4">{card.body}</p>
              <span className="text-sm text-gray-500">By: UserId: {card.userId}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  )
}

export default App
