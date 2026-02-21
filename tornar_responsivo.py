import os
import re

# Blindagem Mobile Simples e Segura
CSS_MOBILE_SEGURO = """
    <style>
        /* Blindagem Mobile Simples */
        @media (max-width: 1024px) {
            html, body { overflow-y: auto !important; height: auto !important; }
            .slide-wrapper { height: auto !important; display: block !important; }
            
            .slide-container { 
                width: 100% !important; height: auto !important; min-height: 100vh !important;
                display: flex !important; flex-direction: column !important;
                transform: none !important; padding: 30px 20px 100px 20px !important;
            }

            /* Libera as colunas para ocuparem 100% da tela sem forçar altura */
            .w-1\\/2, .w-1\\/3, .w-2\\/3, .w-1\\/4, .w-3\\/4, .w-7\\/12, .w-5\\/12 { 
                width: 100% !important; height: auto !important; 
            }
            
            /* Empilha os elementos com um respiro leve */
            .flex { flex-direction: column !important; gap: 20px !important; }
            
            /* Preserva o menu de navegação (Footer) na horizontal */
            .custom-footer { flex-direction: row !important; }
            .custom-footer .flex { flex-direction: row !important; }
            
            /* Ajuste de fontes e margens exageradas do PC */
            .pl-20, .pr-12, .px-20 { padding-left: 0 !important; padding-right: 0 !important; }
            h1 { font-size: 2.5rem !important; line-height: 1.1 !important; }
        }
    </style>
"""

pasta = "."
arquivos = [f for f in os.listdir(pasta) if f.endswith(".html")]

print("Limpando códigos antigos e aplicando versão segura...")

for nome in arquivos:
    with open(nome, "r", encoding="utf-8") as f:
        conteudo = f.read()

    # Varredura para limpar TODAS as blindagens anteriores que injetamos para não virar bagunça
    conteudo = re.sub(r'<style>\s*/\*\s*Blindagem Mobile.*?</style>', '', conteudo, flags=re.DOTALL)
    conteudo = re.sub(r'<style>\s*/\*\s*FORÇAR RESET PARA CELULAR.*?</style>', '', conteudo, flags=re.DOTALL)

    # Injeta a versão limpa
    if "</head>" in conteudo:
        conteudo = conteudo.replace("</head>", f"{CSS_MOBILE_SEGURO}\n</head>")

    with open(nome, "w", encoding="utf-8") as f:
        f.write(conteudo)

print("✨ Rollback concluído! Todos os slides voltaram para a responsividade simples.")