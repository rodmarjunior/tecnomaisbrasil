import os
import re

pasta = "."
arquivos = [f for f in os.listdir(pasta) if f.endswith(".html")]

def extrair_ordem(nome):
    match = re.findall(r'\d+', nome)
    if len(match) >= 2:
        return (int(match[0]), int(match[1]))
    elif len(match) == 1:
        return (int(match[0]), 0)
    return (999, 999)

# Ordena os arquivos pela lógica original
arquivos.sort(key=extrair_ordem)

# Filtra para não mexer nos seus slides manuais 1 a 5 e no index
arquivos_para_processar = [f for f in arquivos if f not in ["1.html", "2.html", "3.html", "4.html", "5.html", "index.html"]]

print("Passo 1: Movendo para nomes temporários para evitar conflitos...")
temp_map = {}
for nome in arquivos_para_processar:
    temp_nome = f"temp_file_{nome}"
    os.rename(nome, temp_nome)
    temp_map[temp_nome] = nome

print("Passo 2: Aplicando numeração final sequencial...")
novo_indice = 6
# Re-ordena os temporários baseando-se no nome original que guardamos no dicionário
lista_temp = sorted(temp_map.keys(), key=lambda x: extrair_ordem(temp_map[x]))

for temp_nome in lista_temp:
    nome_final = f"{novo_indice}.html"
    os.rename(temp_nome, nome_final)
    print(f"Sucesso: {temp_map[temp_nome]} -> {nome_final}")
    novo_indice += 1

print("\nConcluído! Tudo organizado do 6 em diante.")