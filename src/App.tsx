import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { invoke } from '@tauri-apps/api/tauri';
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>Load shedding notifier</h1>
    </div>
  );
}

export default App;