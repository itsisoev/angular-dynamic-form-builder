import {ChangeDetectionStrategy, Component, inject, input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {UcFormField} from '../../models/form.model';

@Component({
  selector: 'uc-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './uc-form.html',
  styleUrl: './uc-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UcForm implements OnInit {
  private readonly fb = inject(FormBuilder);

  fields = input<UcFormField[]>([]);
  submitText = input<string>('Submit');

  form!: FormGroup;

  ngOnInit() {
    const controls: Record<string, FormControl> = {};

    this.fields().forEach(field => {
      controls[field.name] = new FormControl(field.defaultValue ?? '');
    });

    this.form = this.fb.group(controls);
  }

  submit() {
    console.log(this.form.value);
  }
}
