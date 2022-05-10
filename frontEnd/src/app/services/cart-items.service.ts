import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartItem } from '../models/CartItem';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
    constructor(private http : HttpClient) { }

    getCartItem (userId : string, productId : string) : Observable<CartItem> {
        return this.http.get<CartItem>(`${environment.apiUrl}/api/cart-items/${userId}/${productId}`)
    }

    addToUserCart (userId : string, productId : string) : Observable<User> {
        return this.http.post<User>(`${environment.apiUrl}/api/users/${userId}/cart/add/${productId}`, {
        })
    }

    getUserCart (userId : string) : Observable<CartItem[]> {
        return this.http.get<CartItem[]>(`${environment.apiUrl}/api/users/${userId}/cart`)
    }

    updateUserCartItem (userId : string, productId : string, quantity : Number) : Observable<User> {
        return this.http.put<User>(`${environment.apiUrl}/api/users/${userId}/cart/update/${productId}`, {
            quantity
        })
    }

    deleteUserCartItem (userId : string, productId : string) : Observable<any> {
        return this.http.delete(`${environment.apiUrl}/api/users/${userId}/cart/remove/${productId}`)
    }
}
