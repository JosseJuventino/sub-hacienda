"use client";
import { Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Form, Input, Tab, Tabs } from "@heroui/react";
import { ChevronDown, UserPlus2 } from "lucide-react";
import BasicInfo from "../components/form/BasicInfo";
import { Button } from "@heroui/react";
import { useState } from "react";

export default function FormPage() {
    const [selectedForm, setSelectedForm] = useState("basic");

    const [department, setDepartment] = useState("");

    const depOptions = [
        { key: "sonsonate", label: "Sonsonate" },
        { key: "san_salvador", label: "San Salvador" },
        { key: "la_libertad", label: "La Libertad" },
        { key: "cabañas", label: "Cabañas" },
        { key: "san_vicente", label: "San Vicente" },
        { key: "la_union", label: "La Unión" },
        { key: "morazan", label: "Morazán" },
        { key: "chalatenango", label: "Chalatenango" },
        { key: "cuscatlan", label: "Cuscatlán" },
    ];


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
                                onSelectionChange={(key) => setSelectedForm(key as string)}
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

                <Form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <BasicInfo />

                    {selectedForm === "full" && (
                        <>
                            <div>
                                <Input
                                    isRequired
                                    errorMessage="*NRC requerido"
                                    label="NRC"
                                    labelPlacement="outside"
                                    name="nrc"
                                    type="text"
                                    placeholder="Agregar el NRC"
                                />
                            </div>
                            <div>
                                <Input
                                    label="Nombre comercial"
                                    labelPlacement="outside"
                                    name="name_comercial"
                                    type="text"
                                    placeholder="Agregar el nombre comercial"
                                />
                            </div>

                            <div>
                                <label className="mb-1 text-sm text-gray-700">Departamento:</label>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            variant="bordered"
                                            className="flex justify-between items-center text-sm w-full"
                                        >
                                            {department || "Selecciona un departamento"}
                                            <ChevronDown className="w-4 h-4" />
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Departamento">
                                        {depOptions.map((opt) => (
                                            <DropdownItem key={opt.key} onClick={() => setDepartment(opt.label)}>
                                                {opt.label}
                                            </DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                            </div>

                            <div>
                                <label className="mb-1 text-sm text-gray-700">Municipio:</label>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            variant="bordered"
                                            className="flex justify-between items-center text-sm w-full"
                                        >
                                            {department || "Selecciona un municipio"}
                                            <ChevronDown className="w-4 h-4" />
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Municipio">
                                        {depOptions.map((opt) => (
                                            <DropdownItem key={opt.key} onClick={() => setDepartment(opt.label)}>
                                                {opt.label}
                                            </DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                            </div>

                            <div className="md:col-span-2">
                                <Input
                                    isRequired
                                    errorMessage="*Este campo es requerido"
                                    label="Dirección"
                                    labelPlacement="outside"
                                    name="name"
                                    placeholder="Agregar la dirección"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="mb-1 text-sm text-gray-700">Actividad Economica:</label>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            variant="bordered"
                                            className="flex justify-between items-center text-sm w-full"
                                        >
                                            {department || "Selecciona un municipio"}
                                            <ChevronDown className="w-4 h-4" />
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Municipio">
                                        {depOptions.map((opt) => (
                                            <DropdownItem key={opt.key} onClick={() => setDepartment(opt.label)}>
                                                {opt.label}
                                            </DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </>
                    )}

                    <div className="md:col-span-2 flex justify-end">
                        <Button type="submit" variant="solid" className="w-full md:w-auto">
                            Guardar
                        </Button>
                    </div>
                </Form>
            </CardBody>
        </Card>
    );
}
