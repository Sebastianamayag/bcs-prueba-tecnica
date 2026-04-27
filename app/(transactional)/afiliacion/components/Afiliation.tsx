'use client';

import { Modal } from "./Modal";
import { useAfiliation } from "../hooks/useAfiliation";
import { Input } from "@/shared/components/Input/Input";
import { Card } from "@/shared/components/Card/Card";
import { CLIENTS_TYPE } from "../data/client";
import { Button } from "@/shared/components/Button/Button";

export const Afiliation = () => {

  const { 
      handleAbandon, 
      showModalResume, 
      handleResume, 
      setFlow, 
      flow,
      value,
      setValue,
      handleCheckAfiliation, 
    } = useAfiliation();

  return (
    <div
      className="px-5 md:px-10 lg:px-20"
      style={{ height: '90dvh', width: '100%', display: 'flex', justifyContent: 'center', flex: 1, alignItems: 'center' }}
    >
      <Card>
        <div className="space-y-5" style={{ width: '60dvw' }}>

          <div>
            <p className="text-base font-medium text-gray-900">Elige tu tipo de flujo</p>
            <p className="text-sm text-gray-500">Selecciona cómo quieres gestionar tu afiliación</p>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            {CLIENTS_TYPE.map((client) => (
              <div
                key={client.id}
                className={`flex-1 rounded-xl p-4 cursor-pointer border transition-all
                  ${flow === client.id ? 'border-2 border-primary' : 'border border-gray-100'}
                `}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="flow"
                      checked={flow === client.id}
                      onChange={() => setFlow(client.id)}
                      className="accent-primary"
                    />
                    <label className="text-sm font-medium text-gray-900 cursor-pointer">
                      {client.label}
                    </label>
                  </div>
                  <span className={`text-xs px-6 py-2 rounded-lg font-medium ${client.badgeClass}`}>
                    {client.badge}
                  </span>
                </div>
                <div className="space-y-1.5">
                  {client.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                      <span className="text-xs text-gray-500">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {
            flow !== '' ?
              (
                <div>
                  <div className="border-t border-gray-100 pt-4">
                    <Input
                      id="flow-input"
                      label="Número de documento"
                      placeholder='Ingresa tu número de documento'
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      hasError={false} 
                      errorMessage={""}
                    />
                  </div>
                  <div className="flex flex-row gap-3 mt-5">
                    <Button
                      buttonType="primary"
                      className="w-full cursor-pointer"
                      onClick={handleCheckAfiliation}
                      disabled={flow !== '' && value.trim() === ''}
                    >
                      <p>Iniciar afiliacion</p>
                    </Button>
                  </div>
                </div>
              ) : null
          }

        </div>
      </Card>
      <Modal
        isOpen={showModalResume}
        onResume={handleResume}
        onAbandon={handleAbandon}
      />
    </div>
  )
}
