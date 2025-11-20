/**
 * Multi-Step Wizard Component
 * Professional wizard with stepper navigation
 * Follows InnovaCare theme
 */

import { ReactNode, useState } from "react";
import InnovacareTheme from "@/styles/innovacare-theme";
import { IButton } from "@/components/innovacare";
import { Check } from "lucide-react";

const { colors, palette } = InnovacareTheme;

export interface WizardStep {
  id: string;
  title: string;
  description?: string;
  content: ReactNode;
  isValid?: () => boolean;
}

export interface WizardProps {
  title: string;
  steps: WizardStep[];
  onComplete: () => void;
  onCancel: () => void;
  onSave?: () => void;
  showStepNumbers?: boolean;
  className?: string;
}

export function Wizard({
  title,
  steps,
  onComplete,
  onCancel,
  onSave,
  showStepNumbers = true,
  className = "",
}: WizardProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = steps[currentStepIndex];

  const canGoNext = () => {
    if (currentStep.isValid) {
      return currentStep.isValid();
    }
    return true;
  };

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1 && canGoNext()) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else if (currentStepIndex === steps.length - 1 && canGoNext()) {
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  return (
    <div
      className={`flex flex-col h-full ${className}`}
      style={{ backgroundColor: colors.background }}
    >
      {/* Wizard Header - Ultra Compact */}
      <div
        className="px-4 py-1.5 flex-shrink-0"
        style={{
          backgroundColor: palette.primary.main,
          borderBottom: `2px solid ${palette.primary.dark}`,
        }}
      >
        <h1 className="text-base font-bold" style={{ color: "white" }}>
          {title}
        </h1>
      </div>

      {/* Stepper - Ultra Compact */}
      <div
        className="px-4 py-1.5 flex-shrink-0"
        style={{
          backgroundColor: palette.neutral[50],
          borderBottom: `1px solid ${palette.neutral[200]}`,
        }}
      >
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const isActive = index === currentStepIndex;
            const isCompleted = index < currentStepIndex;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.id} className="flex items-center flex-1">
                {/* Step Circle - Compact */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-200"
                    style={{
                      backgroundColor: isCompleted
                        ? palette.success
                        : isActive
                        ? colors.primary
                        : palette.neutral[300],
                      color: isCompleted || isActive ? "white" : palette.neutral[600],
                      border: isActive ? `3px solid ${palette.primary.dark}` : "none",
                    }}
                  >
                    {isCompleted ? (
                      <Check className="w-4 h-4" />
                    ) : showStepNumbers ? (
                      index + 1
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mt-1 text-center">
                    <p
                      className="text-[10px] font-semibold"
                      style={{
                        color: isActive ? colors.primary : palette.neutral[600],
                      }}
                    >
                      {step.title}
                    </p>
                  </div>
                </div>

                {/* Connector Line */}
                {!isLast && (
                  <div
                    className="flex-1 h-0.5 mx-1.5 rounded transition-all duration-200"
                    style={{
                      backgroundColor: isCompleted
                        ? palette.success
                        : palette.neutral[300],
                      marginTop: "-24px",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Content - Ultra Compact & Non-Scroll */}
      <div className="flex-1 overflow-hidden px-4 py-2">
        <div className="h-full flex flex-col">
          {/* Step Description - Ultra Compact */}
          {currentStep.description && (
            <div
              className="mb-2 p-1.5 rounded"
              style={{
                backgroundColor: palette.neutral[50],
                borderLeft: `3px solid ${colors.primary}`,
              }}
            >
              <p
                className="text-[11px] leading-tight"
                style={{ color: palette.neutral[700] }}
              >
                {currentStep.description}
              </p>
            </div>
          )}

          {/* Step Content - Scrollable if needed */}
          <div className="flex-1 overflow-y-auto">{currentStep.content}</div>
        </div>
      </div>

      {/* Footer with Navigation - Fixed & Ultra Compact */}
      <div
        className="px-4 py-1.5 flex items-center justify-between flex-shrink-0"
        style={{
          backgroundColor: palette.neutral[50],
          borderTop: `1px solid ${palette.neutral[200]}`,
        }}
      >
        {/* Left side: Cancel & Back */}
        <div className="flex gap-1.5">
          <IButton
            variant="outline"
            size="sm"
            onClick={onCancel}
          >
            Cancel
          </IButton>

          <IButton
            variant="outline"
            size="sm"
            onClick={handleBack}
            disabled={currentStepIndex === 0}
          >
            &lt; Back
          </IButton>
        </div>

        {/* Center: Step indicator */}
        <div className="flex items-center">
          <span
            className="text-[11px] font-medium"
            style={{ color: palette.neutral[600] }}
          >
            Step {currentStepIndex + 1} of {steps.length}
          </span>
        </div>

        {/* Right side: Save & Next */}
        <div className="flex gap-1.5">
          <IButton
            variant="outline"
            size="sm"
            onClick={onSave || (() => {})}
          >
            Save
          </IButton>

          <IButton
            variant="primary"
            size="sm"
            onClick={handleNext}
            disabled={!canGoNext()}
          >
            {currentStepIndex === steps.length - 1 ? "Finish" : "Next"}
          </IButton>
        </div>
      </div>
    </div>
  );
}

export default Wizard;
