import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {UcForm} from '../../shared/components/uc-form/uc-form';
import {UcFormField} from '../../shared/models/form.model';

@Component({
  selector: 'app-form-room-one',
  imports: [
    UcForm
  ],
  templateUrl: './form-room-one.html',
  styleUrl: './form-room-one.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormRoomOne {
  formConfig = signal<UcFormField[]>([
    {name: 'email', type: 'email', placeholder: 'Email'},
    {name: 'phone', type: 'tel', placeholder: 'Телефон'},
    {name: 'password', type: 'password', placeholder: 'Пароль'}
  ])
}
