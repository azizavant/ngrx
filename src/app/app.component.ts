import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { countSelector, decrease, increase, reset, updatedAtSelector } from './reducers/counter'
import { count, map } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  count$ = this.store.select(countSelector)
  cannotDec$ = this.count$.pipe(
    map(count => count <= 0)
  )
  updatedAt$ = this.store.select(updatedAtSelector)

  constructor(private store: Store) {
  }

  inc(): void {
    this.store.dispatch(increase())
  }

  dec(): void {
    this.store.dispatch(decrease())
  }

  reset(): void {
    this.store.dispatch(reset())
  }
}
