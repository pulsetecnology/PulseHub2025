import React from "react";
import Link from "next/link";
import Logotipo from "@frontend/componentes/Logotipo";

export default function PaginaRecuperarSenha() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
          <div className="p-6 sm:p-8">
            <div className="flex justify-center mb-8">
              <Logotipo tamanho="md" />
            </div>
            
            <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
              Recuperar senha
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 text-center">
              Digite seu email e enviaremos instruções para redefinir sua senha.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-gradient-to-r from-primary to-primary-hover text-white font-medium rounded-md hover:from-primary-hover hover:to-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-70"
                >
                  Enviar instruções
                </button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <Link href="/login" className="text-primary hover:text-primary-hover dark:text-blue-400 text-sm">
                Voltar para o login
              </Link>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                Precisa de ajuda?{" "}
                <a href="#" className="text-primary hover:text-primary-hover dark:text-blue-400">
                  Entre em contato com o suporte
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}