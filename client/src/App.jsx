
import './App.scss'
import { TeamVersion } from './components/Team'
import { useLanguage } from './hooks'


const App = () => {
    const [language, setLanguage] = useLanguage("language", {
        lang: "FR",
        index: 0
    })

    return (
        <>
            <TeamVersion
                language={language}
                setLanguage={setLanguage}
            />
        </>
    )
}


export default App
