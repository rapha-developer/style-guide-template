import { Link } from "react-router-dom"
import Header from "../components/Header"
import Preface from "../components/Preface"

import MakePreface from "../docs/utils/preface.styleguide"

function Home() {
    const prefaceAttributes = MakePreface('', "home")

    return (
        <div className="home">
            <Preface
                subtitle={prefaceAttributes.subtitle}
                title={prefaceAttributes.title}
            />
            <Header title="components" />
            <Link to="/styleguide">Styleguide Link</Link>
            <br />
            <br />
            <Link to="/orion">Orion Styleguide Link</Link>
        </div>
    )
}
export default Home