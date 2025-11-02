// Tracing disabled - OpenTelemetry packages not installed
// Uncomment imports and code below when OpenTelemetry packages are installed
/*
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load';
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch';
import { XMLHttpRequestInstrumentation } from '@opentelemetry/instrumentation-xml-http-request';
import { UserInteractionInstrumentation } from '@opentelemetry/instrumentation-user-interaction';
*/

export interface TracingConfig {
  enabled?: boolean;
  endpoint?: string;
}

// let _provider: WebTracerProvider | undefined;

/**
 * Initialize basic OpenTelemetry tracing for the web app.
 * - lightweight setup suitable for development and local OTLP collector
 * - safe to call multiple times (no-op if already initialized)
 */
export function initTracing(config: TracingConfig = {}) {
  console.debug('Tracing disabled - OpenTelemetry packages not installed');
  return;
}

export function shutdownTracing() {
  console.debug('Tracing shutdown - no-op (OpenTelemetry packages not installed)');
}
