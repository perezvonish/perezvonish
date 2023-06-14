import {useEffect, useRef, useState} from "react";

export const Navigation = () => {
    const [activeComponent, setActiveComponent] = useState('Info');

    return (
        <div className="status-panel">
            <ul className="component-list">
                <li
                    className={activeComponent === 'Info' ? 'active' : ''}
                    onClick={() => setActiveComponent('Info')}
                >
                    {"<"}Info{">"}
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
                <li
                    className={activeComponent === 'Navigation' ? 'active' : ''}
                    onClick={() => setActiveComponent('Navigation')}
                >
                    {"<"}Navigation{">"}
                </li>
            </ul>
        </div>
    );
}