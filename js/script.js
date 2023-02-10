/*MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni task.
Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il task viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene 
letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il task alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del task corrispondente 
(se done era uguale a false, impostare true e viceversa)*/

const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            tasks: [
                {
                    text: 'Seguire la lezione',
                    done: true,
                }, {
                    text: 'Pranzare',
                    done: false,
                }, {
                    text: 'Portare fuori i cani',
                    done: false,
                }, {
                    text: 'Fare esercizi',
                    done: false,
                }, {
                    text: 'Andare in palestra',
                    done: false,
                }
            ]
        }
    }
});
app.mount('#root')