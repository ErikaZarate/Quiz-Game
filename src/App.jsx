import { useState } from "react";
import Juego from "./components/Juego";
import FindelJuego from "./components/FindelJuego";
import Respuesta from "./components/Respuesta";
import './components/Juego.css'
import Inicio from "./components/Inicio";
import Capturar from "./components/Capturar";

function App() {

  const [pagina, setPagina] = useState('Home')
  const [puntuacion, setPuntuacion] = useState(0);

  const [listQuestions, setListQuestions] = useState(
    JSON.parse(localStorage.getItem("listQuestions")) || []
  )

  return (

    <div className="container mt-2">

      {
        pagina === 'Home' && (
          <div>
            <Inicio
              setPagina={setPagina}
            />
          </div>
        )
      }

      {
        pagina === 'Capture' && (
          <div>
            <Capturar
              setPagina={setPagina}
              listQuestions={listQuestions}
              setListQuestions={setListQuestions}
            />
          </div>
        )
      }

      {

        pagina === 'Game' && (
          <div>
            <Juego
              pagina={pagina}
              setPagina={setPagina}
              listQuestions={listQuestions}
              puntuacion={puntuacion}
              setPuntuacion={setPuntuacion}
            />
          </div>
        )
      }

      {
        pagina === 'Finish' && (
          <div>
            <FindelJuego
              setPagina={setPagina}
              listQuestions={listQuestions}
              puntuacion={puntuacion}
              setPuntuacion={setPuntuacion}
            />
          </div>
        )
      }

      {
        pagina === 'Answers' && (
          <div>
            <Respuesta
              setPagina={setPagina}
              listQuestions={listQuestions}
            />
          </div>
        )
      }

    </div>
  )
}

export default App
