# Technologies Used

![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js)
![React](https://img.shields.io/badge/React-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css)
![Contentful](https://img.shields.io/badge/Contentful-2478CC?logo=contentful)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)

This repository contains the solution to a frontend test using Next.js and deployed on Vercel. The project integrates with Contentful as a CMS and is styled using Tailwind CSS.

## Live Demo

[Visit the live demo!](https://frontend-test-2dzmoepht-jmurphy1196.vercel.app/)

## Setup & Development

### Prerequisites

- Node.js (>= 12.x)
- Yarn or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/frontend-test.git
cd frontend-test
```

2. Install the dependencies:

Using yarn:

```bash
yarn install
```

Using npm:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your Contentful credentials:

```env
SPACE_ID=YOUR_SPACE_ID
API_KEY=YOUR_ACCESS_TOKEN
API_KEY_PREVIEW=YOUR_PREVIEW_ACCESS_TOKEN
```

4. Run the development server:

Using yarn:

```bash
yarn dev
```

Using npm:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

The project is set up to be easily deployed on Vercel. Connect your GitHub repository to Vercel and it will automatically deploy on every push to the main branch.

