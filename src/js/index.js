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
const listElem = document.querySelector('.mdc-drawer .mdc-list');
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

//If click list element close drawer
listElem.addEventListener('click', (event) => {
    drawer.open = !drawer.open;
});

//If drawer is open close it
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});
