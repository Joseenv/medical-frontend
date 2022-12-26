const useCategory = () => {
    const API = 'https://backend-testing-1p5v.onrender.com'

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