import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyLogin extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        .login{
            width: 100%;
            height: 100%;
        }
      </style>

    <div class="login">
      <h2>Soy login de usuario</h2>
    </div>
    `;
  }
}

window.customElements.define('my-login', MyLogin);