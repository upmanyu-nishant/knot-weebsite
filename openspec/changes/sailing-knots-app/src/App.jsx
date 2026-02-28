import React from 'react'
import Nav from './components/Nav'
import KnotGallery from './components/KnotGallery'

export default function App() {
  return (
    <div className="app-root">
      <Nav />
      <main className="container">
        <header className="hero">
          <h1>Sailing Knots Gallery</h1>
          <p>Learn classic knots with clear illustrations and descriptions.</p>
        </header>
        <KnotGallery />
      </main>
      <footer className="site-footer">© Sailing Knots • Nautical theme</footer>
    </div>
  )
}
