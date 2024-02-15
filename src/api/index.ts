const baseUrl = "http://localhost:3000"

const api = {
    getData: async (url: string) => {
        return fetch(`${baseUrl}${url}`)
    }
}

export default api