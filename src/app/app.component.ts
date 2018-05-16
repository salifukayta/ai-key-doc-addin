import { Component, OnInit } from '@angular/core';

declare const Word: any;
declare const Office: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
    // this.addEventHandlerToBinding();
  }

  ngOnInit() {
    this.addEventHandlerToBinding();
  }

  addEventHandlerToBinding() {
    console.log('Initing addEventHandlerToBinding ');
    Office.select('bindings#a').addHandlerAsync(Office.EventType.BindingDataChanged, (eventArgs) => {
      console.log('Data has changed in binding: ' + eventArgs.binding.id);
    });
    // console.document.body.addHandlerAsync(Office.EventType.BindingDataChanged, (eventArgs) => {
    //   console.log('Data has changed in binding: ' + eventArgs.binding.id);
    // });
  }


  readBody() {
    Word.run(async (context) => {
      const body = context.document.body;
      // Queue a command to load the text property of the proxy body object.
      context.load(body, 'text');
      // Synchronize the document state by executing the queued commands,
      // and return a promise to indicate task completion.
      return context.sync().then(function () {
        console.log('Body contents: ' + body.text);
      });
    });
  }

  writeWord() {
    Word.run(async (context) => {
      // Create a proxy object for the document body.
      const body = context.document.body;

      // Queue a command to load the text property of the proxy body object.
      context.load(body, 'text');

      // Queue a command to insert text into the end of the Word document body.
      body.insertText('This is text inserted after loading the body.text property',
        Word.InsertLocation.end);

      // Synchronize the document state by executing the queued commands,
      // and return a promise to indicate task completion.
      return context.sync().then(function () {
        console.log('Body contents: ' + body.text);
      });
    });
  }
}
