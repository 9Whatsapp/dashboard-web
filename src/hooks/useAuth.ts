import { useState } from 'react';
import { authService, LoginPayload, RegisterPayload, VerifyOtpPayload } from '../services/auth.service';
import { ApiError } from '../lib/api';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleApiError = (err: unknown) => {
    if (err instanceof ApiError) {
      setError(err.message);
    } else {
      setError('An unexpected error occurred');
    }
  };

  const login = async (payload: LoginPayload) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authService.login(payload);
      
      // If login is successful, we set the token in cookies
      // Note: Backend might send token in data.accessToken or set it via HTTP-only cookie.
      // If they return it in the payload:
      if (response.data?.accessToken) {
        document.cookie = `auth_token=${response.data.accessToken}; path=/; max-age=86400`;
      } else {
        // Fallback for mock if backend hasn't implemented it yet
        document.cookie = `auth_token=mock_token_123; path=/; max-age=86400`;
      }
      
      router.push('/');
      router.refresh();
      return true;
    } catch (err) {
      handleApiError(err);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (payload: RegisterPayload) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authService.registerRequestOtp(payload);
      // Usually you would redirect to an OTP verification page
      // and pass the registrationToken (response.data.registrationToken)
      return response;
    } catch (err) {
      handleApiError(err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async (payload: VerifyOtpPayload) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authService.registerVerifyOtp(payload);
      return response;
    } catch (err) {
      handleApiError(err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await authService.logout();
    } catch (err) {
      // API might be down or token already expired. We just ignore and force logout locally.
      console.warn('Logout API warning:', err instanceof Error ? err.message : err);
    } finally {
      document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      router.push('/login');
      router.refresh();
      setIsLoading(false);
    }
  };

  return {
    login,
    register,
    verifyOtp,
    logout,
    isLoading,
    error,
    setError,
  };
}
