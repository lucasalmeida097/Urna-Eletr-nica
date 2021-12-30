//Lista de candidatos para a eleição

// let etapas = [0,1]
// let etapas = [{vereador},{prefeito}] ==>  etapas = [ { titulo,num,candidatos:[{num,nome,partido,fotos[]} ,{num,nome,partido,foto[]}, ] } , {titulo,num,candidatos:[ {99}, {84},] } ];

let etapas = [ 
    { 
        titulo:'VEREADOR',
        numeros: 5,
        candidatos: [ 
            {
                numero:'38111',
                nome:'Bernado Silva',
                partido: 'Verde',
                fotos:[
                    {url:'38111.jpg' , legenda:'VEREADOR', small:false}
                ]
            },
            {
                numero:'77222',
                nome:'Maria Santos',
                partido:'Amarelo',
                fotos:[
                    {url:'77222.jpg',legenda:'Vereador', small:false}
                ]
            },
            {
                numero:'95333',
                nome:'Rafael Gomes',
                partido:'Vermelho',
                fotos:[
                    {url:'95333.jpg',legenda:'Vereador', small:false}
                ]
            },
            {
                numero:'66444',
                nome:'Fernanda Ribeiro',
                partido:'Rosa',
                fotos:[
                    {url:'66444.jpg',legenda:'Vereador', small:false}
                ]
            },
        ]
    },
    {
        titulo:'PREFEITO',
        numeros: 2,
        candidatos: [
            {
                numero: '99',
                nome:'José Pereira',
                partido:'Azul',
                vice:'Renata Borges',
                fotos:[
                    {url:'99.jpg', legenda:'Prefeito'},
                    {url:'99_2.jpg', legenda:'Vice-Prefeito',small:true}
                ]
            },
            {
                numero: '84',
                nome:'Fabiana Moraes',
                partido:'Roxo',
                vice:'Pedro de Souza',
                fotos:[
                    {url:'84.jpg', legenda:'Prefeito'},
                    {url:'84_2.jpg', legenda:'Vice-Prefeito', small:true}
                ]
            },
        ]
    }
];