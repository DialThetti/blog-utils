import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { BlogEntryComponent } from './components/blog-entry/blog-entry.component';

@NgModule({
  declarations: [
    BlogEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [BlogEntryComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    // Convert `BlogEntryComponent` to a custom element.
    const BlogEntryElement = createCustomElement(BlogEntryComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('blog-entry', BlogEntryElement);
  }

  ngDoBootstrap() {}

 }
