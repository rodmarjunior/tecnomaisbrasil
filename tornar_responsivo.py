import os
import re

# Blindagem Mobile Definitiva (Sem quebrar layouts de meio a meio)
CSS_MOBILE_PREMIUM = """
    <style>
        @media (max-width: 1024px) {
            html, body { overflow-y: auto !important; height: auto !important; background-color: #0F172A !important; }
            .slide-wrapper { height: auto !important; display: block !important; }
            
            .slide-container { 
                width: 100% !important; height: auto !important; min-height: 100vh !important;
                display: flex !important; flex-direction: column !important;
                transform: none !important; padding: 20px 0 100px 0 !important;
            }

            /* Libera a altura e largura de TODAS as colunas para não esmagar o conteúdo */
            .w-7\\/12, .w-5\\/12, .w-1\\/2, .w-1\\/3, .w-2\\/3, .w-1\\/4, .w-3\\/4, .w-full { 
                width: 100% !important; height: auto !important; padding: 15px 25px !important;
            }

            /* Garante que os elementos empilhem com espaço para respirar */
            .flex { flex-direction: column !important; gap: 30px !important; }
            
            /* Títulos e Textos */
            h1 { font-size: 2.2rem !important; line-height: 1.2 !important; text-align: left !important; }
            p { font-size: 1.1rem !important; line-height: 1.6 !important; }
            
            /* Ajuste de imagens de fundo (apenas para as que cobrem a tela) */
            img.object-cover { 
                position: absolute !important; height: 100% !important; 
                mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
                -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
            }

            /* Reset de margens e posições que quebram o mobile */
            .-left-20, .ml-20, .pl-20 { left: 0 !important; margin-left: 0 !important; padding-left: 0 !important; }
            .absolute.bottom-20, .absolute.-top-40 { position: relative !important; bottom: 0 !important; top: 0 !important; width: 100% !important; }
            
            /* Ajuste do grid de 2 colunas para 1 coluna no celular */
            .grid-cols-2 { grid-template-columns: 1fr !important; }

            /* Menu de navegação (Footer) no celular */
            .custom-footer { height: 70px !important; padding-bottom: 10px !important; }
        }
    </style>
"""

pasta = "."
arquivos = [f for f in os.listdir(pasta) if f.endswith(".html")]

print("Aplicando correção visual nos slides...")

for nome in arquivos:
    with open(nome, "r", encoding="utf-8") as f:
        conteudo = f.read()

    # Remove o bloco de estilo falho anterior para não dar conflito
    conteudo = re.sub(r'<style>\s*/\*\s*Blindagem Mobile.*?</style>', '', conteudo, flags=re.DOTALL)

    # Injeta a versão definitiva
    if "</head>" in conteudo:
        conteudo = conteudo.replace("</head>", f"{CSS_MOBILE_PREMIUM}\n</head>")

    with open(nome, "w", encoding="utf-8") as f:
        f.write(conteudo)
        
print("✨ Limpeza e ajuste premium concluídos!")