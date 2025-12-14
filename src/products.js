export function initProducts() {
  const container = document.getElementById('products-container')
  if (!container) {
    console.error('Products container not found')
    return
  }

  container.innerHTML = '<p class="loading">Loading products...</p>'

  fetch('https://fakestoreapi.com/products')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      return response.json()
    })
    .then((products) => {
      container.innerHTML = ''
      products.forEach((product) => {
        const productCard = createProductCard(product)
        container.appendChild(productCard)
      })
    })
    .catch((error) => {
      console.error('Error fetching products:', error)
      container.innerHTML =
        '<p class="error">Failed to load products. Please try again later.</p>'
    })
}

function createProductCard(product) {
  const card = document.createElement('div')
  card.className = 'product-card'

  const image = document.createElement('img')
  image.src = product.image
  image.alt = product.title
  image.className = 'product-image'
  image.loading = 'lazy'

  const title = document.createElement('h3')
  title.className = 'product-title'
  title.textContent = product.title

  const price = document.createElement('p')
  price.className = 'product-price'
  price.textContent = `$${product.price.toFixed(2)}`

  const button = document.createElement('button')
  button.className = 'add-to-cart-btn'
  button.textContent = 'Add to cart'
  button.addEventListener('click', () => {
    if (window.addToCart) {
      window.addToCart(product)
    }
  })

  card.appendChild(image)
  card.appendChild(title)
  card.appendChild(price)
  card.appendChild(button)

  return card
}

