# Fire & Safety Platform

A monorepo containing the frontend and backend for the Fire & Safety corporate platform.

## Structure

- `frontend/` - Next.js application with Tailwind CSS
- `backend/` - Node.js Express server with MySQL and Sequelize

## Getting Started

### Install Dependencies

```bash
npm run install:all
```

### Development

Run both frontend and backend:

```bash
# Terminal 1 - Backend (runs on port 5000)
npm run dev:backend

# Terminal 2 - Frontend (runs on port 3000)
npm run dev:frontend
```

## Environment Variables

### Backend

Create a `.env` file in `backend/` with:

```
DB_HOST=localhost
DB_PORT=3306
DB_NAME=fire_safety_db
DB_USER=root
DB_PASSWORD=your_password
PORT=5000
```

