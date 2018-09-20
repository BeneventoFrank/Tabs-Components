


class TabLink {
  constructor(element) {
    this.element = element;
    
    // Get the custom data attribute on the Link
     this.data = element.dataset.tab;

    // Using the custom data attribute get the associated Item element
     this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    
    
    // Using the Item element, create a new instance of the TabItem class
     this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
     this.element.addEventListener('click',(event)=>{this.select(event)})
  };

   select(event) {

  // Get all of the elements with the tabs-link class
     const links = document.querySelectorAll('.tabs-link');
     console.log('tablinks = ', links)

  // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
     Array.from(links).forEach(element => {
       element.classList.remove('tabs-link-selected');
       console.log('this is an element', element)
     });
     console.log('this is ',this)
     // Add a class named "tabs-link-selected" to this link
     this.element.classList.toggle('tabs-link-selected');
    
     // Call the select method on the item associated with this link
     this.tabItem.select();

  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all items elements from the DOM
    let items = document.querySelectorAll('.tabs-item-selected');
    
    // Remove the class "tabs-item-selected" from each element
    items = Array.from(items).forEach(element=>{
      element.classList.remove('tabs-item-selected')
    })
    this.element.classList.add('tabs-item-selected')
    // Add a class named "tabs-item-selected" to this element 
    console.log('this element is - ',this.element)
  }
}

// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map((element)=>{new TabLink(element)})

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array