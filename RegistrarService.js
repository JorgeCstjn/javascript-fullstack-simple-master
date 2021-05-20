class RegistrarService {

    constructor() {
        this.URI = `/api/Registrarse`;
    }

    async getRegistrarse() {
        const response = await fetch(this.URI);    
        const Registrarse = await response.json();
        return Registrarse;
    }

    async postRegistrarse(Registrar) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: RegistrarService
        });
        const data = await res.json();
    }

    async deleteRegistrarse(Registrar) {
        const res = await fetch(`${this.URI}/${bookId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'Delete'
        });
        const data = await res.json();
        console.log(data);
    }

}

export default RegistrarService;