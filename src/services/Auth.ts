type user = {
    name: string,
    role: string,
    token: string
}

class Auth {
    readonly localKey = 'auth'
    storeUser(user: user) {
        const data = {
            name: user.name,
            token: user.token,
            role: user.role
        }

        localStorage.setItem(this.localKey, JSON.stringify(data))
    }

    currentUser() {
        const result = localStorage.getItem(this.localKey)
        if (!result) {
            return null
        }
        return JSON.parse(result)
    }
}

export default new Auth()