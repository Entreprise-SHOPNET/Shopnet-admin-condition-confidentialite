# SHOPNET Admin Panel

## Overview
A static web application for the SHOPNET admin panel, featuring a login page and an admin dashboard. Written in plain HTML, CSS, and JavaScript — no build system or framework required.

## Project Structure
- `index.html` — Admin login page (French UI)
- `style.css` — Login page styles
- `script.js` — Login logic (client-side credential check, redirects to dashboard)
- `AdminDashboard.html` — Admin dashboard page
- `AdminDashboard.css` — Dashboard styles
- `server.js` — Simple Node.js HTTP file server for local development

## Running the App
The app is served by a Node.js static file server on port 5000.

**Start command:** `node server.js`

## Login Credentials
- Username: `shopnet`
- Password: `123456`

## Deployment
Configured as a **static** deployment (publicDir: `.`). The static files are served directly in production.

## Notes
- All UI text is in French.
- The "Besoin d'aide?" (Need help?) button redirects to a WhatsApp number.
