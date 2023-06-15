const MyImage = require("../images/me.jpg")

export const Welcome = () => {
    return (
        <div className="component m-5 flex justify-center" id="Info">
            <div className="relative">
                <p className="font-bold absolute top-[-8rem] text-4xl text-center purple-text">{"<"}Welcome{">"}</p>

                <div className="flex">
                    <img className="rounded-full" src={MyImage} alt="" width="200rem" />
                    <div className="flex flex-col text-left self-center ml-2">
                        <p className="text-3xl font-bold red-text">Vladimir Korobenko</p>
                        <p className="text-xl font-bold blue-text">Middle Node.js Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
