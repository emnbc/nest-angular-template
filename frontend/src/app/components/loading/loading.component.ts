import { Component, Input } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  /**
   * Diameter in pixel
   */
  @Input() diameter: number = 30;

  /**
   * Width loading block, for example: "max-content" or "100%"
   */
  @Input() width: string = 'auto';

  /**
   * Loading state
   */
  @Input() loading: boolean = true;

  constructor() { }

}
