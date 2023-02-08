import React from 'react';
import { Button } from './components';

function App() {
  return (
    <div className="App">
      <div className="grid grid-flow-col items-center gap-4">
        <Button component="button" variant="primary" size="small">Primary Small</Button>
        <Button component="button" variant="primary">Primary</Button>
        <Button component="button" variant="primary" size="large">Primary Large</Button>
        <Button component="button" variant="secondary" size="small">Secondary Small</Button>
        <Button component="button" variant="secondary">Secondary</Button>
        <Button component="button" variant="secondary" size="large">Secondary Large</Button>
      </div>
    </div>
  );
}

export default App;
