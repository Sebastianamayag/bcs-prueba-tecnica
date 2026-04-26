'use client';

import { Card } from "@/shared/components/Card/Card";
import {  useFormContext } from "react-hook-form";
import { InputForm } from "./InputForm";

export const BasicDataForm = () => {
  const {control} = useFormContext();
  return (
    <div className="px-20">
        <Card>
          <div className="space-y-5">
            <div className="flex flex-col md:flex-row gap-2 flex-1">
              <InputForm control={control} label={"Número de documento"} id={"num_doc"} name={"numero_documento"} />
              <InputForm control={control} label={"Tipo"} id={"tipo"} name={"tipo_de_documento"} />
            </div>
            <div className="flex flex-col md:flex-row gap-2  flex-1">
              <InputForm control={control} label={"Primer Nombre"} id={"primer_nombre"} name={"primer_nombre"} />
              <InputForm control={control} label={"Segundo Nombre"} id={"segundo_nombre"} name={"segundo_nombre"} />
            </div>
            <div className="flex flex-col md:flex-row gap-2  flex-1">
              <InputForm control={control} label={"Primer Apellido"} id={"primer_apellido"} name={"primer_apellido"} />
              <InputForm control={control} label={"Segundo Apellido"} id={"segundo_apellido"} name={"segundo_apellido"} />
            </div>
          </div>
        </Card>
    </div>
  )
}
