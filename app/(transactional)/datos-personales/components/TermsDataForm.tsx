'use client';

import { Card } from "@/shared/components/Card/Card";
import {  useFormContext } from "react-hook-form";
import { CheckBoxForm } from "./CheckBox";

export const TermsDataForm = () => {
  const {control} = useFormContext();
  return (
    <div className="px-20 mt-10">
        <Card>
          <h2 className="font-bold w-3/4 mb-15 " data-testid='terminos_condiciones'>Términos y condiciones</h2>
          <div className="space-y-5">
            <CheckBoxForm control={control} label={"Terminos*"} id={"terminos"} name={"terminos"} />
          </div>
        </Card>
    </div>
  )
}
