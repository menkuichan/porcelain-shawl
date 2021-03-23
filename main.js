const app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand: 'MenkuiChan',
        logo: './assets/Logo.png',
        selectedVariant: 0,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [{
                id: 0,
                color: 'white with black stripes',
                colorCode: '#999999',
                image: './assets/Socks-White.jpg',
                quantity: 13,
                onSale: false,
            },
            {
                id: 1,
                color: 'white with butterfly',
                colorCode: '#9BBDBA',
                image: './assets/Socks-Butterfly.jpg',
                quantity: 8,
                onSale: true,
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
        updateImage(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return `${this.brand} ${this.product}`
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        onSale() {
            return this.variants[this.selectedVariant].onSale
        }
    }
})