class Pessoa{
   nome 
   idade 
   cidade
   sexo 
   profissao 
   escolaridade

   constructor(   nome, foto, idade, cidade, sexo, profissao, escolaridade){
    this.nome = nome
    this.foto = foto
    this.idade = idade
    this.cidade = cidade
    this.sexo = sexo
    this.profissao = profissao
    this.escolaridade = escolaridade
   }

apresentar(){
    const apresentacao = `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, moro na cidade ${this.cidade} e minha profissao é ${this.profissao}`
console.log(apresentacao)
}

}
const pessoas = []
pessoas.push(new Pessoa('davi', 'YASUKE.png', 17, 'aluminio', 'm', 'nao possui', 'ensino médio'))
pessoas.push(new Pessoa('luis','YASUKE.png', 17, 'mairinque', 'm', 'nao tem', 'superior'))
pessoas.push(new Pessoa('ricardo','YASUKE.png', 17, 'manaus', 'm', 'repositor', 'médio'))
pessoas.push(new Pessoa('vitu','YASUKE.png', 17, 'praia', 'f', 'repositor aprendiz', 'médio'))
const cartoesPessoas = document.querySelector('.pessoas')
pessoas.forEach(pessoa =>{
    const cartao = document.createElement('div')
    cartao.classList.add('cartao')
    const foto = document.createElement('img')
    foto.classList.add('foto')
    foto.setAttribute('src', pessoa.foto)
    const nome = document.createElement('h2')
    nome.classList.add('nome')  
    nome.textContent = pessoa.nome
    const idade = document.createElement('p')
    idade.classList.add('idade')
    idade.textContent = pessoa.idade
    const cidade = document.createElement('p')
    cidade.classList.add('cidade')
    cidade.textContent = pessoa.cidade
    const profissao = document.createElement('p')
    profissao.classList.add('profissao')
    profissao.textContent = pessoa.profissao
    const escolaridade = document.createElement('p')
    escolaridade.classList.add('escolaridade')
    escolaridade.textContent = pessoa.escolaridade
    cartao.appendChild(foto)
    cartao.appendChild(nome)
    cartao.appendChild(idade)
    cartao.appendChild(cidade)
    cartao.appendChild(profissao)
    cartao.appendChild(escolaridade)
    cartoesPessoas.appendChild(cartao)
})