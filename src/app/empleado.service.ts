import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  //Esta URL obtiene el listado de todos los empleados en el backend
  private baseURL = "http://localhost:8080/api/v1/empleados"
  
  constructor(private httpClient : HttpClient) { }

  //Aqui ponemos los metodos utilizado
  //Este metodo nos sirve para obtener los empleados
  obtenerListaDeEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }

  //Este metodo nos sirve para registrar un empledo
  registrarEmpleado(empleado:Empleado) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,empleado);
  }

  eliminarEmpleado(id:number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

  actualizarEmpleado(id:number,empleado:Empleado) : Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,empleado)
  }

  obtenerEmpleadoPorId(id:number) :Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`)
  }
 
}
