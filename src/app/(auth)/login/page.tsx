"use client";

import React from "react";
import { LoginForm } from "@/components/form/Form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="flex w-full max-w-7xl max-h-5xl h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* left side */}
        <div className="hidden md:flex md:w-1/2 bg-blue-600 items-center justify-center p-12">
          <h2 className="">Logo disini</h2>
        </div>
        {/* right side */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex items-center justify-center bg-white">
          <div className="w-full max-w-md h-112.5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Login</h2>
              <p className="text-gray-500 mt-2">Silakan masuk ke akun Anda</p>
            </div>

            {/* Tengah ke Bawah: Form Fields */}
            {/* <form className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm py-2">
                <label className="flex items-center text-gray-600">
                  <input
                    type="checkbox"
                    className="mr-2 rounded border-gray-300"
                  />{" "}
                  Ingat saya
                </label>
                <a href="#" className="text-blue-600 hover:underline">
                  Lupa password?
                </a>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition">
                Masuk
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Belum punya akun?{" "}
                <a href="#" className="text-blue-600 font-bold">
                  Daftar
                </a>
              </p>
            </form> */}
            <LoginForm />
          </div>
        </div>

        {/* <div className="w-full md:w-1/2 p-8 sm:p-12"> */}
        {/* <div className="max-w-md mx-auto flex flex-col justify-between">
            <div>
              <p>Ini disini welcome</p>
            </div>
            <div className="flex-grow flex flex-col justify-center py-10">
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center text-gray-600">
                    <input type="checkbox" className="mr-2 rounded" /> Ingat
                    saya
                  </label>
                  <a href="#" className="text-blue-600 hover:underline">
                    Lupa password?
                  </a>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Masuk
                </button>
              </form>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Belum punya akun?{" "}
                <a href="#" className="text-blue-600 font-bold hover:underline">
                  Daftar sekarang
                </a>
              </p>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
