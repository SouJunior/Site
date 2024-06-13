    import React, { useEffect, useState } from "react";
    import Cookies from 'js-cookie';
    import Link from "next/link";
    import Image from "next/image";
    import { sidebarOptions } from "./structure";
    import { FaBars } from "react-icons/fa";

    const AdminSidebar = () => {
        const [isCollapsed, setIsCollapsed] = useState(false);
        const [expandedOptions, setExpandedOptions] = useState({});

        const signOut = () => {
            Cookies.remove('email');
            Cookies.remove('name');        
        }

        const toggleOption = (optionName) => {
            setExpandedOptions(prevState => {
                const updatedOptions = {};
        
                Object.keys(prevState).forEach(key => {
                    updatedOptions[key] = false;
                });
        
                updatedOptions[optionName] = !prevState[optionName];
        
                return updatedOptions;
            });
        };

        useEffect   (() => {
            const handleResize = () => {
                setIsCollapsed(window.innerWidth < 768);
            };
    
            window.addEventListener('resize', handleResize);
    
            handleResize();
    
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

        return (
            <aside
                className={`flex flex-col justify-between h-[calc(100vh-60px)] ${isCollapsed ? 'w-0' : 'w-fit'} border-r border-r-primary pt-24 pb-12 transition-all ease-in-out relative`}
            >
                <nav className={`${isCollapsed ? 'w-0' : 'w-96'} transition-all  ease-in-out`}>
                    <ol>
                        {
                            sidebarOptions.map(option =>
                                <div key={option.name}>
                                    <li
                                        key={option.name}
                                        onClick={() => {
                                            if (option.name === "Sair") {
                                                signOut()
                                            } else {
                                                toggleOption(option.name)
                                            }
                                        }}
                                        className={`${isCollapsed ? 'pl-0 hidden' : 'pl-2'} w-full text-2xl py-2  border-b border-b-secondary bg-primary hover:bg-primaryHover cursor-pointer`} 
                                    >
                                        <Link href={option.path}>{option.name}</Link>
                                    </li>
                                    <ol
                                        className="overflow-hidden transition-max-height ease-in-out"
                                        style={{ maxHeight: expandedOptions[option.name] ? '1000px' : '0' }}
                                    >
                                        {option.sub?.map(subOption => (
                                            <li
                                                key={subOption.name}
                                                className={`${isCollapsed ? 'w-0' : 'w-full'} text-2xl py-2 pl-8 border-b border-b-secondary bg-submenu hover:bg-primaryHover cursor-pointer`}
                                            >
                                                <Link href={subOption.path}>{subOption.name}</Link>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            )
                        }
                    </ol>
                </nav>
                <Image
                    src="/assets/icons/Logo-color.svg"
                    alt="Logo da SouJunior"
                    width={128}
                    height={26}
                />
                <div
                    onClick={() => setIsCollapsed(prev => !prev)}
                    className={`${isCollapsed ? 'bg-transparent' : 'bg-primary'} flex justify-center items-center size-14 rounded-full absolute top-2 left-2 cursor-pointer`}
                >
                    <FaBars className={`${isCollapsed && 'text-primary'} size-8 transition-all duration-200`} />
                </div>
            </aside>
        )
    };

    export default AdminSidebar;