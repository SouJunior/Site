import React from "react"
import Image from "next/image"

const AdminHeader = () => {
    const userType = {
        admin: {
            name: "Administrador"
        },
        adminMaster: {
            name: "Administrador Master"
        }
    }

    return (
        <header className="bg-primary w-screen h-24 px-12 flex items-center justify-between">
            <Image
                src="/assets/icons/Logo.svg"
                alt="Logo da SouJunior"
                width={150}
                height={42}
            />
            <div className="flex items-center gap-4">
                <span className="text-3xl hidden sm:block">Olá, {userType.admin.name}!</span>
                <Image
                    src="/assets/foto-perfil-exemplo.svg"
                    alt="Foto de Perfil"
                    width={40}
                    height={40}
                />
            </div>
        </header>
    )
}

export default AdminHeader;