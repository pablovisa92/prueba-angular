import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from '@shared/directives/highlight.directive';
import { DateFormatPipe } from '@shared/pipes/date-format.pipe';
import { FibonacciPipe } from '@shared/pipes/fibonacci.pipe';
import { ReversePipe } from '@shared/pipes/reverse.pipe';


@NgModule({
  declarations: [
    HighlightDirective,
    DateFormatPipe,
    FibonacciPipe,
    ReversePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    DateFormatPipe,
    FibonacciPipe,
    ReversePipe
  ]
})
export class SharedModule { }
