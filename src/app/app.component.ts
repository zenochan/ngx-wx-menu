import {Component} from '@angular/core';
import {Menu} from '../../projects/wx-menu/src/lib/wx-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  title = 'wx-menu-lib';

  public menu: Menu = {
    button: [
      {
        'name': 'MORMA',
        'subButton': [],
        'type': 'view',
        'url': 'http://morma.cn'
      },
      {
        'name': '授权',
        'subButton': [],
        'type': 'view',
        'url': 'http://wxopen.morma.cn/auth'
      },
      {
        'name': 'Coding',
        'subButton': [],
        'type': 'view',
        'url': 'http://wxc07fd4f3157d0406.wxopen.morma.cn'
      }

    ]
  };

  submit(menu)
  {
    console.log(111);
  }
}
