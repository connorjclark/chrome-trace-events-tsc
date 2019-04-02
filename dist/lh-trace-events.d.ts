export namespace TraceEvent {
  interface Base {
    // Comma-separated list of category names.
    cat: string;
    // Process id of the process that generated the event.
    pid: number;
    // Thread id of the thread that generated the event.
    tid: number;
    // Timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Denotes a mark of the event DomContentLoadedEventEnd.
      ph: 'R';
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Duration.
      dur: number;
      name: 'EvaluateScript';
      // Denotes the end of the event EvaluateScript.
      ph: 'X';
      tdur: number;
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
      tts: number;
    }
  }

  namespace FirstContentfulPaint {
    interface I extends Base {
      args: {
        frame: string;
      };
      name: 'firstContentfulPaint';
      // Denotes an event FirstContentfulPaint. There are no begining/ending phases.
      ph: 'I';
      s: string;
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Denotes a mark of the event FirstContentfulPaint.
      ph: 'R';
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Denotes a mark of the event FirstMeaningfulPaint.
      ph: 'R';
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Denotes a mark of the event FirstMeaningfulPaintCandidate.
      ph: 'R';
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
      tts: number;
    }
  }

  namespace FirstPaint {
    interface I extends Base {
      args: {
        frame: string;
      };
      name: 'firstPaint';
      // Denotes an event FirstPaint. There are no begining/ending phases.
      ph: 'I';
      s: string;
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Denotes a mark of the event FirstPaint.
      ph: 'R';
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Denotes the beginning of the event FunctionCall.
      ph: 'B';
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
      tts: number;
    }
  
    interface E extends Base {
      args: {
      
      };
      name: 'FunctionCall';
      // Denotes the ending of the event FunctionCall.
      ph: 'E';
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Denotes an event InvalidateLayout. There are no begining/ending phases.
      ph: 'I';
      s: string;
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Denotes the beginning of the event Layout.
      ph: 'B';
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Denotes the ending of the event Layout.
      ph: 'E';
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
      tts: number;
    }
  }

  namespace LoadEventEnd {
    interface R extends Base {
      args: {
        frame: string;
      };
      name: 'loadEventEnd';
      // Denotes a mark of the event LoadEventEnd.
      ph: 'R';
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Denotes a mark of the event NavigationStart.
      ph: 'R';
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
      tts: number;
    }
  }

  namespace PaintNonDefaultBackgroundColor {
    interface R extends Base {
      args: {
      
      };
      name: 'paintNonDefaultBackgroundColor';
      // Denotes a mark of the event PaintNonDefaultBackgroundColor.
      ph: 'R';
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Duration.
      dur: number;
      name: 'ParseAuthorStyleSheet';
      // Denotes the end of the event ParseAuthorStyleSheet.
      ph: 'X';
      tdur: number;
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
      tts: number;
    }
  }

  namespace Process_labels {
    interface M extends Base {
      args: {
        labels: string;
      };
      name: 'process_labels';
      // Denotes metadata for the event Process_labels.
      ph: 'M';
    }
  }

  namespace RequestStart {
    interface R extends Base {
      args: {
      
      };
      name: 'requestStart';
      // Denotes a mark of the event RequestStart.
      ph: 'R';
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Denotes an event ResourceFinish. There are no begining/ending phases.
      ph: 'I';
      s: string;
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Denotes an event ResourceReceiveResponse. There are no begining/ending phases.
      ph: 'I';
      s: string;
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Denotes an event ResourceSendRequest. There are no begining/ending phases.
      ph: 'I';
      s: string;
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
      tts: number;
    }
  }

  namespace RunTask {
    interface X extends Base {
      args: {
      
      };
      // Duration.
      dur?: number;
      name: 'RunTask';
      // Denotes the end of the event RunTask.
      ph: 'X';
      tdur?: number;
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Denotes an event ScheduleStyleRecalculation. There are no begining/ending phases.
      ph: 'I';
      s: string;
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Denotes a snapshot object of the event Screenshot.
      ph: 'O';
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
        // Duration.
        dur?: number;
        name: 'TaskQueueManager::ProcessTaskFromWorkQueue';
        // Denotes the end of the event ProcessTaskFromWorkQueue.
        ph: 'X';
        tdur: number;
        // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Denotes metadata for the event Thread_name.
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
        // Duration.
        dur?: number;
        name: 'ThreadControllerImpl::DoWork';
        // Denotes the end of the event DoWork.
        ph: 'X';
        tdur: number;
        // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
        // Duration.
        dur?: number;
        flow_in?: boolean;
        id?: string;
        name: 'ThreadControllerImpl::RunTask';
        // Denotes the end of the event RunTask.
        ph: 'X';
        tdur: number;
        // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Duration.
      dur: number;
      name: 'TimerFire';
      // Denotes the end of the event TimerFire.
      ph: 'X';
      tdur: number;
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Denotes an event TimerInstall. There are no begining/ending phases.
      ph: 'I';
      s: string;
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Denotes an event TracingStartedInBrowser. There are no begining/ending phases.
      ph: 'I';
      s: string;
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Denotes an event TracingStartedInPage. There are no begining/ending phases.
      ph: 'I';
      s: string;
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
        // Denotes the beginning of the event Compile.
        ph: 'B';
        // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
        // Denotes the ending of the event Compile.
        ph: 'E';
        // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
        // Duration.
        dur?: number;
        name: 'v8.compile';
        // Denotes the end of the event Compile.
        ph: 'X';
        tdur?: number;
        // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
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
      // Duration.
      dur: number;
      name: 'XHRReadyStateChange';
      // Denotes the end of the event XHRReadyStateChange.
      ph: 'X';
      tdur: number;
      // Thread timestamp of the event. This value is monotonically increasing among all events generated in the same thread.
      tts: number;
    }
  }
}
