# Sailing Knots App

Welcome to the Sailing Knots App! This project is designed to help users learn how to tie various sailing knots through video tutorials and interactive features.

## Project Overview

The Sailing Knots App includes the following features:

- **Video Tutorials**: Step-by-step video guides on how to tie the Bowline, Figure-Eight, and Clove Hitch knots.
- **Knot Gallery**: A visually appealing gallery showcasing different knots along with their descriptions and video tutorials.
- **Responsive Design**: The app is built with a responsive layout, ensuring a seamless experience on both mobile and desktop devices.
- **Interactive 3D Visualizations**: Users can explore 3D representations of knots using Three.js.
- **Search and Filter**: Easily search and filter knots based on difficulty levels.
- **Favorites**: Save your favorite knots using local storage for quick access.
- **Accessibility**: The app includes ARIA labels and keyboard navigation to enhance usability for all users.

## Folder Structure

```
sailing-knots-app
├── src
│   ├── assets
│   │   └── videos
│   │       ├── bowline.mp4
│   │       ├── figure-eight.mp4
│   │       └── clove-hitch.mp4
│   ├── components
│   │   ├── KnotGallery.tsx
│   │   ├── KnotVideo.tsx
│   │   └── VideoPlayer.tsx
│   ├── pages
│   │   └── KnotDetail.tsx
│   ├── hooks
│   │   └── useFavorites.ts
│   └── styles
│       └── tailwind.css
├── public
│   └── robots.txt
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Getting Started

To get started with the Sailing Knots App, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd sailing-knots-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

Happy knot tying!