# Documentação da API

## /

Retorna se o serviço está online.

```json
{
    "online": true
}
```

## /register_action/:sessionId/:action

Registra ação na sessão especificada. Se a sessão não existe, é criada automaticamente.

```json
{
    "success": true
}
```

## /gather_actions/:sessionId

Retorna as ações registradas e apaga da sessão. Mostra ações repetidas caso existam.

Caso tenha ações registradas:

```json
[
    "water_pump",
    "open_gate",
    "water_pump"
]
```

Caso não existam ações registradas e/ou sessão:

```json
[]
```

É isso aí :thumbsup: