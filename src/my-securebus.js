import { PolymerElement, html } from '/node_modules/@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '/node_modules/@polymer/polymer/lib/utils/settings.js';
import '/node_modules/@polymer/app-layout/app-drawer/app-drawer.js';
import '/node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '/node_modules/@polymer/app-layout/app-header/app-header.js';
import '/node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js';
import '/node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '/node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js';
import '/node_modules/@polymer/app-route/app-location.js';
import '/node_modules/@polymer/app-route/app-route.js';
import '/node_modules/@polymer/iron-pages/iron-pages.js';
import '/node_modules/@polymer/iron-selector/iron-selector.js';
import '/node_modules/@polymer/paper-icon-button/paper-icon-button.js';
import '/src/my-icons.js';
import '/node_modules/@polymer/iron-icon/iron-icon.js';
import '/node_modules/@polymer/iron-icons/iron-icons.js';
import '/node_modules/@polymer/polymer/lib/elements/dom-if.js';
import { setTouchAction } from '/node_modules/@polymer/polymer/lib/utils/gestures.js';
// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MySecurebus extends PolymerElement{
  constructor(){
    super();
  }
  static get template(){
      return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;
          --app-header-color:  red;

          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
          color: #fff;
          background-color: var(--app-header-color);
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }
        iron-pages{
          background-image: url("/images/img/background-principal-app.jpg");
          padding: 0px;
          width:100%;
          height:100%;
          position: absolute;
          display: flex;
          justify-content: center;
          background-size: 100% 100%;
          background-attachment: fixed;
        }
        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }
        .icon-menu{
          margin-left: 30%;
        }
        a{
          color: #fff;
        }
        img.icono{
          position: relative;
          float: rigth;
        }
        h5{
          position: relative;
          top: -15px;
          width: 100%-10px;
          height: 25px;
          padding: 5px;
          color: white;
          background-color: rgba(0,0,0,0.8);
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
        <app-toolbar>
        <img src="../images/manifest/icon-96x96.png" class="icon-menu" width="80px"/>
        <br/>
       
        </app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="emergencia" href="[[rootPath]]emergencia"><paper-icon-button icon="add-box"></paper-icon-button>Emergencia</a>
            <a name="list-ascenso-y-descenso" href="[[rootPath]]list-ascenso-y-descenso"><paper-icon-button icon="thumbs-up-down"></paper-icon-button> Ascenso y descenso</a>
            <a name="mapa-viajes-tutor" href="[[rootPath]]mapa-viajes-tutor"><paper-icon-button icon="explore"></paper-icon-button> Mapa de viaje (t)</a>
            <a name="mapa-viajes-chofer" href="[[rootPath]]mapa-viajes-chofer"><paper-icon-button icon="explore"></paper-icon-button> Mapa de viaje (c)</a>
            <a name="registro-alumnos" href="[[rootPath]]registro-alumnos"><paper-icon-button icon="supervisor-account"></paper-icon-button> Registro de Alumnos</a>
            <a name="registro-destino" href="[[rootPath]]registro-destino">
            <paper-icon-button icon="flight-land"></paper-icon-button> Registro de destinos</a>
            <a name="usuarios" href="[[rootPath]]usuarios">
              <paper-icon-button icon="flight-land"></paper-icon-button> Usuarios</a>
            <a name="viajes" href="[[rootPath]]viajes">
                <paper-icon-button icon="flight-takeoff"></paper-icon-button>Viajes
            </a>
          </iron-selector>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">
          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>

            <a href=""><paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button></a>
            <a href="[[rootPath]]perfil"><paper-icon-button icon="account-box"></paper-icon-button></a>
            <a href=""><paper-icon-button icon="icons:translate"></paper-icon-button></a>
            <a href=""><paper-icon-button icon="icons:mail"></paper-icon-button></a>
            <a href=""><paper-icon-button icon="power-settings-new" on-click="logout"></paper-icon-button></a>
            <div main-title="Autobús Seguro"></div>
            <img class="icono" src="../images/img/logotipo.png" width="70px">
            </app-toolbar>
            
          </app-header>
          <h5>hola {{user}}</h5>
          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <my-perfil name="perfil"></my-perfil>
            <my-registro-alumnos name="registro-alumnos"></my-registro-alumnos>
            <my-viajes name="viajes"></my-viajes>
            <my-registro-destino name="registro-destino"></my-registro-destino>
            <my-list-ascenso-y-descenso name="list-ascenso-y-descenso"></my-list-ascenso-y-descenso>
            <my-mapa-viajes-tutor name="mapa-viajes-tutor"></my-mapa-viajes-tutor>
            <my-mapa-viajes-chofer name="mapa-viajes-chofer"></my-mapa-viajes-chofer>
            <my-emergencia name="emergencia"></my-emergencia>
            <my-usuarios name="usuarios" userper="{{userper}}"></my-usuarios>
            <my-view404 name="view404"></my-view404>
            </iron-pages>
            
        </app-header-layout>
        
      </app-drawer-layout>

    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      actionInside : {
        notify: true,
        type: Boolean,
        value: true
      },
      routeData: Object,
      subroute: Object
    };
  }

  logout(event){
      event.preventDefault();
      let logout = true;
      const date = Date.now();
      this.dispatchEvent(new CustomEvent('logoutme', {
        bubbles: true,
        composed: true,
        detail: {
          logout: logout,
          nombre: date
        }
      }));
  }
  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
     if (!page) {
      this.page = 'perfil';
    } else if (['perfil','usuarios','registro-alumnos','viajes','registro-destino','list-ascenso-y-descenso','mapa-viajes-tutor','mapa-viajes-chofer','emergencia'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    switch (page) {
      case 'perfil':
        import('./my-perfil.js');
        break;
      case 'registro-alumnos':
        import('./my-registro-alumnos.js');
        break;
      case 'registro-destino':
        import('./my-registro-destino.js');
        break;
      case 'list-ascenso-y-descenso':
        import('./my-list-ascenso-y-descenso.js');
        break;
      case 'viajes':
        import('./my-viajes.js');
        break;
      case 'mapa-viajes-tutor':
        import('./my-mapa-viajes-tutor.js');
        break;
      case 'mapa-viajes-chofer':
        import('./my-mapa-viajes-chofer.js');
        break;
      case 'emergencia':
        import('./my-emergencia.js');
        break;
      case 'usuarios':
        import('./my-usuarios.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }
}

window.customElements.define('my-securebus', MySecurebus);
