import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-topics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-topics.component.html',
  styleUrl: './post-topics.component.scss'
})
export class PostTopicsComponent implements AfterViewInit {
  @Input() htmlContainerRef!: ElementRef;
  @ViewChild('listTopics', { static: false }) listTopicsRef!: ElementRef;

  topics: string[] = [];

  ngAfterViewInit() {
    setTimeout(() => this.generateTopicsFromHTML(), 0);
  }

  generateTopicsFromHTML() {
    if (!this.htmlContainerRef?.nativeElement) return;

    const h2s: NodeListOf<HTMLHeadingElement> = 
      this.htmlContainerRef.nativeElement.querySelectorAll('h2');

    this.topics = Array.from(h2s).map((el) => el.textContent || '');

    const links = this.listTopicsRef.nativeElement.querySelectorAll('a');
    if(links && links.length) {
      links[0].classList.add('active');
    }
  }

  scrollTo(index: number, event: Event) {
    event.preventDefault();
    const h2s: NodeListOf<HTMLHeadingElement> = 
      this.htmlContainerRef.nativeElement.querySelectorAll('h2');
    const target = h2s[index];
    if(!target) return;

    const offsetTop = target.getBoundingClientRect().top + window.scrollY - 90;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });

    const links = this.listTopicsRef.nativeElement.querySelectorAll('a');
    links.forEach((link: HTMLAnchorElement) => link.classList.remove('active'));
    if(links[index]) {
      links[index].classList.add('active');
    }
  }
}
