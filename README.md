# Studio 10b Website

A modern website for Studio 10b, a creative studio specializing in 3D real-time environments and virtual experiences, built with Astro.

## 🚀 Project Structure

The project structure follows Astro's recommended organization:

```
📁 studio-10b-website/
├── 📁 public/             # Static assets (images, fonts, etc.)
├── 📁 src/
│   ├── 📁 components/     # Reusable UI components
│   ├── 📁 layouts/        # Page layouts
│   ├── 📁 pages/          # Pages and routes
│   ├── 📁 styles/         # Global styles
│   └── 📁 data/           # Data files
├── astro.config.mjs       # Astro configuration
├── package.json           # Project dependencies
└── tsconfig.json          # TypeScript configuration
```

## 🧞 Getting Started

### Prerequisites

- Node.js (v16.x or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/studio-10b-website.git
cd studio-10b-website
```

2. Install dependencies:
```bash
npm install
# or with yarn
yarn install
```

3. Start the development server:
```bash
npm run dev
# or with yarn
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🔧 Building for Production

To create a production build:

```bash
npm run build
# or with yarn
yarn build
```

Preview the production build:

```bash
npm run preview
# or with yarn
yarn preview
```

## 📝 Project Features

- Responsive design for all screen sizes
- Component-based architecture
- Fast page loads with Astro's partial hydration
- Dynamic project pages with [slug] routes
- Image optimization
- SEO optimization

## 🛠️ Technologies Used

- [Astro](https://astro.build/) - The web framework
- HTML/CSS - Markup and styling
- JavaScript - Client-side functionality

## 📱 Pages

- **Home** - Introduction to Studio hob with hero, featured project and grid of projects
- **Projects** - Filterable grid of all projects
- **Project Detail** - Detailed view of individual projects with gallery
- **About** - Information about the studio and team
- **Contact** - Contact form and information

## 🎨 Customization

### Colors and Typography

You can customize the colors and typography by editing the CSS variables in `src/styles/tailwind.css`.

### Images

Replace the placeholder images in the `public/images/` directory with your own images. Make sure to maintain the same filenames or update the references in the components.

### Content

Update the sample data in the components and pages with your actual content.

## 📬 Contact

For any questions or feedback, please reach out to [your@email.com](mailto:your@email.com).

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

