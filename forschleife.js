let fruits = ['Apple', 'Banana', 'Strawberry', 'Blackberry', 'Raspberry'];
        let amount = ['3x', '1x', '250g', '200g', '100g'];

        function init() {
            exercise1();
            exercise2();
            exercise3();
            exercise4();
            exercise5();
            exercisenew();
            exercise6();
            exercise7();
            exercise8();
        }


        function exercise1() {
            let list1 = document.getElementById('list1');

            for (let i = 0; i < 10; i++) {
                list1.innerHTML += `<li>${i}</li>`;
            }
        }


        function exercise2() {
            let list2 = document.getElementById('list2');

            for (let i = 1; i <= 5; i++) {
                list2.innerHTML += `<li>${i}</li>`;
            }
        }

        function exercise3() {
            let list3 = document.getElementById('list3')

            for (let i = 0; i <= 10; i+=2) {
                list3.innerHTML += `<li>${i}</li>`;
            }
        }

        function exercise4() {
            let list4 = document.getElementById('list4')

            for (let i = 10; i >= 0; i--) {
                list4.innerHTML += `<li>${i}</li>`;
            }
        }

        function exercise5() {
            let list5 = document.getElementById('list5')

            for (let i = 0; i < fruits.length; i++) {
                list5.innerHTML += `<li>${fruits[i]}</li>`;
            }
        }

        function exercisenew() {
            let list6 = document.getElementById('list6')

            for (let i = 4; i >= 0; i--) {
                list6.innerHTML += `<li>${fruits[i]}</li>`;
            }
        }

        function exercise6() {
            let list7 = document.getElementById('list7')

            for (let i = 0; i < fruits.length; i+=2) {
                list7.innerHTML += `<li>${fruits[i]}</li>`;
            }
        }

        function exercise7() {
            let list8 = document.getElementById('list8')

            for (let i = 0; i < fruits.length; i++) {
                list8.innerHTML += `<li>${amount[i]} ${fruits[i]}</li>`;
            }
        }

        function exercise8() {
            let newfruit = document.getElementById('newfruit').value;

            return fruits.push(newfruit)

            // list10.innerHTML = '';
            
            exercise9();
        }

        function exercise9() {
            let list10 = document.getElementById('list10')

            for (let i = 0; i < fruits.length; i++) {
                list10.innerHTML += `<li>${fruits[i]}</li>`;

            }
        }