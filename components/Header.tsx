
function Header() {
  return (
    <header className="w-1/4 h-full fixed bg-red-500">
        <h3>Words On Paper</h3>
        <nav className="categories">
            <ul>
                <li><a>Category One</a></li>
                <li><a>Category Two</a></li>
                <li><a>Category Three</a></li>
                <li><a>Category Four</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header