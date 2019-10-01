import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DefaultTheme = {
    background: 'rgba(43, 45, 92, 0.8)',
};

//  Фиолетовый - rgba(255, 107, 255, 0.8)
//  Розовый - rgba(255, 107, 166, 0.8)
//  Красный - rgba(250, 92, 92, 0.8)
//  Синий - rgba(98, 92, 250, 0.8)
//  Голубой - rgba(92, 203, 250, 0.8)
//  Зеленый - rgba(92, 250, 98, 0.8)
//  Желтый - rgba(239, 250, 92, 0.8)
//  Оранжевый - rgba(250, 153, 92, 0.8)


const MainTheme = {
    background: 'rgba(43, 45, 92, 0.8)',
};

export const MyContext = React.createContext(DefaultTheme);

function renderAll () {
    ReactDOM.render(
        <MyContext.Provider value={MainTheme}>
            <App />
        </MyContext.Provider>,
        document.getElementById('root')
    );
}

setTimeout(renderAll, 3000);


