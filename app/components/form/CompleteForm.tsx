import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function CompleteForm() {
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
    );
}