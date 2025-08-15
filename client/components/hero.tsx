import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-20 md:py-32">
      <div className="px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Discover Amazing Products</h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Shop the latest trends and find everything you need in one place. Quality products, unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="group">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg">
                  View Categories
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img src="/ecommerce-hero.png" alt="Hero Image" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
