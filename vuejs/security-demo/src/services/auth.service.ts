import { ref } from 'vue';

interface LoginCredentials {
  username: string;
  password: string;
}

export const useAuthService = () => {
  const token = ref<string | null>(localStorage.getItem('token'));
  const isAuthenticated = ref(!!token.value);

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      token.value = data.token;
      isAuthenticated.value = true;
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    token.value = null;
    isAuthenticated.value = false;
  };

  return {
    token,
    isAuthenticated,
    login,
    logout,
  };
};
