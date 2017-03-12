$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumberJava.feature');
formatter.feature({
  "line": 1,
  "name": "Add Item to Cart Action",
  "description": "As a customer I would like to add an item to the cart so that I can order it",
  "id": "add-item-to-cart-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "(Normal) Successful Add Item to Cart with Correct Search",
  "description": "",
  "id": "add-item-to-cart-action;(normal)-successful-add-item-to-cart-with-correct-search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "customer is on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "customer inputs \"birkenstock and socks\" into search text field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "customer selects \"birkenstock and socks\" sticker",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer adds sticker to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.givenNormalFlow()"
});
formatter.result({
  "duration": 3747892458,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.whenNormalFlow()"
});
formatter.result({
  "duration": 2230673834,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.andNormalFlow()"
});
formatter.result({
  "duration": 5042055792,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.thenNormalFlow()"
});
formatter.result({
  "duration": 119006208,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "(Alternate) Successful Add Item to Cart through Category Selection",
  "description": "",
  "id": "add-item-to-cart-action;(alternate)-successful-add-item-to-cart-through-category-selection",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "customer is on the Home Page - Alternative",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "selects the stickers filter category option - Alternative",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "customer inputs \"birkenstock and socks\" into search text field - Alternative",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "customer selects \"birkenstock and socks\" sticker - Alternative",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "customer adds sticker to cart - Alternative",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.givenAlternativeFlow()"
});
formatter.result({
  "duration": 3014199042,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.whenAlternativeFlow()"
});
formatter.result({
  "duration": 2904522958,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.andAlternativeFlow()"
});
formatter.result({
  "duration": 2355486167,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.andAlternativeFlowTwo()"
});
formatter.result({
  "duration": 5035402875,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.thenAlternativeFlow()"
});
formatter.result({
  "duration": 96279666,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "(Error) Incomplete Addition to Cart",
  "description": "",
  "id": "add-item-to-cart-action;(error)-incomplete-addition-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "customer is on the Home Page - Error",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "customer inputs \"birkun nd soks\" into search text field - Error",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Customer is unable to find search results for “birkenstock and socks” sticker and cannot add it to cart - Error",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.givenErrorFlow()"
});
formatter.result({
  "duration": 3609248292,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.whenErrorFlow()"
});
formatter.result({
  "duration": 167863084,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.thenErrorFlow()"
});
formatter.result({
  "duration": 19666,
  "status": "passed"
});
});