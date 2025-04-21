"use client";
import { Card, CardBody } from "@heroui/react";
import { UserPlus2 } from "lucide-react";

export default function FormPage() {
    return (
        <>
            <Card className="mx-10 mt-10 p-10">
                <CardBody>
                    <div className="flex flex-row gap-5 items-center">
                        <UserPlus2 className="bg-[#019133] text-white w-12 h-12 p-2 rounded" />
                        <p className="text-2xl text-[#3a3a3a]">Agregar mis datos</p>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}