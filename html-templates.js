let name = 'Frederick'; // Für Aufgabe 4


        /**
         * Aufgabe 1 
         */
        function joke1() {
            document.getElementById('joke').innerHTML =
                `Wie viele Windows-Anwender braucht man um eine Glühbirne zu wechseln? 100! Einer wechselt die Birne, 99 klicken die Fehlermeldungen weg.`;
        }


        /**
         * Aufgabe 1 
         */
        function joke2() {
            document.getElementById('joke').innerHTML =
                `Linux wird nie das meistinstallierte Betriebssystem sein, wenn man bedenkt, wie oft man Windows neu installieren muss!`;
        }


        /**
         * Aufgabe 1 
         */
        function joke3() {
            document.getElementById('joke').innerHTML =
                `Jedes Programm lässt sich um mindestens eine Anweisung kürzen. Jedes Programm hat mindestens einen Fehler. Durch Induktion können wir schließen: Jedes Programm ist reduzierbar auf eine Anweisung, die nicht funktioniert...`;
        }


        /**
         * Aufgabe 1 
         */
        function joke4() {
            document.getElementById('joke').innerHTML =
                `Telefonieren zwei Informatiker. Fragt der eine: "Und, wie ist das Wetter bei euch?" "Caps Lock." "Häh?" "Na, shift ohne Ende..."`;
        }



        /**
         * Aufgabe 2 
         */
        function addFruit(fruit) {
            document.getElementById('food').innerHTML += `Frucht hinzugefügt: <b>${fruit}<b> <br>`;
        }

        function deleteFruits() {
            document.getElementById('food').innerHTML = ''; // Es greift auf das Element mit der Id "food" ein und ändert den Inhalt in '' was es in anderen Worten leert.
        }

        /**
         * Aufgabe 2.3 -> "=" = gleich bzw. deklariert den Wert einer Variable, "+=" oder auch "= +" addiert einen Wert.
         */


        /**
         * Aufgabe 3 
         */
        function generatedCircle() {
            
            document.getElementById('generatedHTML').innerHTML = `
            <div class="circle">
                <b>${name}<b>   
            </div>
            `;
        }

        /**
         * Aufgabe 4 (Hilfsfunktion um den Namen zu ändern) 
         */
        function setName(n) {
            name = n;
        }



        /**
         * Aufgabe 5 
         */
        function sendMessage() {
            let message = document.getElementById('message'); // HTML Element mit ID message wird an die Variable 'message' zugewiesen. 
            let chat = document.getElementById('chat');
            let inputName = document.getElementById('name').value;

            if (message.value.length < 1) {
                alert('Bitte schreibe etwas in das Text-Feld!')
            } else {
                chat.innerHTML += `
                <div><i>${inputName}</i>: ${message.value}</div>
                `;
            }

            message.value = ''; // Inhalt von Textfeld mit id "message" löschen
        }