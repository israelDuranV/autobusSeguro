import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '/node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
import '/node_modules/@polymer/polymer/lib/elements/dom-if.js';
import '/node_modules/@polymer/paper-icon-button/paper-icon-button.js';
import '/node_modules/@polymer/paper-input/paper-input.js';
import '/node_modules/@polymer/paper-button/paper-button.js';
import '/src/my-useredite-card.js';
import '/src/my-icons.js';
import '/node_modules/@polymer/iron-icon/iron-icon.js';
import '/node_modules/@polymer/iron-icons/iron-icons.js';
import './shared-styles.js';

class MyUsuarios extends PolymerElement {
  constructor(){
    super();
  }
 
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
          background-color: #c0c0c0;
          min-width: 520px;
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
        .buttonadd{
          display: inline-block;
          width: center;
        }
        .buttonadd{
          width: 100%;
          position: relative;
        }
        paper-button.doAdd{
          width: 80%;
          left: 10%;
          position: relative;
          margin: 0 auto;
          padding: 5px;
        }

      </style>  
          <div class="buttonadd">
              <paper-button class="doAdd" toggles raised class="green" on-click="doAdd" icon="create">
                Agregar Usuario
              </paper-button>
          </div>
          <template is="dom-if" if="[[added]]">
          <div class="card">
              <div class="circle"></div>Nuevo Usuario
              <paper-input type="text" label="Nombre" id="addNombre" value="{{addNombre}}"></paper-input>
              <paper-input type="text" label="Email" id="addEmail" value="{{addEmail}}"></paper-input>
              <paper-input type="text" label="Rol" id="addRol" value="{{addRol}}"></paper-input>
              <paper-button toggles raised class="green" on-click="agregarUser">Aceptar</paper-button>   
          </div>
          </template>
      <dom-repeat items="{{userper}}">
        <template>
          <my-useredite-card mykey="{{item.key}}" myname="{{item.nombre}}" myemail="{{item.rol}}" myrol="{{item.rol}}"></my-useredite-card>
        </template>
      </dom-repeat>
    `;
  }
  static get properties() {
    return {
      userper: {
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
      addRol: {
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
  agregarUser(event){
      event.preventDefault();
      console.log("hola mundo");
      const addEmail  = this.addEmail;
      const addNombre = this.addNombre;
      const addRol    = this.addRol;
      console.log(addEmail+addNombre+addRol);

    firebase.database().ref('Users/').push({
      email   : addEmail,
      nombre  : addNombre,
      rol     : addRol
    });
  }

}
window.customElements.define('my-usuarios', MyUsuarios);
