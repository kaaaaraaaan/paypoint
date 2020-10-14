import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Counter from "../components/Counter";
import Pricing from "../components/Pricing";;
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const Home = () => (

    <Layout pageTitle="React Next App Landing Page Template">
        <Navbar />
        <Banner />
        <Counter />
        <Contact />
        <Pricing />
        <Services /> 
        <Footer />
    </Layout>

)

export default Home;