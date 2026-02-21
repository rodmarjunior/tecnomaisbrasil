import os

# Configurações de Blindagem
CSS_MOBILE = """
    <style>
        /* Blindagem Mobile Automática */
        @media (max-width: 1024px) {
            html, body { overflow-y: auto !important; height: auto !important; }
            .slide-wrapper { height: auto !important; display: block !important; }
            .slide-container { 
                width: 100% !important; height: auto !important; min-height: 100vh !important;
                display: block !important; transform: none !important; padding: 40px 20px 120px 20px !important;
            }
            /* Converte colunas do Tailwind em linhas no celular */
            .w-1\\/2, .w-1\\/3, .w-2\\/3, .w-1\\/4, .w-3\\/4, .w-7\\/12, .w-5\\/12 { 
                width: 100% !important; height: auto !important; 
            }
            .flex { flex-direction: column !important; }
            .pl-20, .pr-12 { padding-left: 15px !important; padding-right: 15px !important; }
            h1 { font-size: 2.5rem !important; line-height: 1.1 !important; }
            img { position: relative !important; height: 300px !important; }
        }
    </style>
"""

pasta = "."
arquivos = [f for f in os.listdir(pasta) if f.endswith(".html")]

print(f"Iniciando a modernização de {len(arquivos)} arquivos...")

for nome in arquivos:
    if nome == "index.html": continue # Pula o index se ele já estiver ok
    
    with open(nome, "r", encoding="utf-8") as f:
        conteudo = f.read()

    # 1. Injeta o CSS de blindagem antes do fechamento do </head>
    if "</head>" in conteudo and "<style>" not in conteudo:
        conteudo = conteudo.replace("</head>", f"{CSS_MOBILE}\n</head>")
    
    # 2. Garante que a Meta Tag de viewport esteja correta
    meta_velha = 'content="width=device-width, initial-scale=1.0"'
    meta_nova = 'name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"'
    if meta_velha in conteudo:
        conteudo = conteudo.replace(meta_velha, meta_nova)

    with open(nome, "w", encoding="utf-8") as f:
        f.write(conteudo)
    
    print(f"✅ Arquivo {nome} agora é responsivo.")

print("\n--- PROCESSO CONCLUÍDO ---")
print("Agora todos os seus slides têm suporte automático para celular.")