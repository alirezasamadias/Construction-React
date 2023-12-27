import { useEffect } from 'react';

function useCurrentPage() {
  useEffect(()=>{
    const menuItemLinks = document.querySelectorAll('.menu-link');
    const url = window.location.pathname;
    for (const menuItemLink of menuItemLinks) {
      if (url === menuItemLink.getAttribute('href')) {
        // remove all
        for (const menuItemLink of menuItemLinks) {
          menuItemLink.classList.remove('current-page');
          menuItemLink.parentElement.classList.remove('current-page');
        }
        // select target
        menuItemLink.classList.add('current-page');
        menuItemLink.parentElement.classList.add('current-page');
      } else {
        menuItemLink.classList.remove('current-page');
        menuItemLink.parentElement.classList.remove('current-page');
      }
    }
  },[]);
}

export default useCurrentPage;