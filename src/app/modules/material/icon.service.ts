import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Maps icon name to corresponding file in 'src/assets/icons'
 */
interface IconMap {
  readonly icon: string;
  readonly file: string;
}

@Injectable()
export class IconService {

  constructor(private registry: MatIconRegistry, private sanitizer: DomSanitizer) {
  }

  register() {
    //
    // List of icons used in the applications
    //
    const Icons: IconMap[] = [
      {icon: 'apps',                  file: 'ic_apps_24px.svg'},
      {icon: 'arrow_back',            file: 'ic_arrow_back_24px.svg'},
      {icon: 'arrow_downward',        file: 'ic_arrow_downward_24px.svg'},
      {icon: 'arrow_forward',         file: 'ic_arrow_forward_24px.svg'},
      {icon: 'arrow_upward',          file: 'ic_arrow_upward_24px.svg'},
      {icon: 'favorite',              file: 'ic_favorite_24px.svg'},
      {icon: 'help',                  file: 'ic_help_24px.svg'},
      {icon: 'history',               file: 'ic_history_24px.svg'},
      {icon: 'home',                  file: 'ic_home_24px.svg'},
      {icon: 'info',                  file: 'ic_info_24px.svg'},
      {icon: 'list',                  file: 'ic_list_24px.svg'},
      {icon: 'lock',                  file: 'ic_lock_24px.svg'},
      {icon: 'person',                file: 'ic_person_24px.svg'},
      {icon: 'settings',              file: 'ic_settings_24px.svg'},
      {icon: 'storage',               file: 'ic_storage_24px.svg'},
      {icon: 'verified_user',         file: 'ic_verified_user_24px.svg'},
    ];

    for (let i = 0; i < Icons.length; i++) {
      this.registry.addSvgIcon(
        Icons[i].icon,
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/' + Icons[i].file));
    }
  }
}
