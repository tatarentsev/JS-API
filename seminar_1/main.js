const dataArticle = [
    {
        "title": "Погода",
        "description": "Сегодня коротко о погоде в Краснодаре, солнечно, ветрено, сухо."
    },
    {
        "title": "Время",
        "description": "Время начало идти быстрее, об этом предсказывали ученые в 1988 г."
    }
]

const contentEl = document.querySelector('.content');
const titleEl = document.createElement('h1');
titleEl.textContent = "Список статей";
const boxEl = document.createElement('div');
boxEl.classList.add('box');
boxEl.style.border = '1px solid grey';
boxEl.style.padding = '10px';
boxEl.style.borderRadius = '15px';
const buttonAdd = document.createElement('button');
buttonAdd.classList.add('add__button');
buttonAdd.textContent = "Добавить статью";

dataArticle.forEach(element => {
    createArticle(element.title, element.description);
});

buttonAdd.addEventListener('click', function () {
    const newArticle = {
        "title": "Новая статья",
        "description": "Новое описание статьи"
    }
    
    const articleItem = createArticle(newArticle.title, newArticle.description);
    boxEl.append(articleItem);
});


function createArticle(title, desc) {
    const articleEl = document.createElement('div');
    articleEl.classList.add('article');
    const titleArticle = document.createElement('h3');
    titleArticle.textContent = title;
    const paragraphArticle = document.createElement('p');
    paragraphArticle.textContent = desc;
    paragraphArticle.classList.add('paragraph__article');
    const buttonChange = document.createElement('button');
    buttonChange.classList.add('re__button');
    buttonChange.textContent = "Редактировать";
    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add("del__button");
    buttonDelete.textContent = "Удалить";

    contentEl.append(titleEl);
    articleEl.append(titleArticle);
    articleEl.append(paragraphArticle);
    articleEl.append(buttonChange);
    articleEl.append(buttonDelete);
    boxEl.append(articleEl);
    contentEl.append(boxEl);
    contentEl.append(buttonAdd);

    buttonChange.addEventListener('click', function (e) {
        titleArticle.textContent = prompt('Введите новый текст заголовка');
        paragraphArticle.textContent = prompt('Введите новое описание статьи');
    });

    buttonDelete.addEventListener('click', function (e) {
        boxEl.removeChild(articleEl);
    });

    return contentEl;
}