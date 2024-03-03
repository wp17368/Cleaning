import { Injectable } from '@angular/core';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  setTitle(arg0: string) {
    throw new Error('Method not implemented.');
  }
  projects: Project[] = [
    {
      id: 0,
      name: `Dach w Opatówku`,
      summary: `Jestem pod wrażeniem, jak tak prosta usługa może tak znacząco odmienić wygląd całego domu.`,
      description: `Mój kiedyś zaniedbany dach teraz błyszczy jak nowy. Ekipa wykonała swoje zadanie szybko, bezpiecznie i skutecznie. Polecam wszystkim poszukującym odświeżenia swojego otoczenia`,
      author: 'Katarzyna',
      img: `/assets/Dach-w-opatowku.jpg`,
    },
    {
      id: 1,
      name: `Elewacja w Nowym Porcie`,
      summary: `Precyzyjne podejście do pracy pozwoliło na dokładne usunięcie brudu, osadów i zanieczyszczeń, które rujnowały estetykę naszej kamienicy.`,
      description: `Jako administrator budynku dążę do utrzymania naszej kamienicy w doskonałym stanie. Chcę pochwalić profesjonalizm tego zespołu. Wykonywali swoje zadanie z dokładnością i starannością, byli uprzejmi i komunikatywni na każdym etapie. Cały proces przebiegł bezproblemowo i sprawnie.`,
      author: 'Tomasz',
      img: `/assets/kamienica.jpg`,
    },
    {
      id: 2,
      name: `Kostka brukowa w Antoninie`,
      summary: `Ostatnio zdecydowaliśmy się na odświeżenie naszej kostki brukowej przed restauracją i muszę przyznać, że efekty są zachwycające.`,
      description: `Zlecenie Wam mycia kostki brukowej w patio Naszej restauracji było strzałem w dziesiątkę. Nasz dziedziniec prezentuje się teraz lepiej niż kiedykolwiek :). Gorąco polecam tę usługę przedsiębiorcom pragnącym gościć swoich klientów w perfekcyjnym lokalu.`,
      author: 'Marek',
      img: `/assets/restauracja-patio.jpg`,
    },
    {
      id: 3,
      name: `Elewacja w Tczewie`,
      summary: `Zamiast kłaść nową elewację, spróbowałam usługi umycia tej, którą już mam.`,
      description: `Zespół jest profesjonalny i przygotowany do pracy. Ich staranność i precyzja pozwoliły na dokładne usunięcie wszelkich zabrudzeń, osadów i zanieczyszczeń bez niszczenia elewacji. Końcowo zdecydowałam się jej nie odnawiać ;) Doradzili mi dobrze, aby odrazu umyć dach - efekt czyszczenia jest silniejszy i trwalszy.`,
      author: 'Dorota',
      img: `/assets/dom.jpg`,
    },
    {
      id: 4,
      name: `Dachy domków letniskowych`,
      summary: `Podczas ostatniej renowacji moich domków letniskowych, postanowiłem zainwestować i umyć ich dachy. Muszę przyznać, że efekty były tego warte.`,
      description: `Usługa mycia dachów okazała się być praktyczna (wypłukaliśmy z nich to, co końcowo pozapychałoby rynny) i efektywna w poprawie wyglądu moich domków letniskowych. Gorąco polecam tę usługę wszystkim właścicielom nieruchomości, którzy pragną zachować ich atrakcyjny wygląd przez wiele lat.`,
      author: 'Grzegorz',
      img: `/assets/domki.jpg`,
    },
  ];
  constructor() {}
  GetProjects() {
    return this.projects;
  }
  GetProjectById(id: number): Project {
    let project = this.projects.find((project) => project.id === id);
    if (project === undefined) {
      throw new TypeError(`There is no project that matches this id:` + id);
    }
    return project;
  }
}
