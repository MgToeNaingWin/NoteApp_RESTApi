import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { registerSchema } from '../Schema/registerSchema';

type FormInputs = z.infer<typeof registerSchema>;

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormInputs>({
        resolver: zodResolver(registerSchema),
    });

    const submit: SubmitHandler<FormInputs> = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-1 bg-gradient-to-br from-sky-50 via-emerald-50 to-teal-100">
            <div className="w-full max-w-md bg-white/50 backdrop-blur-xl rounded-3xl shadow-2xl ring-1 ring-white/60 p-8 mb-25 ">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                        Create account
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                        Start organizing your notes today
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(submit)} className="space-y-5">

                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-1.5 ml-1">
                            Name
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                {...register("name")}
                                className={`w-full pl-10 pr-4 py-3 bg-white border rounded-xl shadow-sm outline-none transition text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-emerald-300 ${errors.name
                                        ? "border-rose-300 focus:ring-rose-200 focus:border-rose-400"
                                        : "border-slate-200 focus:border-emerald-400"
                                    }`}
                            />
                        </div>
                        {errors.name && (
                            <p className="text-xs text-rose-600 mt-1.5 ml-1 flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-1.5 ml-1">
                            Email
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                {...register("email")}
                                className={`w-full pl-10 pr-4 py-3 bg-white border rounded-xl shadow-sm outline-none transition text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-emerald-300 ${errors.email
                                        ? "border-rose-300 focus:ring-rose-200 focus:border-rose-400"
                                        : "border-slate-200 focus:border-emerald-400"
                                    }`}
                            />
                        </div>
                        {errors.email && (
                            <p className="text-xs text-rose-600 mt-1.5 ml-1 flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-slate-600 mb-1.5 ml-1">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                {...register("password")}
                                className={`w-full pl-10 pr-4 py-3 bg-white border rounded-xl shadow-sm outline-none transition text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-emerald-300 ${errors.password
                                        ? "border-rose-300 focus:ring-rose-200 focus:border-rose-400"
                                        : "border-slate-200 focus:border-emerald-400"
                                    }`}
                            />
                        </div>
                        {errors.password && (
                            <p className="text-xs text-rose-600 mt-1.5 ml-1 flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl shadow-md shadow-emerald-200 hover:bg-emerald-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1 transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Creating account...
                            </>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                                Create account
                            </>
                        )}
                    </button>
                </form>

                {/* Footer link */}
                <p className="text-center text-sm text-slate-500 mt-6">
                    Already have an account?{" "}
                    <a href="/login" className="font-medium text-emerald-700 hover:text-emerald-800 hover:underline">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Register;