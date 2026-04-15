import { motion } from "motion/react";
import { MessageCircle, ArrowRight, Check } from "lucide-react";

export default function App() {
  const scrollToOffer = () => {
    const element = document.getElementById("offer");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const kitItems = [
    { title: "Panorama da Bíblia", img: "https://i.imgur.com/ZtZAwUM.png" },
    { title: "O Resumo Completo", img: "https://i.imgur.com/VOhcm4K.png" },
    { title: "27 Mapas Mentais", img: "https://i.imgur.com/5tbfgwK.png" },
    { title: "150 Salmos Explicados", img: "https://i.imgur.com/PAXRWB3.png" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold selection:text-black overflow-x-hidden">
      
      {/* 1. Hero (O Choque) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.imgur.com/jtMUkzx.jpeg"
            alt="Bíblia com Luz"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-semibold mb-8 leading-[1.1] font-serif uppercase tracking-[-0.02em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              PARE DE FINGIR QUE <br />
              <span className="text-gold-gradient">ENTENDE A BÍBLIA.</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto font-medium leading-[1.6] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Saia da vergonha com o método visual que destrava seu entendimento de Gênesis a Apocalipse.
            </p>
            <button
              onClick={scrollToOffer}
              className="group relative bg-gold-gradient text-black font-bold py-4 px-10 rounded-sm text-lg transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(212,175,55,0.15)] uppercase tracking-widest overflow-hidden"
            >
              <span className="relative z-10">QUERO MEU ACESSO AGORA</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite] transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Frase Isolada (O Peso da Palavra) */}
      <section className="py-32 md:py-48 px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-serif italic text-stone-400 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              "Sem entendimento, <br />
              <span className="text-white not-italic font-semibold">não há conexão com Deus.</span>"
            </h2>
          </motion.div>
        </div>
      </section>

      {/* 3. O Portal (Vignette Transition) */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.imgur.com/HvLmrXu.png"
            alt="Mão alcançando a luz"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Vignette Effect refined with solid black edges */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_0%,rgba(0,0,0,0.4)_40%,rgba(0,0,0,0.8)_100%)]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-xl md:text-3xl font-serif font-medium text-white leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
              Destrave seu estudo bíblico hoje. <br />
              <span className="text-gold-gradient font-bold">Não entender a Bíblia te afasta do Criador.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. O Kit Digital (Exposição de Arte) */}
      <section className="py-32 md:py-48 bg-stone-950 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-4 block"
            >
              A Solução Prática
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-semibold mb-6 font-serif text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
            >
              Biblioteca Digital Premium
            </motion.h2>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {kitItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col items-center group"
              >
                <div className="aspect-[3/4] w-full bg-black/40 rounded-sm overflow-hidden mb-8 border border-white/10 p-6 flex items-center justify-center transition-all duration-700 group-hover:border-gold/30 group-hover:bg-black/60">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-sm font-bold text-stone-400 uppercase tracking-[0.2em] text-center group-hover:text-gold transition-colors">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bônus (Câmara dos Mistérios) */}
      <section className="py-32 md:py-48 bg-black px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-6 block">Presente Exclusivo</span>
            <h2 className="text-4xl md:text-6xl font-semibold mb-8 font-serif leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Câmara dos <br />
              <span className="text-gold-gradient">Mistérios</span>
            </h2>
            <p className="text-lg text-white font-medium leading-relaxed mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Receba gratuitamente os Guias do Apocalipse. Decifre os sinais sem medo, com clareza absoluta.
            </p>
            <ul className="space-y-6">
              {["A Besta e o Falso Profeta", "Os Sete Selos", "O Arrebatamento"].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-stone-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-sm uppercase tracking-widest">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold/5 rounded-full blur-[120px]" />
            <img
              src="https://i.imgur.com/PVgFkLu.png"
              alt="E-book Apocalipse"
              className="relative z-10 w-full max-w-md mx-auto object-contain drop-shadow-[0_0_80px_rgba(212,175,55,0.15)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* 6. Fechamento (O Ultimato) */}
      <section id="offer" className="relative py-40 md:py-60 flex items-center justify-center overflow-hidden px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.imgur.com/KQBuDq4.png"
            alt="Portal de luz"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-6xl font-semibold mb-10 font-serif leading-tight uppercase tracking-tighter text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
              SUA FÉ ESTÁ MORRENDO. <br />
              <span className="text-gold-gradient">PARE DE TORCER.</span>
            </h2>
            <p className="text-lg md:text-xl text-white mb-16 max-w-2xl mx-auto font-medium leading-relaxed italic drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Pare de torcer para ninguém te perguntar nada sobre a Palavra. Assuma o controle do seu entendimento.
            </p>
            
            <div className="bg-white/[0.02] backdrop-blur-xl p-12 rounded-sm border border-white/10 mb-12 shadow-2xl inline-block w-full max-w-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              
              <span className="text-stone-500 line-through text-xl block mb-2">De R$ 99,90</span>
              <div className="flex items-center justify-center gap-3 mb-10">
                <span className="text-stone-400 text-lg">Por apenas</span>
                <span className="text-white text-6xl font-black tracking-tighter">R$ 29,90</span>
              </div>
              <button className="group relative w-full bg-gold-gradient text-black font-bold py-5 px-8 rounded-sm text-lg transition-all uppercase tracking-widest overflow-hidden">
                <span className="relative z-10">DESTRAVAR MEU ENTENDIMENTO</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite] transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Rodapé (Confiança) */}
      <footer className="bg-black py-24 border-t border-white/5 px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <img
            src="https://i.imgur.com/HbbKmHI.jpeg"
            alt="Garantia"
            className="w-24 h-24 mb-10 object-contain opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <h3 className="text-xl font-bold mb-4 font-serif uppercase tracking-widest">Garantia de 7 Dias</h3>
          <p className="text-stone-500 max-w-md mb-16 text-sm leading-relaxed">
            Se em 7 dias você não sentir que sua compreensão bíblica avançou anos, devolvemos cada centavo. Sem burocracia.
          </p>
          
          <div className="flex flex-col md:flex-row gap-12 items-center w-full justify-between pt-12 border-t border-white/5">
            <div className="text-left">
              <h4 className="text-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-2">Acutis</h4>
              <p className="text-stone-700 text-[10px] tracking-[0.3em] uppercase">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
            </div>
            
            <a
              href="https://wa.me/5519936220730"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-stone-400 hover:text-gold transition-all font-bold text-xs tracking-widest uppercase"
            >
              <MessageCircle size={18} className="text-gold" />
              Suporte WhatsApp (19) 93622-0730
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
