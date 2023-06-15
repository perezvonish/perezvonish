export const Skills = () => {
    return (
        <div className="component flex flex-col m-5" id="Technologies">
                <p className="text-4xl font-bold purple-text">{"<"}Skills{">"}</p>
                <div className="text-xl simple-text flex flex-row md:flex-col p-5">
                    <div className="m-2">
                        <p className="blue-text">Backend</p>
                        <ul className="flex flex-col md:flex-row">
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
                        <ul className="flex flex-col md:flex-row">
                            <li>Html</li>
                            <li>Css</li>
                            <li>Scss</li>
                            <li>React.js</li>
                            <li>Tailwind</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}