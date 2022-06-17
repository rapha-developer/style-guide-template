import { Link } from "react-router-dom"
import Header from "../components/Header"
import Preface from "../components/Preface"

function Home() {
    const informationToHome = {
        subtitle: "maker",
        title: "home",
        header__title: "components"
    }
    return (
        <div className="home">
            <Preface
                subtitle={informationToHome.subtitle}
                title={informationToHome.title}
            />
            <Header title={informationToHome.header__title} />
            <Link to="/styleguide">Styleguide Link</Link>
        </div>
    )
}
export default Home