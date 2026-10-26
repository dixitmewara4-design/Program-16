
import { useState } from 'react'

const initialProducts = [
  { id: 1, name: 'Wireless Headphones', price: 2499, category: 'Electronics' },
  { id: 2, name: 'Smart Watch', price: 3999, category: 'Accessories' },
  { id: 3, name: 'Travel Backpack', price: 1499, category: 'Lifestyle' },
]

export default function App() {
  const [products, setProducts] = useState(initialProducts)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Electronics')

  function addProduct(e) {
    e.preventDefault()
    if (!name.trim() || Number(price) <= 0) return

    setProducts(old => [
      ...old,
      { id: Date.now(), name: name.trim(), price: Number(price), category },
    ])
    setName('')
    setPrice('')
  }

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-violet-400">
              Practical 16
            </p>
            <h1 className="mt-2 text-4xl font-black">
              Product<span className="text-violet-400">Hub</span>
            </h1>
            <p className="mt-2 text-slate-400">Your product management dashboard.</p>
          </div>
          <span className="rounded-xl bg-violet-500/15 px-4 py-3 text-violet-300">
            {products.length} Products
          </span>
        </header>

        <section className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <form onSubmit={addProduct} className="h-fit rounded-3xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-xl font-bold">Add a Product</h2>

            <label className="mt-5 block text-sm text-slate-300">
              Product Name
              <input required value={name} onChange={e => setName(e.target.value)}
                placeholder="Enter product name"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-violet-400" />
            </label>

            <label className="mt-4 block text-sm text-slate-300">
              Price (₹)
              <input required type="number" min="1" value={price}
                onChange={e => setPrice(e.target.value)}
                placeholder="Enter price"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-violet-400" />
            </label>

            <label className="mt-4 block text-sm text-slate-300">
              Category
              <select value={category} onChange={e => setCategory(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3">
                <option>Electronics</option>
                <option>Accessories</option>
                <option>Lifestyle</option>
                <option>Home</option>
              </select>
            </label>

            <button type="submit"
              className="mt-6 w-full rounded-xl bg-violet-500 py-3 font-bold hover:bg-violet-400">
              + Add Product
            </button>
          </form>

          <div className="space-y-4">
            {products.map(product => (
              <article key={product.id}
                className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900 p-5">
                <div>
                  <span className="rounded-full bg-violet-400/10 px-3 py-1 text-xs text-violet-300">
                    {product.category}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{product.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">Product ID: {product.id}</p>
                </div>
                <p className="text-xl font-black text-emerald-300">
                  ₹{product.price.toLocaleString('en-IN')}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
