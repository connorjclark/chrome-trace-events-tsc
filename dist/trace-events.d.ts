export namespace TraceEvent {
  interface Base {
    // Comma-separated list of category names.
    cat: string;
    pid: number;
    tid: number;
    ts: number;
  }

  type TraceEvent = 
    TraceEvent.A |
    TraceEvent.AAConvexPathOp |
    TraceEvent.AAStrokeRect |
    TraceEvent.AcquireLock |
    TraceEvent.ActivateLayerTree |
    TraceEvent.AddFrameDisplayed |
    TraceEvent.ADFUEL.AdFuelDOMContentLoaded |
    TraceEvent.ADFUEL.AdFuelInitialized |
    TraceEvent.ADFUEL.AdFuelRequestComplete |
    TraceEvent.ADFUEL.AdFuelwindow.Load |
    TraceEvent.ADFUEL.AdRenderedad_bnr_atf_01 |
    TraceEvent.ADFUEL.AdRenderedad_bnr_btf_01 |
    TraceEvent.ADFUEL.AdRenderedad_mod_35731bb1e |
    TraceEvent.ADFUEL.AdRenderedad_oop_float_01 |
    TraceEvent.ADFUEL.AdRenderedad_rect_btf_02 |
    TraceEvent.ADFUEL.ApplyingPageLevelTargeting |
    TraceEvent.ADFUEL.ApplyingWindowSiteLevelOptions |
    TraceEvent.ADFUEL.BuildingSlotad_bnr_atf_01 |
    TraceEvent.ADFUEL.BuildingSlotad_bnr_atf_01End |
    TraceEvent.ADFUEL.BuildingSlotad_bnr_atf_01Start |
    TraceEvent.ADFUEL.BuildingSlotad_bnr_btf_01 |
    TraceEvent.ADFUEL.BuildingSlotad_bnr_btf_01End |
    TraceEvent.ADFUEL.BuildingSlotad_bnr_btf_01Start |
    TraceEvent.ADFUEL.BuildingSlotad_bnr_btf_02 |
    TraceEvent.ADFUEL.BuildingSlotad_bnr_btf_02End |
    TraceEvent.ADFUEL.BuildingSlotad_bnr_btf_02Start |
    TraceEvent.ADFUEL.BuildingSlotad_mod_35731bb1e |
    TraceEvent.ADFUEL.BuildingSlotad_mod_35731bb1eEnd |
    TraceEvent.ADFUEL.BuildingSlotad_mod_35731bb1eStart |
    TraceEvent.ADFUEL.BuildingSlotad_oop_float_01 |
    TraceEvent.ADFUEL.BuildingSlotad_oop_float_01End |
    TraceEvent.ADFUEL.BuildingSlotad_oop_float_01Start |
    TraceEvent.ADFUEL.BuildingSlotad_oop_skin_01 |
    TraceEvent.ADFUEL.BuildingSlotad_oop_skin_01End |
    TraceEvent.ADFUEL.BuildingSlotad_oop_skin_01Start |
    TraceEvent.ADFUEL.BuildingSlotad_rect_btf_02 |
    TraceEvent.ADFUEL.BuildingSlotad_rect_btf_02End |
    TraceEvent.ADFUEL.BuildingSlotad_rect_btf_02Start |
    TraceEvent.ADFUEL.DispatchQueue |
    TraceEvent.ADFUEL.DispatchQueueEnd |
    TraceEvent.ADFUEL.DispatchQueueStart |
    TraceEvent.ADFUEL.GPTIncluded |
    TraceEvent.ADFUEL.PageLevelGPTBuild |
    TraceEvent.ADFUEL.PageLevelGPTBuildEnd |
    TraceEvent.ADFUEL.PageLevelGPTBuildStart |
    TraceEvent.ADFUEL.QueueRegistrycnn_homepage_rb |
    TraceEvent.ADFUEL.QueueRegistrycnn_homepage_rbEnd |
    TraceEvent.ADFUEL.QueueRegistrycnn_homepage_rbStart |
    TraceEvent.ADFUEL.QueueRegistrycnn_homepage |
    TraceEvent.ADFUEL.QueueRegistrycnn_homepageEnd |
    TraceEvent.ADFUEL.QueueRegistrycnn_homepageStart |
    TraceEvent.ADFUEL.RegisteringModule.AmazonA9Modulev3_2_5 |
    TraceEvent.ADFUEL.RegisteringModule.CEPModulev3_0_2 |
    TraceEvent.ADFUEL.RegisteringModule.CreativeReviewModulev3_0_5 |
    TraceEvent.ADFUEL.RegisteringModule.CriteoModulev3_2_2 |
    TraceEvent.ADFUEL.RegisteringModule.IndexExchangeWrapperModulev3_1_1 |
    TraceEvent.ADFUEL.RegisteringModule.InViewRefreshv3_0_5 |
    TraceEvent.ADFUEL.RegisteringModule.KruxModulev3_1_1 |
    TraceEvent.ADFUEL.RegisteringModule.PrebidModulev3_3_0 |
    TraceEvent.ADFUEL.RegisteringModule.ProximicModulev3_1_2 |
    TraceEvent.ADFUEL.RegisteringModule.TransactionIDModulev3_1_1 |
    TraceEvent.ADFUEL.RegisteringModule.TurnerGUIDModulev3_1_1 |
    TraceEvent.ADFUEL.RegistryLoadcdn.Cnn.Comadscnncnn_homepage.Json |
    TraceEvent.ADFUEL.RegistryLoadcdn.Cnn.Comadscnncnn_homepage.JsonEnd |
    TraceEvent.ADFUEL.RegistryLoadcdn.Cnn.Comadscnncnn_homepage.JsonStart |
    TraceEvent.ADFUEL.SendingRequest |
    TraceEvent.ADFUEL.SendingRequestEnd |
    TraceEvent.ADFUEL.SendingRequestStart |
    TraceEvent.ADFUEL.SlotLoadedad_bnr_atf_01 |
    TraceEvent.ADFUEL.SlotLoadedad_mod_35731bb1e |
    TraceEvent.ADFUEL.SlotLoadedad_oop_float_01 |
    TraceEvent.ADFUEL.SlotLoadedad_rect_btf_02 |
    TraceEvent.Allactivesurfacesready |
    TraceEvent.Animation |
    TraceEvent.AnimationHost.ActivateAnimations |
    TraceEvent.AnimationHost.TickAnimations |
    TraceEvent.AnimationHost.UpdateAnimationState |
    TraceEvent.ArrayBufferTrackerUpdatingItem.Process |
    TraceEvent.AsyncLayerTreeFrameSink.SubmitCompositorFrame |
    TraceEvent.AsyncTask |
    TraceEvent.AtlasTextOp |
    TraceEvent.AutocompleteController.Start |
    TraceEvent.AutocompleteController.UpdateResult |
    TraceEvent.BackgroundCompileTask.Run |
    TraceEvent.BackgroundHTMLParser.PumpTokenizer |
    TraceEvent.BackgroundHTMLParser.SendTokensToMainThread |
    TraceEvent.Base.TraceEventSystemStatsMonitor.SystemStats |
    TraceEvent.BeginFrame |
    TraceEvent.BeginFrameArgs |
    TraceEvent.BeginMainThreadFrame |
    TraceEvent.BenchmarkInstrumentation.DisplayRenderingStats |
    TraceEvent.BenchmarkInstrumentation.ImplThreadRenderingStats |
    TraceEvent.BitmapImage.DataChanged |
    TraceEvent.BitmapImage.Draw |
    TraceEvent.Blankframe.NooverlaysorCALayers |
    TraceEvent.Blink.Mojom.AppCacheBackend |
    TraceEvent.Blink.Mojom.AppCacheFrontend |
    TraceEvent.Blink.Mojom.Blob |
    TraceEvent.Blink.Mojom.BlobRegistry |
    TraceEvent.Blink.Mojom.CodeCacheHost |
    TraceEvent.Blink.Mojom.ManifestManager |
    TraceEvent.Blink.Mojom.PluginRegistry |
    TraceEvent.Blink.Mojom.StorageArea |
    TraceEvent.Blink.Mojom.StoragePartitionService |
    TraceEvent.BlinkGC.AllocatedObjectSizeSincePreviousGCKB |
    TraceEvent.BlinkGC.AllocatedSpaceAtLastGCKB |
    TraceEvent.BlinkGC.AllocatedSpaceKB |
    TraceEvent.BlinkGC.AtomicPhase |
    TraceEvent.BlinkGC.AtomicPhaseMarking |
    TraceEvent.BlinkGC.CollectedWrapperCount |
    TraceEvent.BlinkGC.CollectionRate |
    TraceEvent.BlinkGC.CompleteSweep |
    TraceEvent.BlinkGC.EagerSweep |
    TraceEvent.BlinkGC.InvokePreFinalizers |
    TraceEvent.BlinkGC.LazySweepOnAllocation |
    TraceEvent.BlinkGC.MarkedObjectSizeAtLastCompleteSweepKB |
    TraceEvent.BlinkGC.MarkInvokeEphemeronCallbacks |
    TraceEvent.BlinkGC.MarkNotFullyConstructedObjects |
    TraceEvent.BlinkGC.MarkProcessWorklist |
    TraceEvent.BlinkGC.MarkWeakProcessing |
    TraceEvent.BlinkGC.ObjectSizeAtLastGCKB |
    TraceEvent.BlinkGC.PartitionAllocSizeAtLastGCKB |
    TraceEvent.BlinkGC.VisitCrossThreadPersistents |
    TraceEvent.BlinkGC.VisitDOMWrappers |
    TraceEvent.BlinkGC.VisitPersistentRoots |
    TraceEvent.BlinkGC.VisitPersistents |
    TraceEvent.BlinkGC.VisitStackRoots |
    TraceEvent.BlinkGC.WrapperCount |
    TraceEvent.BlinkGC.WrapperCountAtLastGC |
    TraceEvent.BlinkGCMarking |
    TraceEvent.BlobReader.CountSize |
    TraceEvent.BlobReader.ReadBytesItem |
    TraceEvent.BlobReader.ReadMore |
    TraceEvent.BookmarkProvider.Start |
    TraceEvent.BrowserCrApplication.SendEvent |
    TraceEvent.BrowserWorker0x7fd3431d1a00 |
    TraceEvent.BudgetPool_DisableThrottling |
    TraceEvent.CalculateRenderSurfaceLayerList |
    TraceEvent.CancelAnimationFrame |
    TraceEvent.CANCELLED |
    TraceEvent.CanExceedIdleDeadlineIfRequired |
    TraceEvent.Canvas2DLayerBridge.FinalizeFrame |
    TraceEvent.Canvas2DLayerBridge.FlushRecording |
    TraceEvent.Canvas2DLayerBridgeCreation |
    TraceEvent.CanvasResourceProvider.Canvas |
    TraceEvent.CanvasResourceProviderBitmap.CreateSkSurface |
    TraceEvent.CARendererLayerTree.CommitScheduledCALayers |
    TraceEvent.CategorizedWorkerPool.CollectCompletedTasks |
    TraceEvent.CategorizedWorkerPool.ScheduleTasks |
    TraceEvent.CategorizedWorkerPool.WaitForTasksToFinishRunning |
    TraceEvent.CATransactionCoordinator.Postcommithandler |
    TraceEvent.CATransactionCoordinator.Precommithandler |
    TraceEvent.Cc.DisplayItemList |
    TraceEvent.Cc.LayerImpl |
    TraceEvent.Cc.LayerTreeHostImpl |
    TraceEvent.Cc.Tile |
    TraceEvent.Ccschedulerscheduler.L38 |
    TraceEvent.Cctreeslayer_tree_host_impl.L300 |
    TraceEvent.CERT_VERIFIER_REQUEST_BOUND_TO_JOB |
    TraceEvent.CERT_VERIFIER_REQUEST |
    TraceEvent.CertVerifierJob.OnJobCompleted |
    TraceEvent.ChannelMojo.OnMessageReceived |
    TraceEvent.CheckerImageTracker.DidActivateSyncTree |
    TraceEvent.CheckerImageTracker.ScheduleImageDecodeQueue |
    TraceEvent.CheckerImageTracker.ScheduleNextImageDecode |
    TraceEvent.CheckerImageTracker.ShouldCheckerImage |
    TraceEvent.CheckerImageTracker.TakeImagesToInvalidateOnSyncTree |
    TraceEvent.ChromeViewHostMsg_AllowDOMStorage |
    TraceEvent.ChromiumRandomAccessFile.Read |
    TraceEvent.CircleOp |
    TraceEvent.CircularRRectOp |
    TraceEvent.ClassicPendingScript.GetSource |
    TraceEvent.Cleanup_tq |
    TraceEvent.ClearusingTexSubImage2D |
    TraceEvent.ClientSocketHandle.OnIOComplete |
    TraceEvent.ColdModeSpellCheckRequester.Invoke |
    TraceEvent.CommandBufferHelper.Finish |
    TraceEvent.CommandBufferHelper.Flush |
    TraceEvent.CommandBufferProxyImpl.Flush |
    TraceEvent.CommandBufferProxyImpl.Initialize |
    TraceEvent.CommandBufferProxyImpl.OrderingBarrier |
    TraceEvent.CommandBufferProxyImpl.WaitForGetOffset |
    TraceEvent.CommandBufferService.Paused |
    TraceEvent.CommandBufferService.PutChanged |
    TraceEvent.CommandBufferStub.OnAsyncFlush |
    TraceEvent.CommandBufferStub.OnDestroyTransferBuffer |
    TraceEvent.CommandBufferStub.OnRegisterTransferBuffer |
    TraceEvent.CommandBufferStub.OnSetGetBuffer |
    TraceEvent.CommandBufferStub.OnWaitForGetOffsetInRange |
    TraceEvent.CommandBufferStub.PerformWork |
    TraceEvent.CommitLoad |
    TraceEvent.CommitPendingTreesToCA |
    TraceEvent.CompositeLayers |
    TraceEvent.CompositingInputsUpdater.Update |
    TraceEvent.CompositingLayerAssigner.Assign |
    TraceEvent.CompositingRequirementsUpdater.UpdateRecursive |
    TraceEvent.Compositor_tq |
    TraceEvent.CompositorFrameSinkSupport.DidNotProduceFrame |
    TraceEvent.CompositorFrameSinkSupport.MaybeSubmitCompositorFrame |
    TraceEvent.CompositorTimingHistory.DidDraw |
    TraceEvent.ConcurrentMarking.RunPreempted |
    TraceEvent.CONNECT_JOB_SET_SOCKET |
    TraceEvent.ConnectJob.NotifyDelegateOfCompletion |
    TraceEvent.ConsoleMessage.Error |
    TraceEvent.Content.Mojom.ChildHistogramFetcherFactory |
    TraceEvent.Content.Mojom.Frame |
    TraceEvent.Content.Mojom.FrameFactory |
    TraceEvent.Content.Mojom.FrameInputHandler |
    TraceEvent.Content.Mojom.FrameSinkProvider |
    TraceEvent.Content.Mojom.RenderFrameMetadataObserverClient |
    TraceEvent.Content.Mojom.SandboxSupportMac |
    TraceEvent.Content.Mojom.Widget |
    TraceEvent.ContentLayerDelegate.PaintContents |
    TraceEvent.ContentSubresourceFilterThrottleManager.ReadyToCommitNavigation |
    TraceEvent.ContextCreatedNotification |
    TraceEvent.Control_tq |
    TraceEvent.COOKIE_STORE_COOKIE_ADDED |
    TraceEvent.COOKIE_STORE_COOKIE_DELETED |
    TraceEvent.CpuProfiler.StartProfiling |
    TraceEvent.CreateIOSurface |
    TraceEvent.CSSFirstUsed |
    TraceEvent.CSSParserImpl.ParseStyleSheet.Parse |
    TraceEvent.CustomElementRegistry.Define |
    TraceEvent.Damagenotvisible |
    TraceEvent.DataReductionProxyCompressionStats.RecordDataUseWithMimeType |
    TraceEvent.DecodeFont |
    TraceEvent.DecodeImage |
    TraceEvent.DecodeLazyPixelRef |
    TraceEvent.Default_tq |
    TraceEvent.DefaultPathOp |
    TraceEvent.DelayBasedTimeSource.SetActive |
    TraceEvent.Device.Mojom.PowerMonitor |
    TraceEvent.Device.Mojom.PowerMonitorClient |
    TraceEvent.Device.Mojom.TimeZoneMonitor |
    TraceEvent.Device.Mojom.WakeLock |
    TraceEvent.Device.Mojom.WakeLockContext |
    TraceEvent.Device.Mojom.WakeLockProvider |
    TraceEvent.DidPrepareTiles |
    TraceEvent.DidProcessTask |
    TraceEvent.DirectRenderer.DrawFrame |
    TraceEvent.DirectRenderer.DrawRenderPass |
    TraceEvent.Discardable_memory.Mojom.DiscardableSharedMemoryManager |
    TraceEvent.DiscardableImageMap.Generate |
    TraceEvent.DiskUsage |
    TraceEvent.Display.DrawAndSwap |
    TraceEvent.Display.Resize |
    TraceEvent.Display.SetSurfaceId |
    TraceEvent.Display.SetVisible |
    TraceEvent.Display.SurfaceDiscarded |
    TraceEvent.DisplayCALayerTree.GotCAContextFrame |
    TraceEvent.DisplayCompositor |
    TraceEvent.DisplayItemList.Finalize |
    TraceEvent.DisplayLinkMac.DisplayLinkCallback |
    TraceEvent.DisplayLinkMac.UpdateVSyncParameters |
    TraceEvent.DisplayScheduler.BeginFrame |
    TraceEvent.DisplayScheduler.DrawAndSwap |
    TraceEvent.DisplayScheduler.OnBeginFrameDeadline |
    TraceEvent.DisplayScheduler.Pending_swaps |
    TraceEvent.DisplayScheduler.ScheduleBeginFrameDeadline |
    TraceEvent.DisplayScheduler.SetNewRootSurface |
    TraceEvent.DisplayScheduler.SetRootFrameMissing |
    TraceEvent.DisplayScheduler.SurfaceDamaged |
    TraceEvent.DisplayScheduler.SurfaceDamageExpected |
    TraceEvent.DisplayScheduler.UpdateHasPendingSurfaces |
    TraceEvent.DNS_TRANSACTION_ATTEMPT |
    TraceEvent.DNS_TRANSACTION_QUERY |
    TraceEvent.DNS_TRANSACTION_RESPONSE |
    TraceEvent.DNS_TRANSACTION |
    TraceEvent.Document.RebuildLayoutTree |
    TraceEvent.Document.RecalcStyle |
    TraceEvent.Document.Shutdown |
    TraceEvent.Document.UpdateActiveStyle |
    TraceEvent.Document.UpdateStyle |
    TraceEvent.Document.UpdateStyleInvalidationIfNeeded |
    TraceEvent.DocumentSubresourceFilter.GetLoadPolicy |
    TraceEvent.DocumentTimeline.ServiceAnimations |
    TraceEvent.DomComplete |
    TraceEvent.DOMContentLoaded |
    TraceEvent.DomContentLoadedEventEnd |
    TraceEvent.DomContentLoadedEventStart |
    TraceEvent.DomInteractive |
    TraceEvent.DomLoading |
    TraceEvent.DomReady |
    TraceEvent.DOMStorageHostMsg_LoadStorageArea |
    TraceEvent.DOMStorageHostMsg_OpenStorageArea |
    TraceEvent.DOMStorageHostMsg_RemoveItem |
    TraceEvent.DOMStorageHostMsg_SetItem |
    TraceEvent.DOMStorageMsg_AsyncOperationComplete |
    TraceEvent.DOMStorageMsg_Event |
    TraceEvent.DomTime |
    TraceEvent.DosplayResourceProvider.DeleteResourceInternal |
    TraceEvent.DoVerifyOnWorkerThread |
    TraceEvent.Draw_property_utils.ComputeDrawPropertiesOfVisibleLayers |
    TraceEvent.Draw_property_utils.FindLayersThatNeedUpdates |
    TraceEvent.DrawFrame |
    TraceEvent.DrawLayers.FrameViewerTracing |
    TraceEvent.DrawLazyPixelRef |
    TraceEvent.Drawskipped |
    TraceEvent.DrawVerticesOp |
    TraceEvent.EarlyOut_DeferCommit_InsideBeginMainFrame |
    TraceEvent.EarlyOut_NoUpdates |
    TraceEvent.EditingUtility.NextCandidateAlgorithm |
    TraceEvent.EditingUtility.PreviousCandidateAlgorithm |
    TraceEvent.ElementAnimations.SetRunState |
    TraceEvent.EnableLongIdlePeriod |
    TraceEvent.EndIdlePeriod |
    TraceEvent.EndofTrace |
    TraceEvent.Estimated_queueing_time_for_window |
    TraceEvent.Evacuator.EvacuatePage |
    TraceEvent.EvaluateScript |
    TraceEvent.Event.Pipeline |
    TraceEvent.EventDispatch |
    TraceEvent.EventDispatcher.Dispatch |
    TraceEvent.EventDispatcher.DispatchEvent |
    TraceEvent.EventHandler.HandleMouseLeaveEvent |
    TraceEvent.EventHandler.HandleMouseMoveEvent |
    TraceEvent.EventHandler.HandleMousePressEvent |
    TraceEvent.EventHandler.HandleMouseReleaseEvent |
    TraceEvent.EventHandler.HitTestResultAtLocation |
    TraceEvent.ExtensionHostMsg_AddLazyListener |
    TraceEvent.ExtensionHostMsg_AddListener |
    TraceEvent.ExtensionHostMsg_CloseMessagePort |
    TraceEvent.ExtensionHostMsg_EventAck |
    TraceEvent.ExtensionHostMsg_ExecuteCodeFinished |
    TraceEvent.ExtensionHostMsg_GenerateUniqueID |
    TraceEvent.ExtensionHostMsg_GetMessageBundle |
    TraceEvent.ExtensionHostMsg_OpenChannelToExtension |
    TraceEvent.ExtensionHostMsg_OpenChannelToTab |
    TraceEvent.ExtensionHostMsg_OpenMessagePort |
    TraceEvent.ExtensionHostMsg_PostMessage |
    TraceEvent.ExtensionHostMsg_Request |
    TraceEvent.ExtensionHostMsg_RequestForIOThread |
    TraceEvent.ExtensionMsg_ActivateExtension |
    TraceEvent.ExtensionMsg_DeliverMessage |
    TraceEvent.ExtensionMsg_DispatchEvent |
    TraceEvent.ExtensionMsg_DispatchOnConnect |
    TraceEvent.ExtensionMsg_DispatchOnDisconnect |
    TraceEvent.ExtensionMsg_ExecuteCode |
    TraceEvent.ExtensionMsg_Loaded |
    TraceEvent.ExtensionMsg_NotifyRenderViewType |
    TraceEvent.ExtensionMsg_Response |
    TraceEvent.ExtensionMsg_SetScriptingWhitelist |
    TraceEvent.ExtensionMsg_SetSessionInfo |
    TraceEvent.ExtensionMsg_SetSystemFont |
    TraceEvent.ExtensionMsg_SetTabId |
    TraceEvent.ExtensionMsg_UpdateBrowserWindowId |
    TraceEvent.ExtensionMsg_UpdateDefaultPolicyHostRestrictions |
    TraceEvent.ExtensionMsg_UpdateUserScripts |
    TraceEvent.ExtensionMsg_ValidateMessagePort |
    TraceEvent.ExtensionMsg_WatchPages |
    TraceEvent.Extensions.FeatureProvider.FeatureProviderStatic |
    TraceEvent.FaveReady_mark |
    TraceEvent.FaveReady |
    TraceEvent.FaviconServiceImpl.GetFaviconForPageURL |
    TraceEvent.FaviconServiceImpl.GetFaviconImageForPageURL |
    TraceEvent.FaviconServiceImpl.RunFaviconImageCallbackWithBitmapResults |
    TraceEvent.FaviconUtil.SelectFaviconFramesFromPNGs |
    TraceEvent.FaviconUtil.SelectFaviconFramesFromPNGsWithoutResizing |
    TraceEvent.FeatureFirstUsed |
    TraceEvent.FetchStart |
    TraceEvent.File.Close |
    TraceEvent.File.Duplicate |
    TraceEvent.File.Flush |
    TraceEvent.File.GetInfo |
    TraceEvent.File.Initialize |
    TraceEvent.File.Read |
    TraceEvent.File.ReadAtCurrentPos |
    TraceEvent.File.Seek |
    TraceEvent.File.SetLength |
    TraceEvent.File.Write |
    TraceEvent.File.WriteAtCurrentPos |
    TraceEvent.FillRectOp |
    TraceEvent.FireAnimationFrame |
    TraceEvent.FireIdleCallback |
    TraceEvent.FirstContentfulPaint |
    TraceEvent.FirstImagePaint |
    TraceEvent.FirstLayout |
    TraceEvent.FirstMeaningfulPaint |
    TraceEvent.FirstMeaningfulPaintCandidate |
    TraceEvent.FirstPaint |
    TraceEvent.FirstTextPaint |
    TraceEvent.FirstVisualChange |
    TraceEvent.FooterEnd |
    TraceEvent.FooterStart |
    TraceEvent.FooterTime |
    TraceEvent.Frame_deferrable_tq |
    TraceEvent.Frame_loading_control_tq |
    TraceEvent.Frame_loading_tq |
    TraceEvent.Frame_pausable_tq |
    TraceEvent.Frame_throttleable_tq |
    TraceEvent.Frame_unpausable_tq |
    TraceEvent.FrameBlameContext |
    TraceEvent.FrameCommittedInBrowser |
    TraceEvent.FrameDeletedInBrowser |
    TraceEvent.FrameHostMsg_BeforeUnload_ACK |
    TraceEvent.FrameHostMsg_CheckCompleted |
    TraceEvent.FrameHostMsg_CookiesEnabled |
    TraceEvent.FrameHostMsg_CreateChildFrame |
    TraceEvent.FrameHostMsg_DidAddContentSecurityPolicies |
    TraceEvent.FrameHostMsg_DidAddMessageToConsole |
    TraceEvent.FrameHostMsg_DidChangeFrameOwnerProperties |
    TraceEvent.FrameHostMsg_DidChangeLoadProgress |
    TraceEvent.FrameHostMsg_DidFailLoadWithError |
    TraceEvent.FrameHostMsg_DidFinishDocumentLoad |
    TraceEvent.FrameHostMsg_DidFinishLoad |
    TraceEvent.FrameHostMsg_DidStopLoading |
    TraceEvent.FrameHostMsg_DispatchLoad |
    TraceEvent.FrameHostMsg_DocumentOnLoadCompleted |
    TraceEvent.FrameHostMsg_FocusedNodeChanged |
    TraceEvent.FrameHostMsg_ForwardResourceTimingToParent |
    TraceEvent.FrameHostMsg_FrameFocused |
    TraceEvent.FrameHostMsg_HittestData |
    TraceEvent.FrameHostMsg_RouteMessageEvent |
    TraceEvent.FrameHostMsg_SuddenTerminationDisablerChanged |
    TraceEvent.FrameHostMsg_SwapOut_ACK |
    TraceEvent.FrameHostMsg_SynchronizeVisualProperties |
    TraceEvent.FrameHostMsg_UpdatePageImportanceSignals |
    TraceEvent.FrameHostMsg_UpdateRenderThrottlingStatus |
    TraceEvent.FrameHostMsg_UpdateState |
    TraceEvent.FrameHostMsg_UpdateTitle |
    TraceEvent.FrameHostMsg_UpdateUserActivationState |
    TraceEvent.FrameHostMsg_UpdateViewportIntersection |
    TraceEvent.FrameHostMsg_VisibilityChanged |
    TraceEvent.FrameLoader |
    TraceEvent.FrameMsg_AddContentSecurityPolicies |
    TraceEvent.FrameMsg_Delete |
    TraceEvent.FrameMsg_DeleteProxy |
    TraceEvent.FrameMsg_DidStartLoading |
    TraceEvent.FrameMsg_DidStopLoading |
    TraceEvent.FrameMsg_DidUpdateFramePolicy |
    TraceEvent.FrameMsg_DidUpdateOrigin |
    TraceEvent.FrameMsg_PostMessageEvent |
    TraceEvent.FrameMsg_ResetContentSecurityPolicy |
    TraceEvent.FrameMsg_SetAccessibilityMode |
    TraceEvent.FrameMsg_SetFrameOwnerProperties |
    TraceEvent.FrameMsg_UpdateUserActivationState |
    TraceEvent.FramePresented |
    TraceEvent.FrameScheduler.FramePaused |
    TraceEvent.FrameScheduler.FrameVisible |
    TraceEvent.FrameScheduler.HasActiveConnection |
    TraceEvent.FrameScheduler.KeepActive |
    TraceEvent.FrameScheduler.Origin |
    TraceEvent.FrameScheduler.PageFrozen |
    TraceEvent.FrameScheduler.PageVisibility |
    TraceEvent.FrameScheduler.SubResourceLoadingPaused |
    TraceEvent.FrameScheduler.TaskQueuesThrottled |
    TraceEvent.FrameScheduler.URL |
    TraceEvent.FrameStartedLoading |
    TraceEvent.FrameTreeNode.DidStartLoading |
    TraceEvent.FrameTreeNode.DidStopLoading |
    TraceEvent.FrameView.Layout |
    TraceEvent.FrameView.PerformLayout |
    TraceEvent.FrameView.PerformPostLayoutTasks |
    TraceEvent.FrameView.PerformPreLayoutTasks |
    TraceEvent.FullEvacuator.RawEvacuatePage |
    TraceEvent.FullImage |
    TraceEvent.FunctionCall |
    TraceEvent.GestureProvider.InitGestureDetectors |
    TraceEvent.GestureProvider.OnTouchEvent |
    TraceEvent.GLContextCGL.BackpressureFenceCreate |
    TraceEvent.GLContextCGL.BackpressureFenceWait |
    TraceEvent.GLContextCGL.MakeCurrent |
    TraceEvent.GLES2.Finish |
    TraceEvent.GLES2.GetGLError |
    TraceEvent.GLES2.GetShaderPrecisionFormat |
    TraceEvent.GLES2.GetString |
    TraceEvent.GLES2.PostSubBufferCHROMIUM |
    TraceEvent.GLES2CommandBufferStub.Initialize |
    TraceEvent.GLES2DecoderImpl.ClearLevel |
    TraceEvent.GLES2DecoderImpl.ClearLevelUsingGL |
    TraceEvent.GLES2DecoderImpl.DoCompileShader |
    TraceEvent.GLES2DecoderImpl.DoCreateAndConsumeTextureINTERNAL |
    TraceEvent.GLES2DecoderImpl.DoLinkProgram |
    TraceEvent.GLES2DecoderImpl.DoTexStorage2D |
    TraceEvent.GLES2DecoderImpl.DoTexStorage2DImageCHROMIUM |
    TraceEvent.GLES2DecoderImpl.HandlePostSubBufferCHROMIUM |
    TraceEvent.GLES2DecoderImpl.HandleTexImage2D |
    TraceEvent.GLES2DecoderImpl.HandleTexSubImage2D |
    TraceEvent.GLES2DecoderImpl.Initialize |
    TraceEvent.GLES2DecoderImpl.InitializeShaderTranslator |
    TraceEvent.GLES2DecoderImpl.RestoreState |
    TraceEvent.GLES2Implementation.CheckFramebufferStatus |
    TraceEvent.GLES2Implementation.GetIntegerv |
    TraceEvent.GLES2Implementation.Initialize |
    TraceEvent.GLES2Implementation.SetAggressivelyFreeResources |
    TraceEvent.GLFence.HasCompleted |
    TraceEvent.GLImageIOSurface.BindTexImage |
    TraceEvent.GlobalMemoryDump.Computation |
    TraceEvent.GLRenderer.BeginDrawingFrame |
    TraceEvent.GLRenderer.InitializeSharedObjects |
    TraceEvent.GLRenderer.SwapBuffers |
    TraceEvent.GlResizeChromium |
    TraceEvent.Goog_123_3_1_end |
    TraceEvent.Goog_123_3_1_start |
    TraceEvent.Goog_123_3_1 |
    TraceEvent.Gpu.EstablishGpuChannelSync |
    TraceEvent.Gpu.State |
    TraceEvent.GpuChannel.OnCreateCommandBuffer |
    TraceEvent.GpuChannel.OnDestroyCommandBuffer |
    TraceEvent.GpuChannelHost.CreateViewCommandBuffer |
    TraceEvent.GpuChannelHost.Send |
    TraceEvent.GpuChannelMsg_CreateCommandBuffer |
    TraceEvent.GpuChannelMsg_CreateSharedImage |
    TraceEvent.GpuChannelMsg_CreateSharedImageWithData |
    TraceEvent.GpuChannelMsg_DestroyCommandBuffer |
    TraceEvent.GpuChannelMsg_DestroySharedImage |
    TraceEvent.GpuChannelMsg_RegisterSharedImageUploadBuffer |
    TraceEvent.GpuCommandBufferMsg_AsyncFlush |
    TraceEvent.GpuCommandBufferMsg_DestroyTransferBuffer |
    TraceEvent.GpuCommandBufferMsg_GetChannelToken |
    TraceEvent.GpuCommandBufferMsg_RegisterTransferBuffer |
    TraceEvent.GpuCommandBufferMsg_SetGetBuffer |
    TraceEvent.GpuCommandBufferMsg_WaitForGetOffsetInRange |
    TraceEvent.GpuHostImpl.CreateChannelCache |
    TraceEvent.GpuHostImpl.DidDestroyChannel |
    TraceEvent.GpuHostImpl.EstablishGpuChannel |
    TraceEvent.GpuHostImpl.OnChannelEstablished |
    TraceEvent.GpuImageDecodeCache.CreateImageData |
    TraceEvent.GpuImageDecodeCache.DrawWithImageFinished |
    TraceEvent.GpuImageDecodeCache.EnsureCapacity |
    TraceEvent.GpuImageDecodeCache.GetDecodedImageForDraw |
    TraceEvent.GpuImageDecodeCache.GetImageDataForDrawImage |
    TraceEvent.GpuImageDecodeCache.GetImageDecodeTaskAndRef |
    TraceEvent.GpuImageDecodeCache.GetTaskForImageAndRef |
    TraceEvent.GpuImageDecodeCache.OnImageUploadTaskCompleted |
    TraceEvent.GpuImageDecodeCache.OnMemoryDump |
    TraceEvent.GpuImageDecodeCache.ReduceCacheUsage |
    TraceEvent.GpuImageDecodeCache.RefImage |
    TraceEvent.GpuImageDecodeCache.RefImageDecode |
    TraceEvent.GpuImageDecodeCache.SetShouldAggressivelyFreeResources |
    TraceEvent.GpuImageDecodeCache.UnrefImage |
    TraceEvent.GpuImageDecodeCache.UnrefImageDecode |
    TraceEvent.GpuImageDecodeCache.UploadImage |
    TraceEvent.GpuRasterBuffer.Playback |
    TraceEvent.GpuRasterization |
    TraceEvent.GPUStateTracer.TakeSnapshotWithCurrentFramebuffer |
    TraceEvent.GPUTask |
    TraceEvent.GPUTracer.ProcessTraces |
    TraceEvent.Graphics.Pipeline.DrawAndSwap |
    TraceEvent.GraphicsLayer.PaintContents |
    TraceEvent.GraphicsLayerTreeBuilder.Rebuild |
    TraceEvent.GraphicsLayerUpdater.Update |
    TraceEvent.GrContextPriv.WriteSurfacePixels |
    TraceEvent.GrDrawingManager.Flush |
    TraceEvent.GrDrawOpAtlas.Plot.UploadToTextureGrDeferredTextureUploadWritePixelsFnGrTextureProxy |
    TraceEvent.GrGLProgramGrGLProgramBuilder.Finalize |
    TraceEvent.GrGpu.CreateTexture |
    TraceEvent.GrRenderTargetContext.AddDrawOp |
    TraceEvent.GrRenderTargetContext.Clear |
    TraceEvent.GrRenderTargetContext.Discard |
    TraceEvent.GrRenderTargetContext.DrawGlyphRunList |
    TraceEvent.GrRenderTargetContext.DrawOval |
    TraceEvent.GrRenderTargetContext.DrawPaint |
    TraceEvent.GrRenderTargetContext.DrawPath |
    TraceEvent.GrRenderTargetContext.DrawRect |
    TraceEvent.GrRenderTargetContext.DrawRRect |
    TraceEvent.GrRenderTargetContext.DrawShape |
    TraceEvent.GrRenderTargetContext.DrawTexture |
    TraceEvent.GrRenderTargetContext.DrawVertices |
    TraceEvent.GrRenderTargetContext.FillRectToRect |
    TraceEvent.GrRenderTargetContext.FillRectWithLocalMatrix |
    TraceEvent.GrRenderTargetContext.InternalDrawPath |
    TraceEvent.GrRenderTargetContext.PrepareForExternalIO |
    TraceEvent.GrRenderTargetContextPriv.AbsClear |
    TraceEvent.HandleMouseMove |
    TraceEvent.HeadEnd |
    TraceEvent.HeadTime |
    TraceEvent.Heap.CollectCodeStatistics |
    TraceEvent.HistoryBackend.GetFaviconsForURL |
    TraceEvent.HistoryQuickProvider.Start |
    TraceEvent.HistoryService.GetFaviconsForURL |
    TraceEvent.HistoryURLProvider.QueryComplete |
    TraceEvent.HistoryURLProvider.Start |
    TraceEvent.HitTest |
    TraceEvent.HOST_RESOLVER_IMPL_ATTEMPT_FINISHED |
    TraceEvent.HOST_RESOLVER_IMPL_ATTEMPT_STARTED |
    TraceEvent.HOST_RESOLVER_IMPL_CACHE_HIT |
    TraceEvent.HOST_RESOLVER_IMPL_CREATE_JOB |
    TraceEvent.HOST_RESOLVER_IMPL_DNS_TASK |
    TraceEvent.HOST_RESOLVER_IMPL_IPV6_REACHABILITY_CHECK |
    TraceEvent.HOST_RESOLVER_IMPL_JOB_ATTACH |
    TraceEvent.HOST_RESOLVER_IMPL_JOB_REQUEST_ATTACH |
    TraceEvent.HOST_RESOLVER_IMPL_JOB_STARTED |
    TraceEvent.HOST_RESOLVER_IMPL_JOB |
    TraceEvent.HOST_RESOLVER_IMPL_PROC_TASK |
    TraceEvent.HOST_RESOLVER_IMPL_REQUEST |
    TraceEvent.HostCache.Set |
    TraceEvent.HTMLCanvasElement.FinalizeFrame |
    TraceEvent.HTMLDocumentParser.Append |
    TraceEvent.HTMLDocumentParser.AppendBytes |
    TraceEvent.HTMLDocumentParser.DocumentElementAvailable |
    TraceEvent.HTMLDocumentParser.EnqueueTokenizedChunk |
    TraceEvent.HTMLDocumentParser.Insert |
    TraceEvent.HTMLDocumentParser.ProcessTokenizedChunkFromBackgroundParser |
    TraceEvent.HTMLParserScriptRunner.Execute |
    TraceEvent.HTMLParserScriptRunner.ExecuteScriptsWaitingForLoad |
    TraceEvent.HTMLParserScriptRunner.ExecuteScriptsWaitingForParsing |
    TraceEvent.HTMLParserScriptRunner.ExecuteScriptsWaitingForResources |
    TraceEvent.HTMLParserScriptRunnerExecuteScript |
    TraceEvent.HTMLSelectElement.SelectOption |
    TraceEvent.HTTP_CACHE_ADD_TO_ENTRY |
    TraceEvent.HTTP_CACHE_CALLER_REQUEST_HEADERS |
    TraceEvent.HTTP_CACHE_CREATE_ENTRY |
    TraceEvent.HTTP_CACHE_GET_BACKEND |
    TraceEvent.HTTP_CACHE_OPEN_ENTRY |
    TraceEvent.HTTP_CACHE_READ_DATA |
    TraceEvent.HTTP_CACHE_READ_INFO |
    TraceEvent.HTTP_CACHE_WRITE_DATA |
    TraceEvent.HTTP_CACHE_WRITE_INFO |
    TraceEvent.HTTP_STREAM_JOB_BOUND_TO_QUIC_STREAM_FACTORY_JOB |
    TraceEvent.HTTP_STREAM_JOB_BOUND_TO_REQUEST |
    TraceEvent.HTTP_STREAM_JOB_CONTROLLER_ALT_SVC_FOUND |
    TraceEvent.HTTP_STREAM_JOB_CONTROLLER_BOUND |
    TraceEvent.HTTP_STREAM_JOB_CONTROLLER_PROXY_SERVER_RESOLVED |
    TraceEvent.HTTP_STREAM_JOB_CONTROLLER |
    TraceEvent.HTTP_STREAM_JOB_DELAYED |
    TraceEvent.HTTP_STREAM_JOB_INIT_CONNECTION |
    TraceEvent.HTTP_STREAM_JOB_WAITING |
    TraceEvent.HTTP_STREAM_JOB |
    TraceEvent.HTTP_STREAM_PARSER_READ_HEADERS |
    TraceEvent.HTTP_STREAM_REQUEST_BOUND_TO_JOB |
    TraceEvent.HTTP_STREAM_REQUEST_BOUND_TO_QUIC_SESSION |
    TraceEvent.HTTP_STREAM_REQUEST_PROTO |
    TraceEvent.HTTP_STREAM_REQUEST_STARTED_JOB |
    TraceEvent.HTTP_STREAM_REQUEST |
    TraceEvent.HTTP_TRANSACTION_HTTP2_SEND_REQUEST_HEADERS |
    TraceEvent.HTTP_TRANSACTION_QUIC_SEND_REQUEST_HEADERS |
    TraceEvent.HTTP_TRANSACTION_READ_BODY |
    TraceEvent.HTTP_TRANSACTION_READ_HEADERS |
    TraceEvent.HTTP_TRANSACTION_READ_RESPONSE_HEADERS |
    TraceEvent.HTTP_TRANSACTION_SEND_REQUEST_HEADERS |
    TraceEvent.HTTP_TRANSACTION_SEND_REQUEST |
    TraceEvent.HTTP2_SESSION_INITIALIZED |
    TraceEvent.HTTP2_SESSION_PING |
    TraceEvent.HTTP2_SESSION_POOL_FOUND_EXISTING_SESSION_FROM_IP_POOL |
    TraceEvent.HTTP2_SESSION_POOL_FOUND_EXISTING_SESSION |
    TraceEvent.HTTP2_SESSION_POOL_IMPORTED_SESSION_FROM_SOCKET |
    TraceEvent.HTTP2_SESSION_RECV_DATA |
    TraceEvent.HTTP2_SESSION_RECV_HEADERS |
    TraceEvent.HTTP2_SESSION_RECV_SETTING |
    TraceEvent.HTTP2_SESSION_RECV_SETTINGS_ACK |
    TraceEvent.HTTP2_SESSION_RECV_SETTINGS |
    TraceEvent.HTTP2_SESSION_RECV_WINDOW_UPDATE |
    TraceEvent.HTTP2_SESSION_SEND_HEADERS |
    TraceEvent.HTTP2_SESSION_SEND_SETTINGS_ACK |
    TraceEvent.HTTP2_SESSION_SEND_SETTINGS |
    TraceEvent.HTTP2_SESSION_SEND_WINDOW_UPDATE |
    TraceEvent.HTTP2_SESSION_UPDATE_RECV_WINDOW |
    TraceEvent.HTTP2_SESSION_UPDATE_SEND_WINDOW |
    TraceEvent.HTTP2_SESSION_UPDATE_STREAMS_SEND_WINDOW_SIZE |
    TraceEvent.HTTP2_SESSION |
    TraceEvent.HTTP2_STREAM_UPDATE_RECV_WINDOW |
    TraceEvent.HTTP2_STREAM_UPDATE_SEND_WINDOW |
    TraceEvent.HttpCacheTransaction.DoAddToEntry |
    TraceEvent.HttpCacheTransaction.DoAddToEntryComplete |
    TraceEvent.HttpCacheTransaction.DoCacheDispatchValidation |
    TraceEvent.HttpCacheTransaction.DoCacheReadData |
    TraceEvent.HttpCacheTransaction.DoCacheReadDataComplete |
    TraceEvent.HttpCacheTransaction.DoCacheReadResponse |
    TraceEvent.HttpCacheTransaction.DoCacheReadResponseComplete |
    TraceEvent.HttpCacheTransaction.DoCacheWriteResponse |
    TraceEvent.HttpCacheTransaction.DoCacheWriteResponseComplete |
    TraceEvent.HttpCacheTransaction.DoCreateEntry |
    TraceEvent.HttpCacheTransaction.DoCreateEntryComplete |
    TraceEvent.HttpCacheTransaction.DoInitEntry |
    TraceEvent.HttpCacheTransaction.DoNetworkRead |
    TraceEvent.HttpCacheTransaction.DoNetworkReadCacheWrite |
    TraceEvent.HttpCacheTransaction.DoNetworkReadCacheWriteComplete |
    TraceEvent.HttpCacheTransaction.DoNetworkReadComplete |
    TraceEvent.HttpCacheTransaction.DoOpenEntry |
    TraceEvent.HttpCacheTransaction.DoOpenEntryComplete |
    TraceEvent.HttpCacheTransaction.DoOverwriteCachedResponse |
    TraceEvent.HttpCacheTransaction.DoSendRequest |
    TraceEvent.HttpCacheTransaction.DoSendRequestComplete |
    TraceEvent.HttpCacheTransaction.DoSuccessfulSendRequest |
    TraceEvent.HttpCacheTransaction.DoTruncateCachedData |
    TraceEvent.HttpCacheTransaction.DoTruncateCachedMetadata |
    TraceEvent.HttpCacheTransaction.DoTruncateCachedMetadataComplete |
    TraceEvent.HttpCacheTransaction.Transaction |
    TraceEvent.HttpStreamFactory.Job.OnIOComplete |
    TraceEvent.HttpStreamFactory.Job.RunLoop |
    TraceEvent.Identity.Mojom.IdentityManager |
    TraceEvent.Idle_tq |
    TraceEvent.IdleSpellCheckController.HotModeInvocation |
    TraceEvent.ImageAnimationController.AnimateImagesForSyncTree |
    TraceEvent.ImageAnimationController.WillActivate |
    TraceEvent.ImageDecodeTask |
    TraceEvent.ImageOperations.Resize |
    TraceEvent.ImageResourceContent.UpdateImage |
    TraceEvent.ImageTransportSurfaceOverlayMac.ApplyBackpressure |
    TraceEvent.ImageTransportSurfaceOverlayMac.SwapBuffersInternal |
    TraceEvent.ImageUploadTaskImpl.RunOnWorkerThread |
    TraceEvent.ImplementationBase.GetBucketContents |
    TraceEvent.ImplementationBase.Initialize |
    TraceEvent.ImplementationBase.WaitForCmd |
    TraceEvent.InProcessCommandBuffer.Flush |
    TraceEvent.InProcessCommandBuffer.FlushOnGpuThread |
    TraceEvent.InProcessCommandBuffer.Initialize |
    TraceEvent.InProcessCommandBuffer.InitializeOnGpuThread |
    TraceEvent.Input_tq |
    TraceEvent.InputEventSentBlocking |
    TraceEvent.InputLatency.KeyUp |
    TraceEvent.InputLatency.MouseLeave |
    TraceEvent.InputLatency.MouseMove |
    TraceEvent.InputLatency.RawKeyDown |
    TraceEvent.InputMsg_SetFocus |
    TraceEvent.InputRouterImpl.FilterAndSendWebInputEvent |
    TraceEvent.InputRouterImpl.KeboardEventHandled |
    TraceEvent.InputRouterImpl.MouseEventHandled |
    TraceEvent.InputRouterImpl.OnHasTouchEventHandlers |
    TraceEvent.InstallConditionalFeatures |
    TraceEvent.InteractiveTime |
    TraceEvent.InvalidateLayout |
    TraceEvent.Ipc_tq |
    TraceEvent.IPCChannel |
    TraceEvent.Is_gesture_active |
    TraceEvent.ItemParallelJob.Run |
    TraceEvent.Job.ExecuteProxyResolver |
    TraceEvent.KeyedServiceFactory.GetServiceForContext |
    TraceEvent.KeyframeModel |
    TraceEvent.KeywordProvider.Start |
    TraceEvent.LatencyInfo.Flow |
    TraceEvent.LaunchProcess |
    TraceEvent.Layer.PaintContentsToDisplayList |
    TraceEvent.Layer.PushPropertiesTo |
    TraceEvent.Layer.SetElementId |
    TraceEvent.LayerAnimator.Step |
    TraceEvent.LayerId |
    TraceEvent.LayerImpl.SetElementId |
    TraceEvent.LayerInvalidationTracking |
    TraceEvent.LayerTreeHost.AnimationHost.PushProperties |
    TraceEvent.LayerTreeHost.DoUpdateLayers |
    TraceEvent.LayerTreeHost.FinishCommitOnImplThread |
    TraceEvent.LayerTreeHost.InitializeForReal |
    TraceEvent.LayerTreeHost.LayerTreeHost |
    TraceEvent.LayerTreeHost.PushProperties |
    TraceEvent.LayerTreeHost.SetHasGpuRasterizationTrigger |
    TraceEvent.LayerTreeHost.SetLayerTreeFrameSink |
    TraceEvent.LayerTreeHost.UpdateLayers_BuiltPropertyTrees |
    TraceEvent.LayerTreeHost.UpdateLayers.BuildPropertyTrees |
    TraceEvent.LayerTreeHostImpl.ActivateSyncTree |
    TraceEvent.LayerTreeHostImpl.BeginCommit |
    TraceEvent.LayerTreeHostImpl.BuildEvictionQueue |
    TraceEvent.LayerTreeHostImpl.BuildRasterQueue |
    TraceEvent.LayerTreeHostImpl.CalculateRenderPasses |
    TraceEvent.LayerTreeHostImpl.CanDrawemptyviewport |
    TraceEvent.LayerTreeHostImpl.CanDrawnorootlayer |
    TraceEvent.LayerTreeHostImpl.CommitComplete |
    TraceEvent.LayerTreeHostImpl.GenerateCompositorFrame |
    TraceEvent.LayerTreeHostImpl.InitializeFrameSink |
    TraceEvent.LayerTreeHostImpl.LayerTreeHostImpl |
    TraceEvent.LayerTreeHostImpl.NotifyTileStateChanged |
    TraceEvent.LayerTreeHostImpl.PrepareToDraw |
    TraceEvent.LayerTreeHostImpl.ReleaseLayerTreeFrameSink |
    TraceEvent.LayerTreeHostImpl.SetVisible |
    TraceEvent.LayerTreeImpl.AddToElementLayerList |
    TraceEvent.LayerTreeImpl.InvalidateRegionForImages |
    TraceEvent.LayerTreeImpl.PushPropertiesTo |
    TraceEvent.LayerTreeImpl.PushPropertyTreesTo |
    TraceEvent.LayerTreeImpl.RemoveFromElementLayerList |
    TraceEvent.LayerTreeImpl.UpdateDrawProperties.CalculateDrawProperties |
    TraceEvent.LayerTreeImpl.UpdateDrawProperties.Occlusion |
    TraceEvent.LayerTreeImpl.UpdateDrawProperties.UpdateTiles |
    TraceEvent.Layout |
    TraceEvent.LayoutInvalidationTracking |
    TraceEvent.LayoutView.CommitPendingSelection |
    TraceEvent.Leveldb.Mojom.LevelDBService |
    TraceEvent.LiveObjectVisitor.VisitBlackObjects |
    TraceEvent.LiveObjectVisitor.VisitBlackObjectsNoFail |
    TraceEvent.LoadAnyStartablePendingRequests |
    TraceEvent.LoadEndeventUtils |
    TraceEvent.LoadEndpixelQueue |
    TraceEvent.LoadEventEnd |
    TraceEvent.LoadEventStart |
    TraceEvent.LoadFinished |
    TraceEvent.LoadStarteventUtils |
    TraceEvent.LoadStartpixelQueue |
    TraceEvent.LocalFrameView.FrameRectsChanged |
    TraceEvent.LocalFrameView.Layout |
    TraceEvent.LocalFrameView.PerformLayout |
    TraceEvent.LocalFrameView.PerformPostLayoutTasks |
    TraceEvent.LocalFrameView.PerformPreLayoutTasks |
    TraceEvent.LocalFrameView.RunCompositingLifecyclePhase |
    TraceEvent.LocalFrameView.RunPaintLifecyclePhase |
    TraceEvent.LocalFrameView.RunPrePaintLifecyclePhase |
    TraceEvent.LocalFrameView.RunStyleAndLayoutLifecyclePhases |
    TraceEvent.LocalFrameView.UpdateRenderThrottlingStatus |
    TraceEvent.LocalFrameView.UpdateStyleAndLayoutIfNeededRecursive |
    TraceEvent.LocalFrameView.UpdateViewportIntersectionsForSubtree |
    TraceEvent.LocalSurfaceId.Embed.Flow |
    TraceEvent.LocalSurfaceId.Submission.Flow |
    TraceEvent.LocalWindowProxy.CreateContext |
    TraceEvent.LocalWindowProxy.Initialize |
    TraceEvent.LocalWindowProxy.SetupWindowPrototypeChain |
    TraceEvent.LocalWindowProxy.UpdateDocumentProperty |
    TraceEvent.LongTask |
    TraceEvent.Lteu |
    TraceEvent.Ltpq |
    TraceEvent.MainThreadLatency |
    TraceEvent.MainThreadScheduler.RendererMainThreadLoad.Background |
    TraceEvent.MainThreadScheduler.RendererMainThreadLoad.Foreground |
    TraceEvent.MainThreadSchedulerIdlePeriod |
    TraceEvent.MainThreadSchedulerImpl.BeginFrameNotExpectedSoon |
    TraceEvent.MainThreadSchedulerImpl.DidCommitFrameToCompositor |
    TraceEvent.MainThreadSchedulerImpl.DidCommitProvisionalLoad |
    TraceEvent.MainThreadSchedulerImpl.DidHandleInputEventOnCompositorThread |
    TraceEvent.MainThreadSchedulerImpl.DidHandleInputEventOnMainThread |
    TraceEvent.MainThreadSchedulerImpl.DidStartProvisionalLoad |
    TraceEvent.MainThreadSchedulerImpl.DispatchRequestBeginMainFrameNotExpected |
    TraceEvent.MainThreadSchedulerImpl.EndIdlePeriod |
    TraceEvent.MainThreadSchedulerImpl.OnFirstMeaningfulPaint |
    TraceEvent.MainThreadSchedulerImpl.OnRendererBackgrounded |
    TraceEvent.MainThreadSchedulerImpl.OnRendererForegrounded |
    TraceEvent.MainThreadSchedulerImpl.OnRendererHidden |
    TraceEvent.MainThreadSchedulerImpl.OnRendererVisible |
    TraceEvent.MainThreadSchedulerImpl.ResetForNavigationLocked |
    TraceEvent.MainThreadSchedulerImpl.SetAllRenderWidgetsHidden |
    TraceEvent.MainThreadSchedulerImpl.UpdateForInputEventOnCompositorThread |
    TraceEvent.MainThreadSchedulerImpl.WillBeginFrame |
    TraceEvent.MajorGC |
    TraceEvent.Mark_test |
    TraceEvent.MarkAsMainFrame |
    TraceEvent.MarkDOMContent |
    TraceEvent.MarkLoad |
    TraceEvent.Measure_test |
    TraceEvent.Media.Mojom.InterfaceFactory |
    TraceEvent.Media.Mojom.MediaMetricsProvider |
    TraceEvent.Media.Mojom.MediaService |
    TraceEvent.Media.Mojom.RemoterFactory |
    TraceEvent.Media.Mojom.VideoDecoder |
    TraceEvent.MediaPlayerDelegateHostMsg_OnMutedStatusChanged |
    TraceEvent.Memory_instrumentation.Mojom.ClientProcess |
    TraceEvent.Memory_instrumentation.Mojom.Coordinator |
    TraceEvent.MemoryCache.Evict |
    TraceEvent.MemoryCache.Prune |
    TraceEvent.MemoryDumpManager.FinishAsyncProcessDump |
    TraceEvent.MemoryDumpManager.InvokeOnMemoryDump |
    TraceEvent.MemoryUsage |
    TraceEvent.MessageLoop.PostTask |
    TraceEvent.MessageLoop.RunTask |
    TraceEvent.MessagePipeReader.Receive |
    TraceEvent.MessagePipeReader.Send |
    TraceEvent.Metrics.Mojom.SingleSampleMetric |
    TraceEvent.Metrics.Mojom.SingleSampleMetricsProvider |
    TraceEvent.MinorGC |
    TraceEvent.ModelNeutralWriteTransaction |
    TraceEvent.MojoVideoDecoderService.Construct |
    TraceEvent.MojoVideoDecoderService.Decode |
    TraceEvent.MojoVideoDecoderService.GetSupportedConfigs |
    TraceEvent.MojoVideoDecoderService.Initialize |
    TraceEvent.MojoVideoDecoderService.OnDecoderOutput |
    TraceEvent.Moredamageexpectedsoon |
    TraceEvent.MouseEventManager.FakeMouseMoveEventTimerFired |
    TraceEvent.MouseEventManager.HandleMouseDraggedEvent |
    TraceEvent.MouseEventManager.HandleMousePressEvent |
    TraceEvent.Namespace.TextureOp.Tessnamespace.VertexSpecGrTextureProxy |
    TraceEvent.NavigationControllerImpl.LoadURLWithParams |
    TraceEvent.NavigationHandle |
    TraceEvent.NavigationRequest |
    TraceEvent.NavigationStart |
    TraceEvent.NavigationStartToCommit |
    TraceEvent.NavigationThrottle.WillProcessResponse |
    TraceEvent.NavigationThrottle.WillStartRequest |
    TraceEvent.NavigationtimeToResponseStarted |
    TraceEvent.NavigationTimingnavigationStart |
    TraceEvent.NavigatorImpl.Navigate |
    TraceEvent.NeedsBeginFrameChanged |
    TraceEvent.NeedsTickAnimations |
    TraceEvent.NETWORK_DELEGATE_BEFORE_START_TRANSACTION |
    TraceEvent.NETWORK_DELEGATE_BEFORE_URL_REQUEST |
    TraceEvent.NETWORK_DELEGATE_HEADERS_RECEIVED |
    TraceEvent.NETWORK_QUALITY_CHANGED |
    TraceEvent.Network.Mojom.CookieChangeListener |
    TraceEvent.Network.Mojom.CookieManager |
    TraceEvent.Network.Mojom.NetworkContext |
    TraceEvent.Network.Mojom.NetworkContextClient |
    TraceEvent.Network.Mojom.NetworkQualityEstimatorManagerClient |
    TraceEvent.Network.Mojom.NetworkServiceClient |
    TraceEvent.Network.Mojom.ProxyConfigPollerClient |
    TraceEvent.Network.Mojom.ProxyLookupClient |
    TraceEvent.Network.Mojom.ResolveHostClient |
    TraceEvent.Network.Mojom.TrustedHeaderClient |
    TraceEvent.Network.Mojom.TrustedURLLoaderHeaderClient |
    TraceEvent.Network.Mojom.URLLoader |
    TraceEvent.Network.Mojom.URLLoaderClient |
    TraceEvent.Network.Mojom.URLLoaderFactory |
    TraceEvent.NetworkDelegate.ForcePrivacyMode |
    TraceEvent.NetworkDelegate.NotifyBeforeStartTransation |
    TraceEvent.NetworkDelegate.NotifyBeforeURLRequest |
    TraceEvent.NetworkDelegate.NotifyCompleted |
    TraceEvent.NetworkDelegate.NotifyHeadersReceived |
    TraceEvent.NetworkDelegate.NotifyNetworkBytesReceived |
    TraceEvent.NetworkDelegate.NotifyStartTransaction |
    TraceEvent.NetworkDelegate.NotifyURLRequestDestroyed |
    TraceEvent.NetworkHintsMsg_DNSPrefetch |
    TraceEvent.NetworkQualityEstimator.NotifyHeadersReceived |
    TraceEvent.NetworkQualityEstimator.NotifyRequestCompleted |
    TraceEvent.Nodamageyet |
    TraceEvent.Node.UpdateDistribution |
    TraceEvent.NotStartingIdlePeriodBecauseDeadlineIsTooClose |
    TraceEvent.Num_cpus |
    TraceEvent.Obmark0c_search |
    TraceEvent.Obmark0odbMB_120 |
    TraceEvent.Obmark0odbTR_11 |
    TraceEvent.Obmark0renderMB_120 |
    TraceEvent.Obmark0renderTR_11 |
    TraceEvent.Obmark0start |
    TraceEvent.Obmark1c_foundMB_120 |
    TraceEvent.Obmark1c_foundTR_11 |
    TraceEvent.Obmark1odb_rMB_120 |
    TraceEvent.Obmark1odb_rTR_11 |
    TraceEvent.Obmark1renderedMB_120 |
    TraceEvent.Obmark1renderedTR_11 |
    TraceEvent.Obmeasurec_foundMB_120 |
    TraceEvent.Obmeasurec_foundTR_11 |
    TraceEvent.Obmeasureodb_rMB_120 |
    TraceEvent.Obmeasureodb_rTR_11 |
    TraceEvent.ObmeasureodbMB_120 |
    TraceEvent.ObmeasureodbTR_11 |
    TraceEvent.ObmeasurerenderedMB_120 |
    TraceEvent.ObmeasurerenderedTR_11 |
    TraceEvent.Onetapvideo.EmbedRequest |
    TraceEvent.Onetapvideo.PlayerReady |
    TraceEvent.OnIdleTaskPosted |
    TraceEvent.OnIdleTaskPostedOnMainThread |
    TraceEvent.OnLibevent |
    TraceEvent.OnLoad |
    TraceEvent.Optimizely.BlockBegin |
    TraceEvent.OptimizelyEnd |
    TraceEvent.OptimizelyStart |
    TraceEvent.OptimizelyTime |
    TraceEvent.OverlayProcessor.ProcessForOverlays |
    TraceEvent.PageAnimator.ServiceScriptedAnimations |
    TraceEvent.PageLoad |
    TraceEvent.PageLoadMetricsObserver.OnCommit |
    TraceEvent.PageLoadMetricsObserver.OnHidden |
    TraceEvent.PageLoadMetricsObserver.OnShown |
    TraceEvent.PageLoadMetricsObserver.OnStart |
    TraceEvent.PageLoadMetricsObserver.ShouldObserveMimeType |
    TraceEvent.PageMsg_SetHistoryOffsetAndLength |
    TraceEvent.PageMsg_UpdateScreenInfo |
    TraceEvent.PageMsg_UpdateWindowScreenRect |
    TraceEvent.PageMsg_WasHidden |
    TraceEvent.PageMsg_WasShown |
    TraceEvent.Paint |
    TraceEvent.PaintArtifact.AppendToWebDisplayItemList |
    TraceEvent.PaintArtifact.Replay |
    TraceEvent.PaintController.CommitNewDisplayItems |
    TraceEvent.PaintImage |
    TraceEvent.PaintInvalidationTracking |
    TraceEvent.PaintInvalidator.InvalidatePaint |
    TraceEvent.PaintLayer.UpdateLayerPositionsAfterLayout |
    TraceEvent.PaintLayerCompositor.UpdateIfNeededRecursive |
    TraceEvent.PaintNonDefaultBackgroundColor |
    TraceEvent.ParkableStringImpl.CompressInBackground |
    TraceEvent.ParkableStringImpl.Unpark |
    TraceEvent.ParseAuthorStyleSheet |
    TraceEvent.ParseHTML |
    TraceEvent.PartitionAlloc.TotalSizeOfCommittedPagesKB |
    TraceEvent.PendingScript.ExecuteScriptBlock |
    TraceEvent.PendingTree.Waiting |
    TraceEvent.PictureLayer.PushPropertiesTo |
    TraceEvent.PictureLayer.Update |
    TraceEvent.PictureLayerImpl.AppendQuadscheckerboard |
    TraceEvent.PlatformResourceSendRequest |
    TraceEvent.PostCommit |
    TraceEvent.PrerenderManagerFactory.GetForProfile |
    TraceEvent.PrintMsg_SetPrintingEnabled |
    TraceEvent.Process_labels |
    TraceEvent.Process_name |
    TraceEvent.Process_sort_index |
    TraceEvent.Process_uptime_seconds |
    TraceEvent.ProcessCommitResponse |
    TraceEvent.ProcessMemoryDump |
    TraceEvent.ProcessPriority |
    TraceEvent.ProcTask.OnLookupComplete |
    TraceEvent.Profile |
    TraceEvent.ProfileChunk |
    TraceEvent.ProfileManager.GetProfileInfoCache |
    TraceEvent.ProgramBindingBase.Init |
    TraceEvent.PropertyTreeBuilder.ShouldCreateRenderSurfaceopacity |
    TraceEvent.PROXY_RESOLUTION_SERVICE_RESOLVED_PROXY_LIST |
    TraceEvent.PROXY_RESOLUTION_SERVICE |
    TraceEvent.Proxy_resolver.Mojom.ProxyResolver |
    TraceEvent.Proxy_resolver.Mojom.ProxyResolverRequestClient |
    TraceEvent.ProxyImpl.BeginMainFrameAbortedOnImplThread |
    TraceEvent.ProxyImpl.DidActivateSyncTreeOnImplThread |
    TraceEvent.ProxyImpl.DidLoseLayerTreeFrameSinkOnImplThread |
    TraceEvent.ProxyImpl.DidReceiveCompositorFrameAckOnImplThread |
    TraceEvent.ProxyImpl.FinishGLOnImplThread |
    TraceEvent.ProxyImpl.InitializeLayerTreeFrameSinkOnImplThread |
    TraceEvent.ProxyImpl.NotifyReadyToActivate |
    TraceEvent.ProxyImpl.NotifyReadyToCommitOnImpl |
    TraceEvent.ProxyImpl.NotifyReadyToDraw |
    TraceEvent.ProxyImpl.OnCanDrawStateChanged |
    TraceEvent.ProxyImpl.ProxyImpl |
    TraceEvent.ProxyImpl.RequestBeginMainFrameNotExpected |
    TraceEvent.ProxyImpl.ScheduledActionActivateSyncTree |
    TraceEvent.ProxyImpl.ScheduledActionBeginLayerTreeFrameSinkCreation |
    TraceEvent.ProxyImpl.ScheduledActionCommit |
    TraceEvent.ProxyImpl.ScheduledActionDraw |
    TraceEvent.ProxyImpl.ScheduledActionPrepareTiles |
    TraceEvent.ProxyImpl.SetNeedsCommitOnImplThread |
    TraceEvent.ProxyImpl.SetNeedsRedrawOnImplThread |
    TraceEvent.ProxyImpl.SetVisibleOnImplThread |
    TraceEvent.ProxyMain.BeginMainFrame.Commit |
    TraceEvent.ProxyMain.BeginMainFrameNotExpectedSoon |
    TraceEvent.ProxyMain.DidInitializeLayerTreeFrameSink |
    TraceEvent.ProxyMain.ProxyMain |
    TraceEvent.ProxyMain.RequestNewLayerTreeFrameSink |
    TraceEvent.ProxyMain.SetDeferMainFrameUpdate |
    TraceEvent.ProxyMain.SetNeedsAnimate |
    TraceEvent.ProxyMain.SetNeedsCommit |
    TraceEvent.ProxyMain.SetNeedsUpdateLayers |
    TraceEvent.ProxyMain.SetVisible |
    TraceEvent.ProxyMain.Stop |
    TraceEvent.QUIC_CHROMIUM_CLIENT_STREAM_READ_RESPONSE_HEADERS |
    TraceEvent.QUIC_CHROMIUM_CLIENT_STREAM_SEND_REQUEST_HEADERS |
    TraceEvent.QUIC_CONNECTION_MIGRATION_MODE |
    TraceEvent.QUIC_SESSION_ACK_FRAME_SENT |
    TraceEvent.QUIC_SESSION_CERTIFICATE_VERIFIED |
    TraceEvent.QUIC_SESSION_CLOSED |
    TraceEvent.QUIC_SESSION_CRYPTO_HANDSHAKE_MESSAGE_RECEIVED |
    TraceEvent.QUIC_SESSION_CRYPTO_HANDSHAKE_MESSAGE_SENT |
    TraceEvent.QUIC_SESSION_PACKET_AUTHENTICATED |
    TraceEvent.QUIC_SESSION_PACKET_LOST |
    TraceEvent.QUIC_SESSION_PACKET_RECEIVED |
    TraceEvent.QUIC_SESSION_PACKET_SENT |
    TraceEvent.QUIC_SESSION_PING_FRAME_SENT |
    TraceEvent.QUIC_SESSION_RST_STREAM_FRAME_RECEIVED |
    TraceEvent.QUIC_SESSION_RST_STREAM_FRAME_SENT |
    TraceEvent.QUIC_SESSION_STREAM_FRAME_RECEIVED |
    TraceEvent.QUIC_SESSION_STREAM_FRAME_SENT |
    TraceEvent.QUIC_SESSION_UNAUTHENTICATED_PACKET_HEADER_RECEIVED |
    TraceEvent.QUIC_SESSION_VERSION_NEGOTIATED |
    TraceEvent.QUIC_SESSION |
    TraceEvent.QUIC_STREAM_FACTORY_JOB_BOUND_TO_HTTP_STREAM_JOB |
    TraceEvent.QUIC_STREAM_FACTORY_JOB_CONNECT |
    TraceEvent.QUIC_STREAM_FACTORY_JOB |
    TraceEvent.QuicStreamFactory.CreateSession |
    TraceEvent.QuicStreamFactory.Job.DoLoop |
    TraceEvent.Rappor.Mojom.RapporRecorder |
    TraceEvent.RasterizerTaskImpl.RunOnWorkerThread |
    TraceEvent.RasterSource.PerformSolidColorAnalysis |
    TraceEvent.RasterTask |
    TraceEvent.ReadTransaction |
    TraceEvent.RealTimeDomain.DelayTillNextTask |
    TraceEvent.RecordingSource.DetermineIfSolidColor |
    TraceEvent.RecordingSource.FinishDisplayItemListUpdate |
    TraceEvent.RedirectEnd |
    TraceEvent.RedirectStart |
    TraceEvent.RememberedSetUpdatingItem.Process |
    TraceEvent.RemoteWindowProxy.Initialize |
    TraceEvent.RendererAudioState |
    TraceEvent.RendererMain.START_MSG_LOOP |
    TraceEvent.RendererProcessType |
    TraceEvent.RendererScheduler.BackgroundBudgetMs |
    TraceEvent.RendererVisibility |
    TraceEvent.RenderFrame |
    TraceEvent.RenderFrameHostImpl.BeginNavigation |
    TraceEvent.RenderFrameHostImpl.CommitNavigation |
    TraceEvent.RenderFrameHostImpl.CreateRenderFrame |
    TraceEvent.RenderFrameHostImpl.DidCommitProvisionalLoad |
    TraceEvent.RenderFrameHostImpl.OnDidAddContentSecurityPolicies |
    TraceEvent.RenderFrameHostImpl.OnDidFailProvisionalLoadWithError |
    TraceEvent.RenderFrameHostImpl.OnDidStopLoading |
    TraceEvent.RenderFrameHostImpl.OnDispatchLoad |
    TraceEvent.RenderFrameHostImpl.SwapOut |
    TraceEvent.RenderFrameHostImplBeforeUnload |
    TraceEvent.RenderFrameHostManager.CommitPending |
    TraceEvent.RenderFrameHostManager.SwapOutOldFrame |
    TraceEvent.RenderFrameImpl.CreateChildFrame |
    TraceEvent.RenderFrameImpl.DidCommitProvisionalLoad |
    TraceEvent.RenderFrameImpl.DidFinishDocumentLoad |
    TraceEvent.RenderFrameImpl.DidFinishLoad |
    TraceEvent.RenderFrameImpl.DidStartLoading |
    TraceEvent.RenderFrameImpl.DidStartProvisionalLoad |
    TraceEvent.RenderFrameImpl.DidStopLoading |
    TraceEvent.RenderFrameImpl.Initialize |
    TraceEvent.RenderPass |
    TraceEvent.RenderProcessHostImpl.Send |
    TraceEvent.RenderProcessHostImpl.UpdateProcessPriority.SetProcessPriority |
    TraceEvent.RenderSurfaceImpl.AppendQuads |
    TraceEvent.RenderTextHarfBuzz.ItemizeTextToRuns |
    TraceEvent.RenderTextHarfBuzz.ShapeRuns |
    TraceEvent.RenderTextHarfBuzz.ShapeRunWithFontInternal |
    TraceEvent.RenderThreadImpl.EstablishGpuChannelSync |
    TraceEvent.RenderViewHostImpl.CreateRenderView |
    TraceEvent.RenderViewHostImpl.GetWebkitPrefs |
    TraceEvent.RenderWidget.DidCommitAndDrawCompositorFrame |
    TraceEvent.RenderWidget.InitializeLayerTreeView |
    TraceEvent.RenderWidget.OnSynchronizeVisualProperties |
    TraceEvent.RenderWidget.OnWasHidden |
    TraceEvent.RenderWidget.OnWasShown |
    TraceEvent.RenderWidget.UpdateSelectionBounds |
    TraceEvent.RenderWidget.UpdateTextInputState |
    TraceEvent.RenderWidget.WillBeginCompositorFrame |
    TraceEvent.RenderWidgetHostImpl.DidUpdateVisualProperties |
    TraceEvent.RenderWidgetHostImpl.ForwardKeyboardEvent |
    TraceEvent.RenderWidgetHostImpl.ForwardMouseEvent |
    TraceEvent.RenderWidgetHostImpl.GetScreenInfo |
    TraceEvent.RenderWidgetHostImpl.WasHidden |
    TraceEvent.RenderWidgetHostImpl.WasShown |
    TraceEvent.RenderWidgetHostViewCocoa.KeyEvent |
    TraceEvent.RenderWidgetHostViewCocoa.MouseEvent |
    TraceEvent.RenderWidgetHostViewCocoa.SendViewBoundsInWindowToClient |
    TraceEvent.RenderWidgetHostViewCocoa.SendWindowFrameInScreenToClient |
    TraceEvent.RenderWidgetInputHandler.OnHandleInputEvent |
    TraceEvent.RenderWorker0x7f8e1500b000 |
    TraceEvent.RenderWorker0x7fa57a039c00 |
    TraceEvent.RenderWorker0x7fcab207b200 |
    TraceEvent.RenderWorker0x7fd50f00aa00 |
    TraceEvent.RenderWorker0x7fdabc07b400 |
    TraceEvent.RenderWorker0x7fdefa843000 |
    TraceEvent.RenderWorker0x7fe5c4821c00 |
    TraceEvent.REQUEST_ALIVE |
    TraceEvent.RequestAnimationFrame |
    TraceEvent.RequestIdleCallback |
    TraceEvent.RequestMainThreadFrame |
    TraceEvent.RequestStart |
    TraceEvent.Resource_coordinator.Mojom.CoordinationUnitProvider |
    TraceEvent.Resource_coordinator.Mojom.FrameCoordinationUnit |
    TraceEvent.Resource_coordinator.Mojom.PageCoordinationUnit |
    TraceEvent.Resource_coordinator.Mojom.PageSignalReceiver |
    TraceEvent.Resource_coordinator.Mojom.ProcessCoordinationUnit |
    TraceEvent.Resource.AppendData |
    TraceEvent.ResourceChangePriority |
    TraceEvent.ResourceDispatcher.OnReceivedRedirect |
    TraceEvent.ResourceDispatcher.OnReceivedResponse |
    TraceEvent.ResourceDispatcher.OnRequestComplete |
    TraceEvent.ResourceFetcher.DetermineRevalidationPolicy |
    TraceEvent.ResourceFetcher.RequestResource |
    TraceEvent.ResourceFinish |
    TraceEvent.ResourceLoad |
    TraceEvent.ResourceLoadPriorityOptimizer.UpdateAllImageResourcePriorities |
    TraceEvent.ResourcePrefetchPredictor.StartInitialization |
    TraceEvent.ResourcePrioritySet |
    TraceEvent.ResourceReceivedData |
    TraceEvent.ResourceReceiveResponse |
    TraceEvent.ResourceSendRequest |
    TraceEvent.ResponseEnd |
    TraceEvent.RootScrollerController.PerformRootScrollerSelection |
    TraceEvent.RuleSet.AddRulesFromSheet |
    TraceEvent.RunMicrotasks |
    TraceEvent.RunTask |
    TraceEvent.RunWithFaviconResults |
    TraceEvent.Safe_browsing.Mojom.PhishingDetector |
    TraceEvent.Safe_browsing.Mojom.PhishingModelSetter |
    TraceEvent.Safe_browsing.Mojom.SafeBrowsing |
    TraceEvent.Safe_browsing.Mojom.SafeBrowsingUrlChecker |
    TraceEvent.ScheduledAction.Execute |
    TraceEvent.ScheduledTasks |
    TraceEvent.Scheduler.AwaitingTouchstartResponse |
    TraceEvent.Scheduler.BeginFrame |
    TraceEvent.Scheduler.BeginFrameDropped |
    TraceEvent.Scheduler.BeginFrameNotExpectedSoon |
    TraceEvent.Scheduler.BeginImplFrame |
    TraceEvent.Scheduler.BeginMainFrameAborted |
    TraceEvent.Scheduler.BeginMainFrameOnCriticalPath |
    TraceEvent.Scheduler.BlockingInputExpectedSoon |
    TraceEvent.Scheduler.CompositorWillSendMainFrameNotExpected |
    TraceEvent.Scheduler.DefaultGesturePrevented |
    TraceEvent.Scheduler.DidCreateAndInitializeLayerTreeFrameSink |
    TraceEvent.Scheduler.DidLoseLayerTreeFrameSink |
    TraceEvent.Scheduler.HasNavigated |
    TraceEvent.Scheduler.HasReportedBlockingInterventionInCurrentPolicy |
    TraceEvent.Scheduler.HasReportedBlockingInterventionSinceNavigation |
    TraceEvent.Scheduler.HasSeenBeginMainFrame |
    TraceEvent.Scheduler.HasVisibleRenderWidgetWithTouchHandler |
    TraceEvent.Scheduler.HaveSeenBlockingGesture |
    TraceEvent.Scheduler.HaveSeenInputSinceNavigation |
    TraceEvent.Scheduler.Hidden |
    TraceEvent.Scheduler.InIdlePeriod |
    TraceEvent.Scheduler.KeepRendererActive |
    TraceEvent.Scheduler.LastGestureWasCompositorDriven |
    TraceEvent.Scheduler.LongestJankFreeTaskDuration |
    TraceEvent.Scheduler.MainThreadTask |
    TraceEvent.Scheduler.MissedBeginFrameDropped |
    TraceEvent.Scheduler.NotifyBeginMainFrameStarted |
    TraceEvent.Scheduler.NotifyReadyToCommit |
    TraceEvent.Scheduler.Now |
    TraceEvent.Scheduler.OnBeginImplFrameDeadline |
    TraceEvent.Scheduler.PauseCount |
    TraceEvent.Scheduler.PauseTimersForWebview |
    TraceEvent.Scheduler.Pending_submit_frames |
    TraceEvent.Scheduler.RAILMode |
    TraceEvent.Scheduler.RunNextTask |
    TraceEvent.Scheduler.Running |
    TraceEvent.Scheduler.ScheduleBeginImplFrameDeadline |
    TraceEvent.Scheduler.Scheduler |
    TraceEvent.Scheduler.Sequence.RemoveWaitingPriority |
    TraceEvent.Scheduler.Sequence.UpdateSchedulingPriority |
    TraceEvent.Scheduler.SetDeferMainFrameUpdate |
    TraceEvent.Scheduler.SkipNextBeginMainFrameToReduceLatency |
    TraceEvent.Scheduler.TaskPriority |
    TraceEvent.Scheduler.UseCase |
    TraceEvent.Scheduler.UseVirtualTime |
    TraceEvent.Scheduler.WaitingForMeaningfulPaint |
    TraceEvent.SchedulerStateMachine.SetNeedsPrepareTiles |
    TraceEvent.SchedulerWorkerThreadactive |
    TraceEvent.SchedulerWorkerThreadborn |
    TraceEvent.SchedulerWorkerThreaddead |
    TraceEvent.ScheduleStyleInvalidationTracking |
    TraceEvent.ScheduleStyleRecalculation |
    TraceEvent.ScopedBlockingCall |
    TraceEvent.ScopedBlockingCallWithBaseSyncPrimitives |
    TraceEvent.Screenshot |
    TraceEvent.ScriptRunner.ExecuteAsyncTask |
    TraceEvent.ScrollAnchor.FindAnchor |
    TraceEvent.ScrollingCoordinator.UpdateAfterPaint |
    TraceEvent.ScrollingCoordinator.UpdateTouchEventTargetRectsIfNeeded |
    TraceEvent.SearchProvider.OnURLLoadComplete |
    TraceEvent.SearchProvider.Question_mark |
    TraceEvent.SearchProvider.Start |
    TraceEvent.SelectionController.HandleMousePressEvent |
    TraceEvent.SelectionController.HandleMousePressEventSingleClick |
    TraceEvent.SelectionController.HandleMouseReleaseEvent |
    TraceEvent.SequenceEnabled |
    TraceEvent.SequenceManager.DidProcessTaskObservers |
    TraceEvent.SequenceManager.DidProcessTaskTimeObservers |
    TraceEvent.SequenceManager.PostTask |
    TraceEvent.SequenceManager.QueueNotifyDidProcessTask |
    TraceEvent.SequenceManager.QueueNotifyWillProcessTask |
    TraceEvent.SequenceManager.QueueOnTaskCompleted |
    TraceEvent.SequenceManager.QueueOnTaskStarted |
    TraceEvent.SequenceManager.RunTask |
    TraceEvent.SequenceManager.WillProcessTaskObservers |
    TraceEvent.SequenceManager.WillProcessTaskTimeObservers |
    TraceEvent.SequenceManagerImpl.NotifyDidProcessTaskObservers |
    TraceEvent.SequenceManagerImpl.NotifyWillProcessTaskObservers |
    TraceEvent.SequenceManagerImpl.RunTask |
    TraceEvent.SequenceManagerImpl.TakeTask |
    TraceEvent.SequenceManagerImpl.UnregisterTaskQueue |
    TraceEvent.SequenceManagerImpl.WakeUpReadyDelayedQueues |
    TraceEvent.SerializedScriptValueFactory.Create |
    TraceEvent.SerializedScriptValueFactory.Deserialize |
    TraceEvent.Service_manager.Mojom.Connector |
    TraceEvent.Service_manager.Mojom.InterfaceProvider |
    TraceEvent.Service_manager.Mojom.PIDReceiver |
    TraceEvent.Service_manager.Mojom.Service |
    TraceEvent.Service_manager.Mojom.ServiceFactory |
    TraceEvent.Service_manager.Mojom.ServiceManagerListener |
    TraceEvent.ServiceManager.Connect |
    TraceEvent.ServiceWorkerControlleeRequestHandler.PrepareForMainResource |
    TraceEvent.ServiceWorkerDispatcherHost.OnProviderCreated |
    TraceEvent.ServiceWorkerNavigationLoader.FallbackToNetwork |
    TraceEvent.ServiceWorkerNavigationLoader.ServiceWorkerNavigationloader |
    TraceEvent.ServiceWorkerProviderHost.RemoveProviderHost |
    TraceEvent.ServiceWorkerStorage.FindRegistrationForDocument.CheckInstalling |
    TraceEvent.SetIdlePeriodState |
    TraceEvent.SetLayerTreeId |
    TraceEvent.SharedImageStub.OnCreateSharedImage |
    TraceEvent.SharedImageStub.OnCreateSharedImageWithData |
    TraceEvent.SharedImageStub.OnDestroySharedImage |
    TraceEvent.SharedImageStub.OnRegisterSharedImageUploadBuffer |
    TraceEvent.ShCompile |
    TraceEvent.ShortcutsProvider.Start |
    TraceEvent.SIGNED_CERTIFICATE_TIMESTAMPS_CHECKED |
    TraceEvent.SIGNED_CERTIFICATE_TIMESTAMPS_RECEIVED |
    TraceEvent.SIMPLE_CACHE_ENTRY_CLOSE_BEGIN |
    TraceEvent.SIMPLE_CACHE_ENTRY_CLOSE_CALL |
    TraceEvent.SIMPLE_CACHE_ENTRY_CLOSE_END |
    TraceEvent.SIMPLE_CACHE_ENTRY_CREATE_BEGIN |
    TraceEvent.SIMPLE_CACHE_ENTRY_CREATE_CALL |
    TraceEvent.SIMPLE_CACHE_ENTRY_CREATE_END |
    TraceEvent.SIMPLE_CACHE_ENTRY_CREATE_OPTIMISTIC |
    TraceEvent.SIMPLE_CACHE_ENTRY_DOOM_BEGIN |
    TraceEvent.SIMPLE_CACHE_ENTRY_DOOM_CALL |
    TraceEvent.SIMPLE_CACHE_ENTRY_DOOM_END |
    TraceEvent.SIMPLE_CACHE_ENTRY_OPEN_BEGIN |
    TraceEvent.SIMPLE_CACHE_ENTRY_OPEN_CALL |
    TraceEvent.SIMPLE_CACHE_ENTRY_OPEN_END |
    TraceEvent.SIMPLE_CACHE_ENTRY_READ_BEGIN |
    TraceEvent.SIMPLE_CACHE_ENTRY_READ_CALL |
    TraceEvent.SIMPLE_CACHE_ENTRY_READ_END |
    TraceEvent.SIMPLE_CACHE_ENTRY_SET_KEY |
    TraceEvent.SIMPLE_CACHE_ENTRY_WRITE_BEGIN |
    TraceEvent.SIMPLE_CACHE_ENTRY_WRITE_CALL |
    TraceEvent.SIMPLE_CACHE_ENTRY_WRITE_END |
    TraceEvent.SIMPLE_CACHE_ENTRY_WRITE_OPTIMISTIC |
    TraceEvent.SIMPLE_CACHE_ENTRY |
    TraceEvent.SingleThreadIdleTaskRunner.RunTask |
    TraceEvent.SingleThreadProxy.DidReceiveCompositorFrameAckOnImplThread |
    TraceEvent.SingleThreadProxy.DoCommit |
    TraceEvent.SingleThreadProxy.DoComposite |
    TraceEvent.SingleThreadProxy.NotifyReadyToActivate |
    TraceEvent.SingleThreadProxy.NotifyReadyToDraw |
    TraceEvent.SingleThreadProxy.OnCanDrawStateChanged |
    TraceEvent.SingleThreadProxy.PostAnimationEventsToMainThreadOnImplThread |
    TraceEvent.SingleThreadProxy.ScheduledActionPrepareTiles |
    TraceEvent.SingleThreadProxy.ScheduledActionSendBeginMainFrame |
    TraceEvent.SingleThreadProxy.SetDeferMainFrameUpdate |
    TraceEvent.SingleThreadProxy.SetNeedsAnimate |
    TraceEvent.SingleThreadProxy.SetNeedsOneBeginImplFrameOnImplThread |
    TraceEvent.SingleThreadProxy.SetNeedsPrepareTilesOnImplThread |
    TraceEvent.SingleThreadProxy.SetNeedsUpdateLayers |
    TraceEvent.SingleThreadProxy.SetVisible |
    TraceEvent.SingleThreadProxy.SingleThreadProxy |
    TraceEvent.SingleThreadTaskGraphRunner.CollectCompletedTasks |
    TraceEvent.SingleThreadTaskGraphRunner.RunTaskWithLockAcquired |
    TraceEvent.SingleThreadTaskGraphRunner.ScheduleTasks |
    TraceEvent.SingleThreadTaskGraphRunner.WaitForTasksToFinishRunning |
    TraceEvent.SiteInstanceImpl.GetProcess |
    TraceEvent.SiteInstanceImpl.LockToOrigin |
    TraceEvent.SiteInstanceImpl.SetSite |
    TraceEvent.SkCanvas.DrawImageRectSkImageSkRectSkRectSkPaintSkCanvas.SrcRectConstraint |
    TraceEvent.SkCanvas.DrawImageSkImageSkScalarSkScalarSkPaint |
    TraceEvent.SkCanvas.DrawOvalSkRectSkPaint |
    TraceEvent.SkCanvas.DrawPaintSkPaint |
    TraceEvent.SkCanvas.DrawPathSkPathSkPaint |
    TraceEvent.SkCanvas.DrawPointsSkCanvas.PointModesize_tSkPointSkPaint |
    TraceEvent.SkCanvas.DrawRectSkRectSkPaint |
    TraceEvent.SkCanvas.DrawRRectSkRRectSkPaint |
    TraceEvent.SkCanvas.DrawTextBlobSkTextBlobSkScalarSkScalarSkPaint |
    TraceEvent.SkCanvas.InternalSaveLayerSkCanvas.SaveLayerRecSkCanvas.SaveLayerStrategy |
    TraceEvent.SkCanvas.SaveLayerSkCanvas.SaveLayerRec |
    TraceEvent.SkGpuDevice.ClearAll |
    TraceEvent.SkGpuDevice.DrawDevice |
    TraceEvent.SkGpuDevice.DrawGlyphRunList |
    TraceEvent.SkGpuDevice.DrawOval |
    TraceEvent.SkGpuDevice.DrawPaint |
    TraceEvent.SkGpuDevice.DrawPath |
    TraceEvent.SkGpuDevice.DrawPoints |
    TraceEvent.SkGpuDevice.DrawRect |
    TraceEvent.SkGpuDevice.DrawRRect |
    TraceEvent.SkGpuDevice.DrawSpecial |
    TraceEvent.SkGpuDevice.DrawStrokedLine |
    TraceEvent.Skia_gpu.GLShader |
    TraceEvent.Skiabudget |
    TraceEvent.SkipBeginImplFrameToReduceLatency |
    TraceEvent.SkipBeginMainFrameToReduceLatency |
    TraceEvent.SmallPathOp |
    TraceEvent.SOCKET_ALIVE |
    TraceEvent.SOCKET_BYTES_RECEIVED |
    TraceEvent.SOCKET_BYTES_SENT |
    TraceEvent.SOCKET_IN_USE |
    TraceEvent.SOCKET_POOL_BOUND_TO_CONNECT_JOB |
    TraceEvent.SOCKET_POOL_BOUND_TO_SOCKET |
    TraceEvent.SOCKET_POOL_CONNECT_JOB_CONNECT |
    TraceEvent.SOCKET_POOL_CONNECT_JOB |
    TraceEvent.SOCKET_POOL_REUSED_AN_EXISTING_SOCKET |
    TraceEvent.SOCKET_POOL |
    TraceEvent.SocketPosix.OnFileCanReadWithoutBlocking |
    TraceEvent.SoftwareImageDecodeCache.DecodeImageIfNecessary |
    TraceEvent.SoftwareImageDecodeCache.DrawWithImageFinished |
    TraceEvent.SoftwareImageDecodeCache.GetDecodedImageForDrawInternal |
    TraceEvent.SoftwareImageDecodeCache.ReduceCacheUsageUntilWithinLimit |
    TraceEvent.SoftwareImageDecodeCache.UnrefImage |
    TraceEvent.SolidColorAnalyzer.CheckIfRRectClipCoversCanvas |
    TraceEvent.SolidColorAnalyzer.CheckIfSolidShape |
    TraceEvent.SpdySessionPool.CreateAvailableSessionFromSocket |
    TraceEvent.SpeedIndex |
    TraceEvent.Spellcheck.Mojom.SpellChecker |
    TraceEvent.Spellcheck.Mojom.SpellCheckHost |
    TraceEvent.SSL_CONNECT |
    TraceEvent.SSL_HANDSHAKE_MESSAGE_RECEIVED |
    TraceEvent.SSL_HANDSHAKE_MESSAGE_SENT |
    TraceEvent.SSL_SOCKET_BYTES_RECEIVED |
    TraceEvent.SSL_SOCKET_BYTES_SENT |
    TraceEvent.SSLClientSocketImpl.DoHandshakeLoop |
    TraceEvent.SSLConnectJob.DoLoop |
    TraceEvent.SSLConnectJob.DoSSLConnect |
    TraceEvent.StackCpuSampling |
    TraceEvent.StackSamplingProfiler.StackSamplingProfiler |
    TraceEvent.StackSamplingProfiler.Start |
    TraceEvent.StackSamplingProfiler.Started |
    TraceEvent.StartIdlePeriod |
    TraceEvent.Startup_metric_utils.Mojom.StartupMetricHost |
    TraceEvent.StructTraits.CompositorFrame.Read |
    TraceEvent.StructTraits.RenderPass.Read |
    TraceEvent.StructTraits.TransferableResource.Read |
    TraceEvent.StyleElement.ProcessStyleSheet |
    TraceEvent.StyleEngine.ClearResolver |
    TraceEvent.StyleEngine.ScheduleInvalidationsForRuleSets |
    TraceEvent.StyleEngine.UpdateActiveStyleSheets |
    TraceEvent.StyleRecalcInvalidationTracking |
    TraceEvent.SubImage |
    TraceEvent.SubmitCompositorFrame.TimeElapsed |
    TraceEvent.Submitrejectedtoevictedsurface |
    TraceEvent.SubresourceFilterMsg_SetRulesetForProcess |
    TraceEvent.SubresourceFilterSafeBrowsingActivationThrottle.DoesMainFrameURLSatisfyActivationConditions |
    TraceEvent.SubresourceFilterSafeBrowsingActivationThrottle.GetHighestPriorityConfiguration |
    TraceEvent.SubresourceFilterSafeBrowsingActivationThrottle.NotifyResult |
    TraceEvent.SubresourceFilterSBCheck |
    TraceEvent.Subthread_default_tq |
    TraceEvent.Surface.ActivateFrame |
    TraceEvent.Surface.OnDeadline |
    TraceEvent.SurfaceLayer.PushPropertiesTo |
    TraceEvent.SurfaceManager.GarbageCollectSurfaces |
    TraceEvent.SwapBuffers |
    TraceEvent.Swapskipped |
    TraceEvent.Swapthrottled |
    TraceEvent.SyncChannel.Send |
    TraceEvent.SyncChannel.SyncContext.TryToUnblockListener |
    TraceEvent.TabManager.LoadNextBackgroundTabIfNeeded |
    TraceEvent.TabSwitching.Latency |
    TraceEvent.TabSwitchVisibilityRequest |
    TraceEvent.TaskGraphRunner.RunTask |
    TraceEvent.TaskQueueManager.ProcessTaskFromWorkQueue |
    TraceEvent.TaskQueueThrottler_TaskQueueThrottled |
    TraceEvent.TaskQueueThrottler_TaskQueueUnthrottled |
    TraceEvent.TaskQueueThrottler.MaybeSchedulePumpThrottledTasks |
    TraceEvent.TaskQueueThrottler.OnQueueNextWakeUpChanged |
    TraceEvent.TaskQueueThrottler.PumpThrottledTasks |
    TraceEvent.TaskSchedulerPostTask |
    TraceEvent.TaskSchedulerRunTask |
    TraceEvent.TaskSetFinishedTaskImpl.RunOnWorkerThread |
    TraceEvent.TaskTracker.RunTask |
    TraceEvent.TCP_CLIENT_SOCKET_POOL_REQUESTED_SOCKET |
    TraceEvent.TCP_CONNECT_ATTEMPT |
    TraceEvent.TCP_CONNECT |
    TraceEvent.TessellatingPathOp |
    TraceEvent.Textfield.PaintTextAndCursor |
    TraceEvent.TextureManager.ValidateAndDoTexSubImage |
    TraceEvent.TextureOp |
    TraceEvent.Thread_name |
    TraceEvent.Thread_sort_index |
    TraceEvent.ThreadControllerImpl.DoWork |
    TraceEvent.ThreadControllerImpl.RunTask |
    TraceEvent.ThreadControllerImpl.ScheduleWork.PostTask |
    TraceEvent.ThreadProxy.BeginMainFrame |
    TraceEvent.ThreadProxy.ScheduledActionSendBeginMainFrame |
    TraceEvent.ThreadState.HeapEstimatedSizeKB |
    TraceEvent.ThreadState.HeapGrowingRate |
    TraceEvent.ThreadState.PartitionAllocEstimatedSizeKB |
    TraceEvent.ThreadState.PartitionAllocGrowingRate |
    TraceEvent.ThreadState.PerformIdleLazySweep |
    TraceEvent.TileManager.AssignGpuMemorytileviolatesmemorypolicy |
    TraceEvent.TileManager.AssignGpuMemoryToTiles |
    TraceEvent.TileManager.CheckForCompletedTasks |
    TraceEvent.TileManager.CheckForCompletedTasksFinished |
    TraceEvent.TileManager.CheckPendingGpuWorkAndIssueSignals |
    TraceEvent.TileManager.CreateRasterTask |
    TraceEvent.TileManager.DidFinishRunningAllTileTasks |
    TraceEvent.TileManager.DidFinishRunningTileTasksRequiredForActivation |
    TraceEvent.TileManager.DidFinishRunningTileTasksRequiredForDraw |
    TraceEvent.TileManager.FlushAndIssueSignals |
    TraceEvent.TileManager.IsReadyToActivate |
    TraceEvent.TileManager.IsReadyToDraw |
    TraceEvent.TileManager.IssueSignalsalltiletaskscompleted |
    TraceEvent.TileManager.IssueSignalsreadytoactivate |
    TraceEvent.TileManager.IssueSignalsreadytodraw |
    TraceEvent.TileManager.PrepareTiles |
    TraceEvent.TileManager.ScheduleTasks |
    TraceEvent.TileTaskManagerImpl.CheckForCompletedTasks |
    TraceEvent.TileTaskManagerImpl.ScheduleTasks |
    TraceEvent.TileTaskManagerImpl.Shutdown |
    TraceEvent.TimeoutMonitor.Restart |
    TraceEvent.TimeoutMonitor.Start |
    TraceEvent.TimeoutMonitor.Stop |
    TraceEvent.TimeoutMonitor.TimeOutHandler |
    TraceEvent.TimerBase.Run |
    TraceEvent.TimerFire |
    TraceEvent.TimerInstall |
    TraceEvent.TimerRemove |
    TraceEvent.TimeStamp |
    TraceEvent.TimeToDomReady |
    TraceEvent.TimeToInteractive |
    TraceEvent.TimeToZonesAndDomReady |
    TraceEvent.TimeToZonesComplete |
    TraceEvent.TopLevel |
    TraceEvent.ToSpaceUpdatingItem.ProcessVisitAll |
    TraceEvent.Trace_buffer_overflowed |
    TraceEvent.Tracing.Mojom.Agent |
    TraceEvent.Tracing.Mojom.AgentRegistry |
    TraceEvent.Tracing.Mojom.Coordinator |
    TraceEvent.Tracing.Mojom.PerfettoService |
    TraceEvent.Tracing.Mojom.ProducerHost |
    TraceEvent.TracingHostMsg_ChildSupportsTracing |
    TraceEvent.TracingMsg_SetTracingProcessId |
    TraceEvent.TracingSessionIdForWorker |
    TraceEvent.TracingStartedInBrowser |
    TraceEvent.TracingStartedInPage |
    TraceEvent.TransferBuffer.Free |
    TraceEvent.TransfersBytesPendingOnDisk |
    TraceEvent.TransfersPendingOnDisk |
    TraceEvent.Translate.Mojom.ContentTranslateDriver |
    TraceEvent.TransportConnectJob.DoResolveHostComplete |
    TraceEvent.TreeSynchronizer.PushLayerPropertiesTo.Impl |
    TraceEvent.TreeSynchronizer.PushLayerPropertiesTo.Main |
    TraceEvent.TreeSynchronizer.SynchronizeTrees |
    TraceEvent.TrianglesDrawn |
    TraceEvent.UDP_BYTES_RECEIVED |
    TraceEvent.UDP_BYTES_SENT |
    TraceEvent.UDP_CONNECT |
    TraceEvent.UDP_LOCAL_ADDRESS |
    TraceEvent.UDPSocketPosix.ReadWatcher.OnFileCanReadWithoutBlocking |
    TraceEvent.Ukm.Mojom.UkmRecorderInterface |
    TraceEvent.Unknowninterface |
    TraceEvent.UnloadEventEnd |
    TraceEvent.UnloadEventStart |
    TraceEvent.UpdateCounters |
    TraceEvent.UpdateLayer |
    TraceEvent.UpdateLayerTree |
    TraceEvent.UpdateLayoutTree |
    TraceEvent.UpdateLongIdlePeriodStateAfterIdleTask |
    TraceEvent.UpdateStateFromAnimationDrivers |
    TraceEvent.UPLOAD_DATA_STREAM_INIT |
    TraceEvent.UPLOAD_DATA_STREAM_READ |
    TraceEvent.URL_REQUEST_DELEGATE_RECEIVED_REDIRECT |
    TraceEvent.URL_REQUEST_DELEGATE_RESPONSE_STARTED |
    TraceEvent.URL_REQUEST_FAKE_RESPONSE_HEADERS_CREATED |
    TraceEvent.URL_REQUEST_FILTERS_SET |
    TraceEvent.URL_REQUEST_JOB_BYTES_READ |
    TraceEvent.URL_REQUEST_JOB_FILTERED_BYTES_READ |
    TraceEvent.URL_REQUEST_REDIRECT_JOB |
    TraceEvent.URL_REQUEST_REDIRECTED |
    TraceEvent.URL_REQUEST_START_JOB |
    TraceEvent.UrlPatternIndexMatcher.FindMatch |
    TraceEvent.URLRequestHttpJob.OnReadCompleted |
    TraceEvent.URLRequestHttpJob.OnStartCompleted |
    TraceEvent.UserEvent |
    TraceEvent.Usingexistingdeadline |
    TraceEvent.Usingnewdeadline |
    TraceEvent.V8_tq |
    TraceEvent.V8.Builtin_ArrayConcat |
    TraceEvent.V8.Builtin_ArrayPop |
    TraceEvent.V8.Builtin_ArrayPush |
    TraceEvent.V8.Builtin_ArrayShift |
    TraceEvent.V8.Builtin_ArrayUnshift |
    TraceEvent.V8.Builtin_BooleanConstructor |
    TraceEvent.V8.Builtin_ConsoleLog |
    TraceEvent.V8.Builtin_ConsoleWarn |
    TraceEvent.V8.Builtin_DateConstructor |
    TraceEvent.V8.Builtin_DateNow |
    TraceEvent.V8.Builtin_DatePrototypeSetTime |
    TraceEvent.V8.Builtin_DatePrototypeToUTCString |
    TraceEvent.V8.Builtin_ErrorConstructor |
    TraceEvent.V8.Builtin_FunctionConstructor |
    TraceEvent.V8.Builtin_FunctionPrototypeBind |
    TraceEvent.V8.Builtin_FunctionPrototypeToString |
    TraceEvent.V8.Builtin_GlobalDecodeURI |
    TraceEvent.V8.Builtin_GlobalDecodeURIComponent |
    TraceEvent.V8.Builtin_GlobalEncodeURIComponent |
    TraceEvent.V8.Builtin_GlobalEval |
    TraceEvent.V8.Builtin_HandleApiCall |
    TraceEvent.V8.Builtin_JsonParse |
    TraceEvent.V8.Builtin_JsonStringify |
    TraceEvent.V8.Builtin_MapPrototypeClear |
    TraceEvent.V8.Builtin_NumberPrototypeToFixed |
    TraceEvent.V8.Builtin_NumberPrototypeToString |
    TraceEvent.V8.Builtin_ObjectDefineGetter |
    TraceEvent.V8.Builtin_ObjectDefineProperties |
    TraceEvent.V8.Builtin_ObjectDefineProperty |
    TraceEvent.V8.Builtin_ObjectFreeze |
    TraceEvent.V8.Builtin_ObjectGetPrototypeOf |
    TraceEvent.V8.Builtin_ObjectLookupGetter |
    TraceEvent.V8.Builtin_ObjectPrototypeGetProto |
    TraceEvent.V8.Builtin_ObjectPrototypePropertyIsEnumerable |
    TraceEvent.V8.Builtin_ObjectPrototypeSetProto |
    TraceEvent.V8.Builtin_ObjectSetPrototypeOf |
    TraceEvent.V8.Builtin_RegExpPrototypeToString |
    TraceEvent.V8.Builtin_SetPrototypeClear |
    TraceEvent.V8.Builtin_StringPrototypeEndsWith |
    TraceEvent.V8.Builtin_StringPrototypeLastIndexOf |
    TraceEvent.V8.Builtin_StringPrototypeStartsWith |
    TraceEvent.V8.Builtin_StringPrototypeToUpperCaseIntl |
    TraceEvent.V8.CallFunction |
    TraceEvent.V8.Compile |
    TraceEvent.V8.CompileCode |
    TraceEvent.V8.CompileCodeBackground |
    TraceEvent.V8.CompileEval |
    TraceEvent.V8.CompileIgnition |
    TraceEvent.V8.CompileIgnitionFinalization |
    TraceEvent.V8.CompileScript |
    TraceEvent.V8.CompileStreamedScript |
    TraceEvent.V8.DeoptimizeCode |
    TraceEvent.V8.ExternalCallback |
    TraceEvent.V8.GC_BACKGROUND_ARRAY_BUFFER_FREE |
    TraceEvent.V8.GC_BACKGROUND_STORE_BUFFER |
    TraceEvent.V8.GC_BACKGROUND_UNMAPPER |
    TraceEvent.V8.GC_HEAP_EMBEDDER_TRACING_EPILOGUE |
    TraceEvent.V8.GC_HEAP_EPILOGUE_REDUCE_NEW_SPACE |
    TraceEvent.V8.GC_HEAP_EPILOGUE |
    TraceEvent.V8.GC_HEAP_EXTERNAL_EPILOGUE |
    TraceEvent.V8.GC_HEAP_EXTERNAL_PROLOGUE |
    TraceEvent.V8.GC_HEAP_EXTERNAL_WEAK_GLOBAL_HANDLES |
    TraceEvent.V8.GC_HEAP_PROLOGUE |
    TraceEvent.V8.GC_MC_BACKGROUND_EVACUATE_COPY |
    TraceEvent.V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS |
    TraceEvent.V8.GC_MC_BACKGROUND_MARKING |
    TraceEvent.V8.GC_MC_BACKGROUND_SWEEPING |
    TraceEvent.V8.GC_MC_CLEAR_FLUSHABLE_BYTECODE |
    TraceEvent.V8.GC_MC_CLEAR_FLUSHED_JS_FUNCTIONS |
    TraceEvent.V8.GC_MC_CLEAR_MAPS |
    TraceEvent.V8.GC_MC_CLEAR_STRING_TABLE |
    TraceEvent.V8.GC_MC_CLEAR_WEAK_COLLECTIONS |
    TraceEvent.V8.GC_MC_CLEAR_WEAK_LISTS |
    TraceEvent.V8.GC_MC_CLEAR_WEAK_REFERENCES |
    TraceEvent.V8.GC_MC_CLEAR |
    TraceEvent.V8.GC_MC_EPILOGUE |
    TraceEvent.V8.GC_MC_EVACUATE_CLEAN_UP |
    TraceEvent.V8.GC_MC_EVACUATE_COPY |
    TraceEvent.V8.GC_MC_EVACUATE_EPILOGUE |
    TraceEvent.V8.GC_MC_EVACUATE_PROLOGUE |
    TraceEvent.V8.GC_MC_EVACUATE_REBALANCE |
    TraceEvent.V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN |
    TraceEvent.V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAP_SPACE |
    TraceEvent.V8.GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS |
    TraceEvent.V8.GC_MC_EVACUATE_UPDATE_POINTERS_WEAK |
    TraceEvent.V8.GC_MC_EVACUATE_UPDATE_POINTERS |
    TraceEvent.V8.GC_MC_EVACUATE |
    TraceEvent.V8.GC_MC_FINISH |
    TraceEvent.V8.GC_MC_INCREMENTAL_EMBEDDER_PROLOGUE |
    TraceEvent.V8.GC_MC_INCREMENTAL_EMBEDDER_TRACING |
    TraceEvent.V8.GC_MC_INCREMENTAL_EXTERNAL_EPILOGUE |
    TraceEvent.V8.GC_MC_INCREMENTAL_EXTERNAL_PROLOGUE |
    TraceEvent.V8.GC_MC_INCREMENTAL_FINALIZE_BODY |
    TraceEvent.V8.GC_MC_INCREMENTAL_FINALIZE |
    TraceEvent.V8.GC_MC_INCREMENTAL_LAYOUT_CHANGE |
    TraceEvent.V8.GC_MC_INCREMENTAL_START |
    TraceEvent.V8.GC_MC_INCREMENTAL_SWEEPING |
    TraceEvent.V8.GC_MC_INCREMENTAL |
    TraceEvent.V8.GC_MC_MARK_EMBEDDER_TRACING_CLOSURE |
    TraceEvent.V8.GC_MC_MARK_EMBEDDER_TRACING |
    TraceEvent.V8.GC_MC_MARK_FINISH_INCREMENTAL |
    TraceEvent.V8.GC_MC_MARK_MAIN |
    TraceEvent.V8.GC_MC_MARK_ROOTS |
    TraceEvent.V8.GC_MC_MARK_WEAK_CLOSURE_EPHEMERON_MARKING |
    TraceEvent.V8.GC_MC_MARK_WEAK_CLOSURE_EPHEMERON |
    TraceEvent.V8.GC_MC_MARK_WEAK_CLOSURE_HARMONY |
    TraceEvent.V8.GC_MC_MARK_WEAK_CLOSURE_WEAK_HANDLES |
    TraceEvent.V8.GC_MC_MARK_WEAK_CLOSURE_WEAK_ROOTS |
    TraceEvent.V8.GC_MC_MARK_WEAK_CLOSURE |
    TraceEvent.V8.GC_MC_MARK |
    TraceEvent.V8.GC_MC_PROLOGUE |
    TraceEvent.V8.GC_MC_SWEEP |
    TraceEvent.V8.GC_Objects_Stats |
    TraceEvent.V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL |
    TraceEvent.V8.GC_SCAVENGER_PROCESS_ARRAY_BUFFERS |
    TraceEvent.V8.GC_SCAVENGER_SCAVENGE_FINALIZE |
    TraceEvent.V8.GC_SCAVENGER_SCAVENGE_PARALLEL |
    TraceEvent.V8.GC_SCAVENGER_SCAVENGE_ROOTS |
    TraceEvent.V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS |
    TraceEvent.V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_IDENTIFY |
    TraceEvent.V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_PROCESS |
    TraceEvent.V8.GC_SCAVENGER_SCAVENGE |
    TraceEvent.V8.GCCompactor |
    TraceEvent.V8.GCFinalizeMC |
    TraceEvent.V8.GCFinalizeMCReduceMemory |
    TraceEvent.V8.GCIdleNotification |
    TraceEvent.V8.GCIncrementalMarking |
    TraceEvent.V8.GCIncrementalMarkingFinalize |
    TraceEvent.V8.GCIncrementalMarkingLayoutChange |
    TraceEvent.V8.GCIncrementalMarkingStart |
    TraceEvent.V8.GCMarkCompactorMarkingSummary |
    TraceEvent.V8.GCMarkCompactorSummary |
    TraceEvent.V8.GCPhantomHandleProcessingCallback |
    TraceEvent.V8.GCScavenger |
    TraceEvent.V8.HandleInterrupts |
    TraceEvent.V8.ICStats |
    TraceEvent.V8.InvokeApiInterruptCallbacks |
    TraceEvent.V8.NewContext |
    TraceEvent.V8.NewInstance |
    TraceEvent.V8.OptimizeCode |
    TraceEvent.V8.ParseFunction |
    TraceEvent.V8.ParseOnBackground |
    TraceEvent.V8.ParseProgram |
    TraceEvent.V8.PreParse |
    TraceEvent.V8.RecompileConcurrent |
    TraceEvent.V8.RecompileSynchronous |
    TraceEvent.V8.Run |
    TraceEvent.V8.Runtime_Runtime_AddDictionaryProperty |
    TraceEvent.V8.Runtime_Runtime_AllocateInNewSpace |
    TraceEvent.V8.Runtime_Runtime_AllocateInTargetSpace |
    TraceEvent.V8.Runtime_Runtime_AllocateSeqTwoByteString |
    TraceEvent.V8.Runtime_Runtime_ArrayIndexOf |
    TraceEvent.V8.Runtime_Runtime_ArraySpeciesConstructor |
    TraceEvent.V8.Runtime_Runtime_CompileLazy |
    TraceEvent.V8.Runtime_Runtime_CompileOptimized_Concurrent |
    TraceEvent.V8.Runtime_Runtime_CompleteInobjectSlackTrackingForMap |
    TraceEvent.V8.Runtime_Runtime_CreateArrayLiteral |
    TraceEvent.V8.Runtime_Runtime_CreateArrayLiteralWithoutAllocationSite |
    TraceEvent.V8.Runtime_Runtime_CreateDataProperty |
    TraceEvent.V8.Runtime_Runtime_CreateJSGeneratorObject |
    TraceEvent.V8.Runtime_Runtime_CreateListFromArrayLike |
    TraceEvent.V8.Runtime_Runtime_CreateObjectLiteral |
    TraceEvent.V8.Runtime_Runtime_CreateObjectLiteralWithoutAllocationSite |
    TraceEvent.V8.Runtime_Runtime_CreateRegExpLiteral |
    TraceEvent.V8.Runtime_Runtime_DateCurrentTime |
    TraceEvent.V8.Runtime_Runtime_DeclareEvalFunction |
    TraceEvent.V8.Runtime_Runtime_DeclareGlobals |
    TraceEvent.V8.Runtime_Runtime_DefineAccessorPropertyUnchecked |
    TraceEvent.V8.Runtime_Runtime_DefineClass |
    TraceEvent.V8.Runtime_Runtime_DefineDataPropertyInLiteral |
    TraceEvent.V8.Runtime_Runtime_DeleteProperty |
    TraceEvent.V8.Runtime_Runtime_ElementsTransitionAndStoreIC_Miss |
    TraceEvent.V8.Runtime_Runtime_ForInEnumerate |
    TraceEvent.V8.Runtime_Runtime_GetOwnPropertyDescriptor |
    TraceEvent.V8.Runtime_Runtime_GetProperty |
    TraceEvent.V8.Runtime_Runtime_HasInPrototypeChain |
    TraceEvent.V8.Runtime_Runtime_HasProperty |
    TraceEvent.V8.Runtime_Runtime_Interrupt |
    TraceEvent.V8.Runtime_Runtime_KeyedLoadIC_Miss |
    TraceEvent.V8.Runtime_Runtime_KeyedStoreIC_Miss |
    TraceEvent.V8.Runtime_Runtime_KeyedStoreIC_Slow |
    TraceEvent.V8.Runtime_Runtime_LoadAccessorProperty |
    TraceEvent.V8.Runtime_Runtime_LoadCallbackProperty |
    TraceEvent.V8.Runtime_Runtime_LoadElementWithInterceptor |
    TraceEvent.V8.Runtime_Runtime_LoadGlobalIC_Miss |
    TraceEvent.V8.Runtime_Runtime_LoadGlobalIC_Slow |
    TraceEvent.V8.Runtime_Runtime_LoadIC_Miss |
    TraceEvent.V8.Runtime_Runtime_LoadLookupSlot |
    TraceEvent.V8.Runtime_Runtime_LoadLookupSlotForCall |
    TraceEvent.V8.Runtime_Runtime_LoadLookupSlotInsideTypeof |
    TraceEvent.V8.Runtime_Runtime_LoadPropertyWithInterceptor |
    TraceEvent.V8.Runtime_Runtime_MapGrow |
    TraceEvent.V8.Runtime_Runtime_MapShrink |
    TraceEvent.V8.Runtime_Runtime_NewArray |
    TraceEvent.V8.Runtime_Runtime_NewClosure_Tenured |
    TraceEvent.V8.Runtime_Runtime_NewClosure |
    TraceEvent.V8.Runtime_Runtime_NewObject |
    TraceEvent.V8.Runtime_Runtime_NewScriptContext |
    TraceEvent.V8.Runtime_Runtime_NotifyDeoptimized |
    TraceEvent.V8.Runtime_Runtime_NumberToString |
    TraceEvent.V8.Runtime_Runtime_ObjectCreate |
    TraceEvent.V8.Runtime_Runtime_ObjectEntries |
    TraceEvent.V8.Runtime_Runtime_ObjectGetOwnPropertyNames |
    TraceEvent.V8.Runtime_Runtime_ObjectHasOwnProperty |
    TraceEvent.V8.Runtime_Runtime_ObjectKeys |
    TraceEvent.V8.Runtime_Runtime_OrdinaryHasInstance |
    TraceEvent.V8.Runtime_Runtime_PrepareElementsForSort |
    TraceEvent.V8.Runtime_Runtime_PushBlockContext |
    TraceEvent.V8.Runtime_Runtime_PushCatchContext |
    TraceEvent.V8.Runtime_Runtime_PushWithContext |
    TraceEvent.V8.Runtime_Runtime_RegExpExec |
    TraceEvent.V8.Runtime_Runtime_RegExpExecMultiple |
    TraceEvent.V8.Runtime_Runtime_RegExpInitializeAndCompile |
    TraceEvent.V8.Runtime_Runtime_RegExpReplace |
    TraceEvent.V8.Runtime_Runtime_ResolvePossiblyDirectEval |
    TraceEvent.V8.Runtime_Runtime_RunMicrotaskCallback |
    TraceEvent.V8.Runtime_Runtime_SetGrow |
    TraceEvent.V8.Runtime_Runtime_SetKeyedProperty |
    TraceEvent.V8.Runtime_Runtime_SetNamedProperty |
    TraceEvent.V8.Runtime_Runtime_ShrinkPropertyDictionary |
    TraceEvent.V8.Runtime_Runtime_StackGuard |
    TraceEvent.V8.Runtime_Runtime_StoreCallbackProperty |
    TraceEvent.V8.Runtime_Runtime_StoreGlobalIC_Miss |
    TraceEvent.V8.Runtime_Runtime_StoreGlobalIC_Slow |
    TraceEvent.V8.Runtime_Runtime_StoreIC_Miss |
    TraceEvent.V8.Runtime_Runtime_StoreInArrayLiteralIC_Miss |
    TraceEvent.V8.Runtime_Runtime_StoreLookupSlot_Sloppy |
    TraceEvent.V8.Runtime_Runtime_StoreLookupSlot_Strict |
    TraceEvent.V8.Runtime_Runtime_StringAdd |
    TraceEvent.V8.Runtime_Runtime_StringBuilderConcat |
    TraceEvent.V8.Runtime_Runtime_StringCharCodeAt |
    TraceEvent.V8.Runtime_Runtime_StringEqual |
    TraceEvent.V8.Runtime_Runtime_StringIncludes |
    TraceEvent.V8.Runtime_Runtime_StringIndexOfUnchecked |
    TraceEvent.V8.Runtime_Runtime_StringLessThan |
    TraceEvent.V8.Runtime_Runtime_StringParseFloat |
    TraceEvent.V8.Runtime_Runtime_StringParseInt |
    TraceEvent.V8.Runtime_Runtime_StringSplit |
    TraceEvent.V8.Runtime_Runtime_StringSubstring |
    TraceEvent.V8.Runtime_Runtime_StringToArray |
    TraceEvent.V8.Runtime_Runtime_StringToLowerCaseIntl |
    TraceEvent.V8.Runtime_Runtime_StringToNumber |
    TraceEvent.V8.Runtime_Runtime_Throw |
    TraceEvent.V8.Runtime_Runtime_ThrowCalledNonCallable |
    TraceEvent.V8.Runtime_Runtime_ThrowConstructedNonConstructable |
    TraceEvent.V8.Runtime_Runtime_ToString |
    TraceEvent.V8.Runtime_Runtime_TransitionElementsKind |
    TraceEvent.V8.Runtime_Runtime_UnwindAndFindExceptionHandler |
    TraceEvent.V8.RuntimeStats |
    TraceEvent.V8.ScriptCompiler |
    TraceEvent.V8.StackGuard |
    TraceEvent.V8.Task |
    TraceEvent.V8ContextSnapshot.InstallRuntimeEnabled |
    TraceEvent.VerifiedRulesetDealer.GetRuleset |
    TraceEvent.View.Layout |
    TraceEvent.View.Layoutbounds_changed |
    TraceEvent.View.Layoutset_bounds |
    TraceEvent.View.OnPaint |
    TraceEvent.View.OnPaintBackground |
    TraceEvent.View.OnPaintBorder |
    TraceEvent.View.Paint |
    TraceEvent.View.PaintChildren |
    TraceEvent.ViewHostMsg_DidContentsPreferredSizeChange |
    TraceEvent.ViewHostMsg_DocumentAvailableInMainFrame |
    TraceEvent.ViewHostMsg_UpdateZoomLimits |
    TraceEvent.ViewMsg_EnablePreferredSizeChangedMode |
    TraceEvent.VirtualboolGrRenderTargetOpList.OnExecuteGrOpFlushState |
    TraceEvent.VirtualGrOp.CombineResultnamespace.FillRectOp.OnCombineIfPossibleGrOpGrCaps |
    TraceEvent.VirtualGrOp.CombineResultnamespace.TextureOp.OnCombineIfPossibleGrOpGrCaps |
    TraceEvent.Virtualnamespace.FillRectOp.OnPrepareDrawsGrMeshDrawOp.Target |
    TraceEvent.Virtualnamespace.TextureOp.OnPrepareDrawsGrMeshDrawOp.Target |
    TraceEvent.VisibleUnits.CanonicalPosition |
    TraceEvent.VisibleUnits.MostBackwardCaretPosition |
    TraceEvent.VisibleUnits.MostForwardCaretPosition |
    TraceEvent.Visitedlink.Mojom.VisitedLinkNotificationSink |
    TraceEvent.VisuallyComplete100 |
    TraceEvent.VisualViewport.MainFrameDidChangeSize |
    TraceEvent.VisualViewport.SetSize |
    TraceEvent.Viz.BeginFrameArgs |
    TraceEvent.Viz.Mojom.CompositingModeReporter |
    TraceEvent.Viz.Mojom.CompositorFrameSink |
    TraceEvent.Viz.Mojom.CompositorFrameSinkClient |
    TraceEvent.Viz.Mojom.DisplayClient |
    TraceEvent.Viz.Mojom.FrameSinkManager |
    TraceEvent.Viz.Mojom.FrameSinkManagerClient |
    TraceEvent.Viz.Mojom.GpuHost |
    TraceEvent.Viz.Mojom.GpuService |
    TraceEvent.Viz.SharedQuadState |
    TraceEvent.WaitingfornextBeginFrame |
    TraceEvent.Web_cache.Mojom.WebCache |
    TraceEvent.WebContentsImpl.CreateRenderFrameForRenderManager |
    TraceEvent.WebContentsImpl.CreateRenderViewForRenderManager |
    TraceEvent.WebContentsImpl.CreateWithOpener |
    TraceEvent.WebContentsImpl.DidFinishNavigation |
    TraceEvent.WebContentsImpl.DidStartNavigation |
    TraceEvent.WebContentsImpl.ReadyToCommitNavigation |
    TraceEvent.WebContentsImplLoading |
    TraceEvent.WebFrameWidgetImpl.BeginFrame |
    TraceEvent.WebFrameWidgetImpl.UpdateAllLifecyclePhases |
    TraceEvent.WebLocalFrameImpl.CreateChildframe |
    TraceEvent.WebLocalFrameImpl.CreateFrameView |
    TraceEvent.WebScopedVirtualTimePauser.PauseVirtualTime |
    TraceEvent.WebURLLoaderImpl.Context.Cancel |
    TraceEvent.WebURLLoaderImpl.Context.OnCompletedRequest |
    TraceEvent.WebURLLoaderImpl.Context.OnReceivedData |
    TraceEvent.WebURLLoaderImpl.Context.OnReceivedRedirect |
    TraceEvent.WebURLLoaderImpl.Context.OnReceivedResponse |
    TraceEvent.WebURLLoaderImpl.Context.Start |
    TraceEvent.WebURLLoaderImpl.LoadAsynchronously |
    TraceEvent.WebViewImpl.BeginFrame |
    TraceEvent.WebViewImpl.HandleInputEvent |
    TraceEvent.WebViewImpl.HandleKeyEvent |
    TraceEvent.WebViewImpl.SetIsAcceleratedCompositingActivetrue |
    TraceEvent.WebViewImpl.UpdateAllLifecyclePhases |
    TraceEvent.Widget.Init |
    TraceEvent.WidgetHostMsg_Close_ACK |
    TraceEvent.WidgetHostMsg_DidCommitAndDrawCompositorFrame |
    TraceEvent.WidgetHostMsg_DidFirstVisuallyNonEmptyPaint |
    TraceEvent.WidgetHostMsg_FrameSwapMessages |
    TraceEvent.WidgetHostMsg_HasTouchEventHandlers |
    TraceEvent.WidgetHostMsg_SelectionBoundsChanged |
    TraceEvent.WidgetHostMsg_TextInputStateChanged |
    TraceEvent.WidgetHostMsg_UpdateScreenRects_ACK |
    TraceEvent.WidgetInputHandlerImpl.DispatchEvent |
    TraceEvent.WidgetMsg_SetActive |
    TraceEvent.WidgetMsg_SetInheritedEffectiveTouchAction |
    TraceEvent.WidgetMsg_SetIsInert |
    TraceEvent.WidgetMsg_SetViewportIntersection |
    TraceEvent.WidgetMsg_SynchronizeVisualProperties |
    TraceEvent.WidgetMsg_UpdateRenderThrottlingStatus |
    TraceEvent.WidgetMsg_UpdateScreenRects |
    TraceEvent.WidgetMsg_WasHidden |
    TraceEvent.WidgetMsg_WasShown |
    TraceEvent.WriteTransaction |
    TraceEvent.Ws.Mojom.Gpu |
    TraceEvent.X509Certificate.CreateFromDERCertChain |
    TraceEvent.XHRLoad |
    TraceEvent.XHRReadyStateChange |
    TraceEvent.YieldParserForScriptBlockingResources |
    TraceEvent.YieldParserForScriptLoad |
    TraceEvent.ZeroSuggestProvider.Start |
    TraceEvent.ZonesAndDomReady |
    TraceEvent.ZonesReady;

  namespace TraceEvent {
    type A = 
      TraceEvent.A.F |
      TraceEvent.A.S;
  
    type AAConvexPathOp = 
      TraceEvent.AAConvexPathOp.X;
  
    type AAStrokeRect = 
      TraceEvent.AAStrokeRect.X;
  
    type AcquireLock = 
      TraceEvent.AcquireLock.X;
  
    type ActivateLayerTree = 
      TraceEvent.ActivateLayerTree.I;
  
    type AddFrameDisplayed = 
      TraceEvent.AddFrameDisplayed.X;
  
    type Allactivesurfacesready = 
      TraceEvent.Allactivesurfacesready.I;
  
    type Animation = 
      TraceEvent.Animation.b |
      TraceEvent.Animation.e |
      TraceEvent.Animation.n;
  
    type AsyncTask = 
      TraceEvent.AsyncTask.f |
      TraceEvent.AsyncTask.s |
      TraceEvent.AsyncTask.t;
  
    type AtlasTextOp = 
      TraceEvent.AtlasTextOp.X;
  
    type BeginFrame = 
      TraceEvent.BeginFrame.I;
  
    type BeginFrameArgs = 
      TraceEvent.BeginFrameArgs.t;
  
    type BeginMainThreadFrame = 
      TraceEvent.BeginMainThreadFrame.I;
  
    type BlinkGCMarking = 
      TraceEvent.BlinkGCMarking.X;
  
    type BrowserWorker0x7fd3431d1a00 = 
      TraceEvent.BrowserWorker0x7fd3431d1a00.b |
      TraceEvent.BrowserWorker0x7fd3431d1a00.e |
      TraceEvent.BrowserWorker0x7fd3431d1a00.F |
      TraceEvent.BrowserWorker0x7fd3431d1a00.S;
  
    type BudgetPool_DisableThrottling = 
      TraceEvent.BudgetPool_DisableThrottling.X;
  
    type CalculateRenderSurfaceLayerList = 
      TraceEvent.CalculateRenderSurfaceLayerList.X;
  
    type CancelAnimationFrame = 
      TraceEvent.CancelAnimationFrame.I;
  
    type CANCELLED = 
      TraceEvent.CANCELLED.n;
  
    type CanExceedIdleDeadlineIfRequired = 
      TraceEvent.CanExceedIdleDeadlineIfRequired.X;
  
    type Canvas2DLayerBridgeCreation = 
      TraceEvent.Canvas2DLayerBridgeCreation.I;
  
    type CERT_VERIFIER_REQUEST_BOUND_TO_JOB = 
      TraceEvent.CERT_VERIFIER_REQUEST_BOUND_TO_JOB.n;
  
    type CERT_VERIFIER_REQUEST = 
      TraceEvent.CERT_VERIFIER_REQUEST.b |
      TraceEvent.CERT_VERIFIER_REQUEST.e;
  
    type ChromeViewHostMsg_AllowDOMStorage = 
      TraceEvent.ChromeViewHostMsg_AllowDOMStorage.X;
  
    type CircleOp = 
      TraceEvent.CircleOp.X;
  
    type CircularRRectOp = 
      TraceEvent.CircularRRectOp.X;
  
    type Cleanup_tq = 
      TraceEvent.Cleanup_tq.C;
  
    type ClearusingTexSubImage2D = 
      TraceEvent.ClearusingTexSubImage2D.X;
  
    type CommitLoad = 
      TraceEvent.CommitLoad.X;
  
    type CommitPendingTreesToCA = 
      TraceEvent.CommitPendingTreesToCA.X;
  
    type CompositeLayers = 
      TraceEvent.CompositeLayers.B |
      TraceEvent.CompositeLayers.E;
  
    type Compositor_tq = 
      TraceEvent.Compositor_tq.C;
  
    type CONNECT_JOB_SET_SOCKET = 
      TraceEvent.CONNECT_JOB_SET_SOCKET.n;
  
    type ContextCreatedNotification = 
      TraceEvent.ContextCreatedNotification.X;
  
    type Control_tq = 
      TraceEvent.Control_tq.C;
  
    type COOKIE_STORE_COOKIE_ADDED = 
      TraceEvent.COOKIE_STORE_COOKIE_ADDED.n;
  
    type COOKIE_STORE_COOKIE_DELETED = 
      TraceEvent.COOKIE_STORE_COOKIE_DELETED.n;
  
    type CreateIOSurface = 
      TraceEvent.CreateIOSurface.X;
  
    type CSSFirstUsed = 
      TraceEvent.CSSFirstUsed.X;
  
    type Damagenotvisible = 
      TraceEvent.Damagenotvisible.I;
  
    type DecodeFont = 
      TraceEvent.DecodeFont.B |
      TraceEvent.DecodeFont.E;
  
    type DecodeImage = 
      TraceEvent.DecodeImage.X;
  
    type DecodeLazyPixelRef = 
      TraceEvent.DecodeLazyPixelRef.X;
  
    type Default_tq = 
      TraceEvent.Default_tq.C;
  
    type DefaultPathOp = 
      TraceEvent.DefaultPathOp.X;
  
    type DidPrepareTiles = 
      TraceEvent.DidPrepareTiles.I;
  
    type DidProcessTask = 
      TraceEvent.DidProcessTask.X;
  
    type DiskUsage = 
      TraceEvent.DiskUsage.C;
  
    type DisplayCompositor = 
      TraceEvent.DisplayCompositor.b |
      TraceEvent.DisplayCompositor.e |
      TraceEvent.DisplayCompositor.F |
      TraceEvent.DisplayCompositor.S;
  
    type DNS_TRANSACTION_ATTEMPT = 
      TraceEvent.DNS_TRANSACTION_ATTEMPT.n;
  
    type DNS_TRANSACTION_QUERY = 
      TraceEvent.DNS_TRANSACTION_QUERY.b |
      TraceEvent.DNS_TRANSACTION_QUERY.e;
  
    type DNS_TRANSACTION_RESPONSE = 
      TraceEvent.DNS_TRANSACTION_RESPONSE.n;
  
    type DNS_TRANSACTION = 
      TraceEvent.DNS_TRANSACTION.b |
      TraceEvent.DNS_TRANSACTION.e;
  
    type DomComplete = 
      TraceEvent.DomComplete.R;
  
    type DOMContentLoaded = 
      TraceEvent.DOMContentLoaded.b |
      TraceEvent.DOMContentLoaded.e;
  
    type DomContentLoadedEventEnd = 
      TraceEvent.DomContentLoadedEventEnd.R;
  
    type DomContentLoadedEventStart = 
      TraceEvent.DomContentLoadedEventStart.R;
  
    type DomInteractive = 
      TraceEvent.DomInteractive.R;
  
    type DomLoading = 
      TraceEvent.DomLoading.R;
  
    type DomReady = 
      TraceEvent.DomReady.R;
  
    type DOMStorageHostMsg_LoadStorageArea = 
      TraceEvent.DOMStorageHostMsg_LoadStorageArea.X;
  
    type DOMStorageHostMsg_OpenStorageArea = 
      TraceEvent.DOMStorageHostMsg_OpenStorageArea.X;
  
    type DOMStorageHostMsg_RemoveItem = 
      TraceEvent.DOMStorageHostMsg_RemoveItem.X;
  
    type DOMStorageHostMsg_SetItem = 
      TraceEvent.DOMStorageHostMsg_SetItem.X;
  
    type DOMStorageMsg_AsyncOperationComplete = 
      TraceEvent.DOMStorageMsg_AsyncOperationComplete.X;
  
    type DOMStorageMsg_Event = 
      TraceEvent.DOMStorageMsg_Event.X;
  
    type DomTime = 
      TraceEvent.DomTime.b |
      TraceEvent.DomTime.e;
  
    type DoVerifyOnWorkerThread = 
      TraceEvent.DoVerifyOnWorkerThread.X;
  
    type DrawFrame = 
      TraceEvent.DrawFrame.I;
  
    type DrawLazyPixelRef = 
      TraceEvent.DrawLazyPixelRef.I;
  
    type Drawskipped = 
      TraceEvent.Drawskipped.I;
  
    type DrawVerticesOp = 
      TraceEvent.DrawVerticesOp.X;
  
    type EarlyOut_DeferCommit_InsideBeginMainFrame = 
      TraceEvent.EarlyOut_DeferCommit_InsideBeginMainFrame.I;
  
    type EarlyOut_NoUpdates = 
      TraceEvent.EarlyOut_NoUpdates.I;
  
    type EnableLongIdlePeriod = 
      TraceEvent.EnableLongIdlePeriod.X;
  
    type EndIdlePeriod = 
      TraceEvent.EndIdlePeriod.X;
  
    type EndofTrace = 
      TraceEvent.EndofTrace.b |
      TraceEvent.EndofTrace.e;
  
    type Estimated_queueing_time_for_window = 
      TraceEvent.Estimated_queueing_time_for_window.C;
  
    type EvaluateScript = 
      TraceEvent.EvaluateScript.X;
  
    type EventDispatch = 
      TraceEvent.EventDispatch.X;
  
    type ExtensionHostMsg_AddLazyListener = 
      TraceEvent.ExtensionHostMsg_AddLazyListener.X;
  
    type ExtensionHostMsg_AddListener = 
      TraceEvent.ExtensionHostMsg_AddListener.X;
  
    type ExtensionHostMsg_CloseMessagePort = 
      TraceEvent.ExtensionHostMsg_CloseMessagePort.X;
  
    type ExtensionHostMsg_EventAck = 
      TraceEvent.ExtensionHostMsg_EventAck.X;
  
    type ExtensionHostMsg_ExecuteCodeFinished = 
      TraceEvent.ExtensionHostMsg_ExecuteCodeFinished.X;
  
    type ExtensionHostMsg_GenerateUniqueID = 
      TraceEvent.ExtensionHostMsg_GenerateUniqueID.X;
  
    type ExtensionHostMsg_GetMessageBundle = 
      TraceEvent.ExtensionHostMsg_GetMessageBundle.X;
  
    type ExtensionHostMsg_OpenChannelToExtension = 
      TraceEvent.ExtensionHostMsg_OpenChannelToExtension.X;
  
    type ExtensionHostMsg_OpenChannelToTab = 
      TraceEvent.ExtensionHostMsg_OpenChannelToTab.X;
  
    type ExtensionHostMsg_OpenMessagePort = 
      TraceEvent.ExtensionHostMsg_OpenMessagePort.X;
  
    type ExtensionHostMsg_PostMessage = 
      TraceEvent.ExtensionHostMsg_PostMessage.X;
  
    type ExtensionHostMsg_Request = 
      TraceEvent.ExtensionHostMsg_Request.X;
  
    type ExtensionHostMsg_RequestForIOThread = 
      TraceEvent.ExtensionHostMsg_RequestForIOThread.X;
  
    type ExtensionMsg_ActivateExtension = 
      TraceEvent.ExtensionMsg_ActivateExtension.X;
  
    type ExtensionMsg_DeliverMessage = 
      TraceEvent.ExtensionMsg_DeliverMessage.X;
  
    type ExtensionMsg_DispatchEvent = 
      TraceEvent.ExtensionMsg_DispatchEvent.X;
  
    type ExtensionMsg_DispatchOnConnect = 
      TraceEvent.ExtensionMsg_DispatchOnConnect.X;
  
    type ExtensionMsg_DispatchOnDisconnect = 
      TraceEvent.ExtensionMsg_DispatchOnDisconnect.X;
  
    type ExtensionMsg_ExecuteCode = 
      TraceEvent.ExtensionMsg_ExecuteCode.X;
  
    type ExtensionMsg_Loaded = 
      TraceEvent.ExtensionMsg_Loaded.X;
  
    type ExtensionMsg_NotifyRenderViewType = 
      TraceEvent.ExtensionMsg_NotifyRenderViewType.X;
  
    type ExtensionMsg_Response = 
      TraceEvent.ExtensionMsg_Response.X;
  
    type ExtensionMsg_SetScriptingWhitelist = 
      TraceEvent.ExtensionMsg_SetScriptingWhitelist.X;
  
    type ExtensionMsg_SetSessionInfo = 
      TraceEvent.ExtensionMsg_SetSessionInfo.X;
  
    type ExtensionMsg_SetSystemFont = 
      TraceEvent.ExtensionMsg_SetSystemFont.X;
  
    type ExtensionMsg_SetTabId = 
      TraceEvent.ExtensionMsg_SetTabId.X;
  
    type ExtensionMsg_UpdateBrowserWindowId = 
      TraceEvent.ExtensionMsg_UpdateBrowserWindowId.X;
  
    type ExtensionMsg_UpdateDefaultPolicyHostRestrictions = 
      TraceEvent.ExtensionMsg_UpdateDefaultPolicyHostRestrictions.X;
  
    type ExtensionMsg_UpdateUserScripts = 
      TraceEvent.ExtensionMsg_UpdateUserScripts.X;
  
    type ExtensionMsg_ValidateMessagePort = 
      TraceEvent.ExtensionMsg_ValidateMessagePort.X;
  
    type ExtensionMsg_WatchPages = 
      TraceEvent.ExtensionMsg_WatchPages.X;
  
    type FaveReady_mark = 
      TraceEvent.FaveReady_mark.R;
  
    type FaveReady = 
      TraceEvent.FaveReady.b |
      TraceEvent.FaveReady.e;
  
    type FeatureFirstUsed = 
      TraceEvent.FeatureFirstUsed.X;
  
    type FetchStart = 
      TraceEvent.FetchStart.R;
  
    type FillRectOp = 
      TraceEvent.FillRectOp.X;
  
    type FireAnimationFrame = 
      TraceEvent.FireAnimationFrame.X;
  
    type FireIdleCallback = 
      TraceEvent.FireIdleCallback.X;
  
    type FirstContentfulPaint = 
      TraceEvent.FirstContentfulPaint.b |
      TraceEvent.FirstContentfulPaint.e |
      TraceEvent.FirstContentfulPaint.I |
      TraceEvent.FirstContentfulPaint.R;
  
    type FirstImagePaint = 
      TraceEvent.FirstImagePaint.R;
  
    type FirstLayout = 
      TraceEvent.FirstLayout.R;
  
    type FirstMeaningfulPaint = 
      TraceEvent.FirstMeaningfulPaint.b |
      TraceEvent.FirstMeaningfulPaint.e |
      TraceEvent.FirstMeaningfulPaint.R;
  
    type FirstMeaningfulPaintCandidate = 
      TraceEvent.FirstMeaningfulPaintCandidate.R;
  
    type FirstPaint = 
      TraceEvent.FirstPaint.I |
      TraceEvent.FirstPaint.R;
  
    type FirstTextPaint = 
      TraceEvent.FirstTextPaint.R;
  
    type FirstVisualChange = 
      TraceEvent.FirstVisualChange.b |
      TraceEvent.FirstVisualChange.e;
  
    type FooterEnd = 
      TraceEvent.FooterEnd.R;
  
    type FooterStart = 
      TraceEvent.FooterStart.R;
  
    type FooterTime = 
      TraceEvent.FooterTime.b |
      TraceEvent.FooterTime.e;
  
    type Frame_deferrable_tq = 
      TraceEvent.Frame_deferrable_tq.C;
  
    type Frame_loading_control_tq = 
      TraceEvent.Frame_loading_control_tq.C;
  
    type Frame_loading_tq = 
      TraceEvent.Frame_loading_tq.C;
  
    type Frame_pausable_tq = 
      TraceEvent.Frame_pausable_tq.C;
  
    type Frame_throttleable_tq = 
      TraceEvent.Frame_throttleable_tq.C;
  
    type Frame_unpausable_tq = 
      TraceEvent.Frame_unpausable_tq.C;
  
    type FrameBlameContext = 
      TraceEvent.FrameBlameContext.LP |
      TraceEvent.FrameBlameContext.RP;
  
    type FrameCommittedInBrowser = 
      TraceEvent.FrameCommittedInBrowser.I;
  
    type FrameDeletedInBrowser = 
      TraceEvent.FrameDeletedInBrowser.I;
  
    type FrameHostMsg_BeforeUnload_ACK = 
      TraceEvent.FrameHostMsg_BeforeUnload_ACK.X;
  
    type FrameHostMsg_CheckCompleted = 
      TraceEvent.FrameHostMsg_CheckCompleted.X;
  
    type FrameHostMsg_CookiesEnabled = 
      TraceEvent.FrameHostMsg_CookiesEnabled.X;
  
    type FrameHostMsg_CreateChildFrame = 
      TraceEvent.FrameHostMsg_CreateChildFrame.X;
  
    type FrameHostMsg_DidAddContentSecurityPolicies = 
      TraceEvent.FrameHostMsg_DidAddContentSecurityPolicies.X;
  
    type FrameHostMsg_DidAddMessageToConsole = 
      TraceEvent.FrameHostMsg_DidAddMessageToConsole.X;
  
    type FrameHostMsg_DidChangeFrameOwnerProperties = 
      TraceEvent.FrameHostMsg_DidChangeFrameOwnerProperties.X;
  
    type FrameHostMsg_DidChangeLoadProgress = 
      TraceEvent.FrameHostMsg_DidChangeLoadProgress.X;
  
    type FrameHostMsg_DidFailLoadWithError = 
      TraceEvent.FrameHostMsg_DidFailLoadWithError.X;
  
    type FrameHostMsg_DidFinishDocumentLoad = 
      TraceEvent.FrameHostMsg_DidFinishDocumentLoad.X;
  
    type FrameHostMsg_DidFinishLoad = 
      TraceEvent.FrameHostMsg_DidFinishLoad.X;
  
    type FrameHostMsg_DidStopLoading = 
      TraceEvent.FrameHostMsg_DidStopLoading.X;
  
    type FrameHostMsg_DispatchLoad = 
      TraceEvent.FrameHostMsg_DispatchLoad.X;
  
    type FrameHostMsg_DocumentOnLoadCompleted = 
      TraceEvent.FrameHostMsg_DocumentOnLoadCompleted.X;
  
    type FrameHostMsg_FocusedNodeChanged = 
      TraceEvent.FrameHostMsg_FocusedNodeChanged.X;
  
    type FrameHostMsg_ForwardResourceTimingToParent = 
      TraceEvent.FrameHostMsg_ForwardResourceTimingToParent.X;
  
    type FrameHostMsg_FrameFocused = 
      TraceEvent.FrameHostMsg_FrameFocused.X;
  
    type FrameHostMsg_HittestData = 
      TraceEvent.FrameHostMsg_HittestData.X;
  
    type FrameHostMsg_RouteMessageEvent = 
      TraceEvent.FrameHostMsg_RouteMessageEvent.X;
  
    type FrameHostMsg_SuddenTerminationDisablerChanged = 
      TraceEvent.FrameHostMsg_SuddenTerminationDisablerChanged.X;
  
    type FrameHostMsg_SwapOut_ACK = 
      TraceEvent.FrameHostMsg_SwapOut_ACK.X;
  
    type FrameHostMsg_SynchronizeVisualProperties = 
      TraceEvent.FrameHostMsg_SynchronizeVisualProperties.X;
  
    type FrameHostMsg_UpdatePageImportanceSignals = 
      TraceEvent.FrameHostMsg_UpdatePageImportanceSignals.X;
  
    type FrameHostMsg_UpdateRenderThrottlingStatus = 
      TraceEvent.FrameHostMsg_UpdateRenderThrottlingStatus.X;
  
    type FrameHostMsg_UpdateState = 
      TraceEvent.FrameHostMsg_UpdateState.X;
  
    type FrameHostMsg_UpdateTitle = 
      TraceEvent.FrameHostMsg_UpdateTitle.X;
  
    type FrameHostMsg_UpdateUserActivationState = 
      TraceEvent.FrameHostMsg_UpdateUserActivationState.X;
  
    type FrameHostMsg_UpdateViewportIntersection = 
      TraceEvent.FrameHostMsg_UpdateViewportIntersection.X;
  
    type FrameHostMsg_VisibilityChanged = 
      TraceEvent.FrameHostMsg_VisibilityChanged.X;
  
    type FrameLoader = 
      TraceEvent.FrameLoader.D |
      TraceEvent.FrameLoader.N |
      TraceEvent.FrameLoader.O;
  
    type FrameMsg_AddContentSecurityPolicies = 
      TraceEvent.FrameMsg_AddContentSecurityPolicies.X;
  
    type FrameMsg_Delete = 
      TraceEvent.FrameMsg_Delete.X;
  
    type FrameMsg_DeleteProxy = 
      TraceEvent.FrameMsg_DeleteProxy.X;
  
    type FrameMsg_DidStartLoading = 
      TraceEvent.FrameMsg_DidStartLoading.X;
  
    type FrameMsg_DidStopLoading = 
      TraceEvent.FrameMsg_DidStopLoading.X;
  
    type FrameMsg_DidUpdateFramePolicy = 
      TraceEvent.FrameMsg_DidUpdateFramePolicy.X;
  
    type FrameMsg_DidUpdateOrigin = 
      TraceEvent.FrameMsg_DidUpdateOrigin.X;
  
    type FrameMsg_PostMessageEvent = 
      TraceEvent.FrameMsg_PostMessageEvent.X;
  
    type FrameMsg_ResetContentSecurityPolicy = 
      TraceEvent.FrameMsg_ResetContentSecurityPolicy.X;
  
    type FrameMsg_SetAccessibilityMode = 
      TraceEvent.FrameMsg_SetAccessibilityMode.X;
  
    type FrameMsg_SetFrameOwnerProperties = 
      TraceEvent.FrameMsg_SetFrameOwnerProperties.X;
  
    type FrameMsg_UpdateUserActivationState = 
      TraceEvent.FrameMsg_UpdateUserActivationState.X;
  
    type FramePresented = 
      TraceEvent.FramePresented.R;
  
    type FrameStartedLoading = 
      TraceEvent.FrameStartedLoading.I;
  
    type FullImage = 
      TraceEvent.FullImage.X;
  
    type FunctionCall = 
      TraceEvent.FunctionCall.B |
      TraceEvent.FunctionCall.E;
  
    type GlResizeChromium = 
      TraceEvent.GlResizeChromium.X;
  
    type Goog_123_3_1_end = 
      TraceEvent.Goog_123_3_1_end.R;
  
    type Goog_123_3_1_start = 
      TraceEvent.Goog_123_3_1_start.R;
  
    type Goog_123_3_1 = 
      TraceEvent.Goog_123_3_1.b |
      TraceEvent.Goog_123_3_1.e;
  
    type GpuChannelMsg_CreateCommandBuffer = 
      TraceEvent.GpuChannelMsg_CreateCommandBuffer.X;
  
    type GpuChannelMsg_CreateSharedImage = 
      TraceEvent.GpuChannelMsg_CreateSharedImage.X;
  
    type GpuChannelMsg_CreateSharedImageWithData = 
      TraceEvent.GpuChannelMsg_CreateSharedImageWithData.X;
  
    type GpuChannelMsg_DestroyCommandBuffer = 
      TraceEvent.GpuChannelMsg_DestroyCommandBuffer.X;
  
    type GpuChannelMsg_DestroySharedImage = 
      TraceEvent.GpuChannelMsg_DestroySharedImage.X;
  
    type GpuChannelMsg_RegisterSharedImageUploadBuffer = 
      TraceEvent.GpuChannelMsg_RegisterSharedImageUploadBuffer.X;
  
    type GpuCommandBufferMsg_AsyncFlush = 
      TraceEvent.GpuCommandBufferMsg_AsyncFlush.X;
  
    type GpuCommandBufferMsg_DestroyTransferBuffer = 
      TraceEvent.GpuCommandBufferMsg_DestroyTransferBuffer.X;
  
    type GpuCommandBufferMsg_GetChannelToken = 
      TraceEvent.GpuCommandBufferMsg_GetChannelToken.X;
  
    type GpuCommandBufferMsg_RegisterTransferBuffer = 
      TraceEvent.GpuCommandBufferMsg_RegisterTransferBuffer.X;
  
    type GpuCommandBufferMsg_SetGetBuffer = 
      TraceEvent.GpuCommandBufferMsg_SetGetBuffer.X;
  
    type GpuCommandBufferMsg_WaitForGetOffsetInRange = 
      TraceEvent.GpuCommandBufferMsg_WaitForGetOffsetInRange.X;
  
    type GpuRasterization = 
      TraceEvent.GpuRasterization.b |
      TraceEvent.GpuRasterization.e |
      TraceEvent.GpuRasterization.F |
      TraceEvent.GpuRasterization.S;
  
    type GPUTask = 
      TraceEvent.GPUTask.X;
  
    type HandleMouseMove = 
      TraceEvent.HandleMouseMove.X;
  
    type HeadEnd = 
      TraceEvent.HeadEnd.R;
  
    type HeadTime = 
      TraceEvent.HeadTime.b |
      TraceEvent.HeadTime.e;
  
    type HitTest = 
      TraceEvent.HitTest.B |
      TraceEvent.HitTest.E;
  
    type HOST_RESOLVER_IMPL_ATTEMPT_FINISHED = 
      TraceEvent.HOST_RESOLVER_IMPL_ATTEMPT_FINISHED.n;
  
    type HOST_RESOLVER_IMPL_ATTEMPT_STARTED = 
      TraceEvent.HOST_RESOLVER_IMPL_ATTEMPT_STARTED.n;
  
    type HOST_RESOLVER_IMPL_CACHE_HIT = 
      TraceEvent.HOST_RESOLVER_IMPL_CACHE_HIT.n;
  
    type HOST_RESOLVER_IMPL_CREATE_JOB = 
      TraceEvent.HOST_RESOLVER_IMPL_CREATE_JOB.n;
  
    type HOST_RESOLVER_IMPL_DNS_TASK = 
      TraceEvent.HOST_RESOLVER_IMPL_DNS_TASK.b |
      TraceEvent.HOST_RESOLVER_IMPL_DNS_TASK.e;
  
    type HOST_RESOLVER_IMPL_IPV6_REACHABILITY_CHECK = 
      TraceEvent.HOST_RESOLVER_IMPL_IPV6_REACHABILITY_CHECK.n;
  
    type HOST_RESOLVER_IMPL_JOB_ATTACH = 
      TraceEvent.HOST_RESOLVER_IMPL_JOB_ATTACH.n;
  
    type HOST_RESOLVER_IMPL_JOB_REQUEST_ATTACH = 
      TraceEvent.HOST_RESOLVER_IMPL_JOB_REQUEST_ATTACH.n;
  
    type HOST_RESOLVER_IMPL_JOB_STARTED = 
      TraceEvent.HOST_RESOLVER_IMPL_JOB_STARTED.n;
  
    type HOST_RESOLVER_IMPL_JOB = 
      TraceEvent.HOST_RESOLVER_IMPL_JOB.b |
      TraceEvent.HOST_RESOLVER_IMPL_JOB.e;
  
    type HOST_RESOLVER_IMPL_PROC_TASK = 
      TraceEvent.HOST_RESOLVER_IMPL_PROC_TASK.b |
      TraceEvent.HOST_RESOLVER_IMPL_PROC_TASK.e;
  
    type HOST_RESOLVER_IMPL_REQUEST = 
      TraceEvent.HOST_RESOLVER_IMPL_REQUEST.b |
      TraceEvent.HOST_RESOLVER_IMPL_REQUEST.e;
  
    type HTMLParserScriptRunnerExecuteScript = 
      TraceEvent.HTMLParserScriptRunnerExecuteScript.X;
  
    type HTTP_CACHE_ADD_TO_ENTRY = 
      TraceEvent.HTTP_CACHE_ADD_TO_ENTRY.b |
      TraceEvent.HTTP_CACHE_ADD_TO_ENTRY.e;
  
    type HTTP_CACHE_CALLER_REQUEST_HEADERS = 
      TraceEvent.HTTP_CACHE_CALLER_REQUEST_HEADERS.n;
  
    type HTTP_CACHE_CREATE_ENTRY = 
      TraceEvent.HTTP_CACHE_CREATE_ENTRY.b |
      TraceEvent.HTTP_CACHE_CREATE_ENTRY.e;
  
    type HTTP_CACHE_GET_BACKEND = 
      TraceEvent.HTTP_CACHE_GET_BACKEND.b |
      TraceEvent.HTTP_CACHE_GET_BACKEND.e;
  
    type HTTP_CACHE_OPEN_ENTRY = 
      TraceEvent.HTTP_CACHE_OPEN_ENTRY.b |
      TraceEvent.HTTP_CACHE_OPEN_ENTRY.e;
  
    type HTTP_CACHE_READ_DATA = 
      TraceEvent.HTTP_CACHE_READ_DATA.b |
      TraceEvent.HTTP_CACHE_READ_DATA.e;
  
    type HTTP_CACHE_READ_INFO = 
      TraceEvent.HTTP_CACHE_READ_INFO.b |
      TraceEvent.HTTP_CACHE_READ_INFO.e;
  
    type HTTP_CACHE_WRITE_DATA = 
      TraceEvent.HTTP_CACHE_WRITE_DATA.b |
      TraceEvent.HTTP_CACHE_WRITE_DATA.e;
  
    type HTTP_CACHE_WRITE_INFO = 
      TraceEvent.HTTP_CACHE_WRITE_INFO.b |
      TraceEvent.HTTP_CACHE_WRITE_INFO.e;
  
    type HTTP_STREAM_JOB_BOUND_TO_QUIC_STREAM_FACTORY_JOB = 
      TraceEvent.HTTP_STREAM_JOB_BOUND_TO_QUIC_STREAM_FACTORY_JOB.n;
  
    type HTTP_STREAM_JOB_BOUND_TO_REQUEST = 
      TraceEvent.HTTP_STREAM_JOB_BOUND_TO_REQUEST.n;
  
    type HTTP_STREAM_JOB_CONTROLLER_ALT_SVC_FOUND = 
      TraceEvent.HTTP_STREAM_JOB_CONTROLLER_ALT_SVC_FOUND.n;
  
    type HTTP_STREAM_JOB_CONTROLLER_BOUND = 
      TraceEvent.HTTP_STREAM_JOB_CONTROLLER_BOUND.n;
  
    type HTTP_STREAM_JOB_CONTROLLER_PROXY_SERVER_RESOLVED = 
      TraceEvent.HTTP_STREAM_JOB_CONTROLLER_PROXY_SERVER_RESOLVED.n;
  
    type HTTP_STREAM_JOB_CONTROLLER = 
      TraceEvent.HTTP_STREAM_JOB_CONTROLLER.b |
      TraceEvent.HTTP_STREAM_JOB_CONTROLLER.e;
  
    type HTTP_STREAM_JOB_DELAYED = 
      TraceEvent.HTTP_STREAM_JOB_DELAYED.n;
  
    type HTTP_STREAM_JOB_INIT_CONNECTION = 
      TraceEvent.HTTP_STREAM_JOB_INIT_CONNECTION.b |
      TraceEvent.HTTP_STREAM_JOB_INIT_CONNECTION.e;
  
    type HTTP_STREAM_JOB_WAITING = 
      TraceEvent.HTTP_STREAM_JOB_WAITING.b |
      TraceEvent.HTTP_STREAM_JOB_WAITING.e;
  
    type HTTP_STREAM_JOB = 
      TraceEvent.HTTP_STREAM_JOB.b |
      TraceEvent.HTTP_STREAM_JOB.e;
  
    type HTTP_STREAM_PARSER_READ_HEADERS = 
      TraceEvent.HTTP_STREAM_PARSER_READ_HEADERS.b |
      TraceEvent.HTTP_STREAM_PARSER_READ_HEADERS.e;
  
    type HTTP_STREAM_REQUEST_BOUND_TO_JOB = 
      TraceEvent.HTTP_STREAM_REQUEST_BOUND_TO_JOB.n;
  
    type HTTP_STREAM_REQUEST_BOUND_TO_QUIC_SESSION = 
      TraceEvent.HTTP_STREAM_REQUEST_BOUND_TO_QUIC_SESSION.n;
  
    type HTTP_STREAM_REQUEST_PROTO = 
      TraceEvent.HTTP_STREAM_REQUEST_PROTO.n;
  
    type HTTP_STREAM_REQUEST_STARTED_JOB = 
      TraceEvent.HTTP_STREAM_REQUEST_STARTED_JOB.n;
  
    type HTTP_STREAM_REQUEST = 
      TraceEvent.HTTP_STREAM_REQUEST.b |
      TraceEvent.HTTP_STREAM_REQUEST.e;
  
    type HTTP_TRANSACTION_HTTP2_SEND_REQUEST_HEADERS = 
      TraceEvent.HTTP_TRANSACTION_HTTP2_SEND_REQUEST_HEADERS.n;
  
    type HTTP_TRANSACTION_QUIC_SEND_REQUEST_HEADERS = 
      TraceEvent.HTTP_TRANSACTION_QUIC_SEND_REQUEST_HEADERS.n;
  
    type HTTP_TRANSACTION_READ_BODY = 
      TraceEvent.HTTP_TRANSACTION_READ_BODY.b |
      TraceEvent.HTTP_TRANSACTION_READ_BODY.e;
  
    type HTTP_TRANSACTION_READ_HEADERS = 
      TraceEvent.HTTP_TRANSACTION_READ_HEADERS.b |
      TraceEvent.HTTP_TRANSACTION_READ_HEADERS.e;
  
    type HTTP_TRANSACTION_READ_RESPONSE_HEADERS = 
      TraceEvent.HTTP_TRANSACTION_READ_RESPONSE_HEADERS.n;
  
    type HTTP_TRANSACTION_SEND_REQUEST_HEADERS = 
      TraceEvent.HTTP_TRANSACTION_SEND_REQUEST_HEADERS.n;
  
    type HTTP_TRANSACTION_SEND_REQUEST = 
      TraceEvent.HTTP_TRANSACTION_SEND_REQUEST.b |
      TraceEvent.HTTP_TRANSACTION_SEND_REQUEST.e;
  
    type HTTP2_SESSION_INITIALIZED = 
      TraceEvent.HTTP2_SESSION_INITIALIZED.n;
  
    type HTTP2_SESSION_PING = 
      TraceEvent.HTTP2_SESSION_PING.n;
  
    type HTTP2_SESSION_POOL_FOUND_EXISTING_SESSION_FROM_IP_POOL = 
      TraceEvent.HTTP2_SESSION_POOL_FOUND_EXISTING_SESSION_FROM_IP_POOL.n;
  
    type HTTP2_SESSION_POOL_FOUND_EXISTING_SESSION = 
      TraceEvent.HTTP2_SESSION_POOL_FOUND_EXISTING_SESSION.n;
  
    type HTTP2_SESSION_POOL_IMPORTED_SESSION_FROM_SOCKET = 
      TraceEvent.HTTP2_SESSION_POOL_IMPORTED_SESSION_FROM_SOCKET.n;
  
    type HTTP2_SESSION_RECV_DATA = 
      TraceEvent.HTTP2_SESSION_RECV_DATA.n;
  
    type HTTP2_SESSION_RECV_HEADERS = 
      TraceEvent.HTTP2_SESSION_RECV_HEADERS.n;
  
    type HTTP2_SESSION_RECV_SETTING = 
      TraceEvent.HTTP2_SESSION_RECV_SETTING.n;
  
    type HTTP2_SESSION_RECV_SETTINGS_ACK = 
      TraceEvent.HTTP2_SESSION_RECV_SETTINGS_ACK.n;
  
    type HTTP2_SESSION_RECV_SETTINGS = 
      TraceEvent.HTTP2_SESSION_RECV_SETTINGS.n;
  
    type HTTP2_SESSION_RECV_WINDOW_UPDATE = 
      TraceEvent.HTTP2_SESSION_RECV_WINDOW_UPDATE.n;
  
    type HTTP2_SESSION_SEND_HEADERS = 
      TraceEvent.HTTP2_SESSION_SEND_HEADERS.n;
  
    type HTTP2_SESSION_SEND_SETTINGS_ACK = 
      TraceEvent.HTTP2_SESSION_SEND_SETTINGS_ACK.n;
  
    type HTTP2_SESSION_SEND_SETTINGS = 
      TraceEvent.HTTP2_SESSION_SEND_SETTINGS.n;
  
    type HTTP2_SESSION_SEND_WINDOW_UPDATE = 
      TraceEvent.HTTP2_SESSION_SEND_WINDOW_UPDATE.n;
  
    type HTTP2_SESSION_UPDATE_RECV_WINDOW = 
      TraceEvent.HTTP2_SESSION_UPDATE_RECV_WINDOW.n;
  
    type HTTP2_SESSION_UPDATE_SEND_WINDOW = 
      TraceEvent.HTTP2_SESSION_UPDATE_SEND_WINDOW.n;
  
    type HTTP2_SESSION_UPDATE_STREAMS_SEND_WINDOW_SIZE = 
      TraceEvent.HTTP2_SESSION_UPDATE_STREAMS_SEND_WINDOW_SIZE.n;
  
    type HTTP2_SESSION = 
      TraceEvent.HTTP2_SESSION.b;
  
    type HTTP2_STREAM_UPDATE_RECV_WINDOW = 
      TraceEvent.HTTP2_STREAM_UPDATE_RECV_WINDOW.n;
  
    type HTTP2_STREAM_UPDATE_SEND_WINDOW = 
      TraceEvent.HTTP2_STREAM_UPDATE_SEND_WINDOW.n;
  
    type Idle_tq = 
      TraceEvent.Idle_tq.C;
  
    type ImageDecodeTask = 
      TraceEvent.ImageDecodeTask.B |
      TraceEvent.ImageDecodeTask.E;
  
    type Input_tq = 
      TraceEvent.Input_tq.C;
  
    type InputEventSentBlocking = 
      TraceEvent.InputEventSentBlocking.I;
  
    type InputMsg_SetFocus = 
      TraceEvent.InputMsg_SetFocus.X;
  
    type InstallConditionalFeatures = 
      TraceEvent.InstallConditionalFeatures.X;
  
    type InteractiveTime = 
      TraceEvent.InteractiveTime.R;
  
    type InvalidateLayout = 
      TraceEvent.InvalidateLayout.I;
  
    type Ipc_tq = 
      TraceEvent.Ipc_tq.C;
  
    type IPCChannel = 
      TraceEvent.IPCChannel.X;
  
    type Is_gesture_active = 
      TraceEvent.Is_gesture_active.C;
  
    type KeyframeModel = 
      TraceEvent.KeyframeModel.F |
      TraceEvent.KeyframeModel.S;
  
    type LaunchProcess = 
      TraceEvent.LaunchProcess.X;
  
    type LayerId = 
      TraceEvent.LayerId.D |
      TraceEvent.LayerId.N;
  
    type LayerInvalidationTracking = 
      TraceEvent.LayerInvalidationTracking.I;
  
    type Layout = 
      TraceEvent.Layout.B |
      TraceEvent.Layout.E;
  
    type LayoutInvalidationTracking = 
      TraceEvent.LayoutInvalidationTracking.I;
  
    type LoadAnyStartablePendingRequests = 
      TraceEvent.LoadAnyStartablePendingRequests.X;
  
    type LoadEndeventUtils = 
      TraceEvent.LoadEndeventUtils.R;
  
    type LoadEndpixelQueue = 
      TraceEvent.LoadEndpixelQueue.R;
  
    type LoadEventEnd = 
      TraceEvent.LoadEventEnd.R;
  
    type LoadEventStart = 
      TraceEvent.LoadEventStart.R;
  
    type LoadFinished = 
      TraceEvent.LoadFinished.I;
  
    type LoadStarteventUtils = 
      TraceEvent.LoadStarteventUtils.R;
  
    type LoadStartpixelQueue = 
      TraceEvent.LoadStartpixelQueue.R;
  
    type LongTask = 
      TraceEvent.LongTask.I;
  
    type Lteu = 
      TraceEvent.Lteu.b |
      TraceEvent.Lteu.e;
  
    type Ltpq = 
      TraceEvent.Ltpq.b |
      TraceEvent.Ltpq.e;
  
    type MainThreadLatency = 
      TraceEvent.MainThreadLatency.C;
  
    type MainThreadSchedulerIdlePeriod = 
      TraceEvent.MainThreadSchedulerIdlePeriod.F |
      TraceEvent.MainThreadSchedulerIdlePeriod.S |
      TraceEvent.MainThreadSchedulerIdlePeriod.T;
  
    type MajorGC = 
      TraceEvent.MajorGC.B |
      TraceEvent.MajorGC.E;
  
    type Mark_test = 
      TraceEvent.Mark_test.R;
  
    type MarkAsMainFrame = 
      TraceEvent.MarkAsMainFrame.I;
  
    type MarkDOMContent = 
      TraceEvent.MarkDOMContent.I;
  
    type MarkLoad = 
      TraceEvent.MarkLoad.I;
  
    type Measure_test = 
      TraceEvent.Measure_test.b |
      TraceEvent.Measure_test.e;
  
    type MediaPlayerDelegateHostMsg_OnMutedStatusChanged = 
      TraceEvent.MediaPlayerDelegateHostMsg_OnMutedStatusChanged.X;
  
    type MemoryUsage = 
      TraceEvent.MemoryUsage.C;
  
    type MinorGC = 
      TraceEvent.MinorGC.B |
      TraceEvent.MinorGC.E;
  
    type ModelNeutralWriteTransaction = 
      TraceEvent.ModelNeutralWriteTransaction.B |
      TraceEvent.ModelNeutralWriteTransaction.E;
  
    type Moredamageexpectedsoon = 
      TraceEvent.Moredamageexpectedsoon.I;
  
    type NavigationHandle = 
      TraceEvent.NavigationHandle.F |
      TraceEvent.NavigationHandle.S |
      TraceEvent.NavigationHandle.T;
  
    type NavigationRequest = 
      TraceEvent.NavigationRequest.F |
      TraceEvent.NavigationRequest.S |
      TraceEvent.NavigationRequest.T;
  
    type NavigationStart = 
      TraceEvent.NavigationStart.R;
  
    type NavigationStartToCommit = 
      TraceEvent.NavigationStartToCommit.F |
      TraceEvent.NavigationStartToCommit.S;
  
    type NavigationtimeToResponseStarted = 
      TraceEvent.NavigationtimeToResponseStarted.F |
      TraceEvent.NavigationtimeToResponseStarted.S;
  
    type NavigationTimingnavigationStart = 
      TraceEvent.NavigationTimingnavigationStart.I;
  
    type NeedsBeginFrameChanged = 
      TraceEvent.NeedsBeginFrameChanged.I;
  
    type NeedsTickAnimations = 
      TraceEvent.NeedsTickAnimations.I;
  
    type NETWORK_DELEGATE_BEFORE_START_TRANSACTION = 
      TraceEvent.NETWORK_DELEGATE_BEFORE_START_TRANSACTION.b |
      TraceEvent.NETWORK_DELEGATE_BEFORE_START_TRANSACTION.e;
  
    type NETWORK_DELEGATE_BEFORE_URL_REQUEST = 
      TraceEvent.NETWORK_DELEGATE_BEFORE_URL_REQUEST.b |
      TraceEvent.NETWORK_DELEGATE_BEFORE_URL_REQUEST.e;
  
    type NETWORK_DELEGATE_HEADERS_RECEIVED = 
      TraceEvent.NETWORK_DELEGATE_HEADERS_RECEIVED.b |
      TraceEvent.NETWORK_DELEGATE_HEADERS_RECEIVED.e;
  
    type NETWORK_QUALITY_CHANGED = 
      TraceEvent.NETWORK_QUALITY_CHANGED.n;
  
    type NetworkHintsMsg_DNSPrefetch = 
      TraceEvent.NetworkHintsMsg_DNSPrefetch.X;
  
    type Nodamageyet = 
      TraceEvent.Nodamageyet.I;
  
    type NotStartingIdlePeriodBecauseDeadlineIsTooClose = 
      TraceEvent.NotStartingIdlePeriodBecauseDeadlineIsTooClose.X;
  
    type Num_cpus = 
      TraceEvent.Num_cpus.M;
  
    type Obmark0c_search = 
      TraceEvent.Obmark0c_search.R;
  
    type Obmark0odbMB_120 = 
      TraceEvent.Obmark0odbMB_120.R;
  
    type Obmark0odbTR_11 = 
      TraceEvent.Obmark0odbTR_11.R;
  
    type Obmark0renderMB_120 = 
      TraceEvent.Obmark0renderMB_120.R;
  
    type Obmark0renderTR_11 = 
      TraceEvent.Obmark0renderTR_11.R;
  
    type Obmark0start = 
      TraceEvent.Obmark0start.R;
  
    type Obmark1c_foundMB_120 = 
      TraceEvent.Obmark1c_foundMB_120.R;
  
    type Obmark1c_foundTR_11 = 
      TraceEvent.Obmark1c_foundTR_11.R;
  
    type Obmark1odb_rMB_120 = 
      TraceEvent.Obmark1odb_rMB_120.R;
  
    type Obmark1odb_rTR_11 = 
      TraceEvent.Obmark1odb_rTR_11.R;
  
    type Obmark1renderedMB_120 = 
      TraceEvent.Obmark1renderedMB_120.R;
  
    type Obmark1renderedTR_11 = 
      TraceEvent.Obmark1renderedTR_11.R;
  
    type Obmeasurec_foundMB_120 = 
      TraceEvent.Obmeasurec_foundMB_120.b |
      TraceEvent.Obmeasurec_foundMB_120.e;
  
    type Obmeasurec_foundTR_11 = 
      TraceEvent.Obmeasurec_foundTR_11.b |
      TraceEvent.Obmeasurec_foundTR_11.e;
  
    type Obmeasureodb_rMB_120 = 
      TraceEvent.Obmeasureodb_rMB_120.b |
      TraceEvent.Obmeasureodb_rMB_120.e;
  
    type Obmeasureodb_rTR_11 = 
      TraceEvent.Obmeasureodb_rTR_11.b |
      TraceEvent.Obmeasureodb_rTR_11.e;
  
    type ObmeasureodbMB_120 = 
      TraceEvent.ObmeasureodbMB_120.b |
      TraceEvent.ObmeasureodbMB_120.e;
  
    type ObmeasureodbTR_11 = 
      TraceEvent.ObmeasureodbTR_11.b |
      TraceEvent.ObmeasureodbTR_11.e;
  
    type ObmeasurerenderedMB_120 = 
      TraceEvent.ObmeasurerenderedMB_120.b |
      TraceEvent.ObmeasurerenderedMB_120.e;
  
    type ObmeasurerenderedTR_11 = 
      TraceEvent.ObmeasurerenderedTR_11.b |
      TraceEvent.ObmeasurerenderedTR_11.e;
  
    type OnIdleTaskPosted = 
      TraceEvent.OnIdleTaskPosted.X;
  
    type OnIdleTaskPostedOnMainThread = 
      TraceEvent.OnIdleTaskPostedOnMainThread.X;
  
    type OnLibevent = 
      TraceEvent.OnLibevent.X;
  
    type OnLoad = 
      TraceEvent.OnLoad.b |
      TraceEvent.OnLoad.e;
  
    type OptimizelyEnd = 
      TraceEvent.OptimizelyEnd.R;
  
    type OptimizelyStart = 
      TraceEvent.OptimizelyStart.R;
  
    type OptimizelyTime = 
      TraceEvent.OptimizelyTime.b |
      TraceEvent.OptimizelyTime.e;
  
    type PageLoad = 
      TraceEvent.PageLoad.b |
      TraceEvent.PageLoad.e;
  
    type PageMsg_SetHistoryOffsetAndLength = 
      TraceEvent.PageMsg_SetHistoryOffsetAndLength.X;
  
    type PageMsg_UpdateScreenInfo = 
      TraceEvent.PageMsg_UpdateScreenInfo.X;
  
    type PageMsg_UpdateWindowScreenRect = 
      TraceEvent.PageMsg_UpdateWindowScreenRect.X;
  
    type PageMsg_WasHidden = 
      TraceEvent.PageMsg_WasHidden.X;
  
    type PageMsg_WasShown = 
      TraceEvent.PageMsg_WasShown.X;
  
    type Paint = 
      TraceEvent.Paint.X;
  
    type PaintImage = 
      TraceEvent.PaintImage.X;
  
    type PaintInvalidationTracking = 
      TraceEvent.PaintInvalidationTracking.I;
  
    type PaintNonDefaultBackgroundColor = 
      TraceEvent.PaintNonDefaultBackgroundColor.R;
  
    type ParseAuthorStyleSheet = 
      TraceEvent.ParseAuthorStyleSheet.X;
  
    type ParseHTML = 
      TraceEvent.ParseHTML.B |
      TraceEvent.ParseHTML.E;
  
    type PlatformResourceSendRequest = 
      TraceEvent.PlatformResourceSendRequest.B |
      TraceEvent.PlatformResourceSendRequest.E;
  
    type PostCommit = 
      TraceEvent.PostCommit.B |
      TraceEvent.PostCommit.E;
  
    type PrintMsg_SetPrintingEnabled = 
      TraceEvent.PrintMsg_SetPrintingEnabled.X;
  
    type Process_labels = 
      TraceEvent.Process_labels.M;
  
    type Process_name = 
      TraceEvent.Process_name.M;
  
    type Process_sort_index = 
      TraceEvent.Process_sort_index.M;
  
    type Process_uptime_seconds = 
      TraceEvent.Process_uptime_seconds.M;
  
    type ProcessCommitResponse = 
      TraceEvent.ProcessCommitResponse.X;
  
    type ProcessMemoryDump = 
      TraceEvent.ProcessMemoryDump.b |
      TraceEvent.ProcessMemoryDump.e;
  
    type ProcessPriority = 
      TraceEvent.ProcessPriority.I;
  
    type Profile = 
      TraceEvent.Profile.P;
  
    type ProfileChunk = 
      TraceEvent.ProfileChunk.P;
  
    type PROXY_RESOLUTION_SERVICE_RESOLVED_PROXY_LIST = 
      TraceEvent.PROXY_RESOLUTION_SERVICE_RESOLVED_PROXY_LIST.n;
  
    type PROXY_RESOLUTION_SERVICE = 
      TraceEvent.PROXY_RESOLUTION_SERVICE.b |
      TraceEvent.PROXY_RESOLUTION_SERVICE.e;
  
    type QUIC_CHROMIUM_CLIENT_STREAM_READ_RESPONSE_HEADERS = 
      TraceEvent.QUIC_CHROMIUM_CLIENT_STREAM_READ_RESPONSE_HEADERS.n;
  
    type QUIC_CHROMIUM_CLIENT_STREAM_SEND_REQUEST_HEADERS = 
      TraceEvent.QUIC_CHROMIUM_CLIENT_STREAM_SEND_REQUEST_HEADERS.n;
  
    type QUIC_CONNECTION_MIGRATION_MODE = 
      TraceEvent.QUIC_CONNECTION_MIGRATION_MODE.n;
  
    type QUIC_SESSION_ACK_FRAME_SENT = 
      TraceEvent.QUIC_SESSION_ACK_FRAME_SENT.n;
  
    type QUIC_SESSION_CERTIFICATE_VERIFIED = 
      TraceEvent.QUIC_SESSION_CERTIFICATE_VERIFIED.n;
  
    type QUIC_SESSION_CLOSED = 
      TraceEvent.QUIC_SESSION_CLOSED.n;
  
    type QUIC_SESSION_CRYPTO_HANDSHAKE_MESSAGE_RECEIVED = 
      TraceEvent.QUIC_SESSION_CRYPTO_HANDSHAKE_MESSAGE_RECEIVED.n;
  
    type QUIC_SESSION_CRYPTO_HANDSHAKE_MESSAGE_SENT = 
      TraceEvent.QUIC_SESSION_CRYPTO_HANDSHAKE_MESSAGE_SENT.n;
  
    type QUIC_SESSION_PACKET_AUTHENTICATED = 
      TraceEvent.QUIC_SESSION_PACKET_AUTHENTICATED.n;
  
    type QUIC_SESSION_PACKET_LOST = 
      TraceEvent.QUIC_SESSION_PACKET_LOST.n;
  
    type QUIC_SESSION_PACKET_RECEIVED = 
      TraceEvent.QUIC_SESSION_PACKET_RECEIVED.n;
  
    type QUIC_SESSION_PACKET_SENT = 
      TraceEvent.QUIC_SESSION_PACKET_SENT.n;
  
    type QUIC_SESSION_PING_FRAME_SENT = 
      TraceEvent.QUIC_SESSION_PING_FRAME_SENT.n;
  
    type QUIC_SESSION_RST_STREAM_FRAME_RECEIVED = 
      TraceEvent.QUIC_SESSION_RST_STREAM_FRAME_RECEIVED.n;
  
    type QUIC_SESSION_RST_STREAM_FRAME_SENT = 
      TraceEvent.QUIC_SESSION_RST_STREAM_FRAME_SENT.n;
  
    type QUIC_SESSION_STREAM_FRAME_RECEIVED = 
      TraceEvent.QUIC_SESSION_STREAM_FRAME_RECEIVED.n;
  
    type QUIC_SESSION_STREAM_FRAME_SENT = 
      TraceEvent.QUIC_SESSION_STREAM_FRAME_SENT.n;
  
    type QUIC_SESSION_UNAUTHENTICATED_PACKET_HEADER_RECEIVED = 
      TraceEvent.QUIC_SESSION_UNAUTHENTICATED_PACKET_HEADER_RECEIVED.n;
  
    type QUIC_SESSION_VERSION_NEGOTIATED = 
      TraceEvent.QUIC_SESSION_VERSION_NEGOTIATED.n;
  
    type QUIC_SESSION = 
      TraceEvent.QUIC_SESSION.b |
      TraceEvent.QUIC_SESSION.e;
  
    type QUIC_STREAM_FACTORY_JOB_BOUND_TO_HTTP_STREAM_JOB = 
      TraceEvent.QUIC_STREAM_FACTORY_JOB_BOUND_TO_HTTP_STREAM_JOB.n;
  
    type QUIC_STREAM_FACTORY_JOB_CONNECT = 
      TraceEvent.QUIC_STREAM_FACTORY_JOB_CONNECT.b |
      TraceEvent.QUIC_STREAM_FACTORY_JOB_CONNECT.e;
  
    type QUIC_STREAM_FACTORY_JOB = 
      TraceEvent.QUIC_STREAM_FACTORY_JOB.b |
      TraceEvent.QUIC_STREAM_FACTORY_JOB.e;
  
    type RasterTask = 
      TraceEvent.RasterTask.B |
      TraceEvent.RasterTask.E;
  
    type ReadTransaction = 
      TraceEvent.ReadTransaction.B |
      TraceEvent.ReadTransaction.E;
  
    type RedirectEnd = 
      TraceEvent.RedirectEnd.R;
  
    type RedirectStart = 
      TraceEvent.RedirectStart.R;
  
    type RendererAudioState = 
      TraceEvent.RendererAudioState.S |
      TraceEvent.RendererAudioState.T;
  
    type RendererProcessType = 
      TraceEvent.RendererProcessType.S |
      TraceEvent.RendererProcessType.T;
  
    type RendererVisibility = 
      TraceEvent.RendererVisibility.F |
      TraceEvent.RendererVisibility.S |
      TraceEvent.RendererVisibility.T;
  
    type RenderFrame = 
      TraceEvent.RenderFrame.D |
      TraceEvent.RenderFrame.N |
      TraceEvent.RenderFrame.O;
  
    type RenderFrameHostImplBeforeUnload = 
      TraceEvent.RenderFrameHostImplBeforeUnload.F |
      TraceEvent.RenderFrameHostImplBeforeUnload.S;
  
    type RenderPass = 
      TraceEvent.RenderPass.D;
  
    type RenderWorker0x7f8e1500b000 = 
      TraceEvent.RenderWorker0x7f8e1500b000.b |
      TraceEvent.RenderWorker0x7f8e1500b000.e |
      TraceEvent.RenderWorker0x7f8e1500b000.F |
      TraceEvent.RenderWorker0x7f8e1500b000.S;
  
    type RenderWorker0x7fa57a039c00 = 
      TraceEvent.RenderWorker0x7fa57a039c00.b |
      TraceEvent.RenderWorker0x7fa57a039c00.e |
      TraceEvent.RenderWorker0x7fa57a039c00.F |
      TraceEvent.RenderWorker0x7fa57a039c00.S;
  
    type RenderWorker0x7fcab207b200 = 
      TraceEvent.RenderWorker0x7fcab207b200.b |
      TraceEvent.RenderWorker0x7fcab207b200.e |
      TraceEvent.RenderWorker0x7fcab207b200.F |
      TraceEvent.RenderWorker0x7fcab207b200.S;
  
    type RenderWorker0x7fd50f00aa00 = 
      TraceEvent.RenderWorker0x7fd50f00aa00.b |
      TraceEvent.RenderWorker0x7fd50f00aa00.e |
      TraceEvent.RenderWorker0x7fd50f00aa00.F |
      TraceEvent.RenderWorker0x7fd50f00aa00.S;
  
    type RenderWorker0x7fdabc07b400 = 
      TraceEvent.RenderWorker0x7fdabc07b400.b |
      TraceEvent.RenderWorker0x7fdabc07b400.e |
      TraceEvent.RenderWorker0x7fdabc07b400.F |
      TraceEvent.RenderWorker0x7fdabc07b400.S;
  
    type RenderWorker0x7fdefa843000 = 
      TraceEvent.RenderWorker0x7fdefa843000.b |
      TraceEvent.RenderWorker0x7fdefa843000.e |
      TraceEvent.RenderWorker0x7fdefa843000.F |
      TraceEvent.RenderWorker0x7fdefa843000.S;
  
    type RenderWorker0x7fe5c4821c00 = 
      TraceEvent.RenderWorker0x7fe5c4821c00.b |
      TraceEvent.RenderWorker0x7fe5c4821c00.e |
      TraceEvent.RenderWorker0x7fe5c4821c00.F |
      TraceEvent.RenderWorker0x7fe5c4821c00.S;
  
    type REQUEST_ALIVE = 
      TraceEvent.REQUEST_ALIVE.b |
      TraceEvent.REQUEST_ALIVE.e;
  
    type RequestAnimationFrame = 
      TraceEvent.RequestAnimationFrame.I;
  
    type RequestIdleCallback = 
      TraceEvent.RequestIdleCallback.I;
  
    type RequestMainThreadFrame = 
      TraceEvent.RequestMainThreadFrame.I;
  
    type RequestStart = 
      TraceEvent.RequestStart.R;
  
    type ResourceChangePriority = 
      TraceEvent.ResourceChangePriority.I |
      TraceEvent.ResourceChangePriority.X;
  
    type ResourceFinish = 
      TraceEvent.ResourceFinish.I;
  
    type ResourceLoad = 
      TraceEvent.ResourceLoad.b |
      TraceEvent.ResourceLoad.e;
  
    type ResourcePrioritySet = 
      TraceEvent.ResourcePrioritySet.n;
  
    type ResourceReceivedData = 
      TraceEvent.ResourceReceivedData.I;
  
    type ResourceReceiveResponse = 
      TraceEvent.ResourceReceiveResponse.I;
  
    type ResourceSendRequest = 
      TraceEvent.ResourceSendRequest.I;
  
    type ResponseEnd = 
      TraceEvent.ResponseEnd.R;
  
    type RunMicrotasks = 
      TraceEvent.RunMicrotasks.B |
      TraceEvent.RunMicrotasks.E |
      TraceEvent.RunMicrotasks.X;
  
    type RunTask = 
      TraceEvent.RunTask.X;
  
    type RunWithFaviconResults = 
      TraceEvent.RunWithFaviconResults.X;
  
    type ScheduledTasks = 
      TraceEvent.ScheduledTasks.F |
      TraceEvent.ScheduledTasks.S |
      TraceEvent.ScheduledTasks.T;
  
    type SchedulerWorkerThreadactive = 
      TraceEvent.SchedulerWorkerThreadactive.B |
      TraceEvent.SchedulerWorkerThreadactive.E;
  
    type SchedulerWorkerThreadborn = 
      TraceEvent.SchedulerWorkerThreadborn.I;
  
    type SchedulerWorkerThreaddead = 
      TraceEvent.SchedulerWorkerThreaddead.I;
  
    type ScheduleStyleInvalidationTracking = 
      TraceEvent.ScheduleStyleInvalidationTracking.I;
  
    type ScheduleStyleRecalculation = 
      TraceEvent.ScheduleStyleRecalculation.I;
  
    type ScopedBlockingCall = 
      TraceEvent.ScopedBlockingCall.B |
      TraceEvent.ScopedBlockingCall.E;
  
    type ScopedBlockingCallWithBaseSyncPrimitives = 
      TraceEvent.ScopedBlockingCallWithBaseSyncPrimitives.B |
      TraceEvent.ScopedBlockingCallWithBaseSyncPrimitives.E;
  
    type Screenshot = 
      TraceEvent.Screenshot.O;
  
    type SequenceEnabled = 
      TraceEvent.SequenceEnabled.F;
  
    type SetIdlePeriodState = 
      TraceEvent.SetIdlePeriodState.X;
  
    type SetLayerTreeId = 
      TraceEvent.SetLayerTreeId.I;
  
    type ShCompile = 
      TraceEvent.ShCompile.X;
  
    type SIGNED_CERTIFICATE_TIMESTAMPS_CHECKED = 
      TraceEvent.SIGNED_CERTIFICATE_TIMESTAMPS_CHECKED.n;
  
    type SIGNED_CERTIFICATE_TIMESTAMPS_RECEIVED = 
      TraceEvent.SIGNED_CERTIFICATE_TIMESTAMPS_RECEIVED.n;
  
    type SIMPLE_CACHE_ENTRY_CLOSE_BEGIN = 
      TraceEvent.SIMPLE_CACHE_ENTRY_CLOSE_BEGIN.n;
  
    type SIMPLE_CACHE_ENTRY_CLOSE_CALL = 
      TraceEvent.SIMPLE_CACHE_ENTRY_CLOSE_CALL.n;
  
    type SIMPLE_CACHE_ENTRY_CLOSE_END = 
      TraceEvent.SIMPLE_CACHE_ENTRY_CLOSE_END.n;
  
    type SIMPLE_CACHE_ENTRY_CREATE_BEGIN = 
      TraceEvent.SIMPLE_CACHE_ENTRY_CREATE_BEGIN.n;
  
    type SIMPLE_CACHE_ENTRY_CREATE_CALL = 
      TraceEvent.SIMPLE_CACHE_ENTRY_CREATE_CALL.n;
  
    type SIMPLE_CACHE_ENTRY_CREATE_END = 
      TraceEvent.SIMPLE_CACHE_ENTRY_CREATE_END.n;
  
    type SIMPLE_CACHE_ENTRY_CREATE_OPTIMISTIC = 
      TraceEvent.SIMPLE_CACHE_ENTRY_CREATE_OPTIMISTIC.n;
  
    type SIMPLE_CACHE_ENTRY_DOOM_BEGIN = 
      TraceEvent.SIMPLE_CACHE_ENTRY_DOOM_BEGIN.n;
  
    type SIMPLE_CACHE_ENTRY_DOOM_CALL = 
      TraceEvent.SIMPLE_CACHE_ENTRY_DOOM_CALL.n;
  
    type SIMPLE_CACHE_ENTRY_DOOM_END = 
      TraceEvent.SIMPLE_CACHE_ENTRY_DOOM_END.n;
  
    type SIMPLE_CACHE_ENTRY_OPEN_BEGIN = 
      TraceEvent.SIMPLE_CACHE_ENTRY_OPEN_BEGIN.n;
  
    type SIMPLE_CACHE_ENTRY_OPEN_CALL = 
      TraceEvent.SIMPLE_CACHE_ENTRY_OPEN_CALL.n;
  
    type SIMPLE_CACHE_ENTRY_OPEN_END = 
      TraceEvent.SIMPLE_CACHE_ENTRY_OPEN_END.n;
  
    type SIMPLE_CACHE_ENTRY_READ_BEGIN = 
      TraceEvent.SIMPLE_CACHE_ENTRY_READ_BEGIN.n;
  
    type SIMPLE_CACHE_ENTRY_READ_CALL = 
      TraceEvent.SIMPLE_CACHE_ENTRY_READ_CALL.n;
  
    type SIMPLE_CACHE_ENTRY_READ_END = 
      TraceEvent.SIMPLE_CACHE_ENTRY_READ_END.n;
  
    type SIMPLE_CACHE_ENTRY_SET_KEY = 
      TraceEvent.SIMPLE_CACHE_ENTRY_SET_KEY.n;
  
    type SIMPLE_CACHE_ENTRY_WRITE_BEGIN = 
      TraceEvent.SIMPLE_CACHE_ENTRY_WRITE_BEGIN.n;
  
    type SIMPLE_CACHE_ENTRY_WRITE_CALL = 
      TraceEvent.SIMPLE_CACHE_ENTRY_WRITE_CALL.n;
  
    type SIMPLE_CACHE_ENTRY_WRITE_END = 
      TraceEvent.SIMPLE_CACHE_ENTRY_WRITE_END.n;
  
    type SIMPLE_CACHE_ENTRY_WRITE_OPTIMISTIC = 
      TraceEvent.SIMPLE_CACHE_ENTRY_WRITE_OPTIMISTIC.n;
  
    type SIMPLE_CACHE_ENTRY = 
      TraceEvent.SIMPLE_CACHE_ENTRY.b |
      TraceEvent.SIMPLE_CACHE_ENTRY.e;
  
    type Skiabudget = 
      TraceEvent.Skiabudget.C;
  
    type SkipBeginImplFrameToReduceLatency = 
      TraceEvent.SkipBeginImplFrameToReduceLatency.I;
  
    type SkipBeginMainFrameToReduceLatency = 
      TraceEvent.SkipBeginMainFrameToReduceLatency.I;
  
    type SmallPathOp = 
      TraceEvent.SmallPathOp.X;
  
    type SOCKET_ALIVE = 
      TraceEvent.SOCKET_ALIVE.b |
      TraceEvent.SOCKET_ALIVE.e;
  
    type SOCKET_BYTES_RECEIVED = 
      TraceEvent.SOCKET_BYTES_RECEIVED.n;
  
    type SOCKET_BYTES_SENT = 
      TraceEvent.SOCKET_BYTES_SENT.n;
  
    type SOCKET_IN_USE = 
      TraceEvent.SOCKET_IN_USE.b |
      TraceEvent.SOCKET_IN_USE.e;
  
    type SOCKET_POOL_BOUND_TO_CONNECT_JOB = 
      TraceEvent.SOCKET_POOL_BOUND_TO_CONNECT_JOB.n;
  
    type SOCKET_POOL_BOUND_TO_SOCKET = 
      TraceEvent.SOCKET_POOL_BOUND_TO_SOCKET.n;
  
    type SOCKET_POOL_CONNECT_JOB_CONNECT = 
      TraceEvent.SOCKET_POOL_CONNECT_JOB_CONNECT.b |
      TraceEvent.SOCKET_POOL_CONNECT_JOB_CONNECT.e;
  
    type SOCKET_POOL_CONNECT_JOB = 
      TraceEvent.SOCKET_POOL_CONNECT_JOB.b |
      TraceEvent.SOCKET_POOL_CONNECT_JOB.e;
  
    type SOCKET_POOL_REUSED_AN_EXISTING_SOCKET = 
      TraceEvent.SOCKET_POOL_REUSED_AN_EXISTING_SOCKET.n;
  
    type SOCKET_POOL = 
      TraceEvent.SOCKET_POOL.b |
      TraceEvent.SOCKET_POOL.e;
  
    type SpeedIndex = 
      TraceEvent.SpeedIndex.b |
      TraceEvent.SpeedIndex.e;
  
    type SSL_CONNECT = 
      TraceEvent.SSL_CONNECT.b |
      TraceEvent.SSL_CONNECT.e;
  
    type SSL_HANDSHAKE_MESSAGE_RECEIVED = 
      TraceEvent.SSL_HANDSHAKE_MESSAGE_RECEIVED.n;
  
    type SSL_HANDSHAKE_MESSAGE_SENT = 
      TraceEvent.SSL_HANDSHAKE_MESSAGE_SENT.n;
  
    type SSL_SOCKET_BYTES_RECEIVED = 
      TraceEvent.SSL_SOCKET_BYTES_RECEIVED.n;
  
    type SSL_SOCKET_BYTES_SENT = 
      TraceEvent.SSL_SOCKET_BYTES_SENT.n;
  
    type StackCpuSampling = 
      TraceEvent.StackCpuSampling.I;
  
    type StartIdlePeriod = 
      TraceEvent.StartIdlePeriod.X;
  
    type StyleRecalcInvalidationTracking = 
      TraceEvent.StyleRecalcInvalidationTracking.I;
  
    type SubImage = 
      TraceEvent.SubImage.X;
  
    type Submitrejectedtoevictedsurface = 
      TraceEvent.Submitrejectedtoevictedsurface.I;
  
    type SubresourceFilterMsg_SetRulesetForProcess = 
      TraceEvent.SubresourceFilterMsg_SetRulesetForProcess.X;
  
    type SubresourceFilterSBCheck = 
      TraceEvent.SubresourceFilterSBCheck.F |
      TraceEvent.SubresourceFilterSBCheck.S;
  
    type Subthread_default_tq = 
      TraceEvent.Subthread_default_tq.C;
  
    type SwapBuffers = 
      TraceEvent.SwapBuffers.I;
  
    type Swapskipped = 
      TraceEvent.Swapskipped.I;
  
    type Swapthrottled = 
      TraceEvent.Swapthrottled.I;
  
    type TabSwitchVisibilityRequest = 
      TraceEvent.TabSwitchVisibilityRequest.F |
      TraceEvent.TabSwitchVisibilityRequest.S;
  
    type TaskQueueThrottler_TaskQueueThrottled = 
      TraceEvent.TaskQueueThrottler_TaskQueueThrottled.X;
  
    type TaskQueueThrottler_TaskQueueUnthrottled = 
      TraceEvent.TaskQueueThrottler_TaskQueueUnthrottled.X;
  
    type TaskSchedulerPostTask = 
      TraceEvent.TaskSchedulerPostTask.X;
  
    type TaskSchedulerRunTask = 
      TraceEvent.TaskSchedulerRunTask.X;
  
    type TCP_CLIENT_SOCKET_POOL_REQUESTED_SOCKET = 
      TraceEvent.TCP_CLIENT_SOCKET_POOL_REQUESTED_SOCKET.n;
  
    type TCP_CONNECT_ATTEMPT = 
      TraceEvent.TCP_CONNECT_ATTEMPT.b |
      TraceEvent.TCP_CONNECT_ATTEMPT.e;
  
    type TCP_CONNECT = 
      TraceEvent.TCP_CONNECT.b |
      TraceEvent.TCP_CONNECT.e;
  
    type TessellatingPathOp = 
      TraceEvent.TessellatingPathOp.X;
  
    type TextureOp = 
      TraceEvent.TextureOp.X;
  
    type Thread_name = 
      TraceEvent.Thread_name.M;
  
    type Thread_sort_index = 
      TraceEvent.Thread_sort_index.M;
  
    type TimerFire = 
      TraceEvent.TimerFire.X;
  
    type TimerInstall = 
      TraceEvent.TimerInstall.I;
  
    type TimerRemove = 
      TraceEvent.TimerRemove.I;
  
    type TimeStamp = 
      TraceEvent.TimeStamp.I;
  
    type TimeToDomReady = 
      TraceEvent.TimeToDomReady.b |
      TraceEvent.TimeToDomReady.e;
  
    type TimeToInteractive = 
      TraceEvent.TimeToInteractive.b |
      TraceEvent.TimeToInteractive.e;
  
    type TimeToZonesAndDomReady = 
      TraceEvent.TimeToZonesAndDomReady.b |
      TraceEvent.TimeToZonesAndDomReady.e;
  
    type TimeToZonesComplete = 
      TraceEvent.TimeToZonesComplete.b |
      TraceEvent.TimeToZonesComplete.e;
  
    type TopLevel = 
      TraceEvent.TopLevel.O;
  
    type Trace_buffer_overflowed = 
      TraceEvent.Trace_buffer_overflowed.M;
  
    type TracingHostMsg_ChildSupportsTracing = 
      TraceEvent.TracingHostMsg_ChildSupportsTracing.X;
  
    type TracingMsg_SetTracingProcessId = 
      TraceEvent.TracingMsg_SetTracingProcessId.X;
  
    type TracingSessionIdForWorker = 
      TraceEvent.TracingSessionIdForWorker.I;
  
    type TracingStartedInBrowser = 
      TraceEvent.TracingStartedInBrowser.I;
  
    type TracingStartedInPage = 
      TraceEvent.TracingStartedInPage.I;
  
    type TransfersBytesPendingOnDisk = 
      TraceEvent.TransfersBytesPendingOnDisk.C;
  
    type TransfersPendingOnDisk = 
      TraceEvent.TransfersPendingOnDisk.C;
  
    type TrianglesDrawn = 
      TraceEvent.TrianglesDrawn.C;
  
    type UDP_BYTES_RECEIVED = 
      TraceEvent.UDP_BYTES_RECEIVED.n;
  
    type UDP_BYTES_SENT = 
      TraceEvent.UDP_BYTES_SENT.n;
  
    type UDP_CONNECT = 
      TraceEvent.UDP_CONNECT.b |
      TraceEvent.UDP_CONNECT.e;
  
    type UDP_LOCAL_ADDRESS = 
      TraceEvent.UDP_LOCAL_ADDRESS.n;
  
    type Unknowninterface = 
      TraceEvent.Unknowninterface.X;
  
    type UnloadEventEnd = 
      TraceEvent.UnloadEventEnd.R;
  
    type UnloadEventStart = 
      TraceEvent.UnloadEventStart.R;
  
    type UpdateCounters = 
      TraceEvent.UpdateCounters.I;
  
    type UpdateLayer = 
      TraceEvent.UpdateLayer.B |
      TraceEvent.UpdateLayer.E;
  
    type UpdateLayerTree = 
      TraceEvent.UpdateLayerTree.X;
  
    type UpdateLayoutTree = 
      TraceEvent.UpdateLayoutTree.B |
      TraceEvent.UpdateLayoutTree.E;
  
    type UpdateLongIdlePeriodStateAfterIdleTask = 
      TraceEvent.UpdateLongIdlePeriodStateAfterIdleTask.X;
  
    type UpdateStateFromAnimationDrivers = 
      TraceEvent.UpdateStateFromAnimationDrivers.X;
  
    type UPLOAD_DATA_STREAM_INIT = 
      TraceEvent.UPLOAD_DATA_STREAM_INIT.b |
      TraceEvent.UPLOAD_DATA_STREAM_INIT.e;
  
    type UPLOAD_DATA_STREAM_READ = 
      TraceEvent.UPLOAD_DATA_STREAM_READ.b |
      TraceEvent.UPLOAD_DATA_STREAM_READ.e;
  
    type URL_REQUEST_DELEGATE_RECEIVED_REDIRECT = 
      TraceEvent.URL_REQUEST_DELEGATE_RECEIVED_REDIRECT.b |
      TraceEvent.URL_REQUEST_DELEGATE_RECEIVED_REDIRECT.e;
  
    type URL_REQUEST_DELEGATE_RESPONSE_STARTED = 
      TraceEvent.URL_REQUEST_DELEGATE_RESPONSE_STARTED.b |
      TraceEvent.URL_REQUEST_DELEGATE_RESPONSE_STARTED.e;
  
    type URL_REQUEST_FAKE_RESPONSE_HEADERS_CREATED = 
      TraceEvent.URL_REQUEST_FAKE_RESPONSE_HEADERS_CREATED.n;
  
    type URL_REQUEST_FILTERS_SET = 
      TraceEvent.URL_REQUEST_FILTERS_SET.n;
  
    type URL_REQUEST_JOB_BYTES_READ = 
      TraceEvent.URL_REQUEST_JOB_BYTES_READ.n;
  
    type URL_REQUEST_JOB_FILTERED_BYTES_READ = 
      TraceEvent.URL_REQUEST_JOB_FILTERED_BYTES_READ.n;
  
    type URL_REQUEST_REDIRECT_JOB = 
      TraceEvent.URL_REQUEST_REDIRECT_JOB.n;
  
    type URL_REQUEST_REDIRECTED = 
      TraceEvent.URL_REQUEST_REDIRECTED.n;
  
    type URL_REQUEST_START_JOB = 
      TraceEvent.URL_REQUEST_START_JOB.b |
      TraceEvent.URL_REQUEST_START_JOB.e;
  
    type UserEvent = 
      TraceEvent.UserEvent.I;
  
    type Usingexistingdeadline = 
      TraceEvent.Usingexistingdeadline.I;
  
    type Usingnewdeadline = 
      TraceEvent.Usingnewdeadline.X;
  
    type V8_tq = 
      TraceEvent.V8_tq.C;
  
    type ViewHostMsg_DidContentsPreferredSizeChange = 
      TraceEvent.ViewHostMsg_DidContentsPreferredSizeChange.X;
  
    type ViewHostMsg_DocumentAvailableInMainFrame = 
      TraceEvent.ViewHostMsg_DocumentAvailableInMainFrame.X;
  
    type ViewHostMsg_UpdateZoomLimits = 
      TraceEvent.ViewHostMsg_UpdateZoomLimits.X;
  
    type ViewMsg_EnablePreferredSizeChangedMode = 
      TraceEvent.ViewMsg_EnablePreferredSizeChangedMode.X;
  
    type VisuallyComplete100 = 
      TraceEvent.VisuallyComplete100.b |
      TraceEvent.VisuallyComplete100.e;
  
    type WaitingfornextBeginFrame = 
      TraceEvent.WaitingfornextBeginFrame.I;
  
    type WebContentsImplLoading = 
      TraceEvent.WebContentsImplLoading.F |
      TraceEvent.WebContentsImplLoading.S;
  
    type WidgetHostMsg_Close_ACK = 
      TraceEvent.WidgetHostMsg_Close_ACK.X;
  
    type WidgetHostMsg_DidCommitAndDrawCompositorFrame = 
      TraceEvent.WidgetHostMsg_DidCommitAndDrawCompositorFrame.X;
  
    type WidgetHostMsg_DidFirstVisuallyNonEmptyPaint = 
      TraceEvent.WidgetHostMsg_DidFirstVisuallyNonEmptyPaint.X;
  
    type WidgetHostMsg_FrameSwapMessages = 
      TraceEvent.WidgetHostMsg_FrameSwapMessages.X;
  
    type WidgetHostMsg_HasTouchEventHandlers = 
      TraceEvent.WidgetHostMsg_HasTouchEventHandlers.X;
  
    type WidgetHostMsg_SelectionBoundsChanged = 
      TraceEvent.WidgetHostMsg_SelectionBoundsChanged.X;
  
    type WidgetHostMsg_TextInputStateChanged = 
      TraceEvent.WidgetHostMsg_TextInputStateChanged.X;
  
    type WidgetHostMsg_UpdateScreenRects_ACK = 
      TraceEvent.WidgetHostMsg_UpdateScreenRects_ACK.X;
  
    type WidgetMsg_SetActive = 
      TraceEvent.WidgetMsg_SetActive.X;
  
    type WidgetMsg_SetInheritedEffectiveTouchAction = 
      TraceEvent.WidgetMsg_SetInheritedEffectiveTouchAction.X;
  
    type WidgetMsg_SetIsInert = 
      TraceEvent.WidgetMsg_SetIsInert.X;
  
    type WidgetMsg_SetViewportIntersection = 
      TraceEvent.WidgetMsg_SetViewportIntersection.X;
  
    type WidgetMsg_SynchronizeVisualProperties = 
      TraceEvent.WidgetMsg_SynchronizeVisualProperties.X;
  
    type WidgetMsg_UpdateRenderThrottlingStatus = 
      TraceEvent.WidgetMsg_UpdateRenderThrottlingStatus.X;
  
    type WidgetMsg_UpdateScreenRects = 
      TraceEvent.WidgetMsg_UpdateScreenRects.X;
  
    type WidgetMsg_WasHidden = 
      TraceEvent.WidgetMsg_WasHidden.X;
  
    type WidgetMsg_WasShown = 
      TraceEvent.WidgetMsg_WasShown.X;
  
    type WriteTransaction = 
      TraceEvent.WriteTransaction.B |
      TraceEvent.WriteTransaction.E;
  
    type XHRLoad = 
      TraceEvent.XHRLoad.X;
  
    type XHRReadyStateChange = 
      TraceEvent.XHRReadyStateChange.X;
  
    type YieldParserForScriptBlockingResources = 
      TraceEvent.YieldParserForScriptBlockingResources.X;
  
    type YieldParserForScriptLoad = 
      TraceEvent.YieldParserForScriptLoad.X;
  
    type ZonesAndDomReady = 
      TraceEvent.ZonesAndDomReady.R;
  
    type ZonesReady = 
      TraceEvent.ZonesReady.R;
  
    namespace A {
      interface F extends Base {
        args: {
        
        };
        id: string;
        name: 'a';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
        
        };
        id: string;
        name: 'a';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace AAConvexPathOp {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'AAConvexPathOp';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace AAStrokeRect {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'AAStrokeRect';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace AcquireLock {
      interface X extends Base {
        args: {
          src_file: string;
          src_func: string;
        };
        dur: number;
        name: 'AcquireLock';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ActivateLayerTree {
      interface I extends Base {
        args: {
          frameId: number;
          layerTreeId: number;
        };
        name: 'ActivateLayerTree';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace AddFrameDisplayed {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'AddFrameDisplayed';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ADFUEL {
      type AdFuelDOMContentLoaded = 
        TraceEvent.ADFUEL.AdFuelDOMContentLoaded.R;
    
      type AdFuelInitialized = 
        TraceEvent.ADFUEL.AdFuelInitialized.R;
    
      type AdFuelRequestComplete = 
        TraceEvent.ADFUEL.AdFuelRequestComplete.R;
    
      type AdRenderedad_bnr_atf_01 = 
        TraceEvent.ADFUEL.AdRenderedad_bnr_atf_01.R;
    
      type AdRenderedad_bnr_btf_01 = 
        TraceEvent.ADFUEL.AdRenderedad_bnr_btf_01.R;
    
      type AdRenderedad_mod_35731bb1e = 
        TraceEvent.ADFUEL.AdRenderedad_mod_35731bb1e.R;
    
      type AdRenderedad_oop_float_01 = 
        TraceEvent.ADFUEL.AdRenderedad_oop_float_01.R;
    
      type AdRenderedad_rect_btf_02 = 
        TraceEvent.ADFUEL.AdRenderedad_rect_btf_02.R;
    
      type ApplyingPageLevelTargeting = 
        TraceEvent.ADFUEL.ApplyingPageLevelTargeting.R;
    
      type ApplyingWindowSiteLevelOptions = 
        TraceEvent.ADFUEL.ApplyingWindowSiteLevelOptions.R;
    
      type BuildingSlotad_bnr_atf_01 = 
        TraceEvent.ADFUEL.BuildingSlotad_bnr_atf_01.b |
        TraceEvent.ADFUEL.BuildingSlotad_bnr_atf_01.e;
    
      type BuildingSlotad_bnr_atf_01End = 
        TraceEvent.ADFUEL.BuildingSlotad_bnr_atf_01End.R;
    
      type BuildingSlotad_bnr_atf_01Start = 
        TraceEvent.ADFUEL.BuildingSlotad_bnr_atf_01Start.R;
    
      type BuildingSlotad_bnr_btf_01 = 
        TraceEvent.ADFUEL.BuildingSlotad_bnr_btf_01.b |
        TraceEvent.ADFUEL.BuildingSlotad_bnr_btf_01.e;
    
      type BuildingSlotad_bnr_btf_01End = 
        TraceEvent.ADFUEL.BuildingSlotad_bnr_btf_01End.R;
    
      type BuildingSlotad_bnr_btf_01Start = 
        TraceEvent.ADFUEL.BuildingSlotad_bnr_btf_01Start.R;
    
      type BuildingSlotad_bnr_btf_02 = 
        TraceEvent.ADFUEL.BuildingSlotad_bnr_btf_02.b |
        TraceEvent.ADFUEL.BuildingSlotad_bnr_btf_02.e;
    
      type BuildingSlotad_bnr_btf_02End = 
        TraceEvent.ADFUEL.BuildingSlotad_bnr_btf_02End.R;
    
      type BuildingSlotad_bnr_btf_02Start = 
        TraceEvent.ADFUEL.BuildingSlotad_bnr_btf_02Start.R;
    
      type BuildingSlotad_mod_35731bb1e = 
        TraceEvent.ADFUEL.BuildingSlotad_mod_35731bb1e.b |
        TraceEvent.ADFUEL.BuildingSlotad_mod_35731bb1e.e;
    
      type BuildingSlotad_mod_35731bb1eEnd = 
        TraceEvent.ADFUEL.BuildingSlotad_mod_35731bb1eEnd.R;
    
      type BuildingSlotad_mod_35731bb1eStart = 
        TraceEvent.ADFUEL.BuildingSlotad_mod_35731bb1eStart.R;
    
      type BuildingSlotad_oop_float_01 = 
        TraceEvent.ADFUEL.BuildingSlotad_oop_float_01.b |
        TraceEvent.ADFUEL.BuildingSlotad_oop_float_01.e;
    
      type BuildingSlotad_oop_float_01End = 
        TraceEvent.ADFUEL.BuildingSlotad_oop_float_01End.R;
    
      type BuildingSlotad_oop_float_01Start = 
        TraceEvent.ADFUEL.BuildingSlotad_oop_float_01Start.R;
    
      type BuildingSlotad_oop_skin_01 = 
        TraceEvent.ADFUEL.BuildingSlotad_oop_skin_01.b |
        TraceEvent.ADFUEL.BuildingSlotad_oop_skin_01.e;
    
      type BuildingSlotad_oop_skin_01End = 
        TraceEvent.ADFUEL.BuildingSlotad_oop_skin_01End.R;
    
      type BuildingSlotad_oop_skin_01Start = 
        TraceEvent.ADFUEL.BuildingSlotad_oop_skin_01Start.R;
    
      type BuildingSlotad_rect_btf_02 = 
        TraceEvent.ADFUEL.BuildingSlotad_rect_btf_02.b |
        TraceEvent.ADFUEL.BuildingSlotad_rect_btf_02.e;
    
      type BuildingSlotad_rect_btf_02End = 
        TraceEvent.ADFUEL.BuildingSlotad_rect_btf_02End.R;
    
      type BuildingSlotad_rect_btf_02Start = 
        TraceEvent.ADFUEL.BuildingSlotad_rect_btf_02Start.R;
    
      type DispatchQueue = 
        TraceEvent.ADFUEL.DispatchQueue.b |
        TraceEvent.ADFUEL.DispatchQueue.e;
    
      type DispatchQueueEnd = 
        TraceEvent.ADFUEL.DispatchQueueEnd.R;
    
      type DispatchQueueStart = 
        TraceEvent.ADFUEL.DispatchQueueStart.R;
    
      type GPTIncluded = 
        TraceEvent.ADFUEL.GPTIncluded.R;
    
      type PageLevelGPTBuild = 
        TraceEvent.ADFUEL.PageLevelGPTBuild.b |
        TraceEvent.ADFUEL.PageLevelGPTBuild.e;
    
      type PageLevelGPTBuildEnd = 
        TraceEvent.ADFUEL.PageLevelGPTBuildEnd.R;
    
      type PageLevelGPTBuildStart = 
        TraceEvent.ADFUEL.PageLevelGPTBuildStart.R;
    
      type QueueRegistrycnn_homepage_rb = 
        TraceEvent.ADFUEL.QueueRegistrycnn_homepage_rb.b |
        TraceEvent.ADFUEL.QueueRegistrycnn_homepage_rb.e;
    
      type QueueRegistrycnn_homepage_rbEnd = 
        TraceEvent.ADFUEL.QueueRegistrycnn_homepage_rbEnd.R;
    
      type QueueRegistrycnn_homepage_rbStart = 
        TraceEvent.ADFUEL.QueueRegistrycnn_homepage_rbStart.R;
    
      type QueueRegistrycnn_homepage = 
        TraceEvent.ADFUEL.QueueRegistrycnn_homepage.b |
        TraceEvent.ADFUEL.QueueRegistrycnn_homepage.e;
    
      type QueueRegistrycnn_homepageEnd = 
        TraceEvent.ADFUEL.QueueRegistrycnn_homepageEnd.R;
    
      type QueueRegistrycnn_homepageStart = 
        TraceEvent.ADFUEL.QueueRegistrycnn_homepageStart.R;
    
      type SendingRequest = 
        TraceEvent.ADFUEL.SendingRequest.b |
        TraceEvent.ADFUEL.SendingRequest.e;
    
      type SendingRequestEnd = 
        TraceEvent.ADFUEL.SendingRequestEnd.R;
    
      type SendingRequestStart = 
        TraceEvent.ADFUEL.SendingRequestStart.R;
    
      type SlotLoadedad_bnr_atf_01 = 
        TraceEvent.ADFUEL.SlotLoadedad_bnr_atf_01.R;
    
      type SlotLoadedad_mod_35731bb1e = 
        TraceEvent.ADFUEL.SlotLoadedad_mod_35731bb1e.R;
    
      type SlotLoadedad_oop_float_01 = 
        TraceEvent.ADFUEL.SlotLoadedad_oop_float_01.R;
    
      type SlotLoadedad_rect_btf_02 = 
        TraceEvent.ADFUEL.SlotLoadedad_rect_btf_02.R;
    
      namespace AdFuelDOMContentLoaded {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] AdFuel DOMContentLoaded';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace AdFuelInitialized {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] AdFuel Initialized';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace AdFuelRequestComplete {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] AdFuel Request Complete';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace AdFuelwindow {
        type Load = 
          TraceEvent.ADFUEL.AdFuelwindow.Load.R;
      
        namespace Load {
          interface R extends Base {
            args: {
              data: {
                navigationId: string;
              };
            };
            name: '[ADFUEL] AdFuel window.load';
            ph: 'R';
            tts: number;
          }
        }
      }
    
      namespace AdRenderedad_bnr_atf_01 {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Ad Rendered [ad_bnr_atf_01]';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace AdRenderedad_bnr_btf_01 {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Ad Rendered [ad_bnr_btf_01]';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace AdRenderedad_mod_35731bb1e {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Ad Rendered [ad_mod_35731bb1e]';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace AdRenderedad_oop_float_01 {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Ad Rendered [ad_oop_float_01]';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace AdRenderedad_rect_btf_02 {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Ad Rendered [ad_rect_btf_02]';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace ApplyingPageLevelTargeting {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Applying Page-Level Targeting';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace ApplyingWindowSiteLevelOptions {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Applying Window Site-Level Options.';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_bnr_atf_01 {
        interface b extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Building Slot [ad_bnr_atf_01]';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Building Slot [ad_bnr_atf_01]';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_bnr_atf_01End {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Building Slot [ad_bnr_atf_01] End';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_bnr_atf_01Start {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Building Slot [ad_bnr_atf_01] Start';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_bnr_btf_01 {
        interface b extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Building Slot [ad_bnr_btf_01]';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Building Slot [ad_bnr_btf_01]';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_bnr_btf_01End {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Building Slot [ad_bnr_btf_01] End';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_bnr_btf_01Start {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Building Slot [ad_bnr_btf_01] Start';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_bnr_btf_02 {
        interface b extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Building Slot [ad_bnr_btf_02]';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Building Slot [ad_bnr_btf_02]';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_bnr_btf_02End {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Building Slot [ad_bnr_btf_02] End';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_bnr_btf_02Start {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Building Slot [ad_bnr_btf_02] Start';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_mod_35731bb1e {
        interface b extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Building Slot [ad_mod_35731bb1e]';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Building Slot [ad_mod_35731bb1e]';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_mod_35731bb1eEnd {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Building Slot [ad_mod_35731bb1e] End';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_mod_35731bb1eStart {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Building Slot [ad_mod_35731bb1e] Start';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_oop_float_01 {
        interface b extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Building Slot [ad_oop_float_01]';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Building Slot [ad_oop_float_01]';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_oop_float_01End {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Building Slot [ad_oop_float_01] End';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_oop_float_01Start {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Building Slot [ad_oop_float_01] Start';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_oop_skin_01 {
        interface b extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Building Slot [ad_oop_skin_01]';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Building Slot [ad_oop_skin_01]';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_oop_skin_01End {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Building Slot [ad_oop_skin_01] End';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_oop_skin_01Start {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Building Slot [ad_oop_skin_01] Start';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_rect_btf_02 {
        interface b extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Building Slot [ad_rect_btf_02]';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Building Slot [ad_rect_btf_02]';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_rect_btf_02End {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Building Slot [ad_rect_btf_02] End';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace BuildingSlotad_rect_btf_02Start {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Building Slot [ad_rect_btf_02] Start';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace DispatchQueue {
        interface b extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Dispatch Queue';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Dispatch Queue';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace DispatchQueueEnd {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Dispatch Queue End';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace DispatchQueueStart {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Dispatch Queue Start';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace GPTIncluded {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] GPT Included';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace PageLevelGPTBuild {
        interface b extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Page-Level GPT Build';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Page-Level GPT Build';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace PageLevelGPTBuildEnd {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Page-Level GPT Build End';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace PageLevelGPTBuildStart {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Page-Level GPT Build Start';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace QueueRegistrycnn_homepage_rb {
        interface b extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Queue Registry [cnn_homepage_rb]';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Queue Registry [cnn_homepage_rb]';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace QueueRegistrycnn_homepage_rbEnd {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Queue Registry [cnn_homepage_rb] End';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace QueueRegistrycnn_homepage_rbStart {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Queue Registry [cnn_homepage_rb] Start';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace QueueRegistrycnn_homepage {
        interface b extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Queue Registry [cnn_homepage]';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Queue Registry [cnn_homepage]';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace QueueRegistrycnn_homepageEnd {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Queue Registry [cnn_homepage] End';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace QueueRegistrycnn_homepageStart {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Queue Registry [cnn_homepage] Start';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace RegisteringModule {
        type AmazonA9Modulev3_2_5 = 
          TraceEvent.ADFUEL.RegisteringModule.AmazonA9Modulev3_2_5.R;
      
        type CEPModulev3_0_2 = 
          TraceEvent.ADFUEL.RegisteringModule.CEPModulev3_0_2.R;
      
        type CreativeReviewModulev3_0_5 = 
          TraceEvent.ADFUEL.RegisteringModule.CreativeReviewModulev3_0_5.R;
      
        type CriteoModulev3_2_2 = 
          TraceEvent.ADFUEL.RegisteringModule.CriteoModulev3_2_2.R;
      
        type IndexExchangeWrapperModulev3_1_1 = 
          TraceEvent.ADFUEL.RegisteringModule.IndexExchangeWrapperModulev3_1_1.R;
      
        type InViewRefreshv3_0_5 = 
          TraceEvent.ADFUEL.RegisteringModule.InViewRefreshv3_0_5.R;
      
        type KruxModulev3_1_1 = 
          TraceEvent.ADFUEL.RegisteringModule.KruxModulev3_1_1.R;
      
        type PrebidModulev3_3_0 = 
          TraceEvent.ADFUEL.RegisteringModule.PrebidModulev3_3_0.R;
      
        type ProximicModulev3_1_2 = 
          TraceEvent.ADFUEL.RegisteringModule.ProximicModulev3_1_2.R;
      
        type TransactionIDModulev3_1_1 = 
          TraceEvent.ADFUEL.RegisteringModule.TransactionIDModulev3_1_1.R;
      
        type TurnerGUIDModulev3_1_1 = 
          TraceEvent.ADFUEL.RegisteringModule.TurnerGUIDModulev3_1_1.R;
      
        namespace AmazonA9Modulev3_2_5 {
          interface R extends Base {
            args: {
              data: {
                navigationId: string;
              };
            };
            name: '[ADFUEL] Registering Module: Amazon A9 Module v3.2.5';
            ph: 'R';
            tts: number;
          }
        }
      
        namespace CEPModulev3_0_2 {
          interface R extends Base {
            args: {
              data: {
                navigationId: string;
              };
            };
            name: '[ADFUEL] Registering Module: CEP Module v3.0.2';
            ph: 'R';
            tts: number;
          }
        }
      
        namespace CreativeReviewModulev3_0_5 {
          interface R extends Base {
            args: {
              data: {
                navigationId: string;
              };
            };
            name: '[ADFUEL] Registering Module: Creative Review Module v3.0.5';
            ph: 'R';
            tts: number;
          }
        }
      
        namespace CriteoModulev3_2_2 {
          interface R extends Base {
            args: {
              data: {
                navigationId: string;
              };
            };
            name: '[ADFUEL] Registering Module: Criteo Module v3.2.2';
            ph: 'R';
            tts: number;
          }
        }
      
        namespace IndexExchangeWrapperModulev3_1_1 {
          interface R extends Base {
            args: {
              data: {
                navigationId: string;
              };
            };
            name: '[ADFUEL] Registering Module: IndexExchange Wrapper Module v3.1.1';
            ph: 'R';
            tts: number;
          }
        }
      
        namespace InViewRefreshv3_0_5 {
          interface R extends Base {
            args: {
              data: {
                navigationId: string;
              };
            };
            name: '[ADFUEL] Registering Module: In View Refresh v3.0.5';
            ph: 'R';
            tts: number;
          }
        }
      
        namespace KruxModulev3_1_1 {
          interface R extends Base {
            args: {
              data: {
                navigationId: string;
              };
            };
            name: '[ADFUEL] Registering Module: Krux Module v3.1.1';
            ph: 'R';
            tts: number;
          }
        }
      
        namespace PrebidModulev3_3_0 {
          interface R extends Base {
            args: {
              data: {
                navigationId: string;
              };
            };
            name: '[ADFUEL] Registering Module: Prebid Module v3.3.0';
            ph: 'R';
            tts: number;
          }
        }
      
        namespace ProximicModulev3_1_2 {
          interface R extends Base {
            args: {
              data: {
                navigationId: string;
              };
            };
            name: '[ADFUEL] Registering Module: Proximic Module v3.1.2';
            ph: 'R';
            tts: number;
          }
        }
      
        namespace TransactionIDModulev3_1_1 {
          interface R extends Base {
            args: {
              data: {
                navigationId: string;
              };
            };
            name: '[ADFUEL] Registering Module: Transaction ID Module v3.1.1';
            ph: 'R';
            tts: number;
          }
        }
      
        namespace TurnerGUIDModulev3_1_1 {
          interface R extends Base {
            args: {
              data: {
                navigationId: string;
              };
            };
            name: '[ADFUEL] Registering Module: Turner GUID Module v3.1.1';
            ph: 'R';
            tts: number;
          }
        }
      }
    
      namespace RegistryLoadcdn {
        namespace Cnn {
          namespace Comadscnncnn_homepage {
            type Json = 
              TraceEvent.ADFUEL.RegistryLoadcdn.Cnn.Comadscnncnn_homepage.Json.b |
              TraceEvent.ADFUEL.RegistryLoadcdn.Cnn.Comadscnncnn_homepage.Json.e;
          
            type JsonEnd = 
              TraceEvent.ADFUEL.RegistryLoadcdn.Cnn.Comadscnncnn_homepage.JsonEnd.R;
          
            type JsonStart = 
              TraceEvent.ADFUEL.RegistryLoadcdn.Cnn.Comadscnncnn_homepage.JsonStart.R;
          
            namespace Json {
              interface b extends Base {
                args: {
                
                };
                id: string;
                name: '[ADFUEL] Registry Load [//cdn.cnn.com/ads/cnn/cnn_homepage.json]';
                ph: 'b';
                tts: number;
              }
            
              interface e extends Base {
                args: {
                
                };
                id: string;
                name: '[ADFUEL] Registry Load [//cdn.cnn.com/ads/cnn/cnn_homepage.json]';
                ph: 'e';
                tts: number;
              }
            }
          
            namespace JsonEnd {
              interface R extends Base {
                args: {
                  data: {
                    navigationId: string;
                  };
                };
                name: '[ADFUEL] Registry Load [//cdn.cnn.com/ads/cnn/cnn_homepage.json] End';
                ph: 'R';
                tts: number;
              }
            }
          
            namespace JsonStart {
              interface R extends Base {
                args: {
                  data: {
                    navigationId: string;
                  };
                };
                name: '[ADFUEL] Registry Load [//cdn.cnn.com/ads/cnn/cnn_homepage.json] Start';
                ph: 'R';
                tts: number;
              }
            }
          }
        }
      }
    
      namespace SendingRequest {
        interface b extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Sending Request';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: '[ADFUEL] Sending Request';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace SendingRequestEnd {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Sending Request End';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace SendingRequestStart {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Sending Request Start';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace SlotLoadedad_bnr_atf_01 {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Slot Loaded [ad_bnr_atf_01]';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace SlotLoadedad_mod_35731bb1e {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Slot Loaded [ad_mod_35731bb1e]';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace SlotLoadedad_oop_float_01 {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Slot Loaded [ad_oop_float_01]';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace SlotLoadedad_rect_btf_02 {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: '[ADFUEL] Slot Loaded [ad_rect_btf_02]';
          ph: 'R';
          tts: number;
        }
      }
    }
  
    namespace Allactivesurfacesready {
      interface I extends Base {
        args: {
        
        };
        name: 'All active surfaces ready';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace Animation {
      interface b extends Base {
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
    
      interface e extends Base {
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
    
      interface n extends Base {
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
  
    namespace AnimationHost {
      type ActivateAnimations = 
        TraceEvent.AnimationHost.ActivateAnimations.X;
    
      type TickAnimations = 
        TraceEvent.AnimationHost.TickAnimations.X;
    
      type UpdateAnimationState = 
        TraceEvent.AnimationHost.UpdateAnimationState.X;
    
      namespace ActivateAnimations {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'AnimationHost::ActivateAnimations';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace TickAnimations {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'AnimationHost::TickAnimations';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UpdateAnimationState {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'AnimationHost::UpdateAnimationState';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ArrayBufferTrackerUpdatingItem {
      type Process = 
        TraceEvent.ArrayBufferTrackerUpdatingItem.Process.X;
    
      namespace Process {
        interface X extends Base {
          args: {
            EvacuationState: number;
          };
          dur: number;
          name: 'ArrayBufferTrackerUpdatingItem::Process';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace AsyncLayerTreeFrameSink {
      type SubmitCompositorFrame = 
        TraceEvent.AsyncLayerTreeFrameSink.SubmitCompositorFrame.X;
    
      namespace SubmitCompositorFrame {
        interface X extends Base {
          args: {
            source_frame_number_: number;
          };
          dur: number;
          name: 'AsyncLayerTreeFrameSink::SubmitCompositorFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace AsyncTask {
      interface f extends Base {
        args: {
        
        };
        id2: {
          local: string;
        };
        name: 'AsyncTask';
        ph: 'f';
        tts: number;
      }
    
      interface s extends Base {
        args: {
          data: {
            name: string;
          };
        };
        id2: {
          local: string;
        };
        name: 'AsyncTask';
        ph: 's';
        tts: number;
      }
    
      interface t extends Base {
        args: {
          step: string;
        };
        id2: {
          local: string;
        };
        name: 'AsyncTask';
        ph: 't';
        tts: number;
      }
    }
  
    namespace AtlasTextOp {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'AtlasTextOp';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace AutocompleteController {
      type Start = 
        TraceEvent.AutocompleteController.Start.X;
    
      type UpdateResult = 
        TraceEvent.AutocompleteController.UpdateResult.X;
    
      namespace Start {
        interface X extends Base {
          args: {
            text: string;
          };
          dur: number;
          name: 'AutocompleteController::Start';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UpdateResult {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'AutocompleteController::UpdateResult';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace BackgroundCompileTask {
      type Run = 
        TraceEvent.BackgroundCompileTask.Run.X;
    
      namespace Run {
        interface X extends Base {
          args: {
          
          };
          dur?: number;
          name: 'BackgroundCompileTask::Run';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace BackgroundHTMLParser {
      type PumpTokenizer = 
        TraceEvent.BackgroundHTMLParser.PumpTokenizer.X;
    
      type SendTokensToMainThread = 
        TraceEvent.BackgroundHTMLParser.SendTokensToMainThread.X;
    
      namespace PumpTokenizer {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'BackgroundHTMLParser::pumpTokenizer';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SendTokensToMainThread {
        interface X extends Base {
          args: {
          
          };
          bind_id: string;
          dur: number;
          flow_out: boolean;
          id: string;
          name: 'BackgroundHTMLParser::sendTokensToMainThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Base {
      namespace TraceEventSystemStatsMonitor {
        type SystemStats = 
          TraceEvent.Base.TraceEventSystemStatsMonitor.SystemStats.O;
      
        namespace SystemStats {
          interface O extends Base {
            args: {
              snapshot: {
                committed_memory: number;
              };
            };
            id: string;
            name: 'base::TraceEventSystemStatsMonitor::SystemStats';
            ph: 'O';
            tts: number;
          }
        }
      }
    }
  
    namespace BeginFrame {
      interface I extends Base {
        args: {
          layerTreeId: number;
        };
        name: 'BeginFrame';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace BeginFrameArgs {
      interface t extends Base {
        args: {
          step: string;
        };
        id: string;
        name: 'BeginFrameArgs';
        ph: 't';
        tts: number;
      }
    }
  
    namespace BeginMainThreadFrame {
      interface I extends Base {
        args: {
          data: {
            frameId: number;
          };
          layerTreeId: number;
        };
        name: 'BeginMainThreadFrame';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace BenchmarkInstrumentation {
      type DisplayRenderingStats = 
        TraceEvent.BenchmarkInstrumentation.DisplayRenderingStats.I;
    
      type ImplThreadRenderingStats = 
        TraceEvent.BenchmarkInstrumentation.ImplThreadRenderingStats.I;
    
      namespace DisplayRenderingStats {
        interface I extends Base {
          args: {
            data: {
              frame_count: number;
            };
          };
          name: 'BenchmarkInstrumentation::DisplayRenderingStats';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      namespace ImplThreadRenderingStats {
        interface I extends Base {
          args: {
            data: {
              approximated_visible_content_area: number;
              checkerboarded_needs_raster_content_area: number;
              checkerboarded_no_recording_content_area: number;
              checkerboarded_visible_content_area: number;
              frame_count: number;
              visible_content_area: number;
            };
          };
          name: 'BenchmarkInstrumentation::ImplThreadRenderingStats';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    }
  
    namespace BitmapImage {
      type DataChanged = 
        TraceEvent.BitmapImage.DataChanged.X;
    
      type Draw = 
        TraceEvent.BitmapImage.Draw.X;
    
      namespace DataChanged {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'BitmapImage::dataChanged';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Draw {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'BitmapImage::draw';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Blankframe {
      type NooverlaysorCALayers = 
        TraceEvent.Blankframe.NooverlaysorCALayers.X;
    
      namespace NooverlaysorCALayers {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Blank frame: No overlays or CALayers';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Blink {
      namespace Mojom {
        type AppCacheBackend = 
          TraceEvent.Blink.Mojom.AppCacheBackend.X;
      
        type AppCacheFrontend = 
          TraceEvent.Blink.Mojom.AppCacheFrontend.X;
      
        type Blob = 
          TraceEvent.Blink.Mojom.Blob.X;
      
        type BlobRegistry = 
          TraceEvent.Blink.Mojom.BlobRegistry.X;
      
        type CodeCacheHost = 
          TraceEvent.Blink.Mojom.CodeCacheHost.X;
      
        type ManifestManager = 
          TraceEvent.Blink.Mojom.ManifestManager.X;
      
        type PluginRegistry = 
          TraceEvent.Blink.Mojom.PluginRegistry.X;
      
        type StorageArea = 
          TraceEvent.Blink.Mojom.StorageArea.X;
      
        type StoragePartitionService = 
          TraceEvent.Blink.Mojom.StoragePartitionService.X;
      
        namespace AppCacheBackend {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'blink.mojom.AppCacheBackend';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace AppCacheFrontend {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'blink.mojom.AppCacheFrontend';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace Blob {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'blink.mojom.Blob';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace BlobRegistry {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'blink.mojom.BlobRegistry';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace CodeCacheHost {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'blink.mojom.CodeCacheHost';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace ManifestManager {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'blink.mojom.ManifestManager';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace PluginRegistry {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'blink.mojom.PluginRegistry';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace StorageArea {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'blink.mojom.StorageArea';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace StoragePartitionService {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'blink.mojom.StoragePartitionService';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace BlinkGC {
      type AllocatedObjectSizeSincePreviousGCKB = 
        TraceEvent.BlinkGC.AllocatedObjectSizeSincePreviousGCKB.C;
    
      type AllocatedSpaceAtLastGCKB = 
        TraceEvent.BlinkGC.AllocatedSpaceAtLastGCKB.C;
    
      type AllocatedSpaceKB = 
        TraceEvent.BlinkGC.AllocatedSpaceKB.C;
    
      type AtomicPhase = 
        TraceEvent.BlinkGC.AtomicPhase.B |
        TraceEvent.BlinkGC.AtomicPhase.E;
    
      type AtomicPhaseMarking = 
        TraceEvent.BlinkGC.AtomicPhaseMarking.B |
        TraceEvent.BlinkGC.AtomicPhaseMarking.E;
    
      type CollectedWrapperCount = 
        TraceEvent.BlinkGC.CollectedWrapperCount.C;
    
      type CollectionRate = 
        TraceEvent.BlinkGC.CollectionRate.C;
    
      type CompleteSweep = 
        TraceEvent.BlinkGC.CompleteSweep.B |
        TraceEvent.BlinkGC.CompleteSweep.E;
    
      type EagerSweep = 
        TraceEvent.BlinkGC.EagerSweep.B |
        TraceEvent.BlinkGC.EagerSweep.E;
    
      type InvokePreFinalizers = 
        TraceEvent.BlinkGC.InvokePreFinalizers.B |
        TraceEvent.BlinkGC.InvokePreFinalizers.E;
    
      type LazySweepOnAllocation = 
        TraceEvent.BlinkGC.LazySweepOnAllocation.B |
        TraceEvent.BlinkGC.LazySweepOnAllocation.E;
    
      type MarkedObjectSizeAtLastCompleteSweepKB = 
        TraceEvent.BlinkGC.MarkedObjectSizeAtLastCompleteSweepKB.C;
    
      type MarkInvokeEphemeronCallbacks = 
        TraceEvent.BlinkGC.MarkInvokeEphemeronCallbacks.B |
        TraceEvent.BlinkGC.MarkInvokeEphemeronCallbacks.E;
    
      type MarkNotFullyConstructedObjects = 
        TraceEvent.BlinkGC.MarkNotFullyConstructedObjects.B |
        TraceEvent.BlinkGC.MarkNotFullyConstructedObjects.E;
    
      type MarkProcessWorklist = 
        TraceEvent.BlinkGC.MarkProcessWorklist.B |
        TraceEvent.BlinkGC.MarkProcessWorklist.E;
    
      type MarkWeakProcessing = 
        TraceEvent.BlinkGC.MarkWeakProcessing.B |
        TraceEvent.BlinkGC.MarkWeakProcessing.E;
    
      type ObjectSizeAtLastGCKB = 
        TraceEvent.BlinkGC.ObjectSizeAtLastGCKB.C;
    
      type PartitionAllocSizeAtLastGCKB = 
        TraceEvent.BlinkGC.PartitionAllocSizeAtLastGCKB.C;
    
      type VisitCrossThreadPersistents = 
        TraceEvent.BlinkGC.VisitCrossThreadPersistents.B |
        TraceEvent.BlinkGC.VisitCrossThreadPersistents.E;
    
      type VisitDOMWrappers = 
        TraceEvent.BlinkGC.VisitDOMWrappers.B |
        TraceEvent.BlinkGC.VisitDOMWrappers.E;
    
      type VisitPersistentRoots = 
        TraceEvent.BlinkGC.VisitPersistentRoots.B |
        TraceEvent.BlinkGC.VisitPersistentRoots.E;
    
      type VisitPersistents = 
        TraceEvent.BlinkGC.VisitPersistents.B |
        TraceEvent.BlinkGC.VisitPersistents.E;
    
      type VisitStackRoots = 
        TraceEvent.BlinkGC.VisitStackRoots.B |
        TraceEvent.BlinkGC.VisitStackRoots.E;
    
      type WrapperCount = 
        TraceEvent.BlinkGC.WrapperCount.C;
    
      type WrapperCountAtLastGC = 
        TraceEvent.BlinkGC.WrapperCountAtLastGC.C;
    
      namespace AllocatedObjectSizeSincePreviousGCKB {
        interface C extends Base {
          args: {
            value: number;
          };
          name: 'BlinkGC.AllocatedObjectSizeSincePreviousGCKB';
          ph: 'C';
          tts: number;
        }
      }
    
      namespace AllocatedSpaceAtLastGCKB {
        interface C extends Base {
          args: {
            value: number;
          };
          name: 'BlinkGC.AllocatedSpaceAtLastGCKB';
          ph: 'C';
          tts: number;
        }
      }
    
      namespace AllocatedSpaceKB {
        interface C extends Base {
          args: {
            value: number;
          };
          name: 'BlinkGC.AllocatedSpaceKB';
          ph: 'C';
          tts: number;
        }
      }
    
      namespace AtomicPhase {
        interface B extends Base {
          args: {
            forced: boolean;
          };
          name: 'BlinkGC.AtomicPhase';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
          
          };
          name: 'BlinkGC.AtomicPhase';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace AtomicPhaseMarking {
        interface B extends Base {
          args: {
            gcReason: string;
            lazySweeping: string;
          };
          name: 'BlinkGC.AtomicPhaseMarking';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
          
          };
          name: 'BlinkGC.AtomicPhaseMarking';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace CollectedWrapperCount {
        interface C extends Base {
          args: {
            value: number;
          };
          name: 'BlinkGC.CollectedWrapperCount';
          ph: 'C';
          tts: number;
        }
      }
    
      namespace CollectionRate {
        interface C extends Base {
          args: {
            value: number;
          };
          name: 'BlinkGC.CollectionRate';
          ph: 'C';
          tts: number;
        }
      }
    
      namespace CompleteSweep {
        interface B extends Base {
          args: {
            forced: boolean;
          };
          name: 'BlinkGC.CompleteSweep';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
          
          };
          name: 'BlinkGC.CompleteSweep';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace EagerSweep {
        interface B extends Base {
          args: {
          
          };
          name: 'BlinkGC.EagerSweep';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
          
          };
          name: 'BlinkGC.EagerSweep';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace InvokePreFinalizers {
        interface B extends Base {
          args: {
          
          };
          name: 'BlinkGC.InvokePreFinalizers';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
          
          };
          name: 'BlinkGC.InvokePreFinalizers';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace LazySweepOnAllocation {
        interface B extends Base {
          args: {
          
          };
          name: 'BlinkGC.LazySweepOnAllocation';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
          
          };
          name: 'BlinkGC.LazySweepOnAllocation';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace MarkedObjectSizeAtLastCompleteSweepKB {
        interface C extends Base {
          args: {
            value: number;
          };
          name: 'BlinkGC.MarkedObjectSizeAtLastCompleteSweepKB';
          ph: 'C';
          tts: number;
        }
      }
    
      namespace MarkInvokeEphemeronCallbacks {
        interface B extends Base {
          args: {
          
          };
          name: 'BlinkGC.MarkInvokeEphemeronCallbacks';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
          
          };
          name: 'BlinkGC.MarkInvokeEphemeronCallbacks';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace MarkNotFullyConstructedObjects {
        interface B extends Base {
          args: {
          
          };
          name: 'BlinkGC.MarkNotFullyConstructedObjects';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
          
          };
          name: 'BlinkGC.MarkNotFullyConstructedObjects';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace MarkProcessWorklist {
        interface B extends Base {
          args: {
          
          };
          name: 'BlinkGC.MarkProcessWorklist';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
          
          };
          name: 'BlinkGC.MarkProcessWorklist';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace MarkWeakProcessing {
        interface B extends Base {
          args: {
          
          };
          name: 'BlinkGC.MarkWeakProcessing';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
          
          };
          name: 'BlinkGC.MarkWeakProcessing';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace ObjectSizeAtLastGCKB {
        interface C extends Base {
          args: {
            value: number;
          };
          name: 'BlinkGC.ObjectSizeAtLastGCKB';
          ph: 'C';
          tts: number;
        }
      }
    
      namespace PartitionAllocSizeAtLastGCKB {
        interface C extends Base {
          args: {
            value: number;
          };
          name: 'BlinkGC.PartitionAllocSizeAtLastGCKB';
          ph: 'C';
          tts: number;
        }
      }
    
      namespace VisitCrossThreadPersistents {
        interface B extends Base {
          args: {
          
          };
          name: 'BlinkGC.VisitCrossThreadPersistents';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
          
          };
          name: 'BlinkGC.VisitCrossThreadPersistents';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace VisitDOMWrappers {
        interface B extends Base {
          args: {
          
          };
          name: 'BlinkGC.VisitDOMWrappers';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
          
          };
          name: 'BlinkGC.VisitDOMWrappers';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace VisitPersistentRoots {
        interface B extends Base {
          args: {
          
          };
          name: 'BlinkGC.VisitPersistentRoots';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
          
          };
          name: 'BlinkGC.VisitPersistentRoots';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace VisitPersistents {
        interface B extends Base {
          args: {
          
          };
          name: 'BlinkGC.VisitPersistents';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
          
          };
          name: 'BlinkGC.VisitPersistents';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace VisitStackRoots {
        interface B extends Base {
          args: {
          
          };
          name: 'BlinkGC.VisitStackRoots';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
          
          };
          name: 'BlinkGC.VisitStackRoots';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace WrapperCount {
        interface C extends Base {
          args: {
            value: number;
          };
          name: 'BlinkGC.WrapperCount';
          ph: 'C';
          tts: number;
        }
      }
    
      namespace WrapperCountAtLastGC {
        interface C extends Base {
          args: {
            value: number;
          };
          name: 'BlinkGC.WrapperCountAtLastGC';
          ph: 'C';
          tts: number;
        }
      }
    }
  
    namespace BlinkGCMarking {
      interface X extends Base {
        args: {
          gcReason: string;
          lazySweeping: boolean;
        };
        dur: number;
        name: 'BlinkGCMarking';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace BlobReader {
      type CountSize = 
        TraceEvent.BlobReader.CountSize.F |
        TraceEvent.BlobReader.CountSize.S;
    
      type ReadBytesItem = 
        TraceEvent.BlobReader.ReadBytesItem.X;
    
      type ReadMore = 
        TraceEvent.BlobReader.ReadMore.F |
        TraceEvent.BlobReader.ReadMore.S;
    
      namespace CountSize {
        interface F extends Base {
          args: {
            result: string;
            size: number;
          };
          id: string;
          name: 'BlobReader::CountSize';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'BlobReader::CountSize';
          ph: 'S';
          tts: number;
        }
      }
    
      namespace ReadBytesItem {
        interface X extends Base {
          args: {
            uuid: string;
          };
          dur: number;
          name: 'BlobReader::ReadBytesItem';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ReadMore {
        interface F extends Base {
          args: {
            num_bytes: number;
            result: string;
          };
          id: string;
          name: 'BlobReader::ReadMore';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'BlobReader::ReadMore';
          ph: 'S';
          tts: number;
        }
      }
    
      interface F extends Base {
        args: {
          bytes_written: number;
        };
        id: string;
        name: 'BlobReader';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          uuid: string;
        };
        id: string;
        name: 'BlobReader';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace BookmarkProvider {
      type Start = 
        TraceEvent.BookmarkProvider.Start.X;
    
      namespace Start {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'BookmarkProvider::Start';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace BrowserCrApplication {
      type SendEvent = 
        TraceEvent.BrowserCrApplication.SendEvent.X;
    
      namespace SendEvent {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'BrowserCrApplication::sendEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace BrowserWorker0x7fd3431d1a00 {
      interface b extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'BrowserWorker-0x7fd3431d1a00';
        ph: 'b';
        tts: number;
        use_async_tts: number;
      }
    
      interface e extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'BrowserWorker-0x7fd3431d1a00';
        ph: 'e';
        tts: number;
        use_async_tts: number;
      }
    
      interface F extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'BrowserWorker-0x7fd3431d1a00';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'BrowserWorker-0x7fd3431d1a00';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace BudgetPool_DisableThrottling {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'BudgetPool_DisableThrottling';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace CalculateRenderSurfaceLayerList {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'CalculateRenderSurfaceLayerList';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace CancelAnimationFrame {
      interface I extends Base {
        args: {
          data: {
            frame: string;
            id: number;
            stackTrace?: {
              columnNumber: number;
              functionName: string;
              lineNumber: number;
              scriptId: string;
              url: string;
            }[];
          };
        };
        name: 'CancelAnimationFrame';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace CANCELLED {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'CANCELLED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace CanExceedIdleDeadlineIfRequired {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'CanExceedIdleDeadlineIfRequired';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace Canvas2DLayerBridge {
      type FinalizeFrame = 
        TraceEvent.Canvas2DLayerBridge.FinalizeFrame.X;
    
      type FlushRecording = 
        TraceEvent.Canvas2DLayerBridge.FlushRecording.X;
    
      namespace FinalizeFrame {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Canvas2DLayerBridge::FinalizeFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace FlushRecording {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Canvas2DLayerBridge::flushRecording';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Canvas2DLayerBridgeCreation {
      interface I extends Base {
        args: {
        
        };
        name: 'Canvas2DLayerBridgeCreation';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace CanvasResourceProvider {
      type Canvas = 
        TraceEvent.CanvasResourceProvider.Canvas.X;
    
      namespace Canvas {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CanvasResourceProvider::Canvas';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace CanvasResourceProviderBitmap {
      type CreateSkSurface = 
        TraceEvent.CanvasResourceProviderBitmap.CreateSkSurface.X;
    
      namespace CreateSkSurface {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CanvasResourceProviderBitmap::CreateSkSurface';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace CARendererLayerTree {
      type CommitScheduledCALayers = 
        TraceEvent.CARendererLayerTree.CommitScheduledCALayers.X;
    
      namespace CommitScheduledCALayers {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CARendererLayerTree::CommitScheduledCALayers';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace CategorizedWorkerPool {
      type CollectCompletedTasks = 
        TraceEvent.CategorizedWorkerPool.CollectCompletedTasks.X;
    
      type ScheduleTasks = 
        TraceEvent.CategorizedWorkerPool.ScheduleTasks.X;
    
      type WaitForTasksToFinishRunning = 
        TraceEvent.CategorizedWorkerPool.WaitForTasksToFinishRunning.X;
    
      namespace CollectCompletedTasks {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CategorizedWorkerPool::CollectCompletedTasks';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ScheduleTasks {
        interface X extends Base {
          args: {
            num_edges: number;
            num_nodes: number;
          };
          dur: number;
          name: 'CategorizedWorkerPool::ScheduleTasks';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace WaitForTasksToFinishRunning {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CategorizedWorkerPool::WaitForTasksToFinishRunning';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace CATransactionCoordinator {
      type Postcommithandler = 
        TraceEvent.CATransactionCoordinator.Postcommithandler.X;
    
      type Precommithandler = 
        TraceEvent.CATransactionCoordinator.Precommithandler.X;
    
      namespace Postcommithandler {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CATransactionCoordinator: post-commit handler';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Precommithandler {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CATransactionCoordinator: pre-commit handler';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Cc {
      type DisplayItemList = 
        TraceEvent.Cc.DisplayItemList.O;
    
      type LayerImpl = 
        TraceEvent.Cc.LayerImpl.D;
    
      type LayerTreeHostImpl = 
        TraceEvent.Cc.LayerTreeHostImpl.D |
        TraceEvent.Cc.LayerTreeHostImpl.N |
        TraceEvent.Cc.LayerTreeHostImpl.O;
    
      type Tile = 
        TraceEvent.Cc.Tile.D;
    
      namespace DisplayItemList {
        interface O extends Base {
          args: {
            snapshot: {
              params: {
                items: {
                  name: string;
                  skp64?: string;
                  visual_rect: {
                  
                  }[];
                }[];
                layer_rect: {
                
                }[];
              };
              skp64: string;
            };
          };
          id2: {
            local: string;
          };
          name: 'cc::DisplayItemList';
          ph: 'O';
          tts: number;
        }
      }
    
      namespace LayerImpl {
        interface D extends Base {
          args: {
          
          };
          id: string;
          name: 'cc::LayerImpl';
          ph: 'D';
          tts: number;
        }
      }
    
      namespace LayerTreeHostImpl {
        interface D extends Base {
          args: {
          
          };
          id: string;
          name: 'cc::LayerTreeHostImpl';
          ph: 'D';
          tts: number;
        }
      
        interface N extends Base {
          args: {
          
          };
          id: string;
          name: 'cc::LayerTreeHostImpl';
          ph: 'N';
          tts: number;
        }
      
        interface O extends Base {
          args: {
            snapshot: {
              active_tiles: {
                cat: string;
                combined_priority: {
                  distance_to_visible: number;
                  is_occluded: boolean;
                  priority_bin: string;
                  resolution: string;
                };
                content_rect: {
                
                }[];
                contents_scale: number;
                draw_info: {
                  is_solid_color: boolean;
                  is_transparent: boolean;
                };
                gpu_memory_usage: number;
                has_resource: boolean;
                id: string;
                is_using_gpu_memory: boolean;
                layer_id: number;
                picture_pile: {
                  id_ref: string;
                };
                raster_transform: {
                
                }[];
                resolution: string;
                scheduled_priority: number;
                use_picture_analysis: boolean;
              }[];
              active_tree: {
                id: string;
                layers: {
                  base_type: string;
                  bounds: {
                    height: number;
                    width: number;
                  };
                  can_have_tilings_state?: {
                    can_have_tilings: boolean;
                    draws_content: boolean;
                    max_contents_scale: number;
                    min_contents_scale: number;
                    raster_source_has_recordings: boolean;
                    raster_source_solid_color: boolean;
                  };
                  can_use_lcd_text: boolean;
                  cat: string;
                  clip_tree_index: number;
                  contents_opaque: boolean;
                  coverage_tiles?: {
                    geometry_rect: {
                    
                    }[];
                    tile: {
                      id_ref: string;
                    };
                  }[];
                  debug_info?: {
                    annotated_invalidation_rects?: {
                      client: string;
                      geometry_rect: {
                      
                      }[];
                      reason: string;
                    }[];
                    compositing_reasons: {
                      '0': string;
                      '1': string;
                      '2': string;
                      '3': string;
                      '4': string;
                      '5': string;
                      '6': string;
                      '7': string;
                      '8': string;
                      '9': string;
                      '10': string;
                      '11': string;
                      '12': string;
                      '13': string;
                      '14': string;
                      '15': string;
                      '16': string;
                    }[];
                    layer_name: string;
                    owner_node?: number;
                  };
                  draws_content: number;
                  effect_tree_index: number;
                  element_id?: {
                    id_: number;
                  };
                  geometry_contents_scale?: number;
                  gpu_memory_usage: number;
                  has_will_change_transform_hint: boolean;
                  id: string;
                  ideal_contents_scale?: number;
                  ideal_scales?: {
                    contents_scale: number;
                    device_scale: number;
                    page_scale: number;
                    source_scale: number;
                  };
                  invalidation?: {
                  
                  }[];
                  layer_id: number;
                  layer_quad: {
                  
                  }[];
                  opacity: number;
                  pictures?: {
                    id_ref: string;
                  }[];
                  position: {
                  
                  }[];
                  raster_scales?: {
                    contents_scale: number;
                    device_scale: number;
                    low_res_contents_scale: number;
                    page_scale: number;
                    source_scale: number;
                  };
                  screen_space_transform: {
                  
                  }[];
                  scroll_offset: {
                  
                  }[];
                  scroll_tree_index: number;
                  tile_priority_rect?: {
                  
                  }[];
                  tilings?: {
                    content_scale: number;
                    eventually_rect: {
                    
                    }[];
                    num_tiles: number;
                    raster_transform: {
                    
                    }[];
                    skewport_rect: {
                    
                    }[];
                    soon_rect: {
                    
                    }[];
                    tiling_size: {
                      height: number;
                      width: number;
                    };
                    visible_rect: {
                    
                    }[];
                  }[];
                  transform_tree_index: number;
                  visible_rect?: {
                  
                  }[];
                }[];
                render_surface_layer_list: {
                  id_ref: string;
                }[];
                source_frame_number: number;
                swap_promise_trace_ids: {
                
                }[];
              };
              device_viewport_size: {
                height: number;
                width: number;
              };
              frame: {
                has_no_damage: boolean;
                render_passes: {
                  backdrop_filter_bounds: {
                  
                  }[];
                  cache_render_pass: boolean;
                  cat: string;
                  copy_requests: number;
                  damage_rect: {
                  
                  }[];
                  generate_mipmap: boolean;
                  has_damage_from_contributing_content: boolean;
                  has_transparent_background: boolean;
                  id: string;
                  output_rect: {
                  
                  }[];
                  quad_list: {
                    color?: number;
                    content_space_rect: {
                    
                    }[];
                    content_space_visible_rect: {
                    
                    }[];
                    force_anti_aliasing_off?: boolean;
                    material: number;
                    nearest_neighbor?: boolean;
                    needs_blending: boolean;
                    rect_as_target_space_quad: {
                    
                    }[];
                    rect_is_clipped: boolean;
                    resource_id?: number;
                    shared_state: {
                      id_ref: string;
                    };
                    should_draw_with_blending: boolean;
                    surface_range?: string;
                    swizzle_contents?: boolean;
                    tex_coord_rect?: {
                    
                    }[];
                    texture_size?: {
                      height: number;
                      width: number;
                    };
                    visible_rect_as_target_space_quad: {
                    
                    }[];
                    visible_rect_is_clipped: boolean;
                  }[];
                  shared_quad_state_list: {
                    are_contents_opaque: boolean;
                    blend_mode: string;
                    cat: string;
                    clip_rect: {
                    
                    }[];
                    id: string;
                    is_clipped: boolean;
                    layer_content_rect: {
                    
                    }[];
                    layer_visible_content_rect: {
                    
                    }[];
                    opacity: number;
                    transform: {
                    
                    }[];
                  }[];
                }[];
              };
              tile_manager_basic_state: {
                did_oom_on_last_assign: boolean;
                global_state: {
                  hard_memory_limit_in_bytes: number;
                  memory_limit_policy: string;
                  num_resources_limit: number;
                  soft_memory_limit_in_bytes: number;
                  tree_priority: string;
                };
                tile_count: number;
              };
            };
          };
          id: string;
          name: 'cc::LayerTreeHostImpl';
          ph: 'O';
          tts: number;
        }
      }
    
      namespace Tile {
        interface D extends Base {
          args: {
          
          };
          id: string;
          name: 'cc::Tile';
          ph: 'D';
          tts: number;
        }
      }
    }
  
    namespace Ccschedulerscheduler {
      type L38 = 
        TraceEvent.Ccschedulerscheduler.L38.F |
        TraceEvent.Ccschedulerscheduler.L38.S;
    
      namespace L38 {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: '@../../cc/scheduler/scheduler.cc:38';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
            'current args': {
              animate_only: boolean;
              deadline_us: number;
              frame_time_us: number;
              interval_us: number;
              on_critical_path: boolean;
              sequence_number: number;
              source_id: number;
              subtype: string;
              type: string;
            };
            'new args': {
              animate_only: boolean;
              deadline_us: number;
              frame_time_us: number;
              interval_us: number;
              on_critical_path: boolean;
              sequence_number: number;
              source_id: number;
              subtype: string;
              type: string;
            };
          };
          id: string;
          name: '@../../cc/scheduler/scheduler.cc:38';
          ph: 'S';
          tts: number;
        }
      }
    }
  
    namespace Cctreeslayer_tree_host_impl {
      type L300 = 
        TraceEvent.Cctreeslayer_tree_host_impl.L300.F |
        TraceEvent.Cctreeslayer_tree_host_impl.L300.S;
    
      namespace L300 {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: '@../../cc/trees/layer_tree_host_impl.cc:300';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
            'current args': {
              animate_only: boolean;
              deadline_us: number;
              frame_time_us: number;
              interval_us: number;
              on_critical_path: boolean;
              sequence_number: number;
              source_id: number;
              subtype: string;
              type: string;
            };
            'new args': {
              animate_only: boolean;
              deadline_us: number;
              frame_time_us: number;
              interval_us: number;
              on_critical_path: boolean;
              sequence_number: number;
              source_id: number;
              subtype: string;
              type: string;
            };
          };
          id: string;
          name: '@../../cc/trees/layer_tree_host_impl.cc:300';
          ph: 'S';
          tts: number;
        }
      }
    }
  
    namespace CERT_VERIFIER_REQUEST_BOUND_TO_JOB {
      interface n extends Base {
        args: {
          params: {
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'CERT_VERIFIER_REQUEST_BOUND_TO_JOB';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace CERT_VERIFIER_REQUEST {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'CERT_VERIFIER_REQUEST';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'CERT_VERIFIER_REQUEST';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace CertVerifierJob {
      type OnJobCompleted = 
        TraceEvent.CertVerifierJob.OnJobCompleted.X;
    
      namespace OnJobCompleted {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CertVerifierJob::OnJobCompleted';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ChannelMojo {
      type OnMessageReceived = 
        TraceEvent.ChannelMojo.OnMessageReceived.X;
    
      namespace OnMessageReceived {
        interface X extends Base {
          args: {
            class: number;
            line: number;
          };
          dur: number;
          name: 'ChannelMojo::OnMessageReceived';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace CheckerImageTracker {
      type DidActivateSyncTree = 
        TraceEvent.CheckerImageTracker.DidActivateSyncTree.X;
    
      type ScheduleImageDecodeQueue = 
        TraceEvent.CheckerImageTracker.ScheduleImageDecodeQueue.X;
    
      type ScheduleNextImageDecode = 
        TraceEvent.CheckerImageTracker.ScheduleNextImageDecode.X;
    
      type ShouldCheckerImage = 
        TraceEvent.CheckerImageTracker.ShouldCheckerImage.X;
    
      type TakeImagesToInvalidateOnSyncTree = 
        TraceEvent.CheckerImageTracker.TakeImagesToInvalidateOnSyncTree.X;
    
      namespace DidActivateSyncTree {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CheckerImageTracker::DidActivateSyncTree';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ScheduleImageDecodeQueue {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CheckerImageTracker::ScheduleImageDecodeQueue';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ScheduleNextImageDecode {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CheckerImageTracker::ScheduleNextImageDecode';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ShouldCheckerImage {
        interface X extends Base {
          args: {
            image_id: number;
          };
          dur: number;
          name: 'CheckerImageTracker::ShouldCheckerImage';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace TakeImagesToInvalidateOnSyncTree {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CheckerImageTracker::TakeImagesToInvalidateOnSyncTree';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ChromeViewHostMsg_AllowDOMStorage {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ChromeViewHostMsg_AllowDOMStorage';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ChromiumRandomAccessFile {
      type Read = 
        TraceEvent.ChromiumRandomAccessFile.Read.X;
    
      namespace Read {
        interface X extends Base {
          args: {
            offset: number;
            size: number;
          };
          dur: number;
          name: 'ChromiumRandomAccessFile::Read';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace CircleOp {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'CircleOp';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace CircularRRectOp {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'CircularRRectOp';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ClassicPendingScript {
      type GetSource = 
        TraceEvent.ClassicPendingScript.GetSource.X;
    
      namespace GetSource {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ClassicPendingScript::GetSource';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Cleanup_tq {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'cleanup_tq';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace ClearusingTexSubImage2D {
      interface X extends Base {
        args: {
          size: number;
        };
        dur: number;
        name: 'Clear using TexSubImage2D';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ClientSocketHandle {
      type OnIOComplete = 
        TraceEvent.ClientSocketHandle.OnIOComplete.X;
    
      namespace OnIOComplete {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ClientSocketHandle::OnIOComplete';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ColdModeSpellCheckRequester {
      type Invoke = 
        TraceEvent.ColdModeSpellCheckRequester.Invoke.X;
    
      namespace Invoke {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ColdModeSpellCheckRequester::invoke';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace CommandBufferHelper {
      type Finish = 
        TraceEvent.CommandBufferHelper.Finish.X;
    
      type Flush = 
        TraceEvent.CommandBufferHelper.Flush.X;
    
      namespace Finish {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CommandBufferHelper::Finish';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Flush {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CommandBufferHelper::Flush';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace CommandBufferProxyImpl {
      type Flush = 
        TraceEvent.CommandBufferProxyImpl.Flush.X;
    
      type Initialize = 
        TraceEvent.CommandBufferProxyImpl.Initialize.X;
    
      type OrderingBarrier = 
        TraceEvent.CommandBufferProxyImpl.OrderingBarrier.X;
    
      type WaitForGetOffset = 
        TraceEvent.CommandBufferProxyImpl.WaitForGetOffset.X;
    
      namespace Flush {
        interface X extends Base {
          args: {
            put_offset: number;
          };
          dur: number;
          name: 'CommandBufferProxyImpl::Flush';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Initialize {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CommandBufferProxyImpl::Initialize';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OrderingBarrier {
        interface X extends Base {
          args: {
            put_offset: number;
          };
          dur: number;
          name: 'CommandBufferProxyImpl::OrderingBarrier';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace WaitForGetOffset {
        interface X extends Base {
          args: {
            end: number;
            start: number;
          };
          dur: number;
          name: 'CommandBufferProxyImpl::WaitForGetOffset';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace CommandBufferService {
      type Paused = 
        TraceEvent.CommandBufferService.Paused.C;
    
      type PutChanged = 
        TraceEvent.CommandBufferService.PutChanged.X;
    
      namespace Paused {
        interface C extends Base {
          args: {
            value: number;
          };
          id: string;
          name: 'CommandBufferService::Paused';
          ph: 'C';
          tts: number;
        }
      }
    
      namespace PutChanged {
        interface X extends Base {
          args: {
            handler: string;
          };
          dur: number;
          name: 'CommandBufferService:PutChanged';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace CommandBufferStub {
      type OnAsyncFlush = 
        TraceEvent.CommandBufferStub.OnAsyncFlush.X;
    
      type OnDestroyTransferBuffer = 
        TraceEvent.CommandBufferStub.OnDestroyTransferBuffer.X;
    
      type OnRegisterTransferBuffer = 
        TraceEvent.CommandBufferStub.OnRegisterTransferBuffer.X;
    
      type OnSetGetBuffer = 
        TraceEvent.CommandBufferStub.OnSetGetBuffer.X;
    
      type OnWaitForGetOffsetInRange = 
        TraceEvent.CommandBufferStub.OnWaitForGetOffsetInRange.X;
    
      type PerformWork = 
        TraceEvent.CommandBufferStub.PerformWork.X;
    
      namespace OnAsyncFlush {
        interface X extends Base {
          args: {
            put_offset: number;
          };
          dur: number;
          name: 'CommandBufferStub::OnAsyncFlush';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnDestroyTransferBuffer {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CommandBufferStub::OnDestroyTransferBuffer';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnRegisterTransferBuffer {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CommandBufferStub::OnRegisterTransferBuffer';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnSetGetBuffer {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CommandBufferStub::OnSetGetBuffer';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnWaitForGetOffsetInRange {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CommandBufferStub::OnWaitForGetOffsetInRange';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace PerformWork {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CommandBufferStub::PerformWork';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace CommitLoad {
      interface X extends Base {
        args: {
          data: {
            frame: string;
            isMainFrame: boolean;
            name?: string;
            nodeId?: number;
            page: string;
            parent?: string;
            url?: string;
          };
        };
        dur: number;
        name: 'CommitLoad';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace CommitPendingTreesToCA {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'CommitPendingTreesToCA';
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
  
    namespace CompositingInputsUpdater {
      type Update = 
        TraceEvent.CompositingInputsUpdater.Update.X;
    
      namespace Update {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CompositingInputsUpdater::update';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace CompositingLayerAssigner {
      type Assign = 
        TraceEvent.CompositingLayerAssigner.Assign.X;
    
      namespace Assign {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CompositingLayerAssigner::assign';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace CompositingRequirementsUpdater {
      type UpdateRecursive = 
        TraceEvent.CompositingRequirementsUpdater.UpdateRecursive.X;
    
      namespace UpdateRecursive {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CompositingRequirementsUpdater::updateRecursive';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Compositor_tq {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'compositor_tq';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace CompositorFrameSinkSupport {
      type DidNotProduceFrame = 
        TraceEvent.CompositorFrameSinkSupport.DidNotProduceFrame.X;
    
      type MaybeSubmitCompositorFrame = 
        TraceEvent.CompositorFrameSinkSupport.MaybeSubmitCompositorFrame.X;
    
      namespace DidNotProduceFrame {
        interface X extends Base {
          args: {
            'ack.sequence_number': number;
            'ack.source_id': number;
          };
          dur: number;
          name: 'CompositorFrameSinkSupport::DidNotProduceFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace MaybeSubmitCompositorFrame {
        interface X extends Base {
          args: {
            FrameSinkId: string;
          };
          dur: number;
          name: 'CompositorFrameSinkSupport::MaybeSubmitCompositorFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace CompositorTimingHistory {
      type DidDraw = 
        TraceEvent.CompositorTimingHistory.DidDraw.X;
    
      namespace DidDraw {
        interface X extends Base {
          args: {
            active_tree_main_frame_time: number;
            impl_frame_time: number;
          };
          dur: number;
          name: 'CompositorTimingHistory::DidDraw';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ConcurrentMarking {
      type RunPreempted = 
        TraceEvent.ConcurrentMarking.RunPreempted.X;
    
      namespace RunPreempted {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ConcurrentMarking::Run Preempted';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace CONNECT_JOB_SET_SOCKET {
      interface n extends Base {
        args: {
          params: {
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'CONNECT_JOB_SET_SOCKET';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace ConnectJob {
      type NotifyDelegateOfCompletion = 
        TraceEvent.ConnectJob.NotifyDelegateOfCompletion.X;
    
      namespace NotifyDelegateOfCompletion {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ConnectJob::NotifyDelegateOfCompletion';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ConsoleMessage {
      type Error = 
        TraceEvent.ConsoleMessage.Error.I;
    
      namespace Error {
        interface I extends Base {
          args: {
            source: string;
          };
          name: 'ConsoleMessage::Error';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    }
  
    namespace Content {
      namespace Mojom {
        type ChildHistogramFetcherFactory = 
          TraceEvent.Content.Mojom.ChildHistogramFetcherFactory.X;
      
        type Frame = 
          TraceEvent.Content.Mojom.Frame.X;
      
        type FrameFactory = 
          TraceEvent.Content.Mojom.FrameFactory.X;
      
        type FrameInputHandler = 
          TraceEvent.Content.Mojom.FrameInputHandler.X;
      
        type FrameSinkProvider = 
          TraceEvent.Content.Mojom.FrameSinkProvider.X;
      
        type RenderFrameMetadataObserverClient = 
          TraceEvent.Content.Mojom.RenderFrameMetadataObserverClient.X;
      
        type SandboxSupportMac = 
          TraceEvent.Content.Mojom.SandboxSupportMac.X;
      
        type Widget = 
          TraceEvent.Content.Mojom.Widget.X;
      
        namespace ChildHistogramFetcherFactory {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'content.mojom.ChildHistogramFetcherFactory';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace Frame {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'content.mojom.Frame';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace FrameFactory {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'content.mojom.FrameFactory';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace FrameInputHandler {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'content.mojom.FrameInputHandler';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace FrameSinkProvider {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'content.mojom.FrameSinkProvider';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace RenderFrameMetadataObserverClient {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'content.mojom.RenderFrameMetadataObserverClient';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace SandboxSupportMac {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'content.mojom.SandboxSupportMac';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace Widget {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'content.mojom.Widget';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace ContentLayerDelegate {
      type PaintContents = 
        TraceEvent.ContentLayerDelegate.PaintContents.X;
    
      namespace PaintContents {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ContentLayerDelegate::paintContents';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ContentSubresourceFilterThrottleManager {
      type ReadyToCommitNavigation = 
        TraceEvent.ContentSubresourceFilterThrottleManager.ReadyToCommitNavigation.X;
    
      namespace ReadyToCommitNavigation {
        interface X extends Base {
          args: {
            activation_state: number;
          };
          dur: number;
          name: 'ContentSubresourceFilterThrottleManager::ReadyToCommitNavigation';
          ph: 'X';
          tdur: number;
          tts: number;
        }
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
  
    namespace Control_tq {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'control_tq';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace COOKIE_STORE_COOKIE_ADDED {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'COOKIE_STORE_COOKIE_ADDED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace COOKIE_STORE_COOKIE_DELETED {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'COOKIE_STORE_COOKIE_DELETED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace CpuProfiler {
      type StartProfiling = 
        TraceEvent.CpuProfiler.StartProfiling.X;
    
      namespace StartProfiling {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'CpuProfiler::StartProfiling';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace CreateIOSurface {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'CreateIOSurface';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace CSSFirstUsed {
      interface X extends Base {
        args: {
          feature: number;
        };
        dur: number;
        name: 'CSSFirstUsed';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace CSSParserImpl {
      namespace ParseStyleSheet {
        type Parse = 
          TraceEvent.CSSParserImpl.ParseStyleSheet.Parse.B |
          TraceEvent.CSSParserImpl.ParseStyleSheet.Parse.E;
      
        namespace Parse {
          interface B extends Base {
            args: {
            
            };
            name: 'CSSParserImpl::parseStyleSheet.parse';
            ph: 'B';
            tts: number;
          }
        
          interface E extends Base {
            args: {
            
            };
            name: 'CSSParserImpl::parseStyleSheet.parse';
            ph: 'E';
            tts: number;
          }
        }
      
        interface B extends Base {
          args: {
            baseUrl: string;
            mode: number;
          };
          name: 'CSSParserImpl::parseStyleSheet';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
            length: number;
            tokenCount: number;
          };
          name: 'CSSParserImpl::parseStyleSheet';
          ph: 'E';
          tts: number;
        }
      }
    }
  
    namespace CustomElementRegistry {
      type Define = 
        TraceEvent.CustomElementRegistry.Define.X;
    
      namespace Define {
        interface X extends Base {
          args: {
            name: string;
          };
          dur: number;
          name: 'CustomElementRegistry::define';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Damagenotvisible {
      interface I extends Base {
        args: {
        
        };
        name: 'Damage not visible.';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace DataReductionProxyCompressionStats {
      type RecordDataUseWithMimeType = 
        TraceEvent.DataReductionProxyCompressionStats.RecordDataUseWithMimeType.X;
    
      namespace RecordDataUseWithMimeType {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'DataReductionProxyCompressionStats::RecordDataUseWithMimeType';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace DecodeFont {
      interface B extends Base {
        args: {
        
        };
        name: 'DecodeFont';
        ph: 'B';
        tts: number;
      }
    
      interface E extends Base {
        args: {
        
        };
        name: 'DecodeFont';
        ph: 'E';
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
  
    namespace Default_tq {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'default_tq';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace DefaultPathOp {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'DefaultPathOp';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace DelayBasedTimeSource {
      type SetActive = 
        TraceEvent.DelayBasedTimeSource.SetActive.X;
    
      namespace SetActive {
        interface X extends Base {
          args: {
            active: boolean;
          };
          dur: number;
          name: 'DelayBasedTimeSource::SetActive';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Device {
      namespace Mojom {
        type PowerMonitor = 
          TraceEvent.Device.Mojom.PowerMonitor.X;
      
        type PowerMonitorClient = 
          TraceEvent.Device.Mojom.PowerMonitorClient.X;
      
        type TimeZoneMonitor = 
          TraceEvent.Device.Mojom.TimeZoneMonitor.X;
      
        type WakeLock = 
          TraceEvent.Device.Mojom.WakeLock.X;
      
        type WakeLockContext = 
          TraceEvent.Device.Mojom.WakeLockContext.X;
      
        type WakeLockProvider = 
          TraceEvent.Device.Mojom.WakeLockProvider.X;
      
        namespace PowerMonitor {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'device.mojom.PowerMonitor';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace PowerMonitorClient {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'device.mojom.PowerMonitorClient';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace TimeZoneMonitor {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'device.mojom.TimeZoneMonitor';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace WakeLock {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'device.mojom.WakeLock';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace WakeLockContext {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'device.mojom.WakeLockContext';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace WakeLockProvider {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'device.mojom.WakeLockProvider';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace DidPrepareTiles {
      interface I extends Base {
        args: {
          state: {
            did_oom_on_last_assign: boolean;
            global_state: {
              hard_memory_limit_in_bytes: number;
              memory_limit_policy: string;
              num_resources_limit: number;
              soft_memory_limit_in_bytes: number;
              tree_priority: string;
            };
            tile_count: number;
          };
        };
        name: 'DidPrepareTiles';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace DidProcessTask {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'DidProcessTask';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace DirectRenderer {
      type DrawFrame = 
        TraceEvent.DirectRenderer.DrawFrame.X;
    
      type DrawRenderPass = 
        TraceEvent.DirectRenderer.DrawRenderPass.X;
    
      namespace DrawFrame {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'DirectRenderer::DrawFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawRenderPass {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'DirectRenderer::DrawRenderPass';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Discardable_memory {
      namespace Mojom {
        type DiscardableSharedMemoryManager = 
          TraceEvent.Discardable_memory.Mojom.DiscardableSharedMemoryManager.X;
      
        namespace DiscardableSharedMemoryManager {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'discardable_memory.mojom.DiscardableSharedMemoryManager';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace DiscardableImageMap {
      type Generate = 
        TraceEvent.DiscardableImageMap.Generate.X;
    
      namespace Generate {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'DiscardableImageMap::Generate';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace DiskUsage {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'DiskUsage';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace Display {
      type DrawAndSwap = 
        TraceEvent.Display.DrawAndSwap.X;
    
      type Resize = 
        TraceEvent.Display.Resize.X;
    
      type SetSurfaceId = 
        TraceEvent.Display.SetSurfaceId.X;
    
      type SetVisible = 
        TraceEvent.Display.SetVisible.X;
    
      type SurfaceDiscarded = 
        TraceEvent.Display.SurfaceDiscarded.X;
    
      namespace DrawAndSwap {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Display::DrawAndSwap';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Resize {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Display::Resize';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetSurfaceId {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Display::SetSurfaceId';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetVisible {
        interface X extends Base {
          args: {
            visible: boolean;
          };
          dur: number;
          name: 'Display::SetVisible';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SurfaceDiscarded {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Display::SurfaceDiscarded';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace DisplayCALayerTree {
      type GotCAContextFrame = 
        TraceEvent.DisplayCALayerTree.GotCAContextFrame.X;
    
      namespace GotCAContextFrame {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'DisplayCALayerTree::GotCAContextFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace DisplayCompositor {
      interface b extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'DisplayCompositor';
        ph: 'b';
        tts: number;
        use_async_tts: number;
      }
    
      interface e extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'DisplayCompositor';
        ph: 'e';
        tts: number;
        use_async_tts: number;
      }
    
      interface F extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'DisplayCompositor';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'DisplayCompositor';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace DisplayItemList {
      type Finalize = 
        TraceEvent.DisplayItemList.Finalize.X;
    
      namespace Finalize {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'DisplayItemList::Finalize';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace DisplayLinkMac {
      type DisplayLinkCallback = 
        TraceEvent.DisplayLinkMac.DisplayLinkCallback.X;
    
      type UpdateVSyncParameters = 
        TraceEvent.DisplayLinkMac.UpdateVSyncParameters.X;
    
      namespace DisplayLinkCallback {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'DisplayLinkMac::DisplayLinkCallback';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UpdateVSyncParameters {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'DisplayLinkMac::UpdateVSyncParameters';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace DisplayScheduler {
      type BeginFrame = 
        TraceEvent.DisplayScheduler.BeginFrame.X;
    
      type DrawAndSwap = 
        TraceEvent.DisplayScheduler.DrawAndSwap.X;
    
      type OnBeginFrameDeadline = 
        TraceEvent.DisplayScheduler.OnBeginFrameDeadline.X;
    
      type Pending_swaps = 
        TraceEvent.DisplayScheduler.Pending_swaps.F |
        TraceEvent.DisplayScheduler.Pending_swaps.S;
    
      type ScheduleBeginFrameDeadline = 
        TraceEvent.DisplayScheduler.ScheduleBeginFrameDeadline.X;
    
      type SetNewRootSurface = 
        TraceEvent.DisplayScheduler.SetNewRootSurface.X;
    
      type SetRootFrameMissing = 
        TraceEvent.DisplayScheduler.SetRootFrameMissing.X;
    
      type SurfaceDamaged = 
        TraceEvent.DisplayScheduler.SurfaceDamaged.X;
    
      type SurfaceDamageExpected = 
        TraceEvent.DisplayScheduler.SurfaceDamageExpected.X;
    
      type UpdateHasPendingSurfaces = 
        TraceEvent.DisplayScheduler.UpdateHasPendingSurfaces.I;
    
      namespace BeginFrame {
        interface X extends Base {
          args: {
            args: {
              animate_only: boolean;
              deadline_us: number;
              frame_time_us: number;
              interval_us: number;
              on_critical_path: boolean;
              sequence_number: number;
              source_id: number;
              subtype: string;
              type: string;
            };
            now: number;
          };
          dur: number;
          name: 'DisplayScheduler::BeginFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawAndSwap {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'DisplayScheduler::DrawAndSwap';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnBeginFrameDeadline {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'DisplayScheduler::OnBeginFrameDeadline';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Pending_swaps {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'DisplayScheduler:pending_swaps';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'DisplayScheduler:pending_swaps';
          ph: 'S';
          tts: number;
        }
      }
    
      namespace ScheduleBeginFrameDeadline {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'DisplayScheduler::ScheduleBeginFrameDeadline';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetNewRootSurface {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'DisplayScheduler::SetNewRootSurface';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetRootFrameMissing {
        interface X extends Base {
          args: {
            missing: boolean;
          };
          dur: number;
          name: 'DisplayScheduler::SetRootFrameMissing';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SurfaceDamaged {
        interface X extends Base {
          args: {
            surface_id: string;
          };
          dur: number;
          name: 'DisplayScheduler::SurfaceDamaged';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SurfaceDamageExpected {
        interface X extends Base {
          args: {
            surface_id: string;
          };
          dur: number;
          name: 'DisplayScheduler::SurfaceDamageExpected';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UpdateHasPendingSurfaces {
        interface I extends Base {
          args: {
            has_pending_surfaces: boolean;
            pending_surface_id?: string;
          };
          name: 'DisplayScheduler::UpdateHasPendingSurfaces';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    }
  
    namespace DNS_TRANSACTION_ATTEMPT {
      interface n extends Base {
        args: {
          params: {
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'DNS_TRANSACTION_ATTEMPT';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace DNS_TRANSACTION_QUERY {
      interface b extends Base {
        args: {
          params: {
            qname: string;
          };
          source_type: string;
        };
        id: string;
        name: 'DNS_TRANSACTION_QUERY';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: {
            net_error: number;
          };
          source_type: string;
        };
        id: string;
        name: 'DNS_TRANSACTION_QUERY';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace DNS_TRANSACTION_RESPONSE {
      interface n extends Base {
        args: {
          params: {
            answer_count: number;
            rcode: number;
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'DNS_TRANSACTION_RESPONSE';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace DNS_TRANSACTION {
      interface b extends Base {
        args: {
          params: {
            hostname: string;
            query_type: number;
          };
          source_type: string;
        };
        id: string;
        name: 'DNS_TRANSACTION';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: {
            net_error: number;
          };
          source_type: string;
        };
        id: string;
        name: 'DNS_TRANSACTION';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace Document {
      type RebuildLayoutTree = 
        TraceEvent.Document.RebuildLayoutTree.X;
    
      type RecalcStyle = 
        TraceEvent.Document.RecalcStyle.X;
    
      type Shutdown = 
        TraceEvent.Document.Shutdown.X;
    
      type UpdateActiveStyle = 
        TraceEvent.Document.UpdateActiveStyle.X;
    
      type UpdateStyle = 
        TraceEvent.Document.UpdateStyle.B |
        TraceEvent.Document.UpdateStyle.E;
    
      type UpdateStyleInvalidationIfNeeded = 
        TraceEvent.Document.UpdateStyleInvalidationIfNeeded.X;
    
      namespace RebuildLayoutTree {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Document::rebuildLayoutTree';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RecalcStyle {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Document::recalcStyle';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Shutdown {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Document::shutdown';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UpdateActiveStyle {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Document::updateActiveStyle';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UpdateStyle {
        interface B extends Base {
          args: {
          
          };
          name: 'Document::updateStyle';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
            counters: {
              baseStylesUsed: number;
              customPropertiesApplied: number;
              elementsStyled: number;
              independentInheritedStylesPropagated: number;
              matchedPropertyApply: number;
              matchedPropertyCacheAdded: number;
              matchedPropertyCacheHit: number;
              matchedPropertyCacheInheritedHit: number;
              pseudoElementsStyled: number;
              rulesFastRejected: number;
              rulesMatched: number;
              rulesRejected: number;
              stylesAnimated: number;
              stylesChanged: number;
              stylesUnchanged: number;
            };
            resolverAccessCount: number;
          };
          name: 'Document::updateStyle';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace UpdateStyleInvalidationIfNeeded {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Document::updateStyleInvalidationIfNeeded';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace DocumentSubresourceFilter {
      type GetLoadPolicy = 
        TraceEvent.DocumentSubresourceFilter.GetLoadPolicy.X;
    
      namespace GetLoadPolicy {
        interface X extends Base {
          args: {
            url: string;
          };
          dur: number;
          name: 'DocumentSubresourceFilter::GetLoadPolicy';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace DocumentTimeline {
      type ServiceAnimations = 
        TraceEvent.DocumentTimeline.ServiceAnimations.X;
    
      namespace ServiceAnimations {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'DocumentTimeline::serviceAnimations';
          ph: 'X';
          tdur: number;
          tts: number;
        }
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
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'DOM Content Loaded';
        ph: 'b';
      }
    
      interface e extends Base {
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
  
    namespace DomReady {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'domReady';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace DOMStorageHostMsg_LoadStorageArea {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'DOMStorageHostMsg_LoadStorageArea';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace DOMStorageHostMsg_OpenStorageArea {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'DOMStorageHostMsg_OpenStorageArea';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace DOMStorageHostMsg_RemoveItem {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'DOMStorageHostMsg_RemoveItem';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace DOMStorageHostMsg_SetItem {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'DOMStorageHostMsg_SetItem';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace DOMStorageMsg_AsyncOperationComplete {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'DOMStorageMsg_AsyncOperationComplete';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace DOMStorageMsg_Event {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'DOMStorageMsg_Event';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace DomTime {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'domTime';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'domTime';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace DosplayResourceProvider {
      type DeleteResourceInternal = 
        TraceEvent.DosplayResourceProvider.DeleteResourceInternal.X;
    
      namespace DeleteResourceInternal {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'DosplayResourceProvider::DeleteResourceInternal';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace DoVerifyOnWorkerThread {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'DoVerifyOnWorkerThread';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace Draw_property_utils {
      type ComputeDrawPropertiesOfVisibleLayers = 
        TraceEvent.Draw_property_utils.ComputeDrawPropertiesOfVisibleLayers.X;
    
      type FindLayersThatNeedUpdates = 
        TraceEvent.Draw_property_utils.FindLayersThatNeedUpdates.X;
    
      namespace ComputeDrawPropertiesOfVisibleLayers {
        interface X extends Base {
          args: {
            visible_layers: number;
          };
          dur: number;
          name: 'draw_property_utils::ComputeDrawPropertiesOfVisibleLayers';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace FindLayersThatNeedUpdates {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'draw_property_utils::FindLayersThatNeedUpdates';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace DrawFrame {
      interface I extends Base {
        args: {
          layerTreeId: number;
        };
        name: 'DrawFrame';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace DrawLayers {
      type FrameViewerTracing = 
        TraceEvent.DrawLayers.FrameViewerTracing.X;
    
      namespace FrameViewerTracing {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'DrawLayers.FrameViewerTracing';
          ph: 'X';
          tdur: number;
          tts: number;
        }
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
  
    namespace Drawskipped {
      interface I extends Base {
        args: {
        
        };
        name: 'Draw skipped.';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace DrawVerticesOp {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'DrawVerticesOp';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace EarlyOut_DeferCommit_InsideBeginMainFrame {
      interface I extends Base {
        args: {
        
        };
        name: 'EarlyOut_DeferCommit_InsideBeginMainFrame';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace EarlyOut_NoUpdates {
      interface I extends Base {
        args: {
        
        };
        name: 'EarlyOut_NoUpdates';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace EditingUtility {
      type NextCandidateAlgorithm = 
        TraceEvent.EditingUtility.NextCandidateAlgorithm.X;
    
      type PreviousCandidateAlgorithm = 
        TraceEvent.EditingUtility.PreviousCandidateAlgorithm.X;
    
      namespace NextCandidateAlgorithm {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'EditingUtility::nextCandidateAlgorithm';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace PreviousCandidateAlgorithm {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'EditingUtility::previousCandidateAlgorithm';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ElementAnimations {
      type SetRunState = 
        TraceEvent.ElementAnimations.SetRunState.I;
    
      namespace SetRunState {
        interface I extends Base {
          args: {
            Name: string;
            State: string;
          };
          name: 'ElementAnimations::SetRunState';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    }
  
    namespace EnableLongIdlePeriod {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'EnableLongIdlePeriod';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace EndIdlePeriod {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'EndIdlePeriod';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace EndofTrace {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'End of Trace';
        ph: 'b';
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'End of Trace';
        ph: 'e';
      }
    }
  
    namespace Estimated_queueing_time_for_window {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'estimated_queueing_time_for_window';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace Evacuator {
      type EvacuatePage = 
        TraceEvent.Evacuator.EvacuatePage.X;
    
      namespace EvacuatePage {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Evacuator::EvacuatePage';
          ph: 'X';
          tdur: number;
          tts: number;
        }
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
  
    namespace Event {
      type Pipeline = 
        TraceEvent.Event.Pipeline.X;
    
      namespace Pipeline {
        interface X extends Base {
          args: {
            step: string;
          };
          bind_id?: string;
          dur: number;
          flow_in?: boolean;
          flow_out?: boolean;
          id2?: {
            global: string;
          };
          name: 'Event.Pipeline';
          ph: 'X';
          tdur: number;
          tts: number;
        }
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
        dur?: number;
        name: 'EventDispatch';
        ph: 'X';
        tdur?: number;
        tts: number;
      }
    }
  
    namespace EventDispatcher {
      type Dispatch = 
        TraceEvent.EventDispatcher.Dispatch.X;
    
      type DispatchEvent = 
        TraceEvent.EventDispatcher.DispatchEvent.X;
    
      namespace Dispatch {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'EventDispatcher::dispatch';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DispatchEvent {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'EventDispatcher::dispatchEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace EventHandler {
      type HandleMouseLeaveEvent = 
        TraceEvent.EventHandler.HandleMouseLeaveEvent.X;
    
      type HandleMouseMoveEvent = 
        TraceEvent.EventHandler.HandleMouseMoveEvent.X;
    
      type HandleMousePressEvent = 
        TraceEvent.EventHandler.HandleMousePressEvent.X;
    
      type HandleMouseReleaseEvent = 
        TraceEvent.EventHandler.HandleMouseReleaseEvent.X;
    
      type HitTestResultAtLocation = 
        TraceEvent.EventHandler.HitTestResultAtLocation.X;
    
      namespace HandleMouseLeaveEvent {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'EventHandler::handleMouseLeaveEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace HandleMouseMoveEvent {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'EventHandler::handleMouseMoveEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace HandleMousePressEvent {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'EventHandler::handleMousePressEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace HandleMouseReleaseEvent {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'EventHandler::handleMouseReleaseEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace HitTestResultAtLocation {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'EventHandler::HitTestResultAtLocation';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ExtensionHostMsg_AddLazyListener {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionHostMsg_AddLazyListener';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionHostMsg_AddListener {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionHostMsg_AddListener';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionHostMsg_CloseMessagePort {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionHostMsg_CloseMessagePort';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionHostMsg_EventAck {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionHostMsg_EventAck';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionHostMsg_ExecuteCodeFinished {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionHostMsg_ExecuteCodeFinished';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionHostMsg_GenerateUniqueID {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionHostMsg_GenerateUniqueID';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionHostMsg_GetMessageBundle {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionHostMsg_GetMessageBundle';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionHostMsg_OpenChannelToExtension {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionHostMsg_OpenChannelToExtension';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionHostMsg_OpenChannelToTab {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionHostMsg_OpenChannelToTab';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionHostMsg_OpenMessagePort {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionHostMsg_OpenMessagePort';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionHostMsg_PostMessage {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionHostMsg_PostMessage';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionHostMsg_Request {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionHostMsg_Request';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionHostMsg_RequestForIOThread {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionHostMsg_RequestForIOThread';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionMsg_ActivateExtension {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionMsg_ActivateExtension';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionMsg_DeliverMessage {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionMsg_DeliverMessage';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionMsg_DispatchEvent {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionMsg_DispatchEvent';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionMsg_DispatchOnConnect {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionMsg_DispatchOnConnect';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionMsg_DispatchOnDisconnect {
      interface X extends Base {
        args: {
        
        };
        dur?: number;
        name: 'ExtensionMsg_DispatchOnDisconnect';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionMsg_ExecuteCode {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionMsg_ExecuteCode';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionMsg_Loaded {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionMsg_Loaded';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionMsg_NotifyRenderViewType {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionMsg_NotifyRenderViewType';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionMsg_Response {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionMsg_Response';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionMsg_SetScriptingWhitelist {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionMsg_SetScriptingWhitelist';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionMsg_SetSessionInfo {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionMsg_SetSessionInfo';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionMsg_SetSystemFont {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionMsg_SetSystemFont';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionMsg_SetTabId {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionMsg_SetTabId';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionMsg_UpdateBrowserWindowId {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionMsg_UpdateBrowserWindowId';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionMsg_UpdateDefaultPolicyHostRestrictions {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionMsg_UpdateDefaultPolicyHostRestrictions';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionMsg_UpdateUserScripts {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionMsg_UpdateUserScripts';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionMsg_ValidateMessagePort {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionMsg_ValidateMessagePort';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ExtensionMsg_WatchPages {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ExtensionMsg_WatchPages';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace Extensions {
      namespace FeatureProvider {
        type FeatureProviderStatic = 
          TraceEvent.Extensions.FeatureProvider.FeatureProviderStatic.X;
      
        namespace FeatureProviderStatic {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'extensions::FeatureProvider::FeatureProviderStatic';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace FaveReady_mark {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'faveReady_mark';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace FaveReady {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'faveReady';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'faveReady';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace FaviconServiceImpl {
      type GetFaviconForPageURL = 
        TraceEvent.FaviconServiceImpl.GetFaviconForPageURL.X;
    
      type GetFaviconImageForPageURL = 
        TraceEvent.FaviconServiceImpl.GetFaviconImageForPageURL.X;
    
      type RunFaviconImageCallbackWithBitmapResults = 
        TraceEvent.FaviconServiceImpl.RunFaviconImageCallbackWithBitmapResults.X;
    
      namespace GetFaviconForPageURL {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'FaviconServiceImpl::GetFaviconForPageURL';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GetFaviconImageForPageURL {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'FaviconServiceImpl::GetFaviconImageForPageURL';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RunFaviconImageCallbackWithBitmapResults {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'FaviconServiceImpl::RunFaviconImageCallbackWithBitmapResults';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace FaviconUtil {
      type SelectFaviconFramesFromPNGs = 
        TraceEvent.FaviconUtil.SelectFaviconFramesFromPNGs.X;
    
      type SelectFaviconFramesFromPNGsWithoutResizing = 
        TraceEvent.FaviconUtil.SelectFaviconFramesFromPNGsWithoutResizing.X;
    
      namespace SelectFaviconFramesFromPNGs {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'FaviconUtil::SelectFaviconFramesFromPNGs';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SelectFaviconFramesFromPNGsWithoutResizing {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'FaviconUtil::SelectFaviconFramesFromPNGsWithoutResizing';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace FeatureFirstUsed {
      interface X extends Base {
        args: {
          feature: number;
        };
        dur: number;
        name: 'FeatureFirstUsed';
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
  
    namespace File {
      type Close = 
        TraceEvent.File.Close.b |
        TraceEvent.File.Close.e;
    
      type Duplicate = 
        TraceEvent.File.Duplicate.b |
        TraceEvent.File.Duplicate.e;
    
      type Flush = 
        TraceEvent.File.Flush.b |
        TraceEvent.File.Flush.e;
    
      type GetInfo = 
        TraceEvent.File.GetInfo.b |
        TraceEvent.File.GetInfo.e;
    
      type Initialize = 
        TraceEvent.File.Initialize.b |
        TraceEvent.File.Initialize.e;
    
      type Read = 
        TraceEvent.File.Read.b |
        TraceEvent.File.Read.e;
    
      type ReadAtCurrentPos = 
        TraceEvent.File.ReadAtCurrentPos.b |
        TraceEvent.File.ReadAtCurrentPos.e;
    
      type Seek = 
        TraceEvent.File.Seek.b |
        TraceEvent.File.Seek.e;
    
      type SetLength = 
        TraceEvent.File.SetLength.b |
        TraceEvent.File.SetLength.e;
    
      type Write = 
        TraceEvent.File.Write.b |
        TraceEvent.File.Write.e;
    
      type WriteAtCurrentPos = 
        TraceEvent.File.WriteAtCurrentPos.b |
        TraceEvent.File.WriteAtCurrentPos.e;
    
      namespace Close {
        interface b extends Base {
          args: {
            path: string;
            size: number;
          };
          id: string;
          name: 'File::Close';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: 'File::Close';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace Duplicate {
        interface b extends Base {
          args: {
            path: string;
            size: number;
          };
          id: string;
          name: 'File::Duplicate';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: 'File::Duplicate';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace Flush {
        interface b extends Base {
          args: {
            path: string;
            size: number;
          };
          id: string;
          name: 'File::Flush';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: 'File::Flush';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace GetInfo {
        interface b extends Base {
          args: {
            path: string;
            size: number;
          };
          id: string;
          name: 'File::GetInfo';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: 'File::GetInfo';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace Initialize {
        interface b extends Base {
          args: {
            path: string;
            size: number;
          };
          id: string;
          name: 'File::Initialize';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: 'File::Initialize';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace Read {
        interface b extends Base {
          args: {
            path: string;
            size: number;
          };
          id: string;
          name: 'File::Read';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: 'File::Read';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace ReadAtCurrentPos {
        interface b extends Base {
          args: {
            path: string;
            size: number;
          };
          id: string;
          name: 'File::ReadAtCurrentPos';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: 'File::ReadAtCurrentPos';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace Seek {
        interface b extends Base {
          args: {
            path: string;
            size: number;
          };
          id: string;
          name: 'File::Seek';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: 'File::Seek';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace SetLength {
        interface b extends Base {
          args: {
            path: string;
            size: number;
          };
          id: string;
          name: 'File::SetLength';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: 'File::SetLength';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace Write {
        interface b extends Base {
          args: {
            path: string;
            size: number;
          };
          id: string;
          name: 'File::Write';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: 'File::Write';
          ph: 'e';
          tts: number;
        }
      }
    
      namespace WriteAtCurrentPos {
        interface b extends Base {
          args: {
            path: string;
            size: number;
          };
          id: string;
          name: 'File::WriteAtCurrentPos';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: 'File::WriteAtCurrentPos';
          ph: 'e';
          tts: number;
        }
      }
    
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'File';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'File';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace FillRectOp {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FillRectOp';
        ph: 'X';
        tdur: number;
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
  
    namespace FireIdleCallback {
      interface X extends Base {
        args: {
          data: {
            allottedMilliseconds: number;
            frame: string;
            id: number;
            timedOut: boolean;
          };
        };
        dur: number;
        name: 'FireIdleCallback';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FirstContentfulPaint {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'First Contentful Paint';
        ph: 'b';
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'First Contentful Paint';
        ph: 'e';
      }
    
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
  
    namespace FirstImagePaint {
      interface R extends Base {
        args: {
          data?: {
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
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'First Meaningful Paint';
        ph: 'b';
      }
    
      interface e extends Base {
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
  
    namespace FirstTextPaint {
      interface R extends Base {
        args: {
          frame: string;
        };
        name: 'firstTextPaint';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace FirstVisualChange {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'First Visual Change';
        ph: 'b';
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'First Visual Change';
        ph: 'e';
      }
    }
  
    namespace FooterEnd {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'footerEnd';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace FooterStart {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'footerStart';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace FooterTime {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'footerTime';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'footerTime';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace Frame_deferrable_tq {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'frame_deferrable_tq';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace Frame_loading_control_tq {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'frame_loading_control_tq';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace Frame_loading_tq {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'frame_loading_tq';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace Frame_pausable_tq {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'frame_pausable_tq';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace Frame_throttleable_tq {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'frame_throttleable_tq';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace Frame_unpausable_tq {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'frame_unpausable_tq';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace FrameBlameContext {
      interface LP extends Base {
        args: {
        
        };
        id: string;
        name: 'FrameBlameContext';
        ph: '(';
        scope: string;
        tts: number;
      }
    
      interface RP extends Base {
        args: {
        
        };
        id: string;
        name: 'FrameBlameContext';
        ph: ')';
        scope: string;
        tts: number;
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
  
    namespace FrameHostMsg_BeforeUnload_ACK {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_BeforeUnload_ACK';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_CheckCompleted {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_CheckCompleted';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_CookiesEnabled {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_CookiesEnabled';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_CreateChildFrame {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_CreateChildFrame';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_DidAddContentSecurityPolicies {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_DidAddContentSecurityPolicies';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_DidAddMessageToConsole {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_DidAddMessageToConsole';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_DidChangeFrameOwnerProperties {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_DidChangeFrameOwnerProperties';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_DidChangeLoadProgress {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_DidChangeLoadProgress';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_DidFailLoadWithError {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_DidFailLoadWithError';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_DidFinishDocumentLoad {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_DidFinishDocumentLoad';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_DidFinishLoad {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_DidFinishLoad';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_DidStopLoading {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_DidStopLoading';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_DispatchLoad {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_DispatchLoad';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_DocumentOnLoadCompleted {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_DocumentOnLoadCompleted';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_FocusedNodeChanged {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_FocusedNodeChanged';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_ForwardResourceTimingToParent {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_ForwardResourceTimingToParent';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_FrameFocused {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_FrameFocused';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_HittestData {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_HittestData';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_RouteMessageEvent {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_RouteMessageEvent';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_SuddenTerminationDisablerChanged {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_SuddenTerminationDisablerChanged';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_SwapOut_ACK {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_SwapOut_ACK';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_SynchronizeVisualProperties {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_SynchronizeVisualProperties';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_UpdatePageImportanceSignals {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_UpdatePageImportanceSignals';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_UpdateRenderThrottlingStatus {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_UpdateRenderThrottlingStatus';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_UpdateState {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_UpdateState';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_UpdateTitle {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_UpdateTitle';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_UpdateUserActivationState {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_UpdateUserActivationState';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_UpdateViewportIntersection {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_UpdateViewportIntersection';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameHostMsg_VisibilityChanged {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameHostMsg_VisibilityChanged';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameLoader {
      interface D extends Base {
        args: {
        
        };
        id: string;
        name: 'FrameLoader';
        ph: 'D';
        tts: number;
      }
    
      interface N extends Base {
        args: {
        
        };
        id: string;
        name: 'FrameLoader';
        ph: 'N';
        tts: number;
      }
    
      interface O extends Base {
        args: {
          snapshot: {
            documentLoaderURL: string;
            frame: {
              id_ref: string;
            };
            isLoadingMainFrame: boolean;
            provisionalDocumentLoaderURL: string;
            stateMachine: string;
          };
        };
        id: string;
        name: 'FrameLoader';
        ph: 'O';
        tts: number;
      }
    }
  
    namespace FrameMsg_AddContentSecurityPolicies {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameMsg_AddContentSecurityPolicies';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameMsg_Delete {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameMsg_Delete';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameMsg_DeleteProxy {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameMsg_DeleteProxy';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameMsg_DidStartLoading {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameMsg_DidStartLoading';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameMsg_DidStopLoading {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameMsg_DidStopLoading';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameMsg_DidUpdateFramePolicy {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameMsg_DidUpdateFramePolicy';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameMsg_DidUpdateOrigin {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameMsg_DidUpdateOrigin';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameMsg_PostMessageEvent {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameMsg_PostMessageEvent';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameMsg_ResetContentSecurityPolicy {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameMsg_ResetContentSecurityPolicy';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameMsg_SetAccessibilityMode {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameMsg_SetAccessibilityMode';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameMsg_SetFrameOwnerProperties {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameMsg_SetFrameOwnerProperties';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FrameMsg_UpdateUserActivationState {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FrameMsg_UpdateUserActivationState';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace FramePresented {
      interface R extends Base {
        args: {
          environment: string;
        };
        name: 'FramePresented';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace FrameScheduler {
      type FramePaused = 
        TraceEvent.FrameScheduler.FramePaused.F |
        TraceEvent.FrameScheduler.FramePaused.S |
        TraceEvent.FrameScheduler.FramePaused.T;
    
      type FrameVisible = 
        TraceEvent.FrameScheduler.FrameVisible.F |
        TraceEvent.FrameScheduler.FrameVisible.S |
        TraceEvent.FrameScheduler.FrameVisible.T;
    
      type HasActiveConnection = 
        TraceEvent.FrameScheduler.HasActiveConnection.F |
        TraceEvent.FrameScheduler.HasActiveConnection.S |
        TraceEvent.FrameScheduler.HasActiveConnection.T;
    
      type KeepActive = 
        TraceEvent.FrameScheduler.KeepActive.F |
        TraceEvent.FrameScheduler.KeepActive.S |
        TraceEvent.FrameScheduler.KeepActive.T;
    
      type Origin = 
        TraceEvent.FrameScheduler.Origin.F |
        TraceEvent.FrameScheduler.Origin.S |
        TraceEvent.FrameScheduler.Origin.T;
    
      type PageFrozen = 
        TraceEvent.FrameScheduler.PageFrozen.F |
        TraceEvent.FrameScheduler.PageFrozen.S |
        TraceEvent.FrameScheduler.PageFrozen.T;
    
      type PageVisibility = 
        TraceEvent.FrameScheduler.PageVisibility.F |
        TraceEvent.FrameScheduler.PageVisibility.S |
        TraceEvent.FrameScheduler.PageVisibility.T;
    
      type SubResourceLoadingPaused = 
        TraceEvent.FrameScheduler.SubResourceLoadingPaused.F |
        TraceEvent.FrameScheduler.SubResourceLoadingPaused.S |
        TraceEvent.FrameScheduler.SubResourceLoadingPaused.T;
    
      type TaskQueuesThrottled = 
        TraceEvent.FrameScheduler.TaskQueuesThrottled.F |
        TraceEvent.FrameScheduler.TaskQueuesThrottled.S |
        TraceEvent.FrameScheduler.TaskQueuesThrottled.T;
    
      type URL = 
        TraceEvent.FrameScheduler.URL.F |
        TraceEvent.FrameScheduler.URL.S |
        TraceEvent.FrameScheduler.URL.T;
    
      namespace FramePaused {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.FramePaused';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.FramePaused';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'FrameScheduler.FramePaused';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace FrameVisible {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.FrameVisible';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.FrameVisible';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'FrameScheduler.FrameVisible';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace HasActiveConnection {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.HasActiveConnection';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.HasActiveConnection';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'FrameScheduler.HasActiveConnection';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace KeepActive {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.KeepActive';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.KeepActive';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'FrameScheduler.KeepActive';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace Origin {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.Origin';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.Origin';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'FrameScheduler.Origin';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace PageFrozen {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.PageFrozen';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.PageFrozen';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'FrameScheduler.PageFrozen';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace PageVisibility {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.PageVisibility';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.PageVisibility';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'FrameScheduler.PageVisibility';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace SubResourceLoadingPaused {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.SubResourceLoadingPaused';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.SubResourceLoadingPaused';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'FrameScheduler.SubResourceLoadingPaused';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace TaskQueuesThrottled {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.TaskQueuesThrottled';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.TaskQueuesThrottled';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'FrameScheduler.TaskQueuesThrottled';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace URL {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.URL';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'FrameScheduler.URL';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'FrameScheduler.URL';
          ph: 'T';
          tts: number;
        }
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
  
    namespace FrameTreeNode {
      type DidStartLoading = 
        TraceEvent.FrameTreeNode.DidStartLoading.X;
    
      type DidStopLoading = 
        TraceEvent.FrameTreeNode.DidStopLoading.X;
    
      namespace DidStartLoading {
        interface X extends Base {
          args: {
            frame_tree_node: number;
            'to different document': boolean;
          };
          dur: number;
          name: 'FrameTreeNode::DidStartLoading';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidStopLoading {
        interface X extends Base {
          args: {
            frame_tree_node: number;
          };
          dur: number;
          name: 'FrameTreeNode::DidStopLoading';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      interface N extends Base {
        args: {
        
        };
        id: string;
        name: 'FrameTreeNode';
        ph: 'N';
        scope: string;
        tts: number;
      }
    
      interface O extends Base {
        args: {
          snapshot: {
            parent?: {
              id_ref: string;
              scope: string;
            };
            renderFrame?: {
              id_ref: string;
              pid_ref: number;
              scope: string;
            };
            url?: string;
          };
        };
        id: string;
        name: 'FrameTreeNode';
        ph: 'O';
        scope: string;
        tts: number;
      }
    }
  
    namespace FrameView {
      type Layout = 
        TraceEvent.FrameView.Layout.X;
    
      type PerformLayout = 
        TraceEvent.FrameView.PerformLayout.B |
        TraceEvent.FrameView.PerformLayout.E;
    
      type PerformPostLayoutTasks = 
        TraceEvent.FrameView.PerformPostLayoutTasks.X;
    
      type PerformPreLayoutTasks = 
        TraceEvent.FrameView.PerformPreLayoutTasks.X;
    
      namespace Layout {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'FrameView::layout';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace PerformLayout {
        interface B extends Base {
          args: {
            contentsHeightBeforeLayout: number;
          };
          name: 'FrameView::performLayout';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
            counters: {
              LayoutAnalyzerStackMaximumDepth?: number;
              LayoutBlockHeightChanged?: number;
              LayoutBlockSizeChanged?: number;
              LayoutBlockSizeDidNotChange?: number;
              LayoutBlockWidthChanged?: number;
              LayoutObjectsThatAreFloating?: number;
              LayoutObjectsThatAreOutOfFlowPositioned?: number;
              LayoutObjectsThatAreTableCells?: number;
              LayoutObjectsThatHadNeverHadLayout?: number;
              LayoutObjectsThatHaveALayer?: number;
              LayoutObjectsThatNeedLayoutForThemselves?: number;
              TotalLayoutObjectsThatWereLaidOut?: number;
              approximateBlankCharacterCount: number;
              contentsHeightAfterLayout: number;
              frame: string;
              host: string;
              visibleHeight: number;
            };
          };
          name: 'FrameView::performLayout';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace PerformPostLayoutTasks {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'FrameView::performPostLayoutTasks';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace PerformPreLayoutTasks {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'FrameView::performPreLayoutTasks';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace FullEvacuator {
      type RawEvacuatePage = 
        TraceEvent.FullEvacuator.RawEvacuatePage.X;
    
      namespace RawEvacuatePage {
        interface X extends Base {
          args: {
            evacuation_mode: number;
          };
          dur: number;
          name: 'FullEvacuator::RawEvacuatePage';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace FullImage {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'FullImage';
        ph: 'X';
        tdur: number;
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
  
    namespace GestureProvider {
      type InitGestureDetectors = 
        TraceEvent.GestureProvider.InitGestureDetectors.X;
    
      type OnTouchEvent = 
        TraceEvent.GestureProvider.OnTouchEvent.X;
    
      namespace InitGestureDetectors {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GestureProvider::InitGestureDetectors';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnTouchEvent {
        interface X extends Base {
          args: {
            action: string;
          };
          dur: number;
          name: 'GestureProvider::OnTouchEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GLContextCGL {
      type BackpressureFenceCreate = 
        TraceEvent.GLContextCGL.BackpressureFenceCreate.X;
    
      type BackpressureFenceWait = 
        TraceEvent.GLContextCGL.BackpressureFenceWait.X;
    
      type MakeCurrent = 
        TraceEvent.GLContextCGL.MakeCurrent.X;
    
      namespace BackpressureFenceCreate {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLContextCGL::BackpressureFenceCreate';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace BackpressureFenceWait {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLContextCGL::BackpressureFenceWait';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace MakeCurrent {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLContextCGL::MakeCurrent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GLES2 {
      type Finish = 
        TraceEvent.GLES2.Finish.X;
    
      type GetGLError = 
        TraceEvent.GLES2.GetGLError.X;
    
      type GetShaderPrecisionFormat = 
        TraceEvent.GLES2.GetShaderPrecisionFormat.X;
    
      type GetString = 
        TraceEvent.GLES2.GetString.X;
    
      type PostSubBufferCHROMIUM = 
        TraceEvent.GLES2.PostSubBufferCHROMIUM.X;
    
      namespace Finish {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLES2::Finish';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GetGLError {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLES2::GetGLError';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GetShaderPrecisionFormat {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLES2::GetShaderPrecisionFormat';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GetString {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLES2::GetString';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace PostSubBufferCHROMIUM {
        interface X extends Base {
          args: {
            height: number;
            width: number;
          };
          dur: number;
          name: 'GLES2::PostSubBufferCHROMIUM';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GLES2CommandBufferStub {
      type Initialize = 
        TraceEvent.GLES2CommandBufferStub.Initialize.X;
    
      namespace Initialize {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLES2CommandBufferStub::Initialize';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GLES2DecoderImpl {
      type ClearLevel = 
        TraceEvent.GLES2DecoderImpl.ClearLevel.X;
    
      type ClearLevelUsingGL = 
        TraceEvent.GLES2DecoderImpl.ClearLevelUsingGL.X;
    
      type DoCompileShader = 
        TraceEvent.GLES2DecoderImpl.DoCompileShader.X;
    
      type DoCreateAndConsumeTextureINTERNAL = 
        TraceEvent.GLES2DecoderImpl.DoCreateAndConsumeTextureINTERNAL.X;
    
      type DoLinkProgram = 
        TraceEvent.GLES2DecoderImpl.DoLinkProgram.X;
    
      type DoTexStorage2D = 
        TraceEvent.GLES2DecoderImpl.DoTexStorage2D.X;
    
      type DoTexStorage2DImageCHROMIUM = 
        TraceEvent.GLES2DecoderImpl.DoTexStorage2DImageCHROMIUM.X;
    
      type HandlePostSubBufferCHROMIUM = 
        TraceEvent.GLES2DecoderImpl.HandlePostSubBufferCHROMIUM.X;
    
      type HandleTexImage2D = 
        TraceEvent.GLES2DecoderImpl.HandleTexImage2D.X;
    
      type HandleTexSubImage2D = 
        TraceEvent.GLES2DecoderImpl.HandleTexSubImage2D.X;
    
      type Initialize = 
        TraceEvent.GLES2DecoderImpl.Initialize.X;
    
      type InitializeShaderTranslator = 
        TraceEvent.GLES2DecoderImpl.InitializeShaderTranslator.X;
    
      type RestoreState = 
        TraceEvent.GLES2DecoderImpl.RestoreState.X;
    
      namespace ClearLevel {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLES2DecoderImpl::ClearLevel';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ClearLevelUsingGL {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLES2DecoderImpl::ClearLevelUsingGL';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoCompileShader {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLES2DecoderImpl::DoCompileShader';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoCreateAndConsumeTextureINTERNAL {
        interface X extends Base {
          args: {
            context: string;
            'mailbox[0]': number;
          };
          dur: number;
          name: 'GLES2DecoderImpl::DoCreateAndConsumeTextureINTERNAL';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoLinkProgram {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLES2DecoderImpl::DoLinkProgram';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoTexStorage2D {
        interface X extends Base {
          args: {
            height: number;
            width: number;
          };
          dur: number;
          name: 'GLES2DecoderImpl::DoTexStorage2D';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoTexStorage2DImageCHROMIUM {
        interface X extends Base {
          args: {
            height: number;
            width: number;
          };
          dur: number;
          name: 'GLES2DecoderImpl::DoTexStorage2DImageCHROMIUM';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace HandlePostSubBufferCHROMIUM {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLES2DecoderImpl::HandlePostSubBufferCHROMIUM';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace HandleTexImage2D {
        interface X extends Base {
          args: {
            height: number;
            width: number;
          };
          dur: number;
          name: 'GLES2DecoderImpl::HandleTexImage2D';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace HandleTexSubImage2D {
        interface X extends Base {
          args: {
            height: number;
            width: number;
          };
          dur: number;
          name: 'GLES2DecoderImpl::HandleTexSubImage2D';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Initialize {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLES2DecoderImpl::Initialize';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace InitializeShaderTranslator {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLES2DecoderImpl::InitializeShaderTranslator';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RestoreState {
        interface X extends Base {
          args: {
            context: string;
          };
          dur: number;
          name: 'GLES2DecoderImpl::RestoreState';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GLES2Implementation {
      type CheckFramebufferStatus = 
        TraceEvent.GLES2Implementation.CheckFramebufferStatus.X;
    
      type GetIntegerv = 
        TraceEvent.GLES2Implementation.GetIntegerv.X;
    
      type Initialize = 
        TraceEvent.GLES2Implementation.Initialize.X;
    
      type SetAggressivelyFreeResources = 
        TraceEvent.GLES2Implementation.SetAggressivelyFreeResources.X;
    
      namespace CheckFramebufferStatus {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLES2Implementation::CheckFramebufferStatus';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GetIntegerv {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLES2Implementation::GetIntegerv';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Initialize {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLES2Implementation::Initialize';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetAggressivelyFreeResources {
        interface X extends Base {
          args: {
            aggressively_free_resources: boolean;
          };
          dur: number;
          name: 'GLES2Implementation::SetAggressivelyFreeResources';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GLFence {
      type HasCompleted = 
        TraceEvent.GLFence.HasCompleted.X;
    
      namespace HasCompleted {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLFence::HasCompleted';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GLImageIOSurface {
      type BindTexImage = 
        TraceEvent.GLImageIOSurface.BindTexImage.X;
    
      namespace BindTexImage {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLImageIOSurface::BindTexImage';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GlobalMemoryDump {
      type Computation = 
        TraceEvent.GlobalMemoryDump.Computation.X;
    
      namespace Computation {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GlobalMemoryDump.Computation';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      interface b extends Base {
        args: {
          dump_type: string;
          level_of_detail: string;
        };
        id2: {
          local: string;
        };
        name: 'GlobalMemoryDump';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          dump_guid: string;
          success: boolean;
        };
        id2: {
          local: string;
        };
        name: 'GlobalMemoryDump';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace GLRenderer {
      type BeginDrawingFrame = 
        TraceEvent.GLRenderer.BeginDrawingFrame.X;
    
      type InitializeSharedObjects = 
        TraceEvent.GLRenderer.InitializeSharedObjects.X;
    
      type SwapBuffers = 
        TraceEvent.GLRenderer.SwapBuffers.X;
    
      namespace BeginDrawingFrame {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLRenderer::BeginDrawingFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace InitializeSharedObjects {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLRenderer::InitializeSharedObjects';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SwapBuffers {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GLRenderer::SwapBuffers';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GlResizeChromium {
      interface X extends Base {
        args: {
          height: number;
          width: number;
        };
        dur: number;
        name: 'glResizeChromium';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace Goog_123_3_1_end {
      interface R extends Base {
        args: {
        
        };
        name: 'goog_123_3_1_end';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace Goog_123_3_1_start {
      interface R extends Base {
        args: {
        
        };
        name: 'goog_123_3_1_start';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace Goog_123_3_1 {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'goog_123_3_1';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'goog_123_3_1';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace Gpu {
      type EstablishGpuChannelSync = 
        TraceEvent.Gpu.EstablishGpuChannelSync.X;
    
      type State = 
        TraceEvent.Gpu.State.D |
        TraceEvent.Gpu.State.N |
        TraceEvent.Gpu.State.O;
    
      namespace EstablishGpuChannelSync {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Gpu::EstablishGpuChannelSync';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace State {
        interface D extends Base {
          args: {
          
          };
          id: string;
          name: 'gpu::State';
          ph: 'D';
          tts: number;
        }
      
        interface N extends Base {
          args: {
          
          };
          id: string;
          name: 'gpu::State';
          ph: 'N';
          tts: number;
        }
      
        interface O extends Base {
          args: {
            snapshot: {
            
            };
          };
          id: string;
          name: 'gpu::State';
          ph: 'O';
          tts: number;
        }
      }
    }
  
    namespace GpuChannel {
      type OnCreateCommandBuffer = 
        TraceEvent.GpuChannel.OnCreateCommandBuffer.X;
    
      type OnDestroyCommandBuffer = 
        TraceEvent.GpuChannel.OnDestroyCommandBuffer.X;
    
      namespace OnCreateCommandBuffer {
        interface X extends Base {
          args: {
            offscreen: boolean;
            route_id: number;
          };
          dur: number;
          name: 'GpuChannel::OnCreateCommandBuffer';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnDestroyCommandBuffer {
        interface X extends Base {
          args: {
            route_id: number;
          };
          dur: number;
          name: 'GpuChannel::OnDestroyCommandBuffer';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GpuChannelHost {
      type CreateViewCommandBuffer = 
        TraceEvent.GpuChannelHost.CreateViewCommandBuffer.X;
    
      type Send = 
        TraceEvent.GpuChannelHost.Send.X;
    
      namespace CreateViewCommandBuffer {
        interface X extends Base {
          args: {
            surface_handle: number;
          };
          dur: number;
          name: 'GpuChannelHost::CreateViewCommandBuffer';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Send {
        interface X extends Base {
          args: {
            class: number;
            line: number;
          };
          dur: number;
          name: 'GpuChannelHost::Send';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GpuChannelMsg_CreateCommandBuffer {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'GpuChannelMsg_CreateCommandBuffer';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace GpuChannelMsg_CreateSharedImage {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'GpuChannelMsg_CreateSharedImage';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace GpuChannelMsg_CreateSharedImageWithData {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'GpuChannelMsg_CreateSharedImageWithData';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace GpuChannelMsg_DestroyCommandBuffer {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'GpuChannelMsg_DestroyCommandBuffer';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace GpuChannelMsg_DestroySharedImage {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'GpuChannelMsg_DestroySharedImage';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace GpuChannelMsg_RegisterSharedImageUploadBuffer {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'GpuChannelMsg_RegisterSharedImageUploadBuffer';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace GpuCommandBufferMsg_AsyncFlush {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'GpuCommandBufferMsg_AsyncFlush';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace GpuCommandBufferMsg_DestroyTransferBuffer {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'GpuCommandBufferMsg_DestroyTransferBuffer';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace GpuCommandBufferMsg_GetChannelToken {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'GpuCommandBufferMsg_GetChannelToken';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace GpuCommandBufferMsg_RegisterTransferBuffer {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'GpuCommandBufferMsg_RegisterTransferBuffer';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace GpuCommandBufferMsg_SetGetBuffer {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'GpuCommandBufferMsg_SetGetBuffer';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace GpuCommandBufferMsg_WaitForGetOffsetInRange {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'GpuCommandBufferMsg_WaitForGetOffsetInRange';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace GpuHostImpl {
      type CreateChannelCache = 
        TraceEvent.GpuHostImpl.CreateChannelCache.X;
    
      type DidDestroyChannel = 
        TraceEvent.GpuHostImpl.DidDestroyChannel.X;
    
      type EstablishGpuChannel = 
        TraceEvent.GpuHostImpl.EstablishGpuChannel.X;
    
      type OnChannelEstablished = 
        TraceEvent.GpuHostImpl.OnChannelEstablished.X;
    
      namespace CreateChannelCache {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuHostImpl::CreateChannelCache';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidDestroyChannel {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuHostImpl::DidDestroyChannel';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace EstablishGpuChannel {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuHostImpl::EstablishGpuChannel';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnChannelEstablished {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuHostImpl::OnChannelEstablished';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GpuImageDecodeCache {
      type CreateImageData = 
        TraceEvent.GpuImageDecodeCache.CreateImageData.X;
    
      type DrawWithImageFinished = 
        TraceEvent.GpuImageDecodeCache.DrawWithImageFinished.X;
    
      type EnsureCapacity = 
        TraceEvent.GpuImageDecodeCache.EnsureCapacity.X;
    
      type GetDecodedImageForDraw = 
        TraceEvent.GpuImageDecodeCache.GetDecodedImageForDraw.X;
    
      type GetImageDataForDrawImage = 
        TraceEvent.GpuImageDecodeCache.GetImageDataForDrawImage.X;
    
      type GetImageDecodeTaskAndRef = 
        TraceEvent.GpuImageDecodeCache.GetImageDecodeTaskAndRef.X;
    
      type GetTaskForImageAndRef = 
        TraceEvent.GpuImageDecodeCache.GetTaskForImageAndRef.X;
    
      type OnImageUploadTaskCompleted = 
        TraceEvent.GpuImageDecodeCache.OnImageUploadTaskCompleted.X;
    
      type OnMemoryDump = 
        TraceEvent.GpuImageDecodeCache.OnMemoryDump.X;
    
      type ReduceCacheUsage = 
        TraceEvent.GpuImageDecodeCache.ReduceCacheUsage.X;
    
      type RefImage = 
        TraceEvent.GpuImageDecodeCache.RefImage.X;
    
      type RefImageDecode = 
        TraceEvent.GpuImageDecodeCache.RefImageDecode.X;
    
      type SetShouldAggressivelyFreeResources = 
        TraceEvent.GpuImageDecodeCache.SetShouldAggressivelyFreeResources.X;
    
      type UnrefImage = 
        TraceEvent.GpuImageDecodeCache.UnrefImage.X;
    
      type UnrefImageDecode = 
        TraceEvent.GpuImageDecodeCache.UnrefImageDecode.X;
    
      type UploadImage = 
        TraceEvent.GpuImageDecodeCache.UploadImage.X;
    
      namespace CreateImageData {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuImageDecodeCache::CreateImageData';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawWithImageFinished {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuImageDecodeCache::DrawWithImageFinished';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace EnsureCapacity {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuImageDecodeCache::EnsureCapacity';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GetDecodedImageForDraw {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuImageDecodeCache::GetDecodedImageForDraw';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GetImageDataForDrawImage {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuImageDecodeCache::GetImageDataForDrawImage';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GetImageDecodeTaskAndRef {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuImageDecodeCache::GetImageDecodeTaskAndRef';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GetTaskForImageAndRef {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuImageDecodeCache::GetTaskForImageAndRef';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnImageUploadTaskCompleted {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuImageDecodeCache::OnImageUploadTaskCompleted';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnMemoryDump {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuImageDecodeCache::OnMemoryDump';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ReduceCacheUsage {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuImageDecodeCache::ReduceCacheUsage';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RefImage {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuImageDecodeCache::RefImage';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RefImageDecode {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuImageDecodeCache::RefImageDecode';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetShouldAggressivelyFreeResources {
        interface X extends Base {
          args: {
            agressive_free_resources: boolean;
          };
          dur: number;
          name: 'GpuImageDecodeCache::SetShouldAggressivelyFreeResources';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UnrefImage {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuImageDecodeCache::UnrefImage';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UnrefImageDecode {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuImageDecodeCache::UnrefImageDecode';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UploadImage {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuImageDecodeCache::UploadImage';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GpuRasterBuffer {
      type Playback = 
        TraceEvent.GpuRasterBuffer.Playback.X;
    
      namespace Playback {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GpuRasterBuffer::Playback';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GpuRasterization {
      interface b extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'GpuRasterization';
        ph: 'b';
        tts: number;
        use_async_tts: number;
      }
    
      interface e extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'GpuRasterization';
        ph: 'e';
        tts: number;
        use_async_tts: number;
      }
    
      interface F extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'GpuRasterization';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'GpuRasterization';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace GPUStateTracer {
      type TakeSnapshotWithCurrentFramebuffer = 
        TraceEvent.GPUStateTracer.TakeSnapshotWithCurrentFramebuffer.X;
    
      namespace TakeSnapshotWithCurrentFramebuffer {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GPUStateTracer::TakeSnapshotWithCurrentFramebuffer';
          ph: 'X';
          tdur: number;
          tts: number;
        }
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
  
    namespace GPUTracer {
      type ProcessTraces = 
        TraceEvent.GPUTracer.ProcessTraces.X;
    
      namespace ProcessTraces {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GPUTracer::ProcessTraces';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Graphics {
      namespace Pipeline {
        type DrawAndSwap = 
          TraceEvent.Graphics.Pipeline.DrawAndSwap.F |
          TraceEvent.Graphics.Pipeline.DrawAndSwap.S |
          TraceEvent.Graphics.Pipeline.DrawAndSwap.T;
      
        namespace DrawAndSwap {
          interface F extends Base {
            args: {
              status?: string;
            };
            id: string;
            name: 'Graphics.Pipeline.DrawAndSwap';
            ph: 'F';
            tts: number;
          }
        
          interface S extends Base {
            args: {
            
            };
            id: string;
            name: 'Graphics.Pipeline.DrawAndSwap';
            ph: 'S';
            tts: number;
          }
        
          interface T extends Base {
            args: {
              step: string;
            };
            id: string;
            name: 'Graphics.Pipeline.DrawAndSwap';
            ph: 'T';
            tts: number;
          }
        }
      
        interface X extends Base {
          args: {
            display_trace?: number;
            step: string;
          };
          bind_id: string;
          dur?: number;
          flow_in?: boolean;
          flow_out: boolean;
          id2: {
            global: string;
          };
          name: 'Graphics.Pipeline';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GraphicsLayer {
      type PaintContents = 
        TraceEvent.GraphicsLayer.PaintContents.X;
    
      namespace PaintContents {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GraphicsLayer::PaintContents';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GraphicsLayerTreeBuilder {
      type Rebuild = 
        TraceEvent.GraphicsLayerTreeBuilder.Rebuild.X;
    
      namespace Rebuild {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GraphicsLayerTreeBuilder::rebuild';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GraphicsLayerUpdater {
      type Update = 
        TraceEvent.GraphicsLayerUpdater.Update.X;
    
      namespace Update {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GraphicsLayerUpdater::update';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GrContextPriv {
      type WriteSurfacePixels = 
        TraceEvent.GrContextPriv.WriteSurfacePixels.X;
    
      namespace WriteSurfacePixels {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrContextPriv::writeSurfacePixels';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GrDrawingManager {
      type Flush = 
        TraceEvent.GrDrawingManager.Flush.X;
    
      namespace Flush {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrDrawingManager::flush';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GrDrawOpAtlas {
      namespace Plot {
        type UploadToTextureGrDeferredTextureUploadWritePixelsFnGrTextureProxy = 
          TraceEvent.GrDrawOpAtlas.Plot.UploadToTextureGrDeferredTextureUploadWritePixelsFnGrTextureProxy.X;
      
        namespace UploadToTextureGrDeferredTextureUploadWritePixelsFnGrTextureProxy {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'void GrDrawOpAtlas::Plot::uploadToTexture(GrDeferredTextureUploadWritePixelsFn &, GrTextureProxy *)';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace GrGLProgramGrGLProgramBuilder {
      type Finalize = 
        TraceEvent.GrGLProgramGrGLProgramBuilder.Finalize.X;
    
      namespace Finalize {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrGLProgram *GrGLProgramBuilder::finalize()';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GrGpu {
      type CreateTexture = 
        TraceEvent.GrGpu.CreateTexture.X;
    
      namespace CreateTexture {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrGpu::createTexture';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GrRenderTargetContext {
      type AddDrawOp = 
        TraceEvent.GrRenderTargetContext.AddDrawOp.X;
    
      type Clear = 
        TraceEvent.GrRenderTargetContext.Clear.X;
    
      type Discard = 
        TraceEvent.GrRenderTargetContext.Discard.X;
    
      type DrawGlyphRunList = 
        TraceEvent.GrRenderTargetContext.DrawGlyphRunList.X;
    
      type DrawOval = 
        TraceEvent.GrRenderTargetContext.DrawOval.X;
    
      type DrawPaint = 
        TraceEvent.GrRenderTargetContext.DrawPaint.X;
    
      type DrawPath = 
        TraceEvent.GrRenderTargetContext.DrawPath.X;
    
      type DrawRect = 
        TraceEvent.GrRenderTargetContext.DrawRect.X;
    
      type DrawRRect = 
        TraceEvent.GrRenderTargetContext.DrawRRect.X;
    
      type DrawShape = 
        TraceEvent.GrRenderTargetContext.DrawShape.X;
    
      type DrawTexture = 
        TraceEvent.GrRenderTargetContext.DrawTexture.X;
    
      type DrawVertices = 
        TraceEvent.GrRenderTargetContext.DrawVertices.X;
    
      type FillRectToRect = 
        TraceEvent.GrRenderTargetContext.FillRectToRect.X;
    
      type FillRectWithLocalMatrix = 
        TraceEvent.GrRenderTargetContext.FillRectWithLocalMatrix.X;
    
      type InternalDrawPath = 
        TraceEvent.GrRenderTargetContext.InternalDrawPath.X;
    
      type PrepareForExternalIO = 
        TraceEvent.GrRenderTargetContext.PrepareForExternalIO.X;
    
      namespace AddDrawOp {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrRenderTargetContext::addDrawOp';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Clear {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrRenderTargetContext::clear';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Discard {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrRenderTargetContext::discard';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawGlyphRunList {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrRenderTargetContext::drawGlyphRunList';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawOval {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrRenderTargetContext::drawOval';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawPaint {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrRenderTargetContext::drawPaint';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawPath {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrRenderTargetContext::drawPath';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawRect {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrRenderTargetContext::drawRect';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawRRect {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrRenderTargetContext::drawRRect';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawShape {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrRenderTargetContext::drawShape';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawTexture {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrRenderTargetContext::drawTexture';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawVertices {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrRenderTargetContext::drawVertices';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace FillRectToRect {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrRenderTargetContext::fillRectToRect';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace FillRectWithLocalMatrix {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrRenderTargetContext::fillRectWithLocalMatrix';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace InternalDrawPath {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrRenderTargetContext::internalDrawPath';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace PrepareForExternalIO {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrRenderTargetContext::prepareForExternalIO';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace GrRenderTargetContextPriv {
      type AbsClear = 
        TraceEvent.GrRenderTargetContextPriv.AbsClear.X;
    
      namespace AbsClear {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'GrRenderTargetContextPriv::absClear';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace HandleMouseMove {
      interface X extends Base {
        args: {
          x: number;
          y: number;
        };
        dur: number;
        name: 'HandleMouseMove';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace HeadEnd {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'headEnd';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace HeadTime {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'headTime';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'headTime';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace Heap {
      type CollectCodeStatistics = 
        TraceEvent.Heap.CollectCodeStatistics.X;
    
      namespace CollectCodeStatistics {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Heap::CollectCodeStatistics';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace HistoryBackend {
      type GetFaviconsForURL = 
        TraceEvent.HistoryBackend.GetFaviconsForURL.X;
    
      namespace GetFaviconsForURL {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HistoryBackend::GetFaviconsForURL';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace HistoryQuickProvider {
      type Start = 
        TraceEvent.HistoryQuickProvider.Start.X;
    
      namespace Start {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HistoryQuickProvider::Start';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace HistoryService {
      type GetFaviconsForURL = 
        TraceEvent.HistoryService.GetFaviconsForURL.X;
    
      namespace GetFaviconsForURL {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HistoryService::GetFaviconsForURL';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace HistoryURLProvider {
      type QueryComplete = 
        TraceEvent.HistoryURLProvider.QueryComplete.X;
    
      type Start = 
        TraceEvent.HistoryURLProvider.Start.X;
    
      namespace QueryComplete {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HistoryURLProvider::QueryComplete';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Start {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HistoryURLProvider::Start';
          ph: 'X';
          tdur: number;
          tts: number;
        }
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
            move?: boolean;
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
  
    namespace HOST_RESOLVER_IMPL_ATTEMPT_FINISHED {
      interface n extends Base {
        args: {
          params: {
            attempt_number: number;
            net_error: number;
            os_error: number;
            os_error_string: string;
          };
          source_type: string;
        };
        id: string;
        name: 'HOST_RESOLVER_IMPL_ATTEMPT_FINISHED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HOST_RESOLVER_IMPL_ATTEMPT_STARTED {
      interface n extends Base {
        args: {
          params: {
            attempt_number: number;
          };
          source_type: string;
        };
        id: string;
        name: 'HOST_RESOLVER_IMPL_ATTEMPT_STARTED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HOST_RESOLVER_IMPL_CACHE_HIT {
      interface n extends Base {
        args: {
          params: {
            addresses: {
              '0': string;
              '1': string;
              '2': string;
              '3': string;
              '4': string;
              '5': string;
              '6': string;
              '7': string;
              '8': string;
              '9': string;
              '10': string;
              '11': string;
              '12'?: {
              
              };
              '13'?: {
              
              };
            }[];
            expiration: string;
          };
          source_type: string;
        };
        id: string;
        name: 'HOST_RESOLVER_IMPL_CACHE_HIT';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HOST_RESOLVER_IMPL_CREATE_JOB {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HOST_RESOLVER_IMPL_CREATE_JOB';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HOST_RESOLVER_IMPL_DNS_TASK {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HOST_RESOLVER_IMPL_DNS_TASK';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: {
            addresses?: {
              '0': string;
              '1': string;
              '2': string;
              '3': string;
              '4': string;
              '5': string;
              '6': string;
              '7': string;
              '8': string;
              '9': string;
              '10': string;
              '11'?: string;
              '12'?: string;
              '13'?: string;
              '14'?: {
              
              };
            }[];
            error?: number;
            expiration: string;
          };
          source_type: string;
        };
        id: string;
        name: 'HOST_RESOLVER_IMPL_DNS_TASK';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HOST_RESOLVER_IMPL_IPV6_REACHABILITY_CHECK {
      interface n extends Base {
        args: {
          params: {
            cached: boolean;
            ipv6_available: boolean;
          };
          source_type: string;
        };
        id: string;
        name: 'HOST_RESOLVER_IMPL_IPV6_REACHABILITY_CHECK';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HOST_RESOLVER_IMPL_JOB_ATTACH {
      interface n extends Base {
        args: {
          params: {
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'HOST_RESOLVER_IMPL_JOB_ATTACH';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HOST_RESOLVER_IMPL_JOB_REQUEST_ATTACH {
      interface n extends Base {
        args: {
          params: {
            priority: string;
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'HOST_RESOLVER_IMPL_JOB_REQUEST_ATTACH';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HOST_RESOLVER_IMPL_JOB_STARTED {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HOST_RESOLVER_IMPL_JOB_STARTED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HOST_RESOLVER_IMPL_JOB {
      interface b extends Base {
        args: {
          params: {
            host: string;
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'HOST_RESOLVER_IMPL_JOB';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: {
            net_error: number;
          };
          source_type: string;
        };
        id: string;
        name: 'HOST_RESOLVER_IMPL_JOB';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HOST_RESOLVER_IMPL_PROC_TASK {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HOST_RESOLVER_IMPL_PROC_TASK';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: {
            net_error: number;
            os_error: number;
            os_error_string: string;
          };
          source_type: string;
        };
        id: string;
        name: 'HOST_RESOLVER_IMPL_PROC_TASK';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HOST_RESOLVER_IMPL_REQUEST {
      interface b extends Base {
        args: {
          params: {
            address_family: number;
            allow_cached_response: boolean;
            host: string;
            is_speculative: boolean;
          };
          source_type: string;
        };
        id: string;
        name: 'HOST_RESOLVER_IMPL_REQUEST';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: {
            net_error: number;
          };
          source_type: string;
        };
        id: string;
        name: 'HOST_RESOLVER_IMPL_REQUEST';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HostCache {
      type Set = 
        TraceEvent.HostCache.Set.X;
    
      namespace Set {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HostCache::Set';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace HTMLCanvasElement {
      type FinalizeFrame = 
        TraceEvent.HTMLCanvasElement.FinalizeFrame.X;
    
      namespace FinalizeFrame {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HTMLCanvasElement::FinalizeFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace HTMLDocumentParser {
      type Append = 
        TraceEvent.HTMLDocumentParser.Append.X;
    
      type AppendBytes = 
        TraceEvent.HTMLDocumentParser.AppendBytes.X;
    
      type DocumentElementAvailable = 
        TraceEvent.HTMLDocumentParser.DocumentElementAvailable.X;
    
      type EnqueueTokenizedChunk = 
        TraceEvent.HTMLDocumentParser.EnqueueTokenizedChunk.X;
    
      type Insert = 
        TraceEvent.HTMLDocumentParser.Insert.X;
    
      type ProcessTokenizedChunkFromBackgroundParser = 
        TraceEvent.HTMLDocumentParser.ProcessTokenizedChunkFromBackgroundParser.X;
    
      namespace Append {
        interface X extends Base {
          args: {
            size: number;
          };
          dur: number;
          name: 'HTMLDocumentParser::append';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace AppendBytes {
        interface X extends Base {
          args: {
            size: number;
          };
          dur: number;
          name: 'HTMLDocumentParser::appendBytes';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DocumentElementAvailable {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HTMLDocumentParser::documentElementAvailable';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace EnqueueTokenizedChunk {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HTMLDocumentParser::EnqueueTokenizedChunk';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Insert {
        interface X extends Base {
          args: {
            source_length: number;
          };
          dur: number;
          name: 'HTMLDocumentParser::insert';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ProcessTokenizedChunkFromBackgroundParser {
        interface X extends Base {
          args: {
          
          };
          bind_id: string;
          dur: number;
          flow_in: boolean;
          id: string;
          name: 'HTMLDocumentParser::processTokenizedChunkFromBackgroundParser';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace HTMLParserScriptRunner {
      type Execute = 
        TraceEvent.HTMLParserScriptRunner.Execute.X;
    
      type ExecuteScriptsWaitingForLoad = 
        TraceEvent.HTMLParserScriptRunner.ExecuteScriptsWaitingForLoad.X;
    
      type ExecuteScriptsWaitingForParsing = 
        TraceEvent.HTMLParserScriptRunner.ExecuteScriptsWaitingForParsing.X;
    
      type ExecuteScriptsWaitingForResources = 
        TraceEvent.HTMLParserScriptRunner.ExecuteScriptsWaitingForResources.X;
    
      namespace Execute {
        interface X extends Base {
          args: {
            data: {
              columnNumber: number;
              frame: string;
              lineNumber: number;
            };
          };
          dur: number;
          name: 'HTMLParserScriptRunner::execute';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ExecuteScriptsWaitingForLoad {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HTMLParserScriptRunner::executeScriptsWaitingForLoad';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ExecuteScriptsWaitingForParsing {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HTMLParserScriptRunner::executeScriptsWaitingForParsing';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ExecuteScriptsWaitingForResources {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HTMLParserScriptRunner::executeScriptsWaitingForResources';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace HTMLParserScriptRunnerExecuteScript {
      interface X extends Base {
        args: {
          data: {
            columnNumber?: number;
            frame: string;
            lineNumber?: number;
            url?: string;
          };
        };
        bind_id: string;
        dur: number;
        flow_in: boolean;
        id: string;
        name: 'HTMLParserScriptRunner ExecuteScript';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace HTMLSelectElement {
      type SelectOption = 
        TraceEvent.HTMLSelectElement.SelectOption.X;
    
      namespace SelectOption {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HTMLSelectElement::selectOption';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace HTTP_CACHE_ADD_TO_ENTRY {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_CACHE_ADD_TO_ENTRY';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_CACHE_ADD_TO_ENTRY';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HTTP_CACHE_CALLER_REQUEST_HEADERS {
      interface n extends Base {
        args: {
          params: {
            headers: {
              '0': string;
              '1': string;
              '2': string;
              '3': string;
              '4': string;
              '5': string;
              '6': string;
              '7': string;
              '8': string;
              '9': string;
              '10': string;
              '11': string;
              '12': string;
              '13': string;
              '14': string;
              '15': string;
              '16': string;
              '17': string;
              '18': string;
              '19': string;
              '20': string;
              '21': string;
              '22': string;
              '23': string;
              '24': string;
              '25': string;
              '26': string;
              '27': string;
              '28': string;
              '29': string;
              '30': string;
              '31': string;
              '32': string;
              '33': string;
              '34': string;
              '35': string;
            }[];
            line: string;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP_CACHE_CALLER_REQUEST_HEADERS';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP_CACHE_CREATE_ENTRY {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_CACHE_CREATE_ENTRY';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_CACHE_CREATE_ENTRY';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HTTP_CACHE_GET_BACKEND {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_CACHE_GET_BACKEND';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_CACHE_GET_BACKEND';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HTTP_CACHE_OPEN_ENTRY {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_CACHE_OPEN_ENTRY';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: {
            net_error: number;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP_CACHE_OPEN_ENTRY';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HTTP_CACHE_READ_DATA {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_CACHE_READ_DATA';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_CACHE_READ_DATA';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HTTP_CACHE_READ_INFO {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_CACHE_READ_INFO';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_CACHE_READ_INFO';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HTTP_CACHE_WRITE_DATA {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_CACHE_WRITE_DATA';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_CACHE_WRITE_DATA';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HTTP_CACHE_WRITE_INFO {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_CACHE_WRITE_INFO';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_CACHE_WRITE_INFO';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HTTP_STREAM_JOB_BOUND_TO_QUIC_STREAM_FACTORY_JOB {
      interface n extends Base {
        args: {
          params: {
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_JOB_BOUND_TO_QUIC_STREAM_FACTORY_JOB';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP_STREAM_JOB_BOUND_TO_REQUEST {
      interface n extends Base {
        args: {
          params: {
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_JOB_BOUND_TO_REQUEST';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP_STREAM_JOB_CONTROLLER_ALT_SVC_FOUND {
      interface n extends Base {
        args: {
          params: {
            alt_svc: string;
            is_broken: boolean;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_JOB_CONTROLLER_ALT_SVC_FOUND';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP_STREAM_JOB_CONTROLLER_BOUND {
      interface n extends Base {
        args: {
          params: {
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_JOB_CONTROLLER_BOUND';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP_STREAM_JOB_CONTROLLER_PROXY_SERVER_RESOLVED {
      interface n extends Base {
        args: {
          params: {
            proxy_server: string;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_JOB_CONTROLLER_PROXY_SERVER_RESOLVED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP_STREAM_JOB_CONTROLLER {
      interface b extends Base {
        args: {
          params: {
            is_preconnect: boolean;
            url: string;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_JOB_CONTROLLER';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_JOB_CONTROLLER';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HTTP_STREAM_JOB_DELAYED {
      interface n extends Base {
        args: {
          params: {
            delay: number;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_JOB_DELAYED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP_STREAM_JOB_INIT_CONNECTION {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_JOB_INIT_CONNECTION';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_JOB_INIT_CONNECTION';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HTTP_STREAM_JOB_WAITING {
      interface b extends Base {
        args: {
          params: {
            should_wait: boolean;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_JOB_WAITING';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_JOB_WAITING';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HTTP_STREAM_JOB {
      interface b extends Base {
        args: {
          params: {
            expect_spdy: boolean;
            original_url: string;
            priority: string;
            source_dependency: {
              id: number;
              type: number;
            };
            url: string;
            using_quic: boolean;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_JOB';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_JOB';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HTTP_STREAM_PARSER_READ_HEADERS {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_PARSER_READ_HEADERS';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_PARSER_READ_HEADERS';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HTTP_STREAM_REQUEST_BOUND_TO_JOB {
      interface n extends Base {
        args: {
          params: {
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_REQUEST_BOUND_TO_JOB';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP_STREAM_REQUEST_BOUND_TO_QUIC_SESSION {
      interface n extends Base {
        args: {
          params: {
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_REQUEST_BOUND_TO_QUIC_SESSION';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP_STREAM_REQUEST_PROTO {
      interface n extends Base {
        args: {
          params: {
            proto: string;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_REQUEST_PROTO';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP_STREAM_REQUEST_STARTED_JOB {
      interface n extends Base {
        args: {
          params: {
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_REQUEST_STARTED_JOB';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP_STREAM_REQUEST {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_REQUEST';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_STREAM_REQUEST';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HTTP_TRANSACTION_HTTP2_SEND_REQUEST_HEADERS {
      interface n extends Base {
        args: {
          params: {
            headers: {
              '0': string;
              '1': string;
              '2': string;
              '3': string;
              '4': string;
              '5': string;
              '6': string;
              '7': string;
              '8': string;
              '9': string;
              '10': string;
              '11': string;
            }[];
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP_TRANSACTION_HTTP2_SEND_REQUEST_HEADERS';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP_TRANSACTION_QUIC_SEND_REQUEST_HEADERS {
      interface n extends Base {
        args: {
          params: {
            headers: {
              '0': string;
              '1': string;
              '2': string;
              '3': string;
              '4': string;
              '5': string;
              '6': string;
              '7': string;
              '8': string;
              '9': string;
              '10': string;
              '11': string;
              '12'?: {
              
              };
            }[];
            quic_priority: number;
            quic_stream_id: number;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP_TRANSACTION_QUIC_SEND_REQUEST_HEADERS';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP_TRANSACTION_READ_BODY {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_TRANSACTION_READ_BODY';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_TRANSACTION_READ_BODY';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HTTP_TRANSACTION_READ_HEADERS {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_TRANSACTION_READ_HEADERS';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_TRANSACTION_READ_HEADERS';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HTTP_TRANSACTION_READ_RESPONSE_HEADERS {
      interface n extends Base {
        args: {
          params: {
            headers: {
              '0': string;
              '1': string;
              '2': string;
              '3': string;
              '4': string;
              '5': string;
              '6': string;
              '7': string;
              '8': string;
              '9': string;
              '10': string;
              '11': string;
              '12'?: {
              
              };
              '13'?: {
              
              };
              '14'?: {
              
              };
            }[];
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP_TRANSACTION_READ_RESPONSE_HEADERS';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP_TRANSACTION_SEND_REQUEST_HEADERS {
      interface n extends Base {
        args: {
          params: {
            headers: {
              '0': string;
              '1': string;
              '2': string;
              '3': string;
              '4': string;
              '5': string;
              '6': string;
              '7': string;
              '8': string;
              '9': string;
              '10': string;
              '11': string;
              '12': string;
              '13': string;
              '14': string;
              '15': string;
              '16': string;
              '17': string;
              '18': string;
              '19': string;
              '20'?: string;
              '21'?: {
              
              };
              '22'?: {
              
              };
              '23'?: {
              
              };
              '24'?: {
              
              };
              '25'?: {
              
              };
              '26'?: {
              
              };
              '27'?: {
              
              };
              '28'?: {
              
              };
              '29'?: {
              
              };
            }[];
            line: string;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP_TRANSACTION_SEND_REQUEST_HEADERS';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP_TRANSACTION_SEND_REQUEST {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_TRANSACTION_SEND_REQUEST';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP_TRANSACTION_SEND_REQUEST';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace HTTP2_SESSION_INITIALIZED {
      interface n extends Base {
        args: {
          params: {
            protocol: string;
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP2_SESSION_INITIALIZED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP2_SESSION_PING {
      interface n extends Base {
        args: {
          params: {
            is_ack: boolean;
            type: string;
            unique_id: number;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP2_SESSION_PING';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP2_SESSION_POOL_FOUND_EXISTING_SESSION_FROM_IP_POOL {
      interface n extends Base {
        args: {
          params: {
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP2_SESSION_POOL_FOUND_EXISTING_SESSION_FROM_IP_POOL';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP2_SESSION_POOL_FOUND_EXISTING_SESSION {
      interface n extends Base {
        args: {
          params: {
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP2_SESSION_POOL_FOUND_EXISTING_SESSION';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP2_SESSION_POOL_IMPORTED_SESSION_FROM_SOCKET {
      interface n extends Base {
        args: {
          params: {
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP2_SESSION_POOL_IMPORTED_SESSION_FROM_SOCKET';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP2_SESSION_RECV_DATA {
      interface n extends Base {
        args: {
          params: {
            fin: boolean;
            size: number;
            stream_id: number;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP2_SESSION_RECV_DATA';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP2_SESSION_RECV_HEADERS {
      interface n extends Base {
        args: {
          params: {
            fin: boolean;
            headers: {
              '0': string;
              '1': string;
              '2': string;
              '3': string;
              '4': string;
              '5': string;
              '6': string;
              '7': string;
              '8': string;
              '9': string;
              '10': string;
              '11': string;
            }[];
            stream_id: number;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP2_SESSION_RECV_HEADERS';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP2_SESSION_RECV_SETTING {
      interface n extends Base {
        args: {
          params: {
            id: string;
            value: number;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP2_SESSION_RECV_SETTING';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP2_SESSION_RECV_SETTINGS_ACK {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP2_SESSION_RECV_SETTINGS_ACK';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP2_SESSION_RECV_SETTINGS {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP2_SESSION_RECV_SETTINGS';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP2_SESSION_RECV_WINDOW_UPDATE {
      interface n extends Base {
        args: {
          params: {
            delta: number;
            stream_id: number;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP2_SESSION_RECV_WINDOW_UPDATE';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP2_SESSION_SEND_HEADERS {
      interface n extends Base {
        args: {
          params: {
            exclusive: boolean;
            fin: boolean;
            has_priority: boolean;
            headers: {
              '0': string;
              '1': string;
              '2': string;
              '3': string;
              '4': string;
              '5': string;
              '6': string;
              '7': string;
              '8': string;
              '9': string;
              '10': string;
              '11': string;
            }[];
            parent_stream_id: number;
            source_dependency: {
              id: number;
              type: number;
            };
            stream_id: number;
            weight: number;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP2_SESSION_SEND_HEADERS';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP2_SESSION_SEND_SETTINGS_ACK {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'HTTP2_SESSION_SEND_SETTINGS_ACK';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP2_SESSION_SEND_SETTINGS {
      interface n extends Base {
        args: {
          params: {
            settings: {
              '0': string;
              '1': string;
              '2': string;
              '3': string;
              '4': string;
              '5': string;
              '6': string;
              '7': string;
              '8': string;
              '9': string;
              '10': string;
              '11': string;
              '12': string;
              '13': string;
              '14': string;
              '15': string;
              '16': string;
              '17': string;
              '18': string;
              '19': string;
              '20': string;
              '21': string;
              '22': string;
              '23': string;
              '24': string;
              '25': string;
              '26': string;
              '27': string;
              '28': string;
              '29': string;
              '30': string;
              '31': string;
              '32': string;
              '33': string;
              '34': string;
              '35': string;
              '36': string;
              '37': string;
              '38': string;
              '39': string;
              '40': string;
              '41': string;
              '42': string;
              '43': string;
              '44': string;
              '45': string;
              '46': string;
            }[];
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP2_SESSION_SEND_SETTINGS';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP2_SESSION_SEND_WINDOW_UPDATE {
      interface n extends Base {
        args: {
          params: {
            delta: number;
            stream_id: number;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP2_SESSION_SEND_WINDOW_UPDATE';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP2_SESSION_UPDATE_RECV_WINDOW {
      interface n extends Base {
        args: {
          params: {
            delta: number;
            window_size: number;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP2_SESSION_UPDATE_RECV_WINDOW';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP2_SESSION_UPDATE_SEND_WINDOW {
      interface n extends Base {
        args: {
          params: {
            delta: number;
            window_size: number;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP2_SESSION_UPDATE_SEND_WINDOW';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP2_SESSION_UPDATE_STREAMS_SEND_WINDOW_SIZE {
      interface n extends Base {
        args: {
          params: {
            delta_window_size: number;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP2_SESSION_UPDATE_STREAMS_SEND_WINDOW_SIZE';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP2_SESSION {
      interface b extends Base {
        args: {
          params: {
            host: string;
            proxy: string;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP2_SESSION';
        ph: 'b';
        tts: number;
      }
    }
  
    namespace HTTP2_STREAM_UPDATE_RECV_WINDOW {
      interface n extends Base {
        args: {
          params: {
            delta: number;
            stream_id: number;
            window_size: number;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP2_STREAM_UPDATE_RECV_WINDOW';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HTTP2_STREAM_UPDATE_SEND_WINDOW {
      interface n extends Base {
        args: {
          params: {
            delta: number;
            stream_id: number;
            window_size: number;
          };
          source_type: string;
        };
        id: string;
        name: 'HTTP2_STREAM_UPDATE_SEND_WINDOW';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace HttpCacheTransaction {
      type DoAddToEntry = 
        TraceEvent.HttpCacheTransaction.DoAddToEntry.X;
    
      type DoAddToEntryComplete = 
        TraceEvent.HttpCacheTransaction.DoAddToEntryComplete.X;
    
      type DoCacheDispatchValidation = 
        TraceEvent.HttpCacheTransaction.DoCacheDispatchValidation.X;
    
      type DoCacheReadData = 
        TraceEvent.HttpCacheTransaction.DoCacheReadData.X;
    
      type DoCacheReadDataComplete = 
        TraceEvent.HttpCacheTransaction.DoCacheReadDataComplete.X;
    
      type DoCacheReadResponse = 
        TraceEvent.HttpCacheTransaction.DoCacheReadResponse.X;
    
      type DoCacheReadResponseComplete = 
        TraceEvent.HttpCacheTransaction.DoCacheReadResponseComplete.X;
    
      type DoCacheWriteResponse = 
        TraceEvent.HttpCacheTransaction.DoCacheWriteResponse.X;
    
      type DoCacheWriteResponseComplete = 
        TraceEvent.HttpCacheTransaction.DoCacheWriteResponseComplete.X;
    
      type DoCreateEntry = 
        TraceEvent.HttpCacheTransaction.DoCreateEntry.X;
    
      type DoCreateEntryComplete = 
        TraceEvent.HttpCacheTransaction.DoCreateEntryComplete.X;
    
      type DoInitEntry = 
        TraceEvent.HttpCacheTransaction.DoInitEntry.X;
    
      type DoNetworkRead = 
        TraceEvent.HttpCacheTransaction.DoNetworkRead.X;
    
      type DoNetworkReadCacheWrite = 
        TraceEvent.HttpCacheTransaction.DoNetworkReadCacheWrite.X;
    
      type DoNetworkReadCacheWriteComplete = 
        TraceEvent.HttpCacheTransaction.DoNetworkReadCacheWriteComplete.X;
    
      type DoNetworkReadComplete = 
        TraceEvent.HttpCacheTransaction.DoNetworkReadComplete.X;
    
      type DoOpenEntry = 
        TraceEvent.HttpCacheTransaction.DoOpenEntry.X;
    
      type DoOpenEntryComplete = 
        TraceEvent.HttpCacheTransaction.DoOpenEntryComplete.X;
    
      type DoOverwriteCachedResponse = 
        TraceEvent.HttpCacheTransaction.DoOverwriteCachedResponse.X;
    
      type DoSendRequest = 
        TraceEvent.HttpCacheTransaction.DoSendRequest.X;
    
      type DoSendRequestComplete = 
        TraceEvent.HttpCacheTransaction.DoSendRequestComplete.X;
    
      type DoSuccessfulSendRequest = 
        TraceEvent.HttpCacheTransaction.DoSuccessfulSendRequest.X;
    
      type DoTruncateCachedData = 
        TraceEvent.HttpCacheTransaction.DoTruncateCachedData.X;
    
      type DoTruncateCachedMetadata = 
        TraceEvent.HttpCacheTransaction.DoTruncateCachedMetadata.X;
    
      type DoTruncateCachedMetadataComplete = 
        TraceEvent.HttpCacheTransaction.DoTruncateCachedMetadataComplete.X;
    
      type Transaction = 
        TraceEvent.HttpCacheTransaction.Transaction.X;
    
      namespace DoAddToEntry {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoAddToEntry';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoAddToEntryComplete {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoAddToEntryComplete';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoCacheDispatchValidation {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoCacheDispatchValidation';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoCacheReadData {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoCacheReadData';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoCacheReadDataComplete {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoCacheReadDataComplete';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoCacheReadResponse {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoCacheReadResponse';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoCacheReadResponseComplete {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoCacheReadResponseComplete';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoCacheWriteResponse {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoCacheWriteResponse';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoCacheWriteResponseComplete {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoCacheWriteResponseComplete';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoCreateEntry {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoCreateEntry';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoCreateEntryComplete {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoCreateEntryComplete';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoInitEntry {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoInitEntry';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoNetworkRead {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoNetworkRead';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoNetworkReadCacheWrite {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoNetworkReadCacheWrite';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoNetworkReadCacheWriteComplete {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoNetworkReadCacheWriteComplete';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoNetworkReadComplete {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoNetworkReadComplete';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoOpenEntry {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoOpenEntry';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoOpenEntryComplete {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoOpenEntryComplete';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoOverwriteCachedResponse {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoOverwriteCachedResponse';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoSendRequest {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoSendRequest';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoSendRequestComplete {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoSendRequestComplete';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoSuccessfulSendRequest {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoSuccessfulSendRequest';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoTruncateCachedData {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoTruncateCachedData';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoTruncateCachedMetadata {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoTruncateCachedMetadata';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoTruncateCachedMetadataComplete {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::DoTruncateCachedMetadataComplete';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Transaction {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'HttpCacheTransaction::Transaction';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace HttpStreamFactory {
      namespace Job {
        type OnIOComplete = 
          TraceEvent.HttpStreamFactory.Job.OnIOComplete.X;
      
        type RunLoop = 
          TraceEvent.HttpStreamFactory.Job.RunLoop.X;
      
        namespace OnIOComplete {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'HttpStreamFactory::Job::OnIOComplete';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace RunLoop {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'HttpStreamFactory::Job::RunLoop';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace Identity {
      namespace Mojom {
        type IdentityManager = 
          TraceEvent.Identity.Mojom.IdentityManager.X;
      
        namespace IdentityManager {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'identity.mojom.IdentityManager';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace Idle_tq {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'idle_tq';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace IdleSpellCheckController {
      type HotModeInvocation = 
        TraceEvent.IdleSpellCheckController.HotModeInvocation.X;
    
      namespace HotModeInvocation {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'IdleSpellCheckController::hotModeInvocation';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ImageAnimationController {
      type AnimateImagesForSyncTree = 
        TraceEvent.ImageAnimationController.AnimateImagesForSyncTree.X;
    
      type WillActivate = 
        TraceEvent.ImageAnimationController.WillActivate.X;
    
      namespace AnimateImagesForSyncTree {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ImageAnimationController::AnimateImagesForSyncTree';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace WillActivate {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ImageAnimationController::WillActivate';
          ph: 'X';
          tdur: number;
          tts: number;
        }
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
  
    namespace ImageOperations {
      type Resize = 
        TraceEvent.ImageOperations.Resize.X;
    
      namespace Resize {
        interface X extends Base {
          args: {
            dst_pixels: number;
            src_pixels: number;
          };
          dur: number;
          name: 'ImageOperations::Resize';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ImageResourceContent {
      type UpdateImage = 
        TraceEvent.ImageResourceContent.UpdateImage.X;
    
      namespace UpdateImage {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ImageResourceContent::updateImage';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ImageTransportSurfaceOverlayMac {
      type ApplyBackpressure = 
        TraceEvent.ImageTransportSurfaceOverlayMac.ApplyBackpressure.X;
    
      type SwapBuffersInternal = 
        TraceEvent.ImageTransportSurfaceOverlayMac.SwapBuffersInternal.X;
    
      namespace ApplyBackpressure {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ImageTransportSurfaceOverlayMac::ApplyBackpressure';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SwapBuffersInternal {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ImageTransportSurfaceOverlayMac::SwapBuffersInternal';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ImageUploadTaskImpl {
      type RunOnWorkerThread = 
        TraceEvent.ImageUploadTaskImpl.RunOnWorkerThread.X;
    
      namespace RunOnWorkerThread {
        interface X extends Base {
          args: {
            mode: string;
            source_prepare_tiles_id: number;
          };
          dur: number;
          name: 'ImageUploadTaskImpl::RunOnWorkerThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ImplementationBase {
      type GetBucketContents = 
        TraceEvent.ImplementationBase.GetBucketContents.X;
    
      type Initialize = 
        TraceEvent.ImplementationBase.Initialize.X;
    
      type WaitForCmd = 
        TraceEvent.ImplementationBase.WaitForCmd.X;
    
      namespace GetBucketContents {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ImplementationBase::GetBucketContents';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Initialize {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ImplementationBase::Initialize';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace WaitForCmd {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ImplementationBase::WaitForCmd';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace InProcessCommandBuffer {
      type Flush = 
        TraceEvent.InProcessCommandBuffer.Flush.X;
    
      type FlushOnGpuThread = 
        TraceEvent.InProcessCommandBuffer.FlushOnGpuThread.X;
    
      type Initialize = 
        TraceEvent.InProcessCommandBuffer.Initialize.X;
    
      type InitializeOnGpuThread = 
        TraceEvent.InProcessCommandBuffer.InitializeOnGpuThread.X;
    
      namespace Flush {
        interface X extends Base {
          args: {
            put_offset: number;
          };
          dur: number;
          name: 'InProcessCommandBuffer::Flush';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace FlushOnGpuThread {
        interface X extends Base {
          args: {
            put_offset: number;
          };
          dur: number;
          name: 'InProcessCommandBuffer::FlushOnGpuThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Initialize {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'InProcessCommandBuffer::Initialize';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace InitializeOnGpuThread {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'InProcessCommandBuffer::InitializeOnGpuThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Input_tq {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'input_tq';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace InputEventSentBlocking {
      interface I extends Base {
        args: {
        
        };
        name: 'InputEventSentBlocking';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace InputLatency {
      type KeyUp = 
        TraceEvent.InputLatency.KeyUp.F |
        TraceEvent.InputLatency.KeyUp.S;
    
      type MouseLeave = 
        TraceEvent.InputLatency.MouseLeave.F |
        TraceEvent.InputLatency.MouseLeave.S;
    
      type MouseMove = 
        TraceEvent.InputLatency.MouseMove.F |
        TraceEvent.InputLatency.MouseMove.S;
    
      type RawKeyDown = 
        TraceEvent.InputLatency.RawKeyDown.F |
        TraceEvent.InputLatency.RawKeyDown.S;
    
      namespace KeyUp {
        interface F extends Base {
          args: {
            data: {
              INPUT_EVENT_LATENCY_ACK_RWH_COMPONENT: {
                time: number;
              };
              INPUT_EVENT_LATENCY_BEGIN_RWH_COMPONENT: {
                time: number;
              };
              INPUT_EVENT_LATENCY_ORIGINAL_COMPONENT: {
                time: number;
              };
              INPUT_EVENT_LATENCY_RENDERER_MAIN_COMPONENT: {
                time: number;
              };
              INPUT_EVENT_LATENCY_UI_COMPONENT: {
                time: number;
              };
              trace_id: number;
            };
          };
          id: string;
          name: 'InputLatency::KeyUp';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'InputLatency::KeyUp';
          ph: 'S';
          tts: number;
        }
      }
    
      namespace MouseLeave {
        interface F extends Base {
          args: {
            data: {
              INPUT_EVENT_LATENCY_ACK_RWH_COMPONENT: {
                time: number;
              };
              INPUT_EVENT_LATENCY_BEGIN_RWH_COMPONENT: {
                time: number;
              };
              INPUT_EVENT_LATENCY_ORIGINAL_COMPONENT: {
                time: number;
              };
              INPUT_EVENT_LATENCY_RENDERER_MAIN_COMPONENT: {
                time: number;
              };
              INPUT_EVENT_LATENCY_UI_COMPONENT: {
                time: number;
              };
              trace_id: number;
            };
          };
          id: string;
          name: 'InputLatency::MouseLeave';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'InputLatency::MouseLeave';
          ph: 'S';
          tts: number;
        }
      }
    
      namespace MouseMove {
        interface F extends Base {
          args: {
            data: {
              INPUT_EVENT_LATENCY_ACK_RWH_COMPONENT: {
                time: number;
              };
              INPUT_EVENT_LATENCY_BEGIN_RWH_COMPONENT: {
                time: number;
              };
              INPUT_EVENT_LATENCY_ORIGINAL_COMPONENT: {
                time: number;
              };
              INPUT_EVENT_LATENCY_RENDERER_MAIN_COMPONENT: {
                time: number;
              };
              INPUT_EVENT_LATENCY_UI_COMPONENT: {
                time: number;
              };
              trace_id: number;
            };
          };
          id: string;
          name: 'InputLatency::MouseMove';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'InputLatency::MouseMove';
          ph: 'S';
          tts: number;
        }
      }
    
      namespace RawKeyDown {
        interface F extends Base {
          args: {
            data: {
              INPUT_EVENT_LATENCY_ACK_RWH_COMPONENT: {
                time: number;
              };
              INPUT_EVENT_LATENCY_BEGIN_RWH_COMPONENT: {
                time: number;
              };
              INPUT_EVENT_LATENCY_ORIGINAL_COMPONENT: {
                time: number;
              };
              INPUT_EVENT_LATENCY_RENDERER_MAIN_COMPONENT: {
                time: number;
              };
              INPUT_EVENT_LATENCY_UI_COMPONENT: {
                time: number;
              };
              trace_id: number;
            };
          };
          id: string;
          name: 'InputLatency::RawKeyDown';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'InputLatency::RawKeyDown';
          ph: 'S';
          tts: number;
        }
      }
    }
  
    namespace InputMsg_SetFocus {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'InputMsg_SetFocus';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace InputRouterImpl {
      type FilterAndSendWebInputEvent = 
        TraceEvent.InputRouterImpl.FilterAndSendWebInputEvent.X;
    
      type KeboardEventHandled = 
        TraceEvent.InputRouterImpl.KeboardEventHandled.X;
    
      type MouseEventHandled = 
        TraceEvent.InputRouterImpl.MouseEventHandled.X;
    
      type OnHasTouchEventHandlers = 
        TraceEvent.InputRouterImpl.OnHasTouchEventHandlers.X;
    
      namespace FilterAndSendWebInputEvent {
        interface X extends Base {
          args: {
            type: string;
          };
          dur: number;
          name: 'InputRouterImpl::FilterAndSendWebInputEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace KeboardEventHandled {
        interface X extends Base {
          args: {
            ack: string;
            type: string;
          };
          dur: number;
          name: 'InputRouterImpl::KeboardEventHandled';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace MouseEventHandled {
        interface X extends Base {
          args: {
            ack: string;
            type: string;
          };
          dur: number;
          name: 'InputRouterImpl::MouseEventHandled';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnHasTouchEventHandlers {
        interface X extends Base {
          args: {
            has_handlers: boolean;
          };
          dur: number;
          name: 'InputRouterImpl::OnHasTouchEventHandlers';
          ph: 'X';
          tdur: number;
          tts: number;
        }
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
  
    namespace InteractiveTime {
      interface R extends Base {
        args: {
          frame: string;
          had_user_input_before_interactive: boolean;
        };
        name: 'InteractiveTime';
        ph: 'R';
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
  
    namespace Ipc_tq {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'ipc_tq';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace IPCChannel {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'IPC Channel';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace Is_gesture_active {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'is_gesture_active';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace ItemParallelJob {
      type Run = 
        TraceEvent.ItemParallelJob.Run.I;
    
      namespace Run {
        interface I extends Base {
          args: {
            num_items: number;
            num_tasks: number;
          };
          name: 'ItemParallelJob::Run';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    }
  
    namespace Job {
      type ExecuteProxyResolver = 
        TraceEvent.Job.ExecuteProxyResolver.X;
    
      namespace ExecuteProxyResolver {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Job::ExecuteProxyResolver';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace KeyedServiceFactory {
      type GetServiceForContext = 
        TraceEvent.KeyedServiceFactory.GetServiceForContext.X;
    
      namespace GetServiceForContext {
        interface X extends Base {
          args: {
            service_name: string;
          };
          dur: number;
          name: 'KeyedServiceFactory::GetServiceForContext';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace KeyframeModel {
      interface F extends Base {
        args: {
        
        };
        id: string;
        name: 'KeyframeModel';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          Name: string;
        };
        id: string;
        name: 'KeyframeModel';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace KeywordProvider {
      type Start = 
        TraceEvent.KeywordProvider.Start.X;
    
      namespace Start {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'KeywordProvider::Start';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace LatencyInfo {
      type Flow = 
        TraceEvent.LatencyInfo.Flow.X;
    
      namespace Flow {
        interface X extends Base {
          args: {
            frameTreeNodeId?: number;
            step?: string;
            trace_id?: number;
          };
          bind_id: string;
          dur: number;
          flowPhase?: string;
          flow_in?: boolean;
          flow_out?: boolean;
          id: string;
          name: 'LatencyInfo.Flow';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace LaunchProcess {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'LaunchProcess';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace Layer {
      type PaintContentsToDisplayList = 
        TraceEvent.Layer.PaintContentsToDisplayList.X;
    
      type PushPropertiesTo = 
        TraceEvent.Layer.PushPropertiesTo.X;
    
      type SetElementId = 
        TraceEvent.Layer.SetElementId.X;
    
      namespace PaintContentsToDisplayList {
        interface X extends Base {
          args: {
            name: string;
          };
          dur: number;
          name: 'Layer::PaintContentsToDisplayList';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace PushPropertiesTo {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Layer::PushPropertiesTo';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetElementId {
        interface X extends Base {
          args: {
            element: string;
          };
          dur: number;
          name: 'Layer::SetElementId';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace LayerAnimator {
      type Step = 
        TraceEvent.LayerAnimator.Step.X;
    
      namespace Step {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayerAnimator::Step';
          ph: 'X';
          tdur: number;
          tts: number;
        }
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
  
    namespace LayerImpl {
      type SetElementId = 
        TraceEvent.LayerImpl.SetElementId.X;
    
      namespace SetElementId {
        interface X extends Base {
          args: {
            element: string;
          };
          dur: number;
          name: 'LayerImpl::SetElementId';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace LayerInvalidationTracking {
      interface I extends Base {
        args: {
          data: {
            frame: string;
            paintId: number;
            reason: string;
          };
        };
        name: 'LayerInvalidationTracking';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace LayerTreeHost {
      type DoUpdateLayers = 
        TraceEvent.LayerTreeHost.DoUpdateLayers.X;
    
      type FinishCommitOnImplThread = 
        TraceEvent.LayerTreeHost.FinishCommitOnImplThread.X;
    
      type InitializeForReal = 
        TraceEvent.LayerTreeHost.InitializeForReal.X;
    
      type LayerTreeHost = 
        TraceEvent.LayerTreeHost.LayerTreeHost.X;
    
      type PushProperties = 
        TraceEvent.LayerTreeHost.PushProperties.X;
    
      type SetHasGpuRasterizationTrigger = 
        TraceEvent.LayerTreeHost.SetHasGpuRasterizationTrigger.I;
    
      type SetLayerTreeFrameSink = 
        TraceEvent.LayerTreeHost.SetLayerTreeFrameSink.X;
    
      type UpdateLayers_BuiltPropertyTrees = 
        TraceEvent.LayerTreeHost.UpdateLayers_BuiltPropertyTrees.I;
    
      namespace AnimationHost {
        type PushProperties = 
          TraceEvent.LayerTreeHost.AnimationHost.PushProperties.X;
      
        namespace PushProperties {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'LayerTreeHost::AnimationHost::PushProperties';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    
      namespace DoUpdateLayers {
        interface X extends Base {
          args: {
            source_frame_number: number;
          };
          dur: number;
          name: 'LayerTreeHost::DoUpdateLayers';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace FinishCommitOnImplThread {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayerTreeHost::FinishCommitOnImplThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace InitializeForReal {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayerTreeHost::InitializeForReal';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace LayerTreeHost {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayerTreeHost::~LayerTreeHost';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace PushProperties {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayerTreeHost::PushProperties';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetHasGpuRasterizationTrigger {
        interface I extends Base {
          args: {
            has_trigger: boolean;
          };
          name: 'LayerTreeHost::SetHasGpuRasterizationTrigger';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      namespace SetLayerTreeFrameSink {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayerTreeHost::SetLayerTreeFrameSink';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UpdateLayers_BuiltPropertyTrees {
        interface I extends Base {
          args: {
            property_trees: {
              clip_tree: {
                nodes: {
                  clip: {
                  
                  }[];
                  clip_type: number;
                  id: number;
                  parent_id: number;
                  transform_id: number;
                }[];
              };
              effect_tree: {
                nodes: {
                  backdrop_filter_quality: number;
                  blend_mode: string;
                  cache_render_surface: boolean;
                  clip_id: number;
                  closest_ancestor_with_cached_render_surface_id: number;
                  closest_ancestor_with_copy_request_id: number;
                  double_sided: boolean;
                  effect_changed: boolean;
                  has_copy_request: boolean;
                  has_potential_filter_animation: boolean;
                  has_potential_opacity_animation: boolean;
                  has_render_surface: boolean;
                  id: number;
                  is_drawn: boolean;
                  mask_layer_id: number;
                  opacity: number;
                  parent_id: number;
                  stable_id: number;
                  subtree_has_copy_request: number;
                  target_id: number;
                  transform_id: number;
                  trilinear_filtering: boolean;
                }[];
              };
              scroll_tree: {
                nodes: {
                  bounds: {
                    height: number;
                    width: number;
                  };
                  container_bounds: {
                    height: number;
                    width: number;
                  };
                  element_id: {
                    id_: number;
                  };
                  id: number;
                  offset_to_transform_parent: {
                  
                  }[];
                  overscroll_behavior_x: number;
                  overscroll_behavior_y: number;
                  parent_id: number;
                  scrollable: boolean;
                  should_flatten: boolean;
                  transform_id: number;
                  user_scrollable_horizontal: boolean;
                  user_scrollable_vertical: boolean;
                }[];
              };
              sequence_number: number;
              transform_tree: {
                nodes: {
                  element_id: {
                    id_: number;
                  };
                  flattens_inherited_transform: number;
                  id: number;
                  local: {
                  
                  }[];
                  parent_id: number;
                  post_local: {
                  
                  }[];
                  pre_local: {
                  
                  }[];
                  scroll_offset: {
                  
                  }[];
                  snap_amount: {
                  
                  }[];
                  sorting_context_id: number;
                  source_node_id: number;
                }[];
              };
            };
          };
          name: 'LayerTreeHost::UpdateLayers_BuiltPropertyTrees';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      namespace UpdateLayers {
        type BuildPropertyTrees = 
          TraceEvent.LayerTreeHost.UpdateLayers.BuildPropertyTrees.X;
      
        namespace BuildPropertyTrees {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'LayerTreeHost::UpdateLayers::BuildPropertyTrees';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace LayerTreeHostImpl {
      type ActivateSyncTree = 
        TraceEvent.LayerTreeHostImpl.ActivateSyncTree.X;
    
      type BeginCommit = 
        TraceEvent.LayerTreeHostImpl.BeginCommit.X;
    
      type BuildEvictionQueue = 
        TraceEvent.LayerTreeHostImpl.BuildEvictionQueue.X;
    
      type BuildRasterQueue = 
        TraceEvent.LayerTreeHostImpl.BuildRasterQueue.X;
    
      type CalculateRenderPasses = 
        TraceEvent.LayerTreeHostImpl.CalculateRenderPasses.B |
        TraceEvent.LayerTreeHostImpl.CalculateRenderPasses.E;
    
      type CanDrawemptyviewport = 
        TraceEvent.LayerTreeHostImpl.CanDrawemptyviewport.I;
    
      type CanDrawnorootlayer = 
        TraceEvent.LayerTreeHostImpl.CanDrawnorootlayer.I;
    
      type CommitComplete = 
        TraceEvent.LayerTreeHostImpl.CommitComplete.X;
    
      type GenerateCompositorFrame = 
        TraceEvent.LayerTreeHostImpl.GenerateCompositorFrame.X;
    
      type InitializeFrameSink = 
        TraceEvent.LayerTreeHostImpl.InitializeFrameSink.X;
    
      type LayerTreeHostImpl = 
        TraceEvent.LayerTreeHostImpl.LayerTreeHostImpl.X;
    
      type NotifyTileStateChanged = 
        TraceEvent.LayerTreeHostImpl.NotifyTileStateChanged.X;
    
      type PrepareToDraw = 
        TraceEvent.LayerTreeHostImpl.PrepareToDraw.X;
    
      type ReleaseLayerTreeFrameSink = 
        TraceEvent.LayerTreeHostImpl.ReleaseLayerTreeFrameSink.X;
    
      type SetVisible = 
        TraceEvent.LayerTreeHostImpl.SetVisible.F |
        TraceEvent.LayerTreeHostImpl.SetVisible.S;
    
      namespace ActivateSyncTree {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayerTreeHostImpl::ActivateSyncTree()';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace BeginCommit {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayerTreeHostImpl::BeginCommit';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace BuildEvictionQueue {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayerTreeHostImpl::BuildEvictionQueue';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace BuildRasterQueue {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayerTreeHostImpl::BuildRasterQueue';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace CalculateRenderPasses {
        interface B extends Base {
          args: {
            RequiresHighResToDraw: boolean;
            'render_surface_list.size()': number;
          };
          name: 'LayerTreeHostImpl::CalculateRenderPasses';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
            draw_result: number;
            'missing tiles': number;
          };
          name: 'LayerTreeHostImpl::CalculateRenderPasses';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace CanDrawemptyviewport {
        interface I extends Base {
          args: {
          
          };
          name: 'LayerTreeHostImpl::CanDraw empty viewport';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      namespace CanDrawnorootlayer {
        interface I extends Base {
          args: {
          
          };
          name: 'LayerTreeHostImpl::CanDraw no root layer';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      namespace CommitComplete {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayerTreeHostImpl::CommitComplete';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GenerateCompositorFrame {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayerTreeHostImpl::GenerateCompositorFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace InitializeFrameSink {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayerTreeHostImpl::InitializeFrameSink';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace LayerTreeHostImpl {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayerTreeHostImpl::~LayerTreeHostImpl()';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace NotifyTileStateChanged {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayerTreeHostImpl::NotifyTileStateChanged';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace PrepareToDraw {
        interface X extends Base {
          args: {
            SourceFrameNumber: number;
          };
          dur: number;
          name: 'LayerTreeHostImpl::PrepareToDraw';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ReleaseLayerTreeFrameSink {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayerTreeHostImpl::ReleaseLayerTreeFrameSink';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetVisible {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'LayerTreeHostImpl::SetVisible';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
            LayerTreeHostImpl: string;
          };
          id: string;
          name: 'LayerTreeHostImpl::SetVisible';
          ph: 'S';
          tts: number;
        }
      }
    }
  
    namespace LayerTreeImpl {
      type AddToElementLayerList = 
        TraceEvent.LayerTreeImpl.AddToElementLayerList.X;
    
      type InvalidateRegionForImages = 
        TraceEvent.LayerTreeImpl.InvalidateRegionForImages.B |
        TraceEvent.LayerTreeImpl.InvalidateRegionForImages.E;
    
      type PushPropertiesTo = 
        TraceEvent.LayerTreeImpl.PushPropertiesTo.X;
    
      type PushPropertyTreesTo = 
        TraceEvent.LayerTreeImpl.PushPropertyTreesTo.X;
    
      type RemoveFromElementLayerList = 
        TraceEvent.LayerTreeImpl.RemoveFromElementLayerList.X;
    
      namespace AddToElementLayerList {
        interface X extends Base {
          args: {
            element: string;
          };
          dur: number;
          name: 'LayerTreeImpl::AddToElementLayerList';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace InvalidateRegionForImages {
        interface B extends Base {
          args: {
            total_layer_count: number;
          };
          name: 'LayerTreeImpl::InvalidateRegionForImages';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
            counts: string;
          };
          name: 'LayerTreeImpl::InvalidateRegionForImages';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace PushPropertiesTo {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayerTreeImpl::PushPropertiesTo';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace PushPropertyTreesTo {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayerTreeImpl::PushPropertyTreesTo';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RemoveFromElementLayerList {
        interface X extends Base {
          args: {
            element: string;
          };
          dur: number;
          name: 'LayerTreeImpl::RemoveFromElementLayerList';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UpdateDrawProperties {
        type CalculateDrawProperties = 
          TraceEvent.LayerTreeImpl.UpdateDrawProperties.CalculateDrawProperties.X;
      
        type Occlusion = 
          TraceEvent.LayerTreeImpl.UpdateDrawProperties.Occlusion.X;
      
        type UpdateTiles = 
          TraceEvent.LayerTreeImpl.UpdateDrawProperties.UpdateTiles.B |
          TraceEvent.LayerTreeImpl.UpdateDrawProperties.UpdateTiles.E;
      
        namespace CalculateDrawProperties {
          interface X extends Base {
            args: {
              IsActive: boolean;
              SourceFrameNumber: number;
            };
            dur: number;
            name: 'LayerTreeImpl::UpdateDrawProperties::CalculateDrawProperties';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace Occlusion {
          interface X extends Base {
            args: {
              IsActive: boolean;
              SourceFrameNumber: number;
            };
            dur: number;
            name: 'LayerTreeImpl::UpdateDrawProperties::Occlusion';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace UpdateTiles {
          interface B extends Base {
            args: {
              IsActive: boolean;
              SourceFrameNumber: number;
            };
            name: 'LayerTreeImpl::UpdateDrawProperties::UpdateTiles';
            ph: 'B';
            tts: number;
          }
        
          interface E extends Base {
            args: {
              layers_updated_count: number;
            };
            name: 'LayerTreeImpl::UpdateDrawProperties::UpdateTiles';
            ph: 'E';
            tts: number;
          }
        }
      
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayerTreeImpl::UpdateDrawProperties';
          ph: 'X';
          tdur: number;
          tts: number;
        }
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
  
    namespace LayoutInvalidationTracking {
      interface I extends Base {
        args: {
          data: {
            frame: string;
            nodeId: number;
            nodeName: string;
            reason: string;
            stackTrace?: {
              columnNumber: number;
              functionName: string;
              lineNumber: number;
              scriptId: string;
              url: string;
            }[];
          };
        };
        name: 'LayoutInvalidationTracking';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace LayoutView {
      type CommitPendingSelection = 
        TraceEvent.LayoutView.CommitPendingSelection.X;
    
      namespace CommitPendingSelection {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LayoutView::commitPendingSelection';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Leveldb {
      namespace Mojom {
        type LevelDBService = 
          TraceEvent.Leveldb.Mojom.LevelDBService.X;
      
        namespace LevelDBService {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'leveldb.mojom.LevelDBService';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace LiveObjectVisitor {
      type VisitBlackObjects = 
        TraceEvent.LiveObjectVisitor.VisitBlackObjects.X;
    
      type VisitBlackObjectsNoFail = 
        TraceEvent.LiveObjectVisitor.VisitBlackObjectsNoFail.X;
    
      namespace VisitBlackObjects {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LiveObjectVisitor::VisitBlackObjects';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace VisitBlackObjectsNoFail {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LiveObjectVisitor::VisitBlackObjectsNoFail';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace LoadAnyStartablePendingRequests {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'LoadAnyStartablePendingRequests';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace LoadEndeventUtils {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'loadEndeventUtils';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace LoadEndpixelQueue {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'loadEndpixelQueue';
        ph: 'R';
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
  
    namespace LoadFinished {
      interface I extends Base {
        args: {
        
        };
        name: 'LoadFinished';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace LoadStarteventUtils {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'loadStarteventUtils';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace LoadStartpixelQueue {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'loadStartpixelQueue';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace LocalFrameView {
      type FrameRectsChanged = 
        TraceEvent.LocalFrameView.FrameRectsChanged.X;
    
      type Layout = 
        TraceEvent.LocalFrameView.Layout.X;
    
      type PerformLayout = 
        TraceEvent.LocalFrameView.PerformLayout.B |
        TraceEvent.LocalFrameView.PerformLayout.E;
    
      type PerformPostLayoutTasks = 
        TraceEvent.LocalFrameView.PerformPostLayoutTasks.X;
    
      type PerformPreLayoutTasks = 
        TraceEvent.LocalFrameView.PerformPreLayoutTasks.X;
    
      type RunCompositingLifecyclePhase = 
        TraceEvent.LocalFrameView.RunCompositingLifecyclePhase.X;
    
      type RunPaintLifecyclePhase = 
        TraceEvent.LocalFrameView.RunPaintLifecyclePhase.X;
    
      type RunPrePaintLifecyclePhase = 
        TraceEvent.LocalFrameView.RunPrePaintLifecyclePhase.X;
    
      type RunStyleAndLayoutLifecyclePhases = 
        TraceEvent.LocalFrameView.RunStyleAndLayoutLifecyclePhases.X;
    
      type UpdateRenderThrottlingStatus = 
        TraceEvent.LocalFrameView.UpdateRenderThrottlingStatus.X;
    
      type UpdateStyleAndLayoutIfNeededRecursive = 
        TraceEvent.LocalFrameView.UpdateStyleAndLayoutIfNeededRecursive.X;
    
      type UpdateViewportIntersectionsForSubtree = 
        TraceEvent.LocalFrameView.UpdateViewportIntersectionsForSubtree.X;
    
      namespace FrameRectsChanged {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LocalFrameView::frameRectsChanged';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Layout {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LocalFrameView::layout';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace PerformLayout {
        interface B extends Base {
          args: {
            contentsHeightBeforeLayout: number;
          };
          name: 'LocalFrameView::performLayout';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
            counters: {
              LayoutAnalyzerStackMaximumDepth: number;
              LayoutBlockHeightChanged?: number;
              LayoutBlockSizeChanged?: number;
              LayoutBlockSizeDidNotChange?: number;
              LayoutBlockWidthChanged?: number;
              LayoutObjectsThatAreFloating?: number;
              LayoutObjectsThatAreOutOfFlowPositioned: number;
              LayoutObjectsThatAreTableCells?: number;
              LayoutObjectsThatHadNeverHadLayout?: number;
              LayoutObjectsThatHaveALayer: number;
              LayoutObjectsThatNeedLayoutForThemselves?: number;
              LayoutObjectsThatNeedSimplifiedLayout?: number;
              TotalLayoutObjectsThatWereLaidOut: number;
              approximateBlankCharacterCount: number;
              contentsHeightAfterLayout: number;
              frame: string;
              host: string;
              visibleHeight: number;
            };
          };
          name: 'LocalFrameView::performLayout';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace PerformPostLayoutTasks {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LocalFrameView::performPostLayoutTasks';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace PerformPreLayoutTasks {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LocalFrameView::performPreLayoutTasks';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RunCompositingLifecyclePhase {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LocalFrameView::RunCompositingLifecyclePhase';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RunPaintLifecyclePhase {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LocalFrameView::RunPaintLifecyclePhase';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RunPrePaintLifecyclePhase {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LocalFrameView::RunPrePaintLifecyclePhase';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RunStyleAndLayoutLifecyclePhases {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LocalFrameView::RunStyleAndLayoutLifecyclePhases';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UpdateRenderThrottlingStatus {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LocalFrameView::updateRenderThrottlingStatus';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UpdateStyleAndLayoutIfNeededRecursive {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LocalFrameView::updateStyleAndLayoutIfNeededRecursive';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UpdateViewportIntersectionsForSubtree {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'LocalFrameView::UpdateViewportIntersectionsForSubtree';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace LocalSurfaceId {
      namespace Embed {
        type Flow = 
          TraceEvent.LocalSurfaceId.Embed.Flow.X;
      
        namespace Flow {
          interface X extends Base {
            args: {
              child_surface_id?: string;
              local_surface_id?: string;
              step: string;
              surface_id?: string;
            };
            bind_id: string;
            dur: number;
            flow_in?: boolean;
            flow_out?: boolean;
            id2: {
              global: string;
            };
            name: 'LocalSurfaceId.Embed.Flow';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    
      namespace Submission {
        type Flow = 
          TraceEvent.LocalSurfaceId.Submission.Flow.X;
      
        namespace Flow {
          interface X extends Base {
            args: {
              local_surface_id?: string;
              local_surface_id_allocation?: string;
              step: string;
              surface_id?: string;
            };
            bind_id: string;
            dur: number;
            flow_in?: boolean;
            flow_out?: boolean;
            id2: {
              global: string;
            };
            name: 'LocalSurfaceId.Submission.Flow';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace LocalWindowProxy {
      type CreateContext = 
        TraceEvent.LocalWindowProxy.CreateContext.X;
    
      type Initialize = 
        TraceEvent.LocalWindowProxy.Initialize.X;
    
      type SetupWindowPrototypeChain = 
        TraceEvent.LocalWindowProxy.SetupWindowPrototypeChain.X;
    
      type UpdateDocumentProperty = 
        TraceEvent.LocalWindowProxy.UpdateDocumentProperty.X;
    
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
  
    namespace LongTask {
      interface I extends Base {
        args: {
          duration: number;
        };
        name: 'LongTask';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace Lteu {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'lteu';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'lteu';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace Ltpq {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'ltpq';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'ltpq';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace MainThreadLatency {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'MainThreadLatency';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace MainThreadScheduler {
      namespace RendererMainThreadLoad {
        type Background = 
          TraceEvent.MainThreadScheduler.RendererMainThreadLoad.Background.C;
      
        type Foreground = 
          TraceEvent.MainThreadScheduler.RendererMainThreadLoad.Foreground.C;
      
        namespace Background {
          interface C extends Base {
            args: {
              value: number;
            };
            name: 'MainThreadScheduler.RendererMainThreadLoad.Background';
            ph: 'C';
            tts: number;
          }
        }
      
        namespace Foreground {
          interface C extends Base {
            args: {
              value: number;
            };
            name: 'MainThreadScheduler.RendererMainThreadLoad.Foreground';
            ph: 'C';
            tts: number;
          }
        }
      
        interface C extends Base {
          args: {
            value: number;
          };
          name: 'MainThreadScheduler.RendererMainThreadLoad';
          ph: 'C';
          tts: number;
        }
      }
    }
  
    namespace MainThreadSchedulerIdlePeriod {
      interface F extends Base {
        args: {
        
        };
        id: string;
        name: 'MainThreadSchedulerIdlePeriod';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          idle_period_length_ms: number;
        };
        id: string;
        name: 'MainThreadSchedulerIdlePeriod';
        ph: 'S';
        tts: number;
      }
    
      interface T extends Base {
        args: {
          step: string;
        };
        id: string;
        name: 'MainThreadSchedulerIdlePeriod';
        ph: 'T';
        tts: number;
      }
    }
  
    namespace MainThreadSchedulerImpl {
      type BeginFrameNotExpectedSoon = 
        TraceEvent.MainThreadSchedulerImpl.BeginFrameNotExpectedSoon.X;
    
      type DidCommitFrameToCompositor = 
        TraceEvent.MainThreadSchedulerImpl.DidCommitFrameToCompositor.X;
    
      type DidCommitProvisionalLoad = 
        TraceEvent.MainThreadSchedulerImpl.DidCommitProvisionalLoad.X;
    
      type DidHandleInputEventOnCompositorThread = 
        TraceEvent.MainThreadSchedulerImpl.DidHandleInputEventOnCompositorThread.X;
    
      type DidHandleInputEventOnMainThread = 
        TraceEvent.MainThreadSchedulerImpl.DidHandleInputEventOnMainThread.X;
    
      type DidStartProvisionalLoad = 
        TraceEvent.MainThreadSchedulerImpl.DidStartProvisionalLoad.X;
    
      type DispatchRequestBeginMainFrameNotExpected = 
        TraceEvent.MainThreadSchedulerImpl.DispatchRequestBeginMainFrameNotExpected.X;
    
      type EndIdlePeriod = 
        TraceEvent.MainThreadSchedulerImpl.EndIdlePeriod.X;
    
      type OnFirstMeaningfulPaint = 
        TraceEvent.MainThreadSchedulerImpl.OnFirstMeaningfulPaint.X;
    
      type OnRendererBackgrounded = 
        TraceEvent.MainThreadSchedulerImpl.OnRendererBackgrounded.X;
    
      type OnRendererForegrounded = 
        TraceEvent.MainThreadSchedulerImpl.OnRendererForegrounded.X;
    
      type OnRendererHidden = 
        TraceEvent.MainThreadSchedulerImpl.OnRendererHidden.X;
    
      type OnRendererVisible = 
        TraceEvent.MainThreadSchedulerImpl.OnRendererVisible.X;
    
      type ResetForNavigationLocked = 
        TraceEvent.MainThreadSchedulerImpl.ResetForNavigationLocked.X;
    
      type SetAllRenderWidgetsHidden = 
        TraceEvent.MainThreadSchedulerImpl.SetAllRenderWidgetsHidden.X;
    
      type UpdateForInputEventOnCompositorThread = 
        TraceEvent.MainThreadSchedulerImpl.UpdateForInputEventOnCompositorThread.X;
    
      type WillBeginFrame = 
        TraceEvent.MainThreadSchedulerImpl.WillBeginFrame.X;
    
      namespace BeginFrameNotExpectedSoon {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MainThreadSchedulerImpl::BeginFrameNotExpectedSoon';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidCommitFrameToCompositor {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MainThreadSchedulerImpl::DidCommitFrameToCompositor';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidCommitProvisionalLoad {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MainThreadSchedulerImpl::DidCommitProvisionalLoad';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidHandleInputEventOnCompositorThread {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MainThreadSchedulerImpl::DidHandleInputEventOnCompositorThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidHandleInputEventOnMainThread {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MainThreadSchedulerImpl::DidHandleInputEventOnMainThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidStartProvisionalLoad {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MainThreadSchedulerImpl::DidStartProvisionalLoad';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DispatchRequestBeginMainFrameNotExpected {
        interface X extends Base {
          args: {
            has_tasks: boolean;
          };
          dur: number;
          name: 'MainThreadSchedulerImpl::DispatchRequestBeginMainFrameNotExpected';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace EndIdlePeriod {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MainThreadSchedulerImpl::EndIdlePeriod';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnFirstMeaningfulPaint {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MainThreadSchedulerImpl::OnFirstMeaningfulPaint';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnRendererBackgrounded {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MainThreadSchedulerImpl::OnRendererBackgrounded';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnRendererForegrounded {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MainThreadSchedulerImpl::OnRendererForegrounded';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnRendererHidden {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MainThreadSchedulerImpl::OnRendererHidden';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnRendererVisible {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MainThreadSchedulerImpl::OnRendererVisible';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ResetForNavigationLocked {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MainThreadSchedulerImpl::ResetForNavigationLocked';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetAllRenderWidgetsHidden {
        interface X extends Base {
          args: {
            hidden: boolean;
          };
          dur: number;
          name: 'MainThreadSchedulerImpl::SetAllRenderWidgetsHidden';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UpdateForInputEventOnCompositorThread {
        interface X extends Base {
          args: {
            input_event_state: string;
            type: number;
          };
          dur: number;
          name: 'MainThreadSchedulerImpl::UpdateForInputEventOnCompositorThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace WillBeginFrame {
        interface X extends Base {
          args: {
            args: {
              animate_only: boolean;
              deadline_us: number;
              frame_time_us: number;
              interval_us: number;
              on_critical_path: boolean;
              sequence_number: number;
              source_id: number;
              subtype: string;
              type: string;
            };
          };
          dur: number;
          name: 'MainThreadSchedulerImpl::WillBeginFrame';
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
  
    namespace Mark_test {
      interface R extends Base {
        args: {
        
        };
        name: 'mark_test';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace MarkAsMainFrame {
      interface I extends Base {
        args: {
          frame: string;
        };
        name: 'markAsMainFrame';
        ph: 'I';
        s: string;
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
  
    namespace Measure_test {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'measure_test';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'measure_test';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace Media {
      namespace Mojom {
        type InterfaceFactory = 
          TraceEvent.Media.Mojom.InterfaceFactory.X;
      
        type MediaMetricsProvider = 
          TraceEvent.Media.Mojom.MediaMetricsProvider.X;
      
        type MediaService = 
          TraceEvent.Media.Mojom.MediaService.X;
      
        type RemoterFactory = 
          TraceEvent.Media.Mojom.RemoterFactory.X;
      
        type VideoDecoder = 
          TraceEvent.Media.Mojom.VideoDecoder.X;
      
        namespace InterfaceFactory {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'media.mojom.InterfaceFactory';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace MediaMetricsProvider {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'media.mojom.MediaMetricsProvider';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace MediaService {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'media.mojom.MediaService';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace RemoterFactory {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'media.mojom.RemoterFactory';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace VideoDecoder {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'media.mojom.VideoDecoder';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace MediaPlayerDelegateHostMsg_OnMutedStatusChanged {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'MediaPlayerDelegateHostMsg_OnMutedStatusChanged';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace Memory_instrumentation {
      namespace Mojom {
        type ClientProcess = 
          TraceEvent.Memory_instrumentation.Mojom.ClientProcess.X;
      
        type Coordinator = 
          TraceEvent.Memory_instrumentation.Mojom.Coordinator.X;
      
        namespace ClientProcess {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'memory_instrumentation.mojom.ClientProcess';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace Coordinator {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'memory_instrumentation.mojom.Coordinator';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace MemoryCache {
      type Evict = 
        TraceEvent.MemoryCache.Evict.X;
    
      type Prune = 
        TraceEvent.MemoryCache.Prune.X;
    
      namespace Evict {
        interface X extends Base {
          args: {
            resource: string;
          };
          dur: number;
          name: 'MemoryCache::evict';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Prune {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MemoryCache::prune()';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace MemoryDumpManager {
      type FinishAsyncProcessDump = 
        TraceEvent.MemoryDumpManager.FinishAsyncProcessDump.X;
    
      type InvokeOnMemoryDump = 
        TraceEvent.MemoryDumpManager.InvokeOnMemoryDump.X;
    
      namespace FinishAsyncProcessDump {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MemoryDumpManager::FinishAsyncProcessDump';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace InvokeOnMemoryDump {
        interface X extends Base {
          args: {
            'dump_provider.name': string;
          };
          dur: number;
          name: 'MemoryDumpManager::InvokeOnMemoryDump';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace MemoryUsage {
      interface C extends Base {
        args: {
          InFlightToDisk: number;
          TotalStorage: number;
        };
        name: 'MemoryUsage';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace MessageLoop {
      type PostTask = 
        TraceEvent.MessageLoop.PostTask.X;
    
      type RunTask = 
        TraceEvent.MessageLoop.RunTask.X;
    
      namespace PostTask {
        interface X extends Base {
          args: {
          
          };
          bind_id: string;
          dur?: number;
          flow_in?: boolean;
          flow_out?: boolean;
          id: string;
          name: 'MessageLoop::PostTask';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RunTask {
        interface X extends Base {
          args: {
            src_file: string;
            src_func: string;
          };
          dur?: number;
          name: 'MessageLoop::RunTask';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace MessagePipeReader {
      type Receive = 
        TraceEvent.MessagePipeReader.Receive.X;
    
      type Send = 
        TraceEvent.MessagePipeReader.Send.X;
    
      namespace Receive {
        interface X extends Base {
          args: {
          
          };
          bind_id: string;
          dur: number;
          flow_in: boolean;
          id: string;
          name: 'MessagePipeReader::Receive';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Send {
        interface X extends Base {
          args: {
          
          };
          bind_id: string;
          dur: number;
          flow_out: boolean;
          id: string;
          name: 'MessagePipeReader::Send';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Metrics {
      namespace Mojom {
        type SingleSampleMetric = 
          TraceEvent.Metrics.Mojom.SingleSampleMetric.X;
      
        type SingleSampleMetricsProvider = 
          TraceEvent.Metrics.Mojom.SingleSampleMetricsProvider.X;
      
        namespace SingleSampleMetric {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'metrics.mojom.SingleSampleMetric';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace SingleSampleMetricsProvider {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'metrics.mojom.SingleSampleMetricsProvider';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
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
  
    namespace ModelNeutralWriteTransaction {
      interface B extends Base {
        args: {
          src_file: string;
          src_func: string;
        };
        name: 'ModelNeutralWriteTransaction';
        ph: 'B';
        tts: number;
      }
    
      interface E extends Base {
        args: {
        
        };
        name: 'ModelNeutralWriteTransaction';
        ph: 'E';
        tts: number;
      }
    }
  
    namespace MojoVideoDecoderService {
      type Construct = 
        TraceEvent.MojoVideoDecoderService.Construct.X;
    
      type Decode = 
        TraceEvent.MojoVideoDecoderService.Decode.F |
        TraceEvent.MojoVideoDecoderService.Decode.p |
        TraceEvent.MojoVideoDecoderService.Decode.S;
    
      type GetSupportedConfigs = 
        TraceEvent.MojoVideoDecoderService.GetSupportedConfigs.X;
    
      type Initialize = 
        TraceEvent.MojoVideoDecoderService.Initialize.F |
        TraceEvent.MojoVideoDecoderService.Initialize.S;
    
      type OnDecoderOutput = 
        TraceEvent.MojoVideoDecoderService.OnDecoderOutput.X;
    
      namespace Construct {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MojoVideoDecoderService::Construct';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Decode {
        interface F extends Base {
          args: {
            status: string;
          };
          id: string;
          name: 'MojoVideoDecoderService::Decode';
          ph: 'F';
          tts: number;
        }
      
        interface p extends Base {
          args: {
            decoder_buffer?: string;
            step: string;
          };
          id: string;
          name: 'MojoVideoDecoderService::Decode';
          ph: 'p';
          tts: number;
        }
      
        interface S extends Base {
          args: {
            is_key_frame: boolean;
            timestamp_us: number;
          };
          id: string;
          name: 'MojoVideoDecoderService::Decode';
          ph: 'S';
          tts: number;
        }
      }
    
      namespace GetSupportedConfigs {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MojoVideoDecoderService::GetSupportedConfigs';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Initialize {
        interface F extends Base {
          args: {
            success: boolean;
          };
          id: string;
          name: 'MojoVideoDecoderService::Initialize';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
            cdm_id: number;
            config: string;
          };
          id: string;
          name: 'MojoVideoDecoderService::Initialize';
          ph: 'S';
          tts: number;
        }
      }
    
      namespace OnDecoderOutput {
        interface X extends Base {
          args: {
            video_frame: string;
          };
          dur: number;
          name: 'MojoVideoDecoderService::OnDecoderOutput';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Moredamageexpectedsoon {
      interface I extends Base {
        args: {
        
        };
        name: 'More damage expected soon';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace MouseEventManager {
      type FakeMouseMoveEventTimerFired = 
        TraceEvent.MouseEventManager.FakeMouseMoveEventTimerFired.X;
    
      type HandleMouseDraggedEvent = 
        TraceEvent.MouseEventManager.HandleMouseDraggedEvent.X;
    
      type HandleMousePressEvent = 
        TraceEvent.MouseEventManager.HandleMousePressEvent.X;
    
      namespace FakeMouseMoveEventTimerFired {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MouseEventManager::fakeMouseMoveEventTimerFired';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace HandleMouseDraggedEvent {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MouseEventManager::handleMouseDraggedEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace HandleMousePressEvent {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'MouseEventManager::handleMousePressEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Namespace {
      namespace TextureOp {
        namespace Tessnamespace {
          type VertexSpecGrTextureProxy = 
            TraceEvent.Namespace.TextureOp.Tessnamespace.VertexSpecGrTextureProxy.X;
        
          namespace VertexSpecGrTextureProxy {
            interface X extends Base {
              args: {
              
              };
              dur: number;
              name: 'void (anonymous namespace)::TextureOp::tess(void *, const (anonymous namespace)::VertexSpec &, const GrTextureProxy *, int, int) const';
              ph: 'X';
              tdur: number;
              tts: number;
            }
          }
        }
      }
    }
  
    namespace NavigationControllerImpl {
      type LoadURLWithParams = 
        TraceEvent.NavigationControllerImpl.LoadURLWithParams.X;
    
      namespace LoadURLWithParams {
        interface X extends Base {
          args: {
            url: string;
          };
          dur: number;
          name: 'NavigationControllerImpl::LoadURLWithParams';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace NavigationHandle {
      interface F extends Base {
        args: {
        
        };
        id: string;
        name: 'NavigationHandle';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          frame_tree_node: number;
          url: string;
        };
        id: string;
        name: 'NavigationHandle';
        ph: 'S';
        tts: number;
      }
    
      interface T extends Base {
        args: {
          step: string;
        };
        id: string;
        name: 'NavigationHandle';
        ph: 'T';
        tts: number;
      }
    }
  
    namespace NavigationRequest {
      interface F extends Base {
        args: {
        
        };
        id: string;
        name: 'NavigationRequest';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          frame_tree_node: number;
          url: string;
        };
        id: string;
        name: 'NavigationRequest';
        ph: 'S';
        tts: number;
      }
    
      interface T extends Base {
        args: {
          step: string;
        };
        id: string;
        name: 'NavigationRequest';
        ph: 'T';
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
  
    namespace NavigationStartToCommit {
      interface F extends Base {
        args: {
          'Net Error Code': number;
          URL: string;
        };
        id: string;
        name: 'Navigation StartToCommit';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          'Initial URL': string;
        };
        id: string;
        name: 'Navigation StartToCommit';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace NavigationThrottle {
      type WillProcessResponse = 
        TraceEvent.NavigationThrottle.WillProcessResponse.X;
    
      type WillStartRequest = 
        TraceEvent.NavigationThrottle.WillStartRequest.X;
    
      namespace WillProcessResponse {
        interface X extends Base {
          args: {
            throttle: string;
          };
          dur: number;
          name: 'NavigationThrottle::WillProcessResponse';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace WillStartRequest {
        interface X extends Base {
          args: {
            throttle: string;
          };
          dur: number;
          name: 'NavigationThrottle::WillStartRequest';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace NavigationtimeToResponseStarted {
      interface F extends Base {
        args: {
          '&NavigationURLLoaderImpl': string;
          success: boolean;
        };
        id: string;
        name: 'Navigation timeToResponseStarted';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          'FrameTreeNode id': number;
        };
        id: string;
        name: 'Navigation timeToResponseStarted';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace NavigationTimingnavigationStart {
      interface I extends Base {
        args: {
        
        };
        name: 'NavigationTiming navigationStart';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace NavigatorImpl {
      type Navigate = 
        TraceEvent.NavigatorImpl.Navigate.X;
    
      namespace Navigate {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'NavigatorImpl::Navigate';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace NeedsBeginFrameChanged {
      interface I extends Base {
        args: {
          data: {
            needsBeginFrame: number;
          };
          layerTreeId: number;
        };
        name: 'NeedsBeginFrameChanged';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace NeedsTickAnimations {
      interface I extends Base {
        args: {
        
        };
        name: 'NeedsTickAnimations';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace NETWORK_DELEGATE_BEFORE_START_TRANSACTION {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'NETWORK_DELEGATE_BEFORE_START_TRANSACTION';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'NETWORK_DELEGATE_BEFORE_START_TRANSACTION';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace NETWORK_DELEGATE_BEFORE_URL_REQUEST {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'NETWORK_DELEGATE_BEFORE_URL_REQUEST';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'NETWORK_DELEGATE_BEFORE_URL_REQUEST';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace NETWORK_DELEGATE_HEADERS_RECEIVED {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'NETWORK_DELEGATE_HEADERS_RECEIVED';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'NETWORK_DELEGATE_HEADERS_RECEIVED';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace NETWORK_QUALITY_CHANGED {
      interface n extends Base {
        args: {
          params: {
            downstream_throughput_kbps: number;
            effective_connection_type: string;
            http_rtt_ms: number;
            transport_rtt_ms: number;
          };
          source_type: string;
        };
        id: string;
        name: 'NETWORK_QUALITY_CHANGED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace Network {
      namespace Mojom {
        type CookieChangeListener = 
          TraceEvent.Network.Mojom.CookieChangeListener.X;
      
        type CookieManager = 
          TraceEvent.Network.Mojom.CookieManager.X;
      
        type NetworkContext = 
          TraceEvent.Network.Mojom.NetworkContext.X;
      
        type NetworkContextClient = 
          TraceEvent.Network.Mojom.NetworkContextClient.X;
      
        type NetworkQualityEstimatorManagerClient = 
          TraceEvent.Network.Mojom.NetworkQualityEstimatorManagerClient.X;
      
        type NetworkServiceClient = 
          TraceEvent.Network.Mojom.NetworkServiceClient.X;
      
        type ProxyConfigPollerClient = 
          TraceEvent.Network.Mojom.ProxyConfigPollerClient.X;
      
        type ProxyLookupClient = 
          TraceEvent.Network.Mojom.ProxyLookupClient.X;
      
        type ResolveHostClient = 
          TraceEvent.Network.Mojom.ResolveHostClient.X;
      
        type TrustedHeaderClient = 
          TraceEvent.Network.Mojom.TrustedHeaderClient.X;
      
        type TrustedURLLoaderHeaderClient = 
          TraceEvent.Network.Mojom.TrustedURLLoaderHeaderClient.X;
      
        type URLLoader = 
          TraceEvent.Network.Mojom.URLLoader.X;
      
        type URLLoaderClient = 
          TraceEvent.Network.Mojom.URLLoaderClient.X;
      
        type URLLoaderFactory = 
          TraceEvent.Network.Mojom.URLLoaderFactory.X;
      
        namespace CookieChangeListener {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'network.mojom.CookieChangeListener';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace CookieManager {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'network.mojom.CookieManager';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace NetworkContext {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'network.mojom.NetworkContext';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace NetworkContextClient {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'network.mojom.NetworkContextClient';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace NetworkQualityEstimatorManagerClient {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'network.mojom.NetworkQualityEstimatorManagerClient';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace NetworkServiceClient {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'network.mojom.NetworkServiceClient';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace ProxyConfigPollerClient {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'network.mojom.ProxyConfigPollerClient';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace ProxyLookupClient {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'network.mojom.ProxyLookupClient';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace ResolveHostClient {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'network.mojom.ResolveHostClient';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace TrustedHeaderClient {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'network.mojom.TrustedHeaderClient';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace TrustedURLLoaderHeaderClient {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'network.mojom.TrustedURLLoaderHeaderClient';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace URLLoader {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'network.mojom.URLLoader';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace URLLoaderClient {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'network.mojom.URLLoaderClient';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace URLLoaderFactory {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'network.mojom.URLLoaderFactory';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace NetworkDelegate {
      type ForcePrivacyMode = 
        TraceEvent.NetworkDelegate.ForcePrivacyMode.X;
    
      type NotifyBeforeStartTransation = 
        TraceEvent.NetworkDelegate.NotifyBeforeStartTransation.X;
    
      type NotifyBeforeURLRequest = 
        TraceEvent.NetworkDelegate.NotifyBeforeURLRequest.X;
    
      type NotifyCompleted = 
        TraceEvent.NetworkDelegate.NotifyCompleted.X;
    
      type NotifyHeadersReceived = 
        TraceEvent.NetworkDelegate.NotifyHeadersReceived.X;
    
      type NotifyNetworkBytesReceived = 
        TraceEvent.NetworkDelegate.NotifyNetworkBytesReceived.X;
    
      type NotifyStartTransaction = 
        TraceEvent.NetworkDelegate.NotifyStartTransaction.X;
    
      type NotifyURLRequestDestroyed = 
        TraceEvent.NetworkDelegate.NotifyURLRequestDestroyed.X;
    
      namespace ForcePrivacyMode {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'NetworkDelegate::ForcePrivacyMode';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace NotifyBeforeStartTransation {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'NetworkDelegate::NotifyBeforeStartTransation';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace NotifyBeforeURLRequest {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'NetworkDelegate::NotifyBeforeURLRequest';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace NotifyCompleted {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'NetworkDelegate::NotifyCompleted';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace NotifyHeadersReceived {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'NetworkDelegate::NotifyHeadersReceived';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace NotifyNetworkBytesReceived {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'NetworkDelegate::NotifyNetworkBytesReceived';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace NotifyStartTransaction {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'NetworkDelegate::NotifyStartTransaction';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace NotifyURLRequestDestroyed {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'NetworkDelegate::NotifyURLRequestDestroyed';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace NetworkHintsMsg_DNSPrefetch {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'NetworkHintsMsg_DNSPrefetch';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace NetworkQualityEstimator {
      type NotifyHeadersReceived = 
        TraceEvent.NetworkQualityEstimator.NotifyHeadersReceived.X;
    
      type NotifyRequestCompleted = 
        TraceEvent.NetworkQualityEstimator.NotifyRequestCompleted.X;
    
      namespace NotifyHeadersReceived {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'NetworkQualityEstimator::NotifyHeadersReceived';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace NotifyRequestCompleted {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'NetworkQualityEstimator::NotifyRequestCompleted';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Nodamageyet {
      interface I extends Base {
        args: {
        
        };
        name: 'No damage yet';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace Node {
      type UpdateDistribution = 
        TraceEvent.Node.UpdateDistribution.X;
    
      namespace UpdateDistribution {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Node::updateDistribution';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace NotStartingIdlePeriodBecauseDeadlineIsTooClose {
      interface X extends Base {
        args: {
          idle_period_duration_ms: number;
        };
        dur: number;
        name: 'NotStartingIdlePeriodBecauseDeadlineIsTooClose';
        ph: 'X';
        tdur: number;
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
  
    namespace Obmark0c_search {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'ob-mark-0-c_search';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace Obmark0odbMB_120 {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'ob-mark-0-odb-MB_12-0';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace Obmark0odbTR_11 {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'ob-mark-0-odb-TR_1-1';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace Obmark0renderMB_120 {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'ob-mark-0-render-MB_12-0';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace Obmark0renderTR_11 {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'ob-mark-0-render-TR_1-1';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace Obmark0start {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'ob-mark-0-start';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace Obmark1c_foundMB_120 {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'ob-mark-1-c_found-MB_12-0';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace Obmark1c_foundTR_11 {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'ob-mark-1-c_found-TR_1-1';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace Obmark1odb_rMB_120 {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'ob-mark-1-odb_r-MB_12-0';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace Obmark1odb_rTR_11 {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'ob-mark-1-odb_r-TR_1-1';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace Obmark1renderedMB_120 {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'ob-mark-1-rendered-MB_12-0';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace Obmark1renderedTR_11 {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'ob-mark-1-rendered-TR_1-1';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace Obmeasurec_foundMB_120 {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'ob-measure-c_found-MB_12-0';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'ob-measure-c_found-MB_12-0';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace Obmeasurec_foundTR_11 {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'ob-measure-c_found-TR_1-1';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'ob-measure-c_found-TR_1-1';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace Obmeasureodb_rMB_120 {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'ob-measure-odb_r-MB_12-0';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'ob-measure-odb_r-MB_12-0';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace Obmeasureodb_rTR_11 {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'ob-measure-odb_r-TR_1-1';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'ob-measure-odb_r-TR_1-1';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace ObmeasureodbMB_120 {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'ob-measure-odb-MB_12-0';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'ob-measure-odb-MB_12-0';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace ObmeasureodbTR_11 {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'ob-measure-odb-TR_1-1';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'ob-measure-odb-TR_1-1';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace ObmeasurerenderedMB_120 {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'ob-measure-rendered-MB_12-0';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'ob-measure-rendered-MB_12-0';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace ObmeasurerenderedTR_11 {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'ob-measure-rendered-TR_1-1';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'ob-measure-rendered-TR_1-1';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace Onetapvideo {
      type EmbedRequest = 
        TraceEvent.Onetapvideo.EmbedRequest.R;
    
      type PlayerReady = 
        TraceEvent.Onetapvideo.PlayerReady.R;
    
      namespace EmbedRequest {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: 'one-tap-video::embedRequest';
          ph: 'R';
          tts: number;
        }
      }
    
      namespace PlayerReady {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: 'one-tap-video::playerReady';
          ph: 'R';
          tts: number;
        }
      }
    }
  
    namespace OnIdleTaskPosted {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'OnIdleTaskPosted';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace OnIdleTaskPostedOnMainThread {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'OnIdleTaskPostedOnMainThread';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace OnLibevent {
      interface X extends Base {
        args: {
        
        };
        dur?: number;
        name: 'OnLibevent';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace OnLoad {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'On Load';
        ph: 'b';
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'On Load';
        ph: 'e';
      }
    }
  
    namespace Optimizely {
      type BlockBegin = 
        TraceEvent.Optimizely.BlockBegin.R;
    
      namespace BlockBegin {
        interface R extends Base {
          args: {
            data: {
              navigationId: string;
            };
          };
          name: 'optimizely:blockBegin';
          ph: 'R';
          tts: number;
        }
      }
    }
  
    namespace OptimizelyEnd {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'optimizelyEnd';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace OptimizelyStart {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'optimizelyStart';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace OptimizelyTime {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'optimizelyTime';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'optimizelyTime';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace OverlayProcessor {
      type ProcessForOverlays = 
        TraceEvent.OverlayProcessor.ProcessForOverlays.X;
    
      namespace ProcessForOverlays {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'OverlayProcessor::ProcessForOverlays';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace PageAnimator {
      type ServiceScriptedAnimations = 
        TraceEvent.PageAnimator.ServiceScriptedAnimations.X;
    
      namespace ServiceScriptedAnimations {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'PageAnimator::serviceScriptedAnimations';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace PageLoad {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'pageLoad';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'pageLoad';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace PageLoadMetricsObserver {
      type OnCommit = 
        TraceEvent.PageLoadMetricsObserver.OnCommit.X;
    
      type OnHidden = 
        TraceEvent.PageLoadMetricsObserver.OnHidden.X;
    
      type OnShown = 
        TraceEvent.PageLoadMetricsObserver.OnShown.X;
    
      type OnStart = 
        TraceEvent.PageLoadMetricsObserver.OnStart.X;
    
      type ShouldObserveMimeType = 
        TraceEvent.PageLoadMetricsObserver.ShouldObserveMimeType.X;
    
      namespace OnCommit {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'PageLoadMetricsObserver::OnCommit';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnHidden {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'PageLoadMetricsObserver::OnHidden';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnShown {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'PageLoadMetricsObserver::OnShown';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnStart {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'PageLoadMetricsObserver::OnStart';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ShouldObserveMimeType {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'PageLoadMetricsObserver::ShouldObserveMimeType';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace PageMsg_SetHistoryOffsetAndLength {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'PageMsg_SetHistoryOffsetAndLength';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace PageMsg_UpdateScreenInfo {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'PageMsg_UpdateScreenInfo';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace PageMsg_UpdateWindowScreenRect {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'PageMsg_UpdateWindowScreenRect';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace PageMsg_WasHidden {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'PageMsg_WasHidden';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace PageMsg_WasShown {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'PageMsg_WasShown';
        ph: 'X';
        tdur: number;
        tts: number;
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
  
    namespace PaintArtifact {
      type AppendToWebDisplayItemList = 
        TraceEvent.PaintArtifact.AppendToWebDisplayItemList.X;
    
      type Replay = 
        TraceEvent.PaintArtifact.Replay.X;
    
      namespace AppendToWebDisplayItemList {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'PaintArtifact::appendToWebDisplayItemList';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Replay {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'PaintArtifact::replay';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace PaintController {
      type CommitNewDisplayItems = 
        TraceEvent.PaintController.CommitNewDisplayItems.X;
    
      namespace CommitNewDisplayItems {
        interface X extends Base {
          args: {
            current_display_list_size: number;
            num_non_cached_new_items: number;
          };
          dur: number;
          name: 'PaintController::commitNewDisplayItems';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace PaintImage {
      interface X extends Base {
        args: {
          data: {
            height?: number;
            nodeId: number;
            srcHeight?: number;
            srcWidth?: number;
            url?: string;
            width?: number;
            x?: number;
            y?: number;
          };
        };
        dur: number;
        name: 'PaintImage';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace PaintInvalidationTracking {
      interface I extends Base {
        args: {
          data: {
            frame: string;
            nodeId: number;
            nodeName: string;
            paintId: number;
          };
        };
        name: 'PaintInvalidationTracking';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace PaintInvalidator {
      type InvalidatePaint = 
        TraceEvent.PaintInvalidator.InvalidatePaint.X;
    
      namespace InvalidatePaint {
        interface X extends Base {
          args: {
            object: string;
          };
          dur: number;
          name: 'PaintInvalidator::InvalidatePaint()';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace PaintLayer {
      type UpdateLayerPositionsAfterLayout = 
        TraceEvent.PaintLayer.UpdateLayerPositionsAfterLayout.X;
    
      namespace UpdateLayerPositionsAfterLayout {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'PaintLayer::updateLayerPositionsAfterLayout';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace PaintLayerCompositor {
      type UpdateIfNeededRecursive = 
        TraceEvent.PaintLayerCompositor.UpdateIfNeededRecursive.X;
    
      namespace UpdateIfNeededRecursive {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'PaintLayerCompositor::updateIfNeededRecursive';
          ph: 'X';
          tdur: number;
          tts: number;
        }
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
  
    namespace ParkableStringImpl {
      type CompressInBackground = 
        TraceEvent.ParkableStringImpl.CompressInBackground.X;
    
      type Unpark = 
        TraceEvent.ParkableStringImpl.Unpark.X;
    
      namespace CompressInBackground {
        interface X extends Base {
          args: {
            size: number;
          };
          dur: number;
          name: 'ParkableStringImpl::CompressInBackground';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Unpark {
        interface X extends Base {
          args: {
            size: number;
          };
          dur: number;
          name: 'ParkableStringImpl::Unpark';
          ph: 'X';
          tdur: number;
          tts: number;
        }
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
  
    namespace PartitionAlloc {
      type TotalSizeOfCommittedPagesKB = 
        TraceEvent.PartitionAlloc.TotalSizeOfCommittedPagesKB.C;
    
      namespace TotalSizeOfCommittedPagesKB {
        interface C extends Base {
          args: {
            value: number;
          };
          name: 'PartitionAlloc.TotalSizeOfCommittedPagesKB';
          ph: 'C';
          tts: number;
        }
      }
    }
  
    namespace PendingScript {
      type ExecuteScriptBlock = 
        TraceEvent.PendingScript.ExecuteScriptBlock.X;
    
      namespace ExecuteScriptBlock {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'PendingScript::ExecuteScriptBlock';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace PendingTree {
      type Waiting = 
        TraceEvent.PendingTree.Waiting.F |
        TraceEvent.PendingTree.Waiting.S;
    
      namespace Waiting {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'PendingTree:waiting';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'PendingTree:waiting';
          ph: 'S';
          tts: number;
        }
      }
    }
  
    namespace PictureLayer {
      type PushPropertiesTo = 
        TraceEvent.PictureLayer.PushPropertiesTo.X;
    
      type Update = 
        TraceEvent.PictureLayer.Update.X;
    
      namespace PushPropertiesTo {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'PictureLayer::PushPropertiesTo';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Update {
        interface X extends Base {
          args: {
            source_frame_number: number;
          };
          dur: number;
          name: 'PictureLayer::Update';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace PictureLayerImpl {
      type AppendQuadscheckerboard = 
        TraceEvent.PictureLayerImpl.AppendQuadscheckerboard.I;
    
      namespace AppendQuadscheckerboard {
        interface I extends Base {
          args: {
            missing_tile_count: number;
            on_demand_missing_tile_count: number;
          };
          name: 'PictureLayerImpl::AppendQuads checkerboard';
          ph: 'I';
          s: string;
          tts: number;
        }
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
  
    namespace PostCommit {
      interface B extends Base {
        args: {
        
        };
        name: 'PostCommit';
        ph: 'B';
        tts: number;
      }
    
      interface E extends Base {
        args: {
        
        };
        name: 'PostCommit';
        ph: 'E';
        tts: number;
      }
    }
  
    namespace PrerenderManagerFactory {
      type GetForProfile = 
        TraceEvent.PrerenderManagerFactory.GetForProfile.X;
    
      namespace GetForProfile {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'PrerenderManagerFactory::GetForProfile';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace PrintMsg_SetPrintingEnabled {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'PrintMsg_SetPrintingEnabled';
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
  
    namespace ProcessCommitResponse {
      interface X extends Base {
        args: {
          type: string;
        };
        dur: number;
        name: 'ProcessCommitResponse';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ProcessMemoryDump {
      interface b extends Base {
        args: {
          dump_guid: string;
        };
        id2: {
          local: string;
        };
        name: 'ProcessMemoryDump';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id2: {
          local: string;
        };
        name: 'ProcessMemoryDump';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace ProcessPriority {
      interface I extends Base {
        args: {
          priority: number;
        };
        name: 'ProcessPriority';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace ProcTask {
      type OnLookupComplete = 
        TraceEvent.ProcTask.OnLookupComplete.X;
    
      namespace OnLookupComplete {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProcTask::OnLookupComplete';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Profile {
      interface P extends Base {
        args: {
          data: {
            startTime: number;
          };
        };
        id: string;
        name: 'Profile';
        ph: 'P';
        tts: number;
      }
    }
  
    namespace ProfileChunk {
      interface P extends Base {
        args: {
          data: {
            cpuProfile: {
              nodes?: {
                callFrame: {
                  columnNumber?: number;
                  functionName: string;
                  lineNumber?: number;
                  scriptId: number;
                  url?: string;
                };
                id: number;
                parent?: number;
              }[];
              samples: {
              
              }[];
            };
            timeDeltas: {
            
            }[];
          };
        };
        id: string;
        name: 'ProfileChunk';
        ph: 'P';
        tts: number;
      }
    }
  
    namespace ProfileManager {
      type GetProfileInfoCache = 
        TraceEvent.ProfileManager.GetProfileInfoCache.X;
    
      namespace GetProfileInfoCache {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProfileManager::GetProfileInfoCache';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ProgramBindingBase {
      type Init = 
        TraceEvent.ProgramBindingBase.Init.X;
    
      namespace Init {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProgramBindingBase::init';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace PropertyTreeBuilder {
      type ShouldCreateRenderSurfaceopacity = 
        TraceEvent.PropertyTreeBuilder.ShouldCreateRenderSurfaceopacity.I;
    
      namespace ShouldCreateRenderSurfaceopacity {
        interface I extends Base {
          args: {
          
          };
          name: 'PropertyTreeBuilder::ShouldCreateRenderSurface opacity';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    }
  
    namespace PROXY_RESOLUTION_SERVICE_RESOLVED_PROXY_LIST {
      interface n extends Base {
        args: {
          params: {
            pac_string: string;
          };
          source_type: string;
        };
        id: string;
        name: 'PROXY_RESOLUTION_SERVICE_RESOLVED_PROXY_LIST';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace PROXY_RESOLUTION_SERVICE {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'PROXY_RESOLUTION_SERVICE';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'PROXY_RESOLUTION_SERVICE';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace Proxy_resolver {
      namespace Mojom {
        type ProxyResolver = 
          TraceEvent.Proxy_resolver.Mojom.ProxyResolver.X;
      
        type ProxyResolverRequestClient = 
          TraceEvent.Proxy_resolver.Mojom.ProxyResolverRequestClient.X;
      
        namespace ProxyResolver {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'proxy_resolver.mojom.ProxyResolver';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace ProxyResolverRequestClient {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'proxy_resolver.mojom.ProxyResolverRequestClient';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace ProxyImpl {
      type BeginMainFrameAbortedOnImplThread = 
        TraceEvent.ProxyImpl.BeginMainFrameAbortedOnImplThread.X;
    
      type DidActivateSyncTreeOnImplThread = 
        TraceEvent.ProxyImpl.DidActivateSyncTreeOnImplThread.X;
    
      type DidLoseLayerTreeFrameSinkOnImplThread = 
        TraceEvent.ProxyImpl.DidLoseLayerTreeFrameSinkOnImplThread.X;
    
      type DidReceiveCompositorFrameAckOnImplThread = 
        TraceEvent.ProxyImpl.DidReceiveCompositorFrameAckOnImplThread.X;
    
      type FinishGLOnImplThread = 
        TraceEvent.ProxyImpl.FinishGLOnImplThread.X;
    
      type InitializeLayerTreeFrameSinkOnImplThread = 
        TraceEvent.ProxyImpl.InitializeLayerTreeFrameSinkOnImplThread.X;
    
      type NotifyReadyToActivate = 
        TraceEvent.ProxyImpl.NotifyReadyToActivate.X;
    
      type NotifyReadyToCommitOnImpl = 
        TraceEvent.ProxyImpl.NotifyReadyToCommitOnImpl.X;
    
      type NotifyReadyToDraw = 
        TraceEvent.ProxyImpl.NotifyReadyToDraw.X;
    
      type OnCanDrawStateChanged = 
        TraceEvent.ProxyImpl.OnCanDrawStateChanged.X;
    
      type ProxyImpl = 
        TraceEvent.ProxyImpl.ProxyImpl.X;
    
      type RequestBeginMainFrameNotExpected = 
        TraceEvent.ProxyImpl.RequestBeginMainFrameNotExpected.X;
    
      type ScheduledActionActivateSyncTree = 
        TraceEvent.ProxyImpl.ScheduledActionActivateSyncTree.X;
    
      type ScheduledActionBeginLayerTreeFrameSinkCreation = 
        TraceEvent.ProxyImpl.ScheduledActionBeginLayerTreeFrameSinkCreation.X;
    
      type ScheduledActionCommit = 
        TraceEvent.ProxyImpl.ScheduledActionCommit.X;
    
      type ScheduledActionDraw = 
        TraceEvent.ProxyImpl.ScheduledActionDraw.X;
    
      type ScheduledActionPrepareTiles = 
        TraceEvent.ProxyImpl.ScheduledActionPrepareTiles.X;
    
      type SetNeedsCommitOnImplThread = 
        TraceEvent.ProxyImpl.SetNeedsCommitOnImplThread.X;
    
      type SetNeedsRedrawOnImplThread = 
        TraceEvent.ProxyImpl.SetNeedsRedrawOnImplThread.X;
    
      type SetVisibleOnImplThread = 
        TraceEvent.ProxyImpl.SetVisibleOnImplThread.X;
    
      namespace BeginMainFrameAbortedOnImplThread {
        interface X extends Base {
          args: {
            reason: string;
          };
          dur: number;
          name: 'ProxyImpl::BeginMainFrameAbortedOnImplThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidActivateSyncTreeOnImplThread {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProxyImpl::DidActivateSyncTreeOnImplThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidLoseLayerTreeFrameSinkOnImplThread {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProxyImpl::DidLoseLayerTreeFrameSinkOnImplThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidReceiveCompositorFrameAckOnImplThread {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProxyImpl::DidReceiveCompositorFrameAckOnImplThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace FinishGLOnImplThread {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProxyImpl::FinishGLOnImplThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace InitializeLayerTreeFrameSinkOnImplThread {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProxyImpl::InitializeLayerTreeFrameSinkOnImplThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace NotifyReadyToActivate {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProxyImpl::NotifyReadyToActivate';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace NotifyReadyToCommitOnImpl {
        interface X extends Base {
          args: {
          
          };
          dur?: number;
          name: 'ProxyImpl::NotifyReadyToCommitOnImpl';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace NotifyReadyToDraw {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProxyImpl::NotifyReadyToDraw';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnCanDrawStateChanged {
        interface X extends Base {
          args: {
            can_draw: boolean;
          };
          dur: number;
          name: 'ProxyImpl::OnCanDrawStateChanged';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ProxyImpl {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProxyImpl::ProxyImpl';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RequestBeginMainFrameNotExpected {
        interface X extends Base {
          args: {
            new_state: boolean;
          };
          dur: number;
          name: 'ProxyImpl::RequestBeginMainFrameNotExpected';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ScheduledActionActivateSyncTree {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProxyImpl::ScheduledActionActivateSyncTree';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ScheduledActionBeginLayerTreeFrameSinkCreation {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProxyImpl::ScheduledActionBeginLayerTreeFrameSinkCreation';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ScheduledActionCommit {
        interface X extends Base {
          args: {
          
          };
          dur?: number;
          name: 'ProxyImpl::ScheduledActionCommit';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ScheduledActionDraw {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProxyImpl::ScheduledActionDraw';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ScheduledActionPrepareTiles {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProxyImpl::ScheduledActionPrepareTiles';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetNeedsCommitOnImplThread {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProxyImpl::SetNeedsCommitOnImplThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetNeedsRedrawOnImplThread {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProxyImpl::SetNeedsRedrawOnImplThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetVisibleOnImplThread {
        interface X extends Base {
          args: {
            visible: boolean;
          };
          dur: number;
          name: 'ProxyImpl::SetVisibleOnImplThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ProxyMain {
      type BeginMainFrameNotExpectedSoon = 
        TraceEvent.ProxyMain.BeginMainFrameNotExpectedSoon.X;
    
      type DidInitializeLayerTreeFrameSink = 
        TraceEvent.ProxyMain.DidInitializeLayerTreeFrameSink.X;
    
      type ProxyMain = 
        TraceEvent.ProxyMain.ProxyMain.X;
    
      type RequestNewLayerTreeFrameSink = 
        TraceEvent.ProxyMain.RequestNewLayerTreeFrameSink.X;
    
      type SetDeferMainFrameUpdate = 
        TraceEvent.ProxyMain.SetDeferMainFrameUpdate.F |
        TraceEvent.ProxyMain.SetDeferMainFrameUpdate.S;
    
      type SetNeedsAnimate = 
        TraceEvent.ProxyMain.SetNeedsAnimate.I;
    
      type SetNeedsCommit = 
        TraceEvent.ProxyMain.SetNeedsCommit.I;
    
      type SetNeedsUpdateLayers = 
        TraceEvent.ProxyMain.SetNeedsUpdateLayers.I;
    
      type SetVisible = 
        TraceEvent.ProxyMain.SetVisible.X;
    
      type Stop = 
        TraceEvent.ProxyMain.Stop.X;
    
      namespace BeginMainFrame {
        type Commit = 
          TraceEvent.ProxyMain.BeginMainFrame.Commit.X;
      
        namespace Commit {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'ProxyMain::BeginMainFrame::commit';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    
      namespace BeginMainFrameNotExpectedSoon {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProxyMain::BeginMainFrameNotExpectedSoon';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidInitializeLayerTreeFrameSink {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProxyMain::DidInitializeLayerTreeFrameSink';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ProxyMain {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProxyMain::ProxyMain';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RequestNewLayerTreeFrameSink {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProxyMain::RequestNewLayerTreeFrameSink';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetDeferMainFrameUpdate {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'ProxyMain::SetDeferMainFrameUpdate';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'ProxyMain::SetDeferMainFrameUpdate';
          ph: 'S';
          tts: number;
        }
      }
    
      namespace SetNeedsAnimate {
        interface I extends Base {
          args: {
          
          };
          name: 'ProxyMain::SetNeedsAnimate';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      namespace SetNeedsCommit {
        interface I extends Base {
          args: {
          
          };
          name: 'ProxyMain::SetNeedsCommit';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      namespace SetNeedsUpdateLayers {
        interface I extends Base {
          args: {
          
          };
          name: 'ProxyMain::SetNeedsUpdateLayers';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      namespace SetVisible {
        interface X extends Base {
          args: {
            visible: boolean;
          };
          dur: number;
          name: 'ProxyMain::SetVisible';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Stop {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ProxyMain::Stop';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace QUIC_CHROMIUM_CLIENT_STREAM_READ_RESPONSE_HEADERS {
      interface n extends Base {
        args: {
          params: {
            headers: {
              '0': string;
              '1': string;
              '2': string;
              '3': string;
              '4': string;
              '5': string;
              '6': string;
              '7': string;
              '8': string;
              '9': string;
              '10': string;
              '11': string;
            }[];
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_CHROMIUM_CLIENT_STREAM_READ_RESPONSE_HEADERS';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_CHROMIUM_CLIENT_STREAM_SEND_REQUEST_HEADERS {
      interface n extends Base {
        args: {
          params: {
            headers: {
              '0': string;
              '1': string;
              '2': string;
              '3': string;
              '4': string;
              '5': string;
              '6': string;
              '7': string;
              '8': string;
              '9': string;
              '10': string;
              '11': string;
              '12'?: {
              
              };
            }[];
            quic_priority: number;
            quic_stream_id: number;
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_CHROMIUM_CLIENT_STREAM_SEND_REQUEST_HEADERS';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_CONNECTION_MIGRATION_MODE {
      interface n extends Base {
        args: {
          params: {
            connection_migration_mode: number;
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_CONNECTION_MIGRATION_MODE';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_SESSION_ACK_FRAME_SENT {
      interface n extends Base {
        args: {
          params: {
            delta_time_largest_observed_us: number;
            largest_observed: number;
            missing_packets: {
            
            }[];
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_SESSION_ACK_FRAME_SENT';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_SESSION_CERTIFICATE_VERIFIED {
      interface n extends Base {
        args: {
          params: {
            subjects: {
              '0': string;
              '1': string;
              '2': string;
              '3': string;
              '4': string;
              '5': string;
              '6': string;
              '7': string;
              '8': string;
              '9': string;
              '10': string;
              '11': string;
            }[];
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_SESSION_CERTIFICATE_VERIFIED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_SESSION_CLOSED {
      interface n extends Base {
        args: {
          params: {
            from_peer: boolean;
            quic_error: number;
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_SESSION_CLOSED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_SESSION_CRYPTO_HANDSHAKE_MESSAGE_RECEIVED {
      interface n extends Base {
        args: {
          params: {
            quic_crypto_handshake_message: string;
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_SESSION_CRYPTO_HANDSHAKE_MESSAGE_RECEIVED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_SESSION_CRYPTO_HANDSHAKE_MESSAGE_SENT {
      interface n extends Base {
        args: {
          params: {
            quic_crypto_handshake_message: string;
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_SESSION_CRYPTO_HANDSHAKE_MESSAGE_SENT';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_SESSION_PACKET_AUTHENTICATED {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'QUIC_SESSION_PACKET_AUTHENTICATED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_SESSION_PACKET_LOST {
      interface n extends Base {
        args: {
          params: {
            detection_time_us: number;
            packet_number: number;
            transmission_type: number;
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_SESSION_PACKET_LOST';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_SESSION_PACKET_RECEIVED {
      interface n extends Base {
        args: {
          params: {
            peer_address: string;
            self_address: string;
            size: number;
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_SESSION_PACKET_RECEIVED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_SESSION_PACKET_SENT {
      interface n extends Base {
        args: {
          params: {
            packet_number: number;
            sent_time_us: number;
            size: number;
            transmission_type: number;
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_SESSION_PACKET_SENT';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_SESSION_PING_FRAME_SENT {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'QUIC_SESSION_PING_FRAME_SENT';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_SESSION_RST_STREAM_FRAME_RECEIVED {
      interface n extends Base {
        args: {
          params: {
            quic_rst_stream_error: number;
            stream_id: number;
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_SESSION_RST_STREAM_FRAME_RECEIVED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_SESSION_RST_STREAM_FRAME_SENT {
      interface n extends Base {
        args: {
          params: {
            quic_rst_stream_error: number;
            stream_id: number;
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_SESSION_RST_STREAM_FRAME_SENT';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_SESSION_STREAM_FRAME_RECEIVED {
      interface n extends Base {
        args: {
          params: {
            fin: boolean;
            length: number;
            offset: number;
            stream_id: number;
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_SESSION_STREAM_FRAME_RECEIVED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_SESSION_STREAM_FRAME_SENT {
      interface n extends Base {
        args: {
          params: {
            fin: boolean;
            length: number;
            offset: number;
            stream_id: number;
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_SESSION_STREAM_FRAME_SENT';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_SESSION_UNAUTHENTICATED_PACKET_HEADER_RECEIVED {
      interface n extends Base {
        args: {
          params: {
            connection_id: string;
            packet_number: number;
            reset_flag: number;
            version_flag: number;
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_SESSION_UNAUTHENTICATED_PACKET_HEADER_RECEIVED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_SESSION_VERSION_NEGOTIATED {
      interface n extends Base {
        args: {
          params: {
            version: string;
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_SESSION_VERSION_NEGOTIATED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_SESSION {
      interface b extends Base {
        args: {
          params: {
            cert_verify_flags: number;
            host: string;
            port: number;
            privacy_mode: boolean;
            require_confirmation: boolean;
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_SESSION';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'QUIC_SESSION';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace QUIC_STREAM_FACTORY_JOB_BOUND_TO_HTTP_STREAM_JOB {
      interface n extends Base {
        args: {
          params: {
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_STREAM_FACTORY_JOB_BOUND_TO_HTTP_STREAM_JOB';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace QUIC_STREAM_FACTORY_JOB_CONNECT {
      interface b extends Base {
        args: {
          params: {
            require_confirmation: boolean;
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_STREAM_FACTORY_JOB_CONNECT';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'QUIC_STREAM_FACTORY_JOB_CONNECT';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace QUIC_STREAM_FACTORY_JOB {
      interface b extends Base {
        args: {
          params: {
            server_id: string;
          };
          source_type: string;
        };
        id: string;
        name: 'QUIC_STREAM_FACTORY_JOB';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'QUIC_STREAM_FACTORY_JOB';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace QuicStreamFactory {
      type CreateSession = 
        TraceEvent.QuicStreamFactory.CreateSession.X;
    
      namespace CreateSession {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'QuicStreamFactory::CreateSession';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Job {
        type DoLoop = 
          TraceEvent.QuicStreamFactory.Job.DoLoop.X;
      
        namespace DoLoop {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'QuicStreamFactory::Job::DoLoop';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace Rappor {
      namespace Mojom {
        type RapporRecorder = 
          TraceEvent.Rappor.Mojom.RapporRecorder.X;
      
        namespace RapporRecorder {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'rappor.mojom.RapporRecorder';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace RasterizerTaskImpl {
      type RunOnWorkerThread = 
        TraceEvent.RasterizerTaskImpl.RunOnWorkerThread.X;
    
      namespace RunOnWorkerThread {
        interface X extends Base {
          args: {
            source_prepare_tiles_id: number;
          };
          dur: number;
          name: 'RasterizerTaskImpl::RunOnWorkerThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace RasterSource {
      type PerformSolidColorAnalysis = 
        TraceEvent.RasterSource.PerformSolidColorAnalysis.X;
    
      namespace PerformSolidColorAnalysis {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RasterSource::PerformSolidColorAnalysis';
          ph: 'X';
          tdur: number;
          tts: number;
        }
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
  
    namespace ReadTransaction {
      interface B extends Base {
        args: {
          src_file: string;
          src_func: string;
        };
        name: 'ReadTransaction';
        ph: 'B';
        tts: number;
      }
    
      interface E extends Base {
        args: {
        
        };
        name: 'ReadTransaction';
        ph: 'E';
        tts: number;
      }
    }
  
    namespace RealTimeDomain {
      type DelayTillNextTask = 
        TraceEvent.RealTimeDomain.DelayTillNextTask.X;
    
      namespace DelayTillNextTask {
        interface X extends Base {
          args: {
            delay_ms: number;
          };
          dur: number;
          name: 'RealTimeDomain::DelayTillNextTask';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace RecordingSource {
      type DetermineIfSolidColor = 
        TraceEvent.RecordingSource.DetermineIfSolidColor.X;
    
      type FinishDisplayItemListUpdate = 
        TraceEvent.RecordingSource.FinishDisplayItemListUpdate.X;
    
      namespace DetermineIfSolidColor {
        interface X extends Base {
          args: {
            opcount: number;
          };
          dur: number;
          name: 'RecordingSource::DetermineIfSolidColor';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace FinishDisplayItemListUpdate {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RecordingSource::FinishDisplayItemListUpdate';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace RedirectEnd {
      interface R extends Base {
        args: {
          frame: string;
        };
        name: 'redirectEnd';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace RedirectStart {
      interface R extends Base {
        args: {
          frame: string;
        };
        name: 'redirectStart';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace RememberedSetUpdatingItem {
      type Process = 
        TraceEvent.RememberedSetUpdatingItem.Process.X;
    
      namespace Process {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RememberedSetUpdatingItem::Process';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace RemoteWindowProxy {
      type Initialize = 
        TraceEvent.RemoteWindowProxy.Initialize.X;
    
      namespace Initialize {
        interface X extends Base {
          args: {
            isMainWindow: boolean;
          };
          dur: number;
          name: 'RemoteWindowProxy::initialize';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace RendererAudioState {
      interface S extends Base {
        args: {
        
        };
        id: string;
        name: 'RendererAudioState';
        ph: 'S';
        tts: number;
      }
    
      interface T extends Base {
        args: {
          step: string;
        };
        id: string;
        name: 'RendererAudioState';
        ph: 'T';
        tts: number;
      }
    }
  
    namespace RendererMain {
      type START_MSG_LOOP = 
        TraceEvent.RendererMain.START_MSG_LOOP.S;
    
      namespace START_MSG_LOOP {
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'RendererMain.START_MSG_LOOP';
          ph: 'S';
          tts: number;
        }
      }
    }
  
    namespace RendererProcessType {
      interface S extends Base {
        args: {
        
        };
        id: string;
        name: 'RendererProcessType';
        ph: 'S';
        tts: number;
      }
    
      interface T extends Base {
        args: {
          step: string;
        };
        id: string;
        name: 'RendererProcessType';
        ph: 'T';
        tts: number;
      }
    }
  
    namespace RendererScheduler {
      type BackgroundBudgetMs = 
        TraceEvent.RendererScheduler.BackgroundBudgetMs.C;
    
      namespace BackgroundBudgetMs {
        interface C extends Base {
          args: {
            value: number;
          };
          id: string;
          name: 'RendererScheduler.BackgroundBudgetMs';
          ph: 'C';
          tts: number;
        }
      }
    }
  
    namespace RendererVisibility {
      interface F extends Base {
        args: {
        
        };
        id: string;
        name: 'RendererVisibility';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
        
        };
        id: string;
        name: 'RendererVisibility';
        ph: 'S';
        tts: number;
      }
    
      interface T extends Base {
        args: {
          step: string;
        };
        id: string;
        name: 'RendererVisibility';
        ph: 'T';
        tts: number;
      }
    }
  
    namespace RenderFrame {
      interface D extends Base {
        args: {
        
        };
        id: string;
        name: 'RenderFrame';
        ph: 'D';
        scope: string;
        tts: number;
      }
    
      interface N extends Base {
        args: {
        
        };
        id: string;
        name: 'RenderFrame';
        ph: 'N';
        scope: string;
        tts: number;
      }
    
      interface O extends Base {
        args: {
          snapshot: {
            parent: {
              id_ref: string;
              scope: string;
            };
          };
        };
        id: string;
        name: 'RenderFrame';
        ph: 'O';
        scope: string;
        tts: number;
      }
    }
  
    namespace RenderFrameHostImpl {
      type BeginNavigation = 
        TraceEvent.RenderFrameHostImpl.BeginNavigation.X;
    
      type CommitNavigation = 
        TraceEvent.RenderFrameHostImpl.CommitNavigation.X;
    
      type CreateRenderFrame = 
        TraceEvent.RenderFrameHostImpl.CreateRenderFrame.X;
    
      type DidCommitProvisionalLoad = 
        TraceEvent.RenderFrameHostImpl.DidCommitProvisionalLoad.X;
    
      type OnDidAddContentSecurityPolicies = 
        TraceEvent.RenderFrameHostImpl.OnDidAddContentSecurityPolicies.X;
    
      type OnDidFailProvisionalLoadWithError = 
        TraceEvent.RenderFrameHostImpl.OnDidFailProvisionalLoadWithError.X;
    
      type OnDidStopLoading = 
        TraceEvent.RenderFrameHostImpl.OnDidStopLoading.X;
    
      type OnDispatchLoad = 
        TraceEvent.RenderFrameHostImpl.OnDispatchLoad.X;
    
      type SwapOut = 
        TraceEvent.RenderFrameHostImpl.SwapOut.F |
        TraceEvent.RenderFrameHostImpl.SwapOut.S;
    
      namespace BeginNavigation {
        interface X extends Base {
          args: {
            frame_tree_node: number;
            url: string;
          };
          dur: number;
          name: 'RenderFrameHostImpl::BeginNavigation';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace CommitNavigation {
        interface X extends Base {
          args: {
            frame_tree_node: number;
            url: string;
          };
          dur: number;
          name: 'RenderFrameHostImpl::CommitNavigation';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace CreateRenderFrame {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderFrameHostImpl::CreateRenderFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidCommitProvisionalLoad {
        interface X extends Base {
          args: {
            details: {
              base_url?: string;
              frame_tree_node: number;
              origin: string;
              'process lock': string;
              'site id': number;
              transition: number;
            };
            url: string;
          };
          dur: number;
          name: 'RenderFrameHostImpl::DidCommitProvisionalLoad';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnDidAddContentSecurityPolicies {
        interface X extends Base {
          args: {
            frame_tree_node: number;
          };
          dur: number;
          name: 'RenderFrameHostImpl::OnDidAddContentSecurityPolicies';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnDidFailProvisionalLoadWithError {
        interface X extends Base {
          args: {
            error: number;
            frame_tree_node: number;
          };
          dur: number;
          name: 'RenderFrameHostImpl::OnDidFailProvisionalLoadWithError';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnDidStopLoading {
        interface X extends Base {
          args: {
            frame_tree_node: number;
          };
          dur: number;
          name: 'RenderFrameHostImpl::OnDidStopLoading';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnDispatchLoad {
        interface X extends Base {
          args: {
            frame_tree_node: number;
          };
          dur: number;
          name: 'RenderFrameHostImpl::OnDispatchLoad';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SwapOut {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'RenderFrameHostImpl::SwapOut';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
            frame_tree_node: number;
          };
          id: string;
          name: 'RenderFrameHostImpl::SwapOut';
          ph: 'S';
          tts: number;
        }
      }
    }
  
    namespace RenderFrameHostImplBeforeUnload {
      interface F extends Base {
        args: {
          'FrameTreeNode id': number;
        };
        id: string;
        name: 'RenderFrameHostImpl BeforeUnload';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          '&RenderFrameHostImpl': string;
        };
        id: string;
        name: 'RenderFrameHostImpl BeforeUnload';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace RenderFrameHostManager {
      type CommitPending = 
        TraceEvent.RenderFrameHostManager.CommitPending.X;
    
      type SwapOutOldFrame = 
        TraceEvent.RenderFrameHostManager.SwapOutOldFrame.X;
    
      namespace CommitPending {
        interface X extends Base {
          args: {
            'FrameTreeNode id': number;
          };
          dur: number;
          name: 'RenderFrameHostManager::CommitPending';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SwapOutOldFrame {
        interface X extends Base {
          args: {
            'FrameTreeNode id': number;
          };
          dur: number;
          name: 'RenderFrameHostManager::SwapOutOldFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace RenderFrameImpl {
      type CreateChildFrame = 
        TraceEvent.RenderFrameImpl.CreateChildFrame.X;
    
      type DidCommitProvisionalLoad = 
        TraceEvent.RenderFrameImpl.DidCommitProvisionalLoad.X;
    
      type DidFinishDocumentLoad = 
        TraceEvent.RenderFrameImpl.DidFinishDocumentLoad.X;
    
      type DidFinishLoad = 
        TraceEvent.RenderFrameImpl.DidFinishLoad.X;
    
      type DidStartLoading = 
        TraceEvent.RenderFrameImpl.DidStartLoading.X;
    
      type DidStartProvisionalLoad = 
        TraceEvent.RenderFrameImpl.DidStartProvisionalLoad.X;
    
      type DidStopLoading = 
        TraceEvent.RenderFrameImpl.DidStopLoading.X;
    
      type Initialize = 
        TraceEvent.RenderFrameImpl.Initialize.X;
    
      namespace CreateChildFrame {
        interface X extends Base {
          args: {
            child: number;
            id: number;
          };
          dur: number;
          name: 'RenderFrameImpl::createChildFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidCommitProvisionalLoad {
        interface X extends Base {
          args: {
            id: number;
            url: string;
          };
          dur: number;
          name: 'RenderFrameImpl::didCommitProvisionalLoad';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidFinishDocumentLoad {
        interface X extends Base {
          args: {
            id: number;
          };
          dur: number;
          name: 'RenderFrameImpl::didFinishDocumentLoad';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidFinishLoad {
        interface X extends Base {
          args: {
            id: number;
          };
          dur: number;
          name: 'RenderFrameImpl::didFinishLoad';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidStartLoading {
        interface X extends Base {
          args: {
            id: number;
          };
          dur: number;
          name: 'RenderFrameImpl::didStartLoading';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidStartProvisionalLoad {
        interface X extends Base {
          args: {
            id: number;
            url: string;
          };
          dur: number;
          name: 'RenderFrameImpl::didStartProvisionalLoad';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidStopLoading {
        interface X extends Base {
          args: {
            id: number;
          };
          dur: number;
          name: 'RenderFrameImpl::didStopLoading';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Initialize {
        interface X extends Base {
          args: {
            id: number;
            parent: number;
          };
          dur: number;
          name: 'RenderFrameImpl::Initialize';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace RenderPass {
      interface D extends Base {
        args: {
        
        };
        id: string;
        name: 'RenderPass';
        ph: 'D';
        tts: number;
      }
    }
  
    namespace RenderProcessHostImpl {
      type Send = 
        TraceEvent.RenderProcessHostImpl.Send.X;
    
      namespace Send {
        interface X extends Base {
          args: {
            class: number;
            line: number;
          };
          dur: number;
          name: 'RenderProcessHostImpl::Send';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UpdateProcessPriority {
        type SetProcessPriority = 
          TraceEvent.RenderProcessHostImpl.UpdateProcessPriority.SetProcessPriority.X;
      
        namespace SetProcessPriority {
          interface X extends Base {
            args: {
              pid: number;
              priority_is_background: boolean;
            };
            dur: number;
            name: 'RenderProcessHostImpl::UpdateProcessPriority.SetProcessPriority';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        interface X extends Base {
          args: {
            has_pending_views: boolean;
            should_background: boolean;
          };
          dur: number;
          name: 'RenderProcessHostImpl::UpdateProcessPriority';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace RenderSurfaceImpl {
      type AppendQuads = 
        TraceEvent.RenderSurfaceImpl.AppendQuads.X;
    
      namespace AppendQuads {
        interface X extends Base {
          args: {
            mask_layer_gpu_memory_usage: number;
          };
          dur: number;
          name: 'RenderSurfaceImpl::AppendQuads';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace RenderTextHarfBuzz {
      type ItemizeTextToRuns = 
        TraceEvent.RenderTextHarfBuzz.ItemizeTextToRuns.X;
    
      type ShapeRuns = 
        TraceEvent.RenderTextHarfBuzz.ShapeRuns.X;
    
      type ShapeRunWithFontInternal = 
        TraceEvent.RenderTextHarfBuzz.ShapeRunWithFontInternal.X;
    
      namespace ItemizeTextToRuns {
        interface X extends Base {
          args: {
            text_length: number;
          };
          dur: number;
          name: 'RenderTextHarfBuzz::ItemizeTextToRuns';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ShapeRuns {
        interface X extends Base {
          args: {
            run_count: number;
          };
          dur: number;
          name: 'RenderTextHarfBuzz::ShapeRuns';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ShapeRunWithFontInternal {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderTextHarfBuzz::ShapeRunWithFontInternal';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace RenderThreadImpl {
      type EstablishGpuChannelSync = 
        TraceEvent.RenderThreadImpl.EstablishGpuChannelSync.X;
    
      namespace EstablishGpuChannelSync {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderThreadImpl::EstablishGpuChannelSync';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace RenderViewHostImpl {
      type CreateRenderView = 
        TraceEvent.RenderViewHostImpl.CreateRenderView.X;
    
      type GetWebkitPrefs = 
        TraceEvent.RenderViewHostImpl.GetWebkitPrefs.X;
    
      namespace CreateRenderView {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderViewHostImpl::CreateRenderView';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GetWebkitPrefs {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderViewHostImpl::GetWebkitPrefs';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace RenderWidget {
      type DidCommitAndDrawCompositorFrame = 
        TraceEvent.RenderWidget.DidCommitAndDrawCompositorFrame.X;
    
      type InitializeLayerTreeView = 
        TraceEvent.RenderWidget.InitializeLayerTreeView.X;
    
      type OnSynchronizeVisualProperties = 
        TraceEvent.RenderWidget.OnSynchronizeVisualProperties.X;
    
      type OnWasHidden = 
        TraceEvent.RenderWidget.OnWasHidden.X;
    
      type OnWasShown = 
        TraceEvent.RenderWidget.OnWasShown.X;
    
      type UpdateSelectionBounds = 
        TraceEvent.RenderWidget.UpdateSelectionBounds.X;
    
      type UpdateTextInputState = 
        TraceEvent.RenderWidget.UpdateTextInputState.X;
    
      type WillBeginCompositorFrame = 
        TraceEvent.RenderWidget.WillBeginCompositorFrame.X;
    
      namespace DidCommitAndDrawCompositorFrame {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderWidget::DidCommitAndDrawCompositorFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace InitializeLayerTreeView {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderWidget::InitializeLayerTreeView';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnSynchronizeVisualProperties {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderWidget::OnSynchronizeVisualProperties';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnWasHidden {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderWidget::OnWasHidden';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnWasShown {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderWidget::OnWasShown';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UpdateSelectionBounds {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderWidget::UpdateSelectionBounds';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UpdateTextInputState {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderWidget::UpdateTextInputState';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace WillBeginCompositorFrame {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderWidget::willBeginCompositorFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace RenderWidgetHostImpl {
      type DidUpdateVisualProperties = 
        TraceEvent.RenderWidgetHostImpl.DidUpdateVisualProperties.X;
    
      type ForwardKeyboardEvent = 
        TraceEvent.RenderWidgetHostImpl.ForwardKeyboardEvent.X;
    
      type ForwardMouseEvent = 
        TraceEvent.RenderWidgetHostImpl.ForwardMouseEvent.X;
    
      type GetScreenInfo = 
        TraceEvent.RenderWidgetHostImpl.GetScreenInfo.X;
    
      type WasHidden = 
        TraceEvent.RenderWidgetHostImpl.WasHidden.X;
    
      type WasShown = 
        TraceEvent.RenderWidgetHostImpl.WasShown.X;
    
      namespace DidUpdateVisualProperties {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderWidgetHostImpl::DidUpdateVisualProperties';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ForwardKeyboardEvent {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderWidgetHostImpl::ForwardKeyboardEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ForwardMouseEvent {
        interface X extends Base {
          args: {
            x: number;
            y: number;
          };
          dur: number;
          name: 'RenderWidgetHostImpl::ForwardMouseEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GetScreenInfo {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderWidgetHostImpl::GetScreenInfo';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace WasHidden {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderWidgetHostImpl::WasHidden';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace WasShown {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderWidgetHostImpl::WasShown';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace RenderWidgetHostViewCocoa {
      type KeyEvent = 
        TraceEvent.RenderWidgetHostViewCocoa.KeyEvent.X;
    
      type MouseEvent = 
        TraceEvent.RenderWidgetHostViewCocoa.MouseEvent.X;
    
      type SendViewBoundsInWindowToClient = 
        TraceEvent.RenderWidgetHostViewCocoa.SendViewBoundsInWindowToClient.X;
    
      type SendWindowFrameInScreenToClient = 
        TraceEvent.RenderWidgetHostViewCocoa.SendWindowFrameInScreenToClient.X;
    
      namespace KeyEvent {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderWidgetHostViewCocoa::keyEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace MouseEvent {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderWidgetHostViewCocoa::mouseEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SendViewBoundsInWindowToClient {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderWidgetHostViewCocoa::sendViewBoundsInWindowToClient';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SendWindowFrameInScreenToClient {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RenderWidgetHostViewCocoa::sendWindowFrameInScreenToClient';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace RenderWidgetInputHandler {
      type OnHandleInputEvent = 
        TraceEvent.RenderWidgetInputHandler.OnHandleInputEvent.X;
    
      namespace OnHandleInputEvent {
        interface X extends Base {
          args: {
            event: string;
          };
          dur: number;
          name: 'RenderWidgetInputHandler::OnHandleInputEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace RenderWorker0x7f8e1500b000 {
      interface b extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7f8e1500b000';
        ph: 'b';
        tts: number;
        use_async_tts: number;
      }
    
      interface e extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7f8e1500b000';
        ph: 'e';
        tts: number;
        use_async_tts: number;
      }
    
      interface F extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7f8e1500b000';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7f8e1500b000';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace RenderWorker0x7fa57a039c00 {
      interface b extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fa57a039c00';
        ph: 'b';
        tts: number;
        use_async_tts: number;
      }
    
      interface e extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fa57a039c00';
        ph: 'e';
        tts: number;
        use_async_tts: number;
      }
    
      interface F extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fa57a039c00';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fa57a039c00';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace RenderWorker0x7fcab207b200 {
      interface b extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fcab207b200';
        ph: 'b';
        tts: number;
        use_async_tts: number;
      }
    
      interface e extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fcab207b200';
        ph: 'e';
        tts: number;
        use_async_tts: number;
      }
    
      interface F extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fcab207b200';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fcab207b200';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace RenderWorker0x7fd50f00aa00 {
      interface b extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fd50f00aa00';
        ph: 'b';
        tts: number;
        use_async_tts: number;
      }
    
      interface e extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fd50f00aa00';
        ph: 'e';
        tts: number;
        use_async_tts: number;
      }
    
      interface F extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fd50f00aa00';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fd50f00aa00';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace RenderWorker0x7fdabc07b400 {
      interface b extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fdabc07b400';
        ph: 'b';
        tts: number;
        use_async_tts: number;
      }
    
      interface e extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fdabc07b400';
        ph: 'e';
        tts: number;
        use_async_tts: number;
      }
    
      interface F extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fdabc07b400';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fdabc07b400';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace RenderWorker0x7fdefa843000 {
      interface b extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fdefa843000';
        ph: 'b';
        tts: number;
        use_async_tts: number;
      }
    
      interface e extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fdefa843000';
        ph: 'e';
        tts: number;
        use_async_tts: number;
      }
    
      interface F extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fdefa843000';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fdefa843000';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace RenderWorker0x7fe5c4821c00 {
      interface b extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fe5c4821c00';
        ph: 'b';
        tts: number;
        use_async_tts: number;
      }
    
      interface e extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fe5c4821c00';
        ph: 'e';
        tts: number;
        use_async_tts: number;
      }
    
      interface F extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fe5c4821c00';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          channel: string;
          gl_category: string;
        };
        id: string;
        name: 'RenderWorker-0x7fe5c4821c00';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace REQUEST_ALIVE {
      interface b extends Base {
        args: {
          params: {
            priority: string;
            url: string;
          };
          source_type: string;
        };
        id: string;
        name: 'REQUEST_ALIVE';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: {
            net_error: number;
          };
          source_type: string;
        };
        id: string;
        name: 'REQUEST_ALIVE';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace RequestAnimationFrame {
      interface I extends Base {
        args: {
          data: {
            frame: string;
            id: number;
            stackTrace?: {
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
  
    namespace RequestIdleCallback {
      interface I extends Base {
        args: {
          data: {
            frame: string;
            id: number;
            stackTrace?: {
              columnNumber: number;
              functionName: string;
              lineNumber: number;
              scriptId: string;
              url: string;
            }[];
            timeout: number;
          };
        };
        name: 'RequestIdleCallback';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace RequestMainThreadFrame {
      interface I extends Base {
        args: {
          layerTreeId: number;
        };
        name: 'RequestMainThreadFrame';
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
  
    namespace Resource_coordinator {
      namespace Mojom {
        type CoordinationUnitProvider = 
          TraceEvent.Resource_coordinator.Mojom.CoordinationUnitProvider.X;
      
        type FrameCoordinationUnit = 
          TraceEvent.Resource_coordinator.Mojom.FrameCoordinationUnit.X;
      
        type PageCoordinationUnit = 
          TraceEvent.Resource_coordinator.Mojom.PageCoordinationUnit.X;
      
        type PageSignalReceiver = 
          TraceEvent.Resource_coordinator.Mojom.PageSignalReceiver.X;
      
        type ProcessCoordinationUnit = 
          TraceEvent.Resource_coordinator.Mojom.ProcessCoordinationUnit.X;
      
        namespace CoordinationUnitProvider {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'resource_coordinator.mojom.CoordinationUnitProvider';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace FrameCoordinationUnit {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'resource_coordinator.mojom.FrameCoordinationUnit';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace PageCoordinationUnit {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'resource_coordinator.mojom.PageCoordinationUnit';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace PageSignalReceiver {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'resource_coordinator.mojom.PageSignalReceiver';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace ProcessCoordinationUnit {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'resource_coordinator.mojom.ProcessCoordinationUnit';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace Resource {
      type AppendData = 
        TraceEvent.Resource.AppendData.X;
    
      namespace AppendData {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Resource::appendData';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ResourceChangePriority {
      interface I extends Base {
        args: {
          data: {
            priority: string;
            requestId: string;
          };
        };
        name: 'ResourceChangePriority';
        ph: 'I';
        s: string;
        tts: number;
      }
    
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
  
    namespace ResourceDispatcher {
      type OnReceivedRedirect = 
        TraceEvent.ResourceDispatcher.OnReceivedRedirect.X;
    
      type OnReceivedResponse = 
        TraceEvent.ResourceDispatcher.OnReceivedResponse.X;
    
      type OnRequestComplete = 
        TraceEvent.ResourceDispatcher.OnRequestComplete.X;
    
      namespace OnReceivedRedirect {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ResourceDispatcher::OnReceivedRedirect';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnReceivedResponse {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ResourceDispatcher::OnReceivedResponse';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnRequestComplete {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ResourceDispatcher::OnRequestComplete';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ResourceFetcher {
      type DetermineRevalidationPolicy = 
        TraceEvent.ResourceFetcher.DetermineRevalidationPolicy.I;
    
      type RequestResource = 
        TraceEvent.ResourceFetcher.RequestResource.X;
    
      namespace DetermineRevalidationPolicy {
        interface I extends Base {
          args: {
            revalidationPolicy: number;
          };
          name: 'ResourceFetcher::DetermineRevalidationPolicy';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      namespace RequestResource {
        interface X extends Base {
          args: {
            url: {
              url: string;
            };
          };
          dur: number;
          name: 'ResourceFetcher::requestResource';
          ph: 'X';
          tdur: number;
          tts: number;
        }
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
  
    namespace ResourceLoad {
      interface b extends Base {
        args: {
          beginData: {
            url: string;
          };
        };
        id2: {
          local: string;
        };
        name: 'ResourceLoad';
        ph: 'b';
        scope: string;
        tts: number;
      }
    
      interface e extends Base {
        args: {
          endData: {
            outcome: string;
          };
        };
        id2: {
          local: string;
        };
        name: 'ResourceLoad';
        ph: 'e';
        scope: string;
        tts: number;
      }
    }
  
    namespace ResourceLoadPriorityOptimizer {
      type UpdateAllImageResourcePriorities = 
        TraceEvent.ResourceLoadPriorityOptimizer.UpdateAllImageResourcePriorities.X;
    
      namespace UpdateAllImageResourcePriorities {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ResourceLoadPriorityOptimizer::updateAllImageResourcePriorities';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ResourcePrefetchPredictor {
      type StartInitialization = 
        TraceEvent.ResourcePrefetchPredictor.StartInitialization.X;
    
      namespace StartInitialization {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ResourcePrefetchPredictor::StartInitialization';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ResourcePrioritySet {
      interface n extends Base {
        args: {
          data: {
            priority: number;
          };
        };
        id2: {
          local: string;
        };
        name: 'ResourcePrioritySet';
        ph: 'n';
        scope: string;
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
  
    namespace RootScrollerController {
      type PerformRootScrollerSelection = 
        TraceEvent.RootScrollerController.PerformRootScrollerSelection.X;
    
      namespace PerformRootScrollerSelection {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RootScrollerController::PerformRootScrollerSelection';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace RuleSet {
      type AddRulesFromSheet = 
        TraceEvent.RuleSet.AddRulesFromSheet.X;
    
      namespace AddRulesFromSheet {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'RuleSet::addRulesFromSheet';
          ph: 'X';
          tdur: number;
          tts: number;
        }
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
    
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'RunMicrotasks';
        ph: 'X';
        tdur: number;
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
  
    namespace RunWithFaviconResults {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'RunWithFaviconResults';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace Safe_browsing {
      namespace Mojom {
        type PhishingDetector = 
          TraceEvent.Safe_browsing.Mojom.PhishingDetector.X;
      
        type PhishingModelSetter = 
          TraceEvent.Safe_browsing.Mojom.PhishingModelSetter.X;
      
        type SafeBrowsing = 
          TraceEvent.Safe_browsing.Mojom.SafeBrowsing.X;
      
        type SafeBrowsingUrlChecker = 
          TraceEvent.Safe_browsing.Mojom.SafeBrowsingUrlChecker.X;
      
        namespace PhishingDetector {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'safe_browsing.mojom.PhishingDetector';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace PhishingModelSetter {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'safe_browsing.mojom.PhishingModelSetter';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace SafeBrowsing {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'safe_browsing.mojom.SafeBrowsing';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace SafeBrowsingUrlChecker {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'safe_browsing.mojom.SafeBrowsingUrlChecker';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace ScheduledAction {
      type Execute = 
        TraceEvent.ScheduledAction.Execute.X;
    
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
  
    namespace ScheduledTasks {
      interface F extends Base {
        args: {
        
        };
        id: string;
        name: 'ScheduledTasks';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
        
        };
        id: string;
        name: 'ScheduledTasks';
        ph: 'S';
        tts: number;
      }
    
      interface T extends Base {
        args: {
          state: {
            tasks_pending: {
              activate_tile_tasks_completed: boolean;
              all_tile_tasks_completed: boolean;
              draw_tile_tasks_completed: boolean;
            };
          };
          step: string;
        };
        id: string;
        name: 'ScheduledTasks';
        ph: 'T';
        tts: number;
      }
    }
  
    namespace Scheduler {
      type AwaitingTouchstartResponse = 
        TraceEvent.Scheduler.AwaitingTouchstartResponse.S |
        TraceEvent.Scheduler.AwaitingTouchstartResponse.T;
    
      type BeginFrame = 
        TraceEvent.Scheduler.BeginFrame.X;
    
      type BeginFrameDropped = 
        TraceEvent.Scheduler.BeginFrameDropped.I;
    
      type BeginFrameNotExpectedSoon = 
        TraceEvent.Scheduler.BeginFrameNotExpectedSoon.F |
        TraceEvent.Scheduler.BeginFrameNotExpectedSoon.S |
        TraceEvent.Scheduler.BeginFrameNotExpectedSoon.T;
    
      type BeginImplFrame = 
        TraceEvent.Scheduler.BeginImplFrame.X;
    
      type BeginMainFrameAborted = 
        TraceEvent.Scheduler.BeginMainFrameAborted.X;
    
      type BeginMainFrameOnCriticalPath = 
        TraceEvent.Scheduler.BeginMainFrameOnCriticalPath.F |
        TraceEvent.Scheduler.BeginMainFrameOnCriticalPath.S |
        TraceEvent.Scheduler.BeginMainFrameOnCriticalPath.T;
    
      type BlockingInputExpectedSoon = 
        TraceEvent.Scheduler.BlockingInputExpectedSoon.S |
        TraceEvent.Scheduler.BlockingInputExpectedSoon.T;
    
      type CompositorWillSendMainFrameNotExpected = 
        TraceEvent.Scheduler.CompositorWillSendMainFrameNotExpected.F |
        TraceEvent.Scheduler.CompositorWillSendMainFrameNotExpected.S |
        TraceEvent.Scheduler.CompositorWillSendMainFrameNotExpected.T;
    
      type DefaultGesturePrevented = 
        TraceEvent.Scheduler.DefaultGesturePrevented.S |
        TraceEvent.Scheduler.DefaultGesturePrevented.T;
    
      type DidCreateAndInitializeLayerTreeFrameSink = 
        TraceEvent.Scheduler.DidCreateAndInitializeLayerTreeFrameSink.X;
    
      type DidLoseLayerTreeFrameSink = 
        TraceEvent.Scheduler.DidLoseLayerTreeFrameSink.X;
    
      type HasNavigated = 
        TraceEvent.Scheduler.HasNavigated.F |
        TraceEvent.Scheduler.HasNavigated.S |
        TraceEvent.Scheduler.HasNavigated.T;
    
      type HasReportedBlockingInterventionInCurrentPolicy = 
        TraceEvent.Scheduler.HasReportedBlockingInterventionInCurrentPolicy.S |
        TraceEvent.Scheduler.HasReportedBlockingInterventionInCurrentPolicy.T;
    
      type HasReportedBlockingInterventionSinceNavigation = 
        TraceEvent.Scheduler.HasReportedBlockingInterventionSinceNavigation.S |
        TraceEvent.Scheduler.HasReportedBlockingInterventionSinceNavigation.T;
    
      type HasSeenBeginMainFrame = 
        TraceEvent.Scheduler.HasSeenBeginMainFrame.F |
        TraceEvent.Scheduler.HasSeenBeginMainFrame.S |
        TraceEvent.Scheduler.HasSeenBeginMainFrame.T;
    
      type HasVisibleRenderWidgetWithTouchHandler = 
        TraceEvent.Scheduler.HasVisibleRenderWidgetWithTouchHandler.F |
        TraceEvent.Scheduler.HasVisibleRenderWidgetWithTouchHandler.S |
        TraceEvent.Scheduler.HasVisibleRenderWidgetWithTouchHandler.T;
    
      type HaveSeenBlockingGesture = 
        TraceEvent.Scheduler.HaveSeenBlockingGesture.S |
        TraceEvent.Scheduler.HaveSeenBlockingGesture.T;
    
      type HaveSeenInputSinceNavigation = 
        TraceEvent.Scheduler.HaveSeenInputSinceNavigation.S |
        TraceEvent.Scheduler.HaveSeenInputSinceNavigation.T;
    
      type Hidden = 
        TraceEvent.Scheduler.Hidden.F |
        TraceEvent.Scheduler.Hidden.S |
        TraceEvent.Scheduler.Hidden.T;
    
      type InIdlePeriod = 
        TraceEvent.Scheduler.InIdlePeriod.F |
        TraceEvent.Scheduler.InIdlePeriod.S |
        TraceEvent.Scheduler.InIdlePeriod.T;
    
      type KeepRendererActive = 
        TraceEvent.Scheduler.KeepRendererActive.F |
        TraceEvent.Scheduler.KeepRendererActive.S |
        TraceEvent.Scheduler.KeepRendererActive.T;
    
      type LastGestureWasCompositorDriven = 
        TraceEvent.Scheduler.LastGestureWasCompositorDriven.S |
        TraceEvent.Scheduler.LastGestureWasCompositorDriven.T;
    
      type LongestJankFreeTaskDuration = 
        TraceEvent.Scheduler.LongestJankFreeTaskDuration.C;
    
      type MainThreadTask = 
        TraceEvent.Scheduler.MainThreadTask.F |
        TraceEvent.Scheduler.MainThreadTask.S |
        TraceEvent.Scheduler.MainThreadTask.T;
    
      type MissedBeginFrameDropped = 
        TraceEvent.Scheduler.MissedBeginFrameDropped.I;
    
      type NotifyBeginMainFrameStarted = 
        TraceEvent.Scheduler.NotifyBeginMainFrameStarted.X;
    
      type NotifyReadyToCommit = 
        TraceEvent.Scheduler.NotifyReadyToCommit.X;
    
      type Now = 
        TraceEvent.Scheduler.Now.X;
    
      type OnBeginImplFrameDeadline = 
        TraceEvent.Scheduler.OnBeginImplFrameDeadline.X;
    
      type PauseCount = 
        TraceEvent.Scheduler.PauseCount.C;
    
      type PauseTimersForWebview = 
        TraceEvent.Scheduler.PauseTimersForWebview.S |
        TraceEvent.Scheduler.PauseTimersForWebview.T;
    
      type Pending_submit_frames = 
        TraceEvent.Scheduler.Pending_submit_frames.F |
        TraceEvent.Scheduler.Pending_submit_frames.S;
    
      type RAILMode = 
        TraceEvent.Scheduler.RAILMode.F |
        TraceEvent.Scheduler.RAILMode.S |
        TraceEvent.Scheduler.RAILMode.T;
    
      type RunNextTask = 
        TraceEvent.Scheduler.RunNextTask.X;
    
      type Running = 
        TraceEvent.Scheduler.Running.F |
        TraceEvent.Scheduler.Running.S;
    
      type ScheduleBeginImplFrameDeadline = 
        TraceEvent.Scheduler.ScheduleBeginImplFrameDeadline.X;
    
      type Scheduler = 
        TraceEvent.Scheduler.Scheduler.X;
    
      type SetDeferMainFrameUpdate = 
        TraceEvent.Scheduler.SetDeferMainFrameUpdate.X;
    
      type SkipNextBeginMainFrameToReduceLatency = 
        TraceEvent.Scheduler.SkipNextBeginMainFrameToReduceLatency.I;
    
      type TaskPriority = 
        TraceEvent.Scheduler.TaskPriority.F |
        TraceEvent.Scheduler.TaskPriority.S |
        TraceEvent.Scheduler.TaskPriority.T;
    
      type UseCase = 
        TraceEvent.Scheduler.UseCase.F |
        TraceEvent.Scheduler.UseCase.S |
        TraceEvent.Scheduler.UseCase.T;
    
      type UseVirtualTime = 
        TraceEvent.Scheduler.UseVirtualTime.S |
        TraceEvent.Scheduler.UseVirtualTime.T;
    
      type WaitingForMeaningfulPaint = 
        TraceEvent.Scheduler.WaitingForMeaningfulPaint.F |
        TraceEvent.Scheduler.WaitingForMeaningfulPaint.S |
        TraceEvent.Scheduler.WaitingForMeaningfulPaint.T;
    
      namespace AwaitingTouchstartResponse {
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.AwaitingTouchstartResponse';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.AwaitingTouchstartResponse';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace BeginFrame {
        interface X extends Base {
          args: {
            args: {
              animate_only: boolean;
              deadline_us: number;
              frame_time_us: number;
              interval_us: number;
              on_critical_path: boolean;
              sequence_number: number;
              source_id: number;
              subtype: string;
              type: string;
            };
          };
          dur?: number;
          name: 'Scheduler::BeginFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace BeginFrameDropped {
        interface I extends Base {
          args: {
          
          };
          name: 'Scheduler::BeginFrameDropped';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      namespace BeginFrameNotExpectedSoon {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.BeginFrameNotExpectedSoon';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.BeginFrameNotExpectedSoon';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.BeginFrameNotExpectedSoon';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace BeginImplFrame {
        interface X extends Base {
          args: {
            args: {
              animate_only: boolean;
              deadline_us: number;
              frame_time_us: number;
              interval_us: number;
              on_critical_path: boolean;
              sequence_number: number;
              source_id: number;
              subtype: string;
              type: string;
            };
            main_thread_missed_last_deadline: boolean;
          };
          dur?: number;
          name: 'Scheduler::BeginImplFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace BeginMainFrameAborted {
        interface X extends Base {
          args: {
            reason: string;
          };
          dur: number;
          name: 'Scheduler::BeginMainFrameAborted';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace BeginMainFrameOnCriticalPath {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.BeginMainFrameOnCriticalPath';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.BeginMainFrameOnCriticalPath';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.BeginMainFrameOnCriticalPath';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace BlockingInputExpectedSoon {
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.BlockingInputExpectedSoon';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.BlockingInputExpectedSoon';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace CompositorWillSendMainFrameNotExpected {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.CompositorWillSendMainFrameNotExpected';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.CompositorWillSendMainFrameNotExpected';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.CompositorWillSendMainFrameNotExpected';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace DefaultGesturePrevented {
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.DefaultGesturePrevented';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.DefaultGesturePrevented';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace DidCreateAndInitializeLayerTreeFrameSink {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Scheduler::DidCreateAndInitializeLayerTreeFrameSink';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidLoseLayerTreeFrameSink {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Scheduler::DidLoseLayerTreeFrameSink';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace HasNavigated {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.HasNavigated';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.HasNavigated';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.HasNavigated';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace HasReportedBlockingInterventionInCurrentPolicy {
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.HasReportedBlockingInterventionInCurrentPolicy';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.HasReportedBlockingInterventionInCurrentPolicy';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace HasReportedBlockingInterventionSinceNavigation {
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.HasReportedBlockingInterventionSinceNavigation';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.HasReportedBlockingInterventionSinceNavigation';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace HasSeenBeginMainFrame {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.HasSeenBeginMainFrame';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.HasSeenBeginMainFrame';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.HasSeenBeginMainFrame';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace HasVisibleRenderWidgetWithTouchHandler {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.HasVisibleRenderWidgetWithTouchHandler';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.HasVisibleRenderWidgetWithTouchHandler';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.HasVisibleRenderWidgetWithTouchHandler';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace HaveSeenBlockingGesture {
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.HaveSeenBlockingGesture';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.HaveSeenBlockingGesture';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace HaveSeenInputSinceNavigation {
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.HaveSeenInputSinceNavigation';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.HaveSeenInputSinceNavigation';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace Hidden {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.Hidden';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.Hidden';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.Hidden';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace InIdlePeriod {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.InIdlePeriod';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.InIdlePeriod';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.InIdlePeriod';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace KeepRendererActive {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.KeepRendererActive';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.KeepRendererActive';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.KeepRendererActive';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace LastGestureWasCompositorDriven {
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.LastGestureWasCompositorDriven';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.LastGestureWasCompositorDriven';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace LongestJankFreeTaskDuration {
        interface C extends Base {
          args: {
            value: number;
          };
          id: string;
          name: 'Scheduler.LongestJankFreeTaskDuration';
          ph: 'C';
          tts: number;
        }
      }
    
      namespace MainThreadTask {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.MainThreadTask';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.MainThreadTask';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.MainThreadTask';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace MissedBeginFrameDropped {
        interface I extends Base {
          args: {
          
          };
          name: 'Scheduler::MissedBeginFrameDropped';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      namespace NotifyBeginMainFrameStarted {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Scheduler::NotifyBeginMainFrameStarted';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace NotifyReadyToCommit {
        interface X extends Base {
          args: {
          
          };
          dur?: number;
          name: 'Scheduler::NotifyReadyToCommit';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Now {
        interface X extends Base {
          args: {
            now: number;
          };
          dur: number;
          name: 'Scheduler::Now';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnBeginImplFrameDeadline {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Scheduler::OnBeginImplFrameDeadline';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace PauseCount {
        interface C extends Base {
          args: {
            value: number;
          };
          id: string;
          name: 'Scheduler.PauseCount';
          ph: 'C';
          tts: number;
        }
      }
    
      namespace PauseTimersForWebview {
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.PauseTimersForWebview';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.PauseTimersForWebview';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace Pending_submit_frames {
        interface F extends Base {
          args: {
            pending_frames: number;
          };
          id: string;
          name: 'Scheduler:pending_submit_frames';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
            pending_frames: number;
          };
          id: string;
          name: 'Scheduler:pending_submit_frames';
          ph: 'S';
          tts: number;
        }
      }
    
      namespace RAILMode {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.RAILMode';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.RAILMode';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.RAILMode';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace RunNextTask {
        interface X extends Base {
          args: {
            state: {
              order_num: number;
              priority: string;
              sequence_id: number;
            };
          };
          dur: number;
          name: 'Scheduler::RunNextTask';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Running {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler::Running';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler::Running';
          ph: 'S';
          tts: number;
        }
      }
    
      namespace ScheduleBeginImplFrameDeadline {
        interface X extends Base {
          args: {
            'deadline mode': string;
            'new deadline': number;
          };
          dur: number;
          name: 'Scheduler::ScheduleBeginImplFrameDeadline';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Scheduler {
        interface X extends Base {
          args: {
            settings: {
              background_frame_interval: number;
              commit_to_active_tree: boolean;
              enable_latency_recovery: boolean;
              enable_surface_synchronization: boolean;
              main_frame_before_activation_enabled: boolean;
              main_frame_while_submit_frame_throttled_enabled: boolean;
              maximum_number_of_failed_draws_before_draw_is_forced: number;
              timeout_and_draw_when_animation_checkerboards: boolean;
              using_synchronous_renderer_compositor: boolean;
              wait_for_all_pipeline_stages_before_draw: boolean;
            };
          };
          dur: number;
          name: 'Scheduler::Scheduler';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Sequence {
        type RemoveWaitingPriority = 
          TraceEvent.Scheduler.Sequence.RemoveWaitingPriority.X;
      
        type UpdateSchedulingPriority = 
          TraceEvent.Scheduler.Sequence.UpdateSchedulingPriority.X;
      
        namespace RemoveWaitingPriority {
          interface X extends Base {
            args: {
              new_priority: string;
              sequence_id: number;
            };
            dur: number;
            name: 'Scheduler::Sequence::RemoveWaitingPriority';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace UpdateSchedulingPriority {
          interface X extends Base {
            args: {
              new_priority: string;
              sequence_id: number;
            };
            dur: number;
            name: 'Scheduler::Sequence::UpdateSchedulingPriority';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    
      namespace SetDeferMainFrameUpdate {
        interface X extends Base {
          args: {
            defer_main_frame_update: boolean;
          };
          dur: number;
          name: 'Scheduler::SetDeferMainFrameUpdate';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SkipNextBeginMainFrameToReduceLatency {
        interface I extends Base {
          args: {
          
          };
          name: 'Scheduler: SkipNextBeginMainFrameToReduceLatency';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      namespace TaskPriority {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.TaskPriority';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.TaskPriority';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.TaskPriority';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace UseCase {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.UseCase';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.UseCase';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.UseCase';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace UseVirtualTime {
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.UseVirtualTime';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.UseVirtualTime';
          ph: 'T';
          tts: number;
        }
      }
    
      namespace WaitingForMeaningfulPaint {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.WaitingForMeaningfulPaint';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'Scheduler.WaitingForMeaningfulPaint';
          ph: 'S';
          tts: number;
        }
      
        interface T extends Base {
          args: {
            step: string;
          };
          id: string;
          name: 'Scheduler.WaitingForMeaningfulPaint';
          ph: 'T';
          tts: number;
        }
      }
    }
  
    namespace SchedulerStateMachine {
      type SetNeedsPrepareTiles = 
        TraceEvent.SchedulerStateMachine.SetNeedsPrepareTiles.X;
    
      namespace SetNeedsPrepareTiles {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SchedulerStateMachine::SetNeedsPrepareTiles';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      interface X extends Base {
        args: {
          state: {
            begin_frame_observer_state: {
              dropped_begin_frame_args: number;
              last_begin_frame_args: {
                animate_only: boolean;
                deadline_us: number;
                frame_time_us: number;
                interval_us: number;
                on_critical_path: boolean;
                sequence_number: number;
                source_id: number;
                subtype: string;
                type: string;
              };
            };
            begin_frame_source_state?: {
              last_begin_frame_args: {
                animate_only: boolean;
                deadline_us: number;
                frame_time_us: number;
                interval_us: number;
                on_critical_path: boolean;
                sequence_number: number;
                source_id: number;
                subtype: string;
                type: string;
              };
              num_observers: number;
              paused: boolean;
              source_id: number;
            };
            begin_impl_frame_args: {
              current_args_?: {
                animate_only: boolean;
                deadline_us: number;
                frame_time_us: number;
                interval_us: number;
                on_critical_path: boolean;
                sequence_number: number;
                source_id: number;
                subtype: string;
                type: string;
              };
              finished_at_ms: number;
              last_args_?: {
                animate_only: boolean;
                deadline_us: number;
                frame_time_us: number;
                interval_us: number;
                on_critical_path: boolean;
                sequence_number: number;
                source_id: number;
                subtype: string;
                type: string;
              };
              major_timestamps_in_ms: {
                '0_interval': number;
                '1_now_to_deadline': number;
                '2_frame_time_to_now': number;
                '3_frame_time_to_deadline': number;
                '4_now': number;
                '5_frame_time': number;
                '6_deadline': number;
              };
              state: string;
              updated_at_ms: number;
            };
            begin_impl_frame_deadline_task: boolean;
            compositor_timing_history: {
              activate_estimate_ms: number;
              begin_main_frame_queue_critical_estimate_ms: number;
              begin_main_frame_queue_not_critical_estimate_ms: number;
              begin_main_frame_start_to_ready_to_commit_estimate_ms: number;
              commit_to_ready_to_activate_estimate_ms: number;
              draw_estimate_ms: number;
              prepare_tiles_estimate_ms: number;
            };
            deadline_mode: string;
            deadline_ms: number;
            deadline_scheduled_at_ms: number;
            inside_action: string;
            now_ms: number;
            now_to_deadline_ms: number;
            now_to_deadline_scheduled_at_ms: number;
            observing_begin_frame_source: boolean;
            pending_begin_frame_task: boolean;
            skipped_last_frame_missed_exceeded_deadline: boolean;
            skipped_last_frame_to_reduce_latency: boolean;
            state_machine: {
              major_state: {
                begin_impl_frame_state: string;
                begin_main_frame_state: string;
                forced_redraw_state: string;
                layer_tree_frame_sink_state: string;
                next_action: string;
              };
              minor_state: {
                active_tree_is_ready_to_draw: boolean;
                active_tree_needs_first_draw: boolean;
                begin_frame_source_paused: boolean;
                can_draw: boolean;
                commit_count: number;
                consecutive_checkerboard_animations: number;
                critical_begin_main_frame_to_activate_is_fast: boolean;
                current_frame_number: number;
                current_pending_tree_is_impl_side: boolean;
                defer_main_frame_update: boolean;
                did_commit_during_frame: boolean;
                did_create_and_initialize_first_layer_tree_frame_sink: boolean;
                did_draw: boolean;
                did_draw_in_last_frame: boolean;
                did_invalidate_layer_tree_frame_sink: boolean;
                did_notify_begin_main_frame_not_sent: boolean;
                did_perform_impl_side_invalidaion: boolean;
                did_prepare_tiles: boolean;
                did_send_begin_main_frame_for_current_frame: boolean;
                did_submit_in_last_frame: boolean;
                has_pending_tree: boolean;
                last_commit_had_no_updates: boolean;
                last_frame_number_begin_main_frame_sent: number;
                last_frame_number_draw_performed: number;
                last_frame_number_submit_performed: number;
                main_thread_missed_last_deadline: boolean;
                needs_begin_main_frame: boolean;
                needs_impl_side_invalidation: boolean;
                needs_one_begin_impl_frame: boolean;
                needs_prepare_tiles: boolean;
                needs_redraw: boolean;
                pending_submit_frames: number;
                pending_tree_is_ready_for_activation: boolean;
                previous_pending_tree_was_impl_side: boolean;
                resourceless_draw: boolean;
                scroll_handler_state: string;
                skip_next_begin_main_frame_to_reduce_latency: boolean;
                submit_frames_with_current_layer_tree_frame_sink: number;
                tree_priority: string;
                video_needs_begin_frames: boolean;
                visible: boolean;
                wants_begin_main_frame_not_expected: boolean;
              };
            };
          };
        };
        dur?: number;
        name: 'SchedulerStateMachine';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace SchedulerWorkerThreadactive {
      interface B extends Base {
        args: {
        
        };
        name: 'SchedulerWorkerThread active';
        ph: 'B';
        tts: number;
      }
    
      interface E extends Base {
        args: {
        
        };
        name: 'SchedulerWorkerThread active';
        ph: 'E';
        tts: number;
      }
    }
  
    namespace SchedulerWorkerThreadborn {
      interface I extends Base {
        args: {
        
        };
        name: 'SchedulerWorkerThread born';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace SchedulerWorkerThreaddead {
      interface I extends Base {
        args: {
        
        };
        name: 'SchedulerWorkerThread dead';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace ScheduleStyleInvalidationTracking {
      interface I extends Base {
        args: {
          data: {
            changedAttribute?: string;
            changedClass?: string;
            changedPseudo?: string;
            frame: string;
            invalidatedSelectorId: string;
            invalidationSet: string;
            nodeId: number;
            nodeName: string;
            stackTrace?: {
              columnNumber: number;
              functionName: string;
              lineNumber: number;
              scriptId: string;
              url: string;
            }[];
          };
        };
        name: 'ScheduleStyleInvalidationTracking';
        ph: 'I';
        s: string;
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
  
    namespace ScopedBlockingCall {
      interface B extends Base {
        args: {
          blocking_type: number;
        };
        name: 'ScopedBlockingCall';
        ph: 'B';
        tts: number;
      }
    
      interface E extends Base {
        args: {
        
        };
        name: 'ScopedBlockingCall';
        ph: 'E';
        tts: number;
      }
    }
  
    namespace ScopedBlockingCallWithBaseSyncPrimitives {
      interface B extends Base {
        args: {
          blocking_type: number;
        };
        name: 'ScopedBlockingCallWithBaseSyncPrimitives';
        ph: 'B';
        tts: number;
      }
    
      interface E extends Base {
        args: {
        
        };
        name: 'ScopedBlockingCallWithBaseSyncPrimitives';
        ph: 'E';
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
  
    namespace ScriptRunner {
      type ExecuteAsyncTask = 
        TraceEvent.ScriptRunner.ExecuteAsyncTask.X;
    
      namespace ExecuteAsyncTask {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ScriptRunner::ExecuteAsyncTask';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ScrollAnchor {
      type FindAnchor = 
        TraceEvent.ScrollAnchor.FindAnchor.X;
    
      namespace FindAnchor {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ScrollAnchor::findAnchor';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ScrollingCoordinator {
      type UpdateAfterPaint = 
        TraceEvent.ScrollingCoordinator.UpdateAfterPaint.X;
    
      type UpdateTouchEventTargetRectsIfNeeded = 
        TraceEvent.ScrollingCoordinator.UpdateTouchEventTargetRectsIfNeeded.X;
    
      namespace UpdateAfterPaint {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ScrollingCoordinator::UpdateAfterPaint';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UpdateTouchEventTargetRectsIfNeeded {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ScrollingCoordinator::updateTouchEventTargetRectsIfNeeded';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace SearchProvider {
      type OnURLLoadComplete = 
        TraceEvent.SearchProvider.OnURLLoadComplete.X;
    
      type Question_mark = 
        TraceEvent.SearchProvider.Question_mark.X;
    
      type Start = 
        TraceEvent.SearchProvider.Start.X;
    
      namespace OnURLLoadComplete {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SearchProvider::OnURLLoadComplete';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Question_mark {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SearchProvider::question_mark';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Start {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SearchProvider::Start';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace SelectionController {
      type HandleMousePressEvent = 
        TraceEvent.SelectionController.HandleMousePressEvent.X;
    
      type HandleMousePressEventSingleClick = 
        TraceEvent.SelectionController.HandleMousePressEventSingleClick.X;
    
      type HandleMouseReleaseEvent = 
        TraceEvent.SelectionController.HandleMouseReleaseEvent.X;
    
      namespace HandleMousePressEvent {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SelectionController::handleMousePressEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace HandleMousePressEventSingleClick {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SelectionController::handleMousePressEventSingleClick';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace HandleMouseReleaseEvent {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SelectionController::handleMouseReleaseEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace SequenceEnabled {
      interface F extends Base {
        args: {
          sequence_id: number;
        };
        id: string;
        name: 'SequenceEnabled';
        ph: 'F';
        tts: number;
      }
    }
  
    namespace SequenceManager {
      type DidProcessTaskObservers = 
        TraceEvent.SequenceManager.DidProcessTaskObservers.X;
    
      type DidProcessTaskTimeObservers = 
        TraceEvent.SequenceManager.DidProcessTaskTimeObservers.X;
    
      type PostTask = 
        TraceEvent.SequenceManager.PostTask.X;
    
      type QueueNotifyDidProcessTask = 
        TraceEvent.SequenceManager.QueueNotifyDidProcessTask.X;
    
      type QueueNotifyWillProcessTask = 
        TraceEvent.SequenceManager.QueueNotifyWillProcessTask.X;
    
      type QueueOnTaskCompleted = 
        TraceEvent.SequenceManager.QueueOnTaskCompleted.X;
    
      type QueueOnTaskStarted = 
        TraceEvent.SequenceManager.QueueOnTaskStarted.X;
    
      type RunTask = 
        TraceEvent.SequenceManager.RunTask.B;
    
      type WillProcessTaskObservers = 
        TraceEvent.SequenceManager.WillProcessTaskObservers.X;
    
      type WillProcessTaskTimeObservers = 
        TraceEvent.SequenceManager.WillProcessTaskTimeObservers.X;
    
      namespace DidProcessTaskObservers {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SequenceManager.DidProcessTaskObservers';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidProcessTaskTimeObservers {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SequenceManager.DidProcessTaskTimeObservers';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace PostTask {
        interface X extends Base {
          args: {
          
          };
          bind_id: string;
          dur: number;
          flow_out: boolean;
          id: string;
          name: 'SequenceManager::PostTask';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace QueueNotifyDidProcessTask {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SequenceManager.QueueNotifyDidProcessTask';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace QueueNotifyWillProcessTask {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SequenceManager.QueueNotifyWillProcessTask';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace QueueOnTaskCompleted {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SequenceManager.QueueOnTaskCompleted';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace QueueOnTaskStarted {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SequenceManager.QueueOnTaskStarted';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RunTask {
        interface B extends Base {
          args: {
            queue_type: string;
            task_type: number;
          };
          name: 'SequenceManager::RunTask';
          ph: 'B';
          tts: number;
        }
      }
    
      namespace WillProcessTaskObservers {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SequenceManager.WillProcessTaskObservers';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace WillProcessTaskTimeObservers {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SequenceManager.WillProcessTaskTimeObservers';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      interface O extends Base {
        args: {
          snapshot: {
            active_queues: {
              current_fence?: number;
              delay_to_next_task_ms?: number;
              delayed_fence_seconds_from_now?: number;
              delayed_incoming_queue: {
                delayed_run_time: number;
                delayed_run_time_milliseconds_from_now: number;
                is_cancelled: boolean;
                is_high_res: boolean;
                nestable: boolean;
                posted_from: string;
                sequence_num: number;
              }[];
              delayed_incoming_queue_size: number;
              delayed_work_queue: {
                delayed_run_time: number;
                delayed_run_time_milliseconds_from_now: number;
                enqueue_order: number;
                is_cancelled: boolean;
                is_high_res: boolean;
                nestable: boolean;
                posted_from: string;
                sequence_num: number;
              }[];
              delayed_work_queue_capacity: number;
              delayed_work_queue_size: number;
              enabled: boolean;
              immediate_incoming_queue: {
                delayed_run_time: number;
                delayed_run_time_milliseconds_from_now: number;
                enqueue_order: number;
                is_cancelled: boolean;
                is_high_res: boolean;
                nestable: boolean;
                posted_from: string;
                sequence_num: number;
              }[];
              immediate_incoming_queue_capacity: number;
              immediate_incoming_queue_size: number;
              immediate_work_queue: {
                delayed_run_time: number;
                delayed_run_time_milliseconds_from_now: number;
                enqueue_order: number;
                is_cancelled: boolean;
                is_high_res: boolean;
                nestable: boolean;
                posted_from: string;
                sequence_num: number;
              }[];
              immediate_work_queue_capacity: number;
              immediate_work_queue_size: number;
              name: string;
              priority: string;
              task_queue_id: string;
              time_domain_name: string;
            }[];
            has_incoming_immediate_work: {
              '0': string;
              '1': string;
              '2': string;
              '3': string;
              '4': string;
              '5'?: string;
              '6'?: {
              
              };
              '7'?: {
              
              };
              '8'?: {
              
              };
              '9'?: {
              
              };
              '10'?: {
              
              };
              '11'?: {
              
              };
              '12'?: {
              
              };
              '13'?: {
              
              };
              '14'?: {
              
              };
              '15'?: {
              
              };
              '16'?: {
              
              };
              '17'?: {
              
              };
              '18'?: {
              
              };
              '19'?: {
              
              };
            }[];
            queues_to_gracefully_shutdown: {
              delay_to_next_task_ms?: number;
              delayed_incoming_queue: {
                delayed_run_time: number;
                delayed_run_time_milliseconds_from_now: number;
                is_cancelled: boolean;
                is_high_res: boolean;
                nestable: boolean;
                posted_from: string;
                sequence_num: number;
              }[];
              delayed_incoming_queue_size: number;
              delayed_work_queue: {
                delayed_run_time: number;
                delayed_run_time_milliseconds_from_now: number;
                enqueue_order: number;
                is_cancelled: boolean;
                is_high_res: boolean;
                nestable: boolean;
                posted_from: string;
                sequence_num: number;
              }[];
              delayed_work_queue_capacity: number;
              delayed_work_queue_size: number;
              enabled: boolean;
              immediate_incoming_queue_capacity: number;
              immediate_incoming_queue_size: number;
              immediate_work_queue_capacity: number;
              immediate_work_queue_size: number;
              name: string;
              priority: string;
              task_queue_id: string;
              time_domain_name: string;
            }[];
            selected_queue?: string;
            selector: {
              immediate_starvation_count: number;
            };
            time_domains: {
              name: string;
              next_delay_ms?: number;
              registered_delay_count: number;
            }[];
            work_queue_name?: string;
          };
        };
        id: string;
        name: 'SequenceManager';
        ph: 'O';
        tts: number;
      }
    }
  
    namespace SequenceManagerImpl {
      type NotifyDidProcessTaskObservers = 
        TraceEvent.SequenceManagerImpl.NotifyDidProcessTaskObservers.X;
    
      type NotifyWillProcessTaskObservers = 
        TraceEvent.SequenceManagerImpl.NotifyWillProcessTaskObservers.X;
    
      type RunTask = 
        TraceEvent.SequenceManagerImpl.RunTask.E;
    
      type TakeTask = 
        TraceEvent.SequenceManagerImpl.TakeTask.X;
    
      type UnregisterTaskQueue = 
        TraceEvent.SequenceManagerImpl.UnregisterTaskQueue.X;
    
      type WakeUpReadyDelayedQueues = 
        TraceEvent.SequenceManagerImpl.WakeUpReadyDelayedQueues.X;
    
      namespace NotifyDidProcessTaskObservers {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SequenceManagerImpl::NotifyDidProcessTaskObservers';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace NotifyWillProcessTaskObservers {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SequenceManagerImpl::NotifyWillProcessTaskObservers';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RunTask {
        interface E extends Base {
          args: {
          
          };
          name: 'SequenceManagerImpl::RunTask';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace TakeTask {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SequenceManagerImpl::TakeTask';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UnregisterTaskQueue {
        interface X extends Base {
          args: {
            queue_name: string;
          };
          dur: number;
          name: 'SequenceManagerImpl::UnregisterTaskQueue';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace WakeUpReadyDelayedQueues {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SequenceManagerImpl::WakeUpReadyDelayedQueues';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace SerializedScriptValueFactory {
      type Create = 
        TraceEvent.SerializedScriptValueFactory.Create.X;
    
      type Deserialize = 
        TraceEvent.SerializedScriptValueFactory.Deserialize.X;
    
      namespace Create {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SerializedScriptValueFactory::create';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Deserialize {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SerializedScriptValueFactory::deserialize';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Service_manager {
      namespace Mojom {
        type Connector = 
          TraceEvent.Service_manager.Mojom.Connector.X;
      
        type InterfaceProvider = 
          TraceEvent.Service_manager.Mojom.InterfaceProvider.X;
      
        type PIDReceiver = 
          TraceEvent.Service_manager.Mojom.PIDReceiver.X;
      
        type Service = 
          TraceEvent.Service_manager.Mojom.Service.X;
      
        type ServiceFactory = 
          TraceEvent.Service_manager.Mojom.ServiceFactory.X;
      
        type ServiceManagerListener = 
          TraceEvent.Service_manager.Mojom.ServiceManagerListener.X;
      
        namespace Connector {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'service_manager.mojom.Connector';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace InterfaceProvider {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'service_manager.mojom.InterfaceProvider';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace PIDReceiver {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'service_manager.mojom.PIDReceiver';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace Service {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'service_manager.mojom.Service';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace ServiceFactory {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'service_manager.mojom.ServiceFactory';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace ServiceManagerListener {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'service_manager.mojom.ServiceManagerListener';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace ServiceManager {
      type Connect = 
        TraceEvent.ServiceManager.Connect.I;
    
      namespace Connect {
        interface I extends Base {
          args: {
            original_name: string;
          };
          name: 'ServiceManager::Connect';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    }
  
    namespace ServiceWorkerControlleeRequestHandler {
      type PrepareForMainResource = 
        TraceEvent.ServiceWorkerControlleeRequestHandler.PrepareForMainResource.F |
        TraceEvent.ServiceWorkerControlleeRequestHandler.PrepareForMainResource.S;
    
      namespace PrepareForMainResource {
        interface F extends Base {
          args: {
            Status: string;
          };
          id: string;
          name: 'ServiceWorkerControlleeRequestHandler::PrepareForMainResource';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
            URL: string;
          };
          id: string;
          name: 'ServiceWorkerControlleeRequestHandler::PrepareForMainResource';
          ph: 'S';
          tts: number;
        }
      }
    }
  
    namespace ServiceWorkerDispatcherHost {
      type OnProviderCreated = 
        TraceEvent.ServiceWorkerDispatcherHost.OnProviderCreated.X;
    
      namespace OnProviderCreated {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ServiceWorkerDispatcherHost::OnProviderCreated';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ServiceWorkerNavigationLoader {
      type FallbackToNetwork = 
        TraceEvent.ServiceWorkerNavigationLoader.FallbackToNetwork.X;
    
      type ServiceWorkerNavigationloader = 
        TraceEvent.ServiceWorkerNavigationLoader.ServiceWorkerNavigationloader.X;
    
      namespace FallbackToNetwork {
        interface X extends Base {
          args: {
          
          };
          bind_id: string;
          dur: number;
          flow_in: boolean;
          flow_out: boolean;
          id: string;
          name: 'ServiceWorkerNavigationLoader::FallbackToNetwork';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ServiceWorkerNavigationloader {
        interface X extends Base {
          args: {
            url?: string;
          };
          bind_id: string;
          dur: number;
          flow_in?: boolean;
          flow_out?: boolean;
          id: string;
          name: 'ServiceWorkerNavigationLoader::ServiceWorkerNavigationloader';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ServiceWorkerProviderHost {
      type RemoveProviderHost = 
        TraceEvent.ServiceWorkerProviderHost.RemoveProviderHost.X;
    
      namespace RemoveProviderHost {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ServiceWorkerProviderHost::RemoveProviderHost';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ServiceWorkerStorage {
      namespace FindRegistrationForDocument {
        type CheckInstalling = 
          TraceEvent.ServiceWorkerStorage.FindRegistrationForDocument.CheckInstalling.I;
      
        namespace CheckInstalling {
          interface I extends Base {
            args: {
              Status: string;
              URL: string;
            };
            name: 'ServiceWorkerStorage::FindRegistrationForDocument:CheckInstalling';
            ph: 'I';
            s: string;
            tts: number;
          }
        }
      }
    }
  
    namespace SetIdlePeriodState {
      interface X extends Base {
        args: {
          new_state: string;
          old_state: string;
        };
        dur: number;
        name: 'SetIdlePeriodState';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace SetLayerTreeId {
      interface I extends Base {
        args: {
          data: {
            frame?: string;
            layerTreeId: number;
            sessionId?: string;
          };
        };
        name: 'SetLayerTreeId';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace SharedImageStub {
      type OnCreateSharedImage = 
        TraceEvent.SharedImageStub.OnCreateSharedImage.X;
    
      type OnCreateSharedImageWithData = 
        TraceEvent.SharedImageStub.OnCreateSharedImageWithData.X;
    
      type OnDestroySharedImage = 
        TraceEvent.SharedImageStub.OnDestroySharedImage.X;
    
      type OnRegisterSharedImageUploadBuffer = 
        TraceEvent.SharedImageStub.OnRegisterSharedImageUploadBuffer.X;
    
      namespace OnCreateSharedImage {
        interface X extends Base {
          args: {
            height: number;
            width: number;
          };
          dur: number;
          name: 'SharedImageStub::OnCreateSharedImage';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnCreateSharedImageWithData {
        interface X extends Base {
          args: {
            height: number;
            width: number;
          };
          dur: number;
          name: 'SharedImageStub::OnCreateSharedImageWithData';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnDestroySharedImage {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SharedImageStub::OnDestroySharedImage';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnRegisterSharedImageUploadBuffer {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SharedImageStub::OnRegisterSharedImageUploadBuffer';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ShCompile {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ShCompile';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ShortcutsProvider {
      type Start = 
        TraceEvent.ShortcutsProvider.Start.X;
    
      namespace Start {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ShortcutsProvider::Start';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace SIGNED_CERTIFICATE_TIMESTAMPS_CHECKED {
      interface n extends Base {
        args: {
          params: {
            scts: {
              extensions: string;
              hash_algorithm: string;
              log_id: string;
              origin: string;
              signature_algorithm: string;
              signature_data: string;
              timestamp: string;
              verification_status: string;
              version: number;
            }[];
          };
          source_type: string;
        };
        id: string;
        name: 'SIGNED_CERTIFICATE_TIMESTAMPS_CHECKED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIGNED_CERTIFICATE_TIMESTAMPS_RECEIVED {
      interface n extends Base {
        args: {
          params: {
            embedded_scts: string;
            scts_from_ocsp_response: string;
            scts_from_tls_extension: string;
          };
          source_type: string;
        };
        id: string;
        name: 'SIGNED_CERTIFICATE_TIMESTAMPS_RECEIVED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_CLOSE_BEGIN {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_CLOSE_BEGIN';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_CLOSE_CALL {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_CLOSE_CALL';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_CLOSE_END {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_CLOSE_END';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_CREATE_BEGIN {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_CREATE_BEGIN';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_CREATE_CALL {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_CREATE_CALL';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_CREATE_END {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_CREATE_END';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_CREATE_OPTIMISTIC {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_CREATE_OPTIMISTIC';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_DOOM_BEGIN {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_DOOM_BEGIN';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_DOOM_CALL {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_DOOM_CALL';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_DOOM_END {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_DOOM_END';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_OPEN_BEGIN {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_OPEN_BEGIN';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_OPEN_CALL {
      interface n extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_OPEN_CALL';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_OPEN_END {
      interface n extends Base {
        args: {
          params: {
            net_error: number;
          };
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_OPEN_END';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_READ_BEGIN {
      interface n extends Base {
        args: {
          params: {
            buf_len: number;
            index: number;
            offset: number;
          };
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_READ_BEGIN';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_READ_CALL {
      interface n extends Base {
        args: {
          params: {
            buf_len: number;
            index: number;
            offset: number;
          };
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_READ_CALL';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_READ_END {
      interface n extends Base {
        args: {
          params: {
            bytes_copied: number;
          };
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_READ_END';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_SET_KEY {
      interface n extends Base {
        args: {
          params: {
            key: string;
          };
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_SET_KEY';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_WRITE_BEGIN {
      interface n extends Base {
        args: {
          params: {
            buf_len: number;
            index: number;
            offset: number;
            truncate: boolean;
          };
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_WRITE_BEGIN';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_WRITE_CALL {
      interface n extends Base {
        args: {
          params: {
            buf_len: number;
            index: number;
            offset: number;
            truncate: boolean;
          };
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_WRITE_CALL';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_WRITE_END {
      interface n extends Base {
        args: {
          params: {
            bytes_copied: number;
          };
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_WRITE_END';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY_WRITE_OPTIMISTIC {
      interface n extends Base {
        args: {
          params: {
            bytes_copied: number;
          };
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY_WRITE_OPTIMISTIC';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SIMPLE_CACHE_ENTRY {
      interface b extends Base {
        args: {
          params: {
            entry_hash: string;
          };
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'SIMPLE_CACHE_ENTRY';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace SingleThreadIdleTaskRunner {
      type RunTask = 
        TraceEvent.SingleThreadIdleTaskRunner.RunTask.X;
    
      namespace RunTask {
        interface X extends Base {
          args: {
            allotted_time_ms: number;
          };
          dur: number;
          name: 'SingleThreadIdleTaskRunner::RunTask';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace SingleThreadProxy {
      type DidReceiveCompositorFrameAckOnImplThread = 
        TraceEvent.SingleThreadProxy.DidReceiveCompositorFrameAckOnImplThread.X;
    
      type DoCommit = 
        TraceEvent.SingleThreadProxy.DoCommit.X;
    
      type DoComposite = 
        TraceEvent.SingleThreadProxy.DoComposite.X;
    
      type NotifyReadyToActivate = 
        TraceEvent.SingleThreadProxy.NotifyReadyToActivate.X;
    
      type NotifyReadyToDraw = 
        TraceEvent.SingleThreadProxy.NotifyReadyToDraw.X;
    
      type OnCanDrawStateChanged = 
        TraceEvent.SingleThreadProxy.OnCanDrawStateChanged.X;
    
      type PostAnimationEventsToMainThreadOnImplThread = 
        TraceEvent.SingleThreadProxy.PostAnimationEventsToMainThreadOnImplThread.X;
    
      type ScheduledActionPrepareTiles = 
        TraceEvent.SingleThreadProxy.ScheduledActionPrepareTiles.X;
    
      type ScheduledActionSendBeginMainFrame = 
        TraceEvent.SingleThreadProxy.ScheduledActionSendBeginMainFrame.X;
    
      type SetDeferMainFrameUpdate = 
        TraceEvent.SingleThreadProxy.SetDeferMainFrameUpdate.F |
        TraceEvent.SingleThreadProxy.SetDeferMainFrameUpdate.S;
    
      type SetNeedsAnimate = 
        TraceEvent.SingleThreadProxy.SetNeedsAnimate.X;
    
      type SetNeedsOneBeginImplFrameOnImplThread = 
        TraceEvent.SingleThreadProxy.SetNeedsOneBeginImplFrameOnImplThread.X;
    
      type SetNeedsPrepareTilesOnImplThread = 
        TraceEvent.SingleThreadProxy.SetNeedsPrepareTilesOnImplThread.X;
    
      type SetNeedsUpdateLayers = 
        TraceEvent.SingleThreadProxy.SetNeedsUpdateLayers.X;
    
      type SetVisible = 
        TraceEvent.SingleThreadProxy.SetVisible.X;
    
      type SingleThreadProxy = 
        TraceEvent.SingleThreadProxy.SingleThreadProxy.X;
    
      namespace DidReceiveCompositorFrameAckOnImplThread {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SingleThreadProxy::DidReceiveCompositorFrameAckOnImplThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoCommit {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SingleThreadProxy::DoCommit';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoComposite {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SingleThreadProxy::DoComposite';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace NotifyReadyToActivate {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SingleThreadProxy::NotifyReadyToActivate';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace NotifyReadyToDraw {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SingleThreadProxy::NotifyReadyToDraw';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnCanDrawStateChanged {
        interface X extends Base {
          args: {
            can_draw: boolean;
          };
          dur: number;
          name: 'SingleThreadProxy::OnCanDrawStateChanged';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace PostAnimationEventsToMainThreadOnImplThread {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SingleThreadProxy::PostAnimationEventsToMainThreadOnImplThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ScheduledActionPrepareTiles {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SingleThreadProxy::ScheduledActionPrepareTiles';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ScheduledActionSendBeginMainFrame {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SingleThreadProxy::ScheduledActionSendBeginMainFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetDeferMainFrameUpdate {
        interface F extends Base {
          args: {
          
          };
          id: string;
          name: 'SingleThreadProxy::SetDeferMainFrameUpdate';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id: string;
          name: 'SingleThreadProxy::SetDeferMainFrameUpdate';
          ph: 'S';
          tts: number;
        }
      }
    
      namespace SetNeedsAnimate {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SingleThreadProxy::SetNeedsAnimate';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetNeedsOneBeginImplFrameOnImplThread {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SingleThreadProxy::SetNeedsOneBeginImplFrameOnImplThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetNeedsPrepareTilesOnImplThread {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SingleThreadProxy::SetNeedsPrepareTilesOnImplThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetNeedsUpdateLayers {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SingleThreadProxy::SetNeedsUpdateLayers';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetVisible {
        interface X extends Base {
          args: {
            visible: boolean;
          };
          dur: number;
          name: 'SingleThreadProxy::SetVisible';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SingleThreadProxy {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SingleThreadProxy::SingleThreadProxy';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace SingleThreadTaskGraphRunner {
      type CollectCompletedTasks = 
        TraceEvent.SingleThreadTaskGraphRunner.CollectCompletedTasks.X;
    
      type RunTaskWithLockAcquired = 
        TraceEvent.SingleThreadTaskGraphRunner.RunTaskWithLockAcquired.X;
    
      type ScheduleTasks = 
        TraceEvent.SingleThreadTaskGraphRunner.ScheduleTasks.X;
    
      type WaitForTasksToFinishRunning = 
        TraceEvent.SingleThreadTaskGraphRunner.WaitForTasksToFinishRunning.X;
    
      namespace CollectCompletedTasks {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SingleThreadTaskGraphRunner::CollectCompletedTasks';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RunTaskWithLockAcquired {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SingleThreadTaskGraphRunner::RunTaskWithLockAcquired';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ScheduleTasks {
        interface X extends Base {
          args: {
            num_edges: number;
            num_nodes: number;
          };
          dur: number;
          name: 'SingleThreadTaskGraphRunner::ScheduleTasks';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace WaitForTasksToFinishRunning {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SingleThreadTaskGraphRunner::WaitForTasksToFinishRunning';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace SiteInstanceImpl {
      type GetProcess = 
        TraceEvent.SiteInstanceImpl.GetProcess.X;
    
      type LockToOrigin = 
        TraceEvent.SiteInstanceImpl.LockToOrigin.X;
    
      type SetSite = 
        TraceEvent.SiteInstanceImpl.SetSite.X;
    
      namespace GetProcess {
        interface X extends Base {
          args: {
            'process id': number;
            'site id': number;
          };
          dur: number;
          name: 'SiteInstanceImpl::GetProcess';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace LockToOrigin {
        interface X extends Base {
          args: {
            lock: string;
            'site id': number;
          };
          dur: number;
          name: 'SiteInstanceImpl::LockToOrigin';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetSite {
        interface X extends Base {
          args: {
            'site id': number;
            url: string;
          };
          dur: number;
          name: 'SiteInstanceImpl::SetSite';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace SkCanvas {
      type DrawImageSkImageSkScalarSkScalarSkPaint = 
        TraceEvent.SkCanvas.DrawImageSkImageSkScalarSkScalarSkPaint.X;
    
      type DrawOvalSkRectSkPaint = 
        TraceEvent.SkCanvas.DrawOvalSkRectSkPaint.X;
    
      type DrawPaintSkPaint = 
        TraceEvent.SkCanvas.DrawPaintSkPaint.X;
    
      type DrawPathSkPathSkPaint = 
        TraceEvent.SkCanvas.DrawPathSkPathSkPaint.X;
    
      type DrawRectSkRectSkPaint = 
        TraceEvent.SkCanvas.DrawRectSkRectSkPaint.X;
    
      type DrawRRectSkRRectSkPaint = 
        TraceEvent.SkCanvas.DrawRRectSkRRectSkPaint.X;
    
      type DrawTextBlobSkTextBlobSkScalarSkScalarSkPaint = 
        TraceEvent.SkCanvas.DrawTextBlobSkTextBlobSkScalarSkScalarSkPaint.X;
    
      namespace DrawImageRectSkImageSkRectSkRectSkPaintSkCanvas {
        type SrcRectConstraint = 
          TraceEvent.SkCanvas.DrawImageRectSkImageSkRectSkRectSkPaintSkCanvas.SrcRectConstraint.X;
      
        namespace SrcRectConstraint {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'void SkCanvas::drawImageRect(const SkImage *, const SkRect &, const SkRect &, const SkPaint *, SkCanvas::SrcRectConstraint)';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    
      namespace DrawImageSkImageSkScalarSkScalarSkPaint {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'void SkCanvas::drawImage(const SkImage *, SkScalar, SkScalar, const SkPaint *)';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawOvalSkRectSkPaint {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'void SkCanvas::drawOval(const SkRect &, const SkPaint &)';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawPaintSkPaint {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'void SkCanvas::drawPaint(const SkPaint &)';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawPathSkPathSkPaint {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'void SkCanvas::drawPath(const SkPath &, const SkPaint &)';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawPointsSkCanvas {
        type PointModesize_tSkPointSkPaint = 
          TraceEvent.SkCanvas.DrawPointsSkCanvas.PointModesize_tSkPointSkPaint.X;
      
        namespace PointModesize_tSkPointSkPaint {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'void SkCanvas::drawPoints(SkCanvas::PointMode, size_t, const SkPoint *, const SkPaint &)';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    
      namespace DrawRectSkRectSkPaint {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'void SkCanvas::drawRect(const SkRect &, const SkPaint &)';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawRRectSkRRectSkPaint {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'void SkCanvas::drawRRect(const SkRRect &, const SkPaint &)';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawTextBlobSkTextBlobSkScalarSkScalarSkPaint {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'void SkCanvas::drawTextBlob(const SkTextBlob *, SkScalar, SkScalar, const SkPaint &)';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace InternalSaveLayerSkCanvas {
        namespace SaveLayerRecSkCanvas {
          type SaveLayerStrategy = 
            TraceEvent.SkCanvas.InternalSaveLayerSkCanvas.SaveLayerRecSkCanvas.SaveLayerStrategy.X;
        
          namespace SaveLayerStrategy {
            interface X extends Base {
              args: {
              
              };
              dur: number;
              name: 'void SkCanvas::internalSaveLayer(const SkCanvas::SaveLayerRec &, SkCanvas::SaveLayerStrategy)';
              ph: 'X';
              tdur: number;
              tts: number;
            }
          }
        }
      }
    
      namespace SaveLayerSkCanvas {
        type SaveLayerRec = 
          TraceEvent.SkCanvas.SaveLayerSkCanvas.SaveLayerRec.X;
      
        namespace SaveLayerRec {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'int SkCanvas::saveLayer(const SkCanvas::SaveLayerRec &)';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace SkGpuDevice {
      type ClearAll = 
        TraceEvent.SkGpuDevice.ClearAll.X;
    
      type DrawDevice = 
        TraceEvent.SkGpuDevice.DrawDevice.X;
    
      type DrawGlyphRunList = 
        TraceEvent.SkGpuDevice.DrawGlyphRunList.X;
    
      type DrawOval = 
        TraceEvent.SkGpuDevice.DrawOval.X;
    
      type DrawPaint = 
        TraceEvent.SkGpuDevice.DrawPaint.X;
    
      type DrawPath = 
        TraceEvent.SkGpuDevice.DrawPath.X;
    
      type DrawPoints = 
        TraceEvent.SkGpuDevice.DrawPoints.X;
    
      type DrawRect = 
        TraceEvent.SkGpuDevice.DrawRect.X;
    
      type DrawRRect = 
        TraceEvent.SkGpuDevice.DrawRRect.X;
    
      type DrawSpecial = 
        TraceEvent.SkGpuDevice.DrawSpecial.X;
    
      type DrawStrokedLine = 
        TraceEvent.SkGpuDevice.DrawStrokedLine.X;
    
      namespace ClearAll {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SkGpuDevice::clearAll';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawDevice {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SkGpuDevice::drawDevice';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawGlyphRunList {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SkGpuDevice::drawGlyphRunList';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawOval {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SkGpuDevice::drawOval';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawPaint {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SkGpuDevice::drawPaint';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawPath {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SkGpuDevice::drawPath';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawPoints {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SkGpuDevice::drawPoints';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawRect {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SkGpuDevice::drawRect';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawRRect {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SkGpuDevice::drawRRect';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawSpecial {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SkGpuDevice::drawSpecial';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawStrokedLine {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SkGpuDevice::drawStrokedLine';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Skia_gpu {
      type GLShader = 
        TraceEvent.Skia_gpu.GLShader.I;
    
      namespace GLShader {
        interface I extends Base {
          args: {
            shader: string;
          };
          name: 'skia_gpu::GLShader';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    }
  
    namespace Skiabudget {
      interface C extends Base {
        args: {
          free: number;
          used: number;
        };
        name: 'skia budget';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace SkipBeginImplFrameToReduceLatency {
      interface I extends Base {
        args: {
        
        };
        name: 'SkipBeginImplFrameToReduceLatency';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace SkipBeginMainFrameToReduceLatency {
      interface I extends Base {
        args: {
        
        };
        name: 'SkipBeginMainFrameToReduceLatency';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace SmallPathOp {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'SmallPathOp';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace SOCKET_ALIVE {
      interface b extends Base {
        args: {
          params: {
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'SOCKET_ALIVE';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'SOCKET_ALIVE';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace SOCKET_BYTES_RECEIVED {
      interface n extends Base {
        args: {
          params: {
            byte_count: number;
          };
          source_type: string;
        };
        id: string;
        name: 'SOCKET_BYTES_RECEIVED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SOCKET_BYTES_SENT {
      interface n extends Base {
        args: {
          params: {
            byte_count: number;
          };
          source_type: string;
        };
        id: string;
        name: 'SOCKET_BYTES_SENT';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SOCKET_IN_USE {
      interface b extends Base {
        args: {
          params: {
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'SOCKET_IN_USE';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'SOCKET_IN_USE';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace SOCKET_POOL_BOUND_TO_CONNECT_JOB {
      interface n extends Base {
        args: {
          params: {
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'SOCKET_POOL_BOUND_TO_CONNECT_JOB';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SOCKET_POOL_BOUND_TO_SOCKET {
      interface n extends Base {
        args: {
          params: {
            source_dependency: {
              id: number;
              type: number;
            };
          };
          source_type: string;
        };
        id: string;
        name: 'SOCKET_POOL_BOUND_TO_SOCKET';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SOCKET_POOL_CONNECT_JOB_CONNECT {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'SOCKET_POOL_CONNECT_JOB_CONNECT';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: {
            net_error: number;
          };
          source_type: string;
        };
        id: string;
        name: 'SOCKET_POOL_CONNECT_JOB_CONNECT';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace SOCKET_POOL_CONNECT_JOB {
      interface b extends Base {
        args: {
          params: {
            group_name: string;
          };
          source_type: string;
        };
        id: string;
        name: 'SOCKET_POOL_CONNECT_JOB';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'SOCKET_POOL_CONNECT_JOB';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace SOCKET_POOL_REUSED_AN_EXISTING_SOCKET {
      interface n extends Base {
        args: {
          params: {
            idle_ms: number;
          };
          source_type: string;
        };
        id: string;
        name: 'SOCKET_POOL_REUSED_AN_EXISTING_SOCKET';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SOCKET_POOL {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'SOCKET_POOL';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: {
            net_error: number;
          };
          source_type: string;
        };
        id: string;
        name: 'SOCKET_POOL';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace SocketPosix {
      type OnFileCanReadWithoutBlocking = 
        TraceEvent.SocketPosix.OnFileCanReadWithoutBlocking.X;
    
      namespace OnFileCanReadWithoutBlocking {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SocketPosix::OnFileCanReadWithoutBlocking';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace SoftwareImageDecodeCache {
      type DecodeImageIfNecessary = 
        TraceEvent.SoftwareImageDecodeCache.DecodeImageIfNecessary.X;
    
      type DrawWithImageFinished = 
        TraceEvent.SoftwareImageDecodeCache.DrawWithImageFinished.X;
    
      type GetDecodedImageForDrawInternal = 
        TraceEvent.SoftwareImageDecodeCache.GetDecodedImageForDrawInternal.X;
    
      type ReduceCacheUsageUntilWithinLimit = 
        TraceEvent.SoftwareImageDecodeCache.ReduceCacheUsageUntilWithinLimit.X;
    
      type UnrefImage = 
        TraceEvent.SoftwareImageDecodeCache.UnrefImage.X;
    
      namespace DecodeImageIfNecessary {
        interface X extends Base {
          args: {
            key: string;
          };
          dur: number;
          name: 'SoftwareImageDecodeCache::DecodeImageIfNecessary';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DrawWithImageFinished {
        interface X extends Base {
          args: {
            key: string;
          };
          dur: number;
          name: 'SoftwareImageDecodeCache::DrawWithImageFinished';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GetDecodedImageForDrawInternal {
        interface X extends Base {
          args: {
            key: string;
          };
          dur: number;
          name: 'SoftwareImageDecodeCache::GetDecodedImageForDrawInternal';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ReduceCacheUsageUntilWithinLimit {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SoftwareImageDecodeCache::ReduceCacheUsageUntilWithinLimit';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UnrefImage {
        interface X extends Base {
          args: {
            key: string;
          };
          dur: number;
          name: 'SoftwareImageDecodeCache::UnrefImage';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace SolidColorAnalyzer {
      type CheckIfRRectClipCoversCanvas = 
        TraceEvent.SolidColorAnalyzer.CheckIfRRectClipCoversCanvas.X;
    
      type CheckIfSolidShape = 
        TraceEvent.SolidColorAnalyzer.CheckIfSolidShape.X;
    
      namespace CheckIfRRectClipCoversCanvas {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SolidColorAnalyzer::CheckIfRRectClipCoversCanvas';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace CheckIfSolidShape {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SolidColorAnalyzer::CheckIfSolidShape';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace SpdySessionPool {
      type CreateAvailableSessionFromSocket = 
        TraceEvent.SpdySessionPool.CreateAvailableSessionFromSocket.X;
    
      namespace CreateAvailableSessionFromSocket {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SpdySessionPool::CreateAvailableSessionFromSocket';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace SpeedIndex {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'Speed Index';
        ph: 'b';
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'Speed Index';
        ph: 'e';
      }
    }
  
    namespace Spellcheck {
      namespace Mojom {
        type SpellChecker = 
          TraceEvent.Spellcheck.Mojom.SpellChecker.X;
      
        type SpellCheckHost = 
          TraceEvent.Spellcheck.Mojom.SpellCheckHost.X;
      
        namespace SpellChecker {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'spellcheck.mojom.SpellChecker';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace SpellCheckHost {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'spellcheck.mojom.SpellCheckHost';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace SSL_CONNECT {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'SSL_CONNECT';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: {
            cipher_suite: number;
            is_resumed: boolean;
            next_proto: string;
            version: string;
          };
          source_type: string;
        };
        id: string;
        name: 'SSL_CONNECT';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace SSL_HANDSHAKE_MESSAGE_RECEIVED {
      interface n extends Base {
        args: {
          params: {
            bytes: string;
            type: number;
          };
          source_type: string;
        };
        id: string;
        name: 'SSL_HANDSHAKE_MESSAGE_RECEIVED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SSL_HANDSHAKE_MESSAGE_SENT {
      interface n extends Base {
        args: {
          params: {
            bytes: string;
            type: number;
          };
          source_type: string;
        };
        id: string;
        name: 'SSL_HANDSHAKE_MESSAGE_SENT';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SSL_SOCKET_BYTES_RECEIVED {
      interface n extends Base {
        args: {
          params: {
            byte_count: number;
          };
          source_type: string;
        };
        id: string;
        name: 'SSL_SOCKET_BYTES_RECEIVED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SSL_SOCKET_BYTES_SENT {
      interface n extends Base {
        args: {
          params: {
            byte_count: number;
          };
          source_type: string;
        };
        id: string;
        name: 'SSL_SOCKET_BYTES_SENT';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace SSLClientSocketImpl {
      type DoHandshakeLoop = 
        TraceEvent.SSLClientSocketImpl.DoHandshakeLoop.X;
    
      namespace DoHandshakeLoop {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SSLClientSocketImpl::DoHandshakeLoop';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace SSLConnectJob {
      type DoLoop = 
        TraceEvent.SSLConnectJob.DoLoop.X;
    
      type DoSSLConnect = 
        TraceEvent.SSLConnectJob.DoSSLConnect.X;
    
      namespace DoLoop {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SSLConnectJob::DoLoop';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DoSSLConnect {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SSLConnectJob::DoSSLConnect';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace StackCpuSampling {
      interface I extends Base {
        args: {
          frames: string;
          thread_id: number;
        };
        name: 'StackCpuSampling';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace StackSamplingProfiler {
      type StackSamplingProfiler = 
        TraceEvent.StackSamplingProfiler.StackSamplingProfiler.X;
    
      type Start = 
        TraceEvent.StackSamplingProfiler.Start.X;
    
      type Started = 
        TraceEvent.StackSamplingProfiler.Started.X;
    
      namespace StackSamplingProfiler {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'StackSamplingProfiler::StackSamplingProfiler';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Start {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'StackSamplingProfiler::Start';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Started {
        interface X extends Base {
          args: {
            profiler_id: number;
          };
          dur: number;
          name: 'StackSamplingProfiler::Started';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace StartIdlePeriod {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'StartIdlePeriod';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace Startup_metric_utils {
      namespace Mojom {
        type StartupMetricHost = 
          TraceEvent.Startup_metric_utils.Mojom.StartupMetricHost.X;
      
        namespace StartupMetricHost {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'startup_metric_utils.mojom.StartupMetricHost';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace StructTraits {
      namespace CompositorFrame {
        type Read = 
          TraceEvent.StructTraits.CompositorFrame.Read.X;
      
        namespace Read {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'StructTraits::CompositorFrame::Read';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    
      namespace RenderPass {
        type Read = 
          TraceEvent.StructTraits.RenderPass.Read.X;
      
        namespace Read {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'StructTraits::RenderPass::Read';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    
      namespace TransferableResource {
        type Read = 
          TraceEvent.StructTraits.TransferableResource.Read.X;
      
        namespace Read {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'StructTraits::TransferableResource::Read';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace StyleElement {
      type ProcessStyleSheet = 
        TraceEvent.StyleElement.ProcessStyleSheet.X;
    
      namespace ProcessStyleSheet {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'StyleElement::processStyleSheet';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace StyleEngine {
      type ClearResolver = 
        TraceEvent.StyleEngine.ClearResolver.X;
    
      type ScheduleInvalidationsForRuleSets = 
        TraceEvent.StyleEngine.ScheduleInvalidationsForRuleSets.X;
    
      type UpdateActiveStyleSheets = 
        TraceEvent.StyleEngine.UpdateActiveStyleSheets.X;
    
      namespace ClearResolver {
        interface X extends Base {
          args: {
            frame: string;
          };
          dur: number;
          name: 'StyleEngine::clearResolver';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ScheduleInvalidationsForRuleSets {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'StyleEngine::scheduleInvalidationsForRuleSets';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UpdateActiveStyleSheets {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'StyleEngine::updateActiveStyleSheets';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace StyleRecalcInvalidationTracking {
      interface I extends Base {
        args: {
          data: {
            extraData: string;
            frame: string;
            nodeId: number;
            nodeName: string;
            reason: string;
            stackTrace?: {
              columnNumber: number;
              functionName: string;
              lineNumber: number;
              scriptId: string;
              url: string;
            }[];
          };
        };
        name: 'StyleRecalcInvalidationTracking';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace SubImage {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'SubImage';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace SubmitCompositorFrame {
      type TimeElapsed = 
        TraceEvent.SubmitCompositorFrame.TimeElapsed.I;
    
      namespace TimeElapsed {
        interface I extends Base {
          args: {
            'elapsed time:': number;
          };
          name: 'SubmitCompositorFrame::TimeElapsed';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      interface f extends Base {
        args: {
        
        };
        id: string;
        name: 'SubmitCompositorFrame';
        ph: 'f';
        tts: number;
      }
    
      interface s extends Base {
        args: {
        
        };
        id: string;
        name: 'SubmitCompositorFrame';
        ph: 's';
        tts: number;
      }
    }
  
    namespace Submitrejectedtoevictedsurface {
      interface I extends Base {
        args: {
        
        };
        name: 'Submit rejected to evicted surface';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace SubresourceFilterMsg_SetRulesetForProcess {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'SubresourceFilterMsg_SetRulesetForProcess';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace SubresourceFilterSafeBrowsingActivationThrottle {
      type DoesMainFrameURLSatisfyActivationConditions = 
        TraceEvent.SubresourceFilterSafeBrowsingActivationThrottle.DoesMainFrameURLSatisfyActivationConditions.X;
    
      type GetHighestPriorityConfiguration = 
        TraceEvent.SubresourceFilterSafeBrowsingActivationThrottle.GetHighestPriorityConfiguration.X;
    
      type NotifyResult = 
        TraceEvent.SubresourceFilterSafeBrowsingActivationThrottle.NotifyResult.X;
    
      namespace DoesMainFrameURLSatisfyActivationConditions {
        interface X extends Base {
          args: {
            conditions: {
              activation_list: string;
              activation_scope: string;
              priority: number;
            };
            matched_list: string;
          };
          dur: number;
          name: 'SubresourceFilterSafeBrowsingActivationThrottle::DoesMainFrameURLSatisfyActivationConditions';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GetHighestPriorityConfiguration {
        interface X extends Base {
          args: {
            selected_config: {
              activation_conditions?: {
                activation_list: string;
                activation_scope: string;
                priority: number;
              };
              activation_level?: string;
              performance_measurement_rate?: number;
              ruleset_flavor?: string;
            };
          };
          dur: number;
          name: 'SubresourceFilterSafeBrowsingActivationThrottle::GetHighestPriorityConfiguration';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace NotifyResult {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SubresourceFilterSafeBrowsingActivationThrottle::NotifyResult';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace SubresourceFilterSBCheck {
      interface F extends Base {
        args: {
          check_result: {
            'check_time (us)': number;
            finished: boolean;
            request_id: number;
            threat_metadata: {
              popuplation_id: string;
              subresource_filter_match: {
              
              };
              threat_pattern_type: number;
            };
            threat_type: number;
          };
        };
        id: string;
        name: 'SubresourceFilterSBCheck';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          check_result: {
          
          };
        };
        id: string;
        name: 'SubresourceFilterSBCheck';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace Subthread_default_tq {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'subthread_default_tq';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace Surface {
      type ActivateFrame = 
        TraceEvent.Surface.ActivateFrame.X;
    
      type OnDeadline = 
        TraceEvent.Surface.OnDeadline.X;
    
      namespace ActivateFrame {
        interface X extends Base {
          args: {
            FrameSinkId: string;
          };
          dur: number;
          name: 'Surface::ActivateFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnDeadline {
        interface X extends Base {
          args: {
            FrameSinkId: string;
          };
          dur: number;
          name: 'Surface::OnDeadline';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      interface F extends Base {
        args: {
          surface_info: string;
        };
        id: string;
        name: 'Surface';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          surface_info: string;
        };
        id: string;
        name: 'Surface';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace SurfaceLayer {
      type PushPropertiesTo = 
        TraceEvent.SurfaceLayer.PushPropertiesTo.X;
    
      namespace PushPropertiesTo {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SurfaceLayer::PushPropertiesTo';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace SurfaceManager {
      type GarbageCollectSurfaces = 
        TraceEvent.SurfaceManager.GarbageCollectSurfaces.X;
    
      namespace GarbageCollectSurfaces {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'SurfaceManager::GarbageCollectSurfaces';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace SwapBuffers {
      interface I extends Base {
        args: {
          GLImpl: number;
          width: number;
        };
        name: 'SwapBuffers';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace Swapskipped {
      interface I extends Base {
        args: {
        
        };
        name: 'Swap skipped.';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace Swapthrottled {
      interface I extends Base {
        args: {
        
        };
        name: 'Swap throttled';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace SyncChannel {
      type Send = 
        TraceEvent.SyncChannel.Send.f |
        TraceEvent.SyncChannel.Send.X;
    
      namespace Send {
        interface f extends Base {
          args: {
          
          };
          id: string;
          name: 'SyncChannel::Send';
          ph: 'f';
          tts: number;
        }
      
        interface X extends Base {
          args: {
            class: number;
            line: number;
          };
          dur: number;
          name: 'SyncChannel::Send';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SyncContext {
        type TryToUnblockListener = 
          TraceEvent.SyncChannel.SyncContext.TryToUnblockListener.s;
      
        namespace TryToUnblockListener {
          interface s extends Base {
            args: {
            
            };
            id: string;
            name: 'SyncChannel::SyncContext::TryToUnblockListener';
            ph: 's';
            tts: number;
          }
        }
      }
    }
  
    namespace TabManager {
      type LoadNextBackgroundTabIfNeeded = 
        TraceEvent.TabManager.LoadNextBackgroundTabIfNeeded.I;
    
      namespace LoadNextBackgroundTabIfNeeded {
        interface I extends Base {
          args: {
            data: {
              background_tab_loading_mode: number;
              num_of_loading_contents: number;
              num_of_pending_navigations: number;
            };
            is_force_load_timer_running: boolean;
          };
          name: 'TabManager::LoadNextBackgroundTabIfNeeded';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    }
  
    namespace TabSwitching {
      type Latency = 
        TraceEvent.TabSwitching.Latency.F |
        TraceEvent.TabSwitching.Latency.S;
    
      namespace Latency {
        interface F extends Base {
          args: {
            latency: number;
          };
          id2: {
            local: string;
          };
          name: 'TabSwitching::Latency';
          ph: 'F';
          tts: number;
        }
      
        interface S extends Base {
          args: {
          
          };
          id2: {
            local: string;
          };
          name: 'TabSwitching::Latency';
          ph: 'S';
          tts: number;
        }
      }
    }
  
    namespace TabSwitchVisibilityRequest {
      interface F extends Base {
        args: {
        
        };
        id: string;
        name: 'TabSwitchVisibilityRequest';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
        
        };
        id: string;
        name: 'TabSwitchVisibilityRequest';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace TaskGraphRunner {
      type RunTask = 
        TraceEvent.TaskGraphRunner.RunTask.X;
    
      namespace RunTask {
        interface X extends Base {
          args: {
            source_frame_number_: number;
          };
          dur: number;
          name: 'TaskGraphRunner::RunTask';
          ph: 'X';
          tdur: number;
          tts: number;
        }
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
  
    namespace TaskQueueThrottler_TaskQueueThrottled {
      interface X extends Base {
        args: {
          task_queue: string;
        };
        dur: number;
        name: 'TaskQueueThrottler_TaskQueueThrottled';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace TaskQueueThrottler_TaskQueueUnthrottled {
      interface X extends Base {
        args: {
          task_queue: string;
        };
        dur: number;
        name: 'TaskQueueThrottler_TaskQueueUnthrottled';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace TaskQueueThrottler {
      type MaybeSchedulePumpThrottledTasks = 
        TraceEvent.TaskQueueThrottler.MaybeSchedulePumpThrottledTasks.X;
    
      type OnQueueNextWakeUpChanged = 
        TraceEvent.TaskQueueThrottler.OnQueueNextWakeUpChanged.X;
    
      type PumpThrottledTasks = 
        TraceEvent.TaskQueueThrottler.PumpThrottledTasks.X;
    
      namespace MaybeSchedulePumpThrottledTasks {
        interface X extends Base {
          args: {
            delay_till_next_pump_ms: number;
          };
          dur: number;
          name: 'TaskQueueThrottler::MaybeSchedulePumpThrottledTasks';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnQueueNextWakeUpChanged {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TaskQueueThrottler::OnQueueNextWakeUpChanged';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace PumpThrottledTasks {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TaskQueueThrottler::PumpThrottledTasks';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace TaskSchedulerPostTask {
      interface X extends Base {
        args: {
        
        };
        bind_id: string;
        dur: number;
        flow_in?: boolean;
        flow_out?: boolean;
        id: string;
        name: 'TaskScheduler PostTask';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace TaskSchedulerRunTask {
      interface X extends Base {
        args: {
          src_file: string;
          src_func: string;
        };
        dur?: number;
        name: 'TaskScheduler RunTask';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace TaskSetFinishedTaskImpl {
      type RunOnWorkerThread = 
        TraceEvent.TaskSetFinishedTaskImpl.RunOnWorkerThread.X;
    
      namespace RunOnWorkerThread {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TaskSetFinishedTaskImpl::RunOnWorkerThread';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace TaskTracker {
      type RunTask = 
        TraceEvent.TaskTracker.RunTask.X;
    
      namespace RunTask {
        interface X extends Base {
          args: {
            task_info: {
              execution_mode: string;
              sequence_token?: number;
              task_priority: string;
            };
          };
          dur?: number;
          name: 'TaskTracker::RunTask';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace TCP_CLIENT_SOCKET_POOL_REQUESTED_SOCKET {
      interface n extends Base {
        args: {
          params: {
            group: string;
          };
          source_type: string;
        };
        id: string;
        name: 'TCP_CLIENT_SOCKET_POOL_REQUESTED_SOCKET';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace TCP_CONNECT_ATTEMPT {
      interface b extends Base {
        args: {
          params: {
            address: string;
          };
          source_type: string;
        };
        id: string;
        name: 'TCP_CONNECT_ATTEMPT';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'TCP_CONNECT_ATTEMPT';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace TCP_CONNECT {
      interface b extends Base {
        args: {
          params: {
            address_list: {
              '0': string;
              '1': string;
              '2': string;
              '3': string;
              '4': string;
              '5': string;
              '6': string;
              '7': string;
              '8': string;
              '9': string;
              '10': string;
              '11': string;
              '12': string;
              '13': string;
              '14': string;
              '15': string;
              '16'?: string;
              '17'?: string;
            }[];
            canonical_name: string;
          };
          source_type: string;
        };
        id: string;
        name: 'TCP_CONNECT';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: {
            source_address: string;
          };
          source_type: string;
        };
        id: string;
        name: 'TCP_CONNECT';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace TessellatingPathOp {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'TessellatingPathOp';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace Textfield {
      type PaintTextAndCursor = 
        TraceEvent.Textfield.PaintTextAndCursor.X;
    
      namespace PaintTextAndCursor {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Textfield::PaintTextAndCursor';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace TextureManager {
      type ValidateAndDoTexSubImage = 
        TraceEvent.TextureManager.ValidateAndDoTexSubImage.X;
    
      namespace ValidateAndDoTexSubImage {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TextureManager::ValidateAndDoTexSubImage';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace TextureOp {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'TextureOp';
        ph: 'X';
        tdur: number;
        tts: number;
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
    
      namespace ScheduleWork {
        type PostTask = 
          TraceEvent.ThreadControllerImpl.ScheduleWork.PostTask.X;
      
        namespace PostTask {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'ThreadControllerImpl::ScheduleWork::PostTask';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace ThreadProxy {
      type BeginMainFrame = 
        TraceEvent.ThreadProxy.BeginMainFrame.B |
        TraceEvent.ThreadProxy.BeginMainFrame.E;
    
      type ScheduledActionSendBeginMainFrame = 
        TraceEvent.ThreadProxy.ScheduledActionSendBeginMainFrame.B |
        TraceEvent.ThreadProxy.ScheduledActionSendBeginMainFrame.E;
    
      namespace BeginMainFrame {
        interface B extends Base {
          args: {
            begin_frame_id: number;
          };
          name: 'ThreadProxy::BeginMainFrame';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
          
          };
          name: 'ThreadProxy::BeginMainFrame';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace ScheduledActionSendBeginMainFrame {
        interface B extends Base {
          args: {
            begin_frame_id: number;
          };
          name: 'ThreadProxy::ScheduledActionSendBeginMainFrame';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
          
          };
          name: 'ThreadProxy::ScheduledActionSendBeginMainFrame';
          ph: 'E';
          tts: number;
        }
      }
    }
  
    namespace ThreadState {
      type HeapEstimatedSizeKB = 
        TraceEvent.ThreadState.HeapEstimatedSizeKB.C;
    
      type HeapGrowingRate = 
        TraceEvent.ThreadState.HeapGrowingRate.C;
    
      type PartitionAllocEstimatedSizeKB = 
        TraceEvent.ThreadState.PartitionAllocEstimatedSizeKB.C;
    
      type PartitionAllocGrowingRate = 
        TraceEvent.ThreadState.PartitionAllocGrowingRate.C;
    
      type PerformIdleLazySweep = 
        TraceEvent.ThreadState.PerformIdleLazySweep.X;
    
      namespace HeapEstimatedSizeKB {
        interface C extends Base {
          args: {
            value: number;
          };
          name: 'ThreadState::heapEstimatedSizeKB';
          ph: 'C';
          tts: number;
        }
      }
    
      namespace HeapGrowingRate {
        interface C extends Base {
          args: {
            value: number;
          };
          name: 'ThreadState::heapGrowingRate';
          ph: 'C';
          tts: number;
        }
      }
    
      namespace PartitionAllocEstimatedSizeKB {
        interface C extends Base {
          args: {
            value: number;
          };
          name: 'ThreadState::partitionAllocEstimatedSizeKB';
          ph: 'C';
          tts: number;
        }
      }
    
      namespace PartitionAllocGrowingRate {
        interface C extends Base {
          args: {
            value: number;
          };
          name: 'ThreadState::partitionAllocGrowingRate';
          ph: 'C';
          tts: number;
        }
      }
    
      namespace PerformIdleLazySweep {
        interface X extends Base {
          args: {
            idleDeltaInSeconds: number;
          };
          dur: number;
          name: 'ThreadState::performIdleLazySweep';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace TileManager {
      type AssignGpuMemorytileviolatesmemorypolicy = 
        TraceEvent.TileManager.AssignGpuMemorytileviolatesmemorypolicy.I;
    
      type AssignGpuMemoryToTiles = 
        TraceEvent.TileManager.AssignGpuMemoryToTiles.B |
        TraceEvent.TileManager.AssignGpuMemoryToTiles.E;
    
      type CheckForCompletedTasks = 
        TraceEvent.TileManager.CheckForCompletedTasks.X;
    
      type CheckForCompletedTasksFinished = 
        TraceEvent.TileManager.CheckForCompletedTasksFinished.I;
    
      type CheckPendingGpuWorkAndIssueSignals = 
        TraceEvent.TileManager.CheckPendingGpuWorkAndIssueSignals.X;
    
      type CreateRasterTask = 
        TraceEvent.TileManager.CreateRasterTask.X;
    
      type DidFinishRunningAllTileTasks = 
        TraceEvent.TileManager.DidFinishRunningAllTileTasks.X;
    
      type DidFinishRunningTileTasksRequiredForActivation = 
        TraceEvent.TileManager.DidFinishRunningTileTasksRequiredForActivation.X;
    
      type DidFinishRunningTileTasksRequiredForDraw = 
        TraceEvent.TileManager.DidFinishRunningTileTasksRequiredForDraw.X;
    
      type FlushAndIssueSignals = 
        TraceEvent.TileManager.FlushAndIssueSignals.X;
    
      type IsReadyToActivate = 
        TraceEvent.TileManager.IsReadyToActivate.X;
    
      type IsReadyToDraw = 
        TraceEvent.TileManager.IsReadyToDraw.X;
    
      type IssueSignalsalltiletaskscompleted = 
        TraceEvent.TileManager.IssueSignalsalltiletaskscompleted.X;
    
      type IssueSignalsreadytoactivate = 
        TraceEvent.TileManager.IssueSignalsreadytoactivate.X;
    
      type IssueSignalsreadytodraw = 
        TraceEvent.TileManager.IssueSignalsreadytodraw.X;
    
      type PrepareTiles = 
        TraceEvent.TileManager.PrepareTiles.X;
    
      type ScheduleTasks = 
        TraceEvent.TileManager.ScheduleTasks.X;
    
      namespace AssignGpuMemorytileviolatesmemorypolicy {
        interface I extends Base {
          args: {
          
          };
          name: 'TileManager::AssignGpuMemory tile violates memory policy';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      namespace AssignGpuMemoryToTiles {
        interface B extends Base {
          args: {
          
          };
          name: 'TileManager::AssignGpuMemoryToTiles';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
            all_tiles_that_need_to_be_rasterized_are_scheduled: boolean;
            had_enough_memory_to_schedule_tiles_needed_now: boolean;
          };
          name: 'TileManager::AssignGpuMemoryToTiles';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace CheckForCompletedTasks {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TileManager::CheckForCompletedTasks';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace CheckForCompletedTasksFinished {
        interface I extends Base {
          args: {
            stats: {
              canceled_count: number;
              completed_count: number;
            };
          };
          name: 'TileManager::CheckForCompletedTasksFinished';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      namespace CheckPendingGpuWorkAndIssueSignals {
        interface X extends Base {
          args: {
            pending_gpu_work_tiles: number;
            tree_priority: string;
          };
          dur: number;
          name: 'TileManager::CheckPendingGpuWorkAndIssueSignals';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace CreateRasterTask {
        interface X extends Base {
          args: {
            Tile?: number;
          };
          dur: number;
          name: 'TileManager::CreateRasterTask';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidFinishRunningAllTileTasks {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TileManager::DidFinishRunningAllTileTasks';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidFinishRunningTileTasksRequiredForActivation {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TileManager::DidFinishRunningTileTasksRequiredForActivation';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidFinishRunningTileTasksRequiredForDraw {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TileManager::DidFinishRunningTileTasksRequiredForDraw';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace FlushAndIssueSignals {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TileManager::FlushAndIssueSignals';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace IsReadyToActivate {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TileManager::IsReadyToActivate';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace IsReadyToDraw {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TileManager::IsReadyToDraw';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace IssueSignalsalltiletaskscompleted {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TileManager::IssueSignals - all tile tasks completed';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace IssueSignalsreadytoactivate {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TileManager::IssueSignals - ready to activate';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace IssueSignalsreadytodraw {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TileManager::IssueSignals - ready to draw';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace PrepareTiles {
        interface X extends Base {
          args: {
            prepare_tiles_id: number;
          };
          dur: number;
          name: 'TileManager::PrepareTiles';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ScheduleTasks {
        interface X extends Base {
          args: {
            count: number;
          };
          dur: number;
          name: 'TileManager::ScheduleTasks';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace TileTaskManagerImpl {
      type CheckForCompletedTasks = 
        TraceEvent.TileTaskManagerImpl.CheckForCompletedTasks.X;
    
      type ScheduleTasks = 
        TraceEvent.TileTaskManagerImpl.ScheduleTasks.X;
    
      type Shutdown = 
        TraceEvent.TileTaskManagerImpl.Shutdown.X;
    
      namespace CheckForCompletedTasks {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TileTaskManagerImpl::CheckForCompletedTasks';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ScheduleTasks {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TileTaskManagerImpl::ScheduleTasks';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Shutdown {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TileTaskManagerImpl::Shutdown';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace TimeoutMonitor {
      type Restart = 
        TraceEvent.TimeoutMonitor.Restart.I;
    
      type Start = 
        TraceEvent.TimeoutMonitor.Start.I;
    
      type Stop = 
        TraceEvent.TimeoutMonitor.Stop.I;
    
      type TimeOutHandler = 
        TraceEvent.TimeoutMonitor.TimeOutHandler.X;
    
      namespace Restart {
        interface I extends Base {
          args: {
          
          };
          name: 'TimeoutMonitor::Restart';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      namespace Start {
        interface I extends Base {
          args: {
          
          };
          name: 'TimeoutMonitor::Start';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      namespace Stop {
        interface I extends Base {
          args: {
          
          };
          name: 'TimeoutMonitor::Stop';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      namespace TimeOutHandler {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TimeoutMonitor::TimeOutHandler';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      interface F extends Base {
        args: {
          result: string;
        };
        id: string;
        name: 'TimeoutMonitor';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
        
        };
        id: string;
        name: 'TimeoutMonitor';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace TimerBase {
      type Run = 
        TraceEvent.TimerBase.Run.X;
    
      namespace Run {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TimerBase::run';
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
  
    namespace TimerRemove {
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
            timerId: number;
          };
        };
        name: 'TimerRemove';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace TimeStamp {
      interface I extends Base {
        args: {
          data: {
            frame: string;
            message: string;
          };
        };
        name: 'TimeStamp';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace TimeToDomReady {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'timeToDomReady';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'timeToDomReady';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace TimeToInteractive {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'timeToInteractive';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'timeToInteractive';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace TimeToZonesAndDomReady {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'timeToZonesAndDomReady';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'timeToZonesAndDomReady';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace TimeToZonesComplete {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'timeToZonesComplete';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'timeToZonesComplete';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace TopLevel {
      interface O extends Base {
        args: {
          snapshot: {
          
          };
        };
        id: string;
        name: 'TopLevel';
        ph: 'O';
        scope: string;
        tts: number;
      }
    }
  
    namespace ToSpaceUpdatingItem {
      type ProcessVisitAll = 
        TraceEvent.ToSpaceUpdatingItem.ProcessVisitAll.X;
    
      namespace ProcessVisitAll {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ToSpaceUpdatingItem::ProcessVisitAll';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Trace_buffer_overflowed {
      interface M extends Base {
        args: {
          overflowed_at_ts: number;
        };
        name: 'trace_buffer_overflowed';
        ph: 'M';
      }
    }
  
    namespace Tracing {
      namespace Mojom {
        type Agent = 
          TraceEvent.Tracing.Mojom.Agent.X;
      
        type AgentRegistry = 
          TraceEvent.Tracing.Mojom.AgentRegistry.X;
      
        type Coordinator = 
          TraceEvent.Tracing.Mojom.Coordinator.X;
      
        type PerfettoService = 
          TraceEvent.Tracing.Mojom.PerfettoService.X;
      
        type ProducerHost = 
          TraceEvent.Tracing.Mojom.ProducerHost.X;
      
        namespace Agent {
          interface X extends Base {
            args: {
            
            };
            dur?: number;
            name: 'tracing.mojom.Agent';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace AgentRegistry {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'tracing.mojom.AgentRegistry';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace Coordinator {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'tracing.mojom.Coordinator';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace PerfettoService {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'tracing.mojom.PerfettoService';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace ProducerHost {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'tracing.mojom.ProducerHost';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace TracingHostMsg_ChildSupportsTracing {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'TracingHostMsg_ChildSupportsTracing';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace TracingMsg_SetTracingProcessId {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'TracingMsg_SetTracingProcessId';
        ph: 'X';
        tdur: number;
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
  
    namespace TransferBuffer {
      type Free = 
        TraceEvent.TransferBuffer.Free.X;
    
      namespace Free {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TransferBuffer::Free';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace TransfersBytesPendingOnDisk {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'TransfersBytesPendingOnDisk';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace TransfersPendingOnDisk {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'TransfersPendingOnDisk';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace Translate {
      namespace Mojom {
        type ContentTranslateDriver = 
          TraceEvent.Translate.Mojom.ContentTranslateDriver.X;
      
        namespace ContentTranslateDriver {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'translate.mojom.ContentTranslateDriver';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace TransportConnectJob {
      type DoResolveHostComplete = 
        TraceEvent.TransportConnectJob.DoResolveHostComplete.X;
    
      namespace DoResolveHostComplete {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TransportConnectJob::DoResolveHostComplete';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace TreeSynchronizer {
      type SynchronizeTrees = 
        TraceEvent.TreeSynchronizer.SynchronizeTrees.X;
    
      namespace PushLayerPropertiesTo {
        type Impl = 
          TraceEvent.TreeSynchronizer.PushLayerPropertiesTo.Impl.X;
      
        type Main = 
          TraceEvent.TreeSynchronizer.PushLayerPropertiesTo.Main.X;
      
        namespace Impl {
          interface X extends Base {
            args: {
              layer_count: number;
            };
            dur: number;
            name: 'TreeSynchronizer::PushLayerPropertiesTo.Impl';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace Main {
          interface X extends Base {
            args: {
              layer_count: number;
            };
            dur: number;
            name: 'TreeSynchronizer::PushLayerPropertiesTo.Main';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    
      namespace SynchronizeTrees {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'TreeSynchronizer::SynchronizeTrees';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace TrianglesDrawn {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'Triangles Drawn';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace UDP_BYTES_RECEIVED {
      interface n extends Base {
        args: {
          params: {
            address: string;
            byte_count: number;
          };
          source_type: string;
        };
        id: string;
        name: 'UDP_BYTES_RECEIVED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace UDP_BYTES_SENT {
      interface n extends Base {
        args: {
          params: {
            byte_count: number;
          };
          source_type: string;
        };
        id: string;
        name: 'UDP_BYTES_SENT';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace UDP_CONNECT {
      interface b extends Base {
        args: {
          params: {
            address: string;
          };
          source_type: string;
        };
        id: string;
        name: 'UDP_CONNECT';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'UDP_CONNECT';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace UDP_LOCAL_ADDRESS {
      interface n extends Base {
        args: {
          params: {
            address: string;
          };
          source_type: string;
        };
        id: string;
        name: 'UDP_LOCAL_ADDRESS';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace UDPSocketPosix {
      namespace ReadWatcher {
        type OnFileCanReadWithoutBlocking = 
          TraceEvent.UDPSocketPosix.ReadWatcher.OnFileCanReadWithoutBlocking.X;
      
        namespace OnFileCanReadWithoutBlocking {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'UDPSocketPosix::ReadWatcher::OnFileCanReadWithoutBlocking';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace Ukm {
      namespace Mojom {
        type UkmRecorderInterface = 
          TraceEvent.Ukm.Mojom.UkmRecorderInterface.X;
      
        namespace UkmRecorderInterface {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'ukm.mojom.UkmRecorderInterface';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace Unknowninterface {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'unknown interface';
        ph: 'X';
        tdur: number;
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
  
    namespace UpdateLongIdlePeriodStateAfterIdleTask {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'UpdateLongIdlePeriodStateAfterIdleTask';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace UpdateStateFromAnimationDrivers {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'UpdateStateFromAnimationDrivers';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace UPLOAD_DATA_STREAM_INIT {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'UPLOAD_DATA_STREAM_INIT';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: {
            is_chunked: boolean;
            net_error: number;
            total_size: number;
          };
          source_type: string;
        };
        id: string;
        name: 'UPLOAD_DATA_STREAM_INIT';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace UPLOAD_DATA_STREAM_READ {
      interface b extends Base {
        args: {
          params: {
            current_position: number;
          };
          source_type: string;
        };
        id: string;
        name: 'UPLOAD_DATA_STREAM_READ';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'UPLOAD_DATA_STREAM_READ';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace URL_REQUEST_DELEGATE_RECEIVED_REDIRECT {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'URL_REQUEST_DELEGATE_RECEIVED_REDIRECT';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'URL_REQUEST_DELEGATE_RECEIVED_REDIRECT';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace URL_REQUEST_DELEGATE_RESPONSE_STARTED {
      interface b extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'URL_REQUEST_DELEGATE_RESPONSE_STARTED';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: string;
          source_type: string;
        };
        id: string;
        name: 'URL_REQUEST_DELEGATE_RESPONSE_STARTED';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace URL_REQUEST_FAKE_RESPONSE_HEADERS_CREATED {
      interface n extends Base {
        args: {
          params: {
            headers: {
              '0': string;
              '1': string;
              '2': string;
              '3': string;
              '4': string;
              '5': string;
              '6': string;
              '7': string;
              '8': string;
              '9': string;
              '10': string;
              '11': string;
              '12': string;
              '13': string;
              '14': string;
              '15': string;
              '16': string;
              '17': string;
              '18': string;
              '19': string;
              '20': string;
              '21': string;
              '22': string;
              '23': string;
              '24': string;
              '25': string;
              '26': string;
              '27': string;
              '28': string;
              '29': string;
            }[];
          };
          source_type: string;
        };
        id: string;
        name: 'URL_REQUEST_FAKE_RESPONSE_HEADERS_CREATED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace URL_REQUEST_FILTERS_SET {
      interface n extends Base {
        args: {
          params: {
            filters: string;
          };
          source_type: string;
        };
        id: string;
        name: 'URL_REQUEST_FILTERS_SET';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace URL_REQUEST_JOB_BYTES_READ {
      interface n extends Base {
        args: {
          params: {
            byte_count: number;
          };
          source_type: string;
        };
        id: string;
        name: 'URL_REQUEST_JOB_BYTES_READ';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace URL_REQUEST_JOB_FILTERED_BYTES_READ {
      interface n extends Base {
        args: {
          params: {
            byte_count: number;
          };
          source_type: string;
        };
        id: string;
        name: 'URL_REQUEST_JOB_FILTERED_BYTES_READ';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace URL_REQUEST_REDIRECT_JOB {
      interface n extends Base {
        args: {
          params: {
            reason: string;
          };
          source_type: string;
        };
        id: string;
        name: 'URL_REQUEST_REDIRECT_JOB';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace URL_REQUEST_REDIRECTED {
      interface n extends Base {
        args: {
          params: {
            location: string;
          };
          source_type: string;
        };
        id: string;
        name: 'URL_REQUEST_REDIRECTED';
        ph: 'n';
        tts: number;
      }
    }
  
    namespace URL_REQUEST_START_JOB {
      interface b extends Base {
        args: {
          params: {
            load_flags: number;
            method: string;
            privacy_mode: number;
            upload_id?: string;
            url: string;
          };
          source_type: string;
        };
        id: string;
        name: 'URL_REQUEST_START_JOB';
        ph: 'b';
        tts: number;
      }
    
      interface e extends Base {
        args: {
          params: {
            net_error: number;
          };
          source_type: string;
        };
        id: string;
        name: 'URL_REQUEST_START_JOB';
        ph: 'e';
        tts: number;
      }
    }
  
    namespace UrlPatternIndexMatcher {
      type FindMatch = 
        TraceEvent.UrlPatternIndexMatcher.FindMatch.X;
    
      namespace FindMatch {
        interface X extends Base {
          args: {
            pattern: string;
          };
          dur: number;
          name: 'UrlPatternIndexMatcher::FindMatch';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace URLRequestHttpJob {
      type OnReadCompleted = 
        TraceEvent.URLRequestHttpJob.OnReadCompleted.X;
    
      type OnStartCompleted = 
        TraceEvent.URLRequestHttpJob.OnStartCompleted.X;
    
      namespace OnReadCompleted {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'URLRequestHttpJob::OnReadCompleted';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnStartCompleted {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'URLRequestHttpJob::OnStartCompleted';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace UserEvent {
      interface I extends Base {
        args: {
          action: string;
        };
        name: 'UserEvent';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace Usingexistingdeadline {
      interface I extends Base {
        args: {
        
        };
        name: 'Using existing deadline';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace Usingnewdeadline {
      interface X extends Base {
        args: {
          delta: number;
          desired_deadline: number;
        };
        dur: number;
        name: 'Using new deadline';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace V8_tq {
      interface C extends Base {
        args: {
          value: number;
        };
        name: 'v8_tq';
        ph: 'C';
        tts: number;
      }
    }
  
    namespace V8 {
      type Builtin_ArrayConcat = 
        TraceEvent.V8.Builtin_ArrayConcat.X;
    
      type Builtin_ArrayPop = 
        TraceEvent.V8.Builtin_ArrayPop.X;
    
      type Builtin_ArrayPush = 
        TraceEvent.V8.Builtin_ArrayPush.X;
    
      type Builtin_ArrayShift = 
        TraceEvent.V8.Builtin_ArrayShift.X;
    
      type Builtin_ArrayUnshift = 
        TraceEvent.V8.Builtin_ArrayUnshift.X;
    
      type Builtin_BooleanConstructor = 
        TraceEvent.V8.Builtin_BooleanConstructor.X;
    
      type Builtin_ConsoleLog = 
        TraceEvent.V8.Builtin_ConsoleLog.X;
    
      type Builtin_ConsoleWarn = 
        TraceEvent.V8.Builtin_ConsoleWarn.X;
    
      type Builtin_DateConstructor = 
        TraceEvent.V8.Builtin_DateConstructor.X;
    
      type Builtin_DateNow = 
        TraceEvent.V8.Builtin_DateNow.X;
    
      type Builtin_DatePrototypeSetTime = 
        TraceEvent.V8.Builtin_DatePrototypeSetTime.X;
    
      type Builtin_DatePrototypeToUTCString = 
        TraceEvent.V8.Builtin_DatePrototypeToUTCString.X;
    
      type Builtin_ErrorConstructor = 
        TraceEvent.V8.Builtin_ErrorConstructor.X;
    
      type Builtin_FunctionConstructor = 
        TraceEvent.V8.Builtin_FunctionConstructor.X;
    
      type Builtin_FunctionPrototypeBind = 
        TraceEvent.V8.Builtin_FunctionPrototypeBind.X;
    
      type Builtin_FunctionPrototypeToString = 
        TraceEvent.V8.Builtin_FunctionPrototypeToString.X;
    
      type Builtin_GlobalDecodeURI = 
        TraceEvent.V8.Builtin_GlobalDecodeURI.X;
    
      type Builtin_GlobalDecodeURIComponent = 
        TraceEvent.V8.Builtin_GlobalDecodeURIComponent.X;
    
      type Builtin_GlobalEncodeURIComponent = 
        TraceEvent.V8.Builtin_GlobalEncodeURIComponent.X;
    
      type Builtin_GlobalEval = 
        TraceEvent.V8.Builtin_GlobalEval.X;
    
      type Builtin_HandleApiCall = 
        TraceEvent.V8.Builtin_HandleApiCall.X;
    
      type Builtin_JsonParse = 
        TraceEvent.V8.Builtin_JsonParse.X;
    
      type Builtin_JsonStringify = 
        TraceEvent.V8.Builtin_JsonStringify.X;
    
      type Builtin_MapPrototypeClear = 
        TraceEvent.V8.Builtin_MapPrototypeClear.X;
    
      type Builtin_NumberPrototypeToFixed = 
        TraceEvent.V8.Builtin_NumberPrototypeToFixed.X;
    
      type Builtin_NumberPrototypeToString = 
        TraceEvent.V8.Builtin_NumberPrototypeToString.X;
    
      type Builtin_ObjectDefineGetter = 
        TraceEvent.V8.Builtin_ObjectDefineGetter.X;
    
      type Builtin_ObjectDefineProperties = 
        TraceEvent.V8.Builtin_ObjectDefineProperties.X;
    
      type Builtin_ObjectDefineProperty = 
        TraceEvent.V8.Builtin_ObjectDefineProperty.X;
    
      type Builtin_ObjectFreeze = 
        TraceEvent.V8.Builtin_ObjectFreeze.X;
    
      type Builtin_ObjectGetPrototypeOf = 
        TraceEvent.V8.Builtin_ObjectGetPrototypeOf.X;
    
      type Builtin_ObjectLookupGetter = 
        TraceEvent.V8.Builtin_ObjectLookupGetter.X;
    
      type Builtin_ObjectPrototypeGetProto = 
        TraceEvent.V8.Builtin_ObjectPrototypeGetProto.X;
    
      type Builtin_ObjectPrototypePropertyIsEnumerable = 
        TraceEvent.V8.Builtin_ObjectPrototypePropertyIsEnumerable.X;
    
      type Builtin_ObjectPrototypeSetProto = 
        TraceEvent.V8.Builtin_ObjectPrototypeSetProto.X;
    
      type Builtin_ObjectSetPrototypeOf = 
        TraceEvent.V8.Builtin_ObjectSetPrototypeOf.X;
    
      type Builtin_RegExpPrototypeToString = 
        TraceEvent.V8.Builtin_RegExpPrototypeToString.X;
    
      type Builtin_SetPrototypeClear = 
        TraceEvent.V8.Builtin_SetPrototypeClear.X;
    
      type Builtin_StringPrototypeEndsWith = 
        TraceEvent.V8.Builtin_StringPrototypeEndsWith.X;
    
      type Builtin_StringPrototypeLastIndexOf = 
        TraceEvent.V8.Builtin_StringPrototypeLastIndexOf.X;
    
      type Builtin_StringPrototypeStartsWith = 
        TraceEvent.V8.Builtin_StringPrototypeStartsWith.X;
    
      type Builtin_StringPrototypeToUpperCaseIntl = 
        TraceEvent.V8.Builtin_StringPrototypeToUpperCaseIntl.X;
    
      type CallFunction = 
        TraceEvent.V8.CallFunction.X;
    
      type Compile = 
        TraceEvent.V8.Compile.B |
        TraceEvent.V8.Compile.E |
        TraceEvent.V8.Compile.X;
    
      type CompileCode = 
        TraceEvent.V8.CompileCode.X;
    
      type CompileCodeBackground = 
        TraceEvent.V8.CompileCodeBackground.X;
    
      type CompileEval = 
        TraceEvent.V8.CompileEval.X;
    
      type CompileIgnition = 
        TraceEvent.V8.CompileIgnition.X;
    
      type CompileIgnitionFinalization = 
        TraceEvent.V8.CompileIgnitionFinalization.X;
    
      type CompileScript = 
        TraceEvent.V8.CompileScript.X;
    
      type CompileStreamedScript = 
        TraceEvent.V8.CompileStreamedScript.X;
    
      type DeoptimizeCode = 
        TraceEvent.V8.DeoptimizeCode.X;
    
      type ExternalCallback = 
        TraceEvent.V8.ExternalCallback.B |
        TraceEvent.V8.ExternalCallback.E;
    
      type GC_BACKGROUND_ARRAY_BUFFER_FREE = 
        TraceEvent.V8.GC_BACKGROUND_ARRAY_BUFFER_FREE.X;
    
      type GC_BACKGROUND_STORE_BUFFER = 
        TraceEvent.V8.GC_BACKGROUND_STORE_BUFFER.X;
    
      type GC_BACKGROUND_UNMAPPER = 
        TraceEvent.V8.GC_BACKGROUND_UNMAPPER.X;
    
      type GC_HEAP_EMBEDDER_TRACING_EPILOGUE = 
        TraceEvent.V8.GC_HEAP_EMBEDDER_TRACING_EPILOGUE.X;
    
      type GC_HEAP_EPILOGUE_REDUCE_NEW_SPACE = 
        TraceEvent.V8.GC_HEAP_EPILOGUE_REDUCE_NEW_SPACE.X;
    
      type GC_HEAP_EPILOGUE = 
        TraceEvent.V8.GC_HEAP_EPILOGUE.X;
    
      type GC_HEAP_EXTERNAL_EPILOGUE = 
        TraceEvent.V8.GC_HEAP_EXTERNAL_EPILOGUE.X;
    
      type GC_HEAP_EXTERNAL_PROLOGUE = 
        TraceEvent.V8.GC_HEAP_EXTERNAL_PROLOGUE.X;
    
      type GC_HEAP_EXTERNAL_WEAK_GLOBAL_HANDLES = 
        TraceEvent.V8.GC_HEAP_EXTERNAL_WEAK_GLOBAL_HANDLES.X;
    
      type GC_HEAP_PROLOGUE = 
        TraceEvent.V8.GC_HEAP_PROLOGUE.X;
    
      type GC_MC_BACKGROUND_EVACUATE_COPY = 
        TraceEvent.V8.GC_MC_BACKGROUND_EVACUATE_COPY.X;
    
      type GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS = 
        TraceEvent.V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS.X;
    
      type GC_MC_BACKGROUND_MARKING = 
        TraceEvent.V8.GC_MC_BACKGROUND_MARKING.X;
    
      type GC_MC_BACKGROUND_SWEEPING = 
        TraceEvent.V8.GC_MC_BACKGROUND_SWEEPING.X;
    
      type GC_MC_CLEAR_FLUSHABLE_BYTECODE = 
        TraceEvent.V8.GC_MC_CLEAR_FLUSHABLE_BYTECODE.X;
    
      type GC_MC_CLEAR_FLUSHED_JS_FUNCTIONS = 
        TraceEvent.V8.GC_MC_CLEAR_FLUSHED_JS_FUNCTIONS.X;
    
      type GC_MC_CLEAR_MAPS = 
        TraceEvent.V8.GC_MC_CLEAR_MAPS.X;
    
      type GC_MC_CLEAR_STRING_TABLE = 
        TraceEvent.V8.GC_MC_CLEAR_STRING_TABLE.X;
    
      type GC_MC_CLEAR_WEAK_COLLECTIONS = 
        TraceEvent.V8.GC_MC_CLEAR_WEAK_COLLECTIONS.X;
    
      type GC_MC_CLEAR_WEAK_LISTS = 
        TraceEvent.V8.GC_MC_CLEAR_WEAK_LISTS.X;
    
      type GC_MC_CLEAR_WEAK_REFERENCES = 
        TraceEvent.V8.GC_MC_CLEAR_WEAK_REFERENCES.X;
    
      type GC_MC_CLEAR = 
        TraceEvent.V8.GC_MC_CLEAR.X;
    
      type GC_MC_EPILOGUE = 
        TraceEvent.V8.GC_MC_EPILOGUE.X;
    
      type GC_MC_EVACUATE_CLEAN_UP = 
        TraceEvent.V8.GC_MC_EVACUATE_CLEAN_UP.X;
    
      type GC_MC_EVACUATE_COPY = 
        TraceEvent.V8.GC_MC_EVACUATE_COPY.X;
    
      type GC_MC_EVACUATE_EPILOGUE = 
        TraceEvent.V8.GC_MC_EVACUATE_EPILOGUE.X;
    
      type GC_MC_EVACUATE_PROLOGUE = 
        TraceEvent.V8.GC_MC_EVACUATE_PROLOGUE.X;
    
      type GC_MC_EVACUATE_REBALANCE = 
        TraceEvent.V8.GC_MC_EVACUATE_REBALANCE.X;
    
      type GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN = 
        TraceEvent.V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN.X;
    
      type GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAP_SPACE = 
        TraceEvent.V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAP_SPACE.X;
    
      type GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS = 
        TraceEvent.V8.GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS.X;
    
      type GC_MC_EVACUATE_UPDATE_POINTERS_WEAK = 
        TraceEvent.V8.GC_MC_EVACUATE_UPDATE_POINTERS_WEAK.X;
    
      type GC_MC_EVACUATE_UPDATE_POINTERS = 
        TraceEvent.V8.GC_MC_EVACUATE_UPDATE_POINTERS.X;
    
      type GC_MC_EVACUATE = 
        TraceEvent.V8.GC_MC_EVACUATE.X;
    
      type GC_MC_FINISH = 
        TraceEvent.V8.GC_MC_FINISH.X;
    
      type GC_MC_INCREMENTAL_EMBEDDER_PROLOGUE = 
        TraceEvent.V8.GC_MC_INCREMENTAL_EMBEDDER_PROLOGUE.X;
    
      type GC_MC_INCREMENTAL_EMBEDDER_TRACING = 
        TraceEvent.V8.GC_MC_INCREMENTAL_EMBEDDER_TRACING.X;
    
      type GC_MC_INCREMENTAL_EXTERNAL_EPILOGUE = 
        TraceEvent.V8.GC_MC_INCREMENTAL_EXTERNAL_EPILOGUE.X;
    
      type GC_MC_INCREMENTAL_EXTERNAL_PROLOGUE = 
        TraceEvent.V8.GC_MC_INCREMENTAL_EXTERNAL_PROLOGUE.X;
    
      type GC_MC_INCREMENTAL_FINALIZE_BODY = 
        TraceEvent.V8.GC_MC_INCREMENTAL_FINALIZE_BODY.X;
    
      type GC_MC_INCREMENTAL_FINALIZE = 
        TraceEvent.V8.GC_MC_INCREMENTAL_FINALIZE.X;
    
      type GC_MC_INCREMENTAL_LAYOUT_CHANGE = 
        TraceEvent.V8.GC_MC_INCREMENTAL_LAYOUT_CHANGE.X;
    
      type GC_MC_INCREMENTAL_START = 
        TraceEvent.V8.GC_MC_INCREMENTAL_START.X;
    
      type GC_MC_INCREMENTAL_SWEEPING = 
        TraceEvent.V8.GC_MC_INCREMENTAL_SWEEPING.X;
    
      type GC_MC_INCREMENTAL = 
        TraceEvent.V8.GC_MC_INCREMENTAL.X;
    
      type GC_MC_MARK_EMBEDDER_TRACING_CLOSURE = 
        TraceEvent.V8.GC_MC_MARK_EMBEDDER_TRACING_CLOSURE.X;
    
      type GC_MC_MARK_EMBEDDER_TRACING = 
        TraceEvent.V8.GC_MC_MARK_EMBEDDER_TRACING.X;
    
      type GC_MC_MARK_FINISH_INCREMENTAL = 
        TraceEvent.V8.GC_MC_MARK_FINISH_INCREMENTAL.X;
    
      type GC_MC_MARK_MAIN = 
        TraceEvent.V8.GC_MC_MARK_MAIN.X;
    
      type GC_MC_MARK_ROOTS = 
        TraceEvent.V8.GC_MC_MARK_ROOTS.X;
    
      type GC_MC_MARK_WEAK_CLOSURE_EPHEMERON_MARKING = 
        TraceEvent.V8.GC_MC_MARK_WEAK_CLOSURE_EPHEMERON_MARKING.X;
    
      type GC_MC_MARK_WEAK_CLOSURE_EPHEMERON = 
        TraceEvent.V8.GC_MC_MARK_WEAK_CLOSURE_EPHEMERON.X;
    
      type GC_MC_MARK_WEAK_CLOSURE_HARMONY = 
        TraceEvent.V8.GC_MC_MARK_WEAK_CLOSURE_HARMONY.X;
    
      type GC_MC_MARK_WEAK_CLOSURE_WEAK_HANDLES = 
        TraceEvent.V8.GC_MC_MARK_WEAK_CLOSURE_WEAK_HANDLES.X;
    
      type GC_MC_MARK_WEAK_CLOSURE_WEAK_ROOTS = 
        TraceEvent.V8.GC_MC_MARK_WEAK_CLOSURE_WEAK_ROOTS.X;
    
      type GC_MC_MARK_WEAK_CLOSURE = 
        TraceEvent.V8.GC_MC_MARK_WEAK_CLOSURE.X;
    
      type GC_MC_MARK = 
        TraceEvent.V8.GC_MC_MARK.X;
    
      type GC_MC_PROLOGUE = 
        TraceEvent.V8.GC_MC_PROLOGUE.X;
    
      type GC_MC_SWEEP = 
        TraceEvent.V8.GC_MC_SWEEP.X;
    
      type GC_Objects_Stats = 
        TraceEvent.V8.GC_Objects_Stats.I;
    
      type GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL = 
        TraceEvent.V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL.X;
    
      type GC_SCAVENGER_PROCESS_ARRAY_BUFFERS = 
        TraceEvent.V8.GC_SCAVENGER_PROCESS_ARRAY_BUFFERS.X;
    
      type GC_SCAVENGER_SCAVENGE_FINALIZE = 
        TraceEvent.V8.GC_SCAVENGER_SCAVENGE_FINALIZE.X;
    
      type GC_SCAVENGER_SCAVENGE_PARALLEL = 
        TraceEvent.V8.GC_SCAVENGER_SCAVENGE_PARALLEL.X;
    
      type GC_SCAVENGER_SCAVENGE_ROOTS = 
        TraceEvent.V8.GC_SCAVENGER_SCAVENGE_ROOTS.X;
    
      type GC_SCAVENGER_SCAVENGE_UPDATE_REFS = 
        TraceEvent.V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS.X;
    
      type GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_IDENTIFY = 
        TraceEvent.V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_IDENTIFY.X;
    
      type GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_PROCESS = 
        TraceEvent.V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_PROCESS.X;
    
      type GC_SCAVENGER_SCAVENGE = 
        TraceEvent.V8.GC_SCAVENGER_SCAVENGE.X;
    
      type GCCompactor = 
        TraceEvent.V8.GCCompactor.X;
    
      type GCFinalizeMC = 
        TraceEvent.V8.GCFinalizeMC.X;
    
      type GCFinalizeMCReduceMemory = 
        TraceEvent.V8.GCFinalizeMCReduceMemory.X;
    
      type GCIdleNotification = 
        TraceEvent.V8.GCIdleNotification.X;
    
      type GCIncrementalMarking = 
        TraceEvent.V8.GCIncrementalMarking.X;
    
      type GCIncrementalMarkingFinalize = 
        TraceEvent.V8.GCIncrementalMarkingFinalize.X;
    
      type GCIncrementalMarkingLayoutChange = 
        TraceEvent.V8.GCIncrementalMarkingLayoutChange.X;
    
      type GCIncrementalMarkingStart = 
        TraceEvent.V8.GCIncrementalMarkingStart.X;
    
      type GCMarkCompactorMarkingSummary = 
        TraceEvent.V8.GCMarkCompactorMarkingSummary.I;
    
      type GCMarkCompactorSummary = 
        TraceEvent.V8.GCMarkCompactorSummary.I;
    
      type GCPhantomHandleProcessingCallback = 
        TraceEvent.V8.GCPhantomHandleProcessingCallback.X;
    
      type GCScavenger = 
        TraceEvent.V8.GCScavenger.X;
    
      type HandleInterrupts = 
        TraceEvent.V8.HandleInterrupts.X;
    
      type ICStats = 
        TraceEvent.V8.ICStats.I;
    
      type InvokeApiInterruptCallbacks = 
        TraceEvent.V8.InvokeApiInterruptCallbacks.X;
    
      type NewContext = 
        TraceEvent.V8.NewContext.B |
        TraceEvent.V8.NewContext.E;
    
      type NewInstance = 
        TraceEvent.V8.NewInstance.X;
    
      type OptimizeCode = 
        TraceEvent.V8.OptimizeCode.X;
    
      type ParseFunction = 
        TraceEvent.V8.ParseFunction.X;
    
      type ParseOnBackground = 
        TraceEvent.V8.ParseOnBackground.X;
    
      type ParseProgram = 
        TraceEvent.V8.ParseProgram.X;
    
      type PreParse = 
        TraceEvent.V8.PreParse.X;
    
      type RecompileConcurrent = 
        TraceEvent.V8.RecompileConcurrent.X;
    
      type RecompileSynchronous = 
        TraceEvent.V8.RecompileSynchronous.X;
    
      type Run = 
        TraceEvent.V8.Run.X;
    
      type Runtime_Runtime_AddDictionaryProperty = 
        TraceEvent.V8.Runtime_Runtime_AddDictionaryProperty.X;
    
      type Runtime_Runtime_AllocateInNewSpace = 
        TraceEvent.V8.Runtime_Runtime_AllocateInNewSpace.X;
    
      type Runtime_Runtime_AllocateInTargetSpace = 
        TraceEvent.V8.Runtime_Runtime_AllocateInTargetSpace.X;
    
      type Runtime_Runtime_AllocateSeqTwoByteString = 
        TraceEvent.V8.Runtime_Runtime_AllocateSeqTwoByteString.X;
    
      type Runtime_Runtime_ArrayIndexOf = 
        TraceEvent.V8.Runtime_Runtime_ArrayIndexOf.X;
    
      type Runtime_Runtime_ArraySpeciesConstructor = 
        TraceEvent.V8.Runtime_Runtime_ArraySpeciesConstructor.X;
    
      type Runtime_Runtime_CompileLazy = 
        TraceEvent.V8.Runtime_Runtime_CompileLazy.X;
    
      type Runtime_Runtime_CompileOptimized_Concurrent = 
        TraceEvent.V8.Runtime_Runtime_CompileOptimized_Concurrent.X;
    
      type Runtime_Runtime_CompleteInobjectSlackTrackingForMap = 
        TraceEvent.V8.Runtime_Runtime_CompleteInobjectSlackTrackingForMap.X;
    
      type Runtime_Runtime_CreateArrayLiteral = 
        TraceEvent.V8.Runtime_Runtime_CreateArrayLiteral.X;
    
      type Runtime_Runtime_CreateArrayLiteralWithoutAllocationSite = 
        TraceEvent.V8.Runtime_Runtime_CreateArrayLiteralWithoutAllocationSite.X;
    
      type Runtime_Runtime_CreateDataProperty = 
        TraceEvent.V8.Runtime_Runtime_CreateDataProperty.X;
    
      type Runtime_Runtime_CreateJSGeneratorObject = 
        TraceEvent.V8.Runtime_Runtime_CreateJSGeneratorObject.X;
    
      type Runtime_Runtime_CreateListFromArrayLike = 
        TraceEvent.V8.Runtime_Runtime_CreateListFromArrayLike.X;
    
      type Runtime_Runtime_CreateObjectLiteral = 
        TraceEvent.V8.Runtime_Runtime_CreateObjectLiteral.X;
    
      type Runtime_Runtime_CreateObjectLiteralWithoutAllocationSite = 
        TraceEvent.V8.Runtime_Runtime_CreateObjectLiteralWithoutAllocationSite.X;
    
      type Runtime_Runtime_CreateRegExpLiteral = 
        TraceEvent.V8.Runtime_Runtime_CreateRegExpLiteral.X;
    
      type Runtime_Runtime_DateCurrentTime = 
        TraceEvent.V8.Runtime_Runtime_DateCurrentTime.X;
    
      type Runtime_Runtime_DeclareEvalFunction = 
        TraceEvent.V8.Runtime_Runtime_DeclareEvalFunction.X;
    
      type Runtime_Runtime_DeclareGlobals = 
        TraceEvent.V8.Runtime_Runtime_DeclareGlobals.X;
    
      type Runtime_Runtime_DefineAccessorPropertyUnchecked = 
        TraceEvent.V8.Runtime_Runtime_DefineAccessorPropertyUnchecked.X;
    
      type Runtime_Runtime_DefineClass = 
        TraceEvent.V8.Runtime_Runtime_DefineClass.X;
    
      type Runtime_Runtime_DefineDataPropertyInLiteral = 
        TraceEvent.V8.Runtime_Runtime_DefineDataPropertyInLiteral.X;
    
      type Runtime_Runtime_DeleteProperty = 
        TraceEvent.V8.Runtime_Runtime_DeleteProperty.X;
    
      type Runtime_Runtime_ElementsTransitionAndStoreIC_Miss = 
        TraceEvent.V8.Runtime_Runtime_ElementsTransitionAndStoreIC_Miss.X;
    
      type Runtime_Runtime_ForInEnumerate = 
        TraceEvent.V8.Runtime_Runtime_ForInEnumerate.X;
    
      type Runtime_Runtime_GetOwnPropertyDescriptor = 
        TraceEvent.V8.Runtime_Runtime_GetOwnPropertyDescriptor.X;
    
      type Runtime_Runtime_GetProperty = 
        TraceEvent.V8.Runtime_Runtime_GetProperty.X;
    
      type Runtime_Runtime_HasInPrototypeChain = 
        TraceEvent.V8.Runtime_Runtime_HasInPrototypeChain.X;
    
      type Runtime_Runtime_HasProperty = 
        TraceEvent.V8.Runtime_Runtime_HasProperty.X;
    
      type Runtime_Runtime_Interrupt = 
        TraceEvent.V8.Runtime_Runtime_Interrupt.X;
    
      type Runtime_Runtime_KeyedLoadIC_Miss = 
        TraceEvent.V8.Runtime_Runtime_KeyedLoadIC_Miss.X;
    
      type Runtime_Runtime_KeyedStoreIC_Miss = 
        TraceEvent.V8.Runtime_Runtime_KeyedStoreIC_Miss.X;
    
      type Runtime_Runtime_KeyedStoreIC_Slow = 
        TraceEvent.V8.Runtime_Runtime_KeyedStoreIC_Slow.X;
    
      type Runtime_Runtime_LoadAccessorProperty = 
        TraceEvent.V8.Runtime_Runtime_LoadAccessorProperty.X;
    
      type Runtime_Runtime_LoadCallbackProperty = 
        TraceEvent.V8.Runtime_Runtime_LoadCallbackProperty.X;
    
      type Runtime_Runtime_LoadElementWithInterceptor = 
        TraceEvent.V8.Runtime_Runtime_LoadElementWithInterceptor.X;
    
      type Runtime_Runtime_LoadGlobalIC_Miss = 
        TraceEvent.V8.Runtime_Runtime_LoadGlobalIC_Miss.X;
    
      type Runtime_Runtime_LoadGlobalIC_Slow = 
        TraceEvent.V8.Runtime_Runtime_LoadGlobalIC_Slow.X;
    
      type Runtime_Runtime_LoadIC_Miss = 
        TraceEvent.V8.Runtime_Runtime_LoadIC_Miss.X;
    
      type Runtime_Runtime_LoadLookupSlot = 
        TraceEvent.V8.Runtime_Runtime_LoadLookupSlot.X;
    
      type Runtime_Runtime_LoadLookupSlotForCall = 
        TraceEvent.V8.Runtime_Runtime_LoadLookupSlotForCall.X;
    
      type Runtime_Runtime_LoadLookupSlotInsideTypeof = 
        TraceEvent.V8.Runtime_Runtime_LoadLookupSlotInsideTypeof.X;
    
      type Runtime_Runtime_LoadPropertyWithInterceptor = 
        TraceEvent.V8.Runtime_Runtime_LoadPropertyWithInterceptor.X;
    
      type Runtime_Runtime_MapGrow = 
        TraceEvent.V8.Runtime_Runtime_MapGrow.X;
    
      type Runtime_Runtime_MapShrink = 
        TraceEvent.V8.Runtime_Runtime_MapShrink.X;
    
      type Runtime_Runtime_NewArray = 
        TraceEvent.V8.Runtime_Runtime_NewArray.X;
    
      type Runtime_Runtime_NewClosure_Tenured = 
        TraceEvent.V8.Runtime_Runtime_NewClosure_Tenured.X;
    
      type Runtime_Runtime_NewClosure = 
        TraceEvent.V8.Runtime_Runtime_NewClosure.X;
    
      type Runtime_Runtime_NewObject = 
        TraceEvent.V8.Runtime_Runtime_NewObject.X;
    
      type Runtime_Runtime_NewScriptContext = 
        TraceEvent.V8.Runtime_Runtime_NewScriptContext.X;
    
      type Runtime_Runtime_NotifyDeoptimized = 
        TraceEvent.V8.Runtime_Runtime_NotifyDeoptimized.X;
    
      type Runtime_Runtime_NumberToString = 
        TraceEvent.V8.Runtime_Runtime_NumberToString.X;
    
      type Runtime_Runtime_ObjectCreate = 
        TraceEvent.V8.Runtime_Runtime_ObjectCreate.X;
    
      type Runtime_Runtime_ObjectEntries = 
        TraceEvent.V8.Runtime_Runtime_ObjectEntries.X;
    
      type Runtime_Runtime_ObjectGetOwnPropertyNames = 
        TraceEvent.V8.Runtime_Runtime_ObjectGetOwnPropertyNames.X;
    
      type Runtime_Runtime_ObjectHasOwnProperty = 
        TraceEvent.V8.Runtime_Runtime_ObjectHasOwnProperty.X;
    
      type Runtime_Runtime_ObjectKeys = 
        TraceEvent.V8.Runtime_Runtime_ObjectKeys.X;
    
      type Runtime_Runtime_OrdinaryHasInstance = 
        TraceEvent.V8.Runtime_Runtime_OrdinaryHasInstance.X;
    
      type Runtime_Runtime_PrepareElementsForSort = 
        TraceEvent.V8.Runtime_Runtime_PrepareElementsForSort.X;
    
      type Runtime_Runtime_PushBlockContext = 
        TraceEvent.V8.Runtime_Runtime_PushBlockContext.X;
    
      type Runtime_Runtime_PushCatchContext = 
        TraceEvent.V8.Runtime_Runtime_PushCatchContext.X;
    
      type Runtime_Runtime_PushWithContext = 
        TraceEvent.V8.Runtime_Runtime_PushWithContext.X;
    
      type Runtime_Runtime_RegExpExec = 
        TraceEvent.V8.Runtime_Runtime_RegExpExec.X;
    
      type Runtime_Runtime_RegExpExecMultiple = 
        TraceEvent.V8.Runtime_Runtime_RegExpExecMultiple.X;
    
      type Runtime_Runtime_RegExpInitializeAndCompile = 
        TraceEvent.V8.Runtime_Runtime_RegExpInitializeAndCompile.X;
    
      type Runtime_Runtime_RegExpReplace = 
        TraceEvent.V8.Runtime_Runtime_RegExpReplace.X;
    
      type Runtime_Runtime_ResolvePossiblyDirectEval = 
        TraceEvent.V8.Runtime_Runtime_ResolvePossiblyDirectEval.X;
    
      type Runtime_Runtime_RunMicrotaskCallback = 
        TraceEvent.V8.Runtime_Runtime_RunMicrotaskCallback.X;
    
      type Runtime_Runtime_SetGrow = 
        TraceEvent.V8.Runtime_Runtime_SetGrow.X;
    
      type Runtime_Runtime_SetKeyedProperty = 
        TraceEvent.V8.Runtime_Runtime_SetKeyedProperty.X;
    
      type Runtime_Runtime_SetNamedProperty = 
        TraceEvent.V8.Runtime_Runtime_SetNamedProperty.X;
    
      type Runtime_Runtime_ShrinkPropertyDictionary = 
        TraceEvent.V8.Runtime_Runtime_ShrinkPropertyDictionary.X;
    
      type Runtime_Runtime_StackGuard = 
        TraceEvent.V8.Runtime_Runtime_StackGuard.X;
    
      type Runtime_Runtime_StoreCallbackProperty = 
        TraceEvent.V8.Runtime_Runtime_StoreCallbackProperty.X;
    
      type Runtime_Runtime_StoreGlobalIC_Miss = 
        TraceEvent.V8.Runtime_Runtime_StoreGlobalIC_Miss.X;
    
      type Runtime_Runtime_StoreGlobalIC_Slow = 
        TraceEvent.V8.Runtime_Runtime_StoreGlobalIC_Slow.X;
    
      type Runtime_Runtime_StoreIC_Miss = 
        TraceEvent.V8.Runtime_Runtime_StoreIC_Miss.X;
    
      type Runtime_Runtime_StoreInArrayLiteralIC_Miss = 
        TraceEvent.V8.Runtime_Runtime_StoreInArrayLiteralIC_Miss.X;
    
      type Runtime_Runtime_StoreLookupSlot_Sloppy = 
        TraceEvent.V8.Runtime_Runtime_StoreLookupSlot_Sloppy.X;
    
      type Runtime_Runtime_StoreLookupSlot_Strict = 
        TraceEvent.V8.Runtime_Runtime_StoreLookupSlot_Strict.X;
    
      type Runtime_Runtime_StringAdd = 
        TraceEvent.V8.Runtime_Runtime_StringAdd.X;
    
      type Runtime_Runtime_StringBuilderConcat = 
        TraceEvent.V8.Runtime_Runtime_StringBuilderConcat.X;
    
      type Runtime_Runtime_StringCharCodeAt = 
        TraceEvent.V8.Runtime_Runtime_StringCharCodeAt.X;
    
      type Runtime_Runtime_StringEqual = 
        TraceEvent.V8.Runtime_Runtime_StringEqual.X;
    
      type Runtime_Runtime_StringIncludes = 
        TraceEvent.V8.Runtime_Runtime_StringIncludes.X;
    
      type Runtime_Runtime_StringIndexOfUnchecked = 
        TraceEvent.V8.Runtime_Runtime_StringIndexOfUnchecked.X;
    
      type Runtime_Runtime_StringLessThan = 
        TraceEvent.V8.Runtime_Runtime_StringLessThan.X;
    
      type Runtime_Runtime_StringParseFloat = 
        TraceEvent.V8.Runtime_Runtime_StringParseFloat.X;
    
      type Runtime_Runtime_StringParseInt = 
        TraceEvent.V8.Runtime_Runtime_StringParseInt.X;
    
      type Runtime_Runtime_StringSplit = 
        TraceEvent.V8.Runtime_Runtime_StringSplit.X;
    
      type Runtime_Runtime_StringSubstring = 
        TraceEvent.V8.Runtime_Runtime_StringSubstring.X;
    
      type Runtime_Runtime_StringToArray = 
        TraceEvent.V8.Runtime_Runtime_StringToArray.X;
    
      type Runtime_Runtime_StringToLowerCaseIntl = 
        TraceEvent.V8.Runtime_Runtime_StringToLowerCaseIntl.X;
    
      type Runtime_Runtime_StringToNumber = 
        TraceEvent.V8.Runtime_Runtime_StringToNumber.X;
    
      type Runtime_Runtime_Throw = 
        TraceEvent.V8.Runtime_Runtime_Throw.X;
    
      type Runtime_Runtime_ThrowCalledNonCallable = 
        TraceEvent.V8.Runtime_Runtime_ThrowCalledNonCallable.X;
    
      type Runtime_Runtime_ThrowConstructedNonConstructable = 
        TraceEvent.V8.Runtime_Runtime_ThrowConstructedNonConstructable.X;
    
      type Runtime_Runtime_ToString = 
        TraceEvent.V8.Runtime_Runtime_ToString.X;
    
      type Runtime_Runtime_TransitionElementsKind = 
        TraceEvent.V8.Runtime_Runtime_TransitionElementsKind.X;
    
      type Runtime_Runtime_UnwindAndFindExceptionHandler = 
        TraceEvent.V8.Runtime_Runtime_UnwindAndFindExceptionHandler.X;
    
      type RuntimeStats = 
        TraceEvent.V8.RuntimeStats.I;
    
      type ScriptCompiler = 
        TraceEvent.V8.ScriptCompiler.B |
        TraceEvent.V8.ScriptCompiler.E;
    
      type StackGuard = 
        TraceEvent.V8.StackGuard.X;
    
      type Task = 
        TraceEvent.V8.Task.B |
        TraceEvent.V8.Task.E;
    
      namespace Builtin_ArrayConcat {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_ArrayConcat';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_ArrayPop {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_ArrayPop';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_ArrayPush {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_ArrayPush';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_ArrayShift {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_ArrayShift';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_ArrayUnshift {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_ArrayUnshift';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_BooleanConstructor {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_BooleanConstructor';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_ConsoleLog {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_ConsoleLog';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_ConsoleWarn {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_ConsoleWarn';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_DateConstructor {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_DateConstructor';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_DateNow {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_DateNow';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_DatePrototypeSetTime {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_DatePrototypeSetTime';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_DatePrototypeToUTCString {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_DatePrototypeToUTCString';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_ErrorConstructor {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_ErrorConstructor';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_FunctionConstructor {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_FunctionConstructor';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_FunctionPrototypeBind {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_FunctionPrototypeBind';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_FunctionPrototypeToString {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_FunctionPrototypeToString';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_GlobalDecodeURI {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_GlobalDecodeURI';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_GlobalDecodeURIComponent {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_GlobalDecodeURIComponent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_GlobalEncodeURIComponent {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_GlobalEncodeURIComponent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_GlobalEval {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_GlobalEval';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_HandleApiCall {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_HandleApiCall';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_JsonParse {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_JsonParse';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_JsonStringify {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_JsonStringify';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_MapPrototypeClear {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_MapPrototypeClear';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_NumberPrototypeToFixed {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_NumberPrototypeToFixed';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_NumberPrototypeToString {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_NumberPrototypeToString';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_ObjectDefineGetter {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_ObjectDefineGetter';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_ObjectDefineProperties {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_ObjectDefineProperties';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_ObjectDefineProperty {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_ObjectDefineProperty';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_ObjectFreeze {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_ObjectFreeze';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_ObjectGetPrototypeOf {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_ObjectGetPrototypeOf';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_ObjectLookupGetter {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_ObjectLookupGetter';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_ObjectPrototypeGetProto {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_ObjectPrototypeGetProto';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_ObjectPrototypePropertyIsEnumerable {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_ObjectPrototypePropertyIsEnumerable';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_ObjectPrototypeSetProto {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_ObjectPrototypeSetProto';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_ObjectSetPrototypeOf {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_ObjectSetPrototypeOf';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_RegExpPrototypeToString {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_RegExpPrototypeToString';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_SetPrototypeClear {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_SetPrototypeClear';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_StringPrototypeEndsWith {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_StringPrototypeEndsWith';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_StringPrototypeLastIndexOf {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_StringPrototypeLastIndexOf';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_StringPrototypeStartsWith {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_StringPrototypeStartsWith';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Builtin_StringPrototypeToUpperCaseIntl {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Builtin_StringPrototypeToUpperCaseIntl';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace CallFunction {
        interface X extends Base {
          args: {
          
          };
          dur?: number;
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
    
      namespace CompileCode {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.CompileCode';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace CompileCodeBackground {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.CompileCodeBackground';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace CompileEval {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.CompileEval';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace CompileIgnition {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.CompileIgnition';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace CompileIgnitionFinalization {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.CompileIgnitionFinalization';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace CompileScript {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.CompileScript';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace CompileStreamedScript {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.CompileStreamedScript';
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
    
      namespace ExternalCallback {
        interface B extends Base {
          args: {
          
          };
          name: 'V8.ExternalCallback';
          ph: 'B';
          tts: number;
        }
      
        interface E extends Base {
          args: {
          
          };
          name: 'V8.ExternalCallback';
          ph: 'E';
          tts: number;
        }
      }
    
      namespace GC_BACKGROUND_ARRAY_BUFFER_FREE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_BACKGROUND_ARRAY_BUFFER_FREE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_BACKGROUND_STORE_BUFFER {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_BACKGROUND_STORE_BUFFER';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_BACKGROUND_UNMAPPER {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_BACKGROUND_UNMAPPER';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_HEAP_EMBEDDER_TRACING_EPILOGUE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_HEAP_EMBEDDER_TRACING_EPILOGUE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_HEAP_EPILOGUE_REDUCE_NEW_SPACE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_HEAP_EPILOGUE_REDUCE_NEW_SPACE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_HEAP_EPILOGUE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_HEAP_EPILOGUE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_HEAP_EXTERNAL_EPILOGUE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_HEAP_EXTERNAL_EPILOGUE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_HEAP_EXTERNAL_PROLOGUE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_HEAP_EXTERNAL_PROLOGUE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_HEAP_EXTERNAL_WEAK_GLOBAL_HANDLES {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_HEAP_EXTERNAL_WEAK_GLOBAL_HANDLES';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_HEAP_PROLOGUE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_HEAP_PROLOGUE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_BACKGROUND_EVACUATE_COPY {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_BACKGROUND_EVACUATE_COPY';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_BACKGROUND_MARKING {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_BACKGROUND_MARKING';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_BACKGROUND_SWEEPING {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_BACKGROUND_SWEEPING';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_CLEAR_FLUSHABLE_BYTECODE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_CLEAR_FLUSHABLE_BYTECODE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_CLEAR_FLUSHED_JS_FUNCTIONS {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_CLEAR_FLUSHED_JS_FUNCTIONS';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_CLEAR_MAPS {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_CLEAR_MAPS';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_CLEAR_STRING_TABLE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_CLEAR_STRING_TABLE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_CLEAR_WEAK_COLLECTIONS {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_CLEAR_WEAK_COLLECTIONS';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_CLEAR_WEAK_LISTS {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_CLEAR_WEAK_LISTS';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_CLEAR_WEAK_REFERENCES {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_CLEAR_WEAK_REFERENCES';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_CLEAR {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_CLEAR';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_EPILOGUE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_EPILOGUE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_EVACUATE_CLEAN_UP {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_EVACUATE_CLEAN_UP';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_EVACUATE_COPY {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_EVACUATE_COPY';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_EVACUATE_EPILOGUE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_EVACUATE_EPILOGUE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_EVACUATE_PROLOGUE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_EVACUATE_PROLOGUE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_EVACUATE_REBALANCE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_EVACUATE_REBALANCE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAP_SPACE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAP_SPACE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_EVACUATE_UPDATE_POINTERS_WEAK {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_EVACUATE_UPDATE_POINTERS_WEAK';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_EVACUATE_UPDATE_POINTERS {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_EVACUATE_UPDATE_POINTERS';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_EVACUATE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_EVACUATE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_FINISH {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_FINISH';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_INCREMENTAL_EMBEDDER_PROLOGUE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_INCREMENTAL_EMBEDDER_PROLOGUE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_INCREMENTAL_EMBEDDER_TRACING {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_INCREMENTAL_EMBEDDER_TRACING';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_INCREMENTAL_EXTERNAL_EPILOGUE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_INCREMENTAL_EXTERNAL_EPILOGUE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_INCREMENTAL_EXTERNAL_PROLOGUE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_INCREMENTAL_EXTERNAL_PROLOGUE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_INCREMENTAL_FINALIZE_BODY {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_INCREMENTAL_FINALIZE_BODY';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_INCREMENTAL_FINALIZE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_INCREMENTAL_FINALIZE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_INCREMENTAL_LAYOUT_CHANGE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_INCREMENTAL_LAYOUT_CHANGE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_INCREMENTAL_START {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_INCREMENTAL_START';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_INCREMENTAL_SWEEPING {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_INCREMENTAL_SWEEPING';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_INCREMENTAL {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_INCREMENTAL';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_MARK_EMBEDDER_TRACING_CLOSURE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_MARK_EMBEDDER_TRACING_CLOSURE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_MARK_EMBEDDER_TRACING {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_MARK_EMBEDDER_TRACING';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_MARK_FINISH_INCREMENTAL {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_MARK_FINISH_INCREMENTAL';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_MARK_MAIN {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_MARK_MAIN';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_MARK_ROOTS {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_MARK_ROOTS';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_MARK_WEAK_CLOSURE_EPHEMERON_MARKING {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_MARK_WEAK_CLOSURE_EPHEMERON_MARKING';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_MARK_WEAK_CLOSURE_EPHEMERON {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_MARK_WEAK_CLOSURE_EPHEMERON';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_MARK_WEAK_CLOSURE_HARMONY {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_MARK_WEAK_CLOSURE_HARMONY';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_MARK_WEAK_CLOSURE_WEAK_HANDLES {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_MARK_WEAK_CLOSURE_WEAK_HANDLES';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_MARK_WEAK_CLOSURE_WEAK_ROOTS {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_MARK_WEAK_CLOSURE_WEAK_ROOTS';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_MARK_WEAK_CLOSURE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_MARK_WEAK_CLOSURE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_MARK {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_MARK';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_PROLOGUE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_PROLOGUE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_MC_SWEEP {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_MC_SWEEP';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_Objects_Stats {
        interface I extends Base {
          args: {
            dead: string;
            live: string;
          };
          name: 'V8.GC_Objects_Stats';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      namespace GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_SCAVENGER_PROCESS_ARRAY_BUFFERS {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_SCAVENGER_PROCESS_ARRAY_BUFFERS';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_SCAVENGER_SCAVENGE_FINALIZE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_SCAVENGER_SCAVENGE_FINALIZE';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_SCAVENGER_SCAVENGE_PARALLEL {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_SCAVENGER_SCAVENGE_PARALLEL';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_SCAVENGER_SCAVENGE_ROOTS {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_SCAVENGER_SCAVENGE_ROOTS';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_SCAVENGER_SCAVENGE_UPDATE_REFS {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_SCAVENGER_SCAVENGE_UPDATE_REFS';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_IDENTIFY {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_IDENTIFY';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_PROCESS {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_PROCESS';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GC_SCAVENGER_SCAVENGE {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GC_SCAVENGER_SCAVENGE';
          ph: 'X';
          tdur: number;
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
    
      namespace GCFinalizeMC {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GCFinalizeMC';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GCFinalizeMCReduceMemory {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GCFinalizeMCReduceMemory';
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
    
      namespace GCIncrementalMarking {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GCIncrementalMarking';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GCIncrementalMarkingFinalize {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GCIncrementalMarkingFinalize';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GCIncrementalMarkingLayoutChange {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GCIncrementalMarkingLayoutChange';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GCIncrementalMarkingStart {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.GCIncrementalMarkingStart';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace GCMarkCompactorMarkingSummary {
        interface I extends Base {
          args: {
            background_duration: number;
            duration: number;
          };
          name: 'V8.GCMarkCompactorMarkingSummary';
          ph: 'I';
          s: string;
          tts: number;
        }
      }
    
      namespace GCMarkCompactorSummary {
        interface I extends Base {
          args: {
            background_duration: number;
            duration: number;
          };
          name: 'V8.GCMarkCompactorSummary';
          ph: 'I';
          s: string;
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
    
      namespace ICStats {
        interface I extends Base {
          args: {
            'ic-stats': {
              data: {
                dict: number;
                functionName: string;
                instanceType: string;
                lineNum: number;
                map: string;
                offset: number;
                own: number;
                scriptName: string;
                state: string;
                type: string;
              }[];
            };
          };
          name: 'V8.ICStats';
          ph: 'I';
          s: string;
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
              API_Context_New?: {
              
              }[];
              API_FunctionTemplate_New?: {
              
              }[];
              API_ObjectTemplate_New?: {
              
              }[];
              API_Object_SetPrivate?: {
              
              }[];
              API_Persistent_New?: {
              
              }[];
              API_String_NewFromUtf8?: {
              
              }[];
              API_String_WriteUtf8?: {
              
              }[];
              AccessorGetterCallback?: {
              
              }[];
              AllocateInNewSpace?: {
              
              }[];
              CompileAnalyse?: {
              
              }[];
              CompileFunction?: {
              
              }[];
              CompileIgnition?: {
              
              }[];
              CompileIgnitionFinalization?: {
              
              }[];
              CompileLazy?: {
              
              }[];
              CompileRewriteReturnResult?: {
              
              }[];
              CompileScopeAnalysis?: {
              
              }[];
              CompileScript?: {
              
              }[];
              CreateArrayLiteralWithoutAllocationSite?: {
              
              }[];
              CreateObjectLiteralWithoutAllocationSite?: {
              
              }[];
              DeclareGlobals?: {
              
              }[];
              DeserializeContext?: {
              
              }[];
              FunctionCallback?: {
              
              }[];
              FunctionPrototypeGetter?: {
              
              }[];
              GC_Custom_SlowAllocateRaw?: {
              
              }[];
              Genesis?: {
              
              }[];
              HandleApiCall?: {
              
              }[];
              Invoke?: {
              
              }[];
              InvokeApiInterruptCallbacks?: {
              
              }[];
              JS_Execution?: {
              
              }[];
              KeyedStoreIC_Miss?: {
              
              }[];
              KeyedStoreIC_Slow?: {
              
              }[];
              KeyedStoreIC_StoreFastElementStub?: {
              
              }[];
              LoadGlobalIC_Miss?: {
              
              }[];
              LoadIC_FunctionPrototypeStub?: {
              
              }[];
              LoadIC_LoadConstantDH?: {
              
              }[];
              LoadIC_LoadConstantFromPrototypeDH?: {
              
              }[];
              LoadIC_LoadNativeDataPropertyDH?: {
              
              }[];
              LoadIC_LoadNonexistentDH?: {
              
              }[];
              LoadIC_Premonomorphic?: {
              
              }[];
              Map_SetPrototype?: {
              
              }[];
              Map_TransitionToDataProperty?: {
              
              }[];
              NewClosure?: {
              
              }[];
              NewClosure_Tenured?: {
              
              }[];
              ParseFunction?: {
              
              }[];
              ParseFunctionLiteral?: {
              
              }[];
              ParseProgram?: {
              
              }[];
              PreParseWithVariableResolution?: {
              
              }[];
              PrototypeMap_TransitionToAccessorProperty?: {
              
              }[];
              PrototypeMap_TransitionToDataProperty?: {
              
              }[];
              SetKeyedProperty?: {
              
              }[];
              SetNamedProperty?: {
              
              }[];
              StackGuard?: {
              
              }[];
              StoreGlobalIC_Miss?: {
              
              }[];
              StoreIC_Miss?: {
              
              }[];
              StoreIC_Premonomorphic?: {
              
              }[];
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
    
      namespace OptimizeCode {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.OptimizeCode';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ParseFunction {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.ParseFunction';
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
          bind_id?: string;
          dur?: number;
          flow_in?: boolean;
          flow_out?: boolean;
          id?: string;
          name: 'v8.parseOnBackground';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ParseProgram {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.ParseProgram';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace PreParse {
        interface X extends Base {
          args: {
          
          };
          dur?: number;
          name: 'V8.PreParse';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RecompileConcurrent {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.RecompileConcurrent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RecompileSynchronous {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.RecompileSynchronous';
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
    
      namespace Runtime_Runtime_AddDictionaryProperty {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_AddDictionaryProperty';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_AllocateInNewSpace {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_AllocateInNewSpace';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_AllocateInTargetSpace {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_AllocateInTargetSpace';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_AllocateSeqTwoByteString {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_AllocateSeqTwoByteString';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_ArrayIndexOf {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_ArrayIndexOf';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_ArraySpeciesConstructor {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_ArraySpeciesConstructor';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_CompileLazy {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_CompileLazy';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_CompileOptimized_Concurrent {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_CompileOptimized_Concurrent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_CompleteInobjectSlackTrackingForMap {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_CompleteInobjectSlackTrackingForMap';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_CreateArrayLiteral {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_CreateArrayLiteral';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_CreateArrayLiteralWithoutAllocationSite {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_CreateArrayLiteralWithoutAllocationSite';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_CreateDataProperty {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_CreateDataProperty';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_CreateJSGeneratorObject {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_CreateJSGeneratorObject';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_CreateListFromArrayLike {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_CreateListFromArrayLike';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_CreateObjectLiteral {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_CreateObjectLiteral';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_CreateObjectLiteralWithoutAllocationSite {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_CreateObjectLiteralWithoutAllocationSite';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_CreateRegExpLiteral {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_CreateRegExpLiteral';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_DateCurrentTime {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_DateCurrentTime';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_DeclareEvalFunction {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_DeclareEvalFunction';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_DeclareGlobals {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_DeclareGlobals';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_DefineAccessorPropertyUnchecked {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_DefineAccessorPropertyUnchecked';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_DefineClass {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_DefineClass';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_DefineDataPropertyInLiteral {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_DefineDataPropertyInLiteral';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_DeleteProperty {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_DeleteProperty';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_ElementsTransitionAndStoreIC_Miss {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_ElementsTransitionAndStoreIC_Miss';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_ForInEnumerate {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_ForInEnumerate';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_GetOwnPropertyDescriptor {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_GetOwnPropertyDescriptor';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_GetProperty {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_GetProperty';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_HasInPrototypeChain {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_HasInPrototypeChain';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_HasProperty {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_HasProperty';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_Interrupt {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_Interrupt';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_KeyedLoadIC_Miss {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_KeyedLoadIC_Miss';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_KeyedStoreIC_Miss {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_KeyedStoreIC_Miss';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_KeyedStoreIC_Slow {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_KeyedStoreIC_Slow';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_LoadAccessorProperty {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_LoadAccessorProperty';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_LoadCallbackProperty {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_LoadCallbackProperty';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_LoadElementWithInterceptor {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_LoadElementWithInterceptor';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_LoadGlobalIC_Miss {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_LoadGlobalIC_Miss';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_LoadGlobalIC_Slow {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_LoadGlobalIC_Slow';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_LoadIC_Miss {
        interface X extends Base {
          args: {
          
          };
          dur?: number;
          name: 'V8.Runtime_Runtime_LoadIC_Miss';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_LoadLookupSlot {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_LoadLookupSlot';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_LoadLookupSlotForCall {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_LoadLookupSlotForCall';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_LoadLookupSlotInsideTypeof {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_LoadLookupSlotInsideTypeof';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_LoadPropertyWithInterceptor {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_LoadPropertyWithInterceptor';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_MapGrow {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_MapGrow';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_MapShrink {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_MapShrink';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_NewArray {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_NewArray';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_NewClosure_Tenured {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_NewClosure_Tenured';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_NewClosure {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_NewClosure';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_NewObject {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_NewObject';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_NewScriptContext {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_NewScriptContext';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_NotifyDeoptimized {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_NotifyDeoptimized';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_NumberToString {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_NumberToString';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_ObjectCreate {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_ObjectCreate';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_ObjectEntries {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_ObjectEntries';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_ObjectGetOwnPropertyNames {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_ObjectGetOwnPropertyNames';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_ObjectHasOwnProperty {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_ObjectHasOwnProperty';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_ObjectKeys {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_ObjectKeys';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_OrdinaryHasInstance {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_OrdinaryHasInstance';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_PrepareElementsForSort {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_PrepareElementsForSort';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_PushBlockContext {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_PushBlockContext';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_PushCatchContext {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_PushCatchContext';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_PushWithContext {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_PushWithContext';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_RegExpExec {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_RegExpExec';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_RegExpExecMultiple {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_RegExpExecMultiple';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_RegExpInitializeAndCompile {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_RegExpInitializeAndCompile';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_RegExpReplace {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_RegExpReplace';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_ResolvePossiblyDirectEval {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_ResolvePossiblyDirectEval';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_RunMicrotaskCallback {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_RunMicrotaskCallback';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_SetGrow {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_SetGrow';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_SetKeyedProperty {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_SetKeyedProperty';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_SetNamedProperty {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_SetNamedProperty';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_ShrinkPropertyDictionary {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_ShrinkPropertyDictionary';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StackGuard {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StackGuard';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StoreCallbackProperty {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StoreCallbackProperty';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StoreGlobalIC_Miss {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StoreGlobalIC_Miss';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StoreGlobalIC_Slow {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StoreGlobalIC_Slow';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StoreIC_Miss {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StoreIC_Miss';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StoreInArrayLiteralIC_Miss {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StoreInArrayLiteralIC_Miss';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StoreLookupSlot_Sloppy {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StoreLookupSlot_Sloppy';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StoreLookupSlot_Strict {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StoreLookupSlot_Strict';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StringAdd {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StringAdd';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StringBuilderConcat {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StringBuilderConcat';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StringCharCodeAt {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StringCharCodeAt';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StringEqual {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StringEqual';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StringIncludes {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StringIncludes';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StringIndexOfUnchecked {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StringIndexOfUnchecked';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StringLessThan {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StringLessThan';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StringParseFloat {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StringParseFloat';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StringParseInt {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StringParseInt';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StringSplit {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StringSplit';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StringSubstring {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StringSubstring';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StringToArray {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StringToArray';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StringToLowerCaseIntl {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StringToLowerCaseIntl';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_StringToNumber {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_StringToNumber';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_Throw {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_Throw';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_ThrowCalledNonCallable {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_ThrowCalledNonCallable';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_ThrowConstructedNonConstructable {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_ThrowConstructedNonConstructable';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_ToString {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_ToString';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_TransitionElementsKind {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_TransitionElementsKind';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Runtime_Runtime_UnwindAndFindExceptionHandler {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'V8.Runtime_Runtime_UnwindAndFindExceptionHandler';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace RuntimeStats {
        interface I extends Base {
          args: {
            'runtime-call-stats': {
              CompileBackgroundAnalyse?: {
              
              }[];
              CompileBackgroundCompileTask?: {
              
              }[];
              CompileBackgroundIgnition?: {
              
              }[];
              CompileBackgroundRewriteReturnResult?: {
              
              }[];
              CompileBackgroundScopeAnalysis?: {
              
              }[];
              CompileBackgroundScript?: {
              
              }[];
              GetMoreDataCallback?: {
              
              }[];
              ParseBackgroundFunctionLiteral?: {
              
              }[];
              ParseBackgroundProgram?: {
              
              }[];
              PreParseBackgroundWithVariableResolution?: {
              
              }[];
              RecompileConcurrent?: {
              
              }[];
            };
          };
          name: 'V8.RuntimeStats';
          ph: 'I';
          s: string;
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
            'runtime-call-stats'?: {
              API_ScriptCompiler_CompileUnbound?: {
              
              }[];
              CompileAnalyse?: {
              
              }[];
              CompileIgnition?: {
              
              }[];
              CompileIgnitionFinalization?: {
              
              }[];
              CompileRewriteReturnResult?: {
              
              }[];
              CompileScopeAnalysis?: {
              
              }[];
              CompileScript?: {
              
              }[];
              GC_Custom_SlowAllocateRaw?: {
              
              }[];
              ParseArrowFunctionLiteral?: {
              
              }[];
              ParseFunctionLiteral?: {
              
              }[];
              ParseProgram?: {
              
              }[];
              PreParseArrowFunctionLiteral?: {
              
              }[];
              PreParseWithVariableResolution?: {
              
              }[];
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
              GCEpilogueCallback?: {
              
              }[];
              GCPrologueCallback?: {
              
              }[];
              GC_BACKGROUND_ARRAY_BUFFER_FREE?: {
              
              }[];
              GC_BACKGROUND_STORE_BUFFER?: {
              
              }[];
              GC_BACKGROUND_UNMAPPER?: {
              
              }[];
              GC_HEAP_EMBEDDER_TRACING_EPILOGUE?: {
              
              }[];
              GC_HEAP_EPILOGUE?: {
              
              }[];
              GC_HEAP_EPILOGUE_REDUCE_NEW_SPACE?: {
              
              }[];
              GC_HEAP_EXTERNAL_EPILOGUE?: {
              
              }[];
              GC_HEAP_EXTERNAL_PROLOGUE?: {
              
              }[];
              GC_HEAP_EXTERNAL_WEAK_GLOBAL_HANDLES?: {
              
              }[];
              GC_HEAP_PROLOGUE?: {
              
              }[];
              GC_MC_BACKGROUND_EVACUATE_COPY?: {
              
              }[];
              GC_MC_BACKGROUND_EVACUATE_UPDATE_POINTERS?: {
              
              }[];
              GC_MC_BACKGROUND_MARKING?: {
              
              }[];
              GC_MC_BACKGROUND_SWEEPING?: {
              
              }[];
              GC_MC_CLEAR?: {
              
              }[];
              GC_MC_CLEAR_FLUSHABLE_BYTECODE?: {
              
              }[];
              GC_MC_CLEAR_FLUSHED_JS_FUNCTIONS?: {
              
              }[];
              GC_MC_CLEAR_MAPS?: {
              
              }[];
              GC_MC_CLEAR_STRING_TABLE?: {
              
              }[];
              GC_MC_CLEAR_WEAK_COLLECTIONS?: {
              
              }[];
              GC_MC_CLEAR_WEAK_LISTS?: {
              
              }[];
              GC_MC_CLEAR_WEAK_REFERENCES?: {
              
              }[];
              GC_MC_EPILOGUE?: {
              
              }[];
              GC_MC_EVACUATE?: {
              
              }[];
              GC_MC_EVACUATE_CLEAN_UP?: {
              
              }[];
              GC_MC_EVACUATE_COPY?: {
              
              }[];
              GC_MC_EVACUATE_EPILOGUE?: {
              
              }[];
              GC_MC_EVACUATE_PROLOGUE?: {
              
              }[];
              GC_MC_EVACUATE_REBALANCE?: {
              
              }[];
              GC_MC_EVACUATE_UPDATE_POINTERS?: {
              
              }[];
              GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAIN?: {
              
              }[];
              GC_MC_EVACUATE_UPDATE_POINTERS_SLOTS_MAP_SPACE?: {
              
              }[];
              GC_MC_EVACUATE_UPDATE_POINTERS_TO_NEW_ROOTS?: {
              
              }[];
              GC_MC_EVACUATE_UPDATE_POINTERS_WEAK?: {
              
              }[];
              GC_MC_FINISH?: {
              
              }[];
              GC_MC_INCREMENTAL?: {
              
              }[];
              GC_MC_INCREMENTAL_EMBEDDER_PROLOGUE?: {
              
              }[];
              GC_MC_INCREMENTAL_EMBEDDER_TRACING?: {
              
              }[];
              GC_MC_INCREMENTAL_EXTERNAL_EPILOGUE?: {
              
              }[];
              GC_MC_INCREMENTAL_EXTERNAL_PROLOGUE?: {
              
              }[];
              GC_MC_INCREMENTAL_FINALIZE?: {
              
              }[];
              GC_MC_INCREMENTAL_FINALIZE_BODY?: {
              
              }[];
              GC_MC_INCREMENTAL_SWEEPING?: {
              
              }[];
              GC_MC_MARK?: {
              
              }[];
              GC_MC_MARK_EMBEDDER_TRACING?: {
              
              }[];
              GC_MC_MARK_EMBEDDER_TRACING_CLOSURE?: {
              
              }[];
              GC_MC_MARK_FINISH_INCREMENTAL?: {
              
              }[];
              GC_MC_MARK_MAIN?: {
              
              }[];
              GC_MC_MARK_ROOTS?: {
              
              }[];
              GC_MC_MARK_WEAK_CLOSURE?: {
              
              }[];
              GC_MC_MARK_WEAK_CLOSURE_EPHEMERON?: {
              
              }[];
              GC_MC_MARK_WEAK_CLOSURE_EPHEMERON_MARKING?: {
              
              }[];
              GC_MC_MARK_WEAK_CLOSURE_HARMONY?: {
              
              }[];
              GC_MC_MARK_WEAK_CLOSURE_WEAK_HANDLES?: {
              
              }[];
              GC_MC_MARK_WEAK_CLOSURE_WEAK_ROOTS?: {
              
              }[];
              GC_MC_PROLOGUE?: {
              
              }[];
              GC_MC_SWEEP?: {
              
              }[];
              GC_MC_SWEEP_CODE?: {
              
              }[];
              GC_MC_SWEEP_MAP?: {
              
              }[];
              GC_MC_SWEEP_OLD?: {
              
              }[];
              GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL?: {
              
              }[];
              GC_SCAVENGER_PROCESS_ARRAY_BUFFERS?: {
              
              }[];
              GC_SCAVENGER_SCAVENGE?: {
              
              }[];
              GC_SCAVENGER_SCAVENGE_FINALIZE?: {
              
              }[];
              GC_SCAVENGER_SCAVENGE_PARALLEL?: {
              
              }[];
              GC_SCAVENGER_SCAVENGE_ROOTS?: {
              
              }[];
              GC_SCAVENGER_SCAVENGE_UPDATE_REFS?: {
              
              }[];
              GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_IDENTIFY?: {
              
              }[];
              GC_SCAVENGER_SCAVENGE_WEAK_GLOBAL_HANDLES_PROCESS?: {
              
              }[];
            };
          };
          name: 'V8.Task';
          ph: 'E';
          tts: number;
        }
      }
    }
  
    namespace V8ContextSnapshot {
      type InstallRuntimeEnabled = 
        TraceEvent.V8ContextSnapshot.InstallRuntimeEnabled.X;
    
      namespace InstallRuntimeEnabled {
        interface X extends Base {
          args: {
            IsMainFrame: boolean;
          };
          dur: number;
          name: 'V8ContextSnapshot::InstallRuntimeEnabled';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace VerifiedRulesetDealer {
      type GetRuleset = 
        TraceEvent.VerifiedRulesetDealer.GetRuleset.X;
    
      namespace GetRuleset {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'VerifiedRulesetDealer::GetRuleset';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace View {
      type Layout = 
        TraceEvent.View.Layout.X;
    
      type Layoutbounds_changed = 
        TraceEvent.View.Layoutbounds_changed.X;
    
      type Layoutset_bounds = 
        TraceEvent.View.Layoutset_bounds.X;
    
      type OnPaint = 
        TraceEvent.View.OnPaint.X;
    
      type OnPaintBackground = 
        TraceEvent.View.OnPaintBackground.X;
    
      type OnPaintBorder = 
        TraceEvent.View.OnPaintBorder.X;
    
      type Paint = 
        TraceEvent.View.Paint.X;
    
      type PaintChildren = 
        TraceEvent.View.PaintChildren.X;
    
      namespace Layout {
        interface X extends Base {
          args: {
            class: string;
          };
          dur: number;
          name: 'View::Layout';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Layoutbounds_changed {
        interface X extends Base {
          args: {
            class: string;
          };
          dur: number;
          name: 'View::Layout(bounds_changed)';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Layoutset_bounds {
        interface X extends Base {
          args: {
            class: string;
          };
          dur: number;
          name: 'View::Layout(set_bounds)';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnPaint {
        interface X extends Base {
          args: {
            class: string;
          };
          dur: number;
          name: 'View::OnPaint';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnPaintBackground {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'View::OnPaintBackground';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace OnPaintBorder {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'View::OnPaintBorder';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace Paint {
        interface X extends Base {
          args: {
            class: string;
          };
          dur: number;
          name: 'View::Paint';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace PaintChildren {
        interface X extends Base {
          args: {
            class: string;
          };
          dur: number;
          name: 'View::PaintChildren';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ViewHostMsg_DidContentsPreferredSizeChange {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ViewHostMsg_DidContentsPreferredSizeChange';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ViewHostMsg_DocumentAvailableInMainFrame {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ViewHostMsg_DocumentAvailableInMainFrame';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ViewHostMsg_UpdateZoomLimits {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ViewHostMsg_UpdateZoomLimits';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ViewMsg_EnablePreferredSizeChangedMode {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'ViewMsg_EnablePreferredSizeChangedMode';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace VirtualboolGrRenderTargetOpList {
      type OnExecuteGrOpFlushState = 
        TraceEvent.VirtualboolGrRenderTargetOpList.OnExecuteGrOpFlushState.X;
    
      namespace OnExecuteGrOpFlushState {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'virtual bool GrRenderTargetOpList::onExecute(GrOpFlushState *)';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace VirtualGrOp {
      namespace CombineResultnamespace {
        namespace FillRectOp {
          type OnCombineIfPossibleGrOpGrCaps = 
            TraceEvent.VirtualGrOp.CombineResultnamespace.FillRectOp.OnCombineIfPossibleGrOpGrCaps.X;
        
          namespace OnCombineIfPossibleGrOpGrCaps {
            interface X extends Base {
              args: {
              
              };
              dur: number;
              name: 'virtual GrOp::CombineResult (anonymous namespace)::FillRectOp::onCombineIfPossible(GrOp *, const GrCaps &)';
              ph: 'X';
              tdur: number;
              tts: number;
            }
          }
        }
      
        namespace TextureOp {
          type OnCombineIfPossibleGrOpGrCaps = 
            TraceEvent.VirtualGrOp.CombineResultnamespace.TextureOp.OnCombineIfPossibleGrOpGrCaps.X;
        
          namespace OnCombineIfPossibleGrOpGrCaps {
            interface X extends Base {
              args: {
              
              };
              dur: number;
              name: 'virtual GrOp::CombineResult (anonymous namespace)::TextureOp::onCombineIfPossible(GrOp *, const GrCaps &)';
              ph: 'X';
              tdur: number;
              tts: number;
            }
          }
        }
      }
    }
  
    namespace Virtualnamespace {
      namespace FillRectOp {
        namespace OnPrepareDrawsGrMeshDrawOp {
          type Target = 
            TraceEvent.Virtualnamespace.FillRectOp.OnPrepareDrawsGrMeshDrawOp.Target.X;
        
          namespace Target {
            interface X extends Base {
              args: {
              
              };
              dur: number;
              name: 'virtual void (anonymous namespace)::FillRectOp::onPrepareDraws(GrMeshDrawOp::Target *)';
              ph: 'X';
              tdur: number;
              tts: number;
            }
          }
        }
      }
    
      namespace TextureOp {
        namespace OnPrepareDrawsGrMeshDrawOp {
          type Target = 
            TraceEvent.Virtualnamespace.TextureOp.OnPrepareDrawsGrMeshDrawOp.Target.X;
        
          namespace Target {
            interface X extends Base {
              args: {
              
              };
              dur: number;
              name: 'virtual void (anonymous namespace)::TextureOp::onPrepareDraws(GrMeshDrawOp::Target *)';
              ph: 'X';
              tdur: number;
              tts: number;
            }
          }
        }
      }
    }
  
    namespace VisibleUnits {
      type CanonicalPosition = 
        TraceEvent.VisibleUnits.CanonicalPosition.X;
    
      type MostBackwardCaretPosition = 
        TraceEvent.VisibleUnits.MostBackwardCaretPosition.X;
    
      type MostForwardCaretPosition = 
        TraceEvent.VisibleUnits.MostForwardCaretPosition.X;
    
      namespace CanonicalPosition {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'VisibleUnits::canonicalPosition';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace MostBackwardCaretPosition {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'VisibleUnits::mostBackwardCaretPosition';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace MostForwardCaretPosition {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'VisibleUnits::mostForwardCaretPosition';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Visitedlink {
      namespace Mojom {
        type VisitedLinkNotificationSink = 
          TraceEvent.Visitedlink.Mojom.VisitedLinkNotificationSink.X;
      
        namespace VisitedLinkNotificationSink {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'visitedlink.mojom.VisitedLinkNotificationSink';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace VisuallyComplete100 {
      interface b extends Base {
        args: {
        
        };
        id: string;
        name: 'Visually Complete 100%';
        ph: 'b';
      }
    
      interface e extends Base {
        args: {
        
        };
        id: string;
        name: 'Visually Complete 100%';
        ph: 'e';
      }
    }
  
    namespace VisualViewport {
      type MainFrameDidChangeSize = 
        TraceEvent.VisualViewport.MainFrameDidChangeSize.X;
    
      type SetSize = 
        TraceEvent.VisualViewport.SetSize.X;
    
      namespace MainFrameDidChangeSize {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'VisualViewport::mainFrameDidChangeSize';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetSize {
        interface X extends Base {
          args: {
            height: number;
            width: number;
          };
          dur: number;
          name: 'VisualViewport::setSize';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Viz {
      type BeginFrameArgs = 
        TraceEvent.Viz.BeginFrameArgs.s;
    
      type SharedQuadState = 
        TraceEvent.Viz.SharedQuadState.D;
    
      namespace BeginFrameArgs {
        interface s extends Base {
          args: {
          
          };
          id: string;
          name: 'viz::BeginFrameArgs';
          ph: 's';
          tts: number;
        }
      }
    
      namespace Mojom {
        type CompositingModeReporter = 
          TraceEvent.Viz.Mojom.CompositingModeReporter.X;
      
        type CompositorFrameSink = 
          TraceEvent.Viz.Mojom.CompositorFrameSink.X;
      
        type CompositorFrameSinkClient = 
          TraceEvent.Viz.Mojom.CompositorFrameSinkClient.X;
      
        type DisplayClient = 
          TraceEvent.Viz.Mojom.DisplayClient.X;
      
        type FrameSinkManager = 
          TraceEvent.Viz.Mojom.FrameSinkManager.X;
      
        type FrameSinkManagerClient = 
          TraceEvent.Viz.Mojom.FrameSinkManagerClient.X;
      
        type GpuHost = 
          TraceEvent.Viz.Mojom.GpuHost.X;
      
        type GpuService = 
          TraceEvent.Viz.Mojom.GpuService.X;
      
        namespace CompositingModeReporter {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'viz.mojom.CompositingModeReporter';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace CompositorFrameSink {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'viz.mojom.CompositorFrameSink';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace CompositorFrameSinkClient {
          interface X extends Base {
            args: {
            
            };
            dur?: number;
            name: 'viz.mojom.CompositorFrameSinkClient';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace DisplayClient {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'viz.mojom.DisplayClient';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace FrameSinkManager {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'viz.mojom.FrameSinkManager';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace FrameSinkManagerClient {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'viz.mojom.FrameSinkManagerClient';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace GpuHost {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'viz.mojom.GpuHost';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace GpuService {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'viz.mojom.GpuService';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    
      namespace SharedQuadState {
        interface D extends Base {
          args: {
          
          };
          id: string;
          name: 'viz::SharedQuadState';
          ph: 'D';
          tts: number;
        }
      }
    }
  
    namespace WaitingfornextBeginFrame {
      interface I extends Base {
        args: {
        
        };
        name: 'Waiting for next BeginFrame';
        ph: 'I';
        s: string;
        tts: number;
      }
    }
  
    namespace Web_cache {
      namespace Mojom {
        type WebCache = 
          TraceEvent.Web_cache.Mojom.WebCache.X;
      
        namespace WebCache {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'web_cache.mojom.WebCache';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace WebContentsImpl {
      type CreateRenderFrameForRenderManager = 
        TraceEvent.WebContentsImpl.CreateRenderFrameForRenderManager.X;
    
      type CreateRenderViewForRenderManager = 
        TraceEvent.WebContentsImpl.CreateRenderViewForRenderManager.X;
    
      type CreateWithOpener = 
        TraceEvent.WebContentsImpl.CreateWithOpener.X;
    
      type DidFinishNavigation = 
        TraceEvent.WebContentsImpl.DidFinishNavigation.X;
    
      type DidStartNavigation = 
        TraceEvent.WebContentsImpl.DidStartNavigation.X;
    
      type ReadyToCommitNavigation = 
        TraceEvent.WebContentsImpl.ReadyToCommitNavigation.X;
    
      namespace CreateRenderFrameForRenderManager {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'WebContentsImpl::CreateRenderFrameForRenderManager';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace CreateRenderViewForRenderManager {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'WebContentsImpl::CreateRenderViewForRenderManager';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace CreateWithOpener {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'WebContentsImpl::CreateWithOpener';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidFinishNavigation {
        interface X extends Base {
          args: {
            navigation_handle: string;
          };
          dur: number;
          name: 'WebContentsImpl::DidFinishNavigation';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace DidStartNavigation {
        interface X extends Base {
          args: {
            navigation_handle: string;
          };
          dur: number;
          name: 'WebContentsImpl::DidStartNavigation';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace ReadyToCommitNavigation {
        interface X extends Base {
          args: {
            navigation_handle: string;
          };
          dur: number;
          name: 'WebContentsImpl::ReadyToCommitNavigation';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace WebContentsImplLoading {
      interface F extends Base {
        args: {
          URL: string;
        };
        id: string;
        name: 'WebContentsImpl Loading';
        ph: 'F';
        tts: number;
      }
    
      interface S extends Base {
        args: {
          'Main FrameTreeNode id': number;
          URL: string;
        };
        id: string;
        name: 'WebContentsImpl Loading';
        ph: 'S';
        tts: number;
      }
    }
  
    namespace WebFrameWidgetImpl {
      type BeginFrame = 
        TraceEvent.WebFrameWidgetImpl.BeginFrame.X;
    
      type UpdateAllLifecyclePhases = 
        TraceEvent.WebFrameWidgetImpl.UpdateAllLifecyclePhases.X;
    
      namespace BeginFrame {
        interface X extends Base {
          args: {
            frameTime: number;
          };
          dur: number;
          name: 'WebFrameWidgetImpl::beginFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UpdateAllLifecyclePhases {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'WebFrameWidgetImpl::updateAllLifecyclePhases';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace WebLocalFrameImpl {
      type CreateChildframe = 
        TraceEvent.WebLocalFrameImpl.CreateChildframe.X;
    
      type CreateFrameView = 
        TraceEvent.WebLocalFrameImpl.CreateFrameView.X;
    
      namespace CreateChildframe {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'WebLocalFrameImpl::createChildframe';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace CreateFrameView {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'WebLocalFrameImpl::createFrameView';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace WebScopedVirtualTimePauser {
      type PauseVirtualTime = 
        TraceEvent.WebScopedVirtualTimePauser.PauseVirtualTime.b |
        TraceEvent.WebScopedVirtualTimePauser.PauseVirtualTime.e;
    
      namespace PauseVirtualTime {
        interface b extends Base {
          args: {
            name: string;
          };
          id: string;
          name: 'WebScopedVirtualTimePauser::PauseVirtualTime';
          ph: 'b';
          tts: number;
        }
      
        interface e extends Base {
          args: {
          
          };
          id: string;
          name: 'WebScopedVirtualTimePauser::PauseVirtualTime';
          ph: 'e';
          tts: number;
        }
      }
    }
  
    namespace WebURLLoaderImpl {
      type LoadAsynchronously = 
        TraceEvent.WebURLLoaderImpl.LoadAsynchronously.X;
    
      namespace Context {
        type Cancel = 
          TraceEvent.WebURLLoaderImpl.Context.Cancel.X;
      
        type OnCompletedRequest = 
          TraceEvent.WebURLLoaderImpl.Context.OnCompletedRequest.X;
      
        type OnReceivedData = 
          TraceEvent.WebURLLoaderImpl.Context.OnReceivedData.X;
      
        type OnReceivedRedirect = 
          TraceEvent.WebURLLoaderImpl.Context.OnReceivedRedirect.X;
      
        type OnReceivedResponse = 
          TraceEvent.WebURLLoaderImpl.Context.OnReceivedResponse.X;
      
        type Start = 
          TraceEvent.WebURLLoaderImpl.Context.Start.X;
      
        namespace Cancel {
          interface X extends Base {
            args: {
            
            };
            bind_id: string;
            dur: number;
            flow_in: boolean;
            id: string;
            name: 'WebURLLoaderImpl::Context::Cancel';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace OnCompletedRequest {
          interface X extends Base {
            args: {
            
            };
            bind_id: string;
            dur: number;
            flow_in: boolean;
            id: string;
            name: 'WebURLLoaderImpl::Context::OnCompletedRequest';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace OnReceivedData {
          interface X extends Base {
            args: {
            
            };
            bind_id: string;
            dur: number;
            flow_in: boolean;
            flow_out: boolean;
            id: string;
            name: 'WebURLLoaderImpl::Context::OnReceivedData';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace OnReceivedRedirect {
          interface X extends Base {
            args: {
            
            };
            bind_id: string;
            dur: number;
            flow_in: boolean;
            flow_out: boolean;
            id: string;
            name: 'WebURLLoaderImpl::Context::OnReceivedRedirect';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace OnReceivedResponse {
          interface X extends Base {
            args: {
            
            };
            bind_id: string;
            dur: number;
            flow_in: boolean;
            flow_out: boolean;
            id: string;
            name: 'WebURLLoaderImpl::Context::OnReceivedResponse';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      
        namespace Start {
          interface X extends Base {
            args: {
            
            };
            bind_id: string;
            dur: number;
            flow_out: boolean;
            id: string;
            name: 'WebURLLoaderImpl::Context::Start';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    
      namespace LoadAsynchronously {
        interface X extends Base {
          args: {
          
          };
          bind_id: string;
          dur: number;
          flow_out: boolean;
          id: string;
          name: 'WebURLLoaderImpl::loadAsynchronously';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace WebViewImpl {
      type BeginFrame = 
        TraceEvent.WebViewImpl.BeginFrame.X;
    
      type HandleInputEvent = 
        TraceEvent.WebViewImpl.HandleInputEvent.X;
    
      type HandleKeyEvent = 
        TraceEvent.WebViewImpl.HandleKeyEvent.X;
    
      type SetIsAcceleratedCompositingActivetrue = 
        TraceEvent.WebViewImpl.SetIsAcceleratedCompositingActivetrue.X;
    
      type UpdateAllLifecyclePhases = 
        TraceEvent.WebViewImpl.UpdateAllLifecyclePhases.X;
    
      namespace BeginFrame {
        interface X extends Base {
          args: {
            frameTime: number;
          };
          dur: number;
          name: 'WebViewImpl::beginFrame';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace HandleInputEvent {
        interface X extends Base {
          args: {
            type: string;
          };
          dur: number;
          name: 'WebViewImpl::handleInputEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace HandleKeyEvent {
        interface X extends Base {
          args: {
            text: string;
            type: string;
          };
          dur: number;
          name: 'WebViewImpl::handleKeyEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace SetIsAcceleratedCompositingActivetrue {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'WebViewImpl::setIsAcceleratedCompositingActive(true)';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    
      namespace UpdateAllLifecyclePhases {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'WebViewImpl::updateAllLifecyclePhases';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace Widget {
      type Init = 
        TraceEvent.Widget.Init.X;
    
      namespace Init {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'Widget::Init';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace WidgetHostMsg_Close_ACK {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'WidgetHostMsg_Close_ACK';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace WidgetHostMsg_DidCommitAndDrawCompositorFrame {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'WidgetHostMsg_DidCommitAndDrawCompositorFrame';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace WidgetHostMsg_DidFirstVisuallyNonEmptyPaint {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'WidgetHostMsg_DidFirstVisuallyNonEmptyPaint';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace WidgetHostMsg_FrameSwapMessages {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'WidgetHostMsg_FrameSwapMessages';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace WidgetHostMsg_HasTouchEventHandlers {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'WidgetHostMsg_HasTouchEventHandlers';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace WidgetHostMsg_SelectionBoundsChanged {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'WidgetHostMsg_SelectionBoundsChanged';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace WidgetHostMsg_TextInputStateChanged {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'WidgetHostMsg_TextInputStateChanged';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace WidgetHostMsg_UpdateScreenRects_ACK {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'WidgetHostMsg_UpdateScreenRects_ACK';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace WidgetInputHandlerImpl {
      type DispatchEvent = 
        TraceEvent.WidgetInputHandlerImpl.DispatchEvent.X;
    
      namespace DispatchEvent {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'WidgetInputHandlerImpl::DispatchEvent';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace WidgetMsg_SetActive {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'WidgetMsg_SetActive';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace WidgetMsg_SetInheritedEffectiveTouchAction {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'WidgetMsg_SetInheritedEffectiveTouchAction';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace WidgetMsg_SetIsInert {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'WidgetMsg_SetIsInert';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace WidgetMsg_SetViewportIntersection {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'WidgetMsg_SetViewportIntersection';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace WidgetMsg_SynchronizeVisualProperties {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'WidgetMsg_SynchronizeVisualProperties';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace WidgetMsg_UpdateRenderThrottlingStatus {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'WidgetMsg_UpdateRenderThrottlingStatus';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace WidgetMsg_UpdateScreenRects {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'WidgetMsg_UpdateScreenRects';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace WidgetMsg_WasHidden {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'WidgetMsg_WasHidden';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace WidgetMsg_WasShown {
      interface X extends Base {
        args: {
        
        };
        dur: number;
        name: 'WidgetMsg_WasShown';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace WriteTransaction {
      interface B extends Base {
        args: {
          src_file: string;
          src_func: string;
        };
        name: 'WriteTransaction';
        ph: 'B';
        tts: number;
      }
    
      interface E extends Base {
        args: {
        
        };
        name: 'WriteTransaction';
        ph: 'E';
        tts: number;
      }
    }
  
    namespace Ws {
      namespace Mojom {
        type Gpu = 
          TraceEvent.Ws.Mojom.Gpu.X;
      
        namespace Gpu {
          interface X extends Base {
            args: {
            
            };
            dur: number;
            name: 'ws.mojom.Gpu';
            ph: 'X';
            tdur: number;
            tts: number;
          }
        }
      }
    }
  
    namespace X509Certificate {
      type CreateFromDERCertChain = 
        TraceEvent.X509Certificate.CreateFromDERCertChain.X;
    
      namespace CreateFromDERCertChain {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'X509Certificate::CreateFromDERCertChain';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace XHRLoad {
      interface X extends Base {
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
  
    namespace YieldParserForScriptBlockingResources {
      interface X extends Base {
        args: {
          data: {
            columnNumber: number;
            frame: string;
            lineNumber: number;
          };
        };
        bind_id: string;
        dur: number;
        flow_out: boolean;
        id: string;
        name: 'YieldParserForScriptBlockingResources';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace YieldParserForScriptLoad {
      interface X extends Base {
        args: {
          data: {
            frame: string;
            url: string;
          };
        };
        bind_id: string;
        dur: number;
        flow_out: boolean;
        id: string;
        name: 'YieldParserForScriptLoad';
        ph: 'X';
        tdur: number;
        tts: number;
      }
    }
  
    namespace ZeroSuggestProvider {
      type Start = 
        TraceEvent.ZeroSuggestProvider.Start.X;
    
      namespace Start {
        interface X extends Base {
          args: {
          
          };
          dur: number;
          name: 'ZeroSuggestProvider::Start';
          ph: 'X';
          tdur: number;
          tts: number;
        }
      }
    }
  
    namespace ZonesAndDomReady {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'zonesAndDomReady';
        ph: 'R';
        tts: number;
      }
    }
  
    namespace ZonesReady {
      interface R extends Base {
        args: {
          data: {
            navigationId: string;
          };
        };
        name: 'zonesReady';
        ph: 'R';
        tts: number;
      }
    }
  }
}
