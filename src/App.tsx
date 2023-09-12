import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageLayout from "src/components/page/PageLayout";
import { cfg } from "src/config/config";
import HomePage from "src/pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App() {
    return (
        <Router basename={cfg.basePath}>
            <PageLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </PageLayout>
        </Router>
    );
}
