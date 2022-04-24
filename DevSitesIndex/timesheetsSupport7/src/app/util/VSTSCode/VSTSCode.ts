

// 06/13/2021 12:39 am - SSN - [20210613-0039] - [001] - VSTS Code - Refactoring

import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from '../../shared/j-query.service';

console.log('%c ' + 'Loading vsts code', 'color:blue;font-size:14pt;');

@Directive({
    selector: 'app-vsts-code'
})
export class VSTSCodeUtil implements OnInit {

    private elem: HTMLElement;

    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {

        this.elem = ref.nativeElement;
    }


    ngOnInit(): void {

        console.log('%c ' + 'Loading vsts code - INIT ', 'color:blue;font-size:14pt;');

        this.elem.addEventListener('click', function (e) {

            console.log('click-20210613-0051');

        });

    }

}
