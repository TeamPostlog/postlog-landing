"use client"

import * as React from "react"
import { Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"
import Image from 'next/image';
import {Button} from "@/components/ui/button"
import Link from "next/link"

export function ThemeChanger() {
    const {theme, setTheme} = useTheme()

    return (
        <div className="container flex flex-row justify-between items-center">

            <div className="flex flex-row justify-end space-x-2">
                <Link href="/">
                            <h1 className="text-2xl">
                                {theme === "light"?(
                                    <Image src="/logo-black.png" alt="Logo" width={150} height={30}></Image>
                                ):(
                                    <Image src="/logo-white.png" alt="Logo" width={150} height={30}></Image>
                                )}
                                
                            </h1>
                </Link>
                </div>

                <Button variant="outline" size="icon" onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark")
                }} className="ml-auto mr-10">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                    <Moon
                        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                    <span className="sr-only">Toggle theme</span>
                </Button>
                <Button>
                        Start Now
                </Button>
        </div>
        
    )
}
