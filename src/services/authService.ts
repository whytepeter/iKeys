import { account } from '../lib/appwrite';
import { ID } from 'appwrite';

export interface AuthUser {
  $id: string;
  email: string;
  name: string;
  emailVerification: boolean;
}

class AuthService {
  // Register new user
  async register(email: string, password: string, name: string): Promise<AuthUser> {
    try {
      await account.create(ID.unique(), email, password, name);
      // Auto login after registration
      return await this.login(email, password);
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }

  // Login user
  async login(email: string, password: string): Promise<AuthUser> {
    try {
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      return user as AuthUser;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  // Logout user
  async logout(): Promise<void> {
    try {
      await account.deleteSession('current');
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }

  // Get current user
  async getCurrentUser(): Promise<AuthUser | null> {
    try {
      const user = await account.get();
      return user as AuthUser;
    } catch (error) {
      return null;
    }
  }

  // Request password reset
  async forgotPassword(email: string): Promise<void> {
    try {
      const resetUrl = `${window.location.origin}/?auth=reset-password`;
      await account.createRecovery(email, resetUrl);
    } catch (error) {
      console.error('Password reset error:', error);
      throw error;
    }
  }

  // Complete password reset
  async resetPassword(userId: string, secret: string, password: string): Promise<void> {
    try {
      await account.updateRecovery(userId, secret, password);
    } catch (error) {
      console.error('Password update error:', error);
      throw error;
    }
  }
}

export const authService = new AuthService();

