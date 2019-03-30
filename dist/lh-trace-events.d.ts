export namespace _TraceEvent {
  interface Base {
    cat: string;
    pid: number;
    tid: number;
    ts: number;
    tts: number;
  }

  type TraceEvent = 
    EvaluateScript.X |
    FunctionCall.B |
    FunctionCall.E |
    InvalidateLayout.I |
    MouseEventManager.FakeMouseMoveEventTimerFired.X |
    NavigationStart.R |
    NavigationTimingnavigationStart.I |
    ParseAuthorStyleSheet.X |
    PlatformResourceSendRequest.B |
    PlatformResourceSendRequest.E |
    ResourceSendRequest.I |
    ScheduleStyleRecalculation.I |
    Screenshot.O |
    TimerFire.X |
    TimerInstall.I |
    TracingStartedInBrowser.I |
    V8.Compile.B |
    V8.Compile.E |
    V8.Compile.X |
    XHRReadyStateChange.X;

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
    }
  }

  namespace FunctionCall {
    interface B extends Base {
      args: {
        data: {
          columnNumber: number;
          frame: string;
          functionName: string;
          lineNumber: number;
          scriptId: string;
          url: string;
        };
      };
      name: 'FunctionCall';
      ph: 'B';
    }
  
    interface E extends Base {
      args: {
      
      };
      name: 'FunctionCall';
      ph: 'E';
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
    }
  }

  namespace MouseEventManager {
    namespace FakeMouseMoveEventTimerFired {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'MouseEventManager::fakeMouseMoveEventTimerFired';
        ph: 'X';
        tdur: number;
      }
    }
  }

  namespace NavigationStart {
    interface R extends Base {
      args: {
        data: {
          documentLoaderURL: string;
          isLoadingMainFrame: boolean;
          navigationId: string;
        };
        frame: string;
      };
      name: 'navigationStart';
      ph: 'R';
    }
  }

  namespace NavigationTimingnavigationStart {
    interface I extends Base {
      args: {
      
      };
      name: 'NavigationTiming navigationStart';
      ph: 'I';
      s: string;
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
    }
  }

  namespace PlatformResourceSendRequest {
    interface B extends Base {
      args: {
        data: {
          id: string;
        };
      };
      name: 'PlatformResourceSendRequest';
      ph: 'B';
    }
  
    interface E extends Base {
      args: {
      
      };
      name: 'PlatformResourceSendRequest';
      ph: 'E';
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
    }
  }

  namespace V8 {
    namespace Compile {
      interface B extends Base {
        args: {
          fileName: string;
        };
        name: 'v8.compile';
        ph: 'B';
      }
    
      interface E extends Base {
        args: {
          data: {
            cacheConsumeOptions?: string;
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
      }
    
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'v8.compile';
        ph: 'X';
        tdur: number;
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
    }
  }
}
