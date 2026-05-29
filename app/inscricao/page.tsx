import { SubscriptionForm } from "@/components/inscricao/subscription-form"
import Image from "next/image"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Image
        src="/bg-quebramar/quebra-mar-blur.jpg"
        alt="Background"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="absolute inset-0 bg-black/40 -z-10" />

      <div className="relative z-10 flex min-h-screen items-center justify-center p-4 py-24">
        <SubscriptionForm />
      </div>

    </main>
  )
}