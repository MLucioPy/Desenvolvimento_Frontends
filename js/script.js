/*
 * ================================================================
 * ARQUIVO: script.js
 * ================================================================
 * Este arquivo contém os comportamentos INTERATIVOS do site.
 *
 * HTML  -> define os elementos (botões, textos, menus etc.).
 * CSS   -> define como esses elementos aparecem.
 * JS    -> define o que acontece quando o usuário interage com eles.
 *
 * O JavaScript deste projeto não utiliza bibliotecas externas.
 * Isso significa que o código usa apenas recursos nativos do navegador.
 */

/*
 * DOMContentLoaded:
 * O navegador primeiro lê o HTML e monta o DOM (Document Object Model).
 * Quando isso termina, este evento é executado.
 *
 * Por que usar isso?
 * Porque precisamos ter certeza de que os elementos HTML já existem
 * antes de tentar localizá-los com document.querySelector().
 */
document.addEventListener('DOMContentLoaded', () => {

  /*
   * ================================================================
   * 1) MENU RESPONSIVO
   * ================================================================
   *
   * querySelector() procura o PRIMEIRO elemento que corresponde ao
   * seletor CSS informado.
   *
   * '.menu-toggle' = botão ☰ usado em telas pequenas.
   * '.nav'         = bloco que contém os links do menu.
   */
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  /*
   * Verificamos se os dois elementos foram encontrados.
   *
   * Isso é importante porque o mesmo script.js é carregado em todas
   * as páginas. Se uma página não tiver algum elemento, o programa
   * simplesmente não tenta usá-lo e evita um erro no navegador.
   */
  if (toggle && nav) {

    /*
     * addEventListener('click', ...):
     * diz ao navegador: "quando o botão receber um clique, execute
     * esta função".
     */
    toggle.addEventListener('click', () => {

      /*
       * classList.toggle('open'):
       * - se a classe "open" NÃO existir, adiciona;
       * - se a classe "open" JÁ existir, remove.
       *
       * No CSS existe uma regra .nav.open { display: flex; }.
       * Portanto, o JavaScript não precisa controlar o layout
       * diretamente: ele apenas liga/desliga a classe.
       */
      nav.classList.toggle('open');
    });
  }


  /*
   * ================================================================
   * 2) SIMULAÇÃO DE ALERTA
   * ================================================================
   *
   * Estes três elementos só existem na página arquitetura.html.
   *
   * id="simulate"  -> botão que inicia a simulação.
   * id="sim-status" -> texto que mostra o estado do sistema.
   * id="alert-log"  -> área onde aparece o resultado.
   */
  const simulate = document.getElementById('simulate');
  const status = document.getElementById('sim-status');
  const log = document.getElementById('alert-log');

  /*
   * Como o script roda em todas as páginas, verificamos se o botão
   * existe antes de criar o evento de clique.
   *
   * Nas outras páginas simulate será null e este bloco será ignorado.
   */
  if (simulate) {

    /*
     * Quando o usuário clicar em "Simular alerta", o navegador
     * executará todo o código dentro desta função.
     */
    simulate.addEventListener('click', () => {

      /*
       * new Date() cria um objeto contendo a data e hora atuais
       * do computador/celular do usuário.
       */
      const now = new Date();

      /*
       * toLocaleTimeString('pt-BR') converte a hora para um formato
       * adequado ao padrão brasileiro, por exemplo: 09:25:31.
       */
      const time = now.toLocaleTimeString('pt-BR');

      /*
       * textContent altera somente o texto do elemento.
       *
       * Aqui simulamos a mudança do estado:
       * antes: "Sistema em monitoramento."
       * depois: "Ocorrência detectada..."
       */
      status.textContent = '⚠ Ocorrência detectada — alerta gerado.';

      /*
       * Adicionamos a classe "active" ao registro do alerta.
       *
       * O CSS possui .alert-log.active, que muda a aparência
       * da caixa para indicar visualmente que houve uma ocorrência.
       */
      log.classList.add('active');

      /*
       * innerHTML permite inserir HTML dentro do elemento.
       *
       * Usamos uma template string (crase `...`) para conseguir
       * misturar texto fixo com a variável ${time}.
       *
       * IMPORTANTE:
       * Os valores de temperatura e umidade abaixo são FIXOS.
       * Eles servem apenas para demonstração acadêmica. Não são
       * leituras reais de um sensor.
       */
      log.innerHTML = `<strong>ALERTA SIMULADO</strong><br>Palavra-chave "SOCORRO" detectada às ${time}.<br>Temperatura: 26,5 °C • Umidade: 58%.<br>Mensagem encaminhada ao responsável cadastrado.`;

      /*
       * Alteramos o texto do botão para deixar claro que o usuário
       * pode executar a demonstração novamente.
       */
      simulate.textContent = 'Simular novamente';
    });
  }

  /*
   * Fim do programa.
   * Não há conexão com ESP32, MQTT ou banco de dados nesta página.
   * A simulação é executada totalmente no navegador.
   */
});
