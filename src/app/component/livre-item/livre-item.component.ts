import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { LivreModel } from 'src/app/class/livre-model';
import { LivreFormComponent } from '../livre-form/livre-form.component';

@Component({
  selector: 'app-livre-item',
  templateUrl: './livre-item.component.html',
  styleUrls: ['./livre-item.component.css']
})
export class LivreItemComponent {

  isEdition: boolean = false;

  @Input()
  livre?: LivreModel;
  @Output()
  suppressionOkEvent: EventEmitter<LivreModel> = new EventEmitter<LivreModel>();
  @ViewChild(LivreFormComponent)
  livreFormComponent!: LivreFormComponent;

  editer() {
    this.isEdition = true;
  }

  valider(livreModel: LivreModel) {
    this.isEdition = false;
  }

  supprimer() {
    this.suppressionOkEvent.emit(this.livre);
  }

}
