import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ProjectsService } from "../_services/projects.service";
import { Project } from "../_models/project";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
  }
  featuredProject = {} as Project;
  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle(`O Nas`);
  }
}
