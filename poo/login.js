class User{
    //Atributos

    constructor(login, senha){
        this.login = login;
        //encapsulamento
        let _senha = senha;
        this.getSenha = () => _senha;
        this.setSenha = (novaSenha) => _senha;
    }
}