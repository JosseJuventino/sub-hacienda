"use client";
import { Card, CardBody, Form, Tab, Tabs } from "@heroui/react";
import { UserPlus2 } from "lucide-react";
import BasicInfo from "../../components/form/BasicInfo";
import { Button } from "@heroui/react";
import { useState } from "react";
import CompleteForm from "../../components/form/CompleteForm";
import { FormValues } from "@/types/formValues";
import { useCustomerForm } from "@/hooks/useCustomerForm";

export default function FormPage() {
    const [selectedForm, setSelectedForm] = useState<"basic" | "full">("basic");

    const handleSubmit = (values: FormValues) => {
        console.log("Datos enviados:", values);
        // aquí tu llamada a la API…
    };

    const formik = useCustomerForm(selectedForm, handleSubmit);

    return (
        <Card className="mx-4 md:mx-28 mt-8 p-4 md:p-10">
            <CardBody>
                <div className="flex items-center gap-3">
                    <UserPlus2 className="bg-green-700 text-white p-2 rounded w-10 h-10" />
                    <h2 className="text-lg md:text-2xl text-gray-800">Agregar mis datos</h2>
                </div>

                <div className="mt-6 flex flex-col items-center md:flex-row md:justify-between md:items-center gap-4">
                    <p className="text-sm text-gray-600">
                        Los campos con <span className="text-red-500">*</span> son obligatorios
                    </p>

                    <div className="flex items-center gap-2">
                        <div className="mt-6">
                            <Tabs
                                selectedKey={selectedForm}
                                onSelectionChange={(k) => setSelectedForm(k as "basic" | "full")}
                                variant="solid"
                                color="success"
                                fullWidth={false}
                                classNames={{ tabList: "gap-4", tab: "text-sm md:text-base" }}
                            >
                                <Tab key="basic" title="Básico" />
                                <Tab key="full" title="Completo" />
                            </Tabs>
                        </div>
                    </div>
                </div>

                <Form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={formik.handleSubmit}>
                    <BasicInfo formik={formik} />

                    {selectedForm === "full" && (
                        <CompleteForm formik={formik} />
                    )}

                    <div className="md:col-span-2 flex justify-end">
                        <Button type="submit" variant="solid" color="success" className="w-full text-white md:w-auto">
                            Guardar
                        </Button>
                    </div>
                </Form>
            </CardBody>
        </Card>
    );
}
