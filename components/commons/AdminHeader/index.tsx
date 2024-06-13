import React, { useEffect, useState } from "react"
import Image from "next/image"
import Cookies from 'js-cookie';

const AdminHeader = () => {
    const [name, setName] = useState()

    useEffect(() => {
        if (Cookies.get("name")) {
            setName(Cookies.get("name"))
        }
    }, [])

    return (
        <header className="bg-primary w-screen h-24 px-12 flex items-center justify-between">
            <Image
                src="/assets/icons/Logo.svg"
                alt="Logo da SouJunior"
                width={150}
                height={42}
            />
            <div className="flex items-center gap-4">
                <span className="text-3xl hidden sm:block">Olá {name}!</span>
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