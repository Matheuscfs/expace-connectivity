import { Check } from "lucide-react";

interface Step {
  id: number;
  name: string;
  description: string;
}

interface CheckoutStepsProps {
  steps: Step[];
  currentStep: number;
}

export function CheckoutSteps({ steps, currentStep }: CheckoutStepsProps) {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
        {steps.map((step) => (
          <li key={step.name} className="md:flex-1">
            <div
              className={`group flex flex-col border-l-4 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 ${
                step.id < currentStep
                  ? "border-primary"
                  : step.id === currentStep
                  ? "border-primary"
                  : "border-gray-200"
              }`}
            >
              <span className="text-sm font-medium">
                {step.id < currentStep ? (
                  <Check className="h-5 w-5 text-primary" />
                ) : (
                  step.id
                )}
              </span>
              <span className="text-sm font-medium">{step.name}</span>
              <span className="text-sm text-muted-foreground">
                {step.description}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}