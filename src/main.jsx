import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
const colors = {
    brand: {
        900: '#1a365d',
        800: '#153375',
    },
};
const theme = extendTheme({ colors });
console.log(theme);
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </StrictMode>,
);
