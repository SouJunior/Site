import React from "react";
import axios from "axios";
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { uniqueId } from '../../../utils/uniqueId';
import { useState } from 'react';

export const AdminModal = ({ setRefetch }) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    // Fetch News Mock com JSON Server
    // const handleNews = async () => {
    //     const res = await axios.post("http://localhost:5000/news", {
    //         title,
    //         content,
    //         id: uniqueId()
    //     })
    //     if (res.status === 201) {
    //         setRefetch(prev => !prev)
    //     }
    // }

    return (
        <Dialog.Root>
            <h2 className="text-primary text-3xl font-semibold mb-4">Últimas notícias</h2>
            <Dialog.Trigger className="flex items-center gap-4 w-[80rem] text-left p-4 text-primary bg-tableSecondary text-xl font-semibold">
                Incluir uma nova notícia.
                <img src="../assets/icons/edit.svg" alt="ícone de edição" className="size-7"/>
            </Dialog.Trigger>
            <Dialog.Portal>
            <Dialog.Overlay className='inset-0 fixed bg-black/60'>
                <Dialog.Content className='fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] md:h-[50vh] w-full bg-white md:rounded-md flex flex-col outline-none'>
                <div className='flex justify-between bg-tableSecondary'>
                    <h3 className='text-primary font-bold text-2xl p-3.5'>Nova notícia</h3>
                    <Dialog.Close className='p-4 text-slate-400 hover:text-slate-100'>
                        <X className='size-6'/>
                    </Dialog.Close>
                </div>
                <div className='px-4 flex-1 flex'>
                    <form
                        className='flex-1 flex flex-col'
                        onSubmit={(e) => {
                            e.preventDefault()
                            // handleNews()
                        }}
                    >
                        <input
                            autoFocus
                            type="text"
                            placeholder='Título'
                            onChange={(e) => setTitle(e.target.value)}
                            className='my-4 px-4 py-6 text-lg text-black bg-transparent outline-none h-6 border-b border-slate-400'
                        />
                        <textarea
                            className='px-4 text-lg leading-6 text-black bg-transparent resize-none flex-1 outline-none'
                            onChange={(e) => setContent(e.target.value)}
                            placeholder='Digite sua notícia...'
                        />
                        <button
                            type='submit'
                            className='w-full bg-primary py-3.5 text-center text-xl text-white outline-none font-medium hover:bg-primaryHover rounded-t-md'
                        >
                            Enviar
                        </button>
                    </form>
                </div>
                </Dialog.Content>
            </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    )
}