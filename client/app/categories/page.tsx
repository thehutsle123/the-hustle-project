import { Header } from "@/components/header"
import { CategoryGrid } from "@/components/category-grid"
import { Footer } from "@/components/footer"

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">All Categories</h1>
          <p className="text-muted-foreground">Browse products by category</p>
        </div>
        <CategoryGrid />
      </main>
      <Footer />
    </div>
  )
}
