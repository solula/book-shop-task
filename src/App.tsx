import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageLayout from "src/components/page/PageLayout";
import { cfg } from "src/config/config";
import HomePage from "src/pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import BookPage from "./pages/BookPage/BookPage";

export default function App() {
    return (
        <Router basename={cfg.basePath}>
            <PageLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/books/:id" element={<BookPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </PageLayout>
        </Router>
    );
}
