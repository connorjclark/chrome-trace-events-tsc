export namespace _TraceEvent {
  interface Base {
    cat: string;
    pid: number;
    tid: number;
    ts: number;
  }

  type TraceEvent = 
    Animation.B |
    Animation.E |
    Animation.N |
    CommitLoad.X |
    CompositeLayers.B |
    CompositeLayers.E |
    ContextCreatedNotification.X |
    DecodeImage.X |
    DecodeLazyPixelRef.X |
    DomComplete.R |
    DOMContentLoaded.B |
    DOMContentLoaded.E |
    DomContentLoadedEventEnd.R |
    DomContentLoadedEventStart.R |
    DomInteractive.R |
    DomLoading.R |
    DrawLazyPixelRef.I |
    EndofTrace.B |
    EndofTrace.E |
    EvaluateScript.X |
    EventDispatch.X |
    FetchStart.R |
    FireAnimationFrame.X |
    FirstContentfulPaint.B |
    FirstContentfulPaint.E |
    FirstContentfulPaint.R |
    FirstImagePaint.R |
    FirstLayout.R |
    FirstMeaningfulPaint.B |
    FirstMeaningfulPaint.E |
    FirstMeaningfulPaint.R |
    FirstMeaningfulPaintCandidate.R |
    FirstPaint.R |
    FirstVisualChange.B |
    FirstVisualChange.E |
    FrameCommittedInBrowser.I |
    FrameDeletedInBrowser.I |
    FrameStartedLoading.I |
    FunctionCall.B |
    FunctionCall.E |
    GPUTask.X |
    HitTest.B |
    HitTest.E |
    ImageDecodeTask.B |
    ImageDecodeTask.E |
    InstallConditionalFeatures.X |
    InvalidateLayout.I |
    LayerId.D |
    LayerId.N |
    Layout.B |
    Layout.E |
    LoadEventEnd.R |
    LoadEventStart.R |
    LocalWindowProxy.CreateContext.X |
    LocalWindowProxy.Initialize.X |
    LocalWindowProxy.SetupWindowPrototypeChain.X |
    LocalWindowProxy.UpdateDocumentProperty.X |
    MajorGC.B |
    MajorGC.E |
    MarkDOMContent.I |
    MarkLoad.I |
    MinorGC.B |
    MinorGC.E |
    NavigationStart.R |
    Num_cpus.M |
    OnLoad.B |
    OnLoad.E |
    Paint.X |
    PaintImage.X |
    ParseAuthorStyleSheet.X |
    ParseHTML.B |
    ParseHTML.E |
    PlatformResourceSendRequest.B |
    PlatformResourceSendRequest.E |
    Process_labels.M |
    Process_name.M |
    Process_sort_index.M |
    Process_uptime_seconds.M |
    RasterTask.B |
    RasterTask.E |
    RequestAnimationFrame.I |
    RequestStart.R |
    ResourceChangePriority.X |
    ResourceFinish.I |
    ResourceReceivedData.I |
    ResourceReceiveResponse.I |
    ResourceSendRequest.I |
    ResponseEnd.R |
    RunMicrotasks.B |
    RunMicrotasks.E |
    RunTask.X |
    ScheduledAction.Execute.X |
    ScheduleStyleRecalculation.I |
    Screenshot.O |
    SetLayerTreeId.I |
    SpeedIndex.B |
    SpeedIndex.E |
    Thread_name.M |
    Thread_sort_index.M |
    TimerFire.X |
    TimerInstall.I |
    TimerRemove.I |
    TracingSessionIdForWorker.I |
    TracingStartedInBrowser.I |
    UnloadEventEnd.R |
    UnloadEventStart.R |
    UpdateCounters.I |
    UpdateLayer.B |
    UpdateLayer.E |
    UpdateLayerTree.X |
    UpdateLayoutTree.B |
    UpdateLayoutTree.E |
    V8.CallFunction.X |
    V8.Compile.B |
    V8.Compile.E |
    V8.Compile.X |
    V8.DeoptimizeCode.X |
    V8.Execute.B |
    V8.Execute.E |
    V8.GCCompactor.X |
    V8.GCIdleNotification.X |
    V8.GCPhantomHandleProcessingCallback.X |
    V8.GCScavenger.X |
    V8.HandleInterrupts.X |
    V8.InvokeApiInterruptCallbacks.X |
    V8.NewContext.B |
    V8.NewContext.E |
    V8.NewInstance.X |
    V8.ParseOnBackground.X |
    V8.Run.X |
    V8.RunMicrotasks.B |
    V8.RunMicrotasks.E |
    V8.ScriptCompiler.B |
    V8.ScriptCompiler.E |
    V8.StackGuard.X |
    V8.Task.B |
    V8.Task.E |
    VisuallyComplete100.B |
    VisuallyComplete100.E |
    XHRLoad.X |
    XHRReadyStateChange.X;

  namespace Animation {
    interface B extends Base {
      args: {
        data: {
          id: string;
          name: string;
          nodeId: number;
          nodeName: string;
          state: string;
        };
      };
      id: string;
      name: 'Animation';
      ph: 'b';
      tts: number;
    }
  
    interface E extends Base {
      args: {
        endData: {
          state: string;
        };
      };
      id: string;
      name: 'Animation';
      ph: 'e';
      tts: number;
    }
  
    interface N extends Base {
      args: {
        data: {
          state: string;
        };
      };
      id: string;
      name: 'Animation';
      ph: 'n';
      tts: number;
    }
  }

  namespace CommitLoad {
    interface X extends Base {
      args: {
        data: {
          frame: string;
          isMainFrame: boolean;
          name: string;
          nodeId?: number;
          page: string;
          parent?: string;
          url: string;
        };
      };
      dur: number;
      name: 'CommitLoad';
      ph: 'X';
      tdur: number;
      tts: number;
    }
  }

  namespace CompositeLayers {
    interface B extends Base {
      args: {
        layerTreeId: number;
      };
      name: 'CompositeLayers';
      ph: 'B';
      tts: number;
    }
  
    interface E extends Base {
      args: {
      
      };
      name: 'CompositeLayers';
      ph: 'E';
      tts: number;
    }
  }

  namespace ContextCreatedNotification {
    interface X extends Base {
      args: {
        IsMainFrame: boolean;
      };
      dur: number;
      name: 'ContextCreatedNotification';
      ph: 'X';
      tdur: number;
      tts: number;
    }
  }

  namespace DecodeImage {
    interface X extends Base {
      args: {
        imageType: string;
      };
      dur: number;
      name: 'Decode Image';
      ph: 'X';
      tdur: number;
      tts: number;
    }
  }

  namespace DecodeLazyPixelRef {
    interface X extends Base {
      args: {
        LazyPixelRef: number;
      };
      dur: number;
      name: 'Decode LazyPixelRef';
      ph: 'X';
      tdur: number;
      tts: number;
    }
  }

  namespace DomComplete {
    interface R extends Base {
      args: {
        frame: string;
      };
      name: 'domComplete';
      ph: 'R';
      tts: number;
    }
  }

  namespace DOMContentLoaded {
    interface B extends Base {
      args: {
      
      };
      id: string;
      name: 'DOM Content Loaded';
      ph: 'b';
    }
  
    interface E extends Base {
      args: {
      
      };
      id: string;
      name: 'DOM Content Loaded';
      ph: 'e';
    }
  }

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

  namespace DomContentLoadedEventStart {
    interface R extends Base {
      args: {
        frame: string;
      };
      name: 'domContentLoadedEventStart';
      ph: 'R';
      tts: number;
    }
  }

  namespace DomInteractive {
    interface R extends Base {
      args: {
        frame: string;
      };
      name: 'domInteractive';
      ph: 'R';
      tts: number;
    }
  }

  namespace DomLoading {
    interface R extends Base {
      args: {
        frame: string;
      };
      name: 'domLoading';
      ph: 'R';
      tts: number;
    }
  }

  namespace DrawLazyPixelRef {
    interface I extends Base {
      args: {
        LazyPixelRef: number;
      };
      name: 'Draw LazyPixelRef';
      ph: 'I';
      s: string;
      tts: number;
    }
  }

  namespace EndofTrace {
    interface B extends Base {
      args: {
      
      };
      id: string;
      name: 'End of Trace';
      ph: 'b';
    }
  
    interface E extends Base {
      args: {
      
      };
      id: string;
      name: 'End of Trace';
      ph: 'e';
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

  namespace EventDispatch {
    interface X extends Base {
      args: {
        data: {
          stackTrace?: {
            columnNumber: number;
            functionName: string;
            lineNumber: number;
            scriptId: string;
            url: string;
          }[];
          type: string;
        };
      };
      dur: number;
      name: 'EventDispatch';
      ph: 'X';
      tdur: number;
      tts: number;
    }
  }

  namespace FetchStart {
    interface R extends Base {
      args: {
        frame: string;
      };
      name: 'fetchStart';
      ph: 'R';
      tts: number;
    }
  }

  namespace FireAnimationFrame {
    interface X extends Base {
      args: {
        data: {
          frame: string;
          id: number;
        };
      };
      dur: number;
      name: 'FireAnimationFrame';
      ph: 'X';
      tdur: number;
      tts: number;
    }
  }

  namespace FirstContentfulPaint {
    interface B extends Base {
      args: {
      
      };
      id: string;
      name: 'First Contentful Paint';
      ph: 'b';
    }
  
    interface E extends Base {
      args: {
      
      };
      id: string;
      name: 'First Contentful Paint';
      ph: 'e';
    }
  
    interface R extends Base {
      args: {
        data: {
          navigationId: string;
        };
        frame: string;
      };
      name: 'firstContentfulPaint';
      ph: 'R';
      tts: number;
    }
  }

  namespace FirstImagePaint {
    interface R extends Base {
      args: {
        data: {
          navigationId: string;
        };
        frame: string;
      };
      name: 'firstImagePaint';
      ph: 'R';
      tts: number;
    }
  }

  namespace FirstLayout {
    interface R extends Base {
      args: {
        frame: string;
      };
      name: 'firstLayout';
      ph: 'R';
      tts: number;
    }
  }

  namespace FirstMeaningfulPaint {
    interface B extends Base {
      args: {
      
      };
      id: string;
      name: 'First Meaningful Paint';
      ph: 'b';
    }
  
    interface E extends Base {
      args: {
      
      };
      id: string;
      name: 'First Meaningful Paint';
      ph: 'e';
    }
  
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
    interface R extends Base {
      args: {
        data: {
          navigationId: string;
        };
        frame: string;
      };
      name: 'firstPaint';
      ph: 'R';
      tts: number;
    }
  }

  namespace FirstVisualChange {
    interface B extends Base {
      args: {
      
      };
      id: string;
      name: 'First Visual Change';
      ph: 'b';
    }
  
    interface E extends Base {
      args: {
      
      };
      id: string;
      name: 'First Visual Change';
      ph: 'e';
    }
  }

  namespace FrameCommittedInBrowser {
    interface I extends Base {
      args: {
        data: {
          frame: string;
          name: string;
          parent?: string;
          processId: number;
          url: string;
        };
      };
      name: 'FrameCommittedInBrowser';
      ph: 'I';
      s: string;
      tts: number;
    }
  }

  namespace FrameDeletedInBrowser {
    interface I extends Base {
      args: {
        data: {
          frame: string;
        };
      };
      name: 'FrameDeletedInBrowser';
      ph: 'I';
      s: string;
      tts: number;
    }
  }

  namespace FrameStartedLoading {
    interface I extends Base {
      args: {
        frame: string;
      };
      name: 'FrameStartedLoading';
      ph: 'I';
      s: string;
      tts: number;
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

  namespace GPUTask {
    interface X extends Base {
      args: {
        data: {
          renderer_pid: number;
          used_bytes: number;
        };
      };
      dur: number;
      name: 'GPUTask';
      ph: 'X';
      tdur: number;
      tts: number;
    }
  }

  namespace HitTest {
    interface B extends Base {
      args: {
      
      };
      name: 'HitTest';
      ph: 'B';
      tts: number;
    }
  
    interface E extends Base {
      args: {
        endData: {
          nodeId: number;
          nodeName: string;
          rectilinear: boolean;
          x: number;
          y: number;
        };
      };
      name: 'HitTest';
      ph: 'E';
      tts: number;
    }
  }

  namespace ImageDecodeTask {
    interface B extends Base {
      args: {
        pixelRefId: number;
      };
      name: 'ImageDecodeTask';
      ph: 'B';
      tts: number;
    }
  
    interface E extends Base {
      args: {
      
      };
      name: 'ImageDecodeTask';
      ph: 'E';
      tts: number;
    }
  }

  namespace InstallConditionalFeatures {
    interface X extends Base {
      args: {
        IsMainFrame: boolean;
      };
      dur: number;
      name: 'InstallConditionalFeatures';
      ph: 'X';
      tdur: number;
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

  namespace LayerId {
    interface D extends Base {
      args: {
      
      };
      id: string;
      name: 'layerId';
      ph: 'D';
      tts: number;
    }
  
    interface N extends Base {
      args: {
      
      };
      id: string;
      name: 'layerId';
      ph: 'N';
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

  namespace LoadEventStart {
    interface R extends Base {
      args: {
        frame: string;
      };
      name: 'loadEventStart';
      ph: 'R';
      tts: number;
    }
  }

  namespace LocalWindowProxy {
    namespace CreateContext {
      interface X extends Base {
        args: {
          IsMainFrame: boolean;
        };
        dur: number;
        name: 'LocalWindowProxy::CreateContext';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace Initialize {
      interface X extends Base {
        args: {
          IsMainFrame: boolean;
        };
        dur: number;
        name: 'LocalWindowProxy::Initialize';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace SetupWindowPrototypeChain {
      interface X extends Base {
        args: {
          IsMainFrame: boolean;
        };
        dur: number;
        name: 'LocalWindowProxy::SetupWindowPrototypeChain';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace UpdateDocumentProperty {
      interface X extends Base {
        args: {
          IsMainFrame: boolean;
        };
        dur: number;
        name: 'LocalWindowProxy::UpdateDocumentProperty';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  }

  namespace MajorGC {
    interface B extends Base {
      args: {
        type: string;
        usedHeapSizeBefore: number;
      };
      name: 'MajorGC';
      ph: 'B';
      tts: number;
    }
  
    interface E extends Base {
      args: {
        usedHeapSizeAfter: number;
      };
      name: 'MajorGC';
      ph: 'E';
      tts: number;
    }
  }

  namespace MarkDOMContent {
    interface I extends Base {
      args: {
        data: {
          frame: string;
          isMainFrame: boolean;
          page: string;
        };
      };
      name: 'MarkDOMContent';
      ph: 'I';
      s: string;
      tts: number;
    }
  }

  namespace MarkLoad {
    interface I extends Base {
      args: {
        data: {
          frame: string;
          isMainFrame: boolean;
          page: string;
        };
      };
      name: 'MarkLoad';
      ph: 'I';
      s: string;
      tts: number;
    }
  }

  namespace MinorGC {
    interface B extends Base {
      args: {
        usedHeapSizeBefore: number;
      };
      name: 'MinorGC';
      ph: 'B';
      tts: number;
    }
  
    interface E extends Base {
      args: {
        usedHeapSizeAfter: number;
      };
      name: 'MinorGC';
      ph: 'E';
      tts: number;
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
      tts: number;
    }
  }

  namespace Num_cpus {
    interface M extends Base {
      args: {
        number: number;
      };
      name: 'num_cpus';
      ph: 'M';
    }
  }

  namespace OnLoad {
    interface B extends Base {
      args: {
      
      };
      id: string;
      name: 'On Load';
      ph: 'b';
    }
  
    interface E extends Base {
      args: {
      
      };
      id: string;
      name: 'On Load';
      ph: 'e';
    }
  }

  namespace Paint {
    interface X extends Base {
      args: {
        data: {
          clip: {
          
          }[];
          frame: string;
          layerId: number;
          nodeId: number;
        };
      };
      dur: number;
      name: 'Paint';
      ph: 'X';
      tdur: number;
      tts: number;
    }
  }

  namespace PaintImage {
    interface X extends Base {
      args: {
        data: {
          height: number;
          nodeId: number;
          srcHeight: number;
          srcWidth: number;
          url?: string;
          width: number;
          x: number;
          y: number;
        };
      };
      dur: number;
      name: 'PaintImage';
      ph: 'X';
      tdur: number;
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

  namespace ParseHTML {
    interface B extends Base {
      args: {
        beginData: {
          frame: string;
          stackTrace?: {
            columnNumber: number;
            functionName: string;
            lineNumber: number;
            scriptId: string;
            url: string;
          }[];
          startLine: number;
          url: string;
        };
      };
      name: 'ParseHTML';
      ph: 'B';
      tts: number;
    }
  
    interface E extends Base {
      args: {
        endData: {
          endLine: number;
        };
      };
      name: 'ParseHTML';
      ph: 'E';
      tts: number;
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
      tts: number;
    }
  
    interface E extends Base {
      args: {
      
      };
      name: 'PlatformResourceSendRequest';
      ph: 'E';
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

  namespace Process_name {
    interface M extends Base {
      args: {
        name: string;
      };
      name: 'process_name';
      ph: 'M';
    }
  }

  namespace Process_sort_index {
    interface M extends Base {
      args: {
        sort_index: number;
      };
      name: 'process_sort_index';
      ph: 'M';
    }
  }

  namespace Process_uptime_seconds {
    interface M extends Base {
      args: {
        uptime: number;
      };
      name: 'process_uptime_seconds';
      ph: 'M';
    }
  }

  namespace RasterTask {
    interface B extends Base {
      args: {
        tileData: {
          layerId: number;
          sourceFrameNumber: number;
          tileId: {
            id_ref: string;
          };
          tileResolution: string;
        };
      };
      name: 'RasterTask';
      ph: 'B';
      tts: number;
    }
  
    interface E extends Base {
      args: {
      
      };
      name: 'RasterTask';
      ph: 'E';
      tts: number;
    }
  }

  namespace RequestAnimationFrame {
    interface I extends Base {
      args: {
        data: {
          frame: string;
          id: number;
          stackTrace: {
            columnNumber: number;
            functionName: string;
            lineNumber: number;
            scriptId: string;
            url: string;
          }[];
        };
      };
      name: 'RequestAnimationFrame';
      ph: 'I';
      s: string;
      tts: number;
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

  namespace ResourceChangePriority {
    interface X extends Base {
      args: {
        data: {
          priority: string;
          requestId: string;
        };
      };
      dur: number;
      name: 'ResourceChangePriority';
      ph: 'X';
      tdur: number;
      tts: number;
    }
  }

  namespace ResourceFinish {
    interface I extends Base {
      args: {
        data: {
          decodedBodyLength: number;
          didFail: boolean;
          encodedDataLength: number;
          finishTime?: number;
          requestId: string;
        };
      };
      name: 'ResourceFinish';
      ph: 'I';
      s: string;
      tts: number;
    }
  }

  namespace ResourceReceivedData {
    interface I extends Base {
      args: {
        data: {
          encodedDataLength: number;
          frame: string;
          requestId: string;
        };
      };
      name: 'ResourceReceivedData';
      ph: 'I';
      s: string;
      tts: number;
    }
  }

  namespace ResourceReceiveResponse {
    interface I extends Base {
      args: {
        data: {
          encodedDataLength: number;
          frame: string;
          fromCache: boolean;
          fromServiceWorker: boolean;
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

  namespace ResponseEnd {
    interface R extends Base {
      args: {
        frame: string;
      };
      name: 'responseEnd';
      ph: 'R';
      tts: number;
    }
  }

  namespace RunMicrotasks {
    interface B extends Base {
      args: {
      
      };
      name: 'RunMicrotasks';
      ph: 'B';
      tts: number;
    }
  
    interface E extends Base {
      args: {
        microtask_count: number;
      };
      name: 'RunMicrotasks';
      ph: 'E';
      tts: number;
    }
  }

  namespace RunTask {
    interface X extends Base {
      args: {
      
      };
      dur: number;
      name: 'RunTask';
      ph: 'X';
      tdur: number;
      tts: number;
    }
  }

  namespace ScheduledAction {
    namespace Execute {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ScheduledAction::execute';
        ph: 'X';
        tdur: number;
        tts: number;
      }
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

  namespace SetLayerTreeId {
    interface I extends Base {
      args: {
        data: {
          frame: string;
          layerTreeId: number;
        };
      };
      name: 'SetLayerTreeId';
      ph: 'I';
      s: string;
      tts: number;
    }
  }

  namespace SpeedIndex {
    interface B extends Base {
      args: {
      
      };
      id: string;
      name: 'Speed Index';
      ph: 'b';
    }
  
    interface E extends Base {
      args: {
      
      };
      id: string;
      name: 'Speed Index';
      ph: 'e';
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

  namespace Thread_sort_index {
    interface M extends Base {
      args: {
        sort_index: number;
      };
      name: 'thread_sort_index';
      ph: 'M';
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
          stackTrace: {
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

  namespace TimerRemove {
    interface I extends Base {
      args: {
        data: {
          frame: string;
          stackTrace: {
            columnNumber: number;
            functionName: string;
            lineNumber: number;
            scriptId: string;
            url: string;
          }[];
          timerId: number;
        };
      };
      name: 'TimerRemove';
      ph: 'I';
      s: string;
      tts: number;
    }
  }

  namespace TracingSessionIdForWorker {
    interface I extends Base {
      args: {
        data: {
          frame: string;
          url: string;
          workerId: string;
          workerThreadId: number;
        };
      };
      name: 'TracingSessionIdForWorker';
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

  namespace UnloadEventEnd {
    interface R extends Base {
      args: {
        frame: string;
      };
      name: 'unloadEventEnd';
      ph: 'R';
      tts: number;
    }
  }

  namespace UnloadEventStart {
    interface R extends Base {
      args: {
        frame: string;
      };
      name: 'unloadEventStart';
      ph: 'R';
      tts: number;
    }
  }

  namespace UpdateCounters {
    interface I extends Base {
      args: {
        data: {
          documents: number;
          jsEventListeners: number;
          jsHeapSizeUsed: number;
          nodes: number;
        };
      };
      name: 'UpdateCounters';
      ph: 'I';
      s: string;
      tts: number;
    }
  }

  namespace UpdateLayer {
    interface B extends Base {
      args: {
        layerId: number;
        layerTreeId: number;
      };
      name: 'UpdateLayer';
      ph: 'B';
      tts: number;
    }
  
    interface E extends Base {
      args: {
      
      };
      name: 'UpdateLayer';
      ph: 'E';
      tts: number;
    }
  }

  namespace UpdateLayerTree {
    interface X extends Base {
      args: {
        data: {
          frame: string;
        };
      };
      dur: number;
      name: 'UpdateLayerTree';
      ph: 'X';
      tdur: number;
      tts: number;
    }
  }

  namespace UpdateLayoutTree {
    interface B extends Base {
      args: {
        beginData: {
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
      name: 'UpdateLayoutTree';
      ph: 'B';
      tts: number;
    }
  
    interface E extends Base {
      args: {
        elementCount: number;
      };
      name: 'UpdateLayoutTree';
      ph: 'E';
      tts: number;
    }
  }

  namespace V8 {
    namespace CallFunction {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'v8.callFunction';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
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
        
        };
        dur: number;
        name: 'v8.compile';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace DeoptimizeCode {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'V8.DeoptimizeCode';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace Execute {
      interface B extends Base {
        args: {
        
        };
        name: 'V8.Execute';
        ph: 'B';
        tts: number;
      }
    
      interface E extends Base {
        args: {
          'runtime-call-stats': {
          
          };
        };
        name: 'V8.Execute';
        ph: 'E';
        tts: number;
      }
    }
  
    namespace GCCompactor {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'V8.GCCompactor';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace GCIdleNotification {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'V8.GCIdleNotification';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace GCPhantomHandleProcessingCallback {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'V8.GCPhantomHandleProcessingCallback';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace GCScavenger {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'V8.GCScavenger';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace HandleInterrupts {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'V8.HandleInterrupts';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace InvokeApiInterruptCallbacks {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'V8.InvokeApiInterruptCallbacks';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace NewContext {
      interface B extends Base {
        args: {
        
        };
        name: 'V8.NewContext';
        ph: 'B';
        tts: number;
      }
    
      interface E extends Base {
        args: {
          'runtime-call-stats': {
          
          };
        };
        name: 'V8.NewContext';
        ph: 'E';
        tts: number;
      }
    }
  
    namespace NewInstance {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'v8.newInstance';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ParseOnBackground {
      interface X extends Base {
        args: {
          data: {
            requestId: string;
            url: string;
          };
        };
        bind_id: string;
        dur: number;
        flow_in: boolean;
        flow_out: boolean;
        id: string;
        name: 'v8.parseOnBackground';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace Run {
      interface X extends Base {
        args: {
          fileName?: string;
        };
        dur: number;
        name: 'v8.run';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace RunMicrotasks {
      interface B extends Base {
        args: {
        
        };
        name: 'V8.RunMicrotasks';
        ph: 'B';
        tts: number;
      }
    
      interface E extends Base {
        args: {
          'runtime-call-stats': {
          
          };
        };
        name: 'V8.RunMicrotasks';
        ph: 'E';
        tts: number;
      }
    }
  
    namespace ScriptCompiler {
      interface B extends Base {
        args: {
        
        };
        name: 'V8.ScriptCompiler';
        ph: 'B';
        tts: number;
      }
    
      interface E extends Base {
        args: {
          'runtime-call-stats': {
          
          };
        };
        name: 'V8.ScriptCompiler';
        ph: 'E';
        tts: number;
      }
    }
  
    namespace StackGuard {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'V8.StackGuard';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace Task {
      interface B extends Base {
        args: {
        
        };
        name: 'V8.Task';
        ph: 'B';
        tts: number;
      }
    
      interface E extends Base {
        args: {
          'runtime-call-stats': {
          
          };
        };
        name: 'V8.Task';
        ph: 'E';
        tts: number;
      }
    }
  }

  namespace VisuallyComplete100 {
    interface B extends Base {
      args: {
      
      };
      id: string;
      name: 'Visually Complete 100%';
      ph: 'b';
    }
  
    interface E extends Base {
      args: {
      
      };
      id: string;
      name: 'Visually Complete 100%';
      ph: 'e';
    }
  }

  namespace XHRLoad {
    interface X extends Base {
      args: {
        data: {
          frame: string;
          url: string;
        };
      };
      dur: number;
      name: 'XHRLoad';
      ph: 'X';
      tdur: number;
      tts: number;
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
