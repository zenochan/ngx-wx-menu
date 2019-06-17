import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export class MenuButton
{
  name: string;
  sub_button?: MenuButton[] = [];
  type: string;
  /** type== 'view' */
  url?: string;
}

export class Menu
{
  button: MenuButton[] = [];
}

@Component({
  selector: 'z-wx-menu',
  templateUrl: './wx-menu.component.html',
  styleUrls: ['./wx-menu.component.scss'],
  styles: []
})
export class WxMenuComponent implements OnInit
{
  _hideSubmit: Boolean = false;

  @Input('hide-submit')
  set hideSubmit(v: any)
  {
    this._hideSubmit = v || v === '';
  }

  get hideSubmit() { return this._hideSubmit;}


  @Input()
  name: string = '公众号名称';

  @Output()
  onSubmit = new EventEmitter();

  _menu: Menu;
  @Output()
  menuChange = new EventEmitter();

  @Input()
  get menu(): Menu
  { return this._menu; }

  set menu(val: Menu)
  {
    this._menu = val;
    this.menuChange.emit(this._menu);
  }

  active: MenuButton;

  constructor() { }

  ngOnInit()
  {

  }

  addSubButton(button: MenuButton)
  {
    button.sub_button = button.sub_button || [];
    if (button.sub_button.length != 0 || confirm('添加子菜单后，一级菜单的内容将被清除。确定添加子菜单？')) {

      let sub = {
        name: '新建子菜单',
        type: 'view'
      };

      button.type = null;
      button.sub_button.push(sub);
      this.active = sub;
    }
  }

  deleteMenu()
  {
    let index = this.menu.button.indexOf(this.active);
    if (index != -1) {
      this.menu.button.splice(index, 1);
    } else {
      this.menu.button.forEach(menu => {
        let index = menu.sub_button.indexOf(this.active);
        if (index != -1) {
          menu.sub_button.splice(index, 1);
          if (menu.sub_button.length == 0) {
            menu.type = 'view';
          }
        }
      });
    }

    this.active = null;
  }

  addButton()
  {
    let button: MenuButton = {
      name: '新建菜单',
      type: 'view'
    };
    this.menu.button.push(button);
    this.active = button;
    console.error(button);
  }

  canMove(menuButton: MenuButton, direction: 'left' | 'right' | 'up' | 'down')
  {
    let parent: MenuButton = null;
    let index = this.menu.button.indexOf(menuButton);
    if (index == -1) {
      this.menu.button.forEach(button => {
        if (button.sub_button.indexOf(menuButton) != -1) {
          parent = button;
          index = button.sub_button.indexOf(menuButton);
        }
      });
    }

    switch (direction) {
      case 'up':
        return parent && parent.sub_button.length > 1 && index != 0;
      case 'down':
        return parent && parent.sub_button.length > index + 1;
      case 'left':
        return !parent && index > 0 && this.menu.button.length > 1;
      case 'right':
        return !parent && index + 1 < this.menu.button.length;
      default:
        return false;
    }
  }

  move(menuButton: MenuButton, direction: 'left' | 'right' | 'up' | 'down')
  {
    let parent: MenuButton = null;
    let index = this.menu.button.indexOf(menuButton);
    if (index == -1) {
      this.menu.button.forEach(button => {
        if (button.sub_button.indexOf(menuButton) != -1) {
          parent = button;
          index = button.sub_button.indexOf(menuButton);
        }
      });
    }

    let btn;

    switch (direction) {
      case 'up':
        btn = parent.sub_button.splice(index, 1);
        parent.sub_button.splice(index - 1, 0, ...btn);
        break;
      case 'down':
        btn = parent.sub_button.splice(index, 1);
        parent.sub_button.splice(index + 1, 0, ...btn);
        break;
      case 'left':
        btn = this.menu.button.splice(index, 1);
        this.menu.button.splice(index - 1, 0, ...btn);
        break;
      case 'right':
        btn = this.menu.button.splice(index, 1);
        this.menu.button.splice(index + 1, 0, ...btn);
        break;
    }
  }
}
