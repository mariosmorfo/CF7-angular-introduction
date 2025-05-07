import { Component, inject } from '@angular/core';
import { JokesService } from 'src/app/shared/services/jokes.service';

@Component({
  selector: 'app-http-client-example',
  imports: [],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent {
  jokesService = inject(JokesService)

}
