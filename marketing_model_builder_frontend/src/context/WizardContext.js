import React, { createContext, useContext, useMemo, useReducer } from "react";
import { steps } from "../steps/steps";

/**
 * Reducer to manage wizard state.
 * Current implementation keeps only currentStep index and a generic state object placeholder.
 */
function wizardReducer(state, action) {
  switch (action.type) {
    case "GO_TO":
      return { ...state, currentStep: action.payload };
    case "NEXT":
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, steps.length - 1),
      };
    case "PREV":
      return { ...state, currentStep: Math.max(state.currentStep - 1, 0) };
    case "RESET":
      return { ...initialState };
    case "SET_DATA":
      return { ...state, data: { ...state.data, ...action.payload } };
    default:
      return state;
  }
}

const initialState = {
  currentStep: 0,
  // Placeholder for future wizard data (upload info, mappings, etc.)
  data: {},
};

const WizardContext = createContext(null);

// PUBLIC_INTERFACE
export function WizardProvider({ children }) {
  /** Provides wizard state and navigation helpers to the app. */
  const [state, dispatch] = useReducer(wizardReducer, initialState);

  const api = useMemo(() => {
    const goTo = (index) => dispatch({ type: "GO_TO", payload: index });
    const next = () => dispatch({ type: "NEXT" });
    const prev = () => dispatch({ type: "PREV" });
    const reset = () => dispatch({ type: "RESET" });
    const setData = (payload) => dispatch({ type: "SET_DATA", payload });

    const current = steps[state.currentStep];

    return {
      state,
      steps,
      current,
      goTo,
      next,
      prev,
      reset,
      setData,
      isFirst: state.currentStep === 0,
      isLast: state.currentStep === steps.length - 1,
      progress: ((state.currentStep + 1) / steps.length) * 100,
    };
  }, [state]);

  return (
    <WizardContext.Provider value={api}>{children}</WizardContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useWizard() {
  /** Hook to access Wizard context. Throws if used outside provider. */
  const ctx = useContext(WizardContext);
  if (!ctx) {
    throw new Error("useWizard must be used within a WizardProvider");
  }
  return ctx;
}
