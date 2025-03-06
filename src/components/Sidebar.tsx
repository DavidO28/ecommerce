import { useState, useEffect } from 'react'

interface Product {
  category: string
}

interface FetchResponse {
  products: Product[]
}

const Sidebar = () => {
  const [categories, setCategories] = useState<string[]>([])
  const [keywords] = useState<string[]>([
    'apple',
    'watch',
    'Fashion',
    'trend',
    'shoes',
    'shirt',
  ])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products')
        const data: FetchResponse = await response.json()
        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category)),
        )
        setCategories(uniqueCategories)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchCategories()
  }, [])

  
  return (
    <div>
      <input
          type="text"
          className="border-2 rounded px-2 p-2 sm:mb-0"
          placeholder="Search Product"

        />
    </div>
  )
}

export default Sidebar
