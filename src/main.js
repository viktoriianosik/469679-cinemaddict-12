
import {createProfileTemplate} from './view/profile.js';
import {createMenuTemplate} from './view/menu.js';
import {createSortTemplate} from './view/sort.js';
import {createFilmsTemplate} from './view/films.js';
import {createFilmTemplate} from './view/film.js';
import {createShowMoreButtonTemplate} from './view/show-more-button.js';
import {createStatisticsTemplate} from './view/statisctics.js';

const FILMS_COUNT = 5;
const FILMS_EXTRA_COUNT = 2;

const renderTemplate = (container, position, template) => {
  container.insertAdjacentHTML(position, template);
};

const headerElement = document.querySelector(`.header`);

renderTemplate(headerElement, `beforeend`, createProfileTemplate());

const mainElement = document.querySelector(`.main`);

renderTemplate(mainElement, `beforeend`, createMenuTemplate());
renderTemplate(mainElement, `beforeend`, createSortTemplate());
renderTemplate(mainElement, `beforeend`, createFilmsTemplate());

const filmsList = mainElement.querySelector(`.films-list`);
const filmsListContainer = filmsList.querySelector(`.films-list__container`);

for (let i = 0; i < FILMS_COUNT; i++) {
  renderTemplate(filmsListContainer, `beforeend`, createFilmTemplate());
}

renderTemplate(filmsList, `beforeend`, createShowMoreButtonTemplate());

const filmsListExtra = mainElement.querySelectorAll(`.films-list--extra`);

for (let i = 0; i < FILMS_EXTRA_COUNT; i++) {
  renderTemplate(filmsListExtra[0].querySelector(`.films-list__container`), `beforeend`, createFilmTemplate());
  renderTemplate(filmsListExtra[1].querySelector(`.films-list__container`), `beforeend`, createFilmTemplate());
}

const footerElement = document.querySelector(`.footer`);
const statisticsElement = footerElement.querySelector(`.footer__statistics`);

renderTemplate(statisticsElement, `beforeend`, createStatisticsTemplate());

