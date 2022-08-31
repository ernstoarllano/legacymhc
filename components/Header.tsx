import Nav from 'components/header/Nav'
import Top from 'components/header/Top'
import HeaderProvider from 'context/Header'

const Header = () => {
  return (
    <header className="relative">
      <HeaderProvider>
        <Top />
        <Nav />
      </HeaderProvider>
    </header>
  )
}

export default Header
