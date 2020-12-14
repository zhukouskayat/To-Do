/* eslint-disable import/extensions */

import {
  createElement,
  clearRootElement
} from "../../helpers.js";

import todoStorage from "../../model/todoStorage.js";

function renderTitle(doc, titleText) {
  const h1 = createElement(doc, "h1", "title-statistics");
  h1.innerHTML = titleText;
  return h1;
}

function renderInfoBlock(doc) {
  const info = createElement(doc, "div");

  const totalCount = createElement(doc, "p", "statistic-total");
  totalCount.innerHTML = `Total Todo Count: ${todoStorage.totalTodoCount()}`;
  info.append(totalCount);

  const doneCount = createElement(doc, "p", "statistic-done");
  doneCount.innerHTML = `Done Todo Count`;
  info.append(doneCount);

  const postponeCount = createElement(doc, "p", "statistic-postpone");
  postponeCount.innerHTML = `Postpone Todo Count`;
  info.append(postponeCount);

  const deleteCount = createElement(doc, "p", "statistic-delete");
  deleteCount.innerHTML = `Delete Todo Count`;
  info.append(deleteCount);

  return info;
}

export default function renderStatisticsPage(doc) {
  const rootElement = clearRootElement(doc);

  const statisticContainer = createElement(doc, "div", "statistic-container");
  rootElement.append(statisticContainer);
  statisticContainer.append(renderTitle(doc, "Statistics:"));
  statisticContainer.append(renderInfoBlock(doc));
}