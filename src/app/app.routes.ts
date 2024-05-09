import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { OfferComponent } from "./offer/offer.component";
import { ContactComponent } from "./contact/contact.component";

export const routes: Routes = [
  { path: `home`, component: HomeComponent },
  { path: `offer`, component: OfferComponent },
  { path: `portfolio`, component: PortfolioComponent },
  { path: `contact`, component: ContactComponent },
  { path: `**`, component: HomeComponent, pathMatch: "full" },
];
