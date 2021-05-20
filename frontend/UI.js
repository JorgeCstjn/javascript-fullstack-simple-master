import RegistrarService from './services/RegistrarService';
const RegistrarService = new RegistrarService();

import { format } from 'timeago.js';
import Registrar from '../backend/models/Registrar';

class UI {

  async renderBooks() {
    const Registrarse = await RegistrarService.getBooks();
    const RegistrarseCardContainer = document.getElementById('Registrarse-cards');
    RegistrarseCardContainer.innerHTML = '';
    Registrarse.forEach((book) => {
      const div = document.createElement('div');
      div.className = 'animated fadeInRight';
      div.innerHTML = `
      <div class="card m-2">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${Registrar.imagePath}" class="img-fluid" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-block px-2">
                    <h4 class="card-title">${Registrar.title}</h4>
                    <p class="card-text">${Registrar.author}</p>
                    <a href="#" class="btn btn-danger delete" _id="${Registrar._id}">X</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
          ${format(Registrar.created_at)}
        </div>
      </div>
      `;
      RegistrarseCardContainer.appendChild(div);
    });
  }

  async addANewBook(Registrar) {
    await RegistrarService.postBook(Registrar);
    this.renderRegistrarse();
    this.clearRegistrarForm();
  }

  clearRegistrarForm() {
    document.getElementById('Registrar-form').reset();
    document.getElementById('Nombre').focus();
  }

  renderMessage(message, colorMessage, secondsToRemove) {
    // Creating a div
    const div = document.createElement('div');
    // Styling the div
    div.className = `message ${colorMessage}`;
    // Adding Text to the div
    div.appendChild(document.createTextNode(message));
    // Puting in the documnet
    const container = document.querySelector('.col-md-4');
    const RegistrarForm = document.querySelector('#Registrar-form');
    container.insertBefore(div, bookForm);
    // Removing the div after some secconds
    setTimeout(() => {
      document.querySelector('.message').remove();
    }, secondsToRemove);
  }

  async deleteBook(RegistrarId) {
    await RegistrarService.deleteBook(RegistrarId);
    this.renderRegistrarse();
  }

}

export default UI;
