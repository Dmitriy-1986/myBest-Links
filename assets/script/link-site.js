let titleLinks = 'Посилання';
let dataLinks = [
    {titleBadge: 'Chost.ga', link: 'https://cpanel.chost.ga/index.php'},
    {titleBadge: 'Ukr.Net', link: 'https://www.ukr.net/'},
    {titleBadge: 'Gmail', link: 'https://mail.google.com/mail/u/0/#inbox'},
    {titleBadge: 'Webformyself Чат-Бот', link: 'https://webformyself.com/minikurs/telegram/index-subscribe.html'},
    {titleBadge: 'Портал НПУ', link: 'https://www.prof.npu.gov.ua/moodle/login/index.php'},
    {titleBadge: 'Google поиск', link: 'https://programmablesearchengine.google.com/cse/create/getcode?cx=71a15f6738aca0dce'},
    {titleBadge: 'Онлайн конвертер', link: 'https://onlineconvertfree.com/ru/convert/png/'},
    {titleBadge: 'Search Console', link: 'https://search.google.com/search-console'},
    {titleBadge: 'Git Hub', link: 'https://github.com/Dmitriy-1986'},
    {titleBadge: 'Ratatype', link: 'https://www.ratatype.ua/'},
    {titleBadge: 'Instantview Telegram', link: 'https://instantview.telegram.org/checklist'},
    {titleBadge: 'Website Chat Messenger', link: 'https://www.facebook.com/business/goals/add-live-chat-to-website-with-messenger'},
    {titleBadge: 'Темы рабочего стола Windows', link: 'https://support.microsoft.com/ru-ru/windows/%D1%82%D0%B5%D0%BC%D1%8B-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B5%D0%B3%D0%BE-%D1%81%D1%82%D0%BE%D0%BB%D0%B0-94880287-6046-1d35-6d2f-35dee759701e'},
    {titleBadge: 'Freelancehunt', link: 'https://freelancehunt.com/my'},
    {titleBadge: 'Untree.co Free Templates', link: 'https://untree.co/free-templates/'},
    {titleBadge: 'Торрент трекер underver.se', link: 'https://underver.se/'},
    {titleBadge: 'HTML DOM Events', link: 'https://www.w3schools.com/jsref/dom_obj_event.asp'},
    {titleBadge: 'ОРІЄНТУВАННЯ', link: 'https://orientation.pp.ua/'},
    {titleBadge: 'Интернет-источник свободно используемых изображений', link: 'https://unsplash.com/'},
    {titleBadge: 'pixabay.com', link: 'https://pixabay.com/'},
    {titleBadge: 'flickr.com', link: 'https://www.flickr.com/'},
    {titleBadge: 'Сетевая академия Cisco ', link: 'https://www.netacad.com/portal/learning'},
    {titleBadge: 'Конвертируем SVG-иконку в код ', link: 'https://denis-creative.com/svg-to-bg/'},
    {titleBadge: 'Начало работы с Firebase в React JS ', link: 'https://www.youtube.com/watch?v=7xf0Kz6WGu8'},
    {titleBadge: 'Beautiful CSS box-shadow examples', link: 'https://getcssscan.com/css-box-shadow-examples'},
    {titleBadge: 'hostronavt.ru', link: 'https://hostronavt.ru/#hosting'},
    /*{titleBadge: ' ', link: ' '},*/
    /*{titleBadge: ' ', link: ' '},*/
    /*{titleBadge: ' ', link: ' '},*/
    /*{titleBadge: ' ', link: ' '},*/
    /*{titleBadge: ' ', link: ' '},*/
    /*{titleBadge: ' ', link: ' '},*/
    /*{titleBadge: ' ', link: ' '},*/
    /*{titleBadge: ' ', link: ' '},*/
    /*{titleBadge: ' ', link: ' '},*/
    /*{titleBadge: ' ', link: ' '},*/
    /*{titleBadge: ' ', link: ' '},*/
    /*{titleBadge: ' ', link: ' '},*/
    /*{titleBadge: ' ', link: ' '},*/
    /*{titleBadge: ' ', link: ' '},*/
];

let blocks = document.querySelector('.blocks');
 
let sectionLinksSite = document.createElement('div');
blocks.append(sectionLinksSite);

let linkSiteTitle = document.createElement('h3');
linkSiteTitle.id = 'linkSite';
linkSiteTitle.classList.add('subtitle');
linkSiteTitle.textContent = titleLinks;
                      
sectionLinksSite.append(linkSiteTitle);

let linkSiteGrid = document.createElement('div');
linkSiteGrid.classList.add('grid');
sectionLinksSite.append(linkSiteGrid);

for (let i = 0; i < dataLinks.length; i++) {
    let linksSiteElement = document.createElement('a');
    linksSiteElement.setAttribute('href', `${dataLinks[i].link}`);
    linksSiteElement.setAttribute('target', '_blank');
    linksSiteElement.classList.add('list-item');
    linksSiteElement.innerHTML = ` <span class="list-item__content">
                                        <span class="list-item__grow">
                                            <span class="list-item__badge">
                                                посилання
                                            </span>
                                        </span>
                                        <h3 class="list-item__title">
                                            ${dataLinks[i].titleBadge}
                                        </h3>
                                    </span>
                                    <span class="list-item__icon">
                                        <img src="./assets/image/link-icon.svg" alt="icon">
                                    </span>`;
    linkSiteGrid.append(linksSiteElement);                                
}

let linkTopSiteLinks = document.createElement('div');
linkTopSiteLinks.classList.add('linkTop');
linkTopSiteLinks.innerHTML = `<a href="#top">
                                    <img src="./assets/image/link-top.svg" alt="to top">
                              </a>`
sectionLinksSite.append(linkTopSiteLinks); 

