//Gráfico de barras normal
const GRAFICO_BARRA_LOCAL = document.querySelector("canvas#bar")
const GRAFICO_BARRA = new Chart(GRAFICO_BARRA_LOCAL,{
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
const GRAFICO_BARRA_STACKED_LOCAL = document.querySelector("canvas#bar-stacked")
const GRAFICO_BARRA_STACKED = new Chart(GRAFICO_BARRA_STACKED_LOCAL, {
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
const GRAFICO_PIE_LOCAL = document.querySelector("canvas#pie")
const GRAFICO_PIE = new Chart(GRAFICO_PIE_LOCAL, {
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