import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/logo_tr.png" alt="Concerix" className="logo-image" />
          <span className="logo-ticker">Concerix</span>
        </div>
        <nav className="nav">
          <a href="https://x.com/concerix" className="nav-link" data-text="x">x</a>
          <a href="https://docs.concerix.cloud" className="nav-link" data-text="docs">docs</a>
          <a href="javascript:void(0)" className="nav-link nav-link-disabled" data-text="app" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>app</a>
          <a href="https://pump.fun/coin/D6o1SzQwybAYvwW3NcF9u8rVZkXEj2RYsd2CKsKXpump" className="nav-link nav-link-buy" data-text="BUY $CCRX" target="_blank" rel="noopener noreferrer">BUY $CCRX</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
