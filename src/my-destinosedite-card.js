import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '/node_modules/@polymer/polymer/lib/elements/dom-if.js';
import '/node_modules/@polymer/paper-icon-button/paper-icon-button.js';
import '/node_modules/@polymer/paper-input/paper-input.js';
import '/src/my-icons.js';
import '/node_modules/@polymer/iron-icon/iron-icon.js';
import '/node_modules/@polymer/iron-icons/iron-icons.js';
import './shared-styles.js';

class MyDestinosEditeCard extends PolymerElement {
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
        <div>Nombre del destino:   <span>{{myname}}</span></div>
        <div>Longitud:             <span>{{mylongitudl}}</span></div>
        <div>Latitud:              <span>{{mylatitud}}</span></div>
        <div>Descripción:          <span>{{mydescripcion}}</span></div>
    </template>
    <template is="dom-if" if="[[edit]]">
        <div class="circle"></div>
        <paper-input type="text" label="Nombre" id="nombre" value="{{myname}}"></paper-input>
        <paper-input type="text" label="Longitud"  id="longitud" value="{{mylongitud}}"></paper-input>
        <paper-input type="text" label="Latitud" id="latitud" value="{{mylatitud}}"></paper-input>
        <paper-input type="text" label="Descripción"    id="descripcion" value="{{mydescripcion}}"></paper-input>
        <paper-button toggles raised class="green" on-click="editarDestinos">Aceptar</paper-button>
        </template>
    </div>
  `;
  }
  static get properties() {
    return {
      mykey: {
        type: String,
      },
      mydescripcion:{
        type: String,
        value:""
      },
      mylatitud: {
        type: String,
        value: ""
      },
      mylongitud: {
        type: String,
        value: ""
      },
      myname: {
        type: String,
        value: ""
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
        this.see  = true;
      }else{
        this.edit = true;
        this.see  = false;
      }
    }
  editarDestinos(){
    const key         = this.mykey;
    const nombre      = this.myname;
    const longitud    = this.mylongitud;
    const latitud     = this.mylatitud;
    const descripcion = this.mydescripcion;
    
    firebase.database().ref().child('/Destinos/' + key)
    .update({ 
      nombre      : nombre,
      longitud    : longitud,
      latitud     : latitud,
      descripcion : descripcion  
     });
  }
}

window.customElements.define('my-destinosedite-card', MyDestinosEditeCard);