export const AuthService = {
    login: async (email: string, password: string, userType: string) => {
        // Dummy API call
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Logged in as ${userType} with email: ${email}`);
                resolve({ success: true });
            }, 1000);
        });
    },

    signUp: async (userData: any) => {
        // Dummy API call
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Signed up with data:', userData);
                resolve({ success: true });
            }, 1000);
        });
    }
};