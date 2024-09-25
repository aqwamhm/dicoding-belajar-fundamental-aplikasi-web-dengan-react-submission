import { Route, Routes, useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import ArchivesPage from "./pages/ArchivesPage";
import {
    addNote,
    archiveNote,
    deleteNote,
    unarchiveNote,
} from "./utils/network-data";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import useLoading from "./hooks/useLoading";

const App = () => {
    const { isLoggedIn, setAuthedUser } = useContext(AuthContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get("search") || "";
    const [currentFilter, setCurrentFilter] = useState(filter);
    const { startLoading, stopLoading, renderWithLoading } = useLoading();

    useEffect(() => {
        const fetchData = async () => {
            startLoading();
            await setAuthedUser();
            stopLoading();
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (filter !== currentFilter) {
            setCurrentFilter(filter);
        }
    }, [filter, currentFilter]);

    const addNewNote = async ({ title, body }) => {
        await addNote({ title, body });
    };

    const deleteNoteHandler = async (id) => {
        await deleteNote(id);
    };

    const archiveNoteHandler = async (id) => {
        await archiveNote(id);
    };

    const unarchiveNoteHandler = async (id) => {
        await unarchiveNote(id);
    };

    const onChangeFilterHandler = (value) => {
        setCurrentFilter(value);
        setSearchParams(value ? { search: value } : {});
    };

    return (
        <div className="app-container">
            {renderWithLoading(
                !isLoggedIn ? (
                    <main>
                        <Routes>
                            <Route path="/*" element={<LoginPage />} />
                            <Route
                                path="/register"
                                element={<RegisterPage />}
                            />
                        </Routes>
                    </main>
                ) : (
                    <>
                        <Header
                            changeFilter={onChangeFilterHandler}
                            filter={currentFilter}
                        />
                        <main>
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <HomePage
                                            changeFilter={onChangeFilterHandler}
                                            filter={currentFilter}
                                        />
                                    }
                                />
                                <Route
                                    path="/archives"
                                    element={
                                        <ArchivesPage
                                            changeFilter={onChangeFilterHandler}
                                            filter={currentFilter}
                                        />
                                    }
                                />
                                <Route
                                    path="/notes/create"
                                    element={
                                        <CreatePage addNote={addNewNote} />
                                    }
                                />
                                <Route
                                    path="/notes/:id"
                                    element={
                                        <DetailPage
                                            archiveNote={archiveNoteHandler}
                                            unarchiveNote={unarchiveNoteHandler}
                                            deleteNote={deleteNoteHandler}
                                        />
                                    }
                                />
                                <Route path="/login" element={<LoginPage />} />
                                <Route
                                    path="/register"
                                    element={<RegisterPage />}
                                />
                                <Route path="*" element={<NotFoundPage />} />
                            </Routes>
                        </main>
                    </>
                )
            )}
        </div>
    );
};

export default App;
