import { Component, Input } from '@angular/core';
import { DataBrPipe } from 'utils/date-br.pipe';

@Component({
  selector: 'app-post-meta',
  imports: [DataBrPipe],
  templateUrl: './post-meta.component.html',
  styleUrl: './post-meta.component.scss'
})
export class PostMetaComponent {
  @Input() data!: string;
  @Input() tempoLeitura!: number;
}
