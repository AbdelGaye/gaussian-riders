Feature: Access Index Page and Administrator View

  Given the User uses Chrome or Firefox
    And the User wants to access the index page
    When the User browses to the index page
    Then the index page is generated

  Given the wants to use the Administrator View wih Chrome or Firefox
    When the User clicks on the Administrator View button from the index page
    Then the administrator view page is generated


