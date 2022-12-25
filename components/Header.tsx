
function Header() {
  return (
    <header className="h-full w-full bg-red-500">
        <h3 className="text-2xl font-semibold">Words On Paper</h3>
        <nav className="categories m-auto text-center mt-32">
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