Feature: Add Item to Cart Action
  As a customer I would like to add an item to the cart so that I can order it

  Scenario: (Normal) Successful Add Item to Cart with Correct Search
    Given customer is on the Home Page
    When customer inputs "birkenstock and socks" into search text field
    And customer selects "birkenstock and socks" sticker
    Then customer adds sticker to cart

  Scenario: (Alternate) Successful Add Item to Cart through Category Selection
    Given customer is on the Home Page - Alternative
    When selects the stickers filter category option - Alternative
    And customer inputs "birkenstock and socks" into search text field - Alternative
    And customer selects "birkenstock and socks" sticker - Alternative
    Then customer adds sticker to cart - Alternative

  Scenario: (Error) Incomplete Addition to Cart
    Given customer is on the Home Page - Error
    When customer inputs "birkun nd soks" into search text field - Error
    Then Customer is unable to find search results for “birkenstock and socks” sticker and cannot add it to cart - Error