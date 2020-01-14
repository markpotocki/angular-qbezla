import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { Observable } from 'rxjs';

import { User } from './user.model';

@Injectable()
export class AuthenticationService {

  user$: Observable<User>

  constructor() { }

}