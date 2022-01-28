//Gráfico de barras normal
var GRAFICO_BARRA_LOCAL = document.querySelector("canvas#bar")
var GRAFICO_BARRA = new Chart(GRAFICO_BARRA_LOCAL,{
    type:'bar',
    data:{
        labels:["IL0", "IL1", "IL2", "IL3", "IL4"],
        datasets:[{
            label:"ID",
            data:[21,15,10,10,7],
            backgroundColor:[
                "#35A7FF"
            ]
        }]
    },
    options:{
        scale:{
            yAxes:{
                beginAtZero:true
            }
        },
        plugins:{
            title:{
                display: true,
                text:"Across stage gate",
                font:{
                    size: 20,
                }
            }
        }
    }
})

//Gráfico de barras stacked
var GRAFICO_BARRA_STACKED_LOCAL = document.querySelector("canvas#bar-stacked")
var GRAFICO_BARRA_STACKED = new Chart(GRAFICO_BARRA_STACKED_LOCAL, {
    type:'bar',
    data:{
        labels:["Others", "APAC", "EMEA", "NE"],
        datasets:[
            {
                label:"Low",
                data:[6,8,11,5],
                backgroundColor:[
                    '#35A7FF'
                ]
            },
            {
                label:"Medium",
                data:[8,16,21,14],
                backgroundColor:[
                    '#6BF178'
                ]
            },
            {
                label:"High",
                data:[13,23,29,21],
                backgroundColor:[
                    '#FF5964'
                ]
            }
        ]
    },
    options:{
        plugins:{
            title:{
                display: true,
                text:"Priority by region",
                font:{
                    size:20
                }
            }
        },
        scale:{
            x:{
                stacked:true
            },
            y:{
                stacked: true
            }
        },
        indexAxis: 'y'
    }
})
//Gráfico de doughnut
var GRAFICO_PIE_LOCAL = document.querySelector("canvas#pie")
var GRAFICO_PIE = new Chart(GRAFICO_PIE_LOCAL, {
    type:'doughnut',
    data:{
        labels:["APAC", "EMEA", "NE", "OTHERS"],
        datasets:[{
            data:[80, 20, 30, 35],
            backgroundColor:[
                "#35A7FF",
                "#6BF178",
                "#FF5964",
                "#F5F5F5"
            ]
        }]
    },
    options:{
        plugins:{
            title:{
                display:true,
                text:"Count by region",
                font:{
                    size:20
                }
            }
        }
    }
})

//EVENTOS
let contador = 0
function abrir_menu(){//abre e fecha o menu nos dispositivos mobile
    var CAMINHO_MENU = document.querySelector("div.menu-mobile")
    if(contador == 0){
        CAMINHO_MENU.style.display = 'flex';
        contador++
    }
    else{
        CAMINHO_MENU.style.display = 'none';
        contador=0
    }
    console.log(contador)
}

function fechar(){//remove da tela a notificação da caixa azul
    var CAMINHO_NOTIFICACAO = document.querySelector("div.blue-box")
    CAMINHO_NOTIFICACAO.style.display ='none';
}

function interacao_pesquisa(){//interações de abrir e fechar a barra de pesquisa nos dispositivos mobile
    var CAMINHO_LUPA_HEADER = document.querySelector("img.loupe-icon")
    var CAMINHO_PESQUISA_SHADOW = document.querySelector("div.pesquisa-shadow")
    var CAMINHO_LUPA_PESQUISA_MOBILE = document.querySelector("img.loupe-icon-responsive")

    if(contador == 0){
        CAMINHO_PESQUISA_SHADOW.style.display = 'flex';
        contador++
    }
    else{
        CAMINHO_PESQUISA_SHADOW.style.display = 'none';
        contador=0
    }
    console.log(contador)
}
