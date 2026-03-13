# GoLearn

An interactive Go (Golang) learning platform built with Next.js. Learn Go through a structured curriculum with progress tracking, hands-on challenges, and curated resources.

## Features

- **Structured Curriculum** — 9 modules with 19 lessons covering Go from basics to real-world projects
- **Progress Tracking** — Mark lessons as complete and track your overall progress
- **Interactive Challenges** — Practice exercises with hints for each lesson
- **Code Examples** — Copy-to-clipboard code snippets you can try in the Go Playground
- **Personal Notes** — Add notes to any lesson for future reference
- **Curated Resources** — Videos, articles, documentation, and GitHub links for deeper learning
- **Dark Theme UI** — Clean, modern interface designed for comfortable reading

## Curriculum

| Module              | Topics                                     |
| ------------------- | ------------------------------------------ |
| Getting Started     | Why Go, Installation & Setup, Hello World  |
| Fundamentals        | Variables & Types, Control Flow, Functions |
| Data Structures     | Arrays & Slices, Maps, Structs             |
| Interfaces & Errors | Interfaces, Error Handling                 |
| Concurrency         | Goroutines, Channels                       |
| Packages & Modules  | Packages, Modules                          |
| Testing             | Unit Testing                               |
| Web Development     | HTTP Basics                                |
| Projects            | CLI Tool, Web API                          |

## Prerequisites

- [Node.js](https://nodejs.org/) 18.0 or later
- npm (comes with Node.js), yarn, pnpm, or bun

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/janithBimsaraUlukkulama/learn-golang-with-me.git
   cd learn-golang-with-me
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open the app**

   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server          |
| `npm run lint`  | Run ESLint to check for code issues  |

## How to Use

1. **Browse Modules** — The home page shows all available modules with your progress for each one.
2. **Select a Module** — Click on a module card to see its lessons.
3. **Study a Lesson** — Each lesson includes explanations, code examples, and resources.
4. **Try the Code** — Use the copy button on code snippets and paste them into the [Go Playground](https://go.dev/play/).
5. **Complete Challenges** — Each lesson has a challenge section. Click "Show Hint" if you get stuck.
6. **Take Notes** — Use the notes section at the bottom of each lesson to jot down key takeaways.
7. **Mark Complete** — Click the completion button to track your progress.
8. **Reset Progress** — Use the reset button on the home page to start fresh.

> **Note:** Your progress and notes are saved in your browser's local storage. They persist across sessions but are specific to the browser and device you're using.

## Tech Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 5
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Lucide React](https://lucide.dev/) (icons)

## Deployment

### Vercel (Recommended)

The easiest way to deploy is with [Vercel](https://vercel.com/):

1. Push your code to a GitHub repository.
2. Import the project in Vercel.
3. Vercel will auto-detect Next.js and deploy.

### Self-Hosted

```bash
npm run build
npm run start
```

The production server runs on port 3000 by default. Set the `PORT` environment variable to change it.

## Project Structure

```
src/
  app/
    page.tsx              # Home page with module list and stats
    layout.tsx            # Root layout with fonts and metadata
    globals.css           # Global styles and Tailwind config
    module/
      [moduleId]/
        page.tsx          # Module overview page
        lesson/
          [lessonId]/
            page.tsx      # Individual lesson page
  components/
    ModuleCard.tsx         # Module preview card
    ProgressBar.tsx        # Progress bar component
    LessonContent.tsx      # Lesson display with code blocks and challenges
    Sidebar.tsx            # Navigation sidebar
  data/
    curriculum.ts          # All curriculum content and lesson data
  hooks/
    useProgress.ts         # Progress tracking hook (localStorage)
```

## License

MIT License - see [LICENSE](LICENSE) for details.

## Author

Janith Bimsara Ulukkulama
