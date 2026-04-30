import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Eye, EyeOff, ArrowRight, Check } from 'lucide-react';

export default function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cadastro simulado! Integre com sua API.');
  };

  return (
    <div className="min-h-screen bg-whatsapp-bg flex items-center justify-center px-4 py-12">
      {/* Background decorative */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-dark/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-lg relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-brand flex items-center justify-center shadow-lg shadow-brand/25 group-hover:shadow-brand/40 transition-shadow">
              <Bot className="text-white w-7 h-7" />
            </div>
            <span className="text-2xl font-extrabold text-slate-900">PedidosZap AI</span>
          </Link>
          <h1 className="mt-6 text-3xl font-bold text-slate-900">Crie sua conta grátis</h1>
          <p className="mt-2 text-slate-500">Comece a vender mais hoje mesmo. Sem cartão de crédito.</p>
        </div>

        {/* Benefícios rápidos */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {['14 dias grátis', 'Sem cartão de crédito', 'Cancele quando quiser'].map((b) => (
            <span key={b} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-light text-brand-dark text-xs font-semibold border border-brand/20">
              <Check className="w-3.5 h-3.5" /> {b}
            </span>
          ))}
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nome completo</label>
                <input
                  id="signup-name"
                  type="text"
                  required
                  placeholder="João Silva"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition text-slate-900 placeholder-slate-400 bg-gray-50 focus:bg-white text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Empresa</label>
                <input
                  id="signup-company"
                  type="text"
                  required
                  placeholder="Sua Empresa Ltda"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition text-slate-900 placeholder-slate-400 bg-gray-50 focus:bg-white text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">E-mail corporativo</label>
              <input
                id="signup-email"
                type="email"
                required
                placeholder="joao@suaempresa.com.br"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition text-slate-900 placeholder-slate-400 bg-gray-50 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">WhatsApp</label>
              <input
                id="signup-phone"
                type="tel"
                required
                placeholder="(11) 99999-9999"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition text-slate-900 placeholder-slate-400 bg-gray-50 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Senha</label>
              <div className="relative">
                <input
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Mínimo 8 caracteres"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition text-slate-900 placeholder-slate-400 bg-gray-50 focus:bg-white pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pt-1">
              Ao criar uma conta, você concorda com nossos{' '}
              <a href="#" className="text-brand font-medium hover:underline">Termos de Uso</a>{' '}
              e{' '}
              <a href="#" className="text-brand font-medium hover:underline">Política de Privacidade</a>.
            </p>

            <button
              id="signup-submit"
              type="submit"
              className="w-full bg-brand hover:bg-brand-dark text-white py-4 rounded-xl font-bold transition-all shadow-md shadow-brand/20 hover:shadow-lg hover:shadow-brand/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base"
            >
              Criar conta grátis <ArrowRight className="w-5 h-5" />
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
            Já tem uma conta?{' '}
            <Link to="/login" className="text-brand font-bold hover:underline">
              Fazer login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
