window.onload = function () {

    var hamburger = document.getElementById('hamburger');
    var mainContent = document.getElementById('main-content');
    var content = document.getElementsByClassName('menu-content')[0];
    var links = document.getElementsByClassName('link-button');
    var searchButton = document.getElementById('search-button');
    var searchDropdownVisible = false;
    var dropdownElement;

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
                  </div>
                  `;
    var offerTemplate = `
                  <div class="positioning-template">
                     <div class="template-header">Oferta</div>
                     <div class="main-information-template offer-template">
                        <button id="web-pages-link">Strony internetowe</button>
                        <button>Sklepy internetowe</button>
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

    var formTemplate = `
                  <div class="positioning-template">
                     <div class="template-header">Wyślij nam wiadomość</div>
                     <div class="main-information-template">
                     	<form action="x" method="get" class="sending-form">
                     		<label class="text-input-label">
                     			Imię i nazwisko*
                     			<input type="text" name="name">
							</label>
							<label class="text-input-label">
                     			Adres e-mail*
                     			<input type="email" name="email">
							</label>
							<label class="text-input-label">
                     			Treść
                     			<input type="text" name="contents">
							</label>
							<input class="submit-input" type="submit" value="WYŚLIJ">
							<label class="input-checkbox">
								<input type="checkbox" checked="checked">
								Wyrażam zgodę na otrzymywanie od Volkswagen Group Polska sp.z.o.o. <br> z siedzibą  Poznaniu informacji handlowych za 
								pośrednictwem środków komunikacji elektronicznej.
							</label>
							<label class="input-checkbox">
								<input type="checkbox" checked="checked">
								Wyrażam zgodę na przetważanie moich danych osobowych przez Volkswagen Group Polska sp.z.o.o. z siedzibą w Poznaniu w celach marketingowych
							</label>
						</form>
					 </div>
                  </div>
               `;

    var sectionTemplateMap = {
        home: homeTemplate,
        about: aboutTemplate,
        offer: offerTemplate,
        realizations: realizationsTemplate,
        articles: articlesTemplate,
        contact: contactTemplate,
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
            content.innerHTML = template;
            if (event.target.id === 'offer') {
                var webPagesLink = document.getElementById('web-pages-link');
                if (webPagesLink != null) {
                    webPagesLink.addEventListener('click', function () {
                        content.innerHTML = offerWebPages;
                    })
                }
            }
        })
    }

    var contactLink = document.getElementById('contact-link');
    if (contactLink != null) {
        contactLink.addEventListener('click', function () {
            content.innerHTML = formTemplate;
        })
    }

    searchButton.addEventListener('click', function (event) {
        if (!searchDropdownVisible) {
            var dropdown = document.createElement('div');
            dropdown.classList.add('search-dropdown');
            var dropdownInput = document.createElement('input');
            dropdownInput.setAttribute('type', 'text');
            var dropdownButton = document.createElement('button');
            dropdownButton.innerText = 'Search';
            var target = event.target;
            var targetRect = target.getBoundingClientRect();
            dropdown.appendChild(dropdownInput);
            dropdown.appendChild(dropdownButton);
            dropdown.style.top = targetRect.top + 60 + 'px';
            dropdown.style.left = targetRect.left - 118 + 'px';
            dropdownElement = dropdown;
            document.body.appendChild(dropdown);
            searchDropdownVisible = true;
        } else {
            searchDropdownVisible = false;
            document.body.removeChild(dropdownElement)
        }
    })
};