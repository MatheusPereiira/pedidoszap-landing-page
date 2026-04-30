import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login simulado! Integre com sua API.');
  };

  return (
    <div className="min-h-screen bg-whatsapp-bg flex items-center justify-center px-4">
      {/* Background decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-dark/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-brand flex items-center justify-center shadow-lg shadow-brand/25 group-hover:shadow-brand/40 transition-shadow">
              <Bot className="text-white w-7 h-7" />
            </div>
            <span className="text-2xl font-extrabold text-slate-900">PedidosZap AI</span>
          </Link>
          <h1 className="mt-6 text-3xl font-bold text-slate-900">Bem-vindo de volta!</h1>
          <p className="mt-2 text-slate-500">Acesse sua conta e continue vendendo mais.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">E-mail</label>
              <input
                id="login-email"
                type="email"
                required
                placeholder="seu@email.com.br"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition text-slate-900 placeholder-slate-400 bg-gray-50 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Senha</label>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition text-slate-900 placeholder-slate-400 bg-gray-50 focus:bg-white pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <div className="text-right mt-2">
                <a href="#" className="text-sm text-brand font-medium hover:underline">Esqueceu a senha?</a>
              </div>
            </div>

            <button
              id="login-submit"
              type="submit"
              className="w-full bg-brand hover:bg-brand-dark text-white py-4 rounded-xl font-bold transition-all shadow-md shadow-brand/20 hover:shadow-lg hover:shadow-brand/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base"
            >
              Entrar na plataforma <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-slate-400 font-medium">ou</span>
            </div>
          </div>

          <p className="text-center text-slate-600">
            Ainda não tem conta?{' '}
            <Link to="/cadastro" className="text-brand font-bold hover:underline">
              Criar conta grátis
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
