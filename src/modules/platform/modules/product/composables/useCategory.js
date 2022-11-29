const useCategory = () => {
    const API = 'https://backend-testingg-production.up.railway.app'

    const getCategories = async () => {
        const response = await fetch(`${ API }/api/category`)
        const data = await response.json()
        return data.categorias
    }

    return {
        getCategories
    }
}

export default useCategory