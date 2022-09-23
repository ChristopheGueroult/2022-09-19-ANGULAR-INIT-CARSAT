import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order';

@Directive({
  selector: '[appState]',
})
export class StateDirective implements OnChanges {
  @Input() appState!: string;
  @HostBinding('class') tdClassName!: string;
  constructor() {}
  ngOnChanges(): void {
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
  }
}

// récupérer item.state depuis le component parent
// générer un nom de class à partir de item.state (state-canceled par exemple)
// Binder la propriété class du td sur lequel j'instancie cette directive avec mon nom de class
