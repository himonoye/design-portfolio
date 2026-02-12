# Design Portfolio - Next.js

Ming Ye's Design portfolio website, now built with Next.js 16.

## Migration from Webpack to Next.js

This project has been migrated from a React + Webpack setup to Next.js with the following changes:

### Key Changes
- ✅ Migrated from React Router to Next.js App Router
- ✅ Replaced webpack bundler with Next.js built-in bundler
- ✅ Converted Azure Function to Next.js API Route
- ✅ Updated all navigation components to use Next.js `Link`
- ✅ Moved static assets to `public/` directory
- ✅ Updated all imports to use TypeScript path aliases (`@/*`)

### Project Structure
```
app/                    # Next.js app directory
  ├── layout.tsx       # Root layout with metadata
  ├── page.tsx         # Home page
  ├── about/           # About page
  ├── resume/          # Resume page
  ├── [project]/       # Dynamic project pages
  └── api/             # API routes
      └── authSitePasscode/  # Password authentication endpoint
src/
  ├── components/      # React components
  ├── styles/          # CSS files
public/                # Static assets (fonts, images, data)
```

## Getting Started

### Prerequisites
- Node.js 20.9.0 or higher (required by Next.js 16)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build
```bash
npm run build
```

This creates a static export in the `out/` directory (configured with `output: 'export'`).

### Production
```bash
npm start
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```
ENTRY_PASSWORD=your_password_here
```

## API Routes

### POST /api/authSitePasscode
Validates password for protected project pages.

**Request:**
```
Content-Type: text/plain
Body: password_string
```

**Response:**
```json
{
  "isPasswordValid": boolean
}
```

## Azure Functions (Legacy)

The `api/` folder contains the original Azure Functions setup. This is kept for reference but is no longer used. The functionality has been migrated to Next.js API routes in `app/api/`.

## Notable Dependencies

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **@azure/cosmos** - Azure Cosmos DB client (if still needed)

## License

ISC

## Author

Ming Ye
