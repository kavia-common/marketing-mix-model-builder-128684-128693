import React from "react";
import "./App.css";
import WizardLayout from "./components/WizardLayout";
import { WizardProvider } from "./context/WizardContext";

// PUBLIC_INTERFACE
function App() {
  /** Root app renders the wizard skeleton wrapped in WizardProvider. */
  return (
    <div className="App">
      <WizardProvider>
        <WizardLayout />
      </WizardProvider>
    </div>
  );
}

export default App;
