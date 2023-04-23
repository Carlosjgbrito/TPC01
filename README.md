# TPC01
frikfrak
O Frikfrak é um jogo simples que consiste em alinhar três botões horizontalmente, verticalmente ou diagonalmente. Este projeto foi criado utilizando HTML, CSS e JavaScript.

Pré-requisitos
Para executar o jogo, você precisará de um navegador web moderno capaz de executar JavaScript.

Como utilizar
Para utilizar o projeto, siga os passos abaixo:

Clone ou faça o download deste repositório em sua máquina.
Abra o arquivo index.html em um navegador web.
Clique nos botões para jogar o Frikfrak.
O jogo termina quando um jogador conseguir alinhar três botões horizontalmente, verticalmente ou diagonalmente.
Algoritmos utilizados
O algoritmo utilizado neste jogo é bastante simples. É basicamente uma verificação de condição que checa se os botões estão alinhados horizontalmente, verticalmente ou diagonalmente. Caso estejam, o jogo é encerrado e o jogador vencedor é declarado.

Exemplos
Exemplo de como o jogo Frikfrak se parece:

![Frikfrak Example](./para\ jogo\ frikfrak.jpg)

Contribuições
Contribuições são sempre bem-vindas! Para contribuir com o projeto, siga os passos abaixo:

Faça um fork deste repositório.
Crie uma nova branch com sua contribuição (ex: git checkout -b minha-contribuicao).
Faça as alterações necessárias no código.
Faça commit das suas alterações (ex: git commit -m 'Adiciona nova funcionalidade').
Faça push das suas alterações para a branch que você criou (ex: git push origin minha-contribuicao).
Crie um novo pull request neste repositório.
Autor
Carlos Brito
Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE.md para obter mais informações.




Este código HTML fornece a base para a criação de um jogo Frikfrak interativo, onde os jogadores podem clicar nos botões numerados para jogar o jogo. O arquivo CSS e o arquivo JavaScript externos adicionam estilos e funcionalidades adicionais à página.
o código HTML define o estilo da página usando a tag style, que define algumas propriedades CSS para o body e para um fundo de imagem. O seletor "*" define propriedades CSS para todos os elementos, enquanto o seletor "body" define propriedades específicas para o corpo da página.lo
Dentro do corpo da página, a tag main é usada para definir o conteúdo principal da página, que inclui o título do jogo, uma linha horizontal e os botões numerados de 1 a 9. Os botões são definidos com a tag button e têm um atributo data-i que define um valor numérico de 1 a 9 para cada botão.
A tag h2 é usada para exibir o nome do jogador atual.
Por fim, a tag script é usada para vincular um arquivo JavaScript externo, que está localizado no arquivo "script.js".
A função Entrar() é definida dentro da tag script e é acionada quando o botão de login é pressionado. Ele obtém os valores dos campos de login e senha, verifica se eles correspondem a um valor específico (neste caso, "frik" e "frak"), e, se sim, redireciona o usuário para outra página (index.html). Se as informações de login forem incorretas, um alerta é exibido para o usuário.
O código usa vários arrays e objetos para armazenar as informações relevantes para o jogo, como as posições possíveis para vencer, as jogadas permitidas para cada célula, e quantas jogadas cada jogador fez. A função "init()" é chamada no início do jogo para definir o jogador atual como X e limpar o tabuleiro para um novo jogo. A função "change()" é responsável por mudar o jogador atual e marcar a célula selecionada com a marca do jogador atual. A função "newMove()" é chamada quando um jogador faz uma nova jogada, e verifica se a jogada é válida e se um jogador venceu ou não. A função "check()" é usada para verificar se um jogador venceu ou se o jogo terminou em empate.
código CSS que define estilos para uma página HTML. Ele define algumas regras globais para todos os elementos, como a fonte utilizada, o modelo de caixa (box-sizing), as margens e o preenchimento (padding), que serão aplicados a todos os elementos da página,  há regras específicas para cada parte da página, começando pelo corpo (body) que será exibido em tela cheia (height: 100vh) e terá um fundo cinza claro (#f7f7f7),   tag "main" contém todo o conteúdo da página, e será exibida como uma coluna flexível (flex-direction: column) com um espaço de 5 pixels entre cada item (gap: 5px). O texto será exibido em cor azul-turquesa (color: aqua),  O título principal (h1) terá seu texto centralizado (text-align: center) e será exibido em cor rosa (color: fuchsia). Há também uma linha horizontal (hr) que aparece abaixo do título, com espessura de 3 pixels, cor vermelha e margem inferior de 10 pixels.  Por fim, há uma seção chamada "game" que contém os botões do jogo  frikfrak . Eles serão dispostos em um grid de 3 colunas (grid-template-columns: 1fr 1fr 1fr) e terão um tamanho de 150 pixels, além de uma margem de 15 pixels ao redor. Os botões terão um cursor de ponteiro (cursor: pointer), um tamanho de fonte grande (font-size: 100px) e um fundo branco (#f7f7f7).
