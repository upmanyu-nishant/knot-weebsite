import React, { useEffect, useState } from 'react'
import knots from '../data/knots'

const CATEGORIES = ['All', 'Docking & Mooring', 'Sail Handling & Rigging', 'Tensioning & Utility', 'Joining & Safety']

function Card({ knot, masteredMap, toggleMastered }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <article className="knot-card" aria-labelledby={`title-${knot.id}`}>
      <div className={`knot-video ${flipped ? 'flipped' : ''}`}>
        {knot.video ? (
          <video width="100%" height="160" controls muted aria-label={`${knot.name} video`}>
            <source src={knot.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="video-placeholder" aria-hidden="true">Video coming soon</div>
        )}
      </div>
      <div className="knot-body">
        <div className="knot-header">
          <h3 id={`title-${knot.id}`}>{knot.name}</h3>
          {masteredMap[knot.id] && <span className="mastered-badge" aria-hidden>Mastered</span>}
        </div>

        <p className="definition"><strong>Definition:</strong> {knot.definition}</p>
        <p className="when"><strong>When to use:</strong> {knot.whenToUse}</p>
        <p className="difficulty"><strong>Difficulty:</strong> {knot.difficulty}</p>

        <div className="card-controls">
          <label className="flip-label">
            <input type="checkbox" onChange={() => setFlipped((s) => !s)} aria-checked={flipped} /> Flip Video
          </label>

          <button
            className={`mastered-btn ${masteredMap[knot.id] ? 'on' : ''}`}
            onClick={() => toggleMastered(knot.id)}
            aria-pressed={!!masteredMap[knot.id]}
          >
            {masteredMap[knot.id] ? 'Mastered ✓' : 'Mark as Mastered'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default function KnotGallery() {
  const [filter, setFilter] = useState('All')
  const [masteredMap, setMasteredMap] = useState({})
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('name')

  useEffect(() => {
    try {
      const raw = localStorage.getItem('sailingKnots.mastered')
      if (raw) setMasteredMap(JSON.parse(raw))
    } catch (e) {
      console.warn('Failed to load mastered state', e)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('sailingKnots.mastered', JSON.stringify(masteredMap))
    } catch (e) {
      console.warn('Failed to save mastered state', e)
    }
  }, [masteredMap])

  function toggleMastered(id) {
    setMasteredMap((m) => ({ ...m, [id]: !m[id] }))
  }

  let visible = knots.filter((k) => !!k.video)
    .filter((k) => filter === 'All' || k.category === filter)
    .filter((k) => k.name.toLowerCase().includes(search.toLowerCase()))
  if (sortBy === 'name') {
    visible = [...visible].sort((a, b) => a.name.localeCompare(b.name))
  }

  const totalWithVideos = knots.filter((k) => !!k.video).length
  const masteredCount = Object.values(masteredMap).filter(Boolean).length

  return (
    <section>
      <div className="toolbar">
        <input
          type="text"
          placeholder="Search knots..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search knots by name"
        />
        <select
          className="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          aria-label="Sort knots"
        >
          <option value="name">Sort: Name</option>
        </select>
      </div>
      <div className="progress-row">
        <div className="progress-label">Mastered: {masteredCount} / {totalWithVideos}</div>
        <div className="progress-wrap" aria-hidden>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(masteredCount / Math.max(1, totalWithVideos)) * 100}%` }} />
          </div>
        </div>
      </div>

      <div className="filters" role="tablist" aria-label="Knot categories">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            className="filter-btn"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="gallery">
        {visible.map((k) => (
          <Card key={k.id} knot={k} masteredMap={masteredMap} toggleMastered={toggleMastered} />
        ))}
      </div>
    </section>
  )
}
