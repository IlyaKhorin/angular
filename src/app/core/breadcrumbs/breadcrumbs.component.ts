import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { isNgTemplate } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let k = this.route.url;
    this.route.params.subscribe((data) => {
        data;
    })
  }

}
