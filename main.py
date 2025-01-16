import requests
import time

customboot = False
wifi = True

# URL do servidor que você deseja acessar
url = "http://192.168.10.235:8080/gather_actions/hexaplant-teste"

def fetch_actions(url):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            print(data)
    except Exception as e:
        print("Erro durante a requisição:", str(e))

# Faz requisições a cada 5 segundos
while True:
    fetch_actions(url)
    time.sleep(5)

