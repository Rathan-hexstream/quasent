"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

export default function SubmitCVPage() {
    const [agree, setAgree] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const passwordValid =
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /\d/.test(password) &&
        /[!@#$%^&*]/.test(password) &&
        password === confirmPassword;

    const handleGoogleAuth = () => {
        console.log("Google OAuth");
        // signIn("google")
    };

    const handleLinkedInAuth = () => {
        console.log("LinkedIn OAuth");
        // signIn("linkedin")
    };

    return (
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="flex items-center justify-center px-6 py-20 bg-white">
                <div className="w-full max-w-md">

                    {/* LOGO */}
                    <div className="flex justify-center mb-8">
                        <Link href="/">
                            <Image
                                src="/quasent_logo.png"
                                alt="Quasent"
                                width={140}
                                height={40}
                                priority
                                className="cursor-pointer"
                            />
                        </Link>
                    </div>

                    <h1 className="text-3xl font-extrabold text-gray-900 text-center">
                        Submit Your CV
                    </h1>

                    <p className="mt-2 text-gray-600 text-center">
                        Create your Quasent account to explore opportunities
                    </p>

                    {/* FORM */}
                    <form className="mt-8 space-y-5">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />

                        {/* PASSWORD */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        {/* PASSWORD VALIDATION TEXT */}
                        <p className="text-sm text-gray-500">
                            Password must be at least 8 characters, include an uppercase letter,
                            a number, and a special character.
                        </p>

                        {/* CONFIRM PASSWORD */}
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        {/* PRIVACY CHECKBOX */}
                        <div className="flex items-start gap-3 text-sm text-gray-600">
                            <input
                                type="checkbox"
                                checked={agree}
                                onChange={(e) => setAgree(e.target.checked)}
                                className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500"
                            />
                            <p>
                                You agree to the{" "}
                                <Link href="/privacy-policy" className="text-purple-600 font-medium">
                                    Privacy Policy
                                </Link>{" "}
                                <span className="text-red-500">*</span>
                            </p>
                        </div>

                        {/* REGISTER */}
                        <button
                            type="submit"
                            disabled={!agree || !passwordValid}
                            className={`w-full py-3 rounded-xl font-semibold text-white transition
                                ${
                                agree && passwordValid
                                    ? "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90"
                                    : "bg-gray-300 cursor-not-allowed"
                            }`}
                        >
                            Register
                        </button>
                    </form>

                    {/* OR */}
                    <div className="flex items-center my-8">
                        <div className="flex-1 h-px bg-gray-300" />
                        <span className="px-4 text-sm text-gray-500">OR</span>
                        <div className="flex-1 h-px bg-gray-300" />
                    </div>

                    {/* SOCIAL LOGIN */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button
                            onClick={handleLinkedInAuth}
                            className="w-full py-3 rounded-xl border border-gray-300 flex items-center justify-center gap-3 hover:bg-gray-50 transition"
                        >
                            <FaLinkedinIn className="text-[#0A66C2]" />
                            LinkedIn
                        </button>

                        <button
                            onClick={handleGoogleAuth}
                            className="w-full py-3 rounded-xl border border-gray-300 flex items-center justify-center gap-3 hover:bg-gray-50 transition"
                        >
                            <FaGoogle className="text-[#DB4437]" />
                            Google
                        </button>
                    </div>

                    {/* SIGN IN */}
                    <p className="mt-8 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link href="/login" className="font-semibold text-purple-600 hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative hidden lg:block">
                <Image
                    src="/submit-cv.jpg"
                    alt="Submit Your CV"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center px-12">
                    <div className="text-white max-w-lg">
                        <h2 className="text-4xl font-extrabold">
                            Build Your Career With Confidence
                        </h2>
                        <p className="mt-4 text-lg text-gray-200">
                            Join Quasent’s talent network and gain access to
                            exciting opportunities with leading global clients.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
