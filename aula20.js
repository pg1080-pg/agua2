/* Aula 20 MaiaQuiz  */

let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao: 0,
    pergunta: "cor da agua",
    "0A": {
      descricao: "escura",
      pontuacao: 1
    },
    "0B": {
      descricao: "clara",
      pontuacao: 2
    },
    "0C": {
      descricao: "transparente",
      pontuacao: 3
    }
}

const q1 = {
    numQuestao: 1,
    pergunta: "Odor ",
    "1A": {
        descricao: "Cheiro Forte",
        pontuacao: 1
    },
    "1B": {
        descricao: "Cheiro fraco",
        pontuacao: 2
    },
    "1C": {
        descricao: "Sem cheiro",
        pontuacao: 3
    }
}
const q2 = {
    numQuestao: 2,
    pergunta: "Lixo ao redor",
    "2A": {
        descricao: "Muito",
        pontuacao: 1
    },
    "2B": {
        descricao: "Pouco",
        pontuacao: 2
    },
    "2C": {
        descricao: "Sem lixo",
        pontuacao: 3
    }
}
const q3 = {
    numQuestao: 3,
    pergunta: "Materias Futuantes ",
    "3A": {
        descricao: "Muito",
        pontuacao: 1
    },
    "3B": {
        descricao: "Pouco",
        pontuacao: 2
    },
    "3C": {
        descricao: "Sem Materias Futuantes ",
        pontuacao: 3
    }
}
const q4 = {
    numQuestao: 4,
    pergunta: "Espumas ",
    "4A": {
        descricao: "Muito",
        pontuacao: 1
    },
    "4B": {
        descricao: "Pouco",
        pontuacao: 2
    },
    "4C": {
        descricao: "Sem Espuma ",
        pontuacao: 3
    }
}
const q5 = {
    numQuestao: 5,
    pergunta: "Oleo ",
    "5A": {
        descricao: "Muito",
        pontuacao: 1
    },
    "5B": {
        descricao: "Pouco",
        pontuacao: 2
    },
    "5C": {
        descricao: "Sem Oleo",
        pontuacao: 3
    }
}
const q6 = {
    numQuestao: 6,
    pergunta: "Esgoto ",
    "6A": {
        descricao: "Esgoto domestico",
        pontuacao: 1
    },
    "6B": {
        descricao: "Fluxo Superficial",
        pontuacao: 2
    },
    "6C": {
        descricao: "Sem Esgoto ",
        pontuacao: 3
    }
}
const q7 = {
    numQuestao: 7,
    pergunta: "Vegetaçao(preservaçâo)" ,
    "7A": {
        descricao: "Alto degradaçao",
        pontuacao: 1
    },
    "7B": {
        descricao: "Baixa degradaçao",
        pontuacao: 2
    },
    "7C": {
        descricao: "Preservada",
        pontuacao: 3
    }
}
const q8 = {
    numQuestao: 8,
    pergunta: "Uso por animal ",
    "8A": {
        descricao: "Presença",
        pontuacao: 1
    },
    "8B": {
        descricao: "Apenas marcas",
        pontuacao: 2
    },
    "8C": {
        descricao: "Não detectado",
        pontuacao: 3
    }
}
const q9 = {
    numQuestao: 9,
    pergunta: "Uso por humanos ",
    "9A": {
        descricao: "presença",
        pontuacao: 1
    },
    "9B": {
        descricao: "Apenas marcas",
        pontuacao: 2
    },
    "9C": {
        descricao: "Não detectado",
        pontuacao: 3
    }
}
const q10 = {
    numQuestao: 10,
    pergunta: "Proteçao local ",
    "10A": {
        descricao: "Sem proteçao",
        pontuacao: 1
    },
    "10B": {
        descricao: "Com proteçao(mas com acesso)",
        pontuacao: 2
    },
    "10C": {
        descricao: "Com proteçao(sem acesso)",
        pontuacao: 3
    }
}
const q11 = {
    numQuestao: 11,
    pergunta: "Prozimidade com residencia ",
    "11A": {
        descricao: "menos de 50 metros",
        pontuacao: 1
    },
    "11B": {
        descricao: "entre 50 e 100 metros",
        pontuacao: 2
    },
    "11C": {
        descricao: "mais de 100 metros",
        pontuacao: 3
    }
}
const q12 = {
    numQuestao: 12,
    pergunta: "tipo de área de insserção  ",
    "12A": {
        descricao: "Ausente",
        pontuacao: 1
    },
    "12B": {
        descricao: "Propriedade Privada",
        pontuacao: 2
    },
    "12C": {
        descricao: "Parques ou áreas protegidas ",
        pontuacao: 3
    }
}



// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1 ,q2 ,q3, q4 ,q5 ,q6, q7 ,q8 ,q9, q10 ,q11 , q12 ]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q0.numQuestao +1

let totalDeQuestoes = (questoes.length)
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q0.numQuestao +1
pergunta.textContent   = q0.pergunta
a.textContent = q0["0A"].descricao
b.textContent = q0["0B"].descricao
c.textContent = q0["0C"].descricao

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '0A')
b.setAttribute('value', '0B')
c.setAttribute('value', '0C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao][nQuestao+"A"].descricao
    b.textContent = questoes[nQuestao][nQuestao+"B"].descricao
    c.textContent = questoes[nQuestao][nQuestao+"C"].descricao
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    console.log("RespU " + respostaEscolhida)
    
    let questaoValue = nQuestao.getAttribute("value")
    console.log("questaoValue " + questaoValue)

    // let certa = questoes[numeroDaQuestao].correta
    let pontoQuestao = questoes[numeroDaQuestao][questaoValue].pontuacao

    pontos += pontoQuestao
    //console.log("RespC " + certa)

    // if(respostaEscolhida == certa) {
    //     //console.log("Acertou")
    //     //respostaEsta.textContent = "Correta 😊"
    //     pontos += 10 // pontos = pontos + 10
    // } else {
    //     //console.log("Errou!")
    //     //respostaEsta.textContent = "Errada 😢"
    // }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao + 1
        console.log("proxima", proxima)
        console.log("totalDeQuestoes", totalDeQuestoes)

        if(proxima > totalDeQuestoes - 1) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    let grau = document.getElementById('grau');
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont 

    grauPreservacao(pontos,grau)

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        grau.innerText = ''
        location.reload();
    }, 15000)
}

function grauPreservacao(pontos,grau){
  // localStorage.setItem('pg1080','Classe: B \n Grau de preservaçao: Boa') 

    if (pontos >= 37 && pontos <= 39) grau.innerText = 'Classe: A \n Grau de preservaçao: Ótimo'
    else if (pontos >= 34 && pontos <= 36) grau.innerText = 'Classe: B \n Grau de preservaçao: Boa'
    else if (pontos >= 31 && pontos <= 33) grau.innerText = 'Classe: C \n Grau de preservaçao: Razoavel'
    else if (pontos >= 28 && pontos <= 30) grau.innerText = 'Classe: D \n Grau de preservaçao: Ruim'
    else grau.innerText = 'Classe: E \n Grau de preservaçao: Pessímo'
        
}