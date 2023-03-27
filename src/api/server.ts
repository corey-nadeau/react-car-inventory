let token = '0a95c313e1b60db35f06ecc9fe481927bebabb4b4686d206'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://ambiguous-darkened-millennium.glitch.me/api/cars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin':'*',
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://ambiguous-darkened-millennium.glitch.me/api/cars`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin':'*',
            },
            body: JSON.stringify(data)
        })

        if(!response.ok) {
            throw new Error('Failed to crate new data on the server')
        }

        return await response.json()
    },

    update: async(id:string, data: any = {}) => {
        const response = await fetch(`https://ambiguous-darkened-millennium.glitch.me/api/cars/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin':'*',
            },
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://ambiguous-darkened-millennium.glitch.me/api/cars/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}