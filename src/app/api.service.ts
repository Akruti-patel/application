import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  PHP_API_SERVER = "http://localhost/angular/angular_php";
  
  constructor(private httpClient: HttpClient) { }

    getProducts (): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost/angular/angular_php/read.php');
  }
   
 //getProduct(id: number): Observable<Product> {
  //return this.httpClient.get<Product[]>('http://localhost/angular/angular_php/read.php');
  //}
   
  addProduct (product): Observable<Product> {
     
    return this.httpClient.post<Product>('http://localhost/angular/angular_php/create.php', product);
  }
   
  updateProduct (id,product): Observable<any> {
   // const url = `${apiUrl}/update.php?id=${id}`;
    return this.httpClient.put<Product>('http://localhost/angular/angular_php/update.php', product);
  }
   
  deleteProduct (id): Observable<Product> {
  //  const url = `${apiUrl}/delete.php?id=${id}`;
    return this.httpClient.delete<Product>('http://localhost/angular/angular_php/delete.php/?id='+id);
    
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

