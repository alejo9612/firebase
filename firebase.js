//ul
const taskInput = document.querySelector('#taskInput');
const taskUl = document.querySelector('#taskContainer');
///DB
ProyectDB();
const database = firebase.database();
const taskRef = database.ref('task');
taskRef.once('value', paintTask);
delletetask();
update()


function ProyectDB(){
    
var firebaseConfig = {
    apiKey: "AIzaSyCm9R4uSORTv2z4Exg2I43_pcfsOGoSWqo",
    authDomain: "proyect-firebase-a4581.firebaseapp.com",
    databaseURL: "https://proyect-firebase-a4581.firebaseio.com",
    projectId: "proyect-firebase-a4581",
    storageBucket: "proyect-firebase-a4581.appspot.com",
    messagingSenderId: "405709178241",
    appId: "1:405709178241:web:fd5f67310d474a49ed5480"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
}

function addTaskbase(){
    const name = taskInput.value;

    taskRef.push({
    name: name,
    isComplete: false
    });

    taskInput.value ='';
}
function delletetask() {
    const name = taskInput.value;

    taskRef.deleted({
        name: name,
        isComplete: false
    })
    taskInput.value = '';
}
function update(){
    taskRef.update({
        "-M7VJC8fDOytBm3A1Xyi" : {
            name : "ojo nota 5",
            isCopleted: false
        }
    })
}

function paintTask(data) {
    const result = data.val();
    let taskLi = ""
    for(Key in result){
        const task = result[Key];
        taskLi += `<li>${task.name}</li>`;
    }
    taskUl.innerHTML = taskLi;
}

