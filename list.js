/*
   Filename: list.js

   Variable List:

   Names: Contains the product or event name
   Prices: Contains the product price or event date.
   Descriptions: Contains the product description
   Images: Contains a thumbnail product image
   Images2: Contains a larger product image

*/
//ADDING THE ARRAYS FOR PRODUCTS
var aName = ["An official Dogi(Uniform)", "Black Belts","Colored Belts", "Shinkyokushin t-shirt"];
var aPrice = [50.00, 14.99, 7.99, 14.99];
var aDescription = ["An official Dogi uniform used when practicing", "bla", "bla", "bla"];
var aImage = ["shinkyokushin-uniform.jpg", "black%20belt.jpg", "colored%20belts.jpg", "shinkyokushin%20tshirt.jpg"];


function getID()
{
  var url = window.location.toString();
  var i = 0;
  if(url.indexOf("?id=")>0)
  {
    var start = url.lastIndexOf("?id=")+ 4;
    i = url.substring(start);
  }
  return i;
}