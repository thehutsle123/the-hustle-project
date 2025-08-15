"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"

const categories = [
  {
    name: "Electronics",
    image: "/modern-electronics.png",
    count: "1,234 items",
    slug: "Electronics",
  },
  {
    name: "Fashion",
    image: "/stylish-fashion.png",
    count: "2,567 items",
    slug: "Fashion",
  },
  {
    name: "Home & Garden",
    image: "/home-decor-garden.png",
    count: "890 items",
    slug: "Home",
  },
  {
    name: "Sports",
    image: "/assorted-sports-gear.png",
    count: "456 items",
    slug: "Fitness",
  },
]

export function Categories() {
  const router = useRouter()

  const handleCategoryClick = (categorySlug: string) => {
    router.push(`/products?category=${categorySlug}`)
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of categories and find exactly what you're looking for
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="group cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleCategoryClick(category.slug)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
