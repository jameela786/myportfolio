import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './MainLayout.css'
const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
