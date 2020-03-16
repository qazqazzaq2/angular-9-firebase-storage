import { Component, OnInit } from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
import {Observable} from 'rxjs';
import {finalize, map} from 'rxjs/operators';
import { baseUrl } from '../app.component';
import {HttpClient} from '@angular/common/http';
import {isElementScrolledOutsideView} from '@angular/cdk/overlay/position/scroll-clip';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  select: any;
  url: any;
  constructor(private afStorage: AngularFireStorage , private http: HttpClient) { }

  upload(event) {


    const id = event.target.files[0].name;
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();

    this.task.snapshotChanges().pipe(
      finalize(() =>
        this.downloadURL = this.ref.getDownloadURL()
      ))
      .subscribe(result => {

        // tslint:disable-next-line:triple-equals
        if (result.bytesTransferred == result.totalBytes) {
          setTimeout(() => {
             this.ref.getDownloadURL().subscribe(result1 => {

               this.select = {
                 workname: event.target.files[0].name,
                 workurl:  result1.toString(),
               };

               this.http.post(baseUrl + '/upload', JSON.stringify(this.select), {
                 headers: {
                   'Content-Type': 'application/json'
                 }
               })
                 .subscribe(data => {
                   alert('Success !');
                   window.location.reload();
                 });

             });
          }, 2000);
        }
      });


  }

  ngOnInit(): void {

  }

}
