import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const ChooseYourLevel = () => {

    const navigate = useNavigate()

    return(
        <>
{/* 2. Questo è il componente ChooseYourLevel, e al momento non credo che funzioni. Credo tu voglia far partire il gioco qui, quindi caricare la <StartPage />:
per farlo, come abbiamo detto prima, devi mandare l'utente su rotte che caricheranno quel componente, cose tipo "/start/shrek", "/start/fochina", o "/start/beginner" etc.
Qui credo che abbia senso navigare l'utente a "/start/beginner" per il primo bottone, "/start/intermediate" nel secondo e "/start/advanced" cliccando il terzo.
In questo modo verrà caricato il componente <StartPage />, e la rotta porterà se la parola "beginner", "intermediate" e "advanced" come parametro
(che ricordiamo, su App.jsx hai chiamato level) */}

{/* Riassumendo: le rotte che hai dichiarato in <App /> secondo me vanno benone, devi solamente correggere il loro utilizzo
in <ChooseYourLevel /> e <StartPage />, lì non dovresti nella rotta utilizzare :level ma passare direttamente una stringa, beginner/intermediate/advanced */}
        <h1>Choose Your Level</h1>
        <Button onClick={() => navigate("/start/beginner")}>
            Beginner</Button>
        <Button onClick={() => navigate("/start/intermediate")}>
            Intermediate</Button>
        <Button onClick={() => navigate("/start/advanced")}>
            Advanced</Button>
        </>
    )
}

export default ChooseYourLevel