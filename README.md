# weblocationlist
Full-stack application that covers following:
Implement CRUD operations for Location based services. Implementation should consist of the following functionalities: 
Create new object with following data:
Name
Address
City 
Longitude
Latitude
Read location data (list of locations with details, details of single location by location ID). 
Update locations (name, address, city, longitude, latitude)
Delete locations

Database should contain 2 tables: locations and cities, with city property linking the two tables.


Create web application which will have following screens:
List of locations
List/table with columns: name, address, city, longitude, latitude, delete location button.
name of the location in each row is a link to location details
Button Create new location which leads to Create new location screen.
Button Delete location prompts the user with “Are you sure?” question; on confirmation deletes the location and reloads the screen.
Location details screen
Showing location details and Google Maps location based on longitude and latitude. 
Edit location button (leads to editing screen which has the same look and functionality as create new location screen, but does update instead of creation of new locations. 
Create new location screen:
contains the following input fields: name, address, city, longitude, latitude;
Name (20)
Address (50)
City (dropdown menu with items from City table)
Longitude
Latitude 
Save button (leads back to List of locations on success, remains on the screen on failure)
Cancel button (leads back to List of locations screen). 
Login (authentication and authorization with JWT). 
Responsivnes.

List of cities for City table is below:
Berlin
Amsterdam
Ljubljana
Belgrade
Zagreb
Sarajevo
Rome
Paris
Madrid
Istanbul
Moscow
Stockholm

Technologies used: Angular, ASP.NET CORE WebAPI and MYSQl
