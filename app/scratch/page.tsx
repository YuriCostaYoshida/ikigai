'use client'
import { ScratchToReveal } from "@/components/ui/scratch-to-reveal";

export default function page() {
    const handleComplete = () => {
        // Do Something
    };

    return (
        <main className="flex justify-center items-center h-screen flex-col gap-2">

            <ScratchToReveal
                width={250}
                height={250}
                minScratchPercentage={70}
                className="flex items-center justify-center overflow-hidden rounded-2xl"
                onComplete={handleComplete}
                gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
            >
                <img src="/viados.png" alt="" />
            </ScratchToReveal>

            <h1>Raspe!! (igual uma raspadinha!!)</h1>
        </main>

    );
}