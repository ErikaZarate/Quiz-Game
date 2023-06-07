import Agregar from "./buttons/Agregar";
import Inicio from "./buttons/Inicio";
import Limpiar from "./buttons/Limpiar";
import Preguntas from "./Preguntas";


const Capturar = ({
    setPagina,
    listQuestions,
    setListQuestions,
}) => {

    return (
        <div className="container">

            <div className="row">
                <div className="col text-start">
                    <h1>Capturar preguntas</h1>
                </div>
                <div className="col text-end mt-1">
                    <Limpiar
                        setListQuestions={setListQuestions}
                    />
                    <Agregar
                        listQuestions={listQuestions}
                        setListQuestions={setListQuestions}
                    />
                    <Inicio
                        setPagina={setPagina}
                    />
                </div>
            </div>

            <hr />
            {
                listQuestions.length === 0 && (
                    <div className="text-center">
                        <h3>La lista de preguntas esta en 0.</h3>
                        Añade una nueva pregunta.
                    </div>
                )
            }
            {
                listQuestions.map((pregunta) => (
                    <Preguntas
                        pregunta={pregunta}
                        listQuestions={listQuestions}
                        setListQuestions={setListQuestions}
                    />
                ))
            }


            <hr />

            <div className="col text-end">
                <Limpiar
                    setListQuestions={setListQuestions}
                />
                <Agregar
                    listQuestions={listQuestions}
                    setListQuestions={setListQuestions}
                />
                <Inicio
                    setPagina={setPagina}
                />
            </div>

        </div>
    )
}

export default Capturar