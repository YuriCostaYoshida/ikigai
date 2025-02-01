import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="--font-geist-sans flex flex-col justify-center items-center h-screen">
      <div>
        <Link href={'/gabi'}>
          <RainbowButton className="font-bold">Só clique se vc for a Gabi</RainbowButton>
        </Link>
      </div>
    </main>
  )
}
