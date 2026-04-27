'use client';

import { Card } from "@/shared/components/Card/Card";
import { Controller, useFormContext } from "react-hook-form";
import { InputForm } from "./InputForm";
import { DOCUMENT_TYPE_OPTIONS } from "../../constants/data";
import { Select } from "@/shared/components/Select/Select";

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
            <Controller
              control={control}
              name={"tipo_de_documento"}
              render={({ field, fieldState }) => (
                <div className="flex flex-col flex-1">
                  <label htmlFor="tipo_de_documento" className='text-sm text-primary mb-1' data-testid='tipo'>Tipo de documento *</label>
                  <Select
                    options={DOCUMENT_TYPE_OPTIONS}
                    placeHolder="Tipo de documento"
                    {...field}
                    className="border-1 border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white h-11 focus:outline-none focus:border-primary"
                  />
                  {
                    !!fieldState.error ?
                      (
                        <span id={`tipo_de_documento-error`} role="alert" className='text-xs text-red-500 mt-0.5 ml-1' >
                          {fieldState.error?.message ?? ''}
                        </span>
                      ) : null
                  }
                </div>
              )}
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
