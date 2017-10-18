import axios from 'axios'

// get products
export const getProducts = ({ commit }) => {
  return axios.get('http://127.0.0.1:8000/api/products').then((response) => {
    commit('setProducts', response.data)
    return Promise.resolve()
  })
}

// add a  product to our cart
export const addProductToCart = ({ commit }, { product, quantity }) => {
  commit('appendToCart', { product, quantity })
  return axios.post('http://127.0.0.1:8000/api/cart', {
    product_id: product.id,
    quantity
  })
}

// get cart
export const getCart = ({ commit }) => {
  return axios.get('http://127.0.0.1:8000/api/cart').then((response) => {
    commit('setCart', response.data)
    return Promise.resolve()
  })
}

// remove a product from our cart
export const removeProductFromCart = ({ commit }, productId) => {
  return axios.delete(`http://127.0.0.1:8000/api/cart/${productId}`).then(() => {
    commit('removeFromCart', productId)
  })
}

// remove all products from our cart
export const removeAllProductFromCart = ({ commit }) => {
  return axios.delete('http://127.0.0.1:8000/api/cart/').then(() => {
    commit('clearCart')
  })
}
