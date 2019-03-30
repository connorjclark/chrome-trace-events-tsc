#!/bin/bash -ex

mkdir -p dist

node src/main.js > dist/trace-events.d.ts

# Make a subset for Lighthouse.
DEBUG_GREP=(
  EvaluateScript
  FunctionCall
  InvalidateLayout
  navigationStart
  ParseAuthorStyleSheet
  ResourceSendRequest
  ScheduleStyleRecalculation
  Screenshot
  TimerFire
  TimerInstall
  TracingStartedInBrowser
  TracingStartedInPage
  v8.compile
  v8.compileModule
  XHRReadyStateChange
)
IFS='|' eval 'DEBUG_GREP="${DEBUG_GREP[*]}"'
DEBUG_GREP=$DEBUG_GREP node src/main.js > dist/lh-trace-events.d.ts
