# Lily's E-commerce API
---
## Planning Story
First the wireframe was made to have an idea, of how the app would look. Following the wirefram the html code was made to match the wireframe
as best as possible. The functionality was made first, using curl was able to communicate with the corresponsing API. Proceeded to create flowers and order components that would be used during the order process. Tested out CRUD request to make sure the API requests were working. After all the functionality was
up and running, the styling of the site was then made.
---
## App Description
One Lily at at time, is an e-commerce store. The user must create an account and then log in to purchase one lily at a time. Once a lily is added to the cart an order is created. Customers are able to update the quantity of the lily in their cart or delete the item in the cart entirely. Order history is also available for past orders. Checkout is handled by stripe. Credit cards are accepted.
---
## Catalog of Routes
* /order - create an order.
* /orders - show all orders (order history).
* /orders/:id - delete an order.
* /orders/:id - update an order.

---
## Technologies Used
1. Express
2. MongoDB
3. JavaScript
4. Mongoose
5. Node js
---
## Unsolved Problems
1. Unable to add reviews to the flowers
2. Unable to add more than one type of flower to the order
---
## Lily's E-Commerce ERD
![ERD](https://media.git.generalassemb.ly/user/30427/files/a6066f00-0736-11eb-8bc4-613b00c56e9c)
---
## LINKS
[API SITE]('https://mighty-mesa-16767.herokuapp.com/')
[CLIENT SITE] ('https://sei-dev-ish.github.io/lilys-client/')
[API REPO] ('https://github.com/SEI-Dev-ish/lilys-api')
[CLIENT REPO] ('https://github.com/SEI-Dev-ish/lilys-client)
