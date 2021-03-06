/*
   New Perspectives on HTML, XHTML, and DHTML 4th Edition
   Tutorial 14
   Review Assignment

   Author:   
   Date:     

   Filename: form.js



   Functions List:

   todayTxt()
      Returns the current date in the format mm-dd-yyyy

   initForm()
      Sets up and initializes the Web form.

   productCosts()
      Returns the total product costs

   shipExpense()
      Stores the value of the selected shipping option

   calcTotal()
      Calculates the total cost of the order

   calcShipping()
      Calculates the total cost of shipping and updates the
      total cost of the order

   calcCost()
      Calculates the cost of each order and updates the total 
      cost

   validateForm()
      Validates the form prior to submission

   resetForm()
      Resets the Web form and Web page


*/
//INITIALIZING AN EVENT HANDLER: RUN 'initForm' function when page loads
window.onload= initForm;
//INITIALIZE THE CONTENTS OF THE WEB PAGE AND FORM
function initForm(){
    document.forms[0].date.value=todayTxt();
    document.forms[0].qty1.focus();
    
    document.forms[0].onsubmit = validateForm;
    document.forms[0].onreset = resetForm;
    
    document.forms[0].qty0.onblur = calcCost;
    document.forms[0].qty1.onblur = calcCost;
    document.forms[0].qty2.onblur = calcCost;
    document.forms[0].qty3.onblur = calcCost;
    document.forms[0].qty4.onblur = calcCost;
    
    document.forms[0].shipping.onchange = calcShipping;
}

//RETURN THE SUM OF THE TOTAL COSTS OF THE PRODUCTS IN THE ORDER FORM
function productCosts(){
    oform = document.forms[0];
    pc0 = parseFloat(oform.cost0.value);
    pc1 = parseFloat(oform.cost1.value);
    pc2 = parseFloat(oform.cost2.value);
    pc3 = parseFloat(oform.cost3.value);
    return (pc0+pc1+pc2+pc3);
}
//RETURN THE COST OF THE SELECTED SHIPPING OPTION
function shipExpense(){
    sindex = document.forms[0].shipping.selectedIndex;
    return parseFloat(document.forms[0].shipping.options[sindex].value);
}

//DISPLAY THE COST OF SALES TAX AND ALSO THE TOTAL COST OF THE ORDER
function calcTotal(){
    oform = document.forms[0];
    
    ordercost = productCosts();
    ordertax = ordercost*0.05;
    ordership = shipExpense();
    ordertotal = ordercost+ordertax+ordership;
    
    oform.tax.value = ordertax.toFixed(2);
    oform.total.value = ordertotal.toFixed(2);
}

//DISPLAY THE COST OF THE SELECTED SHIPPING OPTION AND TO UPDATE TOTAL ORDER COSTS
function calcShipping(){
    document.forms[0].shipcost.value = shipExpense();
    calcTotal();
}

//DISPLAY THE COST OF THE QUANTITY OF ITEMS ORDERED BY CUSTOMER AND UPDATE THE TOTAL COST OF THE ORDER
function calcCost(){
    var iNum = (this.id).slice(3);
    
    oform = document.forms[0];
    price = oform.elements["price"+iNum];
    qty = oform.elements["qty"+iNum];
    cost = oform.elements["cost"+iNum];
    
    reqty = /^\d+$/;
    
    if (reqty.test(qty.value)) {
        cost.value = (price.value*qty.value).toFixed(2);
        calcTotal();}
      else {
          alert("Please enter an integer greater than or equal to 0");
          qty.value=0;
          qty.focus();
      }
    }


//ENSURE THAT THE FORM HAS BEEN FILLED OUT CORRECTLY BEFORE ITS SUBMITTED
function validateForm(){
    if (document.forms[0].shipping.selectedIndex ==0) {
        alert("You must select a shipping option");
        document.forms[0].shipping.focus();
        return false;
    }  else {
        return true;
    }
}

//
function resetForm() {
    location.reload();
}

function todayTxt() {
   var Today=new Date();
   return Today.getMonth()+1+"-"+Today.getDate()+"-"+Today.getFullYear();
}
