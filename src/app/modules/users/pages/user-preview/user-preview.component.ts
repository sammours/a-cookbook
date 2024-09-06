import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrl: './user-preview.component.scss'
})
export class UserPreviewComponent implements OnInit {
  @Input() id = '';

  protected firstname = 'Annabel';
  protected lastname = 'Gaul';
  
  public isDirty = false;

  constructor(private readonly route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  onSaveClicked() {
    this.isDirty = false;
  }
}

/**
 * app storage // Solange die Seite nicht neu aufgeladen werden
 * session storage // Solange der Browser nicht abgeschlossen ist
 *          // Shared zwischen die Tabs
 * local storage
 *          // Bleibt immer
 */
