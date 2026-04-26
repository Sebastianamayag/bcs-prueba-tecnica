'use client';

import { Input } from "@/shared/components/Input/Input";
import { useConsult } from "../hooks/useConsultat"
import { Button } from "@/shared/components/Button/Button";
import { Search } from 'lucide-react'
import { Table } from "./Table";
import { INPUTOPTIONS } from "../constants/input";
import { Select } from "@/shared/components/Select/Select";

export const ConsultAfiliation = () => {
    const { 
        documentNumber, 
        handleValidate, 
        onChange, 
        error, 
        handleConsult, 
        data, 
        setStatus, 
        status, 
        handleFilter, 
        clearFilter, 
        filterData, 
    } = useConsult();

    return (
        <section data-testid='consultant' className="space-y-5" >
            <div>
                <h1 className='font-bold text-primary text-[2.2rem] md:text-[2.5rem]'>Detalle de la solicitud</h1>
                <h2 className='font-semibold w-3/4'>Para consultar ingrese el número de cédula.</h2>
            </div>
            <div data-testid='search' className="bg-white p-5 shadow-lg rounded-lg flex flex-col justify-between 2xl:flex-row gap-[10px] lg:m-x-[10rem] ">
                <div className="flex flex-col gap-2 md:flex-row">
                    <Input
                        hasError={error !== null}
                        errorMessage={error ? error : ''}
                        label={"Numero de documento"}
                        id={"input-search"}
                        value={documentNumber}
                        placeholder="Ingresa el número de documento"
                        onChange={onChange}
                        onBlur={handleValidate}
                        className="w-full md:w-72 lg:w-100"
                    />
                    <Button
                        buttonType="primary"
                        className="w-full md:w-40 mt-5 p-1 gap-2 lg:mt-6 cursor-pointer"
                        onClick={handleConsult}
                        disabled={!documentNumber || error !== null}
                    >
                        <Search size={16} color="white" />
                        <p>Buscar</p>
                    </Button>
                </div>
                {
                    data ?
                        (
                            <div className="flex flex-col gap-2 md:flex-row">
                                <Select
                                    options={INPUTOPTIONS}
                                    placeHolder="Filtrar por estado"
                                    onChange={(e) => {
                                        setStatus(e.target.value);
                                        handleFilter(e.target.value);
                                    }}
                                    defaultValue={status}
                                    value={status}
                                    className="md:mt-6"
                                />
                                <Button
                                    buttonType="outline"
                                    className="w-full md:w-40 mt:5 md:mt-6  p-1 h-[42px] gap-2 cursor-pointer"
                                    onClick={clearFilter}
                                    disabled={!documentNumber || error !== null}
                                >
                                    <p>Limpiar</p>
                                </Button>
                            </div>
                        ) : null
                }
            </div>
            {
                data ?
                    (
                        <Table data={filterData? filterData : data} />
                    ) : null
            }
        </section>
    )
}
