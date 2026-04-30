import React, { useState, useEffect } from 'react';
import { Bot, MessageSquare, Receipt, ShoppingCart, ArrowRight, CheckCircle2, Zap, Check, X, Star, FileText, ClipboardList, TrendingUp, ShieldCheck, Cog, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─────────────── Pricing data ─────────────── */
const implementationPhases = [
  {
    phase: 'Fase 1',
    title: 'Ativação DevOps',
    price: 'R$ 4.000',
    icon: Cog,
    desc: 'Preparação do ambiente técnico e ativação dos fluxos no n8n.'
  },
  {
    phase: 'Fase 2',
    title: 'Integração ERP',
    price: 'R$ 7.000',
    icon: Network,
    desc: 'Conexão via API/MCP Server com produtos, estoque e pedidos.'
  },
  {
    phase: 'Fase 3',
    title: 'Homologação e IA',
    price: 'R$ 4.000',
    icon: ShieldCheck,
    desc: 'Prompt guards, segurança e validação ponta a ponta.'
  }
];

/* ─────────────── WhatsApp Style Notifications ─────────────── */
function WhatsAppNotifications() {
  const [items, setItems] = useState([
    { id: 1, Icon: Receipt, title: "Novo Orçamento", text: "Cliente: Marcos • R$ 2.450", time: "14:32" },
    { id: 2, Icon: ShoppingCart, title: "Pedido Confirmado", text: "Integrado ao Bling ERP", time: "14:30" },
    { id: 3, Icon: ClipboardList, title: "Lead Qualificado", text: "Interesse em: Revestimentos", time: "14:28" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const nextId = prev[0].id + 1;
        const names = ["Ricardo", "Ana", "Carla", "Pedro", "Juliana"];
        const values = ["1.200", "4.500", "890", "2.100", "3.300"];
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomValue = values[Math.floor(Math.random() * values.length)];
        
        const newItem = {
          id: nextId,
          Icon: Math.random() > 0.5 ? Receipt : ShoppingCart,
          title: Math.random() > 0.5 ? "Novo Orçamento" : "Venda Realizada",
          text: `Cliente: ${randomName} • R$ ${randomValue}`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        return [newItem, ...prev.slice(0, 2)];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:right-4 space-y-3 hidden lg:block z-20">
      {items.map((n) => (
        <div
          key={n.id}
          className="animate-push w-72 bg-white p-3.5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 flex gap-3 transition-all"
        >
          <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
            <n.Icon className="w-5 h-5 text-brand" />
          </div>
          <div className="flex-grow min-w-0">
            <div className="flex justify-between items-center mb-0.5">
              <h4 className="text-[13px] font-bold text-slate-900 truncate">{n.title}</h4>
              <span className="text-[10px] text-slate-400 font-medium">{n.time}</span>
            </div>
            <p className="text-[11px] text-slate-500 line-clamp-1">{n.text}</p>
          </div>
        </div>
      ))}
      <div className="flex justify-end pr-4 mt-2">
        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand/5 border border-brand/10">
          <div className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
          <span className="text-[9px] font-bold text-brand uppercase tracking-wider">Monitorando em tempo real</span>
        </span>
      </div>
    </div>
  );
}

/* ─────────────── Pricing Section ─────────────── */
function PricingSection() {
  return (
    <section id="pricing" className="py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand text-xs font-black uppercase tracking-widest mb-6 border border-brand/20">
            <Star className="w-4 h-4" />
            <span>Modelo Enterprise Híbrido</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Investimento e Escala</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Um modelo desenhado para capturar valor real, reduzir custos operacionais e garantir ROI positivo em tempo recorde.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-stretch">
          
          {/* Coluna 1: Implantação */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-slate-50 rounded-[40px] p-10 border border-slate-200">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Estrutura de Implantação</h3>
                  <p className="text-slate-500 font-medium text-sm">Um setup profissional dividido em 3 fases estratégicas.</p>
                </div>
                <div className="text-right">
                  <span className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Total Único</span>
                  <span className="text-3xl font-black text-slate-900">R$ 15.000</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {implementationPhases.map((p, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                    <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                      <p.icon className="w-5 h-5 text-brand" />
                    </div>
                    <span className="text-[10px] font-black text-brand uppercase tracking-widest mb-1 block">{p.phase}</span>
                    <h4 className="font-bold text-slate-900 mb-2 leading-tight">{p.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">{p.desc}</p>
                    <span className="text-sm font-black text-slate-900">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ROI info */}
            <div className="bg-brand/5 border border-brand/20 rounded-[32px] p-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 w-16 h-16 bg-brand rounded-2xl flex items-center justify-center shadow-lg shadow-brand/20">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-900 mb-1">ROI Comercial Forte</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  Com apenas 3 funcionários impactados, o payback da implantação ocorre em aproximadamente <span className="text-brand font-bold">2 meses</span>, com ROI de 56% no primeiro ano.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna 2: Mensalidade */}
          <div className="bg-slate-900 rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Zap className="w-32 h-32 text-brand" />
            </div>
            
            <div className="relative z-10 flex-grow">
              <span className="inline-block px-3 py-1 rounded-full bg-brand/20 text-brand text-[10px] font-black uppercase tracking-widest mb-6">Operação Mensal</span>
              <div className="mb-8">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-black tracking-tighter">R$ 8.900</span>
                  <span className="text-slate-400 font-bold mb-1">/mês</span>
                </div>
                <p className="text-slate-400 text-sm font-medium">Manutenção, suporte e processamento de pedidos.</p>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-brand/20 rounded-full flex items-center justify-center mt-0.5"><Check className="w-3 h-3 text-brand" /></div>
                  <span className="text-sm font-medium">Até 5.000 pedidos incluídos / mês</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-brand/20 rounded-full flex items-center justify-center mt-0.5"><Check className="w-3 h-3 text-brand" /></div>
                  <span className="text-sm font-medium">Monitoramento e Suporte 24/7</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-brand/20 rounded-full flex items-center justify-center mt-0.5"><Check className="w-3 h-3 text-brand" /></div>
                  <span className="text-sm font-medium">Gestão de fluxos e manutenção</span>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-3 mb-10">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Pedido Excedente</span>
                  <span className="font-bold text-brand">R$ 1,50</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Custo LLM</span>
                  <span className="font-bold text-brand">Real + 25%</span>
                </div>
              </div>
            </div>

            <Link
              to="/cadastro"
              className="w-full bg-brand hover:bg-brand-dark text-white py-4.5 rounded-2xl font-black text-center transition-all shadow-xl shadow-brand/20 flex items-center justify-center gap-2 relative z-10"
            >
              Iniciar Operação <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────── Landing Page ─────────────── */
export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden bg-white">

      {/* ── Navbar (Floating Pill) ── */}
      <div className="fixed top-6 left-0 right-0 z-50 px-4 pointer-events-none">
        <nav className="max-w-4xl mx-auto glass rounded-full px-6 py-2.5 flex justify-between items-center pointer-events-auto border border-white/40 shadow-xl">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center shadow-lg shadow-brand/20">
              <Bot className="text-white w-4.5 h-4.5" />
            </div>
            <span className="text-base font-bold tracking-tight text-slate-900 uppercase tracking-tighter">PedidosZap</span>
          </Link>
          
          <div className="hidden md:flex gap-7 items-center text-[12px] font-bold text-slate-600 uppercase tracking-wider">
            <a href="#features"    className="hover:text-brand transition-colors">Funcionalidades</a>
            <a href="#pricing"     className="hover:text-brand transition-colors">Preços</a>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden sm:block text-[12px] font-bold text-slate-600 hover:text-brand transition-colors uppercase tracking-wider">
              Login
            </Link>
            <Link to="/cadastro" className="bg-brand hover:bg-brand-dark text-white px-5 py-2 rounded-full text-[12px] font-bold transition-all shadow-md shadow-brand/20 uppercase tracking-wider">
              Começar
            </Link>
          </div>
        </nav>
      </div>

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 text-center lg:text-left">
            {/* badge */}
            <div className="animate-fade-up delay-100 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-[10px] font-black uppercase tracking-widest mb-6 border border-brand/20">
              <Zap className="w-3 h-3" />
              <span>O Futuro das Vendas no WhatsApp</span>
            </div>

            {/* headline (2 lines only) */}
            <h1 className="animate-fade-up delay-200 text-5xl md:text-[68px] font-black tracking-tighter mb-8 leading-[0.95] text-slate-900 max-w-2xl mx-auto lg:mx-0">
              Transforme seu WhatsApp em uma <span className="text-brand">Máquina de Vendas.</span>
            </h1>

            {/* subtítulo */}
            <p className="animate-fade-up delay-300 text-lg md:text-xl text-slate-500 mb-10 max-w-xl leading-relaxed font-medium mx-auto lg:mx-0">
              Integramos uma IA inteligente ao seu número para fechar pedidos e gerar orçamentos 24/7 sem esforço humano.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 justify-start items-center">
              <Link
                to="/cadastro"
                className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-brand/30 hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
              >
                Ativar agora <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#features"
                className="w-full sm:w-auto px-10 py-4 rounded-full font-bold border-2 border-slate-100 hover:border-brand/40 hover:bg-brand/5 text-slate-500 transition-all flex items-center justify-center gap-2 text-lg"
              >
                Saiba mais
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 relative h-[380px]">
             <WhatsAppNotifications />
          </div>
        </div>
      </section>

      {/* ── Features (Minimalist Layout - Standardized Size) ── */}
      <section id="features" className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center lg:text-left max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 tracking-tighter">O que fazemos por você</h2>
            <p className="text-slate-500 text-lg font-medium">Automação inteligente de ponta a ponta no WhatsApp.</p>
          </div>
          
          <div className="space-y-12">
            {[
              { 
                Icon: MessageSquare, 
                title: 'Atendimento Humanizado', 
                desc: 'A IA conversa como um humano, tira dúvidas e conduz a venda em segundos.' 
              },
              { 
                Icon: Receipt,       
                title: 'Orçamentos em Tempo Real', 
                desc: 'Cálculos automáticos e envio de PDFs profissionais direto no chat.' 
              },
              { 
                Icon: ShoppingCart,  
                title: 'Pedidos Sincronizados', 
                desc: 'Integração total com seu ERP para criar o pedido sem erro humano.' 
              },
              { 
                Icon: TrendingUp,  
                title: 'Escalabilidade Infinita', 
                desc: 'Atenda mil clientes ao mesmo tempo com a mesma qualidade de um vendedor top.' 
              }
            ].map(({ Icon, title, desc }, i) => (
              <div key={title} className="max-w-4xl">
                <div className="flex gap-8 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand/5 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                    <Icon className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-brand transition-colors">{title}</h3>
                    <p className="text-slate-500 leading-relaxed text-lg font-medium">{desc}</p>
                  </div>
                </div>
                {i < 3 && <div className="mt-12 border-b border-gray-100" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <PricingSection />

      {/* ── CTA / Footer ── */}
      <section id="contact" className="py-24 bg-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Pronto para vender mais?</h2>
          <p className="text-xl opacity-90 mb-10 font-medium">Agende uma demo gratuita e veja a IA em ação agora mesmo.</p>
          <div className="bg-white p-1.5 rounded-full inline-flex flex-col sm:flex-row max-w-lg w-full mb-16 shadow-2xl">
            <input
              type="email"
              placeholder="Seu e-mail corporativo"
              className="bg-transparent border-none outline-none text-slate-900 px-6 py-3.5 flex-grow placeholder-slate-400 font-medium"
            />
            <Link to="/cadastro" className="bg-slate-900 hover:bg-black text-white px-8 py-3.5 rounded-full font-bold transition-all whitespace-nowrap text-center">
              Começar Agora
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-white/70">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-white" />
            <span className="font-bold text-white text-lg tracking-tighter uppercase">PedidosZap AI</span>
          </div>
          <p className="text-sm font-medium">© 2026 PedidosZap AI.</p>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </section>

    </div>
  );
}
