



function Book(title, author, isbn){
    this.title= title;
    this.author= author;
    this.isbn= isbn;
}

function UI(){};


    UI.prototype.addBook = function(newbook){
        let list= document.getElementById("book-list");
        let row= document.createElement("tr");
        
        row.innerHTML=`
        <td>${newbook.title}</td>
        <td>${newbook.author}</td>
        <td>${newbook.isbn}</td>
        <td><a href="#" class="delete">X<a></td>
        `;
        list.appendChild(row);
    };

    UI.prototype.deleteBook = function(target){
        if(target.className === 'delete'){
          target.parentElement.parentElement.remove();
        }
      }

    UI.prototype.clear= function (){
         document.getElementById("title").value=" ";
         document.getElementById("author").value=" ";
         document.getElementById("isbn").value=" ";
    };

    

    UI.prototype.showAlert = function(message, className ){
        const div = document.createElement('div');
        div.className= `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container= document.querySelector('.container');
        let form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    document.getElementById("sub").addEventListener("click", getInfo);

    function getInfo(e){
        let title= document.getElementById("title").value;
        let author= document.getElementById("author").value;
        let isbn= document.getElementById("isbn").value;
    
        let newBook= new Book(title, author, isbn);
        console.log(newBook);
        let test= new UI();
        
        if(title ==='' || author === ''|| isbn === ''){
            test.showAlert('Please fill in all fields', 'error');
        } else{
            test.addBook(newBook);
            test.showAlert('Book added', 'success');

           
            test.clear();
        }

        e.preventDefault();
    }

    document.getElementById('book-list').addEventListener('click', function(e){
        const ui = new UI();
        ui.deleteBook(e.target);
      
        ui.showAlert('Book removed', 'success');
        e.preventDefault();
      })

