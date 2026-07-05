import { fetchApi } from '../lib/api';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
  companyName?: string;
}

export interface VerifyOtpPayload {
  registrationToken: string;
  otp: string;
}

export interface AuthResponse {
  message?: string;
  data?: {
    accessToken?: string;
    refreshToken?: string;
    registrationToken?: string;
    user?: any;
  };
}

export const authService = {
  login: async (payload: LoginPayload): Promise<AuthResponse> => {
    return fetchApi<AuthResponse>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  registerRequestOtp: async (payload: RegisterPayload): Promise<AuthResponse> => {
    return fetchApi<AuthResponse>('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  registerVerifyOtp: async (payload: VerifyOtpPayload): Promise<AuthResponse> => {
    return fetchApi<AuthResponse>('/api/auth/register/verify-otp', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  logout: async (): Promise<AuthResponse> => {
    return fetchApi<AuthResponse>('/api/auth/logout', {
      method: 'POST',
    });
  },
};
