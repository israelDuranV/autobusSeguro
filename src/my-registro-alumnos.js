import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '/node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
import '/node_modules/@polymer/polymer/lib/elements/dom-if.js';
import '/node_modules/@polymer/paper-icon-button/paper-icon-button.js';
import '/node_modules/@polymer/paper-input/paper-input.js';
import '/node_modules/@polymer/paper-button/paper-button.js';
import '/src/my-alumnosedite-card.js';
import '/src/my-icons.js';
import '/node_modules/@polymer/iron-icon/iron-icon.js';
import '/node_modules/@polymer/iron-icons/iron-icons.js';
import './shared-styles.js';

class MyRegistroAlumnos extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
          --paper-input-container-input-color: black;
        }
        .card{
          background-color: #c0c0c0;
          width: 100%;  
          color: black;
        }
      </style>

      <div class="container">
        <div class="circle">6</div>
        <h1>Registro Alumnos</h1>
        <div class="buttonadd">
              <paper-button class="doAdd" toggles raised class="green" on-click="doAdd" icon="create">
                Agregar Alumno
              </paper-button>
          </div>
          <template is="dom-if" if="[[added]]">
          <div class="card">
              <div class="circle"></div>Nuevo Alumno
              <paper-input type="text" label="Nombre completo" id="addNombre" value="{{addNombre}}" required></paper-input>
              <paper-input type="text" label="Grado" id="addGrado" value="{{addGrado}}" required></paper-input>
              <paper-input type="text" label="Nombre de la escuela" id="addEscuela" value="{{addEscuela}}" required></paper-input>
              <label>Datos del tutor</label>
              <paper-input type="text" label="Nombre del tutor" id="addTutor" value="{{addTutor}}" required></paper-input>
              <paper-input type="text" label="Email de contácto" id="addEmail" value="{{addEmail}}" required></paper-input>
              <paper-input type="text" label="Teléfono" id="addTelefono" value="{{addTelefono}}" required></paper-input>
              <paper-input type="text" label="Dirección" id="addDireccion" value="{{addDireccion}}" required></paper-input>
              <paper-button toggles raised class="green" on-click="agregarAlumno">Aceptar</paper-button>   
          </div>
          </template>
      <dom-repeat items="{{alumnosper}}">
        <template>
          <my-alumnosedite-card 
            mykey="{{item.key}}" 
            myname="{{item.nombre}}" 
            myemail="{{item.email}}" 
            mytelefono="{{item.telefono}}"
            mytutor="{{item.tutor}}"
            mydireccion="{{item.direccion}}" 
            myescuela="{{item.escuela}}" 
            mygrado="{{item.grado}}">
          </my-alumnosedite-card>
        </template>
      </dom-repeat>
      </div>
    `;
  }
  constructor(){
    super();
  }
  static get properties() {
    return {
      alumnosper: {
        type: Array,
      },
      userAeditar:{
        type: String,
      },
      mykey: {
        type: String,
      },
      added: {
        type: Boolean,
        value: false
      },
      addEmail: {
        type: String,
        value: ""
      },
      addNombre: {
        type: String,
        value: ""
      },
      addEscuela: {
        type: String,
        value: ""
      },
      addTutor: {
        type: String,
        value: ""
      },
      addTelefono: {
        type: String,
        value: ""
      },
      addDireccion: {
        type: String,
        value: ""
      }
    };
  }
  doAdd(){
    if(this.added == false){
      this.added = true;
    }else{
      this.added = false;
    }
  }
  agregarAlumno(event){
      event.preventDefault();
      const addGrado     = this.addGrado;
      const addNombre    = this.addNombre;
      const addEscuela   = this.addEscuela;
      const addTutor     = this.addTutor;
      const addEmail     = this.addEmail;
      const addTelefono  = this.addTelefono;
      const addDireccion = this.addDireccion;

    firebase.database().ref('Alumnos/').push({
      grado   : addGrado,
      escuela : addEscuela,
      tutor   : addTutor,
      telefono: addTelefono,
      direccion: addDireccion,     
      email   : addEmail,
      nombre  : addNombre
    });
  }
}

window.customElements.define('my-registro-alumnos', MyRegistroAlumnos);
