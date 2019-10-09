import React from 'react';
import AppPanel from './components/AppPanel';
import ConfigPanel from './components/ConfigPanel';

function App() {
  return (
    <div className="app">
      <div className="app-panels">
        <AppPanel type="config">
          <ConfigPanel />
        </AppPanel>
        <AppPanel type="preview">
          Preview
        </AppPanel>
      </div>
    </div>
  );
}

export default App;
