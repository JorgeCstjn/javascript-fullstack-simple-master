class RegistrarService {

    constructor() {
        this.URI = `/api/Registrarse`;
    }

    async getBooks() {
        const response = await fetch(this.URI);    
        const Registrarse = await response.json();
        return Registrarse;
    }

    async postBook(Registrar) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: RegistrarService
        });
        const data = await res.json();
    }

    async deleteBook(Registrar) {
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