import Link from 'next/link'

// 仮のカテゴリーリスト。実際のデータに置き換えてください。
const categories = [
  { id: 1, name: 'Nature' },
  { id: 2, name: 'Urban' },
  { id: 3, name: 'Abstract' },
  { id: 4, name: 'Portrait' },
]

const Sidebar = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.id}`} className="hover:text-gray-600">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">About Us</h2>
        <p>Discover and share beautiful images from around the world.</p>
      </div>
    </div>
  )
}

export default Sidebar