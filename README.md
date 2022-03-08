Create a metadata driven dashboard. It contains different configurable components.

Components:

1. List of products - Display a list of products. Each product has a title, picture, category, price and description. Please use this endpoint to fetch products: https://fakestoreapi.com/products

2. Total Products - A card that displays the total count of products. Endpoint:  https://fakestoreapi.com/products

3. Customers - A card that displays the customer details (name, email, address and phone no) registered on the website. https://fakestoreapi.com/users

4. Latest product - This card will display any 1 random product (picture, title, category, price). https://fakestoreapi.com/products

5. Display categories - This card will display a list of different product categories. URL: https://fakestoreapi.com/products/categories

The app should allow you to create multiple dashboards which will be a combination of the above given components. Every time you create a new dashboard, allow the user to add these components to the dashboard. Once the dashboard is configured, allow the user to save it with a name (e.x. Dashboard 1, Dashboard 2, etc). Please use something for maintaining the state. Please add functionality to load the previously configured dashboard, choose a dashboard and display all the components on the UI.

Please also make sure that you design a good UI - any framework or library is allowed (e.g. Bootstrap). Use the Fake Store API URLs to fetch data.
