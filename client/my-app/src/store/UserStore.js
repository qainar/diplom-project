import {makeAutoObservable} from "mobx";

class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._admin = false
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }
    setAdmin(bool){
        this._admin = bool
    }

    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
    get admin(){
        return this._admin
    }


}

export default new UserStore()