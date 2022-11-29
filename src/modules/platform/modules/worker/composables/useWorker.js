import { useRouter } from "vue-router"

const useWorker = () => {
    const API = 'https://backend-testingg-production.up.railway.app'
    const router = useRouter()

    const getWorkers = async () => {
        const response = await fetch(`${ API }/api/user`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'x-token': localStorage.getItem('idToken')
            }
        })
        const data = await response.json()
        return data.usuarios
    }

    const addWorker = async ( data ) => {
        await fetch(`${ API }/api/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': localStorage.getItem('idToken')
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if (res.ok) { 
                router.push({
                    name: 'list-workers'
                })
            }
        })
    }

    const deleteWorker = ( id ) => {
        fetch(`${API}/api/user/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'x-token': localStorage.getItem('idToken')
            }   
        })
        .then(res => {
            if (res.ok) { 
                console.log("HTTP request successful")
                router.go() 
            }
        })
    }

    const getWorkerByRole = async ( role ) => {
        let workers = await getWorkers()
        return workers.filter( worker => worker.role === role ) 
    }

    const cancelActions = () => {
        router.push({ name: 'list-workers' })
    }

    return {
        addWorker,
        cancelActions,
        getWorkerByRole,
        deleteWorker
    }
}

export default useWorker