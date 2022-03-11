            // document.getElementByClass( 'lista');
            // document.getElementById( '#botao');
            // document.querySelector( '#app ul');
            var convidados = JSON.parse(localStorage.getItem("convidados"))  || [];

            var elLista =  document.getElementById("lista");
            var elCampo =  document.getElementById("campo");
            var elBotao =  document.getElementById("botao");

            elBotao.onclick = function() {
                var nome = elCampo.value;
                convidados.push({nome: nome});
                elCampo.value = "";


                salvarConvidados();
                listarConvidados();
            };

            function salvarConvidados() {
                localStorage.setItem("convidados", JSON.stringify (convidados));
            }

            function listarConvidados() {
                elLista.innerHTML = "";

                for ( const convidado of convidados) {
                    var elConvidado = document.createElement('li');
                    var elNome = document.createTextNode(convidado.nome);

                    var elExcluir = document.createElement("a");
                    elExcluir.setAttribute("href", "#");
                    elExcluir.onclick = function() {
                        convidados = convidados.filter(function(item) {
                            return item.nome !== convidado.nome;
                        });


                        salvarConvidados();
                        listarConvidados();
                    };

                    var elExcluirTexto = document.createTextNode("  Excluir  ");

                    elExcluir.appendChild(elExcluirTexto);
                    elConvidado.appendChild(elNome);
                    elConvidado.appendChild(elExcluir);
                    elLista.appendChild(elConvidado);
                }
            }

            listarConvidados();