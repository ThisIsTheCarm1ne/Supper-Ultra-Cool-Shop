export async function storefront(query: string, variables = {}) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!
        },
        body: JSON.stringify({query, variables}),
      })


    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();

    if (responseData.errors) {
      throw new Error("GraphQL errors occurred");
    }

    return responseData;
  } catch (error: unknown) {
    return error.message;
    //throw new Error(`Error in storefront function: ${error.message}`);
  }
}

export function formatPrice(price: number) {
  return Intl.NumberFormat("en-us", {style: 'currency', currency: 'USD'}).format(price)
}
// https://admin.shopify.com/store/supper-ultra-cool-shop/apps/shopify-graphiql-app
