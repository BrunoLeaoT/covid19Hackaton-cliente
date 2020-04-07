import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable()
export class LoginService{
    private url: String = "https://hackatoncovid19.web.app/api/v1/";
    constructor(private http: HttpClient ,public navCtrl: NavController){

    }

    login(username, password){ // Nao sendo utilizado agora para agilizar
        return new Promise((resolve, reject)=>{
            var headers = new Headers();
            headers.append('Content-Type', 'application/json' );

            let data =  JSON.stringify({
                username: username,
                password: password
            })
            
            this.http.get(this.url + "/:username/:password")
            .subscribe(data => {
                console.log(data);
            }, error => {
                console.log(reject(error));
            })
        })
    }

    register(username, password, nome, isRestaurante){
        return new Promise((resolve, reject)=>{
            var headers = new Headers();
            headers.append('Content-Type', 'application/json' );
            
            let postData =  JSON.stringify({
                nome: nome,
                username: username,
                password: password
            })
            
            let url;
            if(isRestaurante)
                url = this.url + "Restaurante";
            else
                url = this.url +  "Fornecedor";
            
            this.http.post(url, postData,{observe: 'response'})
            .subscribe(data => {
                console.log(data);
                if(data.status == 200){
                    return resolve(data.body)
                }
            }, error => {
               console.log(error);
            })
        })
    }
}
