# Car Show 2027 — Registrations & Payments Dashboard (Frontend)

React + Vite + Tailwind CSS v4 frontend for viewing, searching, filtering, and paginating Car Show 2027 participant registrations and payment summaries.

## Tech Stack
- **React 19** + **Vite**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Fetch API** (`src/api/registrationsApi.js`)

## Project Structure
```text
frontend/
├── .env.development              # Backend API base URL (VITE_API_BASE_URL)
└── src/
    ├── api/
    │   ├── registrationsApi.js   # Live C# backend API client
    │   └── sample-data.js        # 25 mock registrations for offline UI testing
    ├── components/
    │   ├── KpiCard.jsx           # Reusable metric card
    │   ├── KpiCards.jsx          # 5-card KPI summary row (PHP formatting)
    │   ├── Pagination.jsx        # Page controls & rows-per-page selector
    │   ├── PaymentBadge.jsx      # Unpaid / Partial / Paid badges
    │   ├── RegistrationFilters.jsx # Debounced search + Type & Status filters
    │   ├── RegistrationTable.jsx # Responsive registrations table
    │   └── StatusBadge.jsx       # Pending / Confirmed / CheckedIn / Cancelled badges
    ├── hooks/
    │   └── useDebounce.js        # 300ms input debounce hook
    └── pages/
        └── RegistrationsPage.jsx # Main dashboard page with loading/empty/error states
