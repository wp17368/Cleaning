import { Component } from "@angular/core";
import { AccordionItemComponent } from "./accordion-item/accordion-item.component";
@Component({
  selector: "app-accordion",
  standalone: true,
  imports: [AccordionComponent, AccordionItemComponent],
  templateUrl: "./accordion.component.html",
  styleUrl: "./accordion.component.css",
})
export class AccordionComponent {}
