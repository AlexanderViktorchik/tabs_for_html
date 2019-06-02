function tabsForHtml (blockWithTabs, tabs, tabsContent) {
    window.addEventListener('DOMContentLoaded', function () {

        'use strict';
        
        let a = tabs;
        let arr = a.split('');
        delete arr[0];
        let b = arr.join('');

        let info = document.querySelector(blockWithTabs),
            tab = document.querySelectorAll(tabs),
            tabContent = document.querySelectorAll(tabsContent);
    
        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
    
        hideTabContent(1);
    
        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }
    
        info.addEventListener('click', function (event) {
            let target = event.target;
                if (target && target.classList.contains(b)) {
                   for (let i = 0; i < tab.length; i++) {
                       if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                       }
                   }
            }
           
        });
    });
}

tabsForHtml('.info-header', '.info-header-tab', '.info-tabcontent');