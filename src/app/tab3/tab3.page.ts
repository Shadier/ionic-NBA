import { Component } from '@angular/core';
import { ProviderService } from '../provider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  id 
  player

  constructor(
    private _route: ActivatedRoute,
    public _provider: ProviderService
  ){
    this.id = this._route.snapshot.paramMap.get('id');
    this.fillPlayer()
  }

  fillPlayer(){
    this._provider.getPlayer(this.id)
    .then(data => {
      this.player = data;
    });
  }
}
