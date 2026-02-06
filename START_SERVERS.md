# How to Start the Fire Safety Platform

## ✅ All Dependencies Installed

Both backend and frontend dependencies are now installed and ready to use.

## 🚀 Starting the Servers

### Option 1: Start Both Servers (Recommended)

**Terminal 1 - Backend:**
```bash
cd fire-safety-platform/backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd fire-safety-platform/frontend
npm run dev
```

### Option 2: If Port 5000 is Already in Use

If you see "EADDRINUSE" error, the backend is already running. You can:
- Use the existing backend server
- Or stop it first:
  - Find the process: `Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess`
  - Kill it: `Stop-Process -Id <PID>`

## 📍 Access Points

Once both servers are running:

- **Frontend Homepage:** http://localhost:3000
- **Admin Panel Login:** http://localhost:3000/admin/login
- **Backend API:** http://localhost:5000/api/v1
- **Health Check:** http://localhost:5000/api/v1/health

## 🔐 Default Admin Credentials

- **Email:** admin@firesafety.com
- **Password:** admin123

⚠️ **IMPORTANT:** Change the password immediately after first login!

## ✅ Verification

To verify everything is working:

1. **Backend Health Check:**
   - Open: http://localhost:5000/api/v1/health
   - Should return: `{"status":"ok"}`

2. **Frontend:**
   - Open: http://localhost:3000
   - Should see the homepage with hero banner

3. **Admin Login:**
   - Go to: http://localhost:3000/admin/login
   - Login with admin credentials
   - Should redirect to dashboard

## 🗄️ Database Setup

Make sure you've run the SQL script (`database_setup.sql`) in phpMyAdmin to create all tables and sample data.

## 📝 Environment Variables

Ensure `backend/.env` file exists with:
```
DB_HOST=localhost
DB_PORT=3306
DB_NAME=fire_safety_db
DB_USER=root
DB_PASSWORD=your_password
PORT=5000
JWT_SECRET=your-secret-key-change-in-production
```

