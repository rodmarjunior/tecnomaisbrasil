import os

# Blindagem Mobile Premium
CSS_MOBILE_PREMIUM = """
    <style>
        @media (max-width: 1024px) {
            html, body { overflow-y: auto !important; height: auto !important; background-color: #0F172A !important; }
            .slide-wrapper { height: auto !important; display: block !important; }
            
            .slide-container { 
                width: 100% !important; height: auto !important; min-height: 100vh !important;
                display: flex !important; flex-direction: column !important;
                transform: none !important; padding: 0 !important;
            }

            /* Seção de Texto */
            .w-7\\/12, .w-1\\/2, .w-full, .text-section { 
                width: 100% !important; padding: 40px 25px !important; order: 2;
            }

            /* Seção de Imagem/Destaque */
            .w-5\\/12, .image-section, .w-1\\/2 { 
                width: 100% !important; height: 300px !important; order: 1; position: relative;
            }

            .flex { flex-direction: column !important; }
            
            /* Títulos e Textos */
            h1 { font-size: 2.2rem !important; line-height: 1.2 !important; text-align: left; }
            p { font-size: 1.1rem !important; line-height: 1.6 !important; }
            
            /* Ajuste de imagens de fundo */
            img.object-cover { 
                position: absolute !important; height: 100% !important; 
                mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
                -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
            }

            /* Reset de margens negativas ou flutuantes */
            .-left-20, .ml-20, .pl-20 { left: 0 !important; margin-left: 0 !important; padding-left: 20px !important; }
            .absolute.bottom-20 { position: relative !important; bottom: 0 !important; margin-top: 20px !important; width: 100% !important; }
            
            /* Menu de navegação (Footer) no celular */
            .custom-footer { height: 70px !important; padding-bottom: 10px !important; }
        }
    </style>
"""

pasta = "."
arquivos = [f for f in os.listdir(pasta) if f.endswith(".html")]

for nome in arquivos:
    with open(nome, "r", encoding="utf-8") as f:
        conteudo = f.read()

    # Remove estilo antigo se existir para não duplicar
    if "/* Blindagem Mobile Automática */" in conteudo:
        import re
        conteudo = re.sub(r'<style>.*?\/\* Blindagem Mobile Automática \*\/.*?<\/style>', '', conteudo, flags=re.DOTALL)

    # Injeta o novo estilo
    if "</head>" in conteudo:
        conteudo = conteudo.replace("</head>", f"{CSS_MOBILE_PREMIUM}\n</head>")

    with open(nome, "w", encoding="utf-8") as f:
        f.write(conteudo)
    print(f"✨ Estilo Premium aplicado: {nome}")