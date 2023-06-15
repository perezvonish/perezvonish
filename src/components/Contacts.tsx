const Tg = require("../images/tg.png")
const Github = require("../images/github.png")
const LinkedIn = require("../images/linkedIn.png")

export const Contacts = () => {
    return (
        <div className="component m-5 w-96 mx-auto" id="Contacts">
            <div className="relative">
                <p className="absolute top-[-8rem] purple-text text-4xl font-bold">
                    {"<"}Contacts{">"}
                </p>
                <div>
                    <span>
                        <p>Telegram</p>
                        <img src={Tg} alt="" width="64px"/>
                    </span>
                    <span>
                        <p>Github</p>
                        <img src={Github} alt="" width="64px"/>
                    </span>
                    <span>
                        <p>LinkedIn</p>
                        <img src={LinkedIn} alt="" width="64px"/>
                    </span>
                </div>
            </div>
        </div>
    )
}