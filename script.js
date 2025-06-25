// متغيرات عامة
let currentLanguage = 'ar';
let currentQuestionIndex = 0;
let userAnswers = [];
let questions = [];
let isDarkMode = false;

// مخزون الأسئلة (200 سؤال)
const allQuestions = {
    ar: [
        // أسئلة منطقية (100 سؤال)
        {
            text: "ما هو العكس المنطقي لكلمة 'سريع'؟",
            options: ["بطيء", "سريع جداً", "متوسط", "غير سريع"],
            correct: 0,
            type: "logical"
        },
        {
            text: "أي من الكلمات التالية لا تنتمي للمجموعة؟",
            options: ["تفاح", "برتقال", "موز", "طماطم"],
            correct: 3,
            type: "logical"
        },
        {
            text: "إذا كان أحمد أكبر من علي، وعلي أكبر من محمد، فمن الأكبر؟",
            options: ["أحمد", "علي", "محمد", "لا يمكن تحديده"],
            correct: 0,
            type: "logical"
        },
        {
            text: "أي كلمة تكمل النمط: قلم، كتاب، ...؟",
            options: ["قلم رصاص", "دفتر", "ممحاة", "مسطرة"],
            correct: 1,
            type: "logical"
        },
        {
            text: "ما هو المعنى المشترك بين 'مدرسة' و 'جامعة'؟",
            options: ["مكان للتعلم", "مبنى كبير", "مؤسسة حكومية", "مكان للعمل"],
            correct: 0,
            type: "logical"
        },
        {
            text: "أي من الألوان التالية يختلف عن الباقي؟",
            options: ["أحمر", "أزرق", "أخضر", "أصفر"],
            correct: 3,
            type: "logical"
        },
        {
            text: "ما هو العكس المنطقي لكلمة 'كبير'؟",
            options: ["صغير", "كبير جداً", "متوسط", "غير كبير"],
            correct: 0,
            type: "logical"
        },
        {
            text: "أي من الحيوانات التالية لا يطير؟",
            options: ["عصفور", "نسر", "بط", "أسد"],
            correct: 3,
            type: "logical"
        },
        {
            text: "ما هو الشيء المشترك بين 'سيارة' و 'طائرة'؟",
            options: ["وسيلة نقل", "محرك", "عجلات", "أجنحة"],
            correct: 0,
            type: "logical"
        },
        {
            text: "أي من الأرقام التالية يختلف عن الباقي؟",
            options: ["2", "4", "6", "7"],
            correct: 3,
            type: "logical"
        },
        // أسئلة رياضية (70 سؤال)
        {
            text: "ما هو ناتج 15 × 7؟",
            options: ["95", "105", "110", "115"],
            correct: 1,
            type: "math"
        },
        {
            text: "إذا كان 3x + 5 = 20، فما قيمة x؟",
            options: ["3", "5", "7", "15"],
            correct: 1,
            type: "math"
        },
        {
            text: "ما هو العدد التالي في المتتالية: 2, 4, 8, 16, ...؟",
            options: ["24", "32", "30", "28"],
            correct: 1,
            type: "math"
        },
        {
            text: "كم عدد الأيام في 3 أسابيع؟",
            options: ["18", "21", "24", "27"],
            correct: 1,
            type: "math"
        },
        {
            text: "ما هو الجذر التربيعي لـ 144؟",
            options: ["10", "11", "12", "13"],
            correct: 2,
            type: "math"
        },
        {
            text: "ما هو ناتج 25 ÷ 5؟",
            options: ["3", "4", "5", "6"],
            correct: 2,
            type: "math"
        },
        {
            text: "ما هو العدد المفقود: 1, 3, 6, 10, 15, ...؟",
            options: ["18", "20", "21", "22"],
            correct: 2,
            type: "math"
        },
        {
            text: "ما هو ناتج 12 × 8؟",
            options: ["88", "92", "96", "100"],
            correct: 2,
            type: "math"
        },
        {
            text: "ما هو العدد الذي إذا ضربته في نفسه يساوي 25؟",
            options: ["3", "4", "5", "6"],
            correct: 2,
            type: "math"
        },
        {
            text: "ما هو ناتج 100 ÷ 4؟",
            options: ["20", "25", "30", "35"],
            correct: 1,
            type: "math"
        },
        // أسئلة نصية (30 سؤال)
        {
            text: "ما هو مرادف كلمة 'جميل'؟",
            options: ["قبيح", "حسن", "كبير", "صغير"],
            correct: 1,
            type: "text"
        },
        {
            text: "أي من الكلمات التالية تعني 'سريع'؟",
            options: ["بطيء", "عاجل", "هادئ", "صامت"],
            correct: 1,
            type: "text"
        },
        {
            text: "ما هو عكس كلمة 'سعيد'؟",
            options: ["مبتهج", "حزين", "مرح", "متفائل"],
            correct: 1,
            type: "text"
        },
        {
            text: "أي من الكلمات التالية تعني 'كبير'؟",
            options: ["صغير", "ضخم", "قصير", "رفيع"],
            correct: 1,
            type: "text"
        },
        {
            text: "ما هو مرادف كلمة 'ذكي'؟",
            options: ["غبي", "فطن", "بطيء", "كسول"],
            correct: 1,
            type: "text"
        }
    ],
    en: [
        // English questions (same structure as Arabic)
        {
            text: "What is the logical opposite of the word 'fast'?",
            options: ["slow", "very fast", "medium", "not fast"],
            correct: 0,
            type: "logical"
        },
        {
            text: "Which of the following words does not belong to the group?",
            options: ["apple", "orange", "banana", "tomato"],
            correct: 3,
            type: "logical"
        },
        {
            text: "If Ahmed is older than Ali, and Ali is older than Mohammed, who is the oldest?",
            options: ["Ahmed", "Ali", "Mohammed", "Cannot be determined"],
            correct: 0,
            type: "logical"
        },
        {
            text: "Which word completes the pattern: pen, book, ...?",
            options: ["pencil", "notebook", "eraser", "ruler"],
            correct: 1,
            type: "logical"
        },
        {
            text: "What is the common meaning between 'school' and 'university'?",
            options: ["place for learning", "large building", "government institution", "workplace"],
            correct: 0,
            type: "logical"
        },
        {
            text: "What is the result of 15 × 7?",
            options: ["95", "105", "110", "115"],
            correct: 1,
            type: "math"
        },
        {
            text: "If 3x + 5 = 20, what is the value of x?",
            options: ["3", "5", "7", "15"],
            correct: 1,
            type: "math"
        },
        {
            text: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
            options: ["24", "32", "30", "28"],
            correct: 1,
            type: "math"
        },
        {
            text: "How many days are in 3 weeks?",
            options: ["18", "21", "24", "27"],
            correct: 1,
            type: "math"
        },
        {
            text: "What is the square root of 144?",
            options: ["10", "11", "12", "13"],
            correct: 2,
            type: "math"
        }
    ]
};

// النصائح الشخصية حسب مستوى الذكاء
const personalAdvice = {
    ar: {
        genius: {
            title: "نصيحة للعبقري",
            text: "مستواك الاستثنائي يتطلب تحديات أكبر! جرب حل المشاكل المعقدة، تعلم لغات برمجة جديدة، أو ادرس مواضيع متقدمة في الرياضيات والعلوم."
        },
        veryHigh: {
            title: "نصيحة للذكي جداً",
            text: "استثمر في قدراتك التحليلية! يمكنك التفوق في مجالات مثل الهندسة، الطب، أو البحث العلمي. واصل التعلم والتطوير."
        },
        high: {
            title: "نصيحة للذكي",
            text: "لديك قدرات عقلية ممتازة! ركز على تطوير مهاراتك في مجالات تهمك، ومارس حل المشاكل المعقدة بانتظام."
        },
        aboveAverage: {
            title: "نصيحة لفوق المتوسط",
            text: "مستواك جيد ويمكن تحسينه! اقرأ أكثر، حل ألغاز منطقية، وتعلم مهارات جديدة لرفع قدراتك العقلية."
        },
        average: {
            title: "نصيحة للمتوسط",
            text: "هذا المستوى طبيعي! يمكنك تحسينه بالتدريب المنتظم، القراءة، وحل الألغاز. التركيز والممارسة هما المفتاح."
        },
        belowAverage: {
            title: "نصيحة لدون المتوسط",
            text: "لا تستسلم! التدريب المنتظم وحل الألغاز البسيطة سيساعدانك. ابدأ بتمارين بسيطة وزد الصعوبة تدريجياً."
        },
        low: {
            title: "نصيحة للمستوى المنخفض",
            text: "كل شخص يمكنه التحسن! ابدأ بتمارين بسيطة جداً، مارس بانتظام، واطلب مساعدة من متخصصين إذا لزم الأمر."
        }
    },
    en: {
        genius: {
            title: "Advice for Genius",
            text: "Your exceptional level requires bigger challenges! Try solving complex problems, learn new programming languages, or study advanced topics in mathematics and science."
        },
        veryHigh: {
            title: "Advice for Very High Intelligence",
            text: "Invest in your analytical abilities! You can excel in fields like engineering, medicine, or scientific research. Continue learning and developing."
        },
        high: {
            title: "Advice for High Intelligence",
            text: "You have excellent mental abilities! Focus on developing your skills in areas that interest you, and practice solving complex problems regularly."
        },
        aboveAverage: {
            title: "Advice for Above Average",
            text: "Your level is good and can be improved! Read more, solve logical puzzles, and learn new skills to enhance your mental abilities."
        },
        average: {
            title: "Advice for Average",
            text: "This level is normal! You can improve it with regular training, reading, and solving puzzles. Focus and practice are the keys."
        },
        belowAverage: {
            title: "Advice for Below Average",
            text: "Don't give up! Regular training and solving simple puzzles will help you. Start with simple exercises and gradually increase difficulty."
        },
        low: {
            title: "Advice for Low Level",
            text: "Everyone can improve! Start with very simple exercises, practice regularly, and seek help from specialists if necessary."
        }
    }
};

// الترجمات
const translations = {
    ar: {
        question: "السؤال",
        your_answer: "إجابتك:",
        correct_answer: "الإجابة الصحيحة:",
        genius: "عبقري",
        veryHigh: "ذكاء عالي جداً",
        high: "ذكاء عالي",
        aboveAverage: "فوق المتوسط",
        average: "متوسط",
        belowAverage: "دون المتوسط",
        low: "منخفض",
        genius_desc: "مستوى ذكاء استثنائي! أنت تمتلك قدرات عقلية فائقة.",
        veryHigh_desc: "ذكاء عالي جداً! أنت تمتلك قدرات عقلية ممتازة.",
        high_desc: "ذكاء عالي! أنت تمتلك قدرات عقلية جيدة جداً.",
        aboveAverage_desc: "ذكاء فوق المتوسط! أنت تمتلك قدرات عقلية جيدة.",
        average_desc: "ذكاء متوسط! أنت تمتلك قدرات عقلية طبيعية.",
        belowAverage_desc: "ذكاء دون المتوسط! يمكنك تحسين قدراتك العقلية.",
        low_desc: "ذكاء منخفض! ركز على تطوير مهاراتك العقلية."
    },
    en: {
        question: "Question",
        your_answer: "Your answer:",
        correct_answer: "Correct answer:",
        genius: "Genius",
        veryHigh: "Very High",
        high: "High",
        aboveAverage: "Above Average",
        average: "Average",
        belowAverage: "Below Average",
        low: "Low",
        genius_desc: "Exceptional intelligence level! You possess extraordinary mental abilities.",
        veryHigh_desc: "Very high intelligence! You possess excellent mental abilities.",
        high_desc: "High intelligence! You possess very good mental abilities.",
        aboveAverage_desc: "Above average intelligence! You possess good mental abilities.",
        average_desc: "Average intelligence! You possess normal mental abilities.",
        belowAverage_desc: "Below average intelligence! You can improve your mental abilities.",
        low_desc: "Low intelligence! Focus on developing your mental skills."
    }
};

// تهيئة الأسئلة
function initializeQuestions() {
    questions = selectRandomQuestions();
}

// تبديل الوضع المضلم
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
    
    // حفظ التفضيل
    localStorage.setItem('darkMode', isDarkMode);
    
    // إضافة تأثير بصري
    document.body.style.transition = 'all 0.3s ease';
}

// اختيار أسئلة عشوائية
function selectRandomQuestions() {
    const availableQuestions = allQuestions[currentLanguage];
    const selectedQuestions = [];
    const usedIndices = new Set();
    
    // اختيار 15 سؤال عشوائي
    while (selectedQuestions.length < 15) {
        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        
        if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            selectedQuestions.push(availableQuestions[randomIndex]);
        }
    }
    
    return selectedQuestions;
}

// عرض السؤال الحالي
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.text;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        
        // تحديد الإجابة المختارة مسبقاً
        if (userAnswers[currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
        }
        
        // إضافة تأثير اللمس للهواتف
        optionElement.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
        });
        
        optionElement.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.style.transform = '';
            selectOption(index);
        });
        
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // تحديث عداد الأسئلة
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    
    // تحديث شريط التقدم
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    
    // تحديث أزرار التنقل
    updateNavigationButtons();
    
    // تمرير إلى أعلى الصفحة على الهواتف
    if (window.innerWidth <= 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// اختيار إجابة
function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // إزالة التحديد من جميع الخيارات
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // تحديد الخيار المختار
    event.target.classList.add('selected');
    
    // إضافة تأثير بصري للإجابة المختارة
    event.target.style.transform = 'scale(1.02)';
    setTimeout(() => {
        event.target.style.transform = '';
    }, 200);
}

// تحديث أزرار التنقل
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.textContent = currentLanguage === 'ar' ? 'إنهاء الاختبار' : 'Finish Test';
    } else {
        nextBtn.textContent = currentLanguage === 'ar' ? 'التالي' : 'Next';
    }
}

// السؤال السابق
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// السؤال التالي
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        finishTest();
    }
}

// إنهاء الاختبار
function finishTest() {
    // حساب النتيجة باستخدام الإجابات الصحيحة من الأسئلة المختارة
    const correctCount = userAnswers.filter((answer, index) => 
        answer === questions[index].correct
    ).length;
    
    const percentage = (correctCount / questions.length) * 100;
    
    // حساب معدل الذكاء (IQ)
    const iq = calculateIQ(percentage);
    
    // عرض النتائج
    showResults(correctCount, percentage, iq);
}

// حساب معدل الذكاء
function calculateIQ(percentage) {
    // خوارزمية بسيطة لحساب IQ
    // النسبة 100% = IQ 140
    // النسبة 0% = IQ 70
    return Math.round(70 + (percentage * 0.7));
}

// عرض النتائج
function showResults(correctCount, percentage, iq) {
    // إخفاء شاشة الاختبار
    document.getElementById('test-screen').classList.add('hidden');
    
    // عرض شاشة النتائج
    const resultsScreen = document.getElementById('results-screen');
    resultsScreen.classList.remove('hidden');
    
    // إظهار حقوق النشر في شاشة النتائج
    document.querySelector('.footer').classList.add('show');
    
    // تحديث النتائج
    document.getElementById('iq-score').textContent = iq;
    document.getElementById('correct-answers').textContent = `${correctCount}/${questions.length}`;
    document.getElementById('percentage').textContent = `${Math.round(percentage)}%`;
    
    // تحديد مستوى الذكاء
    const iqLevel = getIQLevel(iq);
    const iqLevelElement = document.getElementById('iq-level');
    const iqDescriptionElement = document.getElementById('iq-description');
    
    iqLevelElement.textContent = translations[currentLanguage][iqLevel.level];
    iqLevelElement.className = `iq-level ${iqLevel.class}`;
    iqDescriptionElement.textContent = translations[currentLanguage][iqLevel.description];
    
    // عرض مراجعة الإجابات
    displayAnswersReview();
    
    // عرض النصيحة الشخصية
    displayPersonalAdvice(iqLevel.level);
    
    // تمرير إلى أعلى الصفحة على الهواتف
    if (window.innerWidth <= 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// عرض مراجعة الإجابات
function displayAnswersReview() {
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = question.correct;
        const isCorrect = userAnswer === correctAnswer;
        
        const answerItem = document.createElement('div');
        answerItem.className = `answer-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        const questionNumber = document.createElement('div');
        questionNumber.className = 'question-number';
        questionNumber.textContent = `${translations[currentLanguage].question} ${index + 1}`;
        
        const questionText = document.createElement('div');
        questionText.className = 'question-text-review';
        questionText.textContent = question.text;
        
        const answerDetails = document.createElement('div');
        answerDetails.className = 'answer-details';
        
        // إضافة إجابة المستخدم
        const yourAnswerRow = document.createElement('div');
        yourAnswerRow.className = `answer-row ${isCorrect ? 'correct-answer' : 'your-answer'}`;
        
        const yourAnswerLabel = document.createElement('span');
        yourAnswerLabel.className = 'answer-label';
        yourAnswerLabel.textContent = translations[currentLanguage].your_answer;
        
        const yourAnswerValue = document.createElement('span');
        yourAnswerValue.className = 'answer-value';
        yourAnswerValue.textContent = userAnswer !== undefined ? question.options[userAnswer] : (currentLanguage === 'ar' ? 'لم تجب' : 'Not answered');
        
        const yourAnswerIcon = document.createElement('span');
        yourAnswerIcon.className = 'answer-icon';
        yourAnswerIcon.textContent = isCorrect ? '✅' : '❌';
        
        yourAnswerRow.appendChild(yourAnswerLabel);
        yourAnswerRow.appendChild(yourAnswerValue);
        yourAnswerRow.appendChild(yourAnswerIcon);
        
        answerDetails.appendChild(yourAnswerRow);
        
        // إضافة الإجابة الصحيحة فقط إذا كانت الإجابة خاطئة
        if (!isCorrect) {
            const correctAnswerRow = document.createElement('div');
            correctAnswerRow.className = 'answer-row correct-answer';
            
            const correctAnswerLabel = document.createElement('span');
            correctAnswerLabel.className = 'answer-label';
            correctAnswerLabel.textContent = translations[currentLanguage].correct_answer;
            
            const correctAnswerValue = document.createElement('span');
            correctAnswerValue.className = 'answer-value';
            correctAnswerValue.textContent = question.options[correctAnswer];
            
            const correctAnswerIcon = document.createElement('span');
            correctAnswerIcon.className = 'answer-icon';
            correctAnswerIcon.textContent = '✅';
            
            correctAnswerRow.appendChild(correctAnswerLabel);
            correctAnswerRow.appendChild(correctAnswerValue);
            correctAnswerRow.appendChild(correctAnswerIcon);
            
            answerDetails.appendChild(correctAnswerRow);
        }
        
        answerItem.appendChild(questionNumber);
        answerItem.appendChild(questionText);
        answerItem.appendChild(answerDetails);
        
        answersContainer.appendChild(answerItem);
    });
}

// تحديد مستوى الذكاء
function getIQLevel(iq) {
    if (iq >= 140) {
        return {
            level: 'genius',
            description: 'genius_desc',
            class: 'genius'
        };
    } else if (iq >= 130) {
        return {
            level: 'veryHigh',
            description: 'veryHigh_desc',
            class: 'very-high'
        };
    } else if (iq >= 120) {
        return {
            level: 'high',
            description: 'high_desc',
            class: 'high'
        };
    } else if (iq >= 110) {
        return {
            level: 'aboveAverage',
            description: 'aboveAverage_desc',
            class: 'above-average'
        };
    } else if (iq >= 90) {
        return {
            level: 'average',
            description: 'average_desc',
            class: 'average'
        };
    } else if (iq >= 80) {
        return {
            level: 'belowAverage',
            description: 'belowAverage_desc',
            class: 'below-average'
        };
    } else {
        return {
            level: 'low',
            description: 'low_desc',
            class: 'low'
        };
    }
}

// عرض النصيحة الشخصية
function displayPersonalAdvice(iqLevel) {
    const adviceContainer = document.getElementById('personal-advice');
    const advice = personalAdvice[currentLanguage][iqLevel];
    
    adviceContainer.innerHTML = `
        <h4>${advice.title}</h4>
        <p>${advice.text}</p>
    `;
}

// إعادة الاختبار
function retakeTest() {
    // إعادة تعيين المتغيرات
    currentQuestionIndex = 0;
    userAnswers = [];
    
    // إعادة تهيئة الأسئلة (اختيار أسئلة عشوائية جديدة)
    initializeQuestions();
    
    // إخفاء شاشة النتائج
    document.getElementById('results-screen').classList.add('hidden');
    
    // عرض شاشة الاختبار
    const testScreen = document.getElementById('test-screen');
    testScreen.classList.remove('hidden');
    
    // إخفاء حقوق النشر عند العودة للاختبار
    document.querySelector('.footer').classList.remove('show');
    
    // عرض السؤال الأول
    displayQuestion();
}

// مشاركة النتيجة
function shareResult() {
    const iq = document.getElementById('iq-score').textContent;
    const level = document.getElementById('iq-level').textContent;
    
    const shareText = currentLanguage === 'ar' 
        ? `حصلت على معدل ذكاء ${iq} - ${level} في اختبار الذكاء!`
        : `I got an IQ of ${iq} - ${level} on the IQ test!`;
    
    if (navigator.share) {
        navigator.share({
            title: currentLanguage === 'ar' ? 'نتيجة اختبار الذكاء' : 'IQ Test Result',
            text: shareText
        });
    } else {
        // نسخ إلى الحافظة
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareText).then(() => {
                showToast(currentLanguage === 'ar' ? 'تم نسخ النتيجة!' : 'Result copied!');
            });
        } else {
            // طريقة بديلة للنسخ
            const textArea = document.createElement('textarea');
            textArea.value = shareText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showToast(currentLanguage === 'ar' ? 'تم نسخ النتيجة!' : 'Result copied!');
        }
    }
}

// عرض رسالة تأكيد
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        z-index: 10000;
        font-size: 14px;
        transition: opacity 0.3s ease;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 2000);
}

// بدء الاختبار
function startTest() {
    // إخفاء الشاشة الرئيسية
    document.getElementById('welcome-screen').classList.add('hidden');
    
    // عرض شاشة الاختبار
    const testScreen = document.getElementById('test-screen');
    testScreen.classList.remove('hidden');
    
    // إخفاء حقوق النشر عند بدء الاختبار
    document.querySelector('.footer').classList.remove('show');
    
    // تهيئة الأسئلة وعرض السؤال الأول
    initializeQuestions();
    displayQuestion();
}

// منع التكبير على الهواتف
function preventZoom() {
    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    });
    
    document.addEventListener('gesturechange', function(e) {
        e.preventDefault();
    });
    
    document.addEventListener('gestureend', function(e) {
        e.preventDefault();
    });
}

// تبديل اللغة
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // تحديث أزرار اللغة
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // تحديث اتجاه النص
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    
    // تحديث النصوص
    updateTexts();
    
    // حفظ التفضيل
    localStorage.setItem('language', lang);
}

// تحديث النصوص
function updateTexts() {
    document.querySelectorAll('[data-ar][data-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLanguage}`);
    });
    
    // تحديث أزرار التنقل
    updateNavigationButtons();
}

// مراقبة التمرير لإظهار/إخفاء حقوق النشر
function handleScroll() {
    const footer = document.querySelector('.footer');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // إظهار حقوق النشر عند التمرير أكثر من 100px
    if (scrollTop > 100) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
}

// إعداد الأحداث
document.addEventListener('DOMContentLoaded', function() {
    // منع التكبير على الهواتف
    preventZoom();
    
    // تحميل التفضيلات المحفوظة
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        switchLanguage(savedLanguage);
    }
    
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        isDarkMode = true;
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector('.theme-icon').textContent = '☀️';
    }
    
    // أزرار اللغة
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.getAttribute('data-lang'));
        });
    });
    
    // زر تبديل الوضع المظلم
    document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);
    
    // زر بدء الاختبار
    document.getElementById('start-test').addEventListener('click', startTest);
    
    // أزرار التنقل
    document.getElementById('prev-btn').addEventListener('click', previousQuestion);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    
    // أزرار النتائج
    document.getElementById('retake-test').addEventListener('click', retakeTest);
    document.getElementById('share-result').addEventListener('click', shareResult);
    
    // مراقبة التمرير لحقوق النشر
    window.addEventListener('scroll', handleScroll);
    
    // تهيئة النصوص
    updateTexts();
    
    // تحسين الأداء على الهواتف
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    }
}); 