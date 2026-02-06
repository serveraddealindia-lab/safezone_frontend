# Running Fire & Safety Platform Locally

## Quick start (both apps)

From the project root:

```bash
npm run dev
```

This starts:
- **Backend** on http://localhost:5000
- **Frontend** on http://localhost:3000 (Next.js dev server)

## Run separately

**Backend only** (from project root):
```bash
npm run dev:backend
```
Or from `backend/`:
```bash
npm run dev
```

**Frontend only** (from project root):
```bash
npm run dev:frontend
```
Or from `frontend/`:
```bash
npm run dev
```

## Important

- **Local development:** Use `npm run dev` (Next.js dev server). Do **not** use `npm start` inside `frontend/` for local dev — that runs the production server and requires `next build` first.
- **Backend:** Ensure MySQL is running and create a `backend/.env` with `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST`, and optionally `JWT_SECRET`. See `backend/.env.example` if present.
