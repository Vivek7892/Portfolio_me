# How to Add Your Profile Picture

## Quick Steps:

1. **Prepare Your Photo:**
   - Use a square photo (recommended: 500x500px or larger)
   - Supported formats: JPG, PNG, GIF
   - Face-centered photos work best

2. **Add Photo to Portfolio:**
   - Save your photo as `profile.jpg` (or `profile.png`)
   - Place it in the `images/` folder
   - Path should be: `Portfolio_vivek/images/profile.jpg`

3. **Alternative Method - Use Admin Panel:**
   - Open `admin.html` in browser
   - Login (admin / vivek@2024)
   - Go to Profile tab
   - Click "Choose File" and upload your photo
   - Click "Save Changes"

## File Location:
```
Portfolio_vivek/
├── images/
│   └── profile.jpg  ← Put your photo here
├── index.html
└── admin.html
```

## If Using Different Filename:
Edit `index.html` line 58 and change:
```html
<img src="images/profile.jpg" alt="...">
```
to:
```html
<img src="images/YOUR_FILENAME.jpg" alt="...">
```

## Result:
Your profile picture will appear in the hero section with:
- Circular frame
- White border with shadow
- Animated gradient background
- Responsive sizing (350px desktop, 250px mobile)

---

**Note:** The image will automatically hide if the file is not found, showing only the animated blob background.
