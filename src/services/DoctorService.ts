export const DoctorService = {
    getPreviousAppointments: async () => {
        // Dummy API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, date: '2025-02-10', patient: 'John Doe', summary: 'Follow-up consultation' },
                    { id: 2, date: '2025-02-09', patient: 'Jane Smith', summary: 'Initial consultation' },
                ]);
            }, 1000);
        });
    },

    getUpcomingAppointments: async () => {
        // Dummy API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, date: '2025-02-12', patient: 'Alice Johnson', summary: 'Routine check-up' },
                    { id: 2, date: '2025-02-13', patient: 'Bob Brown', summary: 'Therapy session' },
                ]);
            }, 1000);
        });
    },

    getMoneyEarned: async () => {
        // Dummy API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, amount: '$200', date: '2025-02-10', description: 'Consultation fee' },
                    { id: 2, amount: '$150', date: '2025-02-09', description: 'Therapy session fee' },
                ]);
            }, 1000);
        });
    }
};