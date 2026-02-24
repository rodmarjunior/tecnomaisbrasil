/**
 * Script de Controle da Apresentação com Notas e Glossário Inteligente
 * Rodmar Junior 2026 - Masterclass Inteligência Digital
 * Atualizado para 73 Slides + Glossário para público Jovem/Teen
 */

// ==========================================
// 1. O DICIONÁRIO MESTRE (GLOSSÁRIO JOVEM)
// ==========================================
const glossario = {
    "Monetização": "O ato de transformar algo (seu tempo, seu talento, seus vídeos) em dinheiro real.",
    "Ecossistema": "No mundo digital, é como as ferramentas, plataformas e pessoas se conectam para fazer um negócio funcionar.",
    "E-commerce": "Comércio eletrônico. Lojas virtuais na internet (ex: Amazon, Shopee).",
    "SaaS": "Software as a Service. Plataformas que você não instala no PC, você acessa pelo navegador e paga por mês (ex: Netflix, Canva, Gamma).",
    "Prompt": "O comando ou instrução que você digita para dar uma ordem à Inteligência Artificial. É como você 'conversa' com a máquina.",
    "Data Center": "Prédios gigantescos e super refrigerados, lotados de computadores que armazenam os dados da internet e processam a Inteligência Artificial.",
    "Knowledge Cutoff": "Data de Corte. É o 'limite de memória' de uma IA. Se a data for 2023, ela não sabe o que aconteceu em 2024 a menos que pesquise na internet.",
    "Alucinar": "Alucinação de IA. É quando a Inteligência Artificial inventa uma mentira ou dado falso com muita confiança.",
    "Power Skills": "Também chamadas de Soft Skills. São as habilidades humanas que robôs não têm: empatia, criatividade, liderança e resolução de problemas.",
    "Hard Skills": "Habilidades técnicas que você aprende e pratica, como programar um site, editar um vídeo ou configurar um anúncio.",
    "Marketplace": "Um 'shopping virtual' onde vários vendedores diferentes vendem seus produtos no mesmo site (ex: Mercado Livre).",
    "Infoproduto": "Um produto 100% digital, como um e-book (livro digital), um curso em vídeo ou uma mentoria online.",
    "Fricção": "Qualquer dificuldade ou demora que atrapalha o cliente a comprar. 'Zero fricção' significa que é rápido e fácil pagar.",
    "Creator Economy": "A Economia dos Criadores. É o mercado de pessoas que ganham dinheiro criando vídeos, fotos e textos para a internet (os influenciadores).",
    "Engajamento": "O quanto o público interage com um conteúdo (soma de curtidas, comentários, salvamentos e compartilhamentos).",
    "Conversão": "É quando o visitante faz o que você quer: clica no link, preenche o cadastro ou compra o seu produto.",
    "No-Code": "Criar sites, aplicativos ou sistemas sem precisar escrever nenhuma linha de código de programação. É tudo visual, arrastando bloquinhos.",
    "Ticket Médio": "A média de dinheiro que cada cliente gasta com você. Se dois clientes gastam R$ 100 e R$ 200, seu ticket médio é R$ 150.",
    "Tráfego Pago": "Pagar plataformas (como Google, Instagram e TikTok) para mostrarem seus anúncios e vídeos para as pessoas certas.",
    "ROI": "Return on Investment (Retorno sobre o Investimento). Mostra quanto dinheiro você ganhou de volta para cada real que investiu.",
    "ROAS": "Retorno focado apenas no dinheiro gasto em anúncios. Se você gasta R$ 10 em anúncio e vende R$ 50, o ROAS é 5x.",
    "Freelancer": "Profissional independente que não tem um chefe ou emprego fixo. Ele pega trabalhos (jobs) de várias empresas e ganha por projeto.",
    "Algoritmo": "O 'robô' das redes sociais que lê o seu comportamento para decidir quais vídeos ou posts vai mostrar na sua tela.",
    "SEO": "Search Engine Optimization. Técnicas gratuitas para fazer o seu site ou vídeo aparecer nas primeiras posições quando alguém pesquisa no Google ou TikTok.",
    "B2B": "Business to Business. Quando você vende o seu serviço para uma Empresa, e não para uma pessoa física comum (ex: vender um site para uma padaria).",
    "B2G": "Business to Government. Quando você vende para a Prefeitura, Estado ou Governo.",
    "QA Tester": "Quality Assurance. O profissional que é pago para testar jogos e aplicativos antes do lançamento, procurando falhas e bugs.",
    "LLMs": "Large Language Models. A tecnologia por trás do ChatGPT. Eles 'leem' bilhões de textos para aprender a conversar como humanos.",
    "API": "É a ponte invisível da internet. Permite que dois aplicativos diferentes conversem entre si automaticamente (ex: o site do iFood falando com o Google Maps).",
    "Growth": "Estratégias focadas no crescimento rápido e inteligente de uma empresa usando dados e testes.",
    "Omnichannel": "Estar conectado em todos os canais ao mesmo tempo (Instagram, WhatsApp, Loja Física) sem que o cliente perceba a diferença.",
    "Storytelling": "A arte de contar histórias. Usado no marketing para prender a atenção da pessoa antes de vender algo.",
    "CRM": "Um sistema ou aplicativo usado para guardar os contatos dos clientes, organizar conversas e lembrar a hora de mandar mensagem para eles.",
    "LTV": "Life Time Value (Valor de Tempo de Vida). Quanto dinheiro, no total, um cliente vai gastar com a sua empresa durante os anos em que for fiel a você.",
    "Dropshipping": "Montar uma loja online e vender produtos físicos sem ter o estoque em casa. O seu fornecedor (ex: na China) envia o produto direto para a casa do seu cliente.",
    "MVP": "Minimum Viable Product (Produto Mínimo Viável). A versão mais simples, rápida e barata da sua ideia, só para testar se as pessoas realmente querem comprar.",
    "SLA": "O acordo de confiança. É a garantia de prazo e qualidade que você promete entregar para o seu cliente.",
    "Landing Page": "Página de Destino. Um site de uma página só, feito especificamente para focar em vender um produto, sem distrações.",
    "CAC": "Custo de Aquisição de Cliente. Quanto de dinheiro você gastou (em anúncios e tempo) para conseguir um único cliente novo.",
    "Compliance": "Andar na linha. Seguir as regras, leis e padrões éticos exigidos no mercado.",
    "UGC": "User Generated Content (Conteúdo de Usuário). Quando pessoas comuns gravam vídeos reais usando um produto no TikTok, as marcas amam usar isso como anúncio.",
    "Closer": "O especialista em 'fechar' a venda. A pessoa que pega o cliente que está em dúvida no WhatsApp e usa a persuasão para ele pagar.",
    "Ghostwriter": "Escritor Fantasma. Profissional muito bem pago que escreve roteiros e posts para pessoas famosas publicarem como se fossem delas.",
    "Motion Designer": "O designer focado em movimento. Ele cria vídeos animados, efeitos especiais em letras e transições que parecem de cinema para a internet.",
    "Creative Strategist": "A mente por trás do anúncio. Ele não apenas edita o vídeo, mas pensa na psicologia de por que aquele vídeo vai fazer as pessoas comprarem.",
    "Leads": "Potenciais clientes. Pessoas que viram seu conteúdo, gostaram e deixaram o número do WhatsApp ou e-mail para você entrar em contato.",
    "CTA": "Call to Action (Chamada para Ação). A frase no final do vídeo ou texto que diz o que a pessoa deve fazer: 'Clique no link da bio', 'Comente EU QUERO'.",
    "Copy": "Copywriting. Escrever textos e roteiros usando psicologia para convencer o leitor a tomar uma ação (comprar, seguir, clicar).",
    "Networking": "Criar uma rede de amigos e contatos profissionais. Conhecer pessoas que podem te ajudar ou precisar da sua ajuda no futuro.",
    "Human-in-the-loop": "A regra de ouro da IA. Significa que a Inteligência Artificial pode fazer o trabalho pesado, mas um 'Humano deve estar no ciclo' para revisar e aprovar o trabalho final.",
    "LGPD": "Lei Geral de Proteção de Dados. A lei brasileira que obriga as empresas a protegerem as informações, e-mails e senhas dos clientes.",
    "Big Techs": "As empresas gigantes e multibilionárias de tecnologia, como Apple, Google, Microsoft e Meta (Facebook/Insta/Whats).",
    "Fintechs": "Startups e empresas de tecnologia focadas no mercado financeiro e bancos (ex: Nubank, Nubank, PicPay).",
    "Prospecção": "O ato de não ficar esperando o cliente cair do céu, mas sim ir atrás, mandar mensagem e oferecer seu serviço.",
    "Gatilho Mental": "Técnicas de texto que ativam decisões rápidas no cérebro. (Ex: 'Restam apenas 2 vagas' é o gatilho da urgência)."
};

function configurarApresentacao() {
    const container = document.querySelector('.slide-container');
    const ajustar = () => {
        if (!container) return;
        const escala = Math.min(
            window.innerWidth / 1280, 
            (window.innerHeight - 120) / 720
        );
        container.style.transform = `scale(${escala})`;
    };

    window.addEventListener('resize', ajustar);
    ajustar();

    const pathParts = window.location.pathname.split('/');
    const fileName = pathParts.pop();
    const pag = parseInt(fileName) || 0; 
    
    // ==========================================
    // 2. MENU DE NAVEGAÇÃO (Footer com botões)
    // ==========================================
    const footer = document.createElement('footer');
    footer.className = 'custom-footer';
    footer.style.cssText = "position: fixed; bottom: 0; left: 0; width: 100%; height: 80px; background: #111827; display: flex; align-items: center; justify-content: space-around; z-index: 1000; padding: 0 10px; border-top: 2px solid #374151;";
    
    footer.innerHTML = `
        <button onclick="mudar(-1)" style="background:#374151; color:white; padding:12px; border:none; border-radius:10px; cursor:pointer; transition: 0.3s;"><i class="fas fa-chevron-left"></i></button>
        
        <div style="display: flex; gap: 10px;">
            <button onclick="abrirGlossario()" style="background:#10B981; color:white; padding:12px 15px; border:none; border-radius:10px; font-weight:bold; display:flex; align-items:center; gap:8px; cursor:pointer; transition: 0.3s; box-shadow: 0 4px 15px rgba(16,185,129,0.3);">
                <i class="fas fa-book"></i> <span class="hidden-mobile">GLOSSÁRIO</span>
            </button>
            <button onclick="abrirNotas()" style="background:#6366F1; color:white; padding:12px 15px; border:none; border-radius:10px; font-weight:bold; display:flex; align-items:center; gap:8px; cursor:pointer; transition: 0.3s;">
                <i class="fas fa-edit"></i> <span class="hidden-mobile">NOTAS</span>
            </button>
        </div>

        <div style="display:flex; align-items:center; gap:5px;">
            <input type="number" id="goto" value="${pag}" min="0" max="73" style="width:45px; text-align:center; background:#1f2937; color:#F59E0B; border:1px solid #4B5563; border-radius:5px; font-weight:bold; padding:8px 0; outline: none;">
            <button onclick="irPara()" style="background:#F59E0B; color:black; padding:8px 12px; border:none; border-radius:3px; font-weight:bold; cursor:pointer; transition: 0.3s;">IR</button>
        </div>
        
        <button onclick="mudar(1)" style="background:#F59E0B; color:black; padding:12px; border:none; border-radius:10px; cursor:pointer; transition: 0.3s;"><i class="fas fa-chevron-right"></i></button>
    `;
    document.body.appendChild(footer);

    // ==========================================
    // 3. MODAL DE NOTAS
    // ==========================================
    const modalNotas = document.createElement('div');
    modalNotas.id = 'modalNotas';
    modalNotas.style.cssText = "display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:2000; align-items:center; justify-content:center; padding:20px; backdrop-filter: blur(5px);";
    modalNotas.innerHTML = `
        <div style="background:white; width:100%; max-width:500px; border-radius:20px; padding:20px; display:flex; flex-direction:column; gap:15px; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h3 style="margin:0; font-family:Montserrat; font-weight:900; color:#1e293b; font-size: 1.2rem;">MINHAS NOTAS 📝</h3>
                <button onclick="fecharNotas()" style="background:none; border:none; font-size:28px; color:#ef4444; cursor:pointer; line-height: 1;">&times;</button>
            </div>
            <textarea id="textoNotas" style="width:100%; height:300px; border:2px solid #e2e8f0; border-radius:12px; padding:15px; font-family:sans-serif; font-size:16px; outline:none; resize: none;" placeholder="Anote seus insights aqui..."></textarea>
            <button onclick="baixarNotas()" style="background:#1e293b; color:white; width:100%; padding:14px; border:none; border-radius:10px; font-weight:bold; font-size: 1rem; cursor:pointer;">BAIXAR ANOTAÇÕES (.TXT)</button>
        </div>
    `;
    document.body.appendChild(modalNotas);

    // ==========================================
    // 4. MODAL DO GLOSSÁRIO
    // ==========================================
    const modalGlossario = document.createElement('div');
    modalGlossario.id = 'modalGlossario';
    modalGlossario.style.cssText = "display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:2000; align-items:center; justify-content:center; padding:20px; backdrop-filter: blur(5px);";
    modalGlossario.innerHTML = `
        <div style="background:#0F172A; width:100%; max-width:600px; border-radius:20px; padding:25px; display:flex; flex-direction:column; gap:15px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); border: 1px solid #1E293B;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom: 2px solid #1E293B; padding-bottom: 10px;">
                <h3 style="margin:0; font-family:Montserrat; font-weight:900; color:#10B981; font-size: 1.2rem;"><i class="fas fa-book-open mr-2"></i> TRADUTOR TECH</h3>
                <button onclick="fecharGlossario()" style="background:none; border:none; font-size:28px; color:#ef4444; cursor:pointer; line-height: 1;">&times;</button>
            </div>
            <p style="color:#94A3B8; font-size:0.8rem; margin:0; font-family: 'Open Sans', sans-serif;">Explicando as palavras difíceis deste slide:</p>
            <div id="conteudoGlossario" style="max-height: 400px; overflow-y: auto; color: white; font-family: 'Open Sans', sans-serif; display: flex; flex-direction: column; gap: 10px; padding-right: 10px;">
                </div>
        </div>
    `;
    document.body.appendChild(modalGlossario);

    // Evento para salvar notas
    const txtArea = document.getElementById('textoNotas');
    txtArea.value = localStorage.getItem('notas_palestra_rodmar') || '';
    txtArea.addEventListener('input', (e) => {
        localStorage.setItem('notas_palestra_rodmar', e.target.value);
    });
}

// ==========================================
// FUNÇÕES DE AÇÃO DO GLOSSÁRIO
// ==========================================
window.abrirGlossario = () => { 
    const modal = document.getElementById('modalGlossario');
    const conteudo = document.getElementById('conteudoGlossario');
    conteudo.innerHTML = ''; 

    // Pega o texto da tela e coloca em minúsculo
    const textoDoSlide = document.body.innerText.toLowerCase();
    let encontrouAlgum = false;

    // Procura no Dicionário
    for (const [termo, definicao] of Object.entries(glossario)) {
        if (textoDoSlide.includes(termo.toLowerCase())) {
            encontrouAlgum = true;
            conteudo.innerHTML += `
                <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; border-left: 4px solid #10B981;">
                    <h4 style="margin: 0 0 5px 0; color: #10B981; font-weight: 800; font-size: 1.1rem; font-family: Montserrat;">${termo}</h4>
                    <p style="margin: 0; color: #E2E8F0; font-size: 0.9rem; line-height: 1.5;">${definicao}</p>
                </div>
            `;
        }
    }

    if (!encontrouAlgum) {
        conteudo.innerHTML = `
            <div style="text-align: center; padding: 30px; color: #64748B;">
                <i class="fas fa-thumbs-up text-4xl mb-3 text-green-500"></i>
                <p>Nenhuma palavra técnica complexa detectada neste slide. Tudo limpo!</p>
            </div>
        `;
    }

    modal.style.display = 'flex'; 
};

window.fecharGlossario = () => { document.getElementById('modalGlossario').style.display = 'none'; };

// Funções Originais de Notas e Navegação
window.abrirNotas = () => { document.getElementById('modalNotas').style.display = 'flex'; };
window.fecharNotas = () => { document.getElementById('modalNotas').style.display = 'none'; };

window.baixarNotas = () => {
    const texto = document.getElementById('textoNotas').value;
    const blob = new Blob([texto], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'anotacoes_palestra_rodmar.txt';
    a.click();
};

window.mudar = (n) => {
    const pathParts = window.location.pathname.split('/');
    const fileName = pathParts.pop();
    const pag = parseInt(fileName) || 0;
    let destino = pag + n;
    
    if (destino === 0) {
        window.location.href = 'index.html';
    } else if (destino >= 1 && destino <= 73) {
        window.location.href = destino + '.html';
    }
};

window.irPara = () => {
    const d = parseInt(document.getElementById('goto').value);
    if (d === 0) {
        window.location.href = 'index.html';
    } else if (d >= 1 && d <= 73) {
        window.location.href = d + '.html';
    } else {
        alert("Página inválida. Escolha entre 0 e 73.");
    }
};

// Atalhos de teclado
document.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
    
    // Fechar modais com ESC
    if (e.key === "Escape") {
        fecharNotas();
        fecharGlossario();
    }
    
    if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        mudar(1);
    }
    if (e.key === "ArrowLeft") {
        e.preventDefault();
        mudar(-1);
    }
});

window.addEventListener('DOMContentLoaded', configurarApresentacao);