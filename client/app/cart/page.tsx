import { Header } from "@/components/header"
import { CartItems } from "@/components/cart-items"
import { Footer } from "@/components/footer"

export default function CartPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">Review your items</p>
        </div>
        <CartItems />
      </main>
      <Footer />
    </div>
  )
}
