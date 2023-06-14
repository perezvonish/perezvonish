import {useState} from "react";

export const Navigation = () => {
    const [activeComponent, setActiveComponent] = useState('Welcome');

    return (
        <div className="status-panel">
            <ul className="component-list">
                <li
                    className={activeComponent === 'Welcome' ? 'active' : ''}
                    onClick={() => setActiveComponent('Info')}
                >
                    {"<"}Welcome{">"}
                </li>
                <li
                    className={activeComponent === 'About' ? 'active' : ''}
                    onClick={() => setActiveComponent('About')}
                >
                    {"<"}About{">"}
                </li>
                <li
                    className={activeComponent === 'Contacts' ? 'active' : ''}
                    onClick={() => setActiveComponent('Contacts')}
                >
                    {"<"}Contacts{">"}
                </li>
            </ul>
        </div>
    );
}