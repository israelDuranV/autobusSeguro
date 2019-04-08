import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '/node_modules/@polymer/polymer/lib/elements/dom-if.js';
import '/node_modules/@polymer/paper-icon-button/paper-icon-button.js';
import '/node_modules/@polymer/paper-input/paper-input.js';
import '/src/my-icons.js';
import '/node_modules/@polymer/iron-icon/iron-icon.js';
import '/node_modules/@polymer/iron-icons/iron-icons.js';
import './shared-styles.js';

class MyAlumnosEditeCard extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
      :host {
        display: block;
        padding: 10px;
        --paper-input-container-color: red;
        --paper-input-container-focus-color: blue;
        --paper-input-container-invalid-color: green;
        --paper-input-container-input-color: black;
      }
      .card{
        min-width: 480px;
        position:  relative;
        color: black;
      }
      .iconeditar{
        display: inline-block;
        width: 50px;
        height: auto;
        text-align: right;
        float: right;
        position: relative;
      }

    </style>
    <div class="card">
        <div class="iconeditar">
            <paper-icon-button on-click="doEdit" icon="create"></paper-icon-button>
        </div>

    <template is="dom-if" if="[[see]]">
        <div class="circle"></div>
        <div>Nombre:   <span>{{myname}}</span></div>
        <div>Email:    <span>{{myemail}}</span></div>
        <div>Teléfono: <span>{{mytelefono}}</span></div>
        <div>Tutor:    <span>{{mytutor}}</span></div>
        <div>Dirección:<span>{{mydireccion}}</span></div>
        <div>Escuela:  <span>{{myescuela}}</span></div>
        <div>grado:    <span>{{mygrado}}</span></div>
    </template>
    <template is="dom-if" if="[[edit]]">
        <div class="circle"></div>
        <paper-input type="text" label="Nombre" id="nombre" value="{{myname}}"></paper-input>
        <paper-input type="text" label="Email"  id="email" value="{{myemail}}"></paper-input>
        <paper-input type="text" label="Telefono" id="telefono" value="{{mytelefono}}"></paper-input>
        <paper-input type="text" label="Tutor"    id="tutor" value="{{mytutor}}"></paper-input>
        <paper-input type="text" label="Dirección" id="direccion" value="{{mydireccion}}"></paper-input>
        <paper-input type="text" label="Escuela" id="escuela" value="{{myescuela}}"></paper-input>
        <paper-input type="text" label="Grado" id="grado" value="{{mygrado}}"></paper-input>
        <paper-button toggles raised class="green" on-click="editarAlumnos">Aceptar</paper-button>   
    </template>
    </div>
  `;
  }
  static get properties() {
    return {
      mykey: {
        type: String,
      },
      myname: {
          type: String,
      },
      myemail: {
          type: String,
      },
      mytelefono: {
          type: String,
      },
      mytutor: {
        type: String,
      },
      mydireccion: {
        type: String,
      },
      myescuela: {
         type: String,
      },
      mygrado: {
         type: String,
      },
      edit: {
        type: Boolean,
        value: false,
      },
      see: {
        type: Boolean,
        value: true,
      }
    };
  }
  doEdit(){
      if(this.edit == true){
        this.edit = false;
        this.see = true;
      }else{
        this.edit = true;
        this.see = false;
      }
    }
  editarAlumnos(){
    const key    = this.mykey;
    const nombre = this.myname;
    const email  = this.myemail;
    const escuela    = this.escuela;
    
    firebase.database().ref().child('/Alumnos/' + key)
    .update({ 
      email: email,
      nombre  : nombre,
      escuela : escuela  
     });
  }
}

window.customElements.define('my-alumnosedite-card', MyAlumnosEditeCard);