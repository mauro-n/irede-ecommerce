import { anyObject } from '..'
import Auth from './Auth'

class Api {
    readonly baseUrl = 'http://localhost:3000'

    async getData(url: string) {
        return fetch(`${this.baseUrl}${url}`)
    }

    async postJsonData(url: string, object: anyObject) {
        return fetch(`${this.baseUrl}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        })
    }

    async getDataAuth(url: string) {
        const { token } = Auth.currentUser()

        return fetch(`${this.baseUrl}${url}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }

    async postJsonAuth(url: string, object: anyObject) {
        const { token } = Auth.currentUser()

        return fetch(`${this.baseUrl}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(object)
        })
    }
}

export default new Api()