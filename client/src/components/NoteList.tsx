import React, { useEffect, useState } from 'react';
import { createNote, deleteNote, getNotes, updateNote } from '../services/service';
import type { Notes } from '../types/notes';

const NoteList = () => {
    const [notes, setNotes] = useState<Notes[]>([]);
    const [binder, setBinder] = useState("");
    const [refresh, setRefresh] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState("");

    const makeRefresh = () => {
        setRefresh(!refresh);
    };

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const data = await getNotes();
                setNotes(data);
            } catch (error) {
                console.error("Error setting Note from Database:", error);
            }
        };
        fetchNote();
    }, [refresh]);

    const addNotes = async (e: React.FormEvent) => {
        e.preventDefault();
        if (binder.trim().length === 0) {
            return;
        }
        try {
            if (editMode) {
                await updateNote(editId, binder);
                setEditMode(false);
                setEditId("");
            } else {
                await createNote(binder);
            }
            setBinder("");
            makeRefresh();
        } catch (error) {
            console.error("Binding Error:", error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteNote(id);
            makeRefresh();
        } catch (error) {
            console.error("Deleting Error:", error);
        }
    };

    const handleEdit = (title: string, id: string) => {
        setEditMode(true);
        setBinder(title);
        setEditId(id);
    };

    const cancelEdit = () => {
        setEditMode(false);
        setBinder("");
        setEditId("");
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-sky-50 via-emerald-50 to-teal-100">
            <div className="w-full max-w-3xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl ring-1 ring-white/60 p-6 md:p-8">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                        Noting Yours
                    </h1>
                    <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>{notes.length} {notes.length === 1 ? "note" : "notes"}</span>
                    </div>
                </div>

                {/* Note list */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Your notes</h2>
                    </div>

                    <ul className="max-h-60 overflow-y-auto pr-1 space-y-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                        {notes.length === 0 && (
                            <li className="text-center py-8 text-slate-400 text-sm italic">
                                No notes yet. Create one below ✨
                            </li>
                        )}
                        {notes.map((note) => (
                            <li
                                key={note._id}
                                className={`group flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-slate-100 transition-all duration-150 hover:shadow-md hover:border-emerald-200 hover:-translate-y-0.5 ${
                                    editId === note._id ? "ring-2 ring-emerald-300 border-emerald-300" : ""
                                }`}
                            >
                                <span className="text-slate-800 font-medium truncate pr-3">
                                    {note.title}
                                </span>
                                <div className="flex items-center gap-1.5 shrink-0">
                                    <button
                                        type="button"
                                        onClick={() => handleEdit(note.title, note._id)}
                                        className="p-1.5 bg-slate-100 text-slate-600 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-150 active:scale-95"
                                        aria-label="Edit note"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(note._id)}
                                        className="p-1.5 bg-slate-100 text-slate-600 rounded-lg hover:bg-rose-500 hover:text-white transition-all duration-150 active:scale-95"
                                        aria-label="Delete note"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Form */}
                <form onSubmit={addNotes}>
                    <label htmlFor="note-input" className="block text-sm font-medium text-slate-600 mb-1.5 ml-1">
                        {editMode ? "Edit note" : "Add a new note"}
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <input
                                id="note-input"
                                type="text"
                                value={binder}
                                onChange={(e) => setBinder(e.target.value)}
                                placeholder="Write something beautiful..."
                                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 outline-none transition text-slate-800 placeholder-slate-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl shadow-md shadow-emerald-200 hover:bg-emerald-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1 transition-all active:scale-[0.98]"
                        >
                            {editMode ? (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Update
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                    Create
                                </>
                            )}
                        </button>

                        {editMode && (
                            <button
                                type="button"
                                onClick={cancelEdit}
                                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 text-slate-600 font-medium rounded-xl hover:bg-slate-200 transition-all active:scale-[0.98]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Cancel
                            </button>
                        )}
                    </div>

                    {editMode && (
                        <p className="text-xs text-emerald-600 mt-2 ml-1 flex items-center gap-1">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Editing existing note — update or cancel
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default NoteList;