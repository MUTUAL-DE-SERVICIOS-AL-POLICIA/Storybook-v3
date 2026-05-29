"use client";

import React, { useMemo, useState } from "react";
import { Card, Button, Chip, Separator, ProgressBar } from "@heroui/react";
// import {
//   CheckCircle2,
//   Circle,
//   ChevronRight,
//   Server,
//   ShieldCheck,
//   Database,
//   Rocket,
//   AlertTriangle,
// } from "lucide-react";

type StepStatus = "completed" | "current" | "pending";

interface StepItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: StepItem[] = [
  {
    id: 1,
    title: "Validación",
    description: "Comprobación de conexión y autenticación.",
    icon: <></>,
  },
  {
    id: 2,
    title: "Procesamiento",
    description: "Procesamiento de información del servidor.",
    icon: <></>,
  },
  {
    id: 3,
    title: "Persistencia",
    description: "Guardado y sincronización de datos.",
    icon: <></>,
  },
  {
    id: 4,
    title: "Despliegue",
    description: "Finalización y publicación de cambios.",
    icon: <></>,
  },
];

export const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(2);

  const progressValue = useMemo(() => {
    return (currentStep / steps.length) * 100;
  }, [currentStep]);

  const getStatus = (stepId: number): StepStatus => {
    if (stepId < currentStep) return "completed";
    if (stepId === currentStep) return "current";

    return "pending";
  };

  return (
    <Card className="border border-default-200 bg-content1 shadow-xl rounded-3xl">
      <Card.Content className="gap-8 p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <></>

              <h2 className="text-2xl font-bold">Estado del Servidor</h2>
            </div>

            <p className="text-default-500 text-sm max-w-xl">
              Seguimiento en tiempo real del flujo de procesamiento y ejecución
              del sistema.
            </p>
          </div>

          <div className="min-w-60">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-default-500">Progreso general</span>

              <span className="text-sm font-semibold">
                {Math.round(progressValue)}%
              </span>
            </div>

            <ProgressBar
              aria-label="Progress"
              value={progressValue}
              // classNames={{
              //   indicator: "bg-gradient-to-r from-primary to-secondary",
              //   track: "bg-default-100",
              // }}
            />
          </div>
        </div>

        <Separator />

        <div className="relative">
          <div className="absolute left-0 top-7 hidden h-0.5 w-full bg-default-200 lg:block" />

          <div className="grid gap-6 lg:grid-cols-4">
            {steps.map((step, index) => {
              const status = getStatus(step.id);

              return (
                <div key={step.id} className="relative flex flex-col gap-4">
                  {/* STEP TOP */}
                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className={[
                        "flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300",
                        status === "completed" &&
                          "border-success/30 bg-success text-white shadow-lg shadow-success-soft-hover",
                        status === "current" &&
                          "border-primary/30 bg-primary text-white shadow-lg shadow-primary/30 scale-105",
                        status === "pending" &&
                          "border-default-200 bg-default-100 text-default-400",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {status === "completed" ? <></> : step.icon}
                    </div>

                    <div className="lg:hidden">
                      <></>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-semibold text-base">{step.title}</h3>

                      <Chip
                        color={
                          status === "completed"
                            ? "success"
                            : status === "current"
                              ? "accent"
                              : "default"
                        }
                        size="sm"
                        variant="secondary"
                      >
                        {status === "completed"
                          ? "Completado"
                          : status === "current"
                            ? "En proceso"
                            : "Pendiente"}
                      </Chip>
                    </div>

                    <p className="text-sm leading-relaxed text-default-500">
                      {step.description}
                    </p>

                    <div className="flex items-center gap-2 pt-2">
                      {status === "completed" ? <></> : <></>}

                      <span className="text-xs text-default-400">
                        Step {index + 1} de {steps.length}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Separator />

        {/* ACTIONS */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button
            variant="secondary"
            onPress={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
          >
            Retroceder
          </Button>

          <Button
            variant="secondary"
            onPress={() =>
              setCurrentStep((prev) => Math.min(prev + 1, steps.length))
            }
          >
            Siguiente Paso
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};
