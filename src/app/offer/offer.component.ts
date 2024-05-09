import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AccordionModule } from "../accordion/accordion.module";

@Component({
  selector: "app-offer",
  standalone: true,
  imports: [AccordionModule],
  templateUrl: "./offer.component.html",
  styleUrl: "./offer.component.css",
})
export class OfferComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle(`Usługi`);
  }
}
