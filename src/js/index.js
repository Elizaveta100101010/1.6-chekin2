import '../scss/style.scss';

import { swiperInit } from "./swiper";
import {openCloseMenu} from "./sidebar";
import{openCloseFeedback} from "./feedback";
import{openCloseCall} from "./feedback";
import{moreBrands} from "./morebrands";
import {slideMenuStyleChange} from "./nav-bar";
import{linkStyleChange} from "./sidebar_links";
import{moreText} from "./text-more";
import{moreServices} from "./moreservices";

moreServices();
moreText();
linkStyleChange();
slideMenuStyleChange();
swiperInit();
openCloseMenu();
openCloseFeedback()
openCloseCall();
moreBrands();