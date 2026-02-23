import os

arquivo_saida = "todos_os_slides.txt"
arquivos_html = [f for f in os.listdir('.') if f.endswith('.html')]

# Organiza por ordem alfabética/numérica para facilitar a leitura inicial
arquivos_html.sort()

with open(arquivo_saida, 'w', encoding='utf-8') as saida:
    for nome_arquivo in arquivos_html:
        with open(nome_arquivo, 'r', encoding='utf-8') as f:
            conteudo = f.read()
        
        # Cria um cabeçalho bem visível para separar os arquivos
        saida.write(f"\n{'='*50}\n")
        saida.write(f"NOME DO ARQUIVO: {nome_arquivo}\n")
        saida.write(f"{'='*50}\n\n")
        
        saida.write(conteudo)
        saida.write("\n")

print(f"✨ Sucesso! {len(arquivos_html)} arquivos foram unidos no arquivo '{arquivo_saida}'.")