import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";


const Layout = ({ children }) => {
    return (
        <div>
            <Header/>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;
