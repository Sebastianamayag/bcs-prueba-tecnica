'use client';

import { Card } from "@/shared/components/Card/Card";
import {  useFormContext } from "react-hook-form";
import { InputForm } from "./InputForm";

export const FinancialDataForm = () => {
  const {control} = useFormContext();
  return (
    <div className="px-20 mt-10">
        <Card>
          <h2 className="font-bold w-3/4 mb-15" data-testid='datos_financieros'>Datos Financieros</h2>
          <div className="space-y-5">
            <div className="flex flex-col md:flex-row gap-2 flex-1">
              <InputForm control={control} label={"Cargo *"} id={"cargo"} name={"cargo"} />
              <InputForm type="number" control={control} label={"Ingresos *"}  id={"ingresos"} name={"ingresos"} />
            </div>
            <div className="flex flex-col md:flex-row gap-2  flex-1">
              <InputForm type="number" control={control} label={"Egresos"} id={"egresos"} name={"egresos"} />
              <InputForm type="number" control={control} label={"Total activos"} id={"patrimonio"} name={"patrimonio"} />
            </div>
          </div>
        </Card>
    </div>
  )
}
