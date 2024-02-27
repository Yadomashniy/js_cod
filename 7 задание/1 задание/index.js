const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel() {
    const person = peopleWaiting.shift();
    if (person) {
        alert(`${person} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)
    }
}

function leaveQueueWithoutParcel() {
    const person = peopleWaiting.pop();
    if (person) {
        alert(`${person} не получил(а) посылку и ушел(ла) из очереди.`);
    }
}

// Шаг 1
giveParcel(); // Кристина получил(а) посылку. В очереди осталось 6 человек.
giveParcel(); // Олег получил(а) посылку. В очереди осталось 5 человек.

// Шаг 2
peopleWaiting.splice(0, 1); // Удаляем Кирилла
while (peopleWaiting.length > 0) {
    leaveQueueWithoutParcel();
}