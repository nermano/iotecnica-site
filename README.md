# iotecnica-site

Site institucional da IOTécnica — **iotecnica.com.br**

Página única estática (HTML + CSS + JS puro, sem frameworks nem build), pronta
para hospedar em qualquer servidor web, GitHub Pages ou Cloudflare Pages.

## Estrutura

```
index.html      Página completa (10 seções + SEO/JSON-LD)
css/styles.css  Estilo "blueprint industrial" — paleta oficial vermelho/cinza
js/main.js      Acordeão do FAQ, chips de setor e formulário → WhatsApp
img/            Imagens otimizadas (logo, placa IOT CLP 84, mapa de cercas, parceiros…)
antigo-site/    Backup do site anterior (snapshot do Bitrix24) — não é publicado
```

## Seções

Hero (placa IOT CLP 84 V1.0) · 7 Soluções · Case cercas georreferenciadas ·
Setores + SegBarco · Metodologia · Plataforma/Arquitetura · Empresa (linha do
tempo desde 1988) · Parceiros · FAQ · Contato (formulário via WhatsApp).

## Conteúdo e contatos

- WhatsApp: (19) 99940-6500 · Telefone: (19) 3372-3300
- E-mail: contato@iotecnica.com.br
- Endereço: R. Silva Jardim, 1378 · Piracicaba/SP
- Domínios relacionados: facyl.com.br (portaria) · segbarco.com (náutico)

## Publicação

Basta servir os arquivos estáticos. Exemplos:

- **Servidor próprio (vps1/nginx):** copiar `index.html`, `css/`, `js/` e `img/`
  para a raiz do site.
- **GitHub Pages:** Settings → Pages → branch `main`, raiz do repositório; depois
  apontar o DNS de iotecnica.com.br (CNAME).

Única dependência externa: Google Fonts (Sora, Inter, JetBrains Mono).
