function addCard1(){
    const card1 = document.getElementById('card1');

    card1.innerHTML = `
        <div class="card-add">
            <div class="card-add-head">
                <img class="card-img" src="assets/img/pikachu.png" alt="pikachu">

                <div class="card-add-head-title">
                    <h2>Pikachu</h2>
                    <p>Elétrico</p>
                </div>            
            </div>

            <div class="card-add-info-content">
                <li class="card-add-info">Ataque: 112</li>
                <li class="card-add-info">Defesa: 96</li>
                <li class="card-add-info">Estamina: 111</li>
                <li class="card-add-info">PC Máx: 1060</li>
            </div>

        </div>
    `;
}

function addCard2(){
    const card2 = document.getElementById('card2');

    card2.innerHTML = `
        <div class="card-add">
            <div class="card-add-head">
                <img class="card-img" src="assets/img/pikachu.png" alt="pikachu">

                <div class="card-add-head-title">
                    <h2>Pikachu</h2>
                    <p>Elétrico</p>
                </div>            
            </div>

            <div class="card-add-info-content">
                <li class="card-add-info">Ataque: 112</li>
                <li class="card-add-info">Defesa: 96</li>
                <li class="card-add-info">Estamina: 111</li>
                <li class="card-add-info">PC Máx: 1060</li>
            </div>

        </div>
    `;
}

function addCard3(){
    const card3 = document.getElementById('card3');

    card3.innerHTML = `
        <div class="card-add">
            <div class="card-add-head">
                <img class="card-img" src="assets/img/pikachu.png" alt="pikachu">

                <div class="card-add-head-title">
                    <h2>Pikachu</h2>
                    <p>Elétrico</p>
                </div>            
            </div>

            <div class="card-add-info-content">
                <li class="card-add-info">Ataque: 112</li>
                <li class="card-add-info">Defesa: 96</li>
                <li class="card-add-info">Estamina: 111</li>
                <li class="card-add-info">PC Máx: 1060</li>
            </div>

        </div>
    `;
}

function irParaSecao() {
        

        var section = document.getElementById('sectionCompare');
        section.style.visibility = 'visible';

    document.getElementById('sectionCompare').scrollIntoView({ behavior: 'smooth' });
    section.style.animation = 'slideUp 0.3s ease forwards';
}