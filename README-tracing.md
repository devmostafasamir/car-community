# Tracing (OpenTelemetry) — setup notes

This project includes a minimal OpenTelemetry bootstrap at `src/app/tracing.ts` and is wired to run before the Angular app bootstraps (`src/main.ts`). The code is added but you must install the OpenTelemetry packages before the app can build.

Recommended install (from project root) — Windows (cmd.exe):

```cmd
npm install
```

If you hit peer-dependency conflicts (common with Angular's `zone.js`), run:

```cmd
npm install --legacy-peer-deps
```

If that still fails, try installing the OpenTelemetry packages manually with compatible versions. Example packages used by the bootstrap file:

- @opentelemetry/api
- @opentelemetry/sdk-trace-web
- @opentelemetry/sdk-trace-base
- @opentelemetry/exporter-trace-otlp-http
- @opentelemetry/instrumentation
- @opentelemetry/instrumentation-fetch
- @opentelemetry/instrumentation-xml-http-request
- @opentelemetry/instrumentation-document-load
- @opentelemetry/instrumentation-user-interaction

Install them like:

```cmd
npm install --save @opentelemetry/api @opentelemetry/sdk-trace-web @opentelemetry/sdk-trace-base @opentelemetry/exporter-trace-otlp-http @opentelemetry/instrumentation @opentelemetry/instrumentation-fetch @opentelemetry/instrumentation-xml-http-request @opentelemetry/instrumentation-document-load @opentelemetry/instrumentation-user-interaction --legacy-peer-deps
```

Configuration
- `src/environments/environment.ts` contains a `tracing` block with `enabled` and `otlpEndpoint` values. Update them per environment and your OTLP collector URL.

Running a collector
- For local development you can run an OTLP collector (OpenTelemetry Collector) and point `otlpEndpoint` to `http://localhost:4318/v1/traces`.

Troubleshooting
- If installation fails due to `zone.js` peer requirements, either use `--legacy-peer-deps` or remove/replace the `instrumentation-user-interaction` package. You can also pin package versions that are compatible with your Angular/zone.js version.

Want me to try installing and building here? I attempted `npm install` and it hit peer dependency problems; I can retry with `--legacy-peer-deps` or try installing a reduced set of packages if you want — tell me which option to try.
