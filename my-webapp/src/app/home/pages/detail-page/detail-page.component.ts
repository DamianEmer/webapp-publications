import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("parametro: ",this.route.snapshot.params.id);
  }

}
