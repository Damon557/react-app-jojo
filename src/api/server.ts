let token = `3cd8eaa0d26333c15c2d2e365d289218a6adfa20f9707427`

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://jojo-week-8.herokuapp.com/`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()

    },

    create: async(data:any) => {
        const response = await fetch(`https://jojo-week-8.herokuapp.com/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer: ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }
        return await response.json()
    },
    update: async (id:string, data:any) => {
        const response = await fetch(`https://jojo-week-8.herokuapp.com/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer: ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Failed to Update Stand Id ${id} on server`)
        }
        return await response.json()
    },
    delete: async (id:string) => {
        const response = await fetch(`https://jojo-week-8.herokuapp.com/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer: ${token}`
            }           
        });

        if (!response.ok) {
            throw new Error(`Failed to Delete Stand Id ${id} on server`)
        }
        return await response.json()
    }

}