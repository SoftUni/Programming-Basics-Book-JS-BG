/**
 * drawRating, рисува HTML, който е нужен за визуализацията на звездичките
 * @param {Number} rating
 * @return {String} html
 */
function drawRating(rating) {
    // низ от HTML
    let html = "";

    // краен брой звезди
    let allStars = 10;

    // всички пълни звезди
    let fullStars = Math.floor(rating / allStars);

    // всички празни звезди
    let emptyStars = Math.floor((100 - rating) / allStars);

    // всички наполовина запълнени звезди
    let halfStars = allStars - fullStars - emptyStars;

    // построяване на HTML
    for (let i = 0; i < fullStars; i++) {
        html += '<img src="images/full-star.png">';
    }
    for (let i = 0; i < halfStars; i++) {
        html += '<img src="images/half-star.png">';
    }
    for (let i = 0; i < emptyStars; i++) {
        html += '<img src="images/empty-star.png">';
    }

    // връщане на готовият HTML
    return html;
}

/**
 * drawHandler, функция която се изпълнява, когато потребителя клика върху
 * бутона "Draw".
 * @return {Void}
 */
function drawHandler() {
    // намиране на инпут елемента, който държи числото на рейтинга
    // и вземане на неговата стойност
    let ratingInput = document.getElementById("input-rating");

    // по подразбиране всички стойности от форми идват като "string"
    // за това се налага да ги обърнем в число чрез "parseInt()"
    let rating = parseInt(ratingInput.value);

    // намиране на елемнта, който държи звездичките
    let ratingHolder = document.getElementById("ratingHolder");

    // генериране на HTML на база въведеният от потребителя рейтинг
    let html = drawRating(rating);

    // рисуване на страницата
    ratingHolder.innerHTML = html;
}

/**
 * appInit, отговаря за първоначалното изпълнение на нашата програма
 * @return {Void}
 */
function appInit() {
    // намиране на бутон елемента в HTML
    let button = document.getElementById("input-draw");

    // Закачане към събитието "click" за изпълнение на рисуването
    button.addEventListener("click", drawHandler);

    // първоначално изрисуване на рейтинга
    drawHandler();
}

/**
 * Стартиране на приложението асинхронно, чрез "event listener".
 * Слушане за "DOMContentLoaded".
 */
document.addEventListener("DOMContentLoaded", appInit);