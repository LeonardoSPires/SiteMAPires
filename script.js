
const menu = document.querySelector('nav');
const pergunta = document.querySelector('.pergunta');
const propaganda = document.querySelector('.propaganda');
const texto = document.querySelector('.texto');
const sobre = document.querySelector('#sobre');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const slides = document.querySelectorAll('#slideShow .imagemHome');
const slides2 = document.querySelectorAll('#slideShowDivulga .divulga');
let currentSlide = 0;
let currentSlide2 = 0;


function showNextSlide() {
    // Remove a classe "active" da imagem atual
    slides[currentSlide].classList.remove('active');
    // Atualiza o índice para a próxima imagem
    currentSlide = (currentSlide + 1) % slides.length;
    // Adiciona a classe "active" à nova imagem
    slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 5000);

slides[currentSlide].classList.add('active');

function showNextSlide2() {
 // Remove a classe "active" da imagem atual
 slides2[currentSlide2].classList.remove('active');
 // Atualiza o índice para a próxima imagem
 currentSlide2 = (currentSlide2 + 1) % slides2.length;
 // Adiciona a classe "active" à nova imagem
 slides2[currentSlide2].classList.add('active');
}

setInterval(showNextSlide2, 5000);

slides2[currentSlide2].classList.add('active');

function activeScroll() {
    menu.classList.toggle('ativo', scrollY > 20);
    texto.classList.toggle('textoAtivo', scrollY > 500);
}

window.addEventListener('scroll', activeScroll);

btn1.addEventListener("mouseover", function() {
    let txtBtn1 = document.querySelector("#txtBtn1")
    txtBtn1.classList.remove("ativaTxt");
});

btn1.addEventListener("mouseout", function() {
    let txtBtn1 = document.querySelector("#txtBtn1")
    txtBtn1.classList.add("ativaTxt");
});

btn2.addEventListener("mouseover", function() {
    let txtBtn2 = document.querySelector("#txtBtn2")
    txtBtn2.classList.remove("ativaTxt");
});
btn2.addEventListener("mouseout", function() {
    let txtBtn2 = document.querySelector("#txtBtn2")
    txtBtn2.classList.add("ativaTxt");
});

btn3.addEventListener("mouseover", function() {
    let txtBtn3 = document.querySelector("#txtBtn3")
    txtBtn3.classList.remove("ativaTxt");
});

btn3.addEventListener("mouseout", function() {
    let txtBtn3 = document.querySelector("#txtBtn3")
    txtBtn3.classList.add("ativaTxt");
});
 

document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Coleta os valores dos campos
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Verifica se todos os campos foram preenchidos
    if (name && email && subject && message) {
        // Exibe a mensagem de sucesso
        document.getElementById('formStatus').textContent = "Sua mensagem foi enviada com sucesso!";
        document.getElementById('formStatus').style.color = "green"; // Muda a cor para verde

        // Limpa os campos do formulário após o envio
        document.getElementById('formContato').reset();

        // Apaga a mensagem após 5 segundos
        setTimeout(function() {
            document.getElementById('formStatus').textContent = "";
        }, 3000); // 5000 milissegundos = 5 segundos
    } else {
        // Exibe uma mensagem de erro se algum campo não for preenchido
        document.getElementById('formStatus').textContent = "Por favor, preencha todos os campos.";
        document.getElementById('formStatus').style.color = "red"; // Muda a cor para vermelho

        // Apaga a mensagem de erro após 5 segundos
        setTimeout(function() {
            document.getElementById('formStatus').textContent = "";
        }, 3000); // 5000 milissegundos = 5 segundos
    }
});