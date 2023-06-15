export const Skills = () => {
    return (
        <div className="component m-5" id="Technologies">
            <div className="relative">
                <p className="absolute top-[-8rem] text-4xl font-bold purple-text">{"<"}Skills{">"}</p>
                <div className="text-xl simple-text flex flex-col">
                    <div className="m-2">
                        <p className="blue-text">Backend</p>
                        <ul className="list">
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Nest.js</li>
                            <li>Postgres</li>
                            <li>Mongo</li>
                            <li>Redis</li>
                            <li>RabbitMq</li>
                            <li>Jest</li>
                            <li>WebSockets</li>
                        </ul>
                    </div>
                    <div className="m-2">
                        <p className="green-text">Frontend</p>
                        <ul className="list">
                            <li>Html</li>
                            <li>Css</li>
                            <li>Scss</li>
                            <li>React.js</li>
                            <li>Tailwind</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}