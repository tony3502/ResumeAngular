import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  c: any;
  ballArray: Array<Ball> = [];
  resizeSubject: Subscription = new Subscription;

  constructor() { }
  ngOnDestroy(): void {
    this.resizeSubject.unsubscribe();
  }

  ngOnInit(): void {
    this.canvasInit();
    this.canvasBallInit();
    this.canvasAnimate();
    this.resizeSubject = fromEvent(window, 'resize').subscribe(() => { this.canvasInit() });
  }

  canvasInit() {
    this.canvas.nativeElement.width = innerWidth;
    this.canvas.nativeElement.height = innerHeight;
    this.c = this.canvas.nativeElement.getContext('2d');

  }

  canvasBallInit() {
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * this.canvas.nativeElement.width;
      const y = Math.random() * this.canvas.nativeElement.height;
      const dx = Math.random() * 2 + 1;
      const dy = Math.random() * 2 + 0.1;
      const radius = Math.floor(Math.random() * 10 + 10);
      this.ballArray.push(new Ball(x, y, dx, dy, radius, this.c))
    }
  }

  canvasAnimate() {
    requestAnimationFrame(this.canvasAnimate.bind(this));
    this.c?.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

    for (let i = 0; i < 100; i++) {
      this.ballArray[i].update();
    }

  }
}
class Ball {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  c: any;
  transparent: number;

  constructor(x: number, y: number, dx: number, dy: number, radius: number, c: any) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.c = c;
    this.transparent = Math.random();
  }

  draw() {
    this.c?.beginPath();
    this.c?.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.c.fillStyle = `rgba(255,255,255,${this.transparent})`;
    this.c?.fill();
  }
  update() {
    if (this.x > innerWidth) this.x = 0;
    if (this.y > innerHeight) this.y = 0;
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}
