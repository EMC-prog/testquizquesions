// Datos de preguntas y respuestas
const questions = [
    { "question": "En el silencio sólo s'escuchaba un susurro de abejas que sonaba. (Repetición de fonemas)", "answer": "Aliteración" },
    { "question": "De ese mar surgieron tus lágrimas; lágrimas de melancolía.", "answer": "Anadiplosis" },
    { "question": "Repetición de una o varias palabras a principio del verso.", "answer": "Anáfora" },
    { "question": "Figura retórica que consiste en oponer dos ideas empleando palabras antónimas o frases de significado contrario, cercanas en proximidad y de estructura gramatical similar. (Gran paso y pequeño paso)", "answer": "Antítesis" },
    { "question": "Apelar a un ser animado o inanimado, ausente o presente, que suele interrumpir el discurso.", "answer": "Apóstrofe" },
    { "question": "Eliminar intencionadamente nexos y conjunciones.", "answer": "Asíndeton" },
    { "question": "En tierra, en humo, en polvo, en sombra, en nada. (Acumulación de palabras)", "answer": "Enumeración" },
    { "question": "Comenzar y terminar una misma frase con la misma palabra. ('¿Cómo era, Dios mío, cómo era?')", "answer": "Epanadiplosis" },
    { "question": "Repetir las mismas palabras al final de frases o versos.", "answer": "Epífora" },
    { "question": "Repetición de adjetivos innecesarios, que no aportan información adicional. 'La noche oscura del alma.'", "answer": "Epíteto" },
    { "question": "Sustituir una palabra o expresión desagradable por otra de connotaciones menos negativas (Gorda --> Rellenita)", "answer": "Eufemismo" },
    { "question": "Alteración del orden lógico de una frase. 'De verdes sauces hay una espesura.'", "answer": "Hipérbaton" },
    { "question": "Atribuir a un sustantivo una cualidad o acción propia de otro sustantivo cercano en el mismo texto. (su barba soplando al viento)", "answer": "Hipálage" },
    { "question": "Exageración", "answer": "Hipérbole" },
    { "question": "Realizar una pregunta sin esperar una respuesta.", "answer": "Interrogación retórica" },
    { "question": "Dar a entender lo contrario de lo que se dice (con intención de burla muchas veces).", "answer": "Ironía" },
    { "question": "Negación de lo que se quiere afirmar. (No es muy alto = es bajo)", "answer": "Lítote" },
    { "question": "Identificar un término real con otro imaginario existiendo entre ambos una relación de semejanza", "answer": "Metáfora" },
    { "question": "Designar una cosa o idea con el nombre de otra con la cual existe una relación de dependencia o causalidad. '¿Viste el Picasso que había en la entrada?'", "answer": "Metonimia" },
    { "question": "Uso de términos contradictorios en el mismo sintagma. 'Muertos vivientes'", "answer": "Oxímoron" },
    { "question": "Unión de dos ideas opuestas que resultan contradictorias, pero que conllevan a un significado profundo.", "answer": "Paradoja" },
    { "question": "Repetición de una misma estructura gramatical.", "answer": "Paralelismo" },
    { "question": "Cambios fonéticos que conllevan cambios de significado. ('No es lo mismo arte que hartar.')", "answer": "Paranomasia" },
    { "question": "Atribuir cualidades o acciones propias de seres humanos a animales, objetos o ideas abstractas.", "answer": "Personificación" },
    { "question": "Repetición de una misma palabra con diferentes morfemas flexivos (masculino, femenino, singular, plural, modo verbal...)", "answer": "Políptoton" },
    { "question": "Uso innecesario de conjunciones dentro de la oración.", "answer": "Polisíndeton" },
    { "question": "Empleo de palabras superfluas o redundantes. ('Ciego que nada ve')", "answer": "Pleonasmo" },
    { "question": "Intercambio de dos ideas paralelas y opuestas. ('Por casco sus cabellos, su pecho por coraza.')", "answer": "Quiasmo" },
    { "question": "Repetir una frase en sentido inverso (es un tipo de quiasmo).", "answer": "Retruécano" },
    { "question": "Consiste en comparar un término real con otro imaginario que se le asemeje en alguna cualidad. Su estructura contiene los adverbios 'como', 'tal como', 'cual' o similares. UTILIZA EL TÉRMINO QUE COMIENZA POR S", "answer": "Símil" },
    { "question": "Consiste en designar la parte por el todo o viceversa. Relacionada con la metonimia.", "answer": "Sinécdoque" },
    { "question": "Consiste en mezclar sensaciones de sentidos distintos (audición, visión, gusto, olfato, tacto) o mezclar dichas sensaciones con sentimientos (tristeza, alegría, etc.).", "answer": "Sinestesia" },
    { "question": "Se usa una sola vez una palabra cuando debería emplearse más veces en el texto (elipsis).", "answer": "Zeugma" }
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

const answerTell = document.getElementById("answerTell");
const infiniteMode = document.getElementById("infiniteMode");
const infinite = document.getElementById("infinite");

//Indicamos el número de palabras totales al inicio
let totalQuestions = questions.length;
totalCount.textContent = totalQuestions;

// Funciones decorativas
function obreSol(){
    document.getElementById("solucionari").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}
function tancaSol(){
    document.getElementById("solucionari").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function obreAbout(){
    document.getElementById("about").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}
function tancaAbout(){
    document.getElementById("about").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


// Función para iniciar el juego y mostrar la primera pregunta
startButton.addEventListener("click", () => {
    startButton.style.display = "none"; // Oculta el botón de inicio
    infinite.style.display = "none";
    responseArea.style.display = "block"; // Muestra el área de respuesta
    showRandomQuestion(); // Muestra una pregunta aleatoria
});

// Función para seleccionar y mostrar una pregunta aleatoria
function showRandomQuestion() {
    if (questions.length === 0) {
        questionDiv.textContent = "Todas las preguntas respuestas. Para volver a empezar recarga el sitio web.";
        responseArea.style.display = "none"; // Oculta el área de respuestas
        return;
    }

    const randomIndex = Math.floor(Math.random() * questions.length); // Selecciona un índice aleatorio
    const randomQuestion = questions[randomIndex];

    questionDiv.textContent = randomQuestion.question; // Muestra la pregunta
    currentQuestion = randomQuestion; // Guarda la pregunta actual

    // Elimina la pregunta respondida de la lista para no repetirla (Si modo infinito no es true)
    if (infiniteMode.value=false){
        questions.splice(randomIndex, 1);
    }
    
}

// Función para verificar la respuesta del usuario
checkAnswerButton.addEventListener("click", () => {
    // Verificación previa de colocación de ortografía al final del texto
    const userAnswer_ = userAnswerInput.value.trim();
    console.log(userAnswer_);
    if (userAnswer_.charAt(userAnswer_.length - 1) == '.'){
        var userAnswer = userAnswer_.slice(0,-1);
    } else{
        var userAnswer = userAnswer_;
    }

    console.log(userAnswer);
    if (userAnswer.toString().toLowerCase() === currentQuestion.answer.toLowerCase()) {
        correctAnswers++;
        answerTell.textContent = "¡Correcto!";
    } else {
        incorrectAnswers++;
        answerTell.textContent = "Incorrecto. La respuesta correcta es: " + currentQuestion.answer;
        wrongCount.textContent += currentQuestion.answer + ", ";//"" // ";
    }
    obreSol();

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
