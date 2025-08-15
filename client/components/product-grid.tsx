"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Star, Heart, Search, Filter } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useSearchParams } from "next/navigation"

const allProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviews: 124,
    image: "/premium-wireless-headphones.png",
    badge: "Best Seller",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 89,
    image: "/smartwatch-lifestyle.png",
    badge: "New",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.9,
    reviews: 256,
    image: "/laptop-backpack.png",
    badge: "Sale",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 149.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 178,
    image: "/modern-coffee-maker.png",
    badge: null,
    category: "Home",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.5,
    reviews: 203,
    image: "/bluetooth-speaker.png",
    badge: "Sale",
    category: "Electronics",
  },
  {
    id: 6,
    name: "Yoga Mat",
    price: 39.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 145,
    image: "/rolled-yoga-mat.png",
    badge: null,
    category: "Fitness",
  },
  {
    id: 7,
    name: "Desk Lamp",
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.6,
    reviews: 92,
    image: "/modern-desk-lamp.png",
    badge: "Sale",
    category: "Home",
  },
  {
    id: 8,
    name: "Running Shoes",
    price: 129.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 312,
    image: "/running-shoes-on-track.png",
    badge: "Popular",
    category: "Fashion",
  },
  {
    id: 9,
    name: "Wireless Mouse",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.4,
    reviews: 167,
    image: "/wireless-mouse.png",
    badge: "Sale",
    category: "Electronics",
  },
  {
    id: 10,
    name: "Water Bottle",
    price: 24.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    image: "/reusable-water-bottle.png",
    badge: "Eco-Friendly",
    category: "Fitness",
  },
  {
    id: 11,
    name: "Phone Case",
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.3,
    reviews: 234,
    image: "/colorful-phone-case-display.png",
    badge: "Sale",
    category: "Accessories",
  },
  {
    id: 12,
    name: "Sunglasses",
    price: 159.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 78,
    image: "/stylish-sunglasses.png",
    badge: "Premium",
    category: "Fashion",
  },
]

export function ProductGrid() {
  const { addItem } = useCart()
  const searchParams = useSearchParams()
  const [products, setProducts] = useState(allProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")

  const categories = ["all", ...Array.from(new Set(allProducts.map((p) => p.category)))]

  useEffect(() => {
    const urlSearch = searchParams.get("search")
    const urlCategory = searchParams.get("category")

    if (urlSearch) {
      setSearchTerm(urlSearch)
    }

    if (urlCategory && categories.includes(urlCategory)) {
      setSelectedCategory(urlCategory)
    }
  }, [searchParams])

  const filteredAndSortedProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "all" || product.category === selectedCategory),
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "name":
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

  const handleAddToCart = (product: (typeof allProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full sm:w-64"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="name">Name A-Z</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAndSortedProducts.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                {product.badge && <Badge className="absolute top-3 left-3 z-10">{product.badge}</Badge>}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 z-10 bg-background/80 hover:bg-background"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredAndSortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}
