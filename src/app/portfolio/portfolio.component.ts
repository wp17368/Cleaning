import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/project';
import { ProjectsService } from '../_services/projects.service';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle(`Darpress - Projekty`);
  }
}
