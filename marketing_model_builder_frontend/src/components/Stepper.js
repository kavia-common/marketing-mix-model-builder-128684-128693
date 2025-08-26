import React from "react";
import { useWizard } from "../context/WizardContext";
import { cn } from "../lib/utils";

/**
 * Stepper shows step labels with simple progress indicator.
 */
export default function Stepper() {
  const { steps, state, goTo } = useWizard();

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-2">
        {steps.map((step, idx) => {
          const isActive = idx === state.currentStep;
          const isCompleted = idx < state.currentStep;

          return (
            <button
              key={step.id}
              onClick={() => goTo(idx)}
              className={cn(
                "flex-1 group relative px-3 py-2 rounded-md border transition-colors",
                isActive
                  ? "border-primary bg-primary/10 text-primary"
                  : isCompleted
                  ? "border-primary/40 bg-primary/5 text-slate-700"
                  : "border-border bg-card text-slate-600 hover:bg-muted"
              )}
            >
              <div className="flex items-center justify-center gap-2">
                <span
                  className={cn(
                    "inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold",
                    isCompleted
                      ? "bg-primary text-primary-foreground"
                      : isActive
                      ? "bg-primary/90 text-white"
                      : "bg-muted text-slate-600"
                  )}
                >
                  {idx + 1}
                </span>
                <span className="text-sm font-medium">{step.label}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
