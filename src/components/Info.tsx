const MyImage = require("../images/me.jpg")

export const Info = () => {
    return (
        <div className="component" id="Info">
            <div>

                <img className="rounded-full" src={MyImage} alt="" width="200rem"/>
            </div>
            <h2>Vladimir Korobenko</h2>
            <h3>Middle Backend Developer</h3>
        </div>
    )
}