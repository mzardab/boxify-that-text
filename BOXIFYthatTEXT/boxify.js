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
    var submitId = boxId = "-submit";
    var listCounter = 0;

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

    //Define form Submit buttom
    var submitButton = document.createElement("BUTTON");
    submitButton.setAttribute("id", submitId);
    submitButton.setAttribute("type", "BUTTON");
    submitButton.setAttribute("value", "SUBMIT");
    submitButton.setAttribute("class", "boxify-text-submit-button")
    submitButton.setAttribute("parent-text-box", targetId);
    submitButton.innerHTML = "SUBMIT";

    //Appends textbox elements to html file
    document.getElementById(targetId).appendChild(box);
    document.getElementById(targetId).appendChild(addButton);
    document.getElementById(targetId).appendChild(listWrapper);
    document.getElementById(targetId).appendChild(submitButton);


    //Defining listener for Add BUTTON
    document.getElementById(buttonId).onclick = function()
    {
      var text = document.getElementById(boxId).value;
      var list = document.createElement("LI");
      list.setAttribute("class", "list-elements");
      list.setAttribute("id", listCounter);

      var deleteButton = document.createElement("BUTTON");
      deleteButton.setAttribute("id", "delete-element");
      deleteButton.innerHTML = "DELETE";
      deleteButton.setAttribute("parent-div", listCounter);

      if(text == []) //check if box is empty
      {
        console.log('Textbox empty');
        alert("Can't BOXIFYtheTEXT(tm) if the box is empty!");
        return 0;
      }else{
        list.innerHTML = text;
        document.getElementById(listId).appendChild(list); //appends to list
        document.getElementById(listCounter).appendChild(deleteButton);
        listCounter++;
        document.getElementById(boxId).value = []; //reset text box
      };
      //Defining listener for Delete BUTTON
      document.getElementById("delete-element").onclick = function()
          {
              var target = this.getAttribute("parent-div");
              document.getElementById(target).remove();
          };
    };


    //Defining listener for Submit BUTTON
    document.getElementById(submitId).onclick = function()
    {
      var arrayOutput = [];
      var listHolder = document.getElementById(listId).getElementsByTagName("li");

      for(var i=0, im=listHolder.length; im>i; i++)
        text.push(lis[i].firstChild.nodeValue);

      alert(texts);
    };


    /** CONFIG VAR */
    //Can add more functionality through here
    if(config == undefined){ //if config param empty
        return 0;
    }
    elseif(config["display-list"] == false)
    {
      document.getElementById(listId).style.display = "none";
      console.log(config["display-list"]);
    };

    //Function to delete List Items in Javascript without jquery (tricky!)
    Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
    }
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
        for(var i = this.length - 1; i >= 0; i--) {
            if(this[i] && this[i].parentElement) {
                this[i].parentElement.removeChild(this[i]);
            }
        }
    }
};
