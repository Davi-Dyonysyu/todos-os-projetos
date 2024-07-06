class Produto {
    constructor(titulo, preco, descricao, categoria, imagem, quantidade){
        this.titulo = titulo
        this.preco = preco
        this.descricao = descricao
        this.categoria = categoria
        this.imagem = imagem
        this.quantidade = quantidade

    }
}
const produtos = []
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    json.forEach(item =>{
        const produto = new Produto(
            item.title,
            item.price,
            item.description,
            item.category,
            item.image,
            item.rating.count
        )
        produtos.push(produto)
    });
    atualizarHtml()
  });

  function atualizarHtml(){
  const cartoesProdutos = document.querySelector('.produtos')
  produtos.forEach(produto => {
    const cartao = document.createElement('div') // cria elemento div
    cartao.classList.add('cartao') // insere classe ao elemento

    const imagem = document.createElement ('img')
    imagem.classList.add ('foto')
    imagem.setAttribute('src', produto.imagem)

    const titulo = document.createElement('h2')
    titulo.classList.add ('titulo')
    titulo.textContent = produto.titulo

    const categoria = document.createElement('p')
    categoria.classList.add ('categoria')
    categoria.textContent = produto.categoria

    const descricao = document.createElement('p')
    descricao.classList.add ('descricao')
    descricao.textContent = produto.descricao

    const preco = document.createElement('p')
    preco.classList.add ('preco')
    preco.textContent = produto.preco

    const quantidade = document.createElement('p')
    quantidade.classList.add ('quantidade')
    quantidade.textContent = produto.quantidade

    cartao.appendChild(imagem)
    cartao.appendChild(titulo)
    cartao.appendChild(categoria)
    cartao.appendChild(descricao)
    cartao.appendChild(preco)
    cartao.appendChild(quantidade)
    cartoesProdutos.appendChild(cartao)
})
}
 