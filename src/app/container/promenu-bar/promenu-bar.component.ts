import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-promenu-bar',
  templateUrl: './promenu-bar.component.html',
  styleUrl: './promenu-bar.component.css'
})
export class PromenuBarComponent {
 HeadBar = faSearch
}
