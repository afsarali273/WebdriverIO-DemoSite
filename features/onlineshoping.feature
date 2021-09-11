Feature: SignUp and Purchase Product

    Scenario:TC-001 create a new user credentials
        Given I am on the home page
        Then Navigate to SignUp page
        And create an account with random username

    Scenario:TC-002 Sign In with newly created user credentials
        Given I am on the Sign In Page
        When Login using newly created credentials
        Then I shall verify the address information in my addresses section


    Scenario:TC-003 Add product to Online Cart and checkout
        Given I am on the Sign In Page
        When Login using newly created credentials
        When I add below products to cart
            | category | subCategory    | name                        | model  | quantity |
            | Dresses  | Casual Dresses | Printed Dress               | demo_3 | 2        |
            | Women    | T-Shirts       | Faded Short Sleeve T-shirts | demo_1 | 3        |
        Then I shall be able to Buy the product



