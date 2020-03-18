import { Component, OnInit } from '@angular/core';
import {ControllerService} from '../Service/controller.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  LinkDownload: Object;
  constructor(private service: ControllerService) { }

  ngOnInit(): void {

    this.service.getLinkdownload().subscribe(data => {
      this.LinkDownload = data;
      console.log(data);
    });

  }

}
