import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCRipple} from '@material/ripple';
import {MDCDrawer} from '@material/drawer';



import {MDCDialog} from '@material/dialog';

import {MDCList} from '@material/list';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

// Instantiation
const listEl = document.querySelector('.mdc-drawer .mdc-list');
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

//Add event listeners
listEl.addEventListener('click', (event) => {
    goto(event);
    drawer.open = !drawer.open;
});

//If drawr is open close it
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});
