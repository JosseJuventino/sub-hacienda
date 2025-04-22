import { FormValues } from "@/types/formValues";
import { applyMask, applyMaskTel } from "@/validations/mask/mask";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from "@heroui/react";
import { FormikProps } from "formik";
import { ChevronDown } from "lucide-react";

interface BasicInfoProps {
    formik: FormikProps<FormValues>;
}

export default function BasicInfo({ formik }: BasicInfoProps) {

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
                    name="customerName"
                    maxLength={100}
                    label="Nombre o razón social"
                    placeholder="Agregar nombre"
                    isRequired
                    value={formik.values.customerName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errorMessage={
                        formik.touched.customerName && formik.errors.customerName
                            ? formik.errors.customerName
                            : undefined
                    }
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
                            {
                                docOptions.find(
                                    (o) => o.key === formik.values.documentType?.value
                                )?.label || 'Selecciona un tipo'
                            }
                            <ChevronDown className="w-4 h-4" />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Tipo de Documento">
                        {docOptions.map((opt) => (
                            <DropdownItem
                                key={opt.key}
                                onClick={() =>
                                    // setFieldValue coge el objeto entero si tu tipo es { label, value }
                                    formik.setFieldValue('documentType', {
                                        label: opt.label,
                                        value: opt.key,
                                    })
                                }
                            >
                                {opt.label}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
                {formik.touched.documentType && formik.errors.documentType && (
                    <p className="text-red-600 text-xs mt-1">
                        {String(formik.errors.documentType)}
                    </p>
                )}
            </div>
            <div>
                <Input
                    name="customerDoc"
                    label="Número de documento"
                    placeholder="Agregar número"
                    isRequired
                    maxLength={formik?.values?.documentType?.value == '13' ? 10 : (formik.values.documentType?.value == '36' ? 17 : 24)}
                    onChange={(e) => {
                        const maskedValue = applyMask(e.target.value);
                        formik.handleChange({
                            target: {
                                name: 'customerDoc',
                                value: maskedValue,
                            },
                        });
                    }}
                    value={formik.values.customerDoc}
                    onBlur={formik.handleBlur}
                    errorMessage={
                        formik.touched.customerDoc && formik.errors.customerDoc
                            ? formik.errors.customerDoc
                            : undefined
                    }
                />
            </div>

            <div>
                <Input
                    name="email"
                    label="Correo electrónico"
                    type="email"
                    maxLength={255}
                    placeholder="Agregar correo"
                    isRequired
                    onKeyDown={(e) => {
                        if (e.key === ' ' || e.code === 'Space') e.preventDefault();
                    }}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errorMessage={
                        formik.touched.email && formik.errors.email
                            ? formik.errors.email
                            : undefined
                    }
                />
            </div>
            <div>
                <Input
                    isRequired
                    label="Teléfono"
                    name="tel"
                    value={formik.values.tel}
                    onChange={(e) => {
                        const maskedValue = applyMaskTel(e.target.value);
                        formik.handleChange({
                            target: {
                                name: 'tel',
                                value: maskedValue,
                            },
                        });
                    }}
                    onBlur={formik.handleBlur}
                    onKeyDown={(e) => {
                        if (e.key === ' ' || e.code === 'Space') e.preventDefault();
                    }}
                    errorMessage={
                        formik.touched.tel && formik.errors.tel
                            ? formik.errors.tel
                            : undefined
                    }
                    type="tel"

                    placeholder="Agregar teléfono"
                />
            </div>

        </>
    )
}