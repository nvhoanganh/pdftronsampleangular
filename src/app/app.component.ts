import {
  Component,
  ViewChild,
  OnInit,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import WebViewer from "@pdftron/webviewer";
import { initializeHTMLViewer } from "@pdftron/webviewer-html";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild("viewer", { static: false }) viewer: ElementRef;

  ngAfterViewInit(): void {
    WebViewer(
      {
        path: "lib",
      },
      this.viewer.nativeElement
    ).then(async (instance) => {
      const {
        loadHTMLPage,
        loadHTMLPages,
        toggleAnnotations,
      } = await initializeHTMLViewer(instance);

      /* loadHTMLPage(
        "https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik",
        500,
        500
      ); */

      loadHTMLPages([
        {
          url:
            'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d41656.714956835!2d-123.0850416!3d49.26607539999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1591640645684!5m2!1sen!2sca',
          width: 1800,
          height: 1100,
        },
        {
          url:
            'https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik',
          width: 600,
          height: 450,
        },
      ]);

      instance.setHeaderItems((header) => {
        header.push({
          type: "actionButton",
          img:
            '<svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.cls-1{fill:#8c8c8c;}</style></defs><title>icon - lin- header - annotations</title><path class="cls-1" d="M19.5,12.6l1.9-2.2v9.4A2.2,2.2,0,0,1,19.3,22H4.3A2.24,2.24,0,0,1,2,19.8V4.7A2.2,2.2,0,0,1,1,2.5h9.5L11.7,4.4H3.8V20.1H19.4V12.6ZM22,5.9a2.2,2.2,0,0,1-.6,1.5L11,17.7H6.3V12.9L16.7,2.6a2.17,2.17,0,0,1,3,0l1.7,1.7A2.27,2.27,0,0,1,22,9ZM16.9,9.2,14.7,7,8,13.8V16h2.1ZM20.2,6,18,3.8,16.1,5.7l2.2,2.2Z"></path></svg>',
          onClick: () => {
            toggleAnnotations();
          },
        });
      });
    });
  }

  ngOnInit() {
    // this.wvDocumentLoadedHandler = this.wvDocumentLoadedHandler.bind(this);
  }
}
