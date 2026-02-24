import os
import re
import urllib.request
import hashlib

print("🚀 Iniciando o rastreio de imagens...")

pasta_img = "imagens_offline"
if not os.path.exists(pasta_img):
    os.makedirs(pasta_img)
    print(f"📁 Pasta '{pasta_img}' criada com sucesso!")
else:
    print(f"📁 Pasta '{pasta_img}' já existe.")

# Expressões regulares para achar os links
regex_img = re.compile(r'<img[^>]+src=["\'](http[s]?://[^"\']+)["\']', re.IGNORECASE)
regex_css = re.compile(r'url\([\'"]?(http[s]?://[^)\'"]+)[\'"]?\)', re.IGNORECASE)

arquivos_html = [f for f in os.listdir('.') if f.endswith('.html')]
print(f"📄 Encontrados {len(arquivos_html)} arquivos HTML para analisar.")

def baixar(url, caminho):
    if os.path.exists(caminho): 
        return True # Já baixou antes
    try:
        # Finge ser um navegador para não ser bloqueado (ex: Unsplash)
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req) as resposta, open(caminho, 'wb') as arquivo:
            arquivo.write(resposta.read())
        return True
    except Exception as e:
        print(f"❌ Erro ao baixar {url[:40]}... : {e}")
        return False

total_imagens = 0

for arquivo in arquivos_html:
    with open(arquivo, 'r', encoding='utf-8') as f:
        conteudo = f.read()

    # Pega todas as URLs do arquivo atual
    urls = set(regex_img.findall(conteudo) + regex_css.findall(conteudo))
    
    if urls:
        print(f"\n🔍 Lendo: {arquivo} ({len(urls)} links externos encontrados)")
    
    for url in urls:
        # Ignora arquivos de fontes
        if "fonts.gstatic" in url or ".woff" in url:
            continue
            
        # Cria um nome único
        hash_url = hashlib.md5(url.encode()).hexdigest()[:8]
        
        ext = ".png"
        if ".jpg" in url.lower() or ".jpeg" in url.lower(): ext = ".jpg"
        elif ".webp" in url.lower(): ext = ".webp"
        elif ".gif" in url.lower(): ext = ".gif"

        nome_arquivo = f"img_{hash_url}{ext}"
        caminho_local = os.path.join(pasta_img, nome_arquivo)

        if baixar(url, caminho_local):
            # Troca no HTML
            novo_caminho = f"{pasta_img}/{nome_arquivo}"
            conteudo = conteudo.replace(url, novo_caminho)
            total_imagens += 1
            print(f"   ✅ Salvo e vinculado: {nome_arquivo}")

    # Sobrescreve o HTML com o link local
    with open(arquivo, 'w', encoding='utf-8') as f:
        f.write(conteudo)

print(f"\n✨ SUCESSO ABSOLUTO! {total_imagens} imagens substituídas com sucesso. Sua apresentação agora é blindada (offline)!")