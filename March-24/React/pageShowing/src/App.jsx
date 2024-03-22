import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SLIDES from './data/data'

function App() {
  const [data, setData] = useState({})
  const [nextPage, setNextPage] = useState(0);
  const [color, setColor] = useState()
  const showNextPages = () => {
    if (nextPage < SLIDES.length - 1) {
      setNextPage(prev => prev + 1);
    }
  }

  const showPrevPages = () => {
    if (nextPage > 0) {
      setNextPage(prev => prev - 1)
    };
  }

  const resetPage = () => {

    setNextPage(0)

  }


  return (
    <div>
      <div className='btn-div'>
        <button disabled={nextPage === 0} className='button' onClick={resetPage}>Reset</button>

        <button disabled={nextPage === 0} className='button' onClick={showPrevPages}>Previous</button>
        <button disabled={nextPage === SLIDES.length - 1} className='button' onClick={showNextPages}>Next</button>
      </div>
      {/* //Box section  */}
      <div className='App'>
        {
          SLIDES.slice(nextPage, nextPage + 1).map((items, index) => {
            return (
              <div key={index} className='card-box'>
                <h3>{items.title}</h3>
                <hr />
                <div className='inner-card-box'>
                  {items.text}
                </div>
              </div>)
          })
        }
      </div>
    </div>

  )
}

export default App
