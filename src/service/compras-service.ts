import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable()
export class ComprasService{
    private url = "https://hackatoncovid19.web.app/api/v1/";
    constructor(private http: HttpClient ,public navCtrl: NavController){

    }

    // POST REQUESTS

    criarCarrinho(nome){
        return new Promise((resolve, reject)=>{
            var headers = new Headers();
            headers.append('Content-Type', 'application/json' );
            
            let postData =  JSON.stringify({
                nome: nome
            })
            
            this.http.post(this.url + "/CarrinhoDeCompras", postData,{observe: 'response'})
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

    criarProposta(fornecedor, restauranteCod){
        return new Promise((resolve, reject)=>{
            let httpOptions = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            };

            let postData =  JSON.stringify({
                fornecedor: fornecedor,
                restauranteCod: restauranteCod
            })
            this.http.post(this.url + "Propostas/", postData,httpOptions)
            .subscribe(data => {
                console.log(data);
                return resolve(data);
            }, error => {
               console.log(error);
            })
        })
    }
    
    adicionarProdutosCarrinho(restCod, nomeProduto, quantidade){
        return new Promise((resolve, reject)=>{
            var headers = new Headers();
            headers.append('Content-Type', 'application/json' );
            
            let postData =  JSON.stringify({
                restCod: restCod,
                nome: nomeProduto,
                quantidade: quantidade
            })
            
            this.http.post(this.url + "/CarrinhoProdutos", postData,{observe: 'response'})
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


    adicionarProdutosProposta(codProposta, nomeProduto, quantidade,valor){
        return new Promise((resolve, reject)=>{
            let httpOptions = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            };
            
            let postData =  JSON.stringify({
                codProposta: codProposta,
                nome: nomeProduto,
                quantidade: quantidade,
                valor: valor
            })
            
            this.http.post(this.url + "CarrinhoProposta/", postData,httpOptions)
            .subscribe(data => {
                console.log(data);
                return resolve(data);
            }, error => {
               console.log(error);
            })
        })
    }


    // GET REQUESTS
    getCarrinhos(){ 
        return new Promise((resolve, reject)=>{
            var headers = new Headers();
            headers.append('Content-Type', 'application/json' );
            
            this.http.get(this.url + "/CarrinhoDeCompras")
            .subscribe(data => {
                let result: any = data;
                return resolve(result)
            }, error => {
                console.log(reject(error));
            })
        })
    }

    getCarrinhoViaId(id){ 
        return new Promise((resolve, reject)=>{
            var headers = new Headers();
            headers.append('Content-Type', 'application/json' );
            
            this.http.get(this.url + "/CarrinhoDeCompras/" + id)
            .subscribe(data => {
                let result: any = data;
                return resolve(result)
            }, error => {
                console.log(reject(error));
            })
        })
    }

    getPropostas(){ 
        return new Promise((resolve, reject)=>{
            var headers = new Headers();
            headers.append('Content-Type', 'application/json' );
            
            this.http.get(this.url + "Propostas")
            .subscribe(data => {
                return resolve(data)
            }, error => {
                console.log(reject(error));
            })
        })
    }

    async getPropostasIndividuais(fornecedor){
        return new Promise((resolve, reject)=>{
            this.getPropostas().then(async data =>{
                let result:any = await data;
                let propostas = []
                try {
                    result.forEach(element => {
                        let forne = element.id.split("-",1);
                        if(forne[0] == fornecedor)
                            propostas.push(element);
                    });
                } catch (error) {
                    console.log("Couldn't get any propostas")
                }
                return resolve(propostas);
            });
        })
    }

    getProdutos(codFornecedor){
        return new Promise((resolve, reject)=>{
            var headers = new Headers();
            headers.append('Content-Type', 'application/json' );
            
            this.http.get(this.url + "Propostas/" + codFornecedor)
            .subscribe(data => {
                return resolve(data)
            }, error => {
                console.log(reject(error));
            })
        })
    }
}
