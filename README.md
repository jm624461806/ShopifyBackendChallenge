# Shopify Backend Developer Intern Challenge - Summer 2022
This is an inventory tracking web application with frontend built by React and served on Express with NodeJS. The data is stored in MongoDB Atlas.  
The extra feature I chose to implement is **Push a button export product data to a CSV**

## Instructions
### Install NodeJS
- You need to install the NodeJS first before you can run this application.[Link to NodeJS download page](https://nodejs.org/en/download/)

- After you have downloaded the NodeJS, make sure add the node to the path environment variable. 

- Test Node and NPM works: open command prompt and type ```node -v```. You should see the downloaded version of node.

### Running the application
- Download or clone the codes from the github page.
- Open two seperate terminals and both locate to the folder where this application is.
- Type ```npm install``` in one of the terminals to install all the dependencies this application needs.
- After you have installed all the applications, you can type ```npm start``` in one terminal and ```node server.js``` in another to start the web application.
- You can see a web page prompted out with three different buttons (```Get Inventories```, ```Hide Inventories``` and ```Create Inventory Item```)

### Using the application
- Get Inventories:  
After you click this button, a list of inventories will be shown below with the data of inventory item name, inventory item number along with ```edit```, ```delete``` and ```export to CSV``` buttons.
- Hide Inventories:  
After you click this button, the list of inventoirs will be hidden.
- Create Inventory Item:  
After you click this button, you will be directed to a create inventory page where you can type the name of the inventory item and how many of them in the input fields and create this inventory which will be further backed in the database. After you have created this inventory, you will be redirected to the homepage.
- Edit:  
After you click this button, you will be directed to a edit inventory page where you can edit the name and number of this specific inventory item you want to edit. After you finish the editting, you will be redirected to the homepage.
- Delete:  
After you click this button, the specific inventory will be deleted both from the application UI and database.
- Export to CSV:  
After you click this button, the data of current inventory stored in the databse will be exported to a CSV file and you can download to your local computer.
