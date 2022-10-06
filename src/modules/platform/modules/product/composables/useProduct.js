import { useRouter } from "vue-router"
import { ref } from 'vue';


const useProduct = () => {
    const API = 'https://backend-testing-production.up.railway.app'
    const router = useRouter()

    const getProducts = async () => {
        const response = await fetch(`${ API }/api/products`)
        const data = await response.json()
        return data.products
    }

    const addProduct = async ( data ) => {
        await fetch(`${ API }/api/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( data )
        })
        .then(res => {
            if (res.ok) { 
                router.push({
                    name: 'list-products'
                })
            }
        })
    }

    const deleteProduct = async ( id ) => {
        await fetch(`${API}/api/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }   
        })
        .then(res => {
            if (res.ok) { 
                console.log("HTTP request successful")
                router.go() 
            }
        })
    }

    const goToUpdateProduct = ( id ) => {
        router.push({
            name: 'update-product',
            params: { id }
        })
    }

    const cancelActions = () => {
        router.push({ name: 'list-products' })
    }


    return {
        addProduct,
        deleteProduct,
        goToUpdateProduct,
        cancelActions,
        getProducts
    }
}

export default useProduct