/**
 * 1.Store all the data localStorages
 * 2.Give another colums as option to delete the book
 * 3.Add a Scroll bar to the view
 * 
 */
//constructor
function Book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;
}

//Display Constructor
function Display(){}
//Add methos to display prototype
Display.prototype.add=function(book){
    console.log("Adding to UI");
    let tableBody=document.getElementById('tableBody');
    console.log(tableBody);
    let uiString=`
    <tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
   </tr>
    `
  console.log(tableBody);
  tableBody.innerHTML=uiString
}
//implement the clear function
Display.prototype.clear=function(){
    let libraryForm=document.getElementById('libraryform');
    libraryform.reset();
}
//implement the validate function
Display.prototype.validate=function(book){
    if(book.name.length<2 || book.author.length<2){
      return false;
    } else{
        return true;
    }
    
}
Display.prototype.show=function (type,message) {
  let alertMessage=document.getElementById('message');

  alertMessage.innerHTML=`
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Message:</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  `
  setTimeout(function(){
   alertMessage.innerHTML=''
  },5000)
}
//add submit event listener to form
let libraryForm=document.getElementById('libraryform');
libraryForm.addEventListener('submit',LibbarySubmitFunction);
function LibbarySubmitFunction(e){
  
 
  let name=document.getElementById('bookName').value;
  let author=document.getElementById('Author').value;
  let type;
 //fiction,programming,cooking
 let fiction=document.getElementById('fiction')
 let programming=document.getElementById('programming')
 let cooking=document.getElementById('cooking')
 
 if(fiction.checked)type=fiction.value;
 else if(programming.checked)type=programming.value;
 else type=cooking.value;
 
 
  let book =new Book(name,author,type)
  const bookInformation={
    name,
    author,
    type
  }
  let display=new Display();
  display.add(book);
  display.clear();
  if(display.validate(book)){
     display.add(book);
     display.clear();
     display.show("Success","Your book has been succesfully added")
  }else{
    display.show("danger","Sorry you can not add this book");
  }
  e.preventDefault();
  console.log(bookInformation)
  console.log("The Form has Submitted");
}
