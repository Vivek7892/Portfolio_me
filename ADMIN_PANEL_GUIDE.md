# Admin Panel Setup Guide

## 🔐 Access Admin Panel

**URL:** Open `admin.html` in your browser

**Default Credentials:**
- Username: `admin`
- Password: `vivek@2024`

## 📋 Features

### 1. Profile Management
- Update name, title, email
- Change GitHub and LinkedIn URLs
- Edit about section
- Add profile image URL

### 2. Projects Management
- Add new projects
- Edit existing projects
- Delete projects
- Update GitHub links

### 3. Skills Management
- Add skill categories
- Manage skill tags
- Delete skills

### 4. Education Management
- View education details
- (Currently read-only)

## 🔒 Security Notes

**IMPORTANT:** This is a client-side admin panel using localStorage.

For production use:
1. Replace with proper backend authentication
2. Use database instead of localStorage
3. Add JWT tokens or session management
4. Implement proper authorization
5. Use HTTPS

## 🚀 How to Use

1. Open `admin.html` in browser
2. Login with credentials above
3. Navigate through tabs
4. Update information
5. Click "Save Changes"
6. Changes are stored in browser localStorage

## 💡 Changing Admin Password

Edit `js/admin.js` and update:
```javascript
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'your_new_password'
};
```

## 📝 Data Storage

All data is stored in browser's localStorage:
- `adminLoggedIn` - Login status
- `portfolioProfile` - Profile data
- `portfolioProjects` - Projects list
- `portfolioSkills` - Skills list

## ⚠️ Limitations

- Data is stored locally in browser
- Clearing browser data will reset everything
- No multi-user support
- No data backup/restore

## 🔄 Future Enhancements

For a production-ready admin panel, consider:
- Backend API (Node.js/Python/PHP)
- Database (MongoDB/MySQL/PostgreSQL)
- File upload for images
- Rich text editor for descriptions
- Analytics dashboard
- User management
- Activity logs

---

**Note:** Keep your admin credentials secure and change the default password!
