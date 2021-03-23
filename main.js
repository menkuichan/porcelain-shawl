const app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/Socks-White.jpg',
        logo: './assets/Logo.png',
        inventory: 18,
        onSale: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [{
                id: 0,
                color: 'white with black stripes',
                image: './assets/Socks-White.jpg'
            },
            {
                id: 1,
                color: 'white with butterfly',
                image: './assets/Socks-Butterfly.jpg'
            },
        ],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            if (this.cart > 0) this.cart -= 1
        },
        updateImage(newImage) {
            this.image = newImage
        }
    },
})