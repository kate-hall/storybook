// this file is generated by generate-exports-file.ts
// this is done to prevent runtime dependencies from making it's way into the build/start script of the manager
// the manager builder needs to know which dependencies are 'globalized' in the ui

export default {
  '@storybook/channel-postmessage': [
    'KEY',
    'PostMessageTransport',
    'PostmsgTransport',
    'createChannel',
  ],
  '@storybook/channel-websocket': ['WebsocketTransport', 'createChannel'],
  '@storybook/channels': [
    'Channel',
    'PostMessageTransport',
    'WebsocketTransport',
    'createBrowserChannel',
    'createPostMessageChannel',
    'createWebSocketChannel',
  ],
  '@storybook/client-logger': ['deprecate', 'logger', 'once', 'pretty'],
  '@storybook/core-events': [
    'CHANNEL_CREATED',
    'CONFIG_ERROR',
    'CURRENT_STORY_WAS_SET',
    'DOCS_PREPARED',
    'DOCS_RENDERED',
    'FORCE_REMOUNT',
    'FORCE_RE_RENDER',
    'GLOBALS_UPDATED',
    'IGNORED_EXCEPTION',
    'NAVIGATE_URL',
    'PLAY_FUNCTION_THREW_EXCEPTION',
    'PRELOAD_ENTRIES',
    'PREVIEW_BUILDER_PROGRESS',
    'PREVIEW_KEYDOWN',
    'REGISTER_SUBSCRIPTION',
    'REQUEST_WHATS_NEW_DATA',
    'RESET_STORY_ARGS',
    'RESULT_WHATS_NEW_DATA',
    'SELECT_STORY',
    'SET_CONFIG',
    'SET_CURRENT_STORY',
    'SET_GLOBALS',
    'SET_INDEX',
    'SET_STORIES',
    'SET_WHATS_NEW_CACHE',
    'SHARED_STATE_CHANGED',
    'SHARED_STATE_SET',
    'STORIES_COLLAPSE_ALL',
    'STORIES_EXPAND_ALL',
    'STORY_ARGS_UPDATED',
    'STORY_CHANGED',
    'STORY_ERRORED',
    'STORY_INDEX_INVALIDATED',
    'STORY_MISSING',
    'STORY_PREPARED',
    'STORY_RENDERED',
    'STORY_RENDER_PHASE_CHANGED',
    'STORY_SPECIFIED',
    'STORY_THREW_EXCEPTION',
    'STORY_UNCHANGED',
    'TELEMETRY_ERROR',
    'TOGGLE_WHATS_NEW_NOTIFICATIONS',
    'UPDATE_GLOBALS',
    'UPDATE_QUERY_PARAMS',
    'UPDATE_STORY_ARGS',
  ],
  '@storybook/preview-api': [
    'ClientApi',
    'DocsContext',
    'HooksContext',
    'Preview',
    'PreviewWeb',
    'StoryStore',
    'addArgTypes',
    'addArgTypesEnhancer',
    'addArgs',
    'addArgsEnhancer',
    'addDecorator',
    'addLoader',
    'addParameters',
    'addStepRunner',
    'addons',
    'applyHooks',
    'combineArgs',
    'combineParameters',
    'composeConfigs',
    'composeStepRunners',
    'composeStories',
    'composeStory',
    'decorateStory',
    'defaultDecorateStory',
    'filterArgTypes',
    'getQueryParam',
    'getQueryParams',
    'inferControls',
    'makeDecorator',
    'mockChannel',
    'normalizeStory',
    'prepareMeta',
    'prepareStory',
    'sanitizeStoryContextUpdate',
    'setGlobalRender',
    'setProjectAnnotations',
    'simulateDOMContentLoaded',
    'simulatePageLoad',
    'sortStoriesV7',
    'start',
    'useArgs',
    'useCallback',
    'useChannel',
    'useEffect',
    'useGlobals',
    'useMemo',
    'useParameter',
    'useReducer',
    'useRef',
    'useState',
    'useStoryContext',
    'userOrAutoTitle',
    'userOrAutoTitleFromSpecifier',
  ],
  '@storybook/global': ['global'],
  '@storybook/addons': [
    'AddonStore',
    'HooksContext',
    'addons',
    'applyHooks',
    'makeDecorator',
    'mockChannel',
    'useArgs',
    'useCallback',
    'useChannel',
    'useEffect',
    'useGlobals',
    'useMemo',
    'useParameter',
    'useReducer',
    'useRef',
    'useState',
    'useStoryContext',
  ],
  '@storybook/client-api': [
    'ClientApi',
    'DEEPLY_EQUAL',
    'HooksContext',
    'StoryStore',
    'UNTARGETED',
    'addArgTypes',
    'addArgTypesEnhancer',
    'addArgs',
    'addArgsEnhancer',
    'addDecorator',
    'addLoader',
    'addParameters',
    'addStepRunner',
    'applyHooks',
    'combineArgs',
    'combineParameters',
    'composeConfigs',
    'composeStepRunners',
    'composeStories',
    'composeStory',
    'decorateStory',
    'deepDiff',
    'defaultDecorateStory',
    'filterArgTypes',
    'getArrayField',
    'getField',
    'getObjectField',
    'getQueryParam',
    'getQueryParams',
    'getSingletonField',
    'getValuesFromArgTypes',
    'groupArgsByTarget',
    'inferControls',
    'mapArgsToTypes',
    'noTargetArgs',
    'normalizeComponentAnnotations',
    'normalizeInputType',
    'normalizeInputTypes',
    'normalizeProjectAnnotations',
    'normalizeStory',
    'prepareContext',
    'prepareMeta',
    'prepareStory',
    'processCSFFile',
    'sanitizeStoryContextUpdate',
    'setGlobalRender',
    'setProjectAnnotations',
    'sortStoriesV6',
    'sortStoriesV7',
    'useAddonState',
    'useArgs',
    'useCallback',
    'useChannel',
    'useEffect',
    'useGlobals',
    'useMemo',
    'useParameter',
    'useReducer',
    'useRef',
    'useSharedState',
    'useState',
    'useStoryContext',
    'userOrAutoTitle',
    'userOrAutoTitleFromSpecifier',
    'validateOptions',
  ],
  '@storybook/core-client': ['ClientApi', 'StoryStore', 'start'],
  '@storybook/preview-web': [
    'DocsContext',
    'Preview',
    'PreviewWeb',
    'PreviewWithSelection',
    'composeConfigs',
    'simulateDOMContentLoaded',
    'simulatePageLoad',
  ],
  '@storybook/store': [
    'DEEPLY_EQUAL',
    'HooksContext',
    'StoryStore',
    'UNTARGETED',
    'applyHooks',
    'combineArgs',
    'combineParameters',
    'composeConfigs',
    'composeStepRunners',
    'composeStories',
    'composeStory',
    'decorateStory',
    'deepDiff',
    'defaultDecorateStory',
    'filterArgTypes',
    'getArrayField',
    'getField',
    'getObjectField',
    'getSingletonField',
    'getValuesFromArgTypes',
    'groupArgsByTarget',
    'inferControls',
    'mapArgsToTypes',
    'noTargetArgs',
    'normalizeComponentAnnotations',
    'normalizeInputType',
    'normalizeInputTypes',
    'normalizeProjectAnnotations',
    'normalizeStory',
    'prepareContext',
    'prepareMeta',
    'prepareStory',
    'processCSFFile',
    'sanitizeStoryContextUpdate',
    'setProjectAnnotations',
    'sortStoriesV6',
    'sortStoriesV7',
    'useAddonState',
    'useArgs',
    'useCallback',
    'useChannel',
    'useEffect',
    'useGlobals',
    'useMemo',
    'useParameter',
    'useReducer',
    'useRef',
    'useSharedState',
    'useState',
    'useStoryContext',
    'userOrAutoTitle',
    'userOrAutoTitleFromSpecifier',
    'validateOptions',
  ],
} as const;
