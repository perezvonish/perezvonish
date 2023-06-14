import {useEffect, useState} from "react";

export const Navigation = () => {
    const [activeComponent, setActiveComponent] = useState('Info');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const components = document.getElementsByClassName('component');

            // Определение активного компонента на основе положения скролла
            for (let i = 0; i < components.length; i++) {
                const component = components[i] as HTMLElement;
                const offsetTop = component.offsetTop;
                const componentHeight = component.offsetHeight;

                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + componentHeight) {
                    setActiveComponent(component.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="status-panel">
            <ul className="component-list">
                <li className={activeComponent === 'Info' ? 'active' : ''}>Info</li>
                <li className={activeComponent === 'About' ? 'active' : ''}>About</li>
                <li className={activeComponent === 'Contacts' ? 'active' : ''}>Contacts</li>
                <li className={activeComponent === 'Navigation' ? 'active' : ''}>Navigation</li>
            </ul>
        </div>
    );
}