// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

// CSS
import './index.css';

// Components
import App from './App';
import { FavoritesContextProvider } from "./store/favorites-context"

ReactDOM.render(
    <FavoritesContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    </FavoritesContextProvider>,
    document.getElementById('root')
);

