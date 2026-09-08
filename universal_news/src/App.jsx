import { useMemo, useState } from 'react'
import './App.css'

const sectionsData = [
  {
    key: 'world',
    title: 'World',
    description: 'Global headlines, geopolitics, and international trends.',
  },
  {
    key: 'technology',
    title: 'Technology',
    description: 'Product launches, innovation, and digital culture.',
  },
  {
    key: 'business',
    title: 'Business',
    description: 'Markets, companies, and economy updates.',
  },
  {
    key: 'health',
    title: 'Health',
    description: 'Healthcare, science, and public safety coverage.',
  },
  {
    key: 'sports',
    title: 'Sports',
    description: 'Scores, previews, and athlete stories.',
  },
  {
    key: 'environment',
    title: 'Environment',
    description: 'Climate, conservation, and sustainability news.',
  },
]

const initialArticles = [
  {
    id: 1,
    title: 'Global Summit Shifts Trade Agreements',
    section: 'world',
    author: 'Amina Yusuf',
    summary: 'Leaders agree on new exports and sustainability measures.',
    status: 'published',
  },
  {
    id: 2,
    title: 'Startups Accelerate AI Funding',
    section: 'technology',
    author: 'Leo Park',
    summary: 'Investment pours into machine learning tools and green computing.',
    status: 'published',
  },
  {
    id: 3,
    title: 'Quarterly Earnings Beat Forecasts',
    section: 'business',
    author: 'Sandra Opoku',
    summary: 'Major companies report stronger demand as markets recover.',
    status: 'draft',
  },
  {
    id: 4,
    title: 'City Marathon Attracts New Record Attendance',
    section: 'sports',
    author: 'David Chen',
    summary: 'Runners from 72 countries join the annual event.',
    status: 'published',
  },
  {
    id: 5,
    title: 'Festival Highlights Emerging Artists',
    section: 'environment',
    author: 'Maya Rivera',
    summary: 'Local voices and installations bring the city to life.',
    status: 'draft',
  },
]

const writers = ['Amina Yusuf', 'Leo Park', 'Sandra Opoku', 'David Chen', 'Maya Rivera']

function App() {
  const [view, setView] = useState('home')
  const [articles, setArticles] = useState(initialArticles)
  const [selectedSection, setSelectedSection] = useState('world')
  const [draft, setDraft] = useState({
    title: '',
    section: 'world',
    author: writers[0],
    summary: '',
  })

  const sectionCounts = useMemo(
    () =>
      sectionsData.map((section) => ({
        ...section,
        count: articles.filter((article) => article.section === section.key).length,
      })),
    [articles],
  )

  const featuredArticles = useMemo(
    () => articles.filter((article) => article.status === 'published'),
    [articles],
  )

  const selectedArticles = useMemo(
    () => articles.filter((article) => article.section === selectedSection),
    [articles, selectedSection],
  )

  const stats = useMemo(
    () => ({
      totalArticles: articles.length,
      published: articles.filter((article) => article.status === 'published').length,
      drafts: articles.filter((article) => article.status !== 'published').length,
    }),
    [articles],
  )

  function handleSectionChange(key) {
    setSelectedSection(key)
    setView('home')
  }

  function handleDraftChange(field, value) {
    setDraft((current) => ({ ...current, [field]: value }))
  }

  function createDraft() {
    if (!draft.title.trim() || !draft.summary.trim()) return

    const nextArticle = {
      id: Date.now(),
      title: draft.title.trim(),
      section: draft.section,
      author: draft.author,
      summary: draft.summary.trim(),
      status: 'draft',
    }

    setArticles((current) => [nextArticle, ...current])
    setDraft({ title: '', section: draft.section, author: draft.author, summary: '' })
    setView('writers')
  }

  function toggleStatus(id) {
    setArticles((current) =>
      current.map((article) =>
        article.id === id
          ? {
              ...article,
              status: article.status === 'published' ? 'draft' : 'published',
            }
          : article,
      ),
    )
  }

  function removeArticle(id) {
    setArticles((current) => current.filter((article) => article.id !== id))
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Universal News</p>
          <h1>Global intelligence, verified and published in real time</h1>
          <p className="hero-copy">
            Access a professional news newsroom with autonomous AI verification, categorization, and editorial controls.
          </p>
        </div>
        <nav className="page-nav" aria-label="Primary navigation">
          <button className={view === 'home' ? 'active' : ''} onClick={() => setView('home')}>
            Newsroom
          </button>
          <button className={view === 'admin' ? 'active' : ''} onClick={() => setView('admin')}>
            Admin
          </button>
          <button className={view === 'writers' ? 'active' : ''} onClick={() => setView('writers')}>
            Writers
          </button>
        </nav>
      </header>

      <section className="topline-bar">
        <span>BREAKING</span>
        <p>EU prepares global AI accountability bill while climate finance negotiations enter final phase.</p>
      </section>

      <section className="section-highlights">
        {sectionCounts.map((section) => (
          <article key={section.key} className="section-card" onClick={() => handleSectionChange(section.key)}>
            <div>
              <p className="section-label">{section.title}</p>
              <h2>{section.count}</h2>
              <p>{section.description}</p>
            </div>
            <span className="section-pill">Open</span>
          </article>
        ))}
      </section>

      {view === 'home' && (
        <main className="page-grid">
          <section className="home-panel">
            <div className="panel-heading">
              <h2>{sectionsData.find((item) => item.key === selectedSection)?.title} coverage</h2>
              <p>Curated feeds and verified reporting for your selected region.</p>
            </div>
            <div className="cards-grid">
              {selectedArticles.map((article) => (
                <article key={article.id} className="article-card">
                  <div className="article-meta">
                    <span>{article.section.toUpperCase()}</span>
                    <strong>{article.author}</strong>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <span className={`status-pill ${article.status}`}>{article.status}</span>
                </article>
              ))}
            </div>
          </section>

          <aside className="right-panel">
            <div className="panel-heading">
              <h2>Live intelligence</h2>
              <p>Trending topics, featured AI summaries, and credibility heat.</p>
            </div>
            <div className="featured-list">
              {featuredArticles.slice(0, 4).map((article) => (
                <article key={article.id} className="featured-item">
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <div className="featured-meta">
                    <span>{article.section}</span>
                    <strong>{article.author}</strong>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </main>
      )}

      {view === 'admin' && (
        <main className="page-grid admin-view">
          <section className="admin-panel">
            <div className="panel-heading">
              <h2>Agent operations</h2>
              <p>Monitor verification, collection, summarization, and personalization workflows.</p>
            </div>
            <div className="stats-grid">
              <article className="stat-card">
                <p>Total stories</p>
                <strong>{stats.totalArticles}</strong>
              </article>
              <article className="stat-card">
                <p>Published</p>
                <strong>{stats.published}</strong>
              </article>
              <article className="stat-card">
                <p>Drafts</p>
                <strong>{stats.drafts}</strong>
              </article>
            </div>
            <div className="article-table">
              <div className="table-header">
                <span>Story</span>
                <span>Section</span>
                <span>Author</span>
                <span>Status</span>
                <span>Action</span>
              </div>
              {articles.map((article) => (
                <div key={article.id} className="table-row">
                  <span>{article.title}</span>
                  <span>{article.section}</span>
                  <span>{article.author}</span>
                  <span className={`status-pill ${article.status}`}>{article.status}</span>
                  <span className="table-actions">
                    <button onClick={() => toggleStatus(article.id)}>
                      {article.status === 'published' ? 'Unpublish' : 'Publish'}
                    </button>
                    <button className="danger" onClick={() => removeArticle(article.id)}>
                      Delete
                    </button>
                  </span>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {view === 'writers' && (
        <main className="page-grid writers-view">
          <section className="writer-panel">
            <div className="panel-heading">
              <h2>AI-driven newsroom</h2>
              <p>Write headlines, draft summaries, and publish with editorial oversight.</p>
            </div>
            <div className="writer-form">
              <label>
                Story title
                <input
                  value={draft.title}
                  onChange={(event) => handleDraftChange('title', event.target.value)}
                  placeholder="Craft a strong headline"
                />
              </label>
              <label>
                Section
                <select value={draft.section} onChange={(event) => handleDraftChange('section', event.target.value)}>
                  {sectionsData.map((section) => (
                    <option key={section.key} value={section.key}>
                      {section.title}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Writer
                <select value={draft.author} onChange={(event) => handleDraftChange('author', event.target.value)}>
                  {writers.map((writer) => (
                    <option key={writer} value={writer}>
                      {writer}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Summary
                <textarea
                  value={draft.summary}
                  onChange={(event) => handleDraftChange('summary', event.target.value)}
                  placeholder="Provide a concise story brief"
                  rows={5}
                />
              </label>
              <button className="primary" type="button" onClick={createDraft}>
                Create draft
              </button>
            </div>
          </section>

          <aside className="writer-list">
            <div className="panel-heading">
              <h2>Team highlights</h2>
              <p>Track active writers and current authored stories.</p>
            </div>
            <div className="writer-cards">
              {writers.map((writer) => {
                const writerArticles = articles.filter((article) => article.author === writer)
                return (
                  <article key={writer} className="writer-card">
                    <h3>{writer}</h3>
                    <p>{writerArticles.length} stories</p>
                    <ul>
                      {writerArticles.slice(0, 3).map((article) => (
                        <li key={article.id}>{article.title}</li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>
          </aside>
        </main>
      )}
    </div>
  )
}

export default App
