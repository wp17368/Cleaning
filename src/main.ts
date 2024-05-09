import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";
import { ModalModule } from "ngx-bootstrap/modal";

ModalModule.forRoot(),
  bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
  );
