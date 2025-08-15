import { Header } from "@/components/header"
import { CheckoutForm } from "@/components/checkout-form"
import { Footer } from "@/components/footer"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Checkout</h1>
          <p className="text-muted-foreground">Complete your purchase</p>
        </div>
        <CheckoutForm />
      </main>
      <Footer />
    </div>
  )
}
