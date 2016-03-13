/*function for drawing text box take takes div/location name for now
draw textbox
datastructure to save list
displaying list to page/deleting specific elements
submit button to convert to array
*/

//GLOBAL CONFIG VAR
function newBox(targetId, boxId, config)
  {
    var buttonId = boxId + "-button"; //creates unique signifier for button
    var listId = boxId + "-list"; //creates unique signifier for list

    var box = document.createElement("INPUT"); //create textbox
    box.setAttribute("type", "text");
    box.setAttribute("value", "test");
    box.setAttribute("class", "boxify-text-box")
    box.setAttribute("name", boxId);
    box.setAttribute("id", boxId);

    var addButton = document.createElement("BUTTON"); //creates add button
    addButton.setAttribute("id", buttonId);
    addButton.setAttribute("type", "BUTTON");
    addButton.setAttribute("value", "ADD");
    addButton.setAttribute("class", "boxify-text-add-button")
    addButton.setAttribute("parent-text-box", targetId);
    addButton.innerHTML = "ADD";

    var listWrapper = document.createElement("DIV");
    listWrapper.setAttribute("id", listId);

    document.getElementById(targetId).appendChild(box);
    document.getElementById(targetId).appendChild(addButton);
    document.getElementById(targetId).appendChild(listWrapper);


    //Define form Submit buttom

    //Defining listener for Add BUTTON
    document.getElementById(buttonId).onclick = function()
    {
      var text = document.getElementById(boxId).value;
      var list = document.createElement("LI");

      list.setAttribute("class", "willy");
      list.innerHTML = text;
      document.getElementById(listId).appendChild(list); //appends to list
    };


    /** CONFIG VAR */
    if(config["display-list"] == false) //if display list is off, hide list
    {
      document.getElementById(listId).style.display = "none";
    console.log(config["display-list"]);
    };
};
