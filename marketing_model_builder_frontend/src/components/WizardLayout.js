import React from "react";
import Stepper from "./Stepper";
import { useWizard } from "../context/WizardContext";
import { cn } from "../lib/utils";

/**
 * WizardLayout renders:
 * - Top: Stepper
 * - Center: Card area for step content (here: simple placeholder by step)
 * - Bottom: Navigation (Prev, Next/Finish, Reset)
 */
export default function WizardLayout() {
  const { current, isFirst, isLast, prev, next, reset, state } = useWizard();

  return (
    <div className="container-page flex min-h-screen flex-col gap-6">
      {/* Header / Stepper */}
      <header className="sticky top-0 z-10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50 rounded-lg border p-4">
        <Stepper />
      </header>

      {/* Central card placeholder */}
      <main className="flex-1">
        <section className="rounded-lg border bg-card p-8 shadow-sm">
          <h1 className="text-2xl font-semibold mb-2">
            {current?.label || "Step"}
          </h1>
          <p className="text-sm text-slate-600 mb-6">
            Placeholder content for: {current?.id}
          </p>

          <div
            className={cn(
              "grid place-items-center h-56 rounded-md border border-dashed",
              "text-slate-500"
            )}
          >
            <div className="text-center">
              <div className="text-lg font-medium">
                {current?.label} Content Placeholder
              </div>
              <div className="text-xs text-slate-500 mt-1">
                This area will be replaced with the actual {current?.label} UI.
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-slate-500">
            Current step index: {state.currentStep}
          </div>
        </section>
      </main>

      {/* Bottom navigation */}
      <footer className="rounded-lg border bg-card p-4 flex items-center justify-between">
        <button
          className={cn(
            "px-4 py-2 rounded-md border text-sm",
            isFirst
              ? "opacity-50 cursor-not-allowed"
              : "bg-muted hover:bg-muted/80"
          )}
          onClick={prev}
          disabled={isFirst}
        >
          Previous
        </button>

        <div className="flex items-center gap-2">
          <button
            className="px-3 py-2 rounded-md border text-sm text-slate-600 hover:bg-muted"
            onClick={reset}
          >
            Reset
          </button>
          <button
            className={cn(
              "px-4 py-2 rounded-md border text-sm text-white",
              isLast
                ? "bg-secondary hover:bg-secondary/90"
                : "bg-primary hover:bg-primary/90"
            )}
            onClick={next}
          >
            {isLast ? "Finish" : "Next"}
          </button>
        </div>
      </footer>
    </div>
  );
}
