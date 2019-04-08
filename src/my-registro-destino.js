import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '/node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
import '/node_modules/@polymer/polymer/lib/elements/dom-if.js';
import '/node_modules/@polymer/paper-icon-button/paper-icon-button.js';
import '/node_modules/@polymer/paper-input/paper-input.js';
import '/node_modules/@polymer/paper-button/paper-button.js';
import '/src/my-destinosedite-card.js';
import '/src/my-icons.js';
import '/node_modules/@polymer/iron-icon/iron-icon.js';
import '/node_modules/@polymer/iron-icons/iron-icons.js';
import './shared-styles.js';

class MyRegistroDestino extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
          --paper-input-container-input-color: black;
        }
      </style>
      <div class="container">
        <h2>Registro de destinos</h2>
        <div class="buttonadd">
              <paper-button class="doAdd" toggles raised class="green" on-click="doAdd" icon="create">
                Agregar Destino
              </paper-button>
          </div>
          <template is="dom-if" if="[[added]]">
          <div class="card">
              <div class="circle"></div>Nuevo Destino
              <paper-input type="text" label="Nombre del destino" id="addNombre" value="{{addNombre}}" required></paper-input>
              <paper-input type="text" label="Latitud" id="addLatitud" value="{{addLatitud}}" required></paper-input>
              <paper-input type="text" label="Longitud" id="addLongitud" value="{{addLongitud}}" required></paper-input>
              <paper-input type="text" label="Descripción" id="addDescripcion" value="{{addDescripcion}}" required></paper-input> 
              <paper-button toggles raised class="green" on-click="agregarDestino">Aceptar</paper-button>   
          </div>
          </template>
      <dom-repeat items="{{destinosper}}">
        <template>
            <my-destinosedite-card myname="{{item.nombre}}" mylongitud="{{item.longitud}}" mylatitud="{{item.latitud}}" mydescripcion="{{item.descripcion}}"></my-destinosedite-card>
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
      destinosper: {
        type: Array,
      },
      
      mykey: {
        type: String,
      },
      added: {
        type: Boolean,
        value: false
      },
      addDescripcion:{
        type: String,
        value:""
      },
      addLatitud: {
        type: String,
        value: ""
      },
      addLongitud: {
        type: String,
        value: ""
      },
      addNombre: {
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
  agregarDestino(event){
      event.preventDefault();
      const addLatitud     = this.addLatitud;
      const addNombre      = this.addNombre;
      const addLongitud    = this.addLongitud;
      const addDescripcion = this.addDescripcion;

    firebase.database().ref('Destinos/').push({
      nombre   : addNombre,
      latitud  : addLatitud,
      longitud : addLongitud,
      descripcion: addDescripcion
    });
  }
}
window.customElements.define('my-registro-destino', MyRegistroDestino);