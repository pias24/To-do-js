//=====================dom part start
let headInput                                                       = document.querySelector('.headInput')
let headButton                                                      = document.querySelector('.headButton')
let todoList                                                        = document.querySelector('.todoList')
//======================function part start
headButton.addEventListener('click' , ()=>{
    if(headInput.value ==''){
        alert('enter your value')
    }else{
        //==================create element
        let singleTodo = document.createElement('div')
        let singletodoInput = document.createElement('input')
        let editButton = document.createElement('editButton')
        let removeButton = document.createElement('removeButton')
        //==================makeing child
        todoList.appendChild(singleTodo)
        singleTodo.appendChild(singletodoInput)
        singleTodo.appendChild(editButton)
        singleTodo.appendChild(removeButton)
        //===================adding class name
        singleTodo.classList.add('singleTodo')
        editButton.classList.add('editButton')
        removeButton.classList.add('removeButton')
        //====================adding content to the tag
        editButton.innerHTML    = 'edit'
        removeButton.innerHTML  = 'Delete'
        //=====================adding data into input field
        singletodoInput.value   = headInput.value
        headInput.value         = ''
        //=====================setting input attribute
        singletodoInput.setAttribute('readonly' , 'readonly')
        //=====================deleting data
        removeButton.addEventListener('click' , ()=>{
            singleTodo.remove()
        })

    }
})