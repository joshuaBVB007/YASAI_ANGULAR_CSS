import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosComponent } from './productos.component';
import { SearchPipe} from '../search.pipe';
import { MiListaComponent } from '../mi-lista/mi-lista.component';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { CounterComponent } from '../counter/counter.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

describe('Revision de los componentes que hay en ProductosComponent', () => {
  let component: ProductosComponent;
  let fixture: ComponentFixture<ProductosComponent>;
  var a=true;

  beforeEach(async () => {
    //inicializa el entorno para hacer unit testing
    await TestBed.configureTestingModule({
      //configureTestingModule permite sobre escribir los imports,declarations,pipes,etc
      declarations: [ ProductosComponent,SearchPipe,MiListaComponent,
        ToolBarComponent,PaginationComponent,CounterComponent,
      ],
      imports:[FormsModule,AppRoutingModule],
    })
    //compila el o los componentes declarados,en nuestro caso una pipe y el componente que lo usa 
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 

  // ADD ALL THE TESTS HERE

  it("Test:Valor igual true");

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});


// INTRODUCTION
// describe es una funcion de que su trabajo es agrupar tests segun manual de jasmine
