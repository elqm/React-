import Header from "../Component/Header";
import Menubar from "../Component/Menubar";
import ArticleContent from "../Component/ArticleContent";
import Footer from "../Component/Footer";

function MainPage() {

    return (
        <div>
            <Header />
            <Menubar />
            <ArticleContent />
            <Footer />
        </div>
    );
}

export default MainPage;