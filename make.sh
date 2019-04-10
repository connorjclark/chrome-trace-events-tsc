#!/bin/bash -ex

mkdir -p dist

node src/main.js > dist/trace-events.d.ts

# Make a subset for Lighthouse.
EVENT_FILTER=(
  domContentLoadedEventEnd
  EvaluateScript
  firstContentfulPaint
  firstMeaningfulPaint
  firstMeaningfulPaintCandidate
  firstPaint
  FunctionCall
  InvalidateLayout
  Layout
  loadEventEnd
  navigationStart
  paintNonDefaultBackgroundColor
  ParseAuthorStyleSheet
  process_labels
  requestStart
  ResourceFinish
  ResourceReceiveResponse
  ResourceSendRequest
  RunTask
  ScheduleStyleRecalculation
  Screenshot
  Task
  TaskQueueManager::ProcessTaskFromWorkQueue
  thread_name
  ThreadControllerImpl::DoWork
  ThreadControllerImpl::RunTask
  TimerFire
  TimerInstall
  TracingStartedInBrowser
  TracingStartedInPage
  v8.compile
  v8.compileModule
  XHRReadyStateChange
)
IFS=',' eval 'EVENT_FILTER="${EVENT_FILTER[*]}"'
EVENT_FILTER=$EVENT_FILTER node src/main.js > dist/lh-trace-events.d.ts

echo "dist/lh-trace-events.d.ts updated."
