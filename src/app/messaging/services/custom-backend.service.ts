import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomBackendService {

  private value: any = 0;

  constructor(private client: HttpClient) {

   }

  getMessages (callback: any){
      this.client.get('http://localhost:9999/messages')
      .toPromise()
      .then((messages: any) => {
        callback(messages);
      })
      .catch((error) =>
        console.log(error)
      );
  }

  getValue() {
    return this.value;
  }

  setValue(val: any) {
    this.value = val
  }
}
