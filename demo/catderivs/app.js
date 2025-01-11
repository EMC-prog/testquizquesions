// Datos de preguntas y respuestas
const questions = [
        { "question": "Acció de fer groc", "answer": "Engroguir" },
        { "question": "Gentilici de París", "answer": "Parisenc" },
        { "question": "Fer més gran", "answer": "Engrandir" },
        { "question": "Mescla de metalls (aliar)", "answer": "Aliatge" },
        { "question": "Posar condició", "answer": "Condicionar" },
        { "question": "Paper no definitiu (esborrar)", "answer": "Esborrany" },
        { "question": "Ploure lleugerament", "answer": "Plovisquejar" },
        { "question": "Gentilici de Tunis", "answer": "Tunisenc" },
        { "question": "Quantitat de brillant", "answer": "Brillantor" },
        { "question": "Flames d’una foguera", "answer": "Flamerades" },
        { "question": "Imatges imaginades per fenòmens com calor excessiva (mirall)", "answer": "Miratges" },
        { "question": "Que pertany a l’interior de la casa, de la família, domèstic (casa). Terme utilitzat al menjar", "answer": "Casolà" },
        { "question": "Qualitat de quiet", "answer": "Quietud" },
        { "question": "Fer serè", "answer": "Asserenar" },
        { "question": "Fer tornar agre", "answer": "Agrir" },
        { "question": "En castellà, membrillo", "answer": "Codonyat" },
        { "question": "Qualitat de coix", "answer": "Coixesa" },
        { "question": "Fer rodó", "answer": "Arrodonir" },
        { "question": "Ple de pols", "answer": "Polsegós" },
        { "question": "Ple de pedres", "answer": "Pedregós" },
        { "question": "Material per fregar", "answer": "Fregall" },
        { "question": "Tornar malalt", "answer": "Emmalaltir" },
        { "question": "Posar vernís", "answer": "Envernissar" },
        { "question": "Posar lloses", "answer": "Enllosar" },
        { "question": "Posar a recer", "answer": "Arrecerar" },
        { "question": "Posar a la butxaca", "answer": "Embutxacar" },
        { "question": "Fer mòbil", "answer": "Mobilitzar" },
        { "question": "Que li agrada jugar", "answer": "Enjogassat" },
        { "question": "Que no té orientació lògica, mancat de seny (cabell)", "answer": "Escabellat" },
        { "question": "Amb molt color (Compostos cultes (arrels gregues o llatines))", "answer": "Policroma" },
        { "question": "Amb molt color", "answer": "Acolorit" },
        { "question": "Mostrar-se verd", "answer": "Verdejar" },
        { "question": "Que conté una quantitat excessiva d’aigua", "answer": "Aigualit" },
        { "question": "Fer malbé els lloms (v. pronominal)", "answer": "Esllomar-se" },
        { "question": "Sense remei", "answer": "Irremeiable" },
        { "question": "Primer fill (Compostos cultes (arrels gregues o llatines))", "answer": "Primogènit" },
        { "question": "Posar al llit", "answer": "Enllitar" },
        { "question": "Antigues històries, mites", "answer": "Mitologia" },
        { "question": "Fer agafar por a algú", "answer": "Esporuguir" },
        { "question": "Nom propi d’un indret", "answer": "Locatiu" },
        { "question": "Acció de posar quitrà; l’efecte. (-ment)", "answer": "Enquitranament" },
        { "question": "Punt d’un camí (trencar)", "answer": "Trencall" },
        { "question": "Un seguit de piulets, xerradissa d’ocells.", "answer": "Piuladissa" },
        { "question": "Desaparèixer «Fer-se ...» (fondre)", "answer": "Fonedís" },
        { "question": "Ple de mobles", "answer": "Moblat" },
        { "question": "Que dona molts fruits", "answer": "Fructífera" },
        { "question": "Persona que fa assaigs", "answer": "Assagista" },
        { "question": "Gentilici d’Hongria", "answer": "Hongarès" },
        { "question": "Fer menys vius (mort)", "answer": "Esmorteir" },
        { "question": "Donar moltíssima por (terror)", "answer": "Aterrar" },
        { "question": "Rebre el sabor", "answer": "Assaborir" },
        { "question": "Pedal per embragar", "answer": "Embragatge" },
        { "question": "Olor de la sal", "answer": "Salabror" },
        { "question": "Acció d’aclarir un tema", "answer": "Aclariment" },
        { "question": "Gentilici de Brasil", "answer": "Brasiler" },
        { "question": "Fer més feble", "answer": "Afeblir" },
        { "question": "Fer més espès", "answer": "Espessir" },
        { "question": "Qualitat de «fort» (puny)", "answer": "Punyent" },
        { "question": "Porta que té un recorregut (córrer)", "answer": "Corredissa" },
        { "question": "Ajustar el nivell", "answer": "Anivellar" },
        { "question": "Acció de revifar-se", "answer": "Revifalla" },
        { "question": "Propi de la tardor", "answer": "Tardorenc" },
        { "question": "Grup de fulles, normalment d’un arbre", "answer": "Fullatge" },
        { "question": "Fer més dolç", "answer": "Endolcir" },
        { "question": "Gentilici de Sitges", "answer": "Sitgetà" },
        { "question": "Qualitat de buit", "answer": "Buidor" },
        { "question": "Qualitat de clar", "answer": "Claredat" },
        { "question": "Tornar bla", "answer": "Ablanir" },
        { "question": "Condició del cec", "answer": "Ceguesa" },
        { "question": "Qualitat de vague", "answer": "Vaguetat" },
        { "question": "Convertir en jardí", "answer": "Enjardinar" },
        { "question": "Botiga de vidres", "answer": "Vidrieria" },
        { "question": "Que menja carn", "answer": "Carnívor" },
        { "question": "Tornar en grumolls", "answer": "Agrumollar" },
        { "question": "Tornar clofolla", "answer": "Esclofollar" },
        { "question": "Tornar en crostó", "answer": "Encrostar" },
        { "question": "Qualitat de badoc", "answer": "Badoqueria" },
        { "question": "Poder donar abast", "answer": "Abastar" },
        { "question": "Propi de la muntanya", "answer": "Muntanyenc" },
        { "question": "Qualitat d’humil", "answer": "Humilitat" },
        { "question": "Fer amarg", "answer": "Amarguejar" },
        { "question": "Que decep", "answer": "Decebedor" },
        { "question": "Fer clar", "answer": "Aclarir" },
        { "question": "Treure el greix", "answer": "Desengreixar" },
        { "question": "Qualitat de lleig", "answer": "Lletjor" },
        { "question": "Posar al forn", "answer": "Enfornar" },
        { "question": "Qualitat de fondo", "answer": "Fondària" },
        { "question": "Propi dels Pirineus", "answer": "Pirinenc" },
        { "question": "Propi de la borsa", "answer": "Borsari" },
        { "question": "Qualitat de sord", "answer": "Sordesa" },
        { "question": "Navegar seguint la costa", "answer": "Costejar" },
        { "question": "Propietat del savi", "answer": "Saviesa" },
        { "question": "Fer a trossets", "answer": "Trossejar" },
        { "question": "Fer tou", "answer": "Estovar" },
        { "question": "Qualitat d’antic", "answer": "Antiguitat" },
        { "question": "Marques de dit", "answer": "Ditades" },
        { "question": "Fer arrel", "answer": "Arrelar" },
        { "question": "Propi de l’argila", "answer": "Argilós" },
        { "question": "Que té seny", "answer": "Assenyat" },
        { "question": "Assimilar un cost", "answer": "Costejar" },
        { "question": "Sensible al fred", "answer": "Fredolic" },
        { "question": "Baixar i aixecar la parpella", "answer": "Parpellejar" },
        { "question": "Esdevenir sovint (sovint)", "answer": "Sovintejar" },
        { "question": "Fer tèrbol", "answer": "Enterbolir" },
        { "question": "Màquina per a batre", "answer": "Batedora" },
        { "question": "Element que fa topar amb una altra", "answer": "Topall" },
        { "question": "Treure l’os", "answer": "Desossar" },
        { "question": "Que té molta traça", "answer": "Traçut" },
        { "question": "Persona que fa contes", "answer": "Contista" },
        { "question": "De fora", "answer": "Forà" },
        { "question": "Que s’utilitza com a remei", "answer": "Remeier" },
        { "question": "Protegit per una cuirassa", "answer": "Cuirassat" },
        { "question": "Donar mida", "answer": "Amidar" },
        { "question": "Fer nus", "answer": "Ennuegar" },
        { "question": "Gentilici de Ripollet", "answer": "Ripolletenc" },
        { "question": "Gentilici de Cerdanyola", "answer": "Cerdanyolenc" },
        { "question": "Gentilici de Terrassa", "answer": "Terrassenc" },
        { "question": "Gentilici de Sabadell", "answer": "Sabadellenc" },
        { "question": "Gentilici d’Andorra", "answer": "Andorrà" },
        { "question": "Gentilici de Tarragona", "answer": "Tarragoní" },
        { "question": "Gentilici de Berlín", "answer": "Berlinès" },
        { "question": "Gentilici de Cervera", "answer": "Cerverí" },
        { "question": "Gentilici de l’Empordà", "answer": "Empordanès" },
        { "question": "Gentilici de Lisboa", "answer": "Lisboeta" },
        { "question": "Gentilici de Lleida", "answer": "Lleidatà" }    
    // Agregar más preguntas aquí
];

let correctAnswers = 0;
let incorrectAnswers = 0;

// Referencias a los elementos HTML
const startButton = document.getElementById("startButton");
const questionDiv = document.getElementById("question");
const responseArea = document.getElementById("response-area");
const userAnswerInput = document.getElementById("userAnswer");
const checkAnswerButton = document.getElementById("checkAnswer");
const correctCount = document.getElementById("correctCount");
const incorrectCount = document.getElementById("incorrectCount");
const wrongCount = document.getElementById("wrongCount");
const totalCount = document.getElementById("totalCount");
//Indicamos el número de palabras totales al inicio
let totalQuestions = questions.length;
totalCount.textContent = totalQuestions;

// Función para iniciar el juego y mostrar la primera pregunta
startButton.addEventListener("click", () => {
    startButton.style.display = "none"; // Oculta el botón de inicio
    responseArea.style.display = "block"; // Muestra el área de respuesta
    showRandomQuestion(); // Muestra una pregunta aleatoria
});

// Función para seleccionar y mostrar una pregunta aleatoria
function showRandomQuestion() {
    if (questions.length === 0) {
        questionDiv.textContent = "Totes les preguntes respostes! Per tornar a començar torni a carregar el lloc web.";
        responseArea.style.display = "none"; // Oculta el área de respuestas
        return;
    }

    const randomIndex = Math.floor(Math.random() * questions.length); // Selecciona un índice aleatorio
    const randomQuestion = questions[randomIndex];

    questionDiv.textContent = randomQuestion.question; // Muestra la pregunta
    currentQuestion = randomQuestion; // Guarda la pregunta actual

    // Elimina la pregunta respondida de la lista para no repetirla
    questions.splice(randomIndex, 1);
}

// Función para verificar la respuesta del usuario
checkAnswerButton.addEventListener("click", () => {
    const userAnswer = userAnswerInput.value.trim();

    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        correctAnswers++;
        alert("Correcte!");
    } else {
        incorrectAnswers++;
        alert("Incorrecte. La resposta correcta és: " + currentQuestion.answer);
        wrongCount.textContent = wrongCount.textContent + currentQuestion.answer + ", ";

    }

    // Actualizar el contador
    correctCount.textContent = correctAnswers;
    incorrectCount.textContent = incorrectAnswers;

    userAnswerInput.value = ''; // Limpiar el campo de texto
    showRandomQuestion(); // Muestra una nueva pregunta aleatoria
});

//Función poco estable. NO ACTIVAR.
//document.getElementById("response-area")
  //  .addEventListener("keyup", function(event) {
  //  event.preventDefault();
  //  if (event.keyCode === 13) {
  //      document.getElementById("checkAnswer").click();
        
  //  }
//});
