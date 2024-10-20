let cart = JSON.parse(localStorage.getItem('cart')) || []
const productsList = document.querySelector('.products-list')
const cartCount = document.querySelector('.count')

// Atualiza o contador do carrinho
function updateCartCount() {
  cartCount.textContent = cart.length
}

// Salva o carrinho no localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart))
}

// Função para adicionar o produto ao carrinho
function addToCart(product) {
    cart.push(product)
    saveCart()
    updateCartCount()
    showNotification(`✅ O item foi adicionado ao carrinho!`)
}

// Função para remover o produto do carrinho
function removeFromCart(productId) {
    const product = cart.find(item => item.id === productId)
    cart = cart.filter(item => item.id !== productId)
    saveCart()
    updateCartCount()
    showNotification(`❌ O item foi removido do carrinho!`, true) // Passando true para exibir como erro
}

// Função para renderizar os produtos
function renderProducts() {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        const productItem = document.createElement('div')
        productItem.classList.add('product-item')
        productItem.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <span>Price: $${product.price}</span>
          <br>
          <button class="add-to-cart">Adicionar ao Carrinho</button>
          <br>
          <button class="remove-from-cart" style="display:none">Remover do Carrinho</button>
        `
        productsList.appendChild(productItem)

        const addToCartButton = productItem.querySelector('.add-to-cart')
        const removeFromCartButton = productItem.querySelector('.remove-from-cart')

        // Verifica se o produto já está no carrinho e ajusta os botões
        if (cart.some(item => item.id === product.id)) {
          addToCartButton.style.display = 'none'
          removeFromCartButton.style.display = 'block'
        }

        // Adicionar ao carrinho
        addToCartButton.addEventListener('click', () => {
          addToCart(product)
          addToCartButton.style.display = 'none'
          removeFromCartButton.style.display = 'block'
        })

        // Remover do carrinho
        removeFromCartButton.addEventListener('click', () => {
          removeFromCart(product.id)
          removeFromCartButton.style.display = 'none'
          addToCartButton.style.display = 'block'
        })
      })
    })
    .catch(error => {
      console.error('Error fetching products:', error)
    })
}

function showNotification(message, isError = false) {
    const notification = document.getElementById('notification')
    notification.textContent = message

    // Altera a cor da notificação para erro ou sucesso
    if (isError) {
        notification.classList.add('error')
    } else {
        notification.classList.remove('error')
    }

    // Mostra a notificação
    notification.classList.add('show')

    // Remove a notificação após 3 segundos
    setTimeout(() => {
        notification.classList.remove('show')
    }, 3000)
}

updateCartCount()
renderProducts()
