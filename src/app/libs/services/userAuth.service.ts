import { Injectable, NgZone } from '@angular/core'
//import { User } from "../services/user";
import auth from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth'
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore'
import { Router } from '@angular/router'
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class userAuthService {
  userData: any // Save logged in user data

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user
        localStorage.setItem('user', JSON.stringify(this.userData))
        JSON.parse(localStorage.getItem('user') || '{}')
      } else {
        localStorage.setItem('user', '')
        JSON.parse(localStorage.getItem('user') || '{}')
      }
    })
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result: { user: any }) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard'])
        })
        this.SetUserData(result.user)
        window.alert('signed in')
      })
      .catch((error: { message: any }) => {
        window.alert(error.message)
      })
  }

  // Sign up with email/password
  SignUp(
    email: string,
    password: string,
    storeName: string,
    storeType: string,
  ) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        //this.SendVerificationMail()
        this.SetUserData(result.user)
        this.setOtherUserDetails(result.user, storeName, storeType)
        window.alert('signed up')
        this.router.navigate(['log-in'])
      })
      .catch((error) => {
        window.alert(error.message)
      })
  }

  //get store name
  getStoreDetails(user: any){
    return this.afs.collection("users").snapshotChanges();
    }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.auth.GoogleAuthProvider())
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result: { user: any }) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard'])
        })
        this.SetUserData(result.user)
      })
      .catch((error: any) => {
        window.alert(error)
      })
  }

  setOtherUserDetails(user: any, storeName: string, storeType: string) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user?.uid}`,
    )
    const otherUserDetails = {
      storeName: storeName,
      storeType: storeType,
    }
    return userRef.set(otherUserDetails, {
      merge: true,
    })
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: auth.User | null) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user?.uid}`,
    )
    const userData: any = {
      uid: user?.uid,
      email: user?.email,
      displayName: user?.displayName,
      photoURL: user?.photoURL,
      emailVerified: true,
    }
    return userRef.set(userData, {
      merge: true,
    })
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user')
      this.router.navigate(['log-in'])
    })
  }

  // SendVerificationMail() {
  //   return this.afAuth.currentUser
  //     .then((user) => {
  //       return user?.sendEmailVerification()
  //     })
  //     .then(() => {
  //       this.router.navigate(['verify-email-address'])
  //     })
  // }

  ForgotPassword(passwordResetEmail: any) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.')
      })
      .catch((error) => {
        window.alert(error)
      })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    return user !== null && user.emailVerified !== false ? true : false
  }

}
