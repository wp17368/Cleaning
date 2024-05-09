import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { NgIf } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-accordion-item",
  standalone: true,
  imports: [NgIf],
  templateUrl: "./accordion-item.component.html",
  styleUrl: "./accordion-item.component.css",
})
export class AccordionItemComponent implements OnInit {
  @Input() title: string | undefined;
  isMoreVisible = false;
  constructor() {}
  ngOnInit(): void {}
  toggleMore() {
    this.isMoreVisible = !this.isMoreVisible;
  }
}
