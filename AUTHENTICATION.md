# Authentication Guide

## Overview

iKeys uses **Appwrite** for authentication management. Appwrite handles all session management through **HTTP-only cookies**, which are secure and cannot be accessed by JavaScript.

## How It Works

### 1. Session Management

- **Appwrite manages sessions** via HTTP-only cookies stored in the browser
- Sessions persist across page refreshes automatically
- No need to store tokens or user data in `localStorage`
- Cookies are automatically sent with every API request

### 2. User Store (Pinia)

The user store (`src/stores/user.ts`) has been configured to:

✅ **Store in memory only**: User profile (id, name, email) is NOT persisted to localStorage
✅ **Persist progress**: User progress and achievements ARE saved to localStorage
✅ **Check on mount**: App checks with Appwrite on mount to restore user session

```typescript
persist: {
  paths: ['progress', 'achievements'], // Only persist progress, NOT profile
}
```

### 3. Authentication Flow

#### **Login:**
1. User enters credentials in `LoginForm.vue`
2. `authService.login()` creates an Appwrite session
3. Appwrite sets HTTP-only cookie
4. User profile is loaded into memory (Pinia store)
5. User is authenticated ✅

#### **Page Refresh:**
1. `App.vue` calls `authService.getCurrentUser()` on mount
2. Appwrite checks for valid session cookie
3. If valid, user data is returned
4. User profile is restored to Pinia store
5. User remains authenticated ✅

#### **Logout:**
1. User clicks logout
2. `authService.logout()` deletes the Appwrite session
3. Appwrite clears the HTTP-only cookie
4. `userStore.logout()` clears profile from memory
5. User is logged out ✅

## Key Files

### `src/services/authService.ts`

Handles all Appwrite authentication operations:

- `register()` - Create new account
- `login()` - Create session (sets HTTP-only cookie)
- `logout()` - Delete session (clears cookie)
- `getCurrentUser()` - Check if session is valid
- `forgotPassword()` - Send password reset email
- `resetPassword()` - Complete password reset

### `src/stores/user.ts`

Manages user state in memory:

- `profile` - User data (id, name, email) - **NOT persisted**
- `progress` - User progress (songs completed, XP) - **Persisted**
- `achievements` - Unlocked achievements - **Persisted**

### `src/App.vue`

Checks authentication on mount:

```typescript
onMounted(async () => {
  // Check for existing auth session with Appwrite
  const user = await authService.getCurrentUser();
  if (user) {
    userStore.setProfile({
      id: user.$id,
      name: user.name,
      email: user.email,
      createdAt: new Date().toISOString(),
    });
  }
});
```

## Security Best Practices

✅ **HTTP-only cookies**: Cannot be accessed by JavaScript (XSS protection)
✅ **No tokens in localStorage**: Reduces risk of token theft
✅ **Automatic session management**: Appwrite handles token refresh
✅ **Secure by default**: Sessions expire automatically
✅ **CORS protection**: Appwrite validates origin

## Common Issues

### Issue: User logged out after refresh

**Cause**: Appwrite session cookie was cleared or expired

**Solution**:
1. Check browser privacy settings (cookies enabled)
2. Check Appwrite session length settings
3. Ensure Appwrite endpoint is correct in `.env`

### Issue: Login works but user not recognized

**Cause**: User profile not loaded into Pinia store

**Solution**:
1. Check browser console for errors
2. Verify `authService.getCurrentUser()` is called on mount
3. Check Appwrite project permissions

### Issue: User data lost after logout

**Cause**: Expected behavior - profile is cleared on logout

**Solution**:
- User progress and achievements are still saved
- User must log back in to access their profile
- This is secure and expected

## Development Notes

- **Session cookies work on localhost** - no special configuration needed
- **Production**: Add your domain to Appwrite platform settings
- **Testing**: Use private/incognito mode to test fresh sessions
- **Debugging**: Check Application → Cookies in DevTools

## API Reference

```typescript
// Check if user is authenticated
const user = await authService.getCurrentUser();
if (user) {
  console.log('User is logged in:', user.name);
} else {
  console.log('User is not logged in');
}

// Login
try {
  const user = await authService.login(email, password);
  userStore.setProfile(user);
} catch (error) {
  console.error('Login failed:', error);
}

// Logout
try {
  await authService.logout();
  userStore.logout();
} catch (error) {
  console.error('Logout failed:', error);
}
```

## Benefits of This Approach

1. **More Secure**: HTTP-only cookies cannot be stolen via XSS
2. **Simpler Code**: No need to manage tokens manually
3. **Better UX**: Sessions persist across tabs and refreshes
4. **Standards-based**: Uses industry-standard cookie authentication
5. **Appwrite-native**: Leverages Appwrite's built-in session management

## Further Reading

- [Appwrite Authentication Docs](https://appwrite.io/docs/products/auth)
- [HTTP-only Cookies Explained](https://owasp.org/www-community/HttpOnly)
- [Pinia Persistence Plugin](https://prazdevs.github.io/pinia-plugin-persistedstate/)

---

**Last Updated**: January 2025

