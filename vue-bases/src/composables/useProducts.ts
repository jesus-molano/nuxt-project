import {ref, type Ref} from "vue";

export const useProducts = () => {
    interface Product {
        id: number,
        name: string,
        amount: number
    }

    const products: Ref<Product[]> = ref([
            {id: 1, name: 'Apple', amount: 1},
            {id: 2, name: 'Banana', amount: 1},
            {id: 3, name: 'Orange', amount: 1},
            {id: 4, name: 'Pear', amount: 1}
        ]
    )

    const handleIncrementAmount = (id: number) => {
        const product = products.value.find(product => product.id === id)
        if (!product) return
        product.amount++
    }
    const handleDecrementAmount = (id: number) => {
        const product = products.value.find(product => product.id === id)
        if (!product) return
        product.amount--
    }
    return {
        // Attributes
        products,
        // Methods
        handleIncrementAmount,
        handleDecrementAmount
    }
}