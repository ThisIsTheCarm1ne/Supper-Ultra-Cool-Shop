import { formatPrice, storefront } from "@/lib/shopify"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

interface pageProps {
  params: {handle: string}
}
export default async function Product({ params }) {
  const { data: { productByHandle } } = await storefront(singleProductQuery, { handle: params.handle } )
  return (
    <div>
      <Header />
      <div className="island flex">
        <img
          src={productByHandle.images.edges[0].node.transformedSrc}
          alt={productByHandle.images.edges[0].node.altText}
          className="pl-10"
        />
        <div className="px-20">
          <h1 className="text-5xl">{productByHandle.title}</h1>
          <p className="my-5">{productByHandle.updatedAt}</p>
          <p className="text-xl w-10/12">{productByHandle.description}</p>
          <button className="btn">{formatPrice(productByHandle.priceRange.minVariantPrice.amount)} Buy</button>
          <button className="btn ml-5">Add to cart</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

/*
export async function getStaticPaths() {
  const { data } = await storefront(`
    {
      products(first: 20) {
        edges {
          node {
            handle
          }
        }
      }
    }
  `)
  return {
    paths: data.products.edges.map(product => ({ params: { handle: product.node.handle } } )),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { data } = await storefront(singleProductQuery, { handle: params.handle })
  return {
    props: {
      product: data.productByHandle,
    }
  }
}

*/
const singleProductQuery = `
query Product($handle: String!) {
  productByHandle(handle: $handle) {
    title
    description
    updatedAt
    tags
    priceRange {
      minVariantPrice {
        amount
      }
    }
    images(first: 1) {
      edges {
        node {
          transformedSrc
          altText
        }
      }
    }
  }
}
`
