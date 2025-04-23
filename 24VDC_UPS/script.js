
const images = ['slides/slide_1.png', 'slides/slide_2.png', 'slides/slide_3.png', 'slides/slide_4.png', 'slides/slide_5.png', 'slides/slide_6.png', 'slides/slide_7.png', 'slides/slide_8.png', 'slides/slide_9.png', 'slides/slide_10.png', 'slides/slide_11.png', 'slides/slide_12.png', 'slides/slide_13.png', 'slides/slide_14.png', 'slides/slide_15.png', 'slides/slide_16.png', 'slides/slide_17.png', 'slides/slide_18.png', 'slides/slide_19.png'];
let currentImage = 0;
const imageContainer = document.getElementById('imageContainer');
const quizContainer = document.getElementById('quizContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateImage() {
    if (currentImage < images.length) {
        imageContainer.innerHTML = `<img src="${images[currentImage]}" style="width:100%; border-radius: 10px;">`;
        imageContainer.style.display = "block";
        quizContainer.style.display = "none";
    } else {
        imageContainer.style.display = "none";
        quizContainer.style.display = "block";
    }
    prevBtn.disabled = currentImage === 0;
    nextBtn.disabled = currentImage > images.length;
}

prevBtn.addEventListener('click', () => {
    if (currentImage > 0) {
        currentImage--;
        updateImage();
    }
});
nextBtn.addEventListener('click', () => {
    if (currentImage < images.length) {
        currentImage++;
        updateImage();
    }
});

function submitQuiz() {
    const answers = {'q1': 'a', 'q2': 'a', 'q3': 'a', 'q4': 'b', 'q5': 'a', 'q6': 'b', 'q7': 'b', 'q8': 'a', 'q9': 'a', 'q10': 'b'};
    let score = 0;
    for (let key in answers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            score++;
        }
    }
    const result = document.getElementById("quizResult");
    result.innerText = `You got ${score} out of 10 correct.`;
}

updateImage();
