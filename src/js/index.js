import React from 'react';
import App from './component/app';
import { createRoot } from 'react-dom/client';
import "../styles/index.css";

const app = document.getElementById('app');
const root = createRoot(app);
root.render(<App/>)

