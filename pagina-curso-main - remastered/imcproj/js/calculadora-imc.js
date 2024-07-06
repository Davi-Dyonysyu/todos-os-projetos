const botaoCalcular = document.querySelector('.botao-calcular')
botaoCalcular.onclick = calcular

window.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        botaoCalcular.click()
    }
})
      
 function calcular(){
 const peso = document.querySelector('.input-kg')
 const altura = document.querySelector('.input-metros')
 const imc = peso.value / (altura.value**2)
 const imcTag = document.querySelector('.resultado__num')
imcTag.textContent = `IMC: ${imc.toFixed(2)}`
const imcTexto = document.querySelector('.resultado__texto')
if (imc < 18.5){
    imcTexto.textContent = 'Abaixo do peso'
    imcTexto.style.color = 'red'
}
else if (imc >= 18.5 && imc <24.9){
    imcTexto.textContent = 'Peso ideal'
    imcTexto.style.color = 'green'
}
else if (imc >= 25.0 && imc <29.9){
    imcTexto.textContent = 'Sobrepeso'
    imcTexto.style.color = 'red'
}
else if (imc >= 30.0 && imc <34.9){
    imcTexto.textContent = 'Obesidade'
    imcTexto.style.color = 'red'
 }
 else if (imc >= 34.9 && imc <44.9){
    imcTexto.textContent = 'Obesidade 1'
    imcTexto.style.color = 'red'
 

 }
 peso.value =''
 altura.value =''
 peso.focus()
}