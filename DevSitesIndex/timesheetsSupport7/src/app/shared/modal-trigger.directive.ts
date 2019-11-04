
// 10/21/2019 06:21 am - SSN - [20191021-0444] - [007] - M12 - Creating directives and advanced components in Angular.


import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './j-query.service';
// import 'bootstrap';


@Directive({
  selector: '[app-modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {


  private el: HTMLElement;

  @Input('app-modal-trigger') app_modal_trigger_container_ID: string;


  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {

    this.el = ref.nativeElement;

  }



  ngOnInit(): void {

    this.el.addEventListener('click', e => {

      console.log('modal-trigger.directive - 20191021-0638');

      this.$(`#${this.app_modal_trigger_container_ID}`).modal({});

    });

  }


}


