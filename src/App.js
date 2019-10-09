import React from 'react';
import AppPanel from './components/AppPanel';

function App() {
  return (
    <div className="app">
      <div className="app-panels">
        <AppPanel type="config">
          Config
        </AppPanel>
        <AppPanel type="preview">
          Preview
        </AppPanel>
      </div>
    </div>
  );
}

export default App;
