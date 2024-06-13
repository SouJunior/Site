import React from "react";
import axios from "axios"
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useState } from "react";

export const AdminNewsSection = ({ news, setRefetch }) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [open, setOpen] = useState(false);
    const [newsId, setNewsId] = useState("")
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 7
    const totalPages = Math.ceil(news.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, news.length);

    // News Requests Mock com JSON Server
    // const handleDelete = async (id) => {
    //     const res = await axios.delete(`http://localhost:5000/news/${id}`)
    //     if (res.status === 200) {
    //         setRefetch(prev => !prev)
    //     }
    // }

    // const handleEdit = async (id) => {
    //     const res = await axios.put(`http://localhost:5000/news/${id}`, {
    //         title,
    //         content,
    //     })
    //     if (res.status === 200) {
    //         setRefetch(prev => !prev)
    //     }
    // }

    const nextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    };

    const prevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <table className="w-[80rem]">
                <tbody>
                    {
                        news.slice(startIndex, endIndex).map((item, index) => (
                            <tr key={item.id} className={`border-y ${index % 2 === 0 ? "bg-tablePrimary" : "bg-tableSecondary"} border-primary`}>
                                <td className="w-[65rem] h-16 flex justify-between border-r border-primary p-4">
                                    <p
                                        onClick={() => {
                                            setNewsId(item.id);
                                            setTitle(item.title);
                                            setContent(item.content);
                                            setOpen(true);
                                        }}
                                        className="w-[60rem] overflow-hidden text-lg text-primary font-semibold cursor-pointer">{item.title}
                                    </p>
                                    {
                                        item.title &&
                                        <button className="p-0">
                                            <img src="../assets/icons/favorite.svg" alt="ícone de favorito" className="size-7"/>
                                        </button>
                                    }
                                </td>
                                <td>
                                    {
                                        item.title &&
                                        <button>
                                            <img
                                                onClick={() => {
                                                    // handleDelete(item.id)
                                                }}
                                                src="../assets/icons/delete.svg"
                                                alt="ícone de remover"
                                                className="size-7"
                                            />
                                        </button>
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="flex gap-4 justify-center mt-2">
                <button
                    className="text-black"
                    onClick={prevPage}
                    disabled={currentPage === 0}
                >
                    Anterior
                </button>
                <button
                    className="text-black"
                    onClick={nextPage}
                    disabled={currentPage === totalPages - 1}
                >
                    Próximo
                </button>
            </div>
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
                                    // handleEdit(newsId)
                                }}
                            >
                                <input
                                    autoFocus
                                    type="text"
                                    placeholder='Título'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className='my-4 px-4 py-6 text-lg text-black bg-transparent outline-none h-6 border-b border-slate-400'
                                />
                                <textarea
                                    className='px-4 text-lg leading-6 text-black bg-transparent resize-none flex-1 outline-none'
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder='Digite sua notícia...'
                                    value={content}
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
    );
};