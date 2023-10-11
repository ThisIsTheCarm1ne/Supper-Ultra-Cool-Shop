import Header from '@/components/Header'
import { formatPrice, storefront } from '../lib/shopify'
import Link from 'next/link'
import Footer from '@/components/Footer'

/* UNUSED TSX
*/

export default async function Home() {
  const { data: { products } } = await storefront(productsQuery)
  return (
  <div className="">
    <Header />
    <div className="island">
      <h2 className="sr-only">Products</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products ? (
          products.edges.map((item) => {
            const product = item.node
            const image = product.images.edges[0].node
            const price = formatPrice(product.priceRange.minVariantPrice.amount)
            return (
            <Link key={product.handle} href={`/products/${product.handle}`} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={image.transformedSrc}
                  alt={image.altText}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
            </Link>
          )})
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
    <Footer />
  </div>
  )
}

const productsQuery = `
query Products {
  products(first: 20) {
    edges {
      node {
        title
        handle
        tags
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 1){
          edges {
            node {
              transformedSrc
              altText
            }
          }
        }
      }
    }
  }
}
`
