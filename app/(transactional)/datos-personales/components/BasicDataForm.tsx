'use client';

import { Card } from "@/shared/components/Card/Card";
import {  useFormContext } from "react-hook-form";
import { InputForm } from "./InputForm";
import { DOCUMENT_TYPE_OPTIONS } from "../../constants/data";
import { SelectForm } from "./SelectForm";

export const BasicDataForm = () => {
  const { control } = useFormContext();
  return (
    <div className="px-20 mt-10">
      <Card>
        <h2 className="font-bold w-3/4 mb-15 " data-testid='datos_basicos'>Datos Basicos</h2>
        <div className="space-y-5">
          <div className="flex flex-col md:flex-row gap-2 flex-1">
            <div className="flex-1">
              <InputForm control={control} label={"Número de documento *"} id={"num_doc"} name={"numero_documento"} />
            </div>
            <SelectForm 
              control={control} 
              label="Tipo de documento *"
              name="tipo_de_documento"
              options={DOCUMENT_TYPE_OPTIONS} 
            />

          </div>
          <div className="flex flex-col md:flex-row gap-2  flex-1">
            <InputForm control={control} label={"Primer Nombre *"} id={"primer_nombre"} name={"primer_nombre"} />
            <InputForm control={control} label={"Segundo Nombre"} id={"segundo_nombre"} name={"segundo_nombre"} />
          </div>
          <div className="flex flex-col md:flex-row gap-2  flex-1">
            <InputForm control={control} label={"Primer Apellido *"} id={"primer_apellido"} name={"primer_apellido"} />
            <InputForm control={control} label={"Segundo Apellido"} id={"segundo_apellido"} name={"segundo_apellido"} />
          </div>
        </div>

      </Card>
    </div>
  )
}
