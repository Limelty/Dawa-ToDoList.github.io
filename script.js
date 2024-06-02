let counter = 0;
let userPoints = 0;
let userLevel = 1;
let levelThresholds = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

document.getElementById('submit-btn').addEventListener('click', function () {
    var inputName = document.getElementById('Todo-Name').value;
    var inputInf = document.getElementById('Todo-inf').value;
    var inputDate = document.getElementById('Todo-date').value;

    if (!inputName && !inputInf && !inputDate) {
        alert("The Information and Name must be filled");
        return;
    }

    var newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <div>
            <h1>${inputName || "[Content Name]"}</h1>
            <p style="font-weight: bold">${inputInf || "[Content Information]"}</p>
            <p style="font-weight: bold">${inputDate || "[The Content due date]"}</p>
        </div>
        <div>
            <button style="padding: 5px 10px; background-color: rgb(219, 215, 83)">Remove</button>
            <button style="padding: 5px 10px; background-color: rgb(219, 215, 83)">Edit</button>
            <button style="padding: 5px 10px; background-color: rgb(219, 215, 83)">Done</button>
        </div>
    `;
    newDiv.setAttribute("id", "Todo-lst" + counter);

    document.getElementById('TO-DO').appendChild(newDiv);

    localStorage.setItem('newDiv' + counter, newDiv.outerHTML);

    counter++;

    var removebtn = newDiv.querySelector('button:nth-child(1)');
    removebtn.addEventListener('click', function () {
        var newDiv = this.parentNode.parentNode;
        newDiv.remove();
        localStorage.removeItem('newDiv' + (counter - 1));
        counter--;
    });

    var editbtn = newDiv.querySelector('button:nth-child(2)');
    editbtn.addEventListener('click', function () {
        var newDiv = this.parentNode.parentNode;
        var newH1 = newDiv.querySelector('h1');
        var newP = newDiv.querySelector('p:nth-child(2)');
        var nDate = newDiv.querySelector('p:nth-child(3)');
        var newName = prompt("Enter a new name for the to-do item:", newH1.textContent);
        var newInf = prompt("Enter new information for the to-do item:", newP.textContent);
        var newDate = prompt("Enter a new due date for the to-do item:", nDate.textContent);
        newH1.textContent = newName || "[Content Name]";
        newP.textContent = newInf || "[Content Information]";
        nDate.textContent = newDate || "[The Content due date]";
        localStorage.removeItem('newDiv' + (counter - 1));
        localStorage.setItem('newDiv' + (counter - 1), newDiv.outerHTML);
    });

    var donebtn = newDiv.querySelector('button:nth-child(3)');
    donebtn.addEventListener('click', function () {
        var newDiv = this.parentNode.parentNode;
        newDiv.remove();
        localStorage.removeItem('newDiv' + (counter - 1));
        counter--;
        userPoints++;
        document.getElementById('user-points').textContent = `User Points: ${userPoints}`;

        for (let i = 0; i < levelThresholds.length; i++) {
            if (userPoints >= levelThresholds[i] && userLevel === i + 1) {
                userLevel++;
                document.getElementById('level-display').textContent = `${userLevel}`;
                break;
            }
        }
    });
});

document.getElementById('user-points').textContent = `User Points: ${userPoints}`;