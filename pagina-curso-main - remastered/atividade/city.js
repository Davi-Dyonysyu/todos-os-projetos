class cidade{
    nome 
    estado
    pais
    habitantes
    fundacao
    foto
 
    constructor(   nome, estado, pais, habitantes, fundacao, foto){
     this.nome = nome
     this.estado = estado
     this.pais = pais
     this.habitantes = habitantes
     this.fundacao = fundacao
     this.foto = foto
    
    }
  
 
 }
 const cidades = []
 cidades.push(new cidade('Cidade:Aluminio', 'Estado:São Paulo', 'País:Brasil', 'Número de Habitantes:20.00k', 'Fundada em 1899','aluminio.png'))
 cidades.push(new cidade('Cidade:Mairinque', 'Estado:São Paulo', 'País:Brasil', 'Número de Habitantes:47,44K', 'Fundada em 1880','mairinque.png' ))
 cidades.push(new cidade('Cidade:Sorocaba', 'Estado:São Paulo', 'País:Brasil', 'Número de Habitantes:723,68K', 'Fundada em 1654','sorocaba.png' ))
 cidades.push(new cidade('Cidade:São Roque', 'Estado:São Paulo', 'País:Brasil', 'Número de Habitantes:92,06K', 'Fundada em 1657','sao roque.png' ))
 const cartoesCidade = document.querySelector('.cidades')
cidades.forEach(cidade =>{
     const cartao = document.createElement('div')
     cartao.classList.add('cartao')
     const nome = document.createElement('h2')
     nome.classList.add('nome')  
     nome.textContent = cidade.nome
     const estado = document.createElement('p')
     estado.classList.add('estado')
     estado.textContent = cidade.estado
     const pais = document.createElement('p')
     pais.classList.add('pais')
     pais.textContent = cidade.pais
     const habitantes = document.createElement('p')
     habitantes.classList.add('habitantes')
     habitantes.textContent = cidade.habitantes
     const fundacao = document.createElement('p')
     fundacao.classList.add('fundacao')
     fundacao.textContent = cidade.fundacao
     const foto = document.createElement('img')
     foto.classList.add('foto')
     foto.setAttribute('src', cidade.foto)
    
     cartao.appendChild(nome)
     cartao.appendChild(estado)
     cartao.appendChild(pais)
     cartao.appendChild(habitantes)
     cartao.appendChild(fundacao)
     cartao.appendChild(foto)
     cartoesCidade.appendChild(cartao)
 })