import { Component } from '@angular/core';
// import { ICourse } from '../../models/icourse.model';
import { Student } from '../../models/student.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
