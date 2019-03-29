namespace _TraceEvent {
  type TraceEvent = 
    Animation_b |
    Animation_e |
    Animation_n |
    CommitLoad_X |
    CompositeLayers_B |
    CompositeLayers_E |
    ContextCreatedNotification_X |
    DecodeImage_X |
    DecodeLazyPixelRef_X |
    DomComplete_R |
    DOMContentLoaded_b |
    DOMContentLoaded_e |
    DomContentLoadedEventEnd_R |
    DomContentLoadedEventStart_R |
    DomInteractive_R |
    DomLoading_R |
    DrawLazyPixelRef_I |
    EndofTrace_b |
    EndofTrace_e |
    EvaluateScript_X |
    EventDispatch_X |
    FetchStart_R |
    FireAnimationFrame_X |
    FirstContentfulPaint_b |
    FirstContentfulPaint_e |
    FirstContentfulPaint_R |
    FirstImagePaint_R |
    FirstLayout_R |
    FirstMeaningfulPaint_b |
    FirstMeaningfulPaint_e |
    FirstMeaningfulPaint_R |
    FirstMeaningfulPaintCandidate_R |
    FirstPaint_R |
    FirstVisualChange_b |
    FirstVisualChange_e |
    FrameCommittedInBrowser_I |
    FrameDeletedInBrowser_I |
    FrameStartedLoading_I |
    FunctionCall_B |
    FunctionCall_E |
    GPUTask_X |
    HitTest_B |
    HitTest_E |
    ImageDecodeTask_B |
    ImageDecodeTask_E |
    InstallConditionalFeatures_X |
    InvalidateLayout_I |
    LayerId_D |
    LayerId_N |
    Layout_B |
    Layout_E |
    LoadEventEnd_R |
    LoadEventStart_R |
    LocalWindowProxyCreateContext_X |
    LocalWindowProxyInitialize_X |
    LocalWindowProxySetupWindowPrototypeChain_X |
    LocalWindowProxyUpdateDocumentProperty_X |
    MajorGC_B |
    MajorGC_E |
    MarkDOMContent_I |
    MarkLoad_I |
    MinorGC_B |
    MinorGC_E |
    NavigationStart_R |
    Num_cpus_M |
    OnLoad_b |
    OnLoad_e |
    Paint_X |
    PaintImage_X |
    ParseAuthorStyleSheet_X |
    ParseHTML_B |
    ParseHTML_E |
    PlatformResourceSendRequest_B |
    PlatformResourceSendRequest_E |
    Process_labels_M |
    Process_name_M |
    Process_sort_index_M |
    Process_uptime_seconds_M |
    RasterTask_B |
    RasterTask_E |
    RequestAnimationFrame_I |
    RequestStart_R |
    ResourceChangePriority_X |
    ResourceFinish_I |
    ResourceReceivedData_I |
    ResourceReceiveResponse_I |
    ResourceSendRequest_I |
    ResponseEnd_R |
    RunMicrotasks_B |
    RunMicrotasks_E |
    RunTask_X |
    ScheduledActionexecute_X |
    ScheduleStyleRecalculation_I |
    Screenshot_O |
    SetLayerTreeId_I |
    SpeedIndex_b |
    SpeedIndex_e |
    Thread_name_M |
    Thread_sort_index_M |
    TimerFire_X |
    TimerInstall_I |
    TimerRemove_I |
    TracingSessionIdForWorker_I |
    TracingStartedInBrowser_I |
    UnloadEventEnd_R |
    UnloadEventStart_R |
    UpdateCounters_I |
    UpdateLayer_B |
    UpdateLayer_E |
    UpdateLayerTree_X |
    UpdateLayoutTree_B |
    UpdateLayoutTree_E |
    V8callFunction_X |
    V8compile_B |
    V8compile_E |
    V8compile_X |
    V8DeoptimizeCode_X |
    V8Execute_B |
    V8Execute_E |
    V8GCCompactor_X |
    V8GCIdleNotification_X |
    V8GCPhantomHandleProcessingCallback_X |
    V8GCScavenger_X |
    V8HandleInterrupts_X |
    V8InvokeApiInterruptCallbacks_X |
    V8NewContext_B |
    V8NewContext_E |
    V8newInstance_X |
    V8parseOnBackground_X |
    V8run_X |
    V8RunMicrotasks_B |
    V8RunMicrotasks_E |
    V8ScriptCompiler_B |
    V8ScriptCompiler_E |
    V8StackGuard_X |
    V8Task_B |
    V8Task_E |
    VisuallyComplete100_b |
    VisuallyComplete100_e |
    XHRLoad_X |
    XHRReadyStateChange_X;

  interface Base {
    pid: number;
    tid: number;
    ts: number;
  }

  interface Animation_b extends Base {
    args: {
      data: {
        id: string;
        name: string;
        nodeId: number;
        nodeName: string;
        state: string;
      };
    };
    cat: 'blink.animations,devtools.timeline,benchmark,rail';
    id: string;
    name: 'Animation';
    ph: 'b';
    tts: number;
  }

  interface Animation_e extends Base {
    args: {
      endData: {
        state: string;
      };
    };
    cat: 'blink.animations,devtools.timeline,benchmark,rail';
    id: string;
    name: 'Animation';
    ph: 'e';
    tts: number;
  }

  interface Animation_n extends Base {
    args: {
      data: {
        state: string;
      };
    };
    cat: 'blink.animations,devtools.timeline,benchmark,rail';
    id: string;
    name: 'Animation';
    ph: 'n';
    tts: number;
  }

  interface CommitLoad_X extends Base {
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
    cat: 'devtools.timeline';
    dur: number;
    name: 'CommitLoad';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface CompositeLayers_B extends Base {
    args: {
      layerTreeId: number;
    };
    cat: 'disabled-by-default-devtools.timeline';
    name: 'CompositeLayers';
    ph: 'B';
    tts: number;
  }

  interface CompositeLayers_E extends Base {
    args: {
    
    };
    cat: 'disabled-by-default-devtools.timeline';
    name: 'CompositeLayers';
    ph: 'E';
    tts: number;
  }

  interface ContextCreatedNotification_X extends Base {
    args: {
      IsMainFrame: boolean;
    };
    cat: 'v8';
    dur: number;
    name: 'ContextCreatedNotification';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface DecodeImage_X extends Base {
    args: {
      imageType: string;
    };
    cat: 'disabled-by-default-devtools.timeline';
    dur: number;
    name: 'Decode Image';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface DecodeLazyPixelRef_X extends Base {
    args: {
      LazyPixelRef: number;
    };
    cat: 'disabled-by-default-devtools.timeline';
    dur: number;
    name: 'Decode LazyPixelRef';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface DomComplete_R extends Base {
    args: {
      frame: string;
    };
    cat: 'blink.user_timing,rail';
    name: 'domComplete';
    ph: 'R';
    tts: number;
  }

  interface DOMContentLoaded_b extends Base {
    args: {
    
    };
    cat: 'blink.user_timing';
    id: string;
    name: 'DOM Content Loaded';
    ph: 'b';
  }

  interface DOMContentLoaded_e extends Base {
    args: {
    
    };
    cat: 'blink.user_timing';
    id: string;
    name: 'DOM Content Loaded';
    ph: 'e';
  }

  interface DomContentLoadedEventEnd_R extends Base {
    args: {
      frame: string;
    };
    cat: 'blink.user_timing,rail';
    name: 'domContentLoadedEventEnd';
    ph: 'R';
    tts: number;
  }

  interface DomContentLoadedEventStart_R extends Base {
    args: {
      frame: string;
    };
    cat: 'blink.user_timing,rail';
    name: 'domContentLoadedEventStart';
    ph: 'R';
    tts: number;
  }

  interface DomInteractive_R extends Base {
    args: {
      frame: string;
    };
    cat: 'blink.user_timing,rail';
    name: 'domInteractive';
    ph: 'R';
    tts: number;
  }

  interface DomLoading_R extends Base {
    args: {
      frame: string;
    };
    cat: 'blink.user_timing,rail';
    name: 'domLoading';
    ph: 'R';
    tts: number;
  }

  interface DrawLazyPixelRef_I extends Base {
    args: {
      LazyPixelRef: number;
    };
    cat: 'disabled-by-default-devtools.timeline';
    name: 'Draw LazyPixelRef';
    ph: 'I';
    s: string;
    tts: number;
  }

  interface EndofTrace_b extends Base {
    args: {
    
    };
    cat: 'blink.user_timing';
    id: string;
    name: 'End of Trace';
    ph: 'b';
  }

  interface EndofTrace_e extends Base {
    args: {
    
    };
    cat: 'blink.user_timing';
    id: string;
    name: 'End of Trace';
    ph: 'e';
  }

  interface EvaluateScript_X extends Base {
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
    cat: 'devtools.timeline';
    dur: number;
    name: 'EvaluateScript';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface EventDispatch_X extends Base {
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
    cat: 'devtools.timeline';
    dur: number;
    name: 'EventDispatch';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface FetchStart_R extends Base {
    args: {
      frame: string;
    };
    cat: 'blink.user_timing';
    name: 'fetchStart';
    ph: 'R';
    tts: number;
  }

  interface FireAnimationFrame_X extends Base {
    args: {
      data: {
        frame: string;
        id: number;
      };
    };
    cat: 'devtools.timeline';
    dur: number;
    name: 'FireAnimationFrame';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface FirstContentfulPaint_b extends Base {
    args: {
    
    };
    cat: 'blink.user_timing';
    id: string;
    name: 'First Contentful Paint';
    ph: 'b';
  }

  interface FirstContentfulPaint_e extends Base {
    args: {
    
    };
    cat: 'blink.user_timing';
    id: string;
    name: 'First Contentful Paint';
    ph: 'e';
  }

  interface FirstContentfulPaint_R extends Base {
    args: {
      data: {
        navigationId: string;
      };
      frame: string;
    };
    cat: 'loading,rail,devtools.timeline';
    name: 'firstContentfulPaint';
    ph: 'R';
    tts: number;
  }

  interface FirstImagePaint_R extends Base {
    args: {
      data: {
        navigationId: string;
      };
      frame: string;
    };
    cat: 'loading,rail,devtools.timeline';
    name: 'firstImagePaint';
    ph: 'R';
    tts: number;
  }

  interface FirstLayout_R extends Base {
    args: {
      frame: string;
    };
    cat: 'blink.user_timing,rail';
    name: 'firstLayout';
    ph: 'R';
    tts: number;
  }

  interface FirstMeaningfulPaint_b extends Base {
    args: {
    
    };
    cat: 'blink.user_timing';
    id: string;
    name: 'First Meaningful Paint';
    ph: 'b';
  }

  interface FirstMeaningfulPaint_e extends Base {
    args: {
    
    };
    cat: 'blink.user_timing';
    id: string;
    name: 'First Meaningful Paint';
    ph: 'e';
  }

  interface FirstMeaningfulPaint_R extends Base {
    args: {
      afterUserInput?: number;
      data?: {
        navigationId: string;
      };
      frame: string;
    };
    cat: 'loading,rail,devtools.timeline';
    name: 'firstMeaningfulPaint';
    ph: 'R';
    tts: number;
  }

  interface FirstMeaningfulPaintCandidate_R extends Base {
    args: {
      data: {
        navigationId: string;
      };
      frame: string;
    };
    cat: 'loading,rail,devtools.timeline';
    name: 'firstMeaningfulPaintCandidate';
    ph: 'R';
    tts: number;
  }

  interface FirstPaint_R extends Base {
    args: {
      data: {
        navigationId: string;
      };
      frame: string;
    };
    cat: 'loading,rail,devtools.timeline';
    name: 'firstPaint';
    ph: 'R';
    tts: number;
  }

  interface FirstVisualChange_b extends Base {
    args: {
    
    };
    cat: 'blink.user_timing';
    id: string;
    name: 'First Visual Change';
    ph: 'b';
  }

  interface FirstVisualChange_e extends Base {
    args: {
    
    };
    cat: 'blink.user_timing';
    id: string;
    name: 'First Visual Change';
    ph: 'e';
  }

  interface FrameCommittedInBrowser_I extends Base {
    args: {
      data: {
        frame: string;
        name: string;
        parent?: string;
        processId: number;
        url: string;
      };
    };
    cat: 'disabled-by-default-devtools.timeline';
    name: 'FrameCommittedInBrowser';
    ph: 'I';
    s: string;
    tts: number;
  }

  interface FrameDeletedInBrowser_I extends Base {
    args: {
      data: {
        frame: string;
      };
    };
    cat: 'disabled-by-default-devtools.timeline';
    name: 'FrameDeletedInBrowser';
    ph: 'I';
    s: string;
    tts: number;
  }

  interface FrameStartedLoading_I extends Base {
    args: {
      frame: string;
    };
    cat: 'devtools.timeline';
    name: 'FrameStartedLoading';
    ph: 'I';
    s: string;
    tts: number;
  }

  interface FunctionCall_B extends Base {
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
    cat: 'devtools.timeline';
    name: 'FunctionCall';
    ph: 'B';
    tts: number;
  }

  interface FunctionCall_E extends Base {
    args: {
    
    };
    cat: 'devtools.timeline';
    name: 'FunctionCall';
    ph: 'E';
    tts: number;
  }

  interface GPUTask_X extends Base {
    args: {
      data: {
        renderer_pid: number;
        used_bytes: number;
      };
    };
    cat: 'disabled-by-default-devtools.timeline';
    dur: number;
    name: 'GPUTask';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface HitTest_B extends Base {
    args: {
    
    };
    cat: 'blink,devtools.timeline';
    name: 'HitTest';
    ph: 'B';
    tts: number;
  }

  interface HitTest_E extends Base {
    args: {
      endData: {
        nodeId: number;
        nodeName: string;
        rectilinear: boolean;
        x: number;
        y: number;
      };
    };
    cat: 'blink,devtools.timeline';
    name: 'HitTest';
    ph: 'E';
    tts: number;
  }

  interface ImageDecodeTask_B extends Base {
    args: {
      pixelRefId: number;
    };
    cat: 'disabled-by-default-devtools.timeline';
    name: 'ImageDecodeTask';
    ph: 'B';
    tts: number;
  }

  interface ImageDecodeTask_E extends Base {
    args: {
    
    };
    cat: 'disabled-by-default-devtools.timeline';
    name: 'ImageDecodeTask';
    ph: 'E';
    tts: number;
  }

  interface InstallConditionalFeatures_X extends Base {
    args: {
      IsMainFrame: boolean;
    };
    cat: 'v8';
    dur: number;
    name: 'InstallConditionalFeatures';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface InvalidateLayout_I extends Base {
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
    cat: 'disabled-by-default-devtools.timeline';
    name: 'InvalidateLayout';
    ph: 'I';
    s: string;
    tts: number;
  }

  interface LayerId_D extends Base {
    args: {
    
    };
    cat: 'disabled-by-default-devtools.timeline';
    id: string;
    name: 'layerId';
    ph: 'D';
    tts: number;
  }

  interface LayerId_N extends Base {
    args: {
    
    };
    cat: 'disabled-by-default-devtools.timeline';
    id: string;
    name: 'layerId';
    ph: 'N';
    tts: number;
  }

  interface Layout_B extends Base {
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
    cat: 'devtools.timeline';
    name: 'Layout';
    ph: 'B';
    tts: number;
  }

  interface Layout_E extends Base {
    args: {
      endData: {
        root: {
        
        }[];
        rootNode: number;
      };
    };
    cat: 'devtools.timeline';
    name: 'Layout';
    ph: 'E';
    tts: number;
  }

  interface LoadEventEnd_R extends Base {
    args: {
      frame: string;
    };
    cat: 'blink.user_timing';
    name: 'loadEventEnd';
    ph: 'R';
    tts: number;
  }

  interface LoadEventStart_R extends Base {
    args: {
      frame: string;
    };
    cat: 'blink.user_timing';
    name: 'loadEventStart';
    ph: 'R';
    tts: number;
  }

  interface LocalWindowProxyCreateContext_X extends Base {
    args: {
      IsMainFrame: boolean;
    };
    cat: 'v8';
    dur: number;
    name: 'LocalWindowProxy::CreateContext';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface LocalWindowProxyInitialize_X extends Base {
    args: {
      IsMainFrame: boolean;
    };
    cat: 'v8';
    dur: number;
    name: 'LocalWindowProxy::Initialize';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface LocalWindowProxySetupWindowPrototypeChain_X extends Base {
    args: {
      IsMainFrame: boolean;
    };
    cat: 'v8';
    dur: number;
    name: 'LocalWindowProxy::SetupWindowPrototypeChain';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface LocalWindowProxyUpdateDocumentProperty_X extends Base {
    args: {
      IsMainFrame: boolean;
    };
    cat: 'v8';
    dur: number;
    name: 'LocalWindowProxy::UpdateDocumentProperty';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface MajorGC_B extends Base {
    args: {
      type: string;
      usedHeapSizeBefore: number;
    };
    cat: 'devtools.timeline,v8';
    name: 'MajorGC';
    ph: 'B';
    tts: number;
  }

  interface MajorGC_E extends Base {
    args: {
      usedHeapSizeAfter: number;
    };
    cat: 'devtools.timeline,v8';
    name: 'MajorGC';
    ph: 'E';
    tts: number;
  }

  interface MarkDOMContent_I extends Base {
    args: {
      data: {
        frame: string;
        isMainFrame: boolean;
        page: string;
      };
    };
    cat: 'devtools.timeline';
    name: 'MarkDOMContent';
    ph: 'I';
    s: string;
    tts: number;
  }

  interface MarkLoad_I extends Base {
    args: {
      data: {
        frame: string;
        isMainFrame: boolean;
        page: string;
      };
    };
    cat: 'devtools.timeline';
    name: 'MarkLoad';
    ph: 'I';
    s: string;
    tts: number;
  }

  interface MinorGC_B extends Base {
    args: {
      usedHeapSizeBefore: number;
    };
    cat: 'devtools.timeline,v8';
    name: 'MinorGC';
    ph: 'B';
    tts: number;
  }

  interface MinorGC_E extends Base {
    args: {
      usedHeapSizeAfter: number;
    };
    cat: 'devtools.timeline,v8';
    name: 'MinorGC';
    ph: 'E';
    tts: number;
  }

  interface NavigationStart_R extends Base {
    args: {
      data: {
        documentLoaderURL: string;
        isLoadingMainFrame: boolean;
        navigationId: string;
      };
      frame: string;
    };
    cat: 'blink.user_timing';
    name: 'navigationStart';
    ph: 'R';
    tts: number;
  }

  interface Num_cpus_M extends Base {
    args: {
      number: number;
    };
    cat: '__metadata';
    name: 'num_cpus';
    ph: 'M';
  }

  interface OnLoad_b extends Base {
    args: {
    
    };
    cat: 'blink.user_timing';
    id: string;
    name: 'On Load';
    ph: 'b';
  }

  interface OnLoad_e extends Base {
    args: {
    
    };
    cat: 'blink.user_timing';
    id: string;
    name: 'On Load';
    ph: 'e';
  }

  interface Paint_X extends Base {
    args: {
      data: {
        clip: {
        
        }[];
        frame: string;
        layerId: number;
        nodeId: number;
      };
    };
    cat: 'devtools.timeline,rail';
    dur: number;
    name: 'Paint';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface PaintImage_X extends Base {
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
    cat: 'disabled-by-default-devtools.timeline';
    dur: number;
    name: 'PaintImage';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface ParseAuthorStyleSheet_X extends Base {
    args: {
      data: {
        styleSheetUrl: string;
      };
    };
    cat: 'blink,devtools.timeline';
    dur: number;
    name: 'ParseAuthorStyleSheet';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface ParseHTML_B extends Base {
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
    cat: 'devtools.timeline';
    name: 'ParseHTML';
    ph: 'B';
    tts: number;
  }

  interface ParseHTML_E extends Base {
    args: {
      endData: {
        endLine: number;
      };
    };
    cat: 'devtools.timeline';
    name: 'ParseHTML';
    ph: 'E';
    tts: number;
  }

  interface PlatformResourceSendRequest_B extends Base {
    args: {
      data: {
        id: string;
      };
    };
    cat: 'devtools.timeline';
    name: 'PlatformResourceSendRequest';
    ph: 'B';
    tts: number;
  }

  interface PlatformResourceSendRequest_E extends Base {
    args: {
    
    };
    cat: 'devtools.timeline';
    name: 'PlatformResourceSendRequest';
    ph: 'E';
    tts: number;
  }

  interface Process_labels_M extends Base {
    args: {
      labels: string;
    };
    cat: '__metadata';
    name: 'process_labels';
    ph: 'M';
  }

  interface Process_name_M extends Base {
    args: {
      name: string;
    };
    cat: '__metadata';
    name: 'process_name';
    ph: 'M';
  }

  interface Process_sort_index_M extends Base {
    args: {
      sort_index: number;
    };
    cat: '__metadata';
    name: 'process_sort_index';
    ph: 'M';
  }

  interface Process_uptime_seconds_M extends Base {
    args: {
      uptime: number;
    };
    cat: '__metadata';
    name: 'process_uptime_seconds';
    ph: 'M';
  }

  interface RasterTask_B extends Base {
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
    cat: 'cc,disabled-by-default-devtools.timeline';
    name: 'RasterTask';
    ph: 'B';
    tts: number;
  }

  interface RasterTask_E extends Base {
    args: {
    
    };
    cat: 'cc,disabled-by-default-devtools.timeline';
    name: 'RasterTask';
    ph: 'E';
    tts: number;
  }

  interface RequestAnimationFrame_I extends Base {
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
    cat: 'devtools.timeline';
    name: 'RequestAnimationFrame';
    ph: 'I';
    s: string;
    tts: number;
  }

  interface RequestStart_R extends Base {
    args: {
    
    };
    cat: 'blink.user_timing';
    name: 'requestStart';
    ph: 'R';
    tts: number;
  }

  interface ResourceChangePriority_X extends Base {
    args: {
      data: {
        priority: string;
        requestId: string;
      };
    };
    cat: 'devtools.timeline';
    dur: number;
    name: 'ResourceChangePriority';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface ResourceFinish_I extends Base {
    args: {
      data: {
        decodedBodyLength: number;
        didFail: boolean;
        encodedDataLength: number;
        finishTime?: number;
        requestId: string;
      };
    };
    cat: 'devtools.timeline';
    name: 'ResourceFinish';
    ph: 'I';
    s: string;
    tts: number;
  }

  interface ResourceReceivedData_I extends Base {
    args: {
      data: {
        encodedDataLength: number;
        frame: string;
        requestId: string;
      };
    };
    cat: 'devtools.timeline';
    name: 'ResourceReceivedData';
    ph: 'I';
    s: string;
    tts: number;
  }

  interface ResourceReceiveResponse_I extends Base {
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
    cat: 'devtools.timeline';
    name: 'ResourceReceiveResponse';
    ph: 'I';
    s: string;
    tts: number;
  }

  interface ResourceSendRequest_I extends Base {
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
    cat: 'devtools.timeline';
    name: 'ResourceSendRequest';
    ph: 'I';
    s: string;
    tts: number;
  }

  interface ResponseEnd_R extends Base {
    args: {
      frame: string;
    };
    cat: 'blink.user_timing';
    name: 'responseEnd';
    ph: 'R';
    tts: number;
  }

  interface RunMicrotasks_B extends Base {
    args: {
    
    };
    cat: 'v8.execute';
    name: 'RunMicrotasks';
    ph: 'B';
    tts: number;
  }

  interface RunMicrotasks_E extends Base {
    args: {
      microtask_count: number;
    };
    cat: 'v8.execute';
    name: 'RunMicrotasks';
    ph: 'E';
    tts: number;
  }

  interface RunTask_X extends Base {
    args: {
    
    };
    cat: 'disabled-by-default-devtools.timeline';
    dur: number;
    name: 'RunTask';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface ScheduledActionexecute_X extends Base {
    args: {
    
    };
    cat: 'v8';
    dur: number;
    name: 'ScheduledAction::execute';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface ScheduleStyleRecalculation_I extends Base {
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
    cat: 'disabled-by-default-devtools.timeline';
    name: 'ScheduleStyleRecalculation';
    ph: 'I';
    s: string;
    tts: number;
  }

  interface Screenshot_O extends Base {
    args: {
      snapshot: string;
    };
    cat: 'disabled-by-default-devtools.screenshot';
    id: string;
    name: 'Screenshot';
    ph: 'O';
    tts: number;
  }

  interface SetLayerTreeId_I extends Base {
    args: {
      data: {
        frame: string;
        layerTreeId: number;
      };
    };
    cat: 'disabled-by-default-devtools.timeline';
    name: 'SetLayerTreeId';
    ph: 'I';
    s: string;
    tts: number;
  }

  interface SpeedIndex_b extends Base {
    args: {
    
    };
    cat: 'blink.user_timing';
    id: string;
    name: 'Speed Index';
    ph: 'b';
  }

  interface SpeedIndex_e extends Base {
    args: {
    
    };
    cat: 'blink.user_timing';
    id: string;
    name: 'Speed Index';
    ph: 'e';
  }

  interface Thread_name_M extends Base {
    args: {
      name: string;
    };
    cat: '__metadata';
    name: 'thread_name';
    ph: 'M';
  }

  interface Thread_sort_index_M extends Base {
    args: {
      sort_index: number;
    };
    cat: '__metadata';
    name: 'thread_sort_index';
    ph: 'M';
  }

  interface TimerFire_X extends Base {
    args: {
      data: {
        frame: string;
        timerId: number;
      };
    };
    cat: 'devtools.timeline';
    dur: number;
    name: 'TimerFire';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface TimerInstall_I extends Base {
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
    cat: 'devtools.timeline';
    name: 'TimerInstall';
    ph: 'I';
    s: string;
    tts: number;
  }

  interface TimerRemove_I extends Base {
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
    cat: 'devtools.timeline';
    name: 'TimerRemove';
    ph: 'I';
    s: string;
    tts: number;
  }

  interface TracingSessionIdForWorker_I extends Base {
    args: {
      data: {
        frame: string;
        url: string;
        workerId: string;
        workerThreadId: number;
      };
    };
    cat: 'disabled-by-default-devtools.timeline';
    name: 'TracingSessionIdForWorker';
    ph: 'I';
    s: string;
    tts: number;
  }

  interface TracingStartedInBrowser_I extends Base {
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
    cat: 'disabled-by-default-devtools.timeline';
    name: 'TracingStartedInBrowser';
    ph: 'I';
    s: string;
    tts: number;
  }

  interface UnloadEventEnd_R extends Base {
    args: {
      frame: string;
    };
    cat: 'blink.user_timing';
    name: 'unloadEventEnd';
    ph: 'R';
    tts: number;
  }

  interface UnloadEventStart_R extends Base {
    args: {
      frame: string;
    };
    cat: 'blink.user_timing';
    name: 'unloadEventStart';
    ph: 'R';
    tts: number;
  }

  interface UpdateCounters_I extends Base {
    args: {
      data: {
        documents: number;
        jsEventListeners: number;
        jsHeapSizeUsed: number;
        nodes: number;
      };
    };
    cat: 'disabled-by-default-devtools.timeline';
    name: 'UpdateCounters';
    ph: 'I';
    s: string;
    tts: number;
  }

  interface UpdateLayer_B extends Base {
    args: {
      layerId: number;
      layerTreeId: number;
    };
    cat: 'disabled-by-default-devtools.timeline';
    name: 'UpdateLayer';
    ph: 'B';
    tts: number;
  }

  interface UpdateLayer_E extends Base {
    args: {
    
    };
    cat: 'disabled-by-default-devtools.timeline';
    name: 'UpdateLayer';
    ph: 'E';
    tts: number;
  }

  interface UpdateLayerTree_X extends Base {
    args: {
      data: {
        frame: string;
      };
    };
    cat: 'devtools.timeline';
    dur: number;
    name: 'UpdateLayerTree';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface UpdateLayoutTree_B extends Base {
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
    cat: 'blink,devtools.timeline';
    name: 'UpdateLayoutTree';
    ph: 'B';
    tts: number;
  }

  interface UpdateLayoutTree_E extends Base {
    args: {
      elementCount: number;
    };
    cat: 'blink,devtools.timeline';
    name: 'UpdateLayoutTree';
    ph: 'E';
    tts: number;
  }

  interface V8callFunction_X extends Base {
    args: {
    
    };
    cat: 'v8';
    dur: number;
    name: 'v8.callFunction';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface V8compile_B extends Base {
    args: {
      fileName: string;
    };
    cat: 'v8,devtools.timeline';
    name: 'v8.compile';
    ph: 'B';
    tts: number;
  }

  interface V8compile_E extends Base {
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
    cat: 'v8,devtools.timeline';
    name: 'v8.compile';
    ph: 'E';
    tts: number;
  }

  interface V8compile_X extends Base {
    args: {
    
    };
    cat: 'v8';
    dur: number;
    name: 'v8.compile';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface V8DeoptimizeCode_X extends Base {
    args: {
    
    };
    cat: 'v8';
    dur: number;
    name: 'V8.DeoptimizeCode';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface V8Execute_B extends Base {
    args: {
    
    };
    cat: 'v8';
    name: 'V8.Execute';
    ph: 'B';
    tts: number;
  }

  interface V8Execute_E extends Base {
    args: {
      'runtime-call-stats': {
      
      };
    };
    cat: 'v8';
    name: 'V8.Execute';
    ph: 'E';
    tts: number;
  }

  interface V8GCCompactor_X extends Base {
    args: {
    
    };
    cat: 'v8';
    dur: number;
    name: 'V8.GCCompactor';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface V8GCIdleNotification_X extends Base {
    args: {
    
    };
    cat: 'v8';
    dur: number;
    name: 'V8.GCIdleNotification';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface V8GCPhantomHandleProcessingCallback_X extends Base {
    args: {
    
    };
    cat: 'v8';
    dur: number;
    name: 'V8.GCPhantomHandleProcessingCallback';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface V8GCScavenger_X extends Base {
    args: {
    
    };
    cat: 'v8';
    dur: number;
    name: 'V8.GCScavenger';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface V8HandleInterrupts_X extends Base {
    args: {
    
    };
    cat: 'v8.execute';
    dur: number;
    name: 'V8.HandleInterrupts';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface V8InvokeApiInterruptCallbacks_X extends Base {
    args: {
    
    };
    cat: 'v8.execute';
    dur: number;
    name: 'V8.InvokeApiInterruptCallbacks';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface V8NewContext_B extends Base {
    args: {
    
    };
    cat: 'v8';
    name: 'V8.NewContext';
    ph: 'B';
    tts: number;
  }

  interface V8NewContext_E extends Base {
    args: {
      'runtime-call-stats': {
      
      };
    };
    cat: 'v8';
    name: 'V8.NewContext';
    ph: 'E';
    tts: number;
  }

  interface V8newInstance_X extends Base {
    args: {
    
    };
    cat: 'v8';
    dur: number;
    name: 'v8.newInstance';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface V8parseOnBackground_X extends Base {
    args: {
      data: {
        requestId: string;
        url: string;
      };
    };
    bind_id: string;
    cat: 'v8,devtools.timeline,disabled-by-default-v8.compile';
    dur: number;
    flow_in: boolean;
    flow_out: boolean;
    id: string;
    name: 'v8.parseOnBackground';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface V8run_X extends Base {
    args: {
      fileName?: string;
    };
    cat: 'v8';
    dur: number;
    name: 'v8.run';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface V8RunMicrotasks_B extends Base {
    args: {
    
    };
    cat: 'v8';
    name: 'V8.RunMicrotasks';
    ph: 'B';
    tts: number;
  }

  interface V8RunMicrotasks_E extends Base {
    args: {
      'runtime-call-stats': {
      
      };
    };
    cat: 'v8';
    name: 'V8.RunMicrotasks';
    ph: 'E';
    tts: number;
  }

  interface V8ScriptCompiler_B extends Base {
    args: {
    
    };
    cat: 'v8';
    name: 'V8.ScriptCompiler';
    ph: 'B';
    tts: number;
  }

  interface V8ScriptCompiler_E extends Base {
    args: {
      'runtime-call-stats': {
      
      };
    };
    cat: 'v8';
    name: 'V8.ScriptCompiler';
    ph: 'E';
    tts: number;
  }

  interface V8StackGuard_X extends Base {
    args: {
    
    };
    cat: 'v8.execute';
    dur: number;
    name: 'V8.StackGuard';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface V8Task_B extends Base {
    args: {
    
    };
    cat: 'v8';
    name: 'V8.Task';
    ph: 'B';
    tts: number;
  }

  interface V8Task_E extends Base {
    args: {
      'runtime-call-stats': {
      
      };
    };
    cat: 'v8';
    name: 'V8.Task';
    ph: 'E';
    tts: number;
  }

  interface VisuallyComplete100_b extends Base {
    args: {
    
    };
    cat: 'blink.user_timing';
    id: string;
    name: 'Visually Complete 100%';
    ph: 'b';
  }

  interface VisuallyComplete100_e extends Base {
    args: {
    
    };
    cat: 'blink.user_timing';
    id: string;
    name: 'Visually Complete 100%';
    ph: 'e';
  }

  interface XHRLoad_X extends Base {
    args: {
      data: {
        frame: string;
        url: string;
      };
    };
    cat: 'devtools.timeline';
    dur: number;
    name: 'XHRLoad';
    ph: 'X';
    tdur: number;
    tts: number;
  }

  interface XHRReadyStateChange_X extends Base {
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
    cat: 'devtools.timeline';
    dur: number;
    name: 'XHRReadyStateChange';
    ph: 'X';
    tdur: number;
    tts: number;
  }
}
