/* global Vue, axios */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      products: []
    };
  },
  methods: {
    allProducts: function () {
      console.log("in the index function");
      axios
        .get('http://localhost:3000/products')
        .then(response => {
          console.log(response.data);
          this.products = response.data;
        });
    },
    createProduct: function () {
      console.log("in the create function");
      axios.post('http://localhost:3000/products', {
        id: 8,
        name: "Juice",
        description: "Expensive but good water",
        imageUrl: "https://produits.bienmanger.com/21129-0w470h470_Fiji_Natural_Artesian_Water.jpg",
        price: 3.00,
        tax: 0.21,
        total: 3.21
      }).then(response => {
        console.log(response.data);
        this.products.push(response.data);
      });
    },
    updateProduct: function () {
      console.log("in the update function");
      axios.patch('http://localhost:3000/products/11', {
        name: "Aloha Water"
      })
        .then(response => {
          console.log(response.data);
        });
    },
    deleteProduct: function () {
      console.log("in the delete function");
      axios.delete('http://localhost:3000/products/11')
        .then(response => {
          console.log(response);
        });
    }
  },
  created: function () {
    this.allProducts();
  }
});