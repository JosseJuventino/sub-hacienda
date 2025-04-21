import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function BasicInfo() {

    const [documentType, setDocumentType] = useState("DUI");

    const docOptions = [
        { key: "dui", label: "DUI" },
        { key: "nit", label: "NIT" },
        { key: "residency", label: "Residencia" },
        { key: "birth_certificate", label: "Certificado de nacimiento" },
        { key: "passport", label: "Pasaporte" },
    ];


    return (
        <>
            <div className="md:col-span-2">
                <Input
                    isRequired
                    errorMessage="*Este campo es requerido"
                    label="Nombre o razón social"
                    labelPlacement="outside"
                    name="name"
                    placeholder="Agregar nombre"
                />
            </div>

            <div>
                <label className="mb-1 text-sm text-gray-700">Documento:</label>
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="bordered"
                            className="flex justify-between items-center text-sm w-full"
                        >
                            {documentType || "Tipo"}
                            <ChevronDown className="w-4 h-4" />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Tipo de Documento">
                        {docOptions.map((opt) => (
                            <DropdownItem key={opt.key} onClick={() => setDocumentType(opt.label)}>
                                {opt.label}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div>
                <Input
                    isRequired
                    errorMessage="*Información requerida"
                    label="Número de documento"
                    labelPlacement="outside"
                    name="documentInfo"
                    placeholder="Agregar número"
                />
            </div>

            <div>
                <Input
                    isRequired
                    errorMessage="*Correo requerido"
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    type="email"
                    placeholder="Agregar correo"
                />
            </div>
            <div>
                <Input
                    isRequired
                    errorMessage="*Teléfono requerido"
                    label="Teléfono"
                    labelPlacement="outside"
                    name="phone"
                    type="tel"
                    placeholder="Agregar teléfono"
                />
            </div>

        </>
    )
}