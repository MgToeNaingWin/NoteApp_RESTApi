import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
                {/* Logo / Brand */}
                <Link
                    to="/"
                    className="flex items-center gap-2 group"
                >
                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-200 group-hover:scale-105 transition-transform">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                        </svg>
                    </span>
                    <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                        Noting
                    </h1>
                </Link>

                {/* Nav Links */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <Link
                        to="/login"
                        className="px-4 py-2 text-sm font-medium text-slate-700 rounded-lg hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg shadow-md shadow-emerald-200 hover:bg-emerald-700 hover:shadow-lg active:scale-[0.98] transition-all"
                    >
                        Register
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </Link>
                </div>
            </nav>
        </header>
    )
}