# Tema Chirpy [![Versão Gem](https://img.shields.io/gem/v/jekyll-theme-chirpy)](https://rubygems.org/gems/jekyll-theme-chirpy) [![Licença GitHub](https://img.shields.io/github/license/cotes2020/chirpy-starter.svg?color=blue)][mit]

Ao instalar o tema [**Chirpy**][chirpy] através de [RubyGems.org][gem], o Jekyll só pode ler arquivos nas pastas `_includes`, `_layout`, `_sass` e `assets`, bem como uma pequena parte das opções do arquivo `_config.yml` do gem do tema. Se você já instalou este gem de tema, pode usar o comando `bundle info --path jekyll-theme-chirpy` para localizar esses arquivos.

A organização Jekyll afirma que isso é para deixar a bola no campo do usuário, mas isso também resulta em usuários não sendo capazes de desfrutar da experiência pronta para uso ao usar temas ricos em recursos.

Para usar totalmente todos os recursos do **Chirpy**, você precisa copiar os outros arquivos críticos do gem do tema para o seu site Jekyll. A seguir está uma lista de alvos:

```shell
.
├── _config.yml
├── _data
├── _plugins
├── _tabs
└── index.html
```

Para economizar seu tempo e para evitar que você perca alguns arquivos ao copiar, extraímos esses arquivos/configurações da versão mais recente do tema **Chirpy** e do fluxo de trabalho [CD][CD] para cá, para que você possa começar a escrever em minutos.

## Pré-requisitos

Este site usa a linguagem Ruby para renderizar as páginas em Markdown para HTML, o Bundler como gerenciador de dependencias da linguagem Ruby, também usa o modelo Jekyll personalizado com [Chirpy][use-template].

Siga as instruções nos [Documentos Jekyll][jeckylldocs] para completar a instalação de `Ruby`, `RubyGems`, `Jekyll` e `Bundler`.

Caso necessite de uma versão anterior do Ruby para executar essa versão do Jekyll, utilize um gerenciador de versões, como o [rbenv][rbenv], com ele podemos trocar para versões anteriores para evitar problemas de compatibilidade.

## Instalação

[**Use este modelo**][use-template] para gerar um novo repositório e nomeie-o `<GH_USERNAME>.github.io`, onde `GH_USERNAME` representa seu nome de usuário no GitHub.

Depois clone-o para sua máquina local e execute:

```shell
bundle
```

Para executar o servidor local execute:

```shell
bbundle exec jekyll serve
```

A página será exibida no navegador com o link:

<http://127.0.0.1:4000/>

## Uso

Por favor, veja a [documentação do tema](https://github.com/cotes2020/jekyll-theme-chirpy#documentation).

## Licença

Este trabalho é publicado sob a Licença [MIT][mit].

[gem]: https://rubygems.org/gems/jekyll-theme-chirpy
[chirpy]: https://github.com/cotes2020/jekyll-theme-chirpy/
[use-template]: https://github.com/cotes2020/chirpy-starter/generate
[CD]: https://pt.wikipedia.org/wiki/Implanta%C3%A7%C3%A3o_cont%C3%ADnua
[mit]: https://github.com/cotes2020/chirpy-starter/blob/master/LICENSE
[rbenv]: https://gist.github.com/jocile/8c4d27d6aa283dda1774f149bc03d42d
[jeckylldocs]: https://jekyllrb.com/docs/installation/
