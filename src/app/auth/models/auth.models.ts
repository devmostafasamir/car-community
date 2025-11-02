export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export interface UserProfile {
  id: string;
  userName?: string;
  email?: string;
  fullName?: string;
  phoneNumber?: string | null;
}
export interface UpdateProfileRequest {
  userName?: string;
  fullName?: string;
  phoneNumber?: string | null;
}
