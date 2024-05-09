import { Component, Input } from "@angular/core";
import { Project } from "../_models/project";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
})
export class CardComponent {
  @Input() project = {} as Project;

  OpenProjectModal(id: number) {
    let modalDiv = document.getElementById(`modal-${id}`);
    if (modalDiv != null) {
      modalDiv.style.display = `flex`;
    }
  }
  CloseProjectModal(id: number) {
    let modalDiv = document.getElementById(`modal-${id}`);
    if (modalDiv != null) {
      modalDiv.style.display = `none`;
    }
  }
}
