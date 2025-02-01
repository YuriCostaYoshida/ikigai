'use client'
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { useEffect, useState } from "react"

export default function page() {

    const [show, setShow] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 45000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <main className="flex justify-center items-center flex-col ">
            <div className="p-5">
                <TypingAnimation className="text-3xl">
                    O fim de tudo será de tranquilidade universal enquanto enfrento minha mortalidade iminente testemunhando o ceifador se aproximando. Desejo que você seja minha visão de morte. O sonho do seu toque sendo minha sensação final traz meu significado de dias numerados enquanto fico acordado à noite ponderando sobre o vasto universo, sabendo que tudo não é nada sem você.
                </TypingAnimation>
            </div>

            {show ? (
                <>
                    <ShimmerButton className="shadow-2xl">
                        <span className="font-bold rounded-md text-2xl whitespace-pre-wrap text-center leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            Proxima etapa
                        </span>
                    </ShimmerButton>
                </>
            ) : (
                null
            )
            }


        </main>
    )
}