import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, FormControl } from '@angular/forms';
import { Author } from '../../course-list/author';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AuthorsInputComponent),
      multi: true,
    }
  ]
})
export class AuthorsInputComponent implements ControlValueAccessor {

  public searchString = new FormControl();
  private authors: Author[];
  public searchAuthors: Author[];
  public selectedAuthors: Author[] = [];
  public selectorShowed: boolean;
  private BASE_URL = 'http://localhost:3004';

  onShow() {
    this.selectorShowed = true;
  }

  onHide() {
    this.selectorShowed = false;
    this.searchString.setValue(null);
  }

  onKeyup(event: KeyboardEvent) {
    if (event.code === 'Escape') {
      this.onHide();
    } else if (event.code === 'Enter') {
      this.selectedAuthors.push(this.searchAuthors[0]);
    }
  }

  onSelect(author: Author) {
    if (this.selectedAuthors.indexOf(author) === -1) {
      this.selectedAuthors.push(author);
      this.selectorShowed = false;
      this.onChange(this.selectedAuthors);
    }
  }

  onDelete(author: Author) {
    this.selectedAuthors.splice(this.selectedAuthors.indexOf(author), 1);
    this.onChange(this.selectedAuthors);
  }

  onChange = (date: Author[]) => { };

  onBlur() {
    this.onTouched();
    const that = this;
    setTimeout(function () {
      that.onHide();
    }, 100);
  }
  onTouched = () => { };

  writeValue(obj: Author[]): void {
    if (obj) {
      this.selectedAuthors = obj;
    }
  }

  registerOnChange(fn: (date: Author[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) {
    this.http.get<any>(`${this.BASE_URL}/authors`).subscribe(a => {
      this.authors = a.map(k => new Author(k.id, k.name, ''));
      this.searchAuthors = this.authors;
    }
    );

    this.searchString.valueChanges
      .pipe(
        debounce(s => interval(500))
      )
      .subscribe(v => {
        if (v) {
          this.searchAuthors = this.authors.filter(a => (a.firstName + ' ' + a.lastName).toUpperCase().includes(v.toUpperCase()));
        } else {
          this.searchAuthors = this.authors;
        }
      });
  }

  public validate(c: FormControl) {
    return null;
  }



}

