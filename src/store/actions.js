import axios from 'axios'

// get products
export const getProducts = ({ commit }) => {
  return axios.get('http://127.0.0.1:8000/api/products').then((response) => {
    commit('setProducts', response.data)
    return Promise.resolve()
  })
}

// get cart
// add a  product to our cart
// remove a product from our cart
// remove all products from our cart
