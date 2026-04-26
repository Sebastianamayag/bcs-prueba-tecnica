import { Check } from "lucide-react"
import { STEPS } from "./stepper.data"
import Link from "next/link";

export const Stepper = ({ latsStepComppleted }: { latsStepComppleted: number }) => {
    return (
        <div className="flex items-center w-full">
            {STEPS.map((step, index) => {
                const isCompleted = latsStepComppleted >= index + 1;
                const isLast = index === STEPS.length - 1;
                const Component = latsStepComppleted >= index + 1 ? Link : 'div';
                return (
                    <div key={step.id} className="flex items-center flex-1">
                        <div className="flex flex-col items-center gap-1">
                            <div 
                            className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all ${isCompleted ? 'bg-primary border-primary' : 'border-gray-300 bg-white'}`}
                            >
                                <Component href={step.href} data-testid={step.id} >
                                    {isCompleted
                                        ? <Check size={16} color="white" />
                                        : <span className={`text-sm font-medium text-gray-400`}>
                                            {step.id}
                                        </span>
                                    }
                                </Component>
                            </div>
                            <span 
                                className={`hidden md:block text-xs text-center whitespace-nowrap ${isCompleted ? 'text-primary' : 'text-gray-400'}`}>
                                {step.label}
                            </span>
                            <span className={`md:hidden text-xs text-center whitespace-nowrap ${isCompleted ? 'text-primary' : 'text-gray-400'}`}>
                                {step.shortLabel}
                            </span>
                        </div>
                        {!isLast && (
                            <div className={`h-[2px] flex-1 mb-5 transition-all ${isCompleted ? 'bg-primary' : 'bg-gray-200'}`} />
                        )}
                    </div>
                )
            })}
        </div>
    )
}