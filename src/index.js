window.onload = function () {

    var hamburger = document.getElementById('hamburger');
    var mainContent = document.getElementById('main-content');
    var content = document.getElementsByClassName('menu-content');
    var links = document.getElementsByClassName('link-button');

    var homeTemplate = `
                  <div class="positioning-template">
                     <div class="template-header">Strona Główna</div>
                     <div class="main-information-template"></div>
                  </div>
               `;

    var aboutTemplate = `
                  <div class="positioning-template">
                     <div class="template-header">O Nas</div>
                     <div class="main-information-template"></div>
                  </div>;
                  `;
    var offerTemplate = `
                  <div class="positioning-template">
                     <div class="template-header">Oferta</div>
                     <div class="main-information-template offer-template">
                        <button class="change-template">Strony internetowe</button>
                        <button>Sklepy internetowe</button>§
                        <button>Projektowanie graficzne</button>
                        <button>Druk materiałów reklamowych</button>
                        <button>Prezentacje i animacje 2D</button>
                        <button>Copywriting</button>
                     </div>
                  </div>
                  `;

    var realizationsTemplate = `
                        <div class="positioning-template">
                           <div class="template-header">Realizacje</div>
                           <div class="main-information-template"></div>
                        </div>
                        `;

    var articlesTemplate = `
                     <div class="positioning-template">
                        <div class="template-header">Artykuły</div>
                        <div class="main-information-template"></div>
                     </div>
                     `;

    var contactTemplate = `
                     <div class="positioning-template">
                        <div class="template-header">Kontakt</div>
                        <div class="main-information-template"></div>
                     </div>
                  `;

    var offerWebPages = `
                  <div class="positioning-template">
                     <div class="template-header">Oferta / Strony internetowe</div>
                     <div class="main-information-template page-template">
                        <div class="positioning--page-template">
                           <button>System CMS - prostota i bezpieczeństwo</button>
                           <button>Projekt graficzny strony internetowej</button>
                           <button>Współczesne standardy i responsywność</button>
                           <button>Wysokie pozycje w wyszukiwarkach</button>
                        </div>
                        <div class="positioning--page-template">
                           <button>Domena,serwer i poczta</button>
                           <button>Pomoc powdrożeniowa</button>
                           <button>Etapy realizacji projektu strony www</button>
                        </div>
                     </div>
                  </div>
               `;

    var sectionTemplateMap = {
        home: homeTemplate,
        about: aboutTemplate,
        offer: offerTemplate,
        realizations: realizationsTemplate,
        articles: articlesTemplate,
        contact: contactTemplate
    };

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('is-active');
        mainContent.classList.toggle('expanded');
    });

    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        link.addEventListener('click', function (event) {
            console.log(content);
            var template = sectionTemplateMap[event.target.id];
            content[0].innerHTML = template;
        })
    }
};