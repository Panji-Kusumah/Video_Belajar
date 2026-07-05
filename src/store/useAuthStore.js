import { create } from 'zustand';

const useAuthStore = create((set, get) => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    registeredUsers: JSON.parse(localStorage.getItem('registeredUsers')) || [],
    login: (email, password) => {
        const { registeredUsers } = get();
        const foundUser = registeredUsers.find(
            (u) => u.email === email && u.password === password
        );
        if (foundUser) {
            const userData = { email: foundUser.email, name: foundUser.name, phone: foundUser.phone };
            localStorage.setItem('user', JSON.stringify(userData));
            set({ user: userData });
            return { success: true, message: 'Login berhasil!' };
        }
        return { success: false, message: 'Email atau kata sandi salah, atau akun belum terdaftar.' };
    },
    register: (data) => {
        const { registeredUsers } = get();
        const emailExists = registeredUsers.some((u) => u.email === data.email);
        if (emailExists) {
            return { success: false, message: 'Email sudah terdaftar! Silakan login.' };
        }
        const newUser = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: data.password,
        };
        const updatedUsers = [...registeredUsers, newUser];
        localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
        const userData = { email: newUser.email, name: newUser.name, phone: newUser.phone };
        localStorage.setItem('user', JSON.stringify(userData));
        set({ user: userData, registeredUsers: updatedUsers });
        return { success: true, message: 'Pendaftaran berhasil!' };
    },
    logout: () => {
        localStorage.removeItem('user');
        set({ user: null });
    }
}));

export default useAuthStore;