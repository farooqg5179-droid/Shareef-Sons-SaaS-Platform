# Shareef Sons Events Organizer

Mobile-first event organizer website and admin dashboard built with React, Vite and Convex.

## Setup
- `npm install`
- Copy `.env.example` to `.env.local` and set `VITE_CONVEX_URL` to the existing Convex deployment URL.
- Set `ADMIN_EMAIL` in Convex environment variables to the admin email.
- Run `npx convex dev` to generate API bindings and deploy functions to the selected deployment.
- Run `npm run dev`.

Never commit `.env.local` or API secrets. The booking form is public. Admin booking access is checked inside Convex functions.
