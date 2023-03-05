import { Component, Input } from '@angular/core';
import { LivreModel } from 'src/app/class/livre-model';

@Component({
  selector: 'app-livre-item',
  templateUrl: './livre-item.component.html',
  styleUrls: ['./livre-item.component.css']
})
export class LivreItemComponent {
  @Input()
  livre?: LivreModel;

}
