import Logo from 'components/Logo'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="py-16 bg-blue-700">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-0 text-center space-y-12">
        <Logo isDefault={false} />
        <div className="space-y-6">
          <h1 className="mb-0 text-white">
            Our Legacy <span className="font-bold">Your</span> Future
          </h1>
          <address className="text-base text-white not-italic">
            Legacy Communities LLC 32313 Broadway Street, Ste 101 Sebring, FL
            33870
          </address>
        </div>
        <p className="text-base text-white">&copy; {year} Legacy Communites</p>
      </div>
    </footer>
  )
}

export default Footer
