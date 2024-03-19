export const constants = {
    CURRENT_TOKEN: 'CURRENT_TOKEN'
};


const API_URL = 'http://localhost:4000'

export const apiEndpoint = {
    AuthEndpoint: {
        login: `${API_URL}/auth/login`,
        logout: `${API_URL}/auth/logout`,
        me: `${API_URL}/auth/me`,
    },
    MessageEndpoint: `${API_URL}/messages`,
    UserEndpoint: `${API_URL}/users`,
};