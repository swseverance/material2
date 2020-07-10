import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

const dateOffset = (24*60*60*1000) * 5; //5 days

/** @title Date range picker bugfix */
@Component({
  selector: 'date-range-picker-forms-example',
  template: `
        <mat-form-field>
            <mat-label>Works</mat-label>
            <mat-date-range-input [formGroup]="range" [rangePicker]="picker" [min]="min" [max]="max">
                <input matStartDate formControlName="start"
                       placeholder="Start date">
                <input matEndDate formControlName="end"
                       placeholder="End date">
            </mat-date-range-input>
            <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
            <mat-date-range-picker #picker></mat-date-range-picker>
        </mat-form-field>

        <mat-form-field>
            <mat-label>Doesn't work</mat-label>
            <mat-date-range-input [formGroup]="range2" [rangePicker]="picker2" [min]="getMin()" [max]="getMax()">
                <input matStartDate formControlName="start"
                       placeholder="Start date">
                <input matEndDate formControlName="end"
                       placeholder="End date">
            </mat-date-range-input>
            <mat-datepicker-toggle matSuffix [for]="picker2"></mat-datepicker-toggle>
            <mat-date-range-picker #picker2></mat-date-range-picker>
        </mat-form-field>
  `
})
export class DateRangePickerFormsExample {

  now = new Date();
  min: Date;
  max: Date;

  range = new FormGroup({
      start: new FormControl(),
      end: new FormControl()
  });

  range2 = new FormGroup({
      start: new FormControl(),
      end: new FormControl()
  });

  constructor() {
      this.min = this.getMin();
      this.max = this.getMax();
  }

  getMin() {
      let min = new Date();
      min.setTime(this.now.getTime() - dateOffset);
      return min;
  }

  getMax() {
      let max = new Date();
      max.setTime(this.now.getTime() + dateOffset);
      return max;
  }
}
