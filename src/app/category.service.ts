import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Category } from './Models/category';
import { APIResponse } from './Models/api-response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_URL = "http://localhost:3000/shopping_list";

  private _handleHttpErrors(retVal: any) {
    return (err: any) => {
      console.log(err);
      return of({status:err.status, message:err.message, data:retVal});
    }
  }

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<APIResponse<Category[]>>{
    return this.http.get<APIResponse<Category[]>>(this.API_URL).pipe(catchError(this._handleHttpErrors([])));
  }

  getCategoryById(id:string): Observable<APIResponse<Category>>{
    return this.http.get<APIResponse<Category>>(this.API_URL + '/' + id).pipe(catchError(this._handleHttpErrors(new Category())));
  }

  createCategory(data:Category): Observable<APIResponse<Category>>{
    return this.http.post<APIResponse<Category>>(this.API_URL, data).pipe(catchError(this._handleHttpErrors(new Category())));
  }

  updateCategory(id:string, data:Category): Observable<APIResponse<Category>>{
    return this.http.put<APIResponse<Category>>(this.API_URL + '/' + id, data).pipe(catchError(this._handleHttpErrors(new Category())));
  }

  deleteCategory(id:string): Observable<APIResponse<Category>>{
    return this.http.delete<APIResponse<Category>>(this.API_URL + '/' + id).pipe(catchError(this._handleHttpErrors(new Category())));
  }

  getCategoryByName(category:string): Observable<APIResponse<Category>>{
    return this.http.get<APIResponse<Category>>(this.API_URL + '/' + category).pipe(catchError(this._handleHttpErrors(new Category())));
  }

}







