/**
 * Script de Controle da Apresentação com Bloco de Notas Integrado
 * Rodmar Junior 2026 - Ajustado para o fluxo total de 58 slides (0 a 57)
 */

function configurarApresentacao() {
    const container = document.querySelector('.slide-container');
    const ajustar = () => {
        if (!container) return;
        // Ajuste de escala mantendo proporção 1280x720 e reservando 120px para o menu
        const escala = Math.min(
            window.innerWidth / 1280, 
            (window.innerHeight - 120) / 720
        );
        container.style.transform = `scale(${escala})`;
    };

    window.addEventListener('resize', ajustar);
    ajustar();

    // Obtém o número da página atual a partir da URL (ex: 5.html -> 5)
    const pag = parseInt(window.location.pathname.split('/').pop()) || 0;
    
    // Criação do Menu de Navegação (Footer)
    const footer = document.createElement('footer');
    footer.className = 'custom-footer';
    footer.style.cssText = "position: fixed; bottom: 0; width: 100%; height: 80px; background: #111827; display: flex; align-items: center; justify-content: space-around; z-index: 1000; padding: 0 10px; border-top: 2px solid #374151;";
    
    footer.innerHTML = `
        <button onclick="mudar(-1)" style="background:#374151; color:white; padding:12px; border:none; border-radius:10px; cursor:pointer;"><i class="fas fa-chevron-left"></i></button>
        
        <button onclick="abrirNotas()" style="background:#6366F1; color:white; padding:12px 20px; border:none; border-radius:10px; font-weight:bold; display:flex; align-items:center; gap:8px;">
            <i class="fas fa-edit"></i> <span class="hidden-mobile">NOTAS</span>
        </button>

        <div style="display:flex; align-items:center; gap:5px;">
            <input type="number" id="goto" value="${pag}" min="0" max="57" style="width:45px; text-align:center; background:#1f2937; color:#F59E0B; border:1px solid #4B5563; border-radius:5px; font-weight:bold; padding:8px 0;">
            <button onclick="irPara()" style="background:#F59E0B; color:black; padding:8px 12px; border:none; border-radius:3px; font-weight:bold; cursor:pointer;">IR</button>
        </div>
        
        <button onclick="mudar(1)" style="background:#F59E0B; color:black; padding:12px; border:none; border-radius:10px; cursor:pointer;"><i class="fas fa-chevron-right"></i></button>
    `;
    document.body.appendChild(footer);

    // Criar o Modal de Anotações (escondido por padrão)
    const modal = document.createElement('div');
    modal.id = 'modalNotas';
    modal.style.cssText = "display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:2000; align-items:center; justify-content:center; padding:20px;";
    modal.innerHTML = `
        <div style="background:white; width:100%; max-width:500px; border-radius:20px; padding:20px; display:flex; flex-direction:column; gap:15px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h3 style="margin:0; font-family:Montserrat; font-weight:900; color:#1e293b;">MINHAS NOTAS 📝</h3>
                <button onclick="fecharNotas()" style="background:none; border:none; font-size:24px; color:#ef4444; cursor:pointer;">&times;</button>
            </div>
            <textarea id="textoNotas" style="width:100%; height:300px; border:2px solid #e2e8f0; border-radius:12px; padding:15px; font-family:sans-serif; font-size:16px; outline:none;" placeholder="Anote seus insights aqui..."></textarea>
            <button onclick="baixarNotas()" style="background:#1e293b; color:white; width:100%; padding:12px; border:none; border-radius:10px; font-weight:bold;">BAIXAR ANOTAÇÕES (.TXT)</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Carregar notas existentes do localStorage
    const txtArea = document.getElementById('textoNotas');
    txtArea.value = localStorage.getItem('notas_palestra_rodmar') || '';
    txtArea.addEventListener('input', (e) => {
        localStorage.setItem('notas_palestra_rodmar', e.target.value);
    });
}

// Funções Globais de Navegação e Notas
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
    const pag = parseInt(window.location.pathname.split('/').pop()) || 0;
    let destino = pag + n;
    // Limite de 57 slides (0 a 57)
    if (destino >= 0 && destino <= 57) {
        window.location.href = destino + '.html';
    }
};

window.irPara = () => {
    const d = document.getElementById('goto').value;
    if (d >= 0 && d <= 57) {
        window.location.href = d + '.html';
    }
};

// Atalhos de teclado (Setas e Barra de Espaço)
document.addEventListener('keydown', (e) => {
    // Desativa atalhos se o usuário estiver digitando em campos de texto
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
    
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