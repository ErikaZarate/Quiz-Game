const Inicio = ({ setPagina }) => {

    return (
        <div>
            <h1
                style={{
                    textAlign: "center"
                }}
            > <br/><br/><br/><br/><br/>QUIZ GAME</h1>

            <div class="d-grid gap-2 col-3 mx-auto">
            <button type="button" className="btn btn-primary"
                onClick={() => setPagina('Capture')}>
                <i class="bi bi-card-checklist"> Capturar</i>
                </button>

            <button type="button" className="btn btn-success"
                onClick={() => setPagina('Game')}>
                <i class="bi bi-controller"> Juego </i>
                </button>
            </div>
        </div>
    )
}

export default Inicio