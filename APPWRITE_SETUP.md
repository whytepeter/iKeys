# Appwrite Setup Guide for iKeys

This guide will help you set up Appwrite for authentication and data storage in iKeys.

> **Updated for 2024-2025**: This guide reflects the latest Appwrite interface which uses "Tables" instead of "Collections".

## Prerequisites

- An Appwrite Cloud account (https://cloud.appwrite.io) or self-hosted Appwrite instance
- Basic understanding of Appwrite console
- Node.js 18+ and npm installed

## Terminology Update

Appwrite has updated their interface terminology:

| Old Term | New Term |
|----------|----------|
| Collection | **Table** |
| Documents | **Rows** |
| Create Collection | **Add Table** / **Create Table** |

> **Note**: "Attributes" is still used in the interface, though tables are now the primary data structure.

## Quick Setup Checklist

- [ ] Create Appwrite Project
- [ ] Configure Web Platform (add `localhost` hostname)
- [ ] Create Database
- [ ] Create Recordings Table with 5 attributes
- [ ] Set Table Permissions (Any/Users roles)
- [ ] Create Indexes (optional, for performance)
- [ ] Enable Email/Password Authentication
- [ ] Create `.env` file with your IDs
- [ ] Test the integration (register, login, save recording)

## Step 1: Create an Appwrite Project

1. Log in to your Appwrite console (https://cloud.appwrite.io)
2. Click "Create Project"
3. Name your project (e.g., "iKeys")
4. Copy your Project ID - you'll need this later

## Step 2: Configure Platform (Web)

1. In your project, go to **Settings** → **Platforms**
2. Click "Add Platform" → "Web"
3. **Name**: iKeys Web App
4. **Hostname**: Add your domains:
   - `localhost` (for development)
   - `ikeys.onrender.com` (for production)
   - Your custom domain (if applicable)
5. Click "Create"

## Step 3: Create Database

1. Go to **Databases** in the left sidebar
2. Click "Create Database"
3. **Database ID**: `ikeys_database` (or use auto-generated)
4. **Name**: iKeys Database
5. Copy the Database ID - you'll need this later

## Step 4: Create Tables

> **Note**: Appwrite now uses "Tables" instead of "Collections" and "Columns" instead of "Attributes" in the latest interface.

### Table 1: Recordings

1. Click **"Add Table"** or **"Create Table"**
2. **Table ID**: `recordings` (or use auto-generated)
3. **Name**: Recordings
4. Click **"Create"**

#### Add Attributes to Recordings Table

Click on the table, then go to **"Attributes"** tab. 

**Automatic System Attributes** (Already provided by Appwrite):
- `$id` - Unique identifier (auto-generated)
- `$createdAt` - Creation timestamp (auto-generated)
- `$updatedAt` - Last update timestamp (auto-generated)
- `$permissions` - Document permissions (auto-generated)

**Add these 5 custom attributes:**

| Attribute Key | Type    | Size/Options | Required | Array | Default |
|---------------|---------|--------------|----------|-------|---------|
| `userId`      | String  | 255          | ✅       | ❌    | -       |
| `title`       | String  | 500          | ✅       | ❌    | -       |
| `notes`       | String  | 1000000      | ✅       | ❌    | -       |
| `duration`    | Float   | -            | ✅       | ❌    | 0       |
| `isPublished` | Boolean | -            | ✅       | ❌    | false   |

**How to add each attribute:**
1. Click **"Create Attribute"** or **"Add Attribute"**
2. Select the data type (String, Float, Boolean)
3. Enter the **Attribute Key** (e.g., `userId`, `title`)
4. Set **Size** (for String types only)
5. Check **Required** if the field is mandatory
6. Set **Default** value if applicable
7. Click **"Create"**

> **⚠️ Important**: After creating each attribute, you'll need to wait a few seconds for Appwrite to process it before adding the next one.

#### Set Permissions for Recordings Table

Go to **"Settings"** or **"Permissions"** tab in the table:

**Create Rows:**
- Role: **Any**
- Permission: ✅ Create

**Read Rows:**
- Role: **Any**
- Permission: ✅ Read

**Update Rows:**
- Role: **Users** (authenticated users can update their own data)
- Permission: ✅ Update

**Delete Rows:**
- Role: **Users** (authenticated users can delete their own data)
- Permission: ✅ Delete

#### Create Indexes for Recordings Table (Optional but Recommended)

Go to **"Indexes"** tab:

1. **Index for userId**
   - Key: `idx_userId`
   - Type: Key
   - Columns: `userId` (ASC)
   - Click **"Create Index"**

2. **Index for isPublished** (Optional)
   - Key: `idx_isPublished`
   - Type: Key
   - Columns: `isPublished` (ASC)
   - Click **"Create Index"**

3. **Index for title search** (Optional)
   - Key: `idx_title_search`
   - Type: Fulltext
   - Columns: `title`
   - Click **"Create Index"**

> **Note**: Indexes improve query performance but are optional for small datasets.

## Step 5: Configure Authentication

1. Go to **Auth** in the left sidebar
2. Enable **Email/Password** authentication
3. (Optional) Configure email templates:
   - Password Recovery
   - Email Verification

### Security Settings

Go to **Auth** → **Security**:

- **Password Length**: Minimum 8 characters
- **Password History**: Enable (recommended)
- **Session Length**: 365 days (or your preference)
- **Session Alerts**: Enable (recommended)

## Step 6: Create Environment Variables

Create a `.env` file in your project root:

```env
# Appwrite Configuration
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id_here
VITE_APPWRITE_DATABASE_ID=your_database_id_here
VITE_APPWRITE_RECORDINGS_COLLECTION_ID=recordings
```

Replace the placeholder values with your actual IDs from Appwrite.

> **Note**: If you used a custom Table ID instead of `recordings`, update `VITE_APPWRITE_RECORDINGS_COLLECTION_ID` accordingly.

> **Note**: iKeys stores recording data as JSON in the database (notes, duration, title), not as audio files, so no storage bucket is required.

### Finding Your IDs

- **Project ID**: Dashboard → **Settings** → Project ID
- **Database ID**: **Databases** → Your Database → **Settings** → Database ID  
- **Table ID**: **Databases** → Your Database → **Tables** → Your Table → **Settings** → Table ID

## Step 7: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open the app in your browser

3. Try to:
   - Register a new account
   - Log in
   - Record and save a song
   - Publish/unpublish a recording
   - View published songs from other users

## Troubleshooting

### Common Issues

**Error: "Project with the requested ID could not be found"**
- Verify your `VITE_APPWRITE_PROJECT_ID` is correct
- Check that you've added your domain to the platform settings

**Error: "Unauthorized"**
- Check table permissions
- Ensure you're logged in before trying to create/update rows
- Verify the user has the correct role permissions

**Error: "Document with the requested ID could not be found"**
- Verify your database and table IDs are correct
- Check that the row exists in your database
- Ensure the Table ID in your `.env` file matches the actual Table ID in Appwrite

**Error: "Invalid credentials"**
- Ensure Email/Password authentication is enabled
- Check that the email format is valid

### Rate Limits

Appwrite Cloud has the following rate limits (as of 2024):

- **Free Tier**: 30,000 requests per month
- **Pro Tier**: 2,000,000 requests per month

Monitor your usage in the Appwrite console under **Usage**.

## Security Best Practices

1. **Never commit `.env` files** to version control
2. **Use strong passwords** for test accounts
3. **Enable email verification** in production
4. **Set up proper CORS** in Appwrite settings
5. **Regularly review permissions** and access logs
6. **Use environment-specific projects** (dev, staging, production)

## Production Deployment

When deploying to production:

1. Create a separate Appwrite project for production
2. Update your `.env` variables with production IDs
3. Add your production domain to platform settings
4. Enable email verification
5. Set up monitoring and alerts
6. Review and tighten security rules

## Need Help?

- **Appwrite Documentation**: https://appwrite.io/docs
- **Appwrite Discord**: https://appwrite.io/discord
- **iKeys GitHub**: https://github.com/yourusername/ikeys

## API Reference

### Authentication Service

```typescript
// services/authService.ts
authService.register(email, password, name)
authService.login(email, password)
authService.logout()
authService.getCurrentUser()
authService.forgotPassword(email)
authService.resetPassword(userId, secret, password)
```

### Recordings Service

```typescript
// services/recordingsService.ts
recordingsService.createRecording(userId, title, notes, duration)
recordingsService.getUserRecordings(userId)
recordingsService.getPublishedSongs(searchQuery?)
recordingsService.updateRecording(recordingId, data)
recordingsService.togglePublish(recordingId, isPublished)
recordingsService.deleteRecording(recordingId)
```

## Next Steps

- Set up email templates for password recovery
- Implement real-time subscriptions for collaborative features
- Implement user profiles and avatars
- Add social features (likes, comments, follows)
- Add song sharing and collaboration features

---

**Happy coding! 🎹🎵**

