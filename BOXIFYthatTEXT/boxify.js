/*function for drawing text box take takes div/location name for now
draw textbox
datastructure to save list
displaying list to page/deleting specific elements
submit button to convert to array
*/
function newBox(id)
  {
    var listItems= []; //Holds the list before submission

    document.getElementById(id).innerHTML = "<input type='text' id='boxify-textbox' name='"+id+"-textbox'/>";
    console.log("test");


};

function submitForm()
{
  var outputArray = listItems;
};
