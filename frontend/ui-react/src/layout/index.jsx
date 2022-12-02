import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      <div className="container">
        {children}
      </div>
      <Footer />
    </div>
  )
}