
const menu = document.querySelector('nav');
const pergunta = document.querySelector('.pergunta');
const propaganda = document.querySelector('.propaganda');
const texto = document.querySelector('.texto');
const sobre = document.querySelector('#sobre');
const lnk1 = document.querySelector('.lnk1');
const lnk2 = document.querySelector('.lnk2');
const lnk3 = document.querySelector('.lnk3');
const slides = document.querySelectorAll('#slideShow .imagemHome');
const slides2 = document.querySelectorAll('#slideShowDivulga .divulga');
let currentSlide = 0;
let currentSlide2 = 0;

function activeScroll() {
    menu.classList.toggle('ativo', scrollY > 5);
}
window.addEventListener('scroll', activeScroll);


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

lnk1.addEventListener("mouseover", () => {
   lnk1.textContent = "Em resumo, a qualidade de um pedreiro é medida pela sua competência técnica, precisão, responsabilidade e capacidade de trabalhar em equipe, resultando em construções seguras e bem-acabadas.";
   lnk1.style.transition = ".5s ease-in-out";
});
lnk1.addEventListener("mouseout", () => {
    lnk1.textContent = "Qualidade";
})
lnk2.addEventListener("mouseover", () => {
   lnk2.textContent = "Nossa missão é oferecer um bom atendimento e ser transparente em relação aos custos. Buscamos sempre um serviço bem-feito a um preço justo, adaptando-se às necessidades do cliente.";
});
lnk2.addEventListener("mouseout", () => {
    lnk2.textContent = "Preço";
})
lnk3.addEventListener("mouseover", () => {
   lnk3.textContent = "Quando se trata de construção, a segurança é nossa prioridade. Durante todo o processo da obra, tomamos cuidados para garantir que o trabalho seja feito de forma segura tanto para nossa equipe quanto para o cliente";
   lnk3.style.transition = ".5s ease-in-out";
});
lnk3.addEventListener("mouseout", () => {
    lnk3.textContent = "Qualidade";
})
 

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