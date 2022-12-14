import QuoteBox from "./componets/QuoteBox"
import quoteDB from "./db/quotes.json"
import colors from "./db/colors.js"
import { useState } from "react"
//importaciones nos sirve para importar codigos de otras carpetas y sus archivos especificados 
//y podmos utilizar esos codigos en este archivo donde se maquetara la pagina desde sus inicios

function App() {

  const getRandom = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
  }

  const [quote, setQuote] = useState(getRandom(quoteDB))//
  const [color, setColor] = useState(getRandom(colors))//

  const getNewValues = () => {
    const newQuote = getRandom(quoteDB)
    const newColor = getRandom(colors)
    setQuote(newQuote)
    setColor(newColor)
  }
  const backgroundObject = {
    backgroundColor: color
  }
  const colorObject = {
    color: color
  }



  return (
    <div className="App"
      style={backgroundObject}>

      <QuoteBox
        quote={quote}
        getNewValues={getNewValues}
        backgroundObject={backgroundObject}
        colorObject={colorObject}

      />
    </div>

  )
}

export default App
