import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css',
})
export class OfferComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle(`Darpress - Usługi`);
  }
}
