const Tg = require("../images/tg.png")
const Github = require("../images/github.png")
const LinkedIn = require("../images/linkedIn.png")
const Gmail = require("../images/gmail.png")

export const Contacts = () => {
    return (
        <div className="component flex flex-col m-5 w-96 mx-auto" id="Contacts">
            <p className="purple-text text-4xl font-bold">
                {"<"}Contacts{">"}
            </p>
            <div className="contacts">
                <a href="https://t.me/perezvonishh" target="_blank">
                    <img src={Tg} alt="" width="1024px"/>
                </a>
                <a href="https://github.com/perezvonish" target="_blank">
                    <img src={Github} alt="" width="1024px"/>
                </a>
                <a href="https://www.linkedin.com/in/vladimir-korobenko-b8a89a253/" target="_blank">
                    <img src={LinkedIn} alt="" width="1024px"/>
                </a>
                <a href="mailto:perezvladimirweb@gmail.com" target="_blank">
                    <img src={Gmail} alt="" width="1024px"/>
                </a>
            </div>
        </div>
    )
}