import { initTracing } from './app/tracing';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// initialize tracing as early as possible (no-op if disabled)
initTracing({
  enabled: environment.tracing?.enabled ?? !environment.production,
  endpoint: environment.tracing?.otlpEndpoint ?? 'http://localhost:4318/v1/traces',
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
