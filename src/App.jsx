import React from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import ArchivesPage from "./pages/ArchivesPage";
import {
    addNote,
    archiveNote,
    deleteNote,
    getActiveNotes,
    getArchivedNotes,
    unarchiveNote,
} from "./utils/local-data";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeNotes: getActiveNotes(),
            archivedNotes: getArchivedNotes(),
            filter: props.filter || "",
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filter !== this.props.filter) {
            this.setState({ filter: this.props.filter });
        }
    }

    addNote = ({ title, body }) => {
        addNote({ title, body });
        this.refreshNotes();
    };

    deleteNote = (id) => {
        deleteNote(id);
        this.refreshNotes();
    };

    archiveNote = (id) => {
        archiveNote(id);
        this.refreshNotes();
    };

    unarchiveNote = (id) => {
        unarchiveNote(id);
        this.refreshNotes();
    };

    onChangeFilterHandler = (value) => {
        this.setState({ filter: value });
        this.props.setSearchParams(value ? { search: value } : {});
    };

    refreshNotes = () => {
        this.setState({
            activeNotes: getActiveNotes(),
            archivedNotes: getArchivedNotes(),
        });
    };

    render() {
        const { filter, activeNotes, archivedNotes } = this.state;

        const filteredActiveNotes = activeNotes.filter((note) =>
            note.title.toLowerCase().includes(filter.toLowerCase())
        );

        const filteredArchivedNotes = archivedNotes.filter((note) =>
            note.title.toLowerCase().includes(filter.toLowerCase())
        );

        return (
            <div className="app-container">
                <Header
                    changeFilter={this.onChangeFilterHandler}
                    filter={filter}
                />
                <main>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <HomePage
                                    notes={filteredActiveNotes}
                                    changeFilter={this.onChangeFilterHandler}
                                    filter={filter}
                                />
                            }
                        />
                        <Route
                            path="/archives"
                            element={
                                <ArchivesPage
                                    notes={filteredArchivedNotes}
                                    changeFilter={this.onChangeFilterHandler}
                                    filter={filter}
                                />
                            }
                        />
                        <Route
                            path="/notes/create"
                            element={<CreatePage addNote={this.addNote} />}
                        />
                        <Route
                            path="/notes/:id"
                            element={
                                <DetailPage
                                    archiveNote={this.archiveNote}
                                    unarchiveNote={this.unarchiveNote}
                                    deleteNote={this.deleteNote}
                                />
                            }
                        />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
            </div>
        );
    }
}

const AppWrapper = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get("search") || "";

    return <App filter={filter} setSearchParams={setSearchParams} />;
};

export default AppWrapper;
