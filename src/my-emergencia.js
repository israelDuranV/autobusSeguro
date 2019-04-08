import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyEmergencia extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        
      </style>

      <div class="card">
        <div class="circle">1</div>
        <h1>Números de Emergencia</h1>
        <ul>
          <li>Emergencias: 911</li>
          <li>Policía del DF: 066</li>
          <li>Cruz Roja Mexicana: 065 También están los números 5557-5757 y 5395-1111</li>
          <li>Bomberos: 068 También puedes marcar 5768-3700</li>
          <li>Policía Federal: 5684-2142, 5481-4326 y 5256-0606</li>
          <li>Ambulancias: Si-Pro Medic: 5601-7631 y XE Médica: 3869-0660</li>
          <li>Incendios Forestales: 5554-0612, 5554-7097 y 5653-1369</li>
          <li>Secretaría del Medio Ambiente: 5542-0117 y 5510-3663</li>
          <li>Información general: 040</li>
          <li>Locatel: 56581111 /119 (Gratis para usuarios telcel)</li>
          <li>Denuncia Extorsión Telefónica: 5533-5533</li>
          <li>Denuncia Anónima: 089</li>
          <li>Capufe: 074</li>
          <li>Policía local: 060</li>
          <li>Policía Judicial Estatal y del DF: 061</li>
          <li>Seguridad y Emergencia: 080</li>
          <ul>

    </p>
      </div>
    `;
  }
}
window.customElements.define('my-emergencia', MyEmergencia);