import os
import re

# Dicionário de (Parte única do Título do Slide : Novo Número de Arquivo)
mapa_arquivos = {
    "Oportunidades de Monetização": 1,
    "Perfil do Apresentador": 2,
    "O Mapa da Jornada": 3,
    "O Mito do Dinheiro": 4,
    "A Nova Equação": 5,
    "Inteligência Digital em 2026": 6,
    "A Nova Eletricidade": 7,
    "A Grande Divisão": 8,
    "IA é Inteligente": 9,
    "Onde a IA Mora": 10,
    "Base de Dados": 11,
    "Arsenal de Elite": 12,
    "Novos Titãs": 13,
    "Arsenal de IA": 14,
    "Guia de Soluções": 15,
    "Caixa de Ferramentas": 16,
    "Anatomia do Prompt": 17,
    "Playbook": 18,
    "Economia Digital no Brasil": 19,
    "Creator Economy": 20,
    "Produção de Conteúdo que Vende": 21,
    "Marco Legal": 22,
    "Rotas de Monetização": 23,
    "O que sai de cena": 24,
    "Slide 10 - O Futuro": 25,
    "IA e o Futuro": 26,
    "Caminhos de Monetização": 27,
    "Novas Profissões CLT": 28,
    "Freelancer Digital": 29,
    "Dropshipping": 30,
    "Casos de Sucesso": 31,
    "Skills Essenciais": 32,
    "Inteligência Emocional": 33,
    "Atividade: Seu Perfil": 34,
    "Quiz: Seu Perfil": 35,
    "Resultado": 36,
    "Resumo dos Perfis": 37,
    "Criativo: Renda com Celular": 38,
    "Criativo: Carreira Corporativa": 39,
    "Analítico: Renda com Estratégia": 40,
    "Analítico: Carreira de Performance": 41,
    "Social: Renda com Conexão": 42,
    "Social: Carreira de Conexão": 43,
    "Tech: Renda com Automação": 44,
    "Tech: Carreira de Engenharia": 45,
    "Do Macro ao Micro": 46,
    "Dinheiro Agora": 47,
    "Dominando o Bairro": 48,
    "Painel que Vende": 49,
    "Gamma": 50,
    "Antes e Depois": 51,
    "Criando o Rosto": 52,
    "Estúdio Virtual": 53,
    "O Porta-Voz Virtual": 54,
    "Upgrade Real": 55,
    "Fotografia Publicitária": 56,
    "Texto que Converte": 57,
    "Mão na Massa": 58,
    "Desafio Prático": 59,
    "Gabarito": 60,
    "Ponte de Aprendizado": 61,
    "Oferta Irresistível": 62,
    "Arte do Contorno": 63,
    "Resiliência": 64,
    "Poder do Networking": 65,
    "Networking Interativa": 66,
    "Slide 9 - Ética": 67,
    "Responsabilidade em IA": 68,
    "Seu Plano de Ação": 69,
    "Roadmap": 70,
    "Hora de Agir": 71,
    "Chamado à Ação": 72,
    "O Começo de Tudo": 73
}

def organizar_tudo():
    arquivos_html = [f for f in os.listdir('.') if f.endswith('.html') and f not in ['index.html', 'acompanhar.html']]
    operacoes = []

    # Passo 1: Analisa os arquivos e decide o novo nome
    for arquivo in arquivos_html:
        with open(arquivo, 'r', encoding='utf-8') as f:
            conteudo = f.read()
            match = re.search(r'<title>(.*?)</title>', conteudo, re.IGNORECASE)
            if match:
                titulo = match.group(1)
                foi_mapeado = False
                for chave, numero in mapa_arquivos.items():
                    if chave.lower() in titulo.lower():
                        operacoes.append((arquivo, f"{numero}.html"))
                        foi_mapeado = True
                        break
                
                if not foi_mapeado:
                    print(f"⚠️ Atenção: Slide não mapeado: {arquivo} - Título: {titulo}")

    # Passo 2: Renomeia todos para 'temp_' para não sobrescrever acidentalmente
    for antigo, novo in operacoes:
        if antigo != novo:
            try:
                os.rename(antigo, "temp_" + novo)
            except Exception as e:
                pass

    # Passo 3: Tira o 'temp_' e finaliza
    count = 0
    for antigo, novo in operacoes:
        if antigo != novo:
            try:
                os.rename("temp_" + novo, novo)
                count += 1
            except Exception as e:
                pass
            
    print(f"🚀 FEITO! {count} slides organizados na sequência perfeita de 1 a 73!")

if __name__ == "__main__":
    organizar_tudo()