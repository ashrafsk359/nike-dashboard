# Nike Products Dashboard

## Project Overview

This project is a simple web dashboard built using Next.js and Supabase.

The application fetches Nike product data from a Supabase database and displays it in a clean tabular format with search and refresh functionality.

---

## Tech Stack

### Frontend
- Next.js
- Tailwind CSS

### Backend / Database
- Supabase

### Deployment
- Vercel

---

## Features

- Display Nike product data in a table
- Fetch data directly from Supabase
- Product search functionality
- Refresh button to reload table data
- Responsive UI
- Live deployed application

---

## Database Fields

The dashboard displays:

- Product Image
- Product Name
- Product Description
- Discount Price
- Review Count
- Product Tagging

---

## Project Structure

```bash
├── app/
├── lib/
│   └── supabase.js
├── public/
├── package.json
├── README.md
└── next.config.js
```

---

## Setup Instructions

### Install Dependencies

```bash
npm install
```

---

### Run Locally

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## Environment Variables

Create the following variables in Vercel or `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

---

## Deployment

### Live Application
Add your Vercel deployment link here.

### GitHub Repository
Add your GitHub repository link here.

---

## Notes

- Product data is stored in Supabase.
- The dashboard fetches data dynamically from the database.
- Search functionality filters products in real time.

---

## Author

Ashraf Sulthan
