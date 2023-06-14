const MyImage = require("../images/me.jpg")

export const Welcome = () => {
    return (
        <div className="component m-2 flex justify-center" id="Info">
            <div className="relative">
                <h1 className="font-bold purple-text text-5xl m-4 text-center">Welcome!</h1>
                <div className="flex">
                    <img className="rounded-full" src={MyImage} alt="" width="200rem" />
                    <div className="text-center flex flex-col self-center">
                        <p className="text-3xl font-bold red-text">Vladimir Korobenko</p>
                        <p className="text-xl font-bold blue-text">Middle Node.js Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
