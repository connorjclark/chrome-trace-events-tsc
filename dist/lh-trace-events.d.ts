export namespace TraceEvent {
  interface Base {
    // Comma-separated list of category names.
    cat: string;
    pid: number;
    tid: number;
    ts: number;
  }

  type TraceEvent = 
    TraceEvent.DomContentLoadedEventEnd |
    TraceEvent.EvaluateScript |
    TraceEvent.FirstContentfulPaint |
    TraceEvent.FirstMeaningfulPaint |
    TraceEvent.FirstMeaningfulPaintCandidate |
    TraceEvent.FirstPaint |
    TraceEvent.FunctionCall |
    TraceEvent.InvalidateLayout |
    TraceEvent.Layout |
    TraceEvent.LoadEventEnd |
    TraceEvent.NavigationStart |
    TraceEvent.PaintNonDefaultBackgroundColor |
    TraceEvent.ParseAuthorStyleSheet |
    TraceEvent.Process_labels |
    TraceEvent.RequestStart |
    TraceEvent.ResourceFinish |
    TraceEvent.ResourceReceiveResponse |
    TraceEvent.ResourceSendRequest |
    TraceEvent.RunTask |
    TraceEvent.ScheduleStyleRecalculation |
    TraceEvent.Screenshot |
    TraceEvent.TaskQueueManager.ProcessTaskFromWorkQueue |
    TraceEvent.Thread_name |
    TraceEvent.ThreadControllerImpl.DoWork |
    TraceEvent.ThreadControllerImpl.RunTask |
    TraceEvent.TimerFire |
    TraceEvent.TimerInstall |
    TraceEvent.TracingStartedInBrowser |
    TraceEvent.TracingStartedInPage |
    TraceEvent.V8.Compile |
    TraceEvent.XHRReadyStateChange;

  namespace TraceEvent {
    type DomContentLoadedEventEnd = 
      TraceEvent.DomContentLoadedEventEnd.R;
  
    type EvaluateScript = 
      TraceEvent.EvaluateScript.X;
  
    type FirstContentfulPaint = 
      TraceEvent.FirstContentfulPaint.I |
      TraceEvent.FirstContentfulPaint.R;
  
    type FirstMeaningfulPaint = 
      TraceEvent.FirstMeaningfulPaint.R;
  
    type FirstMeaningfulPaintCandidate = 
      TraceEvent.FirstMeaningfulPaintCandidate.R;
  
    type FirstPaint = 
      TraceEvent.FirstPaint.I |
      TraceEvent.FirstPaint.R;
  
    type FunctionCall = 
      TraceEvent.FunctionCall.B |
      TraceEvent.FunctionCall.E;
  
    type InvalidateLayout = 
      TraceEvent.InvalidateLayout.I;
  
    type Layout = 
      TraceEvent.Layout.B |
      TraceEvent.Layout.E;
  
    type LoadEventEnd = 
      TraceEvent.LoadEventEnd.R;
  
    type NavigationStart = 
      TraceEvent.NavigationStart.R;
  
    type PaintNonDefaultBackgroundColor = 
      TraceEvent.PaintNonDefaultBackgroundColor.R;
  
    type ParseAuthorStyleSheet = 
      TraceEvent.ParseAuthorStyleSheet.X;
  
    type Process_labels = 
      TraceEvent.Process_labels.M;
  
    type RequestStart = 
      TraceEvent.RequestStart.R;
  
    type ResourceFinish = 
      TraceEvent.ResourceFinish.I;
  
    type ResourceReceiveResponse = 
      TraceEvent.ResourceReceiveResponse.I;
  
    type ResourceSendRequest = 
      TraceEvent.ResourceSendRequest.I;
  
    type RunTask = 
      TraceEvent.RunTask.X;
  
    type ScheduleStyleRecalculation = 
      TraceEvent.ScheduleStyleRecalculation.I;
  
    type Screenshot = 
      TraceEvent.Screenshot.O;
  
    type Thread_name = 
      TraceEvent.Thread_name.M;
  
    type TimerFire = 
      TraceEvent.TimerFire.X;
  
    type TimerInstall = 
      TraceEvent.TimerInstall.I;
  
    type TracingStartedInBrowser = 
      TraceEvent.TracingStartedInBrowser.I;
  
    type TracingStartedInPage = 
      TraceEvent.TracingStartedInPage.I;
  
    type XHRReadyStateChange = 
      TraceEvent.XHRReadyStateChange.X;
  
    namespace DomContentLoadedEventEnd {
      interface R extends Base {
        args: {
          frame: string;
        };
        name: 'domContentLoadedEventEnd';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace EvaluateScript {
      interface X extends Base {
        args: {
          data?: {
            columnNumber: number;
            frame: string;
            lineNumber: number;
            stackTrace?: {
              columnNumber: number;
              functionName: string;
              lineNumber: number;
              scriptId: string;
              url: string;
            }[];
            url: string;
          };
        };
        dur: number;
        name: 'EvaluateScript';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FirstContentfulPaint {
      interface I extends Base {
        args: {
          frame: string;
        };
        name: 'firstContentfulPaint';
        ph: 'I';
        s: string;
        tts: number;
      }
    
      interface R extends Base {
        args: {
          data?: {
            navigationId: string;
          };
          frame: string;
        };
        name: 'firstContentfulPaint';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace FirstMeaningfulPaint {
      interface R extends Base {
        args: {
          afterUserInput?: number;
          data?: {
            navigationId: string;
          };
          frame: string;
        };
        name: 'firstMeaningfulPaint';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace FirstMeaningfulPaintCandidate {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
          frame: string;
        };
        name: 'firstMeaningfulPaintCandidate';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace FirstPaint {
      interface I extends Base {
        args: {
          frame: string;
        };
        name: 'firstPaint';
        ph: 'I';
        s: string;
        tts: number;
      }
    
      interface R extends Base {
        args: {
          data?: {
            navigationId: string;
          };
          frame: string;
        };
        name: 'firstPaint';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace FunctionCall {
      interface B extends Base {
        args: {
          data: {
            columnNumber?: number;
            frame: string;
            functionName: string;
            lineNumber: number;
            scriptId: string;
            url: string;
          };
        };
        name: 'FunctionCall';
        ph: 'B';
        tts: number;
      }
    
      interface E extends Base {
        args: {
        
        };
        name: 'FunctionCall';
        ph: 'E';
        tts: number;
      }
    }
  
    namespace InvalidateLayout {
      interface I extends Base {
        args: {
          data: {
            frame: string;
            stackTrace?: {
              columnNumber: number;
              functionName: string;
              lineNumber: number;
              scriptId: string;
              url: string;
            }[];
          };
        };
        name: 'InvalidateLayout';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace Layout {
      interface B extends Base {
        args: {
          beginData: {
            dirtyObjects: number;
            frame: string;
            partialLayout: boolean;
            stackTrace?: {
              columnNumber: number;
              functionName: string;
              lineNumber: number;
              scriptId: string;
              url: string;
            }[];
            totalObjects: number;
          };
        };
        name: 'Layout';
        ph: 'B';
        tts: number;
      }
    
      interface E extends Base {
        args: {
          endData: {
            root: {
            
            }[];
            rootNode: number;
          };
        };
        name: 'Layout';
        ph: 'E';
        tts: number;
      }
    }
  
    namespace LoadEventEnd {
      interface R extends Base {
        args: {
          frame: string;
        };
        name: 'loadEventEnd';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace NavigationStart {
      interface R extends Base {
        args: {
          data?: {
            documentLoaderURL: string;
            isLoadingMainFrame: boolean;
            navigationId: string;
          };
          frame: string;
        };
        name: 'navigationStart';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace PaintNonDefaultBackgroundColor {
      interface R extends Base {
        args: {
        
        };
        name: 'paintNonDefaultBackgroundColor';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace ParseAuthorStyleSheet {
      interface X extends Base {
        args: {
          data: {
            styleSheetUrl: string;
          };
        };
        dur: number;
        name: 'ParseAuthorStyleSheet';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace Process_labels {
      interface M extends Base {
        args: {
          labels: string;
        };
        name: 'process_labels';
        ph: 'M';
      }
    }
  
    namespace RequestStart {
      interface R extends Base {
        args: {
        
        };
        name: 'requestStart';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace ResourceFinish {
      interface I extends Base {
        args: {
          data: {
            decodedBodyLength?: number;
            didFail: boolean;
            encodedDataLength?: number;
            finishTime?: number;
            networkTime?: number;
            requestId: string;
          };
        };
        name: 'ResourceFinish';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace ResourceReceiveResponse {
      interface I extends Base {
        args: {
          data: {
            encodedDataLength?: number;
            frame: string;
            fromCache?: boolean;
            fromServiceWorker?: boolean;
            mimeType: string;
            requestId: string;
            statusCode: number;
            timing?: {
              connectEnd: number;
              connectStart: number;
              dnsEnd: number;
              dnsStart: number;
              proxyEnd: number;
              proxyStart: number;
              pushEnd: number;
              pushStart: number;
              receiveHeadersEnd: number;
              requestTime: number;
              sendEnd: number;
              sendStart: number;
              sslEnd: number;
              sslStart: number;
              workerReady: number;
              workerStart: number;
            };
          };
        };
        name: 'ResourceReceiveResponse';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace ResourceSendRequest {
      interface I extends Base {
        args: {
          data: {
            frame: string;
            priority: string;
            requestId: string;
            requestMethod: string;
            stackTrace?: {
              columnNumber: number;
              functionName: string;
              lineNumber: number;
              scriptId: string;
              url: string;
            }[];
            url: string;
          };
        };
        name: 'ResourceSendRequest';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace RunTask {
      interface X extends Base {
        args: {
        
        };
        dur?: number;
        name: 'RunTask';
        ph: 'X';
        tdur?: number;
        tts: number;
      }
    }
  
    namespace ScheduleStyleRecalculation {
      interface I extends Base {
        args: {
          data: {
            frame: string;
            stackTrace?: {
              columnNumber: number;
              functionName: string;
              lineNumber: number;
              scriptId: string;
              url: string;
            }[];
          };
        };
        name: 'ScheduleStyleRecalculation';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace Screenshot {
      interface O extends Base {
        args: {
          snapshot: string;
        };
        id: string;
        name: 'Screenshot';
        ph: 'O';
        tts: number;
      }
    }
  
    namespace TaskQueueManager {
      type ProcessTaskFromWorkQueue = 
        TraceEvent.TaskQueueManager.ProcessTaskFromWorkQueue.X;
    
      namespace ProcessTaskFromWorkQueue {
        interface X extends Base {
          args: {
            src_file: string;
            src_func: string;
          };
          dur?: number;
          name: 'TaskQueueManager::ProcessTaskFromWorkQueue';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Thread_name {
      interface M extends Base {
        args: {
          name: string;
        };
        name: 'thread_name';
        ph: 'M';
      }
    }
  
    namespace ThreadControllerImpl {
      type DoWork = 
        TraceEvent.ThreadControllerImpl.DoWork.X;
    
      type RunTask = 
        TraceEvent.ThreadControllerImpl.RunTask.X;
    
      namespace DoWork {
        interface X extends Base {
          args: {
          
          };
          dur?: number;
          name: 'ThreadControllerImpl::DoWork';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RunTask {
        interface X extends Base {
          args: {
            src_file?: string;
            src_func?: string;
          };
          bind_id?: string;
          dur?: number;
          flow_in?: boolean;
          id?: string;
          name: 'ThreadControllerImpl::RunTask';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace TimerFire {
      interface X extends Base {
        args: {
          data: {
            frame: string;
            timerId: number;
          };
        };
        dur: number;
        name: 'TimerFire';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace TimerInstall {
      interface I extends Base {
        args: {
          data: {
            frame: string;
            singleShot: boolean;
            stackTrace?: {
              columnNumber: number;
              functionName: string;
              lineNumber: number;
              scriptId: string;
              url: string;
            }[];
            timeout: number;
            timerId: number;
          };
        };
        name: 'TimerInstall';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace TracingStartedInBrowser {
      interface I extends Base {
        args: {
          data: {
            frameTreeNodeId: number;
            frames: {
              frame: string;
              name: string;
              processId: number;
              url: string;
            }[];
            persistentIds: boolean;
          };
        };
        name: 'TracingStartedInBrowser';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace TracingStartedInPage {
      interface I extends Base {
        args: {
          data: {
            page: string;
            sessionId: string;
          };
        };
        name: 'TracingStartedInPage';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace V8 {
      type Compile = 
        TraceEvent.V8.Compile.B |
        TraceEvent.V8.Compile.E |
        TraceEvent.V8.Compile.X;
    
      namespace Compile {
        interface B extends Base {
          args: {
            fileName: string;
          };
          name: 'v8.compile';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
            data: {
              cacheConsumeOptions?: string;
              cacheProduceOptions?: string;
              cacheRejected?: boolean;
              columnNumber: number;
              consumedCacheSize?: number;
              lineNumber: number;
              notStreamedReason?: string;
              producedCacheSize?: number;
              streamed: boolean;
              url: string;
            };
          };
          name: 'v8.compile';
          ph: 'E';
          tts: number;
        }
      
        interface X extends Base {
          args: {
            data?: {
              columnNumber: number;
              lineNumber: number;
              url: string;
            };
            fileName?: string;
          };
          dur?: number;
          name: 'v8.compile';
          ph: 'X';
          tdur?: number;
          tts: number;
        }
      }
    }
  
    namespace XHRReadyStateChange {
      interface X extends Base {
        args: {
          data: {
            frame: string;
            readyState: number;
            stackTrace?: {
              columnNumber: number;
              functionName: string;
              lineNumber: number;
              scriptId: string;
              url: string;
            }[];
            url: string;
          };
        };
        dur: number;
        name: 'XHRReadyStateChange';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  }
}
