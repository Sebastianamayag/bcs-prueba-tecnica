import { Card } from "@/shared/components/Card/Card";
import { Stepper } from "@/shared/components/Stepper/Stepper";

export default function SimulationPage() {
  return (
    <Card>
      <Stepper latsStepComppleted={3} />
    </Card>
  )
}