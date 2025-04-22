import { FormValues } from "@/types/formValues";
import { applyMaskNrc } from "@/validations/mask/mask";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from "@heroui/react";
import { FormikProps } from "formik";
import { ChevronDown } from "lucide-react";

interface CompleteInfoProps {
    formik: FormikProps<FormValues>;
}

export default function CompleteForm({ formik }: CompleteInfoProps) {

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
                    name="nrc"
                    label="NRC"
                    placeholder="Agregar el NRC"
                    isRequired
                    maxLength={8}
                    value={formik.values.nrc}
                    onChange={e => {
                        const maskedValue = applyMaskNrc(e.target.value);
                        formik.setFieldValue('nrc', maskedValue);
                    }}
                    onBlur={formik.handleBlur}
                    errorMessage={
                        formik.touched.nrc && formik.errors.nrc
                            ? formik.errors.nrc
                            : undefined
                    }
                />
            </div>
            <div>
                <Input
                    label="Nombre comercial"
                    name="name_comercial"
                    maxLength={255}
                    type="text"
                    placeholder="Agregar el nombre comercial"
                    value={formik.values.name_comercial}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errorMessage={
                        formik.touched.name_comercial && formik.errors.name_comercial
                            ? formik.errors.name_comercial
                            : undefined
                    }
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
                            {
                                depOptions.find(
                                    (o) => o.key === formik.values.departamento?.value
                                )?.label || 'Selecciona un departamento'
                            }
                            <ChevronDown className="w-4 h-4" />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Departamento">
                        {depOptions.map((opt) => (
                            <DropdownItem
                                key={opt.key}
                                onClick={() =>
                                    formik.setFieldValue('departamento', {
                                        label: opt.label,
                                        value: opt.key,
                                        key: opt.key,
                                    })
                                }
                            >
                                {opt.label}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
                {formik.touched.departamento && formik.errors.departamento && (
                    <p className="text-red-600 text-xs mt-1">
                        {String(formik.errors.departamento)}
                    </p>
                )}
            </div>


            <div>
                <label className="mb-1 text-sm text-gray-700">Municipio:</label>
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="bordered"
                            className="flex justify-between items-center text-sm w-full"
                        >
                            {
                                depOptions.find(
                                    (o) => o.key === formik.values.municipio?.value
                                )?.label || 'Selecciona un municipio'
                            }
                            <ChevronDown className="w-4 h-4" />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Municipio">
                        {depOptions.map((opt) => (
                            <DropdownItem
                                key={opt.key}
                                onClick={() =>
                                    formik.setFieldValue('municipio', {
                                        label: opt.label,
                                        value: opt.key,
                                        key: opt.key,
                                    })
                                }
                            >
                                {opt.label}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
                {formik.touched.municipio && formik.errors.municipio && (
                    <p className="text-red-600 text-xs mt-1">
                        {String(formik.errors.municipio)}
                    </p>
                )}
            </div>

            <div className="md:col-span-2">
                <Input
                    label="Dirección"
                    name="address"
                    maxLength={255}
                    placeholder="Agregar la dirección"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errorMessage={
                        formik.touched.address && formik.errors.address
                            ? formik.errors.address
                            : undefined
                    }
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
                            {
                                depOptions.find(
                                    (o) => o.key === formik.values.activity?.key
                                )?.label || 'Selecciona una actividad economica'
                            }
                            <ChevronDown className="w-4 h-4" />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Municipio">
                        {depOptions.map((opt) => (
                            <DropdownItem
                                key={opt.key}
                                onClick={() =>
                                    formik.setFieldValue('activity', {
                                        label: opt.label,
                                        value: opt.key,
                                        key: opt.key,
                                    })
                                }
                            >
                                {opt.label}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
                {formik.touched.activity && formik.errors.activity && (
                    <p className="text-red-600 text-xs mt-1">
                        {String(formik.errors.activity)}
                    </p>
                )}
            </div>
        </>
    );
}