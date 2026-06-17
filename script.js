

<script language="JavaScript">
    // 1. ALERTA DE BOAS-VINDAS CLÁSSICO
    // Pede o nome do usuário assim que a página carrega
    var nome = prompt("Qual é o seu nome, internauta?", "Estudante de Agronomia");
    if (nome != null && nome != "") {
        alert("Bem-vindo ao Agro-Univ, " + nome + "!! Prepare-se para navegar na Web!");
    }

    // 2. TEXTO CORRENDO NA BARRA DE STATUS (Simulação para navegadores modernos)
    // Antigamente exibia o texto no rodapé do Netscape. Hoje vamos colocar no título da aba!
    var mensagem = " *** AGRO-UNIV: O MELHOR SITE DE AGRICULTURA DA INTERNET DIRETAMENTE DE 1999! *** ";
    function moverTitulo() {
        document.title = mensagem;
        mensagem = mensagem.substring(1, mensagem.length) + mensagem.substring(0, 1);
        setTimeout("moverTitulo()", 200);
    }
    moverTitulo(); // Inicia a função

    // 3. EFEITO VISUAL: TEXTO SEGUINDO O MOUSE
    // Cria um efeito onde uma frase curta segue o ponteiro do mouse
    var rastroTexto = "🌾 AGRO 🌾";
    var x, y;
    var fita = new Array();
    
    // Captura o movimento do mouse
    document.onmousemove = function(e) {
        x = e.pageX + 15;
        y = e.pageY + 15;
    }

    // Cria os elementos do rastro
    for (var i = 0; i < rastroTexto.length; i++) {
        document.write("<span id='span_rastro" + i + "' style='position:absolute; font-family:Arial; font-size:12px; font-weight:bold; color:#FF0000; pointer-events:none;'>" + rastroTexto.charAt(i) + "</span>");
    }

    // Atualiza a posição do rastro
    function animarRastro() {
        if (x && y) {
            for (var i = rastroTexto.length - 1; i >= 1; i--) {
                var spanAnterior = document.getElementById("span_rastro" + (i - 1));
                var spanAtual = document.getElementById("span_rastro" + i);
                spanAtual.style.left = spanAnterior.style.left;
                spanAtual.style.top = spanAnterior.style.top;
            }
            var primeiroSpan = document.getElementById("span_rastro0");
            primeiroSpan.style.left = x + "px";
            primeiroSpan.style.top = y + "px";
        }
        setTimeout("animarRastro()", 40);
    }
    animarRastro();
</script>
