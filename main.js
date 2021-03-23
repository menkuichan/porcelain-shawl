Vue.component('product', {
    props: {},
    template: `
    <div class='product'>
            <div class='product-image'>
                <img class='image' :src='image'>
            </div>
            <div class='product-info'>
                <span class='sale' v-show='onSale'>On Sale!</span>
                <h1>{{ title }}</h1>
                <p v-if='inStock > 10'>In Stock: {{ inStock }}</p>
                <p v-else-if='inStock > 0'>Almost sold out!</p>
                <p v-else>Out of Stock</p>
                <ul>
                    <li v-for='detail in details'>{{ detail }}</li>
                </ul>
                <p>
                    Available colors:</p>
                <ul>
                    <li class='product-color' v-for='(variant, index) in variants' :style='{ color: variant.colorCode }' @mouseover='updateImage(index)'>
                        {{ variant.color }}
                    </li>
                </ul>
                <button @click='addToCart' :disabled='!inStock'>Add to Cart</button>
                <button @click='removeFromCart' :disabled='!inStock'>Remove from Cart</button>
                <p>At Cart: {{ cart }}</p>
            </div>
        </div>
        `,
    data() {
        return {
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
        }
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

const app = new Vue({
    el: '#app',
})