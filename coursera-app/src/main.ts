import { NgModule, Component, HostBinding } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Componente 1: Perfil con @HostBinding y {{ nombre }}
@Component({
  selector: 'app-profile',
  template: `
    <div class="card shadow p-3 my-4">
      <h5 class="card-title">Hola, soy {{ nombre }}</h5>
      <p class="card-text">Este componente usa Bootstrap y @HostBinding.</p>
    </div>
  `
})
class ProfileComponent {
  @HostBinding('class') className = 'container';
  nombre: string = 'Juan Pérez';
}

// Componente 2: Lista con ngFor, formulario y template variable #
@Component({
  selector: 'app-tech-list',
  template: `
    <div class="container">
      <h3>Lista de tecnologías favoritas</h3>

      <form (submit)="addTech(newTech.value); newTech.value=''; $event.preventDefault()" class="mb-3">
        <div class="input-group">
          <input #newTech class="form-control" placeholder="Nueva tecnología">
          <button class="btn btn-primary" type="submit">Agregar</button>
        </div>
      </form>

      <ul class="list-group">
        <li *ngFor="let tech of techs" class="list-group-item">
          {{ tech }}
        </li>
      </ul>
    </div>
  `
})
class TechListComponent {
  techs: string[] = ['HTML', 'CSS', 'JavaScript'];

  addTech(nuevaTecnologia: string) {
    const limpia = nuevaTecnologia.trim();
    if (limpia) {
      this.techs.push(limpia);
    }
  }
}

// Componente raíz
@Component({
  selector: 'my-app',
  template: `
    <div class="container mt-5 text-center">
      <h1 class="mb-4">Proyecto Angular con Bootstrap</h1>
      <app-profile></app-profile>
      <app-tech-list></app-tech-list>
    </div>
  `
})
class AppComponent {}

// Módulo raíz
@NgModule({
  declarations: [AppComponent, ProfileComponent, TechListComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
class AppModule {}

// Arrancar aplicación
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
