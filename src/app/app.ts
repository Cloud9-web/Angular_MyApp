import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "./menu/menu";
import { SubMenu } from "./menu/sub-menu/sub-menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, SubMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MyApp');
}                                                                                                 
