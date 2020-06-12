'use strict'

console.log('Here\'s a hidden message');

function submitBtn_click()
{
    if (document.getElementById('itemName').value != '')
    {
        var newItemName = document.getElementById('itemName').value;
        console.log('New Item Name: ' + newItemName);
        addNewItemRow(newItemName);
        displayCurrentCounts();
    }
    else
    {
        alert('Plesae provide the task name.');
    }
}

function lineItemChkBox_click(currentChkBox)
{
    displayCurrentCounts();
}

var ul = document.getElementById('itemList');
ul.onclick = function(event) {
    var target = getEventTarget(event);
    var clickedBtnId = target.id;
    if (target.type == 'button')
    {
        var clickedLineItem = document.getElementById(target.id);
        clickedLineItem.parentNode.removeChild(clickedLineItem);
        displayCurrentCounts();
    }
};

function getEventTarget(event) {
    event = event || window.event;
    return event.target || event.srcElement; 
}

function displayCurrentCounts()
{
    var itemCountValue = 0;
    var uncheckedCountValue = 0;
    var itemCount = document.getElementById('itemCount');
    var uncheckedCount = document.getElementById('uncheckedCount');

    var lineItemChkBoxElement = document.getElementsByName('lineItemChkBox'); 

    for (var i = 0; i < lineItemChkBoxElement.length; i++) {
        itemCountValue = itemCountValue + 1;
        if (lineItemChkBoxElement[i].checked == false) 
        {
            uncheckedCountValue = uncheckedCountValue + 1;
        }
     }
    itemCount.innerHTML = 'Item Count: ' + itemCountValue;
    uncheckedCount.innerHTML = 'Unchecked Count: ' + uncheckedCountValue;
}

function addNewItemRow(newItemNameValue) {
    var newLineItem = document.createElement('LI');

    // Get the count of <li> in the <ul> list
    var liLength = document.getElementById("itemList").getElementsByTagName("li").length
    console.log('liLength: ' + liLength);
    newLineItem.setAttribute('id', liLength.toString());
    
    var newCheckBox = document.createElement('input');
    newCheckBox.setAttribute('type', 'checkbox');
    newCheckBox.setAttribute('id', 'lineItemChkBox');
    newCheckBox.setAttribute('name', 'lineItemChkBox');
    newCheckBox.setAttribute('onclick','lineItemChkBox_click(this)');
    newLineItem.appendChild(newCheckBox);

    newLineItem.innerHTML = newLineItem.innerHTML + '&emsp;' + newItemNameValue + '&emsp;&emsp;';

    var newCommandBtn = document.createElement("input");
    newCommandBtn.setAttribute('type', 'button');
    newCommandBtn.setAttribute('id', liLength.toString());
    newCommandBtn.setAttribute('name', 'lineItemBtn');
    newCommandBtn.setAttribute('onclick','lineItemBtn_click(this)');
    newCommandBtn.value = 'X';
    newLineItem.appendChild(newCommandBtn);

    var newHR = document.createElement('HR');
    newLineItem.appendChild(newHR);

    document.getElementById('itemList').appendChild(newLineItem);
    
    document.getElementById('itemName').value = '';
    
  }


