import LoginAuth from "../features/auth/components/LoginAuth";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/components/ProductList";
import SignupPage from "./SignupPage";

function Home() {
    return (
        <div>  
                <ProductList></ProductList>

            {/* <SignupPage /> */}
            {/* <LoginAuth /> */}
        </div>
    );
}

export default Home;